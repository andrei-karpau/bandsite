let  addPageLayout = (elementTag, parent = 'body', idOrClassName = null, id = false, text = null) => {
    
    let newLayoutElement = document.createElement(elementTag);

    if (id) {
        newLayoutElement.setAttribute('id', idOrClassName);
    } else if (idOrClassName) {
        newLayoutElement.classList.add(idOrClassName);
    }

    if (text) {
        newLayoutElement.innerText = text;
    }

    let currentLayoutElement = document.querySelector(parent);
    let result = currentLayoutElement.appendChild(newLayoutElement);

    return result;
}

const showsSection = document.createElement('section');
showsSection.classList.add('shows');
document.body.insertBefore(showsSection, document.querySelector('.footer'));


addPageLayout(
    'div',
    '.shows',
    'shows__section'
);

addPageLayout(
    'span',
    '.shows__section',
    'shows__section-header',
    false,
    'shows'
);

const shows = [];

let createShow = (date, venue, location, country) => {
    const show = {};

    // ("yyyy-mm-ddThh:mm:ss")
    const newStamp = new Date(date);
    
    const monthNames = [
        'jan',
        'feb',
        'mar',
        'apr',
        'may',
        'jun',
        'jul',
        'aug',
        'sep',
        'oct',
        'nov',
        'dec'
    ];

    const dayNames = [
        'sun',
        'mon',
        'tue',
        'wed',
        'thu', 
        'fri',
        'sat'
    ];

    const newDate = `${dayNames[newStamp.getDay()]} ${monthNames[newStamp.getMonth()]} ${('0' + newStamp.getDate()).slice(-2)} ${newStamp.getFullYear()}`

    show.date = newDate;
    show.venue = venue;
    show.location = location;
    show.country = country;

    shows.push(show);

    return show;
}

createShow(
    '2021-09-06T00:00:00',
    'ronald lane',
    'san francisco',
    'CA'
);

createShow(
    '2021-09-21T00:00:00',
    'pier 3 east',
    'san francisco',
    'CA'
);

createShow(
    '2021-10-15T00:00:00',
    'view lounge',
    'san francisco',
    'CA'
);

createShow(
    '2021-11-06T00:00:00',
    'hyatt agency',
    'san francisco',
    'CA'
);

createShow(
    '2021-11-26T00:00:00',
    'moscow center',
    'san francisco',
    'CA'
);

createShow(
    '2021-12-15T00:00:00',
    'press club',
    'san francisco',
    'CA'
);

let showFinder = () => {

    const propertyName = Object.getOwnPropertyNames(shows[1]);

    for (let i = 0; i < propertyName.length - 1; i++) {

        addPageLayout(
            'span',
            '.shows__section',
            `shows__section-container--heading-text`,
            false,
            `${propertyName[i]}`
        );

    }

    for (let i = 0; i < shows.length; i++) {

        addPageLayout(
            'div',
            '.shows__section',
            'shows__section-container'
        );

        for (j=0; j<4; j++) {
            addPageLayout(
                'div',
                `.shows__section-container:nth-child(${i+5})`,
                `shows__section-container-wrapper${j+1}`
            );
        }

        addPageLayout(
            'span', 
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper1`, 
            'shows__section-container-info--type', 
            false,
            `${propertyName[0]}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper1`,
            'shows__section-container-info',
            false,
            `${shows[i].date}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper2`,
            'shows__section-container-info--type',
            false,
            `${propertyName[1]}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper2`,
            'shows__section-container-info',
            false,
            `${shows[i].venue}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper3`,
            'shows__section-container-info--type',
            false,
            `${propertyName[2]}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper3`,
            'shows__section-container-info',
            false,
            `${shows[i].location}, ${shows[i].country}`
        );
    
        addPageLayout(
            'button',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper4`,
            'shows__section-container-info--button',
            false,
            'buy tickets'
        );

        addPageLayout(
            'div',
            `.shows__section-container:nth-child(${i+5})`,
            'divider'
        )
    }
}

showFinder();

const dividers = document.querySelectorAll('.divider');

dividers.forEach(each => {
    each.onclick = (event) => {
        dividers.forEach(ss => ss.classList.remove('shows__section-container--active'));
        each.classList.add('shows__section-container--active');
        event.target.style.backgroundColor = 'rgb(225, 225, 225)';
    }

    each.onmouseenter = (event) => {
        if (!each.classList.contains('shows__section-container--active')) {

            event.target.style.backgroundColor = 'rgb(250, 250, 250)';

            each.onmouseleave = (event) => {
                event.target.style.backgroundColor = '';
            }
        } 
    }
});





