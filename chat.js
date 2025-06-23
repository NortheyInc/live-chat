const box = document.getElementById('chat-box');
const input = document.getElementById('chat-input');

function addMsg(text, who = 'user') {
  const div = document.createElement('div');
  div.className = 'msg ' + who;
  div.textContent = text;
  box.appendChild(div);
  box.scrollTop = box.scrollHeight;
}

input.addEventListener('keypress', function (e) {
  if (e.key === 'Enter' && input.value.trim()) {
    const text = input.value.trim();
    addMsg(text, 'user');
    input.value = '';

    // Simulate a live agent response
    setTimeout(() => {
      addMsg('Thanks, we’re checking now…', 'admin');
    }, 1000);
  }
});
