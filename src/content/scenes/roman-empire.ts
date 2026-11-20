import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const theLastDayOfPompeii = {
  slug: 'the-last-day-of-pompeii',
  title: 'The Last Day of Pompeii',
  dek: 'Vesuvius turns noon to midnight over the Bay of Naples',
  story:
    'The mountain has smoked before. No one alive remembers it doing anything worse, so the bakers of Pompeii slide 81 loaves into the ovens and the forum fills as it always does. It is election season: fresh paint on the walls asks votes for Helvius Sabinus for aedile, and the fullers and the fish-sauce men endorse their candidates like everyone else. Half the town is still scaffolding from the earthquake 17 years back; masons are everywhere, and repair is ordinary life here. For four days small tremors have been knocking cups from shelves. Campania shakes often. Vesuvius is simply the green mountain where the vineyards grow, quiet for so many centuries that nobody thinks of it as anything but scenery.\n\nJust after midday, Vesuvius opens. A column of ash and pumice climbs 20 miles into the sky, spreads like a pine tree, and blots out the sun. Across the bay at Misenum, a 17-year-old watches the cloud and will later fix its shape in two letters so exact that volcanologists still call this kind of eruption Plinian, after his family. His uncle Pliny, admiral of the fleet and author of a 37-book natural history, orders a fast ship readied so he can look closer. Then a note arrives from a friend named Rectina, trapped at the foot of the mountain, and curiosity becomes a rescue: the warships go out. Pumice rattles on the decks as they run in under the cloud. Fortune favors the brave, the admiral tells his helmsman, and steers for Stabiae.\n\nIn Pompeii, stones begin to fall, softly at first, a grey hail that people shake from their hair. By evening the roofs are giving way under the weight. Some flee toward the sea and find it pulled back, boats stranded in wet sand. Others shelter in cellars with lamps and coins and their children, waiting for morning. At Stabiae the old admiral dines with his terrified hosts. He sleeps loudly enough to be heard through the wall, to prove there is nothing to fear. At last he walks out with a pillow tied over his head against the falling stone. Morning does not come. When the surge sweeps down the mountain at dawn, a tide of burning gas and ash, it is faster than anything on legs. It crosses vineyards, walls, theaters, and harbor in minutes. On the beach the admiral stands up between two slaves, and falls. The fleet he launched saved hundreds of strangers. It could not come back for him.\n\nThe city sleeps under 16 feet of ash; its small neighbor Herculaneum lies deeper, under 60 feet of rock that arrived as burning mud. Farmers plough the ridge and call it La Città, the city, without remembering why. When diggers reach the streets 1,700 years later, the paint is still on the walls, still asking votes for Helvius Sabinus, in an election that was never held. In 1863 Giuseppe Fiorelli notices hollows in the hardened ash and fills them with plaster. The hollows turn out to be the people: a man shielding his face, a dog at the end of its chain. In one bakery the excavators open an oven shut since the last Roman morning. The 81 loaves are still inside, scorched black but whole, each one scored into eight neat wedges for customers who were coming back within the hour.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '24 August, AD 79',
  historicalYear: 79,
  historicalMonthDay: toMonthDay('08-24'),
  artCredit: 'After Karl Bryullov, 1833',
  imageUrl: bucketPainting('scenes/the-last-day-of-pompeii.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-last-day-of-pompeii.jpg'),
  details: [
    {
      id: 'lightning',
      x: 0.79,
      y: 0.14,
      scale: 2.4,
      caption:
        'Two statues pitch head first off a roof into the red. Bryullov lets no daylight into the picture. The red glow is the mountain, and the white streaks are lightning.',
    },
    {
      id: 'painter',
      x: 0.258,
      y: 0.413,
      scale: 2.8,
      caption:
        'The young man carrying a painter’s box on his head is Bryullov himself. He put himself in the crowd with his brushes and paint pots.',
    },
    {
      id: 'samoilova',
      x: 0.545,
      y: 0.828,
      scale: 3.2,
      caption:
        'The woman thrown from her chariot wears the face of Countess Yulia Samoilova. She was Bryullov\'s patron and closest friend. The child beside her is still alive and reaching for her.',
    },
    {
      id: 'spilled-jewels',
      x: 0.44,
      y: 0.9,
      scale: 3.2,
      caption:
        'Gold chains, a hand mirror and an open jewel box lie spilled on the paving beside her. Bryullov’s early versions had a thief crouched over them, and he painted the thief out.',
    },
  ],
} satisfies MockSceneDef;

export const theDieIsCast = {
  slug: 'the-die-is-cast',
  title: 'The Die Is Cast',
  dek: 'Caesar pauses at a shallow river that divides law from war',
  story:
    'The Rubicon is not much of a river. A man could wade it without wetting his belt. But the law of Rome is written in its water: this stream is the legal edge of Italy, and a general who crosses it under arms is no longer a general. He is an invader, and every man who follows him is a traitor. The trap on the far bank has been years in the making. The alliance that ran the Republic is dead. Crassus was killed with his army in the east. Julia, Caesar’s daughter and Pompey’s beloved wife, died in childbirth. Pompey has gone over to the Senate men, and they have sworn to prosecute Caesar the moment his command expires and he is a private citizen again. This month the Senate voted its final decree, the one that suspends everything, and ordered him to disband. Behind him stands the Thirteenth Legion, which has followed him for eight years of Gaul and would follow him into the sea.\n\nHe gives the day to appearances. At Ravenna he inspects a school of gladiators, bathes, and sits through a public banquet as though nothing is happening. After sunset he slips out with a few officers in a hired cart. Suetonius swears the mules pulling it were borrowed from a bakehouse next door. Caesar spends part of the night lost, wandering lanes in the dark. Toward dawn a local guide is found to bring the party down to the river, where the cohorts are waiting.\n\nHe halts on the near bank, and for once in his life, hesitates. To his officers he says the plain arithmetic out loud: to stop here is ruin for me; to cross is ruin for everyone. The soldiers will tell it differently afterward. A figure of more than human size appeared on the bank, seized a trumpet from a signalman, sounded the advance, and crossed. What Caesar actually says is a gambler’s line, and he says it in Greek, quoting a comic playwright the way educated men quote for luck: let the die be cast. Latin history will file it as alea iacta est. The horses step into the water.\n\nThe news outruns him to Rome and lands like a wave. Pompey once boasted that he had only to stamp his foot for legions to spring out of the soil of Italy. He stamps it now and finds nothing there. Within days he and most of the Senate abandon the city, in such haste that they leave the state treasury sitting in the temple of Saturn for Caesar to collect. The civil war that begins in this stream will be fought in Spain, Greece, Egypt, Africa, and back again for four years, and Caesar will win all of it, and rule alone, briefly. The Republic has five years to live.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '10 January, 49 BC',
  historicalYear: -49,
  historicalMonthDay: toMonthDay('01-10'),
  artTitle: 'César',
  artCredit: 'Adolphe Yvon, 1875',
  imageUrl: bucketPainting('scenes/the-die-is-cast.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-die-is-cast.jpg'),
  details: [
    {
      id: 'caesars-face',
      x: 0.46,
      y: 0.3,
      scale: 2.8,
      caption:
        'Caesar rides out with a laurel crown on his head. A small blue globe of the earth is balanced on his open palm. Yvon hands him the world before the war that wins it has even started.',
    },
    {
      id: 'the-eagle',
      x: 0.65,
      y: 0.23,
      scale: 2.4,
      caption:
        'A naked woman flies over Caesar\'s head with a drawn sword. Her hair and black cloak stream behind her. Yvon made his name painting battles for Napoleon III, and here he sends the war on ahead of the man who starts it.',
    },
    {
      id: 'the-water',
      x: 0.42,
      y: 0.78,
      scale: 2.4,
      caption:
        'The horse comes down beside a dying man’s head. Yvon laid the bodies across the whole bottom of the picture and put Caesar above them, untouched.',
    },
  ],
} satisfies MockSceneDef;

export const theElephantsInTheSnow = {
  slug: 'the-elephants-in-the-snow',
  title: 'The Elephants in the Snow',
  dek: "An army walks over the roof of Europe to knock on Rome's back door",
  story:
    "The column has been climbing for over a week, and the mountain people have learned its rhythm. They wait above the narrow places and roll boulders onto the baggage train, then vanish; the passes do the rest. It is late autumn of 218 BC, and snow is already lying on the heights. The strangest army Europe has seen is strung out along the track: Spanish infantry, Numidian horsemen, Balearic slingers, and 37 war elephants. They are walking to Italy the one way Rome never thought to guard. Rome planned for invasions by sea. Hannibal, 29 years old, is bringing his war overland, through the Alps, in winter's front hallway.\n\nHe had been raised for exactly this. At nine, before an altar in Carthage, his father made him swear never to be a friend to Rome. The boy grew up in an army camp in Spain the way other children grow up in a trade. When the war came he moved first, out of Spain in spring with somewhere near 50,000 men. The mountains took a horrifying share: ambushes in the gorges, animals lost over the edges, cold, hunger, desertion. Polybius, who talked to survivors, says 20,000 infantry and 6,000 cavalry walked down into Italy, roughly half of what had entered the foothills 15 days before.\n\nWhich pass he used is still an open file. Polybius climbed the Alps himself to check the ground, and he interviewed men who had made the march. He also read the bronze tablet Hannibal left at a temple in southern Italy, listing his own troop numbers. None of it settles the route. Scholars have fought for centuries over half a dozen possible passes. At one high pass a team recently found a churned layer of soil, full of dung and dated close to the right decade. Thousands of animals had gone through. It is the kind of evidence the story deserves: not an inscription, not a sword, but a signature in mud. On the descent a landslide had cut the track. Livy tells the story every schoolchild got afterward. The engineers heaped timber on the rock and burned it, poured sour wine into the cracks, and broke the stone apart with fire and vinegar. Most of the elephants, astonishingly, survived the crossing. Italy's winter would kill nearly all of them within the year.\n\nIt bought the most frightening 15 years in Roman history. Trebia, Trasimene, Cannae: at Cannae alone Rome lost more men in an afternoon than America lost in Vietnam, and it still refused to make peace. Hannibal stayed in Italy a decade and a half and never lost a pitched battle there. It did not matter.\n\nTurner saw the picture in a thunderstorm over Yorkshire. Watching the black mass wheel over the hills of Farnley in 1810, he shouted to his host's son that in two years he would see it again as Hannibal crossing the Alps. He kept the promise. The storm is bent into one enormous curling wave of weather, with the sun a pale coin behind it. The army is a struggle of small figures in the foreground, and tribesmen are stripping the stragglers. The hero is nowhere. One elephant appears far down the pass, the size of a fly against the light of Italy. When he exhibited it in 1812 he attached, for the first time, lines from his own gloomy poem, The Fallacies of Hope. Europe was watching another commander who had crossed the Alps to remake the world, and Turner's answer to the heroic portraits of Napoleon was a mountain range that does not care.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'Autumn, 218 BC',
  historicalYear: -218,
  historicalMonthDay: null,
  artTitle: 'Snow Storm: Hannibal and his Army Crossing the Alps',
  artCredit: 'J. M. W. Turner, 1812',
  imageUrl: bucketPainting('scenes/the-elephants-in-the-snow.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-elephants-in-the-snow.jpg'),
  details: [
    {
      id: 'the-sun',
      x: 0.28,
      y: 0.14,
      scale: 2.6,
      caption:
        'The sun shows through the blizzard as a flat pale disc with no warmth in it. Turner bends the whole storm into one curve and hangs the sun inside it.',
    },
    {
      id: 'the-stragglers',
      x: 0.27,
      y: 0.82,
      scale: 2.6,
      caption:
        'Two tribesmen bend over a fallen soldier and strip him where he lies. Turner printed a line of his own verse with the picture, about the Salassian tribe hanging on the army’s fainting rear.',
    },
    {
      id: 'the-elephant',
      x: 0.66,
      y: 0.87,
      scale: 2.6,
      caption:
        'Broken rock fills the pass, with one man bent double between the boulders. The white sheet coming in from the right is snow, still falling on the back of the column.',
    },
  ],
} satisfies MockSceneDef;

