import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const theFogAtSekigahara = {
  slug: 'the-fog-at-sekigahara',
  title: 'The Fog at Sekigahara',
  dek: 'One October morning decides two and a half centuries of Japan',
  story:
    'Two years ago the ruler of Japan died in his bed, leaving a five-year-old heir and a council of five regents sworn to protect him. Everyone understood the arrangement was a fuse. The eldest regent, Tokugawa Ieyasu, has spent a lifetime watching bolder men go first: he served beside Nobunaga, who conquered by fire, and Hideyoshi, who conquered by charm, and outlived them both by being neither. Against him stands Ishida Mitsunari, the late ruler’s brilliant, unloved administrator, a man who can move 100,000 soldiers’ rice by paperwork but has never won a battle. Through the autumn their coalitions have marched back and forth across the middle of Japan. Tonight, in cold rain, both armies converge by accident and design on a mountain valley where every road in the country crosses: Sekigahara.\n\nThe fog at dawn is so thick that the two largest armies in Japanese history nearly walk through each other in the dark. Some 160,000 men stand in the valley, and when the mist lifts at eight o’clock, the killing begins. On paper, Mitsunari has the numbers and the high ground. Ieyasu, old and patient, has something better: letters. For months he has been writing to the lords on the other side, and he knows, roughly, what each one’s word is worth. The one man on the western side who knows it too is Ōtani Yoshitsugu, so sick he commands from a covered litter. He has already turned his small division to face not the enemy but the hilltop where his own ally sits.\n\nOn that hill is Kobayakawa Hideaki, 19 years old, with 15,600 men and promises from both sides in his baggage. All morning he watches the valley and chooses nothing. At the battle’s hinge, Ieyasu, gambling the war on a hunch about a teenager, orders his gunners to fire on the hill. The volley makes the argument. Kobayakawa charges downhill into his own allies, straight onto the one man who expected him. Ōtani’s division throws back the first attacks. Then four neighboring lords flip in the space of an hour and it is over. Ōtani opens his belly on the field, and a retainer hides his head so no enemy will ever show it as a trophy. The western line folds from its center outward.\n\nNot everyone runs the right way. The Shimazu clan of the far south, 1,500 men who have stood unmoving all morning, cut their banners and charge forward. They go straight through the Tokugawa army, out the far side of the battle, and ride for home. Some 80 of them live to reach it, and their escape is studied for centuries. Mitsunari is caught in the hills days later and beheaded in Kyoto on a riverbank scaffold. Three years on, the emperor names Ieyasu shogun, the title he pretended not to want, and his family holds Japan through 15 shoguns: borders sealed, wars ended, swords slowly becoming ceremony. The road to 260 years of Tokugawa peace runs straight through the mud of Sekigahara.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '21 October 1600',
  historicalYear: 1600,
  historicalMonthDay: toMonthDay('10-21'),
  artCredit: 'Edo-period screen, Gifu History Museum',
  imageUrl: bucketPainting('scenes/the-fog-at-sekigahara.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-fog-at-sekigahara.jpg'),
  details: [
    {
      id: 'gold-clouds',
      x: 0.807,
      y: 0.73,
      scale: 3.2,
      caption:
        'A gold fan with a red sun on it, raised high on a pole. Ieyasu\'s men carried it so the army could see where he was. Behind it his officers sit on the ground, counting the heads brought in to them.',
    },
    {
      id: 'banners',
      x: 0.44,
      y: 0.375,
      scale: 3.4,
      caption:
        'Every banner here carries the same mark, a cross inside a circle. It belongs to the Shimazu. When the battle was lost they charged forward instead of back, straight through the enemy army. Beside each group of fighters the painter added a small paper tag naming its commander.',
    },
    {
      id: 'the-hill',
      x: 0.605,
      y: 0.205,
      scale: 3.2,
      caption:
        'White cloth screens stand along the top of the hill. This is Ishida Mitsunari\'s camp, and the screens carry his motto: if one man works for all, everyone prospers. His men wait behind a wooden fence on the slope below.',
    },
  ],
} satisfies MockSceneDef;

export const barbariansFromTheSouth = {
  slug: 'barbarians-from-the-south',
  title: 'Barbarians from the South',
  dek: 'A storm delivers two Portuguese and the gun to a 16-year-old lord',
  story:
    "The storm does the introductions. In the autumn of 1543 a battered Chinese junk is blown onto Tanegashima, a slender island south of Kyushu. Among the traders aboard are two or three Portuguese, the first Europeans anyone in Japan has ever seen. They carry sticks that crack like thunder and kill a duck on the wing. The lord of the island, Tanegashima Tokitaka, is 16 years old, and he does what a 16-year-old with a treasury does. He buys both guns on the spot, for a sum his chroniclers report with awe. Then he hands one to his swordsmith with orders to make more.\n\nThe smith could forge the barrel; the breech defeated him. Sealing the rear end of the bore needed a screw, and the screw, that small everyday miracle, did not exist in Japan. The island still tells the story that the smith, Yaita, bought the secret with his daughter Wakasa, who married a Portuguese captain and sailed away so her father could learn how the threads were cut. However the screw actually arrived, within a year Tanegashima was making guns, and the country, at war with itself for a century, was the best arms market on earth. Sakai and Kunitomo turned out matchlocks by the thousand; tanegashima became simply the Japanese word for gun. Three decades after the storm, Oda Nobunaga lined up 3,000 gunners in rotating volleys at Nagashino and shot the most famous cavalry in Japan off its horses. By 1600 there were probably more guns in Japan than in any country in Europe.\n\nThe Portuguese came back on purpose, every year, in the great black carrack from Macao, trading Chinese silk for Japanese silver. They did not come alone. The Jesuits arrived with the trade, and for a while converted whole provinces.\n\nThe engine under all of it was silver. Japanese mountains, above all the great mine at Iwami, were pouring out ore in quantities that put the islands among the largest producers on earth. By some estimates that was a third of the world's supply. China wanted the silver but had banned its own merchants from sailing to Japan. So the Portuguese carrack sat in the middle of the most profitable trade afloat: silk one way, silver the other. The mission rode the same hull in more ways than one. The Jesuits took an agreed share of the silk cargo to pay for their churches. In 1580 a Christian lord signed over to them the little port where the black ship called. It grew into Nagasaki. Faith, guns and exchange rates arrived so entangled that when Japan later cut two of the threads, the third had to go as well. Japan called the newcomers namban, barbarians from the south, since their ships rode up on the southern monsoon, and after two generations of contact its painters made the strangers a subject. The gilded screens of the Kanō workshops record the strangers with a straight face. There is the black ship, its crew doing acrobatics in the rigging, and the captain-major walking under a parasol. Everything Japan found remarkable is drawn exactly: the ballooning trousers, the long noses, the Africans and Indians among the sailors, the little dogs. Kanō Naizen painted this pair of screens around 1600, with clouds of gold leaf standing in for everything the painter chose not to explain.\n\nThe century of contact ended by decree. From 1639 the Portuguese were banned on pain of death, Christianity was driven underground, and the islands closed to all but a trickle of Dutch and Chinese trade. The guns stayed. So did the screens: a record of the afternoon the world arrived, kept by the country that then showed it the door.",
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '1543',
  historicalYear: 1543,
  historicalMonthDay: null,
  artTitle: 'Namban Screens',
  artCredit: 'Kanō Naizen, c. 1600',
  imageUrl: bucketPainting('scenes/barbarians-from-the-south.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/barbarians-from-the-south.jpg'),
  details: [
    {
      id: 'the-black-ship',
      x: 0.15,
      y: 0.33,
      scale: 2.2,
      caption:
        'Sailors are up in the rigging and out along the crossbeams while the hull sits black and low in the water. Japan called it the black ship, and gave the same name back 250 years later to Perry’s steamers.',
    },
    {
      id: 'the-captain',
      x: 0.56,
      y: 0.66,
      scale: 2.6,
      caption:
        'The captain-major walks in red brocade and ballooning trousers. A servant holds a blue parasol over him. Everything around them is flat gold leaf, and where the gold lies Kanō Naizen has drawn nothing at all.',
    },
    {
      id: 'the-jesuits',
      x: 0.73,
      y: 0.74,
      scale: 2.6,
      caption:
        'Jesuits in black robes wait where the procession is heading. A small black-and-white dog trots across the bare gold in front of them. Traders and missionaries came in on the same ships, and one decree later threw them both out.',
    },
  ],
} satisfies MockSceneDef;

