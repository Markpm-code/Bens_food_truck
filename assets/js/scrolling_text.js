//scrolling text
const paragraphs = document.querySelectorAll('.scrolling-text p');

paragraphs.forEach((p, index) => {
    p.style.animationDuration = ((p.textContent.length / 25) + index) + 's';
});
