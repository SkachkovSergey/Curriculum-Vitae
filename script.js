const app = Vue.createApp({
    data() {
        return {
            image: './assets/MyImage.jpg',
            firstName: 'Sergey',
            lastName: 'Skachkov',
            speciality: 'programmer',
        }
    }
}).mount('#app');

function tableDisplay() {
    const educationData = document.getElementById('educationData');
    const screenWidth = window.innerWidth;
    if (screenWidth < 560) {
        educationData.innerHTML = `<p>Institution: PXl Hasselt</p>`;
    }
}
tableDisplay();
window.addEventListener('resize', tableDisplay);