export const theEnemyIsAtHonnoJi = {
  slug: 'the-enemy-is-at-honno-ji',
  title: 'The Enemy Is at Honnō-ji',
  dek: "Four words turn an army, and Japan's unifier has an hour left",
  story:
    "Oda Nobunaga is sleeping in a temple with a few dozen attendants, which tells you what he thought of his position. By the summer of 1582 he had broken or bought every serious rival in central Japan. The warrior monks were burned off their mountain. The Takeda cavalry was shot down at Nagashino by his massed guns, and the emperor was politely managed. Half the country was unified by a man who had started as the reckless young fool of a minor province. His armies were away finishing the job, which is why the most powerful man in Japan lay nearly unguarded at Honnō-ji, a temple lodging in Kyoto, on the night of the twenty-first of June.\n\nOne of those armies was 13,000 men under Akechi Mitsuhide, ordered west to reinforce a siege. At the Katsura river outside the capital, Mitsuhide turned the column instead and gave the order that every Japanese schoolchild can finish: the enemy is at Honnō-ji. Nobody knows, to this day, why. A public humiliation avenged, ambition seizing an open door, fear of being discarded, some plot on behalf of court or rivals: four centuries of theories, and the man himself explained nothing. By dawn the temple was surrounded. Nobunaga woke to shouting and took up his bow until the string broke, then fought with a spear until a wound drove him inside. The buildings were burning around him and his young page Mori Ranmaru was holding the door. He ended it himself in the fire. His body was never found. In a politics run on proof, that mattered: no head meant no trophy, and no grave.\n\nThe temple had been full of treasure that mattered as much as heads. Nobunaga ran politics partly through the tea ceremony. He licensed his generals to hold formal tea as a privilege and paid them in famous utensils the way other lords paid in provinces. The evening before the attack he had shown dozens of celebrated pieces to guests from the court, and much of that collection melted with the building. Among the household that night was Yasuke, an African retainer the Jesuits had presented to Nobunaga, who had made him a salaried warrior at his side. Yasuke fought at Honnō-ji, cut his way to the heir's position at Nijō, and was captured. The attackers, unsure what to do with him, sent him back to the missionaries, and history loses him there, alive.\n\nWhat followed was the fastest week in samurai history. Toyotomi Hideyoshi, besieging a castle 125 miles west, made peace overnight, force-marched his army back through summer rain, and destroyed Mitsuhide at Yamazaki 11 days after the temple burned. The would-be shogun fled and was speared in the dark by villagers hunting fugitives. Japan remembers him as the 13-day ruler, and remembers Hideyoshi, the sandal-bearer's son who avenged his lord, as the man who caught the country Nobunaga had built and finished the unification.\n\nNobunaga had a favorite piece from the Noh theater, a dance he performed before his first impossible battle, with its line that human life is 50 years, a dream within a dream. He died at 48. Meiji print sellers staged the temple's last hour again and again for the popular presses, spears through the sliding doors, the lord in white at the edge of the frame. The sheet here was printed in Tokyo in September 1893, 311 years on, and the publisher's block in the corner still gives his shop address in Nihonbashi. The temple was rebuilt on another site. At the old one, a small stone marks the spot where the body of the man who unified half of Japan was never found.",
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '21 June, 1582',
  historicalYear: 1582,
  historicalMonthDay: null,
  artCredit: 'Woodblock triptych, Meiji era',
  imageUrl: bucketPainting('scenes/the-enemy-is-at-honno-ji.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-enemy-is-at-honno-ji.jpg'),
  details: [
    {
      id: 'the-spears',
      x: 0.55,
      y: 0.44,
      scale: 2.4,
      caption:
        'A man grips a red spear shaft in both hands, and the shaft runs the whole width of the sheet. The pink slip above his helmet names him: Yasuda Sakubē, one of the Akechi men. Tradition credits him with the first spear into Nobunaga and with killing the page at the door.',
    },
    {
      id: 'nobunaga',
      x: 0.86,
      y: 0.35,
      scale: 2.6,
      caption:
        'Oda Nobunaga stands in the doorway in white, with his name on the slip beside him. A spear blade is already inside the frame. He fought with a bow until the string broke, then with a spear, then went back in to the fire.',
    },
    {
      id: 'the-smoke',
      x: 0.21,
      y: 0.4,
      scale: 2.4,
      caption:
        'Mori Ranmaru grips a red shaft in both fists while a swordsman closes on him from behind. He was Nobunaga’s page and the last man at that door. The print gives him a wrestler’s arms.',
    },
  ],
} satisfies MockSceneDef;
export const yoshitsuneLeapsAtYashima = {
  slug: 'yoshitsune-leaps-at-yashima',
  title: 'The Drifting Bow',
  dek: 'A commander risks his life for a dropped bow he is ashamed of',
  story:
    'In the second month of 1185, on the shore at Yashima on the Inland Sea, the Taira are dug in with their backs to the water and the boy emperor aboard their ships. Minamoto no Yoshitsune has already surprised them once, firing their beach camp at dawn after riding through a storm most captains said no boat could cross. He is 26, small, and the best field commander of his generation, and he has spent the war doing the thing his enemies rule out. The Taira, unbalanced, pull back onto their boats. The fighting moves into the shallows.\n\nTwo of the war’s most-told minutes happen here. First a Taira boat rows out with a fan fixed to a pole and a young woman standing beside it, a target and a taunt: knock it down if you can. Yoshitsune sends Nasu no Yoichi, barely out of boyhood, who rides his horse into the surf and splits the fan with a single arrow while both armies watch. Then Yoshitsune drops his own bow in the sea. He wades after it under enemy fire, hooking for it with his whip while his men shout at him to let it go, and he will not. Afterward they ask him why a bow was worth his life. Because it was a weak bow, he tells them, a small man’s bow, and if the enemy had fished it out and mocked it, the shame would have outlived him. The episode has its own name, yuminagashi, the drifting bow.\n\nThe painting is Tsukioka Yoshitoshi’s, a three-sheet print from 1865. It stages the fight as pure motion. Warriors fight off boat rails in white water, arrows cross at every angle, and a carved bird’s head with a red mane rears over the whole middle sheet. Its own title cartouche runs two famous days together, calling the scene Yashima and Dan-no-ura at once and promising Yoshitsune’s leap across eight boats, which belongs to the second battle. Near the center a young man in a horned helmet fights with his name written beside him in a cartouche so the buyer knows exactly whose story this is. It is Yoshitsune, drawn seven centuries after the fact by an artist who never doubted he was the hero of it.\n\nHe had reason to doubt what came next. Yoshitsune won the war for his elder half-brother Minamoto no Yoritomo, and Yoritomo, building the first shogunate at Kamakura, could not have a brother the whole country loved. Within months Yoshitsune was a fugitive, moving north in disguise, sheltered and then sold out. In 1189, cornered at the Koromo River with a handful of men, he killed himself while the warrior-monk Benkei held the doorway. The legend has Benkei dying on his feet, so stuck with arrows that his body stood guard after he was dead. Yoshitsune was 30. The commander who leaped into the sea for a bow he was ashamed of became the man Japan would rather have had win the peace.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: 'Spring, 1185',
  historicalYear: 1185,
  historicalMonthDay: null,
  artTitle: 'Yoshitsune Leaps Over Eight Boats at Dannoura Bay during the Battle of Yashima',
  artCredit: 'Tsukioka Yoshitoshi, 1865',
  imageUrl: bucketPainting('scenes/yoshitsune-leaps-at-yashima.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/yoshitsune-leaps-at-yashima.jpg'),
  details: [
    {
      id: 'yoshitsune',
      x: 0.4,
      y: 0.22,
      scale: 3.0,
      caption:
        'Minamoto no Yoshitsune wears red-laced armor under a gold horned crest. His name is printed in the yellow panel at his shoulder. He was 26 here and the best field commander in Japan, and four years later his own brother hunted him to death.',
    },
    {
      id: 'the-crest',
      x: 0.575,
      y: 0.245,
      scale: 2.7,
      caption:
        'A carved bird’s head with a gold beak and a red mane rears over the fighting, and arrows cross its green scaled neck. Yoshitoshi built the whole sheet this way. There is no ground anywhere in it, only hulls and water.',
    },
    {
      id: 'the-boats',
      x: 0.18,
      y: 0.58,
      scale: 2.6,
      caption:
        'Warriors fight from the boat’s edge down into the surf. One of them is going over backwards with his mouth open. Three name slips are printed across the water beside them, because the buyer wanted to know which man was which.',
    },
  ],
} satisfies MockSceneDef;

