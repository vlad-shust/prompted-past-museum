import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const nelsonsOcean = {
  slug: 'nelsons-ocean',
  title: "Nelson's Ocean",
  dek: 'Nelson drives 27 ships at the middle of the enemy line and bets an empire on it',
  story:
    'For two years the British fleet has been waiting for this morning. It has blockaded, chased the enemy across the Atlantic to the West Indies and back, and worn its ships ragged keeping 33 French and Spanish sail bottled up in Cádiz. Two days ago they came out. Now, off Cape Trafalgar, the wind has nearly died: the fleets close at a walking pace, and there is time, too much time, for everything. The crews eat an early dinner. Men write wills on gun carriages and pin them to the mast for the purser. On several ships the bands play. Everyone from admiral to powder boy can do the arithmetic of what is coming.\n\nThe textbook says a fleet fights in a line, broadside to broadside, until arithmetic decides. Nelson has read the textbook and intends to burn it. Weeks ago, over dinner, he explained the plan to his captains and watched some of them weep at the boldness of it. He called it, without modesty, the Nelson touch. He splits 27 ships into two columns and aims them like spears at the middle of the enemy line. Bows exposed, guns silent, most of an hour of approach under full fire with no way to answer. He wants the signal to say that England confides that every man will do his duty. Confides is not in the flag code and expects is, so expects it becomes. Collingwood, leading the second column, is first into the fire, and says to his flag captain: what would Nelson give to be here.\n\nThen Victory breaks the line, firing a double-shotted broadside through the stern windows of the French flagship as she passes. The battle becomes what he wanted: a brawl at pistol range, hulls grinding, where British gun crews reload twice as fast. At a quarter past one, a musketeer in the fighting top of the Redoutable, 50 feet away, finds the small figure with four stars on his coat. The ball goes through shoulder and spine. Nelson is carried down to the dark of the orlop deck with a handkerchief spread over his face so the gun crews will not see who it is. He lives three more hours, long enough to hear the cheers rolling through the ship as each enemy strikes her colors. By the end of the afternoon 17 have struck, and not one British ship is lost. Kiss me, Hardy, he says to his captain, and then: thank God I have done my duty.\n\nThe sea gives nothing away for free. That night a storm comes up off the cape and wrecks most of the captured prizes against the Spanish shore. Collingwood, now in command, spends the gale sending boats to pull enemy sailors out of the water they had been shooting across at midday. Victory comes home under jury rig with her admiral below decks, preserved in a cask of spirits for the state funeral London is already planning. The fleet he built fought exactly one more general action in the next hundred years, because nobody cared to try again. The ocean is England’s for a century.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '21 October 1805',
  historicalYear: 1805,
  historicalMonthDay: toMonthDay('10-21'),
  artCredit: 'J. M. W. Turner, The Battle of Trafalgar, 1822–1824',
  imageUrl: bucketPainting('scenes/nelsons-ocean.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/nelsons-ocean.jpg'),
  details: [
    {
      id: 'signal-flags',
      x: 0.42,
      y: 0.26,
      scale: 2.6,
      caption:
        'Signal flags climb the rear mast of the Victory: England expects that every man will do his duty. The real signal came down before the first broadside, and Turner flew it anyway.',
    },
    {
      id: 'the-water',
      x: 0.42,
      y: 0.83,
      scale: 2.4,
      caption:
        'The Union flag is down in the water with drowning men around it. The boat rowing towards them is already full. The Victory’s gunports run right across the top of the frame.',
    },
    {
      id: 'falling-masts',
      x: 0.76,
      y: 0.42,
      scale: 2.4,
      caption:
        'A French flag is still up at the masthead on the left, and the sails around it are collapsing. Turner packed several separate hours of the battle into this one canvas.',
    },
  ],
} satisfies MockSceneDef;

export const theCannonShot = {
  slug: 'the-cannon-shot',
  title: 'The Cannon Shot',
  dek: 'A warship burns money into a calm afternoon, and the smoke sits for its portrait',
  story:
    "There is no battle. A Dutch warship has fired a single gun into a windless afternoon, a salute or a signal, powder burned for ceremony on a sea too calm to sail. The sound has already gone. What Van de Velde paints is the second afterward: sails hanging slack, a boat pulling away, and the smoke rolling off across water flat enough to hold the ship's reflection. Marine painters usually sold storms. Van de Velde knew the scarier boast was calm: a warship with two decks of guns and nothing to do, and a state rich enough to fire them at nothing. Powder was real money by the barrel, and salutes were budgeted like diplomacy, which is what they were.\n\nThe state was seven small provinces behind a dike, and in the 1600s it ran, by contemporary reckoning, more merchant shipping than the rest of Europe together. Everything the Dutch Republic was floated: its grain, its spices, its credit, and its safety, which is why its war fleet mattered enough to have official artists. The Van de Veldes, father and son, were the firm. The father followed the battles in person in a small galliot, rowing between fleets under fire with a sketchbook, taking notes like a correspondent. The son turned the notes into oil. Between them they fixed how the age of sail would be remembered: the towering stern, the weather, the exact set of canvas, all of it accurate enough that historians still read their pictures like documents.\n\nAt the battle of Solebay in 1672 the father worked from a hired galliot. He held position between two fleets that were trying to sink each other, drawing hull by hull while the shot went overhead. His sketchbooks survive, with the smoke noted in pencil. Clients could order their own ship into a painting the way a later age ordered portraits: the flags, the pennant numbers, the carved stern all correct, verified against the sitter. The calms the son loved were also the honest weather for that kind of accuracy. Nothing hides in a calm. Every spar and every vanity is on parade, doubled in the water underneath it.\n\nThe ship gets painted from the stern quarter because the stern was the point. Carved, gilded and glassed, a seventeenth-century warship's stern was the state's face worn abroad, a floating credit rating. The gun that fired was part of the same language: salutes were counted, answered and argued over in treaties, honor measured out in gunpowder. Nations at sea spoke to each other in controlled explosions, and everyone understood the grammar.\n\nThen the firm changed flags. In 1672, the Republic's disaster year, France invaded and the market collapsed. The two greatest marine painters alive moved to London. Charles II, whose navy they had spent two wars documenting from the other side, gave them a studio in Greenwich and 100 pounds a year each. The royal warrant survives and splits the work like an invoice: the father paid for taking and making draughts of sea fights, the son for putting the said draughts into colours. They went on painting Dutch victories and English ones with the same brushes. The Cannon Shot hangs in Amsterdam now, left to the city by a collector and lent to the Rijksmuseum: one gun, no enemy, and the smoke taking its time.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: 'c. 1680',
  historicalYear: 1680,
  historicalMonthDay: null,
  artCredit: 'Willem van de Velde the Younger, c. 1680',
  imageUrl: bucketPainting('scenes/the-cannon-shot.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-cannon-shot.jpg'),
  details: [
    {
      id: 'the-smoke',
      x: 0.45,
      y: 0.7,
      scale: 2.2,
      caption:
        "One gun has gone off. Its smoke is already wider than the ship that fired it, and there is no wind to take it away.",
    },
    {
      id: 'the-stern',
      x: 0.72,
      y: 0.68,
      scale: 2.4,
      caption:
        'The stern is carved and gilded from the rail down to the water, and sailors line the rail above the open gunports. A Dutch warship\'s stern was the country\'s face abroad, and it was built to look expensive.',
    },
    {
      id: 'the-rowboat',
      x: 0.17,
      y: 0.79,
      scale: 2.6,
      caption:
        'A ship\'s boat pulls across water with no wind in it, the crew bent at the oars and one man standing in the stern with his arm up. Another Dutch ship lies behind them with her sails down.',
    },
  ],
} satisfies MockSceneDef;

export const theLastTow = {
  slug: 'the-last-tow',
  title: 'The Last Tow',
  dek: 'A smoking kettle hauls Trafalgar to the scrapyard at sunset',
  story:
    "The Navy sold her for the value of her materials: 5,530 pounds, payable by Mr Beatson, ship-breaker, of Rotherhithe. In the first week of September 1838 the Temeraire, 98 guns, veteran of Trafalgar, left Sheerness at the end of a rope. Two steam tugs hauled her up the Thames to the breaker's yard over two days. She had no masts; they had been taken out long before, with the guns and everything else the service could reuse. What went upriver was a hulk, a huge emptied barrel of oak that 33 years earlier had been the most famous ship in England after the Victory herself.\n\nAt Trafalgar she had been next astern of Nelson's flagship. When the Victory was being shot to pieces, the Temeraire ranged up and took the enemy's fire onto herself. She ended the afternoon lashed between two captured French ships, one on each side. The newspapers made her the Fighting Temeraire and the name stuck for three decades. She went through blockade duty, prison-ship duty and receiving-ship duty, the long unglamorous old age of wooden warships, until the Admiralty's arithmetic caught up with her. Old oak had a market. Ships of the line went into house beams, furniture and church pews, and the Temeraire went the way of all of them.\n\nTurner turned the accounting into a funeral. Whether he actually watched the tow is doubtful, whatever he let people believe. The picture is built from licenses. He put the masts back and crossed the yards, and dressed the hull in ghost-white and gold. He moved the sunset to where the drama needed it and set a thin moon rising above the ship. The one thing he painted with brute honesty is the tug: squat, black, iron, its funnel coughing fire ahead of the tall ghost behind it. He did not caricature it. It is simply the future, small and hot and effective, and it is in front.\n\nThe yard did its work and the ship dispersed into England. Beatson broke her up over two years, and her oak went where old warship oak went, into beams and furniture and souvenirs. A church a short walk from the yard still keeps an altar table and two chairs made from her timbers, Trafalgar oak doing parish duty. The painting's fortunes ran the other way. At the Academy it was surrounded from the first morning. Thackeray called it as grand a painting as ever figured on the walls of any academy. The little demon of a steamer, he told his readers, belonged to the poem as much as the ghost behind it. Turner was 64. He never painted a subject the public loved more, and he knew it, which is why no sum on earth could pry it loose.\n\nIn 1839 he hung it with a borrowed line of verse: the flag that braved the battle and the breeze owns her no more. Turner called it his darling, refused every offer to buy, and left it to the nation with the rest of his hoard when he died. The nation eventually put the painting on the 20-pound note, the painter beside his ship. In the picture's right corner, easy to miss, a dark buoy floats where the channel bends toward Rotherhithe, marking the way to the yard. The moon is already up.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '5 September 1838',
  historicalYear: 1838,
  historicalMonthDay: toMonthDay('09-05'),
  artTitle: 'The Fighting Temeraire, tugged to her last berth to be broken up, 1838',
  artCredit: 'J. M. W. Turner, 1839',
  imageUrl: bucketPainting('scenes/the-last-tow.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-last-tow.jpg'),
  details: [
    {
      id: 'the-tug',
      x: 0.3,
      y: 0.64,
      scale: 2.6,
      caption:
        'The tug is black and low, with fire showing at the top of its funnel. Turner put the machine in front of the ship it is dragging away to be broken up.',
    },
    {
      id: 'the-sun',
      x: 0.79,
      y: 0.66,
      scale: 2.4,
      caption:
        'The sun is going down behind the Temeraire. She is being towed west up the Thames, so the light is in the wrong place. Turner moved it where the picture needed it.',
    },
    {
      id: 'the-moon',
      x: 0.162,
      y: 0.315,
      scale: 3.0,
      caption:
        'A thin crescent moon is already up over the Temeraire\'s masts. Turner put those masts back. The real ship went up the river stripped of everything.',
    },
  ],
} satisfies MockSceneDef;
export const modernDress = {
  slug: 'modern-dress',
  title: 'Modern Dress',
  dek: 'A general dies winning Quebec, and the painter refuses to put him in a toga',
  story:
    'On the morning of 13 September 1759, James Wolfe had 32 years behind him and a few hours ahead. In the dark his army had climbed a goat path up the cliffs above Quebec, hauling itself hand over hand to the flat farmland the French thought no one could reach. By dawn about 4,500 redcoats stood in line on the Plains of Abraham with their backs to the river. The French came out to meet them and fired too soon, at too great a range. Wolfe’s men waited, muskets double-shotted, until the enemy was 40 paces off, then fired one volley so exact that a British officer called it a single cannon going off. The French line broke inside a quarter of an hour. In that quarter of an hour Wolfe was hit three times: the wrist, the body, and finally the chest.\n\nThey carried him to the rear. The story his aides told afterward is that a man came running with the news that the French were fleeing. Wolfe, who had seemed past hearing, roused enough to give an order about cutting off their retreat. Then he said, now God be praised, I will die in peace, and did. His opposite number, the Marquis de Montcalm, took a musket ball through the body in the same battle and died the next morning inside the town he had failed to hold. Two commanders, one field, one day.\n\nBenjamin West, an American painter working in London, painted the death 11 years later on a canvas 7 feet wide, and broke a rule to do it. History paintings dressed their heroes in the robes of ancient Rome; that was what made them noble. Joshua Reynolds himself came to the studio and warned West that soldiers in coats and gaiters would sink the picture. West kept the coats. The men who fought at Quebec, he said, wore the habits of their own time, and the truth of the event was the reason to paint it. George III would not buy the thing at first for exactly that reason, then changed his mind and ordered a copy for himself.\n\nMost of the grieving officers around Wolfe were not actually beside him when he died. West grouped them the way painters had grouped mourners around the dead Christ for 300 years. A soldier reads as a martyr without a word of scripture. The half-naked figure watching from the left, chin on fist, was never at the battle at all. He is an idea of the New World, added for the composition. William Woollett’s engraving of the painting went out by the thousand and made everyone involved rich. Wolfe had been dead for years, and was still winning.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '13 September 1759',
  historicalYear: 1759,
  historicalMonthDay: toMonthDay('09-13'),
  artTitle: 'The Death of General Wolfe',
  artCredit: 'Benjamin West, 1770',
  imageUrl: bucketPainting('scenes/modern-dress.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/modern-dress.jpg'),
  details: [
    {
      id: 'the-dying-general',
      x: 0.5,
      y: 0.47,
      scale: 2.5,
      caption:
        'Wolfe lies white and slack in a ring of officers. One of them presses a cloth to his chest. Most of these men were somewhere else on the field when he died, and West grouped them around him for the picture.',
    },
    {
      id: 'the-watcher',
      x: 0.25,
      y: 0.71,
      scale: 2.6,
      caption:
        'A tattooed man sits with his chin on his fist. A blue blanket covers his legs and a musket rests at his knee. West painted him from the idea of America, not from anyone who was on the field that day.',
    },
    {
      id: 'the-runner',
      x: 0.14,
      y: 0.36,
      scale: 2.8,
      caption:
        'An officer bends forward and points left into the smoke, where the French line is breaking up. A church spire stands behind it. That is Quebec, the town the morning was fought for.',
    },
  ],
} satisfies MockSceneDef;

