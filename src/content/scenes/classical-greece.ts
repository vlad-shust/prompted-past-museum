import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const theHotGates = {
  slug: 'the-hot-gates',
  title: 'The Hot Gates',
  dek: 'Sparta sends 300 men to hold a doorway the width of a wagon road',
  story:
    'The pass is called Thermopylae, the Hot Gates, for the sulfur springs that steam beside the road. Here the mountains lean so close to the sea that the whole invading world must walk through a corridor 50 feet wide. Xerxes has spent four years assembling that world. His engineers bridged the Hellespont with boats lashed gunwale to gunwale, and when a storm broke the first bridge he had the sea itself given 300 lashes, then built another. His army was counted at the crossing by penning 10,000 men at a time inside a fence and filling it over and over. The Greeks say a million came; even sober men lost count; modern guesses shrink it to the low hundreds of thousands and it hardly matters, because against it stand some 7,000 Greeks. At their core are 300 Spartans under a king named Leonidas. The oracle had told him that Sparta would lose a king or lose itself, and he chose his 300 only from men with living sons.\n\nFor two days the corridor does what he hoped. Numbers mean nothing where only a few hundred can fight at once, and the long Greek spear outreaches everything walking toward it. The Medes are driven onto the Greek line with whips and pile up against the narrows; the Immortals, the king’s own 10,000, come in the afternoon and do no better. Told that the Persian arrows fly thick enough to hide the sun, a Spartan named Dieneces answers: good, then we fight in the shade. Xerxes, watching from a silver-footed throne on the hillside, three times leaps to his feet in rage. The mountain, not the army, decides the matter. A local man named Ephialtes knows the goat path over the ridge and sells it, and by night the Immortals are climbing through the oak woods above the pass.\n\nWord comes at dawn from lookouts running downhill. Leonidas sends the allied contingents away while the road south is still open, and keeps his Spartans, for whom retreat is not in the instructions. All 700 hoplites of the small town of Thespiae refuse to leave and stay beside them by choice, along with 400 Thebans. The Spartans eat breakfast, and comb their long hair, the way Spartans do before dying, and walk out to meet the morning.\n\nThey fight in the widest part of the pass this time, to reach more of the enemy. Spears splinter; they fight with swords, then with hands and teeth, the historian says, and he does not seem to be exaggerating. Leonidas falls early, and four times the Greeks pull his body back out of the crush. The survivors withdraw to a small hill and are finished with arrows at leisure. Xerxes has the king’s head set on a stake, which Persians, who honor brave enemies, considered a disgrace to Xerxes. The road to Athens lies open; the city is evacuated and burned; and a month later the fleet at Salamis takes the whole invasion apart in an afternoon. At the pass the Greeks later cut an epitaph for the 300: go, tell the Spartans, stranger passing by, that here, obedient to their word, we lie. Thespiae, which lost every armored man it had, got no verse anyone remembers. The spring still steams beside the road.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'August, 480 BC',
  historicalYear: -480,
  historicalMonthDay: null,
  artTitle: 'Leonidas at Thermopylae',
  artCredit: 'Jacques-Louis David, 1814',
  imageUrl: bucketPainting('scenes/the-hot-gates.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-hot-gates.jpg'),
  details: [
    {
      id: 'leonidas',
      x: 0.5,
      y: 0.48,
      scale: 2.8,
      caption:
        'Leonidas sits at the center of the noise with his sword across one knee and looks at nothing. David started this canvas in 1799, put it away, and did not finish it until 1814.',
    },
    {
      id: 'the-carving',
      x: 0.15,
      y: 0.155,
      scale: 3.0,
      caption:
        'A soldier cuts three lines of Greek into the rock with the point of his sword. He is carving the epitaph before the battle that earns it. Go tell the Spartans, stranger passing by, that here obedient to their word we lie.',
    },
    {
      id: 'garlands',
      x: 0.29,
      y: 0.42,
      scale: 3.0,
      caption:
        'Wreaths go up over a smoking bronze tripod, and they are flowers rather than laurel. Behind them the plain is packed with troops to the horizon. Spartans crowned themselves before a battle they did not expect to survive.',
    },
  ],
} satisfies MockSceneDef;

export const theBlindMansWar = {
  slug: 'the-blind-mans-war',
  title: "The Blind Man's War",
  dek: 'Two poems carried from town to town become the memory of a civilization',
  story:
    "An old man comes up the hill road at evening, one hand on a boy's shoulder, the other on a staff. The dogs reach him first. That is how a singer arrived in eighth-century Greece: on foot, blind or half blind as often as not, owning a lyre and a memory, trading verse for supper and a bed. The towns knew the trade. A good singer could take a wedding, a funeral, or a king's feast and hang the right song on it. The best carried something larger, a war at Troy from four centuries back, and could sing any hour of it on request, the way a ferryman knows any bend of his river.\n\nThe war itself sits at the edge of history. There was a Troy; it burned more than once; a Greek raid in the late Bronze Age is not unlikely and not proven. What is certain is what the singers built on it: the Iliad, 15,000 lines about 52 days of the war's tenth year, and the Odyssey, one soldier's 10-year commute home. The verse is engineered for memory. Fixed phrases snap in where the meter needs them, the wine-dark sea, swift-footed Achilles, rosy-fingered dawn, spare parts a performer reaches for without thinking while the next line assembles itself. Nobody composes like that on paper. It is the fingerprint of an art built entirely out of breath.\n\nThe scale of what memory carried is worth stopping on. The Odyssey adds another 12,000 lines to the Iliad's tally; recited straight through, either poem fills days. Athens eventually regulated the matter like a public utility. At the great Panathenaic festival the poems were performed complete, by relays of professional reciters, each man picking up the line where the last stopped, in fixed order, by law. Schoolboys got them whole. A character in Xenophon mentions, without drama, that his father made him memorize all of Homer, and gentlemen at dinner could be tested on it the way a later age tested scripture. A civilization ran its memory through two poems, and the poems ran through everyone.\n\nThen, around 750 BC, breath met the alphabet. The Greeks had just refitted Phoenician letters with vowels, and someone, somewhere, used the new tool to pin down the two great poems. Who that someone was, nobody could say even then. Seven cities claimed Homer's birth; an old hymn offers only a blind man from rocky Chios; the name may have belonged to one poet, or to a guild of them, or to the trade itself. The Greeks did not much care. They made the poems their schoolbook, their scripture and their case law. Cities in border disputes cited the Iliad's catalog of ships as evidence. Alexander slept with a copy under his pillow, in a jeweled casket taken from Darius' baggage.\n\nBouguereau painted the trade, not the legend, and sent it to the Salon of 1874. The picture shows an old singer between towns, and a hired boy with an empty basket and a fist of stones. Two half-naked youths sit on the rocks with a pack of dogs at their feet, and one of those dogs barks up at the singer's robe. Bouguereau had read his Odyssey, where dogs meet every stranger first and beggars are tested at the door. In 1870 a German businessman named Schliemann, who had believed the poems since childhood, dug into a mound in Turkey and found nine cities stacked like plates, one of them burned. The argument about which layer, if any, was Homer's Troy has run ever since. The basket in the painting is empty. The head above it holds Greece.",
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 750 BC',
  historicalYear: -750,
  historicalMonthDay: null,
  artTitle: 'Homer and His Guide',
  artCredit: 'William-Adolphe Bouguereau, 1874',
  imageUrl: bucketPainting('scenes/the-blind-mans-war.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-blind-mans-war.jpg'),
  details: [
    {
      id: 'the-eyes',
      x: 0.5,
      y: 0.13,
      scale: 2.8,
      caption:
        'Bouguereau paints the eyes open and useless under a white fillet, with the arm of a lyre against the shoulder. The Homeric Hymn to Apollo gives its singer no name, only a blind man who lives on rocky Chios.',
    },
    {
      id: 'the-guide',
      x: 0.75,
      y: 0.475,
      scale: 2.5,
      caption:
        'The boy holds the old man\'s hand with one hand and a fistful of white stones with the other. The wicker basket on his arm is empty.',
    },
    {
      id: 'the-dog',
      x: 0.25,
      y: 0.565,
      scale: 2.8,
      caption:
        'The dog has thrown its head back and opened its mouth at a stranger it cannot place. Two more dogs bark from the rocks behind it.',
    },
  ],
} satisfies MockSceneDef;

