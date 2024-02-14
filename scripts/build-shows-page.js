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

let showFinder = async () => {

    let getShows = new BandSiteApi(apiKey);
    const shows = await getShows.getShows();

    const showsHeader = [
        'date',
        'venue',
        'location'
    ]

    for (let i = 0; i < showsHeader.length; i++) {

        addPageLayout(
            'span',
            '.shows__section',
            `shows__section-container--heading-text`,
            false,
            `${showsHeader[i]}`
        );
    }

    for (let i = 0; i < shows.length; i++) {

        addPageLayout(
            'div',
            '.shows__section',
            'shows__section-container'
        );

        for (j=0; j<3; j++) {
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
            `${showsHeader[0]}`
        );

        let date = new Date(shows[i].date);
        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper1`,
            'shows__section-container-info',
            false,
            `${date.toDateString()}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper2`,
            'shows__section-container-info--type',
            false,
            `${showsHeader[1]}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper2`,
            'shows__section-container-info',
            false,
            `${shows[i].place}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper3`,
            'shows__section-container-info--type',
            false,
            `${showsHeader[2]}`
        );

        addPageLayout(
            'span',
            `.shows__section-container:nth-child(${i+5}) .shows__section-container-wrapper3`,
            'shows__section-container-info',
            false,
            `${shows[i].location}`
        );
    
        addPageLayout(
            'button',
            `.shows__section-container:nth-child(${i+5})`,
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

    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(each => {
        each.onclick = (e) => {
            console.log(e.target);
            dividers.forEach(removeColor => {
                removeColor.classList.remove('shows__section-container--active');
                removeColor.style.backgroundColor = '';
            });
            each.classList.add('shows__section-container--active');
            each.style.backgroundColor = 'rgb(225, 225, 225)';
        }

        each.onmouseenter = () => {
            if (!each.classList.contains('shows__section-container--active')) {

                each.style.backgroundColor = 'rgb(250, 250, 250)';

                each.onmouseleave = (event) => {
                    each.style.backgroundColor = '';
                }
            } 
        }
    });

    const buttons = document.querySelectorAll('.shows__section-container-info--button');
    buttons.forEach(each => {
        each.onclick = () => {
            buttons.forEach(removeColor => {
                removeColor.nextElementSibling.classList.remove('shows__section-container--active');
                removeColor.nextElementSibling.style.backgroundColor = '';
            });
            each.nextElementSibling.classList.add('shows__section-container--active');
            each.nextElementSibling.style.backgroundColor = 'rgb(225, 225, 225)';
        }
        
        each.onmouseenter = () => {
            if (!each.nextElementSibling.classList.contains('shows__section-container--active')) {

                each.nextElementSibling.style.backgroundColor = 'rgb(250, 250, 250)';

                each.onmouseleave = () => {
                    each.nextElementSibling.style.backgroundColor = '';
                }
            } 
        }
    });
}

showFinder();






