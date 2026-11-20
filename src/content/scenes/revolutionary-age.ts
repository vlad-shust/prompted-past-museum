import { toEraId, toMonthDay } from '../../types/common.types';
import { bucketPainting } from './painting-source';
import type { MockSceneDef } from '../scenes.types';

export const theFourteenthOfJuly = {
  slug: 'the-fourteenth-of-july',
  title: 'The Fourteenth of July',
  dek: 'Paris storms a fortress 400 years old and finds seven prisoners inside',
  story:
    'Paris has been hungry all year. The harvest failed, and this morning the price of bread stands at its highest point of the century: a laborer’s whole day buys barely a loaf. Two days ago the king dismissed Necker, the one minister the city trusted with its money. A young lawyer named Camille Desmoulins jumped onto a café table at the Palais-Royal and tore a green leaf from a tree for a cockade. He told the crowd the court meant to starve Paris into obedience. Since then the city has been arming itself. At dawn today, some 30,000 muskets came out of the cellars of the Invalides without a shot fired. The veterans assigned to guard them stood aside. But a musket is only iron and wood without powder, and the powder, 250 barrels of it, was moved days ago into the one building in Paris designed to outlast a siege.\n\nThe Bastille was built to keep England out of Paris. For 400 years it has kept Paris in. This morning the city wants two things it cannot vote for: gunpowder, and proof that stone can fall. By ten o’clock a crowd of tradesmen, deserters, and clockmakers presses against the outer gate. Inside, Governor de Launay commands 82 old soldiers, 32 Swiss grenadiers, and seven prisoners: four forgers, two madmen, one disgraced aristocrat. Negotiations stretch past noon; a delegation is received politely, invited to breakfast, assured the cannon will not fire. Then two men climb onto the roof of the perfume shop beside the gate and cut the drawbridge chains with axes. The bridge crashes down, the crowd floods the courtyard, and someone opens fire.\n\nFor four hours the fortress and the city shoot at each other through musket smoke. The attackers drag up cannon from the royal storehouse, two of them inlaid with silver, sent to Louis XIV by the king of Siam a century before. They aim at the wooden inner gate. The crowd loses 98 dead in the courtyards. The garrison loses one man in the fighting. When de Launay surrenders at five against a promise of safety, the promise lasts as far as the Hôtel de Ville, where the crowd kills him on the steps. The people pour through the smoke into the cells and find almost nothing inside, and understand it does not matter. They begin tearing the building apart with their hands, stone by stone, starting from the top.\n\nAt Versailles that night, the duc de La Rochefoucauld-Liancourt wakes the king to tell him. It is a revolt, the king says. No, Sire, the duke answers, it is a revolution. In his diary the king has written one word: nothing. He meant the day’s hunt, which had gone badly, but the word will follow him forever. Within a week, masons are selling the stones as souvenirs, and a builder named Palloy is carving scale-model Bastilles from the rubble to send to every province in France. Lafayette takes the iron key of the main gate and mails it across the ocean to George Washington, who hangs it in the hallway of his house in Virginia. It hangs there still.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '14 July 1789',
  historicalYear: 1789,
  historicalMonthDay: toMonthDay('07-14'),
  artTitle: 'The Storming of the Bastille',
  artCredit: 'Jean-Pierre Houël, 1789',
  imageUrl: bucketPainting('scenes/the-fourteenth-of-july.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-fourteenth-of-july.jpg'),
  details: [
    {
      id: 'towers',
      x: 0.42,
      y: 0.316,
      scale: 2.2,
      caption:
        'The towers go up 80 feet, and smoke stands along the top of them. The whole fortress is held this morning by 82 old soldiers and 32 Swiss grenadiers.',
    },
    {
      id: 'musket-smoke',
      x: 0.68,
      y: 0.62,
      scale: 2.8,
      caption:
        'Chains hang down the face of the gate, and they worked the drawbridge. Two men climbed onto a roof beside it and cut the chains with axes. The bridge crashed down.',
    },
    {
      id: 'crowd',
      x: 0.5,
      y: 0.83,
      scale: 2.8,
      caption:
        'The man in the dark coat is de Launay, the governor of the fortress. He is being walked out of it with a hand on each arm. Houël made that arrest the center of a watercolour 20 inches wide.',
    },
  ],
} satisfies MockSceneDef;

export const theIcyRiver = {
  slug: 'the-icy-river',
  title: 'The Icy River',
  dek: 'An army about to disband crosses an ice-choked river and saves its war',
  story:
    "The password for the night is Victory or Death, which is not rhetoric but bookkeeping. It is Christmas night, 1776, and sleet is coming in on a northeaster. The army waiting at McConkey's Ferry is all that is left of the cause: some 2,400 men, beaten out of New York and chased across New Jersey. They are also about to evaporate legally, since most enlistments expire at the New Year. Washington's arithmetic is simple. If nothing happens in the next week, there is no army to have opinions about. So something will happen tonight: the Delaware, swollen and running with ice, then nine miles of frozen road, then the Hessian garrison at Trenton before it wakes.\n\nThe crossing is a freight job, and it goes to professionals: John Glover's Marblehead regiment, Massachusetts sailors and fishermen. Black and white men work the sweeps together, poling big flat Durham cargo boats through the floes in the dark. Horses and 18 cannon go over too, which is why it takes until three in the morning, hours behind schedule. Two supporting crossings downstream fail entirely; Washington attacks anyway. The Hessians, professional soldiers exhausted by weeks of constant alarms rather than the Christmas drinking of legend, get roughly 45 minutes of battle. The attackers take 900 prisoners and pay with a handful of wounded, plus two soldiers frozen to death on the march. It is a skirmish by European standards, and it saves the Revolution: within weeks the army that was dissolving is recruiting.\n\nThe details of the morning have the texture of luck worked for. Rall, the Hessian colonel, was carried dying into a church. In his pocket, tradition insists, was an unread note warning that the Americans were coming. A loyalist farmer had pressed it on him during cards the night before. Among the wet junior officers that night were a remarkable share of the republic's future. One was an artillery captain named Alexander Hamilton. Another was a lieutenant named James Monroe, who took a musket ball in the shoulder at Trenton and lived to be the fifth president. Washington, having won, recrossed the river with his prisoners, then crossed a third time within the week and beat the British again at Princeton. Ten days, three crossings, two victories: the campaign that saved the war fit inside a fortnight.\n\nThe painting arrived 75 years later, from Germany. Emanuel Leutze was raised in America and worked in Düsseldorf. He watched Europe's own revolutions fail in 1848 and painted the crossing as an argument that the thing could be done. It runs 12 feet by 21, modeled by American tourists and German friends, with the Rhine standing in for the Delaware. Almost every checkable fact in it is wrong. The flag Monroe grips would not exist for another six months. The boat is a fraction of the size of the real barges. Nobody who wanted to live stood like that in a rowboat, though in a Durham boat everyone stood. And the crew Leutze invented is the truest thing on the canvas: a rifleman at the bow, a man in a Scottish bonnet and a Black man side by side in front of him. Two farmers in broad hats sit near the back. Everyone crossed, the picture insists.\n\nNew York queued 50,000 deep when it went on show in 1851. The first version stayed in Germany and burned in a British air raid on Bremen in 1942, one war consuming the picture of another. The second fills its wall at the Met, audacity at cargo scale, the one fact Leutze got exactly right.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: 'Night of 25 December, 1776',
  historicalYear: 1776,
  historicalMonthDay: toMonthDay('12-25'),
  artTitle: 'Washington Crossing the Delaware',
  artCredit: 'Emanuel Leutze, 1851',
  imageUrl: bucketPainting('scenes/the-icy-river.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-icy-river.jpg'),
  details: [
    {
      id: 'washington',
      x: 0.4,
      y: 0.33,
      scale: 2.6,
      caption:
        'Nobody who wanted to live stood like this in a rowboat. The real boats were 40 to 60 foot cargo barges, and everyone on them stood. Leutze kept the standing and shrank the boat.',
    },
    {
      id: 'the-flag',
      x: 0.58,
      y: 0.3,
      scale: 2.6,
      caption:
        'The young officer under the flag is Lieutenant James Monroe, 18 years old. The exhibition catalogue named him as the flag bearer. The flag he carries was not adopted for another 6 months.',
    },
    {
      id: 'the-ice',
      x: 0.16,
      y: 0.74,
      scale: 2.2,
      caption:
        'The Delaware froze in flat sheets, not in the broken blocks these men are poling through. Leutze worked in Düsseldorf, and the river he had in front of him was the Rhine.',
    },
  ],
} satisfies MockSceneDef;

export const theManInTheWhiteShirt = {
  slug: 'the-man-in-the-white-shirt',
  title: 'The Man in the White Shirt',
  dek: 'The firing squad brings its own light, and Goya gives it to the victim',
  story:
    "The army brought its own lantern. That detail organizes the whole night: a big square lamp set on the ground between the squad and the condemned. The shootings on the hill of Príncipe Pío ran late, and the work needed light. It is the small hours of the third of May, 1808. The day before, Madrid had risen against the French occupation with knives, flowerpots and its bare hands, mobbing Murat's Mamelukes, the Egyptian horsemen of the French guard, in the streets. The rising took hours to crush. The reprisal was organized by nightfall: anyone taken with a weapon, and a weapon could mean scissors or a penknife, went before a firing squad, and the city counted its dead in the hundreds. The decree that governed the night survives over Murat's signature: all those arrested in the uprising, arms in hand, are to be shot. The parish registers did the counting.\n\nGoya painted it six years later, in 1814, with the French finally gone. He petitioned the returning government for funds to commemorate, as he put it, the most notable and heroic actions of the glorious insurrection, which is the language of every official war painting ever commissioned.\n\nGoya knew the language because he had spent a lifetime employed by its speakers. He had been court painter to the Spanish crown since before the war, and he kept the post under the French occupation. He painted Joseph Bonaparte's officials too. That was a survivor's ledger, and it needed balancing when the old dynasty came back. The two big canvases of the second and third of May were part of the balancing. He was 68, and stone deaf since a fever in his forties. Privately he had already made his real testimony: the Disasters of War, 80 etchings of famine, rape and execution seen close up. He never dared publish the plates. Spain first printed them in 1863, 35 years after his death. The paintings were the version the state could commission; the etchings were the version he kept in a drawer. Then he delivered the opposite. There are no heroic actions in The Third of May. There is a machine and a man. The squad is one body: greatcoats, tall caps, braced legs, muskets pointing the same way, and not a single face. Goya turned their heads away. He spent all the light, which is the squad's own lamp light, on the kneeling man in the white shirt, arms flung wide, a laborer with a sunburned face. In his open right palm, small and deliberate, there is a wound: Goya gave a day laborer the marks of the crucifixion.\n\nAround the lit man, the rest of the assembly line. The dead lie face down in their blood. A friar kneels with his hands clasped, and behind him the next group climbs the hill, covering their eyes, one man biting his fists. The city on the skyline is asleep or pretending. No moon, no streetlamps; the hill outside the walls was chosen the way such hills are always chosen, and Goya kept its darkness intact. Nothing in the picture argues; it reports the procedure. War painting before this was about the moment before or the glory after. Goya painted the mechanism itself, and painters have been answering him since: Manet borrowed the squad wholesale for his Execution of Maximilian, and Picasso kept the lantern's logic for Guernica.\n\nThe painting itself eventually went to war. Evacuated from the Prado during the Spanish Civil War, it was gashed in a truck accident on the road to Valencia, mended, and hung back on its wall, scar and all. The lantern still holds the center. It will stay lit until the hill is finished.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '3 May, 1808',
  historicalYear: 1808,
  historicalMonthDay: toMonthDay('05-03'),
  artTitle: 'The Third of May 1808',
  artCredit: 'Francisco Goya, 1814',
  imageUrl: bucketPainting('scenes/the-man-in-the-white-shirt.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-man-in-the-white-shirt.jpg'),
  details: [
    {
      id: 'the-shirt',
      x: 0.3,
      y: 0.44,
      scale: 2.4,
      caption:
        'A laborer in a white shirt kneels with his arms flung wide and his palms open. He is in the pose of a man on a cross. Goya painted a small wound into the right palm.',
    },
    {
      id: 'the-lantern',
      x: 0.6,
      y: 0.72,
      scale: 2.4,
      caption:
        "The only light in the picture comes out of this box on the ground. The squad brought it because the shootings ran late. The red running toward it is the blood of the men already shot.",
    },
    {
      id: 'the-squad',
      x: 0.66,
      y: 0.5,
      scale: 2.2,
      caption:
        'Not one of the shooters shows his face. There is nothing but backs, packs, braced legs and a row of barrels pointing the same way. Manet copied this line of men for his own firing squad.',
    },
  ],
} satisfies MockSceneDef;