export const theCupHeChose = {
  slug: 'the-cup-he-chose',
  title: 'The Cup He Chose',
  dek: 'The escape is paid for; he chooses the hemlock and one more argument',
  story:
    "The ship from Delos has been sighted, and that settles it. Athens sends a sacred galley to the island every year, and while it is at sea the city keeps itself ritually clean: no executions. The voyage bought Socrates a month in chains. His friends spent the month arranging a bribe and a fast exit to Thessaly, and on the last morning Crito arrives with everything ready and one job left, which is to convince the prisoner. The prisoner declines. He is 70 years old, he has spent his life arguing that the examined life obeys its city's laws, and he is not going to refute himself on the way out the door. Running, he tells Crito, would only prove the jury right.\n\nThe jury had been 501 citizens. The vote was close, roughly 280 to 220, on charges that he disbelieved the city's gods and corrupted its young men. What convicted him was less the evidence than the tone. Asked to propose his own penalty, as Athenian law allowed, he suggested free dinners for life in the town hall, the honor given to Olympic champions. The second vote, on death, was wider than the first. He was a stonemason's son who had stood his ground as a soldier at Potidaea and Delium. He was a famously ugly man with a snub nose who owned one cloak and wrote nothing in his life. He spent 40 years in the market asking people to define the words they used. Athens laughed at him, listened to him, and at last, five years after losing an empire and a war, ran out of patience.\n\nThe machinery of the verdict was as ordinary as a market day. Jurors chosen by lot drew three obols for the sitting; speeches timed by a water clock; the votes cast with bronze disks into urns and counted by hand. Athens tried its philosopher under the same procedures it used for tax fraud. That was, in his telling, rather the point of staying for the sentence. The laws that killed him were the laws he had lived under for 70 years, argued under, soldiered under. A man does not get to obey them only when they flatter him. Plato reconstructed the speeches, and Xenophon gathered accounts from those present. Neither of them ever quite got over the tone of the defendant, which was that of a man conducting a seminar on trial procedure from inside the dock.\n\nThe last day fills with visitors. Xanthippe, his wife, is sent home when she cannot stop crying. The friends nearly cannot start the conversation, and he needles them into one more argument, a long one, about whether the soul survives the body. It is his answer to the question nobody will ask out loud. Toward sunset the jailer brings the cup, apologizing as he does it; hemlock was the humane machinery of the age, and the man who ground it knew his trade. Socrates asks the practical question, how one does this, the way a man asks about any tool. Drink, walk until the legs are heavy, lie down. The cold comes up from the feet. His friends break; he tells them a man should die in silence worth keeping. Then, with his face covered: Crito, we owe a rooster to Asclepius. Pay it, don't forget. Asclepius healed the sick. Nobody has ever settled what the debt was for.\n\nJacques-Louis David painted the scene in 1787 and moved history's furniture where drama needed it. Plato sits at the foot of the bed, though Plato tells us himself he was sick at home that day. David paints him old, dreaming the room he would spend his life writing down. The reaching hand does not look at the cup. The other hand is still up, one finger raised, holding the point he has not finished making. Paris had two years left before it started holding trials of its own.",
  eraId: toEraId('classical-greece'),
  historicalDateLabel: '399 BC',
  historicalYear: -399,
  historicalMonthDay: null,
  artTitle: 'The Death of Socrates',
  artCredit: 'Jacques-Louis David, 1787',
  imageUrl: bucketPainting('scenes/the-cup-he-chose.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-cup-he-chose.jpg'),
  details: [
    {
      id: 'the-cup',
      x: 0.48,
      y: 0.44,
      scale: 3.0,
      caption:
        'Socrates reaches for the cup without looking at it, still talking. The jailer who brought it has turned his face into his own arm.',
    },
    {
      id: 'the-finger',
      x: 0.69,
      y: 0.28,
      scale: 2.8,
      caption:
        'The finger stays up. Socrates is still proving that the soul outlives the body, and the young men crowded at his right have stopped answering him.',
    },
    {
      id: 'plato',
      x: 0.24,
      y: 0.7,
      scale: 2.2,
      caption:
        'Two scrolls and an inkwell lie on the floor beside the leg irons struck off that morning. David painted Plato white-bearded at the foot of the bed. Plato was about 28 that year, and by his own account he was ill at home.',
    },
  ],
} satisfies MockSceneDef;
export const aFoxUnderTheCloak = {
  slug: 'a-fox-under-the-cloak',
  title: 'A Fox Under the Cloak',
  dek: 'Sparta takes its boys at 7 and sends its girls to the running ground',
  story:
    'The year a Spartan boy turned 7, the city came and took him. Plutarch lays the system out in his life of Lycurgus. The boys went into herds, that is the actual word, agelai, under a 20-year-old captain called the eiren, who held the whip. They learned reading, Plutarch says, only as much as they needed. Everything else was one long training in obedience and hunger. At 12 a boy got one cloak a year and no tunic, and slept on rushes he pulled by hand from the banks of the Eurotas, no knife allowed. Rations were cut thin on purpose. A hungry boy steals, and stealing was the curriculum; it taught patience and nerve. The whip was for getting caught, never for the theft.\n\nPlutarch then tells the story every Spartan child was raised on. A boy had stolen a fox cub and hidden it under his cloak. When the owners came searching he stood and let them question him while the animal tore through his belly with claws and teeth. He dropped dead rather than be found out. Plutarch adds that he finds this believable, because in his own day he watched Spartan boys die under the lash at the altar of Artemis Orthia sooner than cry out.\n\nThe girls were never sent to the herds, and what happened instead scandalized every other city in Greece. Lycurgus, Plutarch says, had them run, wrestle, and throw the discus and the javelin in the open air, so that children would grow strong in strong bodies. He also taught them songs of praise for the boys who trained well, and public mockery for the ones who shirked. Elsewhere in Greece a daughter stayed indoors at the loom. In Euripides an old man sneers that a Spartan girl could not be modest if she tried, out of the house with bare thighs and loosened dress, sharing the running grounds with young men. The rest of Greece coined a nickname, phainomerides, the thigh-showers. Sparta heard it as a compliment. This was the Sparta of the long second war with Messenia, the war Tyrtaeus wrote marching songs for, and the machine had exactly two products: soldiers, and the mothers of soldiers.\n\nDegas painted the confrontation around 1860, before he turned 30, and then could not leave it alone. Over the following 20 years he scraped away the classical profiles and gave the children the faces of Paris street kids, the gamins of Montmartre, as his cataloguer André Lemoisne put it. The canvas stayed in his studio, unfinished, until he died in 1917. X-rays show how restlessly he moved the bodies around: the four girls of the front rank have ten legs among them. And behind the whole contest, small and pale above the town, he set Taygetus, the mountain where Plutarch says the elders of Sparta left the newborns who failed inspection.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 650 BC',
  historicalYear: -650,
  historicalMonthDay: null,
  artTitle: 'Young Spartans Exercising',
  artCredit: 'Edgar Degas, c. 1860',
  imageUrl: bucketPainting('scenes/a-fox-under-the-cloak.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-fox-under-the-cloak.jpg'),
  details: [
    {
      id: 'the-dare',
      x: 0.33,
      y: 0.45,
      scale: 2.6,
      caption:
        'The girl in the blue skirt leans out over the grass with her arm level and calls the boys across. Plutarch says Spartan girls ran, wrestled and threw the javelin. They also sang public mockery of any boy who trained badly.',
    },
    {
      id: 'the-stretch',
      x: 0.67,
      y: 0.38,
      scale: 2.6,
      caption:
        'The tallest boy answers by lacing his hands above his head, all ribs and hip bones. Degas repainted these figures for 20 years. André Lemoisne, who catalogued his work, said the faces belong to street kids from Montmartre rather than to Greece.',
    },
    {
      id: 'the-lawgiver',
      x: 0.575,
      y: 0.46,
      scale: 3.4,
      caption:
        'A white-haired man leans on a staff among the mothers. This is Lycurgus, and his code took their sons at 7. Behind them Degas painted the roofs of Sparta out on the plain.',
    },
  ],
} satisfies MockSceneDef;

export const theTenthMuse = {
  slug: 'the-tenth-muse',
  title: 'The Tenth Muse',
  dek: 'Nine books rot down to one whole poem and an Egyptian rubbish dump keeps the scraps',
  story:
    'A stone chronicle called the Parian Marble, cut more than two centuries after her death, records that Sappho sailed from Mytilene into Sicilian exile. That entry is about as solid as her biography gets: a place, Lesbos; a trade, songs for the lyre; a working date around 600 BC. Herodotus fills in a brother, Charaxos, who shipped Lesbian wine to Egypt and spent a fortune there freeing a famous courtesan, and says Sappho scolded him for it in a poem. She mentions a daughter, or a girl she loved as one, Kleis, her form, she says, like golden flowers. The rest is fog, and verse.\n\nAbout the scale of the verse antiquity had no doubts at all. The scholars of Alexandria collected her into nine books, the first of them more than a thousand lines long. Aristotle notes that the Mytileneans honored Sappho although she was a woman. An epigram handed down under Plato’s name redoes the arithmetic: some say there are nine Muses, but look again, Sappho of Lesbos is the tenth. Mytilene stamped her head on its coins. And Aelian tells of Solon of Athens hearing one of her songs over the wine and demanding to be taught it at once, so that he could learn it and die.\n\nThen the books rotted. A late legend blames church bonfires; the duller mechanism is that papyrus decays wherever the climate is not desert, and her Aeolic dialect went obscure early, so the copying stopped. One poem survives whole, a prayer to Aphrodite, and only because the critic Dionysius of Halicarnassus pasted it entire into an essay on style. Nearly everything else is scrap. The biggest sack of scraps was the town dump of Oxyrhynchus in Egypt. Two Oxford men started digging there in 1897 and hauled out ancient rubbish by the basket: tax receipts, contracts, and strips of her. In 2004, papyrus recycled as mummy casing gave back most of a poem about going grey. In 2014 another piece surfaced from a private collection, with an ownership history nobody could quite explain. In it she worries about Charaxos and his ships: the same brother, 25 centuries after Herodotus passed along the family gossip.\n\nAlma-Tadema painted her in 1881, listening. The man at the kithara is Alcaeus, Mytilene’s other great poet, whose surviving lines call her violet-haired, holy, honey-smiling. A Hellenistic poet, Hermesianax, insisted the two were in love, and that romance is the picture’s plot. The marble is more honest than the plot. Alma-Tadema copied the tiered seats from the Theater of Dionysus in Athens, then replaced the carved names of Athenian officials with girls out of Sappho’s poems. Two of them are still legible in red along the tiers: Gyrinno, and Anactoria of Miletus.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 600 BC',
  historicalYear: -600,
  historicalMonthDay: null,
  artTitle: 'Sappho and Alcaeus',
  artCredit: 'Lawrence Alma-Tadema, 1881',
  imageUrl: bucketPainting('scenes/the-tenth-muse.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-tenth-muse.jpg'),
  details: [
    {
      id: 'the-listener',
      x: 0.19,
      y: 0.44,
      scale: 2.6,
      caption:
        'Sappho leans on the cushioned lectern with her chin on her hands. The laurel wreath is laid down by her elbow. No likeness of her survives from her own century, so this face is invention like every other face of her.',
    },
    {
      id: 'the-kithara',
      x: 0.88,
      y: 0.53,
      scale: 2.8,
      caption:
        'Alcaeus bends over a kithara, the heavy wooden lyre professionals played. Its body is carved in relief and lettered in Greek with the name of Apollo. A surviving line of his calls Sappho violet-haired, holy, honey-smiling, and later Greek poets took that as proof he loved her.',
    },
    {
      id: 'names-in-red',
      x: 0.487,
      y: 0.62,
      scale: 3.2,
      caption:
        'Two names are still readable in red along the marble tiers: Gyrinno, and Anactoria of Miletus. Alma-Tadema copied the seats from the Theater of Dionysus in Athens. He swapped the carved names of Athenian officials for girls out of Sappho’s poems.',
    },
  ],
} satisfies MockSceneDef;

