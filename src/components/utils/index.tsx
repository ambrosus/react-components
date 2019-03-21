export { default as SVG } from './SVG';

export const formatDate = (date: any, datetime = false) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? `0 ${minutes}` : minutes;
    const strTime = `${hours}:${minutes} ${ampm}`;
    return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}${datetime ? ` ${strTime}` : ''}`;
};

export const numWithCommas = (val: number | string, delimiter = ',') => {
    return val ? val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, delimiter) : 0;
};
