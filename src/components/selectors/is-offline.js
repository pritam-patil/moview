
export const isOffline = () => {
    if (!!navigator && navigator.onLine) {
        return !navigator.onLine;
    }

    if (window.navigator && window.navigator.onLine) {
        return !window.navigator.onLine;
    }

    return true;
}
