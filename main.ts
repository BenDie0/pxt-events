let ham = sprites.create(img`
. . . . . . . . . . . e e e e e e e e . . . . . . . . . . . . . 
. . . . . . . . . e e 3 3 3 3 3 b b e e e . . . . . . . . . . . 
. . . . . . . e e 3 3 d 1 1 1 1 3 3 3 b e e . . . . . . . . . . 
. . . . . . e 3 d d d 1 1 1 d d 1 d 3 3 e e e . . . . . . . . . 
. . . . . e 3 d 1 3 3 3 d 1 d 3 3 d 1 3 b e e . . . . . . . . . 
. . . . e e d 1 3 3 3 3 3 d 1 d 3 3 3 1 3 e e e . . . . . . . . 
. . . e 3 1 1 3 3 3 3 3 3 d d d 3 3 3 3 d b e e e . . . . . . . 
. . e 3 1 3 3 3 3 3 3 3 3 3 3 d d d 3 3 d 3 e 4 4 e . . . . . . 
. . e 1 d 3 3 3 3 3 3 3 3 3 3 d d d 3 3 3 d b 4 4 e e . . . . . 
. e 3 1 3 3 3 3 3 3 3 3 3 3 d d 3 3 3 3 3 d b 4 4 4 e e . . . . 
. e d d 3 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 3 b 4 4 4 e . . . . 
e 3 1 1 d 3 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d d b b 4 4 4 e . . . 
e d 1 3 1 d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 4 4 4 4 e . . . 
e d 3 3 d d 3 3 3 3 3 3 3 3 d 3 3 3 3 3 3 d 1 b 4 4 4 4 4 e . . 
e 1 3 3 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d 1 6 4 4 4 4 4 e e . 
e 1 3 3 3 d 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 d 1 6 b 4 4 4 4 4 4 e 
e 1 3 3 3 d d d d 3 3 d d 3 3 3 3 3 3 3 3 d 1 6 4 4 4 4 4 4 4 e 
e 1 3 3 3 3 3 d d 1 1 d d 3 3 3 3 3 3 3 3 d 1 6 4 4 b 4 4 4 4 e 
e 1 3 3 3 3 3 d 1 d 3 1 d 3 3 3 3 3 3 3 3 d 1 b 4 4 4 4 4 4 4 e 
e 1 3 3 3 3 3 1 d 3 3 3 1 3 3 3 3 3 3 3 3 1 d 6 4 4 4 4 4 4 e . 
e 1 3 3 3 3 3 1 d d 3 3 1 b 3 3 3 3 3 3 3 1 3 6 4 4 4 4 4 4 e . 
e 1 3 3 3 3 3 3 1 d d 1 d b 3 3 3 3 3 3 3 1 b 6 4 4 4 4 4 e . . 
e d d 3 3 3 3 3 3 1 1 d b 3 3 3 3 3 3 3 d d 6 4 4 4 4 4 e . . . 
e 3 d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 3 3 1 3 6 4 4 4 4 4 e . . . 
. e d d 3 3 3 3 3 3 3 d 3 3 3 3 3 3 3 d d b e 4 4 4 4 4 . . . . 
. e 3 d d 3 3 3 3 3 d d 3 3 3 3 3 3 3 d 3 e e 4 4 4 4 . . . . . 
. . e 3 d d 3 3 3 d 1 3 3 3 3 3 3 d d 3 b e e e e e . . . . . . 
. . . e 3 1 1 1 1 1 d d d 3 3 3 d d d b e e e e e . . . . . . . 
. . . . e e d 1 d 3 3 d 1 1 1 1 1 3 b e e e e e . . . . . . . . 
. . . . . . e e b 3 3 3 d d 1 3 b e e e e e . . . . . . . . . . 
. . . . . . . . e e e e e e e e e e e . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
ham.setPosition(18, 19)
let doughnut = sprites.create(img`
. . . . . . b b b b a a . . . . 
. . . . b b d d d 3 3 3 a a . . 
. . . b d d d 3 3 3 3 3 3 a a . 
. . b d d 3 3 3 3 3 3 3 3 3 a . 
. b 3 d 3 3 3 3 3 b 3 3 3 3 a b 
. b 3 3 3 3 3 a a 3 3 3 3 3 a b 
b 3 3 3 3 3 a a 3 3 3 3 d a 4 b 
b 3 3 3 3 b a 3 3 3 3 3 d a 4 b 
b 3 3 3 3 3 3 3 3 3 3 d a 4 4 e 
a 3 3 3 3 3 3 3 3 3 d a 4 4 4 e 
a 3 3 3 3 3 3 3 d d a 4 4 4 e . 
a a 3 3 3 d d d a a 4 4 4 e e . 
. e a a a a a a 4 4 4 4 e e . . 
. . e e b b 4 4 4 4 b e e . . . 
. . . e e e e e e e e . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
doughnut.setPosition(73, 22)
let burger = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . . 
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . . 
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . . 
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . . 
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . . 
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . . 
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . . 
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . . 
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e . 
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e . 
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e 
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e 
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f 
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f 
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f . 
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e . 
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8 
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8 
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8 
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f 
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f 
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f 
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f 
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e 
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e 
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e . 
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e . 
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . 
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . . 
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . . 
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
burger.setPosition(76, 54)
let taco = sprites.create(img`
. . . . . . . e e e e . . . . . 
. . . . . e e 4 5 5 5 e e . . . 
. . . . e 4 5 6 2 2 7 6 6 e . . 
. . . e 5 6 6 7 2 2 6 4 4 4 e . 
. . e 5 2 2 7 6 6 4 5 5 5 5 4 . 
. e 5 6 2 2 8 8 5 5 5 5 5 4 5 4 
. e 5 6 7 7 8 5 4 5 4 5 5 5 5 4 
e 4 5 8 6 6 5 5 5 5 5 5 4 5 5 4 
e 5 c e 8 5 5 5 4 5 5 5 5 5 5 4 
e 5 c c e 5 4 5 5 5 4 5 5 5 e . 
e 5 c c 5 5 5 5 5 5 5 5 4 e . . 
e 5 e c 5 4 5 4 5 5 5 e e . . . 
e 5 e e 5 5 5 5 5 4 e . . . . . 
4 5 4 e 5 5 5 5 e e . . . . . . 
. 4 5 4 5 5 4 e . . . . . . . . 
. . 4 4 e e e . . . . . . . . . 
`, SpriteKind.Player)
taco.setPosition(38, 80)
let pizzza = sprites.create(img`
. . . . . . . . . . . . . b e e b b b b . . . . . . . . . . . . 
. . . . . . . . . . . . e e b b b b 4 b b . . . . . . . . . . . 
. . . . . . . . . . . . e b 3 4 4 b b 4 b b . . . . . . . . . . 
. . . . . . . . . . . . e 4 4 3 3 4 b b 4 b b . . . . . . . . . 
. . . . . . . . . . . . e b 4 3 3 3 4 4 b 4 b e . . . . . . . . 
. . . . . . . . . . . . 4 e b 4 3 3 4 4 4 4 4 b e . . . . . . . 
. . . . . . . . . . . b d 4 e b 4 3 3 3 3 3 4 4 b b . . . . . . 
. . . . . . . . . . b 4 5 5 d 4 4 4 3 3 3 3 4 4 4 b b . . . . . 
. . . . . . . . . . 4 d 5 5 5 5 d 4 4 4 3 3 3 4 4 4 b b . . . . 
. . . . . . . . . 4 5 5 5 5 5 5 d d 4 b 4 4 4 3 4 4 4 b e . . . 
. . . . . . . . b d 5 5 5 5 d 5 5 5 d 4 b b 4 4 4 4 4 4 e e . . 
. . . . . . . . b 5 5 d d d 6 6 5 5 5 5 b b 4 b 4 4 4 4 4 e e . 
. . . . . . . b d 5 5 5 5 6 7 7 6 5 5 5 5 4 e b b 4 4 4 4 4 e b 
. . . . . . . 4 3 2 2 2 5 5 8 8 5 5 5 5 5 d 4 e e b 4 4 b 4 e e 
. . . . . . b 4 2 2 3 3 2 d d d 5 5 5 2 2 2 d 4 e e b b b 4 b e 
. . . . . . b e 2 2 2 3 2 e d 5 5 5 2 2 3 3 2 d b 4 e b b b b e 
. . . . . b d e 2 2 2 2 2 e 5 5 5 e 2 2 2 3 2 e d d 4 b b b b e 
. . . . . b 5 2 e 2 2 2 e 3 5 5 5 e 2 2 2 2 2 e d d d 4 e b e e 
. . . . b d 5 5 2 e e e 3 5 5 5 5 2 e 2 2 2 e 3 5 5 5 4 4 e e e 
. . . . 6 6 5 d d 5 5 5 5 5 5 5 5 5 2 e e e 3 5 5 d d 4 d e e e 
. . . 6 7 7 6 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 1 5 5 4 d 4 e e 
. . . 4 8 8 5 2 2 2 5 5 5 d d d d 6 6 5 5 5 5 1 5 4 4 d 4 e e e 
. . b 4 5 5 2 2 3 3 2 5 5 5 d d 6 7 7 6 1 1 d 4 4 4 d d e e e . 
. . 4 d 5 2 2 2 2 3 2 e 5 5 5 5 5 8 8 1 d 4 4 d d d 4 e e e . . 
. b d d 5 e 2 2 2 2 2 e 5 5 5 1 1 5 1 1 4 d 5 4 d 4 e e . . . . 
. b 5 5 d 2 e 2 2 2 e 3 5 1 1 4 4 d 1 d 5 5 e e e e . . . . . . 
b d 5 d d d 2 e e e 3 d 4 4 4 5 5 5 d d 4 e . . . . . . . . . . 
b 5 5 5 1 1 5 d d d d 5 5 d 5 4 4 e e d e . . . . . . . . . . . 
4 5 1 1 d 4 4 4 d 5 5 4 4 e e . . . 4 d e . . . . . . . . . . . 
4 1 d 4 5 5 5 d 4 e e . . . . . . . . 4 4 . . . . . . . . . . . 
4 1 5 5 4 e e d e . . . . . . . . . . . . . . . . . . . . . . . 
4 4 e e . . . 4 e . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
pizzza.setPosition(60, 70)
let cake = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . b b b . . . . . . . 
. . . . . . . . . . . . . . . . . . . . b b 3 3 3 b . . . . . . 
. . . . . . . . . . . . . . . . . b b b 3 3 3 d 3 3 b . . . . . 
. . . . . . . . . . . . . . . . b b 3 3 3 3 3 3 d 3 a . . . . . 
. . . . . . . . . . . . . . b b 3 3 3 3 2 e e e e d b a . . . . 
. . . . . . . . . . . . b b b 3 3 3 3 2 3 e e e 2 e 3 a . . . . 
. . . . . . . . . . b b d 3 3 3 3 3 3 e 2 2 2 2 2 e d 3 a . . . 
. . . . . . . b b b d d 3 3 3 3 3 3 3 e 2 2 2 2 2 e d d a . . . 
. . . . . . b b 3 d 3 3 3 3 3 3 3 3 3 b e 2 2 2 e b 3 d 3 a . . 
. . . b b b 3 d d 3 3 3 3 3 3 3 3 3 3 3 b e e e b 3 3 d 3 a . . 
. . b 3 d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . . 
b b d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d 3 a . 
b 3 3 d d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d 3 a . 
b b 3 3 3 3 3 3 3 d d d d d 3 3 3 3 3 3 3 3 3 3 3 3 3 3 d d a . 
b b b b b b b 3 3 3 d d 3 3 d d d d d d d d d d 3 3 3 3 d d b a 
b 5 5 5 5 3 b b b b b b 3 3 3 3 d d 3 3 3 3 3 d d d 3 3 d d 3 a 
b 5 5 5 5 5 5 5 5 5 5 5 3 b b b b b b b b 3 3 3 3 3 d d d d 3 a 
b d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d b a a a a a b 3 d 3 b a 
b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d d b b 3 3 b a 
b 3 b b 3 5 5 5 5 5 5 5 5 5 5 d 5 5 5 5 d 5 5 d d d d d b b b a 
b 3 3 3 3 3 b b b 3 5 5 d d 5 5 5 5 5 d 5 5 5 d d d d d d b b a 
b 5 5 5 5 d 3 3 3 3 3 3 b b b 3 5 d d d d d d 5 5 d d d d b b a 
b 5 d 5 5 5 d d 5 5 5 3 3 3 3 b b b b b 3 d d d d d d d d b 3 a 
b 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d 3 3 3 3 b b b b b b 3 d b 3 a 
b d 5 d 5 5 5 5 5 5 d 5 5 5 5 5 d d 5 5 5 d d b b b b b b b 3 a 
b b b 5 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 d d d d d d b b 3 a 
. . . b b b b d d 5 5 5 d d d 5 5 5 5 d d d d d d d d d d b 3 a 
. . . . . . . b b b b 5 5 5 5 5 5 d 5 d d d 5 d d d d d d b 3 a 
. . . . . . . . . . . b b b b 5 5 5 5 5 5 5 5 5 5 5 d d 5 3 3 a 
. . . . . . . . . . . . . . . b b b b d d d 5 d 5 5 d 5 b 3 b a 
. . . . . . . . . . . . . . . . . . . b b b b d d d d b 3 b a . 
. . . . . . . . . . . . . . . . . . . . . . . b b b a a a a . . 
`, SpriteKind.Player)
cake.setPosition(70, 80)
