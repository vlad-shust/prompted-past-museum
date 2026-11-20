import { bucketPainting, sameStill } from './scenes/painting-source';
import type { StudioSuggestionDef } from './studio-suggestions.types';

/**
 * The studio's open drawer: public-domain works covering the motion registers,
 * for visitors who don't have a painting at hand or don't want to choose.
 * Doubles as a tour of what the studio does.
 *
 * House opens use the pre-staged `videoFile` clips directly (mock and live).
 * Visitor uploads still go through studio-animate with a local-file base64 body.
 */
export const STUDIO_SUGGESTIONS: readonly StudioSuggestionDef[] = [
  {
    id: 'boulevard-montmartre',
    title: 'Boulevard Montmartre, Spring Morning',
    artist: 'Camille Pissarro',
    year: '1897',
    imageUrl: bucketPainting('house/boulevard-montmartre.jpg'),
    still: { width: 3366, height: 2525 },
    videoFile: 'house/boulevard-montmartre.mp4',
    story:
      'Painted in 1897. Pissarro took a room at the Grand H\u00f4tel de Russie and painted the boulevard from the window. The trees along both pavements have just come into leaf. Horse cabs run down the middle of the road and the crowd keeps to the pavement. He painted this same view 14 times that year, at different hours and in different weather.\n\nBy 1923 the canvas belonged to Max Silberberg, an industrialist in Breslau. On 23 March 1935 the Nazi regime forced him to sell his collection at auction in Berlin. In 2000 the painting was returned to his family. His daughter-in-law Gerta Silberberg left it on loan to the Israel Museum in Jerusalem, with a plaque telling what had happened to it, until 2013. In February 2014 Sotheby\u2019s in London sold it for \u00a319.7 million, double the estimate. The canvas is 65 cm by 81.',
    details: [
      {
        id: 'the-lamp',
        x: 0.49,
        y: 0.72,
        scale: 2.6,
        caption:
          'A gas lamp on an iron post stands in the middle of the road, and the cabs go round it on both sides. Pissarro painted all of this looking down from a hotel window.',
      },
      {
        id: 'the-pavement',
        x: 0.8,
        y: 0.8,
        scale: 2.4,
        caption:
          'The pavement on the right is packed. A green kiosk, a column pasted with posters, and people out in the first warm sun of the year.',
      },
      {
        id: 'the-roofs',
        x: 0.85,
        y: 0.15,
        scale: 2.4,
        caption:
          'Chimney pots crowd the roofs across the boulevard. His room at the Grand H\u00f4tel de Russie was high enough to see over the trees, and he painted the view 14 times.',
      },
    ],
  },
  {
    id: 'hunters-in-the-snow',
    title: 'The Hunters in the Snow',
    artist: 'Pieter Bruegel the Elder',
    year: '1565',
    imageUrl: bucketPainting('house/hunters-in-the-snow.jpg'),
    still: { width: 3730, height: 2798 },
    videoFile: 'house/hunters-in-the-snow.mp4',
    tags: ['winter', 'flemish-village'],
    story:
      'Painted in 1565. Three hunters come up the hill out of the trees with their dogs, and the whole day has produced one fox. It hangs from a spear on the last man\u2019s shoulder. The dogs walk with their heads down. None of the men looks at the valley below, which is the best thing in the picture.\n\nDown there the village is busy. Outside the inn a family has lit a straw fire in the snow to burn the bristles off a pig, because December is the month the pig is killed. The inn sign has come off one of its hooks and hangs crooked. On the pond there are skaters, a sledge, a game played with sticks and a ball, and one person flat on the ice. The hunt failed and nobody down there knows or cares.\n\nBruegel painted this for Niclaes Jonghelinck, an Antwerp banker, as one of a set of 6 for his house outside the city. On 15 February 1566 Jonghelinck put his whole collection up as security for another man\u2019s debt. The writ lists 16 Bruegels. The pictures went to the city of Antwerp and he never got them back. Of the set, 5 survive. The panel is 117 cm by 162 and hangs in Vienna. The mountains behind the valley are Alpine. Flanders has nothing like them. Bruegel had crossed the Alps coming home from Italy about 10 years earlier.',
    details: [
      {
        id: 'the-dogs',
        x: 0.22,
        y: 0.76,
        scale: 2.4,
        caption:
          'The pack comes up the hill with its heads down. The day\u2019s whole catch was one fox, small enough to hang off a spear.',
      },
      {
        id: 'the-fire',
        x: 0.1,
        y: 0.59,
        scale: 3,
        caption:
          'Outside the inn they have lit a straw fire to burn the bristles off a pig. In the old calendars December is the month the pig is killed.',
      },
      {
        id: 'the-ice',
        x: 0.8,
        y: 0.575,
        scale: 2.4,
        caption:
          'Nobody on the pond is thinking about the hunt. Skaters, a sledge, a game played with sticks and a ball, and one person flat on the ice.',
      },
    ],
  },
  {
    id: 'peasant-wedding',
    title: 'The Peasant Wedding',
    artist: 'Pieter Bruegel the Elder',
    year: 'c. 1567',
    imageUrl: bucketPainting('house/peasant-wedding.jpg'),
    still: { width: 3601, height: 2470 },
    videoFile: 'house/peasant-wedding.mp4',
    tags: ['flemish-village'],
    story:
      'Painted around 1567. The feast is in a barn and the harvest is still stacked against the back wall. The bride sits in front of the green cloth, under a paper crown hanging on a string above her. Her hands are folded and her eyes are down. She is not eating. Which man is the groom has never been settled, and one reading is that he is not in the room at all.\n\nThe food comes in on a door lifted off its hinges. It is porridge and bread. The piper on the left has stopped playing to watch it go past. On the floor at the front a child in a hat several sizes too big is licking out a bowl. At the far right two men in better clothes sit apart from the rest, and one of them is wearing a sword.\n\nKarel van Mander wrote Bruegel\u2019s life in 1604, 35 years after he died. He says Bruegel and a friend used to dress as peasants, bring gifts like everyone else, and turn up at village weddings claiming to be relatives of the bride. Historians have been pulling that story apart ever since and it will not die. The panel is 114 cm by 164 and hangs in Vienna, a few rooms from The Hunters in the Snow.',
    details: [
      {
        id: 'the-bride',
        x: 0.645,
        y: 0.33,
        scale: 2.6,
        caption:
          'The bride sits under a paper crown with her hands folded and her eyes down. She is the only person at that table eating nothing.',
      },
      {
        id: 'the-door',
        x: 0.72,
        y: 0.655,
        scale: 2.6,
        caption:
          'The plates arrive on a door lifted off its hinges and carried like a stretcher. What is in the bowls is porridge.',
      },
      {
        id: 'the-child',
        x: 0.33,
        y: 0.82,
        scale: 2.8,
        caption:
          'A child in a hat several sizes too big has got hold of a bowl and is licking it out on the floor, under the table everyone else is sitting at.',
      },
    ],
  },
  {
    id: 'tower-of-babel',
    title: 'The Tower of Babel',
    artist: 'Pieter Bruegel the Elder',
    year: '1563',
    imageUrl: bucketPainting('house/tower-of-babel.jpg'),
    still: { width: 3729, height: 2797 },
    videoFile: 'house/tower-of-babel.mp4',
    story:
      'Painted in 1563. The tower already reaches the clouds and it is nowhere near finished. The floors at the bottom are still open shells while the top goes up in red brick. The arches are built square to the sloping ground, so the whole thing is unstable before it is done.\n\nThe king at the lower left is taken to be Nimrod. He has come to look at the work, and the stonemasons have gone down on their knees. Bruegel put his name and the year on a block of stone at their feet. He had seen the Colosseum in Rome about 10 years before, and its stacked arches are the model for the tower.\n\nBruegel painted the subject 3 times. The first was a miniature on ivory that belonged to Giulio Clovio, the painter he worked with in Rome. It is lost. This one, the biggest, was bought by the Antwerp banker Niclaes Jonghelinck, who owned 16 Bruegels by 1566. It went from him to the city of Antwerp and then to the Emperor Rudolf II, and it hangs in Vienna today. A smaller one hangs in Rotterdam. The Vienna panel is 114 cm by 155.',
    details: [
      {
        id: 'the-king',
        x: 0.19,
        y: 0.815,
        scale: 2.6,
        caption:
          'The king in the white cloak is taken to be Nimrod, come to inspect the work. The stonemasons go down on their knees, and Bruegel signed the panel on a stone block at their feet.',
      },
      {
        id: 'the-top',
        x: 0.55,
        y: 0.2,
        scale: 2.4,
        caption:
          'Red brick goes up in scaffolding at the top while the floors below are still unfinished. The arches stand square to the sloping ground, which makes the whole tower unstable.',
      },
      {
        id: 'the-harbour',
        x: 0.79,
        y: 0.78,
        scale: 2.4,
        caption:
          'A Flemish port at the foot of the tower, tiny next to it. The stone arrives by ship, and a raft is being poled in to the quay.',
      },
    ],
  },
  {
    id: 'pearl-earring',
    title: 'Girl with a Pearl Earring',
    artist: 'Vermeer',
    year: 'c. 1665',
    imageUrl: bucketPainting('house/pearl-earring.jpg'),
    still: { width: 1920, height: 2248 },
    story:
      'Painted around 1665. No one knows who she is, and that is the point. This is not a portrait. The Dutch called it a tronie, a study of a face in costume, made to show what a painter could do.\n\nWhat Vermeer could do was light on skin and cloth. The turban is ultramarine, ground from lapis carried overland from Afghanistan. The colour cost more than gold, and he spent it on a picture nobody had ordered. The pearl is two strokes of white, one bright and one soft, hanging from no hook you can see. At that size a real one would have been glass anyway.\n\nShe turns as if someone has just spoken. The dark behind her was once a deep green glaze. Time has eaten it down to black, so nobody alive has seen the room she turned in.',
    details: [
      {
        id: 'the-pearl',
        x: 0.4,
        y: 0.58,
        scale: 3,
        caption:
          'Two strokes of white, one bright, one soft, and no hook to hang it by. The most famous jewel in art is barely painted at all.',
      },
      {
        id: 'the-turban',
        x: 0.5,
        y: 0.16,
        scale: 2.6,
        caption:
          'Ultramarine, ground from lapis carried overland out of Afghanistan, costlier than gold. Vermeer spent it on a picture nobody commissioned.',
      },
      {
        id: 'the-turn',
        x: 0.47,
        y: 0.4,
        scale: 2.8,
        caption:
          'Caught mid-turn, lips parted. A tronie sells an expression, and this one has been about to speak since 1665.',
      },
    ],
  },
  {
    id: 'air-pump',
    title: 'An Experiment on a Bird in the Air Pump',
    artist: 'Wright of Derby',
    year: '1768',
    imageUrl: bucketPainting('house/air-pump.jpg'),
    still: { width: 1920, height: 1439 },
    story:
      "Painted in 1768. A travelling lecturer has set up in a private parlour, and the evening's entertainment is a matter of life and death. A white cockatoo is inside the glass globe. The pump below is drawing the air out, and everyone in the room knows what happens if it runs to the end.\n\nWright paints the moment the room splits. The scientist looks straight out at us with his hand on the valve, waiting. A father explains it to his crying daughters. The young couple on the left only have eyes for each other. The boy at the window lowers the empty cage, either hopeful or too late.\n\nOne candle lights all of it, hidden behind the bowl on the table. Through the window a full moon is rising. The bird was rare and expensive, so it was almost certainly spared. Almost.",
    details: [
      {
        id: 'the-bird',
        x: 0.5,
        y: 0.18,
        scale: 2.6,
        caption:
          'A white cockatoo, an expensive pet, not a laboratory sparrow. The hand on the valve decides its evening.',
      },
      {
        id: 'the-daughters',
        x: 0.7,
        y: 0.45,
        scale: 2.6,
        caption:
          'The father does not stop the experiment; he explains it. Wright puts the whole temper of the age in that gesture.',
      },
      {
        id: 'the-moon',
        x: 0.88,
        y: 0.3,
        scale: 2.4,
        caption:
          "Through the window, a full moon. Wright's circle of scientists and factory men called themselves the Lunar Society: they met when moonlight lit the road home.",
      },
    ],
  },
  {
    id: 'woman-with-parasol',
    title: 'Woman with a Parasol',
    artist: 'Monet',
    year: '1875',
    imageUrl: bucketPainting('house/woman-with-parasol.jpg'),
    still: { width: 3623, height: 4500 },
    story:
      'Painted in 1875, in a single session of an hour or two. Monet puts you at the bottom of a ridge, so Camille, his wife, stands against the sky instead of the ground. The wind drags her veil sideways. Her dress is lit blue by the day. Their son Jean, who was 7, hangs back on the crest, half swallowed by the hill. The grass is still bent where she walked through it.\n\nThe brushwork is loose enough that the paint itself seems to move. The scarf is a few strokes. The shadow on the grass is a wash of violet, which no jury would have allowed 10 years earlier.\n\nCamille was 32 that summer. She had 4 years left. In most of the pictures Monet made of her afterwards she is turned away, or veiled.',
    details: [
      {
        id: 'the-veil',
        x: 0.44,
        y: 0.3,
        scale: 2.6,
        caption:
          'The veil drags sideways: the closest painting comes to a portrait of wind. Monet finished before it changed.',
      },
      {
        id: 'jean',
        x: 0.68,
        y: 0.55,
        scale: 2.8,
        caption:
          'Jean, seven, sunk to the waist in the hill. One more step of hers and he is out of the picture.',
      },
      {
        id: 'the-shadow',
        x: 0.35,
        y: 0.78,
        scale: 2.4,
        caption:
          'The shadow is violet, not gray. Critics called it an eye disease; within a decade everyone painted shadows this way.',
      },
    ],
  },
  {
    id: 'winter-firewood',
    title: 'Winter Landscape (January or February)',
    artist: 'Lucas van Valckenborch',
    year: '1586',
    imageUrl: bucketPainting('house/winter-firewood.jpg'),
    still: { width: 1722, height: 981 },
    videoFile: 'house/winter-firewood.mp4',
    tags: ['winter', 'flemish-village'],
    story:
      'Painted in 1586. Snow is falling hard enough to hide the far bank. At the front a man and a woman carry a bundle home. Behind them a cart is piled high with sticks, and children carry their own loads under one arm.\n\nThis is what winter meant in the old Flemish calendars: fetching firewood. Valckenborch is painting the month, not the weather. He had tried falling snow once before, 11 years earlier, on a small panel of Antwerp. Bruegel had done it before either of them, but never this big.\n\nValckenborch left Antwerp with his brother Marten in 1566, when the church riots started. They were probably Protestants. He came back, and by 1579 he was court painter to the young Archduke Matthias, who ran the Spanish Netherlands for Spain. When the Archduke moved to Linz, Valckenborch went with him. So he painted this Flemish village from a long way away. He died in Frankfurt in 1597. The canvas is 117 cm by 198 and hangs in Vienna.',
    details: [
      {
        id: 'the-couple',
        x: 0.285,
        y: 0.8,
        scale: 2.6,
        caption:
          'The couple at the front carry their own load home. Everyone in this picture is either fetching wood or hauling it.',
      },
      {
        id: 'the-cart',
        x: 0.84,
        y: 0.77,
        scale: 2.4,
        caption:
          'A cart stacked with brushwood, the winter labour the old calendars always show. A woman and a boy carry their share behind it.',
      },
      {
        id: 'the-monogram',
        x: 0.085,
        y: 0.945,
        scale: 3.2,
        caption:
          'Valckenborch put the year and his monogram in the snow at the bottom left: 1586, LVV.',
      },
    ],
  },
  {
    id: 'snowfall-antwerp',
    title: 'Winter Landscape with Snowfall near Antwerp',
    artist: 'Lucas van Valckenborch',
    year: '1575',
    imageUrl: bucketPainting('house/snowfall-antwerp.jpg'),
    still: { width: 3415, height: 2556 },
    videoFile: 'house/snowfall-antwerp.mp4?v=5',
    tags: ['winter', 'flemish-village'],
    story:
      'Painted in 1575, when falling snow was still nearly new. Bruegel had put the first flakes into a European painting about 12 years before. Valckenborch followed him all his working life, and here he makes the snowfall itself the subject.\n\nThe flakes are dabs of lead white, flicked over the finished picture. They fall on the sky, on the frozen river, on the cathedral tower fading into the distance, and on the one house that is on fire.\n\nWinters like this were real. Europe was deep in the Little Ice Age and the river froze hard enough to carry half of Antwerp: skaters, sledges, men swinging clubs at a ball, a family warming their hands at a fire where the mill wheel is stuck in the ice. Valckenborch signed the panel in the snow at the lower left. The next year Spanish troops sacked the city he had painted, and within 10 years he had left for good. The panel hangs in Frankfurt now, the city where he died.',
    details: [
      {
        id: 'the-fire',
        x: 0.45,
        y: 0.46,
        scale: 2.6,
        caption:
          'A house burns in the middle of the snowstorm. The flakes fall white across the flames, and on the ice below the games go on.',
      },
      {
        id: 'the-wheel',
        x: 0.28,
        y: 0.78,
        scale: 2.4,
        caption:
          'Ice has stopped the wheel, and the mill with it. Beside the wall a family feeds a small fire and holds out its hands.',
      },
      {
        id: 'the-city',
        x: 0.64,
        y: 0.37,
        scale: 2.4,
        caption:
          'Antwerp across the frozen Scheldt, its cathedral tower almost erased by snow. A year after Valckenborch painted this, Spanish troops sacked the city.',
      },
    ],
  },
  {
    id: 'ice-skaters',
    title: 'Winter Landscape with Ice Skaters',
    artist: 'Hendrick Avercamp',
    year: 'c. 1608',
    imageUrl: bucketPainting('house/ice-skaters.jpg'),
    still: { width: 3807, height: 2157 },
    videoFile: 'house/ice-skaters.mp4',
    tags: ['winter'],
    story:
      'Painted about 1608. The ice is full. Nearly 200 people are out on it: skating, playing kolf, pushing sledges, riding in a horse-drawn sleigh, flirting, begging, falling over. A brewery called The Half Moon stands on the left, and its sign carries the 2 lions from the coat of arms of Antwerp. Avercamp signed the panel on the fisherman\u2019s hut at the right, scrawled like graffiti.\n\nHe hid rude jokes in the crowd. A bare behind sticks out of a small boat, a man is peeing against a tree, and a couple is lying together in a haystack. At the lower left crows and a dog eat a horse that has frozen to death. Hardly anyone in the picture is looking at any of it.\n\nAvercamp could not speak and was probably deaf. People called him the Mute of Kampen, after the town he moved to in 1608, the year of this picture. The winter of 1607 to 1608 was one of the hardest of the Little Ice Age. His winters sold so well that he painted them in summer too. The panel is 77 cm by 132. The Rijksmuseum bought it in 1897.',
    details: [
      {
        id: 'the-brewery',
        x: 0.22,
        y: 0.65,
        scale: 2.4,
        caption:
          'The brick building is a brewery, The Half Moon. Avercamp gave its sign the 2 lions from the coat of arms of Antwerp.',
      },
      {
        id: 'the-kolf',
        x: 0.47,
        y: 0.8,
        scale: 2.6,
        caption:
          'The men with the clubs are playing kolf, the game golf grew out of. A boat is frozen in beside them, going nowhere until spring.',
      },
      {
        id: 'the-crowd',
        x: 0.66,
        y: 0.6,
        scale: 2.8,
        caption:
          'Nearly 200 people are on the ice. A horse pulls a sleigh through the crowd, couples skate arm in arm, and one skater is flat on his back.',
      },
    ],
  },
  {
    id: 'returning-crusader',
    title: 'The Return of the Crusader',
    artist: 'Carl Friedrich Lessing',
    year: '1835',
    imageUrl: bucketPainting('house/returning-crusader.jpg'),
    still: { width: 1750, height: 1724 },
    videoFile: 'house/returning-crusader.mp4',
    story:
      'Painted in 1835. An old knight rides down a stony track on his own. The white cloak with a black cross means he belongs to the Teutonic Order, and he is coming home from a crusade. Nobody has come out to meet him. Behind him it is still raining on the far hill.\n\nLessing was 27, and he was painting against the fashion. German artists of the 1830s liked their crusaders proud. His is a tired man on a tired horse, arriving at nothing. He took the idea from a poem by Karl Immermann, written 9 years earlier. In Germany the painting is called Der letzte Kreuzfahrer, the last crusader.\n\nLessing signed his name in the dirt of the path: C.F.L., July 1835. He trained as a builder in Berlin before he took up painting. He was also a great-nephew of the playwright Gotthold Ephraim Lessing. The canvas is small, 66 cm by 64, and it hangs in Bonn.',
    details: [
      {
        id: 'the-cross',
        x: 0.49,
        y: 0.34,
        scale: 2.4,
        caption:
          'The white mantle with a black cross is the habit of the Teutonic Order. Under it the knight is old, and he is looking at the ground rather than the road.',
      },
      {
        id: 'the-rain',
        x: 0.17,
        y: 0.18,
        scale: 2.4,
        caption:
          'Rain falls in visible columns over the hill behind him. Lessing came to history painting from landscape, and it shows in the sky.',
      },
      {
        id: 'the-signature',
        x: 0.53,
        y: 0.955,
        scale: 3.2,
        caption:
          "Lessing signed the dirt of the path, under the horse's hind hoof: C.F.L., July 1835.",
      },
    ],
  },
  {
    id: 'ascent-of-the-blessed',
    title: 'Ascent of the Blessed',
    artist: 'Hieronymus Bosch',
    year: 'c. 1505–1515',
    imageUrl: bucketPainting('house/ascent-of-the-blessed.jpg'),
    still: { width: 1950, height: 4500 },
    videoFile: 'house/ascent-of-the-blessed.mp4',
    story:
      "Painted around 1505. Souls are going up through the dark. Angels carry them in pairs, out of the black at the bottom of the panel towards a shaft of light at the top. Two figures already stand inside the light, and nobody is holding them.\n\nThat tunnel is why people know this panel. It is one of four, called the Visions of the Hereafter. The other three are less kind: the garden of Eden, the fall of the damned, and hell.\n\nThe panels have had a strange life. A Venetian called Marcantonio Michiel wrote in 1521 that he had seen Bosch paintings in Cardinal Grimani's house. Grimani died that year and left them to the city. They sat in a store room in the Doge's Palace for over 100 years. Someone found them again in the late 1600s. They were taken to Vienna, and came back to Venice in 1919. Some experts still doubt that Bosch painted them. The oak panel is 86.5 cm tall and 39.5 wide.",
    details: [
      {
        id: 'the-light',
        x: 0.31,
        y: 0.26,
        scale: 3,
        caption:
          "Two figures already stand inside the light, flat silhouettes with nobody holding them. The net of cracks across the disc is the paint's own age.",
      },
      {
        id: 'the-carry',
        x: 0.35,
        y: 0.52,
        scale: 2.4,
        caption:
          'The soul is carried, not flying. Its escort has red wings, and a second angel reaches in from the right to take the weight.',
      },
      {
        id: 'the-waiting',
        x: 0.62,
        y: 0.76,
        scale: 2.2,
        caption:
          'Lower down everyone is still looking up. These angels have not begun to climb; they are holding on to the souls they came for.',
      },
    ],
  },
  {
    id: 'spring-ploughing',
    title: 'Landscape with figures and buildings',
    artist: 'Follower of Jacob Grimmer',
    year: 'before 1590',
    imageUrl: bucketPainting('house/spring-ploughing.jpg'),
    still: { width: 1656, height: 1248 },
    videoFile: 'house/spring-ploughing.mp4',
    tags: ['flemish-village'],
    story:
      "Painted before 1590. A man is ploughing the near field with two horses. Another walks the edge with his apron full of seed. Behind the hedge the village is busy. A boat crosses the water, barrels are rolled into a shed, sheep come down the road, and a garden is laid out in neat beds. The tree on the right is still bare, so this is early in the year.\n\nThe panel is small, 43 cm by 61, oil on oak. Nobody knows who made it. Catalogues call it a follower of Jacob Grimmer, which means it came out of his circle rather than his hand. It sold in Stockholm in 2013 for 240,000 kronor.\n\nGrimmer worked in Antwerp and made a business out of the calendar. He sold sets of the four seasons and the twelve months, painted by a big workshop at a standard size. He wrote comic verse as well, and belonged to the city's guild of poets. A painter that busy leaves a lot of look-alikes behind him.",
    details: [
      {
        id: 'the-plough',
        x: 0.4,
        y: 0.88,
        scale: 2.4,
        caption:
          'Two horses and a wheeled plough turn the near field. The whole picture is built around this one strip of broken earth.',
      },
      {
        id: 'the-village',
        x: 0.28,
        y: 0.62,
        scale: 2.2,
        caption:
          'A stepped-gable house and a round tower stand over the water, with a garden laid out in beds behind them and a boat crossing below.',
      },
      {
        id: 'the-sheep',
        x: 0.85,
        y: 0.82,
        scale: 2.4,
        caption:
          'The flock comes down the road past a shed where barrels are being rolled in. The man in red carries his seed in a white apron.',
      },
    ],
  },
  {
    id: 'the-sower',
    title: 'Landscape with a sower',
    artist: 'Circle of Jacob Grimmer',
    year: '16th century',
    imageUrl: bucketPainting('house/the-sower.jpg'),
    still: { width: 1764, height: 1176 },
    videoFile: 'house/the-sower.mp4',
    tags: ['flemish-village'],
    story:
      "Painted in the 16th century. A man walks a ploughed slope throwing seed, and the field takes up half the picture. Everyone else has stopped. A group sits on the bank eating. A woman rests against a milk jug. Riders pass on the road, and sheep graze in front of a farmhouse with fresh thatch. The sower is the only one still working, and he is the smallest figure in the field.\n\nNobody has settled on a name for this panel. Image searches turn up no record of it. The closest anyone gets is the circle of Jacob Grimmer, the Antwerp workshop that made the Flemish countryside worth painting on its own.\n\nGrimmer sold sets of the four seasons and the twelve months, painted by a big workshop at a standard size. He and Pieter Bruegel the Elder were the same age, and Grimmer took a far cheerier view of country life. He wrote comic verse as well, and belonged to the city's guild of poets.",
    details: [
      {
        id: 'the-sower',
        x: 0.215,
        y: 0.8,
        scale: 2.6,
        caption:
          'One man, mid-stride, scattering seed across a field that fills half the panel. Nothing else in the picture is working this hard.',
      },
      {
        id: 'the-farm',
        x: 0.71,
        y: 0.41,
        scale: 2.2,
        caption:
          'The farmhouse has a fresh thatch and a cart parked at the door. Sheep graze under the tree, and a shepherd stands among them.',
      },
      {
        id: 'the-rest',
        x: 0.68,
        y: 0.87,
        scale: 2.4,
        caption:
          'On the bank a group has stopped to eat, hats off, one man lying flat. A woman leans against a milk jug behind them.',
      },
    ],
  },
  {
    id: 'hay-wain',
    title: 'The Hay Wain',
    artist: 'John Constable',
    year: '1821',
    imageUrl: bucketPainting('house/hay-wain.jpg'),
    still: { width: 3825, height: 2550 },
    videoFile: 'house/hay-wain.mp4',
    story:
      'Painted in 1821. An empty hay cart is crossing the river at Flatford, on the Stour between Suffolk and Essex. It is heading for the meadow on the far side, where the haymakers are at work. Flatford Mill, just out of the picture, belonged to Constable\u2019s father. The house on the left belonged to Willy Lott, a farmer who spent 4 nights away from it in his whole life.\n\nConstable painted it in London, in his painting room on Keppel Street, from oil sketches he had made on the spot. He asked John Dunthorne in Suffolk to send him a drawing of a cart. X-rays show a horse and rider between the dog and the cart. He painted them out, put a barrel in the water instead, then painted the barrel out too.\n\nHe showed it at the Royal Academy in 1821 as Landscape: Noon, and nobody bought it. In 1824 the dealer John Arrowsmith took it and 2 other pictures for \u00a3250 and sent them to the Paris Salon. Charles X gave it a gold medal. Henry Vaughan gave it to the National Gallery in 1886. The canvas is 130 cm by 185.',
    details: [
      {
        id: 'the-cottage',
        x: 0.165,
        y: 0.58,
        scale: 2.8,
        caption:
          'Willy Lott\u2019s house. Lott farmed here all his life and spent 4 nights away from it. A woman is at the water\u2019s edge below the wall.',
      },
      {
        id: 'the-wagon',
        x: 0.62,
        y: 0.79,
        scale: 2.4,
        caption:
          'The cart is empty. It is crossing the ford to the meadow on the far bank, where the haymakers are. Constable painted it in London from a drawing of a cart that John Dunthorne sent him from Suffolk.',
      },
      {
        id: 'the-dog',
        x: 0.36,
        y: 0.837,
        scale: 3.2,
        caption:
          'The dog watches the cart go. X-rays show a horse and rider once stood between them. Constable painted them out, put a barrel in the water, then painted the barrel out too.',
      },
    ],
  },
  {
    id: 'bird-trap',
    title: 'Winter Landscape with a Bird Trap',
    artist: 'Pieter Brueghel the Younger',
    year: 'after 1565',
    imageUrl: bucketPainting('house/bird-trap.jpg'),
    still: { width: 1996, height: 1294 },
    videoFile: 'house/bird-trap.mp4',
    tags: ['winter', 'flemish-village'],
    story:
      "Painted after 1565. The river has frozen and the village is out on the ice. The thing to look at is on the right, where nobody is looking. A door is propped up on a stick. Someone has scattered food under it, and the birds have started to walk in. A rope runs from the stick to a house. When it is pulled, the door falls.\n\nPieter Bruegel the Elder painted the first one in 1565. He added the trap at the end, over snow he had already finished. That panel is small, 37 cm by 56, and it hangs in Brussels.\n\nHis son painted the same scene again and again, and so did the men in his workshop. 127 copies still exist. About 45 of them are thought to be the son's own work. No other picture by his father was copied so often.",
    details: [
      {
        id: 'the-trap',
        x: 0.776,
        y: 0.775,
        scale: 2.8,
        caption:
          'An old door propped on a stick, bait underneath, birds walking in. The rope runs off to a house out of frame.',
      },
      {
        id: 'the-skaters',
        x: 0.33,
        y: 0.8,
        scale: 2.4,
        caption:
          'The ice is crowded and thin. A hole gapes open at the bottom left, and nobody skating has noticed it.',
      },
      {
        id: 'the-church',
        x: 0.58,
        y: 0.53,
        scale: 2.4,
        caption:
          'The village church still has its green glazing. Behind it a brick tower stands unfinished, its windows open to the weather.',
      },
    ],
  },
  {
    id: 'starry-night',
    title: 'The Starry Night',
    artist: 'Van Gogh',
    year: '1889',
    imageUrl: bucketPainting('house/starry-night.jpg'),
    still: { width: 3938, height: 2953 },
    videoFile: 'house/starry-night.mp4',
    story:
      'Painted in June 1889. Van Gogh had put himself into the asylum at Saint-R\u00e9my the month before. This is the view east from his bedroom, except the bedroom window had iron bars and he was not allowed to work in there. He drew at the window and painted downstairs in the studio, in daylight, from memory.\n\nThe big white star to the right of the cypress is Venus. He wrote to his brother Theo that he had watched the country from his window a long time before sunrise, with nothing in the sky but the morning star, and that it looked very big. Researchers have since checked the sky over Provence that June, and Venus was close to its brightest. The village underneath is invented. There is no town in that direction, and the church spire is Dutch rather than Proven\u00e7al.\n\nHe thought the picture had gone wrong. In November 1889 he wrote to \u00c9mile Bernard and called it a failure. He died the following July. The Museum of Modern Art got it in 1941 by trading a dealer 2 C\u00e9zannes and a Toulouse-Lautrec for it. The canvas is 73.7 cm by 92.1.',
    details: [
      {
        id: 'the-morning-star',
        x: 0.36,
        y: 0.5,
        scale: 2.6,
        caption:
          'The big white star is Venus. Van Gogh told Theo he had watched the country before sunrise with nothing out but the morning star, and that it looked very big.',
      },
      {
        id: 'the-spire',
        x: 0.565,
        y: 0.775,
        scale: 2.6,
        caption:
          'The village is invented. No town stood in that direction from the asylum, and the spire is Dutch rather than Proven\u00e7al.',
      },
      {
        id: 'the-cypress',
        x: 0.2,
        y: 0.55,
        scale: 2.4,
        caption:
          'In Provence the cypress is the graveyard tree. Van Gogh laid it on in ropes of paint thick enough to stand off the canvas, and it is the one thing joining the ground to the sky.',
      },
    ],
  },
  {
    id: 'ninth-wave',
    title: 'The Ninth Wave',
    artist: 'Aivazovsky',
    year: '1850',
    imageUrl: bucketPainting('house/ninth-wave.jpg'),
    still: { width: 4500, height: 3000 },
    videoFile: 'house/ninth-wave.mp4',
    story:
      'Painted in 1850. Six men are holding on to a piece of mast, and the sun is coming up. Their ship went down in the night. The picture shows none of that, only the wreckage and the light.\n\nSailors used to count waves, and they believed the ninth was the one that killed you. That wave is rising behind the men now. Aivazovsky was 32 when he painted it, from memory, in a studio a long way from the sea. He said you cannot copy a living sea. You can only remember it.\n\nThe trick of the picture is the light. The sun stands right behind the deadliest thing in it, so the wave comes up glowing like coloured glass. Whether that is mercy or a joke, the painting does not say.',
    details: [
      {
        id: 'the-mast',
        x: 0.38,
        y: 0.76,
        scale: 2.6,
        caption:
          'Six men and a broken mast are the whole record of the night behind this morning. One still has the strength to signal.',
      },
      {
        id: 'the-ninth',
        x: 0.16,
        y: 0.52,
        scale: 2.2,
        caption:
          'The killer arrives backlit. Sun through the crest turns water to green glass, the effect Aivazovsky was famous for across Europe.',
      },
      {
        id: 'the-sun',
        x: 0.6,
        y: 0.28,
        scale: 2.2,
        caption:
          'Dawn stands directly behind the wave. Rescue and threat share one glow, and the picture never says which is winning.',
      },
    ],
  },
] as const;