export const theCourseOfEmpire = {
  slug: 'the-course-of-empire',
  title: 'The Course of Empire',
  dek: 'The empire ends with a signature, a pension, and a villa by the sea',
  story:
    "The emperor of the West is about 15 years old, and on the fourth of September, 476, he signs away the empire. His name is a bad joke history could not have improved: Romulus, after the founder, Augustus, after the first emperor, and behind his back Romulus Augustulus, the little Augustus. He had been emperor for 10 months, and only because his father Orestes needed a Roman face on his regime. Orestes was a soldier who had once been secretary to Attila the Hun, and he had taken Ravenna by force. The face was the boy's. The power was the army's, and the army was no longer particularly Roman: Germanic soldiers who had been promised land in Italy and not been given it.\n\nTheir officer Odoacer made the obvious offer, land for loyalty, and when Orestes refused, the mutiny took a few weeks. Orestes was caught and executed at Piacenza. At Ravenna, Odoacer found the boy emperor and did something almost unheard of in the fifth century: nothing. He took pity, the sources say, on the boy's youth and his good looks. He granted him a pension of 6,000 gold pieces a year and sent him to live with his relatives on the Bay of Naples. The house was a fortified villa that had once belonged to Lucullus, the republic's most famous gourmet. Then Odoacer mailed the imperial regalia to Constantinople with a message of studied modesty: one emperor was enough for the world, and he would govern Italy merely as king. No new Caesar was appointed in the West. Nobody thought to announce that anything had ended, because on the ground almost nothing had. The Senate still met and the taxes still moved. Odoacer ruled the way the last several strongmen had, only without the puppet.\n\nThe fall of Rome, as a date and a headline, was invented afterward. It took a Byzantine chronicler two generations later to point at 476 and say there, that is where the Western empire died, and historians have been arguing with him ever since. As for the boy, the record simply loses him. A letter from the next king's officials, 30 years later, seems to show him still alive at the villa and still drawing the money. The last emperor of the West grew old by the sea, on a pension from the world that had replaced him.\n\nThomas Cole finished Destruction in 1836, the fourth of the five canvases in his Course of Empire. He made the ending everything the paperwork was not. Ships burn in the harbor and the crowd fights across a broken bridge on a wooden beam. Above all of it a colossal marble warrior strides on, his head already gone. Cole was watching his own young republic swell with money and confidence, and hung the series in a merchant's parlor as a forecast.\n\nThe five canvases run a single harbor city from wilderness to wilderness: hunters in skins, then shepherds, then a marble capital at glittering noon, then this, then silence, one broken column with a heron's nest. Cole put the same landmark in all five pictures, a crag with a boulder balanced on top. It sits at the edge of every scene. The place never changes, only the people. His patron Luman Reed, a self-made grocery millionaire, died before the series was finished. New York exhibited it to crowds in 1836 anyway. Audiences were meant to leave asking where on the arc their own republic stood, and Cole, watching the boom years around him, had a private answer he mostly kept out of the catalog. The empire in the painting dies the way memory insists Rome must have. The real one ended with a signature and a change of address.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'AD 476',
  historicalYear: 476,
  historicalMonthDay: null,
  artTitle: 'The Course of Empire: Destruction',
  artCredit: 'Thomas Cole, 1836',
  imageUrl: bucketPainting('scenes/the-course-of-empire.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-course-of-empire.jpg'),
  details: [
    {
      id: 'the-colossus',
      x: 0.78,
      y: 0.22,
      scale: 2.2,
      caption:
        'The giant marble soldier strides on with his shield up and his head broken off. Cole copied the pose from an ancient statue called the Borghese Gladiator, which still has its head.',
    },
    {
      id: 'the-bridge',
      x: 0.32,
      y: 0.65,
      scale: 2.6,
      caption:
        'The middle of the stone bridge has fallen and the fight has moved onto a wooden beam laid across the gap. Men and a white horse are packed onto it, and the ones who lose their footing drop into the sea.',
    },
    {
      id: 'the-leap',
      x: 0.45,
      y: 0.8,
      scale: 2.8,
      caption:
        'The woman in white has run to where the stone breaks off, open water below her. A soldier is one stride behind with his arm out, and there is nowhere further to go.',
    },
  ],
} satisfies MockSceneDef;
export const theWomenBetweenTheSpears = {
  slug: 'the-women-between-the-spears',
  title: 'The Women Between the Spears',
  dek: 'Rome stole its wives at a festival, then the wives stopped the war',
  story:
    'Rome is barely a year old and short of women. Romulus has walled a hill and filled it with runaways and landless men, and the neighboring towns will not marry their daughters into a settlement of thieves. So he lays a trap dressed as a party. He announces games in honor of the god Consus, spreads the invitation up and down the valley, and the Sabines come in whole families to watch, curious about the new city. At a signal the young Romans draw their daggers, seize the unmarried girls out of the crowd, and drive the fathers off empty-handed. Livy counts the abduction as the first crime of the state and, in the same breath, its first marriage rush.\n\nThe fathers do not forget. The Sabine king Titus Tatius is the last and largest of the wronged neighbors to bring an army to the walls. He takes the citadel by treason first. A Roman girl named Tarpeia opens the gate in exchange for what the Sabines wear on their left arms, meaning their gold bracelets. They crush her to death under their shields instead, since a shield is also carried on the left arm. The two sides finally meet in the low ground that will become the Roman Forum. This is the moment the picture holds. The stolen women are married now, with small children. They walk out of the city and stand in the open dirt between their fathers and their husbands, close enough to catch a thrown spear. Livy says they begged both sides to make widows and orphans of them rather than fight over them. The lines lowered their weapons. Rome and the Sabines agreed to become one people under two kings, and the women who had been the cause of the war wrote its peace.\n\nJacques-Louis David painted the reconciliation, not the theft, and he had reasons close to the bone. He had voted to execute the king, sat in the Convention through the Terror, and been jailed twice after Robespierre fell. He thought of the picture in a cell in the Luxembourg palace and started painting after he got out. When it was finished in 1799 he charged admission to see it, which scandalized Paris, and lived on the money. About 50,000 people paid. In the center stands Hersilia in white, arms flung wide, one hand toward her Sabine father and one toward Romulus her husband, the exact posture of a country asking itself to stop. David has painted his soldiers stark naked in the Greek manner, which the critics mocked, and given Romulus a gold shield with the wolf of Rome on it. Down at the women’s feet the babies crawl in the dirt, ignored by everyone holding a weapon. David put them at the very bottom of the picture, directly under the spears.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. 750 BC',
  historicalYear: -750,
  historicalMonthDay: null,
  artTitle: 'The Intervention of the Sabine Women',
  artCredit: 'Jacques-Louis David, 1799',
  imageUrl: bucketPainting('scenes/the-women-between-the-spears.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-women-between-the-spears.jpg'),
  details: [
    {
      id: 'hersilia',
      x: 0.42,
      y: 0.5,
      scale: 2.4,
      caption:
        'A woman stands in the gap with both arms flung wide. This is Hersilia, and one arm reaches toward her Sabine father and the other toward her husband Romulus. Her face is the face of Aurore de Bellegarde, a Paris society woman who sat for David.',
    },
    {
      id: 'the-she-wolf-shield',
      x: 0.6,
      y: 0.55,
      scale: 2.8,
      caption:
        'A man in a gold helmet with a red crest holds his shield across his body. This is Romulus, and the wolf that raised him is painted on the shield. The word ROMA is under her feet.',
    },
    {
      id: 'the-children',
      x: 0.44,
      y: 0.9,
      scale: 2.8,
      caption:
        'The babies are on the bare ground at everyone’s feet. One of them lies flat on his back with his legs in the air. A woman crouches over them, and a man’s foot in a laced sandal is planted beside the nearest one.',
    },
  ],
} satisfies MockSceneDef;

export const theConsulAndHisSons = {
  slug: 'the-consul-and-his-sons',
  title: 'The Consul and His Sons',
  dek: 'The man who freed Rome sends his own boys to the axe and does not turn away',
  story:
    'The kings end with a rape and a knife. Sextus, son of the last king Tarquin the Proud, forces himself on a nobleman’s wife named Lucretia. She summons her husband and her father, tells them plainly what was done, and makes them swear vengeance. Then she stabs herself in front of them, so that no unfaithful woman can ever cite her as an excuse. Standing there is Lucius Junius Brutus, who has spent years playing the fool to stay alive under a suspicious king. He pulls the blade from her body, and the idiot everyone dismissed leads the city in throwing the Tarquins out. Rome will have no more kings. In their place it invents two consuls, who hold power for a single year and check each other. Brutus is elected one of the first pair, in 509 BC, the year the Republic dates from.\n\nThen the thing that makes the story unbearable. A plot forms to bring the royal family back, and among the conspirators are two of Brutus’s own sons, Titus and Tiberius, young men who would rather be princes than citizens. The letters are found. As consul, Brutus must judge them. Livy writes that he sat in the magistrate’s chair while his sons were stripped, tied to stakes, beaten with rods and beheaded. Livy says the crowd watched the father’s face more than the executions, and that he never looked away. He had freed Rome and it cost him his children on the same account. He died in battle soon after, running his horse straight at the exiled prince who had caused all of it, the two killing each other on the point of a spear.\n\nDavid finished his version in 1789 and it reached the public at the worst possible time for a king. The lictors, the officers who attend a consul, come in from the left carrying the bodies home. Brutus sits jammed into the shadow at the foot of a statue of Roma, a written paper crushed in his hand, refusing to watch what he has ordered. The women of the house shatter into grief on the bright side of the canvas. On the table between them, David left the mundane and terrible thing: the women’s workbasket, scissors and cloth, the ordinary evening this house was having before the letters came. The Salon opened weeks after the Bastille fell. Officials wanted the picture withdrawn as too dangerous, and the crowds, who understood it perfectly, would not let them.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. 509 BC',
  historicalYear: -509,
  historicalMonthDay: null,
  artTitle: 'The Lictors Bring to Brutus the Bodies of His Sons',
  artCredit: 'Jacques-Louis David, 1789',
  imageUrl: bucketPainting('scenes/the-consul-and-his-sons.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-consul-and-his-sons.jpg'),
  details: [
    {
      id: 'brutus-in-shadow',
      x: 0.2,
      y: 0.6,
      scale: 2.6,
      caption:
        'Brutus sits in the dark at the foot of the statue of Roma. The word ROMA is cut into the pedestal beside him, and a written paper is crushed in his fist. The stretcher goes past behind his head, and he does not turn.',
    },
    {
      id: 'the-women',
      x: 0.74,
      y: 0.52,
      scale: 2.4,
      caption:
        'Brutus\'s wife throws out her arm and the elder daughter goes limp against her. The younger daughter holds up a hand to block the view. At the right, the servant has hidden her face entirely.',
    },
    {
      id: 'the-workbasket',
      x: 0.545,
      y: 0.575,
      scale: 3.4,
      caption:
        'The women\'s sewing basket sits on the red cloth. The scissors lie open across it and a ball of thread sits by the edge. David painted the evening this house was having before the letters came.',
    },
  ],
} satisfies MockSceneDef;

export const fifteenDaysOfPower = {
  slug: 'fifteen-days-of-power',
  title: 'Fifteen Days of Power',
  dek: 'They found the dictator behind a plough and he gave the office straight back',
  story:
    'The messengers cross the Tiber and find him working. Lucius Quinctius Cincinnatus, once a leading man of Rome, now works a four-jugera smallholding on the far bank because a lawsuit ruined him and this is what is left. Livy has him sweating over a ditch, or leaning on his plough, when the delegation from the Senate arrives in formal dress. They ask him to put on his toga so they can deliver their message with proper respect. He calls to his wife Racilia to fetch the toga from the hut, and wipes off the dust. Then he hears the news: a Roman army under the consul Minucius is trapped by the Aequi on Mount Algidus and may be gone by the week’s end. The Senate has named him dictator, the emergency office that answers to no one and lasts up to six months.\n\nHe takes it and moves fast. He orders every man of military age to the Field of Mars by nightfall with cooked rations for five days and twelve wooden stakes, marches through the dark, and reaches the trapped legions before dawn. His fresh troops surround the surrounders; each soldier drives in his stakes and they pen the Aequi inside their own siege. By morning it is finished. He makes the beaten enemy pass under the yoke, a spear laid across two uprights low enough that grown men must stoop to walk beneath it, the deepest humiliation a Roman could hand out. Then the part that turned him into a fable: the war was won in a day, and Livy says he resigned the dictatorship on the sixteenth day and walked back to the same unfinished furrow. He had held absolute power over Rome for a fortnight and set it down early because the job was done.\n\nJuan Antonio Ribera painted the scene in 1806, a Spaniard of 27 living in Rome on a royal pension and working in the cold, exact style of David. He catches the turn of the whole story. The senators stand in white on the left with the fasces of the office they are bringing, and Cincinnatus is on the right, half-dressed and bare-chested, one hand still near the plough, listening. Behind him a boy leans on the ox. A different set of officers came looking for this man 22 centuries later. When the Continental Army disbanded after the American Revolution, its officers formed a society and named it for Cincinnatus, the general who won and went home. George Washington was its first president. A river town in Ohio took the society’s name and became Cincinnati.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. 458 BC',
  historicalYear: -458,
  historicalMonthDay: null,
  artTitle: 'Cincinnatus Leaves the Plough',
  artCredit: 'Juan Antonio de Ribera, 1806',
  imageUrl: bucketPainting('scenes/fifteen-days-of-power.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/fifteen-days-of-power.jpg'),
  details: [
    {
      id: 'the-summons',
      x: 0.54,
      y: 0.46,
      scale: 2.6,
      caption:
        'The head of the delegation speaks with both hands open and empty. Cincinnatus hears him out bare-chested and dusty. The folded red robe of office waits in the shadow behind them.',
    },
    {
      id: 'the-fasces',
      x: 0.25,
      y: 0.31,
      scale: 3.2,
      caption:
        'Two bundles of rods ride on the shoulders of the escorts. Rome called these men lictors, and the axe is still in the left-hand bundle. Only a dictator\'s lictors kept the blades inside the city, and a consul\'s had to take them out.',
    },
    {
      id: 'the-ox-and-plough',
      x: 0.85,
      y: 0.47,
      scale: 2.8,
      caption:
        'A boy rests his arms on the ox’s back over a folded blue cloak and turns to look. Livy says Cincinnatus went back to the same unfinished furrow once the fighting was done.',
    },
  ],
} satisfies MockSceneDef;

