
import { q, renderMessages } from './utils.js';
import { Login } from './login.js';
import { Messages } from './messages.js';

// UPDATE TO MATCH YOUR LOCAL CONFIGURATION!!!
const CHAT_API = 'http://localhost:8080/chat-client/fake.json';

// Get data from server
const getRemoteData = () => {
  fetch(CHAT_API)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      renderMessages(data, q('.messages'));
    });
}

// Wait for page to be ready
window.addEventListener('DOMContentLoaded', () => {

  // Get data from server - first load
  getRemoteData();

  // Init UI
  Login();
  Messages();

  // get new data from server every 5 seconds
  setInterval(() => getRemoteData(), 5000);


  // Hide the alert when clicked
  q('.alert').addEventListener('click', () => {
    q('.alert').classList.add('d-none')
  });
});