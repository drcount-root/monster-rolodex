import React from "react";
import "./Card.css";

import { Monster } from "../../App";

type CardProps = {
  monster: Monster;
}

const Card = ({ monster }: CardProps) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        alt={`monster ${name}`}
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

// export default class card extends Component {
//   constructor() {
//     super();

//     this.state = {};
//   }

//   render() {
//     const { id, name, email } = this.props.monster;
//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         />
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }
