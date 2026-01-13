class MainMenu extends Phaser.Scene {
    constructor() {
        super('mainmenuScene')
        console.log('MainMenu: constructor')
    }

    init() {
        console.log('MainMenu: init')
        this.HP = 100
        this.EXP = 0
        console.log('HP: ${this.HP} EXP: ${this.EXP}')
        console.log(this)
    }

    create() {
        console.log('MainMenu: console')

        let playerStats = {
            HP: this.HP,
            EXP: this.EXP
        }

        this.scene.start('playScene', playerStats)
        
    }
}