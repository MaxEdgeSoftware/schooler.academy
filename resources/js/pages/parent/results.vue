<template>
    <div>
        <div class="page-header d-print-none">
            <div class="row align-items-center">
                <div class="col">
                    <h2 class="page-title">{{ $route.meta.title }}</h2>
                    <h2 class="page-pretitle">{{ $t('exam') }}</h2>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="row justify-content-center">
                    <div class="col-6 col-sm-2">
                        <select v-model="searchForm.student_id" class="form-control text-center"
                            :class="{'is-invalid': searchForm.errors.has('student_id')}">
                            <option value="" selected class="d-none">{{ $t('select_child') }}</option>
                            <option v-for="child in childs" :key="child.id" :value="child.student_id">
                                {{ child.name }}
                            </option>
                        </select>
                        <has-error :form="searchForm" field="student_id"></has-error>
                    </div>
                    <div class="col-6 col-sm-3" v-if="searchForm.student_id">
                        <select v-model="searchForm.exam_id" class="form-control text-center"
                            :class="{ 'is-invalid': searchForm.errors.has('exam_id') }">
                            <option value="" disabled>{{ $t('select_exam') }}</option>
                            <option v-for="exam in exams" :key="exam.id" :value="exam.id">
                                {{ exam.name }}
                            </option>
                        </select>
                        <has-error :form="searchForm" field="class_id"></has-error>
                    </div>
                    <div class="col-5 col-sm-2" v-if="searchForm.student_id && searchForm.exam_id">
                        <button class="btn btn-primary btn-outline" @click.prevent="getExamResults">
                            {{ $t('get_exam_results') }}
                        </button>
                    </div>
                </div>
            </div>

    <div id="report_sheet" class="container" v-if="students.length">

    <div v-if="template == 'a'" class='mt-5 justify-content-center align-items-center mx-auto text-center' style='max-width:700px'>
      <div class="row justify-content-center align-items-center mx-auto text-center">
        <!-- <div class="col-12 viewResult">

          <img class="viewResult img-fluid float-left ml-5" :src='students[0].user.image_url' alt='logo' />

          <h5 style='text-align:left' class='mr-5'><strong>School name</strong></h5>
          <p style='text-align:left'><strong>address</strong></p>
          <p class='float-right'><strong>Date Printed: 22/12/2023</strong></p>
        </div> -->
       
        <div style='border:3px solid grey'>
          <h3><strong>Termly Report For {{students[0].user.name}}</strong></h3>
          <div class="col-12 mb-3">
            <div class="row">
              <div class="col-9">
                <table>
                  <tr>
                    <th>Reg:Number</th>
                    <td></td>
                    <th colspan='5'></th>
                  </tr>
                  <tr>
                    <th>class</th>
                    <td>{{classs[0].name}} ({{class_section[0].name}})</td>
                    <th colspan='3'></th>
                  </tr>
                  <tr>
                    <!-- <th>Gender</th>
                    <td>Male</td> -->
                    <th>Number of pupils in class</th>
                    <td>{{total_students}}</td>
                    <th colspan='2'>Next term Begins:</th>
                    <td></td>
                  </tr>
                  <tr>
                    <th>Term</th>
                    <td id='term'>{{term[0].name}}</td>
                    <th colspan='2'>School Session:</th>
                    <td>{{session[0].name}}</td>
                  </tr>
                  <tr>
                    <th>Total School Days</th>
                    <td></td>
                    <th colspan='3'></th>
                  </tr>
                  <tr>
                    <th>Result Approved date</th>
                    <td></td>
                    <th colspan='3'></th>
                  </tr>
                </table>
              </div>
              <div class="col-3 mt-3" style='min-width:50px'>
                <table class='image'>
                  <tr>
                    <td>
                      <img :src="students[0].user.image_url" alt='passport' />
                    </td>
                  </tr>
                </table>
              </div>
            </div>
          </div>

          <div class="col-12">
            <table class='table-striped table-responsive'>
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Ca Score(30)</th>
                  <th>Exam Score(70)</th>
                  <th>Total Score(100)</th>
                  <!-- <th>Av.%(100)</th> -->
                  <th>Remarks</th>
                </tr>
              </thead>
              <tbody>
                <tr  v-for="(subject,index) in subjects" :key="index">
                  <td>{{subject.name}}</td>
                  <td>
                       <span v-html="setAllCa(subject.id)"></span>
                 </td>
                  <td>
                      <span v-html="setExam(subject.id)"></span>
                </td>                 
                  <td>
                    <span v-html="setMarks(subject.id)"></span>
                  </td>
                  <!-- <td>100%</td> -->
                <td v-if="students[0]" v-html="setRemark(students[0].subjects[subject.id].results)" />                
                </tr>
              </tbody>
            </table>
          </div>
          <div class="col-12">
            <div class="row justify-content-center align-items-center">
              <div class="col-8">
                Report Summary
                <table>
                  <tr>
                    <th>Overall Percentage</th>
                    <td><span id='percentInClass'>{{Number((finalResult.gpa/(subjects.length*100))*100).toFixed(2)}}</span>%</td>
                  </tr>
                  <tr>
                    <th>Total Score</th>
                    <td>{{ finalResult.gpa }}</td>
                  </tr>
                  <!-- <tr>
                    <th>Position</th>
                    <td><strong></strong></td>
                  </tr> -->
                  <tr>
                    <th>Total Subjects</th>
                    <td>{{subjects.length}}</td>
                  </tr>
                  <tr>
                    <th>Class Teacher's Comment</th>
                    <td id='teacherComment'>
                      <span v-if="finalResult.pass" class="text-success">{{ $t('Good Result') }}</span>
                      <span v-else class="text-danger">{{ $t('Poor result') }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th>School Head Comment</th>
                    <td  id='principalComment'>
                         <span v-if="finalResult.pass" class="text-success">{{ $t('Good Result, keep it up') }}</span>
                          <span v-else class="text-danger">{{ $t('Poor result, put more effort') }}</span>
                    </td>
                  </tr>
                  <tr>
                    <th class='text-center border-0'>{{school_info.admin}}</th>
                    <th class='text-center border-0'></th>
                  </tr>
                  <tr>
                    <td class='text-center text-success border-0'>School Head</td>
                    <td id='status' class='text-center text-dark border-0'>
                         <span v-if="finalResult.pass" class="text-success">{{ $t('passed') }}</span>
                         <span v-else class="text-danger">{{ $t('failed') }}</span>
                    </td>
                  </tr>
                </table>
              </div>
              <div class="col-4">
                Grading System
                <table>
                  <thead>
                    <tr>
                      <th>Key</th>
                      <th>Point</th>
                    </tr>
                  </thead>
                  <tbody v-for ="(result_rule, index) in result_rules" :key="index">
                    <tr>
                      <td>{{result_rule.min_mark}}-{{result_rule.max_mark}}%</td>
                      <td>{{result_rule.name}}</td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- <div id='print' class='col ml-5'><a href=''><i class='fa fa-print'></i></a></div>  <div id='close' class='col mr-5'><a href='result.php'><i class='fa fa-times'></i></a></div> -->
      </div>
    </div>

                    <div v-if="template == 'b'" class='mt-5 justify-content-center align-items-center mx-auto text-center' style='max-width:700px'>
                    <div class="row justify-content-center align-items-center mx-auto text-center">
                        <div style='border:3px solid grey'>
                            <div class="col-12 mb-3">
                                <div class="row">
                                    <div class="col-12">
                                        <table>
                                             <tr>
                                                <th><h3>{{school_info.school}}</h3></th>
                                                <th colspan='4'><h3>{{school_info.address}}</h3></th>
                                            </tr>
                                            <tr>
                                                <th>Name</th>
                                                <td colspan='4'>{{students[0].user.name}}</td>
                                            </tr>
                                            <tr>
                                                <th>Class</th>
                                                <td colspan='4'>{{classs[0].name}} ({{class_section[0].name}})</td>
                                            </tr>
                                            <tr>
                                                <th>Gender</th>
                                                <td colspan='4'>{{students[0].user.gender}}</td>
                                            </tr>

                                            <tr>
                                                <th>Term</th>
                                                <td id='term'>{{term[0].name}}</td>
                                                <th colspan='2'>School Session:</th>
                                                <td>{{session[0].name}}</td>
                                            </tr>
                                            <tr>
                                                <th>Attendance</th>
                                                <td colspan="4">{{attendance.total_present}} out of {{attendance.total_attendance}}</td>
                                            </tr>
                                        </table>
                                    </div>
                                    <!-- <div class="col-3 mt-3" style='min-width:50px'>
                                        <table class='image'>
                                            <tr>
                                                <td>
                                                    <img :src="students[0].user.image_url" alt='passport' />
                                                </td>
                                            </tr>
                                        </table>
                                    </div> -->
                                </div>
                            </div>
                      <h1>Assessment of Cognitive Domain</h1>
                            <div class="col-12">
                                <table class='table-striped table-responsive'>
                                    <thead>
                                        <tr>
                                            <th>Mark Obtained</th>
                                            <th>100</th>
                                            <th>100</th>
                                            <th>100</th>
                                            <th>100</th>
                                            <th>100</th>
                                            <th>100</th>
                                            <th>100</th>
                                            <th colspan="2"></th>
                                        </tr>
                                        <tr>
                                            <th>Subject</th>
                                            <th>T1</th>
                                            <th>T2</th>
                                            <th>T3</th>
                                            <th>T4 (T1+T2+T3/3)</th>
                                            <th>Exam</th>
                                            <th>Total (T4+Exam/2)</th>
                                            <th>Pre_cum</th>
                                            <!-- <th>Grade</th> -->
                                            <!-- <th>Pos</th> -->
                                            <th>Remarks</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(subject,index) in subjects" :key="index">
                                            <td>{{subject.name}}</td>
                                            <td>
                                                <span v-html="setCa1(subject.id)"></span>
                                            </td>
                                            <td>
                                                <span v-html="setCa2(subject.id)"></span>
                                            </td>
                                             <td>
                                                <span v-html="setCa3(subject.id)"></span>
                                            </td>
                                             <td>
                                                <span v-html="setAllCa(subject.id)"></span>
                                            </td>
                                             <td>
                                                <span v-html="setExam(subject.id)"></span>
                                            </td>
                                             <td>
                                                <span v-html="setMarks(subject.id)"></span>
                                            </td>
                                             <td>
                                                <span v-html="setCum(subject.id)"></span>
                                            </td>
                                             <!-- <td>
                                               <span></span>
                                            </td> -->
                                            <!-- <td>
                                                <span></span>
                                            </td> -->
                                            <!-- <td>100%</td> -->
                                            <td v-if="students[0]" v-html="setRemark(students[0].subjects[subject.id].results)" />
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <div class="col-12">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-6">
                                        <table>
                                            <tr>
                                                <th>Affective Domain</th>
                                                <th>Ratings</th>
                                            </tr>
                                            <tr>
                                                <td>Punctuality</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Attendance</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Neatness</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Relationship with others</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Self-control</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Promptness in completing work</td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="col-6">
                                        <table>
                                             <tr>
                                                <th>Psychomotor Domain</th>
                                                <th>Ratings</th>
                                            </tr>
                                            <tr>
                                                <th>Handwriting</th>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <th>Games & Sports</th>
                                                <td></td>
                                            </tr>

                                            <tr>
                                                <td>Handling tools</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Drawing & Painting</td>
                                                <td></td>
                                            </tr>
                                            <tr>
                                                <td>Musical skills</td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </div>
                                </div>
                            </div>


                            <div class="col-12">
                                <div class="row justify-content-center align-items-center">
                                    <div class="col-8">
                                        <table>
                                            <tr>
                                                <td>Class Tutor's Comment</td>
                                                <td>
                                                   <span v-if="finalResult.pass" class="text-success">{{ $t('Good Result, keep it up') }}</span>
                                                  <span v-else class="text-danger">{{ $t('Poor result, put more effort') }}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Administrator</td>
                                                <td>{{school_info.admin}}</td>
                                            </tr>
                                            <tr>
                                                <td>Administrator's Comment</td>
                                                <td>
                                                   <span v-if="finalResult.pass" class="text-success">{{ $t('Good Result, keep it up') }}</span>
                                                  <span v-else class="text-danger">{{ $t('Poor result, put more effort') }}</span>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>Resumption Day</td>
                                                <td></td>
                                            </tr>
                                        </table>
                                    </div>
                                    <div class="col-4">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Key</th>
                                                    <th>Point</th>
                                                </tr>
                                            </thead>
                                            <tbody v-for="(result_rule, index) in result_rules" :key="index">
                                                <tr>
                                                    <td>{{result_rule.min_mark}}-{{result_rule.max_mark}}%</td>
                                                    <td>{{result_rule.name}}</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>



                        </div>
                        <!-- <div id='print' class='col ml-5'><a href=''><i class='fa fa-print'></i></a></div>  <div id='close' class='col mr-5'><a href='result.php'><i class='fa fa-times'></i></a></div> -->
                    </div>
                </div>



  </div>

            <template v-else>
                <NotFound word="results" />
            </template>

        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    data() {
        return {
            disabledDates: {
                from: new Date(Date.now() + 8640000)
            },
            // search form
            searchForm: new Form({
                exam_id: "",
                student_id: ""
            }),

            subjects: [],
            students: [],
            subjectmarks: [],
            finalResult: {},
            schoolInfo: '',
            total_students: [],
            classs: [],
            class_section: [],
            result_rules: [],
            session: '',
            term: '',
            template: '',
            attendance: "",
            gender: "",
            url: "/images/default.png"
        };
    },

      watch: {
            async "searchForm.student_id"(student_id) {
                if (student_id) {
                        axios.get(`/getid/${student_id}`).then((response)=>{
                            let id = response.data;
                            console.log(id);
                            axios.get(`/api/parent/student/${id}/attendance`).then((response)=>{
                                 this.attendance = response.data;
                                    console.log(response.data);

                           });
                     });
                }
            },
        },
     
    methods: {
        async getExamResults() {
            try {
                const response = await this.searchForm.post(
                    `/api/parent/exam-results`
                );
                this.students = response.data.students;
                this.subjects = response.data.subjects;
                this.total_students = response.data.total_students;
                this.classs = response.data.classs;
                this.class_section = response.data.class_section;
                this.result_rules = response.data.result_rules;
                this.session = response.data.session;
                this.term = response.data.term;
                this.school_info = response.data.school_info;
                this.subjectmarks = response.data.students[0].marks;
                this.finalResult = response.data.students[0].final_results;
            } catch (error) {
                this.toastError(error.response.data.message
                );
                console.log(error);
            }
        },

        async getTemplate() {
           axios.get("/api/setting")
                .then((response) => {
                    this.template = response.data.setting.template;
                    console.log(response.data.setting.template);
                })
        },

        getResult(subject, student) {
            const subjectResult = student.subjects[subject.id];
            if (subjectResult.entry == false) {
                return subjectResult.results;
            }

            return subjectResult.results["grade"];
        },
        setPointGrade(result) {
            if (result.point) {
                if (result.point == 0) {
                    return `<span>
                    <b class="text-danger">${
                        result.point
                    }</b>${" / "}<b class="text-danger">${result.grade}</b>
                </span>`;
                } else {
                    return `<span>
                    <b>${result.point}</b>${" / "}<b>${result.grade}</b>
                </span>`;
                }
            } else if (result.point == 0) {
                return `<span>
                            <b>${result.point}</b>${" / "}<b>${result.grade}</b>
                        </span>`;
            }

            return `<span class="text-danger">(Null)</span>`;
        },
         setRemark(result) {
            if (result.point) {
                if (result.point == 0) {
                    return `<span>
                    <b class="text-danger">${result.grade}</b>
                </span>`;
                } else {
                    return `<span>
                    <b>${result.grade}</b>
                </span>`;
                }
            } else if (result.point == 0) {
                return `<span>
                        <b>${result.grade}</b>
                        </span>`;
            }

            return `<span class="text-danger">(Null)</span>`;
        },
        setMarks(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark?.total;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },

         setCa1(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark?.ca;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },

         setCa2(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark?.ca2;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },

         setCa3(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark?.ca3;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },

         setAllCa(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark?.overall_ca;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },
         setExam(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark?.mark;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },

        setCum(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark?.mark;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        }
    },
    computed: {
        ...mapGetters({
            exams: "exam/examList",
            childs: "parent/getChilds"
        })
    },
    async created() {
        if (this.authenticateUser.original_role != "Guardian") {
            this.redirect("401");
        }
        await this.$store.dispatch("exam/fetchExamsList");
        await this.$store.dispatch("parent/fetchChilds");
    },
    mounted() {
        if (this.exams.length) {
            this.searchForm.exam_id = this.exams[0].id;
            this.searchForm.student_id = this.childs[0].student_id;
            this.getExamResults();
        }
          this.getTemplate();
    }
};
</script>


