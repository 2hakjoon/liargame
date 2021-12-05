import { getRandomNum } from "./getRandom";


export const getRandomWord = (arr : string[]):string => {
    return arr[Math.floor(getRandomNum() * arr.length)];
}