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