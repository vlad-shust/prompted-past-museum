import { toEraId } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const theMemoryOfTheWorld = {
  slug: 'the-memory-of-the-world',
  title: 'The Memory of the World',
  dek: 'Every ship that enters Alexandria surrenders its books to the scribes',
  story:
    'The rule is simple and outrageous: any ship that docks at Alexandria must hand over every book on board. Scribes copy the text, the library keeps the original, and the ship sails away with the duplicate; the confiscated scrolls are catalogued, without embarrassment, under the label from the ships. The city itself is barely older than its oldest residents. Alexander drew it in the sand and the Macedonian generals who inherited Egypt built it. The Ptolemies cannot buy Greece’s past, so they have decided to buy its mind. Their agents at the book markets of Athens and Rhodes purchase whole libraries; what cannot be purchased is borrowed, and what is borrowed does not always come back.\n\nThe masterstroke of the collection is a swindle. Athens lends out its official state copies of Aeschylus, Sophocles, and Euripides, the texts against which all others are checked, against a deposit of 15 talents of silver, a fortune. Ptolemy keeps the originals, returns handsome copies, and tells Athens to keep the money. Inside, order is being invented because it has to be. A scholar-poet named Callimachus compiles the Pinakes, a catalogue of authors and works running to 120 scrolls, the first bibliography on earth. The librarians begin shelving by the first letter of the author’s name, which sounds like nothing and is the birth of alphabetical order as a tool.\n\nInside the Mouseion, salaried scholars, the first in history to be paid simply to know things, argue in the colonnades. Euclid is assembling geometry into 13 books that will be taught for 2,000 years. Aristophanes of Byzantium, tired of readers guessing where sentences end, is inventing marks for punctuation and accents. Herophilus is opening the human body and finding that the brain, not the heart, does the thinking. Aristarchus of Samos has proposed, to general disbelief, that the earth circles the sun. And Eratosthenes, who will measure the circumference of the Earth with a well, a stick, and a shadow and be wrong by perhaps two percent, catalogues a collection aiming at half a million scrolls. It is the most ambitious idea of the ancient world: every book, in one place, forever.\n\nThe rivalry it breeds is almost flattering. When the kings of Pergamum start a competing library, Egypt cuts off their papyrus. Pergamum, so the story goes, perfects writing on treated animal skin, which is why parchment carries that city’s name. The ending has no single villain, though history keeps auditioning them. A Ptolemy purges the scholars in 145 BC and the best minds scatter east. Caesar’s harbor fire in 48 BC burns warehoused books on the docks. Aurelian’s siege in the 270s wrecks the palace quarter where the collection lived; the Serapeum, its daughter library, is demolished by a Christian crowd in 391. The tidy stories of one great blaze were written centuries later. Forever is the only part they get wrong, and the burning, when it comes, will take centuries to finish.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'A morning, c. 280 BC',
  historicalYear: -280,
  historicalMonthDay: null,
  artTitle: 'The Great Library of Alexandria',
  artCredit: 'O. Von Corven, 19th century',
  imageUrl: bucketPainting('scenes/the-memory-of-the-world.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-memory-of-the-world.jpg'),
  details: [
    {
      id: 'scroll-racks',
      x: 0.71,
      y: 0.45,
      scale: 3.0,
      caption:
        'Scroll ends fill the pigeonholes row on row, and a librarian leans in over the top shelf. Callimachus catalogued this collection in 120 scrolls. It was the first bibliography anyone had made.',
    },
    {
      id: 'the-scholars',
      x: 0.16,
      y: 0.7,
      scale: 2.8,
      caption:
        'Three men crowd a small round table. One is bent over the writing, and one stands with an unrolled scroll in both hands. The Mouseion paid them a salary, the first men in history hired simply to know things.',
    },
    {
      id: 'the-light',
      x: 0.45,
      y: 0.26,
      scale: 2.8,
      caption:
        'A carved face crowns the column and the painted ceiling runs back into the dark. No ancient writer described the rooms where the scrolls were kept. Von Corven’s version is a guess, and so is everyone else’s.',
    },
  ],
} satisfies MockSceneDef;

export const theMountainThatMenMade = {
  slug: 'the-mountain-that-men-made',
  title: 'The Mountain That Men Made',
  dek: 'On the Giza plateau, ten thousand hands raise a pharaoh toward the sun',
  story:
    'The desert west of the river is becoming a horizon with corners. For most of a generation, the plateau at Giza has been the largest organized workplace on Earth: quarry gangs, hauling crews, bakers, brewers, scribes. The scribes count everything: 20 loaves a man, four jugs of beer, one life at a time. We can read some of that counting. The oldest inscribed papyri ever found came out of a sealed harbor cave on the Red Sea in 2013. They are the logbook of a boat crew under an inspector named Merer, and what they record is commuting. Month after month, the crew ferried white casing stone from the Tura quarries across the flood to the pyramid harbor: three round trips in a good 10-day week, rations noted, no poetry at all.\n\nThey are not slaves; Herodotus will start that rumor 2,000 years later and it will take archaeology another 2,000 to put it down. The workers’ town south of the plateau has been excavated: industrial bakeries, breweries, dormitories, and rubbish heaps full of cattle and fish bone. Bone means meat, and meat means these men were fed, better fed than most farmers in the valley. Their skeletons show hard labor and also set fractures that healed straight, meaning someone was paid to treat them. Crews rotated in by levy when the flood drowned the fields and farm work stopped. The graffiti they leave inside the relieving chambers, where no visitor was ever meant to look, brags like a sports team’s: Friends of Khufu, the gang that does not tire.\n\nBlock by block, 2.3 million of them at 2.5 tons each, the pyramid climbs. It will top out at 481 feet. The granite beams roofing the king’s chamber weigh 50 tons apiece, and came 500 miles downriver from Aswan by barge. The precision is the part no one has fully explained. The base covers 13 acres and is level to within an inch. The sides face true north to within 0.05 of a degree, set by people working with string, plumb weights, and the stars. When the white casing stones are polished, the monument will throw the sun back at itself, visible for a day’s walk in every direction. Nothing human hands make will stand taller until an English cathedral spire in the fourteenth century of another era.\n\nThe king it is for will occupy it briefly; robbers reached the chamber so long ago that no one knows what, or who, they found. Khufu owned the largest building on the planet, and exactly one certain portrait of him survives. It is an ivory figurine 3 inches tall, found in the ruins of a temple far to the south, small enough to close a hand around. The mountain, and the names of its builders, remain.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 2560 BC',
  historicalYear: -2560,
  historicalMonthDay: null,
  artTitle: 'Israel in Egypt',
  artCredit: 'Edward Poynter, 1867',
  imageUrl: bucketPainting('scenes/the-mountain-that-men-made.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-mountain-that-men-made.jpg'),
  details: [
    {
      id: 'hauling-gang',
      x: 0.82,
      y: 0.78,
      scale: 2.8,
      caption:
        'Men lean back into the ropes, and behind them a water jar rides on a woman’s head. The engineer John Hawkshaw bought the painting and objected that so few men could never shift that much granite. Poynter went back and added more.',
    },
    {
      id: 'the-sledge',
      x: 0.44,
      y: 0.86,
      scale: 3.0,
      caption:
        'Solid wooden wheels take the weight of the plinth. On the sand beside them a hauler has gone down while a woman holds a bowl to his mouth. Egypt moved stone this size on sledge runners rather than wheels, and a man walked ahead to wet the sand.',
    },
    {
      id: 'the-horizon',
      x: 0.208,
      y: 0.4,
      scale: 3.0,
      caption:
        'Poynter set the Great Pyramid on the skyline above a row of columns copied from a temple hundreds of miles upriver. The two buildings never stood in sight of each other. The pyramid rose 481 feet with its casing on and stayed the tallest thing human hands had made for 38 centuries.',
    },
  ],
} satisfies MockSceneDef;

