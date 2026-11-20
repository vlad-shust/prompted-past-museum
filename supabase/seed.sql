-- Development seed: the locked era taxonomy (with forge-brain guidance) and
-- the 12 demo scenes that mirror the app's bundled mock content.
-- Runs on `supabase db reset`. Production scenes come from scripts/editorial.

insert into public.eras (id, name, short_name, start_year, end_year, mood, sort, forge_guidance) values
  ('ancient-egypt', 'Ancient Egypt', 'Egypt', -3100, -30, 'Sandstone gods and river gold', 1,
   'Old Kingdom through Ptolemaic Egypt. Mudbrick and limestone, linen kilts, kohl, papyrus skiffs on the Nile, hieroglyph-covered temple walls, desert light. No iron armor, no horses before the Second Intermediate Period, no camels as common mounts before the Late Period.'),
  ('classical-greece', 'Classical Greece', 'Greece', -800, -323, 'Marble light and wine-dark seas', 2,
   'Archaic to Classical Hellas. Bronze cuirasses and hoplite shields, chitons and himations, painted marble (not white), triremes, olive groves, oracle smoke. No Roman arches, no stirrups, no large cavalry charges.'),
  ('roman-empire', 'Ancient Rome', 'Rome', -509, 476, 'Legions, forums, and burning horizons', 3,
   'Republic and Empire. Lorica segmentata only from the 1st century AD, tunics and togas, concrete and brick with marble facing, oil lamps, standards and eagles. No stirrups, no plate armor, no Byzantine domes.'),
  ('viking-age', 'The Viking Age', 'Vikings', 793, 1066, 'Dragon prows through cold fog', 4,
   'Late 8th to 11th century Scandinavia and its reach. Clinker-built longships, round shields, mail and spangenhelm helmets WITHOUT horns, runestones, turf halls, whale roads. No horned helmets, no plate armor, no castles with round towers.'),
  ('medieval-europe', 'Medieval Europe', 'Medieval', 1066, 1453, 'Candlelit stone and iron bells', 5,
   'High and Late Middle Ages. Mail then transitional plate, surcoats and heraldry, Romanesque and Gothic stone, illuminated manuscripts, tallow candles. Full plate only after ~1400; cannon only after ~1320; no printed books.'),
  ('feudal-japan', 'Feudal Japan', 'Japan', 1185, 1600, 'Lacquered armor under falling plum rain', 6,
   'Kamakura through Azuchi–Momoyama. Lamellar ō-yoroi and later tosei-gusoku armor, naginata and yumi as battlefield staples, castles of wood and stone, shoji light, ink and gold-leaf screens. Matchlock guns only after 1543; katana worn edge-up only in later periods.'),
  ('renaissance', 'The Renaissance', 'Renaissance', 1400, 1600, 'Oil, gold leaf, and new worlds', 7,
   'Quattrocento and Cinquecento Europe. Doublets and hose, oil paint and fresco, printing presses after 1455, carracks and caravels, perspective architecture. No Baroque drama, no powdered wigs, no muskets with flintlocks.'),
  ('age-of-sail', 'The Age of Sail', 'Age of Sail', 1571, 1862, 'Powder smoke over endless ocean', 8,
   'Lepanto to the ironclads. Ships of the line, broadsides, tarred rigging, tricorns then bicornes, naval uniforms only after the 1740s, lanterns below decks. No steam engines before 1800s, no steel hulls.'),
  ('revolutionary-age', 'The Revolutionary Age', 'Revolutions', 1765, 1848, 'Torchlight against palace gates', 9,
   'Atlantic revolutions through 1848. Muskets with bayonets, cockades and liberty caps, powdered hair fading after 1790, candlelit assemblies, barricades of furniture and paving stones. No repeating rifles, no railways before the 1820s, no photography before 1826.'),
  ('machine-age', 'The Machine Age', 'Machine Age', 1849, 1945, 'Steam, steel, and electric dawn', 10,
   'Industrial world through 1945. Steam, then electricity and flight; frock coats to trench coats; gaslight to arc light; iron bridges, telegraph wires, early photography and film. Keep technology strictly within the stated year.')
on conflict (id) do nothing;

