import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const fortyTwoLines = {
  slug: 'forty-two-lines',
  title: 'Forty-Two Lines',
  dek: 'In a Mainz workshop, a goldsmith presses God into movable type',
  story:
    'Every book in Europe is a year of someone’s life. A Bible means a scriptorium, a team of copyists, months of candlelight, and a price that only princes and cathedrals can pay. Johannes Gutenberg, goldsmith, debtor, keeper of secrets, has spent 20 years and three fortunes on another way. The fortunes are documented in lawsuits. In Strasbourg he manufactured pilgrim mirrors, little polished badges meant to catch holy radiance at the great Aachen pilgrimage. He was ruined when plague put the pilgrimage off by a year. His partners sued to learn the other, secret art he kept hinting at. He never told them. He came home to Mainz and borrowed 800 guilders from Johann Fust, a money-lender who understood collateral better than wonder, and 800 more when that ran out.\n\nThe secret is not one invention but a stack of them. A steel punch, carved with a single letter, struck into soft copper to make a mold. A hand-held caster that turns molten metal into a finished letter in seconds. An alloy, mostly lead with tin and antimony, whose exact recipe he will not name. It shrinks so little that it casts a crisp face every time. His Bible font runs to some 290 distinct characters, because a machine must not look like a machine. He cast the ligatures and abbreviations a scribe’s hand would make, so the page would pass for the work of a very good monastery. Scribes’ ink beads up on metal, so he cooked a new one from lampblack and linseed oil, closer to varnish than to ink. The press itself he adapted from the ones that crush grapes; Mainz sits in wine country, and he borrowed accordingly.\n\nToday a sheet comes off the bed carrying 42 lines of scripture in two columns, the ink dense and even, every letter as sharp as its thousand brothers. A scribe would need three days for this page. The press made it while a man held his breath. Word travels ahead of the finished book. At the Frankfurt fair, a churchman named Aeneas Silvius Piccolomini, who will die as Pope Pius II, examines sample quires, folded gatherings of the printed pages. He writes to a cardinal that the script is clean enough to read without spectacles, and that every copy is already spoken for. The full run is about 180 Bibles, most on Italian paper, the rest on vellum. A single vellum copy costs the skins of about 170 calves. Buyers pay a fraction of a handwritten Bible’s price and receive something no prince has ever owned: a perfect twin of every other copy.\n\nGutenberg is not among the winners. In November 1455, with the Bibles barely dry, Fust calls in the debt before a notary and takes the workshop, the type, and the finished stock. He reopens the business with Peter Schöffer, Gutenberg’s best apprentice, who soon marries Fust’s daughter. The inventor lives 13 more years, pensioned at the end by the archbishop with an allowance of grain, wine, and a court suit of clothes. He dies in the city where he started, owning almost nothing he made. About 49 of his Bibles survive, each worth more than the building that houses it. The page does not care. The page is already everywhere.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'A morning in 1455',
  historicalYear: 1455,
  historicalMonthDay: null,
  artCredit: 'After Jean-Antoine Laurent, 19th century',
  imageUrl: bucketPainting('scenes/forty-two-lines.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/forty-two-lines.jpg'),
  details: [
    {
      id: 'the-proof',
      x: 0.45,
      y: 0.45,
      scale: 2.8,
      caption:
        'He bends over the bench in profile with a beard and fur at his collar. No likeness of Gutenberg from life survives. Every portrait of him goes back to one engraving from 1584, 116 years after he died.',
    },
    {
      id: 'the-press',
      x: 0.91,
      y: 0.44,
      scale: 3.2,
      caption:
        'The screw is cut from wood and banded in metal. A bar with a ball on the end runs through it for a man to lean on. Gutenberg took the mechanism from the presses that crushed grapes in the Mainz wine country.',
    },
    {
      id: 'type-cases',
      x: 0.37,
      y: 0.61,
      scale: 3.4,
      caption:
        'He holds one cast letter between finger and thumb, and more of them lie face up on the bench beside a stack of sheets. The alloy is mostly lead, with tin and antimony in a proportion he never wrote down.',
    },
  ],
} satisfies MockSceneDef;

export const theGoddessReturns = {
  slug: 'the-goddess-returns',
  title: 'The Goddess Returns',
  dek: 'A banker hangs a naked goddess in his villa and calls it philosophy',
  story:
    "The picture was made for a country house. Around 1486 a young cousin of Lorenzo the Magnificent wanted something for a Medici villa outside Florence. Botticelli painted him a goddess arriving: Venus born full-grown from the sea, blown to shore on a shell by two entwined wind spirits. Spring herself runs up the beach with a flowered cloak, one second too late. He painted it in tempera on canvas, the cheaper support used for pictures that would hang in the country, which is one reason the most famous painting in Florence spent its first centuries as furniture.\n\nNothing like it had been made for a thousand years. A life-size female nude, no saint, no Eve, no excuse of scripture: the last time Europe painted such a thing, the empire was Roman. Botticelli borrowed the pose openly from an ancient marble Venus of the type the Medici owned: one arm across the breast, weight on one leg. The scene came from the old poets by way of his friend Poliziano, the house scholar, whose verses describe exactly this arrival. The philosophy was the alibi and half the point. In the circle around Marsilio Ficino, who was busy fusing Plato with Christianity, Venus stood for divine love made visible; contemplating her beauty was supposed to pull the soul upward. A naked goddess on the wall of a banker's villa, in other words, came certified as an instrument of virtue.\n\nShe has a sister in the same house. The Primavera, painted a few years earlier for the same family circle, kept her company for generations. When the historian Vasari finally recorded the two paintings in the 1550s, he found them together at the Castello villa, already old furniture to their owners. The pair share a cast and a gardener's inventory: botanists have counted scores of identifiable plant species in the Primavera's meadow, painted petal by petal by a man trained in a goldsmith's shop. Venus got the opposite treatment, a sea of almost nothing, chevron waves like shorthand, so that every ounce of the picture's weight lands on the figure. Botticelli could do abundance or emptiness at will. He spent his whole account of both on the same goddess.\n\nFlorence added its own legend: that the face belongs to Simonetta Vespucci, the married beauty the whole city had adored, dead of consumption at 22 a full decade before the painting. There is no document for it, only the city's wish that its two most beautiful things be the same thing. What is certain is the gold, threaded stroke by stroke through the hair and the wings and the little roses that fall with the wind, each flower dropping since 1486 and never landing.\n\nThe painting also survived its own era's regret. In 1497 the friar Savonarola ruled Florence's conscience, and his followers burned the vanities of the city in the public square: mirrors, dice, pagan pictures. Botticelli himself, old and increasingly devout, is said to have put works of his own on the fire. Venus was miles away in the country, and missed the reckoning. The friar himself went to the fire the next year, hanged and burned in the same square where the vanities had burned, before a crowd that had jeered for him and now jeered at him. She waited out three centuries in Medici storage and villa corridors until the nineteenth century decided she was the very face of the Renaissance. The Pre-Raphaelites made pilgrimages, Ruskin lectured, and the tempera goddess became the poster of a rebirth she had slept through. The wind spirits are still mid-breath. Spring still has not managed to get the cloak on her.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'c. 1486',
  historicalYear: 1486,
  historicalMonthDay: null,
  artTitle: 'The Birth of Venus',
  artCredit: 'Sandro Botticelli, c. 1486',
  imageUrl: bucketPainting('scenes/the-goddess-returns.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-goddess-returns.jpg'),
  details: [
    {
      id: 'the-wind',
      x: 0.15,
      y: 0.24,
      scale: 2.4,
      caption:
        'The wind spirit Zephyr and the woman locked around him are both blowing, hard enough that the roses travel on the breath. Every flower has a stroke of gold at its center. The wings above them are drawn over in fine gold lines.',
    },
    {
      id: 'the-face',
      x: 0.52,
      y: 0.19,
      scale: 2.8,
      caption:
        'Florence swore the face was Simonetta Vespucci, the beauty the whole city adored. She had been dead 10 years by then, and no document backs the story. The city wanted its loveliest things to be one thing.',
    },
    {
      id: 'the-shell',
      x: 0.312,
      y: 0.828,
      scale: 3.4,
      caption:
        'Her foot comes down on the rim of the scallop shell. Behind it the sea is almost nothing, just white V shapes on flat green. Botticelli spent the picture on the figure and left the water a pattern.',
    },
  ],
} satisfies MockSceneDef;

export const thePainterOfLightning = {
  slug: 'the-painter-of-lightning',
  title: 'The Painter of Lightning',
  dek: 'Toledo commissions a miracle and gets weather from another world',
  story:
    "The commission was two and a half centuries late. The legend ran like this. In 1323 the pious Don Gonzalo Ruiz, lord of Orgaz, was being buried in the little Toledo church of Santo Tomé. Saints Stephen and Augustine came down in person and laid him in the grave with their own hands. The town of Orgaz owed the church an annual payment from the dead man's will, and had stopped paying it. In 1569 the parish priest, Andrés Núñez de Madrid, won the lawsuit that forced the back payments. He spent the winnings 17 years later on a painting of the miracle, and hired the strangest painter in Spain.\n\nDoménikos Theotokópoulos had come a long way to be available in Toledo. A Cretan, he trained to paint icons in the flat gold manner of Byzantium. In Venice he remade himself on Titian's color. In Rome he reportedly offered to repaint Michelangelo's Last Judgment if they would tear it down, which made his stay there short. Then he followed the money to Spain, where King Philip II took one look at his altarpiece and declined further orders. Toledo, proud, priest-ridden and past its peak, took him in. Spain never managed his name and settled for El Greco, the Greek.\n\nWhat he delivered fills a wall of the church. The lower half is Toledo itself: a row of living gentlemen in black and white ruffs, portraits every one. They attend a funeral from 1323 with unhurried sixteenth-century faces. The two saints, in embroidered vestments, stoop under the weight of the count in his polished armor. There is no ground, no horizon, no sky, only faces and steel and cloth. Above them, the sky El Greco left out of the earthly half happens all at once. Cloud is torn open like surf, and saints stream toward a small distant Christ. In the middle an angel pushes the count's soul up through the narrow gap. The soul is painted as a faint cloud in the shape of an infant, and heaven receives him the way the world delivered him. The two halves do not share a single rule of space, and that is the sermon.\n\nThe parish got more than it contracted for and paid accordingly, in the end. The agreement had specified the essentials, the saints, the mourners, the heaven above, and when two appraisers valued the finished work at 1,200 ducats the parish balked. The Escorial had paid 800 for his Saint Maurice, the cathedral 318 for the Espolio. El Greco fought valuations his whole Spanish career on the principle that his art had no market price; this time the archbishop's council heard the argument out and ordered the parish to pay in full. The dead man himself is nearer than most visitors realize. Don Gonzalo's remains lie in the wall directly beneath the canvas, so the painted burial hovers over the actual one. The stone below the frame finishes the picture's sentence in Latin.\n\nHe signed it where only a careful visitor finds it. The signature sits on the handkerchief of the solemn boy at the front who points into the picture, his son Jorge Manuel. Beside it he wrote not the painting's date but 1578, the year the boy was born. The painting has never left the church. Toledo's gentry aged and died; the row of ruffs stayed. Three centuries later, painters hunting a way out of the academy, Cézanne and then the young Picasso among them, decided the mad Greek had arrived early rather than wrong. The mourners stand where the visitor stands. Anyone who walks in completes the row.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1586',
  historicalYear: 1586,
  historicalMonthDay: null,
  artTitle: 'The Burial of the Count of Orgaz',
  artCredit: 'El Greco, 1586',
  imageUrl: bucketPainting('scenes/the-painter-of-lightning.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-painter-of-lightning.jpg'),
  details: [
    {
      id: 'the-armor',
      x: 0.42,
      y: 0.78,
      scale: 2.6,
      caption:
        "Saint Augustine and Saint Stephen stoop over the body, one in a tall bishop's hat and one in a gold robe. The count's black armor picks up the yellow and red of both. Tiny painted saints stand in the woven gold of the robe, pictures inside the picture.",
    },
    {
      id: 'the-soul',
      x: 0.47,
      y: 0.4,
      scale: 2.6,
      caption:
        'An angel in yellow pushes the count\'s soul up through the only gap in the cloud. The soul is a pale see-through shape with the arms of a baby. Nothing here stands on anything, and the cloud is the floor.',
    },
    {
      id: 'the-boy',
      x: 0.155,
      y: 0.855,
      scale: 3.0,
      caption:
        "A boy in a stiff white collar stands at the front of the funeral with his hand out toward the body. He is Jorge Manuel, the painter's son. The handkerchief at his waist carries El Greco's signature and the date 1578, the year the boy was born.",
    },
  ],
} satisfies MockSceneDef;
export const theFriarsPorch = {
  slug: 'the-friars-porch',
  title: 'The Friar’s Porch',
  dek: 'A friar above Florence paints the oldest story under the newest building in town',
  story:
    'Around 1426 a Dominican friar in the hills above Florence painted the moment a girl learns she is going to have a child. Guido di Pietro, called Fra Giovanni by his brothers, was about 30. He lived at the convent of San Domenico in Fiesole and painted for it. The scene is the Annunciation, told in Luke: an angel, a young woman, a few words. Painters had shown it for 1,000 years. He put it on a porch.\n\nThe porch is the new thing. Slim columns, round arches, a vault painted blue and dusted with gold stars. Florence had just seen its first building like this. Brunelleschi began the arcade of the foundling hospital in 1419, and its row of arches on thin columns changed what a Florentine street looked like. Fra Angelico took the arches and made them the front of Mary’s house. The angel kneels under one arch and Mary sits under the next. The room behind her is a plain cell with a bench and a small window. Heaven arrives at an ordinary house, and the house is the newest thing in town.\n\nEverything else is the old craft at its best. The angel’s wings are gilded feather by feather. The light in the top left corner is gold leaf too, a beam that runs from the hands of God across the garden to a dove hanging in the air before Mary. Her robe is ultramarine, ground from lapis lazuli carried from the mines of Afghanistan, a pigment that cost about as much as the gold beside it. A convent paid for this. On the left, outside the porch, an angel in red drives Adam and Eve out of a garden thick with flowers. Their exit and her yes hang in the same picture, and the beam of light crosses both. A swallow sits on the iron rod that ties the arches together, the kind of rod every real arcade needed.\n\nVasari, writing a century later, said the friar prayed before he picked up a brush and never changed a stroke once it was down, believing that was how God wanted it. He wept, Vasari says, when he painted the Crucifixion. Whether or not any of that is true, the Church took it seriously. In 1982 John Paul II beatified him, and the man his brothers knew as Fra Giovanni became the Blessed Angelico, patron of artists. Masaccio was working across the valley in the same years, and the porch in this panel obeys the same rules of depth he was inventing. The friar simply kept the gold.\n\nThe panel stood in Fiesole for nearly 200 years. In 1611 the convent sold it, with the 5 small scenes from Mary’s life along its base, to the Duke of Lerma, the most powerful man at the Spanish court. He gave it to the convent of the Descalzas Reales in Madrid, and in 1861 it moved across the city to the Prado. In 2019 the museum cleaned it. Centuries of yellowed varnish came off, and the blue of the vault and the pink of the angel’s robe came back to what the friar had mixed. The swallow was still on its rod.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'c. 1426',
  historicalYear: 1426,
  historicalMonthDay: null,
  artTitle: 'The Annunciation',
  artCredit: 'Fra Angelico, c. 1426',
  imageUrl: bucketPainting('scenes/the-friars-porch.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-friars-porch.jpg'),
  details: [
    {
      id: 'the-garden',
      x: 0.13,
      y: 0.34,
      scale: 2.1,
      caption:
        'An angel in red pushes Adam and Eve out through the flowers. Eve holds her hands together and Adam covers his face. They leave the garden on the same panel where Mary says yes.',
    },
    {
      id: 'the-porch',
      x: 0.62,
      y: 0.22,
      scale: 2.2,
      caption:
        'Round arches on slim columns, a vault painted blue with gold stars, and an iron rod across the front with a swallow on it. Brunelleschi had built the first arcade like this in Florence 7 years before.',
    },
    {
      id: 'the-book',
      x: 0.8,
      y: 0.54,
      scale: 2.2,
      caption:
        'Mary’s arms are crossed on her chest and the book stays open on her knee. The blue is ultramarine, ground from lapis lazuli, and it cost about as much as the gold behind her.',
    },
  ],
} satisfies MockSceneDef;

