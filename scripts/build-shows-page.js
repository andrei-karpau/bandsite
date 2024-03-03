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

const showsComposer = (show) => {
    const {date, location, place} = show;
    const showDate = new Date(date);

    const showsSectionContainer = document.createElement('div');
    showsSectionContainer.classList.add('shows__section-container');
    showsSection.appendChild(showsSectionContainer);

    const showsSectionContainerWrapperDate = document.createElement('div');
    showsSectionContainerWrapperDate.classList.add('shows__section-container-wrapper-date');
    showsSectionContainer.appendChild(showsSectionContainerWrapperDate);

    const showsSectionContainerInfoTypeDate = document.createElement('span');
    showsSectionContainerInfoTypeDate.classList.add('shows__section-container-info--type');
    showsSectionContainerInfoTypeDate.innerText = 'date';
    showsSectionContainerWrapperDate.appendChild(showsSectionContainerInfoTypeDate);

    const showsSectionContainerInfoDate = document.createElement('span');
    showsSectionContainerInfoDate.classList.add('shows__section-container-info');
    showsSectionContainerInfoDate.innerText = `${showDate.toDateString()}`;
    showsSectionContainerWrapperDate.appendChild(showsSectionContainerInfoDate);

    const showsSectionContainerWrapperVenue = document.createElement('div');
    showsSectionContainerWrapperVenue.classList.add('shows__section-container-wrapper-venue');
    showsSectionContainer.appendChild(showsSectionContainerWrapperVenue);

    const showsSectionContainerInfoTypeVenue = document.createElement('span');
    showsSectionContainerInfoTypeVenue.classList.add('shows__section-container-info--type');
    showsSectionContainerInfoTypeVenue.innerText = 'venue';
    showsSectionContainerWrapperVenue.appendChild(showsSectionContainerInfoTypeVenue);

    const showsSectionContainerInfoVenue = document.createElement('span');
    showsSectionContainerInfoVenue.classList.add('shows__section-container-info');
    showsSectionContainerInfoVenue.innerText = `${place}`;
    showsSectionContainerWrapperVenue.appendChild(showsSectionContainerInfoVenue);

    const showsSectionContainerWrapperLocation = document.createElement('div');
    showsSectionContainerWrapperLocation.classList.add('shows__section-container-wrapper-location');
    showsSectionContainer.appendChild(showsSectionContainerWrapperLocation);

    const showsSectionContainerInfoTypeLocation = document.createElement('span');
    showsSectionContainerInfoTypeLocation.classList.add('shows__section-container-info--type');
    showsSectionContainerInfoTypeLocation.innerText = 'location';
    showsSectionContainerWrapperLocation.appendChild(showsSectionContainerInfoTypeLocation);

    const showsSectionContainerInfoLocation = document.createElement('span');
    showsSectionContainerInfoLocation.classList.add('shows__section-container-info');
    showsSectionContainerInfoLocation.innerText = `${location}`;
    showsSectionContainerWrapperLocation.appendChild(showsSectionContainerInfoLocation);

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
getShows.getShows(showsComposer);