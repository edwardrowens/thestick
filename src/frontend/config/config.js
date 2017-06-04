import Player from '../model/player'

export default class Config {
    static get players() {
        return [
            new Player('EddieBeMe', 1412, 'description'),
            new Player('Denyzn', 1616, 'description'),
            new Player('IanBeMe', 1994, 'description'),
            new Player('MarchWaltz', 1401, 'description'),
            new Player('Daniol', 1914, 'description'),
            new Player('JonSquad', 1390, 'description'),
            new Player('Tobit', 1514, 'description'),
            new Player('ShirtPants', 1130, 'description')
        ]
    }
}