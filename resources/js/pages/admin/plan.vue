<template>
    <div>
        <!-- Overview -->
        <div v-if="loading" style="position: fixed; z-index: 100121212; left: 0; top: 0; height: 100vh; width: 100%; display: flex; justify-content: center; align-items: center; background: rgba(0, 0, 0, 0.5)">
            <Loader v-if="loading" />
        </div>
        <div v-else class="p-5 card w-100 shadow-xs mx-auto text-center h-100">
            <div class="container">
                <div>
                    <p class="h2 text-center mb-5">Plan Renewal/Subscription</p>
                </div>
                <div class="row mt-3">
                    <div v-for="plan in plans" :key="plan.id" class="mx-auto col-md-4 ">
                        <div class="card d-flex align-items-center justify-content-center">
                            <div class="ribon"> <span class="fas fa-infinity"></span> </div>
                            <p class="h-1 pt-5">{{ plan.name }}</p> 
                            <span class="price mt-2"> <sup class="sup">N</sup> 
                                <span
                                    class="number">{{ plan.amount }}</span> </span>
                            <!-- <ul class="mb-5 list-unstyled text-muted">
                                <li><span class="fa fa-check me-2"></span>Bedrooms cleaning</li>
                                <li><span class="fa fa-check me-2"></span>Vacuuming</li>
                                <li><span class="fa fa-check me-2"></span>Bathroom cleaning</li>
                                <li><span class="fa fa-check me-2"></span>Mirrow cleaning</li>
                                <li><span class="fa fa-check me-2"></span>Livingroom cleaning</li>
                            </ul> -->
                            <paystack v-if="!loading" :amount="plan.amount * 100" :email="email" :paystackkey="paystackkey"
                                :reference="reference" :callback="processPayment" :close="paymentClose" class="btn btn-primary">
                                Make Payment
                            </paystack>
                            <br />
                        </div>
                    </div>

                </div>
            </div>
            <p class="text-muted">Need help? Contact <a target="_blank" href="https://maxedge.co.uk">MAXEDGE UK LTD.</a>
            </p>
        </div>

    </div>
</template>

<script>
import axios from 'axios';
import paystack from 'vue-paystack';
export default {
    components: {
        paystack
    },
    data() {
        return {
            plans: [],
            loading: true,
            fullname: '',
            email: '',
            paystackkey: '',
        };
    },
    computed: {
        reference() {
            return '' + Math.floor((Math.random() * 1000000000) + 1)
        },

    },
    methods: {
        getUser() {
            axios.get('/auth-user')
                .then((response) => {
                    this.fullname = response.data.name
                    this.email = response.data.email

                }).catch((error) => {
                    return {};
                })
        },
        GetPaystackkey() {
            axios.get("/get-paystack-key")
                .then((response) => {
                    this.paystackkey = response.data
                    console.log(response.data)
                    this.loading = false;
                })

        },
        paymentClose() {
            alert("payment modal closed")
        },
        processPayment() {
            this.loading = true;
            let self = this;
            axios.post("/payment-validate", {
                reference : self.reference,
            })
            .then((response)=> {
                if(response.data.status == "success"){
                    alert("Subscription Added");
                    window.location.href = "/sms"
                }else{
                    alert("payment validation failed")
                }
            })
        }
    },

    async mounted() {
        

        this.GetPaystackkey()
        this.getUser()
        // this.loading = true;
        axios.get('/edutech-plans')
            .then((response) => {
                this.plans = response.data.plans
            })
    }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

p, h1, h2, h3, h4, h5, h6{font-family: 'Poppins', sans-serif}
.h-1 {
    text-transform: uppercase
}

.ribon {
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -50%);
    width: 80px;
    height: 80px;
    background-color: #2b98f0;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center
}

.ribon .fas.fa-spray-can,
.ribon .fas.fa-broom,
.ribon .fas.fa-shower,
.ribon .fas.fa-infinity {
    font-size: 30px;
    color: white
}

.card .price {
    color: #2b98f0;
    font-size: 30px
}

.card ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center
}

.card ul li {
    font-size: 12px;
    margin-bottom: 8px
}

.card ul .fa.fa-check {
    font-size: 8px;
    color: gold
}

.card .btn {
    width: 200px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #2b98f0;
    border: none;
    border-radius: 0px;
    box-shadow: none
}
</style>
