import Player from '../model/player'

export default class Config {
    static get players() {
        return [
            new Player('EddieBeMe', 1412)
        ]
    }
}