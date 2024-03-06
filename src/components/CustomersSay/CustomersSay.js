import React from "react";
import "./CustomersSay.css"

export default function CustomersSay(){
    const [user, setUser] = React.useState([]);

    const fetchData = () => {
        let fetchedUsers = [];

        for (let i=0; i<4 ; i++){
      fetch("https://randomuser.me/api/?results=1")
      .then(response => response.json())
      .then(data =>{

        const userData = {
            name: `${data.results[0].name.title} ${data.results[0].name.first} ${data.results[0].name.last}`,
            image: data.results[0].picture.large,
            comment: `${i} expect comments to be uploaded`
          };

          fetchedUsers.push(userData);

          if (fetchedUsers.length === 4) {
            setUser(fetchedUsers);
          }
        })
      }

    }

    React.useEffect(() => {
      fetchData();
    }, []);

    return user.length > 0 ? (
        <section className="testimonials">
        <h2>Testimonials</h2>

        <div className="customers">
            {user.map((user,index) => (

                <div key={index} className="individual">
                     <h1>Name:  {user.name}</h1>
                     <img src={user.image} alt="User img"/>
                     <p>Comment:  {user.comment} </p>
                </div>
            )
            )}
        </div>

        </section>
    ) : (
      <h1>Data pending...</h1>
    );

}