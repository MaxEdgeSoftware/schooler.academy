<template>
    <div class="col-md-6 col-xl-3">
        <div class="card user-card">
            <div class="card-body text-center">
                <div class="mb-3">
                    <img :src="guardian.user.image_url" alt="image" class="avatar avatar-xl avatar-rounded rounded"/>
                </div>
                <div class="card-title mb-1">{{ guardian.user.name }}</div>
                <!-- <div class="text-muted">Backend</div> -->
                <div class="dots dropdown">
                    <a @click="toggleDots" href="#" class="link-secondary" data-bs-toggle="dropdown"
                        aria-expanded="false">
                        <!-- Download SVG icon from http://tabler-icons.io/i/dots -->
                        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="28" height="28" viewBox="0 0 24 24"
                            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round"
                            stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <circle cx="5" cy="12" r="1"></circle>
                            <circle cx="12" cy="12" r="1"></circle>
                            <circle cx="19" cy="12" r="1"></circle>
                        </svg>
                    </a>
                    <div class="dropdown-menu dropdown-menu-end" :class="{ show: showDots }">
                        <router-link class="dropdown-item"
                            :to="{ name: 'user-guardian-edit', params: { id: guardian.id } }">
                            {{ $t("edit") }}
                        </router-link>
                        <a class="dropdown-item" href="#" @click.prevent="deleteItem">
                            {{ $t("delete") }}
                        </a>
                    </div>
                </div>
            </div>
            <router-link :to="{ name: 'user-guardian-view', params: { id: guardian.id } }" class="card-btn">
                {{ $t("view_details") }}</router-link>
        </div>
        <DeleteModal :isShow="isDeleteModalShow" @close-modal="toggleDeleteModal" @delete-data="deleteGuardian" />
    </div>
</template>

<script>
    import DeleteModal from "../../components/modal/DeleteModal.vue";
    export default {
        components: {
            DeleteModal,
        },
        props: {
            guardian: {
                type: Object,
                required: true,
            },
        },
        data() {
            return {
                showDots: false,
                isDeleteModalShow: false,
            };
        },
        methods: {
            toggleDots() {
                this.showDots = !this.showDots;
            },
            toggleDeleteModal() {
                this.toggleDots();
                this.isDeleteModalShow = false;
            },
            deleteItem() {
                this.isDeleteModalShow = true;
            },
            async deleteGuardian() {
                try {
                    await axios.post(`/api/guardians/${this.guardian.id}`);
                    this.$emit("delete-item");
                    this.toastSuccess("Parent Deleted successfully!");
                } catch (error) {
                    if (error.status == 409 || error.status == 403) {
                        this.toastError(
                            `Delete failed, please delete all related items first.`
                        );

                        this.toggleDeleteModal();
                        return;
                    }
                    this.toastError();
                }
            },
        },
    };
</script>

<style>
</style>
