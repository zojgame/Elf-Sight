import { ToastType } from "../../types";

interface IToastListProps {
    removeToast: (toast: string) => void,
    data: ToastType[]
}

export type {IToastListProps}