export const libertyOnTheBarricade = {
  slug: 'liberty-on-the-barricade',
  title: 'Liberty on the Barricade',
  dek: 'Paris builds 4,000 barricades in three days, and Delacroix puts a barefoot woman on top of one',
  story:
    "The printers went into the street first, because the king had just abolished their jobs. On the twenty-sixth of July, 1830, Charles X signed ordinances muzzling the press, dissolving the chamber and rigging the next vote, and the newspapers answered with a signed refusal to obey. Then Paris did what Paris knew how to do. Within a day the city had grown some 4,000 barricades. Paving stones, overturned carts and furniture rose in the narrow streets faster than troops could clear them. For three days, the Trois Glorieuses, the capital fought its own army. On the twenty-eighth, rebels got into Notre-Dame and ran the tricolor up the towers, where the whole city could see which way the wind stood. By the thirtieth it was over: about 800 Parisians and 200 soldiers dead, and a king packing for exile. His cousin Louis-Philippe eased onto the throne wearing a tricolor cockade, and the revolution was pickpocketed before the barricades came down.\n\nDelacroix watched the three days without fighting them. If I have not fought for my country, he wrote to his brother that October, at least I will paint for her. What he painted broke the treaty every allegory had always honored: the goddess stepped down into the reportage. His Liberty is barefoot on real rubble, with the red cap of a freed slave on her head, a musket and bayonet in her fist and dirt on her skin. She strides over corpses, one stripped to his shirt, one a soldier of the king. Around her the classes that actually fought: a workman in a beret with a saber, a bourgeois in a top hat holding a two-barreled gun, and a street boy waving two pistols. The boy would wait 32 years for Victor Hugo to give him a name. Critics were appalled exactly where the painting lives. They called her a fishwife, ignoble, unwashed. A goddess with armpit hair was not what the Salon meant by Liberty.\n\nHe painted it fast, in the three months after the fighting, on a canvas close to 11 feet wide. He built it like testimony. The light is powder smoke lit by fires, the pavement is torn up stone by stone, and the dead man in the left foreground has been stripped of everything below his shirt. Delacroix had watched some of it from the streets and heard the rest across the river. For the face of Liberty he left no name; Paris supplied legends within the decade, a laundress, a fighter called Marie, none of them provable. The picture accumulates witnesses the way the barricade accumulated furniture.\n\nThe new government bought the picture in 1831 for 3,000 francs, hung it, and within months took it down: a Liberty this persuasive was not safe furniture for a king made by barricades. It came out of hiding when revolution returned in 1848, went away again under the empire that followed, and only settled into the Louvre for good in 1874. Governments have alternately hung it and hidden it for two centuries, which is the most sincere review a painting has ever received.\n\nShe outgrew the frame regardless. The woman on the rubble became Marianne, the face of the French Republic on stamps, statues and the 100 franc note, and the raised-flag silhouette became the stock image of every uprising since. In the smoke at the right edge, on the towers of Notre-Dame, Delacroix painted a speck of tricolor: the real flag of the twenty-eighth of July, answering hers.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '28 July, 1830',
  historicalYear: 1830,
  historicalMonthDay: toMonthDay('07-28'),
  artTitle: 'Liberty Leading the People',
  artCredit: 'Eugène Delacroix, 1830',
  imageUrl: bucketPainting('scenes/liberty-on-the-barricade.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/liberty-on-the-barricade.jpg'),
  details: [
    {
      id: 'the-boy',
      x: 0.88,
      y: 0.47,
      scale: 2.6,
      caption:
        'A street boy takes the barricade with a pistol in each hand. Hugo is thought to have made him into Gavroche 32 years later. Delacroix signed the timber below him and dated it 1830.',
    },
    {
      id: 'the-top-hat',
      x: 0.22,
      y: 0.32,
      scale: 2.6,
      caption:
        'A man in a top hat holds a two-barreled gun. The workman beside him carries a saber and wears a beret. Delacroix put the two classes on the same barricade, and their shoulders touch.',
    },
    {
      id: 'notre-dame',
      x: 0.47,
      y: 0.24,
      scale: 2.6,
      caption:
        'The Salon expected a goddess. Delacroix gave it a woman with dirt on her skin. She wears the red cap that Rome put on freed slaves, and the critics called her a fishwife.',
    },
  ],
} satisfies MockSceneDef;
export const theBloodyMassacre = {
  slug: 'the-bloody-massacre',
  title: 'The Bloody Massacre',
  dek: 'A snowball fight ends with 5 men dead, and Revere has his print of it selling in 3 weeks',
  story:
    'It began with a boy insulting an officer over an unpaid wig-maker’s bill. By nine on the cold night of the fifth of March, 1770, a lone British sentry named Hugh White stood outside the Custom House on King Street. A crowd was growing around him, and the boys were throwing snowballs packed hard with ice. White struck one of them with his musket. The crowd thickened, church bells rang as if for a fire, and Captain Thomas Preston marched down a relief of seven soldiers of the 29th Regiment to rescue the sentry. They fixed bayonets and could not get back out. Someone swung a club and knocked Private Hugh Montgomery flat on the ice. He came up firing, and the rest of the line fired after him, ragged, without an order anyone could later prove.\n\nFive men in the crowd died. Crispus Attucks, a dockworker of African and Wampanoag descent who had escaped slavery 20 years before, took two balls in the chest and fell first. Samuel Gray, a rope-maker who had brawled with soldiers days earlier, and James Caldwell, a sailor, died on the spot. Samuel Maverick was 17 and lived until morning; Patrick Carr, an Irish leather-worker, lasted nine days and told his doctor he forgave the men who shot him. It was not a battle. Eight nervous soldiers had fired into an unarmed mob at point-blank range, and the town had its martyrs before the bodies were cold.\n\nPaul Revere, a Boston silversmith, put the scene on a copper plate within the month. The trouble is he stole it. A young painter named Henry Pelham had drawn the same view first and lent it around; Revere copied the composition, engraved it, and had prints selling before Pelham’s own could appear. Pelham wrote him a furious letter comparing the theft to a highway robbery, and there is no record that Revere ever answered. The picture is a lie in the honest sense of propaganda. Revere drew the soldiers as a disciplined firing line loosing a volley on command, an officer’s sword up behind them, when the truth was closer to a panicked scuffle. He labeled the Custom House “Butcher’s Hall.” He drew a musket firing out of an upper window of it. Blood runs in neat lines toward the gutter.\n\nUnder the image he printed a verse: “Unhappy Boston! see thy Sons deplore / Thy hallowed Walks besmear’d with guiltless Gore.” The prints went up in taverns and parlors across the colonies and did exactly what they were made to do. At the trial that autumn, a lawyer named John Adams took the soldiers’ defense. He argued that the crowd had been a rabble of “saucy boys, negroes and mulattoes, Irish teagues and outlandish jack tars,” and got Preston and six of the men acquitted. Two were convicted of manslaughter and branded on the right thumb with a hot iron, an M, in open court, and walked free. In the foreground of Revere’s print, between the dead and the boots of the soldiers, a small brown dog stands in the road. It faces out of the picture, the one witness there that takes no side.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '5 March 1770',
  historicalYear: 1770,
  historicalMonthDay: toMonthDay('03-05'),
  artCredit: 'Paul Revere, 1770',
  imageUrl: bucketPainting('scenes/the-bloody-massacre.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-bloody-massacre.jpg'),
  details: [
    {
      id: 'the-firing-line',
      x: 0.75,
      y: 0.57,
      scale: 2.4,
      caption:
        'Revere drew a drilled line of soldiers firing on command. An officer stands behind them with his sword up. The night was closer to a panicked scuffle on the ice.',
    },
    {
      id: 'butchers-hall',
      x: 0.87,
      y: 0.4,
      scale: 2.6,
      caption:
        'The building is the Custom House, and its own sign says so. Revere lettered Butcher’s Hall across the front of it and drew a musket firing out of an upper window.',
    },
    {
      id: 'the-dog',
      x: 0.44,
      y: 0.71,
      scale: 2.8,
      caption:
        'A small brown dog stands in the road between a dead man and the soldiers’ boots. It faces out of the print instead of at the shooting. Revere had the plate selling within 3 weeks of the night.',
    },
  ],
} satisfies MockSceneDef;

export const theNightTheHarborBrewed = {
  slug: 'the-night-the-harbor-brewed',
  title: 'The Night the Harbor Brewed',
  dek: 'Men in feathers tip 342 chests of tea into Boston harbor and take nothing home',
  story:
    'Three ships sat at Griffin’s Wharf in Boston through the first weeks of December, 1773, loaded with tea nobody would unload. The Dartmouth had docked on the twenty-eighth of November, the Eleanor and the Beaver behind her, all carrying chests of the East India Company’s tea, and all caught in a trap made of paper. The law gave a ship 20 days to pay the duty on its cargo or have that cargo seized by the customs house. For the Dartmouth the clock ran out at midnight on the sixteenth. The town would not let the tea be landed, because landing it meant paying the tax; the governor, Thomas Hutchinson, whose own sons were tea consignees, would not let the ships leave without paying. Something had to give before morning.\n\nOn the afternoon of the sixteenth, thousands packed the Old South Meeting House, more people than lived in most colonial towns. They were waiting on a last message sent to Hutchinson at his country house, asking him to let the ships sail. The answer came back no. Samuel Adams rose and said that this meeting could do nothing more to save the country. It may have been a plain statement of fact. It may have been a signal. Either way, war whoops went up outside in the dark. A column of men already half in disguise moved down toward the water, faces smeared with soot and red paint, blankets over their shoulders, a few with hatchets. They called themselves Mohawks. Nobody was fooled about who they were, and that was rather the point: the costume said this was America’s quarrel, not a mob’s.\n\nWhat followed was oddly orderly for a riot. Nobody afterward agreed on how many went aboard: the counts run from 30 men to well over 100. They split into parties and worked by lantern light for close to three hours. They hauled up 342 chests of tea, split them open with axes, and tipped the leaves into the harbor. The tide was low; the tea piled up in the shallows and had to be beaten down with oars and paddles so it would sink and not drift back. A shoemaker named George Hewes, who was there and told the story 60 years later, remembered the strangest rule of the night: they took nothing. One man who tried to stuff tea into the lining of his coat was stripped of it and roughed up. A padlock broken to reach a hold was found, replaced, and returned the next day. The decks were swept clean. Close to £10,000 of tea went into the sea, and not a teaspoon went home in a pocket.\n\nThe print here is not a witness. Napoleon Sarony and Henry Major drew it in New York in 1846, 73 years after the fact. Their harbor is a stage set: bare-chested Mohawks flinging chests off a high stern, a warehouse crowded with faces at every window, a cheering crowd at the water’s edge under a bright afternoon sky. The real work was done after dark, by lantern light, by men in a hurry to be home before dawn. The phrase Boston Tea Party did not exist yet either; nobody called it that until the 1830s. What London called it was a crime, and the answer came the next spring in a set of laws that shut the port of Boston until the tea was paid for. It never was. In the picture a small British flag still flies from the rigging out in the harbor, over water already full of floating chests.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '16 December 1773',
  historicalYear: 1773,
  historicalMonthDay: toMonthDay('12-16'),
  artTitle: 'The Destruction of Tea at Boston Harbor',
  artCredit: 'Sarony & Major, 1846',
  imageUrl: bucketPainting('scenes/the-night-the-harbor-brewed.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-night-the-harbor-brewed.jpg'),
  details: [
    {
      id: 'the-mohawks',
      x: 0.78,
      y: 0.42,
      scale: 2.6,
      caption:
        'Bare to the waist, feathers in their hair, the raiders swing the chests up over the rail. Nobody in Boston was fooled by the Mohawk costume, and it was not meant to fool anyone.',
    },
    {
      id: 'the-wharf-crowd',
      x: 0.5,
      y: 0.76,
      scale: 2.4,
      caption:
        'On the wharf they wave their hats while the chests bob in the open water behind them. Sarony and Major drew this in 1846 and gave the night a bright afternoon sky.',
    },
    {
      id: 'the-windows',
      x: 0.19,
      y: 0.33,
      scale: 2.4,
      caption:
        'People lean out of the warehouse windows to watch, and a British flag flies from the rigging out in the harbor. The law gave the Dartmouth 20 days to pay the tax on her tea, and the last of them ran out that night.',
    },
  ],
} satisfies MockSceneDef;

export const theRoomWhereItWasWritten = {
  slug: 'the-room-where-it-was-written',
  title: 'The Room Where It Was Written',
  dek: 'Five men hand a draft to Congress on a June afternoon; nobody is signing anything yet',
  story:
    'The painting shows the wrong day, and it does it on purpose. This is the Assembly Room of the Pennsylvania State House in Philadelphia, on the twenty-eighth of June, 1776. The five men standing at the table are the committee, handing their draft of a declaration to the Congress. The Congress will spend the next six days arguing over it. The tall one in the red waistcoat laying the paper down is Thomas Jefferson, 33. He wrote most of it in about 17 days in a rented room a few streets away, on a small folding desk he designed himself. Beside him stand Benjamin Franklin, John Adams, Roger Sherman and Robert Livingston. Seated behind the desk, waiting to take the paper, is John Hancock, the president of the Congress. Nobody in this room is signing anything. The signing came later, and mostly on the second of August.\n\nCongress was not gentle with the draft. Over three days they cut about a quarter of Jefferson’s text, including his long passage blaming the king for the slave trade, which the delegates from South Carolina and Georgia would not swallow. Jefferson sat through the edits in silence, wincing. Franklin, sitting next to him, told him a small story about a hatter’s signboard, cut down word by word until only a picture of a hat remained. It was meant as comfort. The vote for independence itself had passed on the second of July, which made John Adams write to his wife Abigail that the day would be remembered with fireworks and parades forever. He had the celebration right and the date off by two.\n\nJohn Trumbull painted the scene decades after the fact, and he chased accuracy like a man who had been there, which he nearly had. He had served as an aide to George Washington early in the war and had a soldier’s memory for faces. He got Jefferson to sketch the room for him, then painted the delegates one at a time. For years he traveled up and down the coast to catch the living ones face to face, and copied the dead from other portraits. Two signers he could find no likeness of at all, so he painted their sons and let them stand for their fathers. Jefferson’s sketch of the room, it turned out, was wrong in its details, so the doors and windows behind the founders are a memory of a memory. On the back wall Trumbull hung captured British flags and drums as war trophies. There were none in the real room. He wanted the war present in the picture of its beginning.\n\nTrumbull had one working eye. A fall down a staircase as a boy had blinded the other, and he spent his life painting fine detail with half the usual equipment. Congress ordered a copy the size of a wall, 12 feet by 18, and bought it in 1819 for the rotunda of the Capitol, where it still hangs. The picture became the most reproduced image in American history without most people ever knowing what it shows. It is on the back of the two-dollar bill, printed billions of times. It shows a draft being handed over on a summer afternoon, and nearly everyone has spent a whole life mistaking it for the moment of the signing.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '28 June 1776',
  historicalYear: 1776,
  historicalMonthDay: toMonthDay('06-28'),
  artTitle: 'Declaration of Independence',
  artCredit: 'John Trumbull, 1819',
  imageUrl: bucketPainting('scenes/the-room-where-it-was-written.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-room-where-it-was-written.jpg'),
  details: [
    {
      id: 'the-committee',
      x: 0.54,
      y: 0.55,
      scale: 2.4,
      caption:
        'Jefferson stands in the red waistcoat and lays the draft on the table. Franklin is at his elbow. Congress cut about a quarter of the text over the next three days.',
    },
    {
      id: 'hancock-at-the-desk',
      x: 0.83,
      y: 0.56,
      scale: 2.8,
      caption:
        'The man at the desk is John Hancock, president of the Congress. Today he only takes delivery of the paper. His famous signature came 5 weeks later.',
    },
    {
      id: 'the-captured-flags',
      x: 0.46,
      y: 0.38,
      scale: 2.2,
      caption:
        'British flags, a brass drum and two trumpets hang from crossed spears on the wall above the men. No such trophies were in the real room. Trumbull hung the war on the wall of the room where it began.',
    },
  ],
} satisfies MockSceneDef;

