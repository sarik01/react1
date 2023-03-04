// import logo from './logo.svg';
import './App.css';
import Profile from './comps/Profile';
// import Header from './components/header'; 
// import Technologies from './components/technologies';
import Header from './comps/Header'
import Nav from './comps/Nav';

const App = () => {
  return (
    <div className='app-wrapper'>
     <Header />
     <Nav />
    <Profile />
         
     
    </div>

  );
}





export default App;
