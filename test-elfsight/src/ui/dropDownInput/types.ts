interface IDropDownInputProps {
    title: string,
    handleOnClick: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void,
    filterOptions: string[]
}

export type {IDropDownInputProps}