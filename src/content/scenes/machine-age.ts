import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const twelveSeconds = {
  slug: 'twelve-seconds',
  title: 'Twelve Seconds',
  dek: 'Two bicycle mechanics teach the wind to carry a man',
  story:
    'They chose this stretch of North Carolina sand from a Weather Bureau table: steady winds, tall dunes to glide from, soft ground to fall on, and nobody watching. For three autumns the bicycle makers from Dayton have come here to fly gliders, and mostly to learn why the published numbers were wrong. After the 1901 season went badly, Wilbur said man would fly, but not within a thousand years, and not in their lifetime. Then the brothers went home and built a wind tunnel out of a 6-foot pine box and a fan. They tested 200 little wing shapes cut from bicycle-spoke steel and hacksaw blades, and corrected the lift tables the whole world had been trusting. The thousand years took two.\n\nNo engine maker would build them a motor light enough. So Charlie Taylor, the machinist from their bicycle shop, cast an aluminum block and made one in 6 weeks. It gave 12 horsepower, with no throttle and no fuel pump, gravity-fed from a can on a strut. The propellers were a worse problem, because there was no theory of propellers at all; ship screws were cut by tradition and guesswork. The brothers argued it out for months until they saw the answer: a propeller is just a wing traveling in a spiral. They carved two by hand from laminated spruce, and when modern laboratories finally tested the design, it came out within a few points of today’s. The whole machine, spruce and muslin and wire, cost about a thousand dollars. The War Department had put $50,000 into Samuel Langley’s Aerodrome, which fell into the Potomac in October and again on the eighth of December.\n\nOn the fourteenth of December they flipped a coin and Wilbur won, over-rotated on takeoff, and put the Flyer into the sand after three seconds. Repairs took two days. This morning the wind is blowing 27 miles an hour, too hard, really. But it is December and the brothers want to be home for Christmas, and it is Orville’s turn to lie flat on the lower wing. The beach is empty except for five witnesses, most of them lifeguards from the rescue station, and a camera on a tripod aimed at the end of a 60-foot wooden launching rail. At 10:35 the machine trundles down the rail into the headwind and rises. Twelve seconds, 120 feet, a distance shorter than the wingspan of the airliners to come. John Daniels, a lifeguard who has never operated a camera in his life, squeezes the bulb at the exact right instant and takes the most reproduced photograph in aviation.\n\nThey fly four times before noon, taking turns. On the last flight Wilbur holds it steady for 59 seconds and 852 feet, and the problem of the ages is, in the plain sense, solved. Minutes later a gust catches the parked Flyer and rolls it over and over down the beach; it never flies again. The telegram home to their father asks him to inform the press, and the operator mangles it in transmission, cutting the 59 seconds to 57 and misspelling Orville’s name. Most newspapers pass; the few that print it get the details wrong or improve them into fiction. None of that reaches the beach. Four flights today. Then the wind wrecks the Flyer for good. It has already done enough.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '17 December 1903',
  historicalYear: 1903,
  historicalMonthDay: toMonthDay('12-17'),
  commissionedBy: 'the Friends of First Flight',
  artCredit: 'Photograph by John T. Daniels, 1903',
  imageUrl: bucketPainting('scenes/twelve-seconds.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/twelve-seconds.jpg'),
  details: [
    {
      id: 'wilbur',
      x: 0.885,
      y: 0.51,
      scale: 3.2,
      caption:
        'Wilbur stands in his dark suit and cap, a few strides past the point where he let go of the wingtip. Orville had set the camera himself. He left the bulb to John Daniels, a lifeguard who had never worked one.',
    },
    {
      id: 'the-rail',
      x: 0.28,
      y: 0.6,
      scale: 2.8,
      caption:
        'The launching rail runs out across the sand under the wing. It is 60 feet of two-by-four laid end to end. The brothers called it the Grand Junction Railroad.',
    },
    {
      id: 'orville-prone',
      x: 0.53,
      y: 0.45,
      scale: 3.4,
      caption:
        'Orville lies flat on the lower wing with his hips in a padded cradle. Sliding it left or right twists the wingtips and turns the machine. The engine sits at his right shoulder, and the right wing was built 4 inches longer to carry the weight.',
    },
  ],
} satisfies MockSceneDef;

export const theInsultThatNamedAMovement = {
  slug: 'the-insult-that-named-a-movement',
  title: 'The Insult That Named a Movement',
  dek: 'Rejected by the Salon, 30 painters open their own show; one hazy harbor names them',
  story:
    "The address matters: 35 boulevard des Capucines, the photographer Nadar's old studio, red-walled rooms up a staircase in the middle of commercial Paris. On the fifteenth of April, 1874, about 30 painters open their own exhibition there, an act of trade rebellion more than of art theory. In their France, one show counts: the official Salon, one jury, careers made or ended by its yes or no. These painters, Monet, Renoir, Degas, Pissarro, Berthe Morisot, Sisley, Cézanne, have collected enough refusals among them to paper the stairwell. So they have formed a joint-stock company, hung their own walls, and invited the public in at a franc a head. The public mostly stays away; the critics come, sharpening. Entry costs a franc, the catalogue 50 centimes: rebellion priced like a fairground.\n\nAmong the 165 works is a small harbor scene Monet painted from his hotel window in Le Havre. It shows the port at sunrise: cranes and masts and smoking chimneys dissolved in blue mist, two rowboats, and an orange sun. Pressed for a catalog title, he said it could hardly pass for a view of Le Havre, so they should just put Impression. The critic Louis Leroy of the satirical paper Le Charivari walked through, and 10 days later published a mock dialogue in which a bewildered academic painter loses his mind in front of the pictures. At Monet's canvas he strikes: Impression, I was certain of it. Wallpaper in its embryonic state is more finished than that seascape. He titled the piece The Exhibition of the Impressionists, and the sneer became a birth certificate. Leroy's own paintings, for the record, are remembered by nobody. The painters grumbled, then shrugged, and by their third show were printing the word on their own posters.\n\nAs commerce, the rebellion limped. About 3,500 visitors climbed Nadar's stairs in a month, against the hundreds of thousands the Salon drew across town. Reviews split between mockery and silence, and the company dissolved with debts before the year was out. The prices tell the sharper story. Impression, Sunrise sold to the department store magnate Ernest Hoschedé for 800 francs, a respectable sum; four years later Hoschedé went bankrupt, and at the forced auction of his collection the same canvas fetched 210. The buyer at that humiliation was a Romanian doctor named de Bellio, who treated the painters half for free. He kept it for life, and his daughter's bequest is why the picture hangs in the Marmottan and not in a vault.\n\nThe joke has aged badly for Leroy, because the little canvas is exact. The sun seems to throb, and the trick behind it can be measured. Monet painted it at almost exactly the brightness of the sky around it, so the eye picks it up with its motion sensors and not its brightness sensors. That is why it pulses. Photograph the painting in black and white and the sun all but disappears. And the subject is not a reverie but a workplace: Le Havre's docks at start of shift, steam packets, derricks, coal smoke. The movement named for a sunrise was painting the industrial morning on its own terms.\n\nThe painting has since lived a novel of its own. Monet signed and dated it 72. Scholars argued for 1873, and the museum that holds it dates the picture 1872. It was sold, resold, and in 1985 stolen at gunpoint from the Musée Marmottan in daylight. It spent five years missing and surfaced in a villa in Corsica, and it hangs in Paris again, small, quick, and still pulsing.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '15 April 1874',
  historicalYear: 1874,
  historicalMonthDay: toMonthDay('04-15'),
  artTitle: 'Impression, Sunrise',
  artCredit: 'Claude Monet, 1872',
  imageUrl: bucketPainting('scenes/the-insult-that-named-a-movement.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-insult-that-named-a-movement.jpg'),
  details: [
    {
      id: 'the-sun',
      x: 0.6,
      y: 0.3,
      scale: 2.6,
      caption:
        'The sun seems to pulse because Monet painted it at nearly the same brightness as the sky. The eye picks up the color but not the edge. In black and white it almost vanishes.',
    },
    {
      id: 'the-harbor',
      x: 0.2,
      y: 0.33,
      scale: 2.4,
      caption:
        'Cranes, masts and chimney smoke go soft in the mist. This is Le Havre’s port at the start of a working shift. Monet painted the whole scene from a window of his hotel on the quay.',
    },
    {
      id: 'the-signature',
      x: 0.13,
      y: 0.88,
      scale: 2.8,
      caption:
        'The signature sits low in the water at the edge of the canvas. It reads Claude Monet, with the year cut to 72. The picture was already 2 years old when it hung in Nadar’s studio and handed the movement its name.',
    },
  ],
} satisfies MockSceneDef;

export const lightningUnderTheSea = {
  slug: 'lightning-under-the-sea',
  title: 'Lightning Under the Sea',
  dek: 'The queen wires the president, and the wire dies famous three weeks later',
  story:
    "On 16 August 1858, Queen Victoria sends President Buchanan 98 words of congratulation, and the 98 words take 16 hours to cross. Nobody minds. Until this month, news crossed the Atlantic at the speed of the fastest ship, 10 days when the weather cooperated; a sentence in 16 hours is a miracle with room to improve. New York loses its composure: a hundred-gun salute at dawn, another at noon, torchlight parades, and a fireworks display so enthusiastic it sets the roof of City Hall on fire. The cable's promoter was Cyrus Field, a paper merchant. He had spent four years and four failed expeditions getting a wire laid across 2,000 miles of ocean floor. Now he is toasted as the man who married the continents.\n\nThree weeks later the line goes silent. The company's chief electrician, a surgeon by training named Whitehouse, had been driving signals through the exhausted cable with induction coils at brutal voltage, and the insulation cooked. The silence was so complete, and the celebrations had been so loud, that respectable voices declared the whole thing a hoax and the queen's message an invention. Field spent the next eight years, through a civil war and a dozen boardrooms, arguing a simple point: it had worked. It had carried 732 messages, and physics does not un-ring that bell.\n\nThe failure had a villain and a vindicated man, and the company had chosen wrong between them. William Thomson of Glasgow, the physics professor on the project's board, had argued from theory that a wire 2,000 miles long must be whispered through. He built a mirror galvanometer to read a signal too faint to feel, a spot of lamplight trembling on a scale. Whitehouse distrusted whispers and applied his coils, up to 2,000 volts, until the deep-sea insulation failed. The inquiry that followed took the rare step of naming the physics correct and the surgeon wrong. When the 1866 cable went through, it was worked from the first day on Thomson's trembling spot of light. The crown knighted him for it, and he finished life as Lord Kelvin. The absolute temperature scale is named for the man the cable proved right.\n\nThe return match needed the biggest object afloat. Only the Great Eastern, Brunel's beautiful white elephant, could carry 2,600 miles of improved cable in one belly. In 1865 she paid out 1,200 miles and lost the end in two and a half miles of water. In July 1866 she ran the line clean through, from Ireland to Heart's Content, Newfoundland. It was a fishing village of a few dozen houses that woke up as the doorstep of the instant world. Robert Dudley, the expedition's artist, had painted the start of that run. On 7 July the shore end came in under the cliffs of Foilhommerum Bay on Valentia Island. Sailors and islanders stood hip-deep in the surf, hauling the future up the beach by hand like a seine net. Ladies watched from the rocks in Sunday dresses, and the ship that carried the cable lay offshore dressed with flags. Then the Great Eastern went back out, fished the lost 1865 cable off the abyssal floor with a grapnel, spliced it, and by September there were two working wires under the Atlantic.\n\nA word cost a fortune at first, and the traffic came anyway: markets, treaties, obituaries, cotton prices. Distance stopped being a fact about information. The village telegraph office at Heart's Content clicked around the clock for the next century, relaying other people's news through a room by the sea. The failed cable of 1858 lies out there still, the first draft, dead in the dark, famous for the three weeks in which it worked.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '16 August 1858',
  historicalYear: 1858,
  historicalMonthDay: toMonthDay('08-16'),
  artCredit: 'Robert Charles Dudley, 1866',
  imageUrl: bucketPainting('scenes/lightning-under-the-sea.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/lightning-under-the-sea.jpg'),
  details: [
    {
      id: 'the-haul',
      x: 0.45,
      y: 0.75,
      scale: 2.4,
      caption:
        'Sailors and islanders stand hip-deep in the surf at Foilhommerum Bay. They haul the shore end of the cable up the beach by hand. The wire that would carry words across the ocean came in at the speed of men pulling rope.',
    },
    {
      id: 'the-ship',
      x: 0.86,
      y: 0.62,
      scale: 3,
      caption:
        'The cable ship lies in the haze at the far end of the human chain. She is hung with flags for the day. Every pair of hands between her and the beach is on the same rope.',
    },
    {
      id: 'the-watchers',
      x: 0.22,
      y: 0.84,
      scale: 2.4,
      caption:
        "Spectators in top hats and wide skirts stand on the rocks of Valentia Island. They are close enough to watch the cable come up the beach. Dudley signed the canvas on the boulder at lower left, and he sailed with the expedition that year.",
    },
  ],
} satisfies MockSceneDef;

