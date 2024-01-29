document.head.onload = addElement('link', 'stylesheet', '../styles/bio.css');

function addElement(elementTag, relText, hrefText) {
    const newElement = document.createElement(elementTag);
    newElement.rel = relText;
    newElement.href = hrefText;
    document.head.appendChild(newElement);
}

document.body.appendChild(document.createElement('div'));
