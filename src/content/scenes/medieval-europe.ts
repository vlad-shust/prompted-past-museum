import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const theLastTuesdayOfRome = {
  slug: 'the-last-tuesday-of-rome',
  title: 'The Last Tuesday of Rome',
  dek: 'After 11 centuries, the walls of Theodosius meet gunpowder',
  story:
    'The walls have never failed. For a thousand years, everything that hated Constantinople broke against these three rings of stone: Huns, Avars, Arabs, Bulgars. The city behind them is 1,123 years old this month, counting from the day Constantine the Great dedicated it. It is mostly memory now: perhaps 50,000 people living in villages scattered inside ramparts built for a million, growing vegetables between the palaces. What remains intact is the name. This is still, in law and in its own mind, the Roman Empire. The tired man commanding its defense is Constantine, eleventh of that name, the last of a line of emperors that runs back to Augustus.\n\nThe army outside has something new. A Hungarian engineer named Orban came to the Byzantines first and offered to build them the largest gun on earth; they could not pay him. The sultan could. The barrel that resulted is 27 feet long and fires a stone ball half a ton in weight. It took 60 oxen to drag it from the foundry at Edirne. It can be loaded and cooled only seven times a day, and seven times a day for seven weeks it has been chewing the land walls. Mehmed, 21 years old and two years on the throne, has an engineer’s patience and no hurry. When the great chain across the Golden Horn kept his fleet out of the harbor, he had 70 ships hauled overland on greased timbers, over a 200-foot ridge, in a single night. The defenders woke to find an enemy navy floating inside their moat.\n\nOn the evening of the twenty-eighth of May, everyone in the city who can walk crowds into the Hagia Sophia. Greeks and Latins have refused to share a liturgy for 400 years; tonight, with the guns finally silent outside, they sing it together. A few hours later the assault comes in waves out of the dark: first the irregulars, spent like water, then the Anatolian regiments, then the Janissaries. The defense holds until its hinge snaps. Giustiniani, the Genoese captain who has commanded the land walls all siege, takes a wound and is carried to his ship, and the men who watched him go stop believing. Someone finds the Kerkoporta, a small sally gate, left unbarred. By dawn the banners on the inner wall are Ottoman. The emperor throws off his purple and dies fighting in the press, unrecognized; no body is ever certainly found.\n\nIn the afternoon Mehmed rides slowly to the Hagia Sophia, dismounts at the door, and pours a handful of earth over his own head before entering. Walking the ruined Great Palace that week, witnesses say, he recited a Persian couplet: the spider keeps watch in the halls of the Caesars. He was claiming Rome, not erasing it; he would sign himself Kayser-i Rum, Caesar of Rome, for the rest of his life. Among Greeks, Tuesday is an unlucky day still, five and a half centuries on. And of the young sultan at the church door, earth falling through his fingers onto his turban: grief, or triumph, no one can say.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '29 May 1453',
  historicalYear: 1453,
  historicalMonthDay: toMonthDay('05-29'),
  artTitle: 'The Entry of Mehmet II into Constantinople',
  artCredit: 'Benjamin-Constant, 1876',
  imageUrl: bucketPainting('scenes/the-last-tuesday-of-rome.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-last-tuesday-of-rome.jpg'),
  details: [
    {
      id: 'mehmed',
      x: 0.38,
      y: 0.37,
      scale: 3.0,
      caption:
        'Mehmed was 21. Benjamin-Constant paints him in a jewelled turban and silver mail. He is under a red standard, and its staff ends in a crescent.',
    },
    {
      id: 'the-steps',
      x: 0.42,
      y: 0.8,
      scale: 2.4,
      caption:
        'A steel gauntlet is still buckled to the hand, and a body in a blue robe lies next to it. The dying was done at the land walls, not at the church door. Benjamin-Constant heaped it under the horse, and took a medal for the canvas in 1876.',
    },
    {
      id: 'white-horse',
      x: 0.45,
      y: 0.57,
      scale: 2.6,
      caption:
        'The grey horse comes down between two faces. A woman\'s is on the left and a man\'s is under the raised hoof. At its shoulder a courtier in a gold-crusted robe keeps pace, and he looks at neither.',
    },
  ],
} satisfies MockSceneDef;

export const theWallsOfJerusalem = {
  slug: 'the-walls-of-jerusalem',
  title: 'The Walls of Jerusalem',
  dek: 'After a three-year walk, the crusade reaches the city and breaks it',
  story:
    "The tower touches the wall a little after noon. It is a wooden siege tower built from ships. Genoese sailors ran their vessels ashore at Jaffa weeks earlier and carried them here as timber, masts and all. There is no wood worth the name within miles of Jerusalem. On the fifteenth of July, 1099, a drawbridge slaps down from its top storey onto the northern rampart, and the first knights cross. Behind them stands what is left of the great pilgrimage: perhaps 12,000 fighting men, the residue of the hundred thousand or more who took the cross. Pope Urban had preached the expedition four years before with a phrase that became a war cry, God wills it.\n\nThe walk itself had eaten the rest. They had set out three years earlier from the river valleys of the Rhine and the Rhône, in Germany and in France. Outside Antioch the hunger got bad enough that the chronicles record men eating thistles and worse. Then fever, arrows, desertion, and a thousand miles of other people's country. The ones who reached Jerusalem in June found the wells poisoned and the siege impossible. They did what armies of that faith did: they fasted, and walked barefoot in procession around the city walls, as Joshua's army had circled Jericho. The Muslim defenders watched from the parapets. Five weeks later the towers came. On the fifteenth the wall fell, and the city was taken.\n\nThe expedition had shed more than numbers on the way. A people's crusade of the poor was preached ahead of schedule, and it left before the armies of the princes. It marched down the Rhine and opened the enterprise by massacring the Jewish communities of Speyer, Worms and Mainz, over their bishops' objections. Then it crossed into Asia and was wiped out in a month. The main armies' road was longer: two years to cross Anatolia and break Antioch, where the besiegers starved outside the walls and then, trapped in their turn, starved inside them. By the winter after Antioch, at the siege of Maarat, chroniclers on the crusade's own side recorded that the famished ate the dead. Men who had seen and done all of that arrived at last before the city they had been promised absolution for reaching.\n\nWhat followed poisoned the memory of three faiths. The army that had marched three years to free the holy city spent a day and a night killing it. They killed the garrison, the men, women and children of the Muslim quarters, and the Jews who had gathered in their chief synagogue, which was burned. Chroniclers on the winning side did not hide it. They rejoiced in it. One wrote that men rode in blood up to their bridles, a line lifted straight from the Book of Revelation, atrocity dressed as prophecy fulfilled. Even allowing for a victor's arithmetic, the killing was vast, and it was remembered. Some prisoners were kept alive for the work of carrying the dead out of the streets.\n\nA week later the princes offered Godfrey of Bouillon the crown of the new kingdom, and he refused the word. He would not wear a crown of gold, he said, in the city where his savior had worn a crown of thorns. He took the title Advocate of the Holy Sepulchre instead. He was dead within a year. Pope Urban, who had set the whole avalanche moving, died in Rome on the twenty-ninth of July, two weeks after the city fell, before any ship could bring him the news. Signol painted the scene in 1847 for the crusade halls at Versailles, a king's museum of national glory. He gave it the white horse, the raised sword, the golden Dome of the Rock through the smoke. And because the century still had some honesty in it, he laid the dead plainly across the bottom of the picture.",
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '15 July 1099',
  historicalYear: 1099,
  historicalMonthDay: toMonthDay('07-15'),
  artTitle: 'The Capture of Jerusalem by the Crusaders',
  artCredit: 'Émile Signol, 1847',
  imageUrl: bucketPainting('scenes/the-walls-of-jerusalem.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-walls-of-jerusalem.jpg'),
  details: [
    {
      id: 'the-dome',
      x: 0.31,
      y: 0.26,
      scale: 2.4,
      caption:
        'The gold dome and its crescent belong to the Dome of the Rock, a Muslim shrine standing where the Jewish temples once stood. The crusaders kept the building. They set a cross on the dome and said Mass inside it as the Temple of the Lord.',
    },
    {
      id: 'godfrey',
      x: 0.52,
      y: 0.4,
      scale: 2.6,
      caption:
        'Godfrey of Bouillon on the white horse, sword up, a red cross on his gilded coat. Offered the crown of Jerusalem days later, he would not wear gold where his savior had worn thorns.',
    },
    {
      id: 'the-cost',
      x: 0.42,
      y: 0.84,
      scale: 2.4,
      caption:
        'A dead man in mail lies under the white horse\'s forefeet, and a friar with a rosary stands among the bodies. Signol laid the killing across the bottom of a picture Louis-Philippe commissioned to glorify the crusade.',
    },
  ],
} satisfies MockSceneDef;