export const theFaceInTheSand = {
  slug: 'the-face-in-the-sand',
  title: 'The Face in the Sand',
  dek: 'For most of its life, the Sphinx was a head floating on the desert',
  story:
    "The quarrymen of Giza are cutting blocks for Khafre's pyramid when they leave a knob of rock standing in the pit. It is poor limestone, layered like pastry, no use for building. Somebody, and Egypt never wrote down who, looks at the reject and sees a lion at rest. The crews carve it where it lies: a body 240 feet long, paws the length of a city bus, and 66 feet up, a human face in the royal headcloth. The face is almost certainly Khafre's own, since his pyramid rises directly behind it. There is no inscription anywhere on it. The largest statue of the ancient world arrived without a caption, and every argument about it since has been guesswork pressed against stone.\n\nThe desert started taking it back almost at once. Sand drifts fast at Giza, and within a few centuries the lion was gone to the shoulders. Around 1400 BC a young prince named Thutmose, out hunting, fell asleep in the shade of the head at midday. He dreamed the buried god spoke to him: clear away the sand, and you will be king. Thutmose was not first in line for the throne. He cleared the sand, and he became Thutmose IV, and between the paws he set a granite slab telling the whole story. The Dream Stele is the first excavation report in history, and it is also a job application filed after the job was won.\n\nEgypt in those centuries called the statue Horemakhet, Horus in the Horizon, and built it a temple. The Greeks arrived and called it a sphinx after their own riddling monster, and the name stuck to a statue that has never asked anyone anything. The nose came off in the Middle Ages: the story blames a Sufi zealot named Muhammad Sa'im al-Dahr, furious to find peasants leaving offerings at the head for their harvests. Napoleon's gunners took the blame for 200 years. They arrived in 1798 to find the nose already 4 centuries gone, and the scholars with them measured the scarred face and drew what was left. The braided ceremonial beard had already fallen. A piece of it sits in the British Museum, another in Cairo, and the chin they belong to waits at Giza.\n\nBurial was also the preservative. The Sphinx is cut from soft, layered stone that the desert wind eats visibly within a lifetime, and the sand that kept swallowing the body shielded it better than any restorer. Every age that dug it out also patched it: stone repairs on the paws from the pharaohs, more from the Greeks' era, more again from Rome. Rome turned the monument into a proper attraction, with a grand stairway and a viewing terrace. Roman tourists scratched their names where they could reach. The head has stood in the open through all of it, which is why the face is the ruined part. It has taken 45 centuries of wind at cheek height, and traces of the original red paint still cling in the shelter of one ear.\n\nElihu Vedder painted The Questioner of the Sphinx in 1863 without ever having seen Egypt: an American in wartime, working from photographs and want. He buried the statue back up to its chin and set a skull in the sand. A lone traveler kneels at the great lips, ear pressed to the stone, listening for the one answer worth crossing a desert for. The sand was finally cleared for good in 1936, the whole lion exposed for the first time in thousands of years. The lips his traveler listened at now stand 60 feet above open pavement. They have not moved.",
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 2500 BC',
  historicalYear: -2500,
  historicalMonthDay: null,
  artTitle: 'The Questioner of the Sphinx',
  artCredit: 'Elihu Vedder, 1863',
  imageUrl: bucketPainting('scenes/the-face-in-the-sand.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-face-in-the-sand.jpg'),
  details: [
    {
      id: 'the-listener',
      x: 0.52,
      y: 0.66,
      scale: 2.6,
      caption:
        'A traveler in ragged robes kneels and waits with his ear against the stone lips. Vedder said he was painting the hopelessness of man before the laws of nature.',
    },
    {
      id: 'the-skull',
      x: 0.82,
      y: 0.84,
      scale: 3.0,
      caption:
        'A skull works its way out of the sand, an earlier questioner who stayed. Vedder signed and dated the broken slab beside it, 1863. That was the year the Boston collector Martin Brimmer paid $500 for the picture.',
    },
    {
      id: 'the-headcloth',
      x: 0.28,
      y: 0.25,
      scale: 2.2,
      caption:
        'A nemes headcloth covers the head and shoulders in stiff pleats, and here it is split and scoured down one side. Vedder had never set foot in Egypt when he painted it. He first went up the Nile in 1889, 26 years later.',
    },
  ],
} satisfies MockSceneDef;

export const theLastPharaoh = {
  slug: 'the-last-pharaoh',
  title: 'The Last Pharaoh',
  dek: 'The crown that began with Narmer stops on a golden couch in Alexandria',
  story:
    "Alexandria has fallen, and the queen is locked in her own tomb. Cleopatra built the mausoleum by the sea to hold her treasure and her body. In the first days of August, 30 BC, it holds the treasure, the living queen, and two maids, Iras and Charmion, while Octavian's men hold the door. Antony is already gone. Told falsely that she was dead, he ran himself on his sword, then learned the report was wrong and was hauled up to her window on ropes to die in her arms. Octavian keeps his prisoner alive with care. He needs her breathing, because what Rome pays to see is a queen walking in chains behind a general's chariot, and Cleopatra is the most famous woman in the world.\n\nShe knows the price of that parade better than anyone alive. Her own sister Arsinoe walked in Caesar's triumph 16 years earlier, and the crowd's pity was the only thing that saved her, for a while. Cleopatra had ruled for 21 years. She was the first of her Macedonian line, Plutarch says, who troubled to learn Egyptian, a queen who spoke 9 languages and financed Rome's civil wars from the richest treasury on earth. She tried starving herself. Octavian threatened her children, and she ate. What was left to control was the manner of the ending, and she managed it like state business: a bath, a banquet, a sealed note to Octavian asking to be buried beside Antony.\n\nIt was the coldest-eyed ending of a career built on entrances. At 21, locked out of her own capital by her brother's faction, she had herself carried through the siege lines to Julius Caesar, rolled inside a bedding sack. She came out of it a queen again. Caesar left her a kingdom and a son. After the assassination she picked the winning side twice. Antony summoned her to answer charges and she arrived as Venus on a gilded barge. She then made him co-author of a decade of eastern empire, with their children named kings of territories Rome considered its own. Actium ended the arithmetic. When her squadron broke for Egypt and Antony followed her, the world's verdict was already in, and the last year in Alexandria was spent negotiating the terms of how it would be phrased.\n\nThe guards at the door waved through a countryman with a basket of figs. Plutarch, telling it a century later, already could not swear to what the basket hid. A cobra under the leaves, said the version everyone repeated; poison in a hairpin, said another; two faint marks on her arm were the only evidence anyone reported. When the note reached Octavian, he sent men at a run. They found the queen dead on a golden couch in full royal dress, Iras dying at her feet, and Charmion, swaying, straightening the diadem on her mistress's brow. One of the soldiers snapped that this was a fine piece of work. Extremely fine, said Charmion, and fitting for the descendant of so many kings. It is the last sentence of pharaonic Egypt, and a servant said it.\n\nOctavian, cheated, sent for Psylli snake-charmers to suck the wound, which is how seriously Rome took its triumphs. In the end he marched an effigy of her through the city with a bronze asp on its arm. Caesarion, her son by Julius Caesar, 17 years old, was run down and killed on the advice that too many Caesars is not a good thing. Egypt, which had crowned kings for 3,000 years, became the personal estate of one Roman. Rixens painted the found scene in 1874 and showed it at the Paris Salon: the couch, the fallen maid, the crown set straight. The French state acquired it and sent it to Toulouse, where it hangs. The crown Narmer joined at the beginning went into a Roman inventory, one line among the spoils.",
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'August, 30 BC',
  historicalYear: -30,
  historicalMonthDay: null,
  artTitle: 'The Death of Cleopatra',
  artCredit: 'Jean-André Rixens, 1874',
  imageUrl: bucketPainting('scenes/the-last-pharaoh.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-last-pharaoh.jpg'),
  details: [
    {
      id: 'the-diadem',
      x: 0.72,
      y: 0.47,
      scale: 2.8,
      caption:
        "Cleopatra’s diadem sits straight because Charmion’s last act was to straighten it. Charmion was asked whether this was well done. She said it was fitting for the descendant of so many kings, and fell.",
    },
    {
      id: 'iras',
      x: 0.26,
      y: 0.62,
      scale: 2.6,
      caption:
        'Iras lies face down over the foot of the couch. Her wig has fallen forward and a bracelet is still on her arm. She went first, and the guards who broke in found Charmion still on her feet.',
    },
    {
      id: 'the-basket',
      x: 0.43,
      y: 0.86,
      scale: 3.2,
      caption:
        'The basket the guards waved through sits on the leopard skin, and a snake is laid across the figs. Rixens settled a question Plutarch left open. Plutarch wrote a century after the fact, and all he could report were two faint marks on her arm.',
    },
  ],
} satisfies MockSceneDef;
export const seventyDaysWest = {
  slug: 'seventy-days-west',
  title: 'Seventy Days West',
  dek: 'A gilded barge ferries the dead across the Nile, 70 days after the last breath',
  story:
    'The boat is being rowed across the river, not down it. Death in Egypt is a ferry ride. The living keep to the east bank of the Nile, where the sun comes up, and the dead move to the west, where it goes down. The whole slow business on the water, the towed barge, the gilded shrine standing on it, the women wailing at the stern, exists to carry one dried body about a mile. Seventy days have passed since this man died. That was the lawful limit between last breath and burial, and Herodotus, who toured the embalmers’ quarter and reported their three price tiers like a wary customer, says the count was kept strictly.\n\nThe 70 days were earned. In the purification tent the embalmers drew the brain out through the nostrils with a hook and threw it away. Egypt never worked out what the brain was for, since thinking so plainly happened in the heart. The heart stayed in the chest, because its owner would need it weighed against a feather in the hall of judgment. Liver, lungs, stomach and guts went into four jars under the guard of the four sons of Horus. Then the body was packed, inside and out, in natron, a salt the desert makes by itself in a dried lake bed west of the Delta. It lay there about 40 days, until what remained was leather and bone and could be wound in linen by the mile. The embalmers of Ramses IV, improvising at the end, gave him two small onions for eyes.\n\nOn the far bank the coffin will be stood upright at the tomb door, and a priest in a leopard skin will touch its mouth with a ritual adze. That rite is the Opening of the Mouth, and after it the dead man can eat, speak and see again. The wailing women aboard are professionals, paid like any other trade in bread and beer, hair loosed, arms thrown up in the exact gesture painted on tomb walls a thousand years before them.\n\nA funeral this rich is also an advertisement, and by this man’s century the wrong readers had won. The great tombs of the west bank stood stripped, some by the same crews that had cut them. So the priests of Amun ran the robbery in reverse. They opened the royal tombs themselves, rewrapped the kings, and noted each move in ink on the coffins. Then they lowered Ramses the Great and some 50 kings, queens and priests down a cliff shaft near Deir el-Bahari. The hiding place held for 28 centuries, until 1881.\n\nFrederick Arthur Bridgman was an Alabama-born engraver of bank notes who got himself to Paris and into Gérôme’s studio. He spent the winter of 1873 to 1874 sailing up the Nile and came home with crates of sketches. He painted the crossing over two years and signed it with both, 1876-7. At the Salon of 1877 it made his name, and James Gordon Bennett of the New York Herald, the man who had sent Stanley after Livingstone, bought it. On the prow post Bridgman set a falcon, the shape Horus takes, riding just ahead of the coffin all the way over.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1000 BC',
  historicalYear: -1000,
  historicalMonthDay: null,
  artTitle: 'Funeral of a Mummy',
  artCredit: 'Frederick Arthur Bridgman, 1877',
  imageUrl: bucketPainting('scenes/seventy-days-west.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/seventy-days-west.jpg'),
  details: [
    {
      id: 'the-gilded-shrine',
      x: 0.62,
      y: 0.64,
      scale: 3.2,
      caption:
        'A gilded shrine sits under the great curved canopy, and flowers are heaped on its roof. The coffin is hidden inside. The body in it spent about 40 days packed in natron salt before the linen went on.',
    },
    {
      id: 'the-falcon-on-the-prow',
      x: 0.335,
      y: 0.655,
      scale: 3.2,
      caption:
        'A falcon rides the top of the curved post at the boat’s bow, out ahead of the coffin the whole way over. The falcon is the shape Horus takes. The cliffs of the west bank rise behind it, and that is the side of the river Egypt kept for its dead.',
    },
    {
      id: 'the-mourners',
      x: 0.755,
      y: 0.7,
      scale: 3.2,
      caption:
        'Women at the stern have their arms flung up, and one of them is bent double. They are hired. Mourning was a trade in Egypt, and it paid in bread and beer like carpentry or baking.',
    },
  ],
} satisfies MockSceneDef;

