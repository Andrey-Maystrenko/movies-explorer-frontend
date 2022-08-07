import React from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import {regexEmail, regexName}  from "../../utils/config"

function Register({
    handleRegister,
    isFailuredRegister
},

) {
    // console.log('isFailuredRegister', isFailuredRegister)
    const [name, setName] = React.useState("Виталий");
    const [email, setEmail] = React.useState("test@test.ru");
    const [password, setPassword] = React.useState("test");
    const [isFailuredEmail, setIsFailuredEmail] = React.useState(false);
    const [isFailuredName, setIsFailuredName] = React.useState(false);


    // const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // const regexName = /^[A-Za-zА-Яа-я -]+$/;

    // console.log('name', name)
    // console.log('isFailuredName', isFailuredName)

    function handleNameChange(e) {
        const nameIsValid = e.target.value.match(regexName);
        if (nameIsValid) {
            setName(e.target.value)
            setIsFailuredName(false);
        } else {
            setIsFailuredName(true);
        }
    }

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
        setPassword(e.target.value)
    }

    function onRegister(e) {
        e.preventDefault();
        if (!isFailuredName  || !isFailuredEmail) {
            handleRegister(name, email, password)
        }
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
                     <span
                        className={`${isFailuredName ? "register__error register__error_register-name" : "register__error_hidden"}`}
                    >
                        Введите корректное имя
                    </span>
                    <span className="register__userdata register__useremail-position">E-mail</span>
                    <input
                        className="form__input_register register__userdata-value"
                        type="email"
                        name="register__useremail"
                        required
                        onChange={handleEmailChange}
                    // value={}
                    />
                    <span
                        className={`${isFailuredEmail ? "register__error register__error_register-email" : "register__error_hidden"}`}
                    >
                        Введите корректный е-майл
                    </span>
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