export const aCapitalBeneathTheWaves = {
  slug: 'a-capital-beneath-the-waves',
  title: 'A Capital Beneath the Waves',
  dek: 'A grandmother carries a six-year-old emperor into the sea',
  story:
    'On the twenty-fifth of April, 1185, two fleets meet in the narrows off the tip of Honshu, where the tide runs like a river through the Kanmon Strait. On one side is the Minamoto, closing out five years of civil war. On the other is the Taira, the clan that ran Japan for a generation, now fighting from crowded boats with the child emperor and the imperial regalia in their keeping. The boy is Antoku, six years old, an emperor since he was two, and his mother and grandmother are aboard with him.\n\nThe morning tide favors the Taira, and for a while they have the better of it, raking the enemy boats with arrows as the current carries both fleets east. Then the water slackens and turns. Accounts written closer to the event blame the turn of the tide, and men changing sides. A Taira commander went over to the Minamoto and pointed out which ship held the emperor. The arrows then shifted to the rowers and helmsmen, the men who kept the boats under control. Once a boat could not steer in that current it was finished. The Taira line came apart from the middle.\n\nWhat happened next is the scene every Japanese schoolchild knows. Antoku’s grandmother, the widow of the Taira lord who had raised the family to the top, took the boy in her arms. He asked her where she was taking him. She told him there was a capital beneath the waves too, and went over the side with him and the sword. The great sword Kusanagi, one of the three treasures that made an emperor legitimate, went into the strait and was never recovered; divers looked, and the court eventually made do with a substitute. The mirror and the jewel were fished back. The emperor was not.\n\nThe painter is Utagawa Sadahide, working in the 1850s, and he does not paint a single duel or a drowning. He paints the whole strait from above, a green-shored channel packed to both banks with ships and the red name-banners of the clans, as if the battle were a map you could walk. In the foreground the command boats ride with striped sails and phoenix-headed prows, decks stacked with tiny armored men. It is a battle rendered as geography, cool and total, the kind of picture you make when the outcome has been settled for 700 years.\n\nThe loose thread is in the mud of the seafloor. The Heike crab, a small crab of the Inland Sea, carries a pattern on its shell that looks like a scowling samurai face. Fishermen there long said the drowned Taira warriors had come back inside them. They throw the human-faced ones back. Whether the throwing-back is what bred the resemblance is an argument biologists still enjoy having.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '25 April 1185',
  historicalYear: 1185,
  historicalMonthDay: toMonthDay('04-25'),
  artCredit: 'Utagawa Sadahide, woodblock triptych, c. 1850s',
  imageUrl: bucketPainting('scenes/a-capital-beneath-the-waves.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-capital-beneath-the-waves.jpg'),
  details: [
    {
      id: 'the-flagship',
      x: 0.57,
      y: 0.9,
      scale: 3.0,
      caption:
        'A command boat lies against the green shore, with a blue-striped sail and a carved phoenix head at the bow. Red banners are up and the deck is packed with armored men. The sword Kusanagi went over the side of a Taira boat in this fight and was never recovered.',
    },
    {
      id: 'the-warships',
      x: 0.69,
      y: 0.86,
      scale: 2.8,
      caption:
        'Two war-boats are crowded with armored men, with red banners and a white disc standard raised over their heads. When the tide turned, the Minamoto shot the rowers and the helmsmen first. A boat that could not steer that current was finished.',
    },
    {
      id: 'the-fleets',
      x: 0.52,
      y: 0.45,
      scale: 2.8,
      caption:
        'The strait is crowded bank to bank with ships and the clans’ red name-banners. Sadahide drew the battle from above like a map, nearly 700 years after the water closed over it.',
    },
  ],
} satisfies MockSceneDef;

export const theDivineWind = {
  slug: 'the-divine-wind',
  title: 'The Divine Wind',
  dek: 'A samurai charges the largest fleet on earth, twice, and the weather saves him',
  story:
    'In 1274 the ships come out of the west toward Hakata Bay, and nothing in Japan has prepared anyone for them. Kublai Khan, having taken China, has sent a fleet from Korea, perhaps 900 ships and 40,000 men, against a country he expects to fold. The Mongols fight in disciplined units behind massed archery. They also throw the tetsuhau, a ceramic ball packed with powder, and it bursts with a noise and a spray of iron no one there has met before. The samurai ride out one at a time, calling their names and lineage to invite a worthy opponent, and are cut down in the open by volleys. Then, with the Japanese barely holding, a storm comes up in the night and wrecks a third of the fleet at anchor. The survivors sail home.\n\nOne of the men in that fight was Takezaki Suenaga, a minor warrior from Higo with a complaint. He had fought hard and received nothing. Reward in this system went to whoever could prove his deeds to the officials, and Suenaga had no proof. So he did something almost no medieval soldier did. He rode the length of Japan to Kamakura to argue his own case in person, and won a horse and an estate out of it. Then he commissioned a set of illustrated scrolls to record exactly what he had done, with captions, so it could never be disputed again. The scrolls survive. They are the reason we can see this war from inside it.\n\nThe painting here is from those scrolls, made around 1293. Suenaga is on his wounded horse, an arrow standing in its side and the blood coming down bright onto the sand, riding into arrows that are still in the air. His name and his age are written on the paper beside him; the whole point of the commission was that he, personally, was here. A calm green pine reaches over the violence, drawn with the same brush that drew the blood.\n\nBetween the invasions, the Japanese did the sensible thing and built a wall. Along the likeliest landing beaches around Hakata they raised a stone barrier, roughly 2 meters high and running for kilometers, and they organized the coast to expect a return. It came in 1281, and this time the fleet was enormous, by the sources several thousand ships and well over 100,000 men, the largest seaborne invasion assembled anywhere before the twentieth century. The wall held the landings up. The defenders raided the anchored ships by night in small boats. And in the middle of August a typhoon came in off the sea and destroyed the fleet again, drowning a huge part of the army in the shallows.\n\nTwice the weather had arrived exactly when the country could not save itself, and the Japanese named it: kamikaze, the divine wind, the gods breathing on the water. It became a national conviction that Japan could not be conquered from the sea. That conviction was still doing work in another war, six and a half centuries later, when young men were told the wind had a name and were asked to become it.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '1274 and 1281',
  historicalYear: 1281,
  historicalMonthDay: null,
  artCredit: 'Mōko Shūrai Ekotoba handscroll, c. 1293',
  imageUrl: bucketPainting('scenes/the-divine-wind.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-divine-wind.jpg'),
  details: [
    {
      id: 'the-rider',
      x: 0.3,
      y: 0.37,
      scale: 2.6,
      caption:
        'Takezaki Suenaga bends low in green-laced armor. The wide side plates of his helmet are flung back, and his own arrows stand in the quiver behind his head. A red-shafted arrow crosses toward his face from the left.',
    },
    {
      id: 'the-blood',
      x: 0.54,
      y: 0.57,
      scale: 3.0,
      caption:
        'An arrow stands in the horse, just behind the rider’s armored skirt. The blood comes down its side in thin red lines and spatters the sand. The Mongols shot in volleys at men who rode out one at a time to announce themselves.',
    },
    {
      id: 'the-pine',
      x: 0.215,
      y: 0.16,
      scale: 2.8,
      caption:
        'The scroll writes his name into the picture beside him: Takezaki Gorō Hyōe-no-jō Suenaga of Higo Province, age 29. Reward went to whoever could prove his deeds to a clerk, and this line is what Suenaga paid for.',
    },
  ],
} satisfies MockSceneDef;

export const theRegentAndTheGoblins = {
  slug: 'the-regent-and-the-goblins',
  title: 'The Regent and the Goblins',
  dek: 'The last man to rule Kamakura is remembered dancing while it ends',
  story:
    'By the 1320s the men who actually ran Japan were not the emperor and not even the shogun, but the Hōjō regents behind the shogun, and the last of them was Hōjō Takatoki. He was made regent in 1316, still a boy, and left the governing to others. What the chronicle remembers him for is dogs and dancing. He is said to have kept packs of fighting dogs, hundreds of them, fed on fish and birds and carried about in litters. He is also said to have lost himself for nights on end in dengaku, the wild temple dance, while the country’s business went unread.\n\nThe painting is Yoshitoshi’s, from an 1883 series on famous warriors, and it takes the strangest story in Takatoki’s file at face value. The Taiheiki says a troupe of dengaku performers came one night to dance for him, and Takatoki, drunk and delighted, rose to join them. He did not see that they were tengu, the beaked mountain goblins, wearing the performers’ robes. They spun him through the steps and chanted a line about a devil star rising over the temple, an omen that his house was finished, and vanished. In the print he is caught mid-lurch in a bright yellow robe, mouth open, warding the black-winged goblins off with a fan while they crowd the air around his bald head.\n\nThe end came in the summer of 1333. Two of the regime’s own commanders had turned: one seized Kyoto for the emperor, and another, Nitta Yoshisada, drove south on Kamakura itself. The story told of Nitta at the shore is that the beach approach was blocked and the tide was against him. So he threw his gold-mounted sword into the sea and prayed to the dragon-gods for a road. The tide is supposed to have gone out far enough to let his army around the headland. However it happened, the defenses broke, and Kamakura burned.\n\nTakatoki set fire to the government buildings and withdrew to Tōshō-ji, his family’s temple. There, on 4 July, he and the men of his clan killed themselves, more than 800 by the count that came down, some records saying nearer 900 with the townspeople who followed them. The regency that had held real power in Japan for over a century ended in one burning temple in one afternoon.\n\nYoshitoshi drew the goblin dance five and a half centuries later, and he drew it as comedy and doom at once, which is about right for a man history could not decide whether to pity. The tengu got the last word they had chanted: the star came up over the temple, and the house came down.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: 'July 1333',
  historicalYear: 1333,
  historicalMonthDay: toMonthDay('07-04'),
  artTitle: 'Courageous Warriors',
  artCredit: 'Tsukioka Yoshitoshi, 1883',
  imageUrl: bucketPainting('scenes/the-regent-and-the-goblins.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-regent-and-the-goblins.jpg'),
  details: [
    {
      id: 'the-regent',
      x: 0.535,
      y: 0.44,
      scale: 3.0,
      caption:
        'A man tips back under a black wing with his head shaved and his mouth open. This is Hōjō Takatoki, who took Buddhist vows in 1326 and shaved his head for them. He gave up the office of regent that year and kept the real power anyway.',
    },
    {
      id: 'the-tengu',
      x: 0.575,
      y: 0.225,
      scale: 2.6,
      caption:
        'The goblin leaning over him is a tengu with a green face, an open red beak and a white mane. Black wing feathers rise behind it and red cords swing from its costume. A chronicle called the Taiheiki says a troupe of dancers came to Takatoki one night and turned out to be goblins.',
    },
    {
      id: 'the-signature',
      x: 0.18,
      y: 0.87,
      scale: 2.8,
      caption:
        'Yoshitoshi signed the corner Taiso Yoshitoshi. The block cutter Muneoka stamped his own red seal beside it. Takatoki’s white-socked foot is still coming off the ground in the last inch of the print.',
    },
  ],
} satisfies MockSceneDef;

