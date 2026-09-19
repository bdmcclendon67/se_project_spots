const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-btn",
  inactiveButtonClass: "modal__submit-btn_type_disabled",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_visible"
};


const showInputError = (formElement, inputElement, errorMessage, config) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorMessageID);
  errorMessageElement.textContent = errorMessage;
  errorMessageElement.classList.add(config.errorClass);
};

const hideInputError = (formElement, inputElement, config) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector("#" + errorMessageID);
  errorMessageElement.textContent = "";
  errorMessageElement.classList.remove(config.errorClass);
};


const checkInputValidity = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, config);
    } else {
        hideInputError(formElement, inputElement, config);
    };
};

const hasInvalidInput = (inputList) => {
    return inputList.some((input) => {
        return !input.validity.valid;
    });
}

const toggleButtonState = (inputList, buttonElement) => {
    console.log(hasInvalidInput(inputList));
    if (hasInvalidInput(inputList)) {
        disableButton(buttonElement); 
    } else {
        buttonElement.disabled = false;
    }
};

const disableButton = (buttonElement) => {
    buttonElement.disabled = true;
}

const resetValidation = (formElement, inputList, config) => {
    inputList.forEach((input) => {
        hideInputError(formElement, input, config)
    });
}

function setEventListeners(formElement, config) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector));
    const buttonElement = formElement.querySelector(config.submitButtonSelector);

    console.log(inputList);
    console.log(buttonElement);

    toggleButtonState(inputList, buttonElement, config);

    inputList.forEach((inputElement) => {
        inputElement.addEventListener("input", function () {
            checkInputValidity(formElement, inputElement, config);
            toggleButtonState(inputList, buttonElement, config);
        });
    });
}


const enableValidation = (config) => {
    const formList = document.querySelectorAll(config.formSelector);
    formList.forEach((formElement) => {
        setEventListeners(formElement, config);
    });
}

enableValidation(settings);

