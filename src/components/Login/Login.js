import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { regexEmail } from "../../utils/config"

function Login(
    { handleLogin, isFailuredRegister }
) {
    // console.log('isFailuredLogin', isFailuredRegister)
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isFailuredEmail, setIsFailuredEmail] = React.useState(false);

    function handleEmailChange(e) {
        const emailIsValid = e.target.value.match(regexEmail);
        if (emailIsValid) {
            setEmail(e.target.value);
            setIsFailuredEmail(false);
        } else {
            setIsFailuredEmail(true);
        }
    }

    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function onLogin(e) {
        e.preventDefault();
        handleLogin(email, password);

    }
    return (
        <div className="login__window">
            <section className="login__content">
                <h3 className="login__title">Рады видеть!</h3>
                <form
                    className="form"
                    onSubmit={onLogin}
                >
                    <span className="login__userdata login__useremail-position">E-mail</span>
                    <input
                        className="form__input_login login__userdata-value"
                        type="email"
                        name="login__useremail"
                        required
                        onChange={handleEmailChange}
                    />
                     <span
                        className={`${isFailuredEmail ? "register__error register__error_login" : "register__error_hidden"}`}
                    >
                        Введите корректный е-майл
                    </span>
                    <span className="login__userdata login__password-position">Пароль</span>
                    <input
                        className="form__input_login login__userdata-value"
                        type="password"
                        name="login__password"
                        required
                        onChange={handlePasswordChange}
                    />
                    <span
                        className={`${isFailuredRegister ? "login__error" : "login__error_hidden"}`}
                    >
                        Что-то пошло не так, попробуйте еще раз
                    </span>
                    <button
                        className="login__save-button"
                        type="submit"
                    >
                        <span className="login__save-button-text">
                            Войти
                        </span>
                    </button>
                    <p className="login__register-option">
                        {`Еще не зарегистрированы? `}
                        <Link className="login__register-option login__register-option_link" to="/signup">Регистрация</Link>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default Login;