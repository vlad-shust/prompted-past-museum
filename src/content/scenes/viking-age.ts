import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const theSeaWolvesOfLindisfarne = {
  slug: 'the-sea-wolves-of-lindisfarne',
  title: 'The Sea Wolves of Lindisfarne',
  dek: 'Dragon-prowed ships find the holy island undefended at dawn',
  story:
    'The year began with omens, and the monks wrote them down: immense whirlwinds over Northumbria, sheets of lightning, and what the Anglo-Saxon Chronicle records, without blinking, as fiery dragons flying in the air. A famine followed. Nobody connected any of it to the sea. The island is famous for two things: the painted gospel book its monks made, and the fact that no one has ever needed to defend it. Lindisfarne sits off the Northumbrian coast, reachable twice a day when the tide uncovers the causeway and cut off the rest of the time. For over a century it has been the holiest ground in the north, because Cuthbert is buried here, and kings who fear nothing else fear Cuthbert. Pilgrims bring silver. The silver stays on the altar, because nobody has ever come for it.\n\nThis morning the monks at matins hear gulls, then oars. Ships with carved serpent heads are riding the high tide straight onto the beach, which no trading vessel does. The men who leap out move through the priory with terrible efficiency: altar silver, jeweled bindings, the young monks who will fetch a price in the north. Some of the brothers are killed in the doorways. Others are driven into the sea to drown. It is over before the tide turns. The ships go out the way they came, heavier.\n\nThe news travels at the speed of a frightened rider. It lands hardest at the court of Charlemagne, where a Northumbrian scholar named Alcuin runs the palace school. He writes to the survivors what everyone is thinking: never before has such terror appeared in Britain, and no one believed an attack from the sea was even possible. The church of St Cuthbert, he writes, is spattered with the blood of the priests of God and stripped of its ornaments. Then, being a schoolmaster, he cannot help adding that the monks should consider whether their own sins invited this. The men in the serpent ships considered nothing. They had found a business model: wealth, undefended, on a coastline with no navy, and the same tide that exposed the causeway would cover their retreat.\n\nWhat the raiders could not sell, they left, and one of the things they left is the point of the story. The great gospel book of Lindisfarne was written and painted around 715 by a single monk named Eadfrith. He built about 90 colors out of 6 local minerals and plants, and the book came through the morning untouched. When the community finally abandoned the island three generations later, the monks carried two things over the causeway: Cuthbert in his coffin and the book. They walked Northumbria with both for 7 years before stopping at Chester-le-Street. Durham came more than a century after that. The raids they were fleeing went on for two and a half centuries and redrew every map they touched. The book outlasted all of it. It sits today in the British Library, unburned, every page Eadfrith painted still in place.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: '8 June 793',
  historicalYear: 793,
  historicalMonthDay: toMonthDay('06-08'),
  artTitle: 'Guests from Overseas',
  artCredit: 'Nicholas Roerich, 1901',
  imageUrl: bucketPainting('scenes/the-sea-wolves-of-lindisfarne.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-sea-wolves-of-lindisfarne.jpg'),
  details: [
    {
      id: 'dragon-prow',
      x: 0.3,
      y: 0.42,
      scale: 2.8,
      caption:
        'A carved beast head rides the tall prow with its mouth open over the helmets below. Icelandic law later told crews to take these heads down before they came in sight of home, so the land spirits would not take fright.',
    },
    {
      id: 'shield-row',
      x: 0.48,
      y: 0.55,
      scale: 2.6,
      caption:
        'Painted shields overlap along the ship\'s side, red beside white beside yellow. The men standing over them are already wearing helmets.',
    },
    {
      id: 'headland',
      x: 0.75,
      y: 0.24,
      scale: 2.2,
      caption:
        'A timber fort runs the length of the crest, with pointed roofs behind a wooden wall. The bay below it is empty. Nicholas II bought the picture in 1902 and hung it at Tsarskoye Selo.',
    },
  ],
} satisfies MockSceneDef;

export const theBurningShip = {
  slug: 'the-burning-ship',
  title: 'The Burning Ship',
  dek: 'The north sends its dead to sea in fire, or said it did',
  story:
    "The ship goes out at night, because that is how the story wants it. On the wet sand, bare-backed men lean into the hull and push. On the deck above them, laid out among his weapons with the rigging already alight, the chieftain makes his last crossing. A war leader in gold scale armor raises one open hand on the beach, the salute of a man who has just set fire to his friend. The tide takes the light out. That is the funeral as the north sang it, and it is the version Frank Dicksee painted in 1893: one fire, one grey sea, and a crowd holding still.\n\nWhat the ground gives up is both humbler and stranger. The Norse did bury leaders in ships, and archaeologists keep finding them. Oseberg gave up a carved vessel holding two women, with sledges, woven hangings and a cart. Gokstad held a man laid out among 12 horses, 6 dogs and a peacock. But those ships were dragged ashore and buried under mounds, not launched burning. The flaming ship on the water belongs mostly to legend. The god Baldr was burned on his own vessel, which a giantess had to launch because the gods could not shift it. Old king Haki had himself laid on a burning ship and pushed out with the wind behind him. Songs are cheaper than ships. A real longship was years of work. Burning one was a boast few families could afford.\n\nThe buried ships, when archaeology finally opened them, turned out to be arguments as much as graves. The Oseberg ship came out of a Norwegian mound in 1904, 70 feet of carved oak. Tree rings date the burial to 834. It held no warlord: two women lay inside, one old and one younger, with sledges, a cart, looms and imported silk. Which of the two the ship was for, queen or priestess or both, is still argued. Whoever she was, her people gave up a whole ship for her, then pinned it under stones and a hill of turf. They built a voyage and then made sure it could never start.\n\nOne eyewitness did see the fire. In 922 an Arab diplomat named Ibn Fadlan watched Rus traders on the Volga burn a dead chief aboard his beached ship. The funeral ran 10 days and ended with a slave girl killed to go with him. Ibn Fadlan wrote it all down like a clerk, and he was appalled. A Rus man beside him laughed at the Arabs for putting their dead in the earth to be eaten by worms. We burn him in an eye-blink, the man said through the interpreter, and he enters paradise at once. Then the man added the detail that makes it history rather than sermon: the wind was strong that day, so his lord would arrive quickly.\n\nDicksee painted none of the logistics and all of the belief. His Britain was in the grip of a Viking revival. Manchester Art Gallery has the canvas now, given in 1928 by a man named Arthur Burton in memory of his mother. The painting still does what the funeral was for. The man is not lowered out of sight. He leaves in the open, on his own hull, and the fire takes what the family spent years building. The sea kept the ashes. The story kept everything else.",
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 850',
  historicalYear: 850,
  historicalMonthDay: null,
  artTitle: 'The Funeral of a Viking',
  artCredit: 'Frank Dicksee, 1893',
  imageUrl: bucketPainting('scenes/the-burning-ship.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-burning-ship.jpg'),
  details: [
    {
      id: 'the-dead-man',
      x: 0.28,
      y: 0.3,
      scale: 2.6,
      caption:
        'Fire runs the whole length of the deck. A round shield still lies flat in the middle of it, and the painted rings show through the flame. The men who pushed the ship out are in the water below.',
    },
    {
      id: 'the-salute',
      x: 0.6,
      y: 0.38,
      scale: 2.4,
      caption:
        'The man in gold scale armor raises an open hand toward the water. Firelight catches every stud on his chest, and the helmets crowded behind him do not move.',
    },
    {
      id: 'the-prow',
      x: 0.78,
      y: 0.21,
      scale: 2.4,
      caption:
        'A carved beast head rises black against the last light with its jaws open. Under it the beach is full of bare arms and gold helmets.',
    },
  ],
} satisfies MockSceneDef;

