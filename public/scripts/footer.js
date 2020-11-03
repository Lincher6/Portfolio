const footer = document.querySelector('.footer')

footer.innerHTML = `
    <div class="leftPart">
        <div class="leftContent hiddenLeft">
            <h2>Contacts</h2>
        </div>
    </div>
    <div class="rightPart">
        <div class="rightContent">
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
            <div class="contacts" style="margin-top: 20px">
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
    </div>
`