export const theUnsinkable = {
  slug: 'the-unsinkable',
  title: 'The Unsinkable',
  dek: 'The largest machine ever built spends 2 hours and 40 minutes sinking',
  story:
    "The regulations were written for a ship a fifth her size. British law set lifeboats by tonnage and the table stopped at 10,000 tons; Titanic was registered at over 46,000. Her 20 boats held seats for 1,178 of the 2,224 people aboard, and that was not a scandal, it was compliance. The trade press had called the class practically unsinkable, and the qualifier wore off in conversation. She was the largest moving object human beings had ever made, four days into her first crossing, running at better than 22 knots through a calm, moonless, iceberg-reporting sea.\n\nAt 11:40 on the night of the fourteenth of April the lookouts, working without binoculars, which were locked in a cabinet whose key had left the ship at Southampton, saw the berg dead ahead. The helm went over; the ice opened 300 feet of seams below the waterline along six compartments. The ship could float with four flooded. Her builder, aboard for the maiden voyage, did the arithmetic in minutes and gave her one to two hours. She took two hours and forty. In that time the band played on deck, and the wireless men sent the new SOS alongside the old CQD. The boats went down half-empty at first, 28 people in a boat built for 65. The drop looked worse than the deck, and no one had drilled the loading. Ten miles off, the steamer Californian sat stopped in the ice with her wireless operator asleep, watching white rockets she could not interpret. The Carpathia, four hours away, ran her boilers ragged and arrived at dawn to find boats, wreckage, and 710 survivors. The water was two degrees below freezing; nearly everyone it took, it took in minutes. First-class women survived at over 90 percent. Third-class women, below half.\n\nThe night's conduct sorted people faster than any regulation. Ida Straus, whose husband co-owned Macy's, was handed toward a boat and stepped back out of it, saying she would not leave him after four decades; witnesses put them last seen seated together on deck. The two young Marconi operators stayed at the key, selling their position to every ship in range until the power died under them; one lived, one did not. The band's leader, Wallace Hartley, was recovered days later with his music case still strapped to his body, and whether the last tune was the hymn the legend insists on, no two survivors quite agreed. The Californian's captain spent the rest of his life explaining the rockets his watch had seen, logged, and not woken him for.\n\nNo photograph exists of the sinking, which is why the world remembers it through a drawing made in Berlin. Willy Stöwer, the Kaiser's favorite marine painter, produced the scene for the illustrated press within days: stern rising, funnels leaning, boats pulling away over crowded water, icebergs standing in on both sides. He worked from cables and imagination, and he made mistakes the ocean kept secret for decades. His hull goes down whole. When the wreck was finally found in 1985, two and a half miles down, she lay in two pieces. It did not matter. His guess had already become the memory.\n\nThe corrections came fast and stayed: lifeboats for all, boat drills, a patrol that still counts icebergs, wireless watched around the clock at sea. The age's faith in its machines was harder to repair. Stöwer signed the drawing in the corner, over water he never saw.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '15 April 1912',
  historicalYear: 1912,
  historicalMonthDay: toMonthDay('04-15'),
  artTitle: 'Der Untergang der Titanic',
  artCredit: 'Willy Stöwer, 1912',
  imageUrl: bucketPainting('scenes/the-unsinkable.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-unsinkable.jpg'),
  details: [
    {
      id: 'the-propeller',
      x: 0.736,
      y: 0.306,
      scale: 3.4,
      caption:
        'The stern is up far enough to show the rudder and a propeller blade, and small figures are sliding down the plating. Under the name Stöwer painted the port she was registered in, Liverpool. Titanic never entered that city.',
    },
    {
      id: 'the-boats',
      x: 0.18,
      y: 0.78,
      scale: 2.4,
      caption:
        'The oars are out and a man is waving with both hands. Behind them more boats sit strung along the horizon under the ice. The first boat lowered that night left with 28 people in 65 seats, because nobody had drilled the loading.',
    },
    {
      id: 'the-berg',
      x: 0.16,
      y: 0.48,
      scale: 3.2,
      caption:
        'A white iceberg stands as tall as the funnels leaning past it. Heads show in the water along the bottom edge. Stöwer drew all of this in Berlin from cabled reports, and his guess became the memory.',
    },
  ],
} satisfies MockSceneDef;
export const theHouseOfGlass = {
  slug: 'the-house-of-glass',
  title: 'The House of Glass',
  dek: 'A gardener builds a palace of iron and glass to hold the whole world',
  story:
    'The building was designed by a man who had never built a building. Joseph Paxton ran the gardens at Chatsworth, where he had raised a giant water lily under a glass roof ribbed like its own leaf. The committee for the 1851 exhibition rejected 245 serious proposals and started to panic. Then Paxton sketched his answer on a sheet of pink blotting paper during a railway board meeting. It was a greenhouse the size of a cathedral. Iron columns, ready-made panes, no wet mortar, the whole thing bolted together from parts a factory could stamp by the thousand. The press named it the Crystal Palace before a single column stood.\n\nThe site in Hyde Park held a row of full-grown elms that Londoners refused to let anyone cut down. Paxton simply arched a barrel-vaulted transept over them and built the trees inside, and sparrows moved into the branches and would not leave. The Duke of Wellington, in his eighties, is said to have suggested the cure that worked: sparrowhawks. On the first of May, 1851, Queen Victoria opened the fair under that roof, walked the aisles past some 100,000 objects, and wrote in her journal that it was the greatest day in our history. Over the next five months the gates counted 6 million admissions, close to a third of everyone then living in Britain.\n\nInside stood the century showing off to itself. The Koh-i-Noor diamond behind bars, which most visitors found a disappointing lump. A folding piano for yachtsmen, a Sheffield knife that opened into dozens of blades, a bed that pitched its sleeper into a cold bath at a set hour. The American section arrived nearly empty and half-mocked, then Cyrus McCormick’s reaping machine cut a swath of English grass and stopped the laughing. The whole enterprise turned a large profit, and the money bought the land in South Kensington where the museums stand today.\n\nThe watercolor of the opening is by Eugène Lami, a Frenchman who had painted battles for one king and parties for another. He built the scene the way a stage designer would: the great glass roof and the enclosed elm rising over a crystal fountain 27 feet high. The royal party is a small patch of red under a blue canopy, and the crowd is banked in the galleries. Two years later the Palace was taken apart pane by pane and rebuilt bigger on a hill at Sydenham, where it stood for 82 years as a pleasure ground. It burned in a single night in 1936, the glow visible across eight counties, and the iron that would not rot in the rain melted and ran.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1 May 1851',
  historicalYear: 1851,
  historicalMonthDay: toMonthDay('05-01'),
  artTitle: 'Opening of the Great Exhibition',
  artCredit: 'Eugène Lami, 1851',
  imageUrl: bucketPainting('scenes/the-house-of-glass.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-house-of-glass.jpg'),
  details: [
    {
      id: 'the-fountain',
      x: 0.13,
      y: 0.72,
      scale: 2.4,
      caption:
        'The crystal fountain rises 27 feet in cut glass, and the crowd is packed to its foot. Two men in gold uniforms stand on the red carpet. It was the one landmark in a building 1,848 feet long, so visitors used it to arrange where to meet.',
    },
    {
      id: 'the-canopy',
      x: 0.55,
      y: 0.66,
      scale: 3.4,
      caption:
        'The court stands on the red platform. Guardsmen in white-plumed helmets are ranked behind them, and two officers wait at the foot of the steps. Only 2,500 tickets were printed for opening day, and every one sold.',
    },
    {
      id: 'the-glass-roof',
      x: 0.5,
      y: 0.16,
      scale: 2.6,
      caption:
        'Paxton curved the roof high over the middle of the building rather than cut down Hyde Park’s elms. One of the trees stands here with its top inside the glass. Sparrows moved into the branches and would not leave.',
    },
  ],
} satisfies MockSceneDef;

export const halfALeague = {
  slug: 'half-a-league',
  title: 'Half a League',
  dek: 'A garbled order sends six hundred horsemen down the wrong valley',
  story:
    'At about eleven in the morning on the twenty-fifth of October, 1854, a written order came down the heights above Balaclava and stopped making sense on the way. Lord Raglan, watching the whole battlefield from a ridge, could see Russian gunners hauling off captured British guns and wanted his cavalry to stop them. His note said only to advance rapidly and prevent the enemy carrying away the guns. Down in the valley, the ground hid the guns Raglan meant. Lord Lucan read the same words and could see just one battery: a line of Russian artillery a mile off at the far end, with the whole Russian army behind it. He asked which guns. The officer who had carried the note was Captain Louis Nolan, a cavalry man with no patience for careful superiors. He flung out his arm toward the wrong end of the valley and said there was the enemy, there were the guns.\n\nSo they went. About 670 riders of the Light Brigade, the finest light horse in the army, trotted then galloped down a mile of open ground with Russian batteries on three sides. Nolan rode out ahead, perhaps realizing the mistake, perhaps trying to turn the line, and was killed by one of the first shells before he could say a word. The rest kept on into what a French general watching from the flank called magnificent, but not war. They reached the guns. They cut down gunners, scattered cavalry behind the battery, and then, with no support and no reason to stay, turned and rode the same mile back through the same fire.\n\nIt lasted about 20 minutes. About 110 of the men who started were killed and another 130 wounded. Some 60 were taken prisoner, and 335 horses were killed or had to be destroyed. The brigade as a fighting unit was gone by lunch. Back in England, the disaster became glory almost at once. The Times correspondent William Russell had watched it happen and wrote it up for readers at breakfast. Six weeks later Alfred Tennyson read the account, caught on the phrase someone had blundered, and wrote his poem in a few minutes. Theirs not to reason why, it went, theirs but to do and die. The nation chose to remember the courage and forget, mostly, the arithmetic of who had blundered.\n\nWilliam Simpson was in the Crimea as a war artist, sent out by a London print seller to sketch the campaign for people at home. His view of the charge was one of the first pictures the public saw. He worked from the ground itself and from officers’ accounts. He drew the brigade small and far off, its lines strung across bare open country, with dead horses lying between them and the guns firing in from the flanks. Lucan and Cardigan, the brothers-in-law who between them had launched the charge, spent the rest of their lives blaming each other in print. Nolan, the one man who might have explained what he meant by that sweep of his arm, was buried in the Crimea, his intention gone with him.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '25 October 1854',
  historicalYear: 1854,
  historicalMonthDay: toMonthDay('10-25'),
  artTitle: 'Charge of the Light Cavalry Brigade',
  artCredit: 'William Simpson, 1855',
  imageUrl: bucketPainting('scenes/half-a-league.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/half-a-league.jpg'),
  details: [
    {
      id: 'into-the-valley',
      x: 0.36,
      y: 0.55,
      scale: 2.6,
      caption:
        'The 13th Light Dragoons and the 17th Lancers ride in the first line of the charge, across ground already covered with dead horses. Colnaghi sold a key plate with the print that named every regiment here and listed the officers. The list went down to Captain Webb, who died of his wounds.',
    },
    {
      id: 'the-guns',
      x: 0.76,
      y: 0.7,
      scale: 2.6,
      caption:
        'Gun after gun goes off in line. The ammunition carts and horse teams wait behind the smoke, along with the limbers that tow the guns. The brigade rode into fire from three sides and then rode back out through it.',
    },
    {
      id: 'the-mounted-officers',
      x: 0.371,
      y: 0.7,
      scale: 2.8,
      caption:
        'Rank behind rank of cavalry sits still in the near ground with lances upright. Beyond them the charge runs on across open ground. One man on a grey horse has come out in front of the line.',
    },
  ],
} satisfies MockSceneDef;

