import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Dashboard from './pages/dashboard';
import Employees from './pages/employees';
import Customers from './pages/customers';
import Customer from './pages/customer';
import Dictionary from './pages/Dictionary';
import Defination from './pages/Defination';
import NotFound from './components/NotFound';
import Login from './pages/login';

function App() {
  return (

    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path='/dashboard'element={<Dashboard/>} />
          <Route path="/employees" element={<Employees/>}/>
          <Route path='/customers' element={<Customers/>}/>
          <Route path='/customers/:id' element={<Customer/>}/>
          <Route path='/dictionary' element={<Dictionary/>}/>
          <Route path='/defination/:search' element={<Defination/>}/>
          <Route path='/404' element={<NotFound/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Routes>
      </Header>
    </BrowserRouter>

  );

}
export default App;
