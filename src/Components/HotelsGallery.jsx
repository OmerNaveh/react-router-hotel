import { Component } from "react"
import HotelCard from "./HotelCard";
export default class HotelsGallery extends Component{
    createCards = ()=>{
        const cards = this.props.HotelsData.map(hotel=>{
            return <HotelCard key={hotel.שם} hotelName={hotel.שם}/>
        })
        return cards
    }
    render(){
        return(
            <div>
                <h1>Hotels- Omer</h1>
                <div id="container"> 
                {this.createCards()}
                </div>
            </div>
        )
    }
}