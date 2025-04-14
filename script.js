// Subscribe Button Toggle Logic
document.addEventListener('DOMContentLoaded', function () {
    const subscribeButton = document.getElementById('subscribe-btn');
  
    if (subscribeButton) {
      let subscribed = false;
  
      subscribeButton.addEventListener('click', function () {
        subscribed = !subscribed;
        subscribeButton.textContent = subscribed ? 'Subscribed ✔️' : 'Subscribe';
        subscribeButton.classList.toggle('subscribed');
      });
    }
  
    // Contact Page Comment Section Logic
    const commentForm = document.getElementById('commentForm');
    const commentOutput = document.getElementById('commentOutput');
  
    if (commentForm && commentOutput) {
      commentForm.addEventListener('submit', function (e) {
        e.preventDefault();
  
        const name = document.getElementById('visitorName').value;
        const message = document.getElementById('visitorMessage').value;
  
        // Output latest comment (replaces previous)
        commentOutput.innerHTML = `<strong>${name}</strong>: ${message}`;
        commentForm.reset();
      });
    }
  });
  