export const theHoleInTheWall = {
  slug: 'the-hole-in-the-wall',
  title: 'The Hole in the Wall',
  dek: 'A young painter opens a fake chapel in a Florence church, ruled by geometry',
  story:
    'Sometime around 1427 a man stood in the church of Santa Maria Novella in Florence, looked at a flat plaster wall, and saw through it. Tommaso di ser Giovanni, 25 or so, was known to everyone as Masaccio. He had painted a chapel that was not there: a deep barrel vault of coffered stone, going back rank on rank. The Trinity stands inside it, and two patrons kneel on the near lip, on this side of the wall, at the edge of the painted room. There is a single point where all the lines of that vault agree to meet. It sits low, about at the eye level of a person of average height, so that the illusion locks only for someone standing where a real visitor stands. Nobody had painted a wall this way before.\n\nThe trick was borrowed from an architect. Filippo Brunelleschi, then rebuilding half of Florence, had worked out a method for putting three dimensions onto a flat surface by fixed rules, one horizon, one vanishing point, everything shrinking toward it in proportion. Masaccio took the method into paint. The coffers of the vault are laid out as if measured with a rule and a plumb line. Later students rebuilt the whole architecture from the fresco as though from a blueprint, and it stands up. The figures obey the same discipline. God the Father is a solid old man on a step, holding the crossbar of his son with both hands. Christ hangs as an actual body, ribs and slack weight, a corpse with mass, not the weightless emblem the old painters used.\n\nOne figure breaks the fourth wall. The Virgin, at the foot of the cross, turns her face out of the picture and lifts one hand toward her son. She is the only person in the scene who looks out of it and asks to be looked at. Below the whole illusion, a skeleton lies on what appears to be a stone tomb. Above it runs a line in the Florentine of the day: I was once what you are, and what I am, you also will be. The measured heaven and the geometry that took a genius to invent both sit on a shelf directly above a plain reminder that the patrons kneeling at the edge are going to end as bone.\n\nMasaccio did not live to be old himself. He was dead within a year or two of finishing the wall, at 26, in Rome, of causes nobody wrote down. A rumor of poison followed him, as rumors of poison followed most young men who died in Italy with money owed. His nickname was an insult, roughly big clumsy Tom, given because he cared nothing for his clothes or his debts and everything for the work. A century later the painters of Florence still came to Santa Maria Novella, stood where the geometry wanted them, and watched a flat wall turn into a room. Then in 1570 Vasari built a stone altar across the wall and hung his own Madonna on it, and the Trinity went behind masonry until workmen pulling the altars out in 1861 found it again. The painted skeleton stayed lost longer: it turned up in the north aisle in 1951 and was set back under the vault three years later.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'c. 1427',
  historicalYear: 1427,
  historicalMonthDay: null,
  artTitle: 'Holy Trinity',
  artCredit: 'Masaccio, c. 1427',
  imageUrl: bucketPainting('scenes/the-hole-in-the-wall.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-hole-in-the-wall.jpg'),
  details: [
    {
      id: 'the-vault',
      x: 0.5,
      y: 0.3,
      scale: 3.0,
      caption:
        'The ceiling is a rounded tunnel lined with sunken square panels. The panels shrink row by row toward one point, and that point sits at the eye level of a person standing in the church. Architects have rebuilt the whole painted room from this fresco as if from a plan, and it holds.',
    },
    {
      id: 'the-body',
      x: 0.5,
      y: 0.52,
      scale: 2.6,
      caption:
        'The ribs show, and the shoulders carry the whole load. Masaccio painted a corpse with mass in it. Above the gold halo a white dove spreads its wings flat against the Father\'s robe, and that dove is the third person of the Trinity.',
    },
    {
      id: 'the-virgin',
      x: 0.37,
      y: 0.74,
      scale: 2.8,
      caption:
        'Masaccio painted the Virgin old, and her face is lined under the hood. She is the only figure here who looks out of the picture. Her hand opens toward the body on the cross beside her.',
    },
  ],
} satisfies MockSceneDef;

export const johannesWasHere = {
  slug: 'johannes-was-here',
  title: 'Johannes Was Here',
  dek: 'In a Bruges bedroom a painter signs the wall like a witness at a wedding',
  story:
    'The room is in Bruges, the year is 1434, and two people are standing very still on a wooden floor. A man in a black hat and a fur-lined cloak holds up his right hand. A woman in a heavy green wool gown rests her hand in his. Her other hand gathers the cloth up over her stomach, the fashion of the day. That has fooled five centuries of visitors into thinking her pregnant. Between them, on the back wall, hangs a convex mirror the size of a saucer. The frame is ringed with 10 tiny roundels, each a scene from the death of Christ. They are painted small enough that reading them means leaning in past the glass. Jan van Eyck put all of this into oil paint, and oil was still close to new.\n\nPainters before him mixed pigment into egg, which dried fast and flat. Van Eyck built his pictures in thin films of oil that dried slow and clear, layer over layer. Light seems to pass into the surface and come back out. A brass chandelier reads as brass, a dog’s coat as separate hairs, an orange on the sill as a globe with weight. The oranges are not there for the color. They were a shipped luxury in the wet north, and they say, without a word, that the man in the black hat can afford the impossible in winter.\n\nThen there is the mirror, and what is in it. Its curved face gathers the whole room and throws it back small. It holds the two figures seen from behind, the light from the window, and two more people standing in the doorway where the viewer stands. One of them is perhaps the painter. Above the mirror, in the careful looping script of a legal document, van Eyck wrote on the wall: Johannes de eyck fuit hic. Jan van Eyck was here. Not painted this, not made this. Was here, in the past tense, the phrasing a witness signs into a record. One candle burns in the chandelier in full daylight, which no one has ever fully explained, and a small rough-haired dog stands between the couple’s feet and looks straight out.\n\nNobody is certain who the couple are. The old guess names a merchant of Lucca living in Bruges, Giovanni Arnolfini, and a wife. The marriage dates never quite line up, and one scholar noticed the likeliest bride had died before the paint was dry. The picture keeps its secret and offers the mirror instead, a painted eye that has been holding this room, this light, this exact afternoon, since the year the wall said the painter stood in it.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1434',
  historicalYear: 1434,
  historicalMonthDay: null,
  artTitle: 'The Arnolfini Portrait',
  artCredit: 'Jan van Eyck, 1434',
  imageUrl: bucketPainting('scenes/johannes-was-here.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/johannes-was-here.jpg'),
  details: [
    {
      id: 'the-mirror',
      x: 0.5,
      y: 0.22,
      scale: 2.6,
      caption:
        'The convex mirror gathers the whole room and two figures in the doorway. Above it the wall carries a line in a notary\'s looping hand: Johannes de eyck fuit hic, Jan van Eyck was here.',
    },
    {
      id: 'the-oath',
      x: 0.25,
      y: 0.33,
      scale: 3.4,
      caption:
        'His right hand comes up open at shoulder height. A gold ring sits on one finger, with the fur of his cloak just beneath. A hand raised like that in front of witnesses is swearing an oath.',
    },
    {
      id: 'the-gathered-gown',
      x: 0.665,
      y: 0.42,
      scale: 3.2,
      caption:
        'She takes a fistful of the heavy green wool and carries it up over her stomach. That is how the gown was worn. Saint Margaret is carved on the bedpost beside her, the saint women prayed to in childbirth.',
    },
  ],
} satisfies MockSceneDef;

export const theSweetTrap = {
  slug: 'the-sweet-trap',
  title: 'The Sweet Trap',
  dek: 'A painter drowns a cavalry battle in perspective and hangs it in a bedroom',
  story:
    'On the first of June, 1432, near a tower called San Romano, a Florentine army beat a Sienese one after eight hours in the heat. The commander who took the credit was a mercenary named Niccolò da Tolentino. That is the event. What survives of it is stranger than the fight: three long painted panels by Paolo Uccello, made a few years later. In them the battle has been stopped and pinned to the floor like an insect for study. Nothing moves. Everything obeys a grid.\n\nUccello was a perspective man to the point of illness. Vasari tells the story of his wife calling him to bed at night and Uccello staying at his desk over his vanishing points, murmuring, oh what a sweet thing this perspective is. You can see the sweetness turn into a trap in these panels. Broken lances lie on the ground not where lances would fall but where they will best show foreshortening, laid out to converge toward a distant point. A dead soldier at the bottom is laid along the line of sight and shrunk down his own length. Uccello ran the shortening the wrong way. The shoulders came out bigger than the feet, so the body reads back to front against everything else in the panel. The horses look carved. The commander sits on a white one in an enormous curling hat, calm as a man posing. Behind him the fighting climbs a hillside stitched with tiny hunters and fleeing figures the size of a fingernail.\n\nThe colors have shifted with age into something dreamlike, and the armor was once louder than it is now. Uccello laid silver leaf into the armor and gold into the harness, so that a viewer holding a candle would have seen the helmets catch fire in the dark. The silver has since oxidized to a dull grey. The panels were tall, expensive, and built to wrap a room. By 1492 an inventory of the Medici palace lists all three hanging together in a ground-floor room that had become the bedroom of Lorenzo the Magnificent. He wanted them so badly that the earlier owners were, by some accounts, leaned on to give them up. A battle scene as bedroom furniture, for the most powerful man in Florence to sleep beneath.\n\nUccello himself ended poorly. In a tax return late in life he wrote that he was old, without means to work, his wife ill, and he could no longer see. The man who had spent his nights chasing the exact rate at which the visible world shrinks toward a point went blind at the end of it. The three panels are scattered now, one in Florence, one in London, one in Paris, and no museum will lend them. The battle Uccello locked into geometry has never once been put back into the single room he built it to fill.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1 June 1432',
  historicalYear: 1432,
  historicalMonthDay: null,
  artTitle: 'The Battle of San Romano',
  artCredit: 'Paolo Uccello, c. 1438',
  imageUrl: bucketPainting('scenes/the-sweet-trap.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-sweet-trap.jpg'),
  details: [
    {
      id: 'the-commander',
      x: 0.42,
      y: 0.4,
      scale: 3.0,
      caption:
        'A commander rides at the front of the charge, and he wears a red and gold hat and no helmet. He is Niccolò da Tolentino, the one bare face in the front rank. Behind him a hedge of orange trees closes the fight off from the hillside above.',
    },
    {
      id: 'the-fallen-man',
      x: 0.28,
      y: 0.88,
      scale: 3.4,
      caption:
        'A dead knight lies on the bare pink ground with his body running away from us into the picture. Uccello shrank him down his own length and got the shortening backward. The shoulders came out bigger than the feet, so the body reads back to front.',
    },
    {
      id: 'the-broken-lances',
      x: 0.52,
      y: 0.86,
      scale: 3.4,
      caption:
        'Broken lances and a dropped helmet lie on the pink ground. The shafts all point toward one spot in the distance, which is not how anything falls.',
    },
  ],
} satisfies MockSceneDef;

