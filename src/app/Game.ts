export interface Game {
    id: Number;
    timeOfGame: Date[];
    gamefinished: boolean;
    team1_ID: Number;
    team2_ID: Number;
    team1Score: Number;
    team2Score: Number;
    table: Number;
    score_IDs: Number[];
}