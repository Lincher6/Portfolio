const projects = [
    {
        projectNumber: 1,
        title: 'Social Network "Bite"',
        screens: [
            'social_1',
            'social_2',
            'social_3'
        ],
        info: 'A fully functional social network where you can sign-up/sign-in, edit your profile, add\n' +
              '                            friends,\n' +
              '                            search users, upload photos, make posts, like them or leave comments. Also you can chat with\n' +
              '                            other\n' +
              '                            users in a messenger, this feature is functional, but requires some testing.',
        clientTech: ["JavaScript", "Typescript", "React", "Redux", "CSS modules", "Material UI", "Firebase"],
        serverTech: ["Node JS", "Express", "Firebase (Cloud functions, Firestore, Storage)" ],
        link: 'https://socialbug-6991e.web.app/'
    },
    {
        projectNumber: 2,
        title: 'COVID-19 Tracker',
        screens: [
            'covid_1',
            'covid_2',
            'covid_3'
        ],
        info: 'Online Covid-19 tracker where you can monitor stats depending on country or stats type' +
              ' (cases, recovered, deaths), with chart, map and table data.',
        clientTech: ["JavaScript", "React", "Redux Toolkit", "BEM", "CHART JS", "Leaflet maps"],
        serverTech: ["disease.sh API"],
        link: 'https://covid-tracker-3b0b0.web.app/'
    },
    {
        projectNumber: 3,
        title: 'Video Communication App',
        screens: [
            'talk_1',
            'talk_2',
            'talk_3'
        ],
        info: 'Online Conference room generator, where you can communicated with other people through audio and' +
              ' video streams based on  peer-to-peer connection, or using online chat.' +
              ' No registration needed, just share one link to your room.',
        clientTech: ["JavaScript", "Socket IO", "PeerJs", "ejs"],
        serverTech: ["Node JS", "Express", "Socket IO"],
        link: 'https://damp-atoll-18739.herokuapp.com/'
    },
    {
        projectNumber: 4,
        title: 'Tetris Clone',
        screens: [
            'tetris_1',
            'tetris_2',
            'tetris_3'
        ],
        info: 'Simple Tetris clone made with pure Javascript, HTML, CSS. High-score is saved to localstorage',
        clientTech: ["JavaScript", "HTML", "CSS"],
        serverTech: [""],
        link: 'https://tetris-2-6eb86.web.app/'
    },

]

projects.forEach(project => {
    const block = document.querySelector(`.project_${project.projectNumber}`)

    block.innerHTML = `
        <div class="leftPart">
            <div class="leftContent hiddenLeft">
                <h3>Project ${project.projectNumber}</h3>
                <div class="project__screens">
                    ${project.screens.map((screen, index) => {
                        const number = index + 1
                        return `
                            <div class="screen_${number}">
                                <a href="assets/${screen}.png" target="_blank">
                                    <img src="assets/${screen}.png" alt="">
                                </a>
                            </div>
                        `    
                    }).join('')}
                </div>
            </div>
        </div>
        <div class="rightPart">
            <div class="rightContent">
                <div class="project__data">
                    <div class="project__title">
                        <h2>${project.title}</h2>
                        <div class="project__title-underline hiddenUnderline"></div>
                    </div>
                    <div class="project__info">
                        <p>${project.info}</p>
                        Technologies used on client:
                        <ul>
                            ${project.clientTech.map(tech => {
                                return `<li> - ${tech}</li>`
                            }).join('')}
                        </ul>
                        Technologies used on server:
                        <ul>
                            ${project.serverTech.map(tech => {
                                return `<li> - ${tech}</li>`
                            }).join('')}
                        </ul>
                        <a href=${project.link} target="_blank">
                            LINK
                        </a>

                    </div>
                </div>

            </div>
        </div>
    `
})