export const theHighWaterMark = {
  slug: 'the-high-water-mark',
  title: 'The High Water Mark',
  dek: '12,000 men cross a mile of open field toward a small clump of trees',
  story:
    'On the afternoon of the third of July, 1863, after two days of fighting outside the Pennsylvania town of Gettysburg, Robert E. Lee gambled the war on a single charge across open ground. For nearly two hours his guns hammered the low ridge where the Union army waited, the largest artillery bombardment ever heard on the continent, and much of it sailed long and hit empty grass. Then the guns went quiet. About 12,000 Confederate infantry stepped out of the tree line at the far edge of a field almost a mile wide. They dressed their ranks in the open as if on parade and began to walk toward the center of the Union line. Their aim point was a small copse of trees on Cemetery Ridge, a clump you could throw a stone across.\n\nThey walked into converging fire from the first step. Artillery on the ridge switched to canister, which turned each cannon into a giant shotgun. Rifles opened along a mile of stone wall. Men fell in rows and the rows closed up and kept coming. A few hundred under General Lewis Armistead reached the wall and crossed it. Armistead held his hat up on the point of his sword so his men could see him. For a few minutes the fighting went hand to hand among the Union guns. Then the counterattack closed in from both sides, Armistead fell mortally wounded with his hand on a Union cannon, and the charge broke. Barely half the men who started across that field walked back. Lee rode out to meet the survivors and told them the fault was his alone.\n\nThe copse of trees became the most argued-over patch of ground in the country. In the 1880s an iron fence went up around it to stop souvenir hunters carrying the trees away in pieces. A marker named it the high-water mark of the Confederacy, the farthest north the rebellion ever got. The war ran on for two more years. Veterans of both armies came back to walk the field and disagree about where exactly the line had held.\n\nThe painting was never meant as a record. It was built to put a viewer inside the moment. Paul Philippoteaux was a Frenchman who painted cycloramas: canvases hung in a full circle, so the viewer stood at the center with the scene all around him. He spent months at Gettysburg with a photographer and a sketchbook, interviewing officers and mapping the ground. The finished circle ran 42 feet high and 377 feet around, and when it opened in the 1880s people wept and some old soldiers saluted the painted line. Philippoteaux put himself in it, a lone officer leaning against a tree with a sword. He painted four versions to meet the demand. The one at Gettysburg still hangs in the round, and the copse of trees stands in it exactly where the men were told to aim.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '3 July 1863',
  historicalYear: 1863,
  historicalMonthDay: toMonthDay('07-03'),
  artTitle: 'Gettysburg Cyclorama',
  artCredit: 'Paul Philippoteaux, 1883',
  imageUrl: bucketPainting('scenes/the-high-water-mark.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-high-water-mark.jpg'),
  details: [
    {
      id: 'the-clash-at-the-wall',
      x: 0.9,
      y: 0.62,
      scale: 2.6,
      caption:
        'Musket barrels crowd along a low stone wall and fire over the top into open grass. This is the Union line the charge was aimed at. A few hundred men got over it before the counterattack closed in.',
    },
    {
      id: 'the-guns',
      x: 0.285,
      y: 0.53,
      scale: 2.6,
      caption:
        'A cannon goes off with the flash still at the muzzle. Its crew is scattered around the wheels. The gunners had switched to canister, which turns a cannon into a giant shotgun.',
    },
    {
      id: 'the-fallen',
      x: 0.75,
      y: 0.54,
      scale: 2.2,
      caption:
        'A clump of trees stands on Cemetery Ridge, and the whole charge was told to steer for it. Men fight hand to hand at its foot. Philippoteaux spent months on this ground with a photographer before he painted it.',
    },
  ],
} satisfies MockSceneDef;

export const doneInOneWord = {
  slug: 'done-in-one-word',
  title: 'Done in One Word',
  dek: 'Two railroads meet in the desert and the whole country hears the hammer',
  story:
    'On the tenth of May, 1869, two locomotives faced each other across a single missing rail on a treeless rise in Utah called Promontory Summit. A crowd of a few hundred railroad men, soldiers, and reporters waited in the wind for one blow of a hammer. For six years the Central Pacific had blasted east out of California through the granite of the Sierra, and the Union Pacific had graded west across the plains. The last gap was now one length of track and a ceremonial spike of gold. A telegraph wire was clipped to the spike and to the hammer so the country could hear the join as it happened. Every blow would go out live down the wires.\n\nLeland Stanford, president of the Central Pacific, swung first and missed the spike entirely, hitting the rail. The telegraph operator, unwilling to wait on a governor’s aim, simply tapped out the message himself. One word went to both coasts at once: DONE. San Francisco fired its guns. Chicago threw together a parade 7 miles long, and in Philadelphia they rang the bell in Independence Hall. The two engines, the Central Pacific’s Jupiter and Union Pacific number 119, then rolled forward until their cowcatchers nearly touched, and the crews passed a bottle of champagne between them. The gold spike was pulled straight back out and replaced with an iron one. It was never meant to stay in the ground.\n\nThe men who had actually laid the rails were mostly not in the photographs. Thousands of Chinese laborers had cut the Central Pacific’s roadbed through the mountains for lower pay and worse odds, and a crew of 8 of them laid the final rail that morning. When the ceremony was arranged, they were moved aside. A single line in one account notes a foreman calling them up to be thanked, and then the cameras looked the other way.\n\nThe grand painting of the moment is a fiction assembled after the fact. Stanford commissioned Thomas Hill, a landscape painter, to record the scene, and Hill worked for years from photographs and portraits. He packed the canvas with about 400 figures, 70 of them portraits of named men. Many of those men were nowhere near Promontory that day. Stanford wanted the founders and financiers present in paint whether or not they had come. Two Chinese workers are in the picture, down at the rail with a shovel and an iron bar, hemmed in by frock coats. Stanford then refused to pay for the picture he had ordered. Hill had given it four years and his own money, and the bill for the day the country was sewn together went unpaid.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '10 May 1869',
  historicalYear: 1869,
  historicalMonthDay: toMonthDay('05-10'),
  artTitle: 'The Last Spike',
  artCredit: 'Thomas Hill, 1881',
  imageUrl: bucketPainting('scenes/done-in-one-word.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/done-in-one-word.jpg'),
  details: [
    {
      id: 'the-last-rail',
      x: 0.42,
      y: 0.7,
      scale: 2.6,
      caption:
        'Two Chinese laborers stand over the last rail and one of them wears a woven straw hat. A grey-haired man kneels with the spike hammer. A Chinese crew of 8 laid this rail on the morning of the ceremony.',
    },
    {
      id: 'the-locomotives',
      x: 0.625,
      y: 0.375,
      scale: 3.2,
      caption:
        'One of the two engines steams up behind the crowd with a flag on its side. Men climb the cab to see over the heads. After the ceremony the engines rolled forward until their cowcatchers almost touched, and the crews passed champagne between them.',
    },
    {
      id: 'the-figure-in-black',
      x: 0.17,
      y: 0.56,
      scale: 2.6,
      caption:
        'Frock coats and beards pack the front of the crowd, shoulder to shoulder. Hill worked 70 of his roughly 400 figures up into recognizable portraits. Many of those men never came to Promontory.',
    },
  ],
} satisfies MockSceneDef;

export const twoHundredSketches = {
  slug: 'two-hundred-sketches',
  title: 'Two Hundred Sketches',
  dek: 'On a Montana hillside a column is surrounded and gone within the hour',
  story:
    'Around three in the afternoon on the twenty-fifth of June, 1876, five companies of the Seventh Cavalry under George Armstrong Custer rode into the largest gathering of Plains warriors anyone would ever see. They were on a bare ridge above the Little Bighorn River in Montana Territory, and they had perhaps an hour to live. Custer had split his regiment into three parts and attacked a village he could not properly see, an encampment of Lakota, Cheyenne, and Arapaho holding several thousand fighting men. Sitting Bull had drawn them together and, in a sun dance weeks before, had seen soldiers falling into camp upside down. Crazy Horse led a wing of the counterattack that swept up and around the ridge. The soldiers shot their own horses for cover and fought on foot in shrinking knots.\n\nWithin the hour Custer and every man of his immediate command was dead, about 210 of them, on a slope that is still marked today with white stones where the bodies were found. It was the worst defeat the United States Army suffered in all the wars against the Plains nations. The news landed in the papers in the first week of July, in the middle of the country’s hundredth birthday. The public wanted a hero and a last stand, and got both, whether or not the ground supported the story. Almost no one who could describe the final minutes had survived on Custer’s side. The fullest accounts came from the warriors who won.\n\nEdgar Paxson was a young sign painter and militia scout in Montana when the news came, and the battle took hold of him and would not let go. He gave it 20 years. He wrote to survivors on both sides and interviewed the Lakota leaders Gall and Rain-in-the-Face, and, he claimed, Sitting Bull himself. He walked the ground and spoke with dozens of soldiers who had ridden with the other columns. He wanted every uniform button and feather right. When he finally began the canvas around 1895, he sketched each figure on its own sheet before committing it, and the finished painting holds more than 200 separate men, no two poses alike.\n\nThe picture Paxson delivered in 1899 is 6 feet by 9 and reads as a single roar of dust, smoke, war clubs and carbines. Custer stands high in the middle of it in buckskin with a pistol, ringed and almost swallowed. It is not what a camera would have caught, and Paxson knew it. He built the moment the country wanted to believe out of 20 years of asking the people who were there. He painted the words COPYRIGHT BY in red across the bottom corner, above his signature. He kept the 200 sketches. Each one is a portrait of a man he had good reason to think was on that hill.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '25 June 1876',
  historicalYear: 1876,
  historicalMonthDay: toMonthDay('06-25'),
  artTitle: 'Custer’s Last Stand',
  artCredit: 'Edgar Samuel Paxson, 1899',
  imageUrl: bucketPainting('scenes/two-hundred-sketches.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/two-hundred-sketches.jpg'),
  details: [
    {
      id: 'custer-standing',
      x: 0.5,
      y: 0.33,
      scale: 2.8,
      caption:
        'Custer stands at the center in buckskin, his revolver down at his hip. A warrior swings a stone club behind him. Almost nobody on Custer’s side lived to describe these minutes, so Paxson built them from what the winners told him.',
    },
    {
      id: 'the-guidon',
      x: 0.17,
      y: 0.575,
      scale: 2.8,
      caption:
        'A small flag hangs off its lance among the dead. Each cavalry company carried one, called a guidon. A bare hand reaches up out of the sagebrush toward it, and behind it a bugler still has the horn at his lips.',
    },
    {
      id: 'the-foreground-fallen',
      x: 0.34,
      y: 0.78,
      scale: 2.4,
      caption:
        'Dead and dying troopers lie heaped in the sagebrush. One of them is still crawling forward on his belly with a hand out. Paxson drew each of the 200 or so men in this picture on a separate sheet first, and no two poses are alike.',
    },
  ],
} satisfies MockSceneDef;

export const theProtestInParis = {
  slug: 'the-protest-in-paris',
  title: 'The Protest in Paris',
  dek: 'A letter signed by 47 artists begs Paris to tear the tower down',
  story:
    'On the fourteenth of February, 1887, the newspaper Le Temps printed a letter on its front page. It called the iron thing going up by the Seine a useless and monstrous tower, and demanded it come down before it shamed the city forever. There were 47 signatures, and they were not cranks. The writer Guy de Maupassant signed, and Alexandre Dumas the younger, the composer Charles Gounod, and Charles Garnier, who had built the Paris Opera. They wrote as the guardians of French taste against a factory chimney dressed up as a monument, and they were sure history would side with them. Work had begun 17 days earlier and had not got past the foundations. The tower had 2 years and a great deal of iron still to go.\n\nGustave Eiffel, a bridge engineer, answered them in the same paper with the calm of a man reading a balance sheet. He argued that there was an attraction in the colossal, that the forms of engineering had a beauty of their own, and then he went on building. The tower was the entrance arch to the 1889 world’s fair, held to mark a hundred years since the French Revolution. It climbed to nearly a thousand feet on 18,000 iron parts held by two and a half million rivets. Nothing people had built had ever stood that tall, and it kept the record for 41 years. Maupassant, the story goes, took to eating lunch in the tower’s own restaurant, because it was the one place in Paris where he did not have to look at it.\n\nAt least one artist went the other way. Georges Seurat built his pictures out of tiny separate dots of pure color. He went to see the tower while it was still going up, and he painted it plainly and warmly, as a thing worth looking at. His panel shows the tower glowing orange and rose against a sky stippled in blue, with nothing apologetic about it. He painted it in the months before the fair opened, while the tower was still not quite finished.\n\nThe surprise of the painting is its size. For a monument that would top out near a thousand feet, Seurat’s picture is about 6 inches by 9 and a half. He painted it on a wood panel small enough to hold in two hands, and it is kept now in San Francisco. Seurat did not live to be proven right by the crowds. He died in 1891 at 31, of an illness that took him in a few days. The tower is still standing. The letter in Le Temps now reads mostly as a list of people who guessed wrong.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '14 February 1887',
  historicalYear: 1887,
  historicalMonthDay: toMonthDay('02-14'),
  artTitle: 'The Eiffel Tower',
  artCredit: 'Georges Seurat, 1889',
  imageUrl: bucketPainting('scenes/the-protest-in-paris.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-protest-in-paris.jpg'),
  details: [
    {
      id: 'the-lattice',
      x: 0.46,
      y: 0.55,
      scale: 2.2,
      caption:
        'The ironwork climbing to the second platform, made out of separate dots of paint laid side by side. Seurat set orange against blue and left the mixing to the eye of whoever stood in front of it.',
    },
    {
      id: 'the-base',
      x: 0.47,
      y: 0.78,
      scale: 2.2,
      caption:
        'The arch under the first platform, with low buildings crowded at the foot of its right leg. The tower was almost finished when Seurat painted it in 1889, and 47 artists had already signed a letter demanding it come down.',
    },
    {
      id: 'the-stippled-sky',
      x: 0.44,
      y: 0.1,
      scale: 2.4,
      caption:
        'The top of the tower thins out and loses itself in a sky of small blue and cream dots. The orange and blue stripe across the very top is a border Seurat painted straight onto the panel.',
    },
  ],
} satisfies MockSceneDef;
export const theWindowFacingEast = {
  slug: 'the-window-facing-east',
  title: 'The Window Facing East',
  dek: 'Locked in an asylum, a painter builds the night sky from memory',
  story:
    'On the eighth of May, 1889, Vincent van Gogh checked himself into an old monastery outside the town of Saint-Rémy, in Provence, that had been turned into an asylum for the mentally ill. He went of his own accord. The months in Arles had ended badly: the winter he cut off part of his own ear, the petition from frightened neighbors, the spells when he did not know himself. At Saint-Paul-de-Mausole he took two small rooms and the run of a walled garden, and the doctors let him keep painting. He had a bedroom on the upper floor with an iron grille across the window, and the window faced east, over a wheatfield and a low line of hills.\n\nHe watched that window in the dark. In a letter to his brother Theo he wrote, this morning I saw the countryside from my window a long time before sunrise, with nothing but the morning star, which looked very big. The morning star is the planet Venus, and in June of 1889 it stood bright in the hour before dawn. Some weeks after writing that line he painted the night sky he had been studying, and he painted it in daylight, from memory, in a room where he was not allowed to work outdoors alone. The sky in the picture is a pre-dawn sky reassembled by a man looking at a blank wall.\n\nAlmost nothing in the painting is the view. The hills are roughly the hills of Saint-Rémy, but the village underneath, the huddle of houses and the tall thin church steeple, was never there. Van Gogh invented it, and the spire he gave it belongs more to the Dutch churches of his childhood than to anything in Provence. The one great vertical shape that is real to him is the cypress on the left, the dark flame that climbs past the top edge of the canvas. He loved cypresses that year and could not stop looking at them. He told Theo one was beautiful as regards lines and proportions, like an Egyptian obelisk. In Provence the cypress is the tree people plant in graveyards.\n\nHe stayed at the asylum a year and worked at a furious rate between his attacks, more than a hundred canvases in twelve months. In the spring of 1890 he left for a village near Paris. He shot himself that July and died two days later, on the twenty-ninth, at 37. He had sold almost nothing and had no reason to think the night sky he built from memory would outlive him by a week. It hangs now in New York, which got it in 1941 by trading away two Cézannes and a Toulouse-Lautrec. The moon in it is wrong as well. Astronomers have worked the sky back to that June and found a moon more than half full, and he painted a crescent. The record kept the date. The canvas keeps the invention.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: 'June 1889',
  historicalYear: 1889,
  historicalMonthDay: null,
  artTitle: 'The Starry Night',
  artCredit: 'Vincent van Gogh, 1889',
  imageUrl: bucketPainting('scenes/the-window-facing-east.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-window-facing-east.jpg'),
  details: [
    {
      id: 'the-swirl',
      x: 0.55,
      y: 0.35,
      scale: 2.6,
      caption:
        'Two waves roll through the middle of the sky. Each one is built from separate thick strokes of blue and white. Van Gogh painted them indoors, in daylight, from memory.',
    },
    {
      id: 'the-moon',
      x: 0.88,
      y: 0.09,
      scale: 2.8,
      caption:
        'The moon burns inside a ring of yellow light, with one star beside it. Astronomers later worked out what the sky looked like that June. The moon was more than half full, not this crescent.',
    },
    {
      id: 'the-village',
      x: 0.55,
      y: 0.85,
      scale: 2.6,
      caption:
        'A tall thin steeple rises over the village roofs, and a few windows are still lit. No such town stood below Van Gogh’s window. He added it, and gave it a spire from the Dutch churches of his childhood.',
    },
  ],
} satisfies MockSceneDef;

