const fillers = {

  // Sentence 1 essentials
    s: ["s"],
    ship: ["spaceship", "rocket", "starfighter", "mothership"],
    arrival: ["docked", "landed", "arrived", "anchored"],

    breathVerb: ["gasped$awe", "marveled", "admired", "appreciated", "gazed$awe"],
    awe: [" in awe", ""],

    landscape: ["$color $formation$s, $arranged with $color $pattern $ptype$s"],
    arranged: ["scattered", "littered", "plastered", "peppered", "covered", "sprinkled", "drizzled", "filled", "packed"],
    
    formation: ["cascade", "cliff", "canyon", "mountain", "plateau", "hill", "spire", "dune"],
    colorPattern: ["$color $pattern", "$color & $color $pattern", "$color"],

    color: ["$color1", "$color2"],
    color1: ["pink", "black", "purple"],
    color2: ["white", "orange", "green"],
    pattern: ["polka-dotted", "striped", "checkered", "spotted", "speckled"],

    // Sentence 2 essentials
    position: ["Resting", "Float", "Grounded", "Spinning", "Standing"],
    size: ["tiny", "small", "average-sized", "large", "gigantic"],
    building: ["tower", "skyscraper", "cottage", "radar", "chapel", "dome"],

    objOne: ["$org$orgList and $org"],
    org: ["$colorPattern $animal$s", "$plant"],
    orgList: [", $org$orgList", ", $org$orgList", ""],
    
    animal: ["cat", "hippo", "hyena", "horse", "pig", "goat", "cow", "seal", "penguin"],
    plant: ["$product $ptype$s", "$ptype$s of $element"],
    
    ptype: ["tree", "shrub", "flower", "pitcher", "weed", "pine", "fern", "mushroom", "palm"],
    product: ["$fruit", "$element"],
    fruit: ["pineapple", "apple", "strawberry", "banana", "kiwi", "blueberry", "lemon", "grape", "mango"],
    element:["fire", "ice", "steel", "lightning", "spirit", "poison", "glass", "shadow", "light", "wind"],

    // 3rd sentence essentials
    interest: ["$lightAdj light", "$darkAdj shadow"],
    lightAdj: ["sparkling", "gleaming", "shimmering", "glowing", "beaming", "holy", "$greyAdj"],
    darkAdj: ["looming", "menacing", "gloomy", "obscure", "daunting", "sinister", "$greyAdj"],
    greyAdj: ["radiating", "condescending", "mysterious", "magnificent"],

    relativePos: ["atop", "above", "at the base of", "below", "drowning"],

    interestVerb: ["piqued", "caught"],
    interestObj: ["eyes", "interest", "attention"],

    travelVerb: ["ventured off", "set forth on my $travelType", "started my $travelType"],
    travelType: ["journey", "hike", "walk"],

    pet: ["$size $colorPattern $animal", "$color $product $ptype"],

    petname: ["Chloe", "Max", "Morbius", "Gus", "Tina", "Zoey", "AMOGUS", "Rick"]
  }
  
  
  const template = `As our $ship $arrival on the port, I $breathVerb at the $landscape. 

  $position amid the shrubbery was a $size $building, surrounded by $objOne. 

  A $interest $relativePos the building $interestVerb my $interestObj, so I $travelVerb with my $pet named $petname.
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


// IGNORE BELOW I want to try this later

// color: ["$red$blue$yellow"],

// red: ["$r", "$o"],
// blue: ["b", "o"],
// yellow: ["y", "o"],

// ooo: ["white"],
// roo: ["red"],
// rbo: ["purple", "lavender", "indigo"],
// roy: ["orange"],
// ooy: ["yellow"],
// oby: ["green"],
// obo: ["blue"],
// rby: ["black"], Figure out how to do this OwO Basically Encode Precedence