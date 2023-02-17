<template>
    <div>
        <div class="page" v-if="permissionLoaded">
            <sidebar />
            <navbar />
            <div class="content">
                <div v-if="hasValidSub">
                    <mail-configure-alert/>
                    <div :class="setting.layout == 'boxed' ? 'container-xl' : 'container-fluid'">
                        <vue-page-transition name="fade">
                            <router-view />
                        </vue-page-transition>
                    </div>
                </div>
                <div v-else>
                    <div class="p-5 card w-100 shadow-xs mx-auto text-center h-100" >
                        <div class="d-flex justify-content-center flex-column align-items-center">
                            <img src="/images/not-found.svg" height="300" width="300" class="img-fluid" alt="">
                            <h2 class="fs-2 font-weight-bold mt-3">Access Rescricted</h2>
                            <p style="max-width: 300px; width: 95%; margin: 0 auto" class="hint-text">No active subscription or plan.</p>

                            <a v-if="user.role == 'admin'" href="/sms/plan-renew" class="btn btn-primary mt-3 border-0 px-3 rounded-2">Renew Subscription </a>
                        </div>
                    </div>
                </div>
                <footer />
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Footer from "../components/layout/Footer.vue";
import Navbar from "../components/layout/Navbar.vue";
import Sidebar from "../components/layout/Sidebar.vue";
import Loader from "../components/Loader.vue";
import MailConfigureAlert from "../components/partials/MailAlert.vue";

export default {
    components: {
        Loader,
        Navbar,
        Sidebar,
        Footer,
        MailConfigureAlert,
    },
    data() {
        return {
            message: "",
            isMailConfigured: false,
            user : {},
            hasValidSub : true
        };
    },
    computed: {
        permissionLoaded() {
            return this.$store.getters[
                "rolepermission/getPermissionLoadingStatus"
            ];
        },
        setting() {
            return this.$store.getters["setting/setting"];
        },
        
        
    },
    methods : {
        getUser () {
            axios.get('/auth-user')
            .then((response) => {
                this.user = response.data
            }).catch((error) => {
                return {};
            })
        },
        checkHasValidSub(){
            // if the current page is the renewal page
            var href = window.location.href
            // return true, let's give them access to renew
            if (href.includes("plan-renew")){
              this.hasValidSub = true;
              return false;
            }
            axios.get('/app-subscription/check')
            .then((response) => {
                this.hasValidSub = response.data
            }).catch((error) => {
                alert("Unable to check subscription");
                this.hasValidSub = false;
            })
        },
    },
    created() {
        this.getUser();
        this.checkHasValidSub()
    },
};
</script>
