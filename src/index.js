import "./index.css"
import ReactDOM from 'react-dom'
import { BrowserRouter , Routes, Route} from "react-router-dom";
import HotelsData from "./Hotels.json"
import HotelsGallery from './Components/HotelsGallery'
import HotelPage from "./Components/HotelPage";
ReactDOM.render(
<BrowserRouter>
<Routes>
    <Route path="/" element={<HotelsGallery HotelsData={HotelsData}/>}/> 
    <Route path="/:hotelName" element={<HotelPage HotelsData={HotelsData}/>}/> 
</Routes>
</BrowserRouter>    
, document.getElementById('root'));