export const theRichestManAlive = {
  slug: 'the-richest-man-alive',
  title: 'The Richest Man Alive',
  dek: 'The richest king alive asks who is happiest and hates every word of the answer',
  story:
    'Croesus of Lydia had the kind of money that warps a story. Gold dust washed down the river Pactolus through his capital at Sardis. Herodotus credits the Lydians with the first true gold and silver coins, so the king could fairly regard wealth itself as a family invention. When Solon of Athens came through on his travels, Croesus had the treasuries opened for him, all of them. Then he asked his question: of all the men you have seen, who is the most fortunate? The answer was meant to be a formality.\n\nSolon named Tellus of Athens, a man the king had never heard of. He lived decently in a decent city, and his children and grandchildren outlived him. He died old, fighting off a border raid, and was buried at public expense on the spot where he fell. Asked for a runner-up, Solon offered Cleobis and Biton, two young Argives who yoked themselves to an ox cart when the oxen ran late and hauled their mother five miles to the festival of Hera. Their mother prayed the goddess to give them the best thing a man can have; they lay down that night in the sanctuary and did not wake. Count no man fortunate until he is dead, Solon said; the luckiest man alive is one throw from ruin. Croesus, Herodotus writes, now took his guest for a fool, and sent him away.\n\nThe bill arrived itemized. His son died on a boar hunt, speared by the very guest the king had ritually cleansed of bad luck. Croesus trusted the oracle at Delphi because he had tested it. He had sent riders to ask what the king was doing on an appointed day, and Delphi alone answered right: boiling a tortoise with a lamb in a bronze pot. Now the oracle told him that if he crossed the river Halys a great empire would fall. He crossed, and the empire was his. Cyrus of Persia took Sardis in 546 and put the richest man alive on a pyre, and Croesus called one name three times, Solon, Solon, Solon. Cyrus asked what it meant, heard the story translated, and, depending on the version, a change of heart or a sudden rainstorm brought Croesus down alive to serve out his days as the conqueror’s advisor.\n\nThe interview is almost certainly invented. The travel dates of the real Solon and the reign of the real Croesus refuse to overlap. Plutarch checked, and wrote that he would not give up so famous a story to the so-called rules of chronology. The real Solon needs no legend anyway. As archon he canceled Athens’ debts, brought home citizens who had been sold abroad to cover them, and banned forever the loan secured on a person’s own body. Then he left town for 10 years so that nobody could talk him into undoing any of it. That trip is exactly how the storytellers got him to Sardis.\n\nHonthorst painted the scene in 1624 in Utrecht, home a few years from Rome, where his candlelit pictures had earned him the name Gherardo delle Notti. His Croesus wears ermine and a jeweled stage crown, a servant displays embroidered cloth, and a man in chains kneels beside the silver; the canvas hangs in Hamburg. Cleobis and Biton, meanwhile, came up out of the ground in the 1890s, when French excavators at Delphi found two archaic marble brothers, generally taken for the pair the Argives dedicated. They stand in the museum there, smiling.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 560 BC',
  historicalYear: -560,
  historicalMonthDay: null,
  artTitle: 'Solon and Croesus',
  artCredit: 'Gerard van Honthorst, 1624',
  imageUrl: bucketPainting('scenes/the-richest-man-alive.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-richest-man-alive.jpg'),
  details: [
    {
      id: 'the-king',
      x: 0.4,
      y: 0.17,
      scale: 2.8,
      caption:
        'Croesus is in ermine under a jeweled stage crown. One hand is still up from the question he has just asked. He is watching the one guest in Sardis who will not flatter him.',
    },
    {
      id: 'the-answer',
      x: 0.82,
      y: 0.16,
      scale: 2.6,
      caption:
        'Solon raises one finger and answers: count no man happy until he is dead. Past his shoulder a servant holds up a length of gold-embroidered cloth and grins. His is the only face in the room enjoying this.',
    },
    {
      id: 'the-exhibit',
      x: 0.52,
      y: 0.85,
      scale: 2.8,
      caption:
        'A silver bowl is heaped with coin, and a gold chain spills over the rim. Croesus is credited with the first coins struck in pure gold and pure silver. Before that they were made of electrum, the natural mix of gold and silver the river Pactolus washed down through Sardis.',
    },
  ],
} satisfies MockSceneDef;

export const theSunriseSociety = {
  slug: 'the-sunrise-society',
  title: 'The Sunrise Society',
  dek: 'A brotherhood in Croton wakes before dawn to sing the sun up and count the world',
  story:
    'Before dawn on the high ground above Croton, in the Greek far west that is now the toe of Italy, men in white walked out alone, each on his own path. Iamblichus, who gathered the order’s lore centuries later, says a Pythagorean spoke to no one in the morning until he had put his own soul in order. First a walk alone, then music, and only then other people. Pythagoras had arrived around 530 BC from Samos. He left the island, the tradition says, because the tyrant Polycrates made thinking out loud a poor idea. What he founded at Croton was something Greece had not seen before: a school run like a monastery, with political ambitions.\n\nJoining was slow by design. Newcomers kept a silence some sources stretch to five years; property went into common keeping; the day ran to a timetable of music, exercise, shared meals. The rules that leaked out to outsiders sound like riddles. Do not stir the fire with a knife. Do not step over a beam. Do not eat beans. They took that last one seriously. In the legend of the founder’s death he is fleeing armed men, stops at the edge of a bean field, refuses to cross it, and is cut down at its border. Diogenes Laertius collected the ancient guesses about what the beans meant, and none of them settles anything.\n\nUnder the riddles sat one conviction: number is the skeleton of the world. The oath of the order named the tetraktys, the triangle of ten dots that stacks one, two, three, four. Proof was audible. Stop a string at half its length and it sounds the octave. At two thirds it sounds the fifth. Harmony is ratio, and if strings obey arithmetic the planets might too, spaced like string lengths, sounding a music too constant for anyone to hear. The theorem with his name on it is the odd item out. Babylonian surveyors were pressing right-triangle number sets into clay a thousand years before Pythagoras was born. What the school added was the demand for proof. He himself wrote nothing. He did teach that souls move from body to body, and he was mocked for it in his own lifetime. Xenophanes jokes about Pythagoras stopping a man who was beating a puppy: do not hit him, it is the soul of a friend, I knew him by the voice.\n\nIt ended the way political clubs end. The Pythagoreans had drifted into running Croton. Their enemies, Iamblichus says, set fire to the house of Milo the wrestler, six times an Olympic champion, while the leadership met inside. The survivors scattered, and Pythagoras died in exile at Metapontum. The morning hymn outlived the politics by 24 centuries. Fyodor Bronnikov, a painter from Shadrinsk beyond the Urals who spent his working life in Rome, staged it in 1869 with harps and white wool on a terrace above the sea. That first version hangs in the Tretyakov in Moscow. This one he repeated himself, signed Roma, 1877, the sun just breaking the left edge of the canvas.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 530 BC',
  historicalYear: -530,
  historicalMonthDay: null,
  artTitle: 'Hymn of the Pythagoreans to the Rising Sun',
  artCredit: 'Fyodor Bronnikov, 1877',
  imageUrl: bucketPainting('scenes/the-sunrise-society.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-sunrise-society.jpg'),
  details: [
    {
      id: 'the-conductor',
      x: 0.72,
      y: 0.33,
      scale: 2.6,
      caption:
        'The man leading the hymn flings an arm at the first light. A gold wreath is pushed into his hair. Iamblichus says a Pythagorean spoke to nobody in the morning until he had first walked alone and made music.',
    },
    {
      id: 'the-harps',
      x: 0.84,
      y: 0.47,
      scale: 3.0,
      caption:
        'A veiled woman lifts her face into the light, and the bearded man beside her has his hands pressed together. The harp behind them is the whole argument. Every pitch is a ratio, and a string held down at its midpoint sounds an octave higher.',
    },
    {
      id: 'the-prostrate',
      x: 0.43,
      y: 0.73,
      scale: 2.8,
      caption:
        'Not everyone stands for the hymn. Robed figures lie face down on the rock among the flowers while the rest keep their feet. Diogenes Laertius says a newcomer listened for five years without speaking.',
    },
  ],
} satisfies MockSceneDef;

