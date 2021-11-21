import { Component } from "react"
import { Link } from "react-router-dom";
const kebabCase = string => string.replace(/([a-z])([A-Z])/g, '$1-$2').replace(/\s+/g, '-').toLowerCase()
export default class HotelCard extends Component{
    render(){
        return(
            <Link to={encodeURI(kebabCase(`/${this.props.hotelName}`))} className ="hotelCard">
                <img className ="hotelImg" src="https://cdn.jumeirah.com/-/mediadh/dh/hospitality/jumeirah/hotels/dubai/burj-al-arab-jumeirah/hero/burj-al-arab-profile-exterior_6-4_landscape/burj-al-arab-profile-exterior_6-4_landscape__portrait.jpg?w=600" alt="hotelImage"/>
               <h3 className ="hotelName">{this.props.hotelName}</h3>
            </Link>
        )
    }
}