export const betweenTwoArmies = {
  slug: 'between-two-armies',
  title: 'Between Two Armies',
  dek: 'The general who lost the war sends a deputy, and the surrender is handed down a rank',
  story:
    'By the middle of October, 1781, Lord Cornwallis had run out of everything but excuses. His army of some 8,000 was pinned against the York River in Virginia, dug into a town called Yorktown, and everything that could go wrong for him had. A French fleet under de Grasse had beaten off the British ships at the mouth of the Chesapeake in September and then sat there, so no rescue and no escape could come by sea. On land, Washington’s Americans and Rochambeau’s French, about 17,000 together, had dug their trenches close and were pounding the town day and night. On the fourteenth, a night assault took the last two British strongpoints, one of them stormed by Alexander Hamilton’s light infantry with unloaded muskets and fixed bayonets, so no premature shot could give them away. Two nights later Cornwallis tried to ferry his men across the river and slip out. A storm scattered the boats and drove them back.\n\nOn the seventeenth, four years to the day after the British surrender at Saratoga, a drummer boy climbed onto the parapet and beat for a parley, and an officer beside him waved a white handkerchief. Nobody on the American side could hear the drum over the guns, but they could see the cloth. Terms were settled the next day. The formal surrender came on the nineteenth. The two allied armies drew up in facing lines across a field, the French in white on one side, the Americans on the other. The British marched out between them to lay down their weapons.\n\nCornwallis did not come. He sent word that he was ill, and in his place rode Brigadier General Charles O’Hara, carrying the sword. What happened next was a small, cold piece of theater. O’Hara steered his horse toward the French, toward Rochambeau, choosing to hand the sword to a European power rather than to the rebels. A French officer pointed him across the field to Washington. Washington would not take it either: O’Hara was a deputy, and Washington was a commander, and a commander does not accept the sword of a subordinate. He directed O’Hara to his own second in command, Major General Benjamin Lincoln, who the year before had been forced to surrender an entire American army at Charleston to these same British. Lincoln took the sword, and handed it back. The insult had been repaid down to the rank.\n\nThe man on the white horse at the center of the picture is Lincoln, not Washington. John Trumbull painted it around 1820 for the rotunda of the Capitol. He put Washington deliberately in the second rank, on a brown horse under the American flag at the right. On the real day the top general had stood back from a surrender that was not his to accept. Trumbull had not been at Yorktown. He sailed to Paris after the war and painted the French officers from life, one sitting at a time. That is why the men in white on the left have real faces. The story goes that the British band played a tune called The World Turned Upside Down as the troops marched out, though no one who was there wrote it down until long after. In the Capitol rotunda this canvas hangs a few steps from Trumbull’s Declaration. He painted the room where the war was declared and the field where it was lost, and put them in the same round room, facing each other across the floor.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '19 October 1781',
  historicalYear: 1781,
  historicalMonthDay: toMonthDay('10-19'),
  artTitle: 'Surrender of Lord Cornwallis',
  artCredit: 'John Trumbull, 1820',
  imageUrl: bucketPainting('scenes/between-two-armies.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/between-two-armies.jpg'),
  details: [
    {
      id: 'the-surrender',
      x: 0.5,
      y: 0.55,
      scale: 2.4,
      caption:
        'The man on the white horse is Benjamin Lincoln, one gloved hand held out. The British officer standing in front of him is Charles O’Hara, sent out because Cornwallis said he was too ill to come.',
    },
    {
      id: 'washington-held-back',
      x: 0.7,
      y: 0.5,
      scale: 2.6,
      caption:
        'Washington sits back in the second rank, on a brown horse under the American flag. Cornwallis had sent a deputy, so Washington would not take the sword himself and passed it to Lincoln.',
    },
    {
      id: 'the-french-line',
      x: 0.17,
      y: 0.45,
      scale: 2.4,
      caption:
        'The French officers stand in white under the white flag of the Bourbon kings. Their fleet had shut the mouth of the Chesapeake in September, so no British ship could come and take Cornwallis off.',
    },
  ],
} satisfies MockSceneDef;

export const theOathInTheTennisCourt = {
  slug: 'the-oath-in-the-tennis-court',
  title: 'The Oath in the Tennis Court',
  dek: 'Locked out of their hall, nearly 600 deputies crowd into a tennis court and swear not to go home',
  story:
    'On the morning of the twentieth of June, 1789, the commoners of France arrived at their meeting hall in Versailles and found the doors locked and soldiers at them. Three days before, the deputies of the Third Estate had done something with no legal basis. They had declared themselves the National Assembly of France, the true voice of the nation, and invited the clergy and nobles to join them. The king answered by shutting their hall, giving out that it needed preparing for a royal session. The deputies did not believe him, and they were right to worry; the closed door looked like the first move toward dissolving them by force. In the rain, cold and half-panicked, they went looking for anywhere large enough to hold 600 men. A few streets away they found an indoor tennis court, an empty hall with a high ceiling and a stone floor. It was built for the racquet game the French called jeu de paume.\n\nThere, standing on a table so the room could see him, the astronomer Jean-Sylvain Bailly, president of the new Assembly, read out an oath. The deputies swore not to separate, and to meet wherever circumstances demanded, until they had given France a written constitution. Nearly 600 men raised their right arms and shouted the words back. Exactly one refused. A deputy named Joseph Martin-Dauch said he could not swear to anything the king had not approved, and wrote the single word opponent beside his name. The room turned on him, some wanting him thrown out a window, and he was hustled out under guard, unharmed. David put him in the picture as well, down in the bottom right corner, sitting with his arms folded while the men around him reach for the oath.\n\nJacques-Louis David, who would become the great painter of the Revolution and then of Napoleon, took the commission to record the day. His picture gives it the weight of scripture. Bailly stands high at the center with his arm up, and the deputies below strain toward him like iron filings toward a magnet. At the very front three clergymen hold on to one another: the Carthusian monk Dom Gerle in his white robe, the Protestant pastor Rabaut Saint-Étienne, and the priest Grégoire. Two churches making peace in the middle of a revolt. A storm had in fact broken over Versailles that afternoon, and David used it. The tall windows blow open, the curtains billow inward, and a shaft of stormy light falls on the men taking the oath. In the galleries, spectators lean in out of the wind to watch.\n\nThe picture here is the oil sketch, a small canvas about a metre wide, and it is as far as the idea ever got in full colour. David was also given a canvas the size of a wall, over 6 metres of it, and began laying the figures in. He drew every deputy nude first so he could clothe them correctly later, the way he had been trained. Then the Revolution ate its own cast. Men sworn together in this room split into factions and sent each other to the guillotine. Bailly, the man on the table, was executed in 1793. It became impossible to hang a picture celebrating heroes who were killing each other, the money ran out, and David moved on. The big canvas is still at Versailles, the deputies drawn in outline and never dressed, four heads painted in and the rest bare canvas.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '20 June 1789',
  historicalYear: 1789,
  historicalMonthDay: toMonthDay('06-20'),
  artTitle: 'The Tennis Court Oath',
  artCredit: 'Jacques-Louis David, oil sketch, 1791',
  imageUrl: bucketPainting('scenes/the-oath-in-the-tennis-court.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-oath-in-the-tennis-court.jpg'),
  details: [
    {
      id: 'bailly-on-the-table',
      x: 0.52,
      y: 0.6,
      scale: 2.8,
      caption:
        'A man stands above the crowd with the oath in one hand and the other arm up. This is Jean-Sylvain Bailly, an astronomer. Four years later he was guillotined on the Champ de Mars.',
    },
    {
      id: 'the-three-clergy',
      x: 0.45,
      y: 0.75,
      scale: 2.8,
      caption:
        'The monk in the white robe is Dom Gerle, a Carthusian. The two men holding on to him are the Protestant pastor Rabaut Saint-Étienne and the priest Grégoire. David put all three at the front of the picture.',
    },
    {
      id: 'the-wind',
      x: 0.21,
      y: 0.2,
      scale: 2.6,
      caption:
        'Spectators crowd a gallery high above the floor while a curtain blows in over their heads. A storm broke over Versailles that afternoon, and David put the wind in the picture.',
    },
  ],
} satisfies MockSceneDef;

export const theFriendOfThePeople = {
  slug: 'the-friend-of-the-people',
  title: 'The Friend of the People',
  dek: 'A knife bought that morning, a bath, and a martyr painted with the ugliness left out',
  story:
    'Jean-Paul Marat spent his last hours where he spent most of them, in the bath. A skin disease had eaten at him for years. The only relief he found was to sit for hours in a copper tub of medicated water, a wooden board laid across it for a desk. That is where he wrote the newspaper that had made him the most feared man in Paris. It was called The Friend of the People, and from it Marat had called for heads by the thousand. On the evening of the thirteenth of July, 1793, a young woman from the provinces named Charlotte Corday talked her way to his door. She had been turned away that afternoon; she came back at seven, and this time she carried a note promising to name Girondin traitors hiding in Caen. Marat, who never could resist a list of enemies, had her let in.\n\nShe was 24, and she had bought the knife that morning at a cutler’s stall in the Palais-Royal, a plain kitchen blade about 5 inches long. She stood by the tub and read him the names, and he wrote them down, and told her they would all go to the guillotine. Then she drew the knife from her dress and drove it once into his chest, under the collarbone, deep enough to open the great vessels above the heart. He called out to his fiancée, Simonne Evrard: help me, my dear friend. He was dead in minutes. Corday did not run. She was standing there when they seized her, and four days later she went to the guillotine herself, calm to the end. The executioner’s assistant slapped her severed head, and the crowd was so disgusted that the man was thrown in prison for it.\n\nJacques-Louis David had visited Marat in that bath the day before the murder and found him working over his board. He was Marat’s friend, a deputy of the same faction, and the Convention asked him to make the death into an image the Revolution could pray to. He finished it that autumn and lied in every merciful direction. The real Marat was scabbed and swollen; David gave him the smooth pale skin and slack heavy arm of Christ taken down from the cross. He set the tub in a vast plain darkness, put a single wound and a thread of blood on the perfect chest, and made the murder look like an altarpiece. In one hand Marat still holds Corday’s note, the writing legible: it is enough that I am unhappy to have a right to your goodness. The lie she used to reach him is the paper he dies clutching.\n\nDavid added a second document the murder scene never contained. On the wooden crate Marat used as a desk he painted a banknote and a note in Marat’s hand: you will give this to that mother of five children whose husband died for his country. In his last moment, the picture insists, Marat was not writing out a death list but giving his own money to a war widow. On the face of the crate David signed the painting like a headstone, to Marat, and the year. He built the man a monument out of the packing box he wrote on. The tub itself outlived them all. It sat in a cellar, passed through the hands of collectors and a country priest, and ended up at the Musée Grévin, the Paris waxworks. An ordinary copper bath, and a country turned it into a shrine.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '13 July 1793',
  historicalYear: 1793,
  historicalMonthDay: toMonthDay('07-13'),
  artTitle: 'The Death of Marat',
  artCredit: 'Jacques-Louis David, 1793',
  imageUrl: bucketPainting('scenes/the-friend-of-the-people.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-friend-of-the-people.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.21,
      y: 0.45,
      scale: 2.4,
      caption:
        'Marat’s head has fallen back and his eyes are shut. The vinegar-soaked cloth is still wrapped round it. The disease that kept him in the bath left his skin scabbed and raw, and David painted it smooth.',
    },
    {
      id: 'the-letter',
      x: 0.68,
      y: 0.54,
      scale: 2.8,
      caption:
        'A note is still in his hand. Corday wrote it herself: it is enough that I am unhappy to have a right to your goodness. The lie she used to reach him is the paper he dies holding.',
    },
    {
      id: 'the-crate',
      x: 0.62,
      y: 0.87,
      scale: 2.2,
      caption:
        'The hand has not let go of the quill. Marat used a packing box as a desk. David lettered his own dedication on it like a headstone: to Marat, David, year 2 of the Republic.',
    },
  ],
} satisfies MockSceneDef;
export const theFierySteed = {
  slug: 'the-fiery-steed',
  title: 'The Fiery Steed',
  dek: 'The general ordered himself painted calm on a rearing horse. He had crossed on a mule',
  story:
    'In the third week of May, 1800, a French army of some 40,000 men climbed the Great St Bernard Pass, still under snow. The top of it stands at 8,100 feet. They took the guns apart and dragged the barrels inside hollowed pine logs, a hundred men to a cannon, hauling them over the ice by hand. Napoleon crossed on the twentieth. He did not ride a rearing stallion. He rode a mule, wrapped in a grey coat. It was led by a young guide from the village of Bourg-Saint-Pierre, Pierre Nicolas Dorsaz, who did not know at first who he was walking beside. At the top Napoleon offered him a reward. Dorsaz asked for the mule, and got the mule, and then a house and a farm as well. The point of the crossing was speed. Three weeks later, on the plain of Marengo, the Austrians nearly beat him, and then, late in the day, did not.\n\nThe picture was commissioned by Charles IV of Spain, for the royal palace in Madrid. Napoleon gave Jacques-Louis David one instruction. Calm, on a fiery horse. Calme sur un cheval fougueux. He would not sit for it. The great men of antiquity had their images without sitting, he said, and he asked what good sitting would do. So David worked from a bust of the head, from the uniform and bicorne Napoleon had worn at Marengo, and from his own son perched on a ladder to get the posture. The horse is invented. Two of Napoleon’s own horses stood as models, and what David built out of them is a storm with hooves.\n\nEverything in it argues upward. The cloak flies the wrong way for the wind that flattens the mane, because David needed the red to fill that corner of the sky. The gloved hand points to the summit the army has already passed. The face is far too calm for a man of 30 who had just risked everything on a mountain and a gamble. And along the rock at the bottom, cut as if by earlier travelers, are three names. BONAPARTE is the largest and the freshest. Below it, worn almost away, ANNIBAL and KAROLVS MAGNVS. Hannibal took elephants over the Alps against Rome. Charlemagne crossed to break the Lombards. David cut Bonaparte’s name into their stone and left the older letters weathered, so the new one would read as the last in a line.\n\nNapoleon liked it enough to order three more, for his château at Saint-Cloud, for the library at Les Invalides, and for the royal palace in Milan. A fifth stayed in David’s workshop until he died. They hang now at Malmaison, in Berlin, in Vienna, and twice at Versailles. The cloak is orange in the Malmaison picture and gold in the one at Vienna, and the horse changes color from version to version. Down in the lower corner of every one, small and dark under the horse’s belly, a file of real soldiers bends into the slope. They are dragging a gun carriage up the pass on foot, doing the thing the man above them is only pretending to do.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '20 May, 1800',
  historicalYear: 1800,
  historicalMonthDay: toMonthDay('05-20'),
  artTitle: 'Napoleon Crossing the Alps',
  artCredit: 'Jacques-Louis David, 1801',
  imageUrl: bucketPainting('scenes/the-fiery-steed.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-fiery-steed.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.585,
      y: 0.23,
      scale: 3.2,
      caption:
        'The face is far calmer than it should be on a man of 30 who had just risked everything on a mountain crossing. Napoleon refused to sit for the portrait. David worked from a bust of his head and from the uniform he wore at Marengo.',
    },
    {
      id: 'the-horse',
      x: 0.3,
      y: 0.26,
      scale: 2.8,
      caption:
        'Napoleon gave one instruction: calm on a fiery horse. Here is the horse, with its eye rolling white and its mouth dragged open on the bit. He crossed the pass on a mule, and a village boy named Pierre Nicolas Dorsaz led him.',
    },
    {
      id: 'the-artillery',
      x: 0.28,
      y: 0.72,
      scale: 2.4,
      caption:
        'Small dark figures under the horse\'s hooves drag a gun carriage up the rock by hand. They are real soldiers, and they are doing the crossing the man above them is only posing for.',
    },
  ],
} satisfies MockSceneDef;