export const theBotanistsBay = {
  slug: 'the-botanists-bay',
  title: 'The Botanist’s Bay',
  dek: 'Two men with spears bar a beach on the far side of the world',
  story:
    'Two men of the Gweagal stood at the waterline and would not move. It was 29 April 1770, and a ship’s boat from the Endeavour was pulling for a low sandy beach that no European vessel had entered, with James Cook in the stern. The two men shook spears and shouted in a language nobody aboard could read, and they were plainly telling the boat to go back. Cook was a farm labourer’s son from Yorkshire who had taught himself the mathematics of the sea. He had spent months charting New Zealand before turning west into open water on a hunch that a coastline lay there. It did. It also had people on it, and they were saying no.\n\nCook did not want a fight and did not get out of one cleanly either. By his own journal he first fired a musket between the two men to frighten them, and when that failed, fired again with small shot and hit one in the legs. The man ran up the beach, came back with a shield and more darts, and the two of them threw their spears before the sailors’ numbers drove them off into the trees. Nobody died. The English walked up to a cluster of empty bark huts, found children hiding inside, left some beads and cloth as a clumsy peace offering, and took the abandoned spears back to the ship. First contact on that shore lasted an afternoon and began with a shot.\n\nCook had meant to call the place Sting-Ray Harbour, for the rays his men speared in the shallows. He crossed it out. Joseph Banks and Daniel Solander, the two naturalists he carried, came back from the scrub loaded with plants nobody in Europe had ever described. Cook renamed the whole inlet Botany Bay, a bay named for its weeds. By tradition the first man to set foot on the sand was not Cook. It was the midshipman Isaac Smith, his wife’s young cousin, sent over the bow at Cook’s word.\n\nThe painting is a long afterthought. E. Phillips Fox made it in 1902, more than a century on, commissioned when Australia had just become a federation and wanted a founding scene on its walls. So Fox gives it the light of a proud beginning. Cook stands centre in his blue coat, the red ensign snapping overhead, a marine kneeling with his musket. The two Gweagal men are in the picture too, up on the rise at the right, pushed to its edge. The flag and the spears are up at the same moment, at opposite ends of the same canvas.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '29 April 1770',
  historicalYear: 1770,
  historicalMonthDay: toMonthDay('04-29'),
  artTitle: 'Landing of Captain Cook at Botany Bay',
  artCredit: 'E. Phillips Fox, 1902',
  imageUrl: bucketPainting('scenes/the-botanists-bay.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-botanists-bay.jpg'),
  details: [
    {
      id: 'cook-ashore',
      x: 0.44,
      y: 0.46,
      scale: 2.4,
      caption:
        'Cook stands in the middle in a navy coat and white breeches. His right arm is thrown out to hold back the men behind him. He was 41 that day and still only a lieutenant, and the fame was all ahead of him.',
    },
    {
      id: 'the-levelled-musket',
      x: 0.8,
      y: 0.47,
      scale: 2.4,
      caption:
        'A marine in a red coat kneels and lifts his musket. Two Gweagal men stand on the rise ahead of him. One of them already has his spear back over his shoulder.',
    },
    {
      id: 'the-endeavour',
      x: 0.12,
      y: 0.35,
      scale: 3.0,
      caption:
        'The Endeavour lies at anchor with her sails rolled up. A boat full of men pulls for the sand. She had been a Whitby coal ship, and the Navy bought her because she could be run up onto a beach and mended.',
    },
  ],
} satisfies MockSceneDef;

export const castAdrift = {
  slug: 'cast-adrift',
  title: 'Cast Adrift',
  dek: 'A lieutenant, 18 loyal men, and one small boat against 3,600 miles of ocean',
  story:
    'Before dawn on 28 April 1789, in the warm water near the island of Tofua, Fletcher Christian and a handful of armed men walked into the cabin of Lieutenant William Bligh. They tied his hands behind his back and marched him up on deck in his nightshirt. The Bounty was a small ship on a strange errand. She had spent five months at Tahiti gathering breadfruit shoots, more than a thousand young trees potted up in her great cabin. They were to be carried to the West Indies and planted as cheap food for the enslaved people on the plantations there. The crew had lived like kings among the Tahitians for those five months. Three weeks back at sea under Bligh’s tongue had been enough. Christian, by his own later account, said he was in hell.\n\nWhat the mutineers did next was, by the standards of the trade, almost merciful. They did not kill Bligh. They put him over the side into the ship’s launch, a boat 23 feet long, and with him 18 men who would not join the mutiny. The little craft sat so low that a few inches of freeboard stood between the men and the sea. They handed down a quadrant, a compass, a small stock of bread and water and rum, four cutlasses, and no chart of anything. Then they cast off the rope. The Bounty sailed away west with the breadfruit still green in her windows.\n\nWhat followed is one of the hard facts of seamanship. Bligh, whatever kind of man he was to serve under, could navigate. He took the overloaded launch 3,600 nautical miles across open ocean to the Dutch post at Coupang on Timor, a passage of 47 days. He rationed each man to about an ounce of bread and a quarter-pint of water a day, weighing the portions against a pistol ball for a counterweight. He kept a log the whole way. He lost one man, John Norton, stoned to death by islanders at the first landfall on Tofua before the long passage even began. Everyone else he brought in alive.\n\nRobert Dodd engraved the moment within a year, in 1790, while England was still arguing about it, and coloured the print by hand. The Bounty’s gilded stern carries her name across it. The mutineers line the rail, and the launch is already crowded, appealing to a ship that will not turn. The men who kept the Bounty went looking for somewhere the Navy could not reach and found Pitcairn, a rock so badly charted it was 200 miles off its marked position. They burned the ship in the bay. When an American sealer stumbled on the island in 1808, of the mutineers only one was still alive.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '28 April 1789',
  historicalYear: 1789,
  historicalMonthDay: toMonthDay('04-28'),
  artTitle: 'The Mutineers Turning Lieut Bligh Adrift',
  artCredit: 'Robert Dodd, 1790',
  imageUrl: bucketPainting('scenes/cast-adrift.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/cast-adrift.jpg'),
  details: [
    {
      id: 'her-name',
      x: 0.2,
      y: 0.51,
      scale: 3.2,
      caption:
        'The name BOUNTY runs in gold across the stern. Men are still moving in the cabin windows above it. That cabin had been rebuilt as a floating greenhouse for more than 1,000 breadfruit plants bound for the West Indies.',
    },
    {
      id: 'the-launch',
      x: 0.608,
      y: 0.548,
      scale: 3.4,
      caption:
        'The launch is an open boat 23 feet long. It carries Bligh and the 18 men who would not join the mutiny, and they have their arms up and are shouting. Bligh navigated it 3,600 miles to Timor in 47 days.',
    },
    {
      id: 'the-men-who-stayed',
      x: 0.17,
      y: 0.32,
      scale: 3.4,
      caption:
        'Mutineers crowd the stern rail with their muskets up, and one of them leans far out with a pole in both hands. They took the Bounty to Pitcairn and burned her in the bay. The island had been charted 200 miles from its true place.',
    },
  ],
} satisfies MockSceneDef;

export const theNightOrientBurned = {
  slug: 'the-night-orient-burned',
  title: 'The Night L’Orient Burned',
  dek: 'A 120-gun flagship goes up so loud the firing stops on both sides',
  story:
    'The French fleet lay at anchor in Aboukir Bay, off the mouth of the Nile, in a long line close to the shoals. Admiral Brueys thought no attacker would dare pass between his ships and the shore. On the evening of 1 August 1798 Nelson dared. His captains closed in the last of the light and worked out for themselves that where a French ship could swing at anchor, there was water enough to sail. Some of the British ships slid down the inshore side of the enemy line while the rest engaged from seaward. The French were caught between two fires, in the dark, many of their landward guns not even cleared for action. Nelson took a splinter across the forehead early on, a flap of skin dropping over his good eye, and was carried below sure he was dying.\n\nThe centre of the French line was L’Orient, a floating fortress of 120 guns, Brueys’s flagship, bigger than anything in Nelson’s line. Sometime after nine at night she caught fire, probably from paint and oil left on her decks, and the flames climbed her rigging faster than any crew could fight them. Every ship in the bay, French and British alike, understood what was coming and hauled away from her as far as their anchor cables allowed. Around ten o’clock the fire reached her magazine and L’Orient blew up. The blast was heard in Alexandria, more than 10 miles off. For a few minutes after it the guns simply stopped, by more than one account on both sides. Men on every deck were stunned into silence by the size of what they had just seen. Then someone somewhere fired again, and the battle went on.\n\nBrueys was already dead, cut nearly in two by a cannonball and propped up to keep giving orders until he bled out. Aboard the flagship was her captain, Casabianca, and his son, a boy of 12 who had come to sea with his father; both died in the ship. An English poet, Felicia Hemans, would put that boy on the burning deck in a poem schoolchildren recited for a century without knowing his name. Of 13 French ships of the line, 11 were taken or destroyed by morning. Napoleon’s army, landed in Egypt to march on the British in India, was now stranded there with no fleet to carry it home.\n\nThe man who painted the explosion had spent his life making light do tricks. Philip James de Loutherbourg was a stage designer before he was a battle painter, famous in London for the Eidophusikon, a little theatre of moving painted scenes lit from behind to mimic fire and storm. He finished this canvas in 1800 and gave the blast the full apparatus of the stage: the fountain of flame, the rays shooting up, the burning ships gone almost to shadow around it. Down in the right corner he set a knot of exhausted men sprawled on wreckage in the firelight, close enough to touch. The bay was so choked with sunken hulls that some of them still lie there.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '1 August 1798',
  historicalYear: 1798,
  historicalMonthDay: toMonthDay('08-01'),
  artTitle: 'The Battle of the Nile',
  artCredit: 'Philip James de Loutherbourg, 1800',
  imageUrl: bucketPainting('scenes/the-night-orient-burned.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-night-orient-burned.jpg'),
  details: [
    {
      id: 'the-blast',
      x: 0.42,
      y: 0.56,
      scale: 3.0,
      caption:
        'A white core of fire throws debris flat across the bay. This is L’Orient’s powder store going up. The blast was heard in Alexandria, more than 10 miles off.',
    },
    {
      id: 'the-survivors',
      x: 0.78,
      y: 0.8,
      scale: 2.6,
      caption:
        'Exhausted men lie sprawled on wreckage in the firelight. British boats pulled about 70 of L’Orient’s crew alive from the water. Her captain Casabianca and his 12-year-old son were not among them.',
    },
    {
      id: 'a-ship-of-the-line',
      x: 0.14,
      y: 0.66,
      scale: 3.2,
      caption:
        'This is a ship of the line, the biggest sort of warship then afloat. Her carved stern shows 2 rows of windows, and the fire washes her whole side orange. Nelson’s captains found water enough to slip between the French ships and the shore, and caught their line between two fires in the dark.',
    },
  ],
} satisfies MockSceneDef;

export const theRaft = {
  slug: 'the-raft',
  title: 'The Raft',
  dek: 'A raft with 147 people is towed out to sea, then the rope is cut',
  story:
    'On 2 July 1816 the French frigate Méduse drove hard onto a sandbank off the coast of West Africa, in daylight, in calm weather, because the man in command could not do his job. Hugues de Chaumareys had spent most of the previous 20 years ashore as a royalist émigré and had been given a frigate for his politics, not his seamanship. When the ship could not be floated off, there were not enough boats for the 400 aboard. So the crew lashed together a raft from masts and planks, about 60 feet by 23, and put 147 people onto it, meaning to tow them to the African shore behind the boats. Within a few miles the tow lines were slipped. Whether they parted or were cut with an axe, the boats rowed away. The raft was left in the open Atlantic with almost no food, a few casks of wine, and no way to steer.\n\nThe brig Argus found it by accident 13 days later, with 15 men still alive on it. What had happened in between came out because two survivors wrote it down: the surgeon Henri Savigny and the geographer Alexandre Corréard. They published it against the wishes of a government that would much rather they had not. The first night men were swept off or drowned themselves. There were fights over the wine and over the middle of the raft, where the footing was best; the stronger killed the weaker; the living ate the dead. By the end those 15 had thrown the sick and the wounded into the sea to make the water last. The captain who caused it was court-martialled and got three years.\n\nThéodore Géricault was 27 and looking for a subject enormous enough to make his name. He found it in the scandal and went at it like an investigator. He read the survivors’ book, then met the men themselves. He had the ship’s carpenter, who had lived through it, build him a scale model of the raft. He brought severed limbs and heads from hospitals and the guillotine into his studio, to study how dead flesh actually looks, until the room stank and his friends stopped visiting. He shaved his head so he would be too embarrassed to go out, and worked. The body lying face down in the foreground, one arm flung out over a beam, was posed for by a friend of his, a young painter named Eugène Delacroix.\n\nThe canvas is about 16 feet by 23, and Géricault chose the cruellest possible instant to paint. Not the rescue, but the moment the survivors first spot a sail on the horizon, pile themselves into a pyramid, and wave. The Argus sails on out of sight without seeing them. It came back hours later. At the top of the pyramid he put Jean Charles, a soldier and one of the few Black men on the raft. He waves a scrap of cloth at a ship the size of a splinter, far off to the right. When it went on show at the Salon of 1819 the authorities let it in under the flat title Scene of Shipwreck, as if that would keep anyone from knowing which one.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '2 July 1816',
  historicalYear: 1816,
  historicalMonthDay: toMonthDay('07-02'),
  artTitle: 'The Raft of the Medusa',
  artCredit: 'Théodore Géricault, 1819',
  imageUrl: bucketPainting('scenes/the-raft.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-raft.jpg'),
  details: [
    {
      id: 'the-signal',
      x: 0.72,
      y: 0.19,
      scale: 2.4,
      caption:
        'Jean Charles stands at the top of the human pyramid with his back turned. He waves a scrap of cloth at the horizon. Géricault posed him from Joseph, a Haitian model who worked in the Paris studios.',
    },
    {
      id: 'the-father',
      x: 0.26,
      y: 0.6,
      scale: 3.4,
      caption:
        'An old man sits with a hand to his mouth and a dead youth across his knees. He is past waving and past hope. By the last days the survivors were putting the sick over the side to make the water last.',
    },
    {
      id: 'the-dead',
      x: 0.47,
      y: 0.8,
      scale: 3.2,
      caption:
        'A body lies face down on the planks with one arm flung out over a beam. Another man’s arm trails in the foam beside it. The young Delacroix, a friend of Géricault, posed for this figure.',
    },
  ],
} satisfies MockSceneDef;

