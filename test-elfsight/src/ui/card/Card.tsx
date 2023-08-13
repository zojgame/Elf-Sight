import { ICardProps } from "./types";

const Card = ({character, handleClick} : ICardProps) => {
    
   return (
    <div className='card-component-container' onClick={handleClick}>
        <div className="title">{character.name}</div>
        <div className="content">
            <img src={`${character.image}`} className="image"/>
            <div className="status">Статус: {character.status}</div>
            <div className="gender">Гендер: {character.gender}</div>
        </div>            
    </div>
   );
};

export {Card} 