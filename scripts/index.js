const editProfileBtn = document.querySelector('.profile__edit-btn');
const editProfileModal = document.querySelector('#edit-profile-modal');
const editProfileCloseBtn = editProfileModal.querySelector('.modal__close-btn');
const newPostBtn = document.querySelector('.profile__add-btn');
const newPostModal = document.querySelector('#new-post-modal');
const newPostCloseBtn = newPostModal.querySelector('.modal__close-btn');
const editProfileForm = document.querySelector('#edit-profile-form'); 
const nameInput = editProfileForm.querySelector('#profile-name-input');
const descriptionInput = editProfileForm.querySelector('#profile-description-input');
const profileNameElement = document.querySelector('.profile__name');
const profileDescriptionElement = document.querySelector('.profile__description');
const newPostForm = document.querySelector('#new-post-form'); 
const imageInput = newPostForm.querySelector('#card-image-input');
const captionInput = newPostForm.querySelector('#card-caption-input');

function openEditProfileModal() {
    editProfileModal.classList.add("modal_is-opened");
}

function closeEditProfileModal() {
    editProfileModal.classList.remove("modal_is-opened");
}

editProfileBtn.addEventListener("click", function() {

    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;

    openEditProfileModal();

});

editProfileCloseBtn.addEventListener("click", function() {
    closeEditProfileModal();
});


newPostBtn.addEventListener("click", function() {
    newPostModal.classList.add("modal_is-opened");
});

newPostCloseBtn.addEventListener("click", function() {
    newPostModal.classList.remove("modal_is-opened");
});


function handleProfileFormSubmit(evt) {
     evt.preventDefault();
   

    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;

    closeEditProfileModal();
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);


function handleAddCardSubmit(evt) {
    evt.preventDefault ();
    
    
    const newImageUrl = imageInput.value;
    const newCaption = captionInput.value;

    console.log(imageInput.value);
    console.log(captionInput.value);

    evt.target.reset();
    newPostModal.classList.remove("modal_is-opened");
} 

newPostForm.addEventListener('submit', handleAddCardSubmit);