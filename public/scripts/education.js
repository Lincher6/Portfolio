const education = document.querySelector('.myEducation')

const placeList = [
    {
        name: 'Institute for Entrepreneurship \'Strategy\' (Specialist)',
        icon: `<i class="fas fa-university"></i>`
    },
    {
        name: 'English Focus (Upper-intermediate)',
        icon: `<i class="fas fa-graduation-cap"></i>`
    },
    {
        name: 'Udemy ("Modern React with Redux", "React - The Complete Guide")',
        icon: `<i class="fas fa-laptop-code"></i>`
    }
]

const places = placeList.map(place => {
    return `
        <div class="course">
            <div class="icon">
                ${place.icon}
            </div>
            <div>
                ${place.name}
            </div>
        </div>
    `
}).join('')

education.innerHTML = `
    <div class="leftPart">
        <div class="leftContent hiddenLeft">
            <h3>EDUCATION</h3>
            <div>My Path</div>
        </div>
    </div>
    <div class="rightPart">
        <div class="rightContent hiddenRight">
            <div class="education">
                ${places}
            </div>
        </div>
    </div>
`