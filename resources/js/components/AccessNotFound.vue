<template>
    <div class="p-5 card w-100 shadow-xs mx-auto text-center h-100">
        <div class="d-flex justify-content-center flex-column align-items-center">
            <img src="/images/not-found.svg" height="300" width="300" class="img-fluid" alt="">
            <h2 class="fs-2 font-weight-bold mt-3">Access Rescricted</h2>
            <p style="max-width: 300px; width: 95%; margin: 0 auto" class="hint-text">No active subscription or plan.
            </p>

            <a v-if="user?.role == 'admin'" href="/sms/plan-renew"
                class="btn btn-primary mt-3 border-0 px-3 rounded-2">Renew Subscription </a>
        </div>
    </div>
</template>

<script>
export default {
    props : ["user"],
    name : "AccessNotFound",
    data() {
        return {
            notFound: "/images/not-found.svg",
        };
    },
   
};
</script>
