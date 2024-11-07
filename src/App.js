import logo from './logo.svg';
import './App.css';
import BasicButtons from './grid';
import ButtonAppBar from './appbar';
import CustomizedRating from './rating';

function App() {
  return (

    <div>
     
      <ButtonAppBar/>
      <BasicButtons/>
      <CustomizedRating/>
     </div>
    
  );
}

export default App;