export const theTriumphOfDeath = {
  slug: 'the-triumph-of-death',
  title: 'The Triumph of Death',
  dek: 'The plague empties Europe at the speed of a cart',
  story:
    "It moved no faster than anything else moved: the pace of a loaded cart, a coasting ship, a mule train in the hills. In October 1347 a dozen Genoese galleys limped into Messina with dying men at the oars, and within five years the sickness they carried had been everywhere from Sicily to Norway. The Black Death killed by thirds and by halves. Serious estimates for Europe run from one death in three to one in two, tens of millions of people, and the records that survive read less like history than like testimony. In Siena the chronicler Agnolo di Tura wrote that he buried his five children with his own hands. In Florence, Boccaccio watched the dead stacked in trench graves layer upon layer, he wrote, the way a ship is loaded with cargo.\n\nWhere it began, the story goes, was a siege. At Kaffa on the Black Sea, a Genoese trading post was surrounded by a Mongol army already dying of the sickness. The besiegers heaved their dead over the walls with catapults. A notary who told the tale, and may have improved it, has the Genoese fleeing home with the infection in their holds. However it truly boarded, it sailed the trade routes exactly, harbor by harbor, following the money. What it actually was, nobody living then would ever learn; the bacterium was not identified until 1894. In the meantime the ports improvised. Ragusa began holding inbound ships at anchor for 30 days, then 40; quaranta is Italian for 40, and the word quarantine is the plague's most durable gift to the world.\n\nNobody knew what it was. The learned blamed the air, and the planets. Towns blamed strangers, and in the Rhineland the terror turned on the Jews, who were massacred in city after city on the invented charge of poisoning wells. Strasbourg burned its Jewish quarter in a single February day in 1349. Processions of flagellants whipped themselves from town to town, carrying the sickness with them as efficiently as the rats did. And then, having emptied the world, it receded, and the strangest part began: for the survivors, almost everything got better. Labor was suddenly scarce and land was suddenly cheap. Wages doubled; lords legislated frantically to freeze them at the old rates, and failed; serfdom in the West never fully recovered its grip. Siena, which had been enlarging its cathedral into the largest in Christendom, simply stopped. The unfinished nave still stands there, a wall of the world before.\n\nPieter Bruegel painted The Triumph of Death two centuries later, in 1562, for a Europe where the plague still returned generation after generation. He painted it as the folk memory had processed it: not a sickness but a campaign. His death is an army with logistics. Skeletons cart skulls like a harvest, toll the bell, drive the living herd into a great box-trap marked with a cross, and advance in ranks behind coffin lids carried like a phalanx's shields. On the left a skeleton holds an hourglass over a dying king in ermine while a second, in a soldier’s plate armour, rakes the gold out of his barrels. The landscape behind them has already been processed: bare, smoking, hung with wheels and gallows, the sea full of burning ships.\n\nIn the bottom corner of the panel, which has hung in the Prado since 1827, Bruegel put the one joke the picture allows, if it is a joke. Two lovers sit with a lute, singing, not yet looking up. Behind them a skeleton has joined in on a fiddle, keeping their time, waiting for the song to end.",
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '1348',
  historicalYear: 1348,
  historicalMonthDay: null,
  artCredit: 'Pieter Bruegel the Elder, 1562',
  imageUrl: bucketPainting('scenes/the-triumph-of-death.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-triumph-of-death.jpg'),
  details: [
    {
      id: 'the-king',
      x: 0.125,
      y: 0.855,
      scale: 3.2,
      caption:
        'A skeleton holds an hourglass over the king\'s face. A second one in plate armor rakes his gold out of a tipped-over barrel. The silver is already spilled in the dirt.',
    },
    {
      id: 'the-trap',
      x: 0.8,
      y: 0.55,
      scale: 3.0,
      caption:
        'A wooden box the size of a barn takes the crowd in. Its lid is propped open and painted with a red cross. Skeletons hold up coffin lids on either side to funnel them.',
    },
    {
      id: 'the-lovers',
      x: 0.88,
      y: 0.88,
      scale: 3.2,
      caption:
        'At the table a man in pink has drawn his sword, and the cards and coins still lie where they fell. To the right the lute player and the singer have not looked up, and the skeleton behind them is keeping their time on a fiddle.',
    },
  ],
} satisfies MockSceneDef;
export const threeDaysInTheSnow = {
  slug: 'three-days-in-the-snow',
  title: 'Three Days in the Snow',
  dek: 'A king waits barefoot at the gate of a mountain fortress for a pope to forgive him',
  story:
    'The gate stays shut. It is the last week of January 1077, the coldest month anyone can remember. Henry, king of the Germans and heir to the western empire, is standing outside the wall of a castle in the Apennines called Canossa. He is barefoot. He is wearing a rough wool shift, the dress of a penitent, and he has been at the gate for three days asking to be let in. Inside is Pope Gregory the Seventh, who has taken the castle of his ally Matilda of Tuscany for shelter. He is in no hurry to open the door to the man who has come to beg.\n\nThe quarrel was about who owned the church. For a century, German kings had appointed their own bishops, handing each new man the ring and the staff of his office as if the office were theirs to give. Gregory said it was not. He said the choosing of bishops belonged to Rome alone. When Henry kept naming his own, the pope did the thing no pope had done to an emperor before. On the twenty-second of February 1076 he excommunicated him, and released every subject in the kingdom from their oath of loyalty. It worked. Henry’s dukes, who had their own reasons, told him to his face that if he was not absolved within the year they would elect another king. The year was almost up. That is why he had crossed the Alps in winter, with his wife and infant son and a handful of servants, to find the one man who could lift the sentence.\n\nGregory told the story himself, in a letter to the German princes written from Canossa on the twenty-eighth of January, still a little astonished at what he had seen. Henry had come, he wrote, and stood at the gate barefoot and in wool, weeping, for three days, until everyone around the pope was in tears and pressing him to relent. On the fourth day Gregory opened the gate and gave him the kiss of peace and said Mass with him. He had won the point of principle absolutely. Nobody humbled a king; this one had stood barefoot in the snow for a priest, and every ruler in Europe heard about it.\n\nAnd it changed almost nothing. Within three years the two men were at war again. Henry marched on Rome, drove Gregory out, and set up a pope of his own. Gregory died in exile at Salerno in 1085, saying he had loved justice and hated iniquity and therefore died far from home. The phrase that outlived them both belongs to a later German, Bismarck, who told his parliament in 1872 that he would not go to Canossa, and everyone in the room knew exactly what he meant. Eduard Schwoiser painted the standoff in 1862 for the Maximilianeum in Munich, a hall hung with history pictures. He read it the way most Germans did by then: not a repentant king but a cornered one. Henry glares sidelong from under his hair, Gregory stands small and warm above him on the parapet with a hand raised, and a guard in mail fills the gateway between them.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: 'January, 1077',
  historicalYear: 1077,
  historicalMonthDay: null,
  artTitle: 'The Road to Canossa',
  artCredit: 'Eduard Schwoiser, 1862',
  imageUrl: bucketPainting('scenes/three-days-in-the-snow.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/three-days-in-the-snow.jpg'),
  details: [
    {
      id: 'the-glare',
      x: 0.265,
      y: 0.485,
      scale: 3.4,
      caption:
        'Schwoiser gives Henry a sidelong glare, not the bowed head of a man asking forgiveness. He painted this in 1862, when Germans saw Canossa as a king cornered rather than a king converted.',
    },
    {
      id: 'the-penitents-wool',
      x: 0.27,
      y: 0.635,
      scale: 2.8,
      caption:
        'Henry wears a coarse wool shift with one arm folded inside it. A penitent wore cloth like that to show he was sorry. He crossed the Alps in January with his wife and infant son to stand at a gate dressed this way.',
    },
    {
      id: 'the-gate-guards',
      x: 0.755,
      y: 0.6,
      scale: 2.3,
      caption:
        'A man in the gateway points back out at Henry while a guard in mail stands across the arch. Gregory kept the door shut for three days before he opened it.',
    },
  ],
} satisfies MockSceneDef;