export const theCrownHeLifted = {
  slug: 'the-crown-he-lifted',
  title: 'The Crown He Lifted',
  dek: 'The Pope came all the way to Paris to crown him. He took the crown and did it himself',
  story:
    'On the second of December, 1804, Notre-Dame was freezing and hung with borrowed splendor. The old Gothic front had been boarded over with a plaster arcade in the classical style, because Napoleon found the medieval church embarrassing, and braziers burned along the nave against a hard Paris winter. Pope Pius VII had come the whole way from Rome, over the Alps in a coach in the cold, on the understanding that he would crown the new emperor of the French. He anointed Napoleon’s head and hands with oil. Then, at the moment the crown should have passed from the Pope’s hands to Napoleon’s head, Napoleon took it himself, turned his back on the altar, and put it on. He had rehearsed the gesture. It said that the crown came from him, not from Rome, not from God, and everyone in the church understood it.\n\nThen he crowned his wife. Joséphine knelt on the carpet in white and diamonds, the women of his family carrying her train, and Napoleon lowered a second crown onto her hair. She was 41, four years older than the age she had given on her marriage certificate. She had wept and maneuvered for months to be crowned beside him, against the wishes of his whole family. The marriage produced no heir. Five years later he divorced her for an Austrian archduchess who could, and Joséphine kept the title of empress and the house at Malmaison and her roses until she died.\n\nJacques-Louis David was there with a sketchbook. He began the canvas in December of 1805 and put the last touches to it in January of 1808. The finished canvas is 32 feet wide and lives in the Louvre. David chose the safer half-second. He left the self-crowning out and painted the emperor lifting the second crown over his kneeling wife, which reads as tenderness instead of theft. He edited freely. On the day, Pius VII sat with his hands in his lap while his own ceremony was taken away from him. In the painting he raises two fingers in blessing, because Napoleon looked at the sketch and said a pope brought all that way should at least be seen to bless something.\n\nThe biggest lie is in the gallery above. In the center of the balcony, watching serenely, sits Letizia Bonaparte, the emperor’s mother, a Corsican woman who had raised eight children in genuine poverty and trusted none of this. She was not in the church that day. She had left Paris in protest over a family quarrel, refusing to attend, and Napoleon ordered David to seat her at the heart of the picture anyway, presiding over a coronation she had boycotted. Higher up, in the shadows of the same gallery, David painted a small row of onlookers, and among them, sketching, himself.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '2 December, 1804',
  historicalYear: 1804,
  historicalMonthDay: toMonthDay('12-02'),
  artTitle: 'The Coronation of Napoleon',
  artCredit: 'Jacques-Louis David, 1807',
  imageUrl: bucketPainting('scenes/the-crown-he-lifted.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-crown-he-lifted.jpg'),
  details: [
    {
      id: 'the-self-crowning',
      x: 0.565,
      y: 0.66,
      scale: 3.2,
      caption:
        'Napoleon already wears the gold laurel he had put on his own head instead of letting the Pope do it. David left that part out and painted him lifting the second crown, the one for his wife.',
    },
    {
      id: 'josephine',
      x: 0.44,
      y: 0.79,
      scale: 2.6,
      caption:
        'Joséphine kneels in white while the women behind her hold up the red velvet train. She was 41, four years older than the age she had given on her marriage certificate.',
    },
    {
      id: 'the-pope',
      x: 0.7,
      y: 0.75,
      scale: 3.2,
      caption:
        'Pius VII sits in white behind Napoleon with his right hand up in blessing. On the day he kept his hands in his lap, and the gesture was put in later because Napoleon asked for it.',
    },
  ],
} satisfies MockSceneDef;

export const theRoadOutOfRussia = {
  slug: 'the-road-out-of-russia',
  title: 'The Road Out of Russia',
  dek: 'An army of 600,000 walks home through the snow and does not arrive',
  story:
    'About 450,000 men crossed the Niemen with Napoleon in June of 1812. Reinforcements over the summer brought the invasion force to something above 600,000. He took Moscow in September and found it empty, and within a day it was on fire. The governor had ordered the city burned rather than let the French winter in it warm. Napoleon waited five weeks in the ashes for a surrender that never came, then turned around. The Grande Armée left Moscow on the nineteenth of October and walked back the way it had come, across country its own advance had already stripped bare of food.\n\nThen the cold came for it. The horses died first, by the thousand, and once the horses were gone the cavalry walked and the guns and the wounded were left where they stopped. Men froze standing up around fires that were too small. By Smolensk in early November most of the army was already gone. Then it got colder, and then they reached the river.\n\nAt the Berezina, at the end of November, Russian armies were closing from three sides and the bridges were down. The bridge-builders under General Éblé, most of them Dutch, waded into water cold enough to kill a man in half an hour. Working in relays, they threw up two trestle bridges out of timber pulled from the town. Éblé died a month later at Königsberg, of what the water had done to him. The army crossed on the twenty-sixth through the twenty-ninth of November under fire. Éblé held back the order to burn the bridges as long as he dared, and when they went up tens of thousands of stragglers and camp followers were still on the far bank. The crossing cost 50,000 lives or more, soldiers and civilians together. In French, la Bérézina still means a catastrophe.\n\nOn the fifth of December, at a place called Smorgoni, Napoleon handed the wreck to his brother-in-law Murat. He got into a sleigh and raced for Paris, ahead of the news. A general there had just tried to seize the government on a rumor that he was dead. Behind him the last of the army stumbled into Prussia over the following weeks. Of the central column, only a few thousand came out fit to fight. The thing he could not outrun was the Twenty-ninth Bulletin. It was his own dispatch, admitting the disaster and blaming the weather and the dead horses, and it closed with a sentence Paris read twice: the health of His Majesty has never been better.\n\nThe painting is a Polish memory of it, made 42 years later. Franciszek Kostrzewski was a Warsaw painter, and he put a red and white pennant up over the column. Polish soldiers had marched east under Napoleon on the promise of their country back and got the snow instead. Two men at the head of the column still have horses. The rest are on foot with their heads down, a dog keeps pace at the edge, and off to the right a broken wheel stands up out of a drift. The picture is 35 by 54 centimeters, and it hangs in the National Museum in Warsaw.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: 'Winter, 1812',
  historicalYear: 1812,
  historicalMonthDay: null,
  artTitle: 'Retreat from Moscow',
  artCredit: 'Franciszek Kostrzewski, 1854',
  imageUrl: bucketPainting('scenes/the-road-out-of-russia.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-road-out-of-russia.jpg'),
  details: [
    {
      id: 'the-standard',
      x: 0.47,
      y: 0.34,
      scale: 2.4,
      caption:
        'A red and white pennant rides over the column on a long lance. Those are the colors of Poland, and Kostrzewski was a Warsaw painter. Polish soldiers went east with Napoleon on a promise of getting their country back.',
    },
    {
      id: 'the-frozen-column',
      x: 0.37,
      y: 0.55,
      scale: 2.8,
      caption:
        'The men come on with their heads down under packs and rolled blankets. They are wrapped in whatever they took from the dead. By the end of November Napoleon had about 49,000 soldiers still under arms and 40,000 stragglers walking behind them.',
    },
    {
      id: 'the-dog',
      x: 0.76,
      y: 0.65,
      scale: 2.8,
      caption:
        'A dog keeps pace at the edge of the column, beside a man leaning on a staff. Off to the right a broken wheel and its axle stand up out of the drift where they were left.',
    },
  ],
} satisfies MockSceneDef;

export const theIslandOfMastic = {
  slug: 'the-island-of-mastic',
  title: 'The Island of Mastic',
  dek: 'A rich Aegean island that grew resin for the sultan is emptied in a few weeks',
  story:
    'Chios was the softest place in the Aegean to be Greek. The island grew mastic, the resin the Ottoman court chewed and made into liqueur. For that one crop the sultans had let Chios keep its bells, its schools and a light hand for more than 250 years. Its people did not want a war. When fighters from the neighboring island of Samos landed in March of 1822 to bring the Greek revolution to Chios, most of the islanders hung back, and it did them no good at all. An Ottoman fleet anchored off the town in late March. On the twelfth of April the order came to burn it, and troops came ashore to punish the whole island.\n\nWhat followed was not a battle. Of about 110,000 people on Chios, something like 25,000 were killed. Another 45,000 were sold into slavery, and the rest fled or were carried off. The markets of the eastern Mediterranean filled with Chiot women and children priced by the head. Villages that had made resin for the sultan were burned. Europe read about it in the newspapers, and the reading did something. There was already a fashion for ancient Greece among educated Westerners, all Homer and marble, and the massacre turned the fashion into a cause. Two years later Lord Byron, the most famous poet alive, died of fever at Missolonghi, where he had gone with his own money to fight for the Greeks.\n\nEugène Delacroix was 26, with one Salon behind him, and he decided to put the massacre on a canvas 14 feet tall for the Paris Salon of 1824. He did not paint the killing. He painted the after: a hillside above the burning town strewn with Greek captives waiting to be murdered or shipped, and he refused them any heroism. There is no defiance in the picture, no last stand. An old woman sits upright and looks away over everyone’s head. A young man dying of his wounds lets a girl sleep against his shoulder. On the right, an Ottoman soldier on a rearing horse has a naked woman roped behind him. At the horse’s feet a baby still reaches for the breast of a mother who is already dead. Everyone is beautiful and nobody is saved.\n\nThe way it was painted scandalized the professionals. Delacroix had laid the color on in small separate strokes, so that the light seems to move over the hillside instead of sitting still on it. Antoine-Jean Gros, the reigning master of the grand style, walked past it and called it the massacre of painting, and he meant the painting, not the Greeks. John Constable’s Hay Wain hung in the same Salon and took a gold medal from the king of France. Its broken, flickering greens went through Delacroix and a whole generation of French painters. The French state bought the Chios anyway, for 6,000 francs, and it is in the Louvre now, a room or two from the barricade Delacroix would paint six years later. The old woman is still looking up. Nobody has ever agreed on what she sees.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: 'April, 1822',
  historicalYear: 1822,
  historicalMonthDay: null,
  artTitle: 'Scene of the Massacre at Chios',
  artCredit: 'Eugène Delacroix, 1824',
  imageUrl: bucketPainting('scenes/the-island-of-mastic.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-island-of-mastic.jpg'),
  details: [
    {
      id: 'the-old-woman',
      x: 0.645,
      y: 0.73,
      scale: 2.4,
      caption:
        'The old woman sits upright among the bodies with one hand open in her lap. She looks up and away from all of it. Nobody has ever settled what she sees.',
    },
    {
      id: 'the-sleeping-girl',
      x: 0.27,
      y: 0.71,
      scale: 2.4,
      caption:
        'A girl sleeps against a young man\'s shoulder with her hand on his chest. Both of them are half stripped. Delacroix gave the captives no defiance and no last stand, only exhaustion.',
    },
    {
      id: 'the-horseman',
      x: 0.8,
      y: 0.4,
      scale: 2.6,
      caption:
        'An Ottoman soldier turns his grey horse over the captives. At the bottom right a bound wrist comes up out of the crowd. Of about 110,000 people on Chios, some 45,000 were sold into slavery.',
    },
  ],
} satisfies MockSceneDef;