export const twoDaysToSparta = {
  slug: 'two-days-to-sparta',
  title: 'Two Days to Sparta',
  dek: 'Athens hands one man a message and he is in Sparta, 150 miles away, the next day',
  story:
    'When the Persian fleet beached at Marathon, a long day’s march from Athens, the city sent for help the only way that existed: it handed the message to a man and told him to run. His name was Pheidippides, and running was his profession; Herodotus calls him a hemerodromos, an all-day runner, a job Greek states maintained for exactly this errand. The road to Sparta is about 150 miles, with the mountains of Arcadia in the middle. Herodotus reports the timing without ceremony: Pheidippides left Athens and was in Sparta the next day.\n\nHe came back carrying two answers, one from men and one from a god. The Spartans would come, but not yet; they were keeping the Karneia, their festival of Apollo, and their law forbade marching until the full moon, six days off. The god was the stranger part. Crossing Mount Parthenion above Tegea, the runner said afterward, he met Pan. The god called him by name and asked, a little hurt, why the Athenians paid him no honors. He had been useful to them before, and meant to be again. Athens took the complaint at face value: after the war Pan got a cave sanctuary under the Acropolis and a yearly torch race. Herodotus passes the encounter along as the runner’s own account, and leaves it there.\n\nThe battle would not wait for the moon. Roughly 10,000 Athenian hoplites charged the Persian line at a run, with every fighting man little Plataea had beside them. Herodotus says no Greek army had done that before. The wings folded in on the Persian center. The count afterward ran to Athenian exactness: 6,400 Persian dead against 192 Athenians, and the 192 went under a burial mound that has not moved from the plain since. The Spartans marched the morning after the full moon and covered the 150 miles in three days. All 2,000 of them walked the field among the dead, praised the work, and went home.\n\nThe dying messenger is a later invention. Herodotus, who talked with the Marathon generation, has no runner dying over the word victory. What he has is the army itself marching hard back to Athens the same afternoon, to beat the Persian fleet to the harbor. A city saved twice in one day. The death-run enters the record about six centuries later: Plutarch names the runner Thersippus, or maybe Eucles, and Lucian is the first to hand the part to Pheidippides, with last words attached, joy, we win. That is the version Luc-Olivier Merson painted in 1869, at 23, and it won him the Grand Prix de Rome. The runner lies naked and finished at the foot of the magistrates’ platform, victory laurel on his head, the elders’ arms flying up. The École des Beaux-Arts keeps the canvas, as it keeps its winners.\n\nThe modern race is a memorial to the legend, measured by accident. A French philologist, Michel Bréal, talked the 1896 Olympics into a race from Marathon to Athens and put up a silver cup, which a Greek water carrier named Spyridon Louis carried off. The distance then wandered from games to games until London in 1908. The start was laid on the lawn of Windsor Castle, beneath the windows of the royal nursery, and the finish sat opposite the royal box at White City. The sum came out at 26 miles and 385 yards, adopted as the fixed distance in 1921. Every marathon since is the length of a royal garden plus a lap of a vanished stadium. The run Herodotus actually recorded was six times as long.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'September, 490 BC',
  historicalYear: -490,
  historicalMonthDay: null,
  artTitle: 'The Soldier of Marathon',
  artCredit: 'Luc-Olivier Merson, 1869',
  imageUrl: bucketPainting('scenes/two-days-to-sparta.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/two-days-to-sparta.jpg'),
  details: [
    {
      id: 'the-wreath',
      x: 0.47,
      y: 0.61,
      scale: 2.8,
      caption:
        'He announced the victory with the laurel already on his head. Then he dropped at the foot of the platform, under the magistrates’ feet. Six centuries after the battle, Lucian is the first to give him last words: joy, we win.',
    },
    {
      id: 'the-archons',
      x: 0.4,
      y: 0.18,
      scale: 2.6,
      caption:
        'Arms fly up all along the bench of magistrates. Herodotus has no dying messenger at all. Merson painted the later legend and won the 1869 Grand Prix de Rome for it.',
    },
    {
      id: 'the-mother',
      x: 0.155,
      y: 0.45,
      scale: 2.4,
      caption:
        'An old man holds a girl in blue against his cloak while she turns her face away. Past them a woman leans out for the first word. Herodotus later put the news they are waiting for at 6,400 Persian dead against 192 Athenians.',
    },
  ],
} satisfies MockSceneDef;

export const theWoodenWall = {
  slug: 'the-wooden-wall',
  title: 'The Wooden Wall',
  dek: 'Themistocles talks the Persian fleet into the narrow water where counting fails',
  story:
    'Three years before the battle, Athens struck silver. A rich new vein came in at the state mines at Laurion, and the assembly’s first instinct was to hand it out, 10 drachmas a citizen. Themistocles talked the city into spending the windfall on 200 warships instead. The ships were sold to the voters as insurance against the grudge war with Aegina next door; what Themistocles was watching was Persia. Delphi told the Athenians that only a wooden wall would stand unbroken, and ended the prophecy this way: divine Salamis, you will destroy the children of women. Themistocles argued down the professional interpreters. The wooden wall was the fleet, and an island fated to ruin Greeks would have been called hateful, not divine. The city voted his way twice, once for the ships, and once, when the invasion came, for emptying Athens and fighting from the water.\n\nBy late September of 480 the surviving Greek fleet lay crowded in the channel between Salamis and the mainland, and the crews could watch the smoke going up from their own acropolis across the water. The war council nearly broke daily. Plutarch has the Spartan commander Eurybiades raising his staff at Themistocles in one session, and Themistocles answering: strike, but hear me. When Adeimantus of Corinth sneered that a man with no city behind him should keep silent, Themistocles said his city was the 200 manned ships in front of them. The allied vote kept drifting toward retreat to the Isthmus. So Themistocles arranged for the vote to stop mattering. At night he sent Sicinnus, the slave who tutored his children, rowing across with a private message for the king. The Greeks mean to slip away at dawn; close the exits and take them all. Xerxes believed it, because it was nearly true. The Persian squadrons rowed out in the dark to seal both ends of the strait and held station until morning, crews awake all night at the oar.\n\nAt first light the Greeks came out singing the paean. Aeschylus, 45 that year and in the fight, later set down the words: sons of the Greeks, go, free your fatherland, free your children, your wives, the shrines of your fathers’ gods. His count of the fleets, 310 Greek ships against 1,207, is the nearest thing we have to an eyewitness ledger. In water a mile wide the Persian numbers became the Persian problem: the deep line fouled itself in the narrows, and the Greek triremes worked the edges of the crush ram first. Artemisia of Halicarnassus was the one captain Xerxes praised by name. She escaped an Athenian pursuer by ramming a ship on her own side, which went down with all hands. The king watched from a throne set on the slope of Mount Aigaleos, with secretaries writing down the name, father, and city of every captain who fought well. He took her victim for an enemy and said, Herodotus reports, my men have become women and my women men. Herodotus grew up in Halicarnassus, her city, which may be why she gets the best lines. Most of the Persian dead never reached a deck to die on; they could not swim.\n\nXerxes went home before winter, leaving Mardonius to lose at Plataea the next summer, and the afterlives came out crooked. Themistocles, ostracized within a decade, finished his days as a Persian governor at Magnesia, salaried by the son of the king he had beaten; Sicinnus the tutor got citizenship at Thespiae and died rich. Aeschylus staged The Persians in 472. It is the oldest play that survives anywhere, and it is set not among the victors but in the enemy’s grieving court. Its chorus was paid for by a rising young man named Pericles. His own epitaph, which tradition says he wrote himself, mentions Marathon and the long-haired Mede and not one word about plays. Kaulbach painted the strait for the Maximilianeum in Munich, over 50 square meters of canvas, and hung the ghosts of the old Salamis heroes in the sky over the oar-smoke. The Bavarian parliament meets under that roof today.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'September, 480 BC',
  historicalYear: -480,
  historicalMonthDay: null,
  artTitle: 'The Battle of Salamis',
  artCredit: 'Wilhelm von Kaulbach, 1868',
  imageUrl: bucketPainting('scenes/the-wooden-wall.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-wooden-wall.jpg'),
  details: [
    {
      id: 'the-paean',
      x: 0.768,
      y: 0.375,
      scale: 2.6,
      caption:
        'Two trumpets and a curved sword go up over the deck beside the commander in the red cloak. The crews take up the war hymn. Aeschylus fought in this water and kept the words: sons of the Greeks, go, free your fatherland, your children, your wives.',
    },
    {
      id: 'the-archer-queen',
      x: 0.31,
      y: 0.44,
      scale: 3.0,
      caption:
        'Artemisia of Halicarnassus draws a bow on her own deck, with helmeted men packed along the rail below her. She was the one captain Xerxes praised by name. She got clear of the strait by ramming a ship from her own side. Xerxes was watching from the shore, and he took the victim for a Greek.',
    },
    {
      id: 'the-swimmers',
      x: 0.417,
      y: 0.7,
      scale: 2.8,
      caption:
        'A man goes under still holding his shield and his sword. Below him a woman lies in the water with one arm thrown out. Herodotus says most of the Persian dead drowned because they could not swim, while the Greeks who lost their ships swam across to Salamis.',
    },
  ],
} satisfies MockSceneDef;
export const theManOnTheShield = {
  slug: 'the-man-on-the-shield',
  title: 'The Man on the Shield',
  dek: 'The sculptor shows off the fresh paint, then answers for his own face on Athena’s shield',
  story:
    'Around 447 BC, on a plank scaffold high inside the half-built Parthenon, Phidias walked a party of friends along the new frieze, and the paint was still bright. That is the moment Alma-Tadema chose: the marble procession fresh in red and blue and gold, seen close, from the scaffolding, the way almost no Athenian ever saw it. The finished band would run 40 feet up under the roof, where the eye could barely reach. He ran the whole site. Pericles had put him in charge of the building program. The accounts were cut into stone and set up in public, year by year, talent by talent, so any citizen could read what the marble and the ivory and the gold had cost.\n\nThe gold mattered most, because there was so much of it standing in one room. His statue of Athena inside was nearly 40 feet tall, wood at the core, ivory for the skin, and something over a ton of gold for the rest. Pericles had it made so the plates could be lifted off. That was deliberate. The goddess was also the reserve treasury, wearing the city’s savings where everyone could see them, and if a war ever went badly enough the gold could come down and be spent. When enemies of Pericles accused Phidias of skimming the metal, the answer was already built in: the gold was weighed, plate by plate, and it was all there.\n\nSo they charged him with the other thing. On Athena’s shield he had carved a battle against the Amazons. Among the fighters he put a portrait of Pericles hurling a spear, the raised arm half hiding the face. He put in a bald old man too, heaving a rock overhead with both hands, and everyone knew that was Phidias looking at Phidias. Plutarch says it could not be missed from any angle. Setting your own face on the divine shield was impiety, and impiety was a charge that could kill. What happened next the sources cannot agree on. In one, he died in an Athenian prison. In Plutarch’s version he went into exile at Elis, where they hired him to make an even bigger god, the seated Zeus at Olympia that later counted among the seven wonders.\n\nAt Olympia in the 1950s archaeologists dug up a workshop the right size for that Zeus, and in it a plain black drinking cup with words scratched on the underside: I belong to Pheidias. The frieze he is showing his friends here, still wet in the picture, mostly survives too, though scattered. Alma-Tadema painted this in 1868, when the greater part of it had been in London for half a century, prised off the ruin by Lord Elgin’s men and sold to the nation. He gave the wall its lost color back on a canvas just over a meter wide, and it hangs now in Birmingham.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 447 BC',
  historicalYear: -447,
  historicalMonthDay: null,
  artTitle: 'Phidias Showing the Frieze of the Parthenon to his Friends',
  artCredit: 'Lawrence Alma-Tadema, 1868',
  imageUrl: bucketPainting('scenes/the-man-on-the-shield.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-man-on-the-shield.jpg'),
  details: [
    {
      id: 'the-frieze',
      x: 0.13,
      y: 0.17,
      scale: 2.3,
      caption:
        'The paint on this frieze is still fresh. A red-limbed youth throws his arm up among grey horses, on a blue-black ground under a red and gold Greek key border. The finished band ran 40 feet up under the roof, too high to read.',
    },
    {
      id: 'the-friends',
      x: 0.81,
      y: 0.5,
      scale: 2.6,
      caption:
        'A bearded man in a headband is next to a woman in a dark dress printed with gold rings. She has one hand on her hip and her chin up at the wall. Behind them the boards run back into the dark where the rest of the party is still looking.',
    },
    {
      id: 'from-behind',
      x: 0.13,
      y: 0.55,
      scale: 2.6,
      caption:
        'Two of the party are at the scaffold rope with their backs to us. The near one has his hands folded at the small of his back. Phidias ran the whole building program for Pericles, and the costs were cut into stone in public every year for any citizen to check.',
    },
  ],
} satisfies MockSceneDef;

