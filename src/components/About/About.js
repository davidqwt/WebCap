import "./About.css"
import photosa from "../../icons_assets/Mario and Adrian A.jpg"
import photosb from "../../icons_assets/Mario and Adrian b.jpg"

export default function About() {

    return(
        <section className="about-section">
            <div className="about">
            <h2>Little Lemon</h2>
            <h1>Chicago</h1>
            <p className="about-description">We are a family owned Mediterranean restaurant, focoused on traditional recipes served with a modern twistWe are a family owned Mediterranean restaurant, focoused on traditional recipes served with a modern twist.We are a family owned Mediterranean restaurant, focoused on traditional recipes served with a modern twist.</p>

            <img src={photosa} className="photoa"></img>
            <img src={photosb} className="photob"></img>
            </div>

        </section>
    )
}