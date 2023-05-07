import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { useState } from 'react';
import Home from "./Components/Home/Home";
import NotFound from "./Components/NotFound/NotFound";
import Login from "./Components/Login/Login";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Destination from "./Components/Destination/Destination";
import { createContext } from "react";
import CreateUser from "./Components/CreateUser/CreateUser";
import Logout from "./Components/Logout/Logout";

//loggedInUser Context
export const loggedInUserContext = createContext();
//Transport Context to check the selected transport
export const transportContext = createContext();
//user Context to handle form data during Sign In and Sign Up
export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [transport, setTransport] = useState({
    chosenVehicle: '',
    vehiclePicture: ''
  });
  const [user, setUser] = useState({
    isSignedIn: false,
    displayName: '',
    photoURL: ''
  })
  return (
    <loggedInUserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <userContext.Provider value={[user, setUser]}>
        <transportContext.Provider value={[transport, setTransport]}>
          <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/home' element={<Home />} />

              <Route path='/destination' element={<PrivateRoute><Destination /></PrivateRoute>} />


              <Route path='/login' element={<Login />} />
              <Route path='/logout' element={<Logout />} />
              <Route path='/newUser' element={<CreateUser />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </transportContext.Provider>
      </userContext.Provider>
    </loggedInUserContext.Provider>
  );
}

export default App;