export const theCityMadeOfLight = {
  slug: 'the-city-made-of-light',
  title: 'The City Made of Light',
  dek: 'Chicago builds a city out of white plaster and lights it with 200,000 bulbs',
  story:
    'President Grover Cleveland laid his hand on a single gold telegraph key and pressed it, and a made-up city of white plaster began to run. It was noon on the first of May, 1893, in Jackson Park, Chicago. The engines turned, the fountains threw water a hundred feet up, flags dropped from the roofs. The fair was called the World’s Columbian Exposition, timed a year late to mark four centuries since Columbus. Its core of columned halls was faced in staff, a cheap mix of plaster and jute that photographed like marble. People called it the White City, and it earned the name twice: once by daylight for the plaster, once after dark for the light.\n\nThe light also settled a fight. The contract to power the fair had come down to two bids. Thomas Edison’s people at General Electric offered direct current, the system already wired into American cities. George Westinghouse offered the alternating current that Nikola Tesla had patented, and bid it at 399,000 dollars, well under Edison. Westinghouse won. The fair ran on Tesla’s current from a dozen thousand-horsepower generators and burned more than 200,000 lamps, proof at the scale of a small city that AC could be trusted. General Electric struck back by forbidding the use of Edison’s patented bulb on the grounds. Westinghouse simply designed a different bulb, a two-piece stopper lamp that dodged the patent, and made a quarter of a million of them by hand to fill the sockets.\n\nMost of the people who came had never stood in electric light. In six months 27 million of them passed through, better than a third of everyone in the country. Many wrote that the night was the thing they could not describe: the whole court outlined in bulbs, searchlights sweeping the sky, the water lit from beneath. A Pittsburgh engineer named George Ferris had answered the fair’s call for something to rival the Eiffel Tower. His wheel stood 264 feet high and carried 36 cars the size of streetcars, turning slowly over the Midway. The light is what the visitors kept.\n\nThe end was not the jubilee anyone planned. On the evening of the twenty-eighth of October, two days before the close, a disappointed office-seeker named Prendergast walked into the mayor’s house and shot Carter Harrison dead in his own hall. The grand closing ceremony became a memorial instead, the flags at half-staff over the white plaster. Fire took most of the buildings in July 1894, and staff had never been built to last a winter. John Twachtman, an American painter who worked in soft broken color, was there, and the canvas he left is not the electric night at all. He painted the Court of Honor by pale day, the gilded dome and the white halls half dissolved in haze, the whole marvel already looking like something remembered. The canvas is in Columbus, Ohio now, its plaster city gone to mist a year before fire took the real one.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1 May 1893',
  historicalYear: 1893,
  historicalMonthDay: toMonthDay('05-01'),
  artTitle: 'Court of Honor',
  artCredit: 'John Henry Twachtman, 1893',
  imageUrl: bucketPainting('scenes/the-city-made-of-light.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-city-made-of-light.jpg'),
  details: [
    {
      id: 'the-dome',
      x: 0.6,
      y: 0.41,
      scale: 2.4,
      caption:
        'The gilded dome of the Administration Building rises at the head of the basin. Red columns stand in the shadow under it. Twachtman painted this court by daylight, and after dark the same court was strung with bulbs.',
    },
    {
      id: 'the-white-city',
      x: 0.3,
      y: 0.5,
      scale: 2.4,
      caption:
        'Halls with rows of columns run along the basin, and their domes and towers go soft in the mist. The walls were faced in staff, a cheap plaster that looked like marble in photographs. Most of them burned in the fire of July 1894.',
    },
    {
      id: 'the-promenade',
      x: 0.8,
      y: 0.65,
      scale: 2.6,
      caption:
        'Two figures stand at the white stone railing under parasols. Lamp posts and red banners rise behind them, and a team of white horses waits in the haze. The fair drew 27 million people in 6 months, and most of them had never stood in electric light.',
    },
  ],
} satisfies MockSceneDef;

export const theDayTheTsarGaveIn = {
  slug: 'the-day-the-tsar-gave-in',
  title: 'The Day the Tsar Gave In',
  dek: 'A signed sheet of paper sends singing crowds and red flags into the streets',
  story:
    'The year in Russia had opened in blood. On the ninth of January, 1905, a priest named Georgy Gapon led thousands of workers toward the Winter Palace in Saint Petersburg to hand the tsar a petition. The men came in their good clothes, many carrying icons and portraits of Nicholas himself. The guards fired on them in the snow. Hundreds died, and the day was named Bloody Sunday, and the faith that the tsar was a father who did not know his people were suffering died with them. Strikes spread through the winter and spring, then a mutiny in the Black Sea fleet, then, in October, a general strike that stopped the trains, the presses, the lights, and finally the whole country.\n\nWith the empire at a standstill, Nicholas II signed a single sheet of paper on the seventeenth of October, 1905. The October Manifesto promised what Russia had never had: freedom of speech and assembly, an elected parliament called the Duma, the beginnings of a constitution. He signed it because his ministers told him the only other choice was a military dictatorship, and he signed it hating every word. When word reached the streets the strike turned to carnival in an afternoon. Students, professors, and workers poured out under red flags, singing the revolutionary songs that had been illegal the day before, hoisting men just released from the prisons up onto their shoulders.\n\nThat afternoon is what Ilya Repin painted, though he did not begin until 1907 and kept reworking the canvas until 1911. Repin was the most famous painter in Russia, the man who had painted the barge haulers on the Volga and Ivan the Terrible cradling the son he had just killed. He built this crowd out of single faces rather than a mass. A man in a dark frock coat rides on shoulders with one arm thrown up. Beside him a bare arm holds a bunch of red flowers, and the mouths all around are open on a song.\n\nThe joy in the picture was already a lie by the time the paint dried. The freedoms the manifesto promised were clawed back within months, and the Duma was dissolved when it displeased the crown. The same autumn that produced the singing crowds produced pogroms in dozens of towns, mobs beating and killing Jews while the police looked away. Repin knew all of it and painted the singing anyway, the one hour when the street believed it had won. He painted the date into the picture as well, on a white banner over the crowd: 1905, 17 October. Within 12 years the tsar was gone, and the men who finished him carried the same red flags down the same streets.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '17 October 1905',
  historicalYear: 1905,
  historicalMonthDay: toMonthDay('10-17'),
  artTitle: '17 October 1905',
  artCredit: 'Ilya Repin, 1907–1911',
  imageUrl: bucketPainting('scenes/the-day-the-tsar-gave-in.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-day-the-tsar-gave-in.jpg'),
  details: [
    {
      id: 'the-freed-man',
      x: 0.29,
      y: 0.24,
      scale: 2.6,
      caption:
        'A man in a dark frock coat and a white bow tie rides on the crowd’s shoulders with one arm thrown up. Someone below him waves a wide black hat. Red banners fill the space behind.',
    },
    {
      id: 'the-red-bouquet',
      x: 0.55,
      y: 0.22,
      scale: 2.4,
      caption:
        'A bare arm comes up out of the crowd with a bunch of red flowers. The white sleeve has fallen back and a red scarf trails from it. Repin began this canvas in 1907, 2 years after the day it shows, and was still reworking it in 1911.',
    },
    {
      id: 'the-shout',
      x: 0.74,
      y: 0.55,
      scale: 2.6,
      caption:
        'A student in a blue peaked cap sings with his mouth wide open, and the man beside him in a blue uniform coat sings too. Those songs had been illegal the day before.',
    },
  ],
} satisfies MockSceneDef;

export const ledInPartiesOfSix = {
  slug: 'led-in-parties-of-six',
  title: 'Led in Parties of Six',
  dek: 'A gas barrage leaves a field of blinded men, and an old painter watches',
  story:
    'On the twenty-first of August, 1918, near a dressing station at Le Bac-du-Sud, on the road between Arras and Doullens, John Singer Sargent sat on the grass and watched blinded men come in. He was 62, the most sought-after portrait painter of his age, sent to the Western Front by a British committee that wanted a great picture of the war for a hall of remembrance. A German barrage had put mustard gas over two brigades of British infantry, and the gas did what it does slowly. Hours after a man breathed it or got it on his skin, his eyes swelled shut and blistered. He went blind, usually for days, sometimes for good. The gas rarely killed. It filled the field with men who could walk but could not see.\n\nSargent wrote down what he saw. The gassed cases kept coming in, he noted, led along in parties of about six, each man’s hand on the shoulder of the man in front, guided by an orderly who could see. They sat and lay on the ground in their hundreds, eyes covered with a strip of lint. That single arrangement, the file of blind soldiers roped together by touch, is the whole of the painting he built from it. The finished canvas is enormous, 7.5 feet high and 20 feet long. It puts the viewer where he sat: a low golden evening, two files of bandaged men shuffling forward across ground carpeted with the men already down.\n\nHe painted it back in London and finished it in March 1919, and he did one thing that the eyewitness in him could not resist. Far back on the skyline, small enough to miss, a group of unhurt soldiers is playing football in blue and red shirts. The war went on around the gassed field exactly like that, a routine horror with a match beside it, and Sargent put the match in. He arranged the standing men in a shallow frieze across the front of the canvas. Several of them lift a foot high to step over a guy-rope or a body they cannot see, and the raised knees run down the line like a slow march.\n\nThe Royal Academy voted it the picture of the year in 1919. Not everyone was grateful for it. Virginia Woolf attacked its patriotism in print, and E. M. Forster thought it too heroic. Both of them were looking at a beautiful thing made out of a filthy one. The argument has never quite closed. Sargent went back to portraits and died six years later, in his sleep, in London. The painting hangs in the Imperial War Museum, 20 feet of low sun and bandaged eyes, and the football game is still going on behind the files, where almost nobody looks.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '21 August 1918',
  historicalYear: 1918,
  historicalMonthDay: toMonthDay('08-21'),
  artTitle: 'Gassed',
  artCredit: 'John Singer Sargent, 1919',
  imageUrl: bucketPainting('scenes/led-in-parties-of-six.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/led-in-parties-of-six.jpg'),
  details: [
    {
      id: 'the-file',
      x: 0.35,
      y: 0.42,
      scale: 2.4,
      caption:
        'Each man rests a hand on the shoulder of the one ahead. Their eyes are wrapped in lint and their packs and canteens are still on. Sargent wrote that the gassed were led along in parties of about six, and he built the whole painting out of that line.',
    },
    {
      id: 'the-blinded-man',
      x: 0.55,
      y: 0.35,
      scale: 3.0,
      caption:
        'A soldier in shirtsleeves keeps his place in the file with a strip of lint tied over his eyes and his chin lifted. Mustard gas rarely killed. It swelled the eyes shut and blistered them, usually for days and sometimes for good.',
    },
    {
      id: 'the-fallen',
      x: 0.42,
      y: 0.8,
      scale: 2.4,
      caption:
        'Men lie sprawled across each other on the ground. Lint covers their eyes and their helmets sit beside them. Sargent watched hundreds of them at the dressing station while the standing files were led out over them.',
    },
  ],
} satisfies MockSceneDef;

