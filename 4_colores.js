document.querySelectorAll('.container').forEach((cuadro) => {
    cuadro.addEventListener('click', function (event) {
        const element = event.target
        element.style.backgroundColor = 'black';
    });
});