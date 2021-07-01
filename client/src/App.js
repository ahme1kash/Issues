import './App.css';
import Navbar from './components/NavBar'
import AllIssues from './components/AllIssues'
import AddIssues from './components/AddIssues'
import EditIssues from './components/EditIssues'
import MernStack from './components/MernStack'
import NotFound from './components/NotFound'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
function App() {
  return (

    <>
    <div className="App">
    {/* <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/> */}
      <BrowserRouter>
      
     <Navbar/>  
     <Switch>
     <Route exact path = "/" component={MernStack}/> 
     <Route path = "/addissues" component={AddIssues}/>
     <Route path = "/allissues" component={AllIssues}/>
     <Route path = "/editIssues/:id" component={EditIssues}/>
     <Route component={NotFound}/>
     </Switch>
     
     </BrowserRouter>
    </div>
    </>
  );
}

export default App;
