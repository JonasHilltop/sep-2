scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    svar1B = game.askForNumber("Hvad er bedst for miljøet: 1. Sol eller 2. Kul", 1)
    if (svar1B == 1) {
        info.changeScoreBy(1)
        tiles.setTileAt(location, assets.tile`myTile25`)
    } else {
        game.splash("Forkert, prøv igen")
        pause(2000)
    }
})
let svar1B = 0
info.setScore(0)
tiles.setCurrentTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . c c c . . . . . . . 
    . . . . . . c 5 b c . . . . . . 
    . . . . c c c 5 5 c c c . . . . 
    . . c c c c 5 5 5 5 c b c c . . 
    . c b b 5 b 5 5 5 5 b 5 b b c . 
    . c b 5 5 b b 5 5 b b 5 5 b c . 
    . . c 5 5 5 b b b b 5 5 5 f . . 
    . . f f 5 5 5 5 5 5 5 5 f f . . 
    . . f f f b f e e f b f f f . . 
    . . f f f 1 f b b f 1 f f f . . 
    . . . f f b b b b b b f f . . . 
    . . . e e f e e e e f e e . . . 
    . . e b f b 5 b b 5 b c b e . . 
    . . e e f 5 5 5 5 5 5 f e e . . 
    . . . . c b 5 5 5 5 b c . . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
