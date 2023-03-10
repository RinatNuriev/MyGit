function registration(state) {
    if (state === 'none') {
        document.querySelector('.regModal').innerHTML = ''
        return
    } else {
        document.querySelector('.regModal').innerHTML = `
        <div id="filter" onclick="registration('none')"></div>
        <div class="reg">
            <div class="reg__wrapper">
                <svg onclick="registration('none')" class="reg__close" xmlns="http://www.w3.org/2000/svg" width="12"
                    height="12" viewBox="0 0 9 8">
                    <path d="M8 0.75L1.5 7.25M1.5 0.75L8 7.25" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round" />
                </svg>
                <div class="reg__title">
                    <p class="reg__title-main">Добро пожаловать в<span style="display: block;"> My Home Jungle</span>
                    </p>
                    <p class="reg__title-tagline">Портал для растений и их людей.</p>
                </div>
    
                <form class="reg__form" action="" id="reg" name="reg">
    
                    <div class="form__mail">
                        <label class="mail__label" for="mail__input">Адрес электронной почты</label>
                        <input id="mail__input" type="mail" name="mail__input" placeholder="Адрес электронной почты">
                        <p class="mail_error">Введите корректную почту</p>
                        <svg onclick="clearInput()" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 9 8" fill="none">
                            <path d="M8 0.75L1.5 7.25M1.5 0.75L8 7.25" stroke-width="1.5"
                                stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </div>
    
                    <div class="form__password">
                        <label class="password__label" for="password__input">Пароль</label>
                        <input id="password__input" type="password" name="password__input" placeholder="Создать пароль">
                        <p class="password_error">Заполните все поля</p>
                        <svg onclick="show_hide_password()" xmlns="http://www.w3.org/2000/svg" width="15" height="16" viewBox="0 0 15 16" fill="none">
                            <g clip-path="url(#clip0_2482_2154)">
                                <path
                                    d="M12.6067 10.9344C14.1482 9.55875 15.0001 8 15.0001 8C15.0001 8 12.2814 3.01562 7.75012 3.01562C6.87975 3.01862 6.01923 3.19998 5.22168 3.5485L5.91949 4.24722C6.50623 4.03348 7.12566 3.9234 7.75012 3.92188C9.67137 3.92188 11.2655 4.98037 12.4336 6.14853C12.9958 6.71375 13.4998 7.33402 13.938 8C13.8854 8.07884 13.8274 8.16584 13.7613 8.261C13.4577 8.696 13.0091 9.276 12.4336 9.85147C12.2841 10.001 12.1282 10.1487 11.9651 10.2919L12.6067 10.9344Z"
                                     />
                                <path
                                    d="M10.7378 9.06577C10.94 8.50012 10.9775 7.88868 10.8458 7.30258C10.7141 6.71649 10.4187 6.17984 9.99393 5.75507C9.56917 5.33031 9.03252 5.03489 8.44642 4.90321C7.86032 4.77152 7.24888 4.80897 6.68324 5.0112L7.42908 5.75705C7.77736 5.7072 8.13247 5.73914 8.46626 5.85036C8.80005 5.96157 9.10335 6.14899 9.35213 6.39778C9.60092 6.64656 9.78834 6.94986 9.89955 7.28365C10.0108 7.61744 10.0427 7.97255 9.99286 8.32083L10.7378 9.06577ZM8.07071 10.243L8.81564 10.9879C8.25 11.1902 7.63856 11.2276 7.05246 11.0959C6.46637 10.9642 5.92971 10.6688 5.50495 10.2441C5.08018 9.81929 4.78477 9.28264 4.65308 8.69654C4.5214 8.11045 4.55885 7.499 4.76108 6.93336L5.50693 7.6792C5.45707 8.02748 5.48902 8.38259 5.60024 8.71638C5.71145 9.05017 5.89887 9.35347 6.14765 9.60226C6.39644 9.85104 6.69974 10.0385 7.03353 10.1497C7.36732 10.2609 7.72243 10.2928 8.07071 10.243Z"
                                     />
                                <path
                                    d="M3.53594 5.7072C3.37281 5.8522 3.21603 5.99901 3.0665 6.14854C2.5043 6.71376 2.00032 7.33403 1.56213 8.00001L1.73884 8.26101C2.04244 8.69601 2.49103 9.27601 3.0665 9.85148C4.23466 11.0196 5.82966 12.0781 7.75 12.0781C8.39888 12.0781 9.00969 11.9576 9.58063 11.7519L10.2784 12.4515C9.48088 12.8 8.62037 12.9814 7.75 12.9844C3.21875 12.9844 0.5 8.00001 0.5 8.00001C0.5 8.00001 1.35097 6.44036 2.89341 5.06557L3.53503 5.70811L3.53594 5.7072ZM12.8667 13.7583L1.99169 2.88332L2.63331 2.2417L13.5083 13.1167L12.8667 13.7583Z"
                                     />
                            </g>
                            <defs>
                                <clipPath id="clip0_2482_2154">
                                    <rect width="14.5" height="14.5" fill="white" transform="translate(0.5 0.75)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
    
                    <div class="submit-btn">
                        <button class="form__btn" type="submit">Зарегистрироваться</button>
                    </div>
    
    
                    <p class="form__text-between">или</p>

                    <div class="vk-btn">
                    <button class="reg_btn-vk" onclick="singInVk()">
                        <img src="./img/vk.svg" alt="">
                        Войти с помощью VK</button>
                    </div>
                    
                    <div class="gmail-btn">    
                    <button class="reg_btn-gmail" onclick="singIn()">
                        <img src="./img/gmail.svg" alt="">
                        Войти с помощью Google</button>
                    </div>
                    
                    <p class="form__text-privacy">Продолжая, вы соглашаетесь с положениями основных документов. Это
                        <strong>Пользовательские соглашения</strong> и <strong>Политика конфиденциальности</strong>. А также
                        подтверждаете, что прочли их.
                    </p>
    
                    <p class="form__text-auth">Уже есть аккаунт? <span onclick="switchToAuth()" class="reg-form__goAuth">Войти</span></p>
                </form>
            </div>
        </div>
      `
    }

    document.querySelector('.reg').style.display = state;
    document.getElementById('filter').style.display = state;


    document.querySelector('.reg_btn-gmail').addEventListener('click', (e) => {
        e.preventDefault()
    })

    document.querySelector('.reg_btn-vk').addEventListener('click', (e) => {
        e.preventDefault()
    })


    document.querySelector('.form__btn').addEventListener('click', (e) => {
        e.preventDefault()
        async function sentData() {
            let mail = document.querySelector('#mail__input').value
            let pass = document.querySelector('#password__input').value
            const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu
            function isEmailValid(value) {
                return EMAIL_REGEXP.test(value);
            }

            if (mail === '' || pass === '') {
                document.querySelector('.password_error').style.animation = 'flash 6s'
            }
            else if (!isEmailValid(mail)) {
                document.querySelector('#mail__input').style.borderColor = 'red'
                document.querySelector('.mail_error').style.animation = 'flash 6s'
            } else {
                const data = {
                    mail: document.querySelector('#mail__input').value.toLowerCase(),
                    pass: document.querySelector('#password__input').value,
                    oauth_provider: 'selfAuth'
                }
                fetch("scripts/php/reg.php", {
                    mode: 'cors',
                    method: "POST",
                    body: JSON.stringify(data),
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                }).then((response) => response.json())
                    .then((data) => {
                        if (data === 'small pass') {
                            document.querySelector('.password_error').textContent = 'Пароль должен быть более 5 символов'
                            document.querySelector('.password_error').style.opacity = '0.5'
                        } else if (data === 'mail exist') {
                            document.querySelector('.password_error').textContent = 'Такой пользователь уже существует'
                            document.querySelector('.password_error').style.opacity = '0.5'
                        } else if (data === true) {
                            localStorage.setItem('auth', JSON.stringify(document.getElementById('mail__input').value))
                            document.location = 'account.html'
                        }
                    })
            }
        }
        sentData()
    })
}

function clearInput() {
    document.getElementById('mail__input').value = '';
    document.getElementById('mail__input').style.borderColor = '#3A4736'
}

function show_hide_password() {
    var input = document.getElementById('password__input');
    if (input.getAttribute('type') == 'password') {
        input.setAttribute('type', 'text');
    } else {
        input.setAttribute('type', 'password');
    }
    return false;
}