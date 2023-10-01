import {Routes,Route} from "react-router-dom";
import { Home, Login, Homepage, Search, TourDetail, TourBooking} from "./containers/Public";
import { path } from "./ultils/constant";

function App() {
  return (
    <div>
      <Routes>
        <Route path={path.HOME} element={<Home/>} >
          <Route path='*' element={<Homepage />} />
          <Route path={path.SEARCH} element={<Search/>} />
          <Route path={path.TOUR_DETAIL} element={<TourDetail/>} />
          <Route path={path.TOUR_BOOKING} element={<TourBooking/>} />
        </Route>
        <Route path={path.LOGIN} element={<Login/>} />
      </Routes>
    </div>
  );
}

export default App;