export const theStoneThrower = {
  slug: 'the-stone-thrower',
  title: 'The Stone Thrower',
  dek: 'A man on a barricade lifts a paving stone as the army comes up the rue Soufflot',
  story:
    'The new French Republic was four months old and already broke. February of 1848 had thrown out a king and set up the National Workshops, work and a small wage for any Paris man who had none, and by June 100,000 men depended on them. In the third week of June the government ordered the Workshops shut: young men could take the army, the rest could go home to the provinces or go hungry. The eastern half of Paris rose at once, and for four days the workers of the city fought the government that had just stopped feeding it.\n\nThey built barricades again, hundreds of them, and this time the flag over the stones was a plain red one instead of the tricolor of the Republic. Red was the color the workers had made their own. The government gave the whole business to a single general, Louis-Eugène Cavaignac, with something close to dictatorial power. Cavaignac had a cold idea and used it. He pulled his troops back and let the insurgents finish their barricades undisturbed, so that when he attacked he could take a whole quarter at once instead of street by street. It worked. Over four days perhaps 10,000 people were killed or wounded. When it ended, the courts deported around 4,000 insurgents to Algeria, and the young republic had drowned its own left in the space of a week.\n\nOne of the hardest fights was here, on the rue Soufflot, the short straight street that runs up to the Panthéon. On the twenty-fifth the army came up it against a barricade held by workers. The general commanding in that quarter, Édouard Damesme, had been shot through the thigh the day before, a few streets away on the rue de l’Estrapade. They took the leg off at the Val-de-Grâce, and he died of the wound five weeks later. Horace Vernet painted the moment the assault reached the stones. Vernet was the establishment’s battle painter, decorated, official, a man who worked for kings and then for this republic, and his sympathies were plainly with the soldiers coming up the street. But he was too good a painter to lie about who was interesting. The eye goes straight past the tidy bayonets to the insurgents on the barricade.\n\nAt the top of the stones a man in a white shirt and dark trousers has both arms over his head, holding a paving block, in the half-second before he throws it. The red flag stands beside him. Behind them both is the dome of the Panthéon, pale in the powder smoke, the building where France buries the great men it decides to honor once they are safely dead. There is no name for the man with the stone. He was one of the workers who lost, and the losers of June left few records and no monuments. The winners wrote the histories and painted the pictures, and even this picture belongs to the other side. His weapon is a piece of the street itself. Paris was paved in squared blocks, each about the size a man can just lift over his head, and for a century every rising in the city began by prying them up. Vernet painted all of it on a canvas 36 by 46 centimeters, and it hangs in Berlin.',
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '25 June, 1848',
  historicalYear: 1848,
  historicalMonthDay: toMonthDay('06-25'),
  artTitle: 'The Barricade in the Rue Soufflot',
  artCredit: 'Horace Vernet, 1848–1849',
  imageUrl: bucketPainting('scenes/the-stone-thrower.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-stone-thrower.jpg'),
  details: [
    {
      id: 'the-pave',
      x: 0.31,
      y: 0.68,
      scale: 2.4,
      caption:
        'Two men crouch behind the barricade with muskets. Another lies face down in front of them. The barricade is the street itself, built from cart wheels turned on their sides and paving stones pried up by hand.',
    },
    {
      id: 'the-red-flag',
      x: 0.3,
      y: 0.26,
      scale: 2.8,
      caption:
        'A worker in shirtsleeves holds a paving stone over his head, in the half-second before he throws it. The flag beside him is plain red, not the tricolor of the Republic. The dome behind him is the Panthéon.',
    },
    {
      id: 'the-assault',
      x: 0.7,
      y: 0.42,
      scale: 2.6,
      caption:
        'The line comes up the street with bayonets fixed. An officer on a grey horse rides behind them. At the right a man in a white shirt goes at the bayonets bare-handed.',
    },
  ],
} satisfies MockSceneDef;

export const theMajorityOfOne = {
  slug: 'the-majority-of-one',
  title: 'The Majority of One',
  dek: 'The Convention finishes counting, and the king climbs the steps',
  story:
    "The Republic tried him under the name it had issued him, Citizen Louis Capet. The monarchy was abolished by then, so there was no king in the dock, only a man. The evidence was real enough, an iron chest of secret correspondence with the powers preparing to invade, and the verdict was never in doubt. The drama was the sentence. For 36 hours in January the deputies of the Convention walked one at a time to the rostrum and voted aloud on the king's life, with the galleries keeping score. His cousin the duke of Orléans, restyled Philippe Égalité, voted for death, and Paris never stopped discussing it. Of 721 deputies, 361 voted for death with no conditions attached. That was one more than the majority needed. A majority of one was enough. It always is.\n\nOn the morning of 21 January 1793 the king rode for over an hour through streets lined with 80,000 armed men and closed shutters, attended by an Irish-born priest named Henry Essex Edgeworth. The square had been the Place Louis XV and was now the Place de la Révolution. There he took his coat off himself, argued about having his hands tied, and lost the argument. Then he began to speak to the crowd: that he died innocent, that he pardoned the men who had brought him there. Santerre, commanding the guard, ordered the drums, and the rest of the sentence belongs to the drummers. Legend gives Edgeworth the parting line, son of Saint Louis, ascend to heaven. Asked about it later, Edgeworth could not remember saying it. Spectators dipped handkerchiefs in the blood, some as relic, some as souvenir, the two not yet being different things.\n\nWithin two weeks France was at war with Britain and the Dutch Republic as well as Austria and Prussia. Spain joined them in March. The Revolutionary Tribunal opened that same month, and the official death sentences across France would reach 16,594 before the Terror ended. The queen followed in October. The boy the royalists called Louis XVII died in a locked room at 10 years old. The dead king's brother dated his own reign from that room, and treated the 19 years before he got the throne as a clerical error.\n\nBenazech, an Englishman trained in Paris, painted the last minutes and not the blade. The king stands in white at the foot of the steps, turned back toward his confessor. The mounted officer's sword already points the way up. The guillotine's posts run off the top edge of the canvas, so the blade is never in the picture. Luigi Schiavonetti engraved the series and the prints sold across Europe: grief had a market too. Benazech died in London in 1794, at 27, and the canvas is now in the Musée Carnavalet.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '21 January 1793',
  historicalYear: 1793,
  historicalMonthDay: toMonthDay('01-21'),
  artTitle: 'The Execution of Louis XVI',
  artCredit: 'Charles Benazech, 1793',
  imageUrl: bucketPainting('scenes/the-majority-of-one.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-majority-of-one.jpg'),
  details: [
    {
      id: 'the-king',
      x: 0.36,
      y: 0.6,
      scale: 2.4,
      caption:
        'The king took his coat off himself and stands there in his shirt, arms out. He has turned back to Henry Edgeworth, the Irish priest who rode the whole route with him.',
    },
    {
      id: 'the-machine',
      x: 0.85,
      y: 0.2,
      scale: 2.4,
      caption:
        'A man in a dark red coat stands on the scaffold, one hand on a rope that runs up the post. Benazech lets the posts leave the top of the canvas, so the blade never appears.',
    },
    {
      id: 'the-flag',
      x: 0.28,
      y: 0.33,
      scale: 2.4,
      caption:
        'The tricolor over a crowd packed back to the far rooftops. The city put 80,000 armed men into this square and the streets around it that morning.',
    },
  ],
} satisfies MockSceneDef;

export const theAngelOfAssassination = {
  slug: 'the-angel-of-assassination',
  title: 'The Angel of Assassination',
  dek: 'The counter-painting to the most famous propaganda in France',
  story:
    "This museum already hangs the other version of this room. David's Marat, painted within weeks of the killing, makes the dead man look like a martyr in a church painting and erases the woman completely: no Corday, no struggle, only a saint in a bathtub. It took France 67 years to paint the reply, and this is it: same tub, same dead man, same July evening in 1793, seen from the other side.\n\nCharlotte Corday was 24, a country nobleman's daughter from Normandy with a convent education and a Plutarch habit. She was a fifth-generation descendant of the playwright Corneille. She had watched Marat's newspaper call, week after week, for heads by the hundred thousand. She had watched the Girondin deputies she admired thrown out of the Convention and hunted down. She traveled to Paris alone and bought a kitchen knife with a 5-inch blade at the Palais Royal. Then she talked her way into the apartment on the rue des Cordeliers by promising names of traitors at Caen. Marat, confined to a medicinal bath by a skin disease that was eating him alive, wrote the names down and told her they would be guillotined within days. It was, in effect, the confession she had come to collect. She put the knife through his chest with one blow, and she did not run.\n\nAt her trial she was asked who had put her up to it. Her answer unsettled the prosecutors more than defiance would have. No one, she said: she had planned it alone, and she had killed one man to save a hundred thousand. She went to the guillotine 4 days later with a composure the newspapers could not explain. What came after produced two of the Revolution's strangest footnotes. A carpenter named Legros lifted the severed head and slapped the cheek, and witnesses swore the cheek flushed. He got 3 months in prison, and the report fed a century of medical argument about what a severed head knows. And the Jacobins, certain no woman could have done this unprompted, ordered an autopsy to prove a lover's hand behind her. The autopsy proved only that the republic's investigators had run out of ideas. Lamartine, writing in 1847, gave her the name that stuck: the angel of assassination.\n\nBaudry painted her in 1860, for a France arguing about its Revolution all over again. She stands upright against a wall map of the country she said she was saving, Normandy level with her shoulder. The knife lies on the board across the tub. A copy of Marat's own newspaper, the Publiciste, lies creased on the floor beside the overturned chair. The picture went to the Salon of 1861. Théophile Gautier praised it, Maxime du Camp did not, and it hangs in Nantes now. David's version is the greater painting. This one is the more complete report.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '13 July 1793',
  historicalYear: 1793,
  historicalMonthDay: toMonthDay('07-13'),
  artTitle: 'Charlotte Corday',
  artCredit: 'Paul Baudry, 1860',
  imageUrl: bucketPainting('scenes/the-angel-of-assassination.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-angel-of-assassination.jpg'),
  details: [
    {
      id: 'the-face',
      x: 0.8,
      y: 0.1,
      scale: 2.8,
      caption:
        'Charlotte Corday was 24. Baudry gives her no horror and no triumph, only a woman who has done it and stayed in the room.',
    },
    {
      id: 'the-map',
      x: 0.58,
      y: 0.2,
      scale: 2.4,
      caption:
        'Baudry hangs a map of France behind her, with the Channel across the top and Normandy level with her shoulder. She had come down from Caen 4 days before.',
    },
    {
      id: 'the-marat',
      x: 0.13,
      y: 0.57,
      scale: 2.4,
      caption:
        "Marat's head has gone back over the rim of the tub, mouth open, eyes shut. The knife lies flat on the board behind his shoulder, not in the wound.",
    },
  ],
} satisfies MockSceneDef;

export const fromThisPlaceAndThisDay = {
  slug: 'from-this-place-and-this-day',
  title: 'From This Place and This Day',
  dek: 'A muddy artillery duel ends the age of kings anyway',
  story:
    "The Prussian army that marched on Paris in the autumn of 1792 was the most respected in Europe, and it advertised. Its commander's manifesto promised the city vengeance and ruin if the royal family were touched. It was the most counterproductive document of the century. Paris answered by storming the Tuileries. The army that met the Prussians at Valmy on 20 September was something military science had no category for. It was half regulars and half volunteers who had been shopkeepers in July, and they sang while they stood.\n\nThe battle itself was mostly weather and artillery. In fog and rain and mud, the French guns traded fire with the Prussian batteries across a shallow valley below the windmill of Valmy. The artillery was the one branch of the old royal army the Revolution had kept whole and professional. When the Prussian infantry started forward, an ammunition wagon blew up and put Kellermann on the ground. He got on another horse, raised his hat on the point of his sabre, and called out Vive la Nation. The line roared it back and did not break. The Duke of Brunswick looked through the rain at unbroken guns and unbroken shopkeepers and said the sentence that decided Europe: we do not fight here. Casualties on both sides together came to a few hundred. For what it settled, Valmy is the cheapest decisive battle in modern history. The invasion turned around and squelched home, dysentery commanding the rearguard.\n\nIn Paris the National Convention had met that same day. On the 21st it abolished the monarchy. On the 22nd it declared the Republic, and the calendar restarted at Year One. Goethe was with the Prussian army that day, a civilian observer of 43. Demoralized officers asked him at the campfire for a word. He gave them the one the era kept: from this place and this day begins a new epoch in the history of the world, and you can say that you were there. He published the line 30 years afterwards, which is when most famous sentences get written.\n\nVernet painted the mill and the mud in 1826 on a commission from the duke of Orléans. Orléans had a stake in the subject: at 18 he had been a lieutenant general of the Republic, and he had stood on that ridge himself. Four years after the canvas was delivered he became King Louis-Philippe, a monarch whose proudest credential was a battle fought to abolish monarchs, which is the Revolution's whole sense of humor in one commission. It is one of 4 battle scenes Vernet painted for Orléans, and it was damaged when a Paris crowd sacked the Palais-Royal in 1848. The painting hangs in the National Gallery in London: the mill at the left, the dead horses in the foreground, and the new epoch arriving as weather.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '20 September 1792',
  historicalYear: 1792,
  historicalMonthDay: toMonthDay('09-20'),
  artTitle: 'The Battle of Valmy',
  artCredit: 'Horace Vernet, 1826',
  imageUrl: bucketPainting('scenes/from-this-place-and-this-day.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/from-this-place-and-this-day.jpg'),
  details: [
    {
      id: 'the-windmill',
      x: 0.17,
      y: 0.3,
      scale: 2.2,
      caption:
        'A windmill stands on the ridge with its sails stopped and a storm coming in behind it. This is the mill of Valmy. The French held this rise all day, and the battle took the mill\'s name.',
    },
    {
      id: 'the-hat',
      x: 0.37,
      y: 0.67,
      scale: 2.4,
      caption:
        'The French line holds along the ridge while a blast goes up inside it. At the right an officer is thrown off his horse. Half these men were regulars, and half were volunteers who had been shopkeepers in July.',
    },
    {
      id: 'the-surgeons',
      x: 0.14,
      y: 0.85,
      scale: 3.0,
      caption:
        'The surgeon has his instrument case open on the table. A man with a head wound sits on a barrel. The French lost about 300 killed and wounded that day. The Prussians lost 184.',
    },
  ],
} satisfies MockSceneDef;