export const theLionheartAtAcre = {
  slug: 'the-lionheart-at-acre',
  title: 'The Lionheart at Acre',
  dek: 'Two kings take a city in a month, then the killing that follows outlasts them both',
  story:
    'Nobody had taken Acre in two years of trying. The city sits on a spur of the Levantine coast with the sea on two sides, the best harbor in the kingdom the crusaders had lost. Since 1189 a Christian army had been camped in front of its walls, itself ringed by Saladin’s army camped behind them. Everyone was besieging and besieged at once. Men died there of fever and hunger by the thousand across those two years, in numbers no assault ever matched. Then, in the spring of 1191, the kings arrived. Philip Augustus of France came first, then Richard of England, the one they already called the Lionheart, who had seized Cyprus on the way out. With their siege engines and their rested troops the thing was decided in about a month. On the twelfth of July the garrison surrendered.\n\nThe terms were precise and written down. The defenders would go free in exchange for the True Cross, the relic Saladin had captured four years earlier at Hattin, along with a ransom in gold and the release of 1,600 Christian prisoners. Saladin, negotiating from outside for a garrison he no longer commanded, agreed to pay in installments. The first deadline came. The money and the Cross did not, or not all of it, and each side later blamed the other for the delay. Richard grew certain he was being played.\n\nWhat he did next his own admirers recorded without flinching. On the twentieth of August he had the prisoners, some 2,700 of them, marched out onto the plain in full view of Saladin’s lines and killed. The men were roped together, and the killing was done with swords where the watching army could count it. Saladin, who could not reach them in time, is said to have executed his own Christian captives in answer. Then Richard turned south toward Jaffa and Jerusalem. The two of them fought the rest of the war as near equals and never met face to face, though later legend could not resist inventing the meeting.\n\nLegend got the painting too. Philippe de Loutherbourg painted this around 1807, near the end of his life. He was an old scene-painter for the London theaters who knew how to build a sky, and he gave the Third Crusade the duel it never had. Richard rears up on a chestnut charger, sword flung overhead, cutting down a turbaned rider who topples backward off a white horse, a broken castle floating in the smoke behind. No such single combat is in the chronicles. It is the crusade as the nineteenth century wanted it, one bright king against one dark enemy, with the fever camp and the roped prisoners left out of the frame. In 1789 Loutherbourg and his wife were healing the sick by the laying on of hands at their house on Hammersmith Terrace, and a pamphlet that year counted 2,000 cures.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: 'July, 1191',
  historicalYear: 1191,
  historicalMonthDay: toMonthDay('07-12'),
  artTitle: 'Richard Cœur de Lion à la bataille de Saint-Jean-d’Acre',
  artCredit: 'Philippe de Loutherbourg, c. 1807',
  imageUrl: bucketPainting('scenes/the-lionheart-at-acre.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-lionheart-at-acre.jpg'),
  details: [
    {
      id: 'the-raised-sword',
      x: 0.41,
      y: 0.38,
      scale: 2.6,
      caption:
        'Richard holds his sword straight up, and a pale plume streams off his helmet. Under him the chestnut horse wears a gold cloth. Loutherbourg invented this duel, and no chronicle of the siege records it.',
    },
    {
      id: 'the-white-horse',
      x: 0.55,
      y: 0.58,
      scale: 2.6,
      caption:
        'The turbaned rider goes over backward off the white horse with his sabre still in his hand. Loutherbourg painted scenery for the London theatres, and he staged this fall the same way.',
    },
    {
      id: 'the-castle-in-smoke',
      x: 0.28,
      y: 0.12,
      scale: 2.6,
      caption:
        'Castle towers stand out of the smoke, and the tip of Richard\'s sword comes up into the corner of the frame. Acre had held for almost two years, and fell a month after Richard landed.',
    },
  ],
} satisfies MockSceneDef;

export const theHorsesOfSanMarco = {
  slug: 'the-horses-of-san-marco',
  title: 'The Horses of San Marco',
  dek: 'A crusade aimed at Egypt sacks the greatest Christian city instead',
  story:
    'It was meant to sail for Egypt. The Fourth Crusade set out to strike at Muslim power through the Nile, and instead, on the thirteenth of April 1204, its soldiers were looting the largest Christian city on earth. The crusaders had contracted with Venice for a fleet they could not afford. To work off the debt they let themselves be steered, first to sack a Christian town on the Adriatic, then to Constantinople itself. There they were drawn into a Byzantine succession quarrel. The money they had been promised never came, and the men the city had hired laid siege to it. On the twelfth the walls facing the harbor gave way. What followed was three days that the city, a thousand years old, never recovered from.\n\nThey took it apart. The soldiers stripped the churches of their silver, pried the enamels off the altars, melted down ancient bronze statues for the weight of the metal. In the Hagia Sophia, a Greek chronicler wrote, they set a woman on the patriarch’s throne to sing while they drank from the sacred vessels. They led mules into the sanctuary to carry the plunder out, and the animals slipped on the marble and were run through where they fell. Niketas Choniates, who watched his own city looted and had every reason to exaggerate but the detail of a man who was there, recorded all of it. The relics went west by the shipload. So did the four bronze horses from the Hippodrome, gilded, larger than life, each the better part of a ton. They were cast in antiquity and hauled off to Venice. There they were set over the door of the basilica of San Marco, and they stood watch on the piazza for the next five and a half centuries.\n\nThe crusade never did reach Egypt, or Jerusalem. Instead the western knights carved the empire up among themselves and made one of their own the emperor of it. Boniface of Montferrat, who had led them, expected the crown. The Venetians thought he was already too tied into the East and blocked him, and the title went to Baldwin of Flanders instead. The Latin empire they founded on the ruins lasted 57 years. Then the Greeks took their city back, poorer and smaller and never again what it had been. In Rome, Pope Innocent had called the crusade and forbidden the attack in so many words. He celebrated the victory first. Then the reports of the sack reached him, and he wrote that these soldiers of Christ had turned their swords against Christians and drenched themselves in the blood they were sworn to spare.\n\nEugène Delacroix painted the entry more than six centuries later, in 1840, on a commission from King Louis-Philippe for the history galleries at Versailles. He gave it a strange, low heat. The mounted knights come on in the middle distance, unhurried, almost bored. Across the whole foreground the conquered kneel and plead and die, a girl’s body sprawled at the lower right, an old man reaching up from the dust. The city and its harbor spread out behind under a bruised sky. It is a victory picture painted as a reproach, hung in a palace built to glorify French arms. The horses are still on the front of San Marco, in copy. The originals moved inside, out of the weather, in the twentieth century.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '12 April 1204',
  historicalYear: 1204,
  historicalMonthDay: toMonthDay('04-12'),
  artTitle: 'The Entry of the Crusaders into Constantinople',
  artCredit: 'Eugène Delacroix, 1840',
  imageUrl: bucketPainting('scenes/the-horses-of-san-marco.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-horses-of-san-marco.jpg'),
  details: [
    {
      id: 'the-riders',
      x: 0.52,
      y: 0.34,
      scale: 2.4,
      caption:
        'The crusaders ride in slowly, almost bored. Behind them the harbor water is green, and smoke goes up over the city. Their leaders divided the empire between them, and the Venetians made Baldwin of Flanders its emperor.',
    },
    {
      id: 'the-old-man',
      x: 0.27,
      y: 0.55,
      scale: 2.6,
      caption:
        'An old man in a red cloak kneels over a woman\'s body and holds up an open hand. Behind him the white city shows through a dark gap. Spears crowd above its roofs.',
    },
    {
      id: 'the-fallen-girl',
      x: 0.72,
      y: 0.85,
      scale: 2.6,
      caption:
        'Two women lie on the pavement under a horse\'s hooves, and one is slumped across the other. An embroidered cloth and a silver dish are spilled beside them. Delacroix put the plunder and the dead in the same corner of the picture.',
    },
  ],
} satisfies MockSceneDef;

export const theKingInTheDust = {
  slug: 'the-king-in-the-dust',
  title: 'The King in the Dust',
  dek: 'Dragged off his horse in the mud, a French king rises and keeps the crown',
  story:
    'On a Sunday afternoon in high summer, the twenty-seventh of July 1214, the king of France was on the ground under the hooves and nearly killed. Philip Augustus had brought his army to a marshy plain near the bridge at Bouvines, in Flanders. Waiting for him was a coalition put together to break him: the Holy Roman emperor Otto the Fourth, the counts of Flanders and Boulogne, and the money and blessing of King John of England. John was attacking from the southwest at the same time, and he meant to take back everything his family had lost in France. It was the largest gathering of arms the West had seen in a generation. The allies had chosen a Sunday, a day the Church said no Christian should fight, and the French took that as one more of the enemy’s sins.\n\nThe fight turned on a scrum in the center. Foot soldiers broke through to Philip and pulled him down off his horse with hooks. For a moment the king of France was in the dirt with men stabbing at the joints of his armor. His mail held, and his knights fought back over his body until he could get up and remount. Otto, on the other wing, had it worse. His horse was killed under him, and by one chronicler’s count he was thrown three separate times. He fled the field almost alone and left behind the gilded imperial standard, an eagle on a pole, which was carried to Philip as a trophy. Over the French army flew the oriflamme, the blood-red banner of the abbey of Saint-Denis, brought out only for the gravest wars.\n\nThe consequences ran a long way. Otto, beaten, lost the empire within a few years to the young Frederick the Second and died half-forgotten. King John’s grand strategy collapsed with his allies at Bouvines. He came home to England so weakened that his barons forced him, the very next summer, to seal a charter of their liberties in a meadow at Runnymede. The road from the mud at Bouvines runs to Magna Carta by way of John’s ruin. Philip had begun his reign as the lord of little more than Paris and the country around it. He went home the master of a France that finally looked like one country. The crown came out of that afternoon so much stronger that the shape of it held for centuries.\n\nHorace Vernet painted the day in 1827 for the galleries at Versailles. The canvas is 17 feet high and 31 feet across. He put the king at its calm center, on his feet. Philip wears a gold wreath and keeps one hand on his chest, the other out toward a crown and a helmet laid on a white cloth. A knight in armor bends in front of him and holds a sword out flat. It is the tidy official version, the king who had been face down in the dirt painted as a man nobody touched. Down in the right-hand corner, under all that glory, Vernet put two hounds and a man with a hunting horn hauling them back. They are the only three in the picture with somewhere else to be.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '27 July 1214',
  historicalYear: 1214,
  historicalMonthDay: toMonthDay('07-27'),
  artTitle: 'The Battle of Bouvines',
  artCredit: 'Horace Vernet, 1827',
  imageUrl: bucketPainting('scenes/the-king-in-the-dust.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-king-in-the-dust.jpg'),
  details: [
    {
      id: 'the-crowned-king',
      x: 0.6,
      y: 0.42,
      scale: 2.6,
      caption:
        'Philip Augustus stands in a gold wreath with one hand on his chest. The other hand is out toward a crown and a helmet on a white cloth. Foot soldiers had pulled him off his horse with hooks earlier that day and stabbed at the joints of his armor.',
    },
    {
      id: 'the-melee',
      x: 0.24,
      y: 0.5,
      scale: 2.4,
      caption:
        'A knight in black plate is up on a chestnut warhorse with his sword raised. The men around him crowd in and point. Otto the Fourth lost his horse on the far wing that day and ran, and the French carried off his gilded eagle standard.',
    },
    {
      id: 'the-dog',
      x: 0.6,
      y: 0.7,
      scale: 3,
      caption:
        'Two hounds strain at the edge of the ceremony, and a man in a pink jacket hauls them back by the collar. Above them the king’s blue shield with its gold lilies leans against the table.',
    },
  ],
} satisfies MockSceneDef;

