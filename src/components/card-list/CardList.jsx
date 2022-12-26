import React from "react";
import "./card-list.css";
import Card from "../card/Card";

const CardList = (props) => {
  return (
    <div className="card-list">
      {props.monsters.map((monster) => {
        return <Card monster={monster} key={monster.id} />;
      })}
    </div>
  );
};

export default CardList;

// export default class CardList extends Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card monster={monster} key={monster.id} />;
//         })}
//       </div>
//     );
//   }
// }
