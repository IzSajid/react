import './App.css';
import Employee from './components/employee';
function App() {
  const showEmployee = true;
  return (
    <div className="App">
      {showEmployee ? (
        <>
          <Employee />
          <Employee />
          <Employee />
          <Employee />
        </>
      ) : (
        <h3> You do not have acess</h3>
      )}

    </div>
  );

}
export default App;
