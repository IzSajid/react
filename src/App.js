import './App.css';
import Employee from './components/employee';
import { useState } from 'react'; 
function App() {
  const [role, setRole] = useState(); // [state, setState
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
          <Employee name="Sajid" role="Intern" />
          <Employee name="Caleb" role="Senior Dev" />
          <Employee name="Aby" role={role} />
        </>
      ) : (
        <h3> You do not have acess</h3>
      )}

    </div>
  );

}
export default App;