export const theSecondSummer = {
  slug: 'the-second-summer',
  title: 'The Second Summer',
  dek: 'A sickness comes over the wall into a packed city and the historian catches it too',
  story:
    'In the second summer of the war with Sparta, 430 BC, a sickness came into Athens through the port at Piraeus and did not leave for years. The timing could not have been worse. Pericles had pulled the whole population of the countryside inside the Long Walls and told them to let the enemy burn the fields. The plan was to be untouchable behind stone and fed by the fleet. Instead the crowding built a furnace. Thucydides writes that people died in the sanctuaries where they had gone to sleep, and at the fountains where they crawled to drink. Bodies lay on each other in the streets.\n\nThucydides caught it and lived, and being the man he was, he took notes. His chapter is the first thing in Western writing that reads like a case report. He lists the burning in the head and the eyes, the tongue and throat gone bloody, the retching, the skin breaking out in blisters. The sick could not bear cloth on them and threw themselves into the rain tanks. He counts the course of it day by day. The birds and dogs that fed on the dead sickened or stayed away, and he marks that too. He notes one mercy: a survivor did not get it twice, which is why men who had recovered nursed the dying. He states plainly that he will not guess at the cause, and only writes it down so that a reader will know it again if it ever comes back.\n\nIt took the man who had planned the siege. Pericles gave the funeral oration for the war’s first dead that winter, then lost two sons to the plague, and died of the disease himself in 429, his strategy still only half run. Thucydides reckoned later that the sickness did more than any battle to hollow Athens out, in bodies and in nerve. People who expected to be dead by autumn stopped fearing the gods and the law together.\n\nIn 1994, crews digging a station for the Athens metro at Kerameikos cut into a wide burial pit just outside the old cemetery. The dead had been stacked in a hurry, arms and legs overlapping, as many as 240 of them, children among them. Grave goods date the pit to exactly these years. DNA later pulled from the teeth pointed, the researchers argued, to typhoid. The picture here is not Athens. Michiel Sweerts painted it in Rome around 1652, a plague city of his own imagining. The dead lie on the pavement and the living hold their heads, while an arcaded palace stands over them in clean evening light. Sweerts left Europe as a lay missionary and died in Goa, in India, at 46. He knew what a port that had caught something looked like.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: '430 BC',
  historicalYear: -430,
  historicalMonthDay: null,
  artTitle: 'Plague in an Ancient City',
  artCredit: 'Michiel Sweerts, c. 1652',
  imageUrl: bucketPainting('scenes/the-second-summer.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-second-summer.jpg'),
  details: [
    {
      id: 'the-child',
      x: 0.4,
      y: 0.76,
      scale: 2.6,
      caption:
        'A dead woman lies on white cloth. Her baby sits up against her shoulder and reaches for the hand that comes down to it. Thucydides wrote that the people who nursed the sick were the next to catch it.',
    },
    {
      id: 'the-fevered-man',
      x: 0.14,
      y: 0.5,
      scale: 2.6,
      caption:
        'A man stands in the dark with both hands clamped on his head. Thucydides wrote that it started with heat in the head and the eyes, then worked its way down through the body.',
    },
    {
      id: 'the-ancient-city',
      x: 0.658,
      y: 0.18,
      scale: 2.6,
      caption:
        'An obelisk carved with hieroglyphs stands in clean evening light. Behind it is a palace of stacked arches with a dome. Sweerts invented the whole city in his Rome studio around 1652, and none of it is Athens.',
    },
  ],
} satisfies MockSceneDef;