export const theGreyHorsesComing = {
  slug: 'the-grey-horses-coming',
  title: 'The Grey Horses Coming',
  dek: 'The viewer stands where the French infantry stood',
  story:
    "Just after half past one at Waterloo, the French infantry columns of d'Erlon's corps were grinding up the ridge and into the Allied line. The British heavy cavalry was let loose at them. Among the regiments was the Royal North British Dragoons, known to everyone by their horses as the Scots Greys. They came through their own infantry shouting Now, my boys, Scotland forever, and fell on the columns downhill. For ten minutes it was slaughter, and the leading French brigades broke. Sergeant Charles Ewart of the Greys took the eagle standard of the 45th of the Line in a hacking fight he later described with a butcher's precision. The eagle stands in Edinburgh Castle now.\n\nThen the charge did what heavy charges did: it kept going. Blown horses, blood up, deep in the French position among the guns, the brigade was caught by fresh lancers and cut apart on the way home. The Greys lost 104 men dead and 97 wounded. Of their 416 horses, 228 did not come back. Ponsonby, who commanded the brigade, was killed in the mud. Whether Napoleon really muttered about those terrible grey horses is past proving and past dislodging. The charge entered the language as both glory and warning, the finest and least repeatable ten minutes the British cavalry ever had.\n\nThe painting is by a woman who was never allowed near a battle. Elizabeth Thompson became famous in 1874 with The Roll Call, a Crimean picture so mobbed at the Academy that a policeman had to be posted beside it. Queen Victoria bought it out of the exhibition. In 1879 Thompson missed election to the Royal Academy by 2 votes. No woman was elected until 1922. She worked from other people's eyes: she talked to veterans, and she stood in front of her husband's regiment on maneuvers while it charged at her, so she could see horses coming head-on. That is the radical fact of Scotland Forever: the viewer is placed in front of the charge, where the French stood, watching the wall of grey horses arrive at gallop with no intention of stopping.\n\nShe finished it in 1881 and showed it at the Egyptian Hall in Piccadilly. Colonel Thomas Walter Harding gave the canvas to Leeds in 1888, and it has hung there since.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '18 June 1815',
  historicalYear: 1815,
  historicalMonthDay: toMonthDay('06-18'),
  artTitle: 'Scotland Forever!',
  artCredit: 'Elizabeth Thompson, Lady Butler, 1881',
  imageUrl: bucketPainting('scenes/the-grey-horses-coming.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-grey-horses-coming.jpg'),
  details: [
    {
      id: 'the-cry',
      x: 0.47,
      y: 0.42,
      scale: 2.4,
      caption:
        'The officer in the middle has his sabre up and his mouth open. He is shouting the words that gave the painting its name. At Waterloo those bearskin caps were covered in black oilskin, and Butler paints them bare.',
    },
    {
      id: 'the-horses',
      x: 0.44,
      y: 0.62,
      scale: 2.2,
      caption:
        'The greys come at the viewer flat out, close enough to see the bits in their mouths. Their colonel started them at a walk that day, because the ground was broken and wet.',
    },
    {
      id: 'the-dropped-kit',
      x: 0.13,
      y: 0.66,
      scale: 2.6,
      caption:
        'A cap with a red plume, a musket and a pack lie in the churned mud. The hooves are on their way. Butler puts the viewer on the ground in front of the charge, where the French infantry stood.',
    },
  ],
} satisfies MockSceneDef;

export const theDecreeReadAloud = {
  slug: 'the-decree-read-aloud',
  title: 'The Decree Read Aloud',
  dek: 'Martinique will not wait for the ship carrying its freedom',
  story:
    "The paper being read out is the decree of 27 April 1848. The Second Republic was two months old, and it spent some of its first energy on the oldest debt in the empire: slavery in the French colonies, ended at once and for good. The push came above all from Victor Schoelcher, the son of a Paris porcelain maker. He had seen the plantations of Cuba and the American South in his twenties, and spent the rest of his life working against them. As undersecretary for the colonies he drafted the decree, pushed past the delays the planters wanted, and got the signatures. About a quarter of a million people in Martinique, Guadeloupe, Réunion and Guyane were, on paper, free.\n\nOn paper, and across an ocean. The decree had to sail, and while it sailed the plantations kept working. In Martinique the enslaved refused to wait. An enslaved man named Romain was arrested on 21 May, the island rose the next day, and the governor proclaimed emancipation on the 23rd with the official text still at sea. Freedom in the French Caribbean has two birthdays: the one Paris signed and the one Saint-Pierre took. The proclamations that followed island by island through May and June looked, at their best moments, something like Biard's canvas. A delegate reads the decree out under the tricolor. Broken chains go up over the crowd. People hold each other across a line that had been law the day before.\n\nBiard showed the painting at the Salon of 1849, and the state bought it that June for 2,400 francs. It hangs at Versailles now, and it has to be read the way official memory is always read. This is the emancipation Paris wished to see: thanks aimed at the flag, the freed on their knees at the feet of the freers. The rising that jumped the schedule is nowhere in the frame. Biard did leave one thing in that the official version did not need. The pair at the center hold each other and their broken irons in the same movement, and neither of them is looking at the man with the decree.\n\nSchoelcher spent the rest of a long life defending the decree's promise, died a senator, and lies in the Panthéon. The islands keep the May dates as the true anniversaries. The painting keeps the April one, which is also true, and says nothing about who forced the pace.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '27 April 1848',
  historicalYear: 1848,
  historicalMonthDay: toMonthDay('04-27'),
  artTitle: 'The Abolition of Slavery in the French Colonies',
  artCredit: 'François-Auguste Biard, 1849',
  imageUrl: bucketPainting('scenes/the-decree-read-aloud.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-decree-read-aloud.jpg'),
  details: [
    {
      id: 'the-chains',
      x: 0.6,
      y: 0.3,
      scale: 2.4,
      caption:
        'A man lifts both arms with the broken irons still hanging off his wrists, and a woman holds on to him. Biard took this couple straight out of his own painting of 1846, The Right of Search.',
    },
    {
      id: 'the-reader',
      x: 0.25,
      y: 0.35,
      scale: 2.4,
      caption:
        'The delegate sent from Paris raises his hat and calls out the decree under the tricolor. A naval officer in a two-cornered hat stands behind the flag beside him.',
    },
    {
      id: 'the-signature',
      x: 0.74,
      y: 0.58,
      scale: 2.4,
      caption:
        "A woman kneels in the sand and reaches for the hand of one of the two young women in white. The day before, they owned her.",
    },
  ],
} satisfies MockSceneDef;

export const theWidowCapet = {
  slug: 'the-widow-capet',
  title: 'The Widow Capet',
  dek: 'The tribunal takes two days; the cart takes an hour',
  story:
    "The Republic had renamed her too: the file at the Revolutionary Tribunal said the Widow Capet, and the guards at the Conciergerie, more economically, said Prisoner 280. She had been a widow for 9 months, separated from her son, and held in a cell with a screen the gendarmes could see over. The trial opened on 14 October 1793 on charges of treason, some of them true: money and secrets sent to Austria. The prosecution's real mistake was the extra charge, the one the newspapers wanted: that she had sexually abused her own son. The statement came from the frightened 8-year-old himself. She refused to answer it. When a juror pressed her, she stood and spoke to the mothers in the gallery: nature refuses to answer such a charge made to a mother. I appeal to every one of them here. The room shifted so audibly that the session was suspended. It changed the weather, not the verdict.\n\nOn the morning of 16 October her hair was cut off at the neck and her hands were tied. They took her out to an open cart. Her husband had ridden to his own scaffold in a closed carriage. She had asked for mourning black and been refused it as provocation, so she wore the plain white dress that has belonged to her ever since. The route to the scaffold took an hour, through crowds along the rue Saint-Honoré. The painter David watched from a window on that street and sketched her as the cart went by. He was no friend to her. A few pencil strokes: a woman sitting bolt upright, 37 years old and drawn to look 50.\n\nAt the scaffold she climbed the steps quickly, stepped on the executioner's foot, and made the century's most quoted apology: pardon me, monsieur, I did not do it on purpose. It was a courtier's reflex, and it has outlived every treaty she was accused over. The body went into the Madeleine cemetery under quicklime. In 1815 the restored monarchy dug for it and moved what it identified to Saint-Denis, among the kings.\n\nHamilton was English, and he painted her within the year for a British public at war with the Republic. She stands white and straight-backed between the bayonets, the priest with his book on one side, the man in the red cap at her wrists on the other. London wanted a martyr and got one. Her last letter, written hours before the cart, was mostly about her children. The canvas hangs now in the museum of the French Revolution at Vizille, near Grenoble.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '16 October 1793',
  historicalYear: 1793,
  historicalMonthDay: toMonthDay('10-16'),
  artTitle: 'Marie-Antoinette Leaving the Conciergerie',
  artCredit: 'William Hamilton, 1794',
  imageUrl: bucketPainting('scenes/the-widow-capet.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-widow-capet.jpg'),
  details: [
    {
      id: 'the-white-dress',
      x: 0.63,
      y: 0.3,
      scale: 2.4,
      caption:
        'The woman in the plain white dress is Marie-Antoinette. Her eyes are up and away from the men crowding her. She had asked to wear mourning black for her husband, and black was refused as a provocation.',
    },
    {
      id: 'the-cords',
      x: 0.735,
      y: 0.44,
      scale: 2.6,
      caption:
        'A man in the red cap of the Republic ties her hands behind her back. The cord is still slack in his fingers. From here she was walked out to an open cart.',
    },
    {
      id: 'the-order',
      x: 0.19,
      y: 0.3,
      scale: 2.8,
      caption:
        'Women in the crowd throw their arms up over the heads of the guard. Horses and bayonets pen them back. Hamilton painted the faces at the front sharp and left the rest a blur.',
    },
  ],
} satisfies MockSceneDef;

export const theVoiceThatBroke = {
  slug: 'the-voice-that-broke',
  title: 'The Voice That Broke',
  dek: 'The Terror ends when its author cannot be heard',
  story:
    "In the summer of 1794 the Terror was running on its own momentum. The law of 22 Prairial had cut a trial down to an accusation and a sentence, with no defense counsel and no witnesses. Executions in Paris rose from about 5 a day to 26. On 26 July the man who ran the machine, Maximilien Robespierre, rose in the Convention. A new list of traitors existed, he said, in his pocket so to speak, and the names would stay withheld for now. It was the one speech he could not afford. Every deputy with a guilty conscience or weak nerves spent that night deciding his own name was on it. Men who are all on the same list stop being afraid of one another.\n\nThe next day, 9 Thermidor by the Republic's own calendar, Saint-Just got three sentences into the defense before the interruptions began, staged and then real. Tallien waved a real dagger. The hall shouted down with the tyrant. Robespierre stood at the tribune and opened and closed his mouth against a wall of staged noise. When he finally forced a sound out, it cracked, and a deputy supplied the epitaph from the benches: the blood of Danton chokes you. The arrest decree passed at a run, brothers and lieutenants included.\n\nThat night the fight moved out of the chamber and into the streets. The Paris city government freed the prisoners and gathered them at the Hôtel de Ville, the city hall. The Convention declared them outlaws, which made them legally dead men. Around two in the morning troops took the building, and a pistol shot, from a gendarme or from his own hand, shattered Robespierre's jaw. He spent his last hours on a table in the Committee of Public Safety's antechamber, bandaged, silent, examined by the curious. At the scaffold on 28 July the executioner tore the bandage away before the blade, and the scream that followed was, witnesses agreed, the only sound he had completed in two days. Another 21 heads followed his. Within weeks the machinery of the Terror was taken apart by the same men who had run it without complaint.\n\nAdamo painted the scene in Munich in 1870, 76 years after the day itself, and it hangs now in the Alte Nationalgalerie in Berlin. The galleries cheer, the benches lunge, and in the middle of it a seated man presses a handkerchief to his mouth.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '27 July 1794',
  historicalYear: 1794,
  historicalMonthDay: toMonthDay('07-27'),
  artTitle: 'The Fall of Robespierre',
  artCredit: 'Max Adamo, 1870',
  imageUrl: bucketPainting('scenes/the-voice-that-broke.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-voice-that-broke.jpg'),
  details: [
    {
      id: 'the-handkerchief',
      x: 0.345,
      y: 0.67,
      scale: 2.6,
      caption:
        'Robespierre sits hunched on the bench with a handkerchief pressed to his mouth while the men around him shout and point. A day later a pistol shot broke his jaw.',
    },
    {
      id: 'the-accusers',
      x: 0.545,
      y: 0.6,
      scale: 2.4,
      caption:
        'Deputies lunge forward off the benches, the man in front wearing the tricolor sash of office. Every one of them had spent the night sure his own name was on Robespierre\'s list.',
    },
    {
      id: 'the-gallery',
      x: 0.31,
      y: 0.25,
      scale: 2.6,
      caption:
        'The public galleries are on their feet, one spectator waving a white cloth over the rail. These same seats had cheered the Terror through every session of it.',
    },
  ],
} satisfies MockSceneDef;

