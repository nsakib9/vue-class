
const app = Vue.createApp({
   
    data() {
        return {
            firstName: "Bashar",
            lastName: 'Awal',
            email: 'bashar@lskit.com',
            gender: 'male',
            picture: 'https://picsum.photos/200'
        }
    },
})

app.mount('#app')