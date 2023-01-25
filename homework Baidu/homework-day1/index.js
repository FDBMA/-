const btn = document.getElementById('btn');

btn.addEventListener('click', function onClick(event) {
  // 👇️ Change text color globally
  document.body.style.color = 'red';

  // 👇️ Change text color for clicked element only
  // event.target.style.color = 'salmon';
});

reback.addEventListener('click', function onClick(event) {
    // 👇️ Change text color globally
    document.body.style.color = 'black';
  
    // 👇️ Change text color for clicked element only
    // event.target.style.color = 'salmon';
  });