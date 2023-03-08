<template>
    <div>
        <div class="page-header d-print-none">
            <div class="row align-items-center">
                <div class="col">
                    <h2 class="page-title">{{ $route.meta.title }}</h2>
                    <h2 class="page-pretitle">{{ $t("exam") }}</h2>
                </div>
            </div>
        </div>
        <div class="row mt-2">
            <div class="col-md-12">
                <div class="row justify-content-center mt-3">
                    <div class="col-sm-4 col-md-3 col-xl-2">
                        <div class="form-group">
                            <select id="exam_id" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('exam_id') }" v-model.number="form.exam_id">
                                <option value="" disabled>{{ $t("select_exam") }}</option>
                                <option v-for="exam in exams" :key="exam.id" :value="exam.id">
                                    {{ exam.name }}
                                </option>
                            </select>
                            <has-error :form="form" field="exam_id"></has-error>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 col-xl-2" v-if="form.exam_id">
                        <div class="form-group">
                            <select id="class_id" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('class_id') }" v-model.number="form.class_id"
                                @change="changeClass">
                                <option value="" disabled>{{ $t("select_class") }}</option>
                                <option v-for="singleClass in classes" :key="singleClass.id" :value="singleClass.id">
                                    {{ singleClass.name }}
                                </option>
                            </select>
                            <has-error :form="form" field="class_id"></has-error>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 col-xl-2" v-if="form.exam_id && form.class_id">
                        <div class="form-group">
                            <select id="section_id" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('section_id') }"
                                v-model.number="form.section_id">
                                <option value="" disabled>{{ $t("select_section") }}</option>
                                <option v-for="section in sections" :key="section.id" :value="section.id">
                                    {{ section.name }}
                                </option>
                            </select>
                            <has-error :form="form" field="section_id"></has-error>
                        </div>
                    </div>
                    <div class="col-sm-4 col-md-3 col-xl-2" v-if="form.exam_id && form.class_id && form.section_id">
                        <div class="form-group">
                            <select id="subject_id" class="form-control"
                                :class="{ 'is-invalid': form.errors.has('subject_id') }"
                                v-model.number="form.subject_id">
                                <option value="" disabled>{{ $t("select_subject") }}</option>
                                <option v-for="subject in subjects" :key="subject.id" :value="subject.id">
                                    {{ subject.name }}
                                </option>
                            </select>
                            <has-error :form="form" field="subject_id"></has-error>
                        </div>
                    </div>
                    <div class="col-md-2" v-if="form.exam_id && form.class_id && form.section_id && form.subject_id">
                        <button class="btn btn-primary" type="button" @click.prevent="loadStudents">
                            {{ $t("load_data") }}
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <template v-if="students.length && mark_load">
            <div class="col-md-12 mt-3">
                <div class="card user-card">
                    <div class="card-body table-responsive">
                        <table class="table table-bordered table-striped table-hover table-vcenter text-nowrap mb-3">
                            <thead>
                                <tr>
                                    <th>{{ $t("name") }}</th>
                                    <th>{{ $t("roll") }}</th>
                                    <th>{{ $t("class") }}</th>
                                    <th>{{ $t("section") }}</th>
                                    <th>{{ $t("Class-work") }}</th>
                                     <th>{{ $t("Assignment") }}</th>
                                     <th>{{ $t("Attendance") }}</th>
                                     <th>{{ $t("Project") }}</th>
                                     <th>{{ $t("ca") }}</th>
                                     <th>{{ $t("ca2") }}</th>
                                     <th>{{ $t("ca3") }}</th>
                                    <th>{{ $t("Exam") }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(student, index) in students" :key="student.id">
                                    <td>{{ student.user.name }}</td>
                                    <td>{{ student.roll_no }}</td>
                                    <td>{{ student.classs.name }}</td>
                                    <td>{{ student.section.name }}</td>

                                      <td>
                                        <input type="number" min="0" max="100" v-model="cw_form[index]"
                                            class="form-control" :class="{ 'is-invalid': isCwValidationError(index) }" />
                                        <div class="help-block invalid-feedback" v-if="isCwValidationError(index)">
                                            {{ getCwValidationErrorMessage(index) }}
                                        </div>
                                    </td>


                                      <td>
                                        <input type="number" min="0" max="100" v-model="assign_form[index]"
                                            class="form-control" :class="{ 'is-invalid': isAssignValidationError(index) }" />
                                        <div class="help-block invalid-feedback" v-if="isAssignValidationError(index)">
                                            {{ getAssignValidationErrorMessage(index) }}
                                        </div>
                                    </td>

                                      <td>
                                        <input type="number" min="0" max="100" v-model="pro_form[index]"
                                            class="form-control" :class="{ 'is-invalid': isProValidationError(index) }" />
                                        <div class="help-block invalid-feedback" v-if="isProValidationError(index)">
                                            {{ getProValidationErrorMessage(index) }}
                                        </div>
                                    </td>


                                      <td>
                                        <input type="number" min="0" max="100" v-model="attend_form[index]"
                                            class="form-control" :class="{ 'is-invalid': isAttendValidationError(index) }" />
                                        <div class="help-block invalid-feedback" v-if="isAttendValidationError(index)">
                                            {{ getAttendValidationErrorMessage(index) }}
                                        </div>
                                    </td>


                                     <td>
                                        <input type="number" min="0" max="100" v-model="ca_form[index]"
                                            class="form-control" :class="{ 'is-invalid': isCaValidationError(index) }" />
                                        <div class="help-block invalid-feedback" v-if="isCaValidationError(index)">
                                            {{ getCaValidationErrorMessage(index) }}
                                        </div>
                                    </td>

                                      <td>
                                        <input type="number" min="0" max="100" v-model="ca_form2[index]"
                                            class="form-control" />
                                    </td>

                                      <td>
                                        <input type="number" min="0" max="100" v-model="ca_form3[index]" class="form-control" />
                                    </td>

                                    <td>
                                        <input type="number" min="0" max="100" v-model="mark_form[index]" 
                                        class="form-control" :class="{ 'is-invalid': isExamValidationError(index) }" />
                                    
                                     <div class="help-block invalid-feedback" v-if="isExamValidationError(index)">
                                            {{ getExamValidationErrorMessage(index) }}
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <button v-if="checkPermission('exam-mark-distribution')" class="btn btn-primary" type="button"
                            @click.prevent="saveMarks">
                            {{ $t("save_marks") }}
                        </button>
                    </div>
                </div>
            </div>
        </template>
        <div v-else class="d-flex justify-content-center py-3">
            <NotFound word="Marks" />
        </div>
    </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";
import ButtonLoading from "../../../components/ButtonLoading.vue";
import CardDropdown from "../../../components/academic/CardDropdown.vue";
import DeleteModal from "../../../components/modal/DeleteModal.vue";
import NotFound from "../../../components/NotFound.vue";
import { mapGetters } from "vuex";

export default {
    mixins: [clickaway],
    components: {
        ButtonLoading,
        CardDropdown,
        DeleteModal,
        NotFound
    },
    data() {
        return {
            subjects: [],
            sections: [],
            students: [],
            mark_form: [],
            ca_form: [],
            ca_form2: [],
            ca_form3: [],
            cw_form: [],
            assign_form: [],
            attend_form: [],
            pro_form: [],
            roll_form: {},
            mark_errors: [],
            ca_errors: [],
            cw_errors: [],
            assign_errors: [],
            attend_errors: [],
            pro_errors: [],
            mark_load: false,

            form: new Form({
                session_id: "",
                term_id: "",
                exam_id: "",
                class_id: "",
                section_id: "",
                subject_id: ""
            })
        };
    },
    methods: {
        async changeClass() {
            try {
                this.cw_form = [];
                this.cw_form2 = [];
                this.cw_form3 = [];
                this.assign_form = [];
                this.attend_form = [];
                this.pro_form = [];
                this.ca_form = [];
                this.mark_form = [];
                const subjectResponse = await axios.get(
                    `/api/classes/${this.form.class_id}/subjects`
                );
                const sectionResponse = await axios.get(
                    `/api/classes/${this.form.class_id}/sections`
                );
                this.subjects = subjectResponse.data.subjects;
                this.sections = sectionResponse.data.sections;
            } catch (error) {
                this.toastError(error.response.data.message);
                console.log(error);
            }
        },
        async loadStudents() {
            try {
                const response = await this.form.post(
                    `/api/exam-mark/students`
                );
                this.students = response.data;

                if (this.students.length) {
                    this.loadMarks();
                }
            } catch (error) {
                this.toastError(error.response.data.message);
                console.log(error);
            }
        },

         getCwValidationErrorMessage(index) {
            if (this.cw_errors.hasOwnProperty(`student_data.${index}.class_work`)) {
                return this.cw_errors[`student_data.${index}.class_work`][0];
            }
            return "";
        },
        isCwValidationError(index) {
            if (this.cw_errors.hasOwnProperty(`student_data.${index}.class_work`)) {
                return true;
            }
            return false;
        },

         getAssignValidationErrorMessage(index) {
            if (this.assign_errors.hasOwnProperty(`student_data.${index}.assign`)) {
                return this.assign_errors[`student_data.${index}.assign`][0];
            }
            return "";
        },
        isAssignValidationError(index) {
            if (this.assign_errors.hasOwnProperty(`student_data.${index}.assign`)) {
                return true;
            }
            return false;
        },


         getAttendValidationErrorMessage(index) {
            if (this.attend_errors.hasOwnProperty(`student_data.${index}.attend`)) {
                return this.attend_errors[`student_data.${index}.assign`][0];
            }
            return "";
        },
        isAttendValidationError(index) {
            if (this.attend_errors.hasOwnProperty(`student_data.${index}.attend`)) {
                return true;
            }
            return false;
        },


         getProValidationErrorMessage(index) {
            if (this.pro_errors.hasOwnProperty(`student_data.${index}.project`)) {
                return this.pro_errors[`student_data.${index}.project`][0];
            }
            return "";
        },
        isProValidationError(index) {
            if (this.pro_errors.hasOwnProperty(`student_data.${index}.project`)) {
                return true;
            }
            return false;
        },

        getCaValidationErrorMessage(index) {
            if (this.ca_errors.hasOwnProperty(`student_data.${index}.ca`)) {
                return this.ca_errors[`student_data.${index}.ca`][0];
            }
            return "";
        },

        isCaValidationError(index) {
            if (this.ca_errors.hasOwnProperty(`student_data.${index}.ca`)) {
                return true;
            }
            return false;
        },

         getExamValidationErrorMessage(index) {
            if (this.ca_errors.hasOwnProperty(`student_data.${index}.exam`)) {
                return this.ca_errors[`student_data.${index}.exam`][0];
            }
            return "";
        },

        isExamValidationError(index) {
            if (this.ca_errors.hasOwnProperty(`student_data.${index}.exam`)) {
                return true;
            }
            return false;
        },
        
        async saveMarks() {
            try {
                const data = [];
                this.students.forEach((student, index) => {
                    const single_student = {};
                    single_student.exam_id = this.form.exam_id;
                    single_student.class_id = this.form.class_id;
                    single_student.section_id = this.form.section_id;
                    (single_student.subject_id = this.form.subject_id),
                    (single_student.class_work = this.cw_form[index]);
                    (single_student.assign = this.assign_form[index]);
                    (single_student.attend = this.attend_form[index]);
                    (single_student.project = this.pro_form[index]);
                    (single_student.ca = this.ca_form[index]);
                    (single_student.ca2 = this.ca_form2[index]);
                    (single_student.ca3 = this.ca_form3[index]);
                    (single_student.mark = this.mark_form[index]);
                    single_student.roll_no = this.students[index].roll_no;
                    data.push(single_student);
                });
                const response = await axios.post(`/api/exam-mark/save`, {
                    student_data: data
                });
                this.toastSuccess(response.data.message);
            } catch (error) {
                this.toastError(error.response.data.message);
                if (error.response.status == 422) {
                    this.cw_errors = error.response.data.errors;
                    this.assign_errors = error.response.data.errors;
                    this.attend_errors = error.response.data.errors;
                    this.pro_errors = error.response.data.errors;
                    this.ca_errors = error.response.data.errors;
                    this.mark_errors = error.response.data.errors;
                }
            }
        },
        async loadMarks() {
            try {
                this.mark_load = false;
                this.mark_form = [];
                this.ca_form = [];
                this.ca_form2 = [];
                this.ca_form3 = [];
                this.cw_form = [];
                this.assign_form = [];
                this.attend_form = [];
                this.pro_form = [];
                const roll_numbers = [];
                this.students.forEach(student => {
                    roll_numbers.push(student.roll_no);
                });

                const data = {
                    exam_id: this.form.exam_id,
                    class_id: this.form.class_id,
                    section_id: this.form.section_id,
                    subject_id: this.form.subject_id,
                    roll_numbers: roll_numbers
                };

                const response = await axios.post(`/api/exam-mark/marks`, data);
                response.data.forEach((mark, index) => {
                    this.cw_form[index] = mark.class_work;
                    this.assign_form[index] = mark.assign;
                    this.attend_form[index] = mark.attend;
                    this.pro_form[index] = mark.project;
                    this.ca_form[index] = mark.ca;
                    this.ca_form2[index] = mark.ca2;
                    this.ca_form3[index] = mark.ca3;
                    this.mark_form[index] = mark.mark;
                });
                this.mark_load = true;
            } catch (error) {
                this.toastError(error.response.data.message);
                console.log(error);
            }
        }
    },
    computed: {
        ...mapGetters({
            exams: "exam/examList",
            classes: "classs/classes"
        })
    },
    async created() {
        await this.hasPermisssion("exam-mark-list");
        await this.$store.dispatch("exam/fetchExamsList");
        await this.$store.dispatch("classs/fetchClasses");
    }
};
</script>

<style>
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity 0.3s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0;
    }

    .user-card {
        position: relative;
    }

    .dots {
        position: absolute;
        top: 5px;
        right: 10px;
    }

    select {
        margin-bottom: 0;
    }

    .form-group {
        margin-bottom: 15px;
    }
</style>
