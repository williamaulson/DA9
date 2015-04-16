window.onload = function() {
    // William Aulsoln CS 325
    // Digital Assignment #9
    // Speed Memory Polish Assignment
    
    "use strict";
    
    var game = new Phaser.Game(1024, 576, Phaser.AUTO, 'game', { preload: preload, create: create, update: update } );
    
    function preload() //preload assets
    {
    	    game.load.image('back', 'assets/back.png');
    	    game.load.spritesheet('dude', 'assets/dude.png', 32, 48);
    	    game.load.spritesheet('explode', 'assets/explode.png', 64, 64);
    	    game.load.image('floor', 'assets/floor.png');
    	    game.load.image('wall', 'assets/wall.png');
    	    game.load.image('card', 'assets/card.png');
    	    game.load.image('ladybug', 'assets/ladybug.png');
    	    game.load.image('house', 'assets/house.png');
    	    game.load.image('dog', 'assets/dog.png');
    	    game.load.image('ball', 'assets/ball.png');
    	    game.load.image('star', 'assets/star.png');
    	    game.load.image('box', 'assets/box.png');
    	    game.load.image('hamburger', 'assets/hamburger.png');
    	    game.load.image('hotdog', 'assets/hotdog.png');
    	    game.load.image('frog', 'assets/frog.png');
    	    game.load.image('iron', 'assets/iron.png');
    	    game.load.image('bubbles', 'assets/bubbles.png');
    	    game.load.image('beer', 'assets/beer.png');
    	    game.load.image('tree', 'assets/tree.png');
    	    game.load.image('flower', 'assets/flower.png');
    	    game.load.image('cloud', 'assets/cloud.png');
    	    game.load.image('bird', 'assets/bird.png');
    	    game.load.image('bub', 'assets/bub.png');
    	    game.load.image('redbub', 'assets/redbub.png');
    	    game.load.image('shield', 'assets/shield.png');
    	    game.load.audio('bell', 'assets/bell.mp3');
    	    game.load.audio('pop', 'assets/pop.mp3');
    	    game.load.audio('reed', 'assets/reed.mp3');
    }
    //variable lists
    var cardList = ["bird", "bird", "ball", "ball", "house", "house", "ladybug", "ladybug", "dog", "dog", "star", "star", "box", "box",
    	            "hamburger", "hamburger", "hotdog", "hotdog", "frog", "frog", "iron", "iron", "bubbles", "bubbles", "beer", "beer",
    			"tree", "tree", "flower", "flower", "cloud", "cloud"];
    var avatar;
    var cursors;
    var avatarDirect = 1;
    var wSouth;
    var wNorth;
    var wWest;
    var wEast;
    var wallGroup;
    var card0;
    var card1;
    var card2;
    var card3;
    var card4;
    var card5;
    var card6;
    var card7;
    var card8;
    var card9;
    var card10;
    var card11;
    var card12;
    var card13;
    var card14;
    var card15;
    var card16;
    var card17;
    var card18;
    var card19;
    var card20;
    var card21;
    var card22;
    var card23;
    var card24;
    var card25;
    var card26;
    var card27;
    var card28;
    var card29;
    var card30;
    var card31;
    var turnSafe = 1;
    var firstCard;
    var secondCard;
    var firstCardTurn = 0;
    var firstCardCheck;
    var firstBackCard = 0;
    var secondBackCard = 0;
    var cardGroup;
    var spaceKey;
    var matchesRemaining = 16;
    var avatarText;
    var textStyle = { font: "30px Arial", fill: "#000000", align: "center" };
    var time = 0;
    var gameNotEnd = 1;
    var gameRunning = 0;
    var firstTime = 1;
    var introBack;
    var introTitleText;
    var introText;
    var titleStyle = { font: "100px Arial", fill: "#A30000", align: "center" };
    var emptyBubble;
    var emptyGroup;
    var timerOff = 1;
    var avatarSpeed = 1.0;
    var bell;
    var pop;
    var music;
    var firstIndex;
    var secondIndex;
    var cardFlipGroup;
    var index;
    var redGroup;
    var shield;
    var explode;
    var explodeTwo;
    var playExplode = 0;
    var shieldOff = 1;
    var speedDown = 0;
        
    function create() //create initial assets
    {
    	    game.physics.startSystem(Phaser.Physics.ARCADE);
    	    game.world.setBounds(0, 0, 1024, 576);
    	    game.add.sprite(0, 0, 'back');
    	    
    	    time = game.time.now;
    	    
    	    Phaser.Utils.shuffle(cardList);
    	    
    	    wallGroup = game.add.group();
    	    game.physics.arcade.enable(wallGroup);
    	    
    	    bell = game.add.audio('bell');
    	    pop = game.add.audio('pop');
    	    pop.allowMultiple = true;
    	    
    	    spaceKey = game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
    	    
    	    wSouth = game.add.sprite(0, 551, 'floor');
    	    game.physics.arcade.enable(wSouth);
    	    wSouth.body.immovable = true;
    	    wallGroup.add(wSouth);
    	    wNorth = game.add.sprite(0, 0, 'floor');
    	    game.physics.arcade.enable(wNorth);
    	    wNorth.body.immovable = true;
    	    wallGroup.add(wNorth);
    	    wWest = game.add.sprite(0, 0, 'wall');
    	    game.physics.arcade.enable(wWest);
    	    wWest.body.immovable = true;
    	    wallGroup.add(wWest);
    	    wEast = game.add.sprite(999, 0, 'wall');
    	    game.physics.arcade.enable(wEast);
    	    wEast.body.immovable = true;
    	    wallGroup.add(wEast);
    	    
    	    cardGroup = game.add.group();
    	    game.physics.arcade.enable(cardGroup);
    	    
    	    card0 = game.add.sprite(95, 95, 'card');
    	    game.physics.arcade.enable(card0);
    	    card0.body.immovable = true;
    	    cardGroup.add(card0);
    	    card1 = game.add.sprite(205, 95, 'card');
    	    game.physics.arcade.enable(card1);
    	    card1.body.immovable = true;
    	    cardGroup.add(card1);
    	    card2 = game.add.sprite(315, 95, 'card');
    	    game.physics.arcade.enable(card2);
    	    card2.body.immovable = true;
    	    cardGroup.add(card2);
    	    card3 = game.add.sprite(425, 95, 'card');
    	    game.physics.arcade.enable(card3);
    	    card3.body.immovable = true;
    	    cardGroup.add(card3);
    	    card4 = game.add.sprite(535, 95, 'card');
    	    game.physics.arcade.enable(card4);
    	    card4.body.immovable = true;
    	    cardGroup.add(card4);
    	    card5 = game.add.sprite(645, 95, 'card');
    	    game.physics.arcade.enable(card5);
    	    card5.body.immovable = true;
    	    cardGroup.add(card5);
    	    card6 = game.add.sprite(755, 95, 'card');
    	    game.physics.arcade.enable(card6);
    	    card6.body.immovable = true;
    	    cardGroup.add(card6);
    	    card7 = game.add.sprite(865, 95, 'card');
    	    game.physics.arcade.enable(card7);
    	    card7.body.immovable = true;
    	    cardGroup.add(card7);
    	    
    	    card8 = game.add.sprite(95, 205, 'card');
    	    game.physics.arcade.enable(card8);
    	    card8.body.immovable = true;
    	    cardGroup.add(card8);
    	    card9 = game.add.sprite(205, 205, 'card');
    	    game.physics.arcade.enable(card9);
    	    card9.body.immovable = true;
    	    cardGroup.add(card9);
    	    card10 = game.add.sprite(315, 205, 'card');
    	    game.physics.arcade.enable(card10);
    	    card10.body.immovable = true;
    	    cardGroup.add(card10);
    	    card11 = game.add.sprite(425, 205, 'card');
    	    game.physics.arcade.enable(card11);
    	    card11.body.immovable = true;
    	    cardGroup.add(card11);
    	    card12 = game.add.sprite(535, 205, 'card');
    	    game.physics.arcade.enable(card12);
    	    card12.body.immovable = true;
    	    cardGroup.add(card12);
    	    card13 = game.add.sprite(645, 205, 'card');
    	    game.physics.arcade.enable(card13);
    	    card13.body.immovable = true;
    	    cardGroup.add(card13);
    	    card14 = game.add.sprite(755, 205, 'card');
    	    game.physics.arcade.enable(card14);
    	    card14.body.immovable = true;
    	    cardGroup.add(card14);
    	    card15 = game.add.sprite(865, 205, 'card');
    	    game.physics.arcade.enable(card15);
    	    card15.body.immovable = true;
    	    cardGroup.add(card15);
    	    
    	    card16 = game.add.sprite(95, 315, 'card');
    	    game.physics.arcade.enable(card16);
    	    card16.body.immovable = true;
    	    cardGroup.add(card16);
    	    card17 = game.add.sprite(205, 315, 'card');
    	    game.physics.arcade.enable(card17);
    	    card17.body.immovable = true;
    	    cardGroup.add(card17);
    	    card18 = game.add.sprite(315, 315, 'card');
    	    game.physics.arcade.enable(card18);
    	    card18.body.immovable = true;
    	    cardGroup.add(card18);
    	    card19 = game.add.sprite(425, 315, 'card');
    	    game.physics.arcade.enable(card19);
    	    card19.body.immovable = true;
    	    cardGroup.add(card19);
    	    card20 = game.add.sprite(535, 315, 'card');
    	    game.physics.arcade.enable(card20);
    	    card20.body.immovable = true;
    	    cardGroup.add(card20);
    	    card21 = game.add.sprite(645, 315, 'card');
    	    game.physics.arcade.enable(card21);
    	    card21.body.immovable = true;
    	    cardGroup.add(card21);
    	    card22 = game.add.sprite(755, 315, 'card');
    	    game.physics.arcade.enable(card22);
    	    card22.body.immovable = true;
    	    cardGroup.add(card22);
    	    card23 = game.add.sprite(865, 315, 'card');
    	    game.physics.arcade.enable(card23);
    	    card23.body.immovable = true;
    	    cardGroup.add(card23);
    	    
    	    card24 = game.add.sprite(95, 425, 'card');
    	    game.physics.arcade.enable(card24);
    	    card24.body.immovable = true;
    	    cardGroup.add(card24);
    	    card25 = game.add.sprite(205, 425, 'card');
    	    game.physics.arcade.enable(card25);
    	    card25.body.immovable = true;
    	    cardGroup.add(card25);
    	    card26 = game.add.sprite(315, 425, 'card');
    	    game.physics.arcade.enable(card26);
    	    card26.body.immovable = true;
    	    cardGroup.add(card26);
    	    card27 = game.add.sprite(425, 425, 'card');
    	    game.physics.arcade.enable(card27);
    	    card27.body.immovable = true;
    	    cardGroup.add(card27);
    	    card28 = game.add.sprite(535, 425, 'card');
    	    game.physics.arcade.enable(card28);
    	    card28.body.immovable = true;
    	    cardGroup.add(card28);
    	    card29 = game.add.sprite(645, 425, 'card');
    	    game.physics.arcade.enable(card29);
    	    card29.body.immovable = true;
    	    cardGroup.add(card29);
    	    card30 = game.add.sprite(755, 425, 'card');
    	    game.physics.arcade.enable(card30);
    	    card30.body.immovable = true;
    	    cardGroup.add(card30);
    	    card31 = game.add.sprite(865, 425, 'card');
    	    game.physics.arcade.enable(card31);
    	    card31.body.immovable = true;
    	    cardGroup.add(card31);
    	    
    	    cardFlipGroup = game.add.group();
    	    
    	    emptyGroup = game.add.group();
    	    game.physics.arcade.enable(emptyGroup);
    	    
    	    redGroup = game.add.group();
    	    game.physics.arcade.enable(redGroup);
    	    
    	    explode = game.add.sprite(-500, -500, 'explode');
    	    explode.animations.add('explode', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
    	    explodeTwo = game.add.sprite(-500, -500, 'explode');
    	    explodeTwo.animations.add('explode', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 10, true);
    	        	    
    	    avatar = game.add.sprite(950, 480, 'dude');
    	    game.physics.arcade.enable(avatar);
    	    avatar.animations.add('left', [0, 1, 2, 3], 10, true);
    	    avatar.animations.add('right', [5, 6, 7, 8], 10, true);
    	    
    	    avatarText = game.add.text(370, 45, 'Time Remaining: ' + Math.floor(((169999 - (game.time.now - time)) / 1000) % 600), textStyle);
    	    
    	    cursors = game.input.keyboard.createCursorKeys();
    	    
    	    introBack = game.add.sprite(0, 0, 'back');
    	    introTitleText = game.add.text(500, 100, 'Speed Memory', titleStyle);
    	    introTitleText.anchor.set(0.5);
    	    introText = game.add.text(500, 250, '\n\n\nClick the mouse on the game area to start.\n\nUse the arrow keys to move.\nFlip the cards with spacebar.\nRed bubbles make you faster.\nClear bubbles make you slower.\nRed bubbles protect against clear bubbles.', textStyle);
    	    introText.anchor.set(0.5);
    	    
    	    music = game.add.audio('reed');
    	    music.play('', 0, 1, true);
    	    
    	    game.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
    	    game.input.onDown.add(fullScreenStart, this);
    	    game.paused = true;
    }
    
    function fullScreenStart() //fullscreen and start game logic method
    {
    	    if (game.scale.isFullScreen)
    	    {
    	    	    game.scale.stopFullScreen();
    	    }
    	    else
    	    {
    	    	    if (firstTime)
    	    	    {
    	    	    	    killIntro();
    	    	    	    gameRunning = 1;
    	    	    	    firstTime = 0;
    	    	    }
    	    	    game.scale.startFullScreen(true);
    	    	    game.paused = false;
    	    }
    }
    
    function update() //main game logic loop
    {
    	    avatarText.setText('Time Remaining: ' + Math.floor(((169999 - (game.time.now - time)) / 1000) % 600));
    	    
    	    if (matchesRemaining < 1)
    	    {
    	    	    gameNotEnd = 0;
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.0, checkWin, null);
    	    }
    	    
    	    if ((Math.floor(((169999 - (game.time.now - time)) / 1000) % 600)) < 0)
    	    {
    	    	    gameNotEnd = 0;
    	    	    avatarText.destroy();
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.0, checkWin, null);
    	    }
    	    
    	    if (shield != null)
    	    {
    	    	    shield.x = avatar.x + 16;
    	    	    shield.y = avatar.y + 28;
    	    }
    	    
    	    game.physics.arcade.collide(avatar, wallGroup, null, null, this);
    	    game.physics.arcade.collide(emptyGroup, wallGroup, null, null, this);
    	    game.physics.arcade.collide(redGroup, wallGroup, null, null, this);
    	    game.physics.arcade.collide(avatar, emptyGroup, killBubble, null, this);
    	    game.physics.arcade.collide(avatar, redGroup, killRedBubble, null, this);
    	    
    	    if (spaceKey.isDown && gameNotEnd)
    	    {
    	    	    game.physics.arcade.overlap(avatar, cardGroup, cardCheck, null, this);
    	    }
    	    
    	    
    	    avatar.body.velocity.x = 0;
    	    avatar.body.velocity.y = 0;
    	    if (cursors.up.isDown && cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200 * avatarSpeed;
    	    	    avatar.body.velocity.x = 200 * avatarSpeed;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else if (cursors.up.isDown && cursors.left.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200 * avatarSpeed;
    	    	    avatar.body.velocity.x = -200 * avatarSpeed;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.down.isDown && cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200 * avatarSpeed;
    	    	    avatar.body.velocity.x = 200 * avatarSpeed;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else if (cursors.left.isDown && cursors.down.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200 * avatarSpeed;
    	    	    avatar.body.velocity.x = -200 * avatarSpeed;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.up.isDown)
    	    {
    	    	    avatar.body.velocity.y = -200 * avatarSpeed;
    	    	    if (avatarDirect)
    	    	    {
    	    	    	  avatar.animations.play('left');
    	    	    }
    	    	    else
    	    	    {
    	    	    	   avatar.animations.play('right');
    	    	    }
    	    }
    	    else if (cursors.down.isDown)
    	    {
    	    	    avatar.body.velocity.y = 200 * avatarSpeed;
    	    	    if (avatarDirect)
    	    	    {
    	    	    	  avatar.animations.play('left');
    	    	    }
    	    	    else
    	    	    {
    	    	    	   avatar.animations.play('right');
    	    	    }
    	    }
    	    else if (cursors.left.isDown)
    	    {
    	    	    avatar.body.velocity.x = -200 * avatarSpeed;
    	    	    avatar.animations.play('left');
    	    	    avatarDirect = 1;
    	    }
    	    else if (cursors.right.isDown)
    	    {
    	    	    avatar.body.velocity.x = 200 * avatarSpeed;
    	    	    avatar.animations.play('right');
    	    	    avatarDirect = 0;
    	    }
    	    else
    	    {
    	    	    if (avatarDirect)
    	    	    {
    	    	    	  avatar.frame = 0;
    	    	    }
    	    	    else
    	    	    {
    	    	    	   avatar.frame = 5;
    	    	    }
    	    }
    }
        
    function resetTurnSafe() //Prevent too many cards from turning over at once
    {
    	    turnSafe = 1;
    }
    
    function killBubble(avatar, bubble) //destroy a bubble
    {
    	    pop.play('', 0, 1, false);
    	    bubble.destroy();
    	    if (timerOff)
    	    {
    	    	    avatarSpeed = 0.5;
    	    	    game.time.events.add(Phaser.Timer.SECOND * 5.0, resetTimer, null);
    	    	    timerOff = 0;
    	    	    speedDown = 1;
    	    }
    }
    
    function killRedBubble(avatar, bubble) //destroy a red bubble
    {
    	    pop.play('', 0, 1, false);
    	    if (shieldOff)
    	    {
    	    	   shield = game.add.sprite(avatar.x + 16, avatar.y + 28, 'shield');
    	    	   shield.anchor.setTo(0.5, 0.5);
    	    	   game.add.tween(shield).to( { angle: 360 }, 500, Phaser.Easing.Linear.None, true, 0, -1, false);
    	    	   shieldOff = 0;
    	    }
    	    bubble.destroy();
    	    if (timerOff)
    	    {
    	    	    avatarSpeed = 1.5;
    	    	    game.time.events.add(Phaser.Timer.SECOND * 5.0, resetTimer, null);
    	    	    timerOff = 0;
    	    }
    	    else if (speedDown)
    	    {
    	    	   avatarSpeed = 1.5; 
    	    }
    }
    
    function resetTimer() //reset player speed to regular
    {
    	    if (shield != null)
    	    {
    	    	    shield.destroy();
    	    	    shieldOff = 1;
    	    }
    	    avatarSpeed = 1.0;
    	    timerOff = 1;
    	    speedDown = 0;
    }
    
    function makeBubble() //create a bubble object
    {
    	    if ((game.rnd.integerInRange(0, 9)) < 3)
    	    {
    	    	    emptyBubble = redGroup.create(getBubbleX(), getBubbleY(), 'redbub');
    	    }
    	    else
    	    {
    	    	    emptyBubble = emptyGroup.create(getBubbleX(), getBubbleY(), 'bub');
    	    }
    	    game.physics.arcade.enable(emptyBubble)
    	    emptyBubble.scale.x = .1;
    	    emptyBubble.scale.y = .1;
    	    emptyBubble.body.velocity.x = game.rnd.integerInRange(-400, 400);
    	    emptyBubble.body.velocity.y = game.rnd.integerInRange(-400, 400);
    	    emptyBubble.body.bounce.setTo(1, 1);
    }
    
    function getBubbleX() //get bubble x position
    {
    	    if (avatar.x < 512)
    	    {
    	    	    return 850;
    	    }
    	    else
    	    {
    	    	    return 250; 
    	    }
    }
    
    function getBubbleY() //get bubble y position
    {
    	    if (avatar.y < 255)
    	    {
    	    	    return game.rnd.integerInRange(350, 400);
    	    }
    	    else
    	    {
    	    	    return game.rnd.integerInRange(200, 250); 
    	    }
    }
    
    function killIntro() //remove intro splash
    {
    	    introBack.destroy();
    	    introText.destroy();
    	    introTitleText.destroy();
    }
    
    function killCards() //clear two turned cards
    {
    	    firstCard.destroy();
    	    secondCard.destroy();
    	    if (playExplode)
    	    {
    	    	    explode.x = firstCard.x;
    	    	    explode.y = firstCard.y;
    	    	    explodeTwo.x = secondCard.x;
    	    	    explodeTwo.y = secondCard.y;
    	    	    explode.animations.play('explode');
    	    	    explodeTwo.animations.play('explode');
    	    	    game.time.events.add(Phaser.Timer.SECOND * 1.0, resetExplode, null);
    	    }
    	    playExplode = 0;
    }
    
    function resetExplode()
    {
    	    explode.x = -500;
    	    explode.y = -500;
    	    explodeTwo.x = -500;
    	    explodeTwo.y = -500;  
    }
    
    function checkWin() //end game state
    {
    	    music.stop();
    	    gameRunning = 0;
    	    if (matchesRemaining < 1)
    	    {
    	    	    game.add.sprite(0, 0, 'back');
    	    	    introTitleText = game.add.text(500, 100, 'Speed Memory', titleStyle);
    	    	    introTitleText.anchor.set(0.5);
    	    	    introText = game.add.text(500, 250, 'You have matched all the pairs in time.\nGood job!', textStyle);
    	    	    introText.anchor.set(0.5);
    	    }
    	    else
    	    {
    	    	    game.add.sprite(0, 0, 'back');
    	    	    introTitleText = game.add.text(500, 100, 'Speed Memory', titleStyle);
    	    	    introTitleText.anchor.set(0.5);
    	    	    introText = game.add.text(500, 250, 'You failed to match all the pairs in time.\nSorry.', textStyle);
    	    	    introText.anchor.set(0.5);
    	    }
    }
    
    function getIndex(avatar, card)
    {
    	    firstIndex = Math.floor((card.x - 95) / 110);
    	    secondIndex = Math.floor((card.y - 95) / 110);
    	    if (secondIndex === 3)
    	    {
    	    	    return firstIndex + 24;
    	    }
    	    else if (secondIndex === 2)
    	    {
    	    	    return firstIndex + 16;
    	    }
    	    else if (secondIndex === 1)
    	    {
    	    	    return firstIndex + 8;
    	    }
    	    else
    	    {
    	    	    return firstIndex;
    	    }
    }
    
    //check memory card location
    function cardCheck(avatar, card)
    {
    	    if (firstBackCard != card)
    	    {
    	    	   if (turnSafe)
    	    	   {
    	    	   	   turnSafe = 0;
    	    	   	   index = getIndex(avatar, card);
    	    	   	   if (!firstCardTurn)
    	    	   	   {
    	    	   	   	   firstCard = game.add.sprite(card.x, card.y, cardList[index]);
    	    	   	   	   cardFlipGroup.add(firstCard);
    	    	   	   	   turnSafe = 1;
    	    	   	   	   firstCardCheck = cardList[index];
    	    	   	   	   firstBackCard = card;
    	    	   	   	   firstCardTurn = 1;
    	    	   	   }
    	    	   	   else
    	    	   	   {
    	    	   	   	   secondCard = game.add.sprite(card.x, card.y, cardList[index]);
    	    	   	   	   cardFlipGroup.add(secondCard);
    	    	   	   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, resetTurnSafe, null);
    	    	   	   	   secondBackCard = card;
    	    	    		   if (cardList[index] === firstCardCheck)
    	    	    		   {
    	    	    		   	   playExplode = 1;
    	    	    		   	   matchesRemaining = matchesRemaining - 1;
    	    	    		    	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		    	   firstBackCard.x = -500;
    	    	    		    	   secondBackCard.x = -500;
    	    	    		    	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		    	   firstCardTurn = 0;
    	    	    		    	   makeBubble();
    	    	    		    	   bell.play('', 0, 1, false);
    	    	    		   } 
    	    	    		   else
    	    	    		   {
    	    	    		   	   game.time.events.add(Phaser.Timer.SECOND * 1.0, killCards, null);
    	    	    		   	   firstCardTurn = 0;
    	    	    		   	   firstBackCard = 0;
    	    	    		    	   secondBackCard = 0;
    	    	    		   }
    	    	    	   }
    	    	   } 
    	    }
    }
};