export const theKingWhoDidNotWeep = {
  slug: 'the-king-who-did-not-weep',
  title: 'The King Who Did Not Weep',
  dek: 'Persia’s king parades a captive pharaoh’s family past him, watching for tears',
  story:
    'On the tenth day after Memphis fell, Cambyses had the beaten pharaoh brought out and seated on the road at the edge of the city, with other Egyptian lords for company. He wanted to see what the man would do. Psamtik III had worn the double crown for six months. He was the last king of a dynasty from the Delta city of Sais, which had given Egypt its final century and a half of independence. He lost it all in one season: the Persian army across the desert, the pitched battle at Pelusium, the siege, the surrender. Herodotus, visiting the battlefield generations later, claims the bones still lay out in the sand, and that he went among them inspecting skulls.\n\nWhat Cambyses staged next was an experiment on a man. First the king’s daughter came past in slave’s clothing, a pitcher on her shoulder, sent with the daughters of the nobles to fetch water. The fathers around Psamtik cried out at the sight, and he alone lowered his eyes to the ground. Then his son passed with a bridle in his mouth and a rope on his neck, one of 2,000 young men being marched to execution. Cambyses had set the price at 10 Egyptians for every man of the herald’s crew, 200 of them, torn apart by the city when the ship came in to demand surrender. Psamtik said nothing. Then a ruined old man came past, one nobody had planned for, begging from the soldiers. The king recognized a friend he used to drink with and burst into tears, striking his head and calling him by name.\n\nCambyses sent a messenger to ask the obvious question. The answer Herodotus records: my own house’s griefs were too great for weeping, but a friend fallen from plenty to beggary on the doorstep of old age, that could be wept for. The conqueror, the story goes, was moved, and a runner went to spare the son; he found him already cut down, the first of the 2,000. Psamtik was kept at court afterward, honorably, until he was caught raising Egypt in revolt and drank bull’s blood, which the Greeks held to be certain poison, and died. The Egyptian record tells it flatter. A naval officer named Udjahorresnet, who had changed sides early, left an account on his statue, now in the Vatican. He composed Cambyses’ royal titles himself, he says, and the new king put the temple of Sais back in order, the way a lawful pharaoh would.\n\nAdrien Guignet painted the tears test in 1842, in his twenties, and it hangs in the Louvre. He gave the parade a backdrop of pyramid and colossus, which Memphis could nearly justify, and a train of war elephants, which nothing could: Persia would not field elephants for almost two more centuries. His captive king sits apart on the ground, a shield leaning beside him, watching the patterned dresses go by.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: '525 BC',
  historicalYear: -525,
  historicalMonthDay: null,
  artTitle: 'Cambyses and Psammenitus',
  artCredit: 'Adrien Guignet, 1842',
  imageUrl: bucketPainting('scenes/the-king-who-did-not-weep.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-king-who-did-not-weep.jpg'),
  details: [
    {
      id: 'the-parasol',
      x: 0.355,
      y: 0.455,
      scale: 3.4,
      caption:
        'A fringed parasol and a fan of ostrich feathers ride over the crowd on poles. Beyond them the white tents of the army stand in the haze. Both objects also appear behind the king in the carved reliefs at Persepolis.',
    },
    {
      id: 'the-daughters',
      x: 0.27,
      y: 0.805,
      scale: 3.0,
      caption:
        'Egyptian women in white linen and broad collars file along the road below the bank. One of them carries a water jar low at her side. Herodotus says the king’s own daughter was dressed as a slave and sent out for water with the nobles’ daughters.',
    },
    {
      id: 'the-king-in-the-dust',
      x: 0.425,
      y: 0.835,
      scale: 3.4,
      caption:
        'Psamtik III sits in the dirt at the edge of the parade, bare to the waist. One arm is hooked over a round shield. He had been pharaoh for 6 months, and he watched the whole procession go by without changing his face.',
    },
  ],
} satisfies MockSceneDef;

export const aDeathInTheHouse = {
  slug: 'a-death-in-the-house',
  title: 'A Death in the House',
  dek: 'When the house cat dies, the whole family shaves its eyebrows and calls the embalmer',
  story:
    'The cat died of old age, and the whole household shaved off its eyebrows. Herodotus, who toured Egypt around 450 BC and asked about everything, reports the custom as plain fact: for a cat, the eyebrows; for a dog, the body and the head too. Mourning ran until the hair grew back. He also noted what fire meant in an Egyptian town. When a house burned, people stationed themselves in a line, minding the cats rather than the blaze, because a cat will bolt through a cordon into the flames, and that was counted the greater loss.\n\nThe dead cat was not buried at home. It went to the embalmer, and then in its wrappings to Bubastis in the Delta. That was the city of Bastet, cat goddess of the household, and Herodotus calls her festival the biggest in Egypt. He counts 700,000 pilgrims arriving by barge with rattles and flutes going, and more wine drunk than in all the rest of the year. Piety at that scale became an industry, and archaeology later X-rayed what lay under it. Huge numbers of the offering mummies turn out to be kittens with broken necks, bred in temple catteries so pilgrims would have something to dedicate. Killing a cat privately stayed a capital matter all the same. Diodorus, visiting around 60 BC, swears he watched a mob lynch a Roman who had killed one by accident. The king’s own officials begged the crowd off, at the exact moment Egypt was desperate to stay friends with Rome. Polyaenus, writing 700 years after the fact, even claimed a Persian army once took the border fortress of Pelusium by herding cats and other sacred animals ahead of its line. Then no Egyptian archer would shoot. The tale is late gossip. Nobody has ever called it out of character.\n\nIn 1888 a farmer digging near the village of Beni Hasan broke into a filled gallery: cat mummies in the tens of thousands, stacked like cordwood. Most of the find, about 19 tons, was shipped to Liverpool and auctioned off as fertilizer for English fields. The auctioneer, the papers said, knocked down the lots using a mummified cat for a hammer.\n\nJohn Reinhard Weguelin painted The Obsequies of an Egyptian Cat in 1886, two years before the find at Beni Hasan. His priestess kneels on a blue rug with a censer smoking in one hand and the other palm raised in offering. In front of her is a green shrine, where the wrapped animal stands upright above a cloth with a gold cat worked on it. Plucked ducks and lotus blossoms are laid out for the journey to Bubastis. Weguelin was an Englishman painting in the exacting archaeological manner of Alma-Tadema. The canvas hangs today in the Auckland Art Gallery in New Zealand, about as far from the Delta as a painting can be carried.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 450 BC',
  historicalYear: -450,
  historicalMonthDay: null,
  artTitle: 'The Obsequies of an Egyptian Cat',
  artCredit: 'John Reinhard Weguelin, 1886',
  imageUrl: bucketPainting('scenes/a-death-in-the-house.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-death-in-the-house.jpg'),
  details: [
    {
      id: 'the-raised-hand',
      x: 0.46,
      y: 0.42,
      scale: 2.6,
      caption:
        'The priestess holds up an open palm with a wreath of pale petals bound in her hair. Behind her the wall is painted with a line of men carrying offerings. Herodotus says a household that lost a cat shaved its eyebrows and nothing else, and for a dog it shaved the whole body and the head.',
    },
    {
      id: 'the-offerings',
      x: 0.34,
      y: 0.85,
      scale: 2.8,
      caption:
        'Plucked ducks lie on the blue rug beside a lotus in flower and a shallow dish. Two small blue figures stand upright in a row. The priestess still holds the incense burner above them with the coals red, and the food is provision for the road to Bubastis.',
    },
    {
      id: 'the-cat-bier',
      x: 0.2,
      y: 0.33,
      scale: 2.8,
      caption:
        'The cat is already wrapped in linen, and the strips cross over the body in diamonds with a blue collar at the throat. The bundle stands upright on the ledge of a green shrine. Weguelin got the wrapping right, and surviving cat mummies are bound in that same basketwork of light and dark strips.',
    },
  ],
} satisfies MockSceneDef;