export const theGeeseOnTheWall = {
  slug: 'the-geese-on-the-wall',
  title: 'The Geese on the Wall',
  dek: 'The Gauls burned Rome, and only the sacred geese heard them coming',
  story:
    'The Romans lose the city because they lose one afternoon by a small river. In 390 BC a war band of Gauls comes down out of the north under a chief the Romans called Brennus. The legions meet them 11 miles from home, at the stream called the Allia. The line breaks almost at once; the rout is so total that the day, the eighteenth of July, is marked unlucky on the Roman calendar forever after. The Gauls walk into an open city. Most of Rome has fled. On the Capitoline hill a garrison bars the gate and holds, and around them the Gauls settle in and burn the rest, and the siege drags into months.\n\nOne night the Gauls try the hill in the dark. They find a path up the cliff and climb it without a sound, and the sentries hear nothing, and even the dogs sleep through it. What they do not account for is the flock of geese on the hill, kept there as sacred to the goddess Juno. The birds are hungry that season: the garrison is starving, and no one has spared them grain. The geese hear the first hands on the rock and start screaming. A former consul named Marcus Manlius wakes, runs to the wall, and shoves the lead climber back off the edge into the men behind him, and the assault comes apart on the rocks. Rome kept geese on the Capitol for centuries afterward in gratitude, and once a year carried a dog through the streets on a stake as punishment for the watchdogs that had not barked.\n\nThe siege ended in a bargain, not a battle. Starving, the Romans agreed to buy the Gauls out for a thousand pounds of gold, and when the metal was weighed the Romans complained the Gaulish weights were rigged. Livy gives Brennus the line that outlived him: he threw his own sword onto the scale to make it heavier still and said vae victis, woe to the conquered. Évariste-Vital Luminais built a career on the Gauls. French critics took to calling him le peintre des Gaulois, the painter of the Gauls. He painted them at the moment before all this. A knot of horsemen on heavy ponies has halted on a rise of dark grass, long shields hanging at their knees. One of them flings an arm out toward the hazy plain they are about to ride down into. Roman writers preferred a different ending, in which the exiled hero Camillus charges in at the last second and drives the Gauls off with the gold unpaid. The archaeology under Rome is less flattering. There is a scorched layer in the early city, ash and burned debris, sitting at about the right depth for the year the geese earned their keep.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. 390 BC',
  historicalYear: -390,
  historicalMonthDay: null,
  artTitle: 'The Gauls Before Rome',
  artCredit: 'Évariste-Vital Luminais, 19th century',
  imageUrl: bucketPainting('scenes/the-geese-on-the-wall.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-geese-on-the-wall.jpg'),
  details: [
    {
      id: 'the-war-band',
      x: 0.6,
      y: 0.2,
      scale: 2.8,
      caption:
        'A rider in a dark helmet flings out an arm and points ahead. The white-haired man next to him does not move. Behind them, the spears of the rest of the band crowd in.',
    },
    {
      id: 'the-trophy',
      x: 0.49,
      y: 0.3,
      scale: 3.2,
      caption:
        'A long shield hangs at the knee of a heavy tan horse. It has a pale metal rim and a round knob at its centre, and the rider\'s red cloak shows past it. The band has halted on the rise, and nothing stands between them and Rome but the plain below.',
    },
    {
      id: 'the-distant-plain',
      x: 0.19,
      y: 0.43,
      scale: 2.8,
      caption:
        'Two riders hold the crest, and one of them is on a white horse. The ground in front of them drops away into haze. Nothing out there has an edge yet.',
    },
  ],
} satisfies MockSceneDef;

export const doNotDisturbMyCircles = {
  slug: 'do-not-disturb-my-circles',
  title: 'Do Not Disturb My Circles',
  dek: 'One old geometer held off the Roman fleet, then a soldier found him drawing',
  story:
    'For most of two years an old man keeps the Roman navy off the walls of Syracuse. Archimedes is past 70 when the general Marcellus lays siege to the Greek city in Sicily in 213 BC, and the machines he has built for his king turn the harbor into a killing floor. Polybius, who talked to men who were there, describes catapults ranged for every distance. He also describes cranes that swing out over the sea and drop iron hands onto the Roman ships. They hoist the bows clean out of the water, then let go, and the hulls smash back and swamp. The assault stalls so badly that Marcellus gives up on storming the place and settles in to starve it. The Romans come to joke bitterly that they are fighting a war against one geometer.\n\nSyracuse fell in 212 BC anyway, at night, during a festival, betrayed from inside. Marcellus had given a specific order that the old engineer was to be taken alive and unharmed. It went wrong in the confusion. Plutarch offers three versions of the death and admits he does not know which is true. In one, a soldier orders Archimedes to come, Archimedes asks for a moment to finish a proof, and the soldier runs him through. The line that stuck to the story is a Roman one: noli turbare circulos meos, do not disturb my circles. He is supposed to have said it over a diagram he had drawn in the dust or in a tray of sand. Marcellus was said to be sickened by it and to have looked after the dead man’s relatives. Thomas Degeorge, who had joined David’s studio at 16, painted the moment of it in 1815. Archimedes is bent over a round table with his dividers on an unrolled sheet, a hand up against the soldier, the sword already level. Behind them the sacked city burns orange through the door. The canvas hangs in Clermont-Ferrand, the town where he died.\n\nThere is a coda that is better than the death. Archimedes had asked to have a sphere set inside a cylinder carved on his tomb, because he was proudest of proving that the sphere is exactly two thirds of the cylinder that holds it. More than a century later a young Roman official posted to Sicily went looking for the grave, which the locals swore was lost. Cicero found it by the marker, a small column above the brush with the sphere and the cylinder still on it, half swallowed by thorns. He had the site cleared. He wrote that the foremost Greek city would have forgotten its most brilliant citizen if a man from Arpinum had not come and shown them his tomb.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. 212 BC',
  historicalYear: -212,
  historicalMonthDay: null,
  artTitle: 'The Death of Archimedes',
  artCredit: 'Thomas Degeorge, 1815',
  imageUrl: bucketPainting('scenes/do-not-disturb-my-circles.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/do-not-disturb-my-circles.jpg'),
  details: [
    {
      id: 'the-circles',
      x: 0.47,
      y: 0.54,
      scale: 2.4,
      caption:
        'Archimedes sets the point of his dividers on the sheet unrolled across the marble table, a wooden square lying beside it. The soldier’s arm is already in the top corner of the frame.',
    },
    {
      id: 'the-soldier',
      x: 0.68,
      y: 0.25,
      scale: 2.6,
      caption:
        'The soldier holds the sword level above his crested helmet, and a bare hand comes up flat against him at the edge of the frame. Marcellus had ordered Archimedes taken alive and unharmed.',
    },
    {
      id: 'the-sphere',
      x: 0.42,
      y: 0.85,
      scale: 3.0,
      caption:
        'A gilt globe sits in its ring on the floor, a red book and a wooden wedge beside it. Cicero says Marcellus carried two of Archimedes’ spheres out of Syracuse, gave the star-globe to a temple and kept the moving one at home.',
    },
  ],
} satisfies MockSceneDef;

export const theseAreMyJewels = {
  slug: 'these-are-my-jewels',
  title: 'These Are My Jewels',
  dek: 'A guest shows off her gems, and Cornelia sends for her sons instead',
  story:
    'A wealthy woman from Campania is visiting Cornelia’s house, and she has brought her jewelry to be admired. She lays it out, the finest gold and stones she owns, and asks to see her hostess’s in return. Cornelia is the daughter of the general who beat Hannibal, the widow of a consul, one of the most respected women in Rome, and she is in no hurry. Valerius Maximus, who tells the story, says she kept the visitor talking until her two sons came home from their lessons. Then she gestured toward the boys walking in and said the line that fixed her in Roman memory: these are my ornaments, meaning her jewels are her children. It is the kind of remark that gets a woman carved into stone, and it did.\n\nThe trouble is what the boys grew into. Tiberius and Gaius Gracchus became the most dangerous reformers of the Republic, tribunes who tried to hand public land back to the poor and broke every rule of senatorial patience to do it. Both were killed for it. A mob of senators clubbed Tiberius to death on the Capitol in 133 BC and threw his body in the Tiber. Gaius died in another purge 12 years later. The consul who hunted him reportedly paid out the dead man’s head in its weight of gold. Cornelia outlived both her jewels. She retired to a villa on the coast at Misenum, entertained Greek scholars, and spoke of her murdered sons to guests without weeping. She turned down a marriage offer from a king of Egypt to keep her own name. Rome eventually put up the statue, and the inscription that survives calls her not by her husband’s rank but as Cornelia, mother of the Gracchi.\n\nAngelica Kauffmann painted the scene in Naples in the 1780s for George Bowles, an English collector who ended up with more than 50 of her pictures. She knew something about being the exception in a room. She was one of only two women among the founders of London’s Royal Academy, and for years the most sought-after history painter in the city. She stages it plainly. The Campanian visitor sits at the right in orange silk with her jewel-box open on her lap, half-turned, still expecting to win. Cornelia stands in the center in plain yellow and reaches toward her children as if presenting the only wealth worth counting. The younger boy clutches a scroll from school. Nobody in the picture yet knows that the two ornaments will be beaten to death by their own government, one after the other, for trying to give Rome’s land to Rome’s poor.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. 150 BC',
  historicalYear: -150,
  historicalMonthDay: null,
  artTitle: 'Cornelia, Mother of the Gracchi',
  artCredit: 'Angelica Kauffmann, 1788',
  imageUrl: bucketPainting('scenes/these-are-my-jewels.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/these-are-my-jewels.jpg'),
  details: [
    {
      id: 'cornelia-presenting',
      x: 0.45,
      y: 0.4,
      scale: 2.4,
      caption:
        'Cornelia turns an open, empty hand out over her daughter Sempronia, who looks up from the worktable. She wears a plain gown and a veil, and there is nothing on her hands or her throat.',
    },
    {
      id: 'the-children',
      x: 0.14,
      y: 0.52,
      scale: 2.6,
      caption:
        'Tiberius and Gaius Gracchus come in hand in hand from their lessons, one with a book under his arm and the other with a rolled scroll. The gold locket at the elder boy’s throat is a bulla, worn by freeborn Roman boys until the day they put on a man’s toga.',
    },
    {
      id: 'the-jewel-box',
      x: 0.66,
      y: 0.55,
      scale: 2.8,
      caption:
        'The Campanian visitor keeps a hand in the open casket on her lap and looks up for an answer. Kauffmann loaded her with gold, from the band in her hair to the jewelled strap across her breast.',
    },
  ],
} satisfies MockSceneDef;
export const howLongCatiline = {
  slug: 'how-long-catiline',
  title: 'How Long, Catiline',
  dek: 'A consul rises in a temple full of armed guards and names the man across the room',
  story:
    'It is the eighth of November, 63 BC, and the Senate has not met in the usual house. Cicero has called it to the temple of Jupiter Stator, on the slope below the Palatine, and posted armed men at the doors. He has learned that Catiline means to have him killed at dawn and burn parts of the city on a set night. Catiline comes anyway and takes a seat. The senators near him get up and move, and the bench around him empties. Then the consul stands. Quo usque tandem abutere, Catilina, patientia nostra: how long will you go on abusing our patience. He has the dates, the safe houses, the names, and he says so, to Catiline’s face, in front of everyone.\n\nCatiline tries to answer, asks the fathers not to believe a man whose family is new to Rome, and the shouting drowns him. That night he leaves the city and rides north to the army his allies have been raising in Etruria. The men he left behind are clumsier. They approach a delegation of Gaulish envoys, the Allobroges, hoping for cavalry, and the Gauls, after weighing it, tell the consul instead. Cicero has the ringleaders bring their request in writing, sealed, and springs the trap at a bridge outside town. Now he holds letters in the conspirators’ own hands.\n\nWhat to do with five citizens caught in arms against the state was argued in a single long session in December. Caesar, praetor-elect that year, urged prison for life. Cato urged death, and the house went with Cato. There was no trial. Roman law let a citizen appeal a death sentence to the people. By strangling the five in the dark, the state stepped around that right, and that is exactly what would be used against Cicero later. They were taken down into the Tullianum, the choking pit under the Capitol, and killed one at a time. Cicero waited above, walked them there himself, and when it was done came out to the crowd in the Forum and gave them a single word. Vixerunt. They have lived. He would not say the men were dead; he said their lives were behind them, and went home a hero, for now.\n\nThe scene became the picture every schoolroom keeps of what a parliament in crisis looks like, and the painting that fixed it is younger than the photograph. Cesare Maccari frescoed it in 1889 on a wall of the Palazzo Madama in Rome, the seat of the Italian Senate since 1871, so senators walking to their own debates passed Cicero going to his. Maccari put Catiline alone on the right, hunched on a bench with a clear ring of empty seats around him, everyone leaning away. It is a wonderful lie. The Senate that day did not sit in this cool marble chamber at all, but in a temple. Maccari was painting for a young state that wanted grand Roman parents, and he gave it the room it wished it had.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '8 November, 63 BC',
  historicalYear: -63,
  historicalMonthDay: toMonthDay('11-08'),
  artTitle: 'Cicero Denounces Catiline',
  artCredit: 'Cesare Maccari, 1889',
  imageUrl: bucketPainting('scenes/how-long-catiline.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/how-long-catiline.jpg'),
  details: [
    {
      id: 'cicero-speaking',
      x: 0.13,
      y: 0.62,
      scale: 3.0,
      caption:
        'Cicero stands on the floor of the Senate house with one arm flung out across it. A fire burns in a bronze stand at his left. His opening line is the one every Latin student still learns: how long will you go on abusing our patience.',
    },
    {
      id: 'catiline-alone',
      x: 0.82,
      y: 0.7,
      scale: 2.4,
      caption:
        'Catiline sits at the end of the row with his elbow on his knee and his eyes on the floor. The benches curve away empty beside him. Maccari cleared those seats, and the senators sitting near Catiline really did get up and move.',
    },
    {
      id: 'the-benches',
      x: 0.46,
      y: 0.4,
      scale: 2.6,
      caption:
        'The senators fill the rows with their arms folded. A few lean together to talk. In December these men voted 5 of the plotters to death without a trial, and that shortcut was later used to drive Cicero out of Italy.',
    },
  ],
} satisfies MockSceneDef;

