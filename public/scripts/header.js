const header = document.querySelector('.header')

header.innerHTML = `
    <div class="header__leftPart">
        <div class="photo hiddenLeft">
            <img src="assets/myPhoto.png" alt="">
        </div>
    </div>
    <div class="header__rightPart">
        <div class="title hiddenRight">
            <div>
                <h3>Alexander</h3>
                <h1>HUL</h1>
                <p>Web Developer & Front-end Expert</p>
            </div>
            <div class="social">
                <a href="https://www.facebook.com/alexanderHul2403" target="_blank">
                    <div class="social__icon"><i class="fab fa-facebook-f"></i></div>
                </a>
                <a href="https://github.com/Lincher6" target="_blank">
                    <div class="social__icon"><i class="fab fa-github"></i></div>
                </a>
                <a href="https://www.linkedin.com/in/alexgul/" target="_blank">
                    <div class="social__icon"><i class="fab fa-linkedin-in"></i></div>
                </a>
            </div>
        </div>
        <div class="contacts">
            <div class="contact">
                <div class="contact__title">Location</div>
                <div>Kryvyi Rih</div>
            </div>
            <div class="contact">
                <div class="contact__title">Phone</div>
                <div>+380979123940</div>
            </div>
            <div class="contact">
                <div class="contact__title">Email</div>
                <div>philosophyofthebest@gmail.com</div>
            </div>
        </div>
    </div>
`