export const theEmperorWithTheThunderbolt = {
  slug: 'the-emperor-with-the-thunderbolt',
  title: 'The Emperor with the Thunderbolt',
  dek: 'A ruler who broke the shogunate is painted as a priest holding a weapon',
  story:
    'Emperor Go-Daigo did not want to be a figurehead, which in the Japan of his day made him a dangerous man. Emperors reigned; regents and warriors ruled; that had been the arrangement for centuries. Go-Daigo set out to end it and take the government back to the throne. His first plot against the Kamakura regime was uncovered in 1331. He was seized and shipped to the Oki Islands in the Sea of Japan, about as far from power as the country could put a man.\n\nHe did not stay. In 1333 he got off Oki, rallied the lords already rising against Kamakura, and when the regency fell that summer he came back to the capital and declared himself in direct command of everything. He called it the Kenmu Restoration. It was the real thing he had always wanted, and it lasted barely three years. The warriors who had fought for him expected land and offices and felt cheated; the court he restored moved too slowly and rewarded the wrong people. In 1336 his most powerful general, Ashikaga Takauji, turned on him, took Kyoto, and set up a rival emperor and a new shogunate. Go-Daigo fled south into the mountains at Yoshino and founded a court of his own, and for the next half-century Japan had two emperors at once.\n\nHe died at Yoshino in the autumn of 1339, still the emperor of nothing much, still insisting he was the true one. The Taiheiki gives him a deathbed no ruler forgets. He lay holding a copy of the Lotus Sutra in one hand and a sword in the other. His bones might be buried in these southern hills, he said, but his spirit would face north toward Kyoto until his enemies were destroyed and the throne was whole again.\n\nThe painting was made right then, and it is one of the strangest imperial portraits in Japan. It was supervised by Monkan, the monk who had initiated Go-Daigo into the secret rites of Shingon, and it shows the emperor not in plain court dress but as an esoteric master. He wears a court cap with a second crown set on top of it, headgear no one could actually wear, over a monk’s patchwork robe. He holds the tools of the ritual: a five-pronged golden thunderbolt, the vajra, in one hand and a five-pronged bell in the other. A living emperor is being shown as a Buddhist adept who could bend the unseen world by hand. He had tried to rule outright and lost; here he is, painted as a man who commanded a different kind of power entirely.\n\nHe lost that argument too, in the end. His Southern Court held out for decades and then was folded back into the northern line in 1392. The odd thing is which side later Japan decided was legitimate. Centuries on, the government ruled that Go-Daigo’s southern emperors had been the rightful ones all along. The man painted here with a thunderbolt in his hand won his case by a verdict handed down nearly 600 years after he was dead.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '1339',
  historicalYear: 1339,
  historicalMonthDay: null,
  artCredit: 'Monkan-bō Kōshin, hanging scroll, 1339',
  imageUrl: bucketPainting('scenes/the-emperor-with-the-thunderbolt.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-emperor-with-the-thunderbolt.jpg'),
  details: [
    {
      id: 'the-crown',
      x: 0.55,
      y: 0.17,
      scale: 2.4,
      caption:
        'A black court cap sits on his head, and a second crown is planted on top of it. Gold beads hang off the plate and a red disk rides above. Nobody wore both at once, and Go-Daigo is borrowing the look from old pictures of Prince Shōtoku.',
    },
    {
      id: 'the-hands',
      x: 0.33,
      y: 0.72,
      scale: 2.6,
      caption:
        'A monk’s patchwork robe lies straight over the gold court silk, which is drawn all over with clouds. The robe has green seams and red rosettes. Emperors took Buddhist vows after they stepped down from the throne, and Go-Daigo took the Shingon initiation while he was still on it.',
    },
    {
      id: 'the-vajra',
      x: 0.578,
      y: 0.7,
      scale: 3.4,
      caption:
        'His hand closes on a five-pronged bell. The prongs stand up and the gold body hangs under his fist. This is a tool a Shingon priest carries, and he is holding it in an imperial portrait.',
    },
  ],
} satisfies MockSceneDef;

export const theBridgeToHeaven = {
  slug: 'the-bridge-to-heaven',
  title: 'The Bridge to Heaven',
  dek: 'A painter past 80 climbs a hill to draw a sandbar he loved',
  story:
    'Sometime around 1501 an old monk went up a hill in Tango, on the north coast near the Sea of Japan, to look down at a strip of land he wanted to draw. He was Sesshū Tōyō, and he was over 80. Below him lay Ama-no-Hashidate, a natural sandbar 3.6 kilometers long and thick with old pines, laid across the mouth of a bay so straight it looked built by hand. People called it the bridge of heaven; a later age would rank it one of the three finest views in Japan. Sesshū sketched it from above and carried the sketch home to make this picture.\n\nHe had spent a lifetime getting to the point where he could. He was born in 1420 into a samurai family named Oda and given to a temple as a boy. The story that stuck to him ever after is about a punishment there. Tied to a pillar for some misbehavior and left alone, he is said to have wept, then drawn a mouse on the floor with a toe dipped in his own tears. The mouse was so lifelike that the monk who came to free him flinched from it. He trained in Kyoto at Shōkoku-ji, one of the great Zen temples. Then in 1468 he did what almost no established Japanese painter had done: he sailed to Ming China to study landscape painting at its source. He came back the most admired brush in Japan.\n\nThis is late work, made when he had almost nothing left to prove. It is ink on paper with only the faintest color, the whole scene built from wet grey washes and dry scratches of the brush. The pine bar floats in a pale bay. A town of temple roofs climbs the far shore. A mountain rises into mist with a monastery on its flank, and the temple’s name is written on the bare paper beside it. The picture carries no signature and no seal; it is given to Sesshū on the brush alone. You can date the painting by its buildings, which is a rare pleasure. The two-storey pagoda he drew at Chion-ji was finished in 1501. The halls he drew at the mountain temple burned in 1507. That pins the view to those six years, at the very end of his life.\n\nWhat you are looking at is a real place, surveyed by an old man who went and stood there, not a Chinese ideal of mountains and water. Every roof is somewhere; the sandbar is still there today, still pined, and you can still walk it. The site is famous for a trick: stand at one end, bend over, and look at the bar upside down between your legs. Seen that way it seems to hang in the sky and earn its name. Sesshū skipped the trick. He climbed up and drew it the long, patient way, which is the only way he ever did anything.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: 'c. 1502',
  historicalYear: 1502,
  historicalMonthDay: null,
  artTitle: 'View of Ama-no-Hashidate',
  artCredit: 'Sesshū Tōyō, c. 1502',
  imageUrl: bucketPainting('scenes/the-bridge-to-heaven.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-bridge-to-heaven.jpg'),
  details: [
    {
      id: 'the-sandbar',
      x: 0.6,
      y: 0.665,
      scale: 2.6,
      caption:
        'The sandbar is 3.6 kilometers of pines between two sheets of flat water. Its name is inked onto it in the middle of the picture: Hashidate. Boats no bigger than a brushstroke sit out on the bay.',
    },
    {
      id: 'the-temple-town',
      x: 0.64,
      y: 0.35,
      scale: 2.8,
      caption:
        'Roof stands against roof from the waterline up into the hills. This is Fuchū, the provincial town on the far shore. Sesshū drew the buildings that were really standing there and wrote their names beside them, so every roof here can be named.',
    },
    {
      id: 'the-far-mountain',
      x: 0.8,
      y: 0.13,
      scale: 3.0,
      caption:
        'Temple halls are strung along the mountain, and a path zigzags down through the mist. The name is written on the bare paper beside them: Nariai-ji. Those halls burned in 1507, so the view was drawn before that year.',
    },
  ],
} satisfies MockSceneDef;
export const theStormThatHidAnArmy = {
  slug: 'the-storm-that-hid-an-army',
  title: 'The Storm That Hid an Army',
  dek: 'A summer downpour hides 3,000 men closing on an army of 25,000',
  story:
    'Imagawa Yoshimoto has blackened teeth and painted eyebrows in the old court style, and in the summer of 1560 he is marching on the capital with an army that later chroniclers put near 25,000. He is one of the great lords of the eastern seaboard. In his path sits the small province of Owari and its reckless young ruler, Oda Nobunaga, who is 26. He can field perhaps 3,000 men, one for every ten of the enemy. The border forts fall one after another. At first light Nobunaga rises and dances a passage from Atsumori, one of the kōwaka dance-chants, with its line that the life of a man is 50 years. He puts on his armor standing, then rides out with a handful of guards while the rest scramble to catch up.\n\nYoshimoto has stopped to rest in a wooded gorge called Dengaku-hazama, pleased with the morning’s captured forts, and the accounts say heads were being inspected and sake poured. Then the weather breaks. A violent thunderstorm rolls off the hills, rain so hard the accounts have the pines bending double, and under its cover Nobunaga brings his whole small force down onto the resting camp unseen. The Shinchō-kōki, the biography written by a man who served Nobunaga, says the storm passed and the Oda charged out of it into a camp that thought itself safe. Yoshimoto, hearing the noise, assumed a drunken brawl among his own men.\n\nBy the time he understood, the enemy was inside the curtains. He fought. One story has him cutting through the shaft of the first spearman’s weapon before two Oda men, Mōri Shinsuke and Hattori Koheita, took him down and one of them took his head. The huge army, its commander dead and its camp overrun in minutes, simply came apart. A campaign meant to end a small province ended the largest reputation in eastern Japan. Nobunaga walked out of an afternoon he should not have survived. From there the road led, step by step, toward the near-unification of the country.\n\nThe painting is a woodblock triptych by Utagawa Toyonobu, printed in the 1880s, three centuries after the fact, and it keeps the one thing that mattered: the rain. Slate-gray lines slash across the whole width of the sheet, samurai collide in lacquered armor of red and gold and blue, and small paper cartouches name the fighters the way a program names actors. It is a Meiji audience’s Okehazama, staged and gorgeous. What it gets exactly right is that the weather won half the battle.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '12 June 1560',
  historicalYear: 1560,
  historicalMonthDay: toMonthDay('06-12'),
  artCredit: 'Utagawa Toyonobu, woodblock triptych, 1880s',
  imageUrl: bucketPainting('scenes/the-storm-that-hid-an-army.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-storm-that-hid-an-army.jpg'),
  details: [
    {
      id: 'the-rain',
      x: 0.15,
      y: 0.45,
      scale: 2.0,
      caption:
        'Imagawa Yoshimoto lies face up with his mouth open, in the violet robe he wore over his armor. Mōri Shinsuke is on top of him. The name slip at the left of the frame is Mōri’s, and the rain has not let up.',
    },
    {
      id: 'the-clash',
      x: 0.575,
      y: 0.55,
      scale: 2.6,
      caption:
        'Hattori Koheita strides through the downpour in blue lacing and a yellow robe spotted with red, and the horsehair crest of his helmet is blown back. He put the first spear into Yoshimoto and took a sword cut on the knee for it. Mōri Shinsuke took the head.',
    },
    {
      id: 'the-playbill',
      x: 0.445,
      y: 0.18,
      scale: 2.8,
      caption:
        'A block of printed text hangs in the rain over the battlefield. It is red at the top and blue at the foot. Meiji war prints carried a written account inside the picture, so a buyer could follow who was doing what.',
    },
  ],
} satisfies MockSceneDef;

