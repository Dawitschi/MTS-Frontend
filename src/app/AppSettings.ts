import { Game } from "./Game";

export class AppSettings {
    public static API_ENDPOINT: String='http://localhost:8080';
    public static TEST_GAMES: Game[]  = [
        {
            id: 1, 
            timeOfGame: new Date,
            gamefinished: true,
            team1_ID: 1,
            team2_ID: 2,
            team1Score: 5,
            team2Score: 7,
            table: 1,
            score_IDs: [1,2,3,4]
        },
        {
            id: 1, 
            timeOfGame: new Date,
            gamefinished: true,
            team1_ID: 52,
            team2_ID: 53,
            team1Score: 5,
            team2Score: 7,
            table: 1,
            score_IDs: [1,2,3,4]
        },
        {
            id: 1, 
            timeOfGame: new Date,
            gamefinished: true,
            team1_ID: 54,
            team2_ID: 55,
            team1Score: 5,
            team2Score: 7,
            table: 1,
            score_IDs: [1,2,3,4]
        },
        {
            id: 1, 
            timeOfGame: new Date,
            gamefinished: true,
            team1_ID: 56,
            team2_ID: 57,
            team1Score: 5,
            team2Score: 7,
            table: 1,
            score_IDs: [1,2,3,4]
        },
        {
            id: 1, 
            timeOfGame: new Date,
            gamefinished: true,
            team1_ID: 58,
            team2_ID: 59,
            team1Score: 5,
            team2Score: 7,
            table: 1,
            score_IDs: [1,2,3,4]
        }
    ]

}