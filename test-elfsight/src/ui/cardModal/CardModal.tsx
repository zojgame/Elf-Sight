import { ICardModalProps } from "./types";

const CardModal = ({handleOnModalClose, character}: ICardModalProps) => {
   return (
    <div className="modal">
        <div className="modal-dialog">
        <div className="modal-content">
            <div className="modal-header">
                <h3 className="modal-title">{character.name}</h3>
                <a className="close" onClick={handleOnModalClose}>×</a>
            </div>
            <div className="modal-body">    
                <img src={character.image} alt={character.name} />
                <div>⚧ Пол: {character.gender}</div>
                <div>👽 Вид: {character.species}</div>
                <div>👻 Статус: {character.status}</div>
                {character.type !== '' ? <div>Тип: {character.type}</div> : <></>}
            </div>
        </div>
        </div>
    </div>
   );
};

export {CardModal}