export const anUntowardEvent = {
  slug: 'an-untoward-event',
  title: 'An Untoward Event',
  dek: 'Three navies sail into a bay to keep the peace and destroy a fleet by nightfall',
  story:
    'Nobody in charge wanted this battle, which is part of why it was so complete. In the autumn of 1827 the Greeks were six years into a war of independence against the Ottoman Empire. The Sultan’s Egyptian ally, Ibrahim Pasha, was grinding the revolt out of the Peloponnese, his large fleet anchored in the wide harbour at Navarino. Britain, France and Russia had signed a treaty to force a ceasefire. They sent a combined squadron under the British admiral Edward Codrington to lean on Ibrahim without firing a shot, if that could be helped. On 20 October the allied ships sailed straight into the crowded bay and dropped anchor among the Ottoman fleet, close enough to talk, close enough to touch.\n\nThe two forces sat wedged together in the water for hours, gun to gun, waiting on nerves. Then the allies sent a boat across toward a Turkish fireship, and it was fired on, and a man in it killed. One musket shot somewhere in that packed harbour, and the whole bay went up at once. There was no room to manoeuvre and no need. Anchored ships simply hammered each other at ranges of a few dozen yards until one of them caught fire, drifted, and set the next alight. By the time the smoke cleared the Ottoman and Egyptian fleet had effectively ceased to exist: of 78 ships, about 55 were sunk, burned, or blown up by their own crews. The allies lost 181 men killed and not one ship.\n\nIt was the last great sea battle fought entirely under sail. Within a few years steam would begin to appear in the world’s navies, and no fleet of this size would ever again decide a day with wind and canvas alone. In London the victory was an embarrassment: Britain had wanted the Ottoman navy leaned on, not annihilated, for fear of what a weakened Turkey would let Russia do. When Parliament opened, the government put into the King’s mouth a description of Navarino as an untoward event, and the phrase stuck to it. Codrington was recalled and left to defend himself.\n\nIvan Aivazovsky painted the bay 19 years later, in 1846, as the official artist of the Russian navy, whose ships had fought in the allied line that day. He was Armenian, from the Crimean coast, and he worked seascapes largely from memory and at speed, laying in whole storms in a single sitting. Here he gives Navarino the light he loved best. A burning fleet on the right throws orange across the water, and a battered ship of the line heels in the centre with a red flag still up her mast. Down in the corner, small, men in red caps cling to the wreckage in the water. Ibrahim held on ashore for another year. The Greeks got their country.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '20 October 1827',
  historicalYear: 1827,
  historicalMonthDay: toMonthDay('10-20'),
  artTitle: 'The Battle of Navarino',
  artCredit: 'Ivan Aivazovsky, 1846',
  imageUrl: bucketPainting('scenes/an-untoward-event.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/an-untoward-event.jpg'),
  details: [
    {
      id: 'the-heeling-ship',
      x: 0.56,
      y: 0.62,
      scale: 2.6,
      caption:
        'A battered warship heels over. Gunports run along her lit side and men in red crowd the rail. The ships at Navarino fought at anchor a few dozen yards apart, with no room to turn.',
    },
    {
      id: 'the-fleet-afire',
      x: 0.83,
      y: 0.55,
      scale: 2.8,
      caption:
        'Ships burn under red flags with their masts still standing in the flame. One fire drifted into the next until about 55 of the 78 Ottoman and Egyptian ships were sunk or burned.',
    },
    {
      id: 'men-in-the-water',
      x: 0.13,
      y: 0.8,
      scale: 2.8,
      caption:
        'Men in red caps cling to a floating spar. One of them is up on his knees with an arm raised. The allies came only to lean on this fleet, and by dark it had lost 3,000 to 4,000 men killed or wounded.',
    },
  ],
} satisfies MockSceneDef;
// Fragment: age-of-sail A (1571–1720). Merge into src/content/scenes/age-of-sail.ts.
// toEraId / toMonthDay / MockSceneDef are in scope after merge; no imports here.

export const theArrowsOfLepanto = {
  slug: 'the-arrows-of-lepanto',
  title: 'The Arrows of Lepanto',
  dek: 'The last great battle of oared galleys, decided hand to hand across joined hulls',
  story:
    'On the morning of 7 October 1571 two fleets rowed toward each other in the Gulf of Patras, off the town the Italians called Lepanto, and neither could run. Galleys fight by closing: oars against oars, then boarding planks, then a foot of blood-slick deck at a time. On the Christian side some 208 galleys carried the flags of Spain, Venice, the Pope, Genoa, Malta and Savoy. The alliance had spent months not trusting one another. Now it was lashed into a single line under a young man of 24. Don John of Austria was the illegitimate half-brother of Philip II of Spain. Before the fight he had himself rowed down the line in a fast boat, holding up a crucifix and letting the whole line look at it. Across the water waited a roughly equal Ottoman fleet under Ali Pasha, who had his own son aboard and the Sultan’s orders to attack.\n\nThe Venetians had a surprise. Six galleasses, fat oared hulks bristling with far more cannon than a galley could carry, were towed out ahead of the line and let the Ottoman front row in close before firing into it. The heavy guns broke up the attack before it properly began. Then the lines met, and the battle became what galley battles always became. For four hours men fought hand to hand across joined hulls, a floating infantry brawl, while both fleets drifted downwind together. Ali Pasha’s own flagship and Don John’s ground against each other twice; Spanish infantry were thrown back twice and boarded the third time. Ali Pasha was killed in the press. A soldier cut off his head and raised it on a pike, and the sight of it going up is often given as the moment the Ottoman center lost heart.\n\nAmong the Spanish soldiers was a 24-year-old with a fever who had been told to stay below and refused, saying he would rather die for God and king than keep to his bed. His name was Miguel de Cervantes. He took two gunshots in the chest and a third that wrecked his left hand for life; he wore the ruined hand as a badge afterward and called himself, without complaint, the cripple of Lepanto. Decades later, defending the book that had made him famous, he wrote that Lepanto was the greatest occasion the past or present had seen or the future could hope to see. He was there. He got to say so.\n\nWhen the smoke cleared, perhaps 117 Ottoman galleys had been captured and dozens more sunk. Tens of thousands were dead in a few square miles of water. Something like 12,000 Christian galley slaves had been unchained from the Ottoman benches and set loose. Pope Pius V, who had pushed the alliance together, credited the victory to the rosary and fixed a feast for the day. Paolo Veronese painted the whole thing about a year later for Venice, and split the canvas honestly in two. The bottom half is the sea: a forest of red banners and broken masts and galleys jammed prow to prow, painted small, the way a real fleet looks from a hill. The top half is a bank of cloud. Four patron saints of the Holy League kneel there and present Venice to the Virgin of the Rosary, while an angel leans out and throws arrows down into the Turkish ships. Veronese knew which half his city believed had done the work.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '7 October 1571',
  historicalYear: 1571,
  historicalMonthDay: toMonthDay('10-07'),
  artTitle: 'The Battle of Lepanto',
  artCredit: 'Paolo Veronese, c. 1572',
  imageUrl: bucketPainting('scenes/the-arrows-of-lepanto.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-arrows-of-lepanto.jpg'),
  details: [
    {
      id: 'the-saints',
      x: 0.42,
      y: 0.3,
      scale: 2.8,
      caption:
        'A hat with a scallop shell and a pilgrim’s staff mark Saint James at the left. Beside him a crowned head bows and a figure in white grips a dagger point-down. Veronese put four patron saints of the Holy League up here to present Venice to the Virgin of the Rosary.',
    },
    {
      id: 'the-lion',
      x: 0.72,
      y: 0.32,
      scale: 3.0,
      caption:
        'The lion of Saint Mark sits on the cloud under the gold cloak of the saint himself. Venice sent more galleys to Lepanto than any other member of the alliance.',
    },
    {
      id: 'the-masts',
      x: 0.3,
      y: 0.67,
      scale: 2.4,
      caption:
        'The lower half of the picture is the sea, and Veronese painted it small and dense. Red banners and snapped masts stand in a thicket over locked hulls. The whole battle fits on a canvas under 6 feet tall that was made for the altar of a lay brotherhood in Murano.',
    },
  ],
} satisfies MockSceneDef;

export const godBlewAndTheyScattered = {
  slug: 'god-blew-and-they-scattered',
  title: 'God Blew and They Scattered',
  dek: 'Eight burning ships and a north wind undo the greatest fleet in Christendom',
  story:
    'The plan was enormous and it half worked. In the summer of 1588 Philip II of Spain sent about 130 ships up the English Channel. Some 30,000 men were aboard, and their orders were to meet his army in the Netherlands, ferry it across, and put an end to Elizabeth I and Protestant England. The fleet sailed in a crescent miles wide, and for a week the English ran alongside it firing and could not break it. The Spanish commander was the Duke of Medina Sidonia, a careful landed nobleman who got seasick and had never wanted the job. He had written to the king begging to be excused, on the honest grounds that he knew nothing of the sea. Philip gave it to him anyway. He held the crescent together all the way up the Channel, which was harder than winning a battle and less remembered.\n\nThe break came at anchor. On the night of 7 August the Armada lay off Calais, waiting for the army that was not ready. The English filled eight old ships with pitch and tar and set them alight. The tide carried them down into the packed fleet in the dark. Not one Spanish ship caught fire. It did not matter. Captains who had spent a week in disciplined formation cut their anchor cables rather than burn, and ran for open water. By morning the crescent was gone, the ships scattered across the sea in ones and twos. The next day, off Gravelines, the English closed at last and fought the one real gun battle of the campaign. They fired low into the hulls until the Spanish were driven north, with the wind behind them and no way back down the Channel.\n\nAnd then the weather took over, and the weather was English. The Armada had to escape the only way left, up around the top of Scotland and down the wild Atlantic coast of Ireland, and the autumn gales caught it there. Ships that had survived every English broadside broke up on the rocks of Donegal and Kerry; men who reached shore were often killed on the beaches. Perhaps half the fleet never came home, most of it drowned rather than shot. Elizabeth had ridden to Tilbury to address her troops. She told them she had the body of a weak and feeble woman, but the heart and stomach of a king, and of a king of England too. When it was over, England struck a medal that gave the credit to the weather and to God together, in four Latin words: he blew, and they were scattered.\n\nThe painting is a late one, and it is a fireship’s idea of the fight. Philip James de Loutherbourg made it in 1796, more than two centuries after the event. He stages the Battle of Gravelines as pure theatre. A Spanish ship on the left heels over, black against a wall of flame, with sailors fighting from open boats in the smoke below her. The English flagship Ark Royal sails half out of the frame on the right, Elizabeth’s arms painted on her foresail. De Loutherbourg had actually run a theatre of a kind. In London he built a miniature mechanical stage he called the Eidophusikon, with tin sheets for thunder and colored lamps for fire and storms, moving pictures decades before the technology existed. The machine is still running behind this canvas. The light comes from where the drama needs it, and every ship is lit like a set.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '8 August 1588',
  historicalYear: 1588,
  historicalMonthDay: toMonthDay('08-08'),
  artTitle: 'Defeat of the Spanish Armada',
  artCredit: 'Philip James de Loutherbourg, 1796',
  imageUrl: bucketPainting('scenes/god-blew-and-they-scattered.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/god-blew-and-they-scattered.jpg'),
  details: [
    {
      id: 'the-burning-ship',
      x: 0.13,
      y: 0.41,
      scale: 2.4,
      caption:
        'A Spanish ship heels over with her rigging cut loose, and men are packed along the tilted deck under masts that stand black against the fire. No Spanish ship actually caught fire at Calais. The crews cut their cables in the dark and the formation came apart.',
    },
    {
      id: 'men-in-the-water',
      x: 0.4,
      y: 0.67,
      scale: 2.6,
      caption:
        'Sailors fight hand to hand from open boats. Their pikes, shields and steel helmets catch the firelight, and at the right men go into the green swell. More Armada men drowned on the way home round Scotland and Ireland than died under English guns.',
    },
    {
      id: 'the-galleon',
      x: 0.82,
      y: 0.39,
      scale: 2.4,
      caption:
        'The forward sail of the Ark Royal carries Elizabeth’s royal arms, and the St George’s cross flies from her foremast. She was the flagship of Lord Admiral Howard. De Loutherbourg pushed her half out of the frame and gave her the only clean sky in the picture.',
    },
  ],
} satisfies MockSceneDef;

