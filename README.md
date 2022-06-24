# My Journey Begins

## About
An introduction about an exploration of a new planet told in first person. 

## Artist Statement
My goal in this project was to convey a quirky, whimsical and adventurous mood in the reader that was very random. I achieved this by having each nonterminal symbol have many different possible combinations and states that were long and descriptive. I only had time to appeal to visual imagery, so I defined intricate visual components that could be reused over and over.

Additionally, to improve the imagery, I used fragments in a sing-songy way. One feature I needed to nail down was the comma placement, esp. for the list. I used a technique I learned from CSE110A to recurse the selection to create long lists.

Finally, I made the descriptions of the organism weird. Some of them don't make sense (and may have English syntax errors, but I kept them because it makes the organism seem more exotic). 

Some things I can improve on here include the general theming of the page(would be nice if I can change the color of text inline) and the ability to save a selection I have made to use later. I did not edit the code below the comment due to time constraints, but to solve these problems, I increased the randomness (which mixed into my quirky, wacky theme nicely).

## Features

### Sentence 1
This sentence sets the scene. We start with a selection of the vehicle that brought us here and to what the main character sees when they first arrive. The main feature(line 11) of this sentence is that I built the landscape out of many other nonterminals to create more possible combinations. A neat feature(line 16) I included for the adjectives was that if a pattern had 2 colors, it would never pick the same color because I divided the colors into 2 mutually exclusive groups(I had to pay the price of colors in the same set never appearing together though...). Another neat trick(line 4) was the use of the $s rule for cases when we need plural forms. 

### Sentence 2
This sentence is the beef of this project. Particularly the $objOne rule (line 26) reused some of the same descriptors as before but had a chance of becoming a list. $orgList (line 28) has rules where it will select of itself, which allowed for repetitions of $org(line 27). I also took advantage of the elimination of the oxford comma to allow one rule to encompass both 2 item lists and > 3 item lists.  

### Sentence 3
Like the other sentences, sentence 3 reuses the descriptor nonterinals from before. This sentence is similar to sentence 1, but I played around with some semantics (For instance (line 46), does "piqued my attention" work?). I did this for the interest and the venturing (line 49) and played around with the journeyTypes(hike vs a journey?). 


Made by Arrian Chi using [https://github.com/julinas/p1-text-generation-starter] as template