export const theChoosersOfTheSlain = {
  slug: 'the-choosers-of-the-slain',
  title: 'The Choosers of the Slain',
  dek: 'Death over the battlefield is a woman doing her job',
  story:
    "She is working. The spear is up and the black horse has its footing on the storm. Somewhere below her men are fighting. She decides which of them will not be going home. Valkyrja is a job description. It means the one who chooses the killed. Odin's women ride over the fighting and pick the ones worth keeping out of the dying. Their names are the work: Hildr and Gunnr and Skögul, which mean Battle and War and Shaker. Some lists run to 30 names, enough for shifts. The chosen wake in Valhalla, the hall roofed with shields, and find out what they were chosen for.\n\nThey were chosen for more war. Every morning the einherjar, the army of the honored dead, arm themselves and fight in the meadow. Every evening the killed stand up whole and walk back to the hall. Dinner is a boar that grows back overnight, with mead that runs from a goat on the roof. It is training, with catering. Odin is stockpiling the best dead of every generation against Ragnarök, the last battle. The faith is honest about how that ends: the gods will lose. The seeress who lays out the end of the world in the oldest poems does not soften it. A wolf swallows Odin and the sky burns. The recruiting pitch of the religion of the north was a war already lost, fought anyway, in the best company available.\n\nThe poems are exact about the destination, in the way of soldiers' daydreams. Valhalla has 540 doors, and 800 warriors will come out of each one when the last morning arrives. The rafters are spear shafts and the roof is shields. And Odin does not even get first pick. The oldest verses say Freyja takes half the killed for her own hall before Odin's share is counted. Later ages found that awkward and mostly forgot it: the war god standing second in line behind a goddess. The dead who went to neither hall went down to Hel's grey country, dry and unremarkable, which was the real threat. Not fire, just irrelevance. The faith did not promise rest. It promised selection.\n\nBelieving that explains a great deal about men who took open boats across winter seas. Death in bed led nowhere worth going; death with a blade in hand was a promotion. In the sagas the valkyries sometimes come very close to the ground. Before the battle of Clontarf in 1014, an Icelandic saga has 12 of them at a loom, weaving the coming slaughter. The loom is weighted with men's heads and strung with their guts, and the women sing while they work. The poem does not present this as a nightmare. It presents it as production.\n\nPeter Nicolai Arbo painted Valkyrien in 1869, in a Norway busy rediscovering itself as the heir of all this. He got the belief into the picture: gold rings, mail, and a face with no cruelty and no pity in it. This was his second run at the subject. An earlier Valkyrie of 1864 hangs in Stockholm, and this one hangs in the Nasjonalmuseet in Oslo. Munich heard Wagner's Ride of the Valkyries the year after Arbo finished it. The decade was crowded with these women, and Arbo's does not sing. A second rider fades into the cloud behind her. They seldom rode alone. Below the horse's hooves, a river catches the last light of an ordinary human evening. The ravens hold formation around her, the way gulls follow a fishing boat, and for the same reason.",
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 900',
  historicalYear: 900,
  historicalMonthDay: null,
  artTitle: 'Valkyrien',
  artCredit: 'Peter Nicolai Arbo, 1869',
  imageUrl: bucketPainting('scenes/the-choosers-of-the-slain.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-choosers-of-the-slain.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.42,
      y: 0.21,
      scale: 2.8,
      caption:
        'Gold rings stack up her raised arm, and mail covers her to the throat. The spear is lifted. Her face carries no anger, because picking the dead out of a battle is the job and not a grudge.',
    },
    {
      id: 'the-second-rider',
      x: 0.13,
      y: 0.36,
      scale: 2.6,
      caption:
        'A second rider comes up out of the haze on a grey horse. Her spear is lowered and a crest curls off her helmet. The black mane that fills the right of the frame belongs to the first horse.',
    },
    {
      id: 'the-ravens',
      x: 0.84,
      y: 0.72,
      scale: 2.4,
      caption:
        "A raven crosses right under the horse's hoof. Its wings are out flat and not beating. Where she is going, the carrion birds are going too.",
    },
  ],
} satisfies MockSceneDef;
export const theLandWithoutOrder = {
  slug: 'the-land-without-order',
  title: 'The Land Without Order',
  dek: 'Quarreling tribes send overseas for a king, and get a dynasty',
  story:
    'The tribes of the lake country east of the Baltic had driven their Varangian overlords back across the sea and refused them any more tribute. Then, the Primary Chronicle admits, they found they could not govern themselves. There was no law among them. Tribe rose against tribe, and they began to make war on their own kin. Under the year 6370 from the creation of the world, 862 in ours, the chronicle records what they did about it. They sent a delegation back over the water, to a people called the Rus. It carried the most quoted invitation in Russian history: our land is great and rich, but there is no order in it. Come rule and reign over us.\n\nThree brothers accepted. Rurik, the eldest, took Novgorod. Sineus sat down at Beloozero and Truvor at Izborsk. Within two years the younger two were dead, the chronicle does not say how, and Rurik held the river roads alone. His kinsman Oleg pushed south to take Kyiv in 882 and called it the mother of Rus cities. The family stayed. When Tsar Fyodor died childless in Moscow in 1598, the dynasty that ended at his deathbed still traced itself to Rurik, 736 years back.\n\nWhether any of it happened is a fair question. The chronicle was compiled by monks in Kyiv around 1113, two and a half centuries after the invitation, the same distance that separates us from the American Revolution. Archaeology muddies the clean date: at Staraya Ladoga, on the river below Novgorod, Scandinavian combs and glass beads lie in layers from the 750s, a century before anyone was supposedly called in. The very name Rus is probably Finnish before it is Slavic, from Ruotsi, the Finns’ word for Swedes, which likely began as a word for rowing. Scholars once argued that Sineus and Truvor never existed at all, and that a scribe turned two Norse phrases, his own household and his loyal troop, into two extra brothers. Most linguists have abandoned the idea. It survives anyway, being too good to kill.\n\nViktor Vasnetsov painted the arrival around 1909, for a set of wall pictures the Moscow publisher Iosif Knebel sold to schools. It was never meant for a gallery. He divided the beach honestly. On the left the brothers stand in mail and scale armor, hands near their weapons. On the right the elders of the land wait in linen and fur, arms spread wide. Between the two groups, on the sand, sit drinking horns and a jar that nobody has picked up. The empire took the scene at face value. Its Millennium of Russia monument went up in Novgorod in 1862, dating the whole country from this meeting. The bronze Rurik at its base carries a shield stamped 6370.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 862',
  historicalYear: 862,
  historicalMonthDay: null,
  artTitle: 'The Invitation of the Varangians',
  artCredit: 'Viktor Vasnetsov, c. 1909',
  imageUrl: bucketPainting('scenes/the-land-without-order.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-land-without-order.jpg'),
  details: [
    {
      id: 'the-three-brothers',
      x: 0.24,
      y: 0.22,
      scale: 2.6,
      caption:
        'The men off the ships stand in mail and scale armor, and one of them rests a long axe on his shoulder. The chronicle names 3 brothers. Vasnetsov gives them a whole warband.',
    },
    {
      id: 'the-open-hands',
      x: 0.66,
      y: 0.18,
      scale: 2.7,
      caption:
        'An old man puts his open palm up toward the ships. The chronicle gives his side one line: our land is great and rich, but there is no order in it.',
    },
    {
      id: 'the-gifts',
      x: 0.12,
      y: 0.82,
      scale: 2.8,
      caption:
        'A bundle of drinking horns lies on the sand with a red two-handled jar and a pile of furs. Fur was the money of the north, and it came back up the rivers as Arab silver coin.',
    },
  ],
} satisfies MockSceneDef;

export const smokeBay = {
  slug: 'smoke-bay',
  title: 'Smoke Bay',
  dek: 'A settler lets the sea choose his farm and the search takes three years',
  story:
    'Land is already in sight when Ingólfr Arnarson carries his high-seat pillars to the rail and lets the North Atlantic have them. The carved posts stood on either side of the owner’s seat at home, and a household’s luck was held to live in them. Ingólfr has sworn to build wherever the gods float them ashore. Landnámabók, the Icelanders’ book of settlements, gives him plain reasons for the crossing. A feud with an earl’s sons had cost him his Norwegian estates. The island, sighted by storm-blown sailors a few years earlier, was the one country on offer with nobody in it.\n\nNobody, or nearly. Ari the Learned, writing in the 1120s, says the first Norsemen found bells, books and bishops’ staffs left behind by Irish hermits. Those men had rowed to the edge of the world to pray alone, and they left rather than share the island with heathens. Ingólfr spent his first winter under the great south-coast headland that still carries his name, Ingólfshöfði, then sent two slaves, Vífill and Karli, west along the shore to look for the pillars. The search took three years. The bay where the posts finally lay steamed with hot springs, so it was named Reykjavík, smoke bay. Karli looked at the lava fields and said the line Landnámabók was honest enough to keep: we came past good country to settle on this bare headland.\n\nIngólfr’s sworn brother Hjörleifr, who had crossed alongside him, never saw the bay. He would never sacrifice to the gods, the book notes. In the first spring his Irish slaves killed him, took the women and ran for the islands offshore. Ingólfr tracked them there and killed them in turn, and the islands are still Vestmannaeyjar, the west men’s isles. Standing over his brother’s body, he allowed himself one line about the gods: this, he said, is what comes of refusing the sacrifice.\n\nJohan Peter Raadsig painted the landing in Copenhagen in 1850, when the Danish crown had governed Iceland for centuries. Ingólfr’s men heave the pillar upright while he points out over the shore in a red cloak. His wife Hallveig, the children, the dog and the beached ship all wait on the stones. The carved head on the pillar top gets the first good look at the new country. It is a Danish academy picture, and it stands closer in time to us than to the landing.\n\nTradition fixed the year as 874, and the ground nearly agrees. Under downtown Reykjavík lies a layer of volcanic ash that Greenland ice cores date to 871, give or take 2 years. The turf wall of the oldest house yet found in the city sits directly on it. The museum built around that wall took the geology for a name: The Settlement Exhibition, Reykjavík 871±2.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 874',
  historicalYear: 874,
  historicalMonthDay: null,
  artTitle: 'Ingólfr Takes Possession of Iceland',
  artCredit: 'Johan Peter Raadsig, 1850',
  imageUrl: bucketPainting('scenes/smoke-bay.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/smoke-bay.jpg'),
  details: [
    {
      id: 'the-carved-pillar',
      x: 0.18,
      y: 0.27,
      scale: 2.9,
      caption:
        'The pillar goes up with a bearded face cut at the top. At home a pair of these stood on either side of the owner’s seat, and Ingólfr threw them into the sea to let them pick his farm for him.',
    },
    {
      id: 'the-red-cloak',
      x: 0.4,
      y: 0.3,
      scale: 2.5,
      caption:
        'Ingólfr in a red cloak and a gilded helmet, one arm out over the ground he is claiming. The painting has hung in Reykjavík since 1986, when a shipping company gave it to the city for its 200th birthday.',
    },
    {
      id: 'the-household',
      x: 0.63,
      y: 0.55,
      scale: 2.4,
      caption:
        'A woman in a white headdress carries a child past the spears, a boy and an older woman beside her. Landnámabók names over 400 first claimants, and within 60 years the island’s usable land was taken.',
    },
  ],
} satisfies MockSceneDef;

