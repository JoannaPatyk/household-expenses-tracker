import { toast } from 'react-toastify';

export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const INFO = 'INFO';
export const WARNING = 'WARNING';
export const ALERT = 'ALERT';

const notification = (type, message, allowDuplication) => {
    switch (type) {
        case SUCCESS:
            toast.success(message, {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message',
                toastId: allowDuplication ? null : message
            });
            break;
        case ERROR:
            toast.error(message, {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message',
                toastId: message
            });
            break;
        case INFO:
            toast.info(message, {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message',
                toastId: message
            });
            break;
        case WARNING:
            toast.warning(message, {
                position: toast.POSITION.BOTTOM_LEFT,
                className: 'toast-message',
                toastId: message
            });
            break;
        case ALERT:
            toast.warning(message, {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message',
                toastId: message
            });
    }
};

export default notification;
