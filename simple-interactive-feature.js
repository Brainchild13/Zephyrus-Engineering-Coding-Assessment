function blackBackground() {
    onclick = function () {

        // Define variables for the colors of the background and text
        let dark = 'black';
        let light = 'white';
        let regBackground = '#e5e5e5';

        // Toggle the background color of the body element
        let mainBody = document.getElementById('main-body');

        if (mainBody.style.backgroundColor === dark) {
            mainBody.style.backgroundColor = regBackground;
        } else {
            mainBody.style.backgroundColor = dark;
        }

        // Toggle the background color of the container element and change the class name
        let mainContainer = document.getElementById('main-container')

        if (mainContainer.className === 'container') {
            mainContainer.className = 'container-glow';
            mainContainer.style.backgroundColor = dark;
        } else {
            mainContainer.className = 'container';
            mainContainer.style.backgroundColor = light;
        }


        // Define variables for the innerHTML of the page title
        let currentText = 'Simple Interactive Feature';
        let newText = 'Coding Assessment';


        // Toggle the color of the page title
        let pageTitle = document.getElementById('page-title')[0]

        if (pageTitle.style.color === dark) {

            // Change the text content of the page title to 'Coding Assessment' and change the color to white
            // TODO: Text content will not change for some reason

            pageTitle.textContent = newText;
            pageTitle.style.color = light;
        } else {
            pageTitle.textContent = currentText;
            pageTitle.style.color = dark;

        }
    };
}