export const theManFromBaghdad = {
  slug: 'the-man-from-baghdad',
  title: 'The Man from Baghdad',
  dek: 'The caliph’s envoy reaches the Volga and writes down everything he sees',
  story:
    'On 12 May 922 a caravan out of Baghdad reached the camp of the Volga Bulgars, and the king’s welcome party rode out to meet it. Ahmad ibn Fadlan, jurist to the embassy, records the date exactly. He had been traveling since the previous June. The mission wintered in Khwarazm, where he says the great river froze hard enough for carts to cross on the ice. Then it pushed north with 3,000 animals and 5,000 men. The cold made him think a door had opened onto Zamharir, the frozen wing of the Muslim hell. An awkward job waited at the far end. King Almış had asked the caliph for 4,000 dinars toward a fortress against the Khazars, and the money had fallen through. Ibn Fadlan was the man who had to read the caliph’s letter aloud, then answer for the coins that were not in the baggage. The king listened to the letter, then asked where the money was. Much of the report that follows was written by a man taking notes while in trouble.\n\nAt the river he met the Rus, come downstream to trade furs and slaves. He had never seen bodies more perfect, he wrote: tall as date palms, blond and ruddy, every man inked dark green from fingernails to neck. He priced what he saw like an auditor. A woman wore one neck ring for every 10,000 dirhams her husband was worth. The green glass beads the men prized cost a dirham each, and went to their women as necklaces. Their piety was commercial: a trader would stand before a carved wooden post, list his cargo aloud, and ask for a rich buyer who would not haggle. Their washing undid him. One basin of water went from man to man each morning, and each blew his nose into it in turn. The same pen that admired the date palms calls them the filthiest of God’s creatures.\n\nThat summer a great man of theirs died on the riverbank, and ibn Fadlan watched the whole rite through, from temporary grave to ash, an interpreter at his elbow the entire time. The beached ship, the goods, the animals, the slave girl who volunteered to follow her master: all of it is in the report, timed, counted and measured. His method was to ask the next question and write down the answer he got, not the one he expected.\n\nHenryk Siemiradzki painted that funeral in 1883 for the Historical Museum just opened on Red Square. He worked from the report itself: the dragon-prowed hull propped on timber, the dead man couched in brocade, the mourners on the steps. The museum had ordered two scenes of pre-Christian Rus the year before, and Count Alexei Uvarov, who planned the halls, picked the subjects. Siemiradzki was a Pole living in Rome who had made his name staging the spectacles of Nero, and he gave the Volga bank the warm light of his Roman canvases.\n\nOutside these pages, nothing is known about ibn Fadlan. The report nearly vanished with him. For centuries it survived only as quotations inside a 13th-century Arabic dictionary of places. Then in 1923 the Bashkir scholar Zeki Validi Togan opened a manuscript in the shrine library at Mashhad, in Iran, and found the embassy waiting inside.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: '12 May 922',
  historicalYear: 922,
  historicalMonthDay: toMonthDay('05-12'),
  artTitle: 'Funeral of a Rus Noble',
  artCredit: 'Henryk Siemiradzki, 1883',
  imageUrl: bucketPainting('scenes/the-man-from-baghdad.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-man-from-baghdad.jpg'),
  details: [
    {
      id: 'the-volunteer',
      x: 0.655,
      y: 0.37,
      scale: 2.6,
      caption:
        'Three mourners in embroidered shirts stand at the foot of the bier. One raises a cup and presses a hand to her eye. The girl beside her steps barefoot onto a stool set with two small brass cups.',
    },
    {
      id: 'the-couch',
      x: 0.83,
      y: 0.22,
      scale: 2.8,
      caption:
        'The dead man lies in gold brocade on a patterned carpet. His sword and his painted shield are propped at his side. Ibn Fadlan says he had spent 10 days in a temporary grave while these clothes were cut and sewn.',
    },
    {
      id: 'the-offerings',
      x: 0.34,
      y: 0.84,
      scale: 2.8,
      caption:
        'A bow and a full quiver of white-feathered arrows lie on a blue cloak between two dead animals. Ibn Fadlan counted what the Rus cut up and threw into the ship. It came to two horses, two cows, a dog, a rooster and a hen.',
    },
  ],
} satisfies MockSceneDef;

export const theLawRock = {
  slug: 'the-law-rock',
  title: 'The Law Rock',
  dek: 'Farmers with no king invent a government that fits in a meadow',
  story:
    'Every householder in Iceland owed a penny to a man called Grímr Goatbeard. Ari the Learned, writing the island’s first history around 1125, explains the fee. The settlers had decided their 60-year-old colony needed one law and one assembly. Grímr walked the country to find the meeting place, and the pennies were his wage. The spot sits where a lava plain meets a wall of cliff: Þingvellir, the assembly plains. It had grazing, trout water and a natural sounding board in the rock, and its previous owner had lately been outlawed for murder, so the land conveniently belonged to everyone.\n\nThe law itself came back from Norway with a man named Úlfljótr, who had spent three winters there reshaping the west-coast Gulathing code for an island with no king to enforce it. Around midsummer 930 the first Althing met, and it met every summer after that, two weeks in June. The whole thing balanced on one elected man. The Lawspeaker stood on the Law Rock and recited a third of the law aloud each session, so the full code went through living memory every three years. The first of them, Hrafn Hængsson, kept the job for 20 summers. Nothing existed to check him against, because Iceland did not write its law down until the winter of 1117.\n\nFor those two weeks the plain was the capital of the island. Booth walls of turf and stone, left standing all year, were roofed with striped homespun each summer. Goods, gossip, betrothals and lawsuits moved between them, and the sagas stage half their turning points in this crowd. What the assembly never had was any way to make people obey it. Courts could declare a man outlaw, full outlawry meaning anyone might kill him without penalty, and then the winning side rode home to enforce the sentence itself. The arrangement sounds unworkable. It ran for over three centuries before the Norwegian crown absorbed it.\n\nW. G. Collingwood, an English painter who had published John Ruskin’s biography in 1893, spent the summer of 1897 crossing Iceland on horseback with the scholar Jón Stefánsson. He painted the saga sites as he went, and the two of them printed the results in 1899 as A Pilgrimage to the Saga-Steads of Iceland. His Althing is a reconstruction: cloth roofs on the booths, chieftains’ parties strung along the rocks, the assembly crowd on the floor of the rift called Almannagjá. The rift is the one detail nobody present could have understood. It is the torn edge of the North American plate, pulling away from Europe at about 2 centimeters a year. The plain between the cliffs belongs to neither continent. Each summer the law was read out from the edge of one plate, to men camped in the gap between two.\n\nThe assembly, moved to Reykjavík and interrupted once for 45 years, still sits. The pennies were never refunded.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'Midsummer, 930',
  historicalYear: 930,
  historicalMonthDay: null,
  artTitle: 'The Althing in Session',
  artCredit: 'W. G. Collingwood, c. 1897',
  imageUrl: bucketPainting('scenes/the-law-rock.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-law-rock.jpg'),
  details: [
    {
      id: 'the-rift-crest',
      x: 0.55,
      y: 0.5,
      scale: 2.6,
      caption:
        'A man in a red cloak stands alone at the top of the rock and speaks. Two listeners wait at his feet, and the crowd is strung out along the ridge behind him. He is the Lawspeaker, who had to recite a third of Iceland’s law from memory each summer.',
    },
    {
      id: 'the-booths',
      x: 0.48,
      y: 0.85,
      scale: 2.3,
      caption:
        'Two booths stand under roofs of striped homespun cloth. Stones on cords hold the eaves down. The turf and stone walls stayed up all year, and only the cloth came and went with the assembly.',
    },
    {
      id: 'the-assembly-floor',
      x: 0.82,
      y: 0.77,
      scale: 2.8,
      caption:
        'At the foot of the lava wall, the people who came for the assembly sit packed along the slope. Smaller knots of men talk business out on the grass. No court here had police behind it, so the winning side rode home and enforced its own verdict.',
    },
  ],
} satisfies MockSceneDef;

export const theEmperorsGoddaughter = {
  slug: 'the-emperors-goddaughter',
  title: 'The Emperor’s Goddaughter',
  dek: 'The regent of Kyiv gets baptized, and the emperor discovers what that means',
  story:
    'The reception machinery of Constantinople existed to make a visitor feel the exact weight of the empire. Beside the throne stood gilded lions that lashed their tails and roared. Jeweled birds sang in a bronze tree. At the right moment the throne itself rose, emperor and all, toward the ceiling. An Italian envoy saw the machine working in 949 and wrote it down. On a September Wednesday, probably in 957, the same palace received Olga: regent of Kyiv, widow of the murdered Prince Igor, and the first woman to rule the Rus.\n\nThe Primary Chronicle tells her visit as a comedy with a winner. Constantine VII, struck by her looks and her wit, tells her she is fit to reign in the city beside him. Olga, still a pagan, answers that she will accept baptism only if the emperor and the patriarch perform it themselves. They do, and she is christened Helena. The emperor renews his offer of marriage and walks into the trap. He is her godfather now, and church law forbids a godfather to marry his goddaughter. You have outwitted me, Olga, the emperor says in the chronicle, and sends her home with gold, silver, silks and the official title of daughter.\n\nThe emperor kept records of his own, and they are drier. His book of ceremonies logs two receptions for Elga, archontissa of Rhosia, which is Greek for Olga, ruler of the Rus. The dates are 9 September and 18 October, and the book prices the whole embassy gift by gift, down to the interpreters. The weekdays fit either 946 or 957, and historians have now disputed the year for a century. One entry cuts deeper: among her people the ledger lists a priest, Gregory. If she traveled with clergy, she may have arrived Christian already, and the famous scene at the font may be Kyiv’s own legend. The protocol book records no marriage proposal of any kind. Constantine already had an empress, named Helena. After the font, Olga carried the same name.\n\nIvan Akimov painted the baptism in 1792 for the Imperial Academy of Arts in Petersburg, where he taught and would later be director. The timing had empire in it. Catherine the Great’s court was openly dreaming of a reconquered Constantinople, and the empress had named her second grandson Constantine on the strength of the dream. Akimov stages what the chronicle wanted: the patriarch’s hand raised over Olga, her own hands crossed on a gold robe, the red-cloaked emperor watching like a man rethinking an offer. The picture now hangs in the Russian Museum.\n\nThe conversion did not pass to her son. My men will laugh at me, Svyatoslav tells her in the chronicle. In 959 she asked King Otto of Germany for a bishop instead, and the one who finally came lasted about a year before fleeing for his life. She died in 969, 19 years before her grandson Vladimir walked Kyiv into the Dnieper to be baptized. The church ranks her equal to the apostles, a title it has given to few women. Her own last instruction was small and pointed for her century: no funeral feast, no mound. Her priest buried her.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 957',
  historicalYear: 957,
  historicalMonthDay: null,
  artTitle: 'The Baptism of Princess Olga in Constantinople',
  artCredit: 'Ivan Akimov, 1792',
  imageUrl: bucketPainting('scenes/the-emperors-goddaughter.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-emperors-goddaughter.jpg'),
  details: [
    {
      id: 'the-blessing',
      x: 0.455,
      y: 0.355,
      scale: 2.6,
      caption:
        'The white-robed patriarch raises one hand over Olga and holds a small gold cross out to her on a chain. In the chronicle she agreed to be baptized only if the emperor and the patriarch did it themselves.',
    },
    {
      id: 'the-suitor',
      x: 0.7,
      y: 0.36,
      scale: 2.6,
      caption:
        'Akimov puts Constantine VII in a red cloak and a gold crown, with a lit candle raised in one hand. The chronicle has him propose marriage right after the baptism. His own protocol book records a living empress, also named Helena.',
    },
    {
      id: 'the-kneeling-party',
      x: 0.52,
      y: 0.72,
      scale: 2.6,
      caption:
        'Two young men kneel on the steps. Incense smoke climbs from a small metal burner between them, past the hem of Olga’s gold robe. The palace ledger prices her whole embassy gift by gift and lists a priest called Gregory already among her people.',
    },
  ],
} satisfies MockSceneDef;

