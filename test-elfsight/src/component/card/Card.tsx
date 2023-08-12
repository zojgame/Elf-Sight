import { Character } from "../../api";

interface CardComponentProps {
    character: Character
}

const CardComponent = ({character} : CardComponentProps) => {
   return (
    <div className='card-component-container'>
        <div className="title">{character.name}</div>
        <div className="content">
            <img src={`${character.image}`} className="image"/>
            <div className="status">Статус: {character.status}</div>
            <div className="gender">Гендер: {character.gender}</div>
        </div>            
   </div>
   );
};
export {CardComponent} ;