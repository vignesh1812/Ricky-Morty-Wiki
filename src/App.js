import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap/dist/js/bootstrap";
import Filter from './Components/Filter/Filter.js';
import Card from './Components/Card/Card.js';
import Pagination from './Components/Pagination/Pagination.js';
import Search from './Components/Search/Search.js';
import { useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar.js';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import Episode from './Page/Episode.js';
import Location from './Page/Location.js';
import CardDetails from './Components/Card/CardDetails.js';
function App(){
  return(
      <Router>
        <div className="App">
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/:id' element={<CardDetails/>} />
            <Route path='/episode' element={<Episode/>} />
            <Route path='/episode/:id' element={<CardDetails/>} />
            <Route path='/location' element={<Location/>} />
            <Route path='/location/:id' element={<CardDetails/>} />
          </Routes>
        </div>
      </Router>
  );
}
const Home = () => {
  let [pagenumber, setpagenumber] = useState(1);
  let [fetchedData, updateFetchedData] = useState([]);
  let [search, setsearch] = useState("");
  let [status, setstatus] = useState("");
  let [gender, setgender] = useState("");
  let [species, setspecies] = useState("");
  let { info, results } = fetchedData;
  let rickyapi = `https://rickandmortyapi.com/api/character/?page=${pagenumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function () {
      let data = await fetch(rickyapi).then(response => response.json());
      updateFetchedData(data);
    })();
  }, [rickyapi]);

  return (
    <div className="">
      <h1 className='text-center'>Characters</h1>
      <Search setsearch={setsearch} />
      <div className="container">
        <div className="row">

          <Filter setspecies={setspecies} setgender={setgender} setstatus={setstatus} setpagenumber={setpagenumber} />

          <div className="col-lg-8 col-sm-12">
            <div className="row">
              <Card results={results} page='/' />
            </div>
          </div>
        </div>
      </div>
      <Pagination info={info} pagenumber={pagenumber} setpagenumber={setpagenumber} />
    </div>
  );
}

export default App;