export const theProfileOfUrbino = {
  slug: 'the-profile-of-urbino',
  title: 'The Profile of Urbino',
  dek: 'A duke turns his good side to us and lets the painter keep the broken nose',
  story:
    'The Duke of Urbino is showing you his left side, and there is a reason. Around 1474 Piero della Francesca painted Federico da Montefeltro in strict profile, red cap, red robe, against a pale valley of rivers and little hills that dissolve into blue distance. Federico had lost his right eye and the bridge of his nose in a tournament in 1450, when a lance came through his visor. From then on he was painted, and coined, and carved, only from the left. A later legend even had him ordering a surgeon to cut away part of the damaged nose, so his one remaining eye could see past it to the right. No record from the time says so. Piero paints exactly that face. The bridge of the nose has a deep, unnatural notch. The painter did not smooth it out.\n\nEverything else in the head is kept just as plainly. The skin is a map of a working life: moles, warts, the stubble along the jaw, the creases of a man in his fifties who had spent 30 years as a soldier for hire. Federico made his fortune as a condottiere, a mercenary captain the Italian states rented by the season, and he was reckoned one of the best and one of the few who kept his contracts. With the money he built one of the most admired courts in Europe at Urbino, and a library he meant to rival the pope’s. He filled it with hand-copied manuscripts, because he is supposed to have said a printed book would have shamed him.\n\nBehind the profile, the land goes on for miles. Piero was as much a mathematician as a painter, and he wrote books on perspective and on the geometry of solids. He built the distance here the slow way the northern painters did. Colors cool and soften as they go back, until the far hills are the same blue as the sky. Down in the valley, along the winding water, there are two boats. They are tiny pale sails at the far left edge, well below his shoulder, put there for no reason the picture needs.\n\nThe portrait is half of a pair. On the matching panel Piero painted Federico’s wife, Battista Sforza, face to face with him across the frame. On the backs of both he added small triumphal processions in the antique manner, so the whole thing folds shut like a book of two rulers. Battista was already dead when it was made, gone at 26, months after finally giving Federico a son. He turns his ruined, honest profile toward her across the gap, and she keeps her chalk-white face turned to his, the two of them fixed in the one direction the duke could safely be seen.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'c. 1474',
  historicalYear: 1474,
  historicalMonthDay: null,
  artTitle: 'Federico da Montefeltro',
  artCredit: 'Piero della Francesca, c. 1474',
  imageUrl: bucketPainting('scenes/the-profile-of-urbino.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-profile-of-urbino.jpg'),
  details: [
    {
      id: 'the-broken-nose',
      x: 0.235,
      y: 0.42,
      scale: 3.4,
      caption:
        'The bridge of the nose drops into a notch. A lance came through Federico’s visor in 1450 and took the right eye with it, and Piero painted the damage without smoothing it away.',
    },
    {
      id: 'the-remaining-eye',
      x: 0.275,
      y: 0.335,
      scale: 3.2,
      caption:
        'The one eye Federico kept, open under the tall red cap. After 1450 he was painted, coined and carved only from this side.',
    },
    {
      id: 'the-two-boats',
      x: 0.11,
      y: 0.74,
      scale: 3.2,
      caption:
        'Two boats with pale sails cross the water at the far left, the edge of the duke’s red robe closing the frame. Piero put them in a valley the portrait does not need.',
    },
  ],
} satisfies MockSceneDef;

export const theWrongSurface = {
  slug: 'the-wrong-surface',
  title: 'The Wrong Surface',
  dek: 'Leonardo paints a dinner in Milan on the wrong plaster, and it begins to die',
  story:
    'Between 1495 and 1498, on the end wall of a Milan convent’s dining hall, Leonardo da Vinci painted the moment a table stops eating. He chose the instant after Christ has said that one of the 12 men eating with him will hand him over. The sentence travels down the table in a wave. The apostles lean, recoil, point, argue, count themselves. Hands fly up and grab at neighbors. The whole long supper breaks into four knots of three men each, and every group is caught mid-reaction, as if a shout had gone off a half-second before. At the dead center, where all the painted lines of the ceiling and walls converge, is the calm face of the man who spoke.\n\nLeonardo built the room to extend the real one. The hall’s monks ate their meals at tables along the side walls, and the painted table sits at the head of them, lit as if by the real windows. The friars dined with the apostles at the far end of their own room. To do it he studied faces for months. He is recorded following men through the streets of Milan for the heads he wanted. The prior of the convent complained to the duke that the painter would stand before the wall for hours without lifting a brush, then leave. The duke, Ludovico Sforza, was paying, and Ludovico let him work.\n\nThe fault was in the surface. A true fresco is painted fast into wet plaster and binds into the wall as it dries, which fixes the color but forbids second thoughts, and Leonardo could not work fast or without second thoughts. So he invented a method, laying oil and tempera onto dry plaster he had sealed, which let him blend and revise the way he liked. It did not hold. Within his own lifetime the paint began to lift and bloom with damp. A visitor in 1517 found it already starting to decay, and within a few more decades Vasari looked at it and saw little but a blur of stains. The most studied wall in Europe started dying almost as soon as it was finished.\n\nAfter that the room did the rest. In 1652 someone cut a door through the bottom of the wall for the convenience of the kitchen, and took Christ’s feet with it. Napoleon’s soldiers were quartered there and used the hall as a stable. In 1943 a bomb brought the roof down and left the painted wall standing under sandbags in the open weather. It has been rescued, repainted, argued over, and scraped back again more times than anyone can cleanly count. Judas is still there, elbow on the cloth, clutching his little bag, the one face Leonardo pushed back into shadow while the argument breaks over his head.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'c. 1495',
  historicalYear: 1495,
  historicalMonthDay: null,
  artTitle: 'The Last Supper',
  artCredit: 'Leonardo da Vinci, 1495–1498',
  imageUrl: bucketPainting('scenes/the-wrong-surface.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-wrong-surface.jpg'),
  details: [
    {
      id: 'the-center',
      x: 0.5,
      y: 0.48,
      scale: 2.4,
      caption:
        'Christ sits at the center against the far doorway. Every painted line of the ceiling and the wall panels meets there. Restorers found a pinhole in the plaster at his right temple, where Leonardo anchored the strings he ruled the room with.',
    },
    {
      id: 'judas-in-shadow',
      x: 0.285,
      y: 0.56,
      scale: 3.2,
      caption:
        'Judas throws himself back with his elbow on the cloth. His is the one face Leonardo kept out of the light. Peter leans past his shoulder to speak into John’s ear, and a knife hangs low in his other hand.',
    },
    {
      id: 'the-far-group',
      x: 0.86,
      y: 0.52,
      scale: 2.6,
      caption:
        'At the far end of the table Matthew throws both arms back toward the center. Thaddeus and Simon lean in and work it out between themselves. They are the last men in the room to get the news.',
    },
  ],
} satisfies MockSceneDef;

export const theFriarInTheSquare = {
  slug: 'the-friar-in-the-square',
  title: 'The Friar in the Square',
  dek: 'The preacher who burned Florence’s luxuries is burned in the same square',
  story:
    'For four years Florence was run by a monk who owned nothing. Girolamo Savonarola was a Dominican friar with a heavy jaw and a huge voice. Since the late 1480s he had been preaching in the city that a punishment was coming from God. Then the French army marched into Italy in 1494 and the ruling Medici fled, and it looked as if he had called it. The friar stepped into the gap. He never held an office. He preached, and the government of Florence bent to what he preached. For a while the most sophisticated city in Europe took its orders from a man in a coarse robe who told it that God was disgusted with its vanity.\n\nHe organized the disgust. Bands of boys went house to house collecting the objects Savonarola named as snares: mirrors, cosmetics, fine dresses, playing cards, lutes, wigs, and the paintings and books that he judged lewd or pagan. In February of 1497, and again the year after, the collected goods were heaped on a scaffold in the Piazza della Signoria and set alight. This was the bonfire of the vanities. By some accounts the painter Botticelli, then turning devout, carried work of his own to the flames. Merchants who wanted to buy the pyre whole were refused. It had to burn.\n\nThe enemies stacked up as fast as the vanities. The friar had denounced the Borgia pope, Alexander the Sixth, as corrupt, which was true and unwise; the pope excommunicated him, and the powerful Florentine families he had lectured wanted their city back. A rival order challenged him to prove his mission by walking through fire. The ordeal was arranged in the Piazza in April 1498, and crowds packed in to watch a friar step into flame. Then it rained, and the two sides argued over the terms until the whole thing was called off. The crowd had come for a miracle and gone home wet and cheated, and their mood turned.\n\nWithin weeks he was arrested, tortured until he signed a confession, and condemned. On 23 May 1498 Savonarola and two fellow friars were hanged on a high scaffold in the Piazza della Signoria, on the same spot where the vanities had burned. A fire was lit beneath the bodies so that nothing would be left to keep as a relic. The ashes were carted to the Arno and thrown in. The painting here is a later imagining, made in 1879 by Ludwig von Langenmantel. It shows the friar in mid-sermon, with women laying their finery in a heap below him. Richer men in velvet caps watch from the side. They are the ones who would still be standing in the square when it was his turn.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '23 May 1498',
  historicalYear: 1498,
  historicalMonthDay: toMonthDay('05-23'),
  artTitle: 'Savonarola Preaching Against Prodigality',
  artCredit: 'Ludwig von Langenmantel, 1879',
  imageUrl: bucketPainting('scenes/the-friar-in-the-square.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-friar-in-the-square.jpg'),
  details: [
    {
      id: 'the-preacher',
      x: 0.31,
      y: 0.36,
      scale: 2.4,
      caption:
        'Savonarola preaches in the black cloak and white robe of a Dominican friar. He has one arm flung out, and a rosary swings from his other fist. He held no office in Florence, and for four years the government did what he told it.',
    },
    {
      id: 'the-surrendered-finery',
      x: 0.21,
      y: 0.78,
      scale: 2.8,
      caption:
        'A gold jug, an incense burner and a rope of pearls sit on the ground. A book lies face up on a gilded dish beside them. Two women bow their heads over the pile they have just added to.',
    },
    {
      id: 'the-watching-men',
      x: 0.88,
      y: 0.48,
      scale: 3.0,
      caption:
        'Velvet caps fill the rich end of the crowd, and one man wears the scarlet biretta of a churchman. A young man rests a finger against his chin. Nobody in this corner has put anything on the pile.',
    },
  ],
} satisfies MockSceneDef;
export const theSilkMerchantsWife = {
  slug: 'the-silk-merchants-wife',
  title: 'The Silk Merchant’s Wife',
  dek: 'A Florentine housewife sits for a portrait her painter will never hand over',
  story:
    'In 1503 a Florentine silk dealer named Francesco del Giocondo hired the busiest man in the city to paint his wife. Her name was Lisa Gherardini, she was about 24, and she had lately given the household a son. The commission was ordinary: a wife, a new house, a picture to mark it. The painter was Leonardo da Vinci, who at that point had finished almost nothing, walked away from more work than he completed, and was famous for it. He took the panel, a single plank of poplar 77 centimeters by 53, and started her face.\n\nHe never gave her back. Francesco paid, presumably, or expected to; the picture stayed with Leonardo. He carried it from Florence to Milan, then over the Alps to France. King François I had given the old man a manor house at Amboise, and the title of first painter, engineer and architect to the king. Leonardo kept opening the box. He worked the face in layers so thin they leave no visible brushstrokes at all. Dozens of near-transparent glazes build the shadow at the corner of her mouth and the softness at her eyes. The technique is called sfumato, from the word for smoke. He was still adjusting her 16 years after he began. He died in France in 1519 with the panel among his things, and the king bought it for the royal collection, which is how a Tuscan housewife ended up in Paris.\n\nGiorgio Vasari, writing his lives of the painters decades later and probably never having seen the thing, described eyebrows on her, hair by hair, that the painting does not have. Either he invented them or they have vanished into the varnish; nobody agrees. He also named her, from her husband, La Gioconda, which is why the French still call her La Joconde. For nearly 400 years she hung in royal palaces and then a public museum, admired and unremarkable, one great portrait among many.\n\nThen on a Monday in August 1911, a former Louvre handyman named Vincenzo Peruggia walked out with her under his smock. He kept her in a Paris apartment for two years and waited for the noise to die. In 1913 he took a train to Florence to sell her to a dealer, believing he was returning her to Italy where she belonged. The dealer called the police. By the time she came home to the Louvre, her empty frame had been photographed for every newspaper on earth. Crowds came to see the space where she had been, then the painting when it returned. The theft made her the most famous face in the world. She is still there behind glass, half a smile finished by a man who could not stop touching it, watching the room the way she has watched every room for 500 years.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1503',
  historicalYear: 1503,
  historicalMonthDay: null,
  artTitle: 'Mona Lisa',
  artCredit: 'Leonardo da Vinci, c. 1503–1506',
  imageUrl: bucketPainting('scenes/the-silk-merchants-wife.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-silk-merchants-wife.jpg'),
  details: [
    {
      id: 'the-smile',
      x: 0.45,
      y: 0.31,
      scale: 3.2,
      caption:
        'The mouth is built from dozens of paint layers so thin the panel shows no brushstroke at all. Its corners dissolve into the shadow of the cheek. Leonardo was still working on this face 16 years after he started it.',
    },
    {
      id: 'the-left-country',
      x: 0.17,
      y: 0.24,
      scale: 3.4,
      caption:
        'Blue cliffs climb into haze on the left of the panel, past the edge of her hair. The color drains out of them as they go back, until the farthest ridge is the same green as the sky.',
    },
    {
      id: 'the-winding-road',
      x: 0.83,
      y: 0.44,
      scale: 3.4,
      caption:
        'On the right, a pale track winds down through the rock and disappears where her shoulder cuts across it. Nothing travels on it.',
    },
  ],
} satisfies MockSceneDef;

