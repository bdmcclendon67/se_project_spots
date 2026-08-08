const initialCards = [{
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
},
{
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
},
{
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
},
{
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
},
{
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
},
{
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
},
{
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
},
];



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


const previewModal = document.querySelector("#preview-modal");
const cardSubmitButton = previewModal.querySelector(".modal__submit-btn");
const previewModalImage = previewModal.querySelector(".modal__image");
const previewModalCaption = previewModal.querySelector(".modal__caption");
const previewModalCloseBtn = previewModal.querySelector(".modal__close-btn");


const cardTemplate = document.querySelector('#card-template')
.content.querySelector(".card");
const cardsList = document.querySelector(".cards__list");

function getCardElement(data) {
    const cardElement = cardTemplate
    .cloneNode(true);
    const cardTitleEl = cardElement.querySelector(".card__title");
    const cardImageEl = cardElement.querySelector(".card__image");
    
    cardTitleEl.textContent = data.name;
    cardImageEl.alt = data.name;
    cardImageEl.src = data.link;

    const cardLikeBtn = cardElement.querySelector(".card__like-button");

    cardLikeBtn.addEventListener("click", () => {
        cardLikeBtn.classList.toggle("card__like-button_active")
    });

    const cardDeleteBtn = cardElement.querySelector(".card__delete-button");

    cardDeleteBtn.addEventListener("click", () => {
        cardElement.remove();
    });

    cardImageEl.addEventListener("click", () => {
          previewModalImage.src = data.link;
          previewModalImage.alt = data.name;
          previewModalCaption.textContent = data.name;  

          openModal(previewModal);
    });

    return cardElement;
}

function openModal(modal) {
    modal.classList.add("modal_is-opened");
}

function closeModal(modal) {
    modal.classList.remove("modal_is-opened");
}


editProfileBtn.addEventListener("click", function() {

    nameInput.value = profileNameElement.textContent;
    descriptionInput.value = profileDescriptionElement.textContent;
    resetValidation(editProfileModal, [nameInput, descriptionInput]);
    openModal(editProfileModal);

});

editProfileCloseBtn.addEventListener("click", function() {
    closeModal(editProfileModal);
});


newPostBtn.addEventListener("click", function() {
    resetValidation(newPostModal, [imageInput, captionInput]);
    openModal(newPostModal)
});

newPostCloseBtn.addEventListener("click", function() {
    closeModal(newPostModal);
});

previewModalCloseBtn.addEventListener("click", function() {
    closeModal(previewModal);
});


function handleProfileFormSubmit(evt) {
     evt.preventDefault();
   

    profileNameElement.textContent = nameInput.value;
    profileDescriptionElement.textContent = descriptionInput.value;
    closeModal(editProfileModal);
    
}

editProfileForm.addEventListener('submit', handleProfileFormSubmit);


function handleAddCardSubmit(evt) {
    evt.preventDefault();
    

    const inputValues = {
        name: captionInput.value,
        link: imageInput.value,
    };

    console.log(imageInput.value);
    console.log(captionInput.value);
    const cardElement = getCardElement(inputValues);
    cardsList.prepend(cardElement);

    evt.target.reset();
    disableButton(cardSubmitButton);
    closeModal(newPostModal);
} 

newPostForm.addEventListener('submit', handleAddCardSubmit);

initialCards.forEach(function(item) {

    const cardElement = getCardElement(item);
    cardsList.append(cardElement);
});