export const twentyThreeWounds = {
  slug: 'twenty-three-wounds',
  title: 'Twenty-Three Wounds',
  dek: 'A dictator walks into a meeting his friends have arranged around him',
  story:
    'On the morning of the fifteenth of March, 44 BC, Caesar almost stayed home. His wife had slept badly and begged him to; he had been feeling unwell. A conspirator called Decimus, a man he trusted, came to the house and talked him out of it. They went together to a meeting of the Senate held that day in a hall attached to Pompey’s theatre, because the usual house was being rebuilt. Someone pressed a warning note into his hand on the way in. He kept it rolled, unread. The house was filling up. Suetonius put the number in the plot at more than 60.\n\nThey crowded him with a petition, a brother’s recall from exile, and one of them pulled at his toga, the signal. The first blow came from behind, to the neck, and was clumsy; Caesar caught the arm and is said to have snarled that this was violence. Then there were too many. He fought at first, then saw Brutus among the knives and stopped. Suetonius, writing a century and a half later, says the honest thing. Most sources have Caesar die without a word. Some report that when he saw Brutus he said, in Greek, kaì sý, téknon: you too, child. The Latin line everyone knows, et tu, Brute, comes off the Elizabethan stage, not out of a Roman record. He fell at the base of Pompey’s statue and pulled his toga over his face.\n\nAfterward a physician named Antistius examined the body in what may be the first recorded post-mortem in history. He counted 23 stab wounds and concluded that only one was fatal, the second, to the chest. The rest, from men jostling in a tight scrum with daggers, had mostly been shallow or wild; several of the killers wounded each other. The Senate scattered into the streets in panic. The body of the most powerful man in the world lay alone on the floor for hours. Then three household slaves put it on a litter, one arm hanging down, and carried it home through the city.\n\nJean-Léon Gérôme painted that emptiness rather than the murder. The Death of Caesar, finished in the 1860s, now hangs at the Walters in Baltimore. It gives most of its canvas to a bright, vacated hall: overturned benches, a toppled gilded chair, the assassins withdrawing in a knot with their swords still raised. One senator is still in his seat on the right, with his head down. Caesar himself is a small white bundle in the lower corner, easy to miss. Gérôme trusted the room to do the work. The men who did it believed they had saved the Republic. Within three years two of them were dead by their own hands. The boy Caesar had adopted was on his way to becoming the first emperor.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '15 March, 44 BC',
  historicalYear: -44,
  historicalMonthDay: toMonthDay('03-15'),
  artTitle: 'The Death of Caesar',
  artCredit: 'Jean-Léon Gérôme, c. 1867',
  imageUrl: bucketPainting('scenes/twenty-three-wounds.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/twenty-three-wounds.jpg'),
  details: [
    {
      id: 'the-body',
      x: 0.24,
      y: 0.9,
      scale: 3.2,
      caption:
        'Caesar lies under his own toga on the marble, with one hand fallen out of the cloth onto the floor. A stain of blood is on the white. Antistius examined the body afterward and counted 23 wounds, and only one of them was fatal.',
    },
    {
      id: 'the-assassins',
      x: 0.45,
      y: 0.61,
      scale: 2.4,
      caption:
        'The killers withdraw in a tight knot with their swords still up. One of them walks out barefoot at the front, and another carries a long blade low against his leg. Several of them had cut each other in the crush around Caesar.',
    },
    {
      id: 'the-toppled-chair',
      x: 0.15,
      y: 0.64,
      scale: 2.8,
      caption:
        'The gilded chair lies on its side where the scuffle threw it. This is Caesar’s seat of office, and a violet cloth has slipped off it onto the step. The Senate ran, and the body lay on the floor for hours before three slaves carried it home.',
    },
  ],
} satisfies MockSceneDef;

export const torchesInTheGarden = {
  slug: 'torches-in-the-garden',
  title: 'Torches in the Garden',
  dek: 'After the fire, an emperor needs someone for the crowd to blame',
  story:
    'The fire started in the shops around the Circus Maximus on the night of the eighteenth of July, 64, and the wind took it. It ran for six days through the packed wooden districts, was checked, then broke out again and burned more. Of Rome’s 14 districts, only 4 came through untouched. Nero was 30 miles away at Antium when it began. Tacitus, who was a boy at the time and wrote from records decades later, says he hurried back and opened his gardens and public buildings to the homeless and brought in food. Tacitus also records the rumor that would not die: that while the city burned the emperor had sung of the fall of Troy, in costume, on a private stage. He does not say it happened. He reports that people believed it, which for a ruler is nearly as bad.\n\nRelief did not buy back the story. To kill the rumor Nero needed other arsonists, and he found them in a small, disliked sect the crowd already suspected of everything. Tacitus names them plainly, a rare early mention of Christians in a Roman source, and then describes what was done in a sentence colder than any accusation. They were covered in the skins of beasts and torn apart by dogs, or nailed to crosses, or made into torches to be lit after dark for light when day had gone. The emperor gave over his own gardens for the show and mixed with the crowd dressed as a charioteer. Even people with no love for the sect, Tacitus adds, began to pity them, sensing the killings served one man’s cruelty and not the public good.\n\nHenryk Siemiradzki painted that night in 1876, an enormous canvas he called Nero’s Torches, and staged it as a piece of cruel theatre. On the left the court settles onto a marble stair in gold and flower crowns, and in the middle Nero is carried down the steps on a litter under a canopy of gilded victories. On the right stand the tall posts. The condemned are bound to them in straw and hung with garlands like festival columns, with charge boards fixed up beside them naming them arsonists of the city. A man crouches at the foot of the posts over a fire pan, getting the first flame going. Across the front of the picture runs a strip of bare marble pavement, empty, the ground between the couches and the stakes. Siemiradzki gave the picture to the city of Kraków, and it became the founding work of its National Museum, a gift that started a collection.\n\nThe garden where it happened sat on the far side of the Tiber, on the Vatican hill. A racing track ran through it, and near its center stood an Egyptian obelisk Caligula had shipped from Heliopolis. That obelisk still stands in Rome. It was dragged a few hundred yards in 1586 to the middle of a new piazza. There it watches the front of St Peter’s, on the ground where the sect Nero lit for a night eventually buried its capital.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'July, AD 64',
  historicalYear: 64,
  historicalMonthDay: toMonthDay('07-18'),
  artTitle: 'Nero’s Torches',
  artCredit: 'Henryk Siemiradzki, 1876',
  imageUrl: bucketPainting('scenes/torches-in-the-garden.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/torches-in-the-garden.jpg'),
  details: [
    {
      id: 'the-stakes',
      x: 0.85,
      y: 0.28,
      scale: 3.4,
      caption:
        'A woman is bound in straw at the top of her post. A man below holds up a board with the charge on it: CHRISTIANVS INCENDIATOR VRBIS, Christian, burner of the city. The posts are being dressed with flowers, and the torch at the left is already lit.',
    },
    {
      id: 'the-litter',
      x: 0.45,
      y: 0.29,
      scale: 3.2,
      caption:
        'Nero is carried down the steps on his litter. He lies back in white under a canopy of gilded victory figures, and the bearers carry the poles below him. Tacitus says Nero gave over his own gardens for the night and went about in the crowd dressed as a charioteer.',
    },
    {
      id: 'the-spectators',
      x: 0.24,
      y: 0.42,
      scale: 2.6,
      caption:
        'The court arranges itself on the marble stairs in flower crowns and gold. A servant comes round with the wine. Tacitus wrote that even Romans with no love for the sect came to pity them.',
    },
  ],
} satisfies MockSceneDef;

export const theTurnOfAThumb = {
  slug: 'the-turn-of-a-thumb',
  title: 'The Turn of a Thumb',
  dek: 'A hundred days of games open a new arena, and a gesture nobody can quite read',
  story:
    'When the Colosseum opened in the summer of 80, the emperor Titus marked it with a hundred days of games. Cassius Dio says 9,000 animals died in them, hunted and killed in the sand. He also says Titus threw small wooden balls into the crowd from his box, each stamped with the name of a prize: so much grain, a horse, a slave. Whoever caught one took it to an attendant and collected. An awning the size of a small sea, the velarium, stretched over the top of the seats. A detachment of sailors brought up from the fleet at Misenum worked it. Rigging that much canvas against the wind was a sailor’s trade and no one else’s. Dio also says Titus wept at the dedication. He was dead a little over a year later, taken by a fever at a country posting station on the road north.\n\nThe part everyone thinks they know, the crowd’s thumb deciding whether a beaten gladiator lived or died, is real in outline and blurred in every detail. The Romans did use a thumb, pollice verso, a turned thumb, and words for pressing it. What the gesture actually looked like, up, down, sideways, or hidden in a fist, no surviving source makes clear. The neat rule that thumb down means death was not handed down from Rome. It was mostly settled in the public mind by a painting.\n\nJean-Léon Gérôme finished Pollice Verso in 1872. A murmillo in a crested helmet and scaled sleeve stands over the man he has beaten. The loser is a retiarius, a net fighter, flat in the sand with one hand thrown open above his head, begging. The winner does not look at him but up at the stands, waiting to be told. In the front row the Vestal Virgins lean over the marble and jab their thumbs down, and the whole tiered arena behind them does the same, a wall of thumbs. The scholarship was thin and the drama total, and the image simply won. Alexander Turney Stewart paid 80,000 francs for it, a record price for Gérôme, and it set the picture of the arena for everyone who came after.\n\nMore than a century on, two producers walked into Ridley Scott’s office with a reproduction of the Gérôme and laid it on the desk before he had read a word of any script. Scott looked at the painting and said he would make the film. That film was Gladiator. The canvas that decided a modern blockbuster now hangs in the Phoenix Art Museum in Arizona, a long way from the sand. It is still turning its thumbs down at a man on his back with one hand up.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'AD 80',
  historicalYear: 80,
  historicalMonthDay: null,
  artTitle: 'Pollice Verso',
  artCredit: 'Jean-Léon Gérôme, 1872',
  imageUrl: bucketPainting('scenes/the-turn-of-a-thumb.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-turn-of-a-thumb.jpg'),
  details: [
    {
      id: 'the-victor',
      x: 0.33,
      y: 0.56,
      scale: 2.6,
      caption:
        'The winning gladiator is seen from behind in a crested helmet, with a gold scaled sleeve on his sword arm. A curved blade is still in his fist, and one bare foot rests on the man he beat. He is a murmillo, and Gérôme copied his armour from pieces dug up at Pompeii.',
    },
    {
      id: 'the-vestals',
      x: 0.76,
      y: 0.19,
      scale: 3.0,
      caption:
        'The Vestal Virgins lean out over the marble with their thumbs turned, and the rows behind them crowd the rail to do the same. No Roman source says the gesture meant thumb down. This painting is why everyone thinks it did.',
    },
    {
      id: 'the-plea',
      x: 0.44,
      y: 0.8,
      scale: 2.6,
      caption:
        'The beaten man lies on his back with the winner’s foot on him and one hand thrown open above his head. His net is spread in the sand and his trident is dropped past it. He is a retiarius, and a net and a trident were all his kind carried.',
    },
  ],
} satisfies MockSceneDef;

export const theCityTaken = {
  slug: 'the-city-taken',
  title: 'The City Taken',
  dek: 'For the first time in eight centuries, a foreign army is inside the walls of Rome',
  story:
    'On the night of the twenty-fourth of August, 410, the Salarian Gate opened from the inside, and Alaric’s Goths came into Rome. No enemy had been inside the walls for almost 800 years, not since a Gaulish raid the city half-remembered as a nightmare. Alaric had besieged Rome twice already and bargained each time. He wanted land and rank for his people inside the empire, not its capital. The court at Ravenna kept refusing, until there was nothing left to do but take the city and see what that bought. What followed was three days of plunder, and by the standard of sacked cities it was almost restrained. Alaric was a Christian, an Arian, and he ordered the great churches of Peter and Paul left alone as places of refuge; anyone who reached them was to be spared. Buildings burned, the old Senate house among them, and the emperor’s half-sister Galla Placidia was carried off, later to marry a Gothic king. Then the Goths simply left, moving south, and Alaric was dead of illness within months.\n\nThe shock was out of all proportion to the damage. Rome had not been the seat of government for years, but it was the idea the whole world had agreed to believe in, and the idea had been proved to bleed. Word reached a cave in Bethlehem where Jerome sat translating the Bible into Latin, and it stopped him cold. In the city which had taken the whole world, he wrote, the whole world has been taken, and confessed that for days he could not work for grief. Across the Mediterranean in North Africa, a bishop named Augustine heard the same news and started to write. Pagans were saying Rome fell because it had abandoned its old gods for Christ. Augustine answered them across 22 books over the next 13 years, arguing that no earthly city was ever the eternal one. That reply is The City of God.\n\nJoseph-Noël Sylvestre painted the moment in 1890 and aimed it straight at the gut. A colossal marble emperor stands on his pedestal, calm and blank-eyed under a laurel crown. Two barbarians swarm up his body with a rope, one standing on the other’s shoulders to reach the neck. Below them men haul on the line, and the city behind stands in haze without a flame in sight. It is invention, not report. There is no record of the Goths toppling a specific statue like this; Sylvestre built one image to carry the whole meaning of the day. He even signed it in the marble, carving Sylvestre 1890 into the plinth of the emperor his painting is pulling to the ground. On the left, on a grey horse, Alaric watches it happen and does nothing.',
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '24 August, AD 410',
  historicalYear: 410,
  historicalMonthDay: toMonthDay('08-24'),
  artTitle: 'The Sack of Rome',
  artCredit: 'Joseph-Noël Sylvestre, 1890',
  imageUrl: bucketPainting('scenes/the-city-taken.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-city-taken.jpg'),
  details: [
    {
      id: 'pulling-down-the-emperor',
      x: 0.49,
      y: 0.15,
      scale: 2.3,
      caption:
        'A Goth drops a rope over the head of the marble emperor and shouts up into its face. The laurel crown is still there. The statue\'s white hand is still held out at the left, in the middle of a speech.',
    },
    {
      id: 'alaric-watching',
      x: 0.17,
      y: 0.665,
      scale: 2.8,
      caption:
        'Alaric sits on a grey horse at the foot of the steps and rests one hand on his hip. His helmet is crowned, and he is in no hurry. He had besieged Rome twice and been paid to leave twice, and this time he took the city and gave his men 3 days in it.',
    },
    {
      id: 'the-signature',
      x: 0.55,
      y: 0.72,
      scale: 2.6,
      caption:
        'A bare foot rests on a stone block with SYLVESTRE 1890 carved into it. The foot belongs to one of the Goths. The painter cut his own name into the pedestal they are hauling to the ground.',
    },
  ],
} satisfies MockSceneDef;