export const theLastGuestToArrive = {
  slug: 'the-last-guest-to-arrive',
  title: 'The Last Guest to Arrive',
  dek: 'A poet throws a dinner, a drunk crashes it, and a student writes the night down forever',
  story:
    'The tragedian Agathon threw a dinner in Athens in 416 BC, the day after his first play took the prize at the Lenaia. The guests settled in to drink and make speeches in praise of love. The evening would have vanished like every other dinner. One of the drinkers was Socrates, and Plato, still a boy when it happened, later wrote the night up as the dialogue we call the Symposium. A symposium was the second half of a Greek dinner, the drinking half, run by rules. The wine went into a great bowl, the krater, and was cut with water there before anyone touched it, often two or three parts water to one of wine. A man who drank it neat was marking himself a barbarian or a drunk.\n\nThey had agreed to go easy, several of them nursing sore heads from Agathon’s victory party the night before, and to send the flute girl away and talk instead. The speeches climb toward Socrates. He says he will only repeat what a priestess named Diotima taught him. Love is a ladder: a soul climbs from one beautiful body to all of them, and then to beauty itself. Then the door bangs. Alcibiades arrives blind drunk, propped on a flute girl, ivy and violets falling off his head. He was the most dangerous charmer in Athens. Instead of praising love he praises Socrates. He tells the room how he once tried to seduce him and got a night of philosophy and nothing else.\n\nThe man was worth the interruption. Alcibiades would soon talk Athens into the ruinous invasion of Sicily, then defect to Sparta when the city turned on him, then to Persia, then home again, wanted everywhere and trusted nowhere. On this night he is only the loudest guest at a good party.\n\nPlato ends it as a comedy of endurance. More revelers crash in, the drinking turns general, and the speech makers drop off one by one. Near dawn only three are still awake: Socrates is pressing a sleepy Agathon and the comic poet Aristophanes to admit that the same man ought to be able to write both tragedy and comedy. They nod off before conceding. Then Socrates gets up, washes, and goes about his ordinary day as if he had slept, the last man standing after a night that broke everyone younger than him. Anselm Feuerbach painted the scene twice. This is the first version, nearly 20 feet wide, finished in 1869 and now in Karlsruhe. He put the drunk Alcibiades and his torch bearers pouring in from the left, and Agathon in white waiting to receive them. On the floor at the foot of a couch he painted a small red figure wine jar.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: '416 BC',
  historicalYear: -416,
  historicalMonthDay: null,
  artTitle: 'Plato’s Symposium',
  artCredit: 'Anselm Feuerbach, 1869',
  imageUrl: bucketPainting('scenes/the-last-guest-to-arrive.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-last-guest-to-arrive.jpg'),
  details: [
    {
      id: 'the-revel',
      x: 0.06,
      y: 0.28,
      scale: 2.4,
      caption:
        'Alcibiades comes in half naked under a crown of ivy, with a woman’s arm around him. Torches and a drum are behind them. In Plato’s account he arrives too drunk to stand and then praises Socrates instead of love.',
    },
    {
      id: 'agathon-crowned',
      x: 0.5,
      y: 0.42,
      scale: 2.4,
      caption:
        'Agathon is in white with a gold wreath and a cup. He looks toward the noise coming in from the left. The party was for his first win as a playwright at the Lenaia festival of 416 BC.',
    },
    {
      id: 'the-couches',
      x: 0.78,
      y: 0.5,
      scale: 2.6,
      caption:
        'Bearded guests lie along the couches. One bald old man leans in on the table with his hands clasped. Socrates outlasted every one of them and walked out at dawn to his ordinary day.',
    },
  ],
} satisfies MockSceneDef;

export const theLampAtNoon = {
  slug: 'the-lamp-at-noon',
  title: 'The Lamp at Noon',
  dek: 'A philosopher lives in a jar, lights a lamp in daylight, and tells a king to move',
  story:
    'Diogenes of Sinope lit a lamp in broad daylight, carried it through the crowded market, and told anyone who asked that he was looking for a human being. He did not find many. He had come to Greece as an exile. Back in Sinope, on the Black Sea, he or his father had been in charge of the coinage and had defaced it, struck the metal out of true. He took the phrase for that, deface the currency, as his life’s program: he would knock every false custom out of true the same way. He owned a cloak, a stick, and a bag, slept in a large storage jar, a pithos, and threw away his one wooden bowl when he saw a boy drinking from cupped hands.\n\nHe made rudeness into a philosophy. He ate and did worse in the marketplace on principle, arguing that nothing natural could be shameful. He called himself a dog, and the school that grew from him got the name Cynic, from kynikos, doglike. When Plato defined a human being as a featherless biped and won applause, Diogenes plucked a chicken and threw it over the wall of the Academy: here is Plato’s man. Asked where he came from, he is supposed to have said he was a citizen of the world, which was a new idea and his coinage too.\n\nThe famous meeting came at Corinth, most likely in 336 BC, when the Greek states gathered to make the young Alexander their war leader against Persia and the whole political class came to flatter him. Alexander went to find the philosopher instead, and found him lying in the sun. He offered to grant anything Diogenes wanted. Stand a little out of my sun, Diogenes said, that is all. Plutarch says the courtiers laughed, and that Alexander, riding off, told them that if he were not Alexander he would want to be Diogenes.\n\nThey are said to have died on the same day, in 323, Alexander of fever in Babylon and Diogenes at Corinth in old age. The cause was a held breath, or a dog bite, or a raw octopus. The stories vary, and he would have preferred that they did. Jean-Léon Gérôme painted him here in 1860, in the jar, working on the lamp, ringed by stray dogs. Behind him the citadel of Corinth stands up out of the haze. Gérôme signed it as though the letters were cut into the stone wall above the jar: J.L. GEROME MDCCCLX.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 336 BC',
  historicalYear: -336,
  historicalMonthDay: null,
  artTitle: 'Diogenes',
  artCredit: 'Jean-Léon Gérôme, 1860',
  imageUrl: bucketPainting('scenes/the-lamp-at-noon.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-lamp-at-noon.jpg'),
  details: [
    {
      id: 'the-lamp',
      x: 0.3,
      y: 0.5,
      scale: 2.6,
      caption:
        'Diogenes reaches into the lantern with the flame already burning inside it. He carried it through the market in broad daylight and told anyone who asked that he was looking for a human being.',
    },
    {
      id: 'the-philosopher',
      x: 0.24,
      y: 0.4,
      scale: 2.0,
      caption:
        'Diogenes lived in a pithos, a clay storage jar big enough to lie down in. A dark cloak and a bag hang from a stick across the mouth of the jar. That was most of what he owned.',
    },
    {
      id: 'the-dogs',
      x: 0.72,
      y: 0.62,
      scale: 2.6,
      caption:
        'Four strays sit on the pavement at the mouth of the jar. Diogenes called himself a dog. His followers got the name Cynic, from the Greek word for doglike.',
    },
  ],
} satisfies MockSceneDef;

export const aBattleUnderTheWholeSky = {
  slug: 'a-battle-under-the-whole-sky',
  title: 'A Battle Under the Whole Sky',
  dek: 'Alexander breaks the Persian king, and a German paints it from somewhere near the moon',
  story:
    'The plain at Issus, on the coast of what is now southern Turkey, was too cramped for the Persians to use their numbers. Alexander caught the Persian king Darius III there in November 333 BC. Darius had swung in behind the Macedonians and cut their supply line, which felt clever until the armies met between the mountains and the sea and there was no room to spread. Alexander drove his cavalry straight at the king’s station in the center. Darius turned his chariot and ran, and the run became the rout of the whole army; his mother, wife, and children were taken in the baggage. It was the second of the three great battles that handed Alexander the largest empire the world had yet seen, and he was 23.\n\nThe painting is the other half of the story, and it is stranger than the battle. Albrecht Altdorfer finished it in 1529 for Duke William IV of Bavaria, and he painted the field from an impossible height, as if the viewer hung in the sky. The armies below are thousands of small separate men, lances standing up like a wheat field. Above them the earth curves away past mountains and bays to a sun going down in a burning sky, a whole hemisphere in one frame. A Latin plaque hangs from the clouds on a cord, naming Alexander and counting the Persian dead. The year matters: as Altdorfer worked, the Ottoman army of Suleiman was marching up the Danube, and in the autumn of 1529 it laid siege to Vienna. His ancient Persians wear sixteenth-century Turkish turbans. He was painting the news.\n\nThe geography is a map more than a memory. The water winding into the distance is meant for the eastern Mediterranean, the Nile mouths, Cyprus and the Red Sea. It is the shape of the known world seen from above, two centuries before anyone could rise to look. Altdorfer ran the city of Regensburg as a councilman and turned down the office of mayor to keep painting. This is the picture he wanted the time for.\n\nIt found one more famous admirer. When Napoleon’s men stripped the Bavarian collections around 1800, he kept this one for himself. Prussian troops took the château of Saint-Cloud in 1814 and found the Battle of Issus hanging in the emperor’s bathroom. He too thought he was Alexander. The picture went back to Munich in 1815, where it hangs now, still showing a battle seen from a window in the sky.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'November, 333 BC',
  historicalYear: -333,
  historicalMonthDay: null,
  artTitle: 'The Battle of Alexander at Issus',
  artCredit: 'Albrecht Altdorfer, 1529',
  imageUrl: bucketPainting('scenes/a-battle-under-the-whole-sky.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-battle-under-the-whole-sky.jpg'),
  details: [
    {
      id: 'the-sun',
      x: 0.84,
      y: 0.31,
      scale: 2.4,
      caption:
        'The sun drops into a spiral of cloud above a mountain range and a flat sheet of water. Altdorfer painted this in 1529, two centuries before a balloon lifted anyone high enough to look down at it.',
    },
    {
      id: 'the-mapped-world',
      x: 0.56,
      y: 0.4,
      scale: 2.4,
      caption:
        'A cord and an iron ring hang down over a bay full of tiny ships, with a walled town on the crag at the left. Altdorfer meant this water for the eastern Mediterranean and the mouths of the Nile.',
    },
    {
      id: 'the-numberless-army',
      x: 0.45,
      y: 0.72,
      scale: 2.6,
      caption:
        'Thousands of separate soldiers under a forest of lances and banners, each one painted in. Altdorfer put his ancient Persians in Turkish turbans, in the year the Ottoman army marched on Vienna.',
    },
  ],
} satisfies MockSceneDef;

