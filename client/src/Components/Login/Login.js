import { Link } from 'react-router-dom';
import styles from './Login.module.css'

export const Login = () => {
    return (
        <section className={styles["formWrapper"]}>
            <div className={styles["form"]}>
                <div className={styles["title"]}>Добре дошли!</div>
                <div className={styles["subtitle"]}>Логнете се във вашия акаунт</div>
                <div className={`${styles["input-container"]} ${styles.ic1}`}>

                    <input id="email" className={styles["input"]} type="email" placeholder="" />
                    <div className={styles["cut"]} />
                    <label htmlFor="firstname" className={styles["placeholder"]}>
                        Твоят имейл
                    </label>
                </div>
                <div className={`${styles["input-container"]} ${styles.ic2}`}
                
                >
                    <input id="password" className={styles["input"]} type="password" placeholder=" " />
                    <div className={styles["cut"]} />
                    <label htmlFor="password" className={styles["placeholder"]}>
                        Парола
                    </label>
                </div>
                {/* <div className="input-container ic2">
                    <input id="rePass" className="input" type="text" placeholder=" " />
                    <div className="cut cut-short" />
                    <label htmlFor="rePass" className="placeholder">
                        Повтори парола
                    </label>
                </div> */}
                <button type="text" className={styles["submit"]}>
                    Влез
                </button>

                <Link to={"/auth/register"} className={styles["notRegistered"]}>Все още нямате регистрация ?</Link>

            </div>
        </section>
    );
}