export const theWoundsOnTheMountain = {
  slug: 'the-wounds-on-the-mountain',
  title: 'The Wounds on the Mountain',
  dek: 'A friar fasting on a peak comes down marked with the five wounds of Christ',
  story:
    'He had gone up the mountain to fast. In September 1224, Francis of Assisi climbed La Verna, a rock in the Tuscan Apennines given to him by a lord who admired him. He kept a hard 40-day fast toward the feast of Saint Michael, praying in a hut apart from the few brothers who had come with him. He was 42 and going blind and had perhaps two years to live. On or about the fourteenth, the feast of the Exaltation of the Cross, his companions later said, he had a vision at dawn. A six-winged seraph came to him with the figure of a crucified man between its wings. When it faded there were wounds in his hands and feet and side, the marks of the nails and the lance, and he carried and hid them for the rest of his life.\n\nIt is the first case of the stigmata the Church records, the wounds of the cross turning up on a living body. What is strange is how ordinary the man underneath it was. Francis was a cloth merchant’s son from Assisi. He had gone to war as a young man, been captured, and come home changed. Then he gave everything away. He stripped off his clothes in the town square, in front of his furious father and the bishop, to say he would take nothing more from him. He preached to anyone, walked barefoot, and kept no money. He took the whole created world for family. He is supposed to have preached to a field of birds, and to have struck a bargain with a wolf that had been eating the people of Gubbio. The order he founded to live that way had already grown into thousands in his own lifetime. It had begun to argue about whether so much poverty was practical, and that argument outlived him by a century.\n\nHe came down from La Verna and did not last long. Nearly blind, in constant pain, he dictated a hymn to the sun and to what he called Brother Fire and Sister Water, and near the end added a verse welcoming Sister Death. He died on the evening of the third of October 1226, on the bare ground by his own wish, 44 years old. Two years later the pope made him a saint, faster than almost anyone before or since.\n\nGiotto painted this over the door of the Bardi family’s chapel in Santa Croce in Florence, around 1320, a full century after the vision on the mountain. Giotto is the hinge where painting turns back toward the solid world. His figures have real weight and real ground to kneel on, after ages of flat gold. Here he sets Francis alone on the rock, arms up, gold threads running from the winged figure’s wounds to his own. The winged figure is not an angel. It is a man with six wings, hanging with his arms out, come down to hand Francis his own pain. Down at the right Giotto put a plain church with a rose window, a real building among the symbols. The chapel was plastered over in the 16th century on the orders of Duke Cosimo the First, and Florence did not see this wall again until restorers took the plaster off in the 1800s.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '3 October 1226',
  historicalYear: 1226,
  historicalMonthDay: toMonthDay('10-03'),
  artTitle: 'Bardi Chapel',
  artCredit: 'Giotto, c. 1320',
  imageUrl: bucketPainting('scenes/the-wounds-on-the-mountain.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-wounds-on-the-mountain.jpg'),
  details: [
    {
      id: 'the-raised-hands',
      x: 0.3,
      y: 0.52,
      scale: 2.6,
      caption:
        'Francis tips his head back with both hands open, and thin gold lines run down across the bare rock to meet them. He was 42, going blind, and had two years to live.',
    },
    {
      id: 'the-seraph',
      x: 0.64,
      y: 0.2,
      scale: 2.6,
      caption:
        'A man hangs with his arms straight out, in the pose of a crucifixion. Six wings and a gold halo surround him. Giotto made the vision Christ himself rather than an angel, and thin gold threads run from him out of the frame.',
    },
    {
      id: 'the-little-church',
      x: 0.76,
      y: 0.6,
      scale: 2.6,
      caption:
        'A church with a rose window and a black open doorway stands on the rock at the right of the fresco. Francis had rebuilt San Damiano, outside Assisi, with his own hands.',
    },
  ],
} satisfies MockSceneDef;

export const theBellForVespers = {
  slug: 'the-bell-for-vespers',
  title: 'The Bell for Vespers',
  dek: 'An insult at a church door on Easter Monday empties an island of its rulers',
  story:
    'The bell rang for the evening prayer and the killing started with it. It was Easter Monday, the thirtieth of March 1282, outside the church of the Holy Spirit on the edge of Palermo. Sicilians had gathered there in the cool of the evening for the service called vespers. Sicily had been ruled for 16 years by Charles of Anjou, a French prince the pope had installed as king, and his soldiers and tax men were resented in every town on the island. As the crowd waited, a party of them came among the women, half drunk, and a sergeant named Drouet took hold of a married woman on the pretext of searching her for weapons. Her husband put a knife in him on the spot. It was the last thing Drouet did.\n\nWhat might have stayed a brawl became a slaughter because the whole island was waiting for a spark. The Sicilians around the church fell on the Frenchmen and cut them down, and as the vesper bells of Palermo went on ringing the rising ran through the city. The mob hunted the French through the streets and into the churches and killed them, and by a chronicler’s report even dragged Sicilian women thought to be carrying French children out to die. The password, the story goes, was ciciri, the Sicilian word for chickpeas, which a French mouth could not get right. Anyone who failed was killed. Within six weeks more than 3,000 French were dead across the island, and Charles of Anjou had lost Sicily in a single Easter week.\n\nThe island did not go back. Having thrown out one foreign king, the Sicilians offered the crown to another, Peter of Aragon, whose wife had a claim. The war that followed dragged Aragon, France, and the papacy through 20 years of fighting over the wreckage. Sicily stayed with Aragon and its Spanish successors for centuries afterward. More than five centuries later the affair handed the Italian movement for unification a ready-made national legend. It was the day the people of one island rose in an evening and threw their masters into the sea. It also gave Giuseppe Verdi the plot for a grand opera, which he wrote for Paris, of all cities, in 1855.\n\nFrancesco Hayez painted the moment the insult catches fire, around 1822, and painted it as theater. Drouet stands in a dark doublet with a French lily stitched on his chest, one hand out toward a bride in white. Her head falls back and her family closes around her. A man lies at Drouet’s feet, propped on an elbow, looking up. Behind them the rising boils up the church steps, a horse plunging in the middle of it. A tower and a bare mountain stand off to the right under a heavy sky. This was the first of the several versions Hayez made of the scene, painted in his studio at the Brera in Milan for the marchesa Visconti d’Aragona. Hayez was a northerner painting a southern story for his own political century. The Italy he was addressing was still cut into pieces, half of it under foreign rule, and it would have known exactly which occupier he meant.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '30 March 1282',
  historicalYear: 1282,
  historicalMonthDay: toMonthDay('03-30'),
  artTitle: 'The Sicilian Vespers',
  artCredit: 'Francesco Hayez, c. 1822',
  imageUrl: bucketPainting('scenes/the-bell-for-vespers.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-bell-for-vespers.jpg'),
  details: [
    {
      id: 'the-grasping-hand',
      x: 0.48,
      y: 0.52,
      scale: 2.6,
      caption:
        'A French soldier plants his feet and puts a hand out toward the women at the right. This is Drouet, and the lily stitched on his chest marks him as French. He holds his sword down in the other hand, with the point at the ground.',
    },
    {
      id: 'the-bride',
      x: 0.68,
      y: 0.56,
      scale: 2.6,
      caption:
        'The bride’s head falls back on the shoulder of the man holding her, and the woman at the left throws out an arm. Hayez painted two Milanese aristocrats into this group. Countess Virginia Giovio della Torre is the bride, and Pompeo Belgiojoso is the man holding her.',
    },
    {
      id: 'the-riot',
      x: 0.2,
      y: 0.5,
      scale: 2.4,
      caption:
        'The fighting on the church steps is already going. Men grapple, a woman is dragged down at the front, and a dark horse plunges through them. The killing started at the first stroke of the bell for evening prayer.',
    },
  ],
} satisfies MockSceneDef;
export const oneBlowAtBannockburn = {
  slug: 'one-blow-at-bannockburn',
  title: 'One Blow at Bannockburn',
  dek: 'A knight charges the Scottish king, who carries only an axe',
  story:
    'Sir Henry de Bohun saw the whole war laid out in front of him and reached for it. It was the afternoon of the twenty-third of June, 1314. The two armies had come to the boggy ground below Stirling Castle. Out ahead of the Scottish line rode a single man on a grey pony, small and lightly armed. He wore a gold circlet over his helmet so that everyone would know him. It was Robert Bruce, King of Scots. De Bohun was young and well mounted and armored to the throat. He dropped his lance and spurred his warhorse straight at the king, and for a few seconds the entire quarrel between two countries narrowed to one horse closing on another.\n\nBruce did not run, and he had no lance to lower at him. He waited, then at the last stride swung the pony aside, rose in the stirrups, and brought his axe down through de Bohun’s helmet and skull. John Barbour wrote his poem The Bruce some 60 years later, when men who had been there could still be asked. He says the blow split the head to the neck and shattered the axe-haft in the king’s hand. Bruce rode back to his own captains, who scolded him for gambling the war on a duel. His only answer, Barbour has it, was regret for a different loss: he had broken his good axe.\n\nThat was the first day. The battle proper came the next, the twenty-fourth, on the flat between the Bannock burn and the castle. Bruce had spent it well. His men fought on foot in the schiltron, a hedgehog of long spears. Where the English horse would have to come, he had dug pits and covered them over with sticks and grass. The heavy cavalry of Edward the Second, the finest thing his army owned, rode into ground it could not use, jammed between the burn and the bog, unable to charge home and unable to turn. The spears held. The horses foundered in the pits and the mud.\n\nBy the end of it the English army had come apart. Edward was hustled off the field to Stirling, and the man holding the castle would not let him in. He rode for the border and did not stop until he reached Dunbar and a ship. The picture that fixes the scene in the popular mind is Victorian. James Doyle drew it for his Chronicle of England in 1864, and Edmund Evans engraved and printed it in color. De Bohun comes from the left under his crested helm, his lance out and already past its mark. Bruce is on the right on the pale horse with the axe up, the castle small on its rock behind him. Bruce won his kingdom over the following years and never quite got the church to stop excommunicating him. He had killed a rival on an altar step in a Dumfries church eight years before, which the Pope had not forgotten, and which no gold circlet could quite cover.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '23 June 1314',
  historicalYear: 1314,
  historicalMonthDay: toMonthDay('06-23'),
  artCredit: 'James William Edmund Doyle, A Chronicle of England, 1864',
  imageUrl: bucketPainting('scenes/one-blow-at-bannockburn.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/one-blow-at-bannockburn.jpg'),
  details: [
    {
      id: 'the-axe',
      x: 0.62,
      y: 0.19,
      scale: 2.6,
      caption:
        'Robert Bruce comes on with the axe already up. A gold band circles his helmet so both armies could see who he was. De Bohun’s lance has gone by above his shoulder.',
    },
    {
      id: 'de-bohun',
      x: 0.3,
      y: 0.19,
      scale: 2.6,
      caption:
        'Sir Henry de Bohun rides under a helmet closed over his face, with a gold crest and a long streamer flying off it. He had picked the king out by the gold band and spurred straight at him.',
    },
    {
      id: 'stirling-rock',
      x: 0.84,
      y: 0.42,
      scale: 2.6,
      caption:
        'Stirling Castle stands on its rock. Scottish horsemen are drawn up below it under a gold banner with a red lion. The castle was the prize both armies had marched for, and the next day settled who held it.',
    },
  ],
} satisfies MockSceneDef;