export const toTheStrongest = {
  slug: 'to-the-strongest',
  title: 'To the Strongest',
  dek: 'The king burns with fever in Babylon while the diary keeps the hours and the army files past',
  story:
    'In late May of 323 BC, in the palace at Babylon, Alexander drank late at a friend’s party, and a few days later the fever started. He was 32 and had not lost a battle. The court kept a day-book, the Royal Diaries, and its entries on the illness survive at second hand through later writers. They read like a chart: the king bathed, sacrificed, ate a little, lay in the bathhouse because it was cooler, played dice, listened to his officers. Each day the fever was worse and he said less. Doctors could do nothing. Toward the end he could not speak at all.\n\nThe army would not accept a rumor. Thousands of Macedonian soldiers pressed at the palace demanding to see him alive. Rather than turn them away, his officers opened the doors and let the whole army file through the bedroom, one man at a time. He could no longer talk. Arrian says he greeted each of them with his eyes, or by lifting his head a little, as they passed the bed in silence. When they asked who should have the empire, the surviving accounts give the answer as to the strongest. The Greek for that sounds much like the name of Krateros, one of his generals, who was not in the room. He may have been naming a man rather than starting a civil war. He may also have been too weak to say anything at all, and the line was supplied for him later. He died on 11 June, in the late afternoon. Modern scholars fixed the date from Babylonian astronomical tablets that log the same days.\n\nThere was no strongest, so there were the wars of the strongest, 40 years of his generals carving the world up between them. The body became a prize in that fight. A grand funeral cart was built to carry him back toward Macedonia. On the road Ptolemy, who had taken Egypt, seized the procession and turned the body south to Memphis, and later to Alexandria. He kept the dead king as the seal on his claim. His tomb was a tourist site for centuries, visited by Roman emperors, and then it was lost, and it is lost still.\n\nThe deathbed here is Karl von Piloty’s. He died in 1886 with it still unfinished, the last of a long line of big history canvases he built like stage sets. Alexander lies white under white cloth. The officers crowd in with their armor and their grief, and a veiled woman stands over him with her hand on the covers. On the floor near the front a young soldier kneels among helmets and an overturned wine jar and does not look up. The room is already dividing the estate.',
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'June, 323 BC',
  historicalYear: -323,
  historicalMonthDay: toMonthDay('06-11'),
  artTitle: 'The Death of Alexander the Great',
  artCredit: 'Karl von Piloty, c. 1886',
  imageUrl: bucketPainting('scenes/to-the-strongest.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/to-the-strongest.jpg'),
  details: [
    {
      id: 'the-dying-king',
      x: 0.7,
      y: 0.3,
      scale: 2.6,
      caption:
        'Alexander is propped on the couch with his eyes open and no voice left. A veiled woman stands over him with her hand on the covers. The court day-book logged the last days flatly: bathed, sacrificed, played dice, worse each night.',
    },
    {
      id: 'the-army',
      x: 0.24,
      y: 0.4,
      scale: 2.6,
      caption:
        'Officers in gilded armor push forward among the bald and grey veterans behind them. The ranks refused to believe he was alive, so the whole army was let past the bed one man at a time.',
    },
    {
      id: 'the-abandoned-arms',
      x: 0.58,
      y: 0.58,
      scale: 2.4,
      caption:
        'A young officer kneels with his face in his hand. Helmets are set down around him, and a jug lies tipped over beside them. Within days the generals began 40 years of war over the empire Alexander left to no one.',
    },
  ],
} satisfies MockSceneDef;

export const theWomanOnTheTripod = {
  slug: 'the-woman-on-the-tripod',
  title: 'The Woman on the Tripod',
  dek: 'The only voice in Greece that armies obeyed belonged to a local woman',
  story:
    "For something like a thousand years, states did not go to war, found colonies, or change their laws without asking a woman sitting on a three-legged stool at Delphi. The Pythia was not an aristocrat or a trained priestess. She was picked from the local women of the town, sometimes a farmer's wife. Once installed she gave up her old life and her own name. On the seventh day of the month, nine months a year, she washed at the Castalian spring and went down into the inner chamber of Apollo's temple. There she sat over a crack in the floor, holding laurel and a bowl of spring water, and answered.\n\nThe answers were famously slippery, and the most quoted ones are the ones that ruined the people who received them. Croesus of Lydia was told that if he crossed the river Halys he would destroy a great empire, which he did: his own. Athens, facing the Persian invasion, was told to trust in a wooden wall, and spent an anxious week arguing about whether that meant a fence or a fleet. Two mottoes were cut into the forecourt of the temple: know yourself, and nothing in excess. That is not mysticism. It is advice from someone who has watched a lot of powerful men make the same mistake.\n\nAncient writers said a sweet-smelling vapor rose from the chasm and put the Pythia into her state. For most of the twentieth century scholars called that fiction, because the French excavators had found no chasm. Then in the 1990s a geologist and an archaeologist worked the site together. They found two faults crossing directly beneath the temple, tarry limestone under them, and traces of ethylene and methane in the spring water. Ethylene smells sweet and makes people light-headed. It was coming up exactly where Plutarch said it did, and Plutarch had been a priest at Delphi.\n\nPlutarch also recorded the ugly day. A Pythia was pushed to prophesy on a bad date to suit important visitors. She went in unwilling and came out screaming in a voice the priests called harsh. She threw herself at the door, the delegation ran, and she died within days. Collier painted her in 1891 with her eyes half shut, the vapor coming up around the tripod's gilded feet, and one bare foot resting on the frame of the stool. The Earl of Kintore gave the painting to the Art Gallery of South Australia in 1893, and it has hung in Adelaide ever since.",
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 500 BC',
  historicalYear: -500,
  historicalMonthDay: null,
  artTitle: 'Priestess of Delphi',
  artCredit: 'John Collier, 1891',
  imageUrl: bucketPainting('scenes/the-woman-on-the-tripod.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-woman-on-the-tripod.jpg'),
  details: [
    {
      id: 'the-vapor',
      x: 0.52,
      y: 0.88,
      scale: 2.2,
      caption:
        'Vapor rises between the gilded claw feet of the tripod, the three-legged stand she sat on. In the 1990s geologists found two faults and traces of the gas ethylene under the temple. That is roughly what Plutarch had said.',
    },
    {
      id: 'the-laurel',
      x: 0.5,
      y: 0.45,
      scale: 2.2,
      caption:
        'She holds a bowl of spring water in one hand and a laurel branch in the other. Those were the two things she held while she answered.',
    },
    {
      id: 'the-face',
      x: 0.45,
      y: 0.18,
      scale: 2.4,
      caption:
        'Her eyes are half shut under a red hood. She was a local woman, often a farmer’s wife. She gave up her own name when she took the stool.',
    },
  ],
} satisfies MockSceneDef;

export const theDefenseThatWasNotSpoken = {
  slug: 'the-defense-that-was-not-spoken',
  title: 'The Defense That Was Not Spoken',
  dek: 'A capital trial ends when the defense counsel pulls off a robe',
  story:
    "Phryne was the most famous courtesan in fourth-century Athens, and the most famous body in Greece. Praxiteles used her as the model for the Aphrodite of Knidos, the first life-sized female nude in Greek sculpture. People took sea voyages to look at it. She was charged with impiety, a capital offense. The ancient accounts say the charge involved profaning the Eleusinian mysteries, and that the private history behind it was a rejected suitor. Her defense was conducted by the orator Hypereides, one of the best in Athens, who was also her lover.\n\nThe speech was going badly. So Hypereides brought her into the middle of the court and tore open her robe. Then he asked the jury whether they really meant to condemn a priestess and servant of Aphrodite. The source for all of this is Athenaeus, writing some five centuries later. They acquitted her, and the sources differ on whether the reason was religious awe or straightforward superstition about destroying something that beautiful. Some tellings have him baring only her breast. The story is late and probably grew in the telling. What it gets right is what an Athenian court was: a large crowd of ordinary men who could be moved by a stunt.\n\nPhryne got rich enough afterward to make the offer that says the most about her. When Alexander destroyed Thebes in 335 BC, she offered to pay for rebuilding the city walls. She had one condition: an inscription saying that Alexander knocked them down and Phryne the courtesan put them back up. Thebes declined.\n\nGérôme painted the scene in 1861 and turned it into the year's scandal. The jurors are packed along the right in red, every face doing a different version of shock. One is on his feet with both hands up. Others hold their palms out flat, as if that would help. Hypereides holds up the blue cloak like a man completing a card trick. Phryne is the only pale upright shape in the picture. She has covered her own face with her arm, so the one person in the room not looking at her is her. Critics accused Gérôme of selling a nude with a classical alibi. His title puts the trial in front of the Areopagus, though the ancient accounts never say which court tried her. The painting is in Hamburg, and the alibi has held up for 165 years.",
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 350 BC',
  historicalYear: -350,
  historicalMonthDay: null,
  artTitle: 'Phryne Before the Areopagus',
  artCredit: 'Jean-Léon Gérôme, 1861',
  imageUrl: bucketPainting('scenes/the-defense-that-was-not-spoken.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-defense-that-was-not-spoken.jpg'),
  details: [
    {
      id: 'the-arm',
      x: 0.37,
      y: 0.58,
      scale: 2.6,
      caption:
        'Phryne hides her own face behind her arm, so the one person in the room not looking at her is the defendant. Gérôme had Nadar photograph the model, Marie-Christine Leroux, and worked from the prints.',
    },
    {
      id: 'the-jury',
      x: 0.75,
      y: 0.5,
      scale: 2.0,
      caption:
        'Jurors in red packed along the right side of the room, with a gilt Athena on a stand in front of them. Every face is doing something different, and they voted to acquit.',
    },
    {
      id: 'the-cloak',
      x: 0.165,
      y: 0.575,
      scale: 2.6,
      caption:
        'Hypereides holds the robe up like a man finishing a card trick. His speech had been going badly.',
    },
  ],
} satisfies MockSceneDef;