export const theSweetDewOfVinland = {
  slug: 'the-sweet-dew-of-vinland',
  title: 'The Sweet Dew of Vinland',
  dek: 'Leif buys the ship that saw a coastline and goes to stand on it',
  story:
    'The first European on record to see America refused to step onto it. In 986 Bjarni Herjólfsson sailed from Iceland to join his father in the brand-new Greenland colony, and fog blew him past his mark. When the sky cleared he was coasting a low wooded shore that matched nothing in the sailing directions. His crew wanted to land. Bjarni said no, this was not Greenland, and held course until it was. At the earl’s court in Norway years later, men said openly that he had shown no curiosity, and the verdict followed him home.\n\nAround the year 1000 Leif Eiriksson bought Bjarni’s ship, gathered 35 men, and asked his father Erik the Red to lead the voyage. Erik’s horse stumbled on the ride down to the shore, and he took the fall as an omen. He was not meant, he said, to find more countries than the one he lived in. Leif sailed without him, ran Bjarni’s sightings in reverse, and named as he went, in the flat style of a man labeling crates: Helluland, slab land; Markland, forest land. At the third landfall the Saga of the Greenlanders drops its guard: the crew touched the dew on the grass and put it to their lips, and thought they had never known anything so sweet.\n\nThe winter camp turned up one wonder after another. The rivers ran with salmon bigger than any of them had seen. On the shortest day of the year the sun was still up in mid-afternoon, which a Greenlander thought worth writing down. Then Tyrkir, the German foster-father Leif had brought along, went missing from the party. He came back talking German and rolling his eyes, too pleased to get it out in Norse for a while. What he had found was vines and grapes, in a country he had thought too far north for either. Leif named the land for them, Vinland, and in spring the ship went home loaded with timber and grapes. When he took 15 shipwrecked sailors off a reef on the way, the trip had gone so entirely right that he was Leif the Lucky ever after.\n\nChristian Krohg painted the landfall in 1893. He was a realist and a working journalist, and he put weather where the myth usually goes. The deck heels, the sea runs cold green, and a green shore shows on the horizon past the shields. The date was an argument. Chicago’s world fair that year was a jubilee for Columbus. Norway answered by sailing Viking, a copy of the excavated Gokstad ship, across the Atlantic to the fairground to show what an open Norse hull could do.\n\nThe sagas held their half of the story for nine centuries before the ground supplied the rest. In 1960 a local man, George Decker, led the Norwegian explorer Helge Ingstad and the archaeologist Anne Stine Ingstad to grassed-over ridges at L’Anse aux Meadows, on the northern tip of Newfoundland. The ridges turned out to be 8 turf buildings, and with them came a smithy with slag from bog iron, boat rivets, a bronze cloak-pin and a spindle whorl. There were also butternut shells, from a tree that has never grown in Newfoundland. In 2021 tree-ring dating fixed the year one of the cut logs was felled, and the answer was 1021 exactly. The rings carry the scar of the solar storm of 993, and the tree grew 28 more of them before the axe.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 1000',
  historicalYear: 1000,
  historicalMonthDay: null,
  artTitle: 'Leif Erikson Discovers America',
  artCredit: 'Christian Krohg, 1893',
  imageUrl: bucketPainting('scenes/the-sweet-dew-of-vinland.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-sweet-dew-of-vinland.jpg'),
  details: [
    {
      id: 'the-landfall',
      x: 0.71,
      y: 0.44,
      scale: 2.2,
      caption:
        'Leif throws his arm out over the bow with his head back. He wears a yellow tunic with an embroidered collar and a black hood. Krohg painted him in 1893, the year Norway sailed a copy of the Gokstad ship to the world’s fair in Chicago.',
    },
    {
      id: 'the-old-hand',
      x: 0.22,
      y: 0.68,
      scale: 2.4,
      caption:
        'An old crewman in a fur-trimmed cloak leans forward over his knee. Both fists are shut, and he stares the way the ship is going. Leif had bought this ship from Bjarni Herjólfsson, who saw the coast years earlier and would not land.',
    },
    {
      id: 'the-lookout',
      x: 0.43,
      y: 0.46,
      scale: 2.4,
      caption:
        'A young crewman in blue sits up on the rail beside the row of shields and watches the sea ahead. The saga puts 35 men on that ship and names only two of them. One is Leif, and the other is his foster-father Tyrkir, who found the grapes.',
    },
  ],
} satisfies MockSceneDef;
export const thePrinceAtTheOar = {
  slug: 'the-prince-at-the-oar',
  title: 'The Prince at the Oar',
  dek: 'A prince who lives like his oarsmen rows out to meet the emperor of the Romans',
  story:
    'On one of the last nights of the siege of Dorostolon, the Byzantine army looked up from its camp and watched fires climb the sky in front of the fortress. Leo the Deacon, the historian of this war, explains what burned. When darkness fell and the moon rose full, the Rus came out under the walls. They gathered their dead from the day’s fighting and burned them on pyres. Over the bodies they killed captives, men and women both, after the custom of their ancestors. Then they lowered suckling infants and roosters into the Danube and drowned them. It was July of 971, the third month of the siege. The man keeping the old customs was Svyatoslav, prince of Kyiv, the son Olga had never managed to baptize. He had taken Bulgaria in a single season three years earlier, and now he could not get out of it.\n\nThe tallest pyre that night had a name. In the day’s battle the emperor’s bodyguard Anemas had cut down Ikmor, second in command of the Rus army. Anemas was the son of the deposed emir of Crete, and he took off Ikmor’s head and right arm with one stroke. A few days later, in the last charge out of the town, Anemas broke through to Svyatoslav himself and struck him on the collarbone. The prince’s mail held. Anemas was killed where his horse stopped. A storm blew up during that battle and drove dust into the Rus faces, and afterward the Byzantines swore a rider on a white horse had gone before their line. They gave the credit to Saint Theodore. That evening Svyatoslav asked for terms.\n\nThe treaty was businesslike. The Rus gave up Bulgaria and swore never to come against the empire again. The empire fed them for the road, two measures of grain a man. Leo says the measures were counted out for 22,000 men, of the 60,000 he claims had come. Then the prince asked to see the emperor, and Leo preserves the meeting. John Tzimiskes came down to the bank of the Danube on horseback, in gilded armor, with a squadron of riders shining behind him. Svyatoslav crossed in a boat, rowing with his own hands, pulling an oar like the rest of the crew.\n\nHe was of middling height, Leo writes, blue-eyed under heavy brows, flat-nosed, beardless, with a thick mustache. His head was shaved but for one lock of hair on the side, the mark of his nobility. His neck was thick, his shoulders broad, his expression sullen and wild. In one ear he wore a gold earring, a red stone set between two pearls. His white clothes differed from his oarsmen’s in one thing only, that they were clean. He talked with the emperor a little about the peace, sitting on the rowing bench of his own boat, and pushed off.\n\nHenryk Siemiradzki painted the funeral night in 1884, the second of two huge canvases on the pagan Rus he made for the new Historical Museum in Moscow. The first staged the ship burning Ibn Fadlan saw on the Volga. He read his Leo closely, down to the full moon over the river and the rooster held up against it. But the leader he put on the white horse has a full head of hair, and the shaved skull with its one lock stayed on the page. The peace held exactly as long as the voyage home needed it to. Svyatoslav wintered at the Dnieper rapids, short of food, and in spring the Pechenegs were waiting at the portage. The Primary Chronicle says their khan, Kurya, had the prince’s skull sheathed in gold and drank from it. The earring is mentioned once, on the riverbank, and never again.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'July, 971',
  historicalYear: 971,
  historicalMonthDay: null,
  artTitle: 'Funeral Feast of Svyatoslav’s Warriors',
  artCredit: 'Henryk Siemiradzki, 1884',
  imageUrl: bucketPainting('scenes/the-prince-at-the-oar.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-prince-at-the-oar.jpg'),
  details: [
    {
      id: 'the-pyre',
      x: 0.14,
      y: 0.26,
      scale: 2.4,
      caption:
        'A body lies across the burning log stack and arms go up all around it. At the right, a man swings an axe. Leo the Deacon records the night from the Byzantine side. The Rus came out under the walls and burned their dead.',
    },
    {
      id: 'the-prisoner',
      x: 0.4,
      y: 0.52,
      scale: 2.6,
      caption:
        'A man in scale armour pins a woman in a white shift from behind. She still has one arm stretched toward a naked child, and a man in red is holding the child up. Leo the Deacon says captives were killed over the dead that night, men and women both.',
    },
    {
      id: 'the-low-moon',
      x: 0.88,
      y: 0.3,
      scale: 2.6,
      caption:
        'A warrior in mail holds a rooster out at arm’s length. The bird’s head crosses the full moon low over the water. Leo the Deacon wrote that the Rus drowned roosters in the Danube that night, and Siemiradzki put one in.',
    },
  ],
} satisfies MockSceneDef;

