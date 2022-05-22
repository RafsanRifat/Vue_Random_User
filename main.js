const app = Vue.createApp({
    template: ` <img class="rounded-circle" :src="picture" alt="" >
        <h2>{{firstName}} {{lastName}}</h2>
        <p>{{email}}</p>
        <button @click="getUser" class="btn btn-warning">Get more user</button>`,
    data() {
        return {
            firstName: "Paul",
            lastName: "Thomas",
            email: "paul@gmail.com",
            picture: "https://randomuser.me/api/portraits/men/10.jpg"
        }
    },
    methods: {
        async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            console.log(results)

            this.firstName = results[0].name.first,
            this.lastName = results[0].name.last,
            this.email = results[0].email,
            this.picture = results[0].picture.large
        }
    }
})

app.mount('#app')