export const theColossusAndTheFlag = {
  slug: 'the-colossus-and-the-flag',
  title: 'The Colossus and the Flag',
  dek: 'A painter who cannot walk sends a giant striding across the revolution',
  story:
    'By 1920 Boris Kustodiev had not walked in years. Tuberculosis of the spine had put him in a wheelchair. He spent a year in a private Swiss clinic, and in 1916 he lost the use of his legs for good. He lived in Petrograd, the city that had been Saint Petersburg, through the February revolution that took the tsar and the October one that brought the Bolsheviks. He saw almost none of it in the street. He watched the crowds and the red flags from his window, then had the canvas brought to him and painted lying back, unable to stand in front of his own work.\n\nWhat he painted that year was a giant. A huge peasant in a fur cap and a long green scarf strides across a snowbound Russian town, taller than the churches. Both his hands are closed on the staff of a red flag so long it becomes the entire sky. Between his boots the real streets run small and dark, packed with a crowd flowing along the walls of yellow houses like water finding a channel. The flag streams out behind and above everything, over the rooftops, brushing past the gold-studded blue dome of an Orthodox church at the edge of the town. The colossus does not look down. He looks straight ahead, out past the frame, and keeps walking.\n\nThe strange thing is who made it and how he felt. Kustodiev was not a fighter or a firebrand. He was the great painter of fat merchants and country fairs, of women drinking tea on summer balconies, of the plump comfortable Russia the revolution was busy destroying. He went on painting those sunlit scenes from his wheelchair to the end. The Bolshevik is his one thunderclap. Historians still argue over what he meant by the giant. He is either a hero carrying the future or a blind force too big to reason with, crushing the small bright city under its feet. The picture answers both ways at once.\n\nHe painted it in the middle of a civil war that would kill millions, with a famine on the way. It went to the Tretyakov Gallery in Moscow, where it stays, 101 by 140 centimeters of red. Kustodiev lived seven more years and died in 1927, at 49, in the chair, painting the fairs and the balconies to the last. The giant walks out past the edge of the canvas, toward something the painter who could not stand never named.',
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1920',
  historicalYear: 1920,
  historicalMonthDay: null,
  artTitle: 'The Bolshevik',
  artCredit: 'Boris Kustodiev, 1920',
  imageUrl: bucketPainting('scenes/the-colossus-and-the-flag.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-colossus-and-the-flag.jpg'),
  details: [
    {
      id: 'the-giant',
      x: 0.45,
      y: 0.15,
      scale: 2.6,
      caption:
        'A red-bearded giant in a fur cap and a fringed green scarf stands against a green sky. One fist is closed high on the red pole. Kustodiev had been paralyzed from the waist down since 1916, and he painted this lying on his back.',
    },
    {
      id: 'the-red-sky',
      x: 0.7,
      y: 0.2,
      scale: 2.0,
      caption:
        'The flag sweeps out over the snowbound roofs and takes up the whole sky. Under it a dark crowd pours down the street past a white columned house. The green fringe at the left is the end of the giant’s scarf.',
    },
    {
      id: 'the-boots',
      x: 0.45,
      y: 0.62,
      scale: 2.4,
      caption:
        'The giant steps over the roofs of the town. Below his boots the streets are packed with people, and bayonets show above their heads. A blue motorcar has stopped at the edge of the crowd.',
    },
  ],
} satisfies MockSceneDef;

export const theLastBattleUnderSail = {
  slug: 'the-last-battle-under-sail',
  title: 'The Last Battle Under Sail',
  dek: 'Explosive shells end four thousand years of wooden war',
  story:
    "On the last day of November 1853, Admiral Nakhimov brought 6 Russian ships of the line into the harbor of Sinop, on the Turkish Black Sea coast. They came in through the rain squalls and anchored opposite the Ottoman frigate squadron, which was sheltering under the town's batteries. What followed was called a battle for diplomatic reasons. The Russian line carried something the wooden world had not yet taken in: Paixhans guns, firing explosive shells instead of solid shot. In a little over an hour the Ottoman squadron did not sink so much as burn to the waterline where it lay. The Russians destroyed 7 frigates and 3 corvettes and then silenced the shore batteries; the burning hulls went up one after another and set the town alight, with nobody left to fight it. Of the 4,200 Ottoman sailors present, about 2,700 were killed, and the paddle frigate Taif outran the Russian steamers to carry the news to Istanbul. The Russians lost 37 men and no ships, and the wounded Ottoman commander, Vice-Admiral Osman Pasha, was taken prisoner.\n\nThe completeness was the catastrophe. In London and Paris the newspapers ran the engagement as the massacre of Sinope: proof that Russia would swallow the failing Ottoman world unless stopped. Britain and France declared war within 4 months, and the age took the name of the peninsula where their armies landed: the Crimea. The Light Brigade elsewhere in this museum charged in the same war. The other consequence ran deeper than any front. Explosive shells against oak settled an argument navies had been avoiding. Within 6 years France launched the first ironclad and Britain answered with an iron one. The fleets that had fought from Lepanto to Trafalgar in wooden walls were out of date in a decade. Sinop was the last great fleet action of the age of sail, and both facts, the last and the reason it was the last, are in the flames.\n\nAivazovsky, the Black Sea's own painter, put two canvases on the battle within the year, the daylight action and this one, the night after. He painted the harbor as a furnace under a smoke sky, with the Russian line dark and orderly at the left. In the foreground a broken spar carries survivors, because he never painted a sea without insisting someone was in it.\n\nNakhimov had less than two years left; a sharpshooter killed him on the ramparts of Sevastopol defending the base his victory had made a target. The war his hour at Sinop ignited cost three quarters of a million lives and modernized every navy on earth, which is a heavy bill for the tidiest victory in Russian naval history.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '30 November 1853',
  historicalYear: 1853,
  historicalMonthDay: toMonthDay('11-30'),
  artTitle: 'The Battle of Sinop: Night After the Battle',
  artCredit: 'Ivan Aivazovsky, 1853',
  imageUrl: bucketPainting('scenes/the-last-battle-under-sail.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-last-battle-under-sail.jpg'),
  details: [
    {
      id: 'the-burning-line',
      x: 0.78,
      y: 0.6,
      scale: 2.6,
      caption:
        'Ottoman warships burn down to the waterline with their red flags still up on the masts. Embers drop through the smoke. Sinop was the first sea battle fought with explosive shells.',
    },
    {
      id: 'the-russian-line',
      x: 0.38,
      y: 0.708,
      scale: 3.4,
      caption:
        'The Russian warships ride at anchor with their rigging whole and their gun ports in rows. The fire they started burns past them. Nakhimov’s fleet lost 37 men and not one ship.',
    },
    {
      id: 'the-spar',
      x: 0.53,
      y: 0.86,
      scale: 3.2,
      caption:
        'Survivors crouch on a raft of broken masts while the burning hulls settle behind them. Aivazovsky never painted a sea without someone in it.',
    },
  ],
} satisfies MockSceneDef;

export const modernCyclopes = {
  slug: 'modern-cyclopes',
  title: 'Modern Cyclopes',
  dek: 'The forge of the gods relocates to Silesia',
  story:
    "Adolph Menzel was Germany's most honored painter of kings, a tiny, ferocious draughtsman who had spent decades on Frederick the Great. In 1872, at 56, he took his sketchbooks somewhere no major artist had worked before. It was the rail-rolling mill at Königshütte in Upper Silesia, one of the largest ironworks on the continent. He drew there for weeks, more than 100 studies of machines, rollers, tongs, faces, and the light that falls upward. The painting he built from them took three years, and when he exhibited it he gave it a second title in the old grand manner: Modern Cyclopes. The forge of the gods, relocated, with the gods removed from the payroll.\n\nThe canvas runs on the mill's own clock. At the center a crew wrestles a white-hot bloom of iron into the rollers with long tongs, the glow lighting them from below like footlights. Behind them the flywheel of the steam engine turns in the dark. In the right corner, and this was the shock of the picture, a second crew eats. A young woman has carried the basket in, and the men sit against a press a yard from the heat. The mill does not stop and neither do the 12-hour shifts. At the left, men strip to the waist and wash off the shift that just ended. Work, food, sleepwalking exhaustion, all inside one shed with no sky. Menzel painted it without accusation and without romance, which is why it accused so effectively. The industrialist who bought it, Adolf von Liebermann, went bankrupt within months. The Nationalgalerie in Berlin took it off him for 30,000 Taler, nearly three times what he had paid. A factory now hung among the kings and battles.\n\nGermany was four years old as an empire and industrializing at a violence no country had matched. The painting became its mirror. Industrialists admired it as an epic of production. The socialist press read it as an accusation, made by a court painter. Menzel, characteristically, declined to referee. He had painted what the place did to bodies and let the century argue about whose fault the bodies were.\n\nHe lived to 89 and was buried with honors a field marshal would envy. In this one canvas he left the machine age's founding group portrait. These are the men who made the rails that made everything else move, lit by the thing they were holding with tongs.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1875',
  historicalYear: 1875,
  historicalMonthDay: null,
  artTitle: 'The Iron Rolling Mill',
  artCredit: 'Adolph Menzel, 1875',
  imageUrl: bucketPainting('scenes/modern-cyclopes.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/modern-cyclopes.jpg'),
  details: [
    {
      id: 'the-bloom',
      x: 0.55,
      y: 0.55,
      scale: 2.2,
      caption:
        'The white-hot bar goes into the rollers on long tongs and throws sparks the length of the bed. The men holding it work bare-armed and without gloves, a step from the metal.',
    },
    {
      id: 'the-lunch',
      x: 0.85,
      y: 0.8,
      scale: 2.4,
      caption:
        'A young woman lifts a plate out of the basket she carried in. One man drinks from a tin can and the next eats off the blade of his knife. The shift goes on around them.',
    },
    {
      id: 'the-washer',
      x: 0.05,
      y: 0.53,
      scale: 3.0,
      caption:
        'Men strip to the waist and wash off the shift that just ended while the next crew hauls iron behind them. Menzel drew in this shed for weeks in the late summer of 1872 before he touched the canvas.',
    },
  ],
} satisfies MockSceneDef;

export const theRuinsKeptAsALesson = {
  slug: 'the-ruins-kept-as-a-lesson',
  title: 'The Ruins Kept as a Lesson',
  dek: 'The palace burns; the painter writes an epitaph in Latin',
  story:
    "In the spring of 1871 Paris had just survived a Prussian siege on rats and zoo animals. It refused to hand its cannon to the government that had signed the surrender. For 72 days the city ran itself as the Commune: part municipal republic, part standoff waiting for its ending. The ending came in the last week of May, when the army entered from Versailles and took the city back barricade by barricade. The week is still called la semaine sanglante, the bloody week; the courts-martial and the wall at Père Lachaise account for a body count usually given in five figures, and argued about ever since.\n\nAs the army closed in, the Commune's men put petroleum and fire to the monuments of the power they were losing. The Tuileries Palace, home of French rulers from Catherine de' Medici to Napoleon III, went up on the night of 23 May. It burned for two days into a roofless shell. Meissonier, the most expensive painter in France and no friend of the Commune, came to the wreck of the Salle des Maréchaux. He painted what the fire had left: the arches open to the sky, the marble columns burned white, the rubble field where the floor had been. Through the empty doorways, perfectly framed, is the quadriga of the Arc du Carrousel: the four-horse chariot on Napoleon's victory arch, untouched. On the fallen stone in the foreground he painted an inscription that is not there in fact, Latin of his own composing: the glory of the ancestors survives even through the flames. Above the arch, the carved names Marengo and Austerlitz still legible over the void, he had barely needed to invent anything; the building had written its own caption.\n\nThe ruin then had a second career as an argument. For 12 years the gutted palace stood in the middle of Paris. Monarchists wanted it rebuilt, as a building and as a regime, and republicans preferred to keep the lesson in plain sight. The republic won, and in 1883 the shell was pulled down, leaving the Louvre's arms open around a garden and an absence. The painting went to the national collection at Compiègne, where it remains the best record of the 12-year argument.\n\nMeissonier's Latin was a royalist's sigh, but the picture outgrew the politics. It is simply what a civilization looks like the morning after it loses an argument with itself: blue sky where the ceiling was, and the old victories still spelled correctly over the door.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: 'May 1871',
  historicalYear: 1871,
  historicalMonthDay: null,
  artTitle: 'The Ruins of the Tuileries',
  artCredit: 'Ernest Meissonier, 1871',
  imageUrl: bucketPainting('scenes/the-ruins-kept-as-a-lesson.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-ruins-kept-as-a-lesson.jpg'),
  details: [
    {
      id: 'the-names',
      x: 0.5,
      y: 0.14,
      scale: 2.4,
      caption:
        'Two names are carved over the arch, Marengo on the left and Austerlitz on the right. Both are still legible, and the arch now opens on sky. The fire took the ceiling and left the victories.',
    },
    {
      id: 'the-quadriga',
      x: 0.5,
      y: 0.63,
      scale: 2.6,
      caption:
        "Rubble covers the floor of the Salle des Maréchaux. The burned doorway frames the chariot and four horses on top of the Arc du Carrousel, where the fire never reached. Meissonier chose that sightline like a prosecutor.",
    },
    {
      id: 'the-inscription',
      x: 0.5,
      y: 0.95,
      scale: 2.6,
      caption:
        'The slab in the rubble carries a line of Latin: GLORIA MAIORVM PER FLAMMAS VSQVE SVPERSTES. It means the glory of the ancestors survives even through the flames, and the date under it is May 1871. Meissonier wrote the Latin himself and painted it onto a stone that never carried it.',
    },
  ],
} satisfies MockSceneDef;

