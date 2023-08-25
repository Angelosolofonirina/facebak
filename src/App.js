
import './App.css';
import CreateAccount from './Components/CreateAccount';
import Navbar from './Components/Navbar';
import Posts from './Components/Posts';
import Left from './Components/Left';
import Right from './Components/Right'; 
import Landing from './Components/Landing';
function App() {
  return (
       <div>
          <Navbar />
          <div className='page row row-cols-3'>
            <div className='cote'>
              <Left />
            </div>
            <div className='centre'>
              <Posts />
            </div>
            <div className='cote'>
               <Right />
            </div>
          </div>
       </div> 
       /**<div>
        <Landing />
       </div>*/ 
      /**<div>
        <CreateAccount />
      </div>*/ 









  );
}

export default App;
