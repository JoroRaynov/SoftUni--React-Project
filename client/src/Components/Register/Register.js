import './Register.css';
import { useAuthContext } from '../../contexts/AuthContext';
import { useForm } from '../../Hooks/Form/useForm';
import { Link } from 'react-router-dom';

export const Register = () => {

    const { onRegisterSubmit } = useAuthContext();
    const { values, changeHandler, onSubmit } = useForm({
        email: '',
        password: '',
        rePass: '',
    }, onRegisterSubmit);
  
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
                        type="email"
                        placeholder="" />
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
                        onChange={changeHandler}
                        type="password"
                        placeholder=" "
                    />
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
                    />
                    <div className="cut cut-short" />
                    <label htmlFor="rePass" className="placeholder">
                        Повтори парола
                    </label>
                </div>
                <input type="submit" className="submit" value="Регистрирай се"/>

                <Link to={"/auth/login"} className="registered">Имате регистрация ?</Link>
            </form>
        </section>
    );

}