export const theSwordAtCaesarsFeet = {
  slug: 'the-sword-at-caesars-feet',
  title: "The Sword at Caesar's Feet",
  dek: 'The war for Gaul ends with a horseman circling his conqueror',
  story:
    "By late summer the hill town of Alesia sat inside a ring of earth and timber 11 Roman miles around. That ring sat inside a second one of 14. Caesar was besieging a city, and at the same time a relief army was marching to besiege him: a quarter of a million Gauls, by his own generous count. His legions dug both lines in about five weeks. They sowed the ground between with traps named like garden stock: lilies, which were sharpened stakes hidden in covered pits, and stimuli, iron barbs set into buried wood. Inside the walls stood 80,000 warriors under Vercingetorix, an Arvernian noble who had managed the one thing Rome believed impossible: he made the tribes stop fighting each other. His plan had been to burn Gaul before Caesar could eat it, and the tribes had torched their own granaries on his word.\n\nThen hunger did what the legions could not. The town's food ran out while the relief was still gathering. A chieftain named Critognatus gave the speech Caesar chose to record at length. He proposed that those too old or weak to fight be eaten rather than surrendered. The Mandubii, whose town it was, sent their own women and children out of the gates, hoping Caesar would let them pass as refugees. He would not, and Vercingetorix would not reopen the gates. They starved in the strip of ground between the two armies, in sight of both.\n\nThe relief came and broke itself against the double wall in three assaults. In the last of them Caesar rode his own line in the scarlet cloak. He sent his cavalry out by a long circuit to take the attackers from behind. When the rescue force scattered, the town was finished. Plutarch says Vercingetorix put on his finest armor, had his horse groomed, and rode out the gate alone. He circled the platform where Caesar sat, dropped his weapons, and sat down at the Roman's feet without a word. Caesar's own account of his own war spends one flat line on it: the arms were thrown down, the man handed over.\n\nThe theater, wherever the truth sits, belongs to Royer's canvas. He painted it in 1899, for a France that had just lost a war to Prussia. It wanted its first national defeat to look exactly like this: chin up, on a white horse, in front of a bored conqueror. The canvas runs 16 feet across and hangs at the Musée Crozatier in Le Puy-en-Velay. French schoolbooks have been reprinting it ever since. What the ground itself remembers is drier. Napoleon III, hunting for Alesia, put excavators on a hill in Burgundy in the 1860s. They found the ditches of both walls where Caesar said they would be, and the iron barbs, still in their rows. Vercingetorix spent six years in the Tullianum prison waiting for Caesar's triumph, walked in the parade of 46 BC, and was strangled when it ended.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'Autumn, 52 BC',
  historicalYear: -52,
  historicalMonthDay: null,
  artCredit: 'Lionel Royer, Vercingetorix Throws Down His Arms at the Feet of Julius Caesar, 1899',
  imageUrl: bucketPainting('scenes/the-sword-at-caesars-feet.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-sword-at-caesars-feet.jpg'),
  details: [
    {
      id: 'the-rider',
      x: 0.3,
      y: 0.36,
      scale: 2.4,
      caption:
        'Vercingetorix is painted from behind, with his hair loose. His throwing arm is still out and empty. Plutarch says he picked his best armor for this and had the horse groomed first.',
    },
    {
      id: 'caesar-in-red',
      x: 0.68,
      y: 0.44,
      scale: 2.4,
      caption:
        'Caesar sits under a laurel crown in a scarlet cloak. His own account says the enemy could pick that cloak out along the wall. Royer put the winner low and small and gave the loser the horse.',
    },
    {
      id: 'the-pile',
      x: 0.52,
      y: 0.88,
      scale: 2.6,
      caption:
        'A long Gallic sword lies across the heap, with a white knob at the end of its handle. A bronze helmet has tipped over beside it. Caesar’s whole record of the surrender runs to one line: the arms were thrown down, the man handed over.',
    },
  ],
} satisfies MockSceneDef;

export const aShipBuiltToSink = {
  slug: 'a-ship-built-to-sink',
  title: 'A Ship Built to Sink',
  dek: 'Nero waves his mother off on a ship built to come apart',
  story:
    "The festival of Minerva, March of the year 59, and the emperor is entertaining his mother on the bay at Baiae. Nero is 21. Agrippina raised him to the throne through a marriage, an adoption, and, most of Rome assumed, a plate of mushrooms that removed her husband the emperor Claudius. She has spent the years since reminding her son where he came from. Tonight he cannot be warm enough. The dinner runs long, and at the shore he holds the goodbye, pressing his lips to her breast; Tacitus could not decide whether that was the crown of the performance or the last true thing. The night is windless and bright with stars, the sea flat, as if, Tacitus adds, the gods wanted the crime witnessed.\n\nThe ship is the work of Anicetus, a freedman who commands the fleet at Misenum and hates Agrippina on his own account. Assassins can be questioned; a shipwreck cannot. So the canopy over the stern couch has been loaded with lead and rigged to fall. Partway across the bay it falls, and kills Crepereius Gallus, standing near the helm, on the spot. Agrippina and her companion Acerronia are saved by the couch itself, whose high sides catch the weight. Then the design fails: the hull will not break apart. The crewmen in on the plot throw their weight to one rail to capsize her. The crewmen who are not push back the other way. The ship rolls the two women into the sea rather than crushing them.\n\nIn the water Acerronia makes the intelligent, fatal calculation that rescue comes fastest for the emperor's mother, and cries out that she is Agrippina. The crew beat her dead with oars and boat poles. Agrippina, one wound in her shoulder, concludes the opposite and says nothing. She is the daughter of Germanicus; she grew up in army camps. She swims until she meets fishing boats, and is landed at the Lucrine lake. From her villa she makes the coldest move left on the board. She sends a freedman to tell her son that by the gods' kindness she has survived an accident, and that he should not trouble to visit yet. She knows. He must not learn that she knows.\n\nIt buys her a few hours. Nero, past panic, throws a sword on the floor at her messenger's feet and announces the man came to kill him. That gives him the charge he needs. Anicetus goes to finish what his ship could not, with marines this time. Tacitus gives her one last order, to the centurion drawing his blade: strike the womb that bore him. The Senate answered the news with public thanksgiving. Wertheimer painted the gilded barge folding like stage scenery, Agrippina still crowned in the wreck of the awning with the terrified girl in her arms. The banquet garlands from the farewell dinner go over the side with the drapery. He changed the one thing Tacitus made a point of: the flat, starlit night becomes daylight and a running sea.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'March, AD 59',
  historicalYear: 59,
  historicalMonthDay: null,
  artTitle: 'The Shipwreck of Agrippina',
  artCredit: 'Gustav Wertheimer, c. 1874',
  imageUrl: bucketPainting('scenes/a-ship-built-to-sink.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-ship-built-to-sink.jpg'),
  details: [
    {
      id: 'the-two-women',
      x: 0.55,
      y: 0.42,
      scale: 2.4,
      caption:
        'A woman in the water is still wearing her crown. She is Agrippina, and she holds the companion Tacitus names Acerronia with one arm while the other reaches for a handhold. She came ashore with one wound in her shoulder and said nothing at all.',
    },
    {
      id: 'the-gilded-stern',
      x: 0.145,
      y: 0.158,
      scale: 3.2,
      caption:
        'A bronze figure of Neptune holds his trident at the carved end of the boat as it rolls over. A fire basket is still smoking as it tumbles past him. The boat was rigged to come apart at sea, and Tacitus says the hull refused.',
    },
    {
      id: 'the-flowers',
      x: 0.48,
      y: 0.86,
      scale: 2.6,
      caption:
        'Roses from the farewell dinner float in the surf. They are still wired into the long loops they were hung in. Tacitus could not decide whether the goodbye on that shore was the high point of the performance or the last true thing in it.',
    },
  ],
} satisfies MockSceneDef;

export const thePatternOfHisLife = {
  slug: 'the-pattern-of-his-life',
  title: 'The Pattern of His Life',
  dek: 'Permission to die reaches the philosopher at his dinner table',
  story:
    "The villa is four miles outside Rome, and the soldiers arrive at dinnertime. April of 65. The great conspiracy against Nero, dozens of senators and officers gathered around Gaius Piso, has been betrayed on the eve of its stroke. The city has become a machine for producing names. Against Seneca there is exactly one piece of evidence, an informer's report of one ambiguous sentence exchanged with the plot's figurehead. It is enough. A tribune rings the house with guards while Seneca eats with his wife Pompeia Paulina and two friends. The question Nero sends back across the four miles is not about guilt. He asks whether Seneca is preparing to die.\n\nFor the best part of a decade Seneca ran the empire's paperwork and wrote Nero's speeches, including, near the end, the one explaining the death of Nero's mother. He asked twice to retire and offered his whole fortune back; he was refused both times with embraces. Now the answer arrives as a sentence without a court. Seneca asks for his will. The tribune refuses. So he turns to his friends and names the one bequest no order can touch: he leaves them, he says, the best thing he still owns, the pattern of his life.\n\nThe dying takes all day, because philosophy inhabits an old man's body. The cuts in his arms run slow, so he has the veins of his legs and knees opened too. Paulina cuts her wrists beside him until Nero, wanting no surplus cruelty on the bill, orders her saved; soldiers bind her arms, and she lives on for years, famously white. Seneca meanwhile dictates to his secretaries, pages Tacitus says were published and read in his own day, and which are gone. He drinks hemlock his doctor has kept ready, the Athenian recipe, a citation of Socrates that his cold limbs ignore. At last he is carried into a bath of hot water, and the steam does it. On the way he flicks water at the slaves nearest him and calls it a libation to Jupiter the Liberator. The funeral had been settled years before, in a will written at the height of his wealth: no procession, no speeches. That is what he got.\n\nDomínguez Sánchez painted the moment after, in 1871, on a canvas nearly 15 feet wide. It took the first medal at Madrid's national exhibition. He shows the friends who stayed through it, one collapsed against the rim with his face in his arm, the dictation ended, the body left where the steam left it. On the lip of the bath someone has set a branch of laurel, the kind Rome handed to winners.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'April, AD 65',
  historicalYear: 65,
  historicalMonthDay: null,
  artTitle: 'The Suicide of Seneca',
  artCredit: 'Manuel Domínguez Sánchez, 1871',
  imageUrl: bucketPainting('scenes/the-pattern-of-his-life.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-pattern-of-his-life.jpg'),
  details: [
    {
      id: 'the-body',
      x: 0.78,
      y: 0.6,
      scale: 2.4,
      caption:
        'The head hangs back over the rim of the bath, and the hair and beard are still wet. Tacitus says Seneca went on dictating to his secretaries while the blood slowed. Those pages were published and widely read, and not one line of them survives.',
    },
    {
      id: 'the-mourner',
      x: 0.42,
      y: 0.56,
      scale: 2.4,
      caption:
        "A friend has his face down in the crook of his own arm. His other arm lies flat along the rim of the bath. The Prado still lists the picture under its original title, which ends with the friends swearing hatred of Nero.",
    },
    {
      id: 'the-laurel',
      x: 0.655,
      y: 0.575,
      scale: 3.4,
      caption:
        "A laurel branch lies on the folded linen at the rim, and the friend’s hand is thrown out beside it. Nothing in Tacitus puts laurel at this bath. The painter added it.",
    },
  ],
} satisfies MockSceneDef;