export const withoutResult = {
  slug: 'without-result',
  title: 'Without Result',
  dek: 'The empire orders the dead into its own war picture',
  story:
    "Eylau was the first battle the Grande Armée did not win, whatever the bulletins said. It ran two days in a February blizzard in East Prussia in 1807, with a cavalry charge sent blind into the snow and a cemetery taken and retaken. At the end the Russians marched away in good order. Both armies stood roughly where they had started, short between 40,000 and 50,000 men. Marshal Ney rode the field afterward and filed the review history kept: what a massacre, and without result.\n\nThe empire's response was a painting competition. Vivant Denon, who ran the Louvre for Napoleon, set the subject in writing: the emperor visiting the field the next morning. The program fixed the moment, the number of figures, the size of the canvas and the corpses in the foreground. It even named a wounded Lithuanian horseman who was to raise himself and swear service to the man who had spared him. In all, 26 painters entered. Antoine-Jean Gros won it on 13 June 1807, and then delivered more than the program had asked for. Nearly a third of the canvas is a frozen heap of the dead, stacked and blue and painted one man at a time, with faces at twice life size. Surgeons work on the wounded at the left. Above all of it sits the emperor, glove raised, one gesture of mercy over a field of dead.\n\nThe Salon of 1808 gave Gros a triumph, and Napoleon took off his own cross of the Legion of Honor and pinned it on the painter in front of the picture. What later viewers see is the other painting, the one along the bottom. The empire had asked for the corpses, and Gros painted them so well that they swallowed the mercy above. Every pacifist battle canvas of the next century, down to the trenches, has Eylau's snow in its ancestry.\n\nGros himself never again matched it, declined with the empire he had decorated, and drowned himself in the Seine in 1835. The canvas hangs in the Louvre, 5 metres tall and almost 8 wide, mercy above and the dead below.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '9 February 1807',
  historicalYear: 1807,
  historicalMonthDay: toMonthDay('02-09'),
  artTitle: 'Napoleon on the Battlefield of Eylau',
  artCredit: 'Antoine-Jean Gros, 1808',
  imageUrl: bucketPainting('scenes/without-result.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/without-result.jpg'),
  details: [
    {
      id: 'the-foreground',
      x: 0.5,
      y: 0.87,
      scale: 2.2,
      caption:
        'The dead lie frozen and stacked in the snow. Gros painted their faces at twice life size so they read from across the room. This heap fills nearly a third of the canvas.',
    },
    {
      id: 'the-gesture',
      x: 0.35,
      y: 0.44,
      scale: 2.6,
      caption:
        "Napoleon lifts a gloved hand over the field. Marshals in fur hats and plumes bunch around him. He was meant to be shown sparing the wounded, and this gesture is the whole of it.",
    },
    {
      id: 'the-surgeons',
      x: 0.14,
      y: 0.6,
      scale: 2.6,
      caption:
        'The wounded Lithuanian horseman throws out an arm toward the mounted officers above him. The competition rules had named this figure in advance. He was to rise and swear service to the emperor.',
    },
  ],
} satisfies MockSceneDef;

export const fortyCenturiesLookDown = {
  slug: 'forty-centuries-look-down',
  title: '40 Centuries Look Down',
  dek: 'A general of 28 sizes up the competition',
  story:
    "The Egyptian expedition of 1798 was sold to the Directory as a blow at British India, and to the 28-year-old general commanding it as a stage. Bonaparte sailed with 35,000 troops and, more importantly, 167 civilians: mathematicians, chemists, engineers, naturalists, artists, the largest scientific staff ever attached to an army. The soldiers called them the donkeys and gave them the center of the square when the fighting started. On 21 July the cavalry of the Mamluks, the warrior caste that ruled Egypt, massed before Cairo. The pyramids stood on the horizon, blurred by the heat. The general produced the line he had almost certainly rehearsed: soldiers, from the top of these pyramids, 40 centuries look down upon you. The squares held, the cavalry broke against them, and Cairo opened its gates.\n\nThen the campaign went the way of any campaign cut off from home. Within a fortnight Nelson burned the French fleet at anchor, and the army was stranded inside its own conquest. Bonaparte stayed a year. He reorganized Egypt on paper, marched into Syria and back with plague in the baggage train, then slipped home on a frigate to seize power in Paris. The army he left behind surrendered later. As war, the expedition failed completely. As theater and as science it never stopped paying. A soldier at Rosetta pulled a dark slab out of a fort wall with three scripts cut into it. The scholars' survey of the country, the Description de l'Égypte, ran to 23 volumes and started Egyptology. Europe caught an Egypt fever that never fully broke.\n\nGérôme painted the meeting the legend wanted in 1886, nearly a century later. The general sits alone on horseback. His staff and his columns are specks down in the valley, and the Sphinx is buried to the neck in sand, exactly as it stood in 1798. The French title Gérôme sometimes used was Oedipus: the young man come to answer the riddle. Gérôme put salt in the flattery. The stone face is scarred and worn down, and the rider in front of it is very small.\n\nOne correction to the folklore: the Sphinx's broken nose owes nothing to Napoleon's gunners. It was already gone centuries before he arrived. The picture and its companion, Bonaparte in Cairo, hang today in a California castle built by the newspaper publisher William Randolph Hearst.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '21 July 1798',
  historicalYear: 1798,
  historicalMonthDay: toMonthDay('07-21'),
  artTitle: 'Bonaparte Before the Sphinx',
  artCredit: 'Jean-Léon Gérôme, 1886',
  imageUrl: bucketPainting('scenes/forty-centuries-look-down.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/forty-centuries-look-down.jpg'),
  details: [
    {
      id: 'the-rider',
      x: 0.17,
      y: 0.62,
      scale: 2.4,
      caption:
        'Bonaparte sits his horse on the ridge with his back to us, 28 years old and three weeks landed in Egypt. Gérôme sometimes called the picture Oedipus, after the young man who came to answer the riddle.',
    },
    {
      id: 'the-face',
      x: 0.68,
      y: 0.3,
      scale: 2.2,
      caption:
        'The stone face is scarred and pitted and the sand comes up to its neck, exactly as it stood in 1798. The nose had been gone for centuries by then, whatever the story about French gunners says.',
    },
    {
      id: 'the-columns',
      x: 0.4,
      y: 0.57,
      scale: 2.6,
      caption:
        'The army drawn up in blocks on the plain below, with a knot of horsemen out in front of it. Some 167 civilian scholars sailed with that expedition, and their work outlasted it.',
    },
  ],
} satisfies MockSceneDef;

export const theSquareThatStoodStill = {
  slug: 'the-square-that-stood-still',
  title: 'The Square That Stood Still',
  dek: '3,000 soldiers refuse an oath in the snow',
  story:
    "The Russian succession of 1825 was a filing error at imperial scale. Alexander I died childless at the start of December. The next brother, Constantine, had secretly given up his claim years earlier, but nobody had told the army, which swore to him anyway. The oath had to be taken again, to the third brother Nicholas, on 26 December. A group of guards officers saw its one morning. They were veterans of the war against Napoleon who had marched to Paris and come home with constitutions in their heads. Their secret societies had spent a decade drafting a Russia that did not exist. They brought some 3,000 troops to Senate Square, formed them up beside the Bronze Horseman, the statue of Peter the Great, and refused the new oath, shouting for Constantine and Constitution. The story that the soldiers thought Konstitutsiya was Constantine's wife is probably a slander, and everybody repeated it.\n\nThen, having seized the morning, the conspiracy stood still in it. The officer designated dictator never appeared. For hours the men held their ground in the freezing wind while Nicholas gathered loyal regiments around them. Then Governor Miloradovich, a hero of 1812 who was liked on both sides, rode out to talk the soldiers home. One of the plotters shot him in the back. Cavalry charges skidded on the ice. At dusk the new tsar, 29 years old and plainly reluctant, gave the order he would be remembered by. Three guns fired grapeshot at close range across the square and into the crowds. The revolt broke, and the bodies went under the ice of the Neva.\n\nThe punishment was staged to be watched. Five men were hanged, and when three of the ropes broke they were hanged again. Over a hundred more were stripped of rank and sent to the mines and settlements of Siberia. Then came the part that outgrew the failure. Some 11 wives, princesses among them, gave up their titles, their property and their children to follow their husbands into exile. The Decembrists became Russia's political ancestors, mourned by Pushkin and claimed by every revolutionary generation after them, down to the one that finished the job in 1917.\n\nTimm made his painting in 1853, while Nicholas was still on the throne, and made it for the other side. It rides with the loyal Horse Guards. The rebel line is a grey wall further off, and a boy sprints out of the hooves' way. Even from the tsar's saddle the picture admits the main thing: that line is standing perfectly still. It hangs in the Hermitage.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '26 December 1825',
  historicalYear: 1825,
  historicalMonthDay: toMonthDay('12-26'),
  artTitle: 'The Life Guards Horse Regiment at the Senate Square',
  artCredit: 'Vasily Timm, 1853',
  imageUrl: bucketPainting('scenes/the-square-that-stood-still.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-square-that-stood-still.jpg'),
  details: [
    {
      id: 'the-charge',
      x: 0.25,
      y: 0.72,
      scale: 2.6,
      caption:
        'Horsemen in plumed helmets and white breeches wheel out on black horses. This is the Life Guards Horse Regiment. Timm named the painting after them, not after the revolt.',
    },
    {
      id: 'the-square',
      x: 0.88,
      y: 0.63,
      scale: 2.8,
      caption:
        'The rebel line stands in grey greatcoats with muskets shouldered. Nobody moves. It held that ground in the freezing wind for hours, and the leader it was waiting for never came.',
    },
    {
      id: 'the-boy',
      x: 0.63,
      y: 0.86,
      scale: 2.6,
      caption:
        'A bareheaded boy runs out of the horse\'s path with his cap still in his hand. Behind him the crowd is packed in to watch. One man waves his hat.',
    },
  ],
} satisfies MockSceneDef;

export const theDayBefore = {
  slug: 'the-day-before',
  title: 'The Day Before',
  dek: 'Madrid pulls the cavalry off its horses; the wall comes at dawn',
  story:
    "This museum has hung the second day for years: the man in the white shirt, the firing squad, the lantern. This is the first day, painted as its pendant, and without it the shootings are half a story. By the spring of 1808 a French army had walked into Spain as an ally and stayed as a landlord. The royal family was being taken off to Bayonne piece by piece, for Napoleon's convenience. On the morning of 2 May a Madrid crowd gathered at the palace as the last royal child was loaded for the road. Somebody cut a carriage trace. Marshal Murat, commanding the occupation, had been waiting for exactly enough provocation, and sent in cavalry.\n\nThe horsemen he sent made the day historic. Among the Imperial Guard squadrons were the Mamelukes, Egyptian troopers in turbans and scimitars, and the sight of Muslim cavalry riding down Spaniards in the Puerta del Sol touched a nerve seven centuries deep. The crowd, armed with sewing shears, workshop knives and paving stones, did the unthinkable: it closed with heavy cavalry in the open street and dragged riders from their saddles. Goya painted that impossibility at a gallop. A Mameluke goes over backward off his horse with a Spaniard's hands in his sash. Another swings his scimitar down into the crowd. No heroes, no formation, a city fighting the way a dog fights.\n\nBy afternoon it was over, with hundreds of madrileños dead in the streets. Murat's firing squads then worked through the night and the next dawn on Príncipe Pío hill. That is the other painting, the one with the white shirt. The rising failed as a fight and won as an example. Within weeks all Spain was in revolt, and the war that followed put the word guerrilla into every European language.\n\nGoya painted both days in 1814, the French barely gone, petitioning the restored government to record, in his words, the most notable and heroic actions of our glorious insurrection. He was 68, stone deaf, and had spent the war painting French officers and Spanish patriots with the same brush; the two canvases were his settling of accounts. The canvas took damage of its own 122 years later. Evacuated from the Prado during the Civil War, it rode a truck that crashed, and the paint tore. Madrid restored it, the way the city restores this particular memory, thoroughly. The second of May is now the region's official holiday, which means the day the crowd lost is the day it chose to keep.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '2 May 1808',
  historicalYear: 1808,
  historicalMonthDay: toMonthDay('05-02'),
  artTitle: 'The Second of May 1808',
  artCredit: 'Francisco Goya, 1814',
  imageUrl: bucketPainting('scenes/the-day-before.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-day-before.jpg'),
  details: [
    {
      id: 'the-dragged-rider',
      x: 0.55,
      y: 0.39,
      scale: 2.4,
      caption:
        'A rider goes over backward off the white horse with his dagger still up. He is a Mameluke of Napoleon\'s Imperial Guard. A Spaniard below him has both hands in his sash.',
    },
    {
      id: 'the-knifeman',
      x: 0.36,
      y: 0.55,
      scale: 2.4,
      caption:
        'A workman in white stockings has one hand on the falling Mameluke and a dagger up in the other. Goya gave him no uniform and no name.',
    },
    {
      id: 'the-fallen',
      x: 0.21,
      y: 0.79,
      scale: 2.4,
      caption:
        'A dead man lies face down on the stones with a sabre and two pistols beside him. Murat\'s order that night was simple. Anyone taken with a weapon in his hand would be shot.',
    },
  ],
} satisfies MockSceneDef;

