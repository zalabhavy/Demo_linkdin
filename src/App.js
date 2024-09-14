import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header'; 
import Home from './components/Home';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route 
            path="/" 
            element={
              <>
                <Header />  
                <Home/>
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
