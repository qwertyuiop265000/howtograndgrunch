window.onload = function() {
var funValueEvents = [
["0: Null", "Exile all creatures."],
["1: Core", "Each player creates a token that's a copy of Wastes. (It's a basic land that taps for one colorless mana.)"],
["2: Double", "Refresh this page twice. Do both effects. Fun Value 2 cannot trigger a copy of itself."],
["3: Trine", "Create three 1/1 creature tokens that are all creature types and colors."],
["4: Grid", "Add two colorless mana."],
["5: Concept", "Search your library for a card and put it into exile face-down. Shuffle your library You may cast that card as long as it remains in exile."],
["6: Ghast", "Create a colorless 5/5 creature token named Goner that's all creature types."],
["7: Dark", "Prevent all combat damage that would be dealt this turn."],
["8: Octo", "Each player may put a copy of Mr. Octomino from outside the game into their hand."],
["9: Power", "You may cast any spell from the Power Nine: Ancestral Recall, Black Lotus, Mox Emerald, Mox Jet, Mox Pearl, Mox Ruby, Mox Sapphire, Timetwister, and Time Walk. If you do, every other player may cast a copy of Black Lotus."],
["10: Deck", "Mill ten cards. You may put one of the milled cards into your hand. (To mill a card, put the top card of your library into your graveyard.)"],
["11: Bolster", "Put a +1/+1 counter on eleven target creatures. If there are less than 11 creatures, put +1/+1 counters on all of them."],
["12: Hour", "You may take an extra turn after this one. At the beginning of that turn’s end step, you lose the game."],
["13: Triskaidekaphobia", "If any player has exactly 13 life, they lose the game."],
["14: LOVE", "Creatures you control gain menace until end of turn."],
["15: Fortune", "Each player creates two Treasure tokens. (They can be tapped and sacrificed for one mana of any color.)"],
["16: Falter", "Each player sacrifices all artifact tokens they control."],
["17: Photon Readings Negative", "Each player may search their library, graveyard, or hand for a nonland card, reveal it, and cast it without paying its mana cost. Shuffle all libraries searched this way."],
["18: Not Sorry", "Each player loses 5 life."],
["19: Prime", "You gain 1 life. Repeat this process until your life total is a prime number."],
["20: Life", "Each player gains 20 life."],
["21: Math", "You create nine 1/1 creature tokens that are all creature types and colors. Each of your opponents creates ten of those tokens"],
["22: Titanium", "Artifacts you control are 4/4 creatures in addition to their other types until end of turn."],
["23: Tower", "Put a tower counter on target land. It gains ''Tap: Add two colorless mana.'' and loses all other abilities."],
["24: Day", "Put four +1/+1 counters on a random creature."],
["25: Quarter", "Destroy a number of target creatures equal to three-quarter the number of creatures on the battlefield."],
["26: Alphabet", "You may reveal a nonland card from your hand. If its name doesn't have any repeating letters, you may cast it without paying its mana cost."],
["27: Cube", "Increase each player's life to the nearest cubic number. (They go 1, 8, 27, 64, 125, etc.)"],
["28: Pestilence", "Put a -1/-1 counter on each creature."],
["29: Snow", "Tap all creatures."],
["30: Water", "Each player creates a token that's a copy of Island."],
["31: End", "End the turn. (Exile all spells and abilities from the stack, including this card. Discard down to your maximum hand size. Damage wears off, and “this turn” and “until end of turn” effects end.)"],
["32: Explore", "You may play an additional land this turn."],
["33: Right Number", "Draw two cards."],
["33: Wrong Number", "Oh it's the wrong number! The wrong number song! We're very very sorry that we got it wrong! Oh it's the wrong number! The wrong number song! We're very very sorry that we got it wrong! Anyways, each opponent draws two cards."],
["35: Hexomino", "You may cast a copy of Hex without paying its mana cost. (It must target six creatures.)"],
["36: Green", "Add three green mana."],
["37: OH THERE IT IS AGAIN, 37", "You may refresh this page. If this fun value is rolled again, you win the game."],
  
];

var flavorTextArray = [
"'Grunch.' -Grunch",
  "'Grunch?' -Grunch",
  "A grungle saved is a wungle earned.",
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
  

var randomItem = funValueEvents[Math.floor(Math.random()*funValueEvents.length)];
var randomFt = flavorTextArray[Math.floor(Math.random()*flavorTextArray.length)];

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