export const theLastOfEngland = {
  slug: 'the-last-of-england',
  title: 'The Last of England',
  dek: 'A painter poses himself for the leaving he almost made',
  story:
    "In 1852 about 370,000 people left Britain, the largest exodus in its history to that point. They were Irish families still running from the famine's shadow, laborers priced out of everything, and, newly, the middle classes, because Australian gold had made leaving look like arithmetic. That summer Ford Madox Brown stood on the dock to see off his friend Thomas Woolner. Woolner was a sculptor of the Pre-Raphaelite circle who had given up on English patrons and shipped out for the Melbourne diggings. Brown was 31, broke, unfashionable, and privately weighing India for himself. The painting he began that year is the emigration statistic with faces. A young couple sit on the open stern of a packet boat named, with the century's own irony, Eldorado. The white cliffs shrink behind them, and cabbages for the voyage are netted along the rail.\n\nHe posed himself and his wife Emma for the pair, and painted outdoors through two winters. He worked on days, he noted, when the cold made the flesh look right: the particular purple of hands that have stopped complaining about it. Everything in the round panel is organized around two small warmths. The first is the husband's bare hand gripping his wife's gloved one on his knee. The second, almost hidden in her cloak, is the tiny fingers of a baby holding her other hand. The baby is the third passenger, and the picture shows it only to viewers who look the way parents watch. The man's face is set at the exact temperature between anger and grief that has no English name; the wife watches the country go with the steadier face of the two. Brown wrote that he had chosen educated emigrants deliberately, people bound to England by every tie except the ability to live in it.\n\nWoolner, the man the picture saw off, found no gold, came home within two years, and rose into the Royal Academy after all. That is the joke history played on the painting, and it costs the picture nothing: the couple on the canvas are not Woolner. They are the ones who did not come back. Brown himself stayed, stayed poor longer than he deserved, and became the painter Victorian Britain trusted with its work and its leavings.\n\nThe panel, corners left bare around the oval with the artist's color trials still on them, hangs in Birmingham, in the industrial city that manufactured many of the reasons for the voyage.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1855',
  historicalYear: 1855,
  historicalMonthDay: null,
  artCredit: 'Ford Madox Brown, 1855',
  imageUrl: bucketPainting('scenes/the-last-of-england.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-last-of-england.jpg'),
  details: [
    {
      id: 'the-hands',
      x: 0.42,
      y: 0.72,
      scale: 2.4,
      caption:
        'His bare hand closed over her black glove, the knuckles gone purple with cold. Brown painted the flesh outdoors on dull winter days on purpose, to get exactly that color.',
    },
    {
      id: 'the-third-passenger',
      x: 0.6,
      y: 0.55,
      scale: 2.6,
      caption:
        'A baby’s fingers come through the gap in the cloak and close on the mother’s hand. Brown gave the third passenger one square inch of canvas and no face.',
    },
    {
      id: 'the-cliffs',
      x: 0.87,
      y: 0.1,
      scale: 2.4,
      caption:
        'The chalk cliffs and one steamer crossing under them, all the England left in the frame. Outside the painted edge Brown left the panel bare, with a dab of red still sitting on it.',
    },
  ],
} satisfies MockSceneDef;

export const whatTheArmyDreams = {
  slug: 'what-the-army-dreams',
  title: 'What the Army Dreams',
  dek: 'The conscripts sleep; the eagles march over them',
  story:
    "France after 1870 was a country organized around a bruise. The defeat by Prussia had cost it two provinces, an emperor, and its settled belief that it had Europe's first army. The Third Republic rebuilt its forces around universal conscription: every young man to the barracks, the nation itself as the army in waiting. The word for the mood was revanche, and it needed pictures. Édouard Detaille, star pupil of Meissonier and the most exact military painter alive, supplied the definitive one at the Salon of 1888, and the state bought it at once.\n\nLe Rêve is a bivouac, an army camped in the open, at first light during the autumn maneuvers. A field of conscripts sleeps in greatcoats in two long rows, kepis still on, a white dog stretched out among them. The rifles are stacked in neat tripods down the line, with the furled colors laid flat across them. Above, in the dawn clouds, is the dream, shared by the whole field as one man. The armies of the First Empire come on at full charge, eagles up, flags gloriously shredded, the grandfathers' wars flying past over the grandsons. The painting's craft is all in the way the two halves touch. The mist of the real field rises until it becomes the smoke of the imagined one, and nothing marks the line where the weather ends and the inheritance begins.\n\nIt became the Republic's icon: engraved, chromolithographed, hung in schoolrooms and barracks, the approved image of what military service meant, sleep now, glory pending. Read from the other side of 1914, the picture changes temperature without changing a brushstroke. The boys in the greatcoats, or their sons at the same age, would get the war the dream was advertising, against machine guns the eagles knew nothing about. That makes the fly-past overhead the most honest thing in the painting: a nation's ideas marching high up, out of reach of the facts. Detaille died in 1912 and was spared the comparison.\n\nThe canvas hangs in the Musée d'Orsay, in the old station hall of the railway age. The crowds pass a sleeping army on their way to the Impressionists, and the dog, at least, sleeps untroubled by any of it.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1888',
  historicalYear: 1888,
  historicalMonthDay: null,
  artTitle: 'The Dream',
  artCredit: 'Édouard Detaille, 1888',
  imageUrl: bucketPainting('scenes/what-the-army-dreams.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/what-the-army-dreams.jpg'),
  details: [
    {
      id: 'the-sleepers',
      x: 0.585,
      y: 0.865,
      scale: 3.0,
      caption:
        'Conscripts sleep in their greatcoats with their caps still on, heads down on their packs. A white dog is stretched out among them. The stacked rifles wait behind for the morning.',
    },
    {
      id: 'the-ghost-army',
      x: 0.45,
      y: 0.2,
      scale: 2.2,
      caption:
        "An army marches out of the cloud with bayonets level and torn flags up. These are Napoleon’s soldiers of the First Empire, in two-cornered hats. The grandfathers’ wars fly past over the grandsons.",
    },
    {
      id: 'the-colors',
      x: 0.7,
      y: 0.57,
      scale: 2.4,
      caption:
        'The regiment’s flag lies across two stacks of rifles, still inside its cover. A bugle hangs on the bayonets. Beyond them the camp fires are still smoking along the field.',
    },
  ],
} satisfies MockSceneDef;

export const elevenMenAndARope = {
  slug: 'eleven-men-and-a-rope',
  title: 'Eleven Men and a Rope',
  dek: 'A student paints the Volga haulers as individuals and Russia argues for a decade',
  story:
    "Ilya Repin was 24 and still at the Academy when he saw them on the Neva. A gang of men in harness was dragging a barge upstream, past a bank of students and summer people with parasols. The contrast lodged. In 1870 he took his brother and the landscape painter Fyodor Vasilyev down the Volga. He spent two summers at Shiryaev Buerak, living near the burlak gangs, as the haulers were called. He sketched them, learned their names, and paid for portraits with tobacco. That is the fact that makes the painting what it is. He did not paint a mass. He painted 11 specific men, and you can tell them apart from the far side of a gallery.\n\nThe leader in the front rank was a defrocked priest named Kanin, whose head Repin described with open reverence, a philosopher's forehead over a strap and a shirt that had stopped being a shirt. Behind him the gang sorts itself by exhaustion. One man packs a pipe as he walks. One sags almost to his knees. One at the back is barely upright, carried by the rope as much as pulling it. And in the middle, catching the light in a pink rag of a shirt, is the boy. Larka, the youngest in the gang, straightening up mid-step to shift his strap, the only figure in the line who is not accepting the arrangement, painted at the exact center of a canvas about acceptance.\n\nWhen it was shown in 1873 the establishment was embarrassed, and said so in the language of policy. A minister of transport complained that the picture advertised a practice already being replaced by steam tugs. That was true, and Repin had already put it in the painting. A steamer smokes on the horizon behind the men, coming up the river to put all 11 of them out of work. Dostoevsky had feared the picture would preach and wrote with relief that it did not; the haulers simply are there, and the viewer does the accusing. The Grand Duke Vladimir Alexandrovich bought it for 3,000 rubles and hung it in his billiard room, where he cheerfully explained it to guests.\n\nIt went to the Vienna World's Fair the same year and came home a European reputation. Repin lived another 57 years, painted Ivan the Terrible and the October Manifesto and most of Russia's other permanent images, and never again needed anyone's permission. The barge is there at the far right, small, with a man in a red shirt idle on its deck. Repin gave the rest of the canvas to the rope.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1873',
  historicalYear: 1873,
  historicalMonthDay: null,
  artTitle: 'Barge Haulers on the Volga',
  artCredit: 'Ilya Repin, 1870–1873',
  imageUrl: bucketPainting('scenes/eleven-men-and-a-rope.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/eleven-men-and-a-rope.jpg'),
  details: [
    {
      id: 'kanin',
      x: 0.22,
      y: 0.4,
      scale: 3.0,
      caption:
        'Kanin at the head of the line, a defrocked priest Repin knew by name and painted from life. Repin said the forehead belonged on a Greek philosopher.',
    },
    {
      id: 'the-boy',
      x: 0.435,
      y: 0.42,
      scale: 2.8,
      caption:
        'Larka, the youngest on the rope, straightening up mid-step to shift his strap. Every other man in the frame is bent, and Repin put him at the exact center of the canvas.',
    },
    {
      id: 'the-steamer',
      x: 0.875,
      y: 0.45,
      scale: 2.6,
      caption:
        'The barge sits at the far right with a man in a red shirt idle on its deck. On the water past it a steam tug trails smoke, the thing that will put all 11 men out of work.',
    },
  ],
} satisfies MockSceneDef;

export const dedicatedToAllConquerors = {
  slug: 'dedicated-to-all-conquerors',
  title: 'Dedicated to All Conquerors',
  dek: 'A pyramid of skulls with a dedication written on the frame',
  story:
    "Vasily Vereshchagin painted this in 1871, after two years in Turkestan. He had not been a war artist in the safe sense. He was inside Samarkand during the siege of 1868, fought in the defense, and was given the Cross of St George, the one honor he ever accepted. He refused a professorship from the Academy, refused decorations after that, and once burned three of his own canvases rather than let them be misunderstood. He was, in the most literal sense available in the nineteenth century, a soldier who had changed sides in an argument about whether soldiering was admirable.\n\nThe first title was The Triumph of Tamerlane, after the towers of skulls the conqueror built from the populations of cities that had refused him. Then Vereshchagin generalized it, and wrote his generalization on the frame, where the museum keeps it to this day: dedicated to all great conquerors, past, present, and to come. The painting itself is almost clinical. A heap of skulls in a dead plain, dry trees, a ruined city on the horizon, crows working the pile. Up close the argument sharpens. The skulls are damaged one by one, this one split by a sabre, that one holed by a bullet. The mound is not a symbol but an inventory, and some of the wounds come from weapons Tamerlane never had.\n\nThe Russian military establishment loathed it. Officers said it slandered the army; there was pressure to keep the Turkestan series out of view, and one general is said to have wanted it destroyed. Pavel Tretyakov bought the whole series in 1874 for the gallery that became Moscow's, which settled the matter by making the argument permanent and free to enter.\n\nVereshchagin kept walking toward wars for the next 30 years, painting the Balkans, India, Japan, the Philippines, always at the front and always with the same insistence that the dead be countable. In 1904 he was aboard the battleship Petropavlovsk off Port Arthur, sketching on deck, when she struck a mine and went down in under two minutes with the admiral and most of the crew. The man who painted the mound of skulls left no grave; the sea took him at 61, at the front, working.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1871',
  historicalYear: 1871,
  historicalMonthDay: null,
  artTitle: 'The Apotheosis of War',
  artCredit: 'Vasily Vereshchagin, 1871',
  imageUrl: bucketPainting('scenes/dedicated-to-all-conquerors.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/dedicated-to-all-conquerors.jpg'),
  details: [
    {
      id: 'the-wounds',
      x: 0.5,
      y: 0.6,
      scale: 2.4,
      caption:
        'A sabre split in one crown, a round hole punched through the next. Vereshchagin damaged every skull differently, and some of the damage comes from firearms Tamerlane\'s armies never carried.',
    },
    {
      id: 'the-crows',
      x: 0.6,
      y: 0.22,
      scale: 2.4,
      caption:
        'Crows on the summit of the pile and a dozen more still coming in. They are the only living things in the picture.',
    },
    {
      id: 'the-city',
      x: 0.83,
      y: 0.5,
      scale: 2.8,
      caption:
        'Past the shadow of the mound stands a mud-brick city with one tower broken off short. Nobody is on the walls, and a single skull has rolled out into the shade.',
    },
  ],
} satisfies MockSceneDef;

