<template>
    <div></div>
</template>

<script>
export default {
    data() {
        return {
            isMailConfigured: false
        };
    },
    async mounted() {
        let response = await axios.get("/api/setting/check-mail-setting");
        this.isMailConfigured = response.data;
    }
};
</script>
