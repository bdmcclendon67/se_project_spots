const EditProfileBtn = document.querySelector('.profile__edit-btn');
const EditProfileModal = document.querySelector('#edit-profile-modal');
const EditProfileCloseBtn = EditProfileModal.querySelector('.modal__close-btn');
const modalSubmitBtn = EditProfileModal.querySelector('.modal__submit-btn');

EditProfileBtn.addEventListener("click", function() {
    EditProfileModal.classList.add("modal_is-opened");

});

EditProfileCloseBtn.addEventListener("click", function() {
    EditProfileModal.classList.remove("modal_is-opened");
});

const NewPostBtn = document.querySelector('.profile__add-btn');
const NewPostModal = document.querySelector('#new-post-modal');
const NewPostCloseBtn = NewPostModal.querySelector('.modal__close-btn');


NewPostBtn.addEventListener("click", function() {
    NewPostModal.classList.add("modal_is-opened");
});

NewPostCloseBtn.addEventListener("click", function() {
    NewPostModal.classList.remove("modal_is-opened");
});

const profileFormElement = document.querySelector('#edit-profile-modal'); 
const nameInput = profileFormElement.querySelector('#profile-name-input');
const jobInput = profileFormElement.querySelector('#profile-description-input');

const profileNameElement = document.querySelector('.profile__name');
const profileJobElement = document.querySelector('.profile__description');

function handleProfileFormSubmit(evt) {
    EditProfileModal.classList.remove("modal_is-opened");
    evt.preventDefault ();

    profileNameElement.textContent = nameInput.value;
    profileJobElement.textContent = jobInput.value;

    
}

profileFormElement.addEventListener('submit', handleProfileFormSubmit);

const addCardFormElement = document.querySelector('#new-post-modal'); 
const imageInput = addCardFormElement.querySelector('#card-image-input');
const captionInput = addCardFormElement.querySelector('#card-caption-input');


function handleAddCardSubmit(evt) {
    NewPostModal.classList.remove("modal_is-opened");
    evt.preventDefault ();

    const newImageUrl = imageInput.value;
    const newCaption = captionInput.value;

    console.log(imageInput.value);
    console.log(captionInput.value);
} 

addCardFormElement.addEventListener('submit', handleAddCardSubmit);