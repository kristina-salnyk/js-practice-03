import localStorageService from './local-storage-service';
import localStorageKeys from './local-storage-keys';
import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('form.feedback-form');
const feedbackFormState = localStorageService.load(
  localStorageKeys.FEEDBACK_FORM_STATE
);

function feedbackFormInputHandler() {
  localStorageService.save(
    localStorageKeys.FEEDBACK_FORM_STATE,
    getFormTextFields(this)
  );
}

function feedbackFormSubmitHandler(event) {
  event.preventDefault();

  const formTextFields = getFormTextFields(this);

  for (const key of Object.keys(formTextFields)) {
    if (!feedbackFormRef.elements[key].value) {
      alert('All fields of the form must be completed');
      return;
    }
  }

  console.log(formTextFields);
  localStorageService.remove(localStorageKeys.FEEDBACK_FORM_STATE);
  this.reset();
}

function getFormTextFields(form) {
  const formTextFieldsArray = [...form.elements]
    .filter(
      element => element.nodeName === 'INPUT' || element.nodeName === 'TEXTAREA'
    )
    .map(element => [element.name, element.value]);

  return Object.fromEntries(formTextFieldsArray);
}

if (feedbackFormState) {
  for (const key of Object.keys(feedbackFormState)) {
    if (feedbackFormRef.elements[key])
      feedbackFormRef.elements[key].value = feedbackFormState[key];
  }
}

feedbackFormRef.addEventListener(
  'input',
  throttle(feedbackFormInputHandler, 500)
);

feedbackFormRef.addEventListener('submit', feedbackFormSubmitHandler);
