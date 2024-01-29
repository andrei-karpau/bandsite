function addLink(elementTag, relText, hrefText) {
    const newElement = document.createElement(elementTag);
    newElement.rel = relText;
    newElement.href = hrefText;
    document.head.appendChild(newElement);
}

    document.head.onload = addLink('link', 'stylesheet', '../styles/shows.css');

function addPageLayout(elementTag, parent = 'body', idOrClassName = null, id = false, text = null) {
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

    addPageLayout('header');
    addPageLayout('nav', 'body > header');

    addPageLayout('div', 'body > header > nav', 'nav-bar');
    addPageLayout('div', '.nav-bar', 'nav-bar__container');
    addPageLayout('div', '.nav-bar__container', 'nav-bar__cell--logo');

    const logoLink = addPageLayout('a', '.nav-bar__cell--logo', 'nav-bar__link');
    logoLink.href = '../index.html';

    const logo = addPageLayout('img', '.nav-bar__cell--logo > a', 'logo', true);
    logo.src = '/assets/Logo/Logo-bandsite.svg';

    addPageLayout('div', '.nav-bar__container', 'nav-bar__cell');
    const inactiveNavLink = addPageLayout('a', '.nav-bar__cell:nth-child(2)', 'nav-bar__link');
    inactiveNavLink.href = '/index.html';
    inactiveNavLink.classList.add('nav-bar__link--inactive')
    addPageLayout('span', '.nav-bar__cell:nth-child(2) > a', 'nav-bar___item', false, 'biography');

    const activeNavCell = addPageLayout('div', '.nav-bar__container', 'nav-bar__cell');
    activeNavCell.classList.add('nav-bar__cell--active')
    const activeNavLink = addPageLayout('a', '.nav-bar__cell:nth-child(3)', 'nav-bar__link');
    activeNavLink.classList.add('nav-bar__link--active');
    addPageLayout('span', '.nav-bar__cell:nth-child(3) > a', 'nav-bar___item', false, 'shows');




//can I use append to add multiply elements instead of calling function each time? 