export const aScreamThroughNature = {
  slug: 'a-scream-through-nature',
  title: 'A Scream Through Nature',
  dek: 'The figure is not screaming; it is hearing one',
  story:
    "Munch wrote down the evening it came from, and the note is the best label the painting has ever had. He was walking a road with two friends at sunset. The sun went down and the sky turned blood red. He stopped and leaned on the fence, tired to death, while his friends walked on. He sensed an infinite scream passing through nature. Which corrects the century of misreading in one line. The figure on the bridge is not the source. It has its hands over its ears.\n\nThe road is real and identifiable, above Ekeberg on the eastern edge of what was then Kristiania, with the fjord and the city below. Two details of the neighborhood have kept biographers busy: down the hill stood the city slaughterhouse, and near it the asylum where Munch's sister Laura was a patient. He had lost his mother and his favorite sister to tuberculosis before he was 14, and later put it plainly, that illness, madness and death were the angels that attended his cradle. Meteorologists have offered a gentler explanation for the sky, the volcanic sunsets that followed the eruption of Krakatoa in 1883, which turned European evenings red for months. Both can be true. Munch painted the weather he was standing in.\n\nHe made the image four times, twice in tempera and twice in pastel, and then made a lithograph that let it travel the world. The 1893 painting in Oslo carries an extra mark, a sentence pencilled in the upper left in tiny letters: can only have been painted by a madman. For a century nobody knew whether an offended visitor had written it. Handwriting analysis by the National Museum in 2021 concluded the hand was Munch's own, added after the picture was mocked in public. That is either a joke, an admission, or a man agreeing with his critics on his own terms.\n\nTwo of them have been stolen and both came back, one out of the National Gallery in Oslo in 1994 during the Lillehammer Olympics, one off a museum wall at gunpoint in 2004. The face has become the most reproduced expression on earth, printed on cushions and inflatable dolls and, eventually, an emoji. It is a strange fate for a picture about a sound nobody else in it can hear.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1893',
  historicalYear: 1893,
  historicalMonthDay: null,
  artTitle: 'The Scream',
  artCredit: 'Edvard Munch, 1893',
  imageUrl: bucketPainting('scenes/a-scream-through-nature.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/a-scream-through-nature.jpg'),
  details: [
    {
      id: 'the-hands',
      x: 0.5,
      y: 0.62,
      scale: 2.4,
      caption:
        'The hands are over the ears, not the mouth. Munch painted a listener. He used tempera and crayon on cardboard, not oil.',
    },
    {
      id: 'the-friends',
      x: 0.18,
      y: 0.44,
      scale: 2.8,
      caption:
        'The two friends who walked on ahead are dark against the rail. One of them is already half out of the picture. Munch\'s note has them going on while he stopped.',
    },
    {
      id: 'the-inscription',
      x: 0.335,
      y: 0.355,
      scale: 3.2,
      caption:
        'Two boats sit on the fjord below the road. They are a few strokes each, and they ride the same current of paint as the sky. Munch made the picture from the hill road above Ekeberg, east of Kristiania.',
    },
  ],
} satisfies MockSceneDef;

export const theNewBoulevards = {
  slug: 'the-new-boulevards',
  title: 'The New Boulevards',
  dek: 'Paris rebuilt, painted by the man who paid for the exhibition',
  story:
    "The intersection is real and still standing: the Place de Dublin behind the Gare Saint-Lazare, one of the star-shaped crossings cut through the old city by Baron Haussmann on Napoleon III's orders. The work ran from 1853 to 1870. It pulled down nearly 20,000 buildings and put up 34,000, drove the boulevards straight through the medieval quarters, and installed the sewers, gaslight and pale stone facades that the word Paris now means. It also, as everyone at the time understood, made the streets too wide to barricade. Caillebotte painted the result 6 years after the last barricades of the Commune came down, and painted it empty of history: just wet cobbles, new stone, and people going somewhere.\n\nHe built it like an engineer, which is what he trained as. The studies for it survive, the canvas squared off in a grid and the vanishing point pinned. The green lamppost splits the picture almost exactly down the middle. The cobbles are laid out in a perspective so controlled it can be measured. The couple on the right walk toward the viewer at a scale that puts them a step from colliding with the man entering at the frame's edge. Nobody looks at anybody. That is not an accident of the moment; it is the subject. The umbrella crowd of a modern city, sharing an intersection and nothing else.\n\nCaillebotte showed it as the centerpiece of the third Impressionist exhibition in 1877, which he also organized, hung and largely financed. He was rich, bought his friends' paintings when nobody else would, paid Monet's rent, and left the state 68 canvases by Degas, Manet, Monet, Renoir, Pissarro and Cézanne. The bequest caused a public fight; officials accepted only part of it, and the part they took became the core of France's Impressionist collection. For most of a century he was filed as the patron rather than the painter.\n\nThe Art Institute of Chicago bought the picture in 1964, and its reputation caught up with it fast. On the sidewalk that afternoon the rain has already mostly stopped: the sky is pale, the shadows are gone, and the umbrellas are still up because nobody trusts it.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1877',
  historicalYear: 1877,
  historicalMonthDay: null,
  artTitle: 'Paris Street; Rainy Day',
  artCredit: 'Gustave Caillebotte, 1877',
  imageUrl: bucketPainting('scenes/the-new-boulevards.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-new-boulevards.jpg'),
  details: [
    {
      id: 'the-couple',
      x: 0.65,
      y: 0.6,
      scale: 2.2,
      caption:
        'The couple comes straight out of the canvas arm in arm under one umbrella. Neither of them looks at the other, and neither looks where they are going.',
    },
    {
      id: 'the-lamppost',
      x: 0.49,
      y: 0.3,
      scale: 2.4,
      caption:
        'The green lamppost halves the canvas. Caillebotte squared the whole composition on a grid before he painted a stone of it.',
    },
    {
      id: 'the-cobbles',
      x: 0.33,
      y: 0.63,
      scale: 3.4,
      caption:
        'One man is caught mid-stride crossing the new paving alone. His umbrella handle sits just inside the top of the frame. Behind him a woman\'s hem drags through the wet.',
    },
  ],
} satisfies MockSceneDef;

export const theGoldGroundReturns = {
  slug: 'the-gold-ground-returns',
  title: 'The Gold Ground Returns',
  dek: 'A goldsmith’s son puts Byzantium on a Vienna cliff edge',
  story:
    "Klimt's father was a gold engraver who died poor, and the son spent the middle of his career putting the material back to work. He had gone to Ravenna in 1903 and stood in front of the sixth-century mosaics, gold ground behind flat glittering emperors, and came home to make what art history now calls his golden phase. The Kiss is the end of it: oil and gold leaf on a canvas 180 centimeters square, begun in 1907. A couple kneel on a bed of flowers, and the world behind them dissolves into metal.\n\nEverything below the necks is pattern, and the pattern is doing the arguing. His robe is black and white rectangles, hard-edged; hers is circles and flowers, and the two designs meet without merging where the bodies press together. Very little skin appears, and his face is not part of it: her face, his neck, the hands, her feet. Every one of them is doing something. His hands hold her head and turn it. Her hand closes over his with the knuckles up. Her toes curl over the edge of the flower bank, because the meadow simply stops, and beyond it is nothing at all. Her eyes are closed and her face is angled away from the kiss, which lands on her cheek. Viewers have read rapture there for a century, and other viewers have read a woman at a cliff edge being held very firmly, and the painting has never adjudicated.\n\nVienna in 1908 was the city of Freud's consulting room, Mahler's opera house and Klimt's public scandals. His ceiling paintings for the university had been called pornographic and rejected. He returned the fee and stopped taking state commissions. Then this canvas appeared at the Kunstschau, unfinished, and the state that had refused his ceilings bought it on the spot for 25,000 crowns, a record price for an Austrian painting. It has never left the country and has hung in the Belvedere ever since.\n\nKlimt died in 1918, at 55, of a stroke followed by the influenza that was going around the world that year. He left no letters explaining any of it. He had said once that whoever wants to know something about him should look attentively at his pictures, which in this case means looking at the hands.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1908',
  historicalYear: 1908,
  historicalMonthDay: null,
  artTitle: 'The Kiss',
  artCredit: 'Gustav Klimt, 1907–1908',
  imageUrl: bucketPainting('scenes/the-gold-ground-returns.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-gold-ground-returns.jpg'),
  details: [
    {
      id: 'the-hands',
      x: 0.585,
      y: 0.18,
      scale: 3.2,
      caption:
        'His hands hold her head and turn it. Her hand closes over his with the knuckles up. Her eyes are shut, and Klimt never shows the man\'s face.',
    },
    {
      id: 'the-edge',
      x: 0.73,
      y: 0.7,
      scale: 3.0,
      caption:
        'Her bare feet reach past the last of the flowers, and her toes are curled. The meadow stops here. Below it Klimt painted nothing but gold.',
    },
    {
      id: 'the-patterns',
      x: 0.4,
      y: 0.5,
      scale: 2.2,
      caption:
        'His robe is covered in black rectangles and hers in discs and spirals. The two patterns meet along a seam that never blends. All of it lies on gold leaf, the material Klimt\'s father worked in as an engraver.',
    },
  ],
} satisfies MockSceneDef;

export const theVeteranInTheWheat = {
  slug: 'the-veteran-in-the-wheat',
  title: 'The Veteran in the Wheat',
  dek: 'The war ends and a man goes back to cutting things down',
  story:
    "Winslow Homer had spent the war as an artist-correspondent for Harper's Weekly, embedded with the Army of the Potomac, drawing sharpshooters and picket lines and men waiting. In the autumn of 1865, months after Appomattox and Lincoln's funeral train, he painted a single figure with his back turned in a field of ripe wheat. The country had just finished counting: something near three quarters of a million dead, out of a population of 31 million. The harvest of 1865 was enormous, and the men who came home to cut it had spent four years at other work.\n\nHomer left the evidence in the lower right corner, where most viewers never look: a dark heap that is the man's army jacket and canteen, dropped in the stubble. That is the whole plot. The uniform is on the ground and the shirt is white and the work is farming again, which is what the title means by a new field. The Northern press was full of that argument in 1865, the citizen soldier laying down the rifle and picking up the tool, and Homer painted the argument without a word of encouragement in it.\n\nThen there is the scythe, and the scythe is why the painting is disturbing rather than pastoral. Homer first painted the tool an American farmer would really have used in 1865, a bigger scythe with a rack of wooden fingers to catch the grain. Then he painted it out and put a plain long single blade in its place, the old kind, the kind Death carries in every woodcut in Europe. The paint he covered the first one with has gone transparent over the years, so it is showing through again. He made the picture less accurate on purpose. A lone figure swinging that blade through standing ranks of wheat had one meaning for anyone who had read four years of casualty lists. The wheat is cut down in exactly the swath a man makes walking forward.\n\nHomer was 29 and had barely begun. He went on to the sea pictures that made him America's great painter of weather and solitude. This one hangs in New York with the jacket still in the corner. The man's face is never shown.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1865',
  historicalYear: 1865,
  historicalMonthDay: null,
  artTitle: 'The Veteran in a New Field',
  artCredit: 'Winslow Homer, 1865',
  imageUrl: bucketPainting('scenes/the-veteran-in-the-wheat.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-veteran-in-the-wheat.jpg'),
  details: [
    {
      id: 'the-scythe',
      x: 0.31,
      y: 0.57,
      scale: 2.2,
      caption:
        'Homer first painted a bigger, more elaborate scythe here, then simplified it to this bare blade. The covering paint has gone transparent with age, so the ghost of the first tool shows through above it.',
    },
    {
      id: 'the-jacket',
      x: 0.78,
      y: 0.75,
      scale: 2.0,
      caption:
        'The dark heap in the cut stubble is his army jacket and canteen. He dropped them where he started work. They are the only things in the picture that say he was a soldier.',
    },
    {
      id: 'the-swath',
      x: 0.5,
      y: 0.77,
      scale: 2.2,
      caption:
        'His boots stand in the wheat he has just cut. It lies flat in a band the width of one man walking forward. This was the harvest of 1865, the first one after the war.',
    },
  ],
} satisfies MockSceneDef;