export const theLongSerpent = {
  slug: 'the-long-serpent',
  title: 'The Long Serpent',
  dek: 'Two kings and a jarl wait behind an island for the finest ship in the north',
  story:
    'Three commanders had a tent pitched on an island called Svolder so they could watch the strait in comfort. Svein Forkbeard was king of Denmark, Olof was king of Sweden, and Eirik Hakonarson was a Norwegian jarl with a dead father to avenge. At the end of summer in the year 1000, Olaf Tryggvason, king of Norway, sailed home past them, his fleet strung out and easy after a season in Wendland. Snorri Sturluson stages the wait as theater. Every time a big ship rounded the point, Svein announced the Long Serpent and called for the boats. Every time, Eirik, who knew Norwegians, said the king of Norway had more fine ships than one. When the Serpent finally came, nobody argued. Snorri says all of them knew.\n\nThe silence was earned. The Long Serpent had been built on the beach below Nidaros the winter before, the biggest ship ever made in Norway. She was built for 34 pairs of oars, her head and tail were gilded, and her sides stood as high as an ocean trader’s. Even her flaws were legend. One morning, with the hull nearly finished, the new planks were found slashed full of axe notches, and King Olaf promised death for whoever had done it. The master builder Thorberg confessed on the spot. Told to make it good, he shaved the damaged plank down until the notches were gone and the line of the ship was better than before. The crew was picked by rule: no man older than 60, none younger than 20. The rule was bent once for Einar, who was 18, because nobody in Norway shot a bow like him.\n\nMost of the fleet had already passed out of sight when the trap closed on the 11 ships nearest the king. Sigvaldi, the Jomsviking jarl who had steered Olaf into the strait, rowed out of the line as it began. Olaf would not run. Strike the sails, Snorri has him say. My men shall not think of flight. I have never fled from a fight. God rules my life, and flight I shall never take. He lashed the 11 together with the Serpent in the middle. Then he stood on her afterdeck in a short red silk tunic over his mail, with a gilded helmet, so every man on the water could see where the king was. The Danes and the Swedes bloodied themselves at the prows and fell away. Eirik was patient instead. He laid his ship the Iron Beard against the outermost Norwegian hull, cleared it, cut it loose, and worked inward one ship at a time until the Serpent stood alone.\n\nHer sides were too high to storm, so it became a fight with arrows. Einar loosed twice at Eirik and missed by a hand. Then an arrow split Einar’s bow. What broke there so loudly, asked the king. Norway from your hand, king, said Einar. He took the king’s own bow, drew it past the arrowhead, and said, too weak, too weak is the king’s bow. Then he fought on with sword and shield. Toward evening the boarders came over the rail in numbers, and the crew went into the sea. Kolbjörn the marshal, dressed like his king, jumped and was hauled into a boat by men certain they had Olaf. The king raised his shield over his head and went down under it.\n\nOtto Sinding painted the last hour in 1883 and 1884, on a canvas wide enough to hold a fleet. The Serpent runs gold across it, crowded to the rail, with small boats pressing in below and a single raven low over the water. The picture belongs to the Norwegian royal collection. His brothers were the composer Christian Sinding and the sculptor Stephan Sinding, so the national revival was a family trade. The death itself never quite took. Within a lifetime men swore the king had been seen in Rome, then in Jerusalem, a monk who would not give his name. Snorri weighs the rumors and settles nothing: however that may be, he writes, King Olaf Tryggvason never came back again to his kingdom in Norway.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'September, 1000',
  historicalYear: 1000,
  historicalMonthDay: null,
  artTitle: 'The Battle of Svolder',
  artCredit: 'Otto Sinding, 1883–1884',
  imageUrl: bucketPainting('scenes/the-long-serpent.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-long-serpent.jpg'),
  details: [
    {
      id: 'the-man-in-red',
      x: 0.755,
      y: 0.6,
      scale: 2.8,
      caption:
        'The man in red stands above the shields with his arm raised, near the stern of the gilded ship. Snorri dressed Olaf to be seen. He gave him a short red tunic over his mail and a gilded helmet, so the whole fleet could find him.',
    },
    {
      id: 'the-raven',
      x: 0.47,
      y: 0.78,
      scale: 2.6,
      caption:
        'A raven flies low over the foam between the hulls. The crew ended up in that water still wearing mail, and mail sinks a man.',
    },
    {
      id: 'the-boats',
      x: 0.75,
      y: 0.79,
      scale: 2.4,
      caption:
        'Shields and helmets pack the Serpent’s rail while an open boat rides under her side. Her sides were higher than anything around her, so Eirik’s men shot at the deck for hours before they could climb it.',
    },
  ],
} satisfies MockSceneDef;

export const betweenTwoTides = {
  slug: 'between-two-tides',
  title: 'Between Two Tides',
  dek: 'An old king waits out the fight in his tent while the tide decides it',
  story:
    'The high king would not fight on Good Friday. Brian Boru was 73, if the annals have his birth year right. He had spent half his life making himself master of Ireland from Kincora on the Shannon. On the morning of 23 April 1014 he sent his army down to the shore north of Dublin and stayed behind it in his tent with a book of psalms. The battle he could hear beginning was partly his own household’s work. Gormflaith, the wife he had put away, had turned her brother Máel Mórda, king of Leinster, against him. Her son Sigtrygg Silkbeard, the Norse king of Dublin, had spent the winter recruiting overseas. Njáls saga records his method. He promised the kingdom of Ireland, and his mother’s hand with it, to Sigurd the Stout, earl of Orkney. Then he promised the same kingdom and the same mother, separately and in secret, to Brodir of Man, a deacon who had thrown off his faith and gone to sea. Brodir’s brother Ospak wanted no war against so good a king. He sailed his ships to Brian instead, took baptism, and stood in the Irish line.\n\nIt began at the morning high tide and ran to the evening one. The Orkney men carried a raven banner Sigurd’s mother had woven for him, with its terms attached: victory for the army it flew over, death for the man who carried it. It performed as specified. Bearer after bearer went down. When no one else would touch the staff, Sigurd said it was fittest that the beggar carry his own bag. He tucked the banner under his cloak and was dead soon after. On the walls of Dublin, Sigtrygg watched the day turn with his wife, Brian’s daughter, beside him. The Irish account preserves her review: the foreigners were taking to the sea, their true inheritance, like cattle off a hot field. Her husband struck her in the mouth.\n\nThe sea did the last of the killing. The returning tide had floated the longships off the strand, and the beaten army drowned reaching for them. The king’s grandson Toirdelbach was 15. They found him drowned at the salmon weir of the Tolka, his hands still knotted in a foreigner’s hair. Brodir had spent the rout in the wood behind the lines. He came out on the one tent nobody was guarding and killed the old man at his prayers with an axe. Njáls saga hunts him down a page later, into the hands of a champion it calls Wolf the Quarrelsome, and gives him the worst death in the book. The king’s body went north to Armagh, and the clergy of Patrick waked it for 12 nights.\n\nClontarf broke the last Viking bid for Ireland without removing a single Norseman from it. Sigtrygg kept Dublin and reigned 22 more years, made a pilgrimage to Rome, and on his return gave the city its first cathedral, Christ Church. The men of the longships stayed on as the traders they had mostly become. What ended on the strand was the idea that the sea road led to an Irish crown.\n\nHugh Frazer painted the day in 1826. The tent stands at the left edge with the old king inside it, one hand raised. Two armies dissolve into weather, and light breaks through the storm cloud onto a bay full of ships. It is an Irish painter’s guess from eight centuries out. He dressed the fighters in armor from the wrong centuries and got the shape of the bay right. The canvas has gone further from home than any man in it ever sailed. It hung for years in a school art museum in Hawaii, then came back to Dublin in 2014 for the thousandth anniversary of the battle.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: '23 April 1014',
  historicalYear: 1014,
  historicalMonthDay: toMonthDay('04-23'),
  artTitle: 'Battle of Clontarf',
  artCredit: 'Hugh Frazer, 1826',
  imageUrl: bucketPainting('scenes/between-two-tides.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/between-two-tides.jpg'),
  details: [
    {
      id: 'the-tent',
      x: 0.11,
      y: 0.72,
      scale: 2.8,
      caption:
        'Under the open tent an old man in gilded armor lifts one hand. A red cloak is spread beneath him. This is Brian Boru at 73, and he is waiting out Good Friday with a book of psalms instead of a sword.',
    },
    {
      id: 'the-duel',
      x: 0.68,
      y: 0.85,
      scale: 2.4,
      caption:
        'Two men have hold of the same spear shaft. One is bare to the waist and the other is in armor under a flying red cloak. Dead men lie on both sides of them, and one of the dead wears plate armor that nobody had in 1014.',
    },
    {
      id: 'the-tide',
      x: 0.58,
      y: 0.5,
      scale: 2.4,
      caption:
        'Ships wait out in Dublin Bay under a break in the storm light. The fight ran from one high tide to the next. The water came back in and carried those ships off the strand, out of reach of the men running for them.',
    },
  ],
} satisfies MockSceneDef;

