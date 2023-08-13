import { useRef, useState } from "react";
import { DropDownInput, TextInput, Button } from "../../ui";
import { getCharactersWithFilter } from "../../api";
import { useStore } from "../../store";

const FiltersComponent = () => {
    const [gender, setGender] = useState<string | null>(null)
    const [status, setStatus] = useState<string | null>(null)
    const nameRef = useRef<HTMLInputElement>(null)
    const speciesRef = useRef<HTMLInputElement>(null)
    const typeRef = useRef<HTMLInputElement>(null)
    const form = useRef<HTMLFormElement>(null)
    const genderOption = ['Male', 'Female', 'Genderless', 'unknown']
    const statusOption = ['Dead', 'Alive', 'unknown']
    const {setCharacters} = useStore();

    const handleOnGenderClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const gender = (event.target as HTMLAnchorElement).innerHTML;
        setGender(gender)
    }

    const handleOnStatusClick = (event: React.MouseEvent<HTMLElement, MouseEvent>) => {
        const status = (event.target as HTMLAnchorElement).innerHTML;
        setStatus(status)
    }

    const handleSubmitFilter = () => {
        getCharactersWithFilter(nameRef.current?.value, speciesRef.current?.value, typeRef.current?.value, gender, status)
        .then(data => {
            setCharacters(data.data.results)
        })
        .catch(() => {
            console.error('не найдено')
        })
    }

    const handleResetFilter = () => {
        setGender(null)
        setStatus(null)
        form.current?.reset()
    }

   return (
    <form className="filter-container" ref={form} onSubmit={(e) => e.preventDefault()}>
        <div>Фильтровать по</div>
        <TextInput reference={nameRef} title={"Имя"} />
        <TextInput reference={speciesRef} title={"Вид"} />
        <TextInput reference={typeRef} title={"Тип"} />
        
        <DropDownInput title={gender === null ? 'Пол' : gender} handleOnClick={handleOnGenderClick} filterOptions={genderOption} />
        <DropDownInput title={status === null ? 'Статус' : status} handleOnClick={handleOnStatusClick} filterOptions={statusOption} />

        <Button handleClick={handleSubmitFilter} title="Применить фильтр"/>
        <Button handleClick={handleResetFilter} title="Сбросить фильтр"/>
    </form>
   );
};
export {FiltersComponent} ;