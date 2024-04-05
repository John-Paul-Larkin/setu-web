let fact = 0;

const factsList = [
  "Irish people's dependence on the potato has fallen dramatically in recent decades. Our average annual consumption, at 85kg a person, is 2½ times higher than the world average, but in the 1990s that figure was 140kg a head. Today only 70 per cent of the carbohydrates in our diet are supplied by the potato. In times past it was in excess of 90 per cent.",
  " From the past to the future. The potato was the first vegetable to be grown in space. The process started in 1995, on the Columbia space shuttle, but it wasn't until 10 years later that the growing technique was perfected. Space potatoes are known as Quantum Tubers. You'll not find them in your local Dunnes. Or anywhere else, really.",
  "The Incas used potatoes to treat rheumatism and toothaches and broken bones . . . everything, really. It wasn't much use to them when it came to warding off marauding Spaniards, though.",
  "The crisp was invented by accident, or so the story goes. The railway kingpin Cornelius Vanderbilt used to eat at Cary Moon's Lake House in Saratoga, New York, where a chef called George Crum worked. One day Vanderbilt sent back his potatoes and complained they had been cut too thick. Crum then sliced a new batch incredibly thinly – more to wind up Vanderbilt than anything else. He fried them and added salt. And so the crisp was born.",
  "Despite its appearance, potato is made up of 80% water and only 20% of solid. Potato varieties have grown over the centuries, and there are around 100 of the edible kind. ",
  "The vegetable’s existence is quite old age as its domestication dates approximately between 8000 and 5000 BC in Peru or Bolivia, known as the Andes back then. Still, its earliest verified tuber was found in 2500 BC at the Ancon coastal site and the Incas cultivated it as early as 1800 years ago.",
  "Semantically speaking, the potato has a rather Spanish origin. It came from the Spanish word ‘patata’ in the 1950s, which then stemmed from the Caribbean language ‘batata’ or “sweet potato”. Today, the word comes by other slang terms such as spud, tater, and tattie.",
  "China is the world’s largest potato producer and exporter, while the countries India, Germany, Ukraine, Russia, Poland, and the United States are leading producers as well. In the USA alone, all 50 of its states grow the tuber crop, with Idaho and Washington being the largest ones.",
  "A potato is a living thing long after it is pulled from the ground. Although lesser vegetables – we're looking at you, carrots – die the moment they are harvested, a potato lives on like the hardy little thing it is. Left to its own devices a potato will sprout, and then, if you are so inclined, you can plant it and watch it grow a whole rake more potatoes.",
  "The biggest potato ever grown weighed a touch under 5kg – a good deal more than the average cat. Guinness World Records tells us it was grown in England in 2011. It does not, sadly, tell us why it was grown or what it tasted like. We can tell you that such a potato could make more than 100 bags of Tayto.",
  "Although Walter Raleigh (a man whose name has several spellings) had little or nothing to do with the potato as we know and love it, he did see potatoes off the coast of Venezuela – but these were sweet potatoes. Sweet potatoes are not sweet. Nor are they potatoes. They are just a sham from start to finish. And that is why they don't have a day to call their own.",
];

const factsText = document.getElementById("facts-text");

const nextFact = () => {
  if (fact === factsList.length - 1) {
    fact = 0;
  } else {
    fact += 1;
  }
  factsText.innerText = factsList[fact];
  factsText.classList.add("slide-right");
  setTimeout(() => factsText.classList.remove("slide-right"), 900);
};

const lastFact = () => {
  if (fact === 0) {
    fact = factsList.length - 1;
  } else {
    fact -= 1;
  }
  factsText.innerText = factsList[fact];
  factsText.classList.add("slide-left");
  setTimeout(() => factsText.classList.remove("slide-left"), 900);
};