export const aCityDrawnInBarley = {
  slug: 'a-city-drawn-in-barley',
  title: 'A City Drawn in Barley',
  dek: 'Out of chalk, Alexander’s surveyors mark the streets of his new city in barley meal',
  story:
    'Egypt did not fight him. Alexander came down from Gaza in the autumn of 332 BC, 24 years old and unbeaten. The Persian governor Mazaces had no army worth the name and handed over the country and its treasury. Persia had taken Egypt back only 11 years earlier, and was hated for it. At Memphis the Macedonian did what a pharaoh does. He sacrificed to the Apis bull, the living animal of the god Ptah, and the scribes began enclosing his name in a royal cartouche. Persian kings had earned three generations of loathing by insulting exactly this; Alexander, who mocked nothing useful, bowed to the bull and gave games for the priests.\n\nSailing down the western arm of the Nile that winter, he found what he was actually after: a limestone ridge between the sea and a lake. It lay opposite the island of Pharos, which Homer had put in the Odyssey. Plutarch says a white-haired old man recited those very lines to Alexander in a dream, and that he went to look on the strength of it. The harbor needed no dream: deep water, an island for a breakwater, a lake behind for river traffic. He paced the ground himself, market here, temples there, walls in a great arc, and when the surveyors ran out of chalk they marked the street lines with barley meal from the soldiers’ ration bags. Birds came down in clouds and ate the plan. The seers, thinking fast, read it as a promise that the city would feed men of every nation. The architect who drew it up properly was Deinocrates of Rhodes. Vitruvius says he had introduced himself by offering to carve the whole of Mount Athos into a seated statue of Alexander, with a walled city in its palm. Alexander had asked what that city would eat, heard nothing good, declined the mountain and kept the architect.\n\nFrom the unbuilt streets he marched west along the coast and then inland, some 300 miles, to the oracle of Ammon at the Siwa oasis, through desert said to have swallowed a Persian army whole. Rain fell for his column. Ptolemy, who was there and became a king with a memoir, swore two talking snakes led the way; other veterans remembered crows. At the temple the old priest greeted him as son of the god, and Plutarch adds the earthbound version: the priest’s Greek slipped, and my son, paidion, came out pai Dios, son of Zeus. Alexander put his questions to the oracle alone and wrote to his mother that he would tell her the answers in person. He never saw her again, and he never saw a street of his city built. He left Egypt in the spring of 331. Two years after his death in Babylon his body came back: Ptolemy hijacked the funeral cart on its road to Macedon and kept the founder as the new capital’s founding relic.\n\nPlacido Costanzi, a Roman, painted the founding around 1737 as pure theater: Alexander in parade armor points at the plan while Deinocrates holds it open, and masons are already up on the scaffolding behind them. The canvas hangs in Baltimore now. The round bastion tower going up behind the surveyors belongs to Costanzi’s century, not Alexander’s, and over it all a woman leans out of a cloud with a gilded armed figure at her shoulder.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'Winter, 332 BC',
  historicalYear: -332,
  historicalMonthDay: null,
  artTitle: 'Alexander the Great Founding Alexandria',
  artCredit: 'Placido Costanzi, c. 1737',
  imageUrl: bucketPainting('scenes/a-city-drawn-in-barley.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-city-drawn-in-barley.jpg'),
  details: [
    {
      id: 'the-unrolled-plan',
      x: 0.29,
      y: 0.5,
      scale: 2.6,
      caption:
        'A man holds the plan open at Alexander’s pointing hand, and a kneeling woman steadies the other edge. The man is the architect Deinocrates of Rhodes. Vitruvius says he first caught Alexander’s eye by offering to carve Mount Athos into a seated statue of the king, with a walled city in its palm.',
    },
    {
      id: 'the-city-from-the-sky',
      x: 0.475,
      y: 0.15,
      scale: 3.2,
      caption:
        'A woman leans out of a cloud above the survey with one hand open and empty. A gilded armed figure stands at her shoulder against a gold shield. Costanzi painted this canvas as a modello, a small rehearsal for the picture he owed the throne room of Philip V of Spain.',
    },
    {
      id: 'the-first-tower',
      x: 0.11,
      y: 0.18,
      scale: 2.8,
      caption:
        'Masons work the scaffolding on a round tower. That kind of fort belongs to Costanzi’s century, not Alexander’s. The real Alexandria went up on a straight grid, and Diodorus says its main avenue was 100 feet wide.',
    },
  ],
} satisfies MockSceneDef;

export const theSmuggledQueen = {
  slug: 'the-smuggled-queen',
  title: 'The Smuggled Queen',
  dek: 'Smuggled past her brother’s sentries, a deposed queen is unrolled at Caesar’s feet',
  story:
    'The head arrived first. Caesar landed at Alexandria in October of 48 BC, chasing the beaten Pompey with a fraction of an army. The boy king’s ministers sent him Pompey’s severed head and signet ring, expecting gratitude. Plutarch says Caesar turned away from the head and wept over the ring. He then moved into the royal palace and did not leave, which was the first sign that the ministers had misjudged their man. The second was that he began issuing rulings about the throne, and summoned the feuding heirs of the dead Ptolemy XII. One was the boy, Ptolemy XIII, run by the eunuch Pothinus. The other was his sister Cleopatra, 21, driven from the capital and camped with hired soldiers out past the eastern marshes.\n\nHer problem was simple. Her brother’s army held the roads, the harbor watched for her face, and a recognized queen would not have lived to reach the palace gate. So at dusk she came in a small boat with a single companion, a Sicilian named Apollodorus, landed below the palace wall, and climbed into a bedding sack. Apollodorus tied it shut with a strap, carried it through the gates as luggage, and set it down in front of Caesar before untying the knot. Plutarch, who tells it, says this piece of nerve was the first thing about her that captured him. Caesar ruled for her claim within days, which is why the war began within weeks.\n\nIt nearly killed him. Pothinus called the royal army in from the frontier, 20,000 men against Caesar’s 4,000, and the fighting ran street by street all winter. Caesar burned the Egyptian fleet at its moorings rather than let it close the harbor. In the fight for the great causeway his own ship went down and he swam for it, holding his papers out of the water with one hand, Plutarch says. His general’s cloak went overboard, and the Egyptians fished it out and hung it up as a trophy. Relief came overland in the spring, the royal army broke at the Nile, and the boy king drowned in the river; Florus says they knew the body by its gilded corselet. Caesar had stayed nine months by the time he sailed east, after a long cruise up the Nile with the queen he had restored. Their son was born that June, and Alexandria coined the nickname that stuck: Caesarion, little Caesar.\n\nGérôme painted the unpacking in 1866 and rolled the queen in a Persian carpet, which is where the world’s favorite version comes from; Plutarch’s word means a sack for bedclothes, tied with a strap. The room is dressed wrong too, and knowingly. Gérôme copied his walls from monuments a thousand years older than the palace he was painting. That palace was Greek to the rafters, marble and gilt in a city where the court spoke nothing else. His Cleopatra stands barefoot on the spilled carpet, already giving orders with her eyes. The sack, the strap and the Sicilian are all Plutarch; the carpet is Paris, 1866.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'Autumn, 48 BC',
  historicalYear: -48,
  historicalMonthDay: null,
  artTitle: 'Cleopatra and Caesar',
  artCredit: 'Jean-Léon Gérôme, 1866',
  imageUrl: bucketPainting('scenes/the-smuggled-queen.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-smuggled-queen.jpg'),
  details: [
    {
      id: 'the-queen-unrolled',
      x: 0.6,
      y: 0.54,
      scale: 2.4,
      caption:
        'Gérôme put a broad Egyptian collar on his Cleopatra and stood her against walls copied from temples a thousand years too old for her palace. Her own court was Greek and had been for two and a half centuries.',
    },
    {
      id: 'the-porter',
      x: 0.725,
      y: 0.775,
      scale: 3.2,
      caption:
        'Apollodorus kneels where he set the load down. The queen’s hand rests on his shoulder and the unrolled bundle lies under his knees. Plutarch’s word is a sack for bedclothes tied with a strap, and the Persian carpet is Gérôme’s.',
    },
    {
      id: 'caesar-at-his-papers',
      x: 0.24,
      y: 0.68,
      scale: 2.4,
      caption:
        'Caesar leans over the table in a laurel wreath and a red cloak. One arm is out and he is caught mid-sentence. He had moved into the palace with about 4,000 men and a hostage boy king, and the sister was not in the plan.',
    },
  ],
} satisfies MockSceneDef;

