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

            <!-- report sheet -->
            <!-- <div class="col-12" v-if="students.length">
                <div class="card mt-3">
                    <div class="card-header">
                        <div class="card-title">{{ $t('results') }}</div>
                    </div>
                    <div class="card-body">
                        <template>
                            <table class="table table-hover ">
                                <thead>
                                    <tr>
                                        <th>{{ $t('subject') }}</th>
                                        <th>{{ $t('marks') }}</th>
                                        <th>{{ $t('point') }} / {{ $t('grade') }}</th>
                                        <th>{{ $t('status') }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(subject,index) in subjects" :key="index">
                                        <td>{{ subject.name }}</td>
                                        <td>
                                            <span v-html="setMarks(subject.id)"></span>
                                            <span v-if="subjectmarks && subjectmarks.length">
                                                {{ $t('out_of') }} {{ subject.total_marks }}
                                            </span>
                                        </td>
                                        <td v-if="students[0]"
                                            v-html="setPointGrade(students[0].subjects[subject.id].results)" />
                                        <td v-if="students[0]">
                                            <span class="pass" v-if="students[0].subjects[subject.id].pass">
                                                {{ $t('passed') }}
                                            </span>
                                            <span class="fail" v-else>
                                                {{ $t('failed') }}
                                            </span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colspan="3" class="text-right">
                                            <h2 class="font-weight-bold">{{ $t('gpa') }}:</h2>
                                        </td>
                                        <td>
                                            <h3>{{ finalResult.gpa }}</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td colspan="3" class="text-right">
                                            <h2 class="font-weight-bold">{{ $t('result') }}:</h2>
                                        </td>
                                        <td>
                                            <h3>
                                                <span v-if="finalResult.pass"
                                                    class="text-success">{{ $t('passed') }}</span>
                                                <span v-else class="text-danger">{{ $t('failed') }}</span>
                                            </h3>
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </template>
                    </div>
                </div>
            </div> -->
            <!-- /report sheet  -->

    <div id="report_sheet" class="container" v-if="students.length">
    <div class='mt-5 justify-content-center align-items-center mx-auto text-center' style='max-width:700px'>
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
                       <span v-html="setCa(subject.id)"></span>
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
                    <!-- <tr>
                      <td>90-100%</td>
                      <td>Excellent</td>
                    </tr>
                    <tr>
                      <td>80-89%</td>
                      <td>Excellent</td>
                    </tr>
                    <tr>
                      <td>70-79%</td>
                      <td>Very Good</td>
                    </tr>
                    <tr>
                      <td>60-69%</td>
                      <td>Very Good</td>
                    </tr>
                    <tr>
                      <td>50-59%</td>
                      <td>Good</td>
                    </tr>
                    <tr>
                      <td>40-49%</td>
                      <td>Fair</td>
                    </tr>
                    <tr>
                      <td>0-39%</td>
                      <td>Fail</td>
                    </tr> -->

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
            url: "/images/default.png"
        };
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
                this.toastError(error.response.data.message);
                console.log(error);
            }
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
                return subjectMark.total;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },
         setCa(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark.overall_ca;
            } else {
                return `<span class="text-danger">(Null)</span>`;
            }
        },
         setExam(subject_id) {
            if (this.subjectmarks && this.subjectmarks.length) {
                const subjectMark = this.subjectmarks.find(
                    subject => subject.subject_id == subject_id
                );
                return subjectMark.mark;
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
