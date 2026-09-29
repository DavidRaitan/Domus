import type { Track } from '../types'

// Sources for figures used here: Benedictow (2021); Aberth; Campbell, The Great Transition (2016);
// Broadberry, Campbell et al. (English population); Clark, "Microbes and Markets" (wages);
// Spyrou, Slavin, Krause et al., Nature 606 (2022); Dean et al., PNAS (2018); WHO plague fact sheet;
// London Museum; Fordham Medieval Sourcebook (Ibn Battuta); Britannica (Ragusa 1377, London 1665);
// Barton, Santander et al., Nature 638 (2025). Contested figures are given as ranges.

const EURASIA = { west: -12, south: 24, east: 82, north: 62 }

export const blackDeath: Track = {
  id: 'black-death',
  series: 'plague',
  tier: 1,
  title: 'The Black Death',
  tagline:
    'In seven years a germ from Central Asia killed a third to a half of Europe. Follow it — and watch medicine, faith, money and power change forever.',
  lenses: ['history', 'medicine', 'economics', 'geography', 'religion', 'philosophy'],
  era: [1347, 1351],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'world-under-strain',
      title: 'A World Under Strain',
      summary: 'Before the plague: a crowded, hungry Europe, tied to Asia by the Mongol roads.',
      question: 'Why was the world of 1347 a disaster waiting to happen?',
      steps: [
        {
          type: 'orient',
          title: 'The Black Death',
          from: 1346,
          to: 1353,
          places: [
            { name: 'Lake Issyk-Kul', lon: 76.5, lat: 42.5, label: 'left' },
            { name: 'Caffa', lon: 35.4, lat: 45.0 },
            { name: 'Messina', lon: 15.6, lat: 38.2 },
            { name: 'Florence', lon: 11.2, lat: 43.8, label: 'left' },
            { name: 'London', lon: -0.1, lat: 51.5 },
          ],
          placesNote: 'The story runs 6,000 km, from the mountains of Central Asia to the Atlantic.',
          mapBounds: EURASIA,
          lenses: ['history', 'geography'],
          why: 'The deadliest disaster in recorded European history — and the survivors built a very different world: higher wages, weaker lords, new medicine, the first quarantines.',
          context: [
            'Europe has about 80 million people — roughly as many as Germany today. Nine in ten are farmers.',
            'The biggest cities: Paris (~200,000), then Venice, Florence and Genoa (~100,000 each). London has 60–80,000.',
            'Nobody knows germs exist. No microscope can see one for another 300 years.',
            'The Pope lives not in Rome but in Avignon, in southern France (1309–1377).',
            'England and France have just started the Hundred Years’ War (1337).',
            'Across Asia, the Mongol Empire — the largest land empire in history — keeps the trade roads to China open and safe.',
          ],
        },
        {
          type: 'story',
          title: 'Picture a classroom',
          lenses: ['history'],
          body: [
            'Picture a class of 30 students. By the end of the year, 10 to 15 of the desks are empty.',
            'Now picture that in every village, monastery and palace across Europe. That is the Black Death: between 1347 and 1351, somewhere between a third and a half of all Europeans died. Some historians put it near 60%.',
            'This track follows it from beginning to end: where it came from, what it was, how people tried to make sense of it — and the new world the survivors built.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'economics'],
          prompt: 'In 1300, roughly how many Europeans lived in towns or cities?',
          options: ['About 1 in 10', 'About 1 in 3', 'About half', 'Most people'],
          answer: 0,
          reveal:
            'About 1 in 10 — the other nine lived in villages and worked the land. (Today it’s about 3 in 4.) So when we ask “what happened to Europe?”, we mostly mean: what happened to farmers.',
        },
        {
          type: 'story',
          title: 'A full continent',
          lenses: ['history', 'economics'],
          body: [
            'For three centuries Europe had been growing. Between about 1000 and 1300 its population roughly doubled.',
            'To feed everyone, forests were cleared and poor, stony land was ploughed. Farms were split between sons until many families lived on plots too small to fall back on.',
            'By 1300, millions of peasants lived one bad harvest away from hunger.',
          ],
        },
        {
          type: 'story',
          title: 'Then the weather turned',
          lenses: ['history', 'geography'],
          body: [
            'The mild centuries historians call the Medieval Warm Period were ending. Summers grew colder and wetter and harvests less reliable.',
            'In 1315 it rained almost without stopping. Grain rotted in the fields — and again in 1316 and 1317. This was the Great Famine. Across northern Europe perhaps 5–10% of people died, and cattle plagues followed.',
            'The generation that met the Black Death had grown up hungry. The world was already under strain.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the Great Famine begin?',
          event: 'Great Famine begins',
          year: 1315,
          min: 1200,
          max: 1500,
          tolerance: 10,
          anchors: [
            { year: 1215, label: 'Magna Carta' },
            { year: 1347, label: 'Black Death' },
            { year: 1492, label: 'Columbus' },
          ],
          explain:
            '1315 — one hundred years after Magna Carta, and just 32 years before the plague. Anyone aged 40 in 1347 had lived through it as a child.',
        },
        {
          type: 'explain',
          term: 'The Silk Roads',
          lenses: ['geography', 'economics'],
          plain:
            'Not one road but a web of caravan routes and sea lanes linking China, Central Asia, Persia, India and the Mediterranean.',
          analogy:
            'Like an airline network: goods hop from hub to hub, changing hands many times. Almost nobody travelled the whole way.',
          why: 'Anything that could travel with people and animals — silk, spices, ideas, and germs — could now cross a continent.',
        },
        {
          type: 'story',
          title: 'The Mongol peace',
          lenses: ['history', 'politics', 'geography'],
          body: [
            'In 1206 a Mongol chief took the title Genghis Khan. Within 70 years his family ruled from Korea to Russia and Iran — the largest land empire the world has ever seen.',
            'The conquests were savage. But once they were over, the Mongols protected trade. Around 1340 an Italian merchant’s handbook, by Francesco Pegolotti, described the road from the Black Sea to China as perfectly safe, by day or by night.',
            'Historians call this the Pax Mongolica — the Mongol peace. It tied East and West together as never before.',
          ],
        },
        {
          type: 'story',
          title: 'The Italian middlemen',
          lenses: ['economics', 'geography'],
          body: [
            'At the western end of those roads waited the merchants of Genoa and Venice — Italian city-states that grew rich as the go-betweens of the known world.',
            'Genoa ran a fortified trading town called Caffa on the Crimean peninsula, on the Black Sea. There, silk, furs, grain and slaves from the steppe were loaded onto Genoese ships bound for Constantinople and Italy.',
            'Remember Caffa. The plague will pass through it.',
          ],
        },
        {
          type: 'choice',
          lenses: ['economics', 'geography'],
          prompt: 'Why did Genoa want a trading town on the Black Sea, thousands of kilometres from Italy?',
          options: [
            'To convert the Mongols to Christianity',
            'To sit where the trade routes from Asia met the sea',
            'To escape plague in Italy',
            'To grow grain for Genoa',
          ],
          answer: 1,
          explain:
            'Caffa was a hand-off point: caravan goods from Asia became ship cargo for Europe. Controlling that point made Genoa rich — and later gave the plague a ship.',
        },
        {
          type: 'story',
          title: 'A graveyard by a lake',
          lenses: ['history', 'geography'],
          body: [
            'Now travel some 3,300 km east of Caffa, to Lake Issyk-Kul in today’s Kyrgyzstan, on the Silk Road’s mountain stretch.',
            'In 1885, Russian archaeologists dug up two cemeteries of a Christian community there. Of 467 dated gravestones, 118 came from just two years: 1338 and 1339 — far too many for normal times.',
            'Ten of those stones, carved in Syriac script, gave the same cause of death: “pestilence.”',
            'For more than a century, no one could say what that pestilence was.',
          ],
        },
        {
          type: 'recap',
          prompt: 'Why was the world of 1347 a disaster waiting to happen?',
          keyPoints: [
            'Europe was crowded — population had roughly doubled since 1000',
            'People were weakened by bad harvests and the Great Famine (1315–17)',
            'Mongol-protected trade routes connected China, Central Asia and Europe',
            'No one knew that germs existed',
          ],
          model:
            'Europe was packed with poor farmers who had lived through famine, and the Mongol peace had connected them by trade to the far side of Asia. A new disease could travel fast, find millions of weakened people, and meet doctors who had no idea what germs were.',
        },
      ],
      cards: [
        {
          id: 'bd-date-arrival',
          kind: 'date',
          year: 1347,
          front: 'When did the Black Death reach Europe (Sicily)?',
          back: '1347',
          choices: ['1215', '1453', '1492'],
          hook: '145 years before Columbus sailed (1492).',
        },
        {
          id: 'bd-num-europe-pop',
          kind: 'number',
          front: 'About how many people lived in Europe just before the Black Death?',
          back: 'About 80 million',
          choices: ['About 8 million', 'About 300 million', 'About 800 million'],
          hook: 'Roughly Germany’s population today.',
        },
        {
          id: 'bd-num-share-died',
          kind: 'number',
          front: 'What share of Europeans died in the Black Death (1347–1351)?',
          back: 'Between a third and a half (some say ~60%)',
          choices: ['About 1 in 20', 'About 1 in 10', 'Nine in ten'],
          hook: 'A class of 30 with 10–15 empty desks.',
        },
        {
          id: 'bd-date-famine',
          kind: 'date',
          year: 1315,
          front: 'When did the Great Famine strike northern Europe?',
          back: '1315–1317',
          choices: ['1066–1068', '1215–1217', '1453–1455'],
          hook: 'Exactly 100 years after Magna Carta (1215).',
        },
        {
          id: 'bd-concept-pax',
          kind: 'concept',
          front: 'What was the Pax Mongolica, and why does it matter to the Black Death?',
          back: 'The “Mongol peace”: a giant empire kept trade roads across Asia safe — so goods, people and germs could travel from Central Asia to Europe.',
        },
        {
          id: 'bd-place-caffa',
          kind: 'place',
          front: 'Where was Caffa, Genoa’s trading town?',
          back: 'On the Crimean peninsula, on the Black Sea',
          choices: ['On the coast of Portugal', 'On the Nile in Egypt', 'In the Swiss Alps'],
        },
      ],
      teaser:
        'What killed the people under those gravestones — and how did scientists finally prove it 684 years later, using their teeth?',
    },

    // ─────────────────────────────────────────────────────────────── 2
    {
      id: 'road-west',
      title: 'The Road West',
      summary: 'A 2022 detective story, a siege on the Black Sea, and twelve ships in Sicily.',
      question: 'How did a disease from the mountains of Central Asia reach Sicily?',
      previously:
        'Europe in 1347 was crowded, hungry and linked to Asia by the Mongol trade roads. Near Lake Issyk-Kul, gravestones from 1338–39 named a mysterious “pestilence.”',
      steps: [
        {
          type: 'story',
          title: 'A cold case',
          lenses: ['history', 'medicine'],
          body: [
            '“Pestilence” could mean almost any deadly epidemic. Written descriptions from the 1300s are vague, and the bodies were only bones.',
            'For most of the 20th century, historians assumed the Black Death began somewhere in China. No one could prove it either way.',
            'Then, in 2022, a team led by Maria Spyrou, Philip Slavin and Johannes Krause reopened the case. To follow what they did, you need two new ideas.',
          ],
        },
        {
          type: 'explain',
          term: 'DNA',
          lenses: ['medicine'],
          plain:
            'The instruction manual inside every living thing — people, rats and bacteria alike. Every species has its own, so even a small scrap of it identifies who it came from.',
          analogy: 'Like a barcode: scan a fragment and you know exactly which product it belongs to.',
          why: 'If a plague germ’s DNA is found in a skeleton, that person had plague. No guessing from vague old descriptions.',
        },
        {
          type: 'explain',
          term: 'Why look in teeth?',
          lenses: ['medicine'],
          plain:
            'While you’re alive, the soft centre of each tooth (the pulp) is full of tiny blood vessels. If germs are in your blood when you die, some are trapped there. The hard enamel around it then seals that chamber for centuries.',
          analogy: 'A time capsule with a lock: water and soil microbes can’t easily get in.',
          why: 'A tooth is the best place to find what was in someone’s blood when they died — even 700 years ago.',
        },
        {
          type: 'predict',
          lenses: ['medicine', 'history'],
          prompt: 'The team tested teeth from 7 people buried near Lake Issyk-Kul in 1338–39. How many carried plague DNA?',
          options: ['None', '3 of 7', 'All 7'],
          answer: 1,
          reveal:
            'Three of the seven carried Yersinia pestis — the plague bacterium. The “pestilence” on the gravestones was plague. (Published in Nature, June 2022.)',
        },
        {
          type: 'explain',
          term: 'A family tree for germs',
          lenses: ['medicine'],
          plain:
            'When bacteria copy themselves they occasionally make tiny spelling mistakes in their DNA. Those mistakes are passed down. Strains that share more of the same mistakes are closer relatives.',
          analogy: 'Like a family recipe copied by hand for generations: the copies with the same smudges and typos come from the same branch of the family.',
          why: 'Comparing mistakes lets scientists draw plague’s family tree — and see which strain came first.',
        },
        {
          type: 'story',
          title: 'The root of the tree',
          lenses: ['medicine', 'geography'],
          body: [
            'Plague’s family tree has one striking moment: a point where it suddenly splits into four main branches at once. Scientists call it plague’s “Big Bang.”',
            'The Issyk-Kul strain sits exactly at that split. It is the ancestor of the strain that swept Europe — and of most plague strains alive today. Its closest living relatives still circulate among marmots in the nearby Tian Shan mountains.',
            'Case closed, mostly: the Black Death began in Central Asia around 1338, then moved west along the trade roads.',
          ],
        },
        {
          type: 'choice',
          lenses: ['medicine', 'history'],
          prompt: 'What did the 2022 study show?',
          options: [
            'The Black Death began in southern China in 1347',
            'Plague killed people near Issyk-Kul in 1338–39, and their strain was the ancestor of the Black Death',
            'The Black Death was caused by a virus, not a bacterium',
            'Medieval gravestones are unreliable',
          ],
          answer: 1,
          explain:
            'Gravestones (history) plus DNA from teeth (genetics) together located the start. The best answers to old questions often combine written evidence with lab evidence.',
        },
        {
          type: 'story',
          title: 'The siege of Caffa, 1346',
          lenses: ['history', 'politics'],
          body: [
            'In 1346 Janibeg, khan of the Golden Horde (the Mongol state north of the Black Sea), was besieging Genoa’s town of Caffa. Then plague struck his army.',
            'An Italian notary, Gabriele de’ Mussis, later wrote that the dying besiegers catapulted corpses over the walls to infect the town.',
            'It’s a famous story — but de’ Mussis probably wasn’t there, and it hardly matters. Rats and fleas cross siege lines on their own. Either way, ships left Caffa carrying the disease.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'philosophy'],
          prompt: 'Why are historians cautious about the “catapulted corpses” story?',
          options: [
            'Catapults hadn’t been invented',
            'The writer probably wasn’t there, and plague would have spread through rats and fleas anyway',
            'The Mongols didn’t fight at Caffa',
            'Plague can’t spread from dead bodies',
          ],
          answer: 1,
          explain:
            'Two good habits: ask whether a source was actually there, and ask whether the dramatic cause was even needed. A vivid story isn’t the same as the explanation.',
        },
        {
          type: 'story',
          title: 'Twelve galleys',
          lenses: ['history', 'geography'],
          body: [
            'In spring 1347 plague reached Constantinople, the greatest city in Christendom. The emperor’s own son died.',
            'In early October 1347, twelve Genoese galleys rowed into the harbour of Messina in Sicily. A Franciscan friar, Michele da Piazza, wrote that the sailors carried a sickness so contagious that people who merely spoke with them fell ill.',
            'The townspeople drove the ships out. Too late. From Sicily the plague spread along the sea lanes of the Mediterranean.',
          ],
        },
        {
          type: 'interactive',
          widget: 'plague-map',
          title: 'Watch it travel',
          lenses: ['geography', 'history'],
          prompt:
            'Drag the slider from 1338 to 1353. Watch where the plague jumps fastest — and what the first place hit in each region has in common.',
          takeaway:
            'The first places hit were almost all ports: Messina, Alexandria, Marseille, Tunis, Venice, Weymouth, Bergen. Ships were the fastest transport of the age, so the plague raced along coasts first and moved inland only afterwards, at walking pace.',
        },
        {
          type: 'order',
          lenses: ['history', 'geography'],
          prompt: 'Put the plague’s journey in order.',
          items: [
            'Deaths near Lake Issyk-Kul, Central Asia (1338–39)',
            'Plague hits the army besieging Caffa (1346)',
            'Twelve galleys reach Messina, Sicily (1347)',
            'Plague reaches southern England (1348)',
          ],
          explain:
            'About eight years from the Tian Shan mountains to the Black Sea — then barely two years from the Black Sea to England. Once it reached the sea lanes, it moved at the speed of ships.',
        },
        {
          type: 'recap',
          prompt: 'How did a disease from Central Asia reach Sicily?',
          keyPoints: [
            'It began near Lake Issyk-Kul around 1338 — proven by DNA from teeth',
            'It travelled west along the Mongol-era trade routes',
            'It struck Caffa on the Black Sea in 1346',
            'Genoese ships carried it to Constantinople and Messina in 1347',
          ],
          model:
            'Plague broke out among people near Lake Issyk-Kul in 1338–39, as DNA from their teeth proved in 2022. It moved west along the trade roads to Caffa on the Black Sea by 1346, and Genoese ships carried it on to Constantinople and then Sicily in 1347.',
        },
      ],
      cards: [
        {
          id: 'bd-place-origin',
          kind: 'place',
          front: 'Where did the Black Death most likely begin?',
          back: 'Central Asia — near Lake Issyk-Kul, in today’s Kyrgyzstan',
          choices: ['Southern China', 'Northern Italy', 'The Nile delta in Egypt'],
        },
        {
          id: 'bd-date-issyk',
          kind: 'date',
          year: 1338,
          front: 'When did plague kill the people buried near Lake Issyk-Kul?',
          back: '1338–1339',
          choices: ['1215–1216', '1300–1301', '1492–1493'],
          hook: 'About nine years before it reached Sicily.',
        },
        {
          id: 'bd-concept-teeth',
          kind: 'concept',
          front: 'Why do scientists look for ancient germs in teeth?',
          back: 'The tooth’s pulp had blood vessels, so germs in the blood got trapped there — then sealed in by hard enamel for centuries.',
        },
        {
          id: 'bd-concept-tree',
          kind: 'concept',
          front: 'How can scientists tell which plague strain came first?',
          back: 'By comparing tiny copying mistakes in the germs’ DNA — strains sharing more mistakes are closer relatives, which reveals the family tree.',
        },
        {
          id: 'bd-date-messina',
          kind: 'date',
          year: 1347,
          front: 'When did plague ships arrive at Messina, Sicily?',
          back: 'October 1347',
          choices: ['October 1066', 'October 1247', 'October 1492'],
        },
        {
          id: 'bd-cause-ports',
          kind: 'cause',
          front: 'Why were ports the first places hit in each region?',
          back: 'The plague travelled on ships along trade routes — the fastest transport of the time — before moving inland at walking pace.',
        },
      ],
      teaser:
        'In Florence people are dying within three days. The best doctors in Europe blame the planets. Who was right — and who came surprisingly close?',
    },

    // ─────────────────────────────────────────────────────────────── 3
    {
      id: 'great-mortality',
      title: 'The Great Mortality',
      summary: 'Florence in 1348, what plague really is, and why the best doctors couldn’t stop it.',
      question: 'What was the Black Death — and why couldn’t anyone stop it?',
      previously:
        'The plague left Central Asia around 1338, rode the trade roads to the Black Sea, and reached Sicily by ship in October 1347.',
      steps: [
        {
          type: 'story',
          title: 'Florence, spring 1348',
          lenses: ['history'],
          body: [
            'Florence was one of the richest cities on earth: bankers, wool merchants, painters. The plague arrived in March 1348.',
            'By summer, around 400 people were dying every day. The writer Giovanni Boccaccio watched neighbours abandon neighbours, and even parents abandon children. The dead were stacked in trenches, he wrote, like cargo in a ship’s hold.',
            'In nearby Siena, a man named Agnolo di Tura buried his five children with his own hands. Siena’s giant new cathedral, half built, was abandoned. Its unfinished walls still stand today.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history'],
          prompt: 'Florence had about 110,000 people before the plague. Roughly how many were left by 1351?',
          options: ['About 100,000', 'About 80,000', 'About 50,000', 'About 10,000'],
          answer: 2,
          reveal:
            'Around 50,000. More than half the city was gone in four years — roughly five or six of every ten people you knew.',
        },
        {
          type: 'explain',
          term: 'Bacterium',
          lenses: ['medicine'],
          plain:
            'A living thing made of a single cell, about a thousandth of a millimetre long. Most bacteria are harmless or helpful; a few cause disease.',
          analogy: 'If you shrank to the size of a bacterium, a single grain of sand would tower over you like a skyscraper.',
          why: 'Nobody in 1348 could see one. Bacteria weren’t seen until 1676 — more than 300 years later.',
        },
        {
          type: 'story',
          title: 'What plague really is',
          lenses: ['medicine'],
          body: [
            'Plague is caused by a bacterium called Yersinia pestis. Normally it lives in wild rodents — marmots, gerbils, rats — and passes between them in the bites of fleas.',
            'Inside an infected flea, the bacteria multiply until they block its gut. The starving flea bites again and again, and each time it spits bacteria into the wound.',
            'Humans are accidental victims: we get bitten when infected rodents die and their fleas look for a new host.',
          ],
        },
        {
          type: 'story',
          title: 'Three forms',
          lenses: ['medicine'],
          body: [
            'Bubonic plague: bacteria gather in the lymph nodes nearest the bite, which swell into painful lumps called buboes — in the groin, armpit or neck. Symptoms start 2–8 days after the bite. Untreated, 30–60% die.',
            'Septicaemic plague: bacteria multiply in the blood. Skin and fingertips can blacken as tissue dies. Untreated, nearly always fatal.',
            'Pneumonic plague: the infection reaches the lungs. The sick cough out bacteria, so it spreads directly from person to person — no fleas needed. It can start within a day. Untreated, always fatal.',
          ],
        },
        {
          type: 'match',
          lenses: ['medicine'],
          prompt: 'Sort each case into the form of plague it describes.',
          categories: ['Bubonic', 'Pneumonic', 'Septicaemic'],
          items: [
            { text: 'A swollen, painful lump in the groin after a flea bite', category: 'Bubonic' },
            { text: 'Coughing blood — and the person nursing them falls ill next', category: 'Pneumonic' },
            { text: 'Bacteria multiplying in the blood; fingertips turning black', category: 'Septicaemic' },
            { text: 'A tender swelling in the armpit', category: 'Bubonic' },
            { text: 'Spreads through the air in a crowded room', category: 'Pneumonic' },
          ],
          explain:
            'Where the bacteria settle decides the disease: lymph nodes → bubonic, lungs → pneumonic, blood → septicaemic. The pneumonic form is the most dangerous for epidemics because it skips the rodents and fleas entirely.',
        },
        {
          type: 'story',
          title: 'Rats — or people?',
          lenses: ['medicine', 'history'],
          body: [
            'The classic picture is rats and their fleas. But the Black Death moved astonishingly fast, even through cold northern winters when rat fleas are sluggish.',
            'In 2018 a team modelled death records from nine European outbreaks. In most, the numbers fitted spread by human fleas and body lice — jumping person to person in crowded homes — better than rats alone. Other scientists dispute this.',
            'The best current answer: several routes at once, differing from place to place. Real causes are often plural.',
          ],
        },
        {
          type: 'story',
          title: 'What the doctors believed',
          lenses: ['medicine', 'philosophy'],
          body: [
            'In October 1348 the king of France asked Europe’s most prestigious medical school, the University of Paris, for an explanation.',
            'Their report blamed the sky: on 20 March 1345, Saturn, Jupiter and Mars had lined up in the sign of Aquarius, corrupting the air. Poisoned air — they called it miasma — then made people sick.',
            'It sounds absurd now. But it fit what they could see: disease clustered in crowded, filthy, foul-smelling places. Without microscopes, they built the best theory the evidence allowed.',
          ],
        },
        {
          type: 'explain',
          term: 'Miasma',
          lenses: ['medicine', 'history'],
          plain:
            'The belief that disease comes from “bad air” — foul vapours from rotting matter, swamps or corpses. It was the leading theory of disease from ancient Greece until the late 1800s.',
          analogy: 'Like blaming the smell of a rubbish heap for making you sick, rather than the germs breeding in it.',
          why: 'It shaped everything people did in 1348: burning fragrant woods, carrying herbs, fleeing the city.',
        },
        {
          type: 'choice',
          lenses: ['philosophy', 'medicine'],
          prompt: 'Miasma theory was wrong about the cause. Which of its recommendations still helped — for the wrong reason?',
          options: [
            'Studying the positions of the planets',
            'Leaving crowded cities and avoiding the sick',
            'Burning fragrant herbs',
            'Bleeding patients to rebalance the body',
          ],
          answer: 1,
          explain:
            'Distance from other people really did reduce infection — just not because of the air’s smell. A theory can be wrong and still give some good advice. The real test of a theory is whether it predicts what happens.',
        },
        {
          type: 'story',
          title: 'The surgeon who stayed',
          lenses: ['medicine', 'history'],
          body: [
            'When plague reached Avignon, many doctors fled. The pope’s surgeon, Guy de Chauliac, stayed and took notes.',
            'He described two waves. First, for about two months: fever and coughing blood, with death in three days. Then: swellings in the armpits and groin, with death in five days. Without knowing it, he had told pneumonic plague apart from bubonic — 550 years before anyone saw the germ.',
            'Then he caught it himself, with a swelling in the groin. He survived.',
          ],
        },
        {
          type: 'story',
          title: 'Five centuries later',
          lenses: ['medicine', 'history'],
          body: [
            'In 1894, during an outbreak in Hong Kong, the Swiss-French doctor Alexandre Yersin finally isolated the bacterium — which is why it bears his name. In 1898, Paul-Louis Simond showed in Karachi that fleas carry it.',
            'Plague still exists. The WHO recorded 3,248 cases worldwide between 2010 and 2015, mostly in the DR Congo, Madagascar and Peru. In 2017 an outbreak in Madagascar caused 2,417 cases — three in four of them pneumonic.',
            'Today common antibiotics such as streptomycin or doxycycline cure most patients — if treatment starts early.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['medicine'],
          prompt: 'Of the 3,248 plague cases reported worldwide in 2010–2015, what share of patients died?',
          min: 0,
          max: 100,
          step: 2,
          unit: '%',
          answer: 18,
          tolerance: 8,
          explain:
            'About 18% (584 deaths). Most who die today are treated too late or not at all. Compare 30–60% for untreated bubonic plague — and nearly 100% for untreated pneumonic plague.',
        },
        {
          type: 'recap',
          prompt: 'What was the Black Death, and why couldn’t anyone stop it?',
          keyPoints: [
            'It was plague, caused by the bacterium Yersinia pestis',
            'It spread by fleas from rodents, and person to person (lice, fleas, coughing)',
            'Doctors blamed bad air and the planets, because germs were invisible',
            'Today antibiotics cure it if given early',
          ],
          model:
            'The Black Death was plague, a bacterial disease carried by rodent fleas that also spread between people, including through coughing. Doctors blamed bad air and the stars because no one could see bacteria, so nothing they tried touched the real cause. Today antibiotics cure it if treatment starts early.',
        },
      ],
      cards: [
        {
          id: 'bd-concept-cause',
          kind: 'concept',
          front: 'What causes plague?',
          back: 'The bacterium Yersinia pestis',
          choices: ['A virus spread by mosquitoes', 'Bad air (miasma)', 'Contaminated drinking water'],
        },
        {
          id: 'bd-cause-transmission',
          kind: 'cause',
          front: 'How does plague usually reach humans?',
          back: 'Bites from fleas that picked it up from infected rodents',
          choices: ['Mosquito bites', 'Eating spoiled grain', 'Drinking from rivers'],
        },
        {
          id: 'bd-concept-pneumonic',
          kind: 'concept',
          front: 'Which form of plague spreads directly from person to person by coughing?',
          back: 'Pneumonic plague',
          choices: ['Bubonic plague', 'Septicaemic plague'],
          hook: 'Pneumo- = lungs (as in pneumonia).',
        },
        {
          id: 'bd-num-bubonic-mortality',
          kind: 'number',
          front: 'Untreated, roughly what share of bubonic plague victims die?',
          back: '30–60%',
          choices: ['1–2%', '5–10%', '100%'],
        },
        {
          id: 'bd-person-yersin',
          kind: 'person',
          year: 1894,
          front: 'Who identified the plague bacterium — where and when?',
          back: 'Alexandre Yersin, Hong Kong, 1894',
          choices: ['Louis Pasteur, Paris, 1860', 'Guy de Chauliac, Avignon, 1348', 'Alexander Fleming, London, 1928'],
        },
        {
          id: 'bd-concept-paris',
          kind: 'concept',
          front: 'What did the University of Paris medical faculty blame for the plague in 1348?',
          back: 'A lining-up of Saturn, Jupiter and Mars (in 1345) that corrupted the air',
          choices: ['Germs spread by rats', 'Poisoned wells', 'Contaminated imported silk'],
        },
        {
          id: 'bd-num-florence',
          kind: 'number',
          front: 'Florence had about 110,000 people before the plague. About how many remained by 1351?',
          back: 'About 50,000',
          choices: ['About 100,000', 'About 80,000', 'About 5,000'],
        },
      ],
      teaser:
        'In Damascus, Muslims, Christians and Jews walk out of the city together to pray. In Strasbourg, Christians burn their Jewish neighbours alive. Why did fear take such different shapes?',
    },

    // ─────────────────────────────────────────────────────────────── 4
    {
      id: 'faith-and-fear',
      title: 'Faith and Fear',
      summary: 'Prayer in Damascus, murder in Strasbourg, and a doctor in Granada who trusted his eyes.',
      question: 'When no one understands a catastrophe, how do people respond?',
      previously:
        'The Black Death was plague, a bacterial disease. Doctors in 1348 blamed bad air and the planets, because no one could see germs.',
      steps: [
        {
          type: 'story',
          title: 'Damascus, July 1348',
          lenses: ['religion', 'history'],
          body: [
            'The Moroccan traveller Ibn Battuta — who spent 29 years crossing the Islamic world — was in Damascus, Syria, when the plague peaked.',
            'The governor ordered three days of fasting. On the last night the city prayed together in the Great Mosque. At dawn the whole city walked out on foot to another mosque outside the walls: Muslims, Jews carrying the Torah, and Christians carrying the Gospels.',
            'They came, he wrote, all together, weeping and pleading to God.',
          ],
        },
        {
          type: 'story',
          title: 'God’s anger',
          lenses: ['religion', 'history'],
          body: [
            'Most people — Christian, Muslim and Jewish alike — understood the plague as an act of God. The question was why.',
            'In the German lands, bands of flagellants marched from town to town, whipping themselves bloody in public for 33½ days — one day for each year of Christ’s life — to atone for humanity’s sins.',
            'Crowds loved them. The Church did not: they claimed a holiness that bypassed priests. In October 1349 Pope Clement VI condemned them.',
          ],
        },
        {
          type: 'explain',
          term: 'Scapegoat',
          lenses: ['religion', 'philosophy'],
          plain:
            'Someone blamed for a disaster they didn’t cause, so that everyone else can feel it has an explanation — and a fix.',
          analogy: 'Like a team blaming the referee after a loss: easier than facing what really happened.',
          why: 'The word comes from the Hebrew Bible (Leviticus 16), where a goat symbolically carried the people’s sins into the wilderness. In 1348–49, Europe’s Jews became the scapegoat for the plague.',
        },
        {
          type: 'story',
          title: 'The poison lie',
          lenses: ['history', 'religion', 'politics'],
          body: [
            'In 1348 a rumour spread through France and Switzerland: Jews were poisoning the wells. In Savoy, Jews were tortured until they “confessed,” and the confessions were copied and sent from town to town as proof.',
            'In Strasbourg, the city council tried to protect its Jews. In February 1349 the city’s guilds overthrew the council.',
            'On 14 February 1349, Strasbourg’s Jews were burned — about 900 by modern estimates, 2,000 by the chroniclers. Debts owed to them were cancelled; children were forcibly baptised. Across the German lands, hundreds of Jewish communities were destroyed.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'politics'],
          prompt: 'Strasbourg’s massacre happened on 14 February 1349. When did the plague reach Strasbourg?',
          options: ['Months before', 'The same week', 'Months after'],
          answer: 2,
          reveal:
            'Months after. The killing came before the disease did. Fear, old prejudice — and money owed to Jewish lenders — did the work. The plague hadn’t even arrived.',
        },
        {
          type: 'story',
          title: 'The pope’s argument',
          lenses: ['religion', 'philosophy'],
          body: [
            'In July and September 1348, Pope Clement VI issued two bulls — official papal letters — forbidding attacks on Jews.',
            'His reasoning was simple. Jews were dying of the plague just like Christians. And the plague was raging in places where no Jews lived at all. So Jews could not be the cause.',
            'Many towns ignored him.',
          ],
        },
        {
          type: 'choice',
          lenses: ['philosophy'],
          prompt: 'What kind of argument did Clement VI make?',
          options: [
            'An appeal to his own authority',
            'Testing a claim against facts it can’t explain',
            'An appeal to emotion',
            'A quotation from scripture',
          ],
          answer: 1,
          explain:
            'He showed the accusation didn’t fit the evidence — the same logic scientists use to reject a hypothesis. It failed because fear, prejudice and money were stronger than evidence.',
        },
        {
          type: 'story',
          title: 'The doctor who trusted his eyes',
          lenses: ['medicine', 'philosophy', 'religion'],
          body: [
            'In Granada, in Muslim Spain, the physician and statesman Ibn al-Khatib watched carefully. People who touched the sick, or their clothes and dishes, fell ill. Those who cut themselves off — nomads in their tents, households that shut their doors — often survived.',
            'Some scholars taught that contagion couldn’t exist, because disease came from God alone. Ibn al-Khatib answered that contagion was proven by experience, observation and reliable reports — and that a reading of scripture must give way to such clear evidence.',
          ],
        },
        {
          type: 'compare',
          lenses: ['religion', 'philosophy', 'politics'],
          prompt: 'Three cities, three responses. Fill in the blanks.',
          columns: ['Damascus 1348', 'Strasbourg 1349', 'Granada (Ibn al-Khatib)'],
          rows: [
            {
              label: 'Explanation',
              cells: ['A trial from God', 'Jews poisoning wells', 'Contagion by contact'],
            },
            {
              label: 'Response',
              cells: ['Fasting and shared prayer', 'Massacre of Jews', 'Avoid contact; isolate'],
            },
            {
              label: 'Lesson',
              cells: ['Crisis can unite', 'Fear finds a scapegoat', 'Observation beats assumption'],
            },
          ],
          blanks: [
            [0, 1],
            [1, 0],
            [1, 2],
            [2, 1],
          ],
          explain:
            'The same disease, three very different reactions. What people believed about the cause decided what they did — for good or evil.',
        },
        {
          type: 'story',
          title: 'Remember you will die',
          lenses: ['philosophy', 'religion'],
          body: [
            'On 6 April 1348, the poet Petrarch’s beloved Laura died of the plague — on the anniversary of the day he first saw her, 21 years earlier. He recorded it in his most treasured book.',
            'Across Europe, art filled with the Dance of Death: skeletons leading popes, kings and peasants in the same dance. The rich commissioned tombs showing their own rotting corpse.',
            'The message: memento mori — remember you will die. Death treats everyone alike, so live accordingly.',
          ],
        },
        {
          type: 'recap',
          prompt: 'When no one understands a catastrophe, how do people respond?',
          keyPoints: [
            'They look for meaning — often religious (prayer, fasting, penance)',
            'They look for someone to blame — Jews were massacred, e.g. Strasbourg 1349',
            'A few test beliefs against evidence (Clement VI, Ibn al-Khatib)',
            'What people believe about the cause shapes what they do',
          ],
          model:
            'People search for meaning and for control. Some turned to prayer and penance, some turned on scapegoats — the Jews of Strasbourg were burned before the plague even arrived — and a few, like Clement VI and Ibn al-Khatib, tested beliefs against the evidence. What people believe about a cause shapes what they do.',
        },
      ],
      cards: [
        {
          id: 'bd-place-damascus',
          kind: 'place',
          front: 'In which city did Muslims, Jews and Christians march out together to pray against the plague in 1348?',
          back: 'Damascus',
          choices: ['Strasbourg', 'Florence', 'London'],
          hook: 'Witnessed by the traveller Ibn Battuta.',
        },
        {
          id: 'bd-date-strasbourg',
          kind: 'date',
          year: 1349,
          front: 'When were the Jews of Strasbourg massacred — and had the plague arrived yet?',
          back: '14 February 1349 — before the plague reached the city',
          choices: ['14 February 1349 — at the peak of the plague', '1215 — during the Crusades', '1492 — after the plague ended'],
        },
        {
          id: 'bd-person-clement',
          kind: 'person',
          front: 'Which pope declared the Jews innocent of causing the plague?',
          back: 'Clement VI, pope at Avignon (1348)',
          choices: ['Urban II', 'Innocent III', 'Gregory the Great'],
        },
        {
          id: 'bd-concept-scapegoat',
          kind: 'concept',
          front: 'What is a scapegoat, and where does the word come from?',
          back: 'Someone blamed for a disaster they didn’t cause. From Leviticus 16, where a goat symbolically carried away the people’s sins.',
        },
        {
          id: 'bd-person-ibn-al-khatib',
          kind: 'person',
          front: 'Which physician of Granada argued, from observation, that plague was contagious?',
          back: 'Ibn al-Khatib',
          choices: ['Ibn Battuta', 'Boccaccio', 'Guy de Chauliac'],
        },
        {
          id: 'bd-concept-flagellants',
          kind: 'concept',
          front: 'Who were the flagellants?',
          back: 'Bands who whipped themselves in public (for 33½ days) to atone for sin and turn away God’s anger',
          choices: ['Doctors who bled patients', 'Soldiers who guarded city gates', 'Monks who copied manuscripts'],
        },
      ],
      teaser:
        'The fields are still there. The ploughs are still there. But nearly half the people who worked them are gone. Who holds the power now?',
    },

    // ─────────────────────────────────────────────────────────────── 5
    {
      id: 'survivors-world',
      title: 'The World the Survivors Made',
      summary: 'Scarce workers, angry lords, a revolt in London — and the invention of quarantine.',
      question: 'How did losing nearly half the workers change who held power?',
      previously:
        'Faced with a disaster no one understood, people prayed, punished themselves, and blamed scapegoats. A few trusted evidence instead.',
      steps: [
        {
          type: 'story',
          title: 'Empty fields',
          lenses: ['economics', 'history'],
          body: [
            'In 1348 England had about 4.8 million people. By 1351 it had about 2.6 million.',
            'The land was still there. The ploughs, barns and mills were still there. What had vanished were the hands to work them.',
            'Before the plague, workers were cheap and lords could demand heavy labour. Suddenly, labour was the scarcest thing in Europe.',
          ],
        },
        {
          type: 'explain',
          term: 'Supply and demand',
          lenses: ['economics'],
          plain:
            'When something becomes scarce while people still need it, its price rises. When it becomes plentiful, its price falls.',
          analogy: 'Tickets to a sold-out concert: few seats, many fans — so resale prices shoot up.',
          why: 'After 1348 the scarce thing was labour. Its price is wages. So wages should rise… should.',
        },
        {
          type: 'interactive',
          widget: 'labor-market',
          title: 'Fewer workers, same land',
          lenses: ['economics'],
          prompt: 'Drag the slider to change how many workers died. Watch the total harvest and what each survivor’s labour is worth.',
          takeaway:
            'Total output falls — but by less than the population, because survivors farm the best land. Each worker produces more, so each worker’s labour is worth more. Economists call this diminishing returns to labour.',
        },
        {
          type: 'predict',
          lenses: ['economics', 'history'],
          prompt: 'So what happened to English farmworkers’ real wages after 1348?',
          options: [
            'They fell',
            'They jumped immediately',
            'They stayed flat for about 25 years, then rose a lot',
            'They never changed',
          ],
          answer: 2,
          reveal:
            'Flat at first — real wages in the 1350s–60s were no higher than before the plague. The big rise came from the 1370s. By the 1400s they averaged about 64% above pre-plague levels. The model was right in the end — but something held it back for a generation.',
        },
        {
          type: 'explain',
          term: 'Real wages',
          lenses: ['economics'],
          plain: 'What your pay can actually buy, once you account for prices.',
          analogy: 'A raise from $10 to $12 an hour is worthless if the price of bread doubles.',
          why: 'After 1348, money wages rose — but so did prices. So real wages barely moved at first.',
        },
        {
          type: 'story',
          title: 'The lords fight back',
          lenses: ['politics', 'economics'],
          body: [
            'Landowners panicked. In June 1349, England’s king issued the Ordinance of Labourers, reinforced by Parliament’s Statute of Labourers in 1351: wages were frozen at pre-plague levels, and refusing work became a crime.',
            'Lords still controlled the courts and the land. Prices stayed high, and the plague kept returning. For a generation, the powerful managed to hold back what the numbers said should happen.',
          ],
        },
        {
          type: 'choice',
          lenses: ['economics', 'politics'],
          prompt: 'Why did it take about 25 years for real wages to rise?',
          options: [
            'Workers didn’t know they were scarce',
            'Lords used new laws and their power to hold pay down, while high prices ate the gains',
            'The population recovered immediately',
            'Money had not been invented',
          ],
          answer: 1,
          explain:
            'Economic forces are real — but power, law and prices shape how fast they work. Scarcity eventually won, but not on its own schedule.',
        },
        {
          type: 'story',
          title: '1381: Who was then the gentleman?',
          lenses: ['politics', 'history'],
          body: [
            'To pay for war with France, the government taxed every adult per head: 4 pence in 1377, then 12 pence in 1380 — triple, at a flat rate that hit the poor hardest.',
            'In June 1381 the peasants of Essex and Kent rose and marched on London. A radical priest, John Ball, preached a famous rhyme: “When Adam delved and Eve span, who was then the gentleman?”',
            'On 15 June, their leader Wat Tyler faced the 14-year-old King Richard II at Smithfield — and was killed. The revolt collapsed. But the poll tax was dropped, and within a century serfdom in England had all but disappeared.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When was the Peasants’ Revolt?',
          event: 'Peasants’ Revolt in England',
          year: 1381,
          min: 1200,
          max: 1500,
          tolerance: 10,
          anchors: [
            { year: 1215, label: 'Magna Carta' },
            { year: 1347, label: 'Black Death' },
            { year: 1492, label: 'Columbus' },
          ],
          explain: '1381 — 34 years after the plague arrived. A whole generation grew up knowing their labour was scarce and valuable.',
        },
        {
          type: 'story',
          title: 'Two Europes',
          lenses: ['history', 'politics', 'geography'],
          body: [
            'In western Europe — England, France, the Low Countries — serfdom withered after the plague. Peasants won lower rents and more freedom.',
            'In much of eastern Europe — Poland, Prussia, later Russia — it went the other way. In the 1500s lords there tightened their grip, binding peasants to the land in a “second serfdom.”',
            'The same shock, opposite results. Historians still debate why — but a big part of the answer is power: who held it, and whether peasants could organise or escape.',
          ],
        },
        {
          type: 'story',
          title: 'Forty days',
          lenses: ['medicine', 'politics'],
          body: [
            'The plague kept returning, every 10 to 20 years. Cities began to experiment.',
            'On 27 July 1377, the port of Ragusa — today’s Dubrovnik, in Croatia — ordered that ships and travellers from plague areas wait 30 days in isolation before entering. Other ports later extended it to 40 days: quaranta giorni in Italian. That’s where our word quarantine comes from.',
            'In 1423 Venice opened the first permanent plague hospital, on an island. Cities invented health boards and health passes — all without knowing germs existed.',
          ],
        },
        {
          type: 'choice',
          lenses: ['medicine', 'philosophy'],
          prompt: 'The inventors of quarantine didn’t know about bacteria. Why did it still work?',
          options: [
            'Forty days purified the air',
            'Waiting long enough meant anyone infected would fall sick — or recover — before entering the city',
            'It was a religious fast that earned divine protection',
            'It didn’t work',
          ],
          answer: 1,
          explain:
            'Every infection has an incubation period. Wait longer than it, and hidden cases reveal themselves. Careful observation found what worked centuries before theory explained why.',
        },
        {
          type: 'recap',
          prompt: 'How did losing nearly half the workers change who held power?',
          keyPoints: [
            'Labour became scarce, so it became more valuable',
            'Lords used laws (Statute of Labourers, 1351) to hold wages down for a generation',
            'Anger exploded in the Peasants’ Revolt (1381); serfdom faded in the West',
            'In eastern Europe lords tightened control instead — power decided the outcome',
          ],
          model:
            'With nearly half the workers gone, labour became scarce and valuable. Lords used laws like the Statute of Labourers to hold wages down, which fed the Peasants’ Revolt of 1381 — but by the 1400s wages were far higher and serfdom was fading in the West. In the East, lords held on to power and serfdom grew instead.',
        },
      ],
      cards: [
        {
          id: 'bd-num-england-pop',
          kind: 'number',
          front: 'England had about 4.8 million people in 1348. About how many in 1351?',
          back: 'About 2.6 million — almost half gone',
          choices: ['About 4.5 million', 'About 1 million', 'About 200,000'],
        },
        {
          id: 'bd-cause-wages',
          kind: 'cause',
          front: 'Why did wages eventually rise after the Black Death?',
          back: 'Labour became scarce compared with land, so each worker’s labour was worth more',
          choices: ['Kings raised them by law', 'Gold was discovered', 'The Church ordered it'],
        },
        {
          id: 'bd-date-revolt',
          kind: 'date',
          year: 1381,
          front: 'When was the English Peasants’ Revolt?',
          back: '1381',
          choices: ['1215', '1348', '1453'],
          hook: 'A generation after the plague: 1347 + 34.',
        },
        {
          id: 'bd-concept-statute',
          kind: 'concept',
          front: 'What did England’s Statute of Labourers (1351) do?',
          back: 'Froze wages at pre-plague levels and made refusing work a crime',
          choices: ['Abolished serfdom', 'Created the first quarantine', 'Raised a poll tax'],
        },
        {
          id: 'bd-date-ragusa',
          kind: 'date',
          year: 1377,
          front: 'Where and when was the first known quarantine law?',
          back: 'Ragusa (Dubrovnik), 1377',
          choices: ['Venice, 1215', 'London, 1665', 'Paris, 1348'],
        },
        {
          id: 'bd-concept-quarantine',
          kind: 'concept',
          front: 'Where does the word “quarantine” come from?',
          back: 'Italian quaranta giorni — “forty days”',
          choices: ['Latin for “closed gate”', 'A French doctor named Quarant', 'Greek for “isolation”'],
        },
        {
          id: 'bd-concept-real-wages',
          kind: 'concept',
          front: 'What are real wages?',
          back: 'What pay can actually buy once prices are taken into account',
        },
      ],
      teaser:
        'The plague didn’t leave. It returned for 370 years — and it’s still here. How does the Black Death compare with the pandemics before and after it, including ours?',
    },

    // ─────────────────────────────────────────────────────────────── 6
    {
      id: 'echoes',
      title: 'Echoes',
      summary: 'Plague after plague, from Athens to COVID-19 — and a scientific claim that didn’t survive.',
      question: 'How does the Black Death compare with other pandemics — including ours?',
      previously:
        'Losing nearly half the workers eventually raised wages, fuelled the Peasants’ Revolt of 1381, weakened serfdom in the West, and led to the first quarantines.',
      steps: [
        {
          type: 'story',
          title: 'It kept coming back',
          lenses: ['history', 'medicine'],
          body: [
            'The plague returned in 1361 — the “children’s plague,” because it killed so many born after 1348 — and then every 10 to 20 years for three centuries.',
            'London’s Great Plague of 1665 officially killed 68,596 people, and probably over 100,000 of the city’s 460,000. The last big outbreak in western Europe struck Marseille in 1720, arriving on a merchant ship: about half the city died.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'medicine'],
          prompt: 'Which of these killed the largest share of the people alive at the time?',
          options: ['The Black Death (1347–51)', 'The 1918 influenza', 'COVID-19 (2020–21)'],
          answer: 0,
          reveal:
            'The Black Death, by far: 30–60% of Europe. The 1918 flu killed about 50 million — perhaps 2–3% of the world. COVID-19 caused about 15 million excess deaths in 2020–21 — around 0.2%.',
        },
        {
          type: 'story',
          title: 'The first pandemic',
          lenses: ['history', 'medicine'],
          body: [
            'The Black Death was not plague’s first visit. In 541, under the Roman emperor Justinian, the same bacterium struck Constantinople and the Mediterranean, returning in waves until about 750.',
            'Old accounts claim tens of millions died. But in 2019, historians examining coins, laws and pollen argued the damage was far smaller than claimed.',
            'Which is right? That’s the question to ask of any big historical number: how do we know?',
          ],
        },
        {
          type: 'story',
          title: 'Athens, 430 BCE',
          lenses: ['history', 'medicine', 'politics'],
          body: [
            'Eighteen centuries earlier, a plague hit Athens while it was at war with Sparta and crammed with refugees behind its walls. The historian Thucydides caught it, survived, and described it.',
            'Perhaps a quarter to a third of Athenians died, including their great leader Pericles in 429 BCE. We still don’t know what the disease was — typhus, typhoid and smallpox have all been proposed.',
            'Thucydides noticed something that would recur in 1348: with death everywhere, people stopped obeying law or custom.',
          ],
        },
        {
          type: 'compare',
          lenses: ['medicine', 'history'],
          prompt: 'Four pandemics side by side. Fill in the blanks.',
          columns: ['Athens 430 BCE', 'Black Death 1347', '1918 flu', 'COVID-19'],
          rows: [
            {
              label: 'Cause',
              cells: ['Unknown to this day', 'Bacterium (Yersinia pestis)', 'Influenza virus', 'Coronavirus'],
            },
            {
              label: 'Share who died',
              cells: ['~25–33% of Athens', '~30–60% of Europe', '~2–3% of the world', '~0.2% of the world'],
            },
            {
              label: 'Spread by',
              cells: ['Crowded city under siege', 'Ships, fleas, lice, coughing', 'Troop movements in WWI', 'Air travel'],
            },
            {
              label: 'Main defence',
              cells: ['None effective', 'Flight; later quarantine', 'Masks, closures', 'Lockdowns, then vaccines'],
            },
          ],
          blanks: [
            [0, 1],
            [1, 1],
            [1, 3],
            [2, 2],
            [3, 1],
          ],
          explain:
            'The deadliest pandemics struck before anyone knew the cause. Each new tool — quarantine, germ theory, antibiotics, vaccines — cut the share who died.',
        },
        {
          type: 'story',
          title: 'A claim that didn’t survive',
          lenses: ['medicine', 'philosophy'],
          body: [
            'In 2022 a study in Nature claimed the Black Death had changed our genes: survivors carried a variant that helped fight plague — and still affects our immune systems today. It made headlines worldwide.',
            'In 2025, another team reanalysed the data and showed the statistics didn’t hold up. The original authors agreed their data were too limited to tell.',
            'That isn’t science failing. That is science working: claims are checked, and the ones that don’t survive are dropped.',
          ],
        },
        {
          type: 'choice',
          lenses: ['philosophy'],
          prompt: 'What’s the best lesson from the gene study that was overturned?',
          options: [
            'Scientific studies can’t be trusted',
            'A single exciting study is a starting point; confidence comes when others check and confirm it',
            'Genes have nothing to do with disease',
            'Nature is a bad journal',
          ],
          answer: 1,
          explain:
            'Treat one striking study as a hypothesis, not a fact. That habit is exactly what you’ll need for reading medical research today.',
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Final review: put the whole story in order.',
          items: [
            'Plague deaths near Lake Issyk-Kul (1338–39)',
            'Galleys bring plague to Messina (1347)',
            'Florence loses over half its people (1348)',
            'Jews massacred in Strasbourg (1349)',
            'Statute of Labourers freezes wages (1351)',
            'Ragusa invents quarantine (1377)',
            'Peasants’ Revolt in England (1381)',
            'Yersin identifies the plague bacterium (1894)',
          ],
          explain:
            'One bacterium, one story — and along the way: genetics, epidemiology, trade routes, persecution, the philosophy of death, supply and demand, the birth of public health, and how science corrects itself.',
        },
        {
          type: 'recap',
          prompt: 'In three sentences: what was the Black Death, and how did it change the world?',
          keyPoints: [
            'A plague from Central Asia that killed a third to a half of Europe (1347–51)',
            'Spread along trade routes; nobody understood the cause',
            'Changed economics (wages, serfdom), society (scapegoating) and medicine (quarantine)',
          ],
          model:
            'The Black Death was a plague that began in Central Asia around 1338 and killed a third to a half of Europe between 1347 and 1351, spreading along trade routes to people who had no idea germs existed. Its terror produced both prayer and massacres. Its long-term effects — scarce labour, higher wages, weaker serfdom and the invention of quarantine — helped shape the modern world.',
        },
      ],
      cards: [
        {
          id: 'bd-compare-share',
          kind: 'compare',
          front: 'Black Death, 1918 flu, COVID-19: which killed the largest share of people alive at the time?',
          back: 'The Black Death (30–60% of Europe, vs ~2–3% and ~0.2% of the world)',
          choices: ['The 1918 flu', 'COVID-19', 'All about the same'],
        },
        {
          id: 'bd-date-justinian',
          kind: 'date',
          year: 541,
          front: 'When did the Plague of Justinian — the first plague pandemic — begin?',
          back: '541 CE',
          choices: ['430 BCE', '1347', '1665'],
          hook: 'About 800 years before the Black Death.',
        },
        {
          id: 'bd-date-london',
          kind: 'date',
          year: 1665,
          front: 'When was the Great Plague of London?',
          back: '1665',
          choices: ['1348', '1492', '1776'],
          hook: 'The year before the Great Fire of London (1666).',
        },
        {
          id: 'bd-person-pericles',
          kind: 'person',
          front: 'Which Athenian leader died in the plague of Athens (429 BCE)?',
          back: 'Pericles',
          choices: ['Socrates', 'Alexander the Great', 'Solon'],
        },
        {
          id: 'bd-concept-erap2',
          kind: 'concept',
          front: 'What happened to the 2022 claim that the Black Death reshaped our immune genes?',
          back: 'A 2025 reanalysis found the evidence too weak, and the original authors agreed — science correcting itself.',
        },
      ],
    },
  ],
}
