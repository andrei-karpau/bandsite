const showsMainSection = document.createElement('section');
showsMainSection.classList.add('shows');
document.body.insertBefore(showsMainSection, document.querySelector('.footer'));

const showsSection = document.createElement('div');
showsSection.classList.add('shows__section');
showsMainSection.appendChild(showsSection);

const showsSectionHeader = document.createElement('span');
showsSectionHeader.classList.add('shows__section-header');
showsSectionHeader.innerText = 'shows';

const showsSectionContainerHeadingTextDate = document.createElement('span');
showsSectionContainerHeadingTextDate.classList.add(`shows__section-container--heading-text`);
showsSectionContainerHeadingTextDate.innerText = 'date';

const showsSectionContainerHeadingTextVenue = document.createElement('span');
showsSectionContainerHeadingTextVenue.classList.add(`shows__section-container--heading-text`);
showsSectionContainerHeadingTextVenue.innerText = 'venue';

const showsSectionContainerHeadingTextLocation = document.createElement('span');
showsSectionContainerHeadingTextLocation.classList.add(`shows__section-container--heading-text`);
showsSectionContainerHeadingTextLocation.innerText = 'location';

showsSection.append(showsSectionHeader, showsSectionContainerHeadingTextDate, showsSectionContainerHeadingTextVenue, showsSectionContainerHeadingTextLocation)

const showsComposerFunction = (show) => {
    const showDate = new Date(show.date);

    const showsSectionContainer = document.createElement('div');
    showsSectionContainer.classList.add('shows__section-container');
    showsSection.appendChild(showsSectionContainer);

    const showsSectionContainerWrapper1 = document.createElement('div');
    showsSectionContainerWrapper1.classList.add('shows__section-container-wrapper1');
    showsSectionContainer.appendChild(showsSectionContainerWrapper1);

    const showsSectionContainerInfoTypeDate = document.createElement('span');
    showsSectionContainerInfoTypeDate.classList.add('shows__section-container-info--type');
    showsSectionContainerInfoTypeDate.innerText = 'date';
    showsSectionContainerWrapper1.appendChild(showsSectionContainerInfoTypeDate);

    const showsSectionContainerInfoDate = document.createElement('span');
    showsSectionContainerInfoDate.classList.add('shows__section-container-info');
    showsSectionContainerInfoDate.innerText = `${showDate.toDateString()}`;
    showsSectionContainerWrapper1.appendChild(showsSectionContainerInfoDate);

    const showsSectionContainerWrapper2 = document.createElement('div');
    showsSectionContainerWrapper2.classList.add('shows__section-container-wrapper2');
    showsSectionContainer.appendChild(showsSectionContainerWrapper2);

    const showsSectionContainerInfoTypeVenue = document.createElement('span');
    showsSectionContainerInfoTypeVenue.classList.add('shows__section-container-info--type');
    showsSectionContainerInfoTypeVenue.innerText = 'venue';
    showsSectionContainerWrapper2.appendChild(showsSectionContainerInfoTypeVenue);

    const showsSectionContainerInfoVenue = document.createElement('span');
    showsSectionContainerInfoVenue.classList.add('shows__section-container-info');
    showsSectionContainerInfoVenue.innerText = `${show.place}`;
    showsSectionContainerWrapper2.appendChild(showsSectionContainerInfoVenue);

    const showsSectionContainerWrapper3 = document.createElement('div');
    showsSectionContainerWrapper3.classList.add('shows__section-container-wrapper3');
    showsSectionContainer.appendChild(showsSectionContainerWrapper3);

    const showsSectionContainerInfoTypeLocation = document.createElement('span');
    showsSectionContainerInfoTypeLocation.classList.add('shows__section-container-info--type');
    showsSectionContainerInfoTypeLocation.innerText = 'location';
    showsSectionContainerWrapper3.appendChild(showsSectionContainerInfoTypeLocation);

    const showsSectionContainerInfoLocation = document.createElement('span');
    showsSectionContainerInfoLocation.classList.add('shows__section-container-info');
    showsSectionContainerInfoLocation.innerText = `${show.location}`;
    showsSectionContainerWrapper3.appendChild(showsSectionContainerInfoLocation);

    const showsSectionContainerInfoButton = document.createElement('button');
    showsSectionContainerInfoButton.classList.add('shows__section-container-info--button');
    showsSectionContainerInfoButton.innerText = 'buy tickets';
    showsSectionContainer.appendChild(showsSectionContainerInfoButton);

    const divider = document.createElement('div');
    divider.classList.add('divider');
    showsSectionContainer.appendChild(divider);

    const dividers = document.querySelectorAll('.divider');
    dividers.forEach(each => {
        each.addEventListener('click', (e) => {
            dividers.forEach(removeColor => {
                removeColor.classList.remove('divider--active');
            });
            e.target.classList.remove('divider--mouseenter');
            e.target.classList.add('divider--active');
        })

        each.addEventListener('mouseenter', (e) => {
            if(!e.target.classList.contains('divider--active')) {
                e.target.classList.add('divider--mouseenter');

                each.addEventListener('mouseleave', (e) => {
                    e.target.classList.remove('divider--mouseenter');
                }); 
            }
        });
    });

    const buttons = document.querySelectorAll('.shows__section-container-info--button');
    buttons.forEach(each => {
        each.addEventListener('click', (e) => {
            buttons.forEach(removeColor => {
                removeColor.nextElementSibling.classList.remove('divider--active');
            });
            e.target.nextElementSibling.classList.remove('divider--mouseenter');
            e.target.nextElementSibling.classList.add('divider--active');
        });

        each.addEventListener('mouseenter', (e) => {
            if (!e.target.nextElementSibling.classList.contains('divider--active')) {
                e.target.nextElementSibling.classList.add('divider--mouseenter');

                each.addEventListener('mouseleave', (e) => {
                    e.target.nextElementSibling.classList.remove('divider--mouseenter');
                });
            }
        }); 
    });
} 

const getShows = new BandSiteApi(apiKey);
getShows.getShows(showsComposerFunction);