export const theSpeedwellAtDelfshaven = {
  slug: 'the-speedwell-at-delfshaven',
  title: 'The Speedwell at Delfshaven',
  dek: 'A congregation prays on a deck before crossing an ocean they have only read about',
  story:
    'They had already left one country before they left for good. In 1608 a small congregation of English Separatists slipped across to Holland and settled in Leiden. They were in trouble at home for worshipping outside the official church. There they could pray as they liked, and work themselves grey in the cloth trade. After about 12 years they made a harder choice. Their children were growing up Dutch, the truce with Spain was ending, and they resolved to cross the Atlantic and build a settlement where they could be both English and free. In July 1620 the first of them boarded a small ship called the Speedwell at Delfshaven to sail to Southampton, meet a second, larger ship, and go. This painting is that morning: the deck at Delfshaven, the sails half set, the whole company on its knees while their pastor prays over them.\n\nThe man who stayed behind is the one blessing them. John Robinson had led the Leiden congregation and meant to follow with the rest of the flock later. He never did. He died in Holland five years on, so the goodbye in the picture was the last time most of them saw him. William Brewster, the elder, would go. So would a stubborn young man named William Bradford. He lived to govern the colony for decades and to write its history in plain, aching prose. That book is where he calls the travelers pilgrims: they knew they were pilgrims, he wrote, and looked not much on those things but lifted their eyes to heaven. The Speedwell turned out to be a disaster. She leaked so badly on the way that she was abandoned in England. About 102 people crammed instead onto the one ship that held, the Mayflower. She left Plymouth in September, took 66 days, and made Cape Cod in November with the wrong latitude and winter coming.\n\nWeir loads the deck with small true weights. A breastplate, a backplate and a helmet lie on the planks in the foreground with a musket beside them, the soldier’s trade set down for the length of a prayer. The deck timber behind them is lettered SPEEDWELL. William Brewster holds the open Bible across his knee while an older man in a ruff leans in over it with his hat in his hand. These people read the Geneva Bible, the plain, heavily footnoted English translation the official church disliked precisely because ordinary readers could carry it and argue with it. On the left, under the hanging sail, Weir painted a rainbow. It is not weather. It is the sign God gave Noah, and he painted it red, white and blue, the colors of the flag these people were leaving.\n\nRobert Walter Weir painted this between 1837 and 1843, more than two centuries after the deck it shows. He painted it to hang in one specific room, the Rotunda of the United States Capitol. It is still there, 12 feet by 18, one of eight enormous history paintings ringing the walls. Weir taught drawing to army cadets at West Point for 40 years. One of the cadets who sat in his class was James McNeill Whistler, who went on to paint the most famous portrait of a mother in the world. One of Weir’s own sons, Julian Alden Weir, grew up to help bring French Impressionism to America. At the right edge of the picture, close enough to step onto, Weir put the stepped gables of Delfshaven. A knot of people stands on the quay, one of them with his arm out toward the ship.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: 'July 1620',
  historicalYear: 1620,
  historicalMonthDay: null,
  artTitle: 'Embarkation of the Pilgrims',
  artCredit: 'Robert Walter Weir, 1843',
  imageUrl: bucketPainting('scenes/the-speedwell-at-delfshaven.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-speedwell-at-delfshaven.jpg'),
  details: [
    {
      id: 'the-open-bible',
      x: 0.39,
      y: 0.48,
      scale: 2.4,
      caption:
        'An open Bible lies across William Brewster’s knee, and an older man in a starched ruff leans in over it with his hat in his hand. This is the Geneva Bible, the English translation with footnotes that these Separatists read. The official church distrusted it because ordinary people could carry it and argue with it.',
    },
    {
      id: 'the-armor',
      x: 0.44,
      y: 0.82,
      scale: 2.8,
      caption:
        'A breastplate, a backplate and a helmet lie on the planks with a musket beside them. A soldier has set his kit down for the length of a prayer. Weir lettered the ship’s name into the deck timber behind: SPEEDWELL, and the helmet covers the first letter.',
    },
    {
      id: 'at-prayer',
      x: 0.83,
      y: 0.62,
      scale: 2.6,
      caption:
        'A man in a steel breastplate kneels with his hands locked together while a young woman rests hers on his shoulder and looks up past him. The open palm at the left edge belongs to their pastor, John Robinson. He stayed in Holland and died at Leiden in 1625 without seeing most of them again.',
    },
  ],
} satisfies MockSceneDef;

export const theRoyalCharlesCarriedOff = {
  slug: 'the-royal-charles-carried-off',
  title: 'The Royal Charles Carried Off',
  dek: 'The Dutch sail up an English river and tow away England’s flagship',
  story:
    'In June 1667 a Dutch fleet did something no enemy had done before or has done since. It sailed up an English river, past the forts, into the heart of the Royal Navy’s home dockyard, and came out towing the flagship. England had brought the disaster on itself. The Crown was broke after the plague and the Great Fire. The biggest warships had been laid up in the mud at Chatham to save money. The sailors were so far behind on their pay that some had rowed over to the Dutch side, and they were now piloting the attack. On 12 June the Dutch broke a great iron chain strung across the Medway at Gillingham. Then they put a boarding party onto the Royal Charles, 80 guns, pride of England, sitting there with almost no crew. The next day they burned three of the finest ships left in the fleet at their moorings.\n\nThe insult was doubled by what that ship was. She had been built under Cromwell and named the Naseby, after the battle where Parliament broke the king’s army. Then in 1660, refitted and renamed, she was the very ship that carried Charles II home from exile to take back his throne. Now a handful of Dutch sailors walked her decks. They found her too deep to bring out easily and took her anyway, floating her downriver on the tide with the tricolor run up where the royal standard used to fly. Michiel de Ruyter commanded the operation from the estuary. Cornelis de Witt, brother of the man who ran the Dutch Republic, rode up the river with the raiding squadron to see it done, and signed the report. It was, in cold terms, the worst day in the history of the Royal Navy.\n\nSamuel Pepys, who ran the navy’s paperwork and heard the guns from London, wrote it all down in his diary with his hair standing on end. He sent his wife and his father out of the city with 1,300 pounds in gold sewn into a belt, half expecting the Dutch on the Thames next. He called the whole thing a dishonour never to be wiped off. He was not entirely wrong. The raid pushed England to make peace within weeks, on terms that let the Dutch keep the sugar colony of Suriname. In exchange England kept a swampy North American port it had grabbed and renamed New York. A week of gunpowder up one river had settled the ownership of a slice of two continents.\n\nLudolf Bakhuizen painted the trophy at sea, and painted it the way the Dutch wanted to remember it. The captured ship rides high and gilded in a fresh Dutch wind, escorted in under the tricolor with boats of men pulling alongside her. He went out in open boats in bad weather to watch how the sea actually behaved, and the water here is his, choppy and specific and cold. After Willem van de Velde and his son left for England in 1672, he was the leading marine painter in Amsterdam. The real ship did not last. She was too big and too deep for Dutch harbors, so within a few years she was broken up for timber. One piece was sawn off and kept: the carving from her stern, the royal arms cut in oak and gilded. It hangs in the Rijksmuseum in Amsterdam today, a lion and a unicorn holding up a shield, taken as a souvenir and never given back. Bakhuizen’s picture of the day they took her hangs in Greenwich, in the losing navy’s own museum.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '12 June 1667',
  historicalYear: 1667,
  historicalMonthDay: toMonthDay('06-12'),
  artTitle: 'The Royal Charles Carried into Dutch Waters',
  artCredit: 'Ludolf Bakhuizen, 1667',
  imageUrl: bucketPainting('scenes/the-royal-charles-carried-off.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-royal-charles-carried-off.jpg'),
  details: [
    {
      id: 'the-gilded-prize',
      x: 0.48,
      y: 0.58,
      scale: 2.4,
      caption:
        'The Royal Charles moves with only a little sail set, and the Dutch flag flies from her rear mast. Her whole stern is one slab of gilt carving, and a puff of gun smoke stands off her side. She had been the Naseby until Charles II came aboard in 1660 and renamed her on the spot.',
    },
    {
      id: 'the-longboat',
      x: 0.63,
      y: 0.72,
      scale: 3.0,
      caption:
        'A boatload of men rows in under the side of the captured ship. An anchor hangs above them and the Dutch flag flies at her stern. Bakhuizen went out in open boats in weather like this to learn how the sea behaved, and the water here is his.',
    },
    {
      id: 'the-escort',
      x: 0.165,
      y: 0.755,
      scale: 3.0,
      caption:
        'A Dutch government yacht runs alongside the captured ship with gilding all over her stern. Her crew stand on the open deck and a small boat pitches in the shelter of her side. A white flag with a gold anchor flies at her mast, and she was one of the escort that took the Royal Charles in to Hellevoetsluis.',
    },
  ],
} satisfies MockSceneDef;

export const winstanleysWish = {
  slug: 'winstanleys-wish',
  title: 'Winstanley’s Wish',
  dek: 'A showman builds the first sea lighthouse and asks to be inside it in the worst storm',
  story:
    'Henry Winstanley was not a sailor. He was a showman, an Essex gentleman who engraved playing cards and ran a Mathematical Water Theatre in Piccadilly full of fountains and clockwork tricks. He filled his own house with practical jokes: a chair that grabbed anyone who sat in it, a floor that dropped a visitor into the garden. He came to the sea by losing money on it. He had put his savings into a few merchant ships, and two of them broke apart on the Eddystone. That is a low reef of rock 12 miles out from Plymouth Sound, and it had been sinking ships for as long as anyone kept count. When he asked why nobody warned ships off it, he was told that no one could build anything out there that the sea would not take. He took that as a dare.\n\nBetween 1696 and 1699 he built the first lighthouse ever raised on a rock in the open ocean. He worked only in the short calm weeks of summer, drilling the reef by hand. A French privateer once carried him off in the middle of the job, in the middle of a war, and the king ordered him released because a lighthouse helped everyone. What he finished looked less like a lighthouse than like something from his theatre: an ornate wooden tower, candlelit, hung with carved scrolls and Latin mottoes and iron flourishes, a folly standing in the Atlantic. Sailors could not quite believe it. It worked. For five winters the Eddystone light burned and ships stopped dying on the reef. Winstanley was so proud of the thing that he said out loud the wish that would kill him: that he might be inside his lighthouse during the greatest storm that ever blew.\n\nHe got the greatest storm that ever blew. On the night of 26 November 1703 a hurricane came up the Channel that people still measure other storms against, the worst in English history before or since. Winstanley happened to be out at the Eddystone that day making repairs, and chose to stay the night in his tower to see it hold. It did not. By dawn on the 27th the lighthouse was simply gone, swept off the rock down to the iron stumps. Winstanley and five other men were gone with it, no bodies, no wreckage anyone could name. The same night the storm tore the fleet apart. The Royal Navy lost 13 warships in a few hours and around 1,500 sailors drowned; a rear-admiral died with them. On land 2,000 chimney stacks fell in London alone, and the lead was peeled off Westminster Abbey. The Bishop of Bath and Wells was crushed in his bed when his own palace chimneys came through the roof.\n\nA hack writer just out of the pillory for debt and libel saw a subject in it. Daniel Defoe put advertisements in the papers asking survivors to send him their accounts. He gathered the letters and published The Storm the next year, stitching hundreds of ordinary voices into what people now call one of the first real works of reporting. He wrote Robinson Crusoe 15 years later. Isaac Sailmaker painted the Eddystone a few years later, one of the first men in England to make a whole living painting ships. The tower in his picture is not Winstanley’s. Winstanley’s had been scoured off the rock down to the iron stumps. This smooth pale cone, plain as a candle, is the second Eddystone light. John Rudyerd raised it on the same reef and lit it in 1708, with no scrolls, no mottoes and nothing for a gale to take hold of. The red ensign flying beside its lantern carries the union canton adopted in 1707. Sailmaker painted the rock working again, warships filing past it in safety, and no sign at all of the showman who put the first light there.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '26 November 1703',
  historicalYear: 1703,
  historicalMonthDay: toMonthDay('11-26'),
  artTitle: 'The Eddystone Lighthouse',
  artCredit: 'Isaac Sailmaker, c. 1708',
  imageUrl: bucketPainting('scenes/winstanleys-wish.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/winstanleys-wish.jpg'),
  details: [
    {
      id: 'the-lantern',
      x: 0.74,
      y: 0.31,
      scale: 2.6,
      caption:
        'The lantern room stands under a black dome with a gilded ornament on top, and smoke goes up off the light. One keeper is out on the red gallery with a glass to his eye, and another stands beside the ensign. This is not Winstanley’s tower but John Rudyerd’s replacement, which was lit on the same rock in 1708.',
    },
    {
      id: 'the-fleet',
      x: 0.16,
      y: 0.62,
      scale: 2.8,
      caption:
        'A warship passes under a red ensign, with gold on her stern and the union jack at her bows. More of the fleet is strung out behind her. The storm that took the first Eddystone light sank 13 Royal Navy ships in a few hours and drowned about 1,500 men.',
    },
    {
      id: 'the-tower-base',
      x: 0.8,
      y: 0.72,
      scale: 2.8,
      caption:
        'The tower’s foot sits on the bare Eddystone rock, and a wooden stair is bolted up its side to the door. One man in a red coat stands on the rock below. Winstanley’s tower had stood on this same reef, and a single night took it down to the iron stumps.',
    },
  ],
} satisfies MockSceneDef;