export const venusComesToDinner = {
  slug: 'venus-comes-to-dinner',
  title: 'Venus Comes to Dinner',
  dek: 'Summoned to answer charges, Cleopatra sails up the Cydnus dressed as a goddess',
  story:
    'The summons was a legal formality: Cleopatra was to present herself at Tarsus and answer the charge that Egypt had helped Caesar’s assassins. Mark Antony, fresh from the victory at Philippi, was touring the East as its new master, taxing cities and auditioning kings. In 41 BC he held court in the market square of Tarsus, a river town a few miles up the Cydnus from the sea. Cleopatra let several summonses lie before she came, and she came by water.\n\nPlutarch describes what moved up the river, and for once history reads like stagecraft because it was: a barge with a gilded stern, purple sails, and silver oars beating time to flutes and pipes. The queen lay under a canopy spangled with gold, dressed, he says, the way painters dress Venus. Boys costumed as Cupids fanned her, and her maids worked the ropes and rudder as Nereids and Graces. Braziers of perfume burned on deck, so the scent reached the banks before the barge did. Tarsus emptied to line the river and look, until Antony, master of the Roman East, sat on his tribunal alone. Word went through the town that Aphrodite had come to revel with Dionysus for the good of Asia.\n\nHe invited her to dinner. She declined and invited him instead, and Antony, curious, went, and found the barge rigged with lamps hung in squares and circles past counting; Plutarch calls the effect a sight scarcely equaled anywhere. The performance was built on research. She had met Antony before, first at 14, when he was a young cavalry officer in Alexandria helping restore her father. She had concluded that this Roman wanted splendor and jokes, not the statecraft she had rationed out for Caesar. She was 28. It worked at once and permanently. Antony followed her to Alexandria for the winter and joined the dining club she founded there, the Inimitable Livers. The first bill for Tarsus was paid across the Aegean. Her exiled sister Arsinoe was dragged from the sanctuary of Artemis at Ephesus, Josephus says, and killed on Antony’s order.\n\nShakespeare found the barge in Thomas North’s 1579 English translation of Plutarch and barely changed it. North: the poop whereof was of gold, the sails of purple, and the oars of silver, which kept stroke after the sound of the music. Shakespeare, giving the speech to Enobarbus: the poop was beaten gold; purple the sails; the oars were silver, which to the tune of flutes kept stroke. It is less a paraphrase than a debt.\n\nAlma-Tadema painted the meeting in 1883 and sided with the queen’s staging. She fills the foreground under her canopy, eyes elsewhere, a leopard skin across her lap. Antony is the white-robed figure craning from a boat behind her, waiting to be noticed. In 2011 the canvas sold at auction in New York for 29 million dollars.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: '41 BC',
  historicalYear: -41,
  historicalMonthDay: null,
  artTitle: 'The Meeting of Antony and Cleopatra',
  artCredit: 'Lawrence Alma-Tadema, 1883',
  imageUrl: bucketPainting('scenes/venus-comes-to-dinner.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/venus-comes-to-dinner.jpg'),
  details: [
    {
      id: 'the-queen-under-the-canopy',
      x: 0.76,
      y: 0.4,
      scale: 2.6,
      caption:
        'Cleopatra sits under the gold canopy with a leopard skin drawn over her shoulder. The head of the skin lies on her breast, and her eyes are turned down and away. Plutarch says she was dressed the way painters dress Venus, and Alma-Tadema took him at his word.',
    },
    {
      id: 'the-man-in-the-boat',
      x: 0.43,
      y: 0.21,
      scale: 2.8,
      caption:
        'Antony leans out of his boat in a white mantle, with a hooded figure in green at his elbow. Other hulls ride on the water behind them. He had sent the summons to Tarsus, and in Alma-Tadema’s version he is the one who has come to look.',
    },
    {
      id: 'the-double-pipes',
      x: 0.148,
      y: 0.79,
      scale: 3.4,
      caption:
        'A musician blows a double pipe mounted in gold. Two more lie along the deck rail among the fallen rose petals. Plutarch says flutes and pipes kept the stroke for the silver oars, and Shakespeare took that line almost whole from North’s translation.',
    },
  ],
} satisfies MockSceneDef;
export const theGodWithTheMark = {
  slug: 'the-god-with-the-mark',
  title: 'The God with the Mark',
  dek: 'Egypt keeps one living god in a stall at Memphis and reads its future in its moods',
  story:
    'The god is a bull, and there is only ever one. When the old Apis died at Memphis, priests went out across Egypt to find the calf its soul had entered, and they knew the right animal by its skin. Herodotus lists the marks: black, with a white triangle on the forehead, the shape of an eagle spread across its back, double hairs in its tail, and a scarab under its tongue. A calf born with those signs was the living body of Ptah, the craftsman god who made the world. It would spend its life in a stall beside his temple, fed, painted, and consulted. Which of two offered mangers it chose to eat from was an answer. Which way it turned was an answer. Germanicus, the Roman prince, fed it by hand in AD 19 and it refused him, and he was dead within the year.\n\nThe bull was born to die on a schedule. By the Roman period a bull that reached 25 years was drowned in a sacred spring, because a god could not be allowed to die of anything so ordinary as old age. Then the country went into a mourning it took seriously: 60 days of it, heads shaved, no meat, the way you would grieve a person. It lasted until the search parties came back with word that Apis had been found again in a new calf, and the grief turned to festival in a single day. The dead bull was not buried like an animal. It was embalmed at the temple, wrapped, and fitted with gilded masks and jewelry and amulets. Then it was carried in procession to a burial ground in the desert at Saqqara, where the god became one with Osiris and took the name Osiris-Apis.\n\nBridgman painted that procession in 1879. He had sailed the Nile a few years earlier filling sketchbooks, and he built the canvas out of what he saw. The black bull walks under a saddle-cloth of red and gold, hung with flowers, led between the columns. A dancer plays a lyre, and priests swing incense burners and beat the tambourine. The Alabama-born painter gave the god its flowers and its smoke, and set the whole rite moving toward the door.\n\nWhere it was moving became one of the great finds of the century. In 1850 a young Frenchman named Auguste Mariette came to Egypt to buy Coptic manuscripts for the Louvre, got nowhere with the monks, and went walking at Saqqara instead. He noticed the head of a sphinx breaking the sand, then another, and recognized the buried avenue the geographer Strabo had described more than 18 centuries before. He hired 30 men, dug without a permit, and in 1851 broke into the vaults. It was a long underground gallery lined with chambers, each holding a granite sarcophagus the size of a small room. Some weighed 70 tons, cut and lowered and slid into place for one bull each. Robbers had emptied nearly all of them in antiquity. One sealed sarcophagus held the fingerprints, still in the dust on the lid, of the last men to close it.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 2900 BC',
  historicalYear: -2900,
  historicalMonthDay: null,
  artTitle: 'The Procession of the Bull Apis',
  artCredit: 'Frederick Arthur Bridgman, 1879',
  imageUrl: bucketPainting('scenes/the-god-with-the-mark.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-god-with-the-mark.jpg'),
  details: [
    {
      id: 'the-garlanded-bull',
      x: 0.56,
      y: 0.57,
      scale: 2.8,
      caption:
        'The bull walks under a red and gold cloth with flowers heaped over its shoulders. White breaks through the black hide at the flank and the muzzle. Priests looking for the next Apis wanted exactly that pattern of white on black, the one Herodotus wrote down.',
    },
    {
      id: 'the-piper',
      x: 0.29,
      y: 0.58,
      scale: 2.6,
      caption:
        'Bearers carry the god’s boat past on poles, and its blue hull and painted banner ride above their shoulders. A dancer in gold reaches across the strings of a lyre. The Corcoran Gallery bought the canvas from Bridgman in 1880, the first of his paintings to enter an American public collection.',
    },
    {
      id: 'the-incense-bearers',
      x: 0.83,
      y: 0.58,
      scale: 2.8,
      caption:
        'A man in the blue crown holds out a long-handled incense burner, and smoke lifts off the cup at its end. The woman beside him holds up a gold rattle called a sistrum. Behind them the hall goes to shadow, and the watchers standing in it are barely painted at all.',
    },
  ],
} satisfies MockSceneDef;

export const theMusiciansWhoLookedOut = {
  slug: 'the-musicians-who-looked-out',
  title: 'The Musicians Who Looked Out',
  dek: 'On a Theban tomb wall the party never ends: pipes, perfume, and two girls dancing',
  story:
    'Nebamun counted grain for the temple of Amun, and to look at his tomb walls you would think he did nothing but throw parties. He was a scribe, an accountant of the harvest brought to the god, a middling official who could afford a painted tomb-chapel across the river from Thebes around 1350 BC. On its walls the feast runs forever. Guests sit in rows in white linen with cones of scented fat balanced on their wigs, meant to melt through the evening and leave the hair perfumed. Servants pour wine. Two naked girls dance while women play for them, and the whole scene is stocked with everything the dead man wanted to keep having: food, drink, music, company, the good life on repeat.\n\nOne thing in the painting breaks every rule Egyptian artists kept. They drew people in profile, always, the eye and shoulders turned flat to the viewer, a convention held for 3,000 years. But two of the seated musicians here are painted full-face, staring straight out of the wall at whoever is looking, and one of them holds the double pipes to her mouth with both hands. They are lower-class women, drawn with a looseness the stiff aristocrats never get, and their frontal faces give them a liveliness that reads across 34 centuries. Above them a line of hieroglyphs carries the words of their song: the earth god has caused his beauty to grow in every body. The channels are filled with water anew, and the land is flooded with love of him.\n\nThe paint is real Egyptian tomb painting, not a European guess at one, which makes it rarer than any Salon canvas. It was cut off the wall in fragments and sold. A Greek collector named Giovanni d’Athanasi, digging for the British consul Henry Salt, found the chapel around 1820 and hacked out the best scenes; they reached the British Museum in 1821. What he did to the rest, and exactly where the tomb stood, he never clearly said, and the chapel has never been found again. The location died with him.\n\nSo the fragments in London are all that is left of the room, and they are enough to date a lost building and name a dead accountant. The dancers turn, the pipes play, the wine keeps coming. A hired painter working for a grain clerk somewhere in the hills at Thebes gave two servant girls a straight look out of the wall. That was 34 centuries before anyone thought to call it a rule broken.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1350 BC',
  historicalYear: -1350,
  historicalMonthDay: null,
  artCredit: 'Tomb-chapel of Nebamun, c. 1350 BC',
  imageUrl: bucketPainting('scenes/the-musicians-who-looked-out.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-musicians-who-looked-out.jpg'),
  details: [
    {
      id: 'the-piper',
      x: 0.21,
      y: 0.3,
      scale: 2.6,
      caption:
        'Two musicians sit in heavy braided wigs and gold disk earrings, with a cone of scented fat on each wig. The one on the right blows the double pipes and turns her face full to the front. Egyptian painters held people to strict profile for 3,000 years, and these two do not.',
    },
    {
      id: 'the-dancers',
      x: 0.6,
      y: 0.35,
      scale: 2.6,
      caption:
        'Two dancers wear nothing but hip girdles and beaded collars. The near one curls an arm over her head while the other bends into the step. Paint has flaked off her hip and shoulder, and the bare plaster shows through.',
    },
    {
      id: 'the-wine-jars',
      x: 0.84,
      y: 0.41,
      scale: 2.8,
      caption:
        'The second dancer leans out of the step and reaches for the wine. The jars wear painted collars of lotus petals, and food is heaped on the stand above them. Nebamun was only a grain accountant for the temple of Amun, and his feast has been running 34 centuries.',
    },
  ],
} satisfies MockSceneDef;

