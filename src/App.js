import './index.css';
import Employee from './components/employee';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import AddEmployee from './components/AddEmployee';
function App() {
  const [role, setRole] = useState(); // [state, setState]
  const [employees, setEmployees] = useState([
    {
      id:1,
      name: "Caleb",
      role: "Senior Dev",
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"
    },
    {
      id:2,
      name: "Imtiaz",
      role: "Intern",
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"
    },
    {
      id:3,
      name: "Aby",
      role: "Senior Dev",
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"
    },
    {
      id:4,
      name: "Caleb",
      role: "Senior Dev",
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"
    },
    {
      id:5,
      name: "Imtiaz",
      role: "Intern",
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"
    },
    {
      id:6,
      name: "Aby",
      role: "Senior Dev",
      img: "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"
    }
  ]); // [state, setState]
  
 function updateEmployee(id,newName,newRole){
  const updatedEmployees = employees.map((employee) =>{
    if(employee.id === id){
      return {...employee, name: newName, role: newRole}
    }
    return employee;
  });
  setEmployees(updatedEmployees);
 }


  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <input type='text' onChange={(e) => {
            console.log(e.target.value)
            setRole(e.target.value)
          }
          } />
          <div className='flex flex-wrap justify-center'>
            {
              employees.map((employee) => {
               return <Employee 
               key = {employee.id}
               id = {employee.id}
               name={employee.name} 
               role={employee.role} 
               img={employee.img}
               updateEmployee={updateEmployee}/> 
              })}
          </div>
          <AddEmployee/>
        </>
      ) : (
        <h3> You do not have acess</h3>
      )}

    </div>
  );

}
export default App;
