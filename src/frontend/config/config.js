import Player from '../model/player'

export default class Config {
    static get players() {
        return [
            new Player('EddieBeMe', 1412),
            new Player('Benthor', 1644)
        ]
    }
}