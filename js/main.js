const vue = Vue.createApp({
    data() {
        return {
            num1: 0,
            num2: 0,
        }
    },
    methods: {
        suma() {
            return (this.num1 + this.num2)
        },
        resta() {
            return (this.num1 - this.num2)
        },
        mult() {
            return (this.num1 * this.num2)
        },
        divi() {
            return (this.num1 / this.num2)
        }
    },
})