const box = document.getElementById('box');

box.addEventListener('mouseover', function () {
    box.innerHTML = "Mouse is over the box.";
})

box.addEventListener('mouseout', function () {
    box.innerHTML = "Mouse is out of the box."
})

const key = document.getElementById('keydown');

key.addEventListener('keydown', function () {
    document.getElementById('para').innerHTML = "you pressed :" + event.key;
})