export const theHeadOnTheBowsprit = {
  slug: 'the-head-on-the-bowsprit',
  title: 'The Head on the Bowsprit',
  dek: 'Blackbeard’s two-year career ends in a boarding trap in a Carolina inlet',
  story:
    'Edward Teach anchored for the night in Ocracoke Inlet on the North Carolina coast, and by first light on 22 November 1718 two small sloops had crept in after him. He was an Englishman, most likely out of Bristol, better known by the beard he had made into a brand. By the accounts, he wore it long and black down his chest, tied off in little pigtails. In a fight he tucked lengths of smouldering cannon fuse under the brim of his hat, so that his whole face smoked. Men who met him swore he looked like the devil come up out of the sea. He had been a pirate for barely two years. In that time he had taken dozens of ships and run a captured French slaver of 40 guns, which he renamed the Queen Anne’s Revenge. He blockaded the whole port of Charleston until the city sent him a chest of medicine to make him go away.\n\nThe man hunting him was not even from his colony. Lieutenant Robert Maynard of the Royal Navy had been sent by the governor of Virginia, who had no legal say over North Carolina and did it anyway, with two hired sloops and no cannon. Maynard set a trap using his own weakness. When Teach’s crew fired a broadside that swept his decks, Maynard hid most of his men below and left the deck looking nearly empty. The pirates grappled on and swarmed aboard, expecting to finish a beaten ship. Then the hatches came up. The fight that followed was hand to hand across a few yards of deck. Teach and Maynard shot at each other, then went at it with swords. Teach’s cutlass shattered the officer’s blade, and a Highlander in Maynard’s crew came in from the side and cut the pirate across the throat.\n\nHe was hard to kill. The sailors who stripped the body afterward counted 5 gunshot wounds and about 20 cuts, and said he had gone on fighting through most of them. Maynard had Teach’s head hacked off and lashed to the end of his sloop’s bowsprit, partly as proof to collect the reward and partly to be sure the thing was really dead. The body went over the side. The story that the headless corpse swam three times around the ship before it sank was already being told within a few years, and no amount of arithmetic has ever quite killed it. As for the treasure, Teach is supposed to have said that only he and the devil knew where it was, and neither has said. His flagship sat lost on the sea floor off Beaufort Inlet until divers found the wreck in 1996.\n\nAlmost everything colourful about Blackbeard comes from one book: the smoking beard, the devil talk, the swimming body. A General History of the Pyrates was published in London in 1724, six years after his death. The writer called himself Captain Charles Johnson, and nobody has ever pinned down who he was. The painting is later still and honest about being a legend. Jean Leon Gerome Ferris made it around 1920, for a series of American history scenes meant for schoolrooms and prints. He freezes the fight at its peak. Teach is in a dark red coat and a yellow headscarf, a cutlass up in one fist and the other hand locked on Maynard’s arm, a brace of flintlocks swinging at his hip. Maynard is braced against him with a pistol out. It is two centuries of storytelling painted as one frozen second, on a deck the painter never saw, of a fight nobody sketched.',
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '22 November 1718',
  historicalYear: 1718,
  historicalMonthDay: toMonthDay('11-22'),
  artTitle: 'The Capture of the Pirate Blackbeard, 1718',
  artCredit: 'Jean Leon Gerome Ferris, c. 1920',
  imageUrl: bucketPainting('scenes/the-head-on-the-bowsprit.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-head-on-the-bowsprit.jpg'),
  details: [
    {
      id: 'blackbeards-charge',
      x: 0.33,
      y: 0.32,
      scale: 2.6,
      caption:
        'Teach is in profile under a black three-cornered hat, and his beard hangs in tied strands. A gold hoop is in his ear and his fist is closed around a cutlass. Ferris left out the one thing everyone remembers, the lit fuses Teach is said to have tucked under his hat until his whole face smoked.',
    },
    {
      id: 'the-sash',
      x: 0.36,
      y: 0.6,
      scale: 3.2,
      caption:
        'Two flintlock pistols with brass fittings hang at Teach’s hip on a strap. Their muzzles point down over his red sash. The 1724 book that invented most of Blackbeard put 6 of them across his chest at once.',
    },
    {
      id: 'the-lieutenant',
      x: 0.68,
      y: 0.36,
      scale: 2.6,
      caption:
        'Maynard has one hand locked on Teach’s arm and a pistol in the other, and his face is down and set. Behind him a pirate in a bloodied head-cloth swings a cutlass down. Maynard had hidden his crew below and left his deck looking empty so the pirates would board.',
    },
  ],
} satisfies MockSceneDef;

export const theFlagshipWentFirst = {
  slug: 'the-flagship-went-first',
  title: 'The Flagship Went First',
  dek: 'The Dutch catch a fleet at anchor and the sky fills with rigging',
  story:
    "The Spanish fleet lay at anchor under the guns of Gibraltar on 25 April 1607, in its own harbor, in its own war. Then 26 Dutch ships came around the point flying every flag they owned. The Dutch Republic was 39 years into its rebellion against Spain and had decided to make a point where it would be most educational: at home. Admiral Jacob van Heemskerck had already survived a winter frozen into the Arctic on Nova Zembla, with nothing but ship's biscuit and polar bears for company. He gave his captains a plan with no second act: sail straight in, lay alongside, and destroy everything afloat.\n\nHeemskerck did not live to see much of it work. A cannonball took off his leg in the first exchange, alongside the Spanish flagship, and he bled out on his own deck; his officers kept the news moving slowly while the battle moved fast. The Dutch doubled up on the anchored galleons, two to one. In the middle of the afternoon the fight produced the image the whole war had been waiting for: the Spanish flagship took fire in her powder magazine and went up whole. Van Wieringen painted the moment with an accountant's literalness. Sailors, ladders and gratings hang against the smoke at the top of their arc, over a jet of flame and cordage where a galleon had been standing a second before.\n\nBy evening the Spanish fleet at Gibraltar had ceased to exist: every ship burned, sunk, or shattered, thousands of men dead against about a hundred Dutch. The victory shocked both capitals into speeding up truce talks. Two years later Spain signed the Twelve Years' Truce, which treated the rebel provinces, for the first time, as a country you make treaties with. That is the polite version. The painting also records the other one. In the foreground boats, Dutch sailors are beating the swimmers with oars, and van Wieringen put it in because everyone knew it had happened and nobody yet thought it needed hiding.\n\nThe canvas was made around 1621, the year the truce expired, commissioned as a reminder of what the last round had cost Spain. It hangs in the Rijksmuseum with the falling men mid-air, four centuries into a descent that the painter, deliberately, never lets end.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '25 April 1607',
  historicalYear: 1607,
  historicalMonthDay: toMonthDay('04-25'),
  artTitle: 'The Explosion of the Spanish Flagship at Gibraltar',
  artCredit: 'Cornelis Claesz. van Wieringen, c. 1621',
  imageUrl: bucketPainting('scenes/the-flagship-went-first.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-flagship-went-first.jpg'),
  details: [
    {
      id: 'the-airborne',
      x: 0.52,
      y: 0.2,
      scale: 2.6,
      caption:
        'Sailors, a ladder and a wooden deck grating are up in the sky and still rising. The Spanish flagship\'s powder store caught fire in the middle of the afternoon. This is what came off her top deck.',
    },
    {
      id: 'the-orange-flag',
      x: 0.17,
      y: 0.66,
      scale: 2.4,
      caption:
        "The flag here is orange, white and blue. It is the rebel flag of the Dutch Republic, and a coat of arms is sewn into the white band. The Dutch were 39 years into their revolt against Spain when they sailed that flag into a Spanish harbor.",
    },
    {
      id: 'the-boats',
      x: 0.4,
      y: 0.88,
      scale: 2.6,
      caption:
        'A Dutch boat sits packed to the rails and carries her own flag at the bow. The men in her lean out to beat the Spanish swimmers off with oars. There are heads in the water at both ends of her.',
    },
  ],
} satisfies MockSceneDef;

export const paintedFromLife = {
  slug: 'painted-from-life',
  title: 'Painted From Life',
  dek: 'The admiral blows up a real frigate so the painter gets it right',
  story:
    "Catherine the Great had no Mediterranean fleet, so she sent her Baltic one, around the whole of Europe, to find the Ottoman navy and end it. The squadrons that arrived off Anatolia in the summer of 1770 were leaking, scurvy-worn, and commanded by her favorite's brother, Alexei Orlov, a man with no naval training and a bottomless appetite for results. On 5 July the fleets met off Chios, and the two flagships burned each other to the waterline at pistol range. The shaken Ottoman fleet, still much the larger, withdrew into the bay of Chesme and anchored in tight rows under shore batteries, which its admirals believed made it safe. On the night of the 6th the Russians sent in four fireships behind a bombardment. One of them, laid alongside by a lieutenant named Ilyin, set a ship of the line burning, and the fire went down the anchored rows like a fuse. By morning the Ottoman Mediterranean fleet was gone: some 70 vessels burned or taken, perhaps 11,000 men dead in a single night, against Russian losses in the hundreds. Catherine struck a medal for the sailors with the burning fleet on it and one Russian word, BYL, which means it was.\n\nThen came the problem of the painting, which produced the story the art world has kept ever since. Orlov commissioned a German painter in Rome, Jacob Philipp Hackert, to make a grand series of the victory for the empress. Hackert delivered handsome ships and correct rigging, and Orlov made a professional objection: the explosion was wrong, and Hackert, having never seen a warship blow up, could hardly deny it. So Orlov arranged a reference. In 1771, in the roadstead of Livorno, with the Tuscan authorities' permission and half the town watching from the shore, a Russian frigate was packed with powder and detonated for the painter's benefit. Hackert sketched the real thing: the column of fire, the lifting deck, the smoke ring, the rain of spars.\n\nThe result went into the series now hanging in the Chesme Hall at Peterhof, and the fireball in this canvas is, in the most literal sense in the history of battle painting, painted from life. It is also the most expensive piece of studio reference ever commissioned, a working warship spent on a detail. Nobody in the Russian court considered this excessive, which tells you what the victory was worth to them.\n\nCatherine built a church and a palace named for the bay, and Europe recalculated: Russia now reached the Mediterranean. Hackert kept painting for princes for 40 years, and presumably never again had to ask a client to blow something up. Once had been enough, and it shows.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '7 July 1770',
  historicalYear: 1770,
  historicalMonthDay: toMonthDay('07-07'),
  artTitle: 'The Destruction of the Turkish Fleet at Chesme',
  artCredit: 'Jacob Philipp Hackert, 1771',
  imageUrl: bucketPainting('scenes/painted-from-life.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/painted-from-life.jpg'),
  details: [
    {
      id: 'the-fireball',
      x: 0.42,
      y: 0.54,
      scale: 2.2,
      caption:
        'This is the fireball Hackert could not invent. He had never seen a warship blow up, so Orlov bought him one. A Russian frigate was packed with powder and fired off Livorno while Hackert sketched from the shore.',
    },
    {
      id: 'the-flagship',
      x: 0.64,
      y: 0.58,
      scale: 2.4,
      caption:
        'Russian sailors stand along the yards of the nearest ship. They are small dark marks against the fire. Alexei Orlov sent them into the bay, and he had no naval training at all.',
    },
    {
      id: 'the-longboat',
      x: 0.43,
      y: 0.86,
      scale: 2.6,
      caption:
        'A boat crew pulls hard across water the fire has turned to copper. Roughly 11,000 Ottoman sailors died in the bay behind them in a single night.',
    },
  ],
} satisfies MockSceneDef;

export const theBayAtBreakfast = {
  slug: 'the-bay-at-breakfast',
  title: 'The Bay at Breakfast',
  dek: "The Pacific's greatest navigator misreads one crowd",
  story:
    "James Cook had spent 11 years crossing the Pacific and had a settled method for mornings that went wrong. Take the highest-ranking man in reach aboard as a guest-hostage, treat him honorably, and give him back when the stolen boat or musket came back. It had worked in Tahiti, in Tonga, in New Zealand. On the morning of 14 February 1779 at Kealakekua Bay in Hawaii, a ship's cutter was missing, and Cook went ashore with nine marines to collect the aging king Kalani'opu'u in the usual way. The visit had already curdled by then. The ships had first arrived during the Makahiki festival and been received with a lavishness that still puzzles historians. Then they sailed away, broke a foremast in a storm, and came back in the wrong season: a fleet of hungry strangers who had used up their welcome and returned for more.\n\nThe king came along agreeably enough until his favorite wife and two chiefs pleaded with him at the water's edge, and a crowd began to gather and arm. Then a canoe brought word across the bay that English guns had killed a chief named Kalimu at the other blockade. The mood turned all at once. A warrior threatened Cook with a dagger of traded iron, the ships' own metal come back with an edge. Cook fired birdshot, which rattled off the man's war mat and proved the guns harmless. The crowd surged. Cook killed a man with his second barrel, the marines fired one volley, and the water's edge became a melee. Cook was clubbed from behind, held under, and stabbed repeatedly in the shallows, along with four of his marines. He was 50 years old, and the entire event, from landing to the boats pulling out, had not taken an hour.\n\nWhat happened next confused his shipmates more than the killing. The Hawaiians treated the body as they treated their own highest chiefs: the flesh removed and burned with honors, the bones cleaned, distributed among ranking chiefs as objects of power. A parcel of remains came back to the ships days later, wrapped in a chief's feathered cloak. Lieutenant King noted the genuine grief of people who had, by their own lights, done everything correctly. The Resolution buried what it received in the waters of the bay. Among those watching was the ship's sailing master, a 24-year-old named William Bligh, who filed away his own conclusions about managing Pacific crews and would test them, catastrophically, 10 years on.\n\nGeorge Carter painted the scene in 1783 as London wanted it: Cook dead center in a white coat, with the light on him and everyone else in shadow. No witness account puts him that calm. The painting's business was not evidence; it was the manufacture of a secular saint, and the assembly line it started, engravings, plays, waxworks, ran for a century.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '14 February 1779',
  historicalYear: 1779,
  historicalMonthDay: toMonthDay('02-14'),
  artTitle: 'The Death of Captain James Cook',
  artCredit: 'George Carter, 1783',
  imageUrl: bucketPainting('scenes/the-bay-at-breakfast.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-bay-at-breakfast.jpg'),
  details: [
    {
      id: 'the-white-coat',
      x: 0.62,
      y: 0.52,
      scale: 2.4,
      caption:
        'Cook stands at the center in a clean white coat with both hands on his musket. He is looking the wrong way. The man behind him raises an iron dagger that was traded off Cook\'s own ships.',
    },
    {
      id: 'the-volley',
      x: 0.13,
      y: 0.68,
      scale: 2.4,
      caption:
        'Marines fire from the boat while their wounded are dragged in over the side. They got off one volley, and then the shore came at them.',
    },
    {
      id: 'the-fallen',
      x: 0.62,
      y: 0.88,
      scale: 2.4,
      caption:
        'The man Cook shot lies face down on the rock with Cook\'s buckled shoe at his shoulder. He was killed by the second barrel. The first had been birdshot, and it bounced off a war mat.',
    },
  ],
} satisfies MockSceneDef;

