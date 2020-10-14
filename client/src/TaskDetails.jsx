import React, { useContext } from "react";
import Label from './Label';
import ChoiceTask from './ChoiceTask';
import GenericTask from './GenericTask';


function TaskDetails(props){
  const { task } = useContext(props.ContextContainer);
    //console.log("taskType: "+ task.taskType);
    switch(task.taskType) {
        case 'choice':
          // choice radio selected
          return(
            <div>
                <ChoiceTask onChange={props.onChange} />
            </div>
          );
        case 'decision':
          // decision radio selected
          return(
            <div>
                <GenericTask title="Setting up your Task - Decision Task" onChange={props.onChange} />
            </div>
          );
        case 'sentence':
          // sentence radio selected
          return(
            <div>
                <GenericTask title="Setting up your Task - Sentence Task" onChange={props.onChange} />
            </div>
          );
        default:
          // return default message
          return(
            <div>
                <Label text="Setting up your Task" />
            </div>
          );
    }
}

export default TaskDetails;