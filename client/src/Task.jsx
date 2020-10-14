import React,{useState} from 'react'
import './App.css'
import NavTop from './NavTop';
import TaskType from './TaskType';
import TaskDescription from './TaskDescription';
import TaskDetails from './TaskDetails';
import WorkerRequirements from './WorkerRequirements';
import Button from 'react-bootstrap/Button';

const ContextContainer = React.createContext(null); // creating context global varuiable to hold state

const Task = (props)=>{
        const [task, setTask] = useState({});

        function updateTask(e){
            //console.log('UPDATE FUNCTION: '+e.target.name+" : "+e.target.value);
            setTask({ ...task, [e.target.name] : e.target.value }); // keep appstate and update
        }
        

        const saveTask = ()=>{
          fetch("http://localhost:5000/task",{
            method: "post",
            headers:{"Content-Type": "application/json"},
            body : JSON.stringify({
              type: task.taskType,
              title: task.title,
              description: task.description,
              expiry: task.expiry,
              requireMaster: task.masterWorker,
              reward: task.reward,
              workers: task.workers,
              question: task.question,
              answer: task.answer,
              choiceA: task.choiceA,
              choiceB: task.choiceB,
              choiceC: task.choiceC,
            })
          })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(err =>{
            console.log("Error "+err)
          });
        }

        return (
            <div className= 'header-div'>
                <form onSubmit={saveTask}>
                <ContextContainer.Provider value={{ task, setTask }}> {/* used to provide access to state across siblings */}
                    <NavTop />
                    <TaskType ContextContainer = {ContextContainer} onChange = {updateTask} />
                    <TaskDescription taskType={task.taskType} onChange = {updateTask} />
                    <TaskDetails ContextContainer = {ContextContainer} onChange = {updateTask} />
                    <WorkerRequirements onChange = {updateTask} />
                    <Button id="save" type="submit" variant="primary" className="float-right">Save</Button>
                </ContextContainer.Provider>
                </form>
            </div>
        )
}
export default Task