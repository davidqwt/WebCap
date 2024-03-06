import MenuData from "./MenuData";
import "./Menu.css"

const Menu = () => {
    return (
      <>
        <section className="menu">
  <h1>Our Menu:</h1>
  
  <div className="category">
    <h2>Appetizers:</h2>
    <div className="menu-items">
      {MenuData.filter(item => item.type === 'appetizer').map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="category">
    <h2>Main Dishes:</h2>
    <div className="menu-items">
      {MenuData.filter(item => item.type === 'main').map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>

  <div className="category">
    <h2>Desserts:</h2>
    <div className="menu-items">
      {MenuData.filter(item => item.type === 'dessert').map((item, index) => (
        <div key={index} className="menu-item">
          <img src={item.image} alt={item.name} />
          <div className="item-details">
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      </>
    );
  };
  
  export default Menu;