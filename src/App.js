import './index.css';
import Header from './components/Header';
import Employees from './pages/employees';
import Customers from './pages/customers';
import Dictionary from './pages/Dictionary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Defination from './pages/Defination';

function App() {
  return (

    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/defination/:search' 
          element={<Defination/>} />
        </Routes>
      </Header>
    </BrowserRouter>

  );

}
export default App;
