let count = 0;
const progressBar = document.querySelector('.progress-bar');
const progressText = document.querySelector('#progressText');
const startButton = document.querySelector('#startBtn');

startButton.addEventListener('click', function () {
    let intv = setInterval(function () {
      if (count < 100) {
        count++;
        progressBar.style.width = count + "%";
        progressText.textContent = count + "%";
        }
        else {
          document.querySelector('h2').textContent = "Download Complete!";
           clearInterval(intv);
        }
    }, 30);
});