export const theKingWhoCameBack = {
  slug: 'the-king-who-came-back',
  title: 'The King Who Came Back',
  dek: 'The exiled king comes home over the mountains, and Norway raises an army to meet him',
  story:
    'The king’s army was woken with a poem. Before first light on 29 July 1030, at a farm called Stiklestad in the Verdal valley, the Icelandic poet Thormod stood up and recited Bjarkamál. It is an old poem about a lord’s household guard dying around him. The men called it the whetting of the housecarls, and the saga says the king paid for it with a gold ring off his own arm. Olaf Haraldsson had ruled Norway for 15 years and been out of it for two, his chiefs bought out from under him by the silver of Cnut, king of Denmark and England. Now he had come back over the mountains from Sweden with a scraped-together army and his half-brother Harald, aged 15, in the line beside him. The answer stood across the valley: an army of farmers raised by the local lords, the biggest force Snorri says anyone had ever seen gathered in Norway.\n\nThe two sides named themselves at the top of their lungs. Forward, forward, Christ’s men, cross men, king’s men, was the king’s cry. Forward, forward, farmer men, was the other. The farmers had the numbers. The battle was short. Thorstein the Shipwright, who owed the king a grudge over a trading ship the king had taken from him, put an axe into Olaf’s knee. The king dropped his sword and leaned against a stone. Thorir Hund drove a spear up under his mail, and a man named Kalv cut into his neck. There were two Kalvs within reach, and Snorri admits he cannot say which one struck. Thormod, the poet of the dawn recital, walked out of the fighting with an arrow in his chest. In the healing hut he pulled it out with tongs, looked at the white fat clinging to the barbs, and said the king had fed his men well. Then he died on his feet.\n\nThe famous darkness is a problem of dates. Sigvat, the king’s own poet, missed the battle. He was on pilgrimage to Rome. His memorial verses report what survivors told him: clear weather, and the sun refusing its light while men fell. An eclipse did cross Trøndelag that summer, total over Stiklestad, but on 31 August, 33 days after the church’s date for the battle. Either the battle is misdated or the memory of one darkness slid into the other. The tradition kept both the date and the eclipse and let them disagree.\n\nWhat happened next made the winners irrelevant. A farmer named Thorgils hid the body, ferried it downriver by night, and buried it in a sandbank by the river Nid. Word of healings started moving within the year. A year and five days after the battle, Grimkell, the English bishop who had come north with Olaf’s missionaries, had the coffin opened. Witnesses said the cheeks still had color, and the hair and nails had grown. He declared Olaf holy on the spot. Four years later Kalv Arnesson himself sailed east with Einar Thambarskelfir, the same Einar whose bow had burst at Svolder, and fetched the dead man’s son Magnus, 11 years old, home to be king. Thorir Hund went the other way, south on pilgrimage, and the sagas lose him on the road to Jerusalem. A later king formally dedicated the kingdom of Norway to the man who died at the stone: rex perpetuus Norvegiae, the eternal king.\n\nPeter Nicolai Arbo painted the fall in 1859, at 28, fresh out of the academy at Düsseldorf. He put the king red and gold against the stone. On the right he put a broad pale back: Thorir Hund in the reindeer coat that Snorri says shed sword strokes like dust off a hide. Arbo painted the boy who survived this field 11 years later: Harald, under an English arrow, at a bridge called Stamford.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: '29 July 1030',
  historicalYear: 1030,
  historicalMonthDay: toMonthDay('07-29'),
  artTitle: 'The Fall of Olav the Holy at Stiklestad',
  artCredit: 'Peter Nicolai Arbo, 1859',
  imageUrl: bucketPainting('scenes/the-king-who-came-back.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-king-who-came-back.jpg'),
  details: [
    {
      id: 'the-king-at-the-stone',
      x: 0.36,
      y: 0.35,
      scale: 2.6,
      caption:
        'The king braces on the stone with his head thrown back. He wears a red tunic bordered with gold. The pale shaft across his waist is the spear Thorir Hund drove up under his mail.',
    },
    {
      id: 'the-reindeer-coat',
      x: 0.76,
      y: 0.5,
      scale: 2.4,
      caption:
        'A broad back in a pale hide coat turns away from us, with a knife and a string of beads at the belt. The spear in his hands runs away to the left toward the king. Snorri says Thorir Hund fought at Stiklestad in a reindeer coat the Sami had charmed so that no sword would cut it.',
    },
    {
      id: 'the-broken-shaft',
      x: 0.28,
      y: 0.72,
      scale: 2.2,
      caption:
        'A man in the king’s red lies back in the grass with one hand still on the haft of his axe. Behind him is the grey rock Olaf leaned on. Tradition says it was built into the church later raised on the spot.',
    },
  ],
} satisfies MockSceneDef;

export const sevenFeetOfGround = {
  slug: 'seven-feet-of-ground',
  title: 'Seven Feet of Ground',
  dek: 'England offers the king of Norway seven feet of ground, and keeps the promise',
  story:
    'The Norwegians saw the dust before they saw the army: a cloud on the York road that grew as it came, and under it, glittering, Snorri says, like a field of broken ice, the weapons of men who were supposed to be beaten. It was 25 September 1066 and unseasonably hot, and the army at Stamford Bridge on the Derwent had come to collect hostages, not to fight; the mail shirts had been left with the ships at Riccall, a hard march away. Harald Sigurdsson of Norway had beaten the northern earls at Fulford five days earlier and taken York’s surrender. What came up the road instead of hostages was the king of England, who had marched the length of the country in a week with an army nobody knew was near.\n\nHarald had been at war since he was fifteen: wounded at Stiklestad where his half-brother the saint-king died, then east to Kyiv, then south to Constantinople and the Varangian guard, through campaigns in Sicily and Bulgaria. A Byzantine general’s handbook remembers an Araltes, a king’s son from the north who took a middling court rank for all his service and did not complain. He came home by way of Kyiv with a wife, Elisiv, daughter of Yaroslav the Wise, and with shiploads of Greek gold; he traded half the treasure to his nephew Magnus for half of Norway and inherited the rest of the kingdom within the year. Fifteen years of war with Denmark won him nothing but his name, harðráði, hard counsel. England, by an inherited claim, was to be the last throw. He sailed with 300 ships and Tostig Godwinson, the English king’s own exiled brother.\n\nBefore the battle, twenty riders came out from the English line, and one of them did the talking. Tostig was offered his earldom back. And what, Tostig asked, would his brother give the king of Norway? Seven feet of English ground, the rider said, or as much more as he is taller than other men. Tostig declined to desert his ally, the riders turned away, and Hardrada asked who the man with the fine words had been. The king himself, said Tostig. Harald’s verdict went into the saga: a little man, but he stood proudly in his stirrups.\n\nThe bridge bought the Norwegians time to form a ring. The Anglo-Saxon Chronicle, in a passage a later scribe could not resist adding, says one Norwegian held the planks alone with an axe and put down 40 men, until an Englishman floated under the bridge in a tub and speared him from below through the boards; the chronicle spends its admiration and never the man’s name. Beyond the river the shield ring held until the king could not stand still inside it. Harald went forward ahead of his banner Land-waster, swinging two-handed, wearing no mail, and the arrow took him in the windpipe. He had composed a verse minutes earlier, called it bad poetry, and made a better one; the saga preserves both. Eystein Orre arrived at a run from the ships with the mail coats, and the last fighting is remembered as Orre’s storm; it changed the count of the dead and nothing else. Harold Godwinson let the survivors sail home on a promise of peace. They had come in 300 ships. Twenty-four were enough for what was left.\n\nPeter Nicolai Arbo painted the arrow’s moment in 1870, with the blue tunic Snorri describes and one liberty the sources refuse: his English charge on horseback, though every account has them riding to the field and fighting on foot. Arbo had painted the death of Harald’s half-brother at Stiklestad a decade earlier; with this canvas the brothers matched. Harald’s body crossed to Norway the next year and was buried at Nidaros; the church became a priory, the priory was pulled down, and the best modern guess puts his grave under a paved street in Trondheim. The books like to close the Viking Age at this bridge: Lindisfarne to Stamford, 273 years.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: '25 September 1066',
  historicalYear: 1066,
  historicalMonthDay: toMonthDay('09-25'),
  artTitle: 'Battle of Stamford Bridge',
  artCredit: 'Peter Nicolai Arbo, 1870',
  imageUrl: bucketPainting('scenes/seven-feet-of-ground.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/seven-feet-of-ground.jpg'),
  details: [
    {
      id: 'the-kings-throat',
      x: 0.47,
      y: 0.57,
      scale: 2.7,
      caption:
        'The king’s head snaps back, one hand going to his throat. Snorri says the arrow took Harald in the windpipe as he fought ahead of his banner, two-handed, wearing no mail.',
    },
    {
      id: 'the-english-riders',
      x: 0.1,
      y: 0.58,
      scale: 2.5,
      caption:
        'A rider in white swings down into the Norwegian line. Arbo mounted the English like a cavalry-age painter; the sources have them riding to the field and fighting on foot.',
    },
    {
      id: 'the-shirtsleeves',
      x: 0.9,
      y: 0.55,
      scale: 2.6,
      caption:
        'Mailed horsemen press men fighting in shirt and belt. The day was so hot, Snorri says, that the army left its byrnies with the ships; the mail arrived late, at a run, on the backs of Eystein’s men.',
    },
  ],
} satisfies MockSceneDef;

