let sel = document.querySelector('select');
const device = document.querySelector('#device');

sel.addEventListener('change', function (details) { 
    // console.log(details);
    device.textContent = `You have selected ${details.target.value}`;
})