export const godsToOrder = {
  slug: 'gods-to-order',
  title: 'Gods to Order',
  dek: 'In an Egyptian workshop the gods themselves are turned out by hand, a shelf at a time',
  story:
    'In a crowded workshop somewhere in Egypt, people who will go home tired are making the gods by hand. Along the back shelf the finished stock stands ready for sale: rows of little blue faience figures, seated deities, a coiled serpent, a green crocodile laid out on the ledge below, waiting for buyers. On the floor and at the tables the makers work. A woman turns a small idol in the light and studies it. A boy leans both hands on a pestle and works it in a heavy stone mortar. Others carve, paint, and polish, and the whole trade of Egyptian religion, the amulets pilgrims bought by the thousand and the statuettes they left at shrines, ran through rooms like this. The divine had a supply chain.\n\nEgypt saw no contradiction in that. A statue was not the god; it was a house the god could be persuaded to enter, and the entering was done by ritual, not by the sculptor. A finished figure went through the same Opening of the Mouth ceremony performed on a mummy, touched with an adze so it could breathe and see, and only then did it hold anything. Until the priest came, what left the workshop was painted clay and stone. The men who made the gods knew exactly what they were selling, which was the raw material of belief, priced by size.\n\nEdwin Long painted this in 1878 and called it The Gods and Their Makers. He had toured Egypt and Syria in 1874 and come back soaked in the look of the place. He built the workshop from real objects: the faience colors, the animal-headed forms, the cluttered shelves of a coppersmith’s or modeler’s shop. It is a big canvas, well over 7 feet wide, and it was a hit in London. A public raised on the Second Commandment could enjoy the faint scandal of watching idols knocked out like crockery.\n\nLong put a joke in the corner that his audience would have caught. Egyptians kept cats, and cats were sacred to the goddess Bastet. At the right-hand table a woman is finishing a stone cat with a fine brush, and directly above her hands a man stands holding a live white cat against his chest. The real thing and the thing for sale, one warm and one still wet with paint, and the makers too busy to notice the pairing.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1350 BC',
  historicalYear: -1350,
  historicalMonthDay: null,
  artTitle: 'The Gods and Their Makers',
  artCredit: 'Edwin Long, 1878',
  imageUrl: bucketPainting('scenes/gods-to-order.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/gods-to-order.jpg'),
  details: [
    {
      id: 'the-shelf-of-gods',
      x: 0.34,
      y: 0.167,
      scale: 3.0,
      caption:
        'A green glazed crocodile lies on the ledge, and strings of beads hang off the shelf. Behind them a dark bust in a plumed crown stands next to Sekhmet, the lion-headed goddess under her sun disk. None of it was a god yet. A statue was a house the god might be coaxed into, and only a priest could do the coaxing.',
    },
    {
      id: 'the-examiner',
      x: 0.42,
      y: 0.5,
      scale: 2.6,
      caption:
        'A woman turns a small blue figurine in her fingers and laughs at it, while a second idol is held up behind her. These are faience, a glazed blue pottery. Amulets like these went to pilgrims by the thousand, and the price depended on size.',
    },
    {
      id: 'the-grinder',
      x: 0.92,
      y: 0.6,
      scale: 2.8,
      caption:
        'A boy in a red cap leans both hands on a long pestle and works it in a heavy stone mortar. A woman sits at her bench beside him. Long went to Egypt and Syria in 1874, and his subjects changed for good.',
    },
  ],
} satisfies MockSceneDef;

export const heartAgainstFeather = {
  slug: 'heart-against-feather',
  title: 'Heart Against Feather',
  dek: 'A dead scribe watches a jackal-headed god weigh his heart against a single feather',
  story:
    'A scribe named Hunefer is dead, and the worst part of the afterlife is a courtroom. On the papyrus buried with him, around 1275 BC, the whole ordeal plays out left to right like a strip of film. Anubis, the jackal-headed god of embalming, leads Hunefer in by the hand. Then Anubis kneels at a great balance and does the only test that matters. One pan holds Hunefer’s heart. The other holds a single ostrich feather, the feather of Maat, who is truth and right order. The heart has to weigh no more than the feather. An Egyptian believed the heart, not the brain, held the record of everything a person had done, and here it is put on the scale to be read.\n\nCrouched under the balance waits the thing everyone dreaded. She is called Ammit, the Devourer, drawn as a hybrid of the three animals Egyptians feared most: the head of a crocodile, the front of a lion, the hindquarters of a hippopotamus. If the heart came down heavy with wrongdoing, she ate it, and the dead person simply ended, no second death and no underworld, just gone. Standing by with a scribe’s palette is Thoth, the ibis-headed god of writing, there to record the verdict in his own hand, because in Egypt nothing was real until it was written down. The Book of the Dead even supplied Hunefer with the words to say to his own heart: do not stand as a witness against me.\n\nHunefer passed. Beyond the scales the falcon-headed Horus takes him by the hand and presents him to Osiris, green-skinned king of the dead. Osiris sits enthroned in a shrine at the end of the line, with Isis and Nephthys behind him and the four sons of Horus standing on an open lotus before the throne. The papyrus is not a scene the artist imagined. It is a legal document Hunefer ordered for himself, a not-guilty verdict painted in advance and rolled into his coffin so the trial could only go one way.\n\nHunefer was a royal scribe and overseer of cattle under Seti I. His Book of the Dead, now sheet by sheet in the British Museum, is one of the finest that survives, the drawing crisp and the color still bright. In the top register a jury of gods sits in a row, watching. The balance holds level. The feather has not moved.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1275 BC',
  historicalYear: -1275,
  historicalMonthDay: null,
  artCredit: 'Book of the Dead of Hunefer, c. 1275 BC',
  imageUrl: bucketPainting('scenes/heart-against-feather.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/heart-against-feather.jpg'),
  details: [
    {
      id: 'the-balance',
      x: 0.28,
      y: 0.64,
      scale: 2.8,
      caption:
        'Anubis kneels at the foot of the scales and reads the beam, with one hand up to the weight on its cord. Ammit crouches beside him, a creature with crocodile jaws over a lion’s mane. She ate the hearts that came down heavy, and the dead person simply ended.',
    },
    {
      id: 'thoth-recording',
      x: 0.45,
      y: 0.48,
      scale: 2.8,
      caption:
        'The ibis-headed god Thoth holds up a scribe’s palette and writes the verdict down. Hunefer stands beside him in white pleated linen. Nothing in Egypt was settled until a scribe had put it in writing.',
    },
    {
      id: 'the-four-sons',
      x: 0.8,
      y: 0.47,
      scale: 3.0,
      caption:
        'Osiris sits on his throne inside the shrine, green-skinned under a plumed crown. He holds a crook and a flail crossed on his chest, and the four sons of Horus stand in front of him on an open lotus. Their heads became the lids on the jars that held a dead man’s organs.',
    },
  ],
} satisfies MockSceneDef;