export const seventyMetresOfWool = {
  slug: 'seventy-metres-of-wool',
  title: 'Seventy Metres of Wool',
  dek: 'The Vikings’ Norman heirs take England, and English needles stitch the record',
  story:
    'William heard mass before dawn on 14 October 1066 and hung the relics around his neck, the same relics Harold had once sworn an oath on. His chaplain, who wrote the campaign up as a lawsuit God decided, records the gesture. The English army stood on foot 7 miles inland from Hastings, along a ridge, with their shields locked. The huscarls stood in front, the king’s paid household soldiers, swinging the long axe their fathers had learned from Cnut’s Danes. These men had beaten the last Viking king 19 days earlier, 250 miles to the north, and marched back at the same killing pace.\n\nThe men riding at the wall were the same story at a different speed. Normandy was the land a Viking named Rollo had taken off a Frankish king in 911, and William was Rollo’s great-great-great-grandson. In five generations the family had traded the longship for the warhorse, and Norse for French. The fleet that crossed the Channel two weeks before the battle was still built the old northern way, with dragon heads at the bow. The embroidery shows the warhorses standing in the open hulls, heads out over the sides. In one autumn England was invaded by the Viking past and the Viking future, and beat only the past.\n\nThe battle lasted about nine hours, which battles of that age almost never did. The Breton wing broke and ran in the morning, and the rumor spread that the duke was dead. William pushed back his helmet and rode the line bare-faced so his own men could see him. His chaplain counts three horses killed under him. What began as a real rout was then faked twice on purpose. The horsemen fled, the shield wall leaked men downhill after them, and the horsemen turned. By dusk the English were a knot around the standards, and somewhere in that dusk the king died.\n\nThe one surviving picture will not settle how. Under the stitched caption HAROLD REX INTERFECTUS EST, King Harold is killed, two figures share the name. One is a man in mail gripping an arrow at his eye. The other is falling, taking a Norman sword across the thigh. The arrow enters the written record within a generation. The earliest poem about the battle gives Harold four killers with blades and no arrow at all. Some scholars read the two figures as one man shown twice, hit and then cut down. The needlework keeps both deaths and takes no position. The body was too badly cut up to identify. By the Waltham monks’ tradition, Edith Swan-neck was brought to walk the field and find him by marks only she knew.\n\nThe picture itself is the strangest survivor of the year. Bayeux calls it a Tapisserie. It is embroidery, wool on linen, 68 metres long and half a metre tall. More than 600 people are stitched into it, and nearly 200 horses. It was made within a decade or so of the battle, almost certainly in England, probably at Canterbury. The likely patron is Odo, the duke’s half-brother and bishop of Bayeux, who appears in it swinging a club. Later ages explained the club as a churchman’s way around the rule against shedding blood. Which means the conquered made it: English needles, sewing the conquerors’ case, beautifully, for a Norman cathedral.\n\nWilliam was crowned in Westminster Abbey on Christmas Day. The shout of approval went up in two languages, the guards outside took the noise for a revolt, and they set fire to the nearest houses. The rite was finished in smoke. Domesday Book, 20 years on, found barely a twentieth of England still in English hands. The embroidery outlived all of it. It turns up in a Bayeux cathedral inventory in 1476. In 1792 it was seized to cover a wagon, and a local lawyer pulled it back off. Napoleon showed it in Paris in 1803, while he was planning a crossing in the other direction. Its final metres are missing. The strip ends mid-flight, with Englishmen running off the torn edge, and no one knows how much longer it once was.',
  eraId: toEraId('viking-age'),
  historicalDateLabel: '14 October 1066',
  historicalYear: 1066,
  historicalMonthDay: toMonthDay('10-14'),
  artTitle: 'Bayeux Tapestry, scene 57',
  artCredit: 'c. 1070',
  imageUrl: bucketPainting('scenes/seventy-metres-of-wool.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/seventy-metres-of-wool.jpg'),
  details: [
    {
      id: 'the-arrow-in-the-eye',
      x: 0.27,
      y: 0.31,
      scale: 2.7,
      caption:
        'A man in mail grips an arrow shaft at his face, and the letters stitched above him spell HAROLD. Whether this figure is the king is the oldest argument about the Bayeux embroidery.',
    },
    {
      id: 'the-riders-sword',
      x: 0.72,
      y: 0.58,
      scale: 2.0,
      caption:
        'A Norman rider brings his sword down on a man in mail who has not let go of his long axe. The oldest poem about the battle has four men cut Harold down and never mentions an arrow.',
    },
    {
      id: 'the-margin-looters',
      x: 0.5,
      y: 0.9,
      scale: 2.6,
      caption:
        'In the border below the fighting, a man drags a mail shirt off a dead soldier. A mail shirt cost more than anything else on the field, and the border is where this embroidery keeps the looting.',
    },
  ],
} satisfies MockSceneDef;

export const theEightLeggedHorse = {
  slug: 'the-eight-legged-horse',
  title: 'The Eight-Legged Horse',
  dek: 'A stone from a Gotland cellar wall carries the myth 400 years before Snorri',
  story:
    "Almost everything the modern world knows about Norse mythology comes from a Christian Icelander named Snorri Sturluson, who wrote it down around 1220, roughly two centuries after Iceland had voted to convert. He was a politician and a poet, and he was preserving the old stories mainly so that poets would still understand the metaphors. That leaves one question Snorri cannot answer: what people actually believed while they still believed it.\n\nGotland is where that question gets a partial answer, because the island is covered in picture stones. More than 400 survive, limestone slabs cut between roughly the fifth century and the eleventh and set up as memorials. The Viking-age ones are shaped like an axe head and covered edge to edge with scenes. The most famous of them turned up in 1844 at Tjängvide farm, in Alskog parish, built into the wall of a cellar. It is contemporary evidence, cut by people who were not being translated by anybody.\n\nThe top panel shows a rider arriving on a horse with eight legs, met by a figure holding out a drinking horn. Read against Snorri, that is Odin's horse Sleipnir and a welcome into Valhalla, and it lines up so neatly that the stone is usually captioned that way. Read on its own terms it is a dead man arriving somewhere and being handed a drink, which may be the same thing said without a footnote. The panel below is almost all ship. The sail is carved as a field of diamonds and is nearly as wide as the hull is long, and a row of men stands under it. A burial, a voyage, or both.\n\nTwo lines of runes are cut on the stone, and both are damaged. Enough of one survives to read that someone raised it in memory of Hjorulf, his brother. The name of the man who raised it is gone. What is left is that eighth leg, cut by someone who had no reason to explain himself, 400 years before anyone wrote the myth down.",
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 800',
  historicalYear: 800,
  historicalMonthDay: null,
  artTitle: 'Gotland',
  artCredit: 'Tjängvide picture stone, 8th–9th century',
  imageUrl: bucketPainting('scenes/the-eight-legged-horse.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-eight-legged-horse.jpg'),
  details: [
    {
      id: 'the-horse',
      x: 0.52,
      y: 0.34,
      scale: 2.0,
      caption:
        'A horse with eight legs, and a small rider up on its back. The woman on the left holds out a drinking horn to meet him.',
    },
    {
      id: 'the-sail',
      x: 0.26,
      y: 0.66,
      scale: 2.6,
      caption:
        'The sail is cut as a field of diamonds and runs to the edge of the panel. At the left the hull ends in a post that curves over and closes in a spiral.',
    },
    {
      id: 'the-crew',
      x: 0.62,
      y: 0.74,
      scale: 2.5,
      caption:
        'Men stand shoulder to shoulder in the hull, packed in under the sail. One small figure crouches on its own at the far end of the row.',
    },
  ],
} satisfies MockSceneDef;

export const theShipTheyBuried = {
  slug: 'the-ship-they-buried',
  title: 'The Ship They Buried',
  dek: 'Two women, a buried ship, and a mound robbed long before it was dug',
  story:
    "In the summer of 1904 a Norwegian farmer at Oseberg, in Vestfold, told the university that the mound on his land had timber in it. Gabriel Gustafson, a Swedish professor in Oslo, came out to look, saw carved oak, and spent the rest of the season lifting the largest Viking ship burial anyone had ever found. The mound had been sealed with blue clay and turf, which kept the wood wet and airless. The ship came out of the ground close to complete: 21.58 metres of oak, a carved prow, 30 oar holes.\n\nThe cargo list reads like a household moved intact into the next world. A four-wheeled cart, the only one to survive from the Viking age. Four sledges, three of them carved to the last centimetre. Beds, chests, looms with weaving still on them, tapestry fragments, a tent, buckets, kitchen gear. Outside the chamber lay 15 horses, killed for the occasion, along with dogs and cattle. Tree-ring dating later fixed the burial in the year 834 and the ship's construction around 820.\n\nAnd two women, laid on a bed in a timber chamber. One was in her seventies or eighties with badly arthritic joints, one about 50. Which of them the grave was for is unresolved, and so is everything else about them. She may have been a queen or a priestess. She was at least a woman whose people were willing to put a ship in the ground for her. What is certain is that somebody came back for them. The mound was broken into within a century or two. The chamber was cut open, the bodies pulled out of place, and everything made of precious metal taken. The ship, the cart, the sledges and the looms were left where they lay. Whatever the intruders wanted, it was not portable value.\n\nGustafson's crew posed for this photograph in the trench, the carved prow standing behind them and shovels in their hands. Restoring the ship from its pieces took 21 years. It is the best-preserved Viking ship anyone has found, and neither of the women in it has ever been named.",
  eraId: toEraId('viking-age'),
  historicalDateLabel: '834',
  historicalYear: 834,
  historicalMonthDay: null,
  artCredit: 'Photograph of the Oseberg ship excavation, 1904',
  imageUrl: bucketPainting('scenes/the-ship-they-buried.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-ship-they-buried.jpg'),
  details: [
    {
      id: 'the-prow',
      x: 0.4,
      y: 0.16,
      scale: 3.0,
      caption:
        'The tall post at the front of the ship stands braced against a plank. The top of it is broken off. The pierced carving on its face came out of the clay still sharp after a thousand years.',
    },
    {
      id: 'the-crew',
      x: 0.21,
      y: 0.68,
      scale: 2.4,
      caption:
        'Two of the diggers hold their spades still for the camera. Both are caked in mud. Putting the ship back together from its pieces took another 21 years.',
    },
    {
      id: 'the-notebook',
      x: 0.35,
      y: 0.37,
      scale: 3.0,
      caption:
        'A man sits on the cut earth with a board on his knee and a pencil in his hand. He is recording the ship as it comes up. The carved post rises behind him.',
    },
  ],
} satisfies MockSceneDef;

