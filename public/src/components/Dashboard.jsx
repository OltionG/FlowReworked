import {BrowserRouter, Route, Routes, NavLink} from 'react-router-dom';


function Dashboard() {
    return (
      
      <div className="App">
        
        <h3 className="d-flex justify-content-center m-3">
          Dashboard
        </h3>
      
        <nav className="navbar navbar-expand-sm bg-light navbar-dark" style={{justifyContent: "center"}}>
          <ul className="navbar-nav" style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
            <li className='nav-item- m-1'>
              <NavLink className="btn btn-light btn-outline-primary" to="/home">
                Home
              </NavLink>
            </li>
            <li className='nav-item- m-1'>
              <NavLink className="btn btn-light btn-outline-primary" to="/news">
                News
              </NavLink>
            </li>
            <li className='nav-item- m-1'>
              <NavLink className="btn btn-light btn-outline-primary" to="/categories">
                Categories
              </NavLink>
            </li>
            <li className='nav-item- m-1'>
              <NavLink className="btn btn-light btn-outline-primary" to="/sculptors">
                Sculptors
              </NavLink>
            </li>
            <li className='nav-item- m-1'>
              <NavLink className="btn btn-light btn-outline-primary" to="/sculptures">
                Sculptures
              </NavLink>
            </li>
          </ul>
        </nav>
    
      </div>
    );
  }
  
  export default Dashboard;
  