// const fillers = {
//     adventurer: ["$adventurer and $adventurer", "Geoff"],
//     pre: ["Fra", "Tro", "Gre", "Pan", "Ast", "Ara"],
//     post: ["gria", "ston", "gott","-on-the-lee", "ora", "Ara", "uwu"],
//     people: ["kindly", "meek", "brave", "wise", "sacred", "cherished", "honored", "forgotten", "apathetic", "mystic", "orca"],
//     item: ["axe", "staff", "book", "cloak", "shield", "club", "sword", "magic gloves", "galvel", "fists", "mace", "potato"],
//     num: ["two", "three", "eleven", "so many", "too many", "an unsatisfying number of", "barely any", "an unspecified amount of", "surely a satisfactory number of"],
//     looty: ["gleaming", "valuable", "esteemed", "rare", "exalted", "scintillating", "kinda gross but still usefull", "complete garbage"],
//     loots: ["coins", "chalices", "ingots", "hides", "victory points", "gems","scrolls", "bananas", "noodles", "goblins", "CS Majors", "college credits"],
//     baddies: ["orcs", "glubs", "fishmen", "cordungles", "mountain trolls", "college professors", "dragon", "evil $adventurer", "agents of chaos"],
//     message: ["call", "txt", "post", "decree", "shoutz", "tweets", "choiche", "hearkens", "harkening", "harkenening", "harkenenening", "...wait, no! Come back", "Watermelon"],
    
//   };

// 1. predOne used verbOne and objOne
// 2. objOne used a noun phrase of variable nouns
// 3. (I'm proud of this one) plural s rule.
// 4. Colors and patterns. I prevented any selection of same colors (at the cost of the inability to select colors in the same set)

const fillers = {
    s: ["s"],
    ship: ["spaceship", "rocket", "starfighter", "mothership"],
    arrival: ["docked", "landed", "arrived", "anchored"],

    predOne: [""],
    verbOne: ["gasped$awe", "marveled", "admired", "appreciated", "gazed$awe"],
    awe: [" in awe", ""],

    landscape: ["$color $formation$s"],
    formation: ["cascade", "cliff", "canyon", "mountain"],



    objOne: ["$noun", "$noun$nounphrase, and $noun"],
    adjOne: ["$color, $pattern", "$color1 and $color2 $pattern", "$color"],
    color: ["$color1", "$color2"],
    color1: ["pink", "black", "purple"],
    color2: ["white", "orange", "green"],
    pattern: ["polka-dotted", "striped", "checkered", "spotted"],


    noun: ["the $adjOne $animal", "the $plant"],
    nounphrase: [", $noun$nounphrase", ""],
    
    animal: ["cat", "pony", "dog", "mouse", "pig", "goat", "cow"],
    plant: ["$product $ptype", "$ptype of $fruit$s", "$ptype of $element"],
    
    ptype: ["tree", "shrub", "flower", "pitcher"],
    product: ["$fruit", "$element"],
    fruit: ["milk", "apple", "pear", "banana"],
    element:["fire", "ice", "poison", "electricity"]
  }
  
  
  const template = `As our $ship $arrival on the port, I $verbOne at the $landscape.
  `;
  

 
  // STUDENTS: You don't need to edit code below this line.
  
  const slotPattern = /\$(\w+)/;
  
  function replacer(match, name) {
    let options = fillers[name];
    if (options) {
      return options[Math.floor(Math.random() * options.length)];
    } else {
      return `<UNKNOWN:${name}>`;
    }
  }
  
  function generate() {
    let story = template;
    while (story.match(slotPattern)) {
      story = story.replace(slotPattern, replacer);
    }
  
    /* global box */
    box.innerText = story;
  }
  
  /* global clicker */
  clicker.onclick = generate;
  
  generate();
