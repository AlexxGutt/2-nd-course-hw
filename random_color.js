function randomColorEl() {
    const colorArray = ['red', 'blue', 'green', 'yellow', 'orange', 'purple'];
    const randomColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    const randomButton = colorArray[Math.floor(Math.random() * colorArray.length)];
    const randomFooter = colorArray[Math.floor(Math.random() * colorArray.length)];

    const backgroundColorElement = document.querySelector('.m-game');
    const footerColorElement = document.querySelector('.footer');

    backgroundColorElement.style.background = randomColor;
    footerColorElement.style.background = randomFooter;
}
 