export const theRiderAndTheWarFan = {
  slug: 'the-rider-and-the-war-fan',
  title: 'The Rider and the War Fan',
  dek: 'Two lords fight the same ground five times; once, one rides into the other’s tent',
  story:
    'Takeda Shingen and Uesugi Kenshin spent 12 years fighting over one flat triangle of rice land in Shinano, where two rivers meet. It is called the plain of Kawanakajima. The fourth of their five battles there, in the autumn of 1561, is the one that turned into legend. Shingen’s strategist Yamamoto Kansuke proposed what was later called the woodpecker plan. A detachment would climb by night to the mountain camp where Kenshin sat and knock him loose. The rest of the army would catch him in the open when he came down, the way a woodpecker taps a trunk to drive out the grub. Kenshin, reading the campfires and the movement, guessed it. In the river fog before dawn he brought his whole army silently down off the mountain. It formed up directly in front of Shingen’s headquarters, which had expected to be the anvil and found itself the target.\n\nWhen the fog lifted the two main armies were face to face at arm’s length, and the fighting was among the worst either clan ever knew. Out of this comes the single image every Japanese schoolchild carries. A mounted rider in a white cowl bursts into the Takeda command enclosure, sword raised, and cuts down at Shingen where he sits. Shingen has no time to draw, and takes the blows on his iron war fan. The rider is Kenshin. Whether it truly happened no one can prove, but the Takeda records admit their commander was wounded and their lines nearly broken. Yamamoto Kansuke, watching his clever plan collapse in the mist, rode into the thick of the enemy and did not come back.\n\nBoth sides claimed the victory and both were gutted. The Takeda lost Shingen’s younger brother Nobushige; the ground was so thick with dead that the battle’s place-names still mark it. Neither man ever destroyed the other. Shingen died of illness on campaign in 1573, Kenshin of a stroke in 1578. The rivalry became Japan’s model for two great enemies who respect each other. There is even a story, probably invented, that a third lord once cut off Kenshin’s salt supply and Shingen sent salt to his enemy rather than win that way.\n\nThe print is by Utagawa Kuniyoshi, made around 1847, and it does not isolate the duel; it takes in the whole roaring field. Warriors in laced armor fight on foot with mounted men at their backs. Banks of smoke and cloud wall off one struggle from the next. The dead lie strewn along the front of the sheet among their dropped swords and helmets. Kuniyoshi built his fame on exactly this, crowds of armored men in violent motion, and here he lets the smoke do the cutting between one act of the battle and the next.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '18 October 1561',
  historicalYear: 1561,
  historicalMonthDay: toMonthDay('10-18'),
  artCredit: 'Utagawa Kuniyoshi, woodblock triptych, c. 1847',
  imageUrl: bucketPainting('scenes/the-rider-and-the-war-fan.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-rider-and-the-war-fan.jpg'),
  details: [
    {
      id: 'the-commander',
      x: 0.6,
      y: 0.74,
      scale: 3.0,
      caption:
        'A warrior in green-laced armor and a white headband shouts with both hands on a weapon planted in the ground among the bodies. Behind him a rider comes up on a pink horse. The story goes that Uesugi Kenshin cut into Takeda Shingen’s camp here, and Shingen caught the sword blows on an iron war fan.',
    },
    {
      id: 'the-red-banner',
      x: 0.8,
      y: 0.28,
      scale: 2.4,
      caption:
        'Samurai push forward with their lances under a red and white standard hung with streamers, and arrows cross at head height. The red panel in the corner gives the title: the death in battle of Yamamoto Kansuke. He was Shingen’s strategist, and his plan for the morning had just come apart.',
    },
    {
      id: 'the-fallen',
      x: 0.296,
      y: 0.82,
      scale: 3.4,
      caption:
        'Dead men lie along the bottom of the sheet among dropped swords and helmets, and a bank of cloud closes off whatever is behind them. Kuniyoshi signed the red gourd-shaped panel above the bodies. The pair of censor stamps beside it dates the printing between 1847 and 1852.',
    },
  ],
} satisfies MockSceneDef;

export const theCapitalInGold = {
  slug: 'the-capital-in-gold',
  title: 'The Capital in Gold',
  dek: 'A young painter shows Kyoto thriving while the real city smoulders',
  story:
    'Someone in the 1560s hands a screen painter the whole of Kyoto to fit onto folding panels, and the painter, most likely Kanō Eitoku, is barely into his twenties. What he produces is a bird’s eye view of the capital from above the rooftops: streets and bridges and mansions and the imperial palace, temples with their pagodas. The Gion festival floats are being hauled through the crowds, and the shops have their goods laid out. Around 2,500 human figures are scattered across the pair of screens, each a few centimeters tall, each doing something. Bands of gold cloud lie across the city like fog, hiding the parts the painter chooses to skip and letting him jump from one district to the next.\n\nThe strange thing is what the picture leaves out. The Kyoto of these years was not thriving. The Ōnin War had burned much of it to the ground a lifetime earlier, in the 1470s, and the wars that followed kept it poor and dangerous. Whole streets stood empty, the shogun’s authority was a fiction, and armies passed through as they pleased. Eitoku paints none of that. He gives the warlords and the court the capital they wanted to believe in, orderly and rich and busy, a city worth ruling. This is a screen doing a job, and the job is partly flattery.\n\nEitoku belonged to the Kanō workshop, a family business that painted for whoever held power, and he became its greatest name. He would go on to cover the walls of Nobunaga’s tower at Azuchi and Hideyoshi’s palaces in gold and giant trees and hawks. That work was tied so closely to those two men that when their castles burned almost all of it burned with them. Very little survives. That is why a screen like this one is treasured: it is one of the few places you can still stand in front of Eitoku’s actual hand.\n\nThis particular pair has a paper trail. Oda Nobunaga owned it, and in 1574 he sent it north as a gift to Uesugi Kenshin, the same Kenshin who a decade earlier had ridden into Takeda Shingen’s camp at Kawanakajima. It has stayed with the Uesugi family ever since. The image here is the left screen of the two. The gold is not sky but a curtain. Everywhere it lies, Eitoku has left out whatever the city was really doing underneath.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: 'c. 1565',
  historicalYear: 1565,
  historicalMonthDay: null,
  artTitle: 'Scenes In and Around Kyoto (Uesugi screen)',
  artCredit: 'Kanō Eitoku, c. 1565',
  imageUrl: bucketPainting('scenes/the-capital-in-gold.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-capital-in-gold.jpg'),
  details: [
    {
      id: 'the-rooftops',
      x: 0.38,
      y: 0.78,
      scale: 3.0,
      caption:
        'Brown shingled halls stand inside a wall, with a bright red gallery at the lower corner. Small figures cross the yards between them. Gold cloud is banked against the compound on every side, so it sits in the capital like an island.',
    },
    {
      id: 'the-gold-leaf',
      x: 0.5,
      y: 0.24,
      scale: 2.4,
      caption:
        'The clouds are not sky. They are beaten gold leaf, laid onto the paper. Where the gold lies, the painter has stopped drawing the city and jumped ahead to the next neighborhood.',
    },
    {
      id: 'the-traffic',
      x: 0.5,
      y: 0.62,
      scale: 3.0,
      caption:
        'Rows of stones hold down the plank roofs of the shops and houses along this street. People walk between them and horses are led through. Kyoto in these years was a war zone, and Eitoku paints it calm and prosperous.',
    },
  ],
} satisfies MockSceneDef;