export const theStoneThatMadeTheDanes = {
  slug: 'the-stone-that-made-the-danes',
  title: 'The Stone That Made the Danes',
  dek: "A king carves his own press release, and a country keeps the receipt",
  story:
    "Around 965 a Danish king put up a block of granite at Jelling, beside his father's mound, and had it carved on three faces. One side carries the runes. One carries a lion with a serpent coiled around it. The third carries Christ with his arms spread, held up by the same knotwork instead of a cross. It was all painted once. Most of the colour has flaked off, but enough specks survived to work out the original scheme, and the modern copies are painted from it. The inscription is short enough to quote whole. King Harald ordered this monument made in memory of Gorm his father and Thyra his mother; that Harald who won for himself all Denmark and Norway, and made the Danes Christian.\n\nEvery clause is doing work. It names Denmark, which is why the stone gets called the country's birth certificate. Harald's father had already cut the same word into the smaller stone standing beside it. It claims Norway, which was a stretch. And it reports the conversion of a whole country as a thing the king did, in the same breath as a land claim. Harald was reading the map: the Christian empire to the south had been sending missionaries and armies in roughly equal proportion, and a Christian Denmark was harder to invade on religious grounds.\n\nWhether it worked as advertised is another question. The digging at Jelling shows Harald building on a scale nobody in Denmark had tried before. A huge palisade enclosure, two mounds, a setting of stones in the shape of a ship, a wooden church. It reads like a man converting a country by building work. He was eventually deposed by his own son and died about 986.\n\nHis nickname was Blåtand, Bluetooth, and nobody knows why. A dead dark tooth is the usual guess. In 1997 an engineer at Intel needed a codename for a short-range radio standard, one meant to make incompatible devices talk to each other. He had been reading about a Danish king who pulled warring tribes together, and he suggested Bluetooth. It was supposed to be temporary. The logo now on several billion devices is a bind rune, the runes for H and B laid over each other: Harald Blåtand, his initials, still advertising.",
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 965',
  historicalYear: 965,
  historicalMonthDay: null,
  artTitle: 'Denmark',
  artCredit: 'The large Jelling stone, c. 965',
  imageUrl: bucketPainting('scenes/the-stone-that-made-the-danes.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-stone-that-made-the-danes.jpg'),
  details: [
    {
      id: 'the-runes',
      x: 0.5,
      y: 0.6,
      scale: 2.2,
      caption:
        'Bands of runes run across the face of the stone, one line under the next. Together they name Gorm and Thyra, Harald\'s parents, and the country he says he won.',
    },
    {
      id: 'the-beast',
      x: 0.42,
      y: 0.3,
      scale: 2.6,
      caption:
        'Flat carved bands cross over and under each other, the same knotwork that binds the lion and the Christ on the other two faces. Below them the first line of runes begins.',
    },
    {
      id: 'the-granite',
      x: 0.21,
      y: 0.55,
      scale: 2.4,
      caption:
        'The rune bands wrap round the curve of the granite, which was left rough where nobody carved it. Behind the stone stands a red-brick house in the village of Jelling.',
    },
  ],
} satisfies MockSceneDef;

export const theyFedTheEagle = {
  slug: 'they-fed-the-eagle',
  title: 'They Fed the Eagle',
  dek: 'A mother pays for a stone because there is no body to bury',
  story:
    "Sometime around the year 1041, a Swedish woman named Tóla had a granite slab cut with a coiled serpent and a verse. Her son Haraldr had gone east with Ingvar, his brother, and had not come back. The stone stands at Gripsholm in Södermanland. Its inscription ends in four lines of verse, as good as anything the Vikings left in stone. They travelled far for gold, and in the east gave food to the eagle. They died in the south, in Serkland.\n\nEvery phrase in that is precise. Far for gold is what the expedition was for. Giving food to the eagle is a kenning, the standard poetic way to say they killed men in battle, since carrion birds eat what battles leave. Serkland is the Norse name for the Muslim lands south and east of the Caspian, reached from a Swedish farm by river, with the boats carried overland between one river and the next. Died in the south is the part Tóla was paying for. There was no grave, no return, and no body, so the stone had to stand in for all three.\n\nIngvar the Far-Travelled's expedition set out around 1036 down the Russian rivers toward the Caspian. About 26 surviving runestones in Sweden name men who went on it. It is the largest group of memorials to any single event in the country, and every one of them is an obituary. A saga written long afterwards says the force was destroyed by disease in the east. The stones say only that people left and did not come back. Over and over, in different parishes, in different hands.\n\nThe Gripsholm stone spent part of its later life as building material, turning up in the castle cellar in the 1820s where it had been reused as a step. It stands outside now with the carved lines filled in with red paint, which is how anybody can read them from the path. The name of the man it is for appears once. His mother's appears once. The eagle gets a whole line.",
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 1041',
  historicalYear: 1041,
  historicalMonthDay: null,
  artTitle: 'Södermanland',
  artCredit: 'The Gripsholm runestone, 11th century',
  imageUrl: bucketPainting('scenes/they-fed-the-eagle.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/they-fed-the-eagle.jpg'),
  details: [
    {
      id: 'the-verse',
      x: 0.44,
      y: 0.47,
      scale: 2.6,
      caption:
        'The band of runes winds in on itself and ends in a tight curl. That curl is the serpent\'s tail. The runes stop a little short of the centre, where the band gets too narrow to hold them.',
    },
    {
      id: 'the-serpent',
      x: 0.42,
      y: 0.62,
      scale: 2.2,
      caption:
        'The serpent\'s head is drawn flat, from above. The band of runes stops there. The whole inscription is cut along its body.',
    },
    {
      id: 'the-name',
      x: 0.6,
      y: 0.22,
      scale: 2.2,
      caption:
        'The band turns the corner of the slab and runs on down the right edge. The text names three people. Tola paid for the stone, Haraldr was her son, and Ingvarr was his brother.',
    },
  ],
} satisfies MockSceneDef;

export const theHammerAgainstTheCross = {
  slug: 'the-hammer-against-the-cross',
  title: 'The Hammer Against the Cross',
  dek: 'The god of farmers loses an argument he was never in',
  story:
    "Odin got the poetry and Thor got the people. The evidence is in the ground and in the phone book. About 1,000 small hammer pendants have been dug up, from Scandinavia to Russia. Farms and villages carry his name, and so do people: Thorstein, Thorbjorn, Thorgeir, Thora, all still in use. He was the god of weather and of the working day, called on by farmers who needed rain and sailors who needed less of it. His job in the myths is simple. He stands between people and the giants, and he does it with a hammer.\n\nThe conversion of the north, when it came, was rarely a debate. It was kings. Harald Bluetooth announced a Christian Denmark on a rock. Olaf Tryggvason and Olaf Haraldsson pushed it through Norway hard enough that both of them died fighting and both of them ended up in the sagas. Iceland settled it in court. At the Althing, the yearly assembly, in the year 1000 the law-speaker went under a cloak for a day and a night. He came back and ruled that everyone would be Christian, with private sacrifice allowed to carry on for the time being.\n\nWhat the change actually looked like sits in a museum in Copenhagen. It is a soapstone mould from Trendgården in Jutland, cut so a smith could cast a Thor's hammer and a Christian cross side by side, in the same pour. Whoever made it had customers on both sides and no interest in the theology of either. Some amulets from that period can be read either way, depending on which end goes up.\n\nMårten Eskil Winge painted Thor in 1872 for a Sweden busy inventing a national past. He gave him everything at full volume: the hammer up, the lightning, the black goats, the giants falling away underneath. King Charles XV bought it, and it is in the Nationalmuseum in Stockholm. The mould from Trendgården would sit in the palm of a hand, and it does more explaining.",
  eraId: toEraId('viking-age'),
  historicalDateLabel: 'c. 1000',
  historicalYear: 1000,
  historicalMonthDay: null,
  artCredit: "Mårten Eskil Winge, Thor's Fight with the Giants, 1872",
  imageUrl: bucketPainting('scenes/the-hammer-against-the-cross.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-hammer-against-the-cross.jpg'),
  details: [
    {
      id: 'the-hammer',
      x: 0.42,
      y: 0.12,
      scale: 2.4,
      caption:
        'Thor\'s fist at the top of the swing, the hammer Mjölnir in it and lightning breaking behind him. Held up like that, the head and the shaft make a cross.',
    },
    {
      id: 'the-goats',
      x: 0.23,
      y: 0.55,
      scale: 2.2,
      caption:
        'Both of Thor\'s goats, horns back, with the gold of the chariot behind them. In the myths he eats them at night and brings them back in the morning by blessing the skins with his hammer, as long as the bones went back in whole.',
    },
    {
      id: 'the-giant',
      x: 0.78,
      y: 0.6,
      scale: 2.4,
      caption:
        'The giant still has both arms up, one hand open and the other holding a rock he never got to throw. The dark shape below is his hair.',
    },
  ],
} satisfies MockSceneDef;