/**
 * The rail offers only what the studio can actually wake, so a suggestion goes
 * live the moment its clip lands in the bucket. Lookups still search the whole
 * catalogue: pieces woken before a painting was pulled keep their story.
 */
export const HOUSE_COLLECTION = STUDIO_SUGGESTIONS.filter((def) => def.videoFile !== undefined);

/** The work the wall opens on. */
export const HOUSE_WALL_OPENING_ID = 'boulevard-montmartre';

/** What fits on a phone plaque in 3 lines of the label face. */
const WALL_LABEL_BUDGET = 135;

/**
 * The plaque's label: the story's opening, after the "Painted in 1850." line the
 * plaque already carries. Whole sentences only, as many as fit the budget.
 */
export function wallLabel(story: string, budget = WALL_LABEL_BUDGET): string {
  const sentences = story.split('\n')[0].split(/(?<=[.!?])\s+/);
  const body = sentences[0]?.startsWith('Painted ') ? sentences.slice(1) : sentences;
  const label: string[] = [];
  for (const sentence of body) {
    if (label.length > 0 && [...label, sentence].join(' ').length > budget) break;
    label.push(sentence);
  }
  return label.join(' ');
}

/**
 * The rest of the wall this one belongs with: the same hand first, then
 * anything sharing a tag. The collection is small enough that one thread
 * through it is worth more than a catalogue.
 */
export function relatedPaintings(id: string): StudioSuggestionDef[] {
  const self = HOUSE_COLLECTION.find((def) => def.id === id);
  if (!self) return [];
  const tags = new Set(self.tags ?? []);
  const kin = HOUSE_COLLECTION.filter(
    (def) =>
      def.id !== id &&
      (def.artist === self.artist || (def.tags ?? []).some((tag) => tags.has(tag))),
  );
  // Same painter reads as the stronger link, so it leads.
  return kin.sort((a, b) => Number(b.artist === self.artist) - Number(a.artist === self.artist));
}

/** The house work a piece was opened from, matched on the still whatever its revision. */
export function houseWorkFor(imageUri: string): StudioSuggestionDef | undefined {
  return STUDIO_SUGGESTIONS.find((def) => sameStill(def.imageUrl, imageUri));
}

/** A stored piece keeps the URL it was opened with; show the current revision of its still. */
export function currentHouseStill(imageUri: string): string {
  return houseWorkFor(imageUri)?.imageUrl ?? imageUri;
}
