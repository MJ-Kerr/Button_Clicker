function showAlert() {
    alert("Ninja was liked!");
}

const btn = document.getElementById('btn');


btn.addEventListener('click', function handleClick() {
    btn.textContent = 'Logout';
});

