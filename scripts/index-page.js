const biorgaphyCommentsSection = document.createElement('section');
const commentsTitle = document.createElement('div');
const commentsTitleSectionHeader = document.createElement('span');
const commentsTitleForm = document.createElement('form');
const commentsTitleFormUserImage = document.createElement('img');
const commentsTitleFormNameLabel = document.createElement('label');
const commentsTitleFormNameLabelInput = document.createElement('input');
const commentsTitleFormCommentLabel = document.createElement('label');
const commentsTitleFormCommentLabelInput = document.createElement('textarea');
const commentsTitleFormButton = document.createElement('button');
const commentsPosted = document.createElement('div');

biorgaphyCommentsSection.classList.add('comments');
commentsTitle.classList.add('comments__title');
commentsTitleSectionHeader.classList.add('comments__title-section-header');
commentsTitleForm.classList.add('comments__title-form');
commentsTitleFormUserImage.classList.add('comments__title-form-user-image');
commentsTitleFormNameLabel.classList.add('comments__title-form-name-label');
commentsTitleFormNameLabelInput.classList.add('comments__title-form-name-label-input');
commentsTitleFormCommentLabel.classList.add('comments__title-form-comment-label');
commentsTitleFormCommentLabelInput.classList.add('comments__title-form-comment-label-input');
commentsTitleFormButton.classList.add('comments__title-form-button');
commentsPosted.classList.add('comments__posted');

commentsTitleSectionHeader.innerText = 'join the conversation';
commentsTitleForm.name = 'comment';
commentsTitleForm.id = 'comment';
commentsTitleFormUserImage.src = './assets/Images/Mohan-muruge.jpg';
commentsTitleFormNameLabel.innerText = 'name';
commentsTitleFormNameLabelInput.name = 'comment-name';
commentsTitleFormNameLabelInput.type = 'text';
commentsTitleFormNameLabelInput.placeholder = 'Enter your name';
commentsTitleFormCommentLabel.innerText = 'comment';
commentsTitleFormCommentLabelInput.name = 'comment-text';
commentsTitleFormCommentLabelInput.placeholder = 'Add a new comment';
commentsTitleFormButton.innerText = 'comment';

document.body.insertBefore(biorgaphyCommentsSection, document.querySelector('.footer'));
biorgaphyCommentsSection.append(commentsTitle, commentsPosted);
commentsTitle.append(commentsTitleSectionHeader, commentsTitleForm);
commentsTitleForm.append(commentsTitleFormUserImage, commentsTitleFormNameLabel, commentsTitleFormCommentLabel);
commentsTitleFormNameLabel.appendChild(commentsTitleFormNameLabelInput);
commentsTitleFormCommentLabel.appendChild(commentsTitleFormCommentLabelInput);
commentsTitleForm.appendChild(commentsTitleFormButton);