export const aPeopleNamedInStone = {
  slug: 'a-people-named-in-stone',
  title: 'A People Named in Stone',
  dek: 'Egypt records no plague and no exodus, but one granite slab writes down a name',
  story:
    'A firstborn son lies dead across the pharaoh’s knees, and the king cannot understand why. In the Book of Exodus this is the tenth and last plague. The God of the Hebrews passed through Egypt in the night and killed the eldest child in every house that was not marked with blood, from the throne to the mill. Pharaoh finally let the slaves go. It is one of the most retold nights in the world. It is also, in the Egyptian record, a night that never happened. No inscription, no papyrus, no temple wall from ancient Egypt mentions a plague of the firstborn, or Moses, or a mass departure of Hebrew slaves. Egyptian scribes wrote down a great deal, including their defeats.\n\nWhat survives is stranger and thinner than the story: a single line on a single stone. In 1896 the archaeologist Flinders Petrie was digging in the ruins of a mortuary temple at Thebes. His workers turned up a slab of black granite over 10 feet tall, carved for the pharaoh Merneptah around 1208 BC. Most of it celebrates a war in Libya. The last few lines list towns crushed in a campaign through Canaan, and among them, once, appears the word Israel. It is the oldest mention of Israel found anywhere on earth, and Petrie is said to have known at once that it would make his name better than any tomb.\n\nThe grammar is the whole point. Egyptian writing tagged each name with a small silent sign telling the reader what kind of thing it was. Ashkelon and Gezer on the same stone carry the sign for a walled town. Israel alone carries the sign for a people: a seated man and woman over three strokes, the marker Egyptians used for a wandering group with no fixed city. So the one hard fact under the whole Exodus story is not a plague or a sea or a law. It is a scribe in the thirteenth century BC, listing off a victory, pausing to mark Israel as a people rather than a place. Israel is laid waste, the line runs, its seed is no more, which is the earliest thing any record says about Israel, and it is an obituary.\n\nLawrence Alma-Tadema painted the dead firstborn in 1872, working the way he always did, from archaeology and props, staging the grief inside a hall of lotus columns. The pharaoh sits stunned with the pale boy across his lap, and the mother has collapsed forward over the body. Back in the shadows two robed men stand beside a single burning lamp, the nearer one leaning on a staff. They are Moses and Aaron, come to say the child is only the beginning. The painter kept the room dark on purpose. He was 36 when he made it, and he never let the canvas go: his heirs gave it to the Rijksmuseum in 1913.',
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1250 BC',
  historicalYear: -1250,
  historicalMonthDay: null,
  artTitle: 'Death of the Pharaoh’s Firstborn Son',
  artCredit: 'Lawrence Alma-Tadema, 1872',
  imageUrl: bucketPainting('scenes/a-people-named-in-stone.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-people-named-in-stone.jpg'),
  details: [
    {
      id: 'the-pharaoh',
      x: 0.35,
      y: 0.28,
      scale: 2.4,
      caption:
        'The pharaoh sits in a striped headcloth and a gold band with a lotus still in his fist. The boy lies across his lap, and the mother’s dark head goes down on him. No Egyptian record mentions a plague of the firstborn, and the night survives only in Exodus.',
    },
    {
      id: 'the-dead-son',
      x: 0.43,
      y: 0.38,
      scale: 2.6,
      caption:
        'The boy has gone slack, with his head fallen back and to the side. A white cloth is bound under his chin to hold the jaw shut. Alma-Tadema had lost an infant son to smallpox and his wife to the same disease in 1869, 3 years before he painted this.',
    },
    {
      id: 'the-figure-with-the-staff',
      x: 0.79,
      y: 0.23,
      scale: 2.6,
      caption:
        'A robed man leans on a long staff at the dark end of the hall, and another stands behind his shoulder. A single lamp burns on a stand below them. The Rijksmuseum has held the painting since 1913 and names the pair Moses and Aaron.',
    },
  ],
} satisfies MockSceneDef;

export const theFirstKingOfBothLands = {
  slug: 'the-first-king-of-both-lands',
  title: 'The First King of Both Lands',
  dek: 'Two feet of siltstone carrying the oldest political announcement on earth',
  story:
    "It is a cosmetic palette, the kind used for grinding malachite into eye paint, except that it is two feet tall and made of siltstone and nobody ever ground anything on it. The circular well on one side is formed by the entwined necks of two long-necked beasts, a design borrowed from Mesopotamia, and it exists to be looked at rather than used. British archaeologists found it in 1898 in a temple deposit at Hierakonpolis in Upper Egypt, buried with other ceremonial objects, and it has been the first page of Egyptian history ever since.\n\nOne side shows a king in the tall white crown of Upper Egypt, mace raised, holding a kneeling enemy by the hair. The other shows the same king in the red crown of Lower Egypt, walking in procession past two rows of decapitated prisoners with their heads set between their feet. The message needs no translation, and the hieroglyphs above the figure give a name written with a catfish and a chisel, read as Narmer. Around 3100 BC, the argument goes, the valley and the delta became one kingdom under one man, and this object is the announcement.\n\nEgyptologists have spent a century pointing out how much the palette is doing besides reporting. Every convention that Egyptian art would use for the next 3,000 years is already fixed here. The king is twice the size of everyone else, the head in profile with the eye seen from the front, the scene locked into rigid horizontal bands, the arm raised to strike. Ramesses II would be carved in the identical stance at Abu Simbel 18 centuries later, which is like a modern state using a logo designed at the fall of Rome. Whether Narmer personally united anything is disputed; unification looks in the archaeology like a long process rather than an afternoon, and the palette may be a claim rather than a record. It is certainly a claim that worked.\n\nIt sits now in the Egyptian Museum in Cairo, where its inventory number is written in ink inside the curl of a goddess's horn at the top left, small and black, in Arabic numerals. 5,000 years and two accession systems on, the object is still being catalogued.",
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 3100 BC',
  historicalYear: -3100,
  historicalMonthDay: null,
  artCredit: 'The Narmer Palette, c. 3100 BC',
  imageUrl: bucketPainting('scenes/the-first-king-of-both-lands.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-first-king-of-both-lands.jpg'),
  details: [
    {
      id: 'the-mace',
      x: 0.2,
      y: 0.23,
      scale: 2.8,
      caption:
        'A fist is closed around a mace at the top of the swing, and the pear-shaped head sits above the knuckles. The fist is Narmer\'s. Ramesses II would be carved in the same stance at Abu Simbel 18 centuries later.',
    },
    {
      id: 'the-falcon',
      x: 0.75,
      y: 0.285,
      scale: 1.95,
      caption:
        'A falcon has a human arm, and it grips a rope that runs through the nose of a head with papyrus growing out of it. The falcon is Horus, and he is handing the king the delta. The carving makes that whole argument without a word of text.',
    },
    {
      id: 'the-name',
      x: 0.47,
      y: 0.11,
      scale: 3.4,
      caption:
        'Inside the palace frame, a catfish sits above a chisel. The two signs are read as Narmer, one of the oldest personal names anyone can still pronounce.',
    },
  ],
} satisfies MockSceneDef;

export const theKingWhoWasAWoman = {
  slug: 'the-king-who-was-a-woman',
  title: 'The King Who Was a Woman',
  dek: 'Twenty years of prosperity, then a campaign to erase her',
  story:
    "Hatshepsut was the daughter of one king, the wife of another, and the regent for a third, her stepson Thutmose III, who was a small child when his father died around 1479 BC. Regency was normal. What she did next was not: within a few years she was crowned as king in her own right, with the full titulary, and ruled for two decades as the senior partner in a co-reign. Egypt had a word for a female king only in the sense that it had to invent grammar on the spot. Her inscriptions do exactly that, switching between feminine and masculine forms in the same sentence.\n\nHer reign was, by every surviving measure, a good one. She sent a trading fleet down the Red Sea to Punt and had the whole expedition carved on her temple walls at Deir el-Bahari. The carving includes the incense trees brought back with their root balls wrapped, and a memorably unflattering portrait of the queen of Punt. She quarried two granite obelisks at Aswan, one of which still stands at Karnak as the tallest in Egypt. She built one of the most beautiful buildings in the ancient world, the terraced temple under the cliffs where this statue once stood.\n\nRoughly 20 years after she died, the erasure began. Her images were chiselled out, her cartouches replaced with those of her father and husband and stepson, her obelisks walled up. The statues were dragged out to a pit near the temple causeway, smashed, and used as fill. For a long time the story was told as revenge, a resentful stepson getting even. The current reading is colder and more interesting. The timing points to a dynastic problem rather than a grudge. It looks like an attempt, late in Thutmose III's reign, to make the succession read as an unbroken line of men, and to remove the precedent of a woman who had done it.\n\nIt failed by being thorough. Between 1922 and 1928 the Metropolitan Museum's excavators dug out the pit, recovered thousands of fragments, and spent decades fitting them back together, and Hatshepsut now has more surviving statues than most pharaohs. This one is hardened limestone, life size, wearing the nemes headcloth of a king over a narrow female body. The royal titles cut into the throne are put in the feminine: Perfect Goddess, Lady of the Two Lands. The stone reads as bare now. A patch on the back of the head kept its paint, and the pleats of the headcloth were blue and yellow, alternating.",
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1470 BC',
  historicalYear: -1470,
  historicalMonthDay: null,
  artCredit: 'Seated statue of Hatshepsut, c. 1479–1458 BC',
  imageUrl: bucketPainting('scenes/the-king-who-was-a-woman.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-king-who-was-a-woman.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.5,
      y: 0.32,
      scale: 2.2,
      caption:
        "A king's headcloth sits over a woman's face. Her inscriptions switch between masculine and feminine forms in the same line. They are inventing grammar as they go.",
    },
    {
      id: 'the-damage',
      x: 0.7,
      y: 0.31,
      scale: 3.0,
      caption:
        'The pleated headcloth runs to a jagged break where the edge was snapped away. This is not weathering. About 20 years after she died, her statues were dragged to a pit by the causeway and broken up for fill.',
    },
    {
      id: 'the-collar',
      x: 0.5,
      y: 0.55,
      scale: 3.0,
      caption:
        'Bands of beads and a row of teardrop pendants are cut shallow into the chest below the throat. The edges are still sharp. Whatever took the headcloth apart never touched the collar.',
    },
  ],
} satisfies MockSceneDef;