export const fourDaysOnTheWater = {
  slug: 'four-days-on-the-water',
  title: 'Four Days on the Water',
  dek: 'The longest sea battle ever fought runs out of ships, not anger',
  story:
    "The English began the battle a fleet short, having split their forces on faulty intelligence. Prince Rupert had been sent west to intercept a French squadron that never came. George Monck, Duke of Albemarle, met the Dutch off the North Foreland on 1 June 1666 with 56 ships against Michiel de Ruyter's 84. Monck, a soldier who treated the sea as a battlefield that happened to be wet, attacked anyway. What followed had never happened before and has never happened since. The action ran four days straight, drifting between the English coast and the Flemish shoals. The two fleets ground at each other, broke off at nightfall, and found each other again at dawn like a quarrel resumed at breakfast.\n\nBy the second day the English were fighting a retreat; on the third, Rupert's returning squadron appeared and evened the arithmetic; and on the same evening England's pride ran physically aground. The Royal Prince, the grandest ship afloat and a veteran of half a century of state occasions, stuck fast on the Galloper Sand. Dutch fireships closed in and she could not answer her helm. Her crew's nerve went and Sir George Ayscue struck his flag, still the highest-ranking English officer ever taken at sea. De Ruyter could not float his prize off the sand, so he burned her where she sat.\n\nThe fourth day settled it. De Ruyter broke the exhausted English line, and Monck took the survivors home through the shoals. The butcher's totals were lopsided in every column. Roughly 5,000 English sailors were killed, wounded or taken, against about 2,000 Dutch. London, which had rung bells for a rumored victory on the first reports, went quiet as the truth docked. Yet the strangest fact of the Four Days' Battle is what it failed to decide. Seven weeks later the rebuilt English fleet beat De Ruyter soundly on St James's Day. The war rolled on toward its actual conclusion: the burned city, a treasury too empty to send the fleet out, and De Ruyter's masts coming up the Medway.\n\nStorck painted this battle again and again for a Dutch market that could not get enough of it, and this version keeps his habits. The sea is opened out like a stage and the flagships are correct down to their pennants. In the left foreground a broken English ship rolls her people into the water, close enough that a buyer hanging it in an Amsterdam parlor could count them.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '1–4 June 1666',
  historicalYear: 1666,
  historicalMonthDay: null,
  artTitle: 'The Four Days Battle',
  artCredit: 'Abraham Storck, c. 1670',
  imageUrl: bucketPainting('scenes/four-days-on-the-water.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/four-days-on-the-water.jpg'),
  details: [
    {
      id: 'the-sinking',
      x: 0.24,
      y: 0.83,
      scale: 2.4,
      caption:
        'An English ship is going over on her side. The red ensign still flies from a broken mast. Her crew slide down the tilted deck and drop off her stern into the sea.',
    },
    {
      id: 'the-line',
      x: 0.72,
      y: 0.6,
      scale: 2.4,
      caption:
        "Dutch ships hold their line and fire through their own smoke. Their orange, white and blue flag is flying. They came back at first light on each of the four mornings, and on the fourth they broke the English line for good.",
    },
    {
      id: 'the-boats',
      x: 0.47,
      y: 0.88,
      scale: 3.0,
      caption:
        'A boat crew works the water between the wrecks with swimmers all around them. 1,800 Englishmen came out of these four days as Dutch prisoners and were shipped across the North Sea.',
    },
  ],
} satisfies MockSceneDef;

export const herSidesAreMadeOfIron = {
  slug: 'her-sides-are-made-of-iron',
  title: 'Her Sides Are Made of Iron',
  dek: 'A British broadside bounces, and a nickname is born',
  story:
    "In August 1812 the Royal Navy had not lost a single-ship frigate action in anyone's living memory, and the war with America was expected to add to the record. On the afternoon of the 19th, 750 miles east of Boston, HMS Guerriere, 38 guns, sighted a big American frigate and cleared for action with something like appetite. Her captain, James Dacres, had reportedly promised his crew the fight would take 15 minutes. The ship coming down on him was USS Constitution, 44 guns, one of the six oversized frigates the young republic had built in the 1790s. She was longer, heavier and thicker-planked than anything in her class, with a hull of southern live oak on a frame so dense the Royal Navy had no category for it.\n\nThe education took 35 minutes. Captain Isaac Hull held his fire through two miles of closing under British broadsides, took the punishment in the rigging, and laid Constitution alongside at half-pistol-shot before answering with everything at once. A British 18-pound ball struck the American hull and dropped whole into the sea, and a sailor shouted the line that renamed the ship: Huzzah! her sides are made of iron! Guerriere's mizzenmast went overboard, dragging her around; the ships fouled; and when they wrenched apart her foremast and mainmast followed, leaving the pride of the blockade rolling mastless in the swell. Dacres, wounded, was asked by the boarding lieutenant whether he had struck his colors, and managed the last good joke available: strictly speaking, there were no colors left standing to strike.\n\nThe wreck was too broken to bring home, so Hull's men took off the prisoners and burned her at sea the next morning. The material result was one middling frigate; the moral result was out of all proportion. Boston gave Hull a parade and Congress struck medals. London, which had absorbed the news of wars on three continents with composure, took this one badly, and the Admiralty eventually told its frigate captains not to engage the American 40-fours alone. Two more Royal Navy frigates were beaten by Christmas, which did not calm the newspapers.\n\nThomas Birch, Philadelphia's marine painter, had the scene on canvas within the year: Constitution steady under her ensigns, Guerriere a shorn hulk with her masts in the water, the sea running indifferent green under both. The nickname the cannonball coined outlived everyone in the smoke. Old Ironsides is moored in Boston harbor today, the oldest commissioned warship still afloat, her sides, as ever, made of oak.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '19 August 1812',
  historicalYear: 1812,
  historicalMonthDay: toMonthDay('08-19'),
  artTitle: 'The Constitution and the Guerriere',
  artCredit: 'Thomas Birch, c. 1813',
  imageUrl: bucketPainting('scenes/her-sides-are-made-of-iron.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/her-sides-are-made-of-iron.jpg'),
  details: [
    {
      id: 'the-victor',
      x: 0.25,
      y: 0.6,
      scale: 2.4,
      caption:
        'Constitution with her ensign still up and her guns going, the smoke lying along her side. Isaac Hull took two miles of British broadsides without answering before he opened fire at half-pistol-shot.',
    },
    {
      id: 'the-hulk',
      x: 0.68,
      y: 0.76,
      scale: 2.8,
      caption:
        'Guerriere with all three masts gone over the side and her crew standing along an empty deck. The Royal Navy had not lost a frigate duel in living memory before this afternoon.',
    },
    {
      id: 'the-sea',
      x: 0.47,
      y: 0.8,
      scale: 2.4,
      caption:
        'Guerriere\'s masts lie in the water between the two ships, sails still bent to the yards. The whole fight took 35 minutes. Dacres had told his crew it would take 15.',
    },
  ],
} satisfies MockSceneDef;

export const thePaintersPutToSea = {
  slug: 'the-painters-put-to-sea',
  title: 'The Painters Put to Sea',
  dek: 'The best war artists in Europe switch sides mid-war',
  story:
    "For 30 years the Dutch fleet sailed with its own embedded artists: Willem van de Velde and his son, also Willem. They followed the battles in a small galliot, close enough to smell the powder, the father sketching ship by ship while the shot went overhead. Admirals altered course around them; the States paid for the service; and the resulting drawings were the seventeenth century's war photography, accurate to the last flag. Then came 1672, the year the Dutch still call the Year of Disaster, when France and England attacked together and the art market died with the economy. The van de Veldes thought about their position through one hungry winter and solved it professionally. They moved to London and went to work for Charles II at 100 pounds a year each, painting for the fleet they had spent their lives painting against.\n\nWhich is how the greatest picture of the Dutch navy's finest day came to be painted in Greenwich, for English customers, 14 years after the fact. On 21 August 1673 off Texel, De Ruyter was outnumbered as always, and fought the combined Anglo-French fleet to a standstill, and ended the war. The French squadron kept its distance, the English took the damage, and within months England signed a separate peace. The canvas follows the Gouden Leeuw, flagship of Cornelis Tromp. Tromp spent the day locked in a private duel with his rival Sir Edward Spragge, the third time the two had sought each other out in three battles. Spragge did not survive the appointment; shifting to his third flagship of the day, his boat took a shot and he drowned in the North Sea with the battle still running.\n\nThe son painted it all with the family's trademark: not glory but inventory. Every ship is identifiable; the rigging damage is plausible; the drowning men in the right foreground are neither hidden nor dramatized, just present, the way they were present in the sketchbooks. English collectors bought Dutch victories from Dutch painters and hung them without embarrassment, because the van de Veldes had made accuracy itself the product, and accuracy had no nationality.\n\nFather and son stayed in England for good, ran a studio in the Queen's House at Greenwich, and trained or influenced every English marine painter for a century. The two men who had followed De Ruyter under fire died English residents, employees of the crown their sketches had once helped to fight.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '21 August 1673',
  historicalYear: 1673,
  historicalMonthDay: toMonthDay('08-21'),
  artTitle: 'The Gouden Leeuw at the Battle of Texel',
  artCredit: 'Willem van de Velde the Younger, 1687',
  imageUrl: bucketPainting('scenes/the-painters-put-to-sea.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-painters-put-to-sea.jpg'),
  details: [
    {
      id: 'the-gouden-leeuw',
      x: 0.41,
      y: 0.57,
      scale: 2.4,
      caption:
        "The Gouden Leeuw runs under full sail, and her gilded stern has swung clear of the smoke. The Dutch flag hangs on a pole behind her, and she is Cornelis Tromp's ship. Tromp hunted Sir Edward Spragge all day, and Spragge drowned before the two of them finished.",
    },
    {
      id: 'the-drowning',
      x: 0.9,
      y: 0.86,
      scale: 3.0,
      caption:
        'A wrecked ship lies over on her side with her sails in the water. Two boats alongside are loaded right to their top edges. Nothing here is hidden or staged, because the van de Veldes sold accuracy and accuracy included this.',
    },
    {
      id: 'the-smoke',
      x: 0.62,
      y: 0.66,
      scale: 2.8,
      caption:
        'Powder smoke lies flat on the water. A dark column climbs out of the line behind it, where something has caught fire. The van de Veldes worked from a small boat inside that smoke, and the Dutch government paid them.',
    },
  ],
} satisfies MockSceneDef;

export const theGalleonOfTheYear = {
  slug: 'the-galleon-of-the-year',
  title: 'The Galleon of the Year',
  dek: 'Four years of dying for 90 minutes of payday',
  story:
    "Commodore George Anson sailed in 1740 with six ships and about 1,900 men. His orders were to raid Spain's Pacific coast in wartime, around Cape Horn, in the wrong season. The plan was optimistic, and the sea cut it down fast. The Horn wrecked or turned back half the squadron; scurvy did the real work. The disease killed over 1,300 of Anson's people in the first two years, far more than any enemy did. It killed them horribly: old wounds opening again, gums closing over teeth, men dying of the effort at the pumps. By the time the flagship Centurion limped across the Pacific to the coast of China, she was the expedition: one ship, and a crew so thin that officers stood watches as topmen.\n\nWhat kept them aboard was the galleon. Once a year Spain sent a ship from Acapulco to Manila, carrying the silver of the American mines to buy the silk and porcelain of Asia. It was the richest single cargo that moved on any ocean, and every sailor in Europe knew it. On 20 June 1743, off Cape Espiritu Santo in the Philippines, the Centurion found her. The Nuestra Señora de Covadonga sat lower in the water than a warship should, because she was not primarily a warship. The fight lasted about 90 minutes. Anson's gun crews had been drilled through the long crossing into something the galleon had never met. They fired three broadsides to her one, and left 67 Spanish dead against a handful of British. The colors came down with the year's treasure underneath them: 1,313,843 pieces of eight, counted twice.\n\nAnson came home in 1744 by finishing the circumnavigation, and London got the spectacle it loves best: the silver paraded through the City to the Tower in a convoy of 32 wagons. His share of the prize made him one of the richest officers in the navy's history. The published account of the voyage became the century's great sea bestseller. Anson himself rose to First Lord of the Admiralty, and spent his credit rebuilding the institution that had nearly killed him. He gave the navy proper uniforms, the Marines, the standing Western Squadron, and the relentless drill his gun crews had improvised off Espiritu Santo. And the 1,300 scurvy graves argued too. The naval surgeon James Lind, running the first controlled trial four years later, cited Anson's voyage on page one; the cure was in the citrus, and the Royal Navy, eventually, listened.\n\nSamuel Scott painted the 90 minutes as they must have looked from a respectful distance. Two ships, one column of smoke, and the coast Anson had cruised off for weeks lying low and blue behind them. The loneliest big battle of the century, fought over the loneliest cargo.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '20 June 1743',
  historicalYear: 1743,
  historicalMonthDay: toMonthDay('06-20'),
  artTitle: 'The Capture of the Nuestra Señora de Covadonga',
  artCredit: 'Samuel Scott, c. 1743',
  imageUrl: bucketPainting('scenes/the-galleon-of-the-year.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-galleon-of-the-year.jpg'),
  details: [
    {
      id: 'the-centurion',
      x: 0.5,
      y: 0.735,
      scale: 3.4,
      caption:
        'The Centurion has her guns going under a red English flag. Her crews had been drilled all through a crossing that killed most of the men who started it. They got off 3 broadsides for every one the galleon fired.',
    },
    {
      id: 'the-prize',
      x: 0.72,
      y: 0.735,
      scale: 3.0,
      caption:
        "The Covadonga is taking fire at the stern. Her Spanish flag is still up and men crowd along the rail. Below those decks lie 1,313,843 pieces of eight, and they were counted twice.",
    },
    {
      id: 'the-empty-sea',
      x: 0.22,
      y: 0.8,
      scale: 3.0,
      caption:
        'There is nothing here but open water and a low blue coast on the far horizon. Anson cruised off Cape Espiritu Santo for weeks. He was waiting on the one ship Spain sent that year.',
    },
  ],
} satisfies MockSceneDef;

