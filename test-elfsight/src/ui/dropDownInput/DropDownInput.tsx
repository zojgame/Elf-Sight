import { IDropDownInputProps } from "./types";

const DropDownInput = ({title, handleOnClick, filterOptions} : IDropDownInputProps) => {
   return (
    <div className="dropdown">
        <button className="dropbtn">{title}</button>
        <div className="dropdown-content" onClick={handleOnClick}>
            {filterOptions.map((option) => {
                return <a key={option}>{option}</a>
            })}
        </div>
    </div>
   );
};

export {DropDownInput};