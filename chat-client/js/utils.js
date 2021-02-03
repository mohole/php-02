
/**
 * Faster-to-type document.querySelector() wrapper
 * @param {string} selectors CSS selector to look for.
 * @returns {HTMLBaseElement} The first matching element found
 */
const q = (selectors) => document.querySelector(selectors); 

/**
 * Render the messages data to a container
 * @param {Array<Message>} data Array of messages data.
 * @param {HTMLElement} container Where to render the data.
 */
const renderMessages = (data = [], container) => {
  const messages = data.map((msg,i) => {
    // Ternary operator: "if" condition, the shorter version
    const owner = msg.owner ? 'bg-primary' : 'bg-secondary';
    // Create a new Date object from existing value
    const time = new Date(msg.timestamp).toLocaleString();

    const tmpl = `<li class="owner-${msg.owner}">
      <span class="badge ${owner}">${msg.text}</span>
      <span class="time">${time}</span>
    </li>`;
    return tmpl;
  });
  container.innerHTML = messages.join(' ');
}

export {
  q,
  renderMessages
}