export const typhoonComingOn = {
  slug: 'typhoon-coming-on',
  title: 'Typhoon Coming On',
  dek: 'Turner hangs a mass murder in the Royal Academy and calls it weather',
  story:
    "The ship was called the Zong, out of Liverpool, and in the autumn of 1781 she was carrying 442 enslaved Africans, roughly twice what a vessel her size could keep alive. Navigation errors stretched the crossing; water ran short; and between 29 November and 1 December the crew threw 132 living people overboard, in batches, over several days. Ten more jumped. The reason was written down without shame, because it was an accounting decision. Enslaved people who died of thirst or sickness were the owners' loss. Cargo thrown overboard to save the ship was covered by the insurers, at 30 pounds a head.\n\nEngland learned all this because the insurers declined to pay. The case that followed, Gregson v Gilbert, 1783, was a commercial dispute; the killings figured as a question of average adjustment. A jury found for the owners. On appeal, Lord Mansfield granted a retrial with a sentence that has never stopped being quoted: the case was the same as if horses had been thrown overboard. The insurers did not pay in the end. No one, then or ever, was charged with murder. The freed slave Olaudah Equiano brought the case to the abolitionist Granville Sharp, who spent years pressing for a prosecution and failed. What Sharp could do was make sure nobody was allowed to forget. The Zong became the abolition movement's founding atrocity, the thing the pamphlets meant when they said the trade was not commerce but crime.\n\nTurner painted it 59 years later, in 1840, timing the canvas for the Royal Academy wall in the summer London hosted the World Anti-Slavery Convention. He had been reading Thomas Clarkson's history of the trade, and he attached to the frame his own verses about hope and typhoons. The title performs the ship's own bookkeeping: Slavers Throwing Overboard the Dead and Dying, Typhoon Coming On, the murder tucked into a participle, the weather given top billing. In the picture the sun bleeds out into a coming storm and the slaver's masts lean away toward the horizon. The foreground comes clear only slowly: hands, a shackled leg going under, gulls and sea creatures arriving. The manacles are painted with more precision than anything else in the water.\n\nRuskin's father bought it for him, and Ruskin wrote the most famous page of praise in English art criticism about this canvas, with the subject demoted to a footnote. He lived with it for 28 years and then sold it, admitting the picture had become too painful to keep. It crossed the Atlantic, the direction the Zong had sailed, and hangs now in Boston, where the label, unlike the title, says murder.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '29 November 1781',
  historicalYear: 1781,
  historicalMonthDay: toMonthDay('11-29'),
  artTitle: 'The Slave Ship',
  artCredit: 'J. M. W. Turner, 1840',
  imageUrl: bucketPainting('scenes/typhoon-coming-on.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/typhoon-coming-on.jpg'),
  details: [
    {
      id: 'the-leg',
      x: 0.72,
      y: 0.85,
      scale: 3.2,
      caption:
        'A leg goes down foot first, the shackle and its chain painted blacker and harder than anything else in the water. Fish are already at the foot; the gulls are coming down on the rest.',
    },
    {
      id: 'the-ship',
      x: 0.3,
      y: 0.42,
      scale: 2.2,
      caption:
        'The slaver stands away toward the horizon with her masts raked over and the storm coming up behind. The owners claimed on the insurance, and Lord Mansfield said the case was the same as if horses had been thrown overboard.',
    },
    {
      id: 'the-sun',
      x: 0.514,
      y: 0.48,
      scale: 3.4,
      caption:
        'The sun goes down the middle of the picture like a wound. Ruskin praised the sea for a page and put the subject in a footnote.',
    },
  ],
} satisfies MockSceneDef;

export const theRansomOfAlgiers = {
  slug: 'the-ransom-of-algiers',
  title: 'The Ransom of Algiers',
  dek: 'A 9-hour cannonade buys 1,083 slaves their walk to the boats',
  story:
    "For three centuries the corsairs of the Barbary coast had worked the Mediterranean and beyond as a slave fishery, taking sailors, fishermen, and sometimes whole coastal villages. At its worst the raiding reached Ireland and Iceland. The ransom of Christians was a standing line in half the treasuries of Europe. The powers found it cheaper to pay tribute than to fight, and did, for generations, the young United States included. What changed in 1816 was partly conscience and mostly spare capacity. The Napoleonic wars were over and the Royal Navy had nothing left to prove. Then in May the corsairs massacred some 200 Corsican and Sicilian coral fishermen at Bona, men who worked under British protection. London sent Lord Exmouth, who as plain Edward Pellew had been the most famous frigate captain of his generation, with five ships of the line, and the Dutch added a frigate squadron under van Capellen.\n\nThe ultimatum to the Dey of Algiers was new in kind: not a ransom negotiation but a demand to abolish Christian slavery outright. The Dey declined, and on 27 August 1816 Exmouth took the Queen Charlotte in to 80 yards from the mole head, springs on her cables, and opened a bombardment that lasted about 9 hours. The fleet fired some 50,000 round shot; the Algerine navy burned at its moorings; the shore batteries were dismounted stone by stone. It was not cheap: over 800 allied casualties, a heavier butcher's bill in proportion than Trafalgar. Toward midnight the fleet pulled out with its ammunition nearly gone. The Dey did not know that. By morning he had accepted everything. He freed 1,083 slaves, most of them Italians, and they walked down to the boats. He repaid the ransom money of the previous year and signed a treaty ending, on paper, the enslavement of Christians at Algiers.\n\nOn paper is the honest phrase. The corsair economy resumed at lower volume within years, and it took the French conquest of 1830 to end it, replacing one servitude with a colonial one whose bill ran into the next century. But the day itself was real to the people in the boats, and it entered British naval lore as the fleet's last great action under sail against a fortress.\n\nGeorge Chambers painted it 20 years later for the Naval Gallery at Greenwich. He had begun on the Whitby coal sloops at 8, and he painted rigging the way a man does who has skinned his hands on it. His canvas gives the foreground not to the admirals but to the boat crews between the ships, rowing wounded men out of the smoke while the city burns like an amphitheater above them.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '27 August 1816',
  historicalYear: 1816,
  historicalMonthDay: toMonthDay('08-27'),
  artTitle: 'The Bombardment of Algiers',
  artCredit: 'George Chambers, 1836',
  imageUrl: bucketPainting('scenes/the-ransom-of-algiers.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-ransom-of-algiers.jpg'),
  details: [
    {
      id: 'the-flagship',
      x: 0.28,
      y: 0.55,
      scale: 2.2,
      caption:
        'The Queen Charlotte lies at anchor 80 yards off the harbor wall, with Exmouth\'s blue flag at her masthead. Ropes called springs run from her anchor cables so the crew can swing her and aim the guns. Exmouth had learned to fight this close as a frigate captain named Pellew.',
    },
    {
      id: 'the-burning-mole',
      x: 0.6,
      y: 0.62,
      scale: 2.2,
      caption:
        'Fire goes up in a sheet behind the mole, the stone wall that shelters the harbor. The Algerine ships in front of it burn at their moorings. By midnight the shore guns were rubble and the fleet had almost no shot left, which the Dey never learned.',
    },
    {
      id: 'the-boats',
      x: 0.3,
      y: 0.85,
      scale: 2.4,
      caption:
        'Chambers gives the whole foreground to the boat crews. They are pulling wounded men clear while shot still throws up water around them. Exmouth arranged the commission himself, 20 years after the day.',
    },
  ],
} satisfies MockSceneDef;

export const theBrigThatSaidNo = {
  slug: 'the-brig-that-said-no',
  title: 'The Brig That Said No',
  dek: 'A brig of 18 guns declines the invitation of 184',
  story:
    "On 14 May 1829 Russia and Turkey were at war over the Black Sea. The 18-gun brig Mercury was caught alone by the two fastest ships of the line in the Ottoman fleet. The Selimiye carried 110 guns and the Real Bey 74. The arithmetic was 184 guns to 18, and the wind was light, which favored the big ships. Custom offered a clean exit; a small vessel overhauled by force of that order could strike her colors with her honor intact, and the Turkish admirals, by every account, expected exactly that.\n\nHer captain, Alexander Kazarsky, 31 years old, called his officers to council, and the council voted for the other tradition. The colors were nailed up, and a loaded pistol was laid on the capstan beside the powder magazine. The last officer alive was to fire it into the powder rather than let the ship be taken. Then the Mercury fought a running battle of over three hours against two floating fortresses, her sweeps out in the calms. Her gunners had orders to aim high, at spars and rigging rather than hulls. A brig cannot sink a three-decker, but she can undress one. A chain-shot cut the Selimiye's rigging and forced her out of the chase; the Real Bey pressed on, took a wrecked topmast of her own, and gave it up. The Mercury came home to Sevastopol with 22 holes in her hull, some 300 hits counted in her masts and rigging, four men dead, and the pistol on the capstan unfired.\n\nAn officer of the Real Bey, writing home, produced the tribute the Russians have quoted ever since. If there are miracles in history, this was one, and the name of the little brig deserved to be written in gold. Sevastopol raised a monument to Kazarsky in 1839, the first public monument in the city's history, inscribed with four words: an example to posterity. The example was needed sooner than the marble. Kazarsky himself was dead by 1833, at 36, poisoned, it was widely believed, while investigating dockyard corruption for the tsar. His courage was no armor in that war.\n\nAivazovsky, who was born on that coast and painted its water for 60 years, returned to the Mercury late in life. In the 1892 canvas the brig is small, white-sailed, and precisely between her two executioners, the sea running easy and enormous underneath all three. He signed it in the corner 8 years before he died, one more picture in the 6,000 or so of his life, and the only one where the smallest ship in sight is winning.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '14 May 1829',
  historicalYear: 1829,
  historicalMonthDay: toMonthDay('05-14'),
  artTitle: 'Brig Mercury Attacked by Two Turkish Ships',
  artCredit: 'Ivan Aivazovsky, 1892',
  imageUrl: bucketPainting('scenes/the-brig-that-said-no.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-brig-that-said-no.jpg'),
  details: [
    {
      id: 'the-brig',
      x: 0.62,
      y: 0.5,
      scale: 2.4,
      caption:
        'The Mercury is the small ship in the middle, with her flag still flying at the masthead. A much bigger warship stands on either side of her. A brig cannot sink a warship with 3 gun decks, so her gunners shot at its masts and rigging instead.',
    },
    {
      id: 'the-liners',
      x: 0.35,
      y: 0.42,
      scale: 2.0,
      caption:
        'A red Ottoman flag flies at her masthead above 3 rows of gun ports, one row for each deck of guns. Custom let a small ship surrender to one this size without shame. The Mercury\'s officers voted against it and laid a loaded pistol beside the powder store.',
    },
    {
      id: 'the-signature',
      x: 0.12,
      y: 0.86,
      scale: 3.4,
      caption:
        'Aivazovsky signed the swell in the bottom corner and dated it 1892. He had painted the Mercury once before, in 1848, and came back to her 44 years later.',
    },
  ],
} satisfies MockSceneDef;

export const nineInTheShallop = {
  slug: 'nine-in-the-shallop',
  title: 'Nine in the Shallop',
  dek: 'The crew gives their captain a small boat and the horizon',
  story:
    "Henry Hudson spent four voyages hunting a shortcut to Asia through the ice. Two were for English merchants, over the top of Norway. One was for the Dutch, and ended a thousand miles the wrong way up the river that now carries his name. The last, in 1610, took him through the strait into the enormous cold bay where everything stopped. The Discovery pushed south all autumn, Hudson certain the Pacific lay around each next headland, until James Bay closed like a trap and the ship froze in for the winter. Scurvy came, and hunger, and the particular rot that idle months in the dark work on a crew already short on trust. Hudson quarreled with his officers, demoted his mate, and played favorites with the bread. By the June thaw of 1611 the men who wanted to sail home outnumbered the men still willing to look for China on quarter rations.\n\nOn 22 June the mutineers came for him at dawn. The leaders were Robert Juet, the demoted mate, and Henry Greene, a young man Hudson had taken aboard as a personal favor and fed at his own table. They put the captain into the ship's shallop, an open boat about the size of a modern dinghy. His teenage son John went in with him, along with seven men who were sick, or loyal, or both. The carpenter Philip Staffe climbed in of his own accord, the one clear hero of the story. Nine in all, with a musket, an iron pot, some meal, and the horizon. The shallop raised its small sail and chased the Discovery for a while. Then the ship made full sail, and the boat fell astern, and no European ever saw any of the nine again.\n\nThe bay took its share of them on the way out. Greene was killed within weeks by Inuit at the mouth of the strait. Juet starved to death before the ship reached Ireland. Of 13 mutineers, 8 came home. They were questioned, and years later tried for murder rather than mutiny, and acquitted in an afternoon. The court knew perfectly well that these were the only living men who could navigate the bay, and England still wanted the bay. Searches in 1612 found no trace. The water Hudson died on took his name and kept it.\n\nJohn Collier painted the ending in 1881 and gave the boat nowhere to go. The son kneels at his father's knee and holds his hand. A man in a red cap sits wrapped in a fur. Hudson keeps one hand on the stern of a boat with nowhere left to steer to, and looks straight out of the picture, past the ice. It hangs in the Tate.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '22 June 1611',
  historicalYear: 1611,
  historicalMonthDay: toMonthDay('06-22'),
  artTitle: 'The Last Voyage of Henry Hudson',
  artCredit: 'John Collier, 1881',
  imageUrl: bucketPainting('scenes/nine-in-the-shallop.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/nine-in-the-shallop.jpg'),
  details: [
    {
      id: 'the-eyes',
      x: 0.62,
      y: 0.3,
      scale: 2.4,
      caption:
        'A man in a fur cap stares out of the picture with the ice behind him. This is Henry Hudson. No likeness of Hudson was made in his lifetime, so Collier invented the face.',
    },
    {
      id: 'the-son',
      x: 0.66,
      y: 0.62,
      scale: 2.4,
      caption:
        "A boy holds his father's hand. He is John Hudson, and he had sailed on all four of his father's voyages. The mutineers put him in the boat too.",
    },
    {
      id: 'the-sick-man',
      x: 0.15,
      y: 0.72,
      scale: 2.4,
      caption:
        'A man in a red cap sits wrapped in a fur on the boat\'s bare ribs. He is one of the six sick or loyal men the mutineers put over the side with Hudson.',
    },
  ],
} satisfies MockSceneDef;