export const onHisBack = {
  slug: 'on-his-back',
  title: 'On His Back',
  dek: 'A sculptor who hates painting is ordered up a ladder for four years',
  story:
    'In the spring of 1508 Pope Julius II ordered Michelangelo Buonarroti to paint the ceiling of his uncle’s chapel, and Michelangelo did everything he could to refuse. He was 33. He thought of himself as a sculptor and said so at every chance. He suspected the whole commission was a trap laid by rivals who wanted him to fail at a thing he had never done. Julius was not a pope you refused. Contemporaries called him il papa terribile, the terrible pope, a man who led armies in armor and rebuilt Rome by force of temper. Michelangelo took the job, then fired the assistants brought from Florence and did nearly all of it himself.\n\nHe did not lie on his back, whatever the story says. He built a wooden scaffold that arched below the vault and stood on it, head tipped back, arm above him, for the better part of four years. The posture wrecked him. He wrote a poem to a friend, Giovanni da Pistoia. His beard pointed at heaven, he complained, his skin stretched long in front and bunched behind, and paint dripped steadily onto his face. In the margin he sketched a cartoon of himself, bent like a Syrian bow. The plaster fought him too. Early on it grew mold, and he had to be taught a new recipe that would take the Roman damp.\n\nWhat he put up there is more than 300 figures across 500 square meters: the making of the world, the flood, nine scenes from Genesis ringed with prophets and sibyls and nudes. The one everyone knows is the creation of Adam. God comes in from the right, borne on a red cloak crowded with figures, his arm flung out; Adam reclines on the earth at the left, just waking, lifting a slack hand toward him. Their fingers do not touch. Michelangelo left a gap of bare plaster between them, a hair of nothing, and that gap is the whole subject. Some anatomists have pointed out that the shape of the cloak billowing around God matches a cross-section of the human brain. It may be a coincidence and it may not. Michelangelo dissected corpses by candlelight for years and knew exactly what a brain looked like.\n\nThe ceiling was unveiled at the end of 1512. Julius lived only a few months longer. Michelangelo, who had begged not to do it, spent the rest of his long life being asked to do it again. The pigment he laid into wet plaster is still up there: the waking man, and the finger’s width of distance he refused to close.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1508',
  historicalYear: 1508,
  historicalMonthDay: null,
  artTitle: 'The Creation of Adam',
  artCredit: 'Michelangelo, 1508–1512',
  imageUrl: bucketPainting('scenes/on-his-back.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/on-his-back.jpg'),
  details: [
    {
      id: 'the-gap',
      x: 0.412,
      y: 0.447,
      scale: 3.4,
      caption:
        'Adam’s hand and God’s stop short of each other. Michelangelo left a finger’s width of plaster between the fingertips, and that gap is the subject of the panel.',
    },
    {
      id: 'the-first-man',
      x: 0.245,
      y: 0.53,
      scale: 2.5,
      caption:
        'Adam props himself on one arm on the bare hillside, half awake. His left hand falls open toward the fingertip coming in at the right. The body is finished, but nothing has entered it yet.',
    },
    {
      id: 'the-red-cloak',
      x: 0.75,
      y: 0.35,
      scale: 2.4,
      caption:
        'God comes in wrapped in a dark red cloak with a crowd folded into it. Children press against his side, and a woman under his left arm looks out toward Adam. The whole load is in the air and moving left.',
    },
  ],
} satisfies MockSceneDef;

export const theRoomOfThinkers = {
  slug: 'the-room-of-thinkers',
  title: 'The Room of Thinkers',
  dek: 'A young painter fills a pope’s library with every philosopher at once',
  story:
    'Raffaello Sanzio was not yet 30 when he got the walls of the pope’s private library in the Vatican and license to paint whatever suited a place of books. He is remembered as Raphael, and on one wall he assembled the entire ancient mind in a single marble hall. More than 50 philosophers, mathematicians and astronomers stand and argue under a vault that echoes the new Saint Peter’s then rising a few hundred meters away. It has been called The School of Athens ever since, though nobody in the picture ever met.\n\nHe put the two who mattered most dead center, under the last arch, small against the sky. Plato, old and white-bearded, points one finger straight up, toward the world of ideas he believed was the only real one. Beside him Aristotle, younger, holds his hand out flat and low, palm to the earth, insisting the truth is down here where you can measure it. The whole floor plan bends around that one disagreement, a raised hand and a lowered one. Raphael gave Plato the face of Leonardo da Vinci, then in his fifties and the most admired living artist, a private joke that only the court would catch.\n\nThe joke goes deeper. Slumped alone on the front steps, elbow on a block of stone, brooding in a stonecutter’s tunic, sits a single glowering figure who belongs to no school and matches no ancient description. He was added late, after the rest was done, painted in the heavier, more muscular manner of the ceiling next door, and he wears the face of Michelangelo. Raphael had crept into the Sistine Chapel and seen what the older man was doing up his ladder. He answered it by planting Michelangelo in his own fresco as a loner too absorbed to talk to anyone. Down at the lower left another group crowds around a bald man writing in a book, thought to be Pythagoras. On the right a bent figure draws with a compass, and he has the features of the architect Bramante.\n\nRaphael signed the thing by walking into it. At the far right edge, half-turned out of a knot of astronomers, a young man in a dark cap looks out of the fresco, calm, turned away from every argument in the room. That is Raphael himself, standing among the geniuses he loved, aged 28. He finished the room in 1511 and died nine years later on his own birthday. The philosophers keep arguing on the wall of a working papal office, the finger up and the hand down, no closer to agreeing than the day he left them.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1511',
  historicalYear: 1511,
  historicalMonthDay: null,
  artTitle: 'The School of Athens',
  artCredit: 'Raphael, 1509–1511',
  imageUrl: bucketPainting('scenes/the-room-of-thinkers.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-room-of-thinkers.jpg'),
  details: [
    {
      id: 'plato-and-aristotle',
      x: 0.515,
      y: 0.5,
      scale: 3.2,
      caption:
        'Two men come forward under the arch. Plato points one finger up for the world of ideas, and Aristotle holds his hand out flat over the floor. Raphael painted Plato with the face of Leonardo da Vinci.',
    },
    {
      id: 'the-loner',
      x: 0.452,
      y: 0.688,
      scale: 3.2,
      caption:
        'One man sits apart on the steps in heavy boots with his elbow on a block of marble. He writes and talks to nobody, and he has the face of Michelangelo. Raphael added him after the rest of the wall was finished, in the heavier paint of the chapel next door.',
    },
    {
      id: 'the-painter-himself',
      x: 0.878,
      y: 0.558,
      scale: 3.2,
      caption:
        'Two men hold up globes at the edge of the fresco, one with stars on it and one with the Earth. Beside them a young man in a black cap turns out of the group and looks straight out of the wall. He is Raphael, 28 years old, in his own painting.',
    },
  ],
} satisfies MockSceneDef;

export const hereIStand = {
  slug: 'here-i-stand',
  title: 'Here I Stand',
  dek: 'A monk facing an emperor refuses to take back a single word',
  story:
    'On 18 April 1521 a monk stood in a crowded hall in the town of Worms and was ordered to disown his own books. In front of him sat Charles V, ruler of an empire that ran from Spain to the edge of Hungary, 21 years old, master of more land than any European since Charlemagne. The monk was Martin Luther, a professor of theology from Wittenberg, and his writings were stacked on a table so he could see them. The question put to him was simple. Would he recant what he had written, yes or no.\n\nHe had asked for a day to think, which he got, and came back the next evening. He would not recant, he said, unless he could be convinced by scripture or plain reason, because to act against conscience was neither safe nor honest. The transcripts record him ending, God help me. Amen. The famous line, here I stand, I can do no other, does not appear in the earliest accounts; a note-taker seems to have added it soon after, and it stuck because it fit the man. Charles was unmoved. Within weeks he signed the Edict of Worms declaring Luther an outlaw whom anyone might kill without penalty. On the road home Luther was seized by masked riders, his own protector’s men, and hidden in a castle for the best part of a year.\n\nWhat kept him alive was a machine. In the autumn of 1517 he had written 95 arguments against the selling of pardons for sin. Printers copied them, and within weeks they were being read across the German lands, then translated and read further. A single monk’s complaint had become, by the time he reached Worms, a movement no emperor could recall, because you cannot un-print a thing once the presses have it. The German scripture he translated in that castle sold out its first run almost at once.\n\nThe scene here was painted more than three centuries later by Anton von Werner, a German history painter. He shaped it to the arch of the school hall in Kiel he was decorating. That mural was 3.5 meters high and 7 across. It burned in an air raid in 1944. Von Werner built the faces from old engravings. The churchmen bank along the left, the archbishop of Mainz in a gold cope with his back turned, and Luther stands alone on the bare boards with one hand on his chest. The double-headed eagle of the empire hangs in the window above them all. Along the very bottom, added like a banner, runs the sentence Luther probably never quite said: here I stand, I can do no other, God help me, Amen. The eagle is still an empire. The monk in the middle of the room has already won and does not know it yet.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '18 April 1521',
  historicalYear: 1521,
  historicalMonthDay: toMonthDay('04-18'),
  artTitle: 'Luther at the Diet of Worms',
  artCredit: 'Anton von Werner, 1870',
  imageUrl: bucketPainting('scenes/here-i-stand.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/here-i-stand.jpg'),
  details: [
    {
      id: 'the-monk',
      x: 0.62,
      y: 0.55,
      scale: 2.6,
      caption:
        'Luther stands on the open floor in a black habit with one hand flat on his chest. He will not take back a word. He was 37, and within weeks the Edict of Worms would make him an outlaw any man could kill without penalty.',
    },
    {
      id: 'the-young-emperor',
      x: 0.329,
      y: 0.683,
      scale: 2.6,
      caption:
        'The man with his back to the room wears a gold cope, a churchman\'s cloak. He is Albrecht of Brandenburg, archbishop of Mainz. Luther wrote the 95 theses against the sale of pardons Albrecht was running, and posted him a copy.',
    },
    {
      id: 'the-empire-in-the-window',
      x: 0.535,
      y: 0.155,
      scale: 3.2,
      caption:
        'The double-headed eagle of the Holy Roman Empire hangs on a gold panel between two leaded windows, above every head in the hall. Charles V was 21 and ruled from Spain to Hungary under that badge. Luther had just told him no.',
    },
  ],
} satisfies MockSceneDef;

export const theBookThatMovedTheEarth = {
  slug: 'the-book-that-moved-the-earth',
  title: 'The Book That Moved the Earth',
  dek: 'A cathedral canon publishes the sun at the center as he lies dying',
  story:
    'For most of his life Nicolaus Copernicus kept the biggest idea in Europe in a drawer. He was a church canon at Frombork on the cold Baltic coast of Poland, a lawyer and doctor and administrator who did his astronomy on the side, from a tower in the cathedral wall. Somewhere around 1510 he had worked out that the numbers came out simpler with the sun at the center instead of the Earth. The Earth became just one more planet swinging around it, turning once a day. He wrote it up. Then, for roughly 30 years, he mostly declined to publish, wary of ridicule and of the Church.\n\nA young Lutheran mathematician named Rheticus finally pried it loose. He traveled all the way to Frombork, stayed two years, and talked the old man into letting the manuscript go to a printer in Nuremberg. It came off the press in 1543 as De revolutionibus orbium coelestium, on the revolutions of the heavenly spheres. It was dedicated to the pope: six books of geometry that took the ground out from under the human race. Someone, an editor named Osiander, slipped an unsigned note into the front claiming the whole thing was only a calculating trick and need not be believed. He did it without permission. Rheticus was furious and scratched the note out of his own copy in red.\n\nCopernicus did not live to fight about it. The story, half legend, is that his fellow clergy laid the first printed copy in his hands on the day he died, in the spring of 1543. In the story he woke enough to see it, and then was gone. Whether he truly saw it, nobody can prove. What is certain is that he died just as the book appeared and never had to answer for it. It would sit on the Church’s list of forbidden books decades later, long after he was dust.\n\nThe Polish painter Jan Matejko began the canvas in 1871, for the 400th anniversary of Copernicus’s birth, and called it Conversation with God. Poles bought it afterward by public subscription for the great hall of the university in Kraków. He set Copernicus outdoors on a stone terrace at night, alone, instruments scattered around him, the spires of Frombork cathedral black against the stars. Propped on the boards at his feet, lit as if from inside, stands his own diagram of the new heavens: neat rings of orbit around a small circle lettered Sol. He is not calculating. He has stopped, thrown his head back, and is staring straight up at the thing he has just moved. He was a churchman who rearranged the heavens, then slipped out of the argument by dying at the exact moment his book came alive.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1543',
  historicalYear: 1543,
  historicalMonthDay: null,
  artTitle: 'Astronomer Copernicus',
  artCredit: 'Jan Matejko, 1873',
  imageUrl: bucketPainting('scenes/the-book-that-moved-the-earth.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-book-that-moved-the-earth.jpg'),
  details: [
    {
      id: 'the-upward-look',
      x: 0.5,
      y: 0.27,
      scale: 2.6,
      caption:
        'Copernicus tips his head back and stares up. His left hand is open and empty at shoulder height. Matejko painted him after the discovery rather than during it, and he looks at what he has done.',
    },
    {
      id: 'the-new-heavens',
      x: 0.355,
      y: 0.645,
      scale: 3.2,
      caption:
        'His diagram of the heavens is propped where the light finds it. Rings of orbit run around a small circle lettered Sol, the sun. The Earth is the fifth ring, counting inward from the stars. It sits between Mars and Venus and carries the moon with it.',
    },
    {
      id: 'the-cathedral',
      x: 0.21,
      y: 0.27,
      scale: 3.0,
      caption:
        'Two brick towers rise under dark spires, with stars showing in the gap between them. Copernicus\'s own open hand rests at the edge of the low wall. He was a canon at Frombork and took his measurements from a tower in the cathedral wall.',
    },
  ],
} satisfies MockSceneDef;

