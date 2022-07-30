/**
 * TODO format time of messages for timezone, 
 * TODO use enums instead of string like 'Today' inline
 * @param {Date} date 
 * @returns {string}
 */
export const formatTime = (date) => {
    const today = new Date();
    const day = setDayLabel(today, date);
    const hours = date.getHours() % 12;
    const minutes = date.getMinutes();
    const timeOfDay = 12 > date.getHours() ? 'AM' : 'PM';
    return `${day} ${hours}:${minutes} ${timeOfDay}`;
};

const setDayLabel = (today, date) => {
    return (
        dateIsSame(today, date) && 
        monthIsSame(today, date) &&
        yearIsSame(today, date) && 
        'Today'
    ) || formatDate(date);
};

const formatDate = (date) => `${date.getMonth()}/${date.getDate()}/${date.getFullYear()}`;

const dateIsSame = (today, date) => today.getDate() === date.getDate();

const monthIsSame = (today, date) => today.getMonth() === date.getMonth()

const yearIsSame = (today, date) => today.getFullYear() === date.getFullYear()