export const theNightTheyWalkedOut = {
  slug: 'the-night-they-walked-out',
  title: 'The Night They Walked Out',
  dek: '7,000 walk out through the siege lines in the dark',
  story:
    "By the spring of 1826 Missolonghi had been under siege for a year. The little lagoon town was the most famous place in Europe, because Byron had died there two years earlier and the newspapers had never left. Inside the walls the food had run out. The town held about 9,000 people, and they had eaten the horses, then the mules, then the rats, then boiled hides and seaweed. Surrender to Ibrahim Pasha's army meant the slave markets. On the night of 10 April, the eve of Palm Sunday, they chose the third way out. Everyone strong enough would walk out through the siege lines in 3 columns, the fighters on the flanks and the families in the middle. That came to 7,000 of them.\n\nThe plan needed silence, and deserters had already sold it. The guns were waiting. The clouds slid off the moon at the worst moment, somebody shouted the order to fall back, and the columns broke apart under fire in front of their own ditch. Of the 7,000 who went into the dark, about 1,000 reached safety. The sick and the wounded had stayed behind in houses packed with gunpowder, to light it themselves when the soldiers came through the door. The town that fell that night was mostly rubble and mostly empty, and the empire that took it won nothing anyone could spend.\n\nEurope had followed the siege week by week in the papers, and it turned the grief into subscriptions, concerts, committees and, at last, warships. The allied fleet that destroyed the Ottoman navy at Navarino the next year came out of that mood. In Paris, within months of the news, Delacroix put a canvas into a paying exhibition for the Greek cause: no battle and no massacre. A woman in Greek dress kneels on broken marble with her arms open. A single hand comes out of the rubble under the slab. Behind her an Ottoman soldier plants his standard among the stones.\n\nHe called it Greece on the Ruins of Missolonghi, and it did for the Greek war what his Liberty would do for a French one 4 years later. It gave a cause a body. Both are propaganda in the only sense worth keeping, grief made impossible to ignore. The canvas is 213 centimetres tall and hangs at Bordeaux. The hand in the rubble was never given a name, which was the point.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '10 April 1826',
  historicalYear: 1826,
  historicalMonthDay: toMonthDay('04-10'),
  artTitle: 'Greece on the Ruins of Missolonghi',
  artCredit: 'Eugène Delacroix, 1826',
  imageUrl: bucketPainting('scenes/the-night-they-walked-out.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-night-they-walked-out.jpg'),
  details: [
    {
      id: 'the-open-arms',
      x: 0.47,
      y: 0.18,
      scale: 2.0,
      caption:
        'The woman holds herself upright and dry-eyed in the blue jacket and white dress of Greek costume. Delacroix\'s first sketches had her wild with fear. He painted her calm instead.',
    },
    {
      id: 'the-hand',
      x: 0.65,
      y: 0.82,
      scale: 2.8,
      caption:
        'A bare arm comes out of the rubble with the red sleeve pushed back. The hand is open and still. The rest of whoever this is stays under the stones.',
    },
    {
      id: 'the-standard',
      x: 0.79,
      y: 0.25,
      scale: 2.4,
      caption:
        'An Ottoman soldier in a turban and red trousers holds the flag upright. A curved sword hangs at his sash. Delacroix left the winner of the siege standing back in the smoke.',
    },
  ],
} satisfies MockSceneDef;

export const anOperaStartedIt = {
  slug: 'an-opera-started-it',
  title: 'An Opera Started It',
  dek: 'A duet about tyranny empties the opera house into the street',
  story:
    "The Kingdom of the Netherlands was 15 years old in 1830, and it had been assembled like furniture. The powers at Vienna bolted the Catholic, half French-speaking south onto the Protestant Dutch north as a buffer against France. The bolts never stopped creaking. The south had more people and less power. Amsterdam held the debt and The Hague held the offices, and the king held to the idea that firmness was a policy. On the night of 25 August 1830 the Brussels opera house put on Auber's La Muette de Portici, about a fishermen's revolt in Naples. It was booked for the king's birthday celebrations, 4 weeks after Paris chased its own king out.\n\nAt the second-act duet, Sacred love of the fatherland, the audience stood up singing, and by the aria's end the performance had moved into the street. The rioting that night wrecked the houses of unpopular ministers. The performance of it mattered as much as the grievances: revolution was the fashionable art form that summer. Through September the quarrel hardened. The king sent an army under his son to retake Brussels, and the city fought it for 4 days in the parks and squares. Those are the September Days in the painting's title. Volunteers walked in from Liège and the Walloon towns, the Dutch pulled out by night, and a provisional government declared Belgium independent on 4 October. By the next summer the new country had a constitution the liberals of Europe envied and an imported king, Leopold of Saxe-Coburg, uncle to a girl who would shortly be Queen Victoria.\n\nThe powers guaranteed the new state's neutrality in a treaty signed at London in 1839. It was filed and forgotten until August 1914, when the German chancellor asked whether Britain would really go to war over a scrap of paper. The scrap was Belgium's birth certificate. It existed because an audience had walked out of an opera 9 years before.\n\nThe Belgian government commissioned the painting in 1834, and Wappers delivered the founding week as official memory. The Grand-Place is under smoke, the proclamation goes out to the crowd, the flag hangs overhead, and a family grieves at the front, because founding stories need a price in the frame. The king made him court painter, and in 1839 he took over the Antwerp academy. The canvas hangs in Brussels: a country that started with an aria, painted at aria pitch.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: 'September 1830',
  historicalYear: 1830,
  historicalMonthDay: null,
  artTitle: 'Episode of the September Days of 1830',
  artCredit: 'Gustave Wappers, 1835',
  imageUrl: bucketPainting('scenes/an-opera-started-it.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/an-opera-started-it.jpg'),
  details: [
    {
      id: 'the-proclamation',
      x: 0.6,
      y: 0.4,
      scale: 2.4,
      caption:
        'The man in the white shirt hands the proclamation down into the crowd, and hands come up to take it. The Belgian government paid Wappers to paint this 4 years after the week it shows.',
    },
    {
      id: 'the-tricolor',
      x: 0.76,
      y: 0.23,
      scale: 2.2,
      caption:
        'Black, yellow and red hang over the crowd. In 1830 the stripes ran across the flag, not up and down. Wappers painted the newer flag into the older week.',
    },
    {
      id: 'the-price',
      x: 0.62,
      y: 0.72,
      scale: 2.4,
      caption:
        'A white-haired man holds a dying man up by the shoulders, and a woman in a headscarf holds his arm. Wappers put the dead at the front of a canvas 6.6 metres wide.',
    },
  ],
} satisfies MockSceneDef;

export const independenceOrDeath = {
  slug: 'independence-or-death',
  title: 'Independence or Death',
  dek: 'A prince by a stream ends three centuries of empire',
  story:
    "Brazil's independence runs backward compared to everyone else's: the empire moved to the colony first. The Portuguese court ran from Napoleon in 1807, some 15,000 people with the treasury, the archives and the royal library. They crossed the Atlantic and made Rio de Janeiro the capital of a European empire, the only time that has happened. When the king finally sailed home in 1821, he left his heir Pedro behind as regent. Lisbon's parliament then set about pushing Brazil back into being a colony: courts closed, powers revoked, the prince ordered home like a schoolboy. Pedro's first refusal, in January 1822, is remembered by a single word: fico, I am staying.\n\nThe break arrived by courier on 7 September 1822, beside the Ipiranga, a brook outside São Paulo. Pedro was 23, riding back from an inspection trip, and by every account in agony with a stomach complaint. He opened dispatches that cut his regency down to nothing. With them came letters from his wife Leopoldina and his minister José Bonifácio, telling him the moment had come. He read them by the roadside, drew his sword, and gave the shout the schoolbooks keep: independence or death. He was crowned emperor on 1 December that year, at 24. Brazil kept his family on the throne for 67 years, and kept slavery for 66 of them.\n\nThe painting of the shout was made 66 years later, on the other side of the Atlantic. Pedro Américo offered to do it himself, signed the contract in 1886, and painted it in Florence for the museum going up on the hill at Ipiranga. In his canvas the muddy trail is a parade ground and the road-worn escort is dress-uniform cavalry. Critics at home said the whole scene came out of Meissonier. Américo had published a pamphlet on plagiarism in art back in 1879. The one concession to the actual road is in the left corner, where a barefoot ox driver with his cart watches the founding of his country, dressed for the Brazil that existed.\n\nBrazil did not see the canvas until 7 September 1895, when the museum opened. It hangs in the Museu do Ipiranga still, on the hill above the brook, the national image reproduced on every schoolroom wall. The drover usually gets cropped.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '7 September 1822',
  historicalYear: 1822,
  historicalMonthDay: toMonthDay('09-07'),
  artCredit: 'Pedro Américo, 1888',
  imageUrl: bucketPainting('scenes/independence-or-death.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/independence-or-death.jpg'),
  details: [
    {
      id: 'the-shout',
      x: 0.42,
      y: 0.32,
      scale: 2.4,
      caption:
        'Pedro stands in the stirrups with his sword up, and the men beside him lift their hats. Américo took the cut of that uniform from a print made before 1822.',
    },
    {
      id: 'the-drover',
      x: 0.16,
      y: 0.79,
      scale: 2.4,
      caption:
        'A barefoot ox driver in a straw hat walks his team up the bank, a goad in his hand. He is the only man in the painting dressed for the road that was really there.',
    },
    {
      id: 'the-dragoons',
      x: 0.72,
      y: 0.55,
      scale: 2.2,
      caption:
        'The honour guard comes up the hill in helmets and full dress, swords out. This escort of 1822 got the name Dragoons of Independence only later, and Américo dressed them to look grander than they were.',
    },
  ],
} satisfies MockSceneDef;

export const theBeachAtMalaga = {
  slug: 'the-beach-at-malaga',
  title: 'The Beach at Málaga',
  dek: 'Torrijos and 48 men hold hands on the sand',
  story:
    "The liberal constitution of 1820 was crushed by French bayonets, sent in at the request of Spain's own king. Spain then entered what its historians call the Ominous Decade, and the liberals who survived worked from exile: London committees, Gibraltar safe houses, invasion plans on borrowed money. General José María Torrijos was the exiles' soldier, a man who had fought the French as a teenager and the absolutists ever after. In 1831 he prepared the landing that would raise Andalusia. The governor of Málaga, González Moreno, wrote to him secretly for months as a fellow conspirator, fixing signals, promising garrisons. It was bait from the first letter. Torrijos crossed from Gibraltar on 2 December with about 60 men. One of them was Robert Boyd, an Irish officer of 26 who had put his inheritance into the expedition. They were herded inland, surrounded, and taken without a fight.\n\nThere was no trial of any kind. The royal order that came back from Madrid ran, in effect, to one line: shoot them all. On the morning of 11 December 1831, on the beach of San Andrés at Málaga, Torrijos and 48 companions were lined up on the sand with their hands bound. By the accounts the city kept, they held one another's hands down the row. Friars moved along the line with blindfolds. The volleys took them in batches. Boyd, a Protestant, was buried in the English cemetery in Málaga. The governor who had written the letters was promoted, and he carried the name the executioner of Málaga until his own violent death. Fernando VII died 2 years later. His widow ruled as regent for a queen not yet 3 years old, and she needed the liberals so badly that the dead of the beach became state martyrs almost overnight. An obelisk went up over the bones of the other 48, in the Plaza de la Merced, on the square where Picasso would be born.\n\nThe painting took its time, and that is the second act. In 1886 the liberal government of Sagasta commissioned Gisbert to paint the executions as civic instruction, a canvas to remind Spaniards what absolutism costs. He finished it in 1888. It hung in the museum of modern art in Madrid until 1971, when it moved to the Prado. Gisbert kept the colours to sand, sea and black coats, and he put the viewer standing in the row. The next batch waits with their hands joined, and one top hat is already on the ground. Spanish schoolbooks have used the image ever since, which is what the contract asked, honestly delivered.",
  eraId: toEraId('revolutionary-age'),
  historicalDateLabel: '11 December 1831',
  historicalYear: 1831,
  historicalMonthDay: toMonthDay('12-11'),
  artTitle: 'The Execution of Torrijos and His Companions',
  artCredit: 'Antonio Gisbert, 1888',
  imageUrl: bucketPainting('scenes/the-beach-at-malaga.jpg'),
  thumbUrl: bucketPainting('scenes/thumb/the-beach-at-malaga.jpg'),
  details: [
    {
      id: 'the-hands',
      x: 0.52,
      y: 0.5,
      scale: 2.4,
      caption:
        'A man in a dark red coat holds the hand of the man beside him in grey. They are Torrijos and Manuel Flores Calderón, and the cord is still on their wrists. Gisbert painted the row on a canvas 6 metres wide.',
    },
    {
      id: 'the-blindfold',
      x: 0.7,
      y: 0.42,
      scale: 2.4,
      caption:
        'A friar knots the blindfold over the eyes of Francisco Fernández Golfín, a former minister of war. Another friar stands behind him with an open book.',
    },
    {
      id: 'the-hat',
      x: 0.6,
      y: 0.79,
      scale: 2.4,
      caption:
        'A man from an earlier volley lies where he fell. There is blood on his collar and his wrists are still tied. A top hat sits on the sand behind him, in front of the boots of the men still standing.',
    },
  ],
} satisfies MockSceneDef;
