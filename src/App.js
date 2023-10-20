import './index.css';
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
          <div className='flex flex-wrap justify-center'>
          <Employee name="Sajid" role="Intern" img = "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"/>
          <Employee name="Caleb" role="Senior Dev" img ="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"/>
          <Employee name="Aby" role={role} img = "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"/>
          <Employee name="Sajid" role="Intern" img = "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"/>
          <Employee name="Caleb" role="Senior Dev" img ="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"/>
          <Employee name="Aby" role={role} img = "https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?w=740&t=st=1697810516~exp=1697811116~hmac=06fbbbc5d8278d150f6e28cfe61a35890a32dcd0e35dd3090baf55ea0317fa43"/>
          </div>
        </>
      ) : (
        <h3> You do not have acess</h3>
      )}

    </div>
  );

}
export default App;