export const theMorningBellOfParis = {
  slug: 'the-morning-bell-of-paris',
  title: 'The Morning Bell of Paris',
  dek: 'A wedding fills the city with Protestants, then a bell rings at dawn',
  story:
    'On 24 August 1572, before daylight, a church bell rang in Paris and the killing began. Six days earlier the city had hosted a wedding meant to knit France back together. Marguerite de Valois, sister of the Catholic king, had married Henri of Navarre, leader of the Protestant Huguenots. Thousands of prominent Protestants were in town to celebrate. Among them was Admiral Gaspard de Coligny, the most powerful Huguenot in the kingdom and a man the king had begun to trust. Two days before the bell, someone shot Coligny in the street from a window. The gun wounded him but did not kill him.\n\nWhat the wound did was panic the court into finishing the job on everyone. In the dark of St Bartholomew’s Day, soldiers under Henri, Duke of Guise, broke into Coligny’s lodging and killed him in his bedroom. Guise, waiting below, called up to ask if it was done, and ordered the body thrown out of the window into the street. The crowd took it from there, cutting off the head and the hands and dragging what was left through Paris. That was the signal, more or less, and the rest of the city followed. Neighbors killed neighbors they had known for years. Roughly 3,000 people died in Paris in a few days, and thousands more as the violence spread to other towns through the autumn.\n\nFrançois Dubois was a Protestant from Amiens who got out of France alive, and years afterward he laid the whole morning across one panel for a fellow refugee, a banker from Lyon. Whether he saw any of it himself is unknown. What he painted is the entire massacre at once, a city square strewn with the dead and the dying while the well-dressed do the killing. On the corner of a fine stone house, Coligny appears twice, once being tipped from an upper window in a white shirt, once as the headless body on the ground below. Off to the left a cart is loaded with corpses beside a church, and on the green hill behind it riders run people down. On the right, men stagger away under looted chests, because a massacre is also a robbery.\n\nDubois signed nothing sentimental into it. He painted the plunder and the small casual murders in the same even daylight as the great crime, dogs sniffing at the bodies, hats knocked into the dirt. At the back, tradition says, the queen mother Catherine de’ Medici comes out to inspect the results. It is the only painting by Dubois that survives. He spent the rest of his life in Geneva and died there on 24 August 1584, 12 years to the day after the bell, and the panel hangs now in Lausanne.',
  eraId: toEraId('renaissance'),
  historicalDateLabel: '24 August 1572',
  historicalYear: 1572,
  historicalMonthDay: toMonthDay('08-24'),
  artTitle: 'The St Bartholomew’s Day Massacre',
  artCredit: 'François Dubois, c. 1572–1584',
  imageUrl: bucketPainting('scenes/the-morning-bell-of-paris.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-morning-bell-of-paris.jpg'),
  details: [
    {
      id: 'coligny-at-the-window',
      x: 0.675,
      y: 0.3,
      scale: 3.2,
      caption:
        'Two men push a body in a white shirt head first over a window ledge. This is Gaspard de Coligny, the admiral of France. They killed him in his bedroom upstairs, and the crowd below took the head and the hands.',
    },
    {
      id: 'the-square',
      x: 0.44,
      y: 0.72,
      scale: 2.6,
      caption:
        'The killing goes on in daylight, out in the open. A stray dog moves between the bodies. Roughly 3,000 people died in Paris in a few days, and the men doing the work are dressed for an ordinary morning.',
    },
    {
      id: 'the-plunder',
      x: 0.82,
      y: 0.56,
      scale: 2.8,
      caption:
        'On the right side of the square the goods are going out. A man carries a bundle on his back, a strapped chest waits on the ground, and stripped bodies lie where they fell. Dubois painted the robbery in the same even light as the murders.',
    },
  ],
} satisfies MockSceneDef;

export const thePrizeForFirstLight = {
  slug: 'the-prize-for-first-light',
  title: 'The Prize for First Light',
  dek: 'Land at two in the morning, and a reward with one claimant too many',
  story:
    "The crossing from the Canaries took 33 days, which was 20 more than the crews had signed up for in their heads. Columbus kept two logs. One was private, with his real guesses. The other was public, and it understated each day's run so the men would not despair at the distance from home. By a joke of dead reckoning, the falsified figures turned out to be the more accurate. By early October the Santa María, Pinta and Niña were sailing through floating branches, land birds, a carved stick. The monarchs' promise hung over every masthead: 10,000 maravedís a year, for life, to the first man who saw land.\n\nAt two in the morning on 12 October a sailor on the Pinta's forecastle, Rodrigo de Triana, saw white sand cliffs in the moonlight and shouted, and the Pinta fired her gun. When the fleet compared notes, the admiral remembered a light of his own, seen four hours earlier, like a small wax candle rising and falling. He had mentioned it quietly to a steward at the time. The annuity went to Columbus, every year, for the rest of his life. The chroniclers say Rodrigo de Triana got a silk doublet and a grievance; one tradition, probably too neat, has him quitting Spain for Africa and another faith over it.\n\nAt dawn they went ashore on an island its people called Guanahani. The admiral renamed it San Salvador, planted the royal standard, and had the notary write down the taking of possession. The fleet's lawyers were the one department that never slept. The Taíno came down to the beach unarmed, swam out with parrots and cotton thread, traded anything for a hawk's bell. Columbus wrote it all down that night with an appraiser's eye: how open they were, how quickly they understood, how easily, with 50 men, they could all be made to serve. Both futures of the next four centuries are in that one journal entry, and he wrote it on the first day.\n\nDióscoro Puebla painted the landing in 1862 for the Spanish state, which wanted its founding morning in the grand manner. The admiral kneels in red under the standard, eyes up. The expedition's banner with its green cross goes up over the crowd on the right. A friar raises a crucifix over ground that had gotten along without one, and sailors kiss the rock. In the shade at the left edge, where the composition keeps its conscience, the Taíno watch from the trees.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '12 October 1492',
  historicalYear: 1492,
  historicalMonthDay: toMonthDay('10-12'),
  artTitle: 'The First Landing of Columbus',
  artCredit: 'Dióscoro Puebla, 1862',
  imageUrl: bucketPainting('scenes/the-prize-for-first-light.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-prize-for-first-light.jpg'),
  details: [
    {
      id: 'the-admiral',
      x: 0.47,
      y: 0.44,
      scale: 2.4,
      caption:
        'Columbus kneels in red under the royal standard with his eyes up. The 10,000-maravedí annuity for first sight of land ended here and not on the Pinta\'s forecastle.',
    },
    {
      id: 'the-watchers',
      x: 0.196,
      y: 0.312,
      scale: 3.4,
      caption:
        'The friar reaches toward the Taíno standing back in the trees, cross up in his other hand. No priest sailed on the first voyage; Puebla put one on the beach anyway.',
    },
    {
      id: 'the-kissed-ground',
      x: 0.68,
      y: 0.85,
      scale: 2.4,
      caption:
        'A sailor lies flat on the rock with both hands on it while two men grip hands above him. The crossing had run 33 days, and the log the crew was shown had shaved leagues off every one.',
    },
  ],
} satisfies MockSceneDef;

export const inTheArmsOfTheKing = {
  slug: 'in-the-arms-of-the-king',
  title: 'In the Arms of the King',
  dek: 'Vasari gives the dying painter a king for a pillow',
  story:
    "Leonardo spent his last three years in France because the king of France collected him. Francis I gave him a manor at Clos Lucé, a pension of a thousand crowns, and a title with room for everything: First Painter, Engineer and Architect to the King. No large commissions were expected. His right hand was partly paralyzed by then. He organized court festivals instead, and built a mechanical lion that walked the length of a hall and opened its chest to spill lilies at the king's feet. He kept three paintings in his rooms that he would not be parted from. One of them was the portrait of a Florentine silk merchant's wife. The king visited down a private lane, some say a tunnel, and talked with him for hours.\n\nHe died at Clos Lucé on 2 May 1519, 67 years old, having tidied his affairs like a notary's son: will made, masses arranged, the manuscripts and paintings left to his companion Francesco Melzi. Vasari, writing 30 years later, gave the death its immortal staging. The king happens to enter. The old man raises himself in bed to apologize for having offended God and men by not working at his art as he should have. Then came the seizure, and the head of Leonardo going still in the arms of Francis. The court registers make trouble for the scene, placing the king's household at Saint-Germain-en-Laye, two days' ride away, the following morning. Registers can be signed in a king's absence; so can legends.\n\nWhat is certain is what the king kept. The paintings from the dead man's rooms passed into the royal collection. That is the entire reason a Florentine portrait called the Mona Lisa has spent five centuries in France, and hangs in the Louvre and not in Florence. Francis said, in a line reported secondhand years on, that no man had ever known as much as Leonardo. Kings' compliments are cheap, but he had backed this one with a pension.\n\nIngres painted Vasari's version in 1818, exactly as literature and not as evidence. The king cradles the great head like a father, the pillow white, the room red. A courtier throws both arms wide to hold the room off, and a cardinal rests a hand on a page's shoulder. He was in Rome when he made it, working for the comte de Blacas, the French ambassador there, on a canvas 40 centimetres tall. France had just lost an empire and was shopping in its own past for scenes worth believing. This one has never gone out of stock.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '2 May 1519',
  historicalYear: 1519,
  historicalMonthDay: toMonthDay('05-02'),
  artTitle: 'Francis I Receives the Last Breaths of Leonardo da Vinci',
  artCredit: 'Jean-Auguste-Dominique Ingres, 1818',
  imageUrl: bucketPainting('scenes/in-the-arms-of-the-king.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/in-the-arms-of-the-king.jpg'),
  details: [
    {
      id: 'the-embrace',
      x: 0.32,
      y: 0.45,
      scale: 2.4,
      caption:
        "Francis I leans across the bed and takes Leonardo's head in his hands. The court records put the king at Saint-Germain-en-Laye, two days' ride away. Vasari put him here, and here he stays.",
    },
    {
      id: 'the-reaching-hand',
      x: 0.72,
      y: 0.42,
      scale: 2.6,
      caption:
        'A courtier throws both arms wide to hold the room off. At the right a cardinal keeps a ringed hand on the shoulder of a page who has laid his gloves over the chair back.',
    },
    {
      id: 'the-prayer',
      x: 0.09,
      y: 0.56,
      scale: 3.2,
      caption:
        'A priest holds his hands together beside an open mass book and a gilt crucifix. Leonardo\'s will had already paid for 30 low masses and 60 poor men to carry torches.',
    },
  ],
} satisfies MockSceneDef;

export const thePriceOfTheCity = {
  slug: 'the-price-of-the-city',
  title: 'The Price of the City',
  dek: 'An unpaid army arrives at the richest city it can find',
  story:
    "The army that came over the walls of Rome at dawn on 6 May 1527 belonged, on paper, to the Holy Roman Emperor; in practice it belonged to nobody, which was the whole problem. Some 30,000 men, Spanish veterans, Italian mercenaries, and German landsknechts of mostly Lutheran conviction, had marched south all winter without pay, and their commanders had promised them the one currency left. In the first assault, in fog, their general the Duke of Bourbon took an arquebus ball and died at the foot of the wall. The goldsmith Benvenuto Cellini spent the rest of his life claiming the shot, which tells you what kind of century it was. After that there was no one left with the authority to say stop.\n\nThe Swiss Guard said it anyway, once, on the steps of St Peter's. Of the 189 guards, 147 died where they stood. They bought the pope the minutes he needed to run the raised stone corridor to Castel Sant'Angelo, with the enemy shooting at his white robe. Then the city was opened like a strongbox. Churches were stripped to the reliquaries, the cases that held their relics. Ransoms were priced door by door and collected with fire. Nuns and citizens learned what an army does when the sermon it has heard for years is that Rome is the whore of Babylon. Landsknechts held a mock conclave and proclaimed Luther pope; someone scratched LUTHER into a fresco by Raphael with a pike point. The Stanze became stables. Plague arrived within the month to finish the arithmetic, and a city of 55,000 was, by winter, a city of about 10,000.\n\nClement VII watched it from his castle, then paid 400,000 ducats he raised partly by melting his own tiaras, and grew a beard of mourning that every pope for a century imitated. Historians who like clean edges close the High Renaissance on that May morning: the artists scattered to Venice and Mantua and Fontainebleau and took the style with them. And one hostage clause reached further than any of it. With the pope captive to the emperor, an English king's petition to annul his marriage to the emperor's aunt was never going to be granted, and the refusal cost Rome the allegiance of England entire.\n\nAmérigo painted the sack in 1887 and took a first-class medal for it at the national exhibition that year; the state bought the canvas and sent it to Valencia, where it still hangs. He put the whole event in one church interior. A soldier in a bishop's cope raises the chalice in a toast. A nun is hauled backward over the choir rail, and the defenders lie dead on the altar steps. In the middle of it a boy in a green doublet wears a looted pectoral cross round his neck, because armies bring their children everywhere.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '6 May 1527',
  historicalYear: 1527,
  historicalMonthDay: toMonthDay('05-06'),
  artTitle: 'The Sack of Rome',
  artCredit: 'Francisco Javier Amérigo, 1887',
  imageUrl: bucketPainting('scenes/the-price-of-the-city.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-price-of-the-city.jpg'),
  details: [
    {
      id: 'the-toast',
      x: 0.36,
      y: 0.35,
      scale: 2.4,
      caption:
        'A soldier in a stolen mitre and cope lifts the church\'s own chalice and shouts. The army had marched south all winter without pay; this was the payroll.',
    },
    {
      id: 'the-nun',
      x: 0.67,
      y: 0.4,
      scale: 2.8,
      caption:
        'Two soldiers bend a nun backward over the choir stall until her head lies flat on the wood. The saints carved into the panel under her go on facing out.',
    },
    {
      id: 'the-steps',
      x: 0.78,
      y: 0.8,
      scale: 2.4,
      caption:
        'A young man in white satin lies dead across the steps with an older one fallen behind him. Of the 189 Swiss Guards who held the steps of St Peter\'s that morning, 147 were killed there.',
    },
  ],
} satisfies MockSceneDef;

