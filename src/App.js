import './index.css';
import Header from './components/Header';
import Employees from './pages/employees';
import Customers from './pages/customers';
import Customer from './pages/customer';
import Dictionary from './pages/Dictionary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Defination from './pages/Defination';
import NotFound from './components/NotFound';

function App() {
  return (

    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/employees" element={<Employees />} />
          <Route path='/customers' element={<Customers />} />
          <Route path='/customers/:id' element={<Customer />} />
          <Route path='/dictionary' element={<Dictionary />} />
          <Route path='/defination/:search' 
          element={<Defination/>} />
          <Route path='/404' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Header>
    </BrowserRouter>

  );

}
export default App;
