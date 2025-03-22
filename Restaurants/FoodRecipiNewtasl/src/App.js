import logo from './logo.svg';
import './App.css';
import Mainpage from './component/displayfood';
import { Route, Routes } from 'react-router-dom';
import Mealinfo from './component/mealinfo';  // default export

function App() {
  return (
    <>
      {/* Only one Router here */}
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid d-flex justify-content-center align-items-center">
          <a href="#" className="navbar-brand">Welcome to our Restaurant 🍴🍽️</a>
        </div>
      </nav>
      
      <Routes>
        <Route path='/' element={<Mainpage />} />
        <Route path='/:mealid' element={<Mealinfo />} />
      </Routes>
      </>
  );
}

export default App;
