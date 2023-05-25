import './Register.css';
import { useState } from 'react';


import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../Hooks/Form/useForm';
import { Link } from 'react-router-dom';

export const Register = () => {
    const [errors, setErrors] = useState({});

    const { onRegisterSubmit, serverErrors } = useAuthContext({});


    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        location: '',
        tel: '',
        password: '',
        rePass: '',
    }, onRegisterSubmit);


    const lengthErrorHandler = (e, bound) => {
        if (e.target.value === '') {
            return;
        }
        setErrors(state => ({
            ...state,
            [e.target.name]: values[e.target.name].length < bound ? true : false
        }));

        // if (e.target.name === 'email') {
        //     const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        //     if (!e.target.value.match(emailRegex)) {
        //         setErrors(state => ({ ...state, [e.target.name]: true }));
        //     }

        // } else if (e.target.name === 'location' && e.target.value === '') {
        //     setErrors(state => ({ ...state, [e.target.name]: true }))

        // } else if (e.target.name === 'tel' && e.target.value === '') {
        //     setErrors(state => ({ ...state, [e.target.name]: true }))
        // } else if (e.target.name === 'password' &&
        //     (e.target.value.length < 6 || e.target.value.length > 20)) {
        //     setErrors(state => ({ ...state, [e.target.name]: true }));
        // } else if (e.target.name === 'rePass' && e.target.value !== values.password) {
        //     setErrors(state => ({ ...state, [e.target.name]: true }))
        // }

    };

    const emailMatch = (e) => {
        if (e.target.value === '') {
            return;
        }
        const emailRegex = /^[a-zA-Z0-9._%+-]{2,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

        setErrors(state => ({ ...state, [e.target.name]: values[e.target.name].match(emailRegex) ? false : true }));
    }


    const passwordsMatchErrorHandler = (e) => {
        setErrors(state => ({ ...state, [e.target.name]: values[e.target.name] === values.password ? false : true }))
    }


    const isFormValid = !Object.values(values).some(x => x);

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
                        onChange={changeHandler}
                        onBlur={emailMatch}
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
                        id="location"
                        className="input"
                        name="location"
                        value={values.location}
                        onChange={changeHandler}
                        type="text"
                        placeholder=""
                        onBlur={(e) => lengthErrorHandler(e, 3)}
                    />
                    {errors.location && <p className="formError" >Location must be at least 3 characters long</p>}
                    <div className="cut" />
                    <label htmlFor="location" className="placeholder">
                        Град
                    </label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="tel"
                        className="input"
                        name="tel"
                        value={values.tel}
                        onChange={changeHandler}
                        type="text"
                        placeholder=""
                        onBlur={(e) => lengthErrorHandler(e, 10)}
                    />
                    {errors.tel && <p className="formError" >Incorrect phone number</p>}
                    <div className="cut" />
                    <label htmlFor="tel" className="placeholder">
                        Телефон
                    </label>
                </div>
                <div className="input-container ic2">
                    <input
                        id="password"
                        className="input"
                        name="password"
                        value={values.password}
                        onChange={changeHandler}
                        type="password"
                        placeholder=" "
                        onBlur={(e) => lengthErrorHandler(e, 6)}
                    />
                    {errors.password && <p className="formError">Password must be at least 6 characters long</p>}
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
                        onChange={changeHandler}
                        type="password"
                        placeholder=" "
                        onBlur={(e) => passwordsMatchErrorHandler(e)}
                    />
                    {errors.rePass && <p className="formError">Passwords does not match</p>}
                    <div className="cut cut-short" />
                    <label htmlFor="rePass" className="placeholder">
                        Повтори парола
                    </label>


                </div>
                <button className="submit" disabled={isFormValid}>Регистрирай се</button>
                {serverErrors.length > 0 && <p className="serverErrors" >{serverErrors.split(",").join('')}</p>}

                <Link to={"/auth/login"} className="registered">Имате регистрация ?</Link>
            </form>
        </section>
    );

}