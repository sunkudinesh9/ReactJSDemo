import React from "react";
import Card from "./Card"

const CardSection = () => (
  <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
        </h2>
      <div className="row">
        <div className="col-4">
          <Card title="Card1" content="Demo content to practise help to learn more content thnaks card1" buttonName="card1" imageLink="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="col-4">
          <Card title="card2" content="Demo content to practise help to learn more content thnaks card2" buttonName="card2" imageLink="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
        <div className="col-4">
          <Card title="card3" content="Demo content to practise help to learn more content thnaks card3" buttonName="card3" imageLink="https://images.pexels.com/photos/3532557/pexels-photo-3532557.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
        </div>
      </div>
    </div>
  </section>
)

export default CardSection;