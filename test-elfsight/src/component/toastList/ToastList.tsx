import { Toast } from "../../ui";
import { IToastListProps } from "./types";

const ToastList = ({ removeToast, data } : IToastListProps) => {

    return (
        data.length > 0 && (
            <div
                className={`toast-list toast-list--top-right`}
                aria-live="assertive"
            >
                {data.map((toast) => (
                    <Toast
                    key={toast.id}
                    message={toast.message}
                    type={toast.type}
                    onClose={() => removeToast(toast.id)}
                    />
                ))}
            </div>
        )
    );
};

export {ToastList};