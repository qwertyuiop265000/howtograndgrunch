window.onload = function() {
var myArray = [
["asshole", "To Grand Grunch, add a token copy of Grand Grunch to your hand. <br>'?' is equal to 4."],
["boy", "To Grand Grunch, Grand Grunch fights up to one target creature. <br>'?' is equal to the number of creatures on the battlefield."],
["chap", "To Grand Grunch, draw a card. <br> '?' is equal to 4."],
["dude", "To Grand Grunch, create five token copies of Grand Grunch, except they don't Grand Grunch. <br>'?' is equal to 1."],
["egotist", "To Grand Grunch, add one mana of any color, then pay X mana. <br> '?' becomes equal to 2 to the power of X."],
["fella", "To Grand Grunch, take an extra turn after this one. At the end of that turn, target opponent creates a token copy of Grand Grunch. <br>'?' is equal to 1."],
["guy", "To Grand Grunch, draw two cards. <br> '?' is equal to the number of cards in your hand."],
["hooligan", "To Grand Grunch, do up to seven push-ups in real life. <br> '?' becomes equal to the number of push-ups you did. <i>(You are allowed to lie.)</i> <br> Doing push-ups is a special action and does not use the stack."],
["ingrate", "To Grand Grunch, attach Grand Grunch to target land you control, and create a token that's a copy of that land. Grand Grunch has the abilities of the land he is attached to. <br> '?' is equal to the number of lands you control."],
["jerk", "To Grand Grunch, Put a Grand Grunch counter on Grand Grunch. For as long as Grand Grunch has a Grand Grunch counter, Grand Grunch has 'tap: Grand Grunch.' <i>(Be sure to revisit insert link here each time you tap Grand Grunch.)</i> <br> '?' is equal to one."],
["killer", "To Grand Grunch, destroy up to two target creatures with combined power 8 or less. <br> '?' is equal to 2."],
["lhurgoyf", "To Grand Grunch, mill 10 cards. <br> '?' is equal to the number of creature types among cards in your graveyard plus one, up to 10."],
["monster", "To Grand Grunch, replace target creature's power and toughness numbers with Grand Grunch's power and toughness question marks. <i>(Use scissors if you have to.)</i> <br> '?' becomes 0."],
["nonce", "To Grand Grunch, gain control of up to one target creature with power 3 or less. <br> '?' is equal to the number of creatures you control."],
["oaf", "To Grand Grunch, name a nonland card. Target opponent reveals their hand. If their hand contains the named card, '?' becomes 12 and Grand Grunch gains trample, haste, vigilance, and lifelink. Otherwise, '?' is 4."],
["prick", "To Grand Grunch, Grand Grunch becomes a token copy of Summon: Bahamut. You may use a physical token, replacement card, or overlay to represent this. I'm not a jerk. <br> '?' is irrelevant in this instance. He's a 9/9."],
["quack", "To Grand Grunch, draw target card in any zone, then put a card from your hand into that zone. <br> '?' is equal to the number of cards in your hand plus 2."],
["ruffian", "To Grand Grunch, create a token copy of Grand Grunch. <br>'?' is equal to 1."],
["scrooge", "To Grand Grunch, create two tapped Treasures. <br>'?' is equal to 2."],
["dingus", "To Grand Grunch, discard your hand. <br>'?' is equal to 8."],
["introvert", "When you Grand Grunch, you may pay 3 life. If you do, draw a card. <br>'?' is equal to 13 minus your life total."],
["extrovert", "To Grand Grunch, sacrifice two nonland, non-creature permanents other than Grand Grunch. <br>'?' is equal to your life total."],
["family man", "To Grand Grunch, Grunch. (go to the hellscube discord and type !grunch) <br>'?' is equal to 2."],
["grinch", "To Grand Grunch, steal target permanent. (You're considered its owner until end of game.) <br>'?' is equal to 1."],
["GRAND DAD", "To Grand Grunch, shuffle the playlist on the bottom of this description. <br>'?' is equal to the number of minutes in the currently playing video. If playlist has no videos for some reason, '?' is 7. <br> (https://music.youtube.com/playlist?list=PL3dGPfkLzu7zHzMkfQNn8UvEHj_74G8vs&si=DkQPW3G6QGjUDwTY)"],
["storm player", "To Grand Grunch, Return Grand Grunch to your hand, except he has storm. <br>'?' is equal to 1."],
["chad", "To Grand Grunch, discard two cards. <br> '?' is equal to 7, and Grand Grunch has vigilance."],
["soyjak", "To Grand Grunch, cast a random copy of one of the Power Nine. <br> '?' is equal to 1."],
["glut", "To Grand Grunch, create a 1/1 Wall artifact creature token. <br> '?' is equal to 3 and Grand Grunch has defender."],
["day eater", "To Grand Grunch, skip your next two turns. <br> '?' is equal to 9, and Grand Grunch has flying, vigilance, and trample."],
["dreadmaw", "To Grand Grunch, put your Dreadmaw onto the battlefield. (If you don't have a Dreadmaw, conjure a Colossal Dreadmaw into your command zone, and it becomes your Dreadmaw.) <br> '?' is equal to 0."],

];

var ftArray = [
"'Grunch.' -Grunch",
  "'Grunch?' -Grunch",
  "A grungle saved is a wungle earned.",
  "A grunch in the hand is worth two to six on the field.",
  "Grunch? Grunch!! Gruuuuuuunch!!",
  "What the Grunch did you just say about me, you little Grunch?",
  "I *Grunch* my family!",
  "*annoyed Grunch*",
  "To Grunch, or not to Grunch?",
  "I am the Grunch that is approaching",
  "All signs point to Grunch",
  "Grunch again later",
  "A word of advice: Grunch.",
  "That'll do, Grunch. That'll do.",
  "This one is sentient. If you close the page he will die.",
  "GG stands for Good Grunch. There will be no further questions.",
  "I AM NOT CRAZY.<br>I am not crazy! I know he swapped those numbers. I knew it was one. The Grunch count starts at *one*. As if I could ever make such a mistake. Never. Never! I just - I just couldn't prove it. He covered his tracks, he got that idiot on the council to lie for him. You think this is something? You think this is bad? This? This... chicanery? He's done worse. That errata! Are you telling me that a card just happens to change like that? No! *He* orchestrated it! Grunch! He had no *rules text*! And we accepted him! We shouldn't have. We took him into our own cube! What was I *thinking*? He'll never change. He'll *never* change! Ever since he was drawn, *always* the same! Couldn't keep himself out of the design contests! But not our Grunch! Couldn't be precious *Grunch*! Grunching them blind! And *HE* gets to be a card? What a sick joke! I should've stopped him when I had the chance!<br>But you have to stop him! You-",
  "Ikora's most wanted",
  "(This card is every gender.)",
  "Despite his hostile demeanor, Grunch has his roots deep in the trans community.",
  "Okay, okay. You can have a little Grunch. As a treat.",
  "It was Felipe's son, Andre Felipe Felipe, who developed what he called the “Grunching” strategy.",
  "Move your Grunch around more.",
  "GG stands for Grunch Grass. There will be no further questions.",
  "Chili dogs?! - Classic Grunch Quote",
  "Blame Gerrit for this one.",
  "Grunch Pro Tip: Hover your mouse over Grunch for his sage words of wisdom.",
  "It's Grunchin' time.",
  "Stop trying to make Grunch happen. Grunch isn't going to happen.",
  "He's Grnot a Grnelf...",
  "As cuddly as a brushwagg, as charming as a beeble.",
  "Still waiting for Shark to come back with those cigarettes...",
  "Canonically multi-galaxy level. This is just an antifeat.",
  "If you're seeing this text, the Grand Grunch you just Grand Grunched for has Grand Grample (which is just trample.)",
  "FLEEMSTONES???",
  "Jace Beleren just died of Grunchma.",
  "Who's Jace Beleren?",
  "Grunchma balls.",
];
var normalGrunchImage = "https://i.imgur.com/gbFuCzV.png"
var randomGrunchImage = [
  "https://i.imgur.com/prDIShY.gif",
  "https://i.imgur.com/xXFJIER.gif",
  "https://i.imgur.com/BaRCH9U.gif",
  "https://i.imgur.com/ZT3ofcu.gif",
  "https://i.imgur.com/7rFA7wX.gif",
  "https://i.imgur.com/K6HXuGT.gif" //thankies :)
  ];
  

var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
var randomFt = ftArray[Math.floor(Math.random()*ftArray.length)];

var randomGrunch = randomGrunchImage[Math.floor(Math.random()*randomGrunchImage.length)];
var randomGrunchValue = Math.random();

var elem = document.getElementById('grunchtext');
elem.innerHTML = randomItem[1];

var guy = document.getElementById('guytext');
guy.innerHTML = randomItem[0];

var ft = document.getElementById('flavortext');
ft.innerHTML = randomFt;

if (randomGrunchValue < 0.7) {
document.getElementById("myImg").src = normalGrunchImage;
} else {
  console.log(randomGrunch);
document.getElementById("myImg").src = randomGrunch;
}
}
