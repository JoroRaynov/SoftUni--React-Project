
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../Hooks/Form/useForm';
import { Link } from 'react-router-dom';
import styles from './Login.module.css'
import { useState, useEffect } from 'react';

export const Login = () => {
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        rePass: false,
    });
    const { onLoginSubmit, serverErrors } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: ''
    }, onLoginSubmit);




    const errorsModifier = (e) => {
        changeHandler(e);
        setErrors(state => ({ ...state, [e.target.name]: false })); //, ["serverError"]: false

    };


    const onBlurHandler = (e) => {

        if (e.target.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!e.target.value.match(emailRegex) || e.target.value === '') {
                setErrors(state => ({ ...state, [e.target.name]: true }));
            }
        } else if (e.target.name === 'password' &&
            (e.target.value.length < 6 || e.target.value.length > 20)) {
            setErrors(state => ({ ...state, [e.target.name]: true }));
        }

    }

    return (
        <section className={styles["formWrapper"]}>
            <form onSubmit={onSubmit} className={styles["form"]}>
                <div className={styles["title"]}>Добре дошли!</div>
                <div className={styles["subtitle"]}>Логнете се във вашия акаунт</div>
                <div className={`${styles["input-container"]} ${styles.ic1}`}>
                    <input
                        id="email"
                        className={styles["input"]}
                        name="email"
                        type="email"
                        // onFocus={onFocused}
                        onChange={errorsModifier}
                        value={values.email}
                        onBlur={onBlurHandler}
                        placeholder=""
                    />
                    {errors.email && <p className="formError" >Please enter a Valid Email</p>}
                    <div className={styles["cut"]} />
                    <label htmlFor="firstname" className={styles["placeholder"]}>
                        Твоят имейл
                    </label>
                </div>
                <div className={`${styles["input-container"]} ${styles.ic2}`}>

                    <input
                        id="password"
                        className={styles["input"]}
                        name="password"
                        type="password"
                        // onFocus={onFocused}
                        onChange={errorsModifier}
                        value={values.password}
                        onBlur={onBlurHandler}
                        placeholder=" "
                    />

                    {/* {errors.password && } */}
                    {(errors.password && values.password === '') ? <p className="formError">Please fill the password field</p> : ''}
                    {(values.password.length < 6 || values.password.length > 20) && values.password !== '' ? <p className="formError">Password must be between 6 and 20 characters</p> : ''}

                    <div className={styles["cut"]} />
                    <label htmlFor="password" className={styles["placeholder"]}>
                        Парола
                    </label>
                </div>

                <input type="submit" className={styles["submit"]} value="Влез" />

                {serverErrors.length > 0 && <p className="serverErrors" >{serverErrors.split(",").join('')}</p>}
                <Link to={"/auth/register"} className={styles["notRegistered"]}>Все още нямате регистрация ?</Link>

            </form>
        </section>
    );
}