const skills = document.querySelector('.mySkills')

console.log(skills)

const skillIcons = {
    'JavaScript': `<i class="fab fa-js"></i>`,
    'TypeScript': `<div class="typescript"></div>`,
    'GitHub': `<i class="fab fa-github"></i>`,
    'React JS': `<i class="fab fa-react"></i>`,
    'Redux': `<div class="redux"></div>`,
    'GraphQL': `<div class="graphql"></div>`,
    'HTML 5': `<i class="fab fa-html5"></i>`,
    'CSS 3': `<i class="fab fa-css3-alt"></i>`,
    'Sass': `<i class="fab fa-sass"></i>`,
    'Node JS': `<i class="fab fa-node-js"></i>`,
    'Firebase': `<div class="firebase"></div>`,
    'Webpack': `<div class="webpack"></div>`,
}

const skillsList = Object.keys(skillIcons).map(skill => {
    return `
        <div class="skill">
            <div>
                ${skillIcons[skill]}
            </div>
            ${skill}
        </div>
    `
}).join('')

skills.innerHTML = `
    <div class="leftPart">
        <div class="leftContent hiddenLeft">
            <h3>SKILLS</h3>
            <div>Stuff i am good at</div>
        </div>
    </div>
    <div class="rightPart">
        <div class="rightContent hiddenRight">
            ${skillsList}
            </div>
        </div>
    </div>
`