export const theSheWolfComesAshore = {
  slug: 'the-she-wolf-comes-ashore',
  title: 'The She-Wolf Comes Ashore',
  dek: 'A queen lands with an army to take the throne from her own husband',
  story:
    'She landed on the Suffolk coast on the twenty-fourth of September, 1326, with about 1,500 hired soldiers and her 13-year-old son at her side. Isabella of France was Queen of England and had come to unmake the King of England, who was her husband. She had gone to Paris the year before on a diplomatic errand and simply not come back. There she took up with Roger Mortimer, an exiled baron who had escaped the Tower of London by drugging his guards. The two of them built a small invasion out of mercenaries, English exiles, and grievances, of which the country had a great many.\n\nEdward the Second had spent 20 years handing his affections and his patronage to favorites, first Piers Gaveston, then the Despensers, and the barons had spent 20 years hating them for it. When Isabella came ashore, the kingdom did not resist her; it changed sides. Edward fled west toward Wales with the younger Despenser and almost no one else. He was run down in November, and by January his own parliament had forced him to give up the crown to his boy, who became Edward the Third. In September of 1327, imprisoned at Berkeley Castle in Gloucestershire, the old king died. The story that his keepers killed him with a red-hot iron, so as to leave no mark, is a later invention. It gets repeated because it is unforgettable, and because it fit what people wanted to think about him. What is near certain is that he was murdered, and that the order came from the men now running the country in his son’s name.\n\nThe painting here is not a scene of any of that. It is a manuscript miniature by Jean Fouquet, made in the 1450s for a royal copy of the Grandes Chroniques de France. It shows the landing as a court occasion. Isabella steps onto a red shore in a gold gown. Her ladies come out of a great ship behind her, and a wall of armored men waits at the left, spears against the sky. Fouquet painted it more than a century after the event, in the clothes and rigging of his own day. That is how medieval chroniclers usually pictured the past, with no sense that it had ever looked different.\n\nIsabella and Mortimer ruled for three years, badly and greedily, until the boy king grew up enough to end it. In 1330 Edward the Third had Mortimer seized in Nottingham Castle and hanged. His mother he did not touch; she kept her lands and lived nearly 30 more years in comfortable retirement. The name she is remembered by, the She-Wolf of France, she never heard in her life. The poet Thomas Gray hung it on her four centuries later. He borrowed it from a line Shakespeare had aimed at a different queen, and wrote of her tearing the bowels of her mangled mate. In her own century people mostly thought well of her.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '24 September 1326',
  historicalYear: 1326,
  historicalMonthDay: toMonthDay('09-24'),
  artTitle: 'Grandes Chroniques de France',
  artCredit: 'Jean Fouquet, c. 1455',
  imageUrl: bucketPainting('scenes/the-she-wolf-comes-ashore.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-she-wolf-comes-ashore.jpg'),
  details: [
    {
      id: 'the-queen',
      x: 0.41,
      y: 0.585,
      scale: 2.4,
      caption:
        'Isabella of France is in gold and ermine, with a crown on her head. A boy in red is at her knee. She crossed the sea to pull her own husband off the throne, and inside a year he was dead.',
    },
    {
      id: 'the-spears',
      x: 0.192,
      y: 0.53,
      scale: 2.6,
      caption:
        'Armored men are packed along the shore with their faces under steel. Spears and axes show above their heads. About 1,500 hired soldiers crossed with the queen, and almost nobody in England fought back.',
    },
    {
      id: 'the-ship',
      x: 0.58,
      y: 0.41,
      scale: 2.4,
      caption:
        'The bow of the ship rides high, and round painted shields hang along the rail. Fouquet painted the fleet with the rigging of his own century, more than 100 years after the queen sailed.',
    },
  ],
} satisfies MockSceneDef;

export const theBlindKingsCharge = {
  slug: 'the-blind-kings-charge',
  title: 'The Blind King’s Charge',
  dek: 'At Crécy the flower of French chivalry rides into English arrows',
  story:
    'John of Luxembourg, King of Bohemia, was about 50 and completely blind. On the evening of the twenty-sixth of August, 1346, near the village of Crécy in Picardy, he asked to be led into the middle of a battle he could already hear going wrong. He was fighting for the French, and from the sound of it the French were losing: the crossbowmen thrown back, the first cavalry charge broken. He told the knights around him to tie their horses’ reins to his so that he could ride in among them and strike at least one blow with his own sword. They did it. They went forward roped together, and in the morning they were found in a heap, the king dead in the middle of them, the horses still bound.\n\nWhat had wrecked the French was distance. Edward the Third had put his army on a low ridge, with the archers on the wings. The English and Welsh longbowmen could shoot far faster and farther than the Genoese crossbowmen hired to answer them. A rain shower had come through before the fighting, and the story is that it slackened the Genoese bowstrings while the English kept theirs dry under their hats. The crossbowmen were driven back into their own advancing cavalry. The French knights, furious, rode over their own hired men to get at the enemy, then died in front of the arrows in wave after wave. It went on into the dark. When it was over the French had lost a catalogue of their greatest lords, and the shape of war had shifted a little on its hinges, away from the mounted knight.\n\nThe painting is a miniature from a copy of Froissart’s Chronicles, illuminated by Loyset Liédet around 1470, more than 120 years after the battle. It lays the whole field out flat and legible. The English archers bend their bows on the right. On the left the Genoese with their crossbows give way, and a dead man-at-arms lies face down in the grass at the bottom of the field. Froissart, who talked to men on both sides, is where most of what we know comes from. The good stories come from him too, which is a warning as much as a gift.\n\nOne of those stories concerns the dead blind king. The legend says that Edward’s son, the 16-year-old prince later called the Black Prince, took John’s crest of ostrich feathers and his motto, two German words meaning I serve. Every Prince of Wales since has carried the feathers and the motto. It is a good story and probably not true. It first turns up in writing in 1376, the year the Black Prince died, and there is no sign King John ever used either the feathers or the words. He bore, of all things, a crest of vultures’ wings.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '26 August 1346',
  historicalYear: 1346,
  historicalMonthDay: toMonthDay('08-26'),
  artTitle: 'Froissart’s Chronicles',
  artCredit: 'Illuminated by Loyset Liédet, c. 1470',
  imageUrl: bucketPainting('scenes/the-blind-kings-charge.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-blind-kings-charge.jpg'),
  details: [
    {
      id: 'the-longbows',
      x: 0.79,
      y: 0.7,
      scale: 2.4,
      caption:
        'English and Welsh archers stand at full draw in short bright coats. Their bows are nearly as tall as the men holding them. They shot faster and farther than the crossbows sent against them, and that gap decided the day.',
    },
    {
      id: 'french-knights',
      x: 0.25,
      y: 0.37,
      scale: 2.6,
      caption:
        'French men-at-arms are packed shoulder to shoulder in steel helmets. One of them wears gilded armor. The blind king had his reins tied to theirs so he could ride in and strike one blow.',
    },
    {
      id: 'the-helm',
      x: 0.46,
      y: 0.85,
      scale: 2.8,
      caption:
        'A dead man-at-arms lies face down in the grass. His sword is out of his hand, and arrows lie where they fell beside him. Liédet put the dead in the front of the picture, close enough to count the arrows.',
    },
  ],
} satisfies MockSceneDef;

