document.addEventListener('mousemove', function(e) {
    const circle = document.querySelector('.circle');
    const circleX = e.clientX;
    const circleY = e.clientY;

    circle.style.left = `${circleX - 100}px`;
    circle.style.top = `${circleY - 100}px`;

});