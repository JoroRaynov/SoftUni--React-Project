import './Register.css';
// import { useContext } from 'react';
// import { AuthContext } from '../../contexts/AuthContext';
// import { useForm } from '../../Hooks/Form/useForm';
import { Link } from 'react-router-dom';

export const Register = () => {

    // const { onRegisterSubmit } = useContext(AuthContext)
    // const [values, setValues] = useForm({
    //     email: '',
    //     password: '',
    //     rePass: ''
    // }, onRegisterSubmit);

    return (
        <section className="formWrapper">
            <div className="registerForm">
                <div className="title">Добре дошли!</div>
                <div className="subtitle">Създайте вашия акаунт!</div>
                <div className="input-container ic1">
                    <input id="email" className="input" type="email" placeholder="" />
                    <div className="cut" />
                    <label htmlFor="firstname" className="placeholder">
                        Имейл
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="password" className="input" type="text" placeholder=" " />
                    <div className="cut" />
                    <label htmlFor="password" className="placeholder">
                        Парола
                    </label>
                </div>
                <div className="input-container ic2">
                    <input id="rePass" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short" />
                    <label htmlFor="rePass" className="placeholder">
                        Повтори парола
                    </label>
                </div>
                <button type="text" className="submit">
                    submit
                </button>
                <Link to={"/auth/login"} className="registered">Имате регистрация ?</Link>
            </div>
        </section>
    );

}