export const fourteenAtSmithfield = {
  slug: 'fourteen-at-smithfield',
  title: 'Fourteen at Smithfield',
  dek: 'The rebels’ leader is cut down in front of a boy king who then rides at them',
  story:
    'A 14-year-old king rode out to a meadow at Smithfield, just outside London’s wall, on the fifteenth of June, 1381, to talk to tens of thousands of angry countrymen who had already taken the city. Richard the Second had been king since he was ten. For three days the rising the schoolbooks call the Peasants’ Revolt had run through London. They burned the Savoy Palace of the king’s uncle and broke open the prisons. They stormed the Tower itself, dragged out the Archbishop of Canterbury, and cut off his head on Tower Hill. The trigger had been a poll tax, a flat charge on every head, and it fell hardest on the poor. Under it lay a whole world of anger left by the plague a generation earlier. The plague had killed so many workers that the survivors wanted higher wages, and the lords had passed laws to stop them.\n\nAt Smithfield the rebel leader, a man remembered as Wat Tyler, came forward to put demands to the boy: an end to serfdom, an end to lordship beyond the king’s. What happened next happened fast and is disputed in every detail. Tyler said or did something taken as insolent. The Lord Mayor of London, William Walworth, spurred in and struck him, and a royal squire named Ralph Standish ran him through. Tyler wheeled his horse, cried out to the commons that he was killed, and fell. For a moment it could have tipped either way, thousands of armed men watching their leader drop in front of the king who had come out to talk with them.\n\nWhat the 14-year-old did then is the thing worth keeping. He rode forward alone, toward the crowd. According to Froissart he asked them whether they would shoot their own king, and told them he would be their captain and would give them what they wanted. He led them off the field, north to the open ground at Clerkenwell, while Walworth galloped back into the city for the militia. The promises were worthless. Once the crowds had dispersed to their villages the charters of freedom were revoked, the ringleaders hunted down and hanged, and serfdom went on. But at Clerkenwell the boy had walked into a mob that had spent three days killing his ministers, and talked it into going home.\n\nThe picture is a manuscript miniature from a copy of Froissart made about 90 years later, painted in Bruges by Loyset Liédet in the 1470s. It tells the story twice in one frame, as medieval painters often did. On the left Walworth in the act of striking Tyler down. On the right the young king on horseback in blue, facing a wall of armored men who wear the red cross of Saint George, the crowd he has just turned. Tyler’s head went up on London Bridge, on the same spikes where his rebels had lately mounted the heads of the men they killed.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '15 June 1381',
  historicalYear: 1381,
  historicalMonthDay: toMonthDay('06-15'),
  artTitle: 'Froissart’s Chronicles',
  artCredit: 'Illuminated by Loyset Liédet, c. 1470',
  imageUrl: bucketPainting('scenes/fourteen-at-smithfield.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/fourteen-at-smithfield.jpg'),
  details: [
    {
      id: 'the-killing',
      x: 0.192,
      y: 0.5,
      scale: 2.6,
      caption:
        'One man has Wat Tyler by the neck, with a sword up in his other hand. This is William Walworth, the Lord Mayor of London. A royal squire ran Tyler through a moment later, in front of the king who had come out to hear him.',
    },
    {
      id: 'the-boy-king',
      x: 0.58,
      y: 0.36,
      scale: 2.6,
      caption:
        'Richard the Second appears twice in this one frame, dressed in blue with a crown on. He is small at the left where Tyler is killed, and large at the right where he rides at the crowd. He was 14, and he called out that he would be their captain.',
    },
    {
      id: 'the-crosses',
      x: 0.79,
      y: 0.38,
      scale: 2.8,
      caption:
        'The front rank of the crowd wears plate armor and mail skirts. The red cross of Saint George is on their coats. Walworth galloped back into the city for the militia while the boy led them off the field.',
    },
  ],
} satisfies MockSceneDef;

export const theMorningInTheMud = {
  slug: 'the-morning-in-the-mud',
  title: 'The Morning in the Mud',
  dek: 'A small, sick English army meets the French host on a ploughed field',
  story:
    'It was the morning of the twenty-fifth of October, 1415, Saint Crispin’s Day. A small English army stood cold and hungry at one end of a newly ploughed field in northern France. At the other end was a French army several times its size. Henry the Fifth had landed in the summer to press his claim to the French crown, and spent five weeks taking the port of Harfleur. Then he marched his men toward Calais, with dysentery thinning the ranks the whole way. The French had caught up and blocked the road near a village called Agincourt. Henry had perhaps 6,000 men, most of them archers. Across the field the French had many more, and most of theirs were armored men-at-arms, the nobility of a kingdom, sure of the outcome.\n\nThe ground was the third army on the field, and it fought for England. Rain had fallen for days on the fresh-turned clay. Between the two woods that funneled the battle, the French had to cross deep, sucking mud in heavy plate, on foot, packed too tight to swing their arms. The English archers planted sharpened stakes in front of them and poured arrows into the crush from the wings. Men went down and could not get up and were smothered or trampled under the ones behind. The French attack, so much larger, arrived exhausted and jammed and was butchered where it stuck. It is one of the lopsided days of the age, a few hundred English dead against thousands of French.\n\nThere is a dark passage in it. Partway through, with prisoners already taken and his rear thinly held, Henry heard an alarm that a fresh enemy force was coming at his baggage. He was afraid his captives would pick up weapons and take him from behind, so he ordered the French prisoners killed. The threat turned out to be little more than local men after the baggage. How many were cut down no one knows for certain. It may have been well over a thousand. It was a killing of unarmed men, and the men who did it were uneasy about it even then.\n\nThe painting is by John Gilbert, made in 1884 and titled The Morning at Agincourt, and it does not show the slaughter. It shows the waiting: English horse and men-at-arms crowded in the half-light before the battle, lances up, crows already circling, a bearded rider slumped forward on a worn-out animal. The picture here is the black-and-white plate from Cassell’s History of England, which is why the morning has no color in it. When it was over Henry summoned the heralds, whose trade was to watch battles and keep the score, and who by custom had stood together through this one, French and English side by side. He asked them the name of the nearest castle. Agincourt, they told him. Then that, he said, is what the battle will be called.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '25 October 1415',
  historicalYear: 1415,
  historicalMonthDay: toMonthDay('10-25'),
  artTitle: 'The Morning at Agincourt',
  artCredit: 'John Gilbert, 1884',
  imageUrl: bucketPainting('scenes/the-morning-in-the-mud.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-morning-in-the-mud.jpg'),
  details: [
    {
      id: 'the-weary-rider',
      x: 0.42,
      y: 0.52,
      scale: 2.6,
      caption:
        'A bearded man-at-arms slumped forward over his horse’s neck, hands folded on the mane. Henry’s army had marched for weeks with dysentery in the ranks before it reached this field.',
    },
    {
      id: 'lances-and-crows',
      x: 0.62,
      y: 0.28,
      scale: 2.2,
      caption:
        'Lances and one banner against a dark morning sky, crows already up over the column. Gilbert paints the hour before the fighting, not the fighting.',
    },
    {
      id: 'the-mud',
      x: 0.3,
      y: 0.82,
      scale: 2.4,
      caption:
        'Warhorses picking their way through wet, churned ground past a dead branch. Days of rain on fresh-ploughed clay made the field a trap that helped destroy the heavier French.',
    },
  ],
} satisfies MockSceneDef;