export const theManBehindTheCurtain = {
  slug: 'the-man-behind-the-curtain',
  title: 'The Man Behind the Curtain',
  dek: 'Two feet under a curtain decide who rules the world',
  story:
    "At midday on 24 January in the year 41, the emperor Gaius left the Palatine games through a covered passage to look over a choir of young performers. The army had nicknamed him Caligula when he was a small boy in his father's camps. The tribune Cassius Chaerea reached him first. Caligula had spent years amusing himself with Chaerea, handing him obscene watchwords to carry to the guard and mocking his voice; Chaerea had asked for this assignment. The first blow went into the neck, and the count of wounds afterward was 30. The German bodyguard arrived moments too late and began killing whoever stood nearest, guilty or not. Before the afternoon was out, Caligula's wife had been stabbed and his small daughter killed against a wall. Rome had a new crime on its books: for the first time, an emperor was dead by assassination.\n\nWhat happened next was found behind a curtain. Claudius, the dead man's uncle, heard the shouting, slipped onto a balcony, and hid in the hangings of the door. A soldier ransacking the palace noticed two feet showing beneath the cloth. Josephus preserves the soldier's name, Gratus. He pulled the curtain back expecting loot and found the last adult male of the imperial house shaking on the floor. Claudius was 50. He limped and he stammered. His own mother called him a man nature had begun and not bothered to finish. The family had kept him out of public view for decades, which is exactly why every purge had passed over him. Gratus hailed the huddled man as emperor.\n\nThe Praetorians carried him to their camp in a litter while the Senate, meeting on the Capitol, spent the night discussing the restoration of the Republic. The debate ended when it became clear where the soldiers stood, and what Claudius had offered them: 15,000 sesterces a man. It was the first time the throne of Rome was bought in the open, and the guard remembered the going rate for the next two centuries. The family joke then ran the empire for 13 years, and ran it well. Britain was invaded, the harbor at Ostia dug, two aqueducts finished. All of it came from the man who had filled his forced idleness writing 20 books of Etruscan history in Greek, every one of them since lost.\n\nAlma-Tadema painted the discovery in 1871 and hid the whole argument in the set dressing. Claudius is given red shoes, which is how a soldier ransacking a corridor knows what he has cornered, and the corpse on the carpet is given green ones, which is where the nickname came from. The soldier's bow is bent so deep it could pass for another round of mockery, which is roughly how the Senate took it too. A marble herm of Augustus stands over the corridor, a pillar topped with his head, two bloody handprints on its shaft. The word ACTIVM is lettered on the wall behind it: the grandfather's victory, watching what the household had come to.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '24 January, AD 41',
  historicalYear: 41,
  historicalMonthDay: toMonthDay('01-24'),
  artTitle: 'A Roman Emperor, AD 41',
  artCredit: 'Lawrence Alma-Tadema, 1871',
  imageUrl: bucketPainting('scenes/the-man-behind-the-curtain.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-man-behind-the-curtain.jpg'),
  details: [
    {
      id: 'the-feet',
      x: 0.628,
      y: 0.745,
      scale: 3.2,
      caption:
        'A pair of red shoes shows under the hem of a toga at the edge of the carpet. They belong to Claudius, and the guard\'s own foot is planted beside them. Alma-Tadema makes the colour the giveaway, and a soldier looking for loot looks down and finds an emperor.',
    },
    {
      id: 'the-herm',
      x: 0.5,
      y: 0.31,
      scale: 2.6,
      caption:
        'A square stone pillar holds a head of Augustus carved in profile and facing away. Rome called these pillars herms, and two bloody handprints mark the shaft below. Somebody in this corridor put out a hand to steady himself.',
    },
    {
      id: 'the-dead',
      x: 0.42,
      y: 0.72,
      scale: 2.4,
      caption:
        "Caligula lies face down in a patterned tunic and blue cloak, and his feet are still in bright green boots. He was nicknamed as a child in his father's camp after the caliga, the army boot. The painter uses those boots to say which body this is.",
    },
  ],
} satisfies MockSceneDef;

export const aRoosterNamedRome = {
  slug: 'a-rooster-named-rome',
  title: 'A Rooster Named Rome',
  dek: 'The emperor hears Rome has perished and asks about his bird',
  story:
    "The court had lived at Ravenna since 402, for the excellent reason that armies could not get at it: a city in a lagoon, reached by causeways, fed by sea. The emperor Honorius had reigned, there and at Milan before it, since the age of 10. At first he ruled under the regency of his father's best general, Stilicho. Then he had Stilicho beheaded on a treason rumor in 408, and after that he was under no one in particular. Among the things the emperor kept at Ravenna was poultry. Procopius records that his favorite was a very large rooster, and that the bird answered to the name Roma.\n\nThe man outside the walls of the actual Rome was Alaric, king of the Goths, a general trained inside the Roman army. For two years he had been trying to extort not the empire's ruin but a place in it: land for his people, a command for himself, pay for his men. After Stilicho's execution, Roman garrisons massacred the families of the Gothic soldiers serving Rome, and 30,000 of those soldiers marched over to Alaric. He blockaded Rome into famine in 408 and was bought off with gold, silver, silk, and 3,000 pounds of pepper. He set up a puppet emperor in 409 and dropped him. On 24 August 410 somebody opened the Salarian Gate from inside, and the Goths spent three days in the city. They were Christians, of a stripe the bishops disapproved of, and they left the churches standing and packed with refugees. It was the first time a foreign army had held Rome in 800 years.\n\nThe story Procopius tells is this. At Ravenna, the keeper of the birds came to Honorius and told him Rome had perished. The emperor cried out that it could not be; it had just eaten from his hand. The keeper explained the mistake: the city, at Alaric's hands. And Honorius, relieved, said he had thought the man meant the bird. Procopius wrote that down more than a century later, at another emperor's court, and flags it himself as a story people told. It survived anyway, because everyone who heard it recognized the reign.\n\nJerome, in Bethlehem, took the same news differently and wrote that the city which had taken the whole world was itself taken. Waterhouse painted the story in 1883 as a full court ceremony: councillors bent double with their petitions, an attendant holding up a standard. The whole attention of the ruler of the western world rests on the pigeons and guinea fowl working the carpet for grain. The Art Gallery of South Australia bought the canvas the year it was painted, the first Waterhouse any public gallery took. In the picture, the only men standing straight are the ones with nothing to ask.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'AD 410',
  historicalYear: 410,
  historicalMonthDay: null,
  artTitle: 'The Favourites of the Emperor Honorius',
  artCredit: 'John William Waterhouse, 1883',
  imageUrl: bucketPainting('scenes/a-rooster-named-rome.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-rooster-named-rome.jpg'),
  details: [
    {
      id: 'the-grain-tray',
      x: 0.24,
      y: 0.52,
      scale: 2.4,
      caption:
        "Honorius picks grain out of a gold dish, a pigeon settled against his knee. He had reigned since the age of 10 and would hold the throne another 13 years.",
    },
    {
      id: 'the-birds',
      x: 0.52,
      y: 0.84,
      scale: 2.6,
      caption:
        'Guinea fowl and pigeons working the carpet for spilled grain. At the top edge, one pair of sandalled feet: the delegation, waiting.',
    },
    {
      id: 'the-bowed-men',
      x: 0.72,
      y: 0.45,
      scale: 2.4,
      caption:
        'Four councillors folded to the floor tiles, a red codex under one arm. Waterhouse wove haloed figures into the panels of their white mantles, court dress for an empire that had gone Christian.',
    },
  ],
} satisfies MockSceneDef;

export const theGoldenPins = {
  slug: 'the-golden-pins',
  title: 'The Golden Pins',
  dek: "The finest voice in Rome ends up in a lady's lap",
  story:
    "The three men met on a river island near Bononia, in guarded privacy, and spent two days trading the names of people who had to die. Octavian was 19. Antony and Lepidus were the other two thirds of the new arrangement. What came out of the meeting was the proscription list, a public register of citizens any man could kill for a share of the estate. Plutarch says Octavian spent the first day defending one name and surrendered it on the second. The name was Cicero, the old consul who had promoted him, and who privately called him a boy to be praised, honored, and pushed aside. Antony wanted Cicero more than he wanted anyone. Cicero had spent the autumn of 44 writing 14 speeches against him, the Philippics, and reading them aloud to Rome.\n\nThe killers caught up with him on 7 December near his villa at Formiae. He was in a litter, carried toward the sea, where a ship was waiting that he had twice boarded and twice abandoned. The squad was led by a centurion named Herennius and a tribune named Popillius, whom Cicero had once successfully defended in court. He heard them coming, told the bearers to set the litter down, and put his head out, stretching his neck for the blade. He was 63. On Antony's instructions they took the head, and the hand that had written the Philippics.\n\nWhat happened before the trophies reached the Forum is in Cassius Dio. Fulvia, Antony's wife, had her own account to settle. Her first husband was Clodius, the street politician who had been Cicero's enemy until he was murdered on a road. Cicero had defended the murderer with pleasure. She took the head on her knees, spat on it, and drew out the tongue that had made the jokes, and pushed her hairpins through it, adding, Dio says, jokes of her own. Then the head went where Antony ordered: nailed to the Rostra, the speaker's platform, above the spot where the voice had done its work. Romans came to look and could hardly bear it; Plutarch says what they saw there was not Cicero's face but the image of Antony's soul.\n\nThe arithmetic of the aftermath took 50 years to finish. Fulvia was dead within 3 years, Antony within 13, both badly. Octavian outlived the list he had signed, became Augustus, and one day caught a grandson hiding a scroll of Cicero under his cloak. He took the book, stood reading for a long time, and handed it back with the sentence Plutarch preserved: a learned man, child, a learned man and a lover of his country. Svedomsky, a Russian with a studio in Rome, painted Fulvia at her ease in about 1898. The trophy lies on a straw mat beside the couch with the pins already placed, and the rest of the room is arranged for an ordinary comfortable afternoon.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '7 December, 43 BC',
  historicalYear: -43,
  historicalMonthDay: toMonthDay('12-07'),
  artTitle: 'Fulvia with the Head of Cicero',
  artCredit: 'Pavel Svedomsky, c. 1898',
  imageUrl: bucketPainting('scenes/the-golden-pins.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-golden-pins.jpg'),
  details: [
    {
      id: 'the-smile',
      x: 0.55,
      y: 0.27,
      scale: 2.4,
      caption:
        'A gold pin still stands in her hair with roses tucked in beside it, and she is grinning with her cheek on her arm. Cassius Dio is the only ancient writer who tells this story at all.',
    },
    {
      id: 'the-head',
      x: 0.46,
      y: 0.7,
      scale: 2.4,
      caption:
        'Two gold pins stand out of the mouth that delivered the Philippics, and her hand holds the head down in the straw. By morning it was nailed to the Rostra along with the hand that wrote them.',
    },
    {
      id: 'the-vase',
      x: 0.06,
      y: 0.72,
      scale: 2.4,
      caption:
        'Nude dancers run around the blue planter, and the animal skin dropped on the marble still has its claws. Svedomsky finished this empty corner of floor as carefully as anything else in the room.',
    },
  ],
} satisfies MockSceneDef;

export const theNinthOfAv = {
  slug: 'the-ninth-of-av',
  title: 'The Ninth of Av',
  dek: 'The Temple burns on the day its own calendar mourns',
  story:
    "Titus brought four legions up to Jerusalem in the spring of 70, a few days before Passover, when the city was swollen with pilgrims who would never leave. Inside the walls the revolt had already been eating itself for two years. The factions of John of Gischala and Simon bar Giora held different quarters and fought in the streets. During the winter each side burned the grain reserves of the other, to keep a rival from having them. The stores that might have outlasted any siege were ash before the first Roman ramp went up.\n\nThe siege ran through the summer, wall by wall. When deserters kept slipping out, Titus ringed the city with a wall of his own, five miles of it in three days, and let the famine work. Josephus, the captured rebel general turned Roman interpreter, walked the perimeter shouting offers of mercy and recorded what the hunger did inside; some of what he recorded is not repeatable. By August the fighting had narrowed to the Temple platform. Josephus, writing later under the patronage of Titus' family, insists Titus wanted the sanctuary spared; a rival tradition says he ordered it burned. On the ninth day of the month of Av, or the tenth, a soldier threw a burning brand through a gilded window. Whether anyone ordered him to is not known. Herod had spent 80 years rebuilding the Temple, and it had been finished only six years earlier. It went up in an afternoon and a night.\n\nJosephus himself points at the calendar: it was the same day of the same month, he writes, on which the Babylonians had burned the First Temple on that spot more than six centuries before. The day was already the calendar's wound, and now it was the wound twice. The lampstand and the golden table were carried to Rome and paraded in the triumph, where the Arch of Titus still shows them on the shoulders of soldiers; Josephus counts 97,000 enslaved. Part of the loot financed the new amphitheater in the city center, the one now called the Colosseum. The Temple was never rebuilt. A stretch of its western retaining wall stands, and is prayed at.\n\nDavid Roberts travelled Egypt and the Holy Land through 1838 and 1839, making the studies that became his Holy Land lithographs. In 1850 he painted the city whole and dying at once: Herod's courts white and gold in the center, the outer districts already in flame, the legion standards coming up the near ridge. He painted the building nobody had seen in 18 centuries more carefully than he painted the fires taking it.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'August, AD 70',
  historicalYear: 70,
  historicalMonthDay: null,
  artTitle: 'The Siege and Destruction of Jerusalem',
  artCredit: 'David Roberts, 1850',
  imageUrl: bucketPainting('scenes/the-ninth-of-av.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-ninth-of-av.jpg'),
  details: [
    {
      id: 'the-temple',
      x: 0.35,
      y: 0.46,
      scale: 3.4,
      caption:
        "Herod's Temple inside its double colonnade, 80 years in the building and standing finished for 6. Smoke is already lifting off the courts and the tower at the corner of the platform is alight.",
    },
    {
      id: 'the-standards',
      x: 0.81,
      y: 0.62,
      scale: 2.4,
      caption:
        'The ranks halt below the burning wall with their spears up and their standards hung with stacked discs. On the rock at their feet the survivors sit among the bodies with their hands in the air.',
    },
    {
      id: 'the-foreground',
      x: 0.2,
      y: 0.7,
      scale: 2.4,
      caption:
        'A date palm leans over the rock-cut tombs of the Kidron valley, the nearest one still showing its row of columns. Down the far slope a file of tiny figures winds toward the streambed.',
    },
  ],
} satisfies MockSceneDef;

