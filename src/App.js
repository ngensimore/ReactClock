import {useState} from 'react';
import Clock from './Clock'
import './index.css'
function App() {

  const [time, setTime] = useState(new Date().toLocaleTimeString());

  function getTime(){
    var today = new Date();
    var time = today.toLocaleTimeString();

    setTime(time);
  }

  setInterval(getTime, 1000);

  return (
    
    <div>
      
      <Clock time = {time} />
    
    </div>
  );
}

export default App;
