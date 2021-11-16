import React from 'react';
import './app.scss';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import StoreProvider from '../store/Provider';
import RoutesPrivate from '../Routes/Private';
import Main from '../../pages/Main';
import Login from '../../pages/Login';

function App() {
  return (
    <div className="App">
      <StoreProvider>
        <Router>        
          <Routes>
            <Route path="/login" element={ <Login/> }/>
            <Route exact path='/' element={<RoutesPrivate/>}>
              <Route exact path='/' element={<Main/>}/>
            </Route>
          </Routes>
        </Router>
      </StoreProvider>
    </div>
  );
}

export default App;
