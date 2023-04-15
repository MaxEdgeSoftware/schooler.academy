import axios from 'axios'

export default {
    namespaced: true,
    state: {
        setting: {}
    },
    getters: {
        setting(state) {
            return state.setting;
        }
    },
    mutations: {
        SET_ADMIN_SETTING(state, responseData) {
            state.setting = responseData;
        }
    },
    actions: {
        async fetchSetting(context) {
            try {
                let response = await axios.get("/api/setting");
                let response_ = await axios.get("/app/setting");
                console.log(response_)
                console.log(response)
                if(response.data.setting == 'not-found'){
                    window.location.assign('/not-found');
                }
                context.commit("SET_ADMIN_SETTING", response.data.setting);
            } catch (error) {
                this.toastError(error.response.data.message);
                console.log(error);
            }
        }
    }
};
