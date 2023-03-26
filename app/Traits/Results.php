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
        $result_rules = ExamResultRule::where('school_id', school()->id)->orderBy('id', 'ASC')->get();

        $data = [];
        
        foreach ($students as $student) {
            $marks = $student->marks->groupBy('subject_id');

            foreach($marks as $mark){

                 $mark[0]['total'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + (int) $mark[0]['attend']  +
                (int) $mark[0]['project'] + (int) $mark[0]['ca'] + (int) $mark[0]['mark'];

                $mark[0]['overall_ca'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + 
                (int) $mark[0]['attend'] + (int) $mark[0]['project'] + (int) $mark[0]['ca'];
            }

            $gpa = [];
            foreach ($subjects as $subject) {
                $key = (string) $subject->id;
                if (isset($marks[$key])) {
                    $gpa[$key] = $this->getGpa($marks[$key][0]['total'], $result_rules);
                } else {
                    $gpa[$key] = ['pass' => false, 'results' => 'N/A', 'entry' => false];

                }
            }
            $student->subjects = $gpa;
            $student->final_results = $this->getFinalResult($gpa);
            $data[] = $student;
        }

        return $data;
    }

    public function formatStudentsRanks($students, $subjects, $ranks)
    {
    
        $result_rules = ExamResultRule::where('school_id', school()->id)->orderBy('id', 'ASC')->get();
$ranks = [];
        foreach ($students as $student) {

            $marks = $student->marks->groupBy('subject_id');

            foreach($marks as $mark){

                 $mark[0]['total'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + (int) $mark[0]['attend']  +
                (int) $mark[0]['project'] + (int) $mark[0]['ca'] + (int) $mark[0]['mark'];

                $mark[0]['overall_ca'] = (int) $mark[0]['class_work']  + (int) $mark[0]['assign'] + 
                (int) $mark[0]['attend'] + (int) $mark[0]['project'] + (int) $mark[0]['ca'];
            }

            $gpa = [];

            foreach ($subjects as $subject) {
                $key = (string) $subject->id;
                if (isset($marks[$key])) {
                    $gpa[$key] = $this->getGpa($marks[$key][0]['total'], $result_rules);
                } else {
                    $gpa[$key] = ['pass' => false, 'results' => 'N/A', 'entry' => false];

                }
            }

            $student->subjects = $gpa;
            $student->final_results = $this->getFinalResult($gpa);
            $userId = (string)$student->id;
            //$ranks[$userId] = [$this->getRank($gpa)];
            array_push($ranks, $this->getRank($gpa));

        }
        return $ranks;
    }

    /***
     * Get Final Results
     */
    public function getFinalResult($results)
    {
        $status = true;
        $data = ['pass' => false, 'gpa' => 0];
        foreach ($results as $result) {
            if ($result['pass'] == false) {
                $status = false;
                break;
            }
        }

        if ($status) {
          // $data['gpa'] = sprintf("%0.2f", (collect($results)->avg('results.point')));
          $collect = collect($results)->sum('results.point');
           $data['gpa'] = $collect;
            $data['pass'] = true;
        } else {
            $data['pass'] = false;
            $data['gpa'] = 0;

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
            if ($min <= $average_mark && $max >= $average_mark) {
                if ($rule->name == 'Fail') {
                    $result['pass'] = false;
                    $result['entry'] = true;
                    $result['results']['point'] = 0;
                    $result['results']['grade'] = 'Fail';
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
