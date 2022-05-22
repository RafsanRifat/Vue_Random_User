const app = Vue.createApp({
    data() {
        return {
            firstName: "Paul",
            lastName: "Thomas",
            email: "paul@gmail.com",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        getUser() {
            this.firstName = "Anika",
            this.lastName = "Tai",
            this.email = "anika@gmail.com",
            this.picture = "https://randomuser.me/api/portraits/women/10.jpg"
        }
    }
})

app.mount('#app')