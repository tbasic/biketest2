import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import ListBikeMemberComponent from './components/ListBikeMemberComponent';
import AddBikeMemberComponent from './components/AddBikeMemberComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent/>
          <div className="container">
            <Routes>
              <Route path='/' element={<ListBikeMemberComponent/>}></Route>
              <Route path='/bikemembers' element={<ListBikeMemberComponent/>}></Route>
              <Route path='/add-bikemember' element={<AddBikeMemberComponent/>}></Route>
              <Route path='/edit-bikemember/:id' element={<AddBikeMemberComponent/>}></Route>
            </Routes>
          </div>
        <FooterComponent/>
      </Router>
    </div>
  );
}

export default App;