export const theGirlAtTheTower = {
  slug: 'the-girl-at-the-tower',
  title: 'The Girl at the Tower',
  dek: 'A farmer’s daughter in armor lifts the siege that was starving Orléans',
  story:
    'A girl of about 17 stood in the ditch below an English fort at Orléans with an arrow through her shoulder and told the soldiers to keep going. It was the seventh of May, 1429. Her name was Jeanne, a farmer’s daughter from the village of Domrémy on the eastern edge of France. She said God had sent her to drive the English out and see the disinherited French prince crowned. The war was 90 years old by then and going badly for the French. Orléans, the key to the south, had been under English siege for half a year and was close to falling. A few months earlier Jeanne had talked her way to the prince and convinced a panel of churchmen she was not a fraud. She put on armor and rode to the city with a relief force, carrying a white banner she said she liked better than her sword.\n\nThe fighting that broke the siege came at the Tourelles, the stone fort guarding the bridge into the town. Jeanne was hit early, an arrow between neck and shoulder, and was carried out of the press. She wept, had the arrowhead pulled out, and went back. Late in the day, with the assault stalling, she took up her banner again at the edge of the ditch, and when its tip touched the wall she called that the fort was theirs. The French went over. The Tourelles fell on the seventh, and on the eighth of May the English burned their siege works and marched away. Orléans had held. Within weeks the momentum she had started carried the prince to Reims, where in July he was crowned Charles the Seventh, with Jeanne standing near him in the cathedral.\n\nThe painting is by Jules-Eugène Lenepveu, one of four panels on Jeanne’s life made for the Panthéon in Paris between 1886 and 1890. It puts her exactly where the day turned: in full armor at the foot of the Tourelles, the banner up in her hands. Below her the storming party is packed against the wall, and a dead soldier lies in the dirt in front of her. This is nineteenth-century France painting its patron saint, unbloodied and shining in the middle of a real slaughter, and it knows what it is doing.\n\nWhat the siege bought her was two more years. In 1430 she was captured at Compiègne, sold to the English, and put on trial for heresy by a French bishop working for them. On the thirtieth of May, 1431, they burned her in the market square at Rouen. She was about 19. An English soldier who had helped build her pyre is supposed to have said afterward that they had burned a saint. A second trial 25 years later, ordered by the king she had crowned, went back over the record and cleared her name.',
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '7 May 1429',
  historicalYear: 1429,
  historicalMonthDay: toMonthDay('05-07'),
  artTitle: 'Jeanne d’Arc au siège d’Orléans',
  artCredit: 'Jules-Eugène Lenepveu, 1886–1890',
  imageUrl: bucketPainting('scenes/the-girl-at-the-tower.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-girl-at-the-tower.jpg'),
  details: [
    {
      id: 'the-banner',
      x: 0.44,
      y: 0.43,
      scale: 2.0,
      caption:
        'Jeanne stands in plate armor and a mail hood. She grips the red staff of her banner, and the white cloth with its gold lilies is over her head. She said she loved that banner more than her sword, and an arrow went through her shoulder here.',
    },
    {
      id: 'the-assault',
      x: 0.19,
      y: 0.6,
      scale: 2.4,
      caption:
        'The attackers are packed against the foot of the fort. Pikes and spears point up, and a man is falling off the stonework. When the tip of her banner touched the wall she called the place taken, and they went over.',
    },
    {
      id: 'the-wall',
      x: 0.3,
      y: 0.895,
      scale: 2.6,
      caption:
        'A dead man lies face down in the dirt below the fort. One hand is still out toward his crossbow, and a white cross is sewn on his red coat. The Tourelles guarded the bridge into Orléans, and losing it lost the English the siege.',
    },
  ],
} satisfies MockSceneDef;

export const theClauseThatOutlivedTheKing = {
  slug: 'the-clause-that-outlived-the-king',
  title: 'The Clause That Outlived the King',
  dek: 'A failed peace treaty accidentally invents a limit on power',
  story:
    "It was not a declaration of rights and it was not meant to last. In June 1215, in a meadow at Runnymede between Windsor and Staines, English barons in open rebellion forced King John to seal a long, technical document. It listed what they wanted fixed: forest boundaries, fish traps on the Thames, the treatment of widows, the tax a lord paid instead of sending knights, and the foreign mercenaries to be sent home. Most of its 63 clauses are about the specific complaints of a few dozen wealthy men in a specific year, and its purpose was to end a civil war.\n\nIt did not. John wrote to the pope, who threw the charter out within ten weeks as shameful and forced. The war went on. John died of dysentery the following year with the country still in pieces. The document should have vanished with him. Instead his son's regents reissued it to buy support, and reissued it again. By 1297 a revised version was on the statute rolls. It had stopped being a treaty and started being law.\n\nWhat kept it alive is two clauses about ordinary justice, still on the books in England today. No free man shall be seized or imprisoned, or stripped of his rights or possessions, except by the lawful judgement of his equals or by the law of the land. To no one will we sell, to no one deny or delay, right or justice. In 1215 free man meant a small minority of the population, and the barons who insisted on it were not thinking about anyone below them. But the words were general, and general words get borrowed. Seventeenth-century lawyers used them against the Stuarts, American colonists used them against Parliament, and the phrase due process of law traces to a fourteenth-century restatement of that clause.\n\nFour originals from 1215 survive. This one is in the British Library. A London lawyer named Humphrey Wyems gave it to the collector Robert Cotton in January 1629, and may have picked it up in a tailor's shop. The handwriting is a scribe's, run edge to edge without paragraph breaks to save parchment. The king's name appears in the first line, among a long list of the bishops and barons whose advice he is supposed to be taking. He never signed it. Kings did not sign. A seal was pressed into wax and the thing was done.",
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '15 June 1215',
  historicalYear: 1215,
  historicalMonthDay: toMonthDay('06-15'),
  artTitle: 'Magna Carta',
  artCredit: '1215, British Library Cotton MS Augustus II.106',
  imageUrl: bucketPainting('scenes/the-clause-that-outlived-the-king.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-clause-that-outlived-the-king.jpg'),
  details: [
    {
      id: 'the-first-line',
      x: 0.21,
      y: 0.21,
      scale: 2.4,
      caption:
        'The first line names King John and the bishops and barons he says he is taking advice from. No king signed a charter. Hot wax and a seal did that job.',
    },
    {
      id: 'the-hand',
      x: 0.5,
      y: 0.45,
      scale: 2.2,
      caption:
        'One scribe wrote the whole charter out. The lines run edge to edge, with no paragraph breaks and no gap between clauses. Parchment cost money.',
    },
    {
      id: 'the-burn',
      x: 0.56,
      y: 0.8,
      scale: 2.8,
      caption:
        'The closing line gives the place and the day: the meadow called Runnymede, 15 June. Below it the sheet is bare, because the wax seal that hung there is long gone.',
    },
  ],
} satisfies MockSceneDef;

export const theOrphanWhoTookAsia = {
  slug: 'the-orphan-who-took-asia',
  title: 'The Orphan Who Took Asia',
  dek: 'A boy whose clan abandoned him assembles the largest land empire ever',
  story:
    "His name was Temüjin, and his childhood is the least likely opening in the history of conquest. His father, a minor Mongol chief, was poisoned by Tatars when the boy was about nine. The clan abandoned the widow and her children on the steppe rather than feed them. They lived on roots, marmots and fish. He killed his own half-brother in a dispute over a hunting catch. He was captured by a rival clan and kept in a wooden collar before escaping. His wife Börte was carried off by raiders and he had to fight to get her back.\n\nWhat he did with that education was organizational. He rebuilt his position through two men. One was Jamukha, a friend he swore brotherhood with. The other was Toghrul, khan of the Kereit and an old ally of his father's. Then he began dismantling the system that had produced him. He broke up the tribes and put men into units of ten, hundred and thousand, under officers he picked for competence rather than birth. His personal guard became the school his commanders came out of. He banned looting a camp before the battle was decided. Both his sworn brother and his patron eventually turned against him, and both lost. In 1206 an assembly on the Onon river gave him the title Genghis Khan.\n\nThe empire that followed reached from Korea to Hungary within two generations. It is the largest connected land empire there has ever been. The arithmetic of how it was put together is appalling: cities that resisted were emptied out, and the archaeology still shows it. It also produced a working postal relay across Asia and a written script for a language that had none. He let people keep their religions. The roads were safe enough for merchants, and later for the plague, which took the same routes.\n\nThe painting is from the Jami al-Tawarikh, a world history compiled around 1307 by Rashid al-Din, a Jewish-born physician who converted to Islam and became vizier to the Mongol rulers of Persia. He was executed in 1318 on a charge of poisoning his khan. The manuscript he ran is where most images of Genghis Khan come from. A workshop illustrated it, mixing Chinese and Persian technique because the empire had mixed the two. Everyone who painted him worked for his descendants.",
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '1206',
  historicalYear: 1206,
  historicalMonthDay: null,
  artTitle: 'Jami al-Tawarikh',
  artCredit: 'Rashid al-Din, early 14th century',
  imageUrl: bucketPainting('scenes/the-orphan-who-took-asia.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-orphan-who-took-asia.jpg'),
  details: [
    {
      id: 'the-two-crowns',
      x: 0.48,
      y: 0.45,
      scale: 2.0,
      caption:
        'Two crowned figures share one throne, with a gold dish in front of each of them. The man was born Temüjin, and the world came to call him Genghis Khan. As a boy he lived on the open steppe, eating roots and marmots.',
    },
    {
      id: 'the-attendants',
      x: 0.21,
      y: 0.26,
      scale: 2.4,
      caption:
        'Two attendants in Mongol hats carry a gold dish toward the throne. Genghis Khan’s guardsmen served his food and held his door, and his generals came out of that guard.',
    },
    {
      id: 'the-flask',
      x: 0.8,
      y: 0.3,
      scale: 2.4,
      caption:
        'Two hands hold a tall gold jug, one at its neck and the other under its foot. Rashid al-Din ran the workshop that made this book. He was chief minister to the Mongol rulers of Persia until they had him killed in 1318.',
    },
  ],
} satisfies MockSceneDef;