export const aLittleNeck = {
  slug: 'a-little-neck',
  title: 'A Little Neck',
  dek: 'The queen jokes with her jailer about the width of a blade',
  story:
    "The charges were adultery with five men, one of them her brother, and plotting the king's death, and almost nobody, then or since, has believed them. Anne Boleyn's real offenses were slower ones: a daughter instead of a son, and a miscarriage in January on the day of her predecessor's funeral. There was a temper too, charming in a mistress and disobedience in a wife, and a king already writing letters to Jane Seymour. Thomas Cromwell assembled the case in three weeks. Of the five accused men only the musician Mark Smeaton confessed, after a night in Cromwell's house that no one describes, and the court that condemned her sat under the presidency of her own uncle. A jury of peers found her guilty unanimously, several of them weeping, and Cromwell had sent to Calais for an expert swordsman before the trial opened, the verdict being, evidently, not in suspense.\n\nIn the Tower she swung, her jailer William Kingston wrote, between desolation and a strange lightness. His letters preserve her best line. Told that the executioner was very good, and that the pain would be little, she answered that she had heard he was excellent. And I have a little neck, she said, putting her hands around it, laughing. Kingston, a professional in these matters, wrote to Cromwell that he had seen many men and also women executed. All of them had been in great sorrow, he said, but this lady had much joy and pleasure in death.\n\nOn the morning of 19 May 1536 she made the conventional speech on the scaffold, praising the king as a gentle and sovereign lord. Convention was the last shield of a mother whose daughter remained in his power. She knelt upright in the French fashion. The swordsman from Calais, by a professional's mercy, called out to his assistant as if the sword were elsewhere. He took the head while she was still listening for footsteps. No coffin had been ordered. She was buried in an arrow chest under the chapel floor a few yards away. The king was betrothed to Jane Seymour the next morning and married inside a fortnight, and the daughter with the disappointing sex ruled England for 44 years.\n\nCibot painted her in 1835 in the Tower with her attendant, all satin and collapse, and titled it for the first moments of her arrest: the romantic century's favorite kind of queen, young and wronged. It hung at the Salon that year and is at Autun now.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '19 May 1536',
  historicalYear: 1536,
  historicalMonthDay: toMonthDay('05-19'),
  artTitle: 'Anne Boleyn in the Tower',
  artCredit: 'Édouard Cibot, 1835',
  imageUrl: bucketPainting('scenes/a-little-neck.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-little-neck.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.52,
      y: 0.45,
      scale: 2.4,
      caption:
        'Cibot gives her shut eyes and a hand under her cheek. William Kingston ran the Tower, and he wrote down the other half. Anne put her hands round her own throat and laughed about how little a neck it was.',
    },
    {
      id: 'the-attendant',
      x: 0.53,
      y: 0.26,
      scale: 2.8,
      caption:
        'The attendant\'s bare arm comes up out of a jewelled sleeve and presses a handkerchief over her face. Cibot titled the picture for the first moments of the arrest, 17 days before the swordsman came over from Calais.',
    },
    {
      id: 'the-book',
      x: 0.11,
      y: 0.39,
      scale: 3.4,
      caption:
        'An open prayer book lies on the carved chest with a green marker in it. Anne\'s own book of hours survives at Hever. She wrote a line in it: remember me when you do pray, that hope doth lead from day to day.',
    },
  ],
} satisfies MockSceneDef;

export const godConquered = {
  slug: 'god-conquered',
  title: 'God Conquered',
  dek: 'Titian paints the emperor alone, and every king after wants the same picture',
  story:
    "At dawn on 24 April 1547, in river fog on the Elbe, Spanish veterans waded and swam the current with their swords in their teeth to take the boats of the Protestant shore guard. The army of Charles V came across at Mühlberg onto an enemy still forming up. The Schmalkaldic League, the alliance of Lutheran princes that had defied the emperor for 16 years, was broken by supper. Its commander, the Elector John Frederick of Saxony, was run down in the rout, slashed across the face, and brought to Charles still bleeding. The emperor sentenced him to death, then changed the sentence to captivity and kept him around the court like a filed document. Charles, whose gout had carried him through parts of the campaign in a litter, rode the field that day. Afterward he set the victory in a phrase built from Caesar's: I came, I saw, and God conquered.\n\nThe next winter, at the imperial diet in Augsburg, Titian was summoned over the Alps to make the picture of it. Aretino, never short of program, wrote helpfully from Venice proposing allegories: Religion and Fame at the emperor's side, the beaten trampled under the hooves. Titian threw all of it away. He painted a tired 48-year-old man in the actual armor of that morning, alone on a dark horse at the edge of a wood, lance level, riding into an evening sky. There is no battle and no enemy anywhere on the canvas. The armor still exists in Madrid and matches piece for piece. The studios kept a story from those sittings: that the emperor stooped to pick up a brush Titian had dropped, saying that Titian deserved to be served by Caesar. Told or invented, it was the century's exchange rate between the two kinds of power stated exactly.\n\nThe picture invented the royal equestrian portrait as Europe would repeat it for 300 years. Rubens copied it and Velázquez answered it. Every king who ever sat a horse in front of a painter afterward was asking, more or less, for this. The man in the saddle went on to lose the larger war anyway. The Lutherans he beat at Mühlberg got their legal peace 8 years later. A month after that Charles, worn through at 55, abdicated everything he had and split the world's largest inheritance in two. He retired to a monastery in Extremadura, where he lined his rooms with clocks and tried, the monks said, to make them strike together. The portrait hangs in the Prado, where the sky behind him is still deciding between storm and gold.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '24 April 1547',
  historicalYear: 1547,
  historicalMonthDay: toMonthDay('04-24'),
  artTitle: 'Emperor Charles V at Mühlberg',
  artCredit: 'Titian, 1548',
  imageUrl: bucketPainting('scenes/god-conquered.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/god-conquered.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.44,
      y: 0.235,
      scale: 2.8,
      caption:
        'The emperor looks past the painter with his jaw set under the crimson plumes. Titian had half a pound of red lake carted over the Alps from Venice to get that colour.',
    },
    {
      id: 'the-lance',
      x: 0.8,
      y: 0.3,
      scale: 3.0,
      caption:
        "The lance runs level out of the frame, the old sign of a Christian knight on the march. Titian left nothing at the end of it but cloud.",
    },
    {
      id: 'the-sky',
      x: 0.9,
      y: 0.48,
      scale: 2.6,
      caption:
        'Past the horse\'s armoured head the ground opens on a ridge and a valley under evening light. The man in that armour signed everything away 8 years later and went to live in a monastery full of clocks.',
    },
  ],
} satisfies MockSceneDef;

export const eighteenDaysOfGold = {
  slug: 'eighteen-days-of-gold',
  title: 'Eighteen Days of Gold',
  dek: "Two young kings spend a year's treasury on a party",
  story:
    "In June 1520, on a shallow valley between two castles near Calais, the kings of England and France met to become brothers. Henry VIII was 28; Francis I was 25; each had spies in the other's court and a new rival watching both, the 20-year-old Charles V, who had just added the empire to Spain. Neither king would set foot in the other's country, so Cardinal Wolsey, who produced the event, built a third kingdom between them. It held 5,000 people a side and 2,800 tents. For Henry there was a temporary palace at Guînes, timber and painted canvas made to look like brick, with real glass windows and gilded lions on the gates. Outside it stood two fountains running claret and spiced wine for anyone holding a cup, which by the second week was everyone.\n\nFor 18 days the two courts jousted, wrestled, danced, and outdressed one another with a unity of purpose their diplomats never matched. The field took its name from the fabric both sides wore into bankruptcy: cloth woven with actual gold thread, tents of it, doublets of it, horse trappings of it. Each crown spent roughly a year's income. The one unplanned moment became the most famous. Henry was ahead on points in every arranged contest. He grabbed Francis by the collar and challenged him to wrestle, and Francis, trained in the Breton style, threw him flat on his back in front of both courts. The chroniclers, English ones especially, moved briskly on. On the final Sunday the two kings heard mass together in a chapel hung with gold tissue. Something shaped like a dragon sailed over the congregation. The accounts call it a firework or a kite, and it went into the painting too.\n\nAs diplomacy it evaporated on contact. Within two years Henry had allied with Charles against France, and English armies were burning the country whose king he had sworn brotherhood with in a golden valley. The field produced no treaty that survived, only a display so total that no monarchy ever quite attempted it again, and a name that has meant gorgeous futility ever since.\n\nThe panorama at Hampton Court was painted around 1545, 25 years later, and it holds the whole affair in one view. Henry rides in procession at the lower left, larger than his escort. The canvas palace stands at the right with both wine fountains running. The tent city goes back over the hills in gold and stripes, and the dragon crosses the sky above all of it. The painting takes the event at its own valuation, which is the correct way to paint a party.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'June 1520',
  historicalYear: 1520,
  historicalMonthDay: null,
  artTitle: 'The Field of the Cloth of Gold',
  artCredit: 'British School, c. 1545',
  imageUrl: bucketPainting('scenes/eighteen-days-of-gold.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/eighteen-days-of-gold.jpg'),
  details: [
    {
      id: 'the-king',
      x: 0.247,
      y: 0.7,
      scale: 2.6,
      caption:
        'Henry VIII rides a white horse in cloth of gold. The painter made him larger than every man around him. The escort in red closes in on both sides of the road.',
    },
    {
      id: 'the-fountain',
      x: 0.82,
      y: 0.73,
      scale: 2.6,
      caption:
        'Wine ran from this fountain outside Henry\'s palace for all 18 days. A man in a gold robe leans over the basin to fill his jug, and the drinkers on the steps below him have stopped getting up.',
    },
    {
      id: 'the-dragon',
      x: 0.15,
      y: 0.215,
      scale: 2.4,
      caption:
        'A red dragon flies over the rooftops and the water in the top left corner of the painting. Reports from 1520 call it a firework or a kite, and the painting leaves it open.',
    },
  ],
} satisfies MockSceneDef;

export const theCityOnTheLake = {
  slug: 'the-city-on-the-lake',
  title: 'The City on the Lake',
  dek: 'The last day of the largest city in the Americas',
  story:
    "The Spaniards first walked the causeway into Tenochtitlan in 1519. The soldier Bernal Díaz wrote that some of them asked aloud whether it was a dream. A city of perhaps a quarter million people stood in the middle of a lake, larger than any city those men had seen at home. It grew its food on floating gardens and drank from a stone aqueduct running in from the springs at Chapultepec. Two years later they destroyed it house by house, and the strangest part of the story is how few of them there were. Cortés never commanded more than about 1,500 Spaniards. The army that took the city was tens of thousands of Tlaxcalans and other peoples the Aztecs had taxed and raided for a century. The conquest of Mexico was, in manpower, an Indian civil war with Spanish officers and Spanish steel.\n\nThe siege of 1521 was an engineering solution to an amphibious problem. On the retreat the Spaniards still call the Noche Triste, the sad night, half of them drowned in the lake, weighed down by gold they would not let go. Cortés then had 13 small warships built inland, carried over the mountains in pieces, and launched on the water. The brigantines swept the war canoes, the causeways were cut, and the aqueduct from Chapultepec was broken at its source. What the guns could not do, thirst and hunger did. Behind them moved a third army. Smallpox had arrived with one sick soldier the year before, and it had already killed the emperor Cuitláhuac and, by some counts, two of every five people in the valley.\n\nOn 13 August 1521, after a siege of 75 days, the last emperor was taken on the lake in a canoe. Cuauhtémoc had been trying to reach the mainland to keep the war going. He asked Cortés for the knife at his belt, to be killed as a king. He got three and a half more years as a hostage, then a hanging in the forest. The city was leveled, the temple platform quarried for a cathedral, the canals filled in. Over the next three centuries the lake itself was drained away. The one city the Spaniards had compared to enchantment is now the dry ground under Mexico City's traffic.\n\nThe painting is one of a series made in Mexico itself 150 years later, for rich Spanish-descended families who wanted the founding story on their walls. Warships and war canoes, the causeway battles and the burning pyramid all happen at once, the way events are stacked in the older painted histories of the valley. In the corner a numbered key identifies the captains, like a school diagram of the end of a world.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '13 August 1521',
  historicalYear: 1521,
  historicalMonthDay: toMonthDay('08-13'),
  artTitle: 'The Conquest of Tenochtitlan',
  artCredit: 'Unknown artist, second half of the 17th century',
  imageUrl: bucketPainting('scenes/the-city-on-the-lake.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-city-on-the-lake.jpg'),
  details: [
    {
      id: 'the-pyramid',
      x: 0.45,
      y: 0.21,
      scale: 2.4,
      caption:
        'Smoke lifts off the temple at the top of the pyramid, and small figures fight their way up the stairway. Stone from this platform was carried off to build the cathedral that stands on the site now.',
    },
    {
      id: 'the-horseman',
      x: 0.76,
      y: 0.68,
      scale: 2.6,
      caption:
        'A 1 is painted on the flank of the chestnut horse, and the card in the corner of the canvas gives number 1 as Fernan Cortes. Behind him the frame fills with Spanish helmets, though most of the army that took the city was Tlaxcalan.',
    },
    {
      id: 'the-key',
      x: 0.93,
      y: 0.88,
      scale: 3.0,
      caption:
        'A gold-framed card lists the Spanish captains and the three causeways, each with a number beside it. The same numbers are painted onto the men and horses out in the battle.',
    },
  ],
} satisfies MockSceneDef;

