

import './App.css';
import Navbar from './component/Navbar';
import { Routes,Route  } from 'react-router-dom';
import Home from './component/Home';
import AddProduct from './component/AddProduct';
import EditPage from './component/EditPage';




function App() {
  return (
    <>
    <Navbar/>

    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/addProduct' element={<AddProduct />}></Route>
      <Route path='/edit/:id' element={<EditPage/>}></Route>
      
      
      


    </Routes>

    </>

    

  );
}

export default App;
