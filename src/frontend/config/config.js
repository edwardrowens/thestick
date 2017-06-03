import Player from '../model/player'

export default class Config {
    static get players() {
        return [
            new Player('EddieBeMe', 1412),
            new Player('Denyzn', 1616),
            new Player('IanBeMe', 1994),
            new Player('MarchWaltz', 1401),
            new Player('Daniol', 1914),
            new Player('JonSquad', 1390),
            new Player('Tobit', 1514),
            new Player('ShirtPants', 1130)
        ]
    }
}