export const deathAtAnAngle = {
  slug: 'death-at-an-angle',
  title: 'Death at an Angle',
  dek: 'Two young men, every instrument of knowledge, one smear on the floor',
  story:
    "The man on the left is Jean de Dinteville, French ambassador to London, 29 years old, and having the worst posting of his life. It is the spring of 1533 and England is breaking from Rome while he watches. The king has secretly married Anne Boleyn, who is visibly pregnant. The new archbishop is about to annul the old marriage on his own authority. France is trying to keep one boot in each camp. His friend Georges de Selve, 25 and already a bishop, came to visit in April. Dinteville had Holbein, the best painter in England, put the two of them full length on one panel, surrounded by the whole equipment of their world.\n\nThe equipment is the point, and it is out of tune. On the upper shelf sit the instruments of heaven: globes, sundials, and a torquetum, a brass device for locating a star. Several of them are set to readings that disagree with each other. The lower shelf holds the earthly instruments. There is a lute with one snapped string, the century's standard sign for broken harmony. Beside it a Lutheran hymnbook lies open, in a painting of two Catholic diplomats, at the two hymns least likely to offend anyone: a prayer to the Holy Ghost and the Ten Commandments. A textbook of merchants' arithmetic is propped open at the page beginning Division. Holbein has painted the entire crisis of Europe as a still life and dared the viewer to call it one.\n\nAcross the floor, over a pavement copied from the Cosmati mosaic at Westminster Abbey, lies a long pale smear. Seen from one step to the painting's right, it becomes a human skull, drawn so exactly that opticians still argue about the tools Holbein used. From the front, where the two brilliant young men look out, death is unreadable; find the angle, and the ambassadors go vague while the skull comes sharp. Dinteville's motto was memento mori, remember death, and the badge on his cap holds a tiny silver skull. In the top left corner, half swallowed by the green curtain, hangs a silver crucifix: the one instrument in the picture nobody in it is using.\n\nDinteville took the panel home to his château at Polisy that autumn and out of history for three and a half centuries. The National Gallery bought it in 1890. Visitors have been walking left to right past the two men who owned everything ever since, and watching what was waiting in the floor.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1533',
  historicalYear: 1533,
  historicalMonthDay: null,
  artTitle: 'The Ambassadors',
  artCredit: 'Hans Holbein the Younger, 1533',
  imageUrl: bucketPainting('scenes/death-at-an-angle.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/death-at-an-angle.jpg'),
  details: [
    {
      id: 'the-smear',
      x: 0.5,
      y: 0.88,
      scale: 2.0,
      caption:
        'From straight on this is a grey smear lying across the tiled floor. Seen from one step to the right of the painting, it snaps into a human skull.',
    },
    {
      id: 'the-lute',
      x: 0.62,
      y: 0.71,
      scale: 2.4,
      caption:
        'The lute on the shelf has one broken string. Painters used a broken string to mean harmony gone wrong. Next to it a Lutheran hymnbook lies open, in a picture of two Catholic diplomats.',
    },
    {
      id: 'the-crucifix',
      x: 0.156,
      y: 0.112,
      scale: 3.2,
      caption:
        'A small silver crucifix hangs in the top left corner, in the gap between the green curtain and the edge of the panel. Jean de Dinteville, the French ambassador in London, was 29 when Holbein painted him here.',
    },
  ],
} satisfies MockSceneDef;

export const theChildrenBecameGeese = {
  slug: 'the-children-became-geese',
  title: 'The Children Became Geese',
  dek: 'An emperor edits a massacre into a robbery',
  story:
    "Bruegel painted the Massacre of the Innocents around 1566 and set it in a Brabant village under snow. Armored horsemen block the square. Soldiers work from house to house while families beg at the stirrups. The subject was nominally scripture, Herod's soldiers hunting the newborn of Bethlehem, but nobody in the Low Countries needed the reference explained. Spanish and imperial troops were the daily weather of the Netherlands on the eve of the revolt. Bruegel put the killing squad in the armor of his own century and gave the troop at the center a commander in black. Viewers then and since have read that officer as the Duke of Alba. His Council of Troubles would shortly be sentencing Netherlanders to death fast enough to earn it the name Council of Blood.\n\nThe painting told the truth so plainly that it was eventually corrected. By about 1600 the panel belonged to the emperor Rudolf II in Prague. He collected wonders and had no appetite for this one, so he ordered the children painted out. Under careful overpaint, each murdered infant became something a soldier might plausibly loot: a goose, a swaddled bundle of bread, a calf, jugs, a boar. A woman pleading for her baby now pleads for a jar. The mothers' grief was left exactly as painted, redirected at poultry. The most dangerous picture in the Habsburg collection turned into a scene of soldiers looting a village, and hung comfortably for centuries.\n\nThe panel in the Royal Collection is Bruegel's original, still wearing Rudolf's edits. Charles II bought it at Breda in 1660, while he was still in exile. Imaging shows the children under the animals, and copies made by Bruegel's son before the censorship keep the scene as it was. The two versions now function as a controlled experiment in what a painting is for. One shows a massacre; the other shows a cover-up, with the massacre still legible underneath, which may be the more instructive picture.\n\nBruegel died in 1569, two years into Alba's governorship, probably in his forties. He is said to have told his wife to burn certain drawings whose captions were too sharp to survive him. The snow scenes survived. In this one the sky is the soft blue of a skating afternoon, the village is postcard-pretty, and the only thing wrong with the morning, once an emperor had finished editing it, was the geese.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'c. 1566',
  historicalYear: 1566,
  historicalMonthDay: null,
  artTitle: 'Massacre of the Innocents',
  artCredit: 'Pieter Bruegel the Elder, c. 1566',
  imageUrl: bucketPainting('scenes/the-children-became-geese.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-children-became-geese.jpg'),
  details: [
    {
      id: 'the-troop',
      x: 0.51,
      y: 0.43,
      scale: 2.6,
      caption:
        'A block of horsemen waits under a hedge of upright lances. One rider at the center wears black armor. Viewers have wanted him to be the Duke of Alba for four centuries, and the painting never says so.',
    },
    {
      id: 'the-pleading',
      x: 0.34,
      y: 0.81,
      scale: 2.6,
      caption:
        'A man kneels in the snow with both arms up and begs the riders in red. His face was left exactly as Bruegel painted it. What he is begging for is now an animal standing in the snow.',
    },
    {
      id: 'the-bundle',
      x: 0.66,
      y: 0.724,
      scale: 3.0,
      caption:
        "A soldier hauls a grey bundle off on his back while the woman next to him puts a hand over her mouth. Cleaning in 1998 showed what is under the paint. Every load the soldiers carry here was painted on top of a dead child.",
    },
  ],
} satisfies MockSceneDef;

export const theTsarsOwnHand = {
  slug: 'the-tsars-own-hand',
  title: "The Tsar's Own Hand",
  dek: 'One blow with a staff, and Russia runs out of heirs',
  story:
    "The quarrel began, by the account the papal envoy collected at the Russian court, with a dress. In November 1581, at the fortified residence of Alexandrova Sloboda, Ivan the Terrible found his pregnant daughter-in-law dressed too lightly for his standards of modesty, and he beat her. She lost the child. His son and heir Ivan was 27, and until that week he had been his father's companion in everything, including the massacres. He confronted him. The old tsar, who went everywhere with an iron-tipped staff, swung it at the end of the argument and caught his son at the temple. The younger Ivan died a few days later, on the 19th, with his father howling at the bedside. Witnesses said the tsar beat his own head against the coffin at the funeral. Whether it happened exactly so is still fought over. What is documented is the tsar's letter admitting he had struck him, and the sudden grants to monasteries for prayers for the boy's soul. The succession now ran through Feodor, the pious, feeble second son. Feodor died childless in 1598, and the seven-century dynasty of Rurik died with him. The state fell into the 15 years of famine, impostors, and civil war that Russians still call the Time of Troubles.\n\nRepin painted the moment 300 years later, and everyone understood it was not really about 1581. He began it after watching the public hangings of the revolutionaries who had assassinated Alexander II in 1881, wanting, he wrote, a subject where power looks at what it has just done. He gave the son the calm of the already dying and gave the father everything else. The embrace comes too late and the hand is pressed uselessly over the wound. The eyes are the actual subject of the painting.\n\nThe picture was banned within months of its 1885 debut, the first painting in Russian history the censors formally forbade. The collector Tretyakov hung it anyway once the ban lapsed. In 1913 an icon painter slashed both faces with a knife, shouting that there had been enough blood. Repin, then 68, repainted them. The museum's curator threw himself under a train. In 2018 a drunk visitor smashed the case with a security pole and tore the canvas in three places, saying the painting insulted a slandered tsar. The restoration took years. The picture now hangs behind armored glass in the Tretyakov. Russian nationalists still petition to have it removed, on the argument that the killing is unproven. No one has ever petitioned to remove the eyes.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '16 November 1581',
  historicalYear: 1581,
  historicalMonthDay: toMonthDay('11-16'),
  artCredit: 'Ilya Repin, Ivan the Terrible and His Son Ivan, 1885',
  imageUrl: bucketPainting('scenes/the-tsars-own-hand.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-tsars-own-hand.jpg'),
  details: [
    {
      id: 'the-eyes',
      x: 0.46,
      y: 0.24,
      scale: 2.4,
      caption:
        'Repin said he wanted power looking at what it has just done. A knife went through both faces in 1913. Repin was 68 by then, and he painted them back.',
    },
    {
      id: 'the-staff',
      x: 0.55,
      y: 0.84,
      scale: 2.4,
      caption:
        'The son\'s hand lies open on the carpet, and his gold-stitched boots sit beside it. The staff his father swung lies across the bottom of the frame where it fell.',
    },
    {
      id: 'the-thrown-chair',
      x: 0.167,
      y: 0.52,
      scale: 3.0,
      caption:
        'The chair lies on its side with its red cushion tipped out onto the carpet. Repin painted the argument into the furniture and left the rest of the room dark.',
    },
  ],
} satisfies MockSceneDef;

export const theSaintFellHeadfirst = {
  slug: 'the-saint-fell-headfirst',
  title: 'The Saint Fell Headfirst',
  dek: "A dyer's son drops a miracle into Venice at full speed",
  story:
    "Jacopo Robusti was the son of a cloth dyer, a tintore, and Venice never let him forget it: the name he worked under his whole life, Tintoretto, means the little dyer's boy. The story his first biographer tells is that Titian took him in as a student and expelled him within days, seeing the drawings; whether from jealousy or temperament, master and boy were enemies ever after. Shut out of the establishment, he trained himself, and on his studio wall he wrote the program: the drawing of Michelangelo and the color of Titian. He got his first great public stage in 1548. The Scuola Grande di San Marco, one of the rich brotherhoods that ran charitable Venice, wanted a miracle of its patron saint for the meeting hall. Tintoretto was about 30.\n\nThe legend he was given was tame enough on paper. A servant goes to pray at the relics of St Mark against his master's orders, and is sentenced to have his eyes put out and his legs broken. The tools shatter in the executioners' hands. Every other painter in Italy would have put the saint on a cloud, blessing from a respectful altitude. Tintoretto threw him out of the sky headfirst, upside down, angled like a diver a yard above the crowd, robes on fire with light. He is invisible to everyone in the painting and unmissable to everyone outside it. Below him the slave lies stripped across the front of the picture, his bare body lit and solid as a fallen statue. A turbaned executioner holds up a shattered hammer to the master on his raised chair. He has the look of a workman whose tools have failed him for no reason he can name.\n\nThe confraternity brothers quarreled over the picture; some found it indecorous, too violent, too new, and the aggravated painter took it back for a time before the faction that understood what they had prevailed. From that canvas forward the commissions never stopped. Venice nicknamed him Il Furioso, the furious one, for the speed. Years later the Scuola di San Rocco held a competition for a ceiling sketch. Tintoretto skipped the sketch, painted the finished picture, had it secretly installed, and then donated it outright, knowing the rules forbade refusing a gift. The other competitors went home.\n\nThe Miracle of the Slave hangs now in the Accademia, a few minutes' walk from where it scandalized its first committee. It keeps the quality that upset them: a painting arriving at speed, brakes off. French troops took it to Paris in 1797. Venice got it back in 1815, and it has not left the city since.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1548',
  historicalYear: 1548,
  historicalMonthDay: null,
  artTitle: 'The Miracle of the Slave',
  artCredit: 'Jacopo Tintoretto, 1548',
  imageUrl: bucketPainting('scenes/the-saint-fell-headfirst.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-saint-fell-headfirst.jpg'),
  details: [
    {
      id: 'the-diver',
      x: 0.47,
      y: 0.13,
      scale: 2.2,
      caption:
        'Mark comes down head first, with his robe hauled up around him. One bare foot still points at the sky. The men below have not looked up.',
    },
    {
      id: 'the-slave',
      x: 0.42,
      y: 0.86,
      scale: 2.4,
      caption:
        'The condemned servant lies stripped at the front of the picture. He is lit like marble against the bare floor. The axe blades and snapped handles by his head are the tools that broke instead of him.',
    },
    {
      id: 'the-broken-hammer',
      x: 0.735,
      y: 0.4,
      scale: 2.2,
      caption:
        'The executioner in the turban holds up what is left of the hammer. The master from Provence leans out of his raised chair to look. He is the one who ordered the man blinded and his legs broken.',
    },
  ],
} satisfies MockSceneDef;

