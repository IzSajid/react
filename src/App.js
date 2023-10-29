import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { createContext, useState, useEffect } from 'react';

import Header from './components/Header';
import Dashboard from './pages/dashboard';
import Employees from './pages/employees';
import Customers from './pages/customers';
import Customer from './pages/customer';
import Dictionary from './pages/Dictionary';
import Defination from './pages/Defination';
import NotFound from './components/NotFound';
import Login from './pages/login';
import Register from './pages/register';
import { baseUrl } from './share';


export const LoginContext = createContext();

function App() {
  useEffect(
    () => {
      function refreshToken() {
        const access = localStorage.access || 'default value';
        const refresh = localStorage.refresh || 'default value';
        if (localStorage.refresh) {
          const url = baseUrl + 'api/token/refresh/';
          fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              refresh: refresh,
            }),
          })
            .then(
              (response) => {
                response.json();
              }
            )
            .then(
              (data) => {
                localStorage.access = data.access || access;
                localStorage.refresh = data.refresh || refresh;
                setLoggedIn(true);
              }
            );
        }
      }
      const minitue = 60 * 1000;
      setInterval(refreshToken, 3 * minitue);
    }, []);

  const [loggedIn, setLoggedIn] = useState(localStorage.access ? true : false);

  function changeLoggedIn(value) {
    setLoggedIn(value);
    if (value === false) {
      localStorage.clear();
    }
  }

  return (
    <LoginContext.Provider value={[loggedIn, changeLoggedIn]}>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path="/employees" element={<Employees />} />
            <Route path='/customers' element={<Customers />} />
            <Route path='/customers/:id' element={<Customer />} />
            <Route path='/dictionary' element={<Dictionary />} />
            <Route path='/defination/:search' element={<Defination />} />
            <Route path='/404' element={<NotFound />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </LoginContext.Provider>

  );

}
export default App;
