import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";

function Register({
    handleRegister,
    isFailuredRegister
},

) {
    console.log('isFailuredRegister', isFailuredRegister)
    const [name, setName] = React.useState("Виталий");
    const [email, setEmail] = React.useState("test@test.ru");
    const [password, setPassword] = React.useState("test");

    function handleNameChange(e) {
        setName(e.target.value)
    }

    function handleEmailChange(e) {
        setEmail(e.target.value)
    }
    function handlePasswordChange(e) {
        setPassword(e.target.value)
    }

    // function onRegister(e) {
    function onRegister(e) {
        e.preventDefault();
        handleRegister(name, email, password)
    }
    return (
        <div className="register__window">
            <section className="register__content">
                <h3 className="register__title">Добро пожаловать!</h3>
                <form
                    className="form"
                    onSubmit={onRegister}
                >
                    <span className="register__userdata register__username-position">Имя</span>
                    <input
                        className="form__input_register register__userdata-value"
                        type="text"
                        name="register__username"
                        minLength="2"
                        maxLength="30"
                        required
                        onChange={handleNameChange}
                    />
                    <span className="register__userdata register__useremail-position">E-mail</span>
                    <input
                        className="form__input_register register__userdata-value"
                        // type="email"
                        name="register__useremail"
                        required
                        onChange={handleEmailChange}
                    />
                    <span className="register__userdata register__password-position">Пароль</span>
                    <input
                        className="form__input_register register__userdata-value"
                        type="password"
                        name="register__password"
                        required
                        onChange={handlePasswordChange}
                    />
                    <span
                        className={`${isFailuredRegister ? "register__error" : "register__error_hidden"}`}
                    >
                        Что-то пошло не так, попробуйте еще раз
                    </span>
                    <button
                        className="register__save-button"
                        type="submit"
                    >
                        <span className="register__save-button-text">
                            Зарегистрироваться
                        </span>
                    </button>
                    <p className="register__login-option">
                        {`Уже зарегистрированы? `}
                        <Link className="register__login-option register__login-option_link" to="/signin">Войти</Link>
                    </p>
                </form>
            </section>
        </div>
    )
}

export default Register;