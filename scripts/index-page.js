let timeDifference = (current, previous) => {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;

  let elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + " seconds ago";
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + " minutes ago";
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + " hours ago";
  } else if (elapsed < msPerMonth) {
    return "approximately " + Math.round(elapsed / msPerDay) + " days ago";
  } else if (elapsed < msPerYear) {
    return "approximately " + Math.round(elapsed / msPerMonth) + " months ago";
  } else {
    return "approximately " + Math.round(elapsed / msPerYear) + " years ago";
  }
};

let  addPageLayout = (
    elementTag,
    parent = 'body',
    idOrClassName = null,
    id = false,
    text = null
) => {   
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

const biorgaphyCommentsSection = document.createElement('section');
biorgaphyCommentsSection.classList.add('comments');
document.body.insertBefore(biorgaphyCommentsSection, document.querySelector('.footer'));

addPageLayout(
    'div',
    '.comments',
    'comments__title',
);

addPageLayout(
    'span',
    '.comments__title',
    'comments__title-section-header',
    false,
    'join the conversation'
)

addPageLayout(
    'form',
    '.comments__title',
    'comments__title-form'
)

const commentForm = document.querySelector(".comments__title-form");
commentForm.name = "comment";
commentForm.id = "comment";

addPageLayout(
    'img',
    '.comments__title-form',
    'comments__title-form-user-image'
)

const userAvatar = document.querySelector('.comments__title-form .comments__title-form-user-image');
userAvatar.src = './assets/Images/Mohan-muruge.jpg';

addPageLayout(
    'label',
    '.comments__title-form',
    'comments__title-form-name-label',
    false,
    'name'
)

addPageLayout(
    'input',
    '.comments__title-form-name-label',
    'comments__title-form-name-label-input',
)

nameInput = document.querySelector('.comments__title-form-name-label-input');
nameInput.name = 'comment-name';
nameInput.type = 'text';
nameInput.placeholder = 'Enter your name';

addPageLayout(
    'label',
    '.comments__title-form',
    'comments__title-form-comment-label',
    false,
    'comment'
)

addPageLayout(
    'textarea',
    '.comments__title-form-comment-label',
    'comments__title-form-comment-label-input',
)

 commentTextArea = document.querySelector('.comments__title-form-comment-label-input');
 commentTextArea.name = 'comment-text'
 commentTextArea.placeholder = 'Add a new comment';

addPageLayout(
    'button',
    '.comments__title-form',
    'comments__title-form-button',
    false,
    'comment'
)

addPageLayout(
    'div',
    '.comments',
    'comments__posted',
);

const postedComments = document.querySelector('.comments__posted');

const comments = [];

let createComment = (date, userName, text, avatar = null) => {
    const comment = {};

    // ("yyyy-mm-ddThh:mm:ss")
    const commentStamp = new Date(date);

    comment.date = commentStamp;
    comment.userName = userName;
    comment.text = text;
    comment.avatar = avatar;

    comments.unshift(comment);

    return comment;
}

createComment(
    '2021-09-01T00:00:00',
    'Emilie Beach',
    'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.'
)

createComment(
    '2020-12-20T00:00:00',
    'Miles Acosta',
    'I can\'t stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can\'t get enough.'
)

createComment(
    '2021-02-17T00:00:00',
    'Connor Walton',
    'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.'
)

let commentComposer = () => {

    postedComments.innerHTML = ''; //reset posted comments. what other options? they ask us not to use innerHTML - review if got time

    for (i = 0; i < comments.length; i++) {

        addPageLayout(
            'div',
            '.comments__posted',
            'comments__posted-wrapper'
        );

        addPageLayout(
            'img',
            `.comments__posted-wrapper:nth-child(${i+1})`,
            `comments__posted-wrapper-avatar`
        );

        let avatar = document.querySelector(`.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-avatar`);
        if (comments[i].avatar != null) {
            avatar.src = comments[i].avatar;
        };

        addPageLayout(
            'div',
            `.comments__posted-wrapper:nth-child(${i+1})`,
            `comments__posted-wrapper-container`
        );

        addPageLayout(
            'div',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-container`,
            `comments__posted-wrapper-container-name-n-date`
        );
        
        addPageLayout(
            'span',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-container-name-n-date`,
            `comments__posted-wrapper-container-name-n-date--user-name`,
            false,
            `${comments[i].userName}`
        );

        addPageLayout(
            'span',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-container-name-n-date`,
            `comments__posted-wrapper-container-name-n-date--date`,
            false,
            `${timeDifference(Date.now(), comments[i].date)}`
        );

        addPageLayout(
            'div',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-container`,
            `comments__posted-wrapper-container-text`,
        );

        addPageLayout(
            'span',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-container-text`,
            `comments__posted-wrapper-container-text--user-opinion`,
            false,
            `${comments[i].text}`
        );
    }
}

commentComposer();

commentForm.addEventListener("keyup", (event) => event.target.setAttribute("style", ""));

commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
  
    if (!nameInput.value || !commentTextArea.value) {
      switch (true) {
        case !nameInput.value && !commentTextArea.value:
          nameInput.style.borderColor = "rgb(210, 45, 45)";
          commentTextArea.style.borderColor = "rgb(210, 45, 45)";
          break;
        case !nameInput.value:
          nameInput.style.borderColor = "rgb(210, 45, 45)";
          break;
        case !commentTextArea.value:
          commentTextArea.style.borderColor = "rgb(210, 45, 45)";
          break;
      }
    } else {
      nameInput.setAttribute("style", "");
      commentTextArea.setAttribute("style", "");
      let unformatedDate = new Date(Date.now());
      let userName = nameInput.value;
      let comment = commentTextArea.value;
      let avatar = userAvatar.src;
      createComment(
        `${unformatedDate}`,
        `${userName}`,
        `${comment}`,
        `${avatar}`
      );
  
      commentComposer();
  
      nameInput.setAttribute("style", "");
      nameInput.value = "";
  
      commentTextArea.setAttribute("style", "");
      commentTextArea.value = "";
    }
  });

