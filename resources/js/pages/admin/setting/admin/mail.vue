<template>
    <div class="tab-pane active show" id="website">
        <div class="card">
            <div class="card-body border-bottom py-3">
                Only
            </div>
        </div>
        <div class="card mt-3">
            <div class="card-header">
                <h3 class="card-title">{{ $t("send_test_mail") }}</h3>
            </div>
            <div class="card-body">
                <form @submit.prevent="testMailSend" autocomplete="off">
                    <div class="row justify-content-center">
                        <div class="col-xxl-5 col-xl-7 col-md-6 col-12">
                            <div class="form-floating mb-3">
                                <input :placeholder="$t('test_email')" type="email" class="form-control"
                                    :class="{ 'is-invalid': testMailForm.errors.has('email') }"
                                    v-model="testMailForm.email" autocomplete="off" />
                                <label for="floating-input">{{ $t("email") }}</label>
                                <has-error :form="testMailForm" field="email"></has-error>
                            </div>
                        </div>
                        <div class="col-xxl-3 col-xl-5 col-md-6 col-12">
                            <button v-if="testMailForm.busy" type="button" class="btn btn-primary w-200 h-58">
                                {{ $t("sending") }}...
                            </button>
                            <button v-else type="submit" class="btn btn-primary w-200 h-58">
                                <icon-send />
                                {{ $t("send") }}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: new Form({
                type: "",
                host: "",
                port: "",
                password: "",
                username: "",
                encryption: "",
                from_name: "",
                from_address: ""
            }),

            testMailForm: new Form({
                email: ""
            })
        };
    },
    async created() {
        this.loadData();
    },
    methods: {
        async saveSetting() {
            try {
                let { data } = await this.form.put("/api/setting/mail");
                this.toastSuccess(data.message);

                setTimeout(() => {
                    window.location.reload();
                }, 1500);
            } catch (err) {
                this.toastError();
            }
        },
        async testMailSend() {
            try {
                let { data } = await this.testMailForm.post(
                    "/api/setting/send-test-mail"
                );
                this.testMailForm.reset();
                this.toastSuccess(data.message);
            } catch (err) {
                this.toastError();
            }
        },
        async loadData() {
            try {
                let { data } = await axios.get("/api/setting/mail");

                this.form.fill(data);
            } catch (err) {
                this.toastError();
            }
        },
        async reset() {
            this.loadData();
        }
    }
};
</script>
