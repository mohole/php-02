
import { q } from './utils.js';

/**
 * "Login" form interaction
 */
const Login = () => {
  q('.login form').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = q('.login input').value;

    q('.login').classList.add('hide');
    q('.chat').classList.remove('hide');

    q('.chat .username').innerHTML = name;
  });
}

export {
  Login
}