export const theSpeechOverTheFirstDead = {
  slug: 'the-speech-over-the-first-dead',
  title: 'The Speech Over the First Dead',
  dek: 'Athens buries one winter of war and hears what it thinks of itself',
  story:
    "The custom was fixed. At the end of a year of fighting, the bones of the Athenian dead were laid out for three days in a tent so families could bring offerings. Then they were carried out on ten cypress coffins, one for each tribe, with an empty bier for the missing. Anyone could join the procession. They were buried in the public cemetery outside the Dipylon gate, and then a man chosen by the city spoke. In the winter of 431 BC, after the first season of the war against Sparta, the man chosen was Pericles.\n\nThe speech we have is Thucydides', who says openly in his own history that he wrote what the occasion required rather than a transcript. It is still the founding statement of what a democracy thinks it is. Our constitution is called a democracy, Pericles says, because power rests with the whole people and not a minority. Poverty is no bar to public service. We do not get angry at a neighbor for doing as he likes. Then the harder line, the one that gives the passage its edge: we regard the man who takes no part in public affairs not as harmless but as useless. To the widows he offered exactly one sentence, that a woman's greatest glory is to be least talked about among men, which is also a fair record of what that democracy was.\n\nThe timing turned the speech into something its author never intended. Within months plague arrived in the crowded city, killed perhaps a third of the population, and took Pericles himself in 429. The war whose first year he was burying ran 27 years. It ended with Athens beaten and the fleet gone. The long walls came down to the sound of flute girls, and the victors called that the first day of the freedom of Greece.\n\nPhilipp Foltz painted the scene in 1852. What travelled afterwards was a photograph of it, printed in grey, and that grey print is the version almost everyone has seen since. Pericles stands on a stone platform with one arm out and the helmet pushed back off his forehead. Below him the crowd is not all listening: some argue, and one has his eyes shut.",
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'Winter, 431 BC',
  historicalYear: -431,
  historicalMonthDay: null,
  artCredit: "Philipp Foltz, Pericles' Funeral Oration, 1852",
  imageUrl: bucketPainting('scenes/the-speech-over-the-first-dead.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-speech-over-the-first-dead.jpg'),
  details: [
    {
      id: 'the-speaker',
      x: 0.63,
      y: 0.35,
      scale: 2.2,
      caption:
        'Pericles has one arm out and his helmet pushed back off his forehead. Thucydides admits in his own history that he wrote the words the occasion required.',
    },
    {
      id: 'the-sleeper',
      x: 0.82,
      y: 0.45,
      scale: 2.2,
      caption:
        'The young man in the flower wreath has his eyes shut while Pericles is still talking. Behind him a bald man rests his chin on his fist.',
    },
    {
      id: 'the-acropolis',
      x: 0.26,
      y: 0.24,
      scale: 2.2,
      caption:
        'The Parthenon on the right was finished the year before this funeral. The huge bronze Athena stands on her pedestal. Athens lost the war 27 years later and had to pull down its long walls.',
    },
  ],
} satisfies MockSceneDef;

export const theKnotAndTheSword = {
  slug: 'the-knot-and-the-sword',
  title: 'The Knot and the Sword',
  dek: 'At 22, Alexander finds the shortcut and keeps walking east',
  story:
    "In the spring of 333 BC the Macedonian army came through Gordium, the old Phrygian capital in the middle of Anatolia, and Alexander went to look at the wagon. The local story said it had belonged to Gordias, a peasant whose ox cart rolled into the city on the day an oracle promised the next king. His son Midas gave the cart to the gods. Its yoke was lashed to the pole with a knot of cornel bark, tied so tightly into itself that nobody could find the ends. The prophecy attached to it said whoever undid the knot would rule Asia.\n\nHe was 22, had crossed into Asia the previous year with an army he could not afford, and had just recovered from an illness at Tarsus that nearly killed him. He worked at the knot for a while. Then, in the version everybody knows, he drew his sword and cut it, and Alexander cutting the Gordian knot has meant impatience with false problems in every European language since. There is a second version, and its source is better. Aristobulus, an engineer who was on the campaign, said Alexander pulled the wooden pin out of the pole. That released the yoke and let the whole thing come apart with the knot still tied. The dull explanation comes from the man who was there, and the memorable one comes from writers who were not, which is the usual arrangement.\n\nEither way the oracle paid out. He beat Darius at Issus that November and spent the next two years taking the Persian coast. By 330 BC the empire was his. He died at 32 ruling from Greece to the Punjab. His generals then fought over the wreck, and what they carved out of it set the shape of the eastern Mediterranean for 300 years.\n\nBerthélemy painted it in 1767 in the full French academic manner: torchlight, a temple interior, priests recoiling, Alexander in a blue cloak with the blade already up. He won the Prix de Rome the same year, the state prize that paid for French painters to study in Rome. The canvas hangs at the École des Beaux-Arts in Paris. The detail he gets right is the audience. Alexander's own officers are watching, and their faces are the faces of men who have just realized what kind of career they have joined.",
  eraId: toEraId('classical-greece'),
  historicalDateLabel: '333 BC',
  historicalYear: -333,
  historicalMonthDay: null,
  artTitle: 'Alexander Cuts the Gordian Knot',
  artCredit: 'Jean-Simon Berthélemy, 1767',
  imageUrl: bucketPainting('scenes/the-knot-and-the-sword.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-knot-and-the-sword.jpg'),
  details: [
    {
      id: 'the-blade',
      x: 0.38,
      y: 0.32,
      scale: 2.4,
      caption:
        'Alexander already has the sword up. Aristobulus was an engineer on the campaign, and he said Alexander pulled the pin out of the cart pole instead. Almost nobody repeats that version.',
    },
    {
      id: 'the-knot',
      x: 0.6,
      y: 0.53,
      scale: 3.2,
      caption:
        'A braided cord lashes the yoke. A soldier in a gilded helmet reaches past it. The cart underneath belonged to a peasant, and a prophecy said whoever undid the knot would rule Asia.',
    },
    {
      id: 'the-priests',
      x: 0.21,
      y: 0.48,
      scale: 2.4,
      caption:
        'The old priest tips back from the smoking altar. Alexander’s hand and blade are at the right, and below the priest a boy puts out an open hand.',
    },
  ],
} satisfies MockSceneDef;

export const theTutorAndTheBlindMan = {
  slug: 'the-tutor-and-the-blind-man',
  title: 'The Tutor and the Blind Man',
  dek: 'A philosopher weighs a gold chain against a stone head',
  story:
    "Aristotle spent three years as tutor to the teenage son of Philip of Macedon, and the pupil turned into Alexander. The relationship stayed useful in both directions. Alexander sent back animal and plant specimens from Asia. Aristotle's nephew Callisthenes travelled with the expedition as its official historian, until he objected to the king's new Persian court ritual, and was arrested and died in custody. Being the great man's teacher was not a safe posting.\n\nRembrandt's painting sets the whole arrangement out as an argument between two objects. The philosopher rests his right hand on a bust of Homer, the poet who was blind and poor and left nothing but words. His left hand touches the heavy gold chain across his chest, and the medallion hanging from it carries a portrait of Alexander: the honor a patron gives, the reward for teaching a king. The face between them is doing arithmetic that the picture declines to finish. The light falls on the sleeve, the chain and the stone forehead, and everything else in the room stays in the dark.\n\nThe commission has its own comedy. It came from Don Antonio Ruffo, a Sicilian nobleman in Messina who had never met Rembrandt. He ordered a philosopher sight unseen from a painter at the other end of Europe. When it arrived in 1654 he was pleased enough to order two more. Rembrandt was already sliding toward the collapse that came three years later, when his possessions were inventoried and his house and his collection were sold off. He had spent much of his life buying exactly the kind of costume the sitter is wearing.\n\nThe painting came up at auction in New York in 1961, and the Metropolitan Museum bought it for $2.3 million. That was the highest price anyone had ever paid for a picture, and the news ran on front pages. The museum hung it alone in a gallery, and people queued around the block to look at a picture about whether worldly reward is worth anything. The queue was itself an answer.",
  eraId: toEraId('classical-greece'),
  historicalDateLabel: 'c. 343 BC',
  historicalYear: -343,
  historicalMonthDay: null,
  artTitle: 'Aristotle with a Bust of Homer',
  artCredit: 'Rembrandt van Rijn, 1653',
  imageUrl: bucketPainting('scenes/the-tutor-and-the-blind-man.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-tutor-and-the-blind-man.jpg'),
  details: [
    {
      id: 'the-hand-on-homer',
      x: 0.23,
      y: 0.47,
      scale: 2.4,
      caption:
        'His hand rests on the head of Homer, the poet who was blind and poor and left nothing but words. The light catches the stone brow and the white sleeve.',
    },
    {
      id: 'the-chain',
      x: 0.6,
      y: 0.7,
      scale: 2.6,
      caption:
        'The left hand rests on the heavy gold chain, a ring on the little finger. The medallion hanging off it carries Alexander’s head, which is the pay for teaching a king.',
    },
    {
      id: 'the-face',
      x: 0.55,
      y: 0.3,
      scale: 2.4,
      caption:
        'Aristotle’s face under the wide black hat, eyes down and turned away. Rembrandt was three years from bankruptcy when he painted a man pricing his own career.',
    },
  ],
} satisfies MockSceneDef;