export const theWeightOfRoses = {
  slug: 'the-weight-of-roses',
  title: 'The Weight of Roses',
  dek: 'Dinner with the teenage emperor is not always survivable',
  story:
    "The emperor is 17 and the ceiling is rigged. His guests recline under a false canopy while the courses go around. At the hour of his choosing the panels tip and the flowers come down. Not a scattering but a fall, armfuls of it, until the couches disappear. The Historia Augusta, Rome's least reliable and most readable chronicle, says some guests could not struggle out from under and smothered in perfume. It also says the flowers were violets and others; the roses are the painter's.\n\nHe was born Varius Avitus Bassianus in Emesa in Syria, hereditary boy priest of the sun god Elagabal. He became emperor at 14 because his grandmother told the legions he was the natural son of the murdered Caracalla, whom the soldiers still loved. They took the hint and removed the sitting emperor. The boy came west with the god itself in his baggage: a black conical stone, carried under silk canopies. He installed it above Jupiter in a temple on the Palatine and danced for it in the mornings. Rome had absorbed strange rulers before; it had never watched one marry a Vestal Virgin, which he did, twice over among his four or five marriages in four years.\n\nThe dinner table was where his imagination did its governing. The chronicle's catalogue runs long: guests waking from wine among tame lions and leopards, air cushions that sighed flat under sleepers, banquets in a single color, invitations that were themselves the joke. The flower fall belongs to this list, written a century and a half later by an author who embroidered freely, and none of it can be checked. All of it was believed, which is its own kind of record: the reign made every story about it plausible.\n\nThe Praetorians killed him in a palace latrine at 18, dragged the body through the city, and put it in the Tiber, and the Senate scraped his name off the inscriptions. Alma-Tadema took up the legend in 1888, on a commission from the engineer Sir John Aird. Through the winter he had fresh roses shipped up weekly from the Riviera, so that every petal in the avalanche could be painted from life. The emperor reclines in gold silk at the high table, propped on one elbow, watching. No one in the painting is dead yet. Alma-Tadema chose the minute in which the flowers are still delightful and left the rest outside the frame.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. AD 220',
  historicalYear: 220,
  historicalMonthDay: null,
  artTitle: 'The Roses of Heliogabalus',
  artCredit: 'Lawrence Alma-Tadema, 1888',
  imageUrl: bucketPainting('scenes/the-weight-of-roses.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-weight-of-roses.jpg'),
  details: [
    {
      id: 'the-host',
      x: 0.47,
      y: 0.27,
      scale: 2.4,
      caption:
        'The host lies propped on one elbow in gold silk and watches the table. A shallow gold bowl rests in his hand. He was put on the throne at 14 and killed in a palace latrine at 18.',
    },
    {
      id: 'the-buried-guest',
      x: 0.79,
      y: 0.8,
      scale: 2.4,
      caption:
        'A guest lies buried to the shoulders with her eyes open and a red flower still in her fingers. The woman above her holds a bowl of pomegranate seeds and watches the room.',
    },
    {
      id: 'the-canopy',
      x: 0.2,
      y: 0.24,
      scale: 2.6,
      caption:
        'The awning tips its corner and the petals come off it in a sheet. They fall past the piper and past the silver basin on its tripod. Alma-Tadema had fresh roses sent up from the Riviera every week that winter so each one could be painted from life.',
    },
  ],
} satisfies MockSceneDef;

export const theQueensLastLook = {
  slug: 'the-queens-last-look',
  title: "The Queen's Last Look",
  dek: 'The chains are gold, and the escort is waiting on the stair',
  story:
    "Palmyra was the toll booth of the world, an oasis city between the two empires. The silk, pearls, and incense of the East paid their way across it to the Mediterranean. Its merchant princes built colonnades with the percentage. When the Persians captured the emperor Valerian alive in 260 and the Roman East fell open, it was Palmyra's lord Odaenathus who drove them back, with Rome's thanks and Rome's titles. Then he was assassinated, and his widow took over as regent for their 10-year-old son. Her name in the inscriptions is Septimia Zenobia. She hunted like a soldier, ran a court with a Greek philosopher in residence, and claimed descent from Cleopatra, which was ambitious in every direction at once.\n\nIn five years she took most of the Roman East. Her armies occupied Egypt, which fed Rome, and her authority ran through Syria and deep into Asia Minor. The mints told the constitutional story in metal. They struck her son's face beside the emperor's, then her son's alone, then hers, with the title Augusta. Rome in those years was a corridor of short-lived soldier emperors, and the gamble that no one would find time for the desert was nearly right. The man who found time was Aurelian, a Danube officer of no family who was reassembling the broken empire piece by piece.\n\nIn 272 he beat her field armies twice, outside Antioch and at Emesa, and shut her inside Palmyra. She went out through the siege lines at night on a racing camel, riding for Persia and another war chest, and was taken at the Euphrates with the far bank in sight. Aurelian executed her philosopher Longinus, blaming him for the letter of defiance she had signed, and kept the queen herself for the parade. The triumph of 274 showed her to Rome in chains of gold, weighed, the chronicle says, with so many jewels she could barely walk. What came after is disputed in the sources and was probably ordinary: a villa at Tivoli, a marriage into the Senate, daughters. Rome preferred its monsters domesticated.\n\nPalmyra revolted again within the year, and Aurelian came back and took the city's future away for good; the caravans found other roads, and the colonnades kept only the sand. Schmalz painted her in 1888 at the hour between the two endings. She stands on a terrace above the colonnades, a pale disc low on the desert horizon, the gold cuff and its chain already on her wrist. At the foot of the stair a Roman escort knows better than to hurry her. The South Australian government bought the canvas in 1890, and it has hung in Adelaide ever since.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'AD 272',
  historicalYear: 272,
  historicalMonthDay: null,
  artCredit: "Herbert Schmalz, Zenobia's Last Look on Palmyra, 1888",
  imageUrl: bucketPainting('scenes/the-queens-last-look.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-queens-last-look.jpg'),
  details: [
    {
      id: 'the-chain',
      x: 0.41,
      y: 0.35,
      scale: 2.2,
      caption:
        'The cuff on her raised wrist has a chain hanging off it, and there is a second cuff on the hand at her side. She still has the jewelled belt and the dagger, and Aurelian is keeping her for the parade.',
    },
    {
      id: 'the-escort',
      x: 0.87,
      y: 0.77,
      scale: 2.4,
      caption:
        'A man in a lion skin carries the unit’s standard, a small gilded soldier on the end of a pole. The officer in the crimson cloak has his head back to look up the stair. The road out of Palmyra ends at the triumph of 274.',
    },
    {
      id: 'the-city',
      x: 0.88,
      y: 0.51,
      scale: 3.2,
      caption:
        'Two griffins rear up over the roofline, one gilded on the ridge and one on a stone base behind it. Beyond them the dome and the palm tops of Palmyra go grey in the dust. Within a year Aurelian came back, and the caravans found other roads.',
    },
  ],
} satisfies MockSceneDef;

export const inThisSign = {
  slug: 'in-this-sign',
  title: 'In This Sign',
  dek: 'A dream, a bridge of boats, and the empire changes gods',
  story:
    "In October of 312 Constantine came down on Rome with a fast, lean army to take it from Maxentius, his brother-in-law and one of four men that year calling himself emperor. Maxentius held the city, the Praetorian Guard, and Aurelian's high walls, and had twice already won civil wars by simply staying inside them. This time he consulted the Sibylline books, and the keepers returned an oracle that on the coming day the enemy of Rome would perish. He read himself as Rome, marched his army out to the river, and put the Tiber at its back. The stone Milvian Bridge had been cut as a precaution, so his engineers laid a bridge of boats.\n\nThe sign has two versions, both from men who knew Constantine. Lactantius, writing within a few years, says it was a dream on the eve of battle: mark the shields with the monogram of Christ, the chi and rho crossed. Eusebius wrote after the emperor's death. He says Constantine swore to him personally that he and the whole army saw a cross of light standing over the afternoon sun, with words attached: in this sign, conquer. Whichever it was, the shields that came down to the river that morning carried a mark no Roman legion had ever fought under.\n\nThe battle itself was short. Constantine's cavalry broke the line, the line went backward into the river, and the bridge of boats did what bridges of boats do under a running army. Maxentius went into the Tiber in his armor and stayed. The river returned him the next day, and his head crossed the city on a lance. Then it was shipped to Africa, where his supporters needed convincing. Constantine entered Rome, disbanded the Praetorian Guard after three centuries of emperor-making, and within months had co-signed an edict making Christianity legal from one end of the empire to the other. Within his lifetime it was the religion of the court; within a century, of the state.\n\nThe fresco of the battle stands in the Vatican, which is one way to state the outcome. Raphael won the commission for the hall and died in 1520 with the wall barely begun. His pupils Giulio Romano and Gianfrancesco Penni painted the cavalry, the drowning, and the gold emperor on the white horse over the following four years. They worked partly from the reliefs on Constantine's own arch. Overhead they added what no one at the river reported: angels in the air above the cavalry. In the palace of the popes, twelve centuries after the fact, the sky was not going to stay neutral.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '28 October, AD 312',
  historicalYear: 312,
  historicalMonthDay: toMonthDay('10-28'),
  artTitle: 'The Battle of the Milvian Bridge',
  artCredit: 'Giulio Romano and workshop, 1520–1524',
  imageUrl: bucketPainting('scenes/in-this-sign.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/in-this-sign.jpg'),
  details: [
    {
      id: 'the-emperor',
      x: 0.48,
      y: 0.38,
      scale: 2.4,
      caption:
        'Constantine rides the white horse in gold armor and a crown. He holds one hand out over the fighting. Behind him the army\'s eagle standard sits in its wreath as it always did, and a cross is bolted on above it.',
    },
    {
      id: 'the-drowning',
      x: 0.85,
      y: 0.73,
      scale: 2.8,
      caption:
        'Maxentius goes into the water beside his horse with the crown still on his head. The river gave him back the next morning, and the head went round the city on a lance.',
    },
    {
      id: 'the-angels',
      x: 0.5,
      y: 0.16,
      scale: 3.2,
      caption:
        'Three winged figures come in low over the banners. One has a drawn sword and one points down into the fight. Nobody at the river reported them, and the painters put them there anyway 12 centuries later.',
    },
  ],
} satisfies MockSceneDef;

export const theManWhoWentBack = {
  slug: 'the-man-who-went-back',
  title: 'The Man Who Went Back',
  dek: 'A prisoner argues against his own ransom, then keeps his word',
  story:
    "Rome learned to sail in a single generation because Carthage left it no choice, and by 256 BC it felt confident enough to land an army in Africa. The consul who led it, Marcus Atilius Regulus, won a battle, seized a town a day's ride from Carthage, and offered peace terms so crushing that the enemy decided fighting on was cheaper. Carthage hired a Spartan drill-master named Xanthippus, who took one look at the Roman line and pointed his elephants at the flat ground. In the spring of 255 the invading army was destroyed on the Bagradas plain, and Regulus, the consul who had dictated terms, was marched into Carthage as a prisoner.\n\nFive years later, the tradition says, Carthage sent him to Rome on parole. He was to propose peace, or at least an exchange of prisoners; he swore an oath to return if he failed. What he did instead became the most famous act of bad diplomacy in Roman memory. Standing before the Senate, he argued against his own exchange. He told the senators that Carthage's captive officers were young and useful, that he was old and finished, and that Rome should trade nothing. Then, his oath being what it was, he said his goodbyes and boarded the ship back. Horace has him shrugging off his wife's kiss like a man already legally dead, hurrying, the poet says, as if leaving for a country weekend rather than for his executioners.\n\nThe executioners are where the historians clear their throats. The stories of what Carthage did to him grew with each Roman telling: the cut eyelids, the sleepless days, the barrel lined with spikes. Polybius, the war's most careful historian, never mentions the return at all. Some scholars suspect the whole ordeal was invented to launder a nastier fact the sources preserve alongside it: that his widow tortured Carthaginian prisoners in Rome. True or built, the story did permanent work. When Cicero needed one name for the proposition that an oath binds even between enemies, the name was Regulus.\n\nBenjamin West, a Quaker from Pennsylvania who had become history painter to George III, took the departure as a royal commission. The king picked the subject himself in February 1768, after seeing West's Agrippina with the Ashes of Germanicus and asking him for another Roman one. The canvas hung in the Royal Academy's first exhibition, in 1769. It stages the story as a tug of war with one side not pulling. The crowd grasps, pleads, and faints around a man in a pale toga who has already, visibly, left. It has belonged to the crown ever since.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'c. 250 BC',
  historicalYear: -250,
  historicalMonthDay: null,
  artTitle: 'The Departure of Regulus',
  artCredit: 'Benjamin West, 1769',
  imageUrl: bucketPainting('scenes/the-man-who-went-back.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-man-who-went-back.jpg'),
  details: [
    {
      id: 'the-calm-man',
      x: 0.7,
      y: 0.6,
      scale: 3.0,
      caption:
        'Regulus walks out bald and unhurried. A veiled figure stands at his shoulder, and hands still reach for him from the right. West gave all the panic in the room to the crowd and none to the man going back to his executioners.',
    },
    {
      id: 'the-family',
      x: 0.86,
      y: 0.73,
      scale: 3.2,
      caption:
        "A woman in gold rests her chin on her hand, and a boy in white presses against her arm. At the edge of the frame, the hem of a toga is walking away. Horace wrote that Regulus put their kiss aside like a man who was no longer a citizen.",
    },
    {
      id: 'the-soldier',
      x: 0.18,
      y: 0.7,
      scale: 2.8,
      caption:
        'A soldier in a crested helmet has his shield on the ground and one hand on it. He watches a woman go down in the crowd in front of him. The army knew what Regulus had told the Senate, that Rome would be trading its young officers for one worn-out general.',
    },
  ],
} satisfies MockSceneDef;

