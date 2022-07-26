import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login(
    { handleLogin }
) {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");

    function handleEmailChange(e) {
        setEmail(e.target.value);
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value);
    }
    function onLogin(e) {
        e.preventDefault();
        handleLogin(email, password).catch();
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
                    <span className="login__userdata login__password-position">Пароль</span>
                    <input
                        className="form__input_login login__userdata-value"
                        type="password"
                        name="login__password"
                        required
                        onChange={handlePasswordChange}
                    />
                    {/* <span className="login__error" id="login__error">Что-то пошло не так...</span> */}
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