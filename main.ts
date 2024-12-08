scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile22`, function (sprite, location) {
    svar1B = game.askForNumber("Forurener fossile brændstoffer? 1=Ja, 2=Nej", 1)
    if (svar1B == 1) {
        info.changeScoreBy(1)
        tiles.setTileAt(location, assets.tile`myTile25`)
    } else {
        game.splash("Forkert, prøv igen")
        info.changeCountdownBy(-30)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile24`, function (sprite, location) {
    svar1B = game.askForNumber("Har vi uendelige fossile brændstoffer? 1=Ja, 2=Nej", 1)
    if (svar1B == 2) {
        info.changeScoreBy(1)
        tiles.setTileAt(location, assets.tile`myTile28`)
    } else {
        info.changeCountdownBy(-30)
        game.splash("Forkert, prøv igen")
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile32`, function (sprite, location) {
    if (info.score() >= 5) {
        svar1B = game.askForNumber("Spørgsmål", 1)
        if (svar1B == 1) {
            info.changeScoreBy(1)
            tiles.setTileAt(location, assets.tile`myTile34`)
            Col = 19
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(Col, 7), assets.tile`myTile31`)
                Col += 1
            }
        } else {
            game.splash("Forkert, prøv igen")
            info.changeCountdownBy(-30)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile21`, function (sprite, location) {
    svar1B = game.askForNumber("Laver solceller energi af solens lys? 1=Ja, 2=Nej", 1)
    if (svar1B == 1) {
        info.changeScoreBy(1)
        tiles.setTileAt(location, assets.tile`myTile29`)
    } else {
        game.splash("Forkert, prøv igen")
        info.changeCountdownBy(-30)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile17`, function (sprite, location) {
    svar1B = game.askForNumber("Laver vindmøller energi uden vind? 1=Ja, 2=Nej", 1)
    if (svar1B == 2) {
        info.changeScoreBy(1)
        tiles.setTileAt(location, assets.tile`myTile30`)
    } else {
        game.splash("Forkert, prøv igen")
        info.changeCountdownBy(-30)
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile36`, function (sprite, location) {
    if (info.score() >= 5) {
        svar1B = game.askForNumber("Spørgsmål", 1)
        if (svar1B == 1) {
            info.changeScoreBy(1)
            tiles.setTileAt(location, assets.tile`myTile34`)
            Col = 19
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(Col, 3), assets.tile`myTile31`)
                Col += 1
            }
        } else {
            game.splash("Forkert, prøv igen")
            info.changeCountdownBy(-30)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile35`, function (sprite, location) {
    if (info.score() >= 5) {
        svar1B = game.askForNumber("Spørgsmål", 1)
        if (svar1B == 1) {
            info.changeScoreBy(1)
            tiles.setTileAt(location, assets.tile`myTile34`)
            Col = 19
            for (let index = 0; index <= 3; index++) {
                tiles.setTileAt(tiles.getTileLocation(Col, 5), assets.tile`myTile31`)
                Col += 1
            }
        } else {
            game.splash("Forkert, prøv igen")
            info.changeCountdownBy(-30)
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile23`, function (sprite, location) {
    svar1B = game.askForNumber("Er sol, og vind fossile brændsler? 1=Ja, 2=Nej", 1)
    if (svar1B == 2) {
        info.changeScoreBy(1)
        tiles.setTileAt(location, assets.tile`myTile27`)
    } else {
        game.splash("Forkert, prøv igen")
        info.changeCountdownBy(-30)
    }
})
let Col = 0
let svar1B = 0
info.startCountdown(180)
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
forever(function () {
    if (info.score() == 9) {
        game.setGameOverEffect(true, effects.confetti)
        game.setGameOverScoringType(game.ScoringType.HighScore)
    }
    if (info.score() == 5) {
        game.showLongText("\"Tillykke! Du har aktiveret de vedvarende energikilder og slukket for de fossile brændsler. Nu er det tid til at tænde generatorerne i datacenteret!\"", DialogLayout.Bottom)
        info.changeScoreBy(1)
    }
})