export const tellHimWhatYouSaw = {
  slug: 'tell-him-what-you-saw',
  title: 'Tell Him What You Saw',
  dek: 'A homeless general answers from the rubble of a homeless city',
  story:
    "The most decorated soldier in Roman history spent part of 88 BC hiding in a marsh. Gaius Marius had been consul six times over. He had stopped the Cimbri and Teutones when Italy expected to be overrun. He had rebuilt the legions out of men who owned nothing, which made the army professional and, though nobody said it aloud yet, personal. His rival showed what that meant. Sulla marched a Roman army on Rome itself, the first man ever to do it. Marius, close to 70, went out a window and south along the coast. At Minturnae they pulled him naked out of the mud of the marshes and put him in a cell to await the sword.\n\nThe town sent in a Cimbrian trooper to do it, a man from the nation Marius had annihilated. In the dark cell the old man did not move. A voice like a parade ground asked the man whether he dared to kill Gaius Marius. The soldier dropped his sword and ran, and the magistrates of Minturnae, taking the point, put their prisoner on a ship instead. It carried him to the coast of Africa, where he came ashore at the site of Carthage: the city Rome had erased two generations earlier, streets and temples still lying where they fell.\n\nThe Roman governor of the province wanted no part of the fugitive and sent an officer to order him off. Plutarch kept the answer. Go and tell him, Marius said, that you have seen Gaius Marius, a fugitive, sitting amid the ruins of Carthage. One ruin regarding another; he knew exactly what the sentence did. Within the year he was back in Italy with an army of the same landless men he had invented. He took Rome, took his seventh consulship, and let five days of murder settle his accounts. He died in bed 17 days into the term.\n\nJohn Vanderlyn, an American working his way through Paris on borrowed money, painted the Carthage moment in 1807. The general sits on a broken block, his sword upright against his chest, sheathed and unbelted. Behind him a ruined aqueduct stands against the sunset. At the Salon of 1808 Napoleon singled the canvas out for a gold medal. It surprised no one who thought about what a French emperor might see in a soldier the republic had used, exiled, and not finished with.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '88 BC',
  historicalYear: -88,
  historicalMonthDay: null,
  artTitle: 'Caius Marius Amid the Ruins of Carthage',
  artCredit: 'John Vanderlyn, 1807',
  imageUrl: bucketPainting('scenes/tell-him-what-you-saw.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/tell-him-what-you-saw.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.36,
      y: 0.27,
      scale: 3.0,
      caption:
        'Marius hooks a finger into his beard and works out who owes him what. A Cimbrian soldier was sent into his cell at Minturnae. He dropped the sword on the strength of Marius\'s voice alone.',
    },
    {
      id: 'the-sword',
      x: 0.31,
      y: 0.47,
      scale: 3.2,
      caption:
        'The sword stands upright against his tunic, still in its sheath and off its belt. His elbow holds it in place. Vanderlyn painted this retirement the way Marius meant it, as a temporary one.',
    },
    {
      id: 'the-helmet',
      x: 0.12,
      y: 0.79,
      scale: 3.2,
      caption:
        'The helmet is off and sitting among the stones. The red cloak falls behind it. Rome pulled Carthage apart in 146 BC, and Marius came ashore in the ruins 58 years later.',
    },
  ],
} satisfies MockSceneDef;

export const sixtyShipsTurnedHome = {
  slug: 'sixty-ships-turned-home',
  title: 'Sixty Ships Turned Home',
  dek: 'A queen hoists sail mid-battle and an empire follows her out',
  story:
    "The last war of the Roman Republic was declared against a foreign queen, because that was easier to sell. Antony held the East with Cleopatra's fleet and Cleopatra's money. Octavian held Italy. He had also seized Antony's will from the Vestal Virgins and read it to the Senate: money left to Cleopatra's children, and instructions that Antony be buried beside her in Alexandria. Rome could forgive a civil war, but not an address. By the summer of 31 BC Antony's grand fleet sat blockaded inside the Ambracian Gulf, on the west coast of Greece. Octavian's admiral Agrippa picked off the supply ports, and malaria worked through the rowing benches. Antony burned the ships he could no longer crew.\n\nOn 2 September he came out to fight, or to leave; historians have argued about which ever since, because his captains had stowed the sails aboard, and you carry sails to run, not to battle. For hours the heavy quinqueremes ground against Agrippa's lighter line. Early in the afternoon the wind came round. Cleopatra's 60 ships had been waiting in the rear with the war treasury in their holds. They raised sails, went through the middle of the fight, and out to sea. Antony left his flagship, boarded a faster ship, and followed with a few dozen more. Plutarch spent one furious sentence on it: he was dragged along after the woman as if he had grown into her flesh.\n\nThe fleet he abandoned fought on into the evening without knowing it was leaderless, then surrendered or burned. The 19 legions on shore waited a week for orders and went over in a body. A year later Octavian took Alexandria. Antony and Cleopatra managed their exits by sword and, the story says, by snake. Egypt became a province, and within four years the man who had been Octavian was Augustus. On the headland above the battle he built a Victory City, Nicopolis, with a monument faced in the bronze rams of captured warships. The rams are gone, but archaeologists still count the empty sockets.\n\nLorenzo A. Castro painted the battle in 1672 with the only navy he knew: baroque galleys with gilded sterns, streaming pennants, an admiral's barge got up like a floating throne room. In his left foreground Cleopatra is already going, under a red canopy behind a gilt figurehead that trails a pink streamer, her prow turned out of the fight. In the center of the canvas, sailors go into the water off a capsized gilded hull. The canvas hangs in the National Maritime Museum at Greenwich among the fleet actions, where it is the oldest war in the room.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: '2 September, 31 BC',
  historicalYear: -31,
  historicalMonthDay: toMonthDay('09-02'),
  artTitle: 'The Battle of Actium',
  artCredit: 'Lorenzo A. Castro, 1672',
  imageUrl: bucketPainting('scenes/sixty-ships-turned-home.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/sixty-ships-turned-home.jpg'),
  details: [
    {
      id: 'the-barge',
      x: 0.19,
      y: 0.7,
      scale: 3.2,
      caption:
        'Cleopatra reclining under the striped awning while the rowers pull and a man in red points the way out. The gilt figurehead on the prow is already turned away from the fighting.',
    },
    {
      id: 'the-wreck',
      x: 0.52,
      y: 0.82,
      scale: 3.0,
      caption:
        'A gilded hull rolling over with its crew, one man still in his plumed helmet as he goes into the water. The fleet Antony left fought on into the dark before it learned there was no one to fight for.',
    },
    {
      id: 'the-melee',
      x: 0.58,
      y: 0.5,
      scale: 2.6,
      caption:
        "Shields racked along the gunwales and boarders going across, under sails and pennants from Castro's own century. He gave 31 BC the rigging of 1672.",
    },
  ],
} satisfies MockSceneDef;

export const theHeadOfTheOstrich = {
  slug: 'the-head-of-the-ostrich',
  title: 'The Head of the Ostrich',
  dek: 'The emperor grins at the front row and holds up a bird',
  story:
    "The senator Cassius Dio was in the front seats the day it happened, which is why we have it. The emperor Commodus, performing in the arena as he now regularly did, killed an ostrich with one of his crescent-headed arrows, the kind he used because they took the head off a running bird cleanly. Then he walked to where the senators sat, the sword in one hand and the head in the other. He said nothing. He just held both up and wagged his own head, grinning, so that no one in the good seats could miss what he meant. Laughing meant death. Dio writes that he and his colleagues stripped the laurel leaves from their garlands and chewed them, steadily, to keep their faces in order.\n\nHe was the son of Marcus Aurelius, the one succession the philosopher-emperor decided by blood after 80 years of emperors chosen by adoption, and the argument against heredity ever after. He renamed the months after his own titles, and Rome itself Colonia Commodiana. He had the head taken off Nero's colossus and replaced with his own, and added a club and a bronze lion at the feet. Hercules was the hero he liked to be taken for. He appeared in the arena hundreds of times and always won. His human opponents gave in on cue, and his animals were shot from a safe platform. For each day of it he drew a fee out of the gladiatorial fund, a sum Dio records with an accountant's disgust.\n\nThe joke consumed itself on the last night of 192. His mistress Marcia found her own name on a tablet listing the next day's executions; she moved first, with the chamberlain and the Praetorian prefect. The poison went into his wine and came back up, so his wrestling partner, an athlete named Narcissus, strangled the emperor in his bath. By spring the Praetorians had auctioned the throne to the highest bidder in the camp. The empire went to war with itself for five years. The case against handing the throne down by blood turned out to have nothing better behind it.\n\nEdwin Blashfield, an American who would later paint the dome of the Library of Congress, painted the exit parade around 1878. There is no ostrich anywhere in it. Commodus strolls out in the lion skin with a palm branch and a golden Victory. Behind him one of his gladiators stoops for the roses thrown at the emperor. At the left edge the senators are already going out under the arch, close together, talking. On the paving a fallen helmet has filled with roses.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'AD 192',
  historicalYear: 192,
  historicalMonthDay: null,
  artTitle: 'The Emperor Commodus Leaving the Arena',
  artCredit: 'Edwin Howland Blashfield, c. 1878',
  imageUrl: bucketPainting('scenes/the-head-of-the-ostrich.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-head-of-the-ostrich.jpg'),
  details: [
    {
      id: 'the-hercules',
      x: 0.55,
      y: 0.7,
      scale: 2.8,
      caption:
        'Commodus walks out of the arena in a lion skin without a mark on him. He carries a gold figure of Victory in one hand and palm branches over his shoulder. Dio puts his fee at 1,000,000 sesterces a day, and it came out of the gladiators\' own fund.',
    },
    {
      id: 'the-senators',
      x: 0.13,
      y: 0.68,
      scale: 3.0,
      caption:
        'Senators file out with their backs to the arena. They wear the bordered togas of their rank, and their garlands are still on their heads. Dio sat through it, and he says laughing would have been fatal.',
    },
    {
      id: 'the-helmet',
      x: 0.2,
      y: 0.86,
      scale: 3.2,
      caption:
        "A gladiator's helmet lies on the paving with its face grille pushed up. Roses are spilled against it. The fights were fixed, the flowers were real.",
    },
  ],
} satisfies MockSceneDef;

export const whatAttilaSaw = {
  slug: 'what-attila-saw',
  title: 'What Attila Saw',
  dek: 'An unarmed old man rides out and the Huns turn around',
  story:
    "In 452 Attila came over the Alps into Italy to collect what he considered owed. Aquileia, one of the great cities of the peninsula, was erased so completely that a historian visiting generations later found almost nothing left of it. Its refugees waded out to the sandbars of the lagoon, where their descendants would build Venice. Milan and Pavia opened their gates and were emptied anyway. The general Aetius, who had fought Attila to a standstill in Gaul the year before with Visigothic help, had no such allies in Italy and no army that could offer battle. The road to Rome lay open in the summer heat.\n\nWhat rode up that road was a committee. Pope Leo and two senior senators met Attila near the Mincio river in the flat country south of Lake Garda, and nobody wrote down what was said. What is certain is the result: Attila, undefeated, turned his army around and went back over the mountains. The plainer explanations have never been in short supply, and most of them are probably true at once. Plague was moving through his horsemen. Famine had left Italy nothing to forage. Troops from the eastern empire were raiding his undefended homelands on the Danube. His own advisers reminded him that Alaric had died within weeks of taking Rome. The legend chose a better picture: the apostles Peter and Paul in the air above the old man, swords drawn, visible to Attila alone.\n\nHe died the next year anyway, in bed on the night of his latest wedding, drowned in his own nosebleed. Within two years his sons had split the empire and lost it at the river Nedao. The Huns dissolved back into the peoples they had driven before them. Leo's church kept the story of the Mincio, and the story kept Leo: of the scores of popes since, he is one of the few called the Great.\n\nRaphael designed the wall for the papal apartments and painted it across 1513 and 1514, with much of the brushwork his shop's. The fresco moves the meeting from Lombardy to the gates of Rome, aqueduct and Colosseum on the horizon, since the wall's argument concerns the city. It gives Leo the face of Leo X, the Medici pope paying for the room, who also appears beside himself as a cardinal, the cartoon having been drawn before his election. The apostles overhead carry the swords the pope does not. Attila's horse shies; Leo's stands still. That is the entire argument of the wall, delivered in horseflesh.",
  eraId: toEraId('roman-empire'),
  historicalDateLabel: 'AD 452',
  historicalYear: 452,
  historicalMonthDay: null,
  artTitle: 'The Meeting of Leo the Great and Attila',
  artCredit: 'Raphael and workshop, 1513–1514',
  imageUrl: bucketPainting('scenes/what-attila-saw.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/what-attila-saw.jpg'),
  details: [
    {
      id: 'the-apostles',
      x: 0.4,
      y: 0.27,
      scale: 3.4,
      caption:
        'Peter and Paul come in over the meeting with their swords out. Only one man in the picture can see them. The legend filled in what the talks left unsaid.',
    },
    {
      id: 'the-pope',
      x: 0.26,
      y: 0.5,
      scale: 3.2,
      caption:
        'Leo is on a white horse that has not moved, with the papal tiara on his head and one hand raised. Raphael drew the head as Julius II first. He had it repainted as Leo X when Julius died.',
    },
    {
      id: 'the-king',
      x: 0.545,
      y: 0.46,
      scale: 3.4,
      caption:
        'Attila is on the dark horse in brocade sleeves, with his head thrown back. Both arms are up at something over the men in front of him. His army turned around, and he was dead within the year.',
    },
  ],
} satisfies MockSceneDef;