const timeDifference = (current, previous) => {
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

const commentsComposer = (parentElementClass, commentObject) => {
    const {comment, id, likes, name, timestamp} = commentObject
    const commentDate = new Date(timestamp);
    const deleteComment = new BandSiteApi(apiKey);
    const likeComment = new BandSiteApi(apiKey);
    
    const commentsPostedWrapper = document.createElement('div');
    const commentsPostedWrapperAvatar = document.createElement('div');
    const commentsPostedWrapperContainer = document.createElement('div');
    const commentsPostedWrapperContainerNameAndDate = document.createElement('div');
    const commentsPostedWrapperContainerNameAndDateUserName = document.createElement('span');
    const commentsPostedWrapperContainerNameAndDateRelativeDate = document.createElement('span');
    const commentsPostedWrapperContainerText = document.createElement('div');
    const commentsPostedWrapperContainerTextUserOpinion = document.createElement('span');
    const commentsPostedWrapperDeleteButton = document.createElement('button');
    const commentsPostedWrapperDeleteButtonImage = document.createElement('img');
    const commentsPostedWrapperLikeButton = document.createElement('button');
    const commentsPostedWrapperLikeButtonImage = document.createElement('img');
    const commentsPostedWrapperLikeButtonCount = document.createElement('span');
    
    commentsPostedWrapper.classList.add('comments__posted-wrapper');
    commentsPostedWrapperAvatar.classList.add(`comments__posted-wrapper-avatar`);
    commentsPostedWrapperContainer.classList.add(`comments__posted-wrapper-container`);
    commentsPostedWrapperContainerNameAndDate.classList.add(`comments__posted-wrapper-container-name-n-date`);
    commentsPostedWrapperContainerNameAndDateUserName.classList.add(`comments__posted-wrapper-container-name-n-date--user-name`);
    commentsPostedWrapperContainerNameAndDateRelativeDate.classList.add(`comments__posted-wrapper-container-name-n-date--relative-date`);
    commentsPostedWrapperContainerText.classList.add(`comments__posted-wrapper-container-text`);
    commentsPostedWrapperContainerTextUserOpinion.classList.add(`comments__posted-wrapper-container-text--user-opinion`);
    commentsPostedWrapperDeleteButton.classList.add(`comments__posted-wrapper-delete-button`);
    commentsPostedWrapperDeleteButtonImage.classList.add(`comments__posted-wrapper-delete-button--image`);
    commentsPostedWrapperLikeButton.classList.add(`comments__posted-wrapper-like-button`);
    commentsPostedWrapperLikeButtonImage.classList.add(`comments__posted-wrapper-like-button--image`);
    commentsPostedWrapperLikeButtonCount.classList.add(`comments__posted-wrapper-like-button--count`);
    
    commentsPostedWrapper.setAttribute('id', `${id}`);
    commentsPostedWrapperContainerNameAndDateUserName.innerText = `${name}`;
    commentsPostedWrapperContainerNameAndDateRelativeDate.innerText = `${timeDifference(Date.now(), timestamp)}`;
    commentsPostedWrapperContainerTextUserOpinion.innerText = `${comment}`;
    commentsPostedWrapperDeleteButtonImage.src = './assets/Icons/SVG/icon-delete.svg';
    commentsPostedWrapperLikeButtonImage.src = './assets/Icons/SVG/icon-like.svg';
    commentsPostedWrapperLikeButtonCount.innerText = `${likes}`;

    commentsPostedWrapperDeleteButton.addEventListener('click', () => {
        deleteComment.deleteComment(commentsPostedWrapper.id, commentsComposer);
    });

    commentsPostedWrapperLikeButton.addEventListener('click', () => {
        likeComment.likeComment(commentsPostedWrapper.id);
        commentsPostedWrapperLikeButtonCount.innerText = Number(commentsPostedWrapperLikeButtonCount.innerText) + 1;
    });

    commentsPostedWrapperContainerNameAndDateRelativeDate.addEventListener('mouseover', (e) => {
        e.target.innerText = `${commentDate.toDateString()}`;
        setTimeout(()=> {
            e.target.innerText = `${timeDifference(Date.now(), timestamp)}`;
        }, 1000)
    });
    
    parentElementClass.appendChild(commentsPostedWrapper);
    commentsPostedWrapper.append(commentsPostedWrapperAvatar, commentsPostedWrapperContainer, commentsPostedWrapperDeleteButton, commentsPostedWrapperLikeButton);
    commentsPostedWrapperContainer.append(commentsPostedWrapperContainerNameAndDate, commentsPostedWrapperContainerText);
    commentsPostedWrapperContainerNameAndDate.append(commentsPostedWrapperContainerNameAndDateUserName, commentsPostedWrapperContainerNameAndDateRelativeDate);
    commentsPostedWrapperContainerText.appendChild(commentsPostedWrapperContainerTextUserOpinion);
    commentsPostedWrapperDeleteButton.appendChild(commentsPostedWrapperDeleteButtonImage);
    commentsPostedWrapperLikeButton.append(commentsPostedWrapperLikeButtonImage, commentsPostedWrapperLikeButtonCount);
}

commentsTitleForm.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!commentsTitleFormNameLabelInput.value || !commentsTitleFormCommentLabelInput.value) {
        switch (true) {
        case !commentsTitleFormNameLabelInput.value && !commentsTitleFormCommentLabelInput.value:
            commentsTitleFormNameLabelInput.classList.add('comments__title-form-name-label-input--empty');
            commentsTitleFormCommentLabelInput.classList.add('comments__title-form-comment-label-input--empty');
            break;
        case !commentsTitleFormNameLabelInput.value:
            commentsTitleFormNameLabelInput.classList.add('comments__title-form-name-label-input--empty');
            break;
        case !commentsTitleFormCommentLabelInput.value:
            commentsTitleFormCommentLabelInput.classList.add('comments__title-form-comment-label-input--empty');
            break;
        }
    } else {
        const comment = {};
        comment.name = commentsTitleFormNameLabelInput.value;
        comment.comment = commentsTitleFormCommentLabelInput.value;
        const postComment = new BandSiteApi(apiKey);
        postComment.postComment(comment, commentsComposer);
        commentsTitleFormNameLabelInput.value = '';
        commentsTitleFormCommentLabelInput.value = '';
    }  
});

commentsTitleForm.addEventListener('keyup', (e) => {
    e.target.classList.remove('comments__title-form-name-label-input--empty');
    e.target.classList.remove('comments__title-form-comment-label-input--empty');
});

const getComments = new BandSiteApi(apiKey);
getComments.getComments(commentsComposer);