export const GAME_MODE = {
    Player: 1,
    AI: 2
};

export function isPlayingAI(mode){
    return mode === GAME_MODE.AI;
}