export const aPassageForMe = {
  slug: 'a-passage-for-me',
  title: 'A Passage for Me',
  dek: 'A fleet chases a fleet into a bay full of rocks, in a November gale',
  story:
    "In 1759 France's plan for winning the Seven Years' War was to land an army in Britain, and the flat-bottomed boats were actually built, waiting in the Morbihan. The escort was to be the Brest fleet under Marshal Conflans. All summer, Admiral Sir Edward Hawke kept it shut in port by doing something no navy had managed before: he held squadrons on station week after week without a break. Supply ships fed and watered them at sea, and the men's health was run like a supply problem of its own. In mid-November a gale finally blew Hawke off his post. Conflans came out with 21 ships of the line and ran south for Quiberon Bay, a bay full of reefs and shoals with the wind blowing straight onto the rocks. He was certain of one thing above all, that no admiral would follow him in there, in a rising November storm, without local pilots, with the light failing.\n\nHawke arrived off the bay in the early afternoon of 20 November, carrying full sail in wind strong enough to take the masts out of a ship. His own sailing master is supposed to have stated the obvious: rocks, sands, and no local pilot aboard. The reply, in the version the navy chose to remember, has outlived every chart of the bay: where there is a passage for the enemy, there is a passage for me. The British fleet went in through the entrance under storm canvas, among breakers, with the light already going. The fighting was at close range in a heavy sea. The Thésée sank in minutes: she opened her lower gunports to fight, the water came straight in, and 600 men went down with her. The Superbe went under after two broadsides. The French flagship Soleil Royal ran aground in the night and was burned by her own crew. About 2,500 French sailors drowned against a few hundred British lost, mostly on two ships that found the shoals.\n\nThe invasion of Britain was cancelled, and never revived. The year 1759 had already brought Quebec and Minden, and the British called it the wonderful year. The song written that autumn to celebrate it, Heart of Oak, is still the Royal Navy's official march. Quiberon settled two larger questions as well. A fleet could be kept at sea for as long as it took. And there was now a navy that would follow an enemy anywhere, including places nobody sane sailed in November.\n\nNicholas Pocock was not at Quiberon Bay. He was commanding merchant ships in 1759, and only turned painter years later. He made this canvas 53 years after the battle, for a public that already knew the line by heart, and he gave the storm as much of the picture as the enemy.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '20 November 1759',
  historicalYear: 1759,
  historicalMonthDay: toMonthDay('11-20'),
  artTitle: 'The Battle of Quiberon Bay',
  artCredit: 'Nicholas Pocock, 1812',
  imageUrl: bucketPainting('scenes/a-passage-for-me.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-passage-for-me.jpg'),
  details: [
    {
      id: 'the-flagship',
      x: 0.42,
      y: 0.58,
      scale: 2.4,
      caption:
        "A warship comes on under full sail with her guns firing. She is the Royal George, Hawke's flagship. She rolled over at her own anchor 23 years later, with hundreds of visitors aboard.",
    },
    {
      id: 'the-dismasted',
      x: 0.17,
      y: 0.55,
      scale: 2.4,
      caption:
        'A ship has lost her masts. Her rigging drags in the water while the fight goes on around her. The Thésée opened her lower gunports to fight that afternoon, and the sea came in and drowned about 600 men.',
    },
    {
      id: 'the-weather',
      x: 0.35,
      y: 0.42,
      scale: 2.0,
      caption:
        'A plain blue flag flies at the masthead. That is an admiral\'s flag, and in November 1759 Hawke was Admiral of the Blue. Pocock had commanded merchant ships before he painted them, and he gives the weather as much canvas as the fleets.',
    },
  ],
} satisfies MockSceneDef;

export const tollForTheBrave = {
  slug: 'toll-for-the-brave',
  title: 'Toll for the Brave',
  dek: 'A 100-gun ship rolls over at anchor with families still aboard',
  story:
    "The Royal George was the largest warship in the world when she was launched, and still one of the grandest in 1782. She carried 100 guns, she had been Hawke's flagship in the storm chase at Quiberon Bay, and she had 26 years of service in her timbers. On 29 August she lay at anchor at Spithead, among the fleet getting ready to relieve Gibraltar. She needed a small repair just below the waterline, and the war allowed no time in dock. So it was done the routine way: guns hauled over to one side to tip the ship far enough to bring the spot out of the water. It was so routine that the ship stayed open for business. Supply boats worked alongside. Sailors of the day were rarely let ashore, so the visitors came to them: wives and children saying goodbye, tradesmen, several hundred people by later estimates who did not belong to the crew.\n\nA lighter, a flat barge, tied up on the low side to load rum, putting weight exactly where there was none to spare. The tilt deepened until the sea stood at the lips of the open lower gunports. The carpenter saw it and twice asked the officer of the watch to right the ship. He was waved off twice. Then the water made the decision. It came through the ports in a sheet. The ship lurched, hung, and went down where she lay, in minutes, in full view of the anchored fleet. Perhaps 900 people drowned, among them some 300 women and children. Rear-Admiral Richard Kempenfelt died with them, writing at his desk when the tilt jammed his cabin doors shut. About 230 were pulled from the water.\n\nThe court martial acquitted every surviving officer and blamed the general state of the ship's timbers, a verdict that spared the routine and satisfied almost nobody. Cowper wrote the poem whose first line became the disaster's name, Toll for the brave, and the nation took the strange comfort it takes in disasters with no villain. The wreck lay in the fleet's own anchorage for decades. In the 1830s the Deane brothers went down on her wearing a thing they had just invented, the diving helmet. The Royal George became the place where helmet diving was worked out. The Royal Engineers finished the wreck off with gunpowder. Some of her bronze guns were melted down for the base of Nelson's Column.\n\nJohn Christian Schetky was marine painter to three monarchs in a row, and he exhibited this sinking in 1840, while the salvage was still in the papers. He shows the hull on her beam ends, people crawling along her exposed side, and the small boats rowing hard toward a disaster that was over before anyone reached it.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '29 August 1782',
  historicalYear: 1782,
  historicalMonthDay: toMonthDay('08-29'),
  artTitle: 'Loss of the Royal George',
  artCredit: 'John Christian Schetky, 1840',
  imageUrl: bucketPainting('scenes/toll-for-the-brave.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/toll-for-the-brave.jpg'),
  details: [
    {
      id: 'the-heel',
      x: 0.6,
      y: 0.6,
      scale: 2.4,
      caption:
        'The Royal George on her beam ends, with people crawling along her exposed side and up the rigging. She had been tipped over on purpose, to reach a repair just below the waterline without going into dock.',
    },
    {
      id: 'the-boats',
      x: 0.5,
      y: 0.88,
      scale: 2.4,
      caption:
        'A boat comes up under the wreck with survivors already aboard. About 230 people came out of the water alive that morning, and roughly 900 did not.',
    },
    {
      id: 'the-fleet',
      x: 0.13,
      y: 0.55,
      scale: 2.2,
      caption:
        'A ship of the Gibraltar relief fleet at anchor with her red ensign up. The fleet sailed for Gibraltar on schedule, without the Royal George.',
    },
  ],
} satisfies MockSceneDef;

export const theBlindEye = {
  slug: 'the-blind-eye',
  title: 'The Blind Eye',
  dek: 'Nelson lifts the telescope to his blind eye and keeps firing',
  story:
    "The war that brought a British fleet to Copenhagen in the spring of 1801 was a lawyers' war about paperwork: the right to stop and search neutral ships trading with France. Denmark, Sweden, Prussia and Russia had formed a League of Armed Neutrality to refuse the searches. London decided to break the League at its weakest point, before the Baltic ice melted and let the Russian fleet out. Admiral Sir Hyde Parker commanded. His second, fresh from the Nile, was Vice-Admiral Nelson, who asked for 12 ships and the narrow channel along the city's waterfront. The Danes had moored blockships and floating gun batteries along it, with the Trekroner fort at the end.\n\nOn the morning of 2 April, three of the 12 ships ran aground on the shoals before firing a shot. The rest anchored and slugged it out at 200 yards, hotter and longer than anyone had promised. Four miles off, Parker watched through the smoke and made the decision of a careful man with a bad view. He hoisted signal 39: discontinue the action. Aboard the Elephant, Nelson kept walking the quarterdeck. He told his flag captain that he had only one eye, and so had a right to be blind sometimes. Then he put the telescope to the eye blinded at Corsica and said he really could not see the signal. His own signal for close action stayed at the masthead. Around them, captains chose which admiral to believe, and believed Nelson.\n\nWithin the hour the Danish line was falling silent, gun by gun. Nelson sent a note ashore, addressed to the brothers of Englishmen, the Danes. It offered a truce before the captured ships, burning with their wounded still aboard, turned into a slaughter nobody could stop. The Crown Prince accepted. The dead and wounded came to near a thousand British and rather more Danish. The League it was all for dissolved within weeks anyway. Tsar Paul had been murdered in March, and his successor wanted no quarrel with London. Nelson got a viscountcy. Parker was recalled a month later and never given a ship again. The phrase turning a blind eye left the fleet and went into the language.\n\nJohn Thomas Serres was Marine Painter to George III, and the Admiralty also paid him to draw coastlines for its charts. He put the city's spires above the smoke and the two anchored lines firing into each other. One rowing boat crosses the open water in front, on an errand nobody wrote down.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '2 April 1801',
  historicalYear: 1801,
  historicalMonthDay: toMonthDay('04-02'),
  artTitle: 'The Battle of Copenhagen',
  artCredit: 'John Thomas Serres, 1801',
  imageUrl: bucketPainting('scenes/the-blind-eye.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-blind-eye.jpg'),
  details: [
    {
      id: 'the-spires',
      x: 0.43,
      y: 0.655,
      scale: 2.6,
      caption:
        'The spires of Copenhagen stand behind the smoke. The Danish ships were moored in front of their own city, and people watched the fight from the shore.',
    },
    {
      id: 'the-ensigns',
      x: 0.7,
      y: 0.55,
      scale: 2.2,
      caption:
        'British ships lie at anchor with their gun ports open and blue ensigns flying. Nelson fought from the Elephant. He had left his own flagship behind because she sat too deep for this shallow channel.',
    },
    {
      id: 'the-rowboat',
      x: 0.66,
      y: 0.8,
      scale: 2.8,
      caption:
        'A boat of oarsmen pulls across the open water in front of the anchored ships. Nelson\'s truce note went ashore by boat while the guns were still firing. It was addressed to the brothers of Englishmen.',
    },
  ],
} satisfies MockSceneDef;

export const theLighthouseKeepersDaughter = {
  slug: 'the-lighthouse-keepers-daughter',
  title: "The Lighthouse Keeper's Daughter",
  dek: 'A 22-year-old and her father row out into a North Sea gale',
  story:
    "The Forfarshire was a modern ship, a paddle steamer on the Hull to Dundee run, and the modern part is what killed her. Her boilers failed in a full North Sea gale and the sails could not hold her. In the small hours of 7 September 1838 she struck Big Harcar rock in the Farne Islands and broke in two. The stern half went down with most of the 60-odd people aboard. The bow half wedged on the rock with a dozen survivors clinging to it in the dark. One of them was a woman named Sarah Dawson, holding two children who died of cold in her arms before daylight.\n\nAt dawn, in the Longstone lighthouse a mile away, the keeper's daughter Grace Darling saw movement on the rock through a telescope. She was 22, the seventh of nine children, and had grown up out on the Farne Islands while her father kept the light. Her father William judged the sea too heavy for the mainland lifeboat to come out. That left one boat, their own, a 21-foot open rowing boat, and one crew, the two of them, because her brothers were ashore. They took the long way round, a mile of rowing in the shelter of the islands, because a straight line could not be rowed at all. At the rock, William jumped across to sort the living from the dead. Grace held the boat off the breaking reef by herself, an oar in each hand, in a gale. That is the part of the story working boatmen refused to believe until they had seen the water for themselves. Nine people came off in two trips, and she rowed the first load home through the same sea.\n\nWhat happened next had no precedent, because the mass newspaper had only just been invented and had never met a heroine before. Within weeks Grace Darling was the most famous young woman in the empire. Money was raised for her by public subscription, Wordsworth wrote a poem, and Queen Victoria sent 50 pounds. Portrait painters queued at the lighthouse in such numbers that her father complained the sittings were interrupting his work. Circus promoters offered money for her to sit in a boat on a stage. She declined the circus, answered the letters, stayed at the lighthouse, and died of tuberculosis four years later, at 26. The lifeboat service took her up after her death, and still names boats after her.\n\nThe painting is French. Charles Achille d'Hardiviller made it in 1838, the same year as the rescue, which shows how fast the story crossed the Channel. He put the lighthouse out on the horizon, the wreck's red flag above the survivors, and Grace standing in the boat with her arm out. She is dressed far better than anyone rows in. Heroines were a new subject, and the painter reached for the older costume of angels.",
  eraId: toEraId('age-of-sail'),
  historicalDateLabel: '7 September 1838',
  historicalYear: 1838,
  historicalMonthDay: toMonthDay('09-07'),
  artCredit: "Charles Achille d'Hardiviller, Grace Darling and Her Father Rescuing Survivors, 1838",
  imageUrl: bucketPainting('scenes/the-lighthouse-keepers-daughter.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-lighthouse-keepers-daughter.jpg'),
  details: [
    {
      id: 'the-reach',
      x: 0.47,
      y: 0.4,
      scale: 2.4,
      caption:
        "Grace Darling stands in the boat with one arm out to the survivors and an oar still in her other hand. The boat was her family's own, open and 21 feet long. Her father was the only other person rowing.",
    },
    {
      id: 'the-rock',
      x: 0.21,
      y: 0.43,
      scale: 2.3,
      caption:
        'Survivors crowd the rock under the wreck\'s red flag, with the steamer\'s smashed paddle wheel behind them. Sarah Dawson is one of them. She had held 2 children through the night, and both died of cold before daylight.',
    },
    {
      id: 'the-lighthouse',
      x: 0.87,
      y: 0.42,
      scale: 2.4,
      caption:
        'Longstone lighthouse stands out on its rock, where the Darlings lived and kept the light. Her father William is at the oars in front of it. The two of them were the entire crew.',
    },
  ],
} satisfies MockSceneDef;