<style lang="scss" scoped>
    .text-align-center {
        text-align: center;
    }

    .result {
        span.no-result {
            color: red;
        }
    }

    .pass,
    .fail {
        padding: 5px;
    }

    .pass {
        background-color: green;
        color: white;
    }

    .fail {
        background-color: red;
        color: white;
    }

    .text-right {
        text-align: right;
    }





// report sheet style
  #report_sheet ul img{
    max-width:50px;
    max-height:50px;
 }
 
  span >img{
    max-width:15px;
    max-height:15px;
 }
 
 
#report_sheet nav a{
 color:#B0596F !important;
 }
 
 
#report_sheet div h1{
   width:auto;
   background:#80132F; 
   color:white;
 }

 #report_sheet .viewResult h1{
   width:auto;
  background:white;
   color:black;
   }

 #report_sheet .viewResult img{
     max-width:50px;
     max-height:50px;

   }
 
#report_sheet .result{
   background-color:#B0596F;
   color:white !important;
 }
 
#report_sheet .result a{
   color:white !important;
 }
 
 #report_sheet .result img{
    max-width:50px;
    max-height:50px;
    position:absolute;
 }
 
 #report_sheet nav img{
   max-width:50px;
   max-height:50px;
 }
 
//  *{
//  box-sizing : border-box;
//  margin: 0;
//  padding:0;
//  border:0;
//  font-family: Arial, Helvetica, sans-serif;
// }

#report_sheet nav{
   min-height:40px;
}
 

#report_sheet table, td, th, tbody {
 border: 2px solid #d1cecd;
 padding: 2px;
 text-align:left;
 font-size:12px;
}

#report_sheet thead{
 font-weight:bold;
 text-align:center;
}

#report_sheet table {
 border-collapse:collapse;
  width: 100%;
}

#report_sheet table img{
 max-width: 100px;
 max-height: 100px;
}

#report_sheet table.image{
 width: 50%;
}
</style>
