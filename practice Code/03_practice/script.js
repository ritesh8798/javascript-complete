const fileInput = document.querySelector('input[type="file"]');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', (event) => {
    const file = event.target.files[0];

    if (file) {
        btn.textContent = file.name;
    }
});