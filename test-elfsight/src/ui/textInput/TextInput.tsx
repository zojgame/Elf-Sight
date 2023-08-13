import { ITextInputProps } from "./types";

const TextInput = ({reference, title} : ITextInputProps) => {
   return (
    <input type='text' placeholder={title} ref={reference}/>
   );
};

export {TextInput};    