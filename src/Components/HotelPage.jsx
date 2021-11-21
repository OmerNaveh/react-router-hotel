
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
export default function HotelPage(props){
    const params = useParams();
    const wantedHotel = props.HotelsData.filter(hotel=>kebabCase(hotel.שם)===params.hotelName)[0];
        return(
            <div>
                <div className= "hotelDets">
                <img className ="cardImg" src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape/burj-al-arab-profile-exterior_6-4_landscape__portrait.jpg?w=600" alt="hotelImage"/>
                    <h3 className ="cardName">{wantedHotel.שם}</h3>
                    <p>{wantedHotel["שם רחוב"]}</p>
                    <p>The best hotel in haifa </p>
                    <button className="callBtn"><i className="fas fa-phone-square green"></i> {wantedHotel["בית"]}-{wantedHotel["טלפון"]}</button>
                    <Link className="backLink" to="/">Back To HomePage</Link>
                </div>
            </div>
        )
    }
