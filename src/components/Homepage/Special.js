import Card from "./Card";
import brus from "../../icons_assets/bruchetta.svg";
import greek from "../../icons_assets/greek salad.jpg";
import dessert from "../../icons_assets/lemon dessert.jpg";

const projects = [
    {
      name: "Greek Salad",
      price: "$8.99",
      image: greek,
      description: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese garnished with crunchy garlic and rosemary croutons.",
    },
    {
      name: "Bruschetta",
      price: "$6.99",
      image: brus,
      description: "Grilled bread smeared with garlic and seasoned with salt and olive oil.",
    },
    {
      name: "Lemon Special",
      price: "$4.99",
      image: dessert,
      description: "This comes straight from grandma's recipe book.",
    },
  ];

const Special = () => {
  return (
    <section className="special">
      <h2 class="special-heading">This Week Specials!<button className="menuButton"> Online Menu</button></h2>
      <div className="special-body">
        {projects.map((data) => {
          return(<Card key={data.name}
           name={data.name}
           price={data.price}
           image={data.image}
           description={data.description} />)
        })}
      </div>
    </section>
  );
};

export default Special;