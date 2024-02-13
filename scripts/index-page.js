let addListenerToDates = ()  => {
    const relativeDates = document.querySelectorAll('.comments__posted-wrapper-container-name-n-date--relative-date');
    relativeDates.forEach(each => {

        each.onpointerover = () => {
            
            each.style.display = 'none';
            each.nextElementSibling.style.display = 'block';

            setTimeout(() => {
                each.style.display = 'block';
                each.nextElementSibling.style.display = 'none';
            }, 1000);
        }
    });
}

let timeDifference = (current, previous) => {
  let msPerMinute = 60 * 1000;
  let msPerHour = msPerMinute * 60;
  let msPerDay = msPerHour * 24;
  let msPerMonth = msPerDay * 30;
  let msPerYear = msPerDay * 365;

  let elapsed = current - previous;

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago';
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago';
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago';
  } else if (elapsed < msPerMonth) {
    return 'approximately ' + Math.round(elapsed / msPerDay) + ' days ago';
  } else if (elapsed < msPerYear) {
    return 'approximately ' + Math.round(elapsed / msPerMonth) + ' months ago';
  } else {
    return 'approximately ' + Math.round(elapsed / msPerYear) + ' years ago';
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

const commentForm = document.querySelector('.comments__title-form');
commentForm.name = 'comment';
commentForm.id = 'comment';

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

let commentComposer = async () => {

    let commentsJSON = new BandSiteApi(apiKey);

    postedComments.replaceChildren();
    
    const comments = await commentsJSON.getComments();

    for (i = 0; i < comments.length; i++) {

        addPageLayout(
            'div',
            '.comments__posted',
            'comments__posted-wrapper'
        );

        document.querySelector(`.comments__posted-wrapper:nth-child(${i+1})`).setAttribute('id', `${comments[i].id}`);

        if (comments[i].avatar != null) {
            addPageLayout(
                'img',
                `.comments__posted-wrapper:nth-child(${i+1})`,
                `comments__posted-wrapper-avatar`
            );
            let avatar = document.querySelector(`.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-avatar`);
            avatar.src = comments[i].avatar;
        } else {
            addPageLayout(
                'div',
                `.comments__posted-wrapper:nth-child(${i+1})`,
                `comments__posted-wrapper-avatar`
            );
        };

        addPageLayout(
            'div',
            `.comments__posted-wrapper:nth-child(${i+1})`,
            `comments__posted-wrapper-container`
        );

        addPageLayout(
            'button',
            `.comments__posted-wrapper:nth-child(${i+1})`,
            `comments__posted-wrapper-delete-button`
        );
        
        addPageLayout(
            'img',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-delete-button`,
            `comments__posted-wrapper-delete-button--image`
        );

        document.querySelector(
            `.comments__posted-wrapper:nth-child(${i+1})
            .comments__posted-wrapper-delete-button--image`
        ).src = '../assets/Icons/SVG/icon-delete.svg';

        addPageLayout(
            'button',
            `.comments__posted-wrapper:nth-child(${i+1})`,
            `comments__posted-wrapper-like-button`
        );

        addPageLayout(
            'img',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-like-button`,
            `comments__posted-wrapper-like-button--image`
        );

        document.querySelector(
            `.comments__posted-wrapper:nth-child(${i+1})
            .comments__posted-wrapper-like-button--image`
        ).src = '../assets/Icons/SVG/icon-like.svg';

        addPageLayout(
            'span',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-like-button`,
            `comments__posted-wrapper-like-button--count`,
            false,
            `${comments[i].likes}`
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
            `${comments[i].name}`
        );

        addPageLayout(
            'span',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-container-name-n-date`,
            `comments__posted-wrapper-container-name-n-date--relative-date`,
            false,
            `${timeDifference(Date.now(), comments[i].timestamp)}`
        );
        
        let timestamp = new Date(comments[i].timestamp);
        addPageLayout(
            'span',
            `.comments__posted-wrapper:nth-child(${i+1}) .comments__posted-wrapper-container-name-n-date`,
            `comments__posted-wrapper-container-name-n-date--actual-date`,
            false,
            `${timestamp.toDateString()}`
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
            `${comments[i].comment}`
        );
    
        addListenerToDates();
    }

    const deleteButton = document.querySelectorAll('.comments__posted-wrapper-delete-button');
    const likeButton = document.querySelectorAll('.comments__posted-wrapper-like-button');

    const deleteComment = new BandSiteApi(apiKey);
    const likeComment = new BandSiteApi(apiKey);

    deleteButton.forEach(each => {
        each.onclick = () => {
            // console.log(each.parentNode.id);
            deleteComment.deleteComment(each.parentNode.id, commentComposer);
        }
    });

    likeButton.forEach(each => {
        each.addEventListener('click', (e) => {
            likeComment.likeComment(each.parentNode.id);
            each.lastChild.innerText = parseInt(each.lastChild.innerText) + 1;
        })
    });
    

    

}



commentComposer();

commentForm.addEventListener('keyup', (e) => e.target.setAttribute('style', ''));

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!nameInput.value || !commentTextArea.value) {
        switch (true) {
        case !nameInput.value && !commentTextArea.value:
            nameInput.style.borderColor = 'rgb(210, 45, 45)';
            commentTextArea.style.borderColor = 'rgb(210, 45, 45)';
            break;
        case !nameInput.value:
            nameInput.style.borderColor = 'rgb(210, 45, 45)';
            break;
        case !commentTextArea.value:
            commentTextArea.style.borderColor = 'rgb(210, 45, 45)';
            break;
        }
    } else {
        const data = {}
    
        data.name = nameInput.value;
        data.comment = commentTextArea.value;

        let postComment = new BandSiteApi(apiKey);

        postComment.postComment(data, commentComposer);

        nameInput.setAttribute('style', '');
        nameInput.value = '';

        commentTextArea.setAttribute('style', '');
        commentTextArea.value = '';
    } 
    
});