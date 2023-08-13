import { CardComponent } from "..";
import { ICardBoardComponentProps } from "./types";

const CardBoardComponent = ({characters} : ICardBoardComponentProps) => {
   return (
        <>            
            {
                characters.map((character) => {
                    return <CardComponent character={character} key={character.id}/>
                })
            }
       </>
   );
};
export {CardBoardComponent};