insert into public.scenes
  (slug, title, dek, story, era_id, historical_date_label, historical_year, scheduled_for, image_url, thumb_url, art_credit, status)
values
  ('the-last-day-of-pompeii', 'The Last Day of Pompeii',
   'Vesuvius turns noon to midnight over the Bay of Naples',
   'The mountain has smoked before. No one alive remembers it doing anything worse, so the bakers of Pompeii slide eighty-one loaves into the ovens and the forum fills as it always does. Just after midday, Vesuvius opens. A column of ash and pumice climbs twenty miles into the sky, spreads like a pine tree, and blots out the sun. Stones begin to fall — softly at first, a grey hail that people shake from their hair. By evening the roofs are giving way under the weight. Some flee toward the sea and find it pulled back, boats stranded in wet sand. Others shelter in cellars with lamps and coins and their children, waiting for morning. Morning does not come. When the surge sweeps down the mountain at dawn, it is faster than anything on legs. The loaves are still in the ovens. They will stay there for seventeen hundred years.',
   'roman-empire', '24 August, AD 79', 79, current_date,
   'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg/1920px-Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg/960px-Karl_Brullov_-_The_Last_Day_of_Pompeii_-_Google_Art_Project.jpg',
   'After Karl Bryullov, 1833', 'published'),
  ('the-fourteenth-of-july', 'The Fourteenth of July',
   'Paris storms a fortress that holds seven prisoners and a thousand years of fear',
   'The Bastille was built to keep England out of Paris. For four hundred years it has kept Paris in. This morning the city wants two things it cannot vote for: gunpowder, and proof that stone can fall. By ten o''clock a crowd of tradesmen, deserters, and clockmakers presses against the outer gate. Inside, Governor de Launay commands eighty-two old soldiers, thirty Swiss grenadiers, and seven prisoners — four forgers, two madmen, one disgraced aristocrat. Negotiations stretch past noon. Then a chain is cut, a drawbridge crashes down, and the courtyard fills with musket smoke. When the fortress surrenders at five, the crowd pours through the smoke to find almost nothing inside — and understands it does not matter. They begin tearing the building apart with their hands. In Versailles the king writes in his diary: "Nothing." Within a week, masons are selling the stones as souvenirs.',
   'revolutionary-age', '14 July 1789', 1789, current_date - 1,
   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/1920px-Prise_de_la_Bastille.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Prise_de_la_Bastille.jpg/960px-Prise_de_la_Bastille.jpg',
   'Jean-Pierre Houël, 1789', 'published'),
  ('the-sea-wolves-of-lindisfarne', 'The Sea Wolves of Lindisfarne',
   'Dragon-prowed ships find the holy island undefended at dawn',
   'The island is famous for two things: the gospels its monks illuminate in gold, and the fact that no one has ever needed to defend it. Lindisfarne sits off the Northumbrian coast like a thought — reachable twice a day when the tide uncovers the causeway, otherwise alone with its prayers. This morning the monks at matins hear gulls, then oars. Three ships with carved serpent heads are riding the high tide straight onto the beach, something no trading vessel does. The men who leap out move through the priory with terrible efficiency: altar silver, jeweled bindings, the young monks who will fetch a price in the north. It is over before the tide turns. Across Europe, the scholar Alcuin writes what everyone is thinking: never before has such terror appeared in Britain. The sea, which protected the island for a century, has learned to attack. The Viking Age has a start date now.',
   'viking-age', '8 June 793', 793, current_date - 2,
   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nicholas_Roerich%2C_Guests_from_Overseas.jpg/1920px-Nicholas_Roerich%2C_Guests_from_Overseas.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Nicholas_Roerich%2C_Guests_from_Overseas.jpg/960px-Nicholas_Roerich%2C_Guests_from_Overseas.jpg',
   'Nicholas Roerich, Guests from Overseas, 1901', 'published'),
  ('nelsons-ocean', 'Nelson''s Ocean',
   'Twenty-seven ships bet an empire on a single broken line',
   'The textbook says a fleet fights in a line, broadside to broadside, until arithmetic decides. Nelson has read the textbook and intends to burn it. Off Cape Trafalgar, he splits twenty-seven ships into two columns and aims them like spears at the middle of the French and Spanish line — bows exposed, guns silent, twenty minutes of approach under full enemy fire. His flagship signals the fleet: England expects that every man will do his duty. Then Victory breaks the line, and the battle becomes what he wanted: a brawl at pistol range, where British gun crews reload twice as fast. By afternoon, nineteen enemy ships have struck their colors and not one British ship is lost. On the Victory''s dark orlop deck, a musket ball lodged in his spine, Nelson hears the cheers counting each surrender. Thank God I have done my duty, he says, and the ocean is England''s for a century.',
   'age-of-sail', '21 October 1805', 1805, current_date - 3,
   'https://upload.wikimedia.org/wikipedia/commons/2/29/Turner%2C_The_Battle_of_Trafalgar_%281822%29.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Turner%2C_The_Battle_of_Trafalgar_%281822%29.jpg/960px-Turner%2C_The_Battle_of_Trafalgar_%281822%29.jpg',
   'J. M. W. Turner, 1822', 'published'),
  ('the-last-tuesday-of-rome', 'The Last Tuesday of Rome',
   'After eleven centuries, the walls of Theodosius meet gunpowder',
   'The walls have never failed. For a thousand years, everything that hated Constantinople — Huns, Avars, Arabs, Bulgars — broke against these three rings of stone. But the army outside has something new: a cannon twenty-seven feet long that fires a stone ball half a ton in weight, cast by a Hungarian engineer who offered it to the Byzantines first. They could not pay. For seven weeks the great gun has been chewing the land walls. Inside, the last emperor of Rome — Constantine, eleventh of that name — commands perhaps seven thousand men against eighty thousand. In the small hours of Tuesday morning the final assault comes in waves. When the Janissaries find a small gate left unbarred, it is over by dawn. The emperor throws off his purple and dies fighting, unrecognized. Sultan Mehmed, twenty-one years old, rides to the Hagia Sophia and pours a handful of earth over his own head — grief, or triumph, no one can say.',
   'medieval-europe', '29 May 1453', 1453, current_date - 4,
   'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Benjamin-Constant-The_Entry_of_Mahomet_II_into_Constantinople-1876.jpg/1920px-Benjamin-Constant-The_Entry_of_Mahomet_II_into_Constantinople-1876.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Benjamin-Constant-The_Entry_of_Mahomet_II_into_Constantinople-1876.jpg/960px-Benjamin-Constant-The_Entry_of_Mahomet_II_into_Constantinople-1876.jpg',
   'Benjamin-Constant, 1876', 'published'),
  ('forty-two-lines', 'Forty-Two Lines',
   'In a Mainz workshop, a goldsmith presses God into movable type',
   'Every book in Europe is a year of someone''s life. A Bible means a scriptorium, a team of copyists, months of candlelight, and a price that only princes and cathedrals can pay. Johannes Gutenberg — goldsmith, debtor, keeper of secrets — has spent twenty years and three fortunes on another way. In his workshop stand cases of metal letters, each cast from an alloy he will not name, and a press adapted from the ones that crush grapes. Today a sheet comes off the bed carrying forty-two lines of scripture in two columns, the ink dense and even, every letter as sharp as its thousand brothers. A scribe would need three days for this page. The press made it while a man held his breath. Gutenberg will print one hundred eighty Bibles, lose the business to his creditor, and die in obscurity. The page does not care. The page is already everywhere.',
   'renaissance', 'A morning in 1455', 1455, current_date - 5,
   'https://upload.wikimedia.org/wikipedia/commons/5/57/Invention_of_printing_-_Gutenberg_taking_the_first_proof_LCCN2006690328.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Invention_of_printing_-_Gutenberg_taking_the_first_proof_LCCN2006690328.jpg/960px-Invention_of_printing_-_Gutenberg_taking_the_first_proof_LCCN2006690328.jpg',
   'After Jean-Antoine Laurent, 19th century', 'published'),
  ('the-hot-gates', 'The Hot Gates',
   'Three hundred Spartans hold a doorway the width of a wagon road',
   'The pass is called Thermopylae — the Hot Gates, for the sulfur springs that steam beside the road. Here the mountains lean so close to the sea that the whole invading world must walk through a corridor fifty feet wide. Xerxes has brought the largest army ever assembled: the Greeks say a million, and even sober men lose count. Against it stand some seven thousand Greeks, and at their core three hundred Spartans under a king named Leonidas who was told by the oracle that Sparta would lose a king or lose itself. For two days the corridor does what he hoped: numbers mean nothing where only a few hundred can fight at once, and the Persian dead pile up against the narrows. Then a local man sells the mountain path. Surrounded, Leonidas sends the allies home and keeps his three hundred. They comb their long hair, the way Spartans do before dying, and walk out to meet the morning.',
   'classical-greece', 'August, 480 BC', -480, current_date - 6,
   'https://upload.wikimedia.org/wikipedia/commons/2/27/Jacques-Louis_David_-_Leonidas_at_Thermopylae_-_WGA6095.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/Jacques-Louis_David_-_Leonidas_at_Thermopylae_-_WGA6095.jpg/960px-Jacques-Louis_David_-_Leonidas_at_Thermopylae_-_WGA6095.jpg',
   'Jacques-Louis David, 1814', 'published'),
  ('the-fog-at-sekigahara', 'The Fog at Sekigahara',
   'One October morning decides two and a half centuries of Japan',
   'The fog is so thick that the two largest armies in Japanese history nearly walk through each other in the dark. A hundred and sixty thousand men stand in a mountain valley at the crossroads of the realm, and when the mist lifts at eight o''clock, the killing begins. On paper, Ishida Mitsunari has the numbers and the high ground. Tokugawa Ieyasu — old, patient, the last of the three unifiers still breathing — has something better: letters. For months he has been writing to the lords on the other side. At the battle''s hinge, he orders his gunners to fire on the hilltop position of Kobayakawa Hideaki, a nineteen-year-old still deciding which future to choose. The volley makes the argument. Kobayakawa charges downhill into his own allies, the western line folds, and by afternoon the road to two hundred sixty years of Tokugawa peace runs straight through the mud of Sekigahara.',
   'feudal-japan', '21 October 1600', 1600, current_date - 7,
   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sekigahara_Kassen_By%C5%8Dbu-zu_%28Gifu_History_Museum%29.jpg/1920px-Sekigahara_Kassen_By%C5%8Dbu-zu_%28Gifu_History_Museum%29.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Sekigahara_Kassen_By%C5%8Dbu-zu_%28Gifu_History_Museum%29.jpg/960px-Sekigahara_Kassen_By%C5%8Dbu-zu_%28Gifu_History_Museum%29.jpg',
   'Edo-period screen, Gifu History Museum', 'published'),
  ('twelve-seconds', 'Twelve Seconds',
   'Two bicycle mechanics teach the wind to carry a man',
   'The beach at Kill Devil Hills is empty except for five witnesses, a camera on a tripod, and a wind blowing twenty-seven miles an hour — too hard, really, but it is December and the brothers want to be home for Christmas. They have flipped a coin; it is Orville''s turn to lie flat on the lower wing. The Flyer is spruce and muslin and a twelve-horsepower engine they built themselves because no company would. At 10:35 the machine trundles down its wooden rail into the headwind and does the impossible quietly: it rises. Twelve seconds, one hundred twenty feet — a distance shorter than the wingspan of the airliners to come. John Daniels, a lifeguard who has never operated a camera, squeezes the bulb at the exact right instant and takes the most reproduced photograph in aviation. Four flights today. Then the wind wrecks the Flyer for good. It has already done enough.',
   'machine-age', '17 December 1903', 1903, current_date - 8,
   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/1920px-First_flight2.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/First_flight2.jpg/960px-First_flight2.jpg',
   'Photograph by John T. Daniels, 1903', 'published'),
  ('the-die-is-cast', 'The Die Is Cast',
   'Caesar pauses at a shallow river that divides law from war',
   'The Rubicon is not much of a river. A man could wade it without wetting his belt. But the law of Rome is written in its water: a general who crosses it under arms is no longer a general — he is an invader, and every man who follows him is a traitor. On the far bank waits Italy, a Senate that has ordered Caesar to disband his legions, and enemies who have promised him prosecution and ruin the moment he is a private citizen. Behind him stands the Thirteenth Legion, which has followed him for eight years of Gaul and would follow him into the sea. He halts on the near bank in the January dusk, and for once in his life, hesitates. What he says next will be quoted for as long as anyone remembers Rome: alea iacta est — the die is cast. The horses step into the water. The Republic has five years to live.',
   'roman-empire', '10 January, 49 BC', -49, current_date - 9,
   'https://upload.wikimedia.org/wikipedia/commons/d/d8/Eug%C3%A8ne_Yvon_C%C3%A9sar_1875.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Eug%C3%A8ne_Yvon_C%C3%A9sar_1875.jpg/960px-Eug%C3%A8ne_Yvon_C%C3%A9sar_1875.jpg',
   'Eugène Yvon, 1875', 'published'),
  ('the-memory-of-the-world', 'The Memory of the World',
   'Every ship that enters Alexandria surrenders its books to the scribes',
   'The rule is simple and outrageous: any ship that docks at Alexandria must hand over every book on board. Scribes copy the text, the library keeps the original, and the ship sails away with the duplicate. The Ptolemies buy, borrow, and occasionally steal knowledge the way other kings collect gold. Inside the Mouseion, salaried scholars — the first in history to be paid simply to know things — argue in the colonnades. Euclid is assembling geometry into thirteen books that will be taught for two thousand years. Eratosthenes, who will measure the circumference of the Earth with a well and a stick and be wrong by perhaps two percent, catalogues a collection aiming at half a million scrolls. It is the most ambitious idea of the ancient world: every book, in one place, forever. Forever is the only part they get wrong, and the burning, when it comes, will take centuries to finish.',
   'ancient-egypt', 'A morning, c. 280 BC', -280, current_date - 10,
   'https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Great_Library_of_Alexandria%2C_O._Von_Corven%2C_19th_century.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/4/4f/The_Great_Library_of_Alexandria%2C_O._Von_Corven%2C_19th_century.jpg',
   'O. Von Corven, 19th century', 'published'),
  ('the-mountain-that-men-made', 'The Mountain That Men Made',
   'On the Giza plateau, ten thousand hands raise a pharaoh toward the sun',
   'The desert west of the river is becoming a horizon with corners. For most of a generation, the plateau at Giza has been the largest organized workplace on Earth: quarry gangs, hauling crews, bakers, brewers, scribes who count everything — twenty loaves a man, four jugs of beer, one life at a time. They are not slaves; the graffiti they leave inside the relieving chambers brags like a sports team''s: Friends of Khufu, the gang that does not tire. Block by two-and-a-half-ton block, the pyramid climbs toward its full height of four hundred eighty-one feet — taller than anything human hands will build for the next thirty-eight centuries. When the white casing stones are polished, the monument will throw the sun back at itself, visible for a day''s walk in every direction. The king it is for will occupy it briefly. The mountain, and the names of its builders, remain.',
   'ancient-egypt', 'c. 2560 BC', -2560, current_date - 11,
   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/1867_Edward_Poynter_-_Israel_in_Egypt.jpg/1920px-1867_Edward_Poynter_-_Israel_in_Egypt.jpg',
   'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/1867_Edward_Poynter_-_Israel_in_Egypt.jpg/960px-1867_Edward_Poynter_-_Israel_in_Egypt.jpg',
   'Edward Poynter, Israel in Egypt, 1867', 'published')
on conflict (slug) do nothing;

-- Anniversary month-days for scenes whose date labels carry an exact day.
update public.scenes s
set historical_month_day = v.md
from (values
  ('the-last-day-of-pompeii', '08-24'),
  ('the-fourteenth-of-july', '07-14'),
  ('the-sea-wolves-of-lindisfarne', '06-08'),
  ('nelsons-ocean', '10-21'),
  ('the-last-tuesday-of-rome', '05-29'),
  ('the-fog-at-sekigahara', '10-21'),
  ('twelve-seconds', '12-17'),
  ('the-die-is-cast', '01-10')
) as v(slug, md)
where s.slug = v.slug;

update public.scenes
set commissioned_by = 'the Friends of First Flight'
where slug = 'twelve-seconds';

-- A season for the current month so the masthead line renders after reset.
insert into public.seasons (year, month, era_id, title)
values (
  extract(year from current_date)::int,
  extract(month from current_date)::int,
  'viking-age',
  'The Viking Age'
)
on conflict (year, month) do nothing;