export const theVolleyAtNagashino = {
  slug: 'the-volley-at-nagashino',
  title: 'The Volley at Nagashino',
  dek: 'A wooden fence and ranks of matchlocks end the most feared cavalry in Japan',
  story:
    'By the summer of 1575 the Takeda are still riding on the reputation of Shingen’s horsemen. But Shingen is two years dead, and his son Katsuyori is besieging a small Tokugawa castle at Nagashino, in a valley boxed by two rivers. Inside, a garrison of some 500 is nearly finished. One man, Torii Sune’emon, slips out through the besiegers by night, swims the river, runs to bring word that relief is coming, and is caught on the way back. The Takeda offer him his life if he shouts to the castle that no help will come. He agrees, is led to the walls, and shouts the opposite: hold on, the army is almost here. They crucify him for it. The garrison holds.\n\nThe relief was Oda Nobunaga and Tokugawa Ieyasu with a combined force near 38,000 against Katsuyori’s 15,000. Nobunaga did not line up and charge. On the plain of Shitaragahara he built a long fence of wooden stakes, staggered so men could pass through but horses could not. Behind it he set thousands of gunners with matchlock arquebuses, the guns that had reached Japan on a Portuguese ship a generation before. The traditional account, disputed by historians ever since, says 3,000 guns firing in rotating ranks so the volleys never stopped. At dawn the Takeda cavalry charged the fence across open ground in the rain, and were shot down wave after wave against the timber.\n\nBy the end of the day the Takeda had lost thousands, including a long roll of Shingen’s famous captains, the veteran generals who had made the clan feared for a generation. Katsuyori escaped with a fraction of his army. The Takeda were not finished that afternoon, but the spine was broken; seven years later Nobunaga hunted the clan down and Katsuyori died with his family in the hills. Nagashino became the battle people point to when they argue about when the gun changed war in Japan.\n\nThe image is not a print but a folding screen, painted in the Edo period as a kind of map of the battle, and it rewards slow looking. The fence runs in a broken zigzag across the panels, with the Oda and Tokugawa banners ranked behind it. The river cuts through the middle. Horsemen and foot soldiers stream toward it from the right. It is calmer than any woodblock triptych, laid out like a general’s diagram rather than a stage. The one idea that won the day is plain in it: keep the horses on the far side of the wood, and shoot.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '28 June 1575',
  historicalYear: 1575,
  historicalMonthDay: toMonthDay('06-28'),
  artCredit: 'Edo-period folding screen, Battle of Nagashino',
  imageUrl: bucketPainting('scenes/the-volley-at-nagashino.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-volley-at-nagashino.jpg'),
  details: [
    {
      id: 'the-palisade',
      x: 0.35,
      y: 0.52,
      scale: 2.4,
      caption:
        'A low fence of wooden stakes runs across the ground with soldiers and banners in ranks behind it. A round black standard stands among them. Nobunaga set the fence in staggered sections so his own men could pass through but the Takeda horses could not.',
    },
    {
      id: 'the-river',
      x: 0.53,
      y: 0.58,
      scale: 2.4,
      caption:
        'The stream curves through the open ground. Horsemen drive across it with spears leveled and foot soldiers run beside them. Small columns of ink label the screen like a diagram and name each commander beside his own unit.',
    },
    {
      id: 'the-charge',
      x: 0.86,
      y: 0.47,
      scale: 2.8,
      caption:
        'Nagashino castle stands across the water with gun ports cut in its white walls and a bridge onto the near bank. Torii Sune’emon swam out of it by night. He was brought back to these walls and killed for shouting that the relief army was coming.',
    },
  ],
} satisfies MockSceneDef;

export const theTeaMastersLastCup = {
  slug: 'the-tea-masters-last-cup',
  title: 'The Tea Master’s Last Cup',
  dek: 'The man who taught a warlord to drink tea is ordered to open his belly',
  story:
    'On the 28th day of the second month of 1591, in Kyoto, the most famous tea master in Japan is ordered by the ruler of Japan to kill himself, and he does. Sen no Rikyū is about 70. For years he has decided what counts as beautiful at the court of Toyotomi Hideyoshi, the peasant’s son who now rules the country. Rikyū’s judgment on a tea bowl or a hanging scroll could make or unmake its worth. He built the aesthetic the Japanese call wabi: the beauty of the plain, the worn, the deliberately imperfect. He shrank the tea room to two mats and cut the entrance down to a low square, low enough that a guest had to crawl through it. Lord and commoner both bowed to come in. He preferred a rough, lopsided Raku bowl to anything gold.\n\nWhy Hideyoshi turned on him is still argued. The reason given was a wooden statue. Rikyū had paid to repair the great gate of the Daitoku-ji temple, and the monks set a carved image of him in the upper story. Anyone passing beneath, the ruler included, walked under Rikyū’s feet. Other accounts say he refused to hand his daughter to Hideyoshi, or that he sold tea utensils at a profit. Others say only that the tea master had grown too powerful and too willing to say no to his ruler. The likeliest truth is that a man who ruled taste had become a man who could not be ruled.\n\nRikyū was allowed the death of a samurai rather than an execution. The story goes that he held one final tea gathering for his closest guests. He served them and gave each a piece from the room as a keepsake. Then, alone, he wrote a death verse and cut himself open. He had spent his life making a ceremony out of a bowl of green tea and a few minutes of attention, and he made one out of his end.\n\nThe portrait is by Hasegawa Tōhaku, one of the great painters of the day and a friend, with an inscription added by a Daitoku-ji abbot. Rikyū sits in a black robe and black cap, a folded fan across his knee, his hands still, his face lined and closed. There is no setting, no gold, nothing to look at but the man, which is the whole point of the way he lived. The tea schools his descendants founded are still teaching his ceremony 400 years later, from the same two mats and the same small door.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '21 April 1591',
  historicalYear: 1591,
  historicalMonthDay: toMonthDay('04-21'),
  artTitle: 'Portrait of Sen no Rikyū',
  artCredit: 'Hasegawa Tōhaku, c. 1595',
  imageUrl: bucketPainting('scenes/the-tea-masters-last-cup.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-tea-masters-last-cup.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.5,
      y: 0.22,
      scale: 2.6,
      caption:
        'The face under the stiff black cap is lined and closed. The mouth is set. The writing on this scroll is dated 1595, 4 years after Hideyoshi ordered Rikyū to open his belly.',
    },
    {
      id: 'the-fan',
      x: 0.5,
      y: 0.74,
      scale: 2.8,
      caption:
        'His hands rest in his lap with one closed on a folded fan. A teal cord is knotted at his waist. He fixed how a bowl is set down and how the water is poured, and the schools his descendants founded still teach it that way.',
    },
    {
      id: 'the-black-robe',
      x: 0.22,
      y: 0.61,
      scale: 3.0,
      caption:
        'The mat he sits on is bound with brocade, a row of dark medallions. That is the only pattern anywhere in the picture. Above it the silk is left bare, and below it there is plain matting and the fall of his robe.',
    },
  ],
} satisfies MockSceneDef;

