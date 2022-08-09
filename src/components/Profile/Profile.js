import React from "react";
import "./Profile.css";
import "../Register/Register.css"
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { regexEmail, regexName } from "../../utils/config"

function Profile(
    { handlePatchUserData,
        setCurrentUser,
        onSignOut
    }
) {
    const currentUser = React.useContext(CurrentUserContext);
    const { name, email } = currentUser;
    const [isFailuredEmail, setIsFailuredEmail] = React.useState(false);
    const [isFailuredName, setIsFailuredName] = React.useState(false);
    const [isUserDataUpdated, setIsUserDataUpdated] = React.useState(false);
    const [updatedName, setUpdatedName] = React.useState(currentUser.name);
    const [updatedEmail, setUpdatedEmail] = React.useState(currentUser.email);


    React.useEffect(() => {
        if (updatedName !== currentUser.name && !isFailuredName) {
            // console.log('updatedName', updatedName)
            // console.log('currentUser.name', currentUser.name)
            // setCurrentUser({ ...currentUser, name: e.target.value });
            setIsUserDataUpdated(true)
        } else {
            setIsUserDataUpdated(false) 
        }
    }, [updatedName]);

    React.useEffect(() => {
        if (updatedEmail !== currentUser.email && !isFailuredEmail) {
            // console.log('updatedName', updatedName)
            // console.log('currentUser.name', currentUser.name)
            // setCurrentUser({ ...currentUser, name: e.target.value });
            setIsUserDataUpdated(true)
        } else {
            setIsUserDataUpdated(false) 
        }
    }, [updatedEmail]);

    // console.log('isUserDataUpdated', isUserDataUpdated);

    function handleNameChange(e) {
        const nameIsValid = e.target.value.match(regexName);
        if (!nameIsValid) {
            setIsFailuredName(true);
            // if (e.target.value !== currentUser.name) {
        } else {
            setIsFailuredName(false);
            setUpdatedName(e.target.value);
        }
        
    }

    // function handleEmailChange(e) {
    //     setCurrentUser({ ...currentUser, email: e.target.value })
    // }

    function handleEmailChange(e) {
        const emailIsValid = e.target.value.match(regexEmail);
        if (!emailIsValid) {
            // setCurrentUser({ ...currentUser, email: e.target.value })
            setIsFailuredEmail(true);
        } else {
            setIsFailuredEmail(false);
            setUpdatedEmail(e.target.value);
        }
    }

    function onPatchUserData(e) {
        e.preventDefault();
        if (!isFailuredName && !isFailuredEmail) {
            // handlePatchUserData(name, email)
            handlePatchUserData(updatedName, updatedEmail)
            setIsUserDataUpdated(false);
        }

    }
    return (
        <div className="profile__window">
            <section className="profile__content">
                <h3 className="profile__title">Привет, {name}!</h3>
                <form
                    className="form"
                    onSubmit={onPatchUserData}
                >
                    <span className="profile__userdata profile__username-position">Имя</span>
                    <input
                        className="form__input profile__userdata"
                        type="text"
                        placeholder={name}
                        name="profile__username"
                        minLength="2"
                        maxLength="30"
                        // required
                        onChange={handleNameChange}
                    // value={nameInInput}
                    />
                    <span
                        className={`${isFailuredName ? "register__error register__error_profile-name" : "register__error_hidden"}`}
                    >
                        Введите корректное имя
                    </span>
                    <span className="profile__userdata profile__useremail-position">E-mail</span>
                    <input
                        className="form__input profile__userdata"
                        type="email"
                        placeholder={email}
                        name="profile__useremail"
                        // required
                        onChange={handleEmailChange}
                    // value=" "
                    />
                    <span
                        className={`${isFailuredEmail ? "register__error register__error_profile-email" : "register__error_hidden"}`}
                    >
                        Введите корректный е-майл
                    </span>
                    {/* <span className="popup__error" id="element__name"></span> */}
                    <button
                        className="profile__save-button"
                        type="submit"
                        disabled={!isUserDataUpdated}
                    >
                        <span className={`"profile__save-button-text" ${isUserDataUpdated ? "profile__save-button-text_enabled" : "profile__save-button-text_disabled"}`}>
                            Сохранить изменения
                        </span>
                    </button>
                    <a
                        className="profile__save-button-text profile__save-button-text_red"
                        href="/#"
                        onClick={onSignOut}
                    >
                        Выйти из аккаунта
                    </a>
                </form>
            </section>
        </div>
    )
}

export default Profile;