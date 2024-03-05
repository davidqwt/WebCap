import "./Card.css"

const lorem = "Lorem ipsum dolor, sit amet consectetur adipisicing elit.";

const Card = ({ name,price,description,image }) => {
  const handleDeliveryOrder = () => {
    alert('Your delivery order has been placed!');
  };
  return (
    <div className="card">
      <img src={image} alt={name} />
      <div className="card-details">
         <div className="card-info">
             <p className="card-name">{name}</p>
             <p className="card-price">{price}</p>
        </div>
        <p className="card-description">{description}</p>
        <button className="delivery" onClick={handleDeliveryOrder}>Order a delivery</button>
      </div>
    </div>

  );
};

export default Card;