export const theArmyThatCrossedTheSea = {
  slug: 'the-army-that-crossed-the-sea',
  title: 'The Army That Crossed the Sea',
  dek: 'Having taken Japan, Hideyoshi ships an army at Korea and aims past it at China',
  story:
    'In the spring of 1592 Toyotomi Hideyoshi, master of a Japan he has just finished uniting, gathers an army of roughly 160,000 men and points it across the water at Korea. The plan is to march through Korea and conquer Ming China beyond it. He builds a new fortress town at Nagoya, on the northwest tip of Kyushu, as the staging camp, and from there the divisions cross to the mainland. On the 13th day of the fourth month the first of them, under Konishi Yukinaga, land at Busan. They are among the most experienced soldiers on earth, hardened by a century of civil war and armed with the matchlocks that had won Nagashino. They move north at frightening speed, taking Seoul in under three weeks and Pyongyang by summer.\n\nThen the sea turned on them. The Korean admiral Yi Sun-sin commanded a fleet that included the armored geobukseon, the so-called turtle ships. He began sinking the Japanese supply convoys one squadron at a time, and off Hansan Island he destroyed a fleet in a single day. An army that had raced up the peninsula found the sea road behind it cut. Ming China sent troops down from the north, Korean guerrillas rose in the countryside, and the swift conquest congealed into a grinding war of sieges and hunger and winter that neither side could win.\n\nA second invasion in 1597 went no better, and the whole enterprise ended not in victory or defeat but in a death. Hideyoshi died in 1598, at Fushimi, and his council ordered the armies home. Nothing had been gained, Korea was wrecked, and Japan had spent six years and tens of thousands of lives on it. Hideyoshi ran the invasion of the continent from his camp at Nagoya and never set foot on the mainland.\n\nThe print is by Tsukioka Yoshitoshi, made in the nineteenth century, and it shows the army leaving. Hideyoshi’s castle rises at the right behind a long stone wall lined with watching officers, banners and lances fill the courtyards, and ranks of soldiers file out along the water below the wall. Yoshitoshi has to disguise his subject a little, since printing the real Hideyoshi was restricted in his day, so the name on the sheet is Mashiba Hisayoshi, 2 characters off from Hashiba Hideyoshi. What he does not disguise is the scale of it: rank on rank on rank, a whole country’s army walking out past the stonework toward the boats.',
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: 'Spring, 1592',
  historicalYear: 1592,
  historicalMonthDay: null,
  artCredit: 'Tsukioka Yoshitoshi, woodblock triptych, 19th century',
  imageUrl: bucketPainting('scenes/the-army-that-crossed-the-sea.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-army-that-crossed-the-sea.jpg'),
  details: [
    {
      id: 'the-file',
      x: 0.5,
      y: 0.42,
      scale: 2.6,
      caption:
        'Soldiers in red and green file along the wall with their lances up. A red sun-disc banner and a striped standard are raised over their heads. About 160,000 men crossed to Korea in the first months of the invasion.',
    },
    {
      id: 'the-castle',
      x: 0.8,
      y: 0.35,
      scale: 2.4,
      caption:
        'Officers sit shoulder to shoulder along a red-railed balcony under a great curved roof. Below them the wall is built from stones cut into hexagons. Hideyoshi built the fortress town of Nagoya on Kyushu to run this war, and he never crossed the sea to see it.',
    },
    {
      id: 'the-standard',
      x: 0.13,
      y: 0.42,
      scale: 2.6,
      caption:
        'Clan banners stand in a row against the pines, one blue with white diamonds and one striped red and white. Orange-tasseled standards rise between them, and a dark blue cloth screen is strung across below. The ranks wait in front of it with their spears up.',
    },
  ],
} satisfies MockSceneDef;

export const theManWhoInvoicedTheShogun = {
  slug: 'the-man-who-invoiced-the-shogun',
  title: 'The Man Who Invoiced the Shogun',
  dek: 'A samurai commissions a scroll to prove he fought first',
  story:
    "Takezaki Suenaga was a minor samurai from Higo province with about five followers, no powerful patron, and a problem. He had fought the Mongols in 1274 and again in 1281, and in the system he lived under that was supposed to mean land. Kamakura rewarded service with estates confiscated from the losers, and the difficulty with repelling a foreign invasion is that there are no confiscated estates afterward: the enemy simply drowns and goes home. Thousands of men who had fought got nothing, and the resentment worked on the shogunate's foundations until it collapsed half a century later.\n\nSuenaga did not accept that outcome. He rode to Kamakura at his own expense, waited, argued his way in front of the official responsible for rewards, and made his case in person, presenting the wounds and the witnesses. He got a horse and an estate. Then, around 1293, he commissioned a set of illustrated scrolls recording what he had done. It is the single most important visual record of the invasions, because it was made as evidence rather than as art.\n\nThe scene here is Hakata bay in 1274. Suenaga is on the right, in armour of small laced plates, on a rearing horse that is going down under him. Blood is on the animal and on the sand. A column of characters in the air beside him gives his name and his age, 29. In front of him a line of Mongol foot soldiers shoots back with composite bows. The object that made the scrolls famous hangs above their line: a round black bomb bursting in the air with red streaks. It is one of the earliest depictions anywhere of an exploding shell, and for a long time historians assumed the painter had invented it. In 2001 a Japanese team diving off Takashima brought up 2 intact ceramic casings from the wreck of the invasion fleet. X-rays found gunpowder in both, and in one of them more than 12 square scraps of iron.\n\nThe scrolls carry inscriptions in what is probably Suenaga's own hand, naming the men who were with him and where they stood. The whole production is an old soldier's expense claim, filed in ink, and it is the reason we know what a thirteenth-century battle in Japan actually looked like from inside it.",
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '1274',
  historicalYear: 1274,
  historicalMonthDay: null,
  artTitle: 'Illustrated Account of the Mongol Invasion',
  artCredit: 'Mōko Shūrai Ekotoba, c. 1293',
  imageUrl: bucketPainting('scenes/the-man-who-invoiced-the-shogun.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-man-who-invoiced-the-shogun.jpg'),
  details: [
    {
      id: 'the-bomb',
      x: 0.655,
      y: 0.3,
      scale: 2.6,
      caption:
        'Four written characters stand in a column beside the burst. They spell the name of the weapon: te-tsu-ha-u. It is a ceramic shell of gunpowder and iron scrap, and the painter drew it coming apart in red.',
    },
    {
      id: 'the-patron',
      x: 0.8,
      y: 0.33,
      scale: 2.6,
      caption:
        'Two columns of characters stand beside him. They give his name and his age: Takezaki Suenaga of Higo province, 29. He paid for the scroll so that label would exist.',
    },
    {
      id: 'the-archers',
      x: 0.15,
      y: 0.5,
      scale: 2.2,
      caption:
        'The archer in red has drawn his bow all the way back with the arrow on the string. Above him, Japanese arrows stand in the wicker screens the invaders carry on poles.',
    },
  ],
} satisfies MockSceneDef;

export const theLandscapeThrownNotDrawn = {
  slug: 'the-landscape-thrown-not-drawn',
  title: 'The Landscape Thrown, Not Drawn',
  dek: 'A monk goes to China to learn painting and comes back with less',
  story:
    "Sesshū Tōyō entered a Zen monastery as a boy and spent his life a monk. In fifteenth-century Japan that was the ordinary route into painting, since the temples held the Chinese pictures and the ink and the training. In 1467 he did what almost no Japanese painter of the period could. He got aboard a trade mission and went to Ming China, and spent nearly three years there looking at the originals everyone at home was copying from memory. What he reported back was disappointing in the most useful way. The great Chinese masters he had come to study were dead, the living painters were not better than the ones in Kyoto, and the real teacher, he said, was the landscape itself.\n\nHe returned in 1469 to a country on fire. The Ōnin War had broken out while he was away, a fight over the succession between two branches of the Ashikaga establishment. It turned Kyoto into a battlefield for 10 years and burned most of the capital to the ground. It also broke central authority so completely that the following century of warlord fighting takes its name from it. Sesshū stayed away from the capital, worked under provincial patrons in the west, and outlived the war by two decades.\n\nThis is the mode called haboku, splashed ink, and he made it in 1495, at 75, for a departing student. It is the opposite of a demonstration of skill. A wash of grey suggests a cliff. A few dark strokes are a village roof and a tree. Two dry lines near the bottom are a boat and its fisherman. The top two thirds of the paper is empty, and the emptiness is doing most of the work. Above the ink the paper carries nothing at all, no inscription and no seal.\n\nThe scroll is in Cleveland now, 72 centimetres of painted paper in a mounting more than twice that long. Sesshū signed it at the lower left in dry black, hard against the edge, and stopped.",
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '1495',
  historicalYear: 1495,
  historicalMonthDay: null,
  artTitle: 'Splashed Ink Landscape',
  artCredit: 'Sesshū Tōyō, 1495',
  imageUrl: bucketPainting('scenes/the-landscape-thrown-not-drawn.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-landscape-thrown-not-drawn.jpg'),
  details: [
    {
      id: 'the-village',
      x: 0.66,
      y: 0.79,
      scale: 3.0,
      caption:
        'Two roof lines sit beside a clump of trees. One vertical stroke stands above them. That is the entire village.',
    },
    {
      id: 'the-boat',
      x: 0.5,
      y: 0.895,
      scale: 3.0,
      caption:
        'The hull is one long stroke, and the line going up to the right is the boatman\'s pole. He is the hooked mark where the two cross. Below them the paper is empty.',
    },
    {
      id: 'the-signature',
      x: 0.12,
      y: 0.8,
      scale: 2.8,
      caption:
        'The painter\'s name sits hard against the left edge, where the paper runs out. It is 3 characters in dry black, and the only writing anywhere on the sheet.',
    },
  ],
} satisfies MockSceneDef;

