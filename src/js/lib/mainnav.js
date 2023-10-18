export function init() {
    document.getElementById('burger').addEventListener('click', () => {
        document.getElementById('menu').classList.toggle('menu-open');
    }
)}
