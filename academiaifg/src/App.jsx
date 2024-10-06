import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Workout from './pages/Workout';
import PrivateRoute from './components/PrivateRoute';
import MedicalRecord from './pages/MedicalRecord';
import { useEffect } from 'react';
import "./App.css";
/**
 * The main App component.
 *
 * This component renders the entire application, including all routes.
 *
 * The routes are as follows:
 * - /login: The login page.
 * - /register: The registration page.
 * - /: The home page, which is the main page of the application.
 * - /workout: The workout page, which is only accessible by logged-in users.
 *
 * The workout route is wrapped in a PrivateRoute component, which checks if the user is logged in before allowing them to access the page.
 *
 * @returns {React.ReactElement} The rendered App component.
 */
function App() {
  const [customers, setCustomers] = React.useState([]);
  useEffect(() => {
  /**
   * Loads data from the customers API.
   *
   * This function fetches the customers from the API, parses the JSON response,
   * and sets the customers state with the response data.
   */
    const loadData = () => {
      
    fetch('http://localhost:8000/api/customers')
    .then(Response => Response.json())
    .then(data => setCustomers(data))
  }
  loadData();

}, []);

  
  return (

    <div className='App'>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/MedicalRecord" element={<MedicalRecord/>} />
        <Route path="/workout" element={  <Workout/> } />
         </Routes> 
    </div>
  );
}

export default App;
