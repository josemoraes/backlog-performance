import "./assets/styles/main.css";
import "@lottiefiles/lottie-player";
import { renderRoute } from "./routes";
import Emitter from "./services/Emitter";
import eventNames from "./misc/eventNames";
const $App = document.getElementById("App");
const $Messages = document.getElementById("Messages");
const $Errors = document.getElementById("Errors");

renderRoute($App);
appendMessageEvents(eventNames.MESSAGE_RECEIVED, $Messages, "Messages");
appendMessageEvents(eventNames.API_ERROR_HANDLED, $Errors, "Errors");

window.onhashchange = () => {
  renderRoute($App);
};

function appendMessageEvents(event, $element, prefix) {
  Emitter.on(event, (title, message) => {
    const FADE_OUT_MESSAGES_TIMEOUT = 3000;
    const HIDE_MESSAGES_TIMEOUT = 3200;
    if (!$element) {
      return;
    }

    $element.children[0].children[1].children[`${prefix}-title`].innerText =
      title;
    $element.children[0].children[1].children[`${prefix}-text`].innerText =
      message;

    $element.classList.toggle("hidden");
    $element.classList.toggle("animate-fade-in-down");

    setTimeout(() => {
      $element.classList.toggle("animate-fade-in-down");
      $element.classList.toggle("animate-fade-out-down");
    }, FADE_OUT_MESSAGES_TIMEOUT);

    setTimeout(() => {
      $element.classList.toggle("animate-fade-out-down");
      $element.classList.toggle("hidden");
    }, HIDE_MESSAGES_TIMEOUT);
  });
}
