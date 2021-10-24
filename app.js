const app = Vue.createApp({
    data() {
        return {

            price: 1200,
            total: 1200,

            memory: 0,
            memory1: 0,
            memory2: 0,

            storage: 0,
            storage1: 0,
            storage2: 0,

            deliver: 0,
            deliver1: 0,
            deliver2: 20,
        }
    },

    methods: {
        btnHandle() {
            this.memory = this.memory1 + 200;
            this.total = this.price + this.memory + this.storage + this.deliver
        },
        btnHandle2() {
            this.memory = this.memory2 + 300;
            this.total = this.price + this.memory + this.storage + this.deliver
        },
        btnHandle3() {
            this.storage = this.storage1 + 500;
            this.total = this.price + this.memory + this.storage + this.deliver
        },
        btnHandle4() {
            this.storage = this.storage2 + 600;
            this.total = this.price + this.memory + this.storage + this.deliver
        },
        btnHandle5() {
            this.deliver = this.deliver1;
            this.total = this.price + this.memory + this.storage + this.deliver
        },
        btnHandle6() {
            this.deliver = this.deliver2;
            this.total = this.price + this.memory + this.storage + this.deliver
        },
        
    }
});

app.mount("#app");