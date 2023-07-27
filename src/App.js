import {BrowserRouter} from "react-router-dom";
 import HeaderPage from "./Components/Header/Header";
import MainLink from "./Components/Links/Links";
import Animationshape from "./Components/Animationshape/Animationshape";
import FooterPage from "./Components/Footer/Footer";
import SocialLink from "./Components/Sociallink/Sociallink";
// import NavPage from "./Components/Navbar/Navbar";


function App() {
  return (
    <BrowserRouter>


   <Animationshape/>
 
    <HeaderPage/>
    {/* <NavPage/> */}
    <SocialLink/>
   
     <MainLink/>
     <FooterPage/>  
   
    </BrowserRouter>
    
  );
}

export default App;
