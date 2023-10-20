import './App.css';
import Employee from './components/employee';
function App() {
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <Employee name = "Sajid" role = "Intern"/>
          <Employee name = "Caleb" role = "Senior Dev"/>
          <Employee name = "Joker"/>
        </>
      ) : (
        <h3> You do not have acess</h3>
      )}

    </div>
  );

}
export default App;
