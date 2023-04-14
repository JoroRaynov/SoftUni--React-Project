import './Register.css';
import { useState, useEffect } from 'react';


import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../Hooks/Form/useForm';
import { Link } from 'react-router-dom';

export const Register = () => {

    const { onRegisterSubmit, serverErrors, resetServerErrors } = useAuthContext({});
    const [errors, setErrors] = useState({
        email: false,
        password: false,
        rePass: false,
    });

    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        rePass: '',
    }, onRegisterSubmit);

    const errorsModifier = (e) => {
        changeHandler(e)
        setErrors(state => ({ ...state, [e.target.name]: false })); //, ["serverError"]: false
    };

    const onBlurHandler = (e) => {
        resetServerErrors([]);
        if (e.target.name === 'email') {
            const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!e.target.value.match(emailRegex)) {
                setErrors(state => ({ ...state, [e.target.name]: true }));
            }

        } else if (e.target.name === 'password' &&
            (e.target.value.length < 6 || e.target.value.length > 20)) {
            setErrors(state => ({ ...state, [e.target.name]: true }));
        } else if (e.target.name === 'rePass' && e.target.value !== values.password) {
            setErrors(state => ({ ...state, [e.target.name]: true }))
        }

    }

    return (
        <section className="formWrapper">
            <form onSubmit={onSubmit} className="registerForm">
                <div className="title">Добре дошли!</div>
                <div className="subtitle">Създайте вашия акаунт!</div>
                <div className="input-container ic1">
                    <input
                        id="email"
                        className="input"
                        name="email"
                        value={values.email}
                        onChange={errorsModifier}
                        onBlur={onBlurHandler}
                        type="email"
                        placeholder="" />
                    {errors.email && <p className="formError" >Not Valid Email</p>}
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Имейл
                    </label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="password"
                        className="input"
                        name="password"
                        value={values.password}
                        onChange={errorsModifier}
                        type="password"
                        placeholder=" "
                        onBlur={onBlurHandler}
                    />
                    {errors.password && <p className="formError">Password must be between 6 and 20 characters long</p>}
                    <div className="cut" />
                    <label htmlFor="password" className="placeholder">
                        Парола
                    </label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="rePass"
                        className="input"
                        name="rePass"
                        value={values.rePass}
                        onChange={errorsModifier}
                        type="password"
                        placeholder=" "
                        onBlur={onBlurHandler}
                    />
                    {errors.rePass && <p className="formError">Passwords does not match</p>}
                    <div className="cut cut-short" />
                    <label htmlFor="rePass" className="placeholder">
                        Повтори парола
                    </label>


                </div>
                <input type="submit" className="submit" value="Регистрирай се" />
                {serverErrors.length > 0 && <p className="serverErrors" >{serverErrors.split(",").join('')}</p>}

                <Link to={"/auth/login"} className="registered">Имате регистрация ?</Link>
            </form>
        </section>
    );

}