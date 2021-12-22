
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Mynavbar from './components/Mynavbar';
import Home from './pages/Home';
import Todays from './pages/Todays'
import Customer from './pages/Customer'
import Registry from './pages/Registry'
import Gift from './pages/Gift'
import Sell from './pages/Sell'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Mynavbar/>
        <Routes>
          <Route path="" element={<Home/>}/>
          <Route path="/todaysdeals" element={<Todays/>}/>
          <Route path="/customerservice" element={<Customer/>}/>
          <Route path="/registry" element={<Registry/>}/>
          <Route path="/giftcards" element={<Gift/>}/>
          <Route path="/sell" element={<Sell/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
