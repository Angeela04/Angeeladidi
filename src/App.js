import {BrowserRouter,Routes,Route} from "react-router-dom";
import './App.css';
import Layout from './pages/theme/Layout';
import Faq from "./pages/Faq";
import { Contact } from "./pages/Contact";
import Usermanagement from "./pages/Usermanagement";



function App() {
  return (
    <div >
      <BrowserRouter>
      <Routes>
        <Route path ="/"element={<Layout/>}>   
          <Route path ="/contact"element={<Contact/>}/>
          <Route path ="/usermanagement"element={<Usermanagement/>}/>
          <Route path ="/faq"element={<Faq/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
  
    </div>
  ); 
}

export default App;