export const theOrderDissolved = {
  slug: 'the-order-dissolved',
  title: 'The Order Dissolved',
  dek: 'A bankrupt king arrests his bankers on a Friday',
  story:
    "At dawn on Friday 13 October 1307, sealed orders that had gone out weeks earlier were opened across France simultaneously, and royal officers arrested every Knight Templar they could find. The order had been founded in 1119 to protect pilgrims on the roads of the Holy Land and had become something nobody planned: a multinational bank. Templars held deposits, moved money between kingdoms on paper so travellers did not carry gold, managed estates, and lent to monarchs. One of the monarchs was Philip IV of France. He had already expelled the Jews and taken their property, debased his coinage, and taxed the clergy. He owed the Templars a great deal of money.\n\nThe charges were spectacular and impossible to disprove: denying Christ, spitting on the cross, obscene initiation rites, worshipping an idol called Baphomet that nobody could ever produce. Confessions arrived quickly, because the men were tortured. In England and Aragon, where torture was not used at first, the Templars largely confessed to nothing. Many who confessed later took it back. Under the rules of the day that made a man a relapsed heretic, and relapsed heretics were burned. In 1310, 54 of them were burned outside Paris.\n\nPope Clement V lived at Avignon and depended on French support. In 1312 he dissolved the order without formally condemning it, and handed most of its property to the Knights Hospitaller. France took its cut in expenses. The last Grand Master, Jacques de Molay, had been in a cell for 7 years. In March 1314 he was brought out onto an island in the Seine, retracted everything, and was burned that evening with one of his officers. The story that he summoned pope and king to meet him before God within the year is a later embroidery, but both were dead within eight months, which is why the story exists.\n\nA document found in the Vatican archives in 2001, the Chinon parchment, shows Clement had absolved the leadership of heresy in 1308 while dissolving the order anyway on grounds of scandal. The illumination here was painted in Paris about 1380, for a copy of the Chroniques de France ou de Saint-Denis, some 66 years after the fire. Two men stand in the flames. The executioner leans on his rake, and a row of spectators watches with folded arms.",
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '18 March 1314',
  historicalYear: 1314,
  historicalMonthDay: toMonthDay('03-18'),
  artTitle: 'The Burning of the Templars',
  artCredit: 'French chronicle miniature, 14th century',
  imageUrl: bucketPainting('scenes/the-order-dissolved.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-order-dissolved.jpg'),
  details: [
    {
      id: 'the-fire',
      x: 0.37,
      y: 0.66,
      scale: 2.0,
      caption:
        'Two men burn on an island in the Seine. They are Jacques de Molay and Geoffroi de Charney, and de Molay was the last Grand Master of the Templars. Both had confessed under torture and then taken it back, and that made them relapsed heretics.',
    },
    {
      id: 'the-rake',
      x: 0.6,
      y: 0.52,
      scale: 2.0,
      caption:
        'The executioner bends over the rake with both hands on the pole and works the fire. Nobody in the picture is hurrying.',
    },
    {
      id: 'the-watchers',
      x: 0.35,
      y: 0.22,
      scale: 2.4,
      caption:
        'Three men in hoods stand with their arms folded, watching. The Templars had been the French crown’s bank, and the crown owed them money.',
    },
  ],
} satisfies MockSceneDef;

export const theManWithTheGoldNugget = {
  slug: 'the-man-with-the-gold-nugget',
  title: 'The Man With the Gold Nugget',
  dek: 'A Mallorcan mapmaker puts the richest man on earth in the Sahara',
  story:
    "In 1324 the ruler of Mali went on pilgrimage to Mecca and broke the Egyptian economy on the way. Mansa Musa travelled with a caravan that Arab chroniclers numbered in the thousands. In Cairo he gave gold away in alms, in gifts, and in purchases at whatever price was asked. The price of gold in the city fell, and by one Arab account it did not recover for at least 12 years. Mali sat on the goldfields of the upper Niger and on the desert trade in salt, gold and slaves. Musa spent the proceeds on the pilgrimage, on scholars he brought home from Cairo, and on building, including part of the Djinguereber mosque at Timbuktu. Timbuktu ended up holding one of the great manuscript libraries of the world.\n\nWord of that caravan travelled north across the desert with the merchants and reached the workshops of Mallorca, where a Jewish cartographer named Cresques Abraham was making the most ambitious map of the age. The Catalan Atlas of about 1375 covers the known world from the Atlantic to China on six leaves. It has the ruled bearing lines of a working sea chart, and the first compass rose anyone has found on one. Inland it has whatever the mapmaker had been told. Here, in the western Sahara, he drew a crowned king on a throne, holding out a lump of gold the size of an apple. Beside him he wrote that this black lord is called Musse Melly, lord of the black people of Guinea. The gold of his country, he wrote, makes him the richest and most noble king in all the land.\n\nAlmost everything around him is guesswork or hearsay: walled towns drawn from nothing, a blue river where the Niger should be, and place names written down the way a trader had said them. What the map gets right is a fact of the fourteenth-century economy that European schoolbooks later mislaid. Much of the gold in Christian Europe's coins had come across the Sahara, and everyone in the trade knew whose it had been.\n\nThe atlas went into the French royal library and is in Paris now. Mansa Musa had been dead close to 40 years when it was drawn, and his empire had another century to run.",
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '1324',
  historicalYear: 1324,
  historicalMonthDay: null,
  artTitle: 'The Catalan Atlas',
  artCredit: 'Cresques Abraham, c. 1375',
  imageUrl: bucketPainting('scenes/the-man-with-the-gold-nugget.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-man-with-the-gold-nugget.jpg'),
  details: [
    {
      id: 'the-nugget',
      x: 0.42,
      y: 0.32,
      scale: 2.4,
      caption:
        'Mansa Musa holds up a lump of gold about the size of an apple. The mapmaker had never seen him, and drew him from stories that came north with the caravans.',
    },
    {
      id: 'the-caption',
      x: 0.82,
      y: 0.15,
      scale: 2.2,
      caption:
        'The Catalan note beside the throne calls him the richest and most noble lord in all the land, on account of the gold that comes out of his country. It was written in Mallorca by a man who had never been there.',
    },
    {
      id: 'the-rhumb-lines',
      x: 0.2,
      y: 0.7,
      scale: 2.4,
      caption:
        'Straight lines from a sea chart run across a desert nobody in the workshop had crossed. The red names came by hearsay, and ciutat de melly means the city of Mali. Another reads tenbuch, the first time a European map wrote down Timbuktu.',
    },
  ],
} satisfies MockSceneDef;

export const theExileWithTheBook = {
  slug: 'the-exile-with-the-book',
  title: 'The Exile With the Book',
  dek: 'The city that sentenced him to burn puts him on the cathedral wall',
  story:
    "Dante Alighieri was a Florentine politician on the losing side. In 1301, while he was away in Rome on an embassy, a rival faction took the city with French help. In January 1302 he was convicted of corruption without being there, and sentenced to a fine and 2 years' exile. He did not appear, so the sentence was raised to death by fire if he was ever caught inside Florentine territory. He never went back. He spent the remaining 19 years of his life moving between Verona, Bologna and Ravenna. He wrote the line every exile has borrowed since: how salt the taste of another man's bread, how hard the going up and down another man's stairs.\n\nHe wrote the Comedy in that condition, and he wrote it in Italian. That was the decision with consequences. Serious work was written in Latin. Everyday Italian was for love songs and shopping lists. Dante wrote 100 cantos on the structure of the universe in the Tuscan of his own street. That Tuscan became the language a country was eventually assembled around. He also settled scores in it. Hell is full of people he knew, named out loud, including three popes. His Florentine readers were expected to recognize the local politicians.\n\nHe died in Ravenna in 1321 of malaria caught on a diplomatic trip, and Florence has been trying to get the body back ever since. Ravenna has consistently declined. In 1519 the pope granted a Florentine petition for the remains. The tomb was opened and found empty. The Franciscans had cut a hole in the wall and taken the bones out. They stayed hidden until 1865, when workmen doing repairs found a wooden box with an inscription explaining who was inside.\n\nDomenico di Michelino painted this in 1465, for the wall of Florence cathedral, on commission from the city that had condemned him, and he worked to a design by Alesso Baldovinetti. Dante stands in red with the book open. Hell goes down on the left, purgatory rises behind him as a terraced mountain, and on the right are the walls of Florence with Brunelleschi's dome above them. The dome was finished in 1436, so the poet never saw it. The gate he is standing outside is the city's, and he is on the wrong side of it.",
  eraId: toEraId('medieval-europe'),
  historicalDateLabel: '1302',
  historicalYear: 1302,
  historicalMonthDay: null,
  artTitle: 'Dante and the Three Kingdoms',
  artCredit: 'Domenico di Michelino, 1465',
  imageUrl: bucketPainting('scenes/the-exile-with-the-book.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-exile-with-the-book.jpg'),
  details: [
    {
      id: 'the-book',
      x: 0.63,
      y: 0.44,
      scale: 2.4,
      caption:
        'Dante holds the Comedy open, in a laurel wreath and a red hood. He wrote the poem in the Tuscan of his own street instead of Latin, which is why standard Italian is Tuscan.',
    },
    {
      id: 'the-gate',
      x: 0.77,
      y: 0.55,
      scale: 2.2,
      caption:
        'Florence, with Brunelleschi’s dome on the cathedral and a gate in the city wall below it. The dome went up 115 years after Dante died. This was painted 29 years after the dome was finished.',
    },
    {
      id: 'the-damned',
      x: 0.21,
      y: 0.76,
      scale: 2.5,
      caption:
        'Devils driving naked bodies downhill toward the fire, a bare white banner going ahead of them. Dante named the people in his hell, and his first readers in Florence recognized them.',
    },
  ],
} satisfies MockSceneDef;
