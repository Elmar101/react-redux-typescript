export const addZero = (num: number): string => {
    return num < 10 ? `0${num}` : `${num}`;
}

export const createDateKey = (date: Date): string => {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const day = date.getUTCDay();
    return `${addZero(year)}-${addZero(month)}-${addZero(day)}`
}