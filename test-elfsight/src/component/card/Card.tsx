import { CardComponentProps } from "./types";
import { Card, CardModal } from "../../ui";
import { useState } from "react";

const CardComponent = ({character} : CardComponentProps) => {
    const [isModal, setIsModal] = useState(false)
    const handleCardClick = () => {
        setIsModal(true)
    }

    const handleModalClose = () => {
        setIsModal(false)
        console.log('clicke')
    } 

   return (
    <>
        <Card handleClick={handleCardClick} character={character}/>
        {isModal && <CardModal handleOnModalClose={handleModalClose} character={character}/>}
    </>
   );
};

export {CardComponent} ;