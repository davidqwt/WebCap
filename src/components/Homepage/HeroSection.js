import "./HeroSection.css"
import foodImg from "../../icons_assets/restauranfood.jpg"

export default function HeroSection(){
    return(
        <container>
        <div className="card">
            <h1>Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="description">We are a family owned Mediterranean restaurant, focoused on traditional recipes served with a modern twist.</p>
            <button>Reserve a Table</button>
        </div>

        <img id="foodImg"src={foodImg} alt="food image" ></img>

        </container>

    )
}