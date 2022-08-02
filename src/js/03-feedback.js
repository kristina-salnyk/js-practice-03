import localStorageService from './localStorageService';
import throttle from 'lodash.throttle';

const feedbackFormRef = document.querySelector('form.feedback-form');
const feedbackFormState = localStorageService.load('feedback-form-state');

function feedbackFormInputHandler() {
  const { email, message } = this.elements;
  localStorageService.save('feedback-form-state', {
    email: email.value,
    message: message.value,
  });
}

function feedbackFormSubmitHandler(event) {
  event.preventDefault();

  const { email, message } = this.elements;
  console.log({
    email: email.value,
    message: message.value,
  });

  localStorageService.remove('feedback-form-state');
  this.reset();
}

if (feedbackFormState) {
  feedbackFormRef.elements.email.value = feedbackFormState.email;
  feedbackFormRef.elements.message.value = feedbackFormState.message;
}

feedbackFormRef.addEventListener(
  'input',
  throttle(feedbackFormInputHandler, 500)
);

feedbackFormRef.addEventListener('submit', feedbackFormSubmitHandler);
