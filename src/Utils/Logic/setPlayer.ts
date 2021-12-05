import { getRandomNum } from "./getRandom"




export const setPlayerRole = (playerCnt : number) =>{
    return  Math.floor(getRandomNum() *  playerCnt)
}
