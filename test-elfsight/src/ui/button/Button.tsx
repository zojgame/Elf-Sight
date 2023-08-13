import { IButton } from "./types";

const Button = ({handleClick, title} : IButton) => {
   return (
    <button onClick={handleClick} className="btn-submit-filter">{title}</button>
   );
};

export {Button} 