export const theSistersAtTheBoard = {
  slug: 'the-sisters-at-the-board',
  title: 'The Sisters at the Board',
  dek: 'A game of chess argues that women can paint',
  story:
    "Amilcare Anguissola, a minor nobleman of Cremona, ran a household experiment a century ahead of schedule. He gave his six daughters the full humanist education normally reserved for sons: Latin, music, and, for the ones who wanted it, painting. The eldest, Sofonisba, wanted it entirely. As a woman she was barred from studying anatomy or the nude, the standard ladder to the grand style. So she aimed her training at the one subject fully available: the people at her own dinner table, caught alive. In 1555, in her early twenties, she painted three of her sisters playing chess under an oak. On the edge of the board she signed it in Latin: Sofonisba Anguissola, virgin, daughter of Amilcare, painted her three sisters and a servant from life.\n\nPainted from life is the manifesto. Lucia, on the left, has just taken a piece, and she looks out of the picture with the mild certainty of an older sister who is winning. Little Europa in the middle grins openly at the loser. Minerva, caught mid-objection, raises a hand, and the servant leans in over her shoulder. Nobody poses. It is one of the first paintings in European art in which a family is doing something rather than sitting for something. Visitors noticed. Vasari, detouring to Cremona a decade later, wrote that the figures lacked only speech.\n\nThe career that followed ran through the front doors of places women did not enter. Michelangelo, shown her drawing of a laughing girl, sent a test back from Rome: draw a boy crying, which is harder. She answered with her small brother Asdrubale howling over a finger nipped by a crayfish, and in 1562 that sheet went to Cosimo de' Medici in Florence, packed alongside a Michelangelo. Caravaggio lifted the idea decades later. She was 27 when Madrid called her as court painter and lady-in-waiting to the queen of Spain. She spent 14 years painting the most guarded family in Europe. A lady of the household could not take painters' fees or sign like a tradesman, so her royal portraits went unsigned. For centuries the best of them were credited to men. Museums have spent the last several decades amending labels.\n\nShe outlived nearly everyone in the story. In her nineties, in Palermo, she received a young Flemish visitor named Anthony van Dyck. He sketched her in his travel notebook and put her age down as 96. He also wrote out her advice: keep the light low, or the shadows in the wrinkles of an old face grow too large. He had taken more good counsel from a blind woman, he noted, than from the works of famous painters. Her eyes were failing; her opinions were not. The chess game hangs in Poznań, signed along the edge of the board.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1555',
  historicalYear: 1555,
  historicalMonthDay: null,
  artTitle: 'The Chess Game',
  artCredit: 'Sofonisba Anguissola, 1555',
  imageUrl: bucketPainting('scenes/the-sisters-at-the-board.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-sisters-at-the-board.jpg'),
  details: [
    {
      id: 'the-winner',
      x: 0.2,
      y: 0.22,
      scale: 2.4,
      caption:
        'The eldest of the three players has turned from the game to look straight out of the picture. This is Lucia, and her mouth stops just short of a smile. Sofonisba painted her own household, because women were barred from drawing nude models and from the anatomy room.',
    },
    {
      id: 'the-grin',
      x: 0.42,
      y: 0.3,
      scale: 2.4,
      caption:
        "Europa is the youngest of the three at the board. She has turned toward her losing sister and is showing all her teeth about it. At the edge of the frame, Lucia’s cheek gives nothing away.",
    },
    {
      id: 'the-signature',
      x: 0.44,
      y: 0.84,
      scale: 2.6,
      caption:
        'Two lines of Latin run along the rim of the board and finish PINXIT M D LV. The phrase in the middle, ex vera effigie, means painted from the life. That is the part Sofonisba wanted on record.',
    },
  ],
} satisfies MockSceneDef;

export const theBreechesPainter = {
  slug: 'the-breeches-painter',
  title: 'The Breeches Painter',
  dek: 'The greatest fresco alive gets a wardrobe by committee',
  story:
    "Michelangelo was still at work on the Last Judgment, nearly 30 years after finishing the Sistine ceiling above it, when the first objection arrived. The pope's own master of ceremonies, Biagio da Cesena, declared that so many nudes twisting through the air belonged in a bathhouse or a tavern, not the chapel of Christendom. Michelangelo answered in fresco: he painted Biagio into the bottom corner as Minos, judge of hell, with donkey ears and a serpent applied exactly where the master of ceremonies felt clothing mattered most. When Biagio begged the pope to order it removed, Paul III is said to have replied that his jurisdiction did not extend to hell.\n\nThe fresco was unveiled in 1541, and the joke held for about 20 years after that. The Counter-Reformation hardened; Aretino wrote a long public letter of pious blackmail; and in its final session the Council of Trent ruled on sacred images: nothing lascivious, nothing indecorous. In January 1564 the Congregation ordered the Judgment's offending figures covered. Michelangelo was not consulted long: he died that February, at 88, before a brush touched the wall. The work fell to his own student and friend Daniele da Volterra. He spent months painting loincloths and drapery over the bodies he admired. In two cases, Saints Catherine and Blaise, he chiseled out whole figures and repainted them, because the censors thought the way they were arranged was obscene. Rome gave Daniele the nickname that outlived all his own paintings: Il Braghettone, the breeches-maker.\n\nThe breeches kept coming after him; later popes added layer after layer until nearly 40 figures wore committee-issue cloth. One ambitious bystander offered a cleaner solution. The young El Greco, in Rome in the 1570s, let it be known he would happily tear down the whole wall and repaint it modest, decent, and no worse painted. Rome declined, and shortly afterward found reasons for El Greco to prosper in Spain.\n\nThe restorers who cleaned the altar wall from 1990 to 1994 faced the codified question of which centuries to strip away. The ruling: the sixteenth-century drapery stays, as history; the 15 or so pieces added after 1600 came off. So the fresco today is a two-author work, the bodies by Michelangelo, the modesty by his grieving student. Biagio is still in the corner, still wearing his ears. A faithful copy made in 1549, before the censors, hangs in Naples, keeping the original score.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '1564',
  historicalYear: 1564,
  historicalMonthDay: null,
  artTitle: 'The Last Judgment',
  artCredit: 'Michelangelo, 1536–1541',
  imageUrl: bucketPainting('scenes/the-breeches-painter.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-breeches-painter.jpg'),
  details: [
    {
      id: 'the-judge',
      x: 0.47,
      y: 0.3,
      scale: 2.2,
      caption:
        'Christ swings his right arm up, beardless and built like a wrestler. Mary turns in against his side and has stopped pleading. The rest of the wall holds over 300 figures, and every one of them is rising or falling around that arm.',
    },
    {
      id: 'the-skin',
      x: 0.55,
      y: 0.47,
      scale: 2.4,
      caption:
        'Bartholomew sits on a cloud with the flaying knife in one hand. His own skin hangs empty from the other. The slack face on the skin is Michelangelo’s.',
    },
    {
      id: 'the-donkey-ears',
      x: 0.94,
      y: 0.91,
      scale: 3.2,
      caption:
        'A man with donkey ears sits in the bottom corner of hell, and a snake wound twice around him is biting. He is Minos, and the face is Biagio da Cesena’s. Biagio was the pope’s master of ceremonies, and he said the fresco belonged in a bathhouse.',
    },
  ],
} satisfies MockSceneDef;

export const changeTheTitle = {
  slug: 'change-the-title',
  title: 'Change the Title',
  dek: 'The Inquisition orders a repaint; the painter reaches for a pen',
  story:
    "The commission was a Last Supper for the refectory of Santi Giovanni e Paolo in Venice, replacing a Titian lost to fire. Veronese delivered it in April 1573 at the scale he preferred: 42 feet of marble arcade, with Christ at a banquet in the middle of what is unmistakably a rich Venetian party. Three months later he was summoned before the Holy Office. The transcript of the hearing, 18 July 1573, survives, and it is the best comic dialogue of the sixteenth century, because the inquisitors ask exactly the questions any bewildered viewer might. What is the meaning of the man with the bloody nose? Of the armed men dressed as Germans, each with a halberd in his hand? Of the jester with the parrot on his fist? Could the dog not be replaced with a Magdalen? Does it seem suitable to you, they ask, to paint buffoons, drunkards, Germans, dwarfs and similar indecencies at the Lord's last supper?\n\nVeronese's defense has been quoted by artists ever since: we painters take the same license that poets and madmen take. The canvas was large, he explained, and had room that needed filling. The halberdiers were a rich host's servants, one drinking and one eating at the foot of the stairs but both ready to do their duty. He had been paid to ornament the picture as he saw fit. Pressed on whether it was fitting, he allowed that he had perhaps not thought everything through. The tribunal ordered him to correct the painting within three months, at his own expense, in whatever manner the judges should decide was needed.\n\nHe corrected nothing. Instead he wrote on the balustrade, in neat Latin, a new title: the Feast in the House of Levi, with chapter and verse, Luke 5. At Levi's dinner, scripture itself seats Christ among publicans and sinners, the disreputable crowd being the theological point; every German, jester, dwarf and dog in the picture instantly became doctrinally load-bearing. The Inquisition accepted the edit. Nothing on the canvas changed but the words, and the words changed everything the canvas meant.\n\nThe painting hangs today in the Accademia, its inscriptions still legible on the stonework: Luke's chapter and verse on the right-hand balustrade, the date on a pedestal at the left. Art historians treasure the affair as the cleanest recorded victory of retitling over repainting. The transcript keeps its last small joke: the tribunal that could order any image in Venice destroyed spent an afternoon trying to talk a painter into swapping a dog for a Magdalen, and lost.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: '18 July 1573',
  historicalYear: 1573,
  historicalMonthDay: toMonthDay('07-18'),
  artTitle: 'The Feast in the House of Levi',
  artCredit: 'Paolo Veronese, 1573',
  imageUrl: bucketPainting('scenes/change-the-title.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/change-the-title.jpg'),
  details: [
    {
      id: 'the-jester',
      x: 0.29,
      y: 0.87,
      scale: 3.2,
      caption:
        'A buffoon holds a parrot on his fist. The tribunal asked about him by name, and Veronese answered that he is there as an ornament. The Latin cut into the stone rail above him is a line from Luke: Levi made him a great feast.',
    },
    {
      id: 'the-germans',
      x: 0.9,
      y: 0.8,
      scale: 2.8,
      caption:
        'Soldiers in German dress hold halberds, axes on long poles. One of them is drinking on the stairs. Veronese told the tribunal they were the servants of a rich host, at the foot of the stairs but ready to do their duty.',
    },
    {
      id: 'the-dog',
      x: 0.55,
      y: 0.87,
      scale: 3.0,
      caption:
        'The hound sits on the marble in front of the table and faces the meal. The prior of the convent wanted a Magdalen painted in that spot instead. The dog is still there.',
    },
  ],
} satisfies MockSceneDef;

export const theEmperorInSeason = {
  slug: 'the-emperor-in-season',
  title: 'The Emperor in Season',
  dek: 'A portrait of the emperor built from four harvests at once',
  story:
    "Giuseppe Arcimboldo spent a quarter century as court painter to the Habsburgs in Vienna and Prague, and his official duties were conventional: portraits, festival designs, costume schemes for tournaments. His fame rested on the sideline: composite heads, faces assembled entirely from painted things, fruit, fish, roast birds, books, kitchenware, each one a catalogue pretending to be a person. The emperors could not get enough of them. When he finally retired to his native Milan in 1587, Rudolf II let him go on the understanding that the pictures would keep coming.\n\nThe last and best arrived in Prague around 1591: the emperor himself as Vertumnus, the Roman god of the turning year. The portrait is botanically ruthless. Rudolf's cheeks are apples, his nose is a pear, his eyelids are open pea pods, his chin is a chestnut burr. Wheat, grapes, cherries and plums crowd the crown of his head, and cabbage leaves carry the imperial shoulders. Contemporaries counted the species and found all four seasons growing at the same time. That was the entire message, and a poem written to go with the picture spelled it out. Under Rudolf, the empire enjoys every season's abundance at once, a permanent golden age with a pear for a nose. Rudolf, whose court ran to alchemists, astronomers and a pet lion, was delighted, and made the painter a Count Palatine for it.\n\nThe golden age proved less durable than the vegetables. Rudolf died after his own brother pushed him off the throne. The collection he had piled up in Prague Castle was the greatest cabinet of wonders in Europe. Swedish troops looted it in the last year of the Thirty Years' War, and Vertumnus went north in a baggage wagon. The Swedish inventory listed it as item 351, a face of fruit. Queen Kristina found Arcimboldo old-fashioned and let it go; it hangs today in Skokloster Castle, war booty that never went home. Arcimboldo himself died in 1593 and was forgotten with impressive speed; for three centuries the composite heads were filed under curiosities, until the Surrealists found him in the 1930s and declared him a father. Dalí borrowed the double-image trick outright.\n\nThe painting keeps a courtier's joke in plain sight. Where the emperor's ear belongs, Arcimboldo painted an ear of maize with the husk peeled back and the kernels showing. It was a New World crop, barely a century old in Europe, serving as the ear of the Holy Roman Emperor.",
  eraId: toEraId('renaissance'),
  historicalDateLabel: 'c. 1591',
  historicalYear: 1591,
  historicalMonthDay: null,
  artTitle: 'Vertumnus',
  artCredit: 'Giuseppe Arcimboldo, c. 1591',
  imageUrl: bucketPainting('scenes/the-emperor-in-season.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-emperor-in-season.jpg'),
  details: [
    {
      id: 'the-eyes',
      x: 0.46,
      y: 0.28,
      scale: 2.8,
      caption:
        'Ears of wheat make the eyebrows, and a split pea pod makes each eyelid. Under each lid the eye is a dark cherry. The nose is a pear, and it stands stem upward between two apple cheeks.',
    },
    {
      id: 'the-crown',
      x: 0.5,
      y: 0.12,
      scale: 2.4,
      caption:
        'Ears of wheat, green and black grapes, plums and a cherry are piled on the same head. They are all ripe at once, and nothing ripens on that schedule. The impossibility is the compliment.',
    },
    {
      id: 'the-collar',
      x: 0.3,
      y: 0.7,
      scale: 2.2,
      caption:
        'A white lily opens against the emperor’s chest. A marigold and a dark red rose crowd in beside it. Under the flowers his body is a pale green cabbage leaf lit like satin.',
    },
  ],
} satisfies MockSceneDef;