export const fifteenStones = {
  slug: 'fifteen-stones',
  title: 'Fifteen Stones',
  dek: 'A garden with no plants, no water, and no spot that shows all 15 stones',
  story:
    "Somewhere around 1500, in a temple in northwest Kyoto, somebody laid out a rectangle of raked gravel about the size of a tennis court. In it they set 15 stones, in 5 groups, on cushions of moss. Then they stopped. There are no trees inside the wall, no flowers, no pond and no path. You are not meant to walk in it. The veranda of the abbot's hall runs along one long side, and the garden is designed to be looked at from a sitting position, like a scroll that happens to be made of rock.\n\nThe famous property is a piece of arithmetic. From any point along the veranda, exactly one of the 15 stones is hidden behind another, so a viewer can only ever count 14. Move, and a different stone disappears. In the lunar calendar 15 is the number of nights to a full moon, and the traditional number for completeness. So the garden is understood to be holding back that wholeness on purpose, and to do it from every seat on the veranda. Nobody wrote down whether the designer intended that or whether centuries of visitors found it afterward. Almost nothing about the garden was written down. The designer is unknown, the date is a range, and two names are scratched on the back of one stone. They belong to men of low social class who may have been the labourers, or may have been the artists.\n\nThe rest of what is said about it is interpretation and always has been. The stones have been called islands in an ocean, a tiger carrying cubs across a river, and mountaintops above cloud. Zen temples of the period were also deeply political places, tied to the Ashikaga rulers in a city that had recently burned in the Ōnin War. The walls of Ryōan-ji went up while the country was falling apart. The garden's oil-clay wall, stained in ochre streaks by the seepage of centuries, is now admired as a deliberate effect. It is mostly age.\n\nThe gravel is raked by monks, in ridges that follow the shape of the stones, and the pattern is remade whenever it rains hard enough to spoil it, which in Kyoto is often.",
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: 'c. 1500',
  historicalYear: 1500,
  historicalMonthDay: null,
  artTitle: 'Kyoto',
  artCredit: 'The dry garden of Ryōan-ji, c. 1500',
  imageUrl: bucketPainting('scenes/fifteen-stones.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/fifteen-stones.jpg'),
  details: [
    {
      id: 'the-groups',
      x: 0.25,
      y: 0.55,
      scale: 2.2,
      caption:
        'An upright stone stands here with 2 more bedded in the moss around it. These 3 make up one of the 5 groups in the garden. From any seat on the veranda one stone is always behind another, so the count stops at 14.',
    },
    {
      id: 'the-raking',
      x: 0.72,
      y: 0.72,
      scale: 2.4,
      caption:
        'The raked lines curve in rings around the moss island. Past its edge they straighten and run parallel. The whole surface is redone by hand after hard rain.',
    },
    {
      id: 'the-wall',
      x: 0.378,
      y: 0.44,
      scale: 3.4,
      caption:
        'The wall is clay boiled in oil, and it carries its own tiled roof. The ochre wash across it is the oil bleeding back out of the clay.',
    },
  ],
} satisfies MockSceneDef;

export const theDuelInTheRiverFog = {
  slug: 'the-duel-in-the-river-fog',
  title: 'The Duel in the River Fog',
  dek: 'Two warlords fight five times over one plain and settle nothing',
  story:
    "Takeda Shingen held the mountain province of Kai and wanted the rice land north of it. Uesugi Kenshin held Echigo on the Japan Sea and had promised protection to the lords Shingen was pushing out. Between 1553 and 1564 the two of them brought armies to the same flat ground at Kawanakajima, where the Sai and Chikuma rivers meet, five separate times. Four of those meetings were manoeuvre, posturing and small skirmishes. The fourth, in September 1561, was the one that killed people.\n\nShingen's staff had a plan called the woodpecker: send half the army by night around Kenshin's position on Saijoyama to drive him downhill into the other half waiting on the plain. Kenshin worked out what was coming and took his whole force off the mountain in silence during the night. At dawn, in heavy river fog, the Takeda main body found the Uesugi army already formed up in front of it at close range. The detachment that was supposed to be driving them down was still empty-handed on the hillside behind. The fighting that followed cost both sides enormously. Shingen's younger brother was killed; so was his chief strategist, the one-eyed Yamamoto Kansuke, who is said to have walked into the enemy after realizing the plan had failed.\n\nThe scene everyone paints comes from the chronicles and cannot be checked. In it, Kenshin rides into the Takeda command post alone and strikes down at Shingen, who is sitting on his camp stool and parries the sword with his iron war fan. It is exactly the kind of episode that gets added to a story later, and it has been painted, printed and filmed so many times that it now stands in for the whole war.\n\nThe wars settled nothing between them. Shingen died in 1573 with the northern plain still contested; Kenshin, told of it, is reported to have wept and said he had lost his best rival. Both men were dead within five years of each other. Neither province held its ground against the man from Owari, Oda Nobunaga, who had spent those years doing something other than fighting the same battle five times.",
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: '10 September 1561',
  historicalYear: 1561,
  historicalMonthDay: toMonthDay('09-10'),
  artTitle: 'The Great Battle at Kawanakajima',
  artCredit: 'Utagawa school, 19th century',
  imageUrl: bucketPainting('scenes/the-duel-in-the-river-fog.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-duel-in-the-river-fog.jpg'),
  details: [
    {
      id: 'the-banners',
      x: 0.15,
      y: 0.15,
      scale: 2.2,
      caption:
        'The tall red label beside the horsetail standard names Takeda Shingen. The yellow one to its left names Yamamoto Kansuke. He was blamed for the plan, and it had already failed by dawn.',
    },
    {
      id: 'the-melee',
      x: 0.6,
      y: 0.55,
      scale: 2.2,
      caption:
        'A rider comes in at the gallop with his lance level. Every man near him carries a yellow name label. One reads Baba Mino-no-kami, who lived through this battle and died 14 years later covering a retreat at Nagashino.',
    },
    {
      id: 'the-arrows',
      x: 0.45,
      y: 0.85,
      scale: 2.4,
      caption:
        'The arrows are still in the air, not on the ground. They fly level with the horses’ legs, and their white feathers show against the green. The pale line down the middle is where the print’s 2 sheets meet.',
    },
  ],
} satisfies MockSceneDef;

export const goldForTheWarlords = {
  slug: 'gold-for-the-warlords',
  title: 'Gold for the Warlords',
  dek: 'A painter learns to work at the speed of castle building',
  story:
    "Kanō Eitoku inherited a family workshop and a market that was about to explode. Oda Nobunaga and then Toyotomi Hideyoshi were unifying Japan by force in the second half of the sixteenth century, and they built castles as an instrument of policy. A castle needed interiors: sliding doors and folding screens covering hundreds of square metres. The work had to be produced fast, readable from across a hall, and expensive-looking to visitors who were being impressed on purpose. Eitoku's answer was the style called the great manner. Enormous forms pushed right up against the picture plane, cropped by the edges, laid over backgrounds of solid gold leaf.\n\nThe gold was not only display, though it was certainly that. Castle rooms were dim, lit by paper windows and lamps, and a gold ground throws whatever light there is back into the room, so the paintings functioned as lighting. It also compressed depth into flat plates of colour, which is why these screens still look modern.\n\nHe painted the interiors of Nobunaga's Azuchi castle, the most spectacular building in Japan, and Hideyoshi's Osaka castle and Jurakudai palace. Almost none of it survives. Azuchi burned in 1582, days after Nobunaga was killed at Honnō-ji, and the rest went in the wars and fires that followed. What is left of the greatest decorative painter of the age is a handful of screens and a documented reputation. He is recorded working himself into the ground on deadline, and he died in 1590 at 47, in the middle of a commission.\n\nThis eight-panel screen of a cypress is attributed to him and is a national treasure in Tokyo. The tree does not fit. Its trunk fills three panels and the branches leave the frame at both ends, so the viewer is standing far too close to something far too large, which was the effect the whole century wanted.",
  eraId: toEraId('feudal-japan'),
  historicalDateLabel: 'c. 1590',
  historicalYear: 1590,
  historicalMonthDay: null,
  artTitle: 'Cypress Trees',
  artCredit: 'Attributed to Kanō Eitoku, c. 1590',
  imageUrl: bucketPainting('scenes/gold-for-the-warlords.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/gold-for-the-warlords.jpg'),
  details: [
    {
      id: 'the-trunk',
      x: 0.6,
      y: 0.5,
      scale: 2.2,
      caption:
        'A panel join runs straight down through the bark. This paper hung as sliding doors in the Hachijō no Miya mansion first. The marks left by the door handles gave it away.',
    },
    {
      id: 'the-gold',
      x: 0.3,
      y: 0.2,
      scale: 2.2,
      caption:
        'The gold background is beaten leaf. It went on square by square, and the joins still show as a faint grid. In a castle room lit by lamps the gold threw the light back, so the painting was also the lighting.',
    },
    {
      id: 'the-water',
      x: 0.12,
      y: 0.72,
      scale: 2.2,
      caption:
        'The water is one flat plate of dark blue. The rock ridges are another plate, in olive. Neither is shaded to sit behind the other, and a gold cloud closes off the top of the water with a scalloped edge.',
    },
  ],
} satisfies MockSceneDef;
