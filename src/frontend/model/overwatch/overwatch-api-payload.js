export default class OverwatchApiPayload {
    constructor(general, ranked, quickplay) {
        this.general = general
        this.ranked = ranked
        this.quickplay = quickplay
    }
}