export const beforeTheyWashedTheirHands = {
  slug: 'before-they-washed-their-hands',
  title: 'Before They Washed Their Hands',
  dek: 'Surgery in a frock coat, painted with the blood left in',
  story:
    "Dr Samuel Gross was 70 and the most famous surgeon in America. The operation Eakins painted him doing was a merciful one: cutting dead bone out of a young man's thigh instead of taking the leg off. That is what the generation before him would have done. The patient is under ether, which is the single modern thing in the room. Everything else in the picture is why the nineteenth century killed so many of the people it was trying to save. Gross is wearing his street clothes. So is every man cutting. There are no gloves, no masks, no gowns. The instruments lie in a velvet-lined case. The surgeons' bare fingers are in the wound. Gross has stepped back with a scalpel in his hand and blood on his fingers, explaining to a hall full of students what he is doing.\n\nJoseph Lister had published on antisepsis in 1867, eight years before this canvas, and Philadelphia had not adopted it. Eakins painted the same subject again 14 years later. In that picture the surgeons wear white and the room is clean. The gap between the two is the best record anyone has of how long a good idea took to cross an ocean.\n\nThe woman recoiling in black at the left, hands clawed over her eyes, is understood to be the patient's mother, present because the rules for charity cases required a relative to attend. Eakins put himself in too, seated at the right of the entrance tunnel with a pencil. He submitted the picture to the art section of the Centennial Exhibition in 1876 and the committee turned it down. It ended up among the medical exhibits in an army hospital pavilion. One reviewer wrote that people would come away sick. Jefferson Medical College bought it for 200 dollars.\n\nIn 2006 the college agreed to sell it for 68 million dollars, to the National Gallery and a new museum in Arkansas. Philadelphia was given 45 days to match the offer, and matched it. It now belongs jointly to two of the city's museums, and the argument about whether it is beautiful has been over for a century. Gross's face is lit like a portrait. The thing that draws every eye first is the hand holding the knife.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '1875',
  historicalYear: 1875,
  historicalMonthDay: null,
  artTitle: 'The Gross Clinic',
  artCredit: 'Thomas Eakins, 1875',
  imageUrl: bucketPainting('scenes/before-they-washed-their-hands.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/before-they-washed-their-hands.jpg'),
  details: [
    {
      id: 'the-hand',
      x: 0.32,
      y: 0.61,
      scale: 3.0,
      caption:
        'Bare fingers, a scalpel, blood, and the frock coat Gross wore in from the street. Joseph Lister had published on antisepsis 8 years before this canvas, and Philadelphia had not taken it up.',
    },
    {
      id: 'the-mother',
      x: 0.2,
      y: 0.71,
      scale: 2.6,
      caption:
        "The woman in black with her hands clawed over her face is thought to be the patient's mother. Charity cases had to have a relative in the room.",
    },
    {
      id: 'the-students',
      x: 0.6,
      y: 0.72,
      scale: 2.6,
      caption:
        'Bare hands hold the thigh open while a clamp and a probe work in the wound. The operation was to cut dead bone out and leave the young man his leg.',
    },
  ],
} satisfies MockSceneDef;

export const theLadyInTheFog = {
  slug: 'the-lady-in-the-fog',
  title: 'The Lady in the Fog',
  dek: 'A gift unveiled in rain, with a boatload of women objecting offshore',
  story:
    "It rained on 28 October 1886. The harbor filled with fog and gun smoke, and most of the estimated million people who turned out for the unveiling of Liberty Enlightening the World never saw it happen. The statue was a French gift 21 years in the making. Bartholdi's copper skin hung on an iron frame engineered by Gustave Eiffel, and France paid for it by public subscription. It came over in 350 pieces packed in 214 crates. Then it sat, because nobody on the American side would fund the pedestal. Joseph Pulitzer ran a newspaper campaign that got the money out of 120,000 small donors, most of them giving under a dollar.\n\nThe ceremony went wrong in the way ceremonies do. Bartholdi was up in the torch, waiting for a signal to drop the French tricolor covering the face. He let it fall early. The guns and the whistles and the crowd went up straight through Senator Evarts' speech, and nobody heard the end of it. President Cleveland accepted the statue and promised the light would never fail. It failed regularly. The torch was useless as a lighthouse, and in 1901 the government handed it to the War Department.\n\nThe sharpest thing said that day was said from the water. No women were allowed on the island for the ceremony except Bartholdi's wife and the granddaughter of Ferdinand de Lesseps. So the suffragists chartered a boat, pushed as close in as the police would let them, and made their speeches through the salutes. A 150-foot woman was going up as Liberty in a republic where no woman could vote. The newspapers reported it as a curiosity.\n\nEmma Lazarus had written her sonnet three years earlier to raise pedestal money, and nobody read it at the unveiling. The lines about huddled masses were cast in bronze and fixed inside the pedestal in 1903, 16 years after she died. Only then did the statue start turning into a symbol of immigration rather than a monument to an alliance between two republics. Ellis Island took in 12 million people, and every one of them came past her. Edward Moran painted the day itself and signed the canvas 1886: the torch arm up in the weather, the boats packed and dressed with flags, and the smoke still lying on the water.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '28 October 1886',
  historicalYear: 1886,
  historicalMonthDay: toMonthDay('10-28'),
  artTitle: 'Unveiling the Statue of Liberty',
  artCredit: 'Edward Moran, 1886',
  imageUrl: bucketPainting('scenes/the-lady-in-the-fog.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-lady-in-the-fog.jpg'),
  details: [
    {
      id: 'the-torch',
      x: 0.36,
      y: 0.15,
      scale: 2.4,
      caption:
        'The arm is up and the face is already clear of its flag. Bartholdi was inside the torch and let the French tricolor fall early, before Senator Evarts had finished speaking.',
    },
    {
      id: 'the-smoke',
      x: 0.42,
      y: 0.68,
      scale: 2.2,
      caption:
        'Gun smoke rolls across the foot of the pedestal, with a line of spectators on the parapet showing through it. Most of the million people who came that day saw almost nothing.',
    },
    {
      id: 'the-boats',
      x: 0.85,
      y: 0.85,
      scale: 2.2,
      caption:
        'An excursion boat packed to the rails under an American flag and a French tricolor, with a man in the rowboat below standing up to wave his hat. Only two women were let onto the island for the ceremony, so the suffragists made their protest from the water.',
    },
  ],
} satisfies MockSceneDef;

export const theTrainAlongTheShore = {
  slug: 'the-train-along-the-shore',
  title: 'The Train Along the Shore',
  dek: 'Japan buys a railway and builds it out into the sea',
  story:
    "Japan had been open to the world for less than 20 years when its first railway ran, and the speed of the decision is the story. The Tokugawa order fell in 1868. By 1870 the new Meiji government had borrowed money in London, hired a young British engineer named Edmund Morel to run the work, and started laying track. On 14 October 1872 the line from Shimbashi in Tokyo to Yokohama opened, with the emperor aboard. He was 19. The trip was 29 kilometres and took 53 minutes. On foot it had been a long day. Morel did not see it. He died of tuberculosis in Yokohama in 1871, at 30, and is buried there.\n\nThe stretch this print shows, along the Takanawa shore, was built where it was because the government could not get the land. The army and the old domain estates along the coast road would not sell their waterfront. So the engineers took the line off the shore and laid it on a bank of stone out in Tokyo Bay, sea on one side, city on the other. Passengers rode over open water for 2.7 kilometres because the men who owned the shore said no. Landfill buried the embankment and everyone forgot it. Then in 2019, digging for a new station at Takanawa, crews hit 770 metres of the original stonework, and Tokyo argued about how much of it to save.\n\nThis is a kaika-e, an enlightenment picture, and they sold in huge numbers: the new telegraph poles, the new bridges, the new steam. Utagawa Kuniteru II laid it out as a procession. The train runs along the bottom in scarlet carriages. On the road above it goes the traffic it was replacing: a horse cab, a rickshaw, people walking out to look. Many print designers of the period had never seen a locomotive and copied Western illustrations, giving Japan a decade of prints with plausible but wrong engines.\n\nThe best-remembered detail of the opening months is a matter of etiquette. Passengers did what any sensible person did before stepping onto a clean floor: they left their shoes on the platform at Shimbashi, and arrived in Yokohama to find nothing to put on. The railway printed notices. Within 30 years Japan was building its own locomotives.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '14 October 1872',
  historicalYear: 1872,
  historicalMonthDay: toMonthDay('10-14'),
  artTitle: 'Tokyo Takanawa Steam Railway',
  artCredit: 'Utagawa Kuniteru II, c. 1872',
  imageUrl: bucketPainting('scenes/the-train-along-the-shore.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-train-along-the-shore.jpg'),
  details: [
    {
      id: 'the-locomotive',
      x: 0.87,
      y: 0.8,
      scale: 2.6,
      caption:
        'Kuniteru gave the engine a flared chimney and a pale green cab. Japan ordered its first engines from British factories in 1871. Many print designers drew them from Western pictures rather than from life.',
    },
    {
      id: 'the-embankment',
      x: 0.18,
      y: 0.62,
      scale: 2.2,
      caption:
        'An open wagon of bales runs under a road bridge, between walls of cut stone. The government could not buy the shore at Takanawa, so it laid 2.7 kilometres of track on stone out in the bay.',
    },
    {
      id: 'the-old-road',
      x: 0.8,
      y: 0.44,
      scale: 2.6,
      caption:
        'A man pulls a rickshaw past a horse cab on the road. Children and a dog stand in the dust, and a walled estate stands behind them. This is the traffic the railway had come to replace.',
    },
  ],
} satisfies MockSceneDef;

export const theSwordBrokenInTheYard = {
  slug: 'the-sword-broken-in-the-yard',
  title: 'The Sword Broken in the Yard',
  dek: 'An officer is stripped of his rank, and France cracks in half',
  story:
    "The ceremony took eight minutes in the courtyard of the École Militaire on the morning of 5 January 1895. Captain Alfred Dreyfus, 35, was an Alsatian Jew and a graduate of the artillery staff. He had been convicted of selling secrets to Germany on the strength of a handwriting comparison and a secret file his lawyer never saw. Now a giant of an adjutant tore the buttons, braid and insignia off his uniform and broke his sword across a knee. The sword had been sawn most of the way through beforehand so it would snap cleanly. The army had rehearsed all of it. As they marched him past the ranks, Dreyfus shouted that he was innocent, that they were degrading an innocent man, and long live France. Outside the railings a crowd chanted death to the Jews.\n\nHe went to Devil's Island off Guiana and spent four years alone on it, shackled to his bed at night for part of that time by a double iron bar. In Paris the case rotted. In 1896 the new head of army intelligence, Colonel Georges Picquart, matched the handwriting to a Major Esterhazy and reported it. The army posted Picquart to Tunisia and acquitted Esterhazy in a closed hearing that lasted minutes. Then, on 13 January 1898, Émile Zola published an open letter to the president on the front page of L'Aurore. The headline was his editor's: J'Accuse. Zola named names, was convicted of criminal libel, and fled to England. Circulation that day was 300,000.\n\nThe affair split France into two countries that shared a language, and it did not end cleanly. A retrial in 1899 found Dreyfus guilty again, with extenuating circumstances. It took a presidential pardon to get him off the island, and seven more years to get the verdict quashed. He was exonerated in 1906, reinstated, decorated, and served through the whole of the First World War. He died in 1935, and a spectator at his funeral procession is said to have asked who he was.\n\nOne journalist covering the degradation for a Vienna paper was Theodor Herzl, who watched a French crowd howl at a Jewish officer in the capital of the country that had emancipated the Jews first. Within 18 months he had written Der Judenstaat. Le Petit Journal's illustrated supplement was printing a million copies a week in 1895, and it had no idea what else it was putting on the table.",
  eraId: toEraId('machine-age'),
  historicalDateLabel: '5 January 1895',
  historicalYear: 1895,
  historicalMonthDay: toMonthDay('01-05'),
  artTitle: 'The Degradation of Alfred Dreyfus',
  artCredit: 'Henri Meyer, Le Petit Journal, 1895',
  imageUrl: bucketPainting('scenes/the-sword-broken-in-the-yard.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-sword-broken-in-the-yard.jpg'),
  details: [
    {
      id: 'the-sword',
      x: 0.62,
      y: 0.62,
      scale: 2.2,
      caption:
        'White gloves hold the sword by the hilt and the blade. The adjutant has his knee raised to break it across. The blade had been sawn nearly through so it would snap on cue.',
    },
    {
      id: 'the-officer',
      x: 0.29,
      y: 0.45,
      scale: 2.2,
      caption:
        'A man stands at attention in a tunic stripped of its braid. This is Captain Alfred Dreyfus, with the ranks drawn up behind him. As they marched him past, he shouted that he was innocent.',
    },
    {
      id: 'the-braid',
      x: 0.5,
      y: 0.9,
      scale: 2.4,
      caption:
        'Gold braid and red cloth lie on the cobbles beside a spurred boot. They were torn off his uniform. He was back in the army 11 years later, as a major.',
    },
  ],
} satisfies MockSceneDef;
