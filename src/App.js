
import './App.css';
import Sidebar from './components/Sidebar'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import Widget from './components/Widget';
function App() {
  return (
    <div className='App'>
      
      <Header/>

      <div className='App_body'>

 
      <Sidebar/>
     
 {/* //  {sidebar} */}
<Feed/>
{/* // {feed} */}

{/* // {widget} */}
<Widget/>
</div>
    </div>
  
  );
}

export default App;
