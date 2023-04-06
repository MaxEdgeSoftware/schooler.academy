<?php

namespace App\Traits;

use App\Models\ExamResultRule;

trait Results
{
    /**
     * Formate Student Results
     */
    public function formatStudentsResultData($students, $subjects)
    {
        $result_rules = ExamResultRule::orderBy('id', 'ASC')->get();

        $data = [];

        $template = adminSetting()->template;

        foreach ($students as $student) {
            $marks = $student->marks->groupBy('subject_id');
            foreach($marks as $mark){
                $mark[0]['ca'] = (int) $mark[0]['ca'];
                $mark[0]['ca2'] = (int) $mark[0]['ca2'];
                $mark[0]['ca3'] = (int) $mark[0]['ca3'];
                $mark[0]['assign'] = (int) $mark[0]['assign'];
                $mark[0]['class_work'] = (int) $mark[0]['class_work'];
                $mark[0]['project'] = (int) $mark[0]['project'];
                $mark[0]['attend'] = (int) $mark[0]['attend'];
                $mark[0]['subject_id'] = (int) $mark[0]['subject_id'];
                $mark[0]['roll_no'] = (int) $mark[0]['roll_no'];
                $mark[0]['mark'] = (int) $mark[0]['mark'];
                $mark[0]['cum'] = (int) $mark[0]['cum'];

                if($template == 'a'){
                    $mark[0]['total'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + (int) $mark[0]['attend']  +
                    (int) $mark[0]['project'] + (int) $mark[0]['ca'] + (int) $mark[0]['mark'];
    
                    $mark[0]['overall_ca'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + 
                    (int) $mark[0]['attend'] + (int) $mark[0]['project'] + (int) $mark[0]['ca'];
               }

                else if($template == 'b'){
                    $ca = ((int) $mark[0]['ca']  + (int) $mark[0]['ca2'] + (int) $mark[0]['ca3'])/3;
                    $ca = round($ca, 2);

                    $mark[0]['overall_ca'] = $ca;
    
                    $exam = (int) $mark[0]['mark'];
                    
                    $total = round(($ca + $exam)/2, 2);

                    $cum = (int) $mark[0]['cum'];

                    $mark[0]['total'] = round(($total + $cum)/2, 2);
                }

               
            }
          //  $marks = $student->marks->groupBy('subject_id');
            
            $gpa = [];

            foreach ($subjects as $subject) {
                $key = (string) $subject->id;
                if (isset($marks[$key])) {
                    $gpa[$key] = $this->getGpa($marks[$key][0]['total'], $result_rules);
                } else {
                    $gpa[$key] = ['pass' => false, 'results' => 'N/A', 'entry' => false];
                }
            }
           // dd($gpa);
            $student->subjects = $gpa;
            $student->final_results = $this->getFinalResult($gpa, $subjects);
            $data[] = $student;
        }
        return $data;
    }

    // public function formatStudentsRanks($students, $subjects, $ranks)
    // {
    //     $result_rules = ExamResultRule::orderBy('id', 'ASC')->get();
    //     $ranks = [];
    //     foreach ($students as $student) {

    //         $marks = $student->marks->groupBy('subject_id');

    //         foreach($marks as $mark){

    //              $mark[0]['total'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + (int) $mark[0]['attend']  +
    //             (int) $mark[0]['project'] + (int) $mark[0]['ca'] + (int) $mark[0]['mark'];

    //             $mark[0]['overall_ca'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + 
    //             (int) $mark[0]['attend'] + (int) $mark[0]['project'] + (int) $mark[0]['ca'];
    //         }

    //         $gpa = [];

    //         foreach ($subjects as $subject) {
    //             $key = (string) $subject->id;
    //             if (isset($marks[$key])) {
    //                 $gpa[$key] = $this->getGpa($marks[$key][0]['total'], $result_rules);
    //             } else {
    //                 $gpa[$key] = ['pass' => false, 'results' => 'N/A', 'entry' => false];
    //             }
    //         }

    //         $student->subjects = $gpa;
    //         $student->final_results = $this->getFinalResult($gpa);
    //         $userId = (string)$student->id;
    //         //$ranks[$userId] = [$this->getRank($gpa)];
    //         array_push($ranks, $this->getRank($gpa));

    //     }
    //     return $ranks;
    // }

    /***
     * Get Final Results
     */
    public function getFinalResult($results, $subjects)
    {
      //  dd($results);
        //$status = 50;
        $pass_mark = adminSetting()->pass;
        // $data = ['pass' => false, 'gpa' => 0];
        // foreach ($results as $result) {
        //     if ($result['pass'] == false) {
        //         $status = false;
        //         break;
        //     }
        // }
        $total = collect($results)->sum('results.point');
        $benchmark = collect($subjects)->sum('total_marks');

        $data['gpa'] = round($total, 2);

        $average = round((($total/$benchmark)*100), 2);

       // dd($average);

        if ($pass_mark <= $average) {
          // $data['gpa'] = sprintf("%0.2f", (collect($results)->avg('results.point')));
        //   $collect = collect($results)->sum('results.point');
        //    $data['gpa'] = round($collect, 2);
            $data['pass'] = true;
        } else {
            $data['pass'] = false;
            // $collect = collect($results)->sum('results.point');
            // $data['gpa'] = round($collect, 2);
        }
        return $data;
    }


     /***
     * Get rank
     */
    public function getRank($results)
    {
        $data = collect($results)->sum('results.point');
        return $data;
    }



    /**
     * Get gpa
     */
    public function getGpa($average_mark, $result_rules)
    {
        $result = [];
        foreach ($result_rules as $rule) {
            $min = $rule->min_mark;
            $max = $rule->max_mark;

            if ($average_mark >= $min || $average_mark >= $max) {
            // if ($min <= $average_mark && $max >= $average_mark) {
                if ($rule->name == 'Fail') {
                    $result['pass'] = false;
                    $result['entry'] = true;
                    $result['results']['point'] = $average_mark;
                    $result['results']['grade'] = $rule->name;
                } else {
                    $result['pass'] = true;
                    $result['entry'] = true;
                    //$result['results']['point'] = $rule->gpa;
                    $result['results']['point'] = $average_mark;
                    $result['results']['grade'] = $rule->name;
                }
               
                break;
             }
        }
        return $result;
    }
}