export const theStatueThatSang = {
  slug: 'the-statue-that-sang',
  title: 'The Statue That Sang',
  dek: 'A cracked colossus greets the dawn, and Rome comes to hear it',
  story:
    "Two seated colossi of Amenhotep III stood on the Theban plain for 13 centuries before anyone recorded them making a noise. Then an earthquake around 27 BC brought down the upper half of the northern one, and shortly afterward, at sunrise, the wreck began to sing. The sound was described as a lyre string snapping, or a struck bronze, or a human voice. It came in the first hour after dawn, and not every day. That was enough to convince the Greek-speaking world that the statue was Memnon, the Ethiopian hero killed at Troy. He was greeting his mother Eos, the dawn, who wept for him in dew.\n\nEgypt was a Roman province and the colossus became its greatest attraction. Strabo came and heard it and was carefully agnostic about the source. Hadrian came in AD 130 with the empress Sabina and a court poet named Julia Balbilla. They waited, heard nothing on the first morning, and heard it on the second. Balbilla then carved four Greek poems on the statue's left foot recording the visit. She was not alone. Around a hundred inscriptions survive on the legs and base, tourists writing that they came and heard, or came and did not, dated by consulship, the ancient world's visitor book.\n\nThe physical explanation is dull and probably right: the morning sun warming dew trapped in the porous cracked stone, evaporation forcing air through the fissures, and the whole ruin acting as a very large whistle. It stopped speaking sometime around AD 199, and the tradition blames Septimius Severus. He visited hoping to hear the oracle, was disappointed, and had the broken statue repaired with sandstone blocks as an act of piety. The repair is still visible in the upper courses. It has not made a sound since.\n\nDavid Roberts drew the pair on the spot in 1838 with the Nile flood around their knees, which is how they stood for part of every year before the dams. Two seated kings up to their calves in the flood, facing east, waiting for a sunrise they no longer answer. Louis Haghe put the drawing on stone, and the coloured plate came out a decade later. The temple they once guarded is gone; they were its gateposts.",
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'AD 130',
  historicalYear: -27,
  historicalMonthDay: null,
  artTitle: 'Statues of Memnon at Thebes During the Inundation',
  artCredit: 'David Roberts, 1848',
  imageUrl: bucketPainting('scenes/the-statue-that-sang.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-statue-that-sang.jpg'),
  details: [
    {
      id: 'the-singer',
      x: 0.31,
      y: 0.55,
      scale: 2.8,
      caption:
        'The northern colossus, its upper body stacked back together in courses of small blocks. It sang at dawn for more than 2 centuries after an earthquake brought that half down, and the repair stopped it.',
    },
    {
      id: 'the-flood',
      x: 0.18,
      y: 0.755,
      scale: 3.0,
      caption:
        'Cattle at the edge of the flood, on a strip of ground the water has not taken yet. This is the inundation that arrived every summer until the dams.',
    },
    {
      id: 'the-boatmen',
      x: 0.62,
      y: 0.83,
      scale: 2.4,
      caption:
        'Boatmen at the water\'s edge below the colossus, one leaning on his pole. Roman visitors came the same way and cut about a hundred inscriptions into the legs recording whether they had heard anything.',
    },
  ],
} satisfies MockSceneDef;

export const theGranaryOfTheWorld = {
  slug: 'the-granary-of-the-world',
  title: 'The Granary of the World',
  dek: 'The state that ran on counted grain',
  story:
    "Egypt had no coined money for most of its history and did not need it. The economy ran on grain. Wages were paid in it, taxes were assessed in it, temples were funded with it, and the whole machinery of the state existed to measure how much there was and where it went. The Nile flood arrived every summer, and the height it reached decided the year. A flood too low meant famine; too high meant washed-out villages and ruined seed. So the government measured the river with nilometers, stone staircases running down into the water with graduated marks, and set the tax rate from the reading before the harvest existed.\n\nWhat that produced was the world's first paperwork civilization. Scribes counted the cattle, the fields, the sacks, the workers, the jars, the days of labor owed. The surviving tax registers, ration lists and delivery receipts outnumber the poetry by an enormous margin. A scribe was exempt from manual labor and knew it. The advice text known as the Satire of the Trades exists to say so. It runs through the misery of every other job: the potter grubbing in clay, the fisherman working beside crocodiles, the smith with fingers like crocodile hide. Each one ends on the same line: be a scribe.\n\nThe biblical story of Joseph is the outsider's version of that system. He is the foreigner who reads a dream about seven fat and seven lean years and is made overseer of the granaries. The story is accurate about the mechanism if not the man: store the surplus of good years, feed the country in bad ones, and end up owning the country. Famine records are real enough. One inscription on a rock at Sehel describes seven years of low flood under a king of the Old Kingdom. It was carved 2,000 years after the reign it claims to report, which is its own comment on how Egyptian bureaucracy handled an inconvenient past.\n\nAlma-Tadema painted Joseph in 1874 on a panel 18 inches across, in a room built entirely from museum study. The wall decoration is lifted from the Nebamun tomb chapel in the British Museum, and the cartouche of Thutmose II, the oval that rings a royal name, sits on the side of the throne. A scribe on the floor holds a scroll open in both hands, with a heap of grain on the mat in front of him. The overseer looks past all of it. He is the only person in the picture not doing arithmetic.",
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1650 BC',
  historicalYear: -1650,
  historicalMonthDay: null,
  artCredit: "Lawrence Alma-Tadema, Joseph, Overseer of Pharaoh's Granaries, 1874",
  imageUrl: bucketPainting('scenes/the-granary-of-the-world.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-granary-of-the-world.jpg'),
  details: [
    {
      id: 'the-scribe',
      x: 0.78,
      y: 0.55,
      scale: 2.2,
      caption:
        'The scribe is down on the floor with the roll open across both hands, and he reads off the count. Egypt paid its wages in barley and staffed itself with men who could write down how much.',
    },
    {
      id: 'the-overseer',
      x: 0.33,
      y: 0.28,
      scale: 2.0,
      caption:
        'Joseph sits on the throne with his arm out to the staff of office and his eyes somewhere past the room. He is the one person here doing no arithmetic.',
    },
    {
      id: 'the-wall',
      x: 0.79,
      y: 0.19,
      scale: 3.4,
      caption:
        'A panel cut into the wall carries spirals and flower shapes, with a dark standing figure against it. Painted hieroglyphs run down the frame. Alma-Tadema took the room\'s decoration from the Nebamun tomb paintings in the British Museum.',
    },
  ],
} satisfies MockSceneDef;

export const theWidowOfMemphis = {
  slug: 'the-widow-of-memphis',
  title: 'The Widow of Memphis',
  dek: 'The mourning is professional; the woman on the floor is not',
  story:
    "An Egyptian funeral was a production with a cast list. The embalming took 70 days by the book, and the coffin was painted with the texts the dead would need. The mourning itself was partly a paid trade. Professional women were hired to wail, tear their hair, throw dust, and beat their breasts along the route to the tomb. Tomb paintings show them working in rows with their arms up in the same posture. Grief had a correct shape, and somebody could be engaged to perform it correctly.\n\nAlma-Tadema built this room out of research, as he built everything. He owned a large photographic archive of Egyptian material and used the British Museum the way a novelist uses a library. That is where the painted columns come from, and the black granite lion in the courtyard beyond. So do the winged scarab on the end of the sarcophagus, the sistrum, a metal rattle, raised over the mummy case, and the arched harp standing on the floor. He was Dutch, trained in Antwerp, and made his name on archaeological accuracy at a moment when the public had just started to be able to check.\n\nWhat he does with the accuracy is the point of the picture. Along the right, the priests and singers are performing: shaved heads, mouths open, hands up, the correct gestures at the correct volume. Below them, alone, in dark blue, the widow is doubled over against the case with her hair down and her feet bare, and she is not doing any of the prescribed movements. The composition puts an empty stretch of polished floor between her and everyone else, which is the loudest thing in the room.\n\nHe painted it in 1872. His first wife, Pauline, had died of smallpox at Schaerbeek three years earlier, aged 32; he stopped working for months, then left Belgium for London. The picture is at the Rijksmuseum, where the catalogue describes a widow mourning beside her husband's coffin while priests and singers lament.",
  eraId: toEraId('ancient-egypt'),
  historicalDateLabel: 'c. 1200 BC',
  historicalYear: -1200,
  historicalMonthDay: null,
  artTitle: 'The Egyptian Widow',
  artCredit: 'Lawrence Alma-Tadema, 1872',
  imageUrl: bucketPainting('scenes/the-widow-of-memphis.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-widow-of-memphis.jpg'),
  details: [
    {
      id: 'the-widow',
      x: 0.7,
      y: 0.73,
      scale: 2.6,
      caption:
        'The widow is doubled over against her husband\'s mummy case. Her hair is down and her bare feet are on the polished floor. She is doing none of the gestures a mourner was supposed to make.',
    },
    {
      id: 'the-mourners',
      x: 0.86,
      y: 0.5,
      scale: 2.4,
      caption:
        'Priests and singers stand along the far side of the mummy case. One holds up a sistrum rattle and another plays an arched harp. Every mouth is open on cue.',
    },
    {
      id: 'the-coffin',
      x: 0.42,
      y: 0.68,
      scale: 3.0,
      caption:
        'The sarcophagus has its lid on, and a winged scarab is painted across the end panel. Alma-Tadema signed the picture on its bottom band: L Alma-Tadema 1872.',
    },
  ],
} satisfies MockSceneDef;
