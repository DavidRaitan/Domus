import type { Track } from '../types'

// Sources for figures used here: Herodotus, Histories (esp. 5.52–53 Royal Road; 5.97, 5.105; 6.117;
// 7.34–36, 7.44–46, 7.56, 7.60, 7.144, 7.186; 8.44); Aristotle (school of), Athenaion Politeia 22.7;
// Plutarch, Themistocles 4; Cicero, De Legibus 1.5; Morrison, Coates & Rankov, The Athenian Trireme
// (2nd ed., 2000) and the Olympias sea trials; Cawkwell, The Greek Wars (2005); Green, The Greco-Persian
// Wars (1996); Kuhrt, The Persian Empire (2007); Hansen & Nielsen, An Inventory of Archaic and Classical
// Poleis (2004); Britannica. Herodotus’ army numbers are set against modern estimates, given as ranges.
// Lessons 2–6: Herodotus 7.138–144, 7.176, 7.201–239, 8.1–21, 8.40–96, 8.100–117, 8.140–144, 9.1–121;
// Aeschylus, Persians (472 BCE; fleet figures 338–343, the message 355ff., Darius’ ghost); Plutarch,
// Themistocles 10, 12, 14 and Aristides 8; Diodorus 11.19 (Salamis losses); Thucydides 1.94–96, 5.71;
// Aristotle, Politics 1304a and Athenaion Politeia 22.8, 23.5; Pseudo-Xenophon (“Old Oligarch”) 1.2;
// Plato, Laws 707; Kraft et al., “The Pass at Thermopylae,” J. Field Archaeology 14 (1987) on the moved
// shoreline; Jameson, Hesperia 29 (1960) on the Troezen decree; Lazenby, The Defence of Greece (1993);
// Strauss, The Battle of Salamis (2004); Cartledge, Thermopylae (2006); Hanson, The Western Way of War
// (1989); Briant, From Cyrus to Alexander (2002). Disputed numbers are given as ranges; single-source
// anecdotes are attributed to their author.

const PERSIAN_WORLD = { west: 18, south: 27, east: 56, north: 44 }

export const salamis: Track = {
  id: 'salamis',
  series: 'classical',
  tier: 1,
  title: 'Salamis: Greece Against Persia',
  tagline:
    'A few quarrelling Greek cities against the largest empire on earth — decided by silver, oars and a narrow strait.',
  lenses: ['history', 'geography', 'science', 'politics'],
  era: [-490, -479],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'king-crosses-to-europe',
      title: 'The King Crosses to Europe',
      summary: 'Why the King of Kings marched on Greece — and how a silver strike gave Athens a fleet.',
      question:
        'Why was the largest empire on earth marching on Greece in 480 BCE — and why did Athens meet it with ships?',
      steps: [
        {
          type: 'orient',
          title: 'Greece Against Persia',
          from: -499,
          to: -479,
          places: [
            { name: 'Athens', lon: 23.73, lat: 37.98 },
            { name: 'Hellespont', lon: 26.4, lat: 40.2 },
            { name: 'Sardis', lon: 28.04, lat: 38.49 },
            { name: 'Susa', lon: 48.25, lat: 32.19, label: 'left' },
            { name: 'Persepolis', lon: 52.89, lat: 29.94, label: 'left' },
          ],
          placesNote:
            'The Royal Road ran about 2,500 km from Sardis to the Persian capital Susa. Athens sat just beyond the empire’s western edge.',
          mapBounds: PERSIAN_WORLD,
          lenses: ['history', 'geography'],
          why: 'If Persia had won, Athens’ young democracy — and the theatre, philosophy and history-writing that grew there — might never have flourished; a few hours in a narrow strait decided it.',
          context: [
            'The Persian Empire is about 70 years old and the largest the world has yet seen, stretching from Egypt to today’s Pakistan.',
            'Greece is not a country. It is about a thousand separate city-states — each a town with its farmland, its own laws, army and gods — that often fight each other.',
            'Athens has been a democracy, run by the votes of its male citizens, only since 508/507 BCE.',
            'Sparta, in the south, has the most feared army in Greece.',
            'Rome is a small city in Italy that, by tradition, threw out its last king in 509 BCE.',
            'In China, Confucius is teaching. He dies in 479 BCE, the year this story ends.',
          ],
        },
        {
          type: 'story',
          title: 'A throne above the sea',
          lenses: ['history'],
          body: [
            'Spring 480 BCE, at Abydos, on the Asian shore of a narrow strait. The townspeople have built a throne of white stone on a hill, and Xerxes, King of Kings of Persia, climbs up to watch his army.',
            'Below him, the water is hidden by ships. Every beach and field is packed with men. Xerxes calls himself a happy man — and then he weeps.',
            'His uncle Artabanus asks why. In a hundred years, the king answers, not one of these men will still be alive.',
          ],
        },
        {
          type: 'explain',
          term: 'Herodotus',
          lenses: ['history', 'philosophy'],
          plain:
            'A Greek writer born around 484 BCE in Halicarnassus (today’s Bodrum, in Turkey) — a city then ruled by Persia. Decades after the war he travelled, interviewed survivors and wrote it all down. His book’s title, Histories, is Greek for “inquiries.”',
          analogy:
            'Like a reporter writing the big book on a war forty years later, from old soldiers’ memories rather than official files.',
          why: 'Almost everything we know about Xerxes’ invasion — including that scene on the hill — comes from him. The Roman writer Cicero called him “the father of history.” But we must check his numbers.',
        },
        {
          type: 'predict',
          lenses: ['history', 'science'],
          prompt: 'How many foot soldiers does Herodotus say Xerxes brought to Greece?',
          options: ['About 50,000', 'About 250,000', 'About 1.7 million', 'About 10 million'],
          answer: 2,
          reveal:
            '1.7 million — counted, he says, by packing 10,000 men into a walled pen and refilling it 170 times. With sailors and servants, he reaches over 5 million. No modern historian believes it: at about a kilo of grain per man per day, 1.7 million soldiers would eat some 1,700 tonnes daily — about 60 big trucks’ worth. Most estimates today are roughly 100,000–300,000 fighting men. Still enormous for its time.',
        },
        {
          type: 'explain',
          term: 'The Persian Empire',
          lenses: ['history', 'geography', 'politics'],
          plain:
            'An empire founded by Cyrus the Great around 550 BCE. By 480 it ran from Egypt and the Aegean Sea to the Indus River — about 5.5 million km², over half the size of the United States today.',
          analogy:
            'If Athens and its farmland (Attica, about 2,500 km²) were one football pitch, Persia would be more than 2,000 pitches.',
          why: 'Its ruler was the King of Kings: dozens of peoples paid him tribute in silver, grain, horses or soldiers. To him, Athens was a troublesome town on the far edge of the map.',
        },
        {
          type: 'explain',
          term: 'The Royal Road',
          lenses: ['geography', 'politics'],
          plain:
            'A highway of about 2,500 km from Sardis, near the Aegean coast, to the Persian capital Susa. Herodotus counts 111 staging posts along it, with fresh horses waiting at each.',
          analogy:
            'A relay race: each rider galloped one stage, then handed the message to a fresh rider and horse.',
          why: 'On foot, Herodotus says, the trip took 90 days. Royal messengers probably did it in about a week to ten days — so news of trouble on the Greek frontier reached the king fast.',
        },
        {
          type: 'story',
          title: 'Revenge for Sardis',
          lenses: ['history', 'politics'],
          body: [
            'In 499 BCE the Greek cities on Persia’s Aegean coast rebelled. Athens sent 20 ships to help, and in 498 the rebels burned Sardis.',
            'Herodotus tells a story that may be too good to be true: King Darius ordered a servant to remind him of the Athenians three times at every dinner.',
            'In 490 a Persian force landed at Marathon, near Athens, and about 10,000 Athenians beat it. Darius planned a far bigger revenge — then died in 486. His son Xerxes inherited the plan.',
          ],
        },
        {
          type: 'story',
          title: 'A lucky strike at Laurion',
          lenses: ['history', 'economics'],
          body: [
            'In 483 BCE, miners at Laurion, in the hills south of Athens, hit a rich new seam of silver. The mines belonged to the city, so the Assembly argued about the windfall.',
            'The popular idea: share it out — about 10 drachmas per citizen, Herodotus says. A politician named Themistocles proposed warships instead, for a war with the nearby island of Aegina. Plutarch later claimed his real target was Persia.',
            'Athens voted for ships — 100 or 200, depending on the source.',
          ],
        },
        {
          type: 'explain',
          term: 'Opportunity cost',
          lenses: ['economics'],
          plain: 'The real cost of a choice is the best thing you give up to make it.',
          analogy:
            'Spend your birthday money on a bike, and the cost isn’t only the price tag — it’s the concert tickets you can no longer buy.',
          why: 'Every Athenian gave up his share of the silver to buy ships he might never need. Three years later, that bet decided the war.',
        },
        {
          type: 'choice',
          lenses: ['economics'],
          prompt: 'When Athens voted for ships, what was the opportunity cost for an ordinary citizen?',
          options: [
            'Nothing — the silver came out of the ground for free',
            'The share of silver he would otherwise have been paid',
            'The tribute Athens owed to Persia',
            'The price of timber for the ships',
          ],
          answer: 1,
          explain:
            'Found money is never free: once it exists, every use of it means giving up another. Each citizen swapped a small payout in his pocket for a share in a fleet.',
        },
        {
          type: 'explain',
          term: 'Trireme',
          lenses: ['science', 'history'],
          plain:
            'The top warship of the age: a narrow wooden galley about 37 m long and 5–6 m wide, rowed by 170 men on three levels — 62 on top, 54 in the middle, 54 at the bottom. One man, one oar. Its weapon was a bronze ram at the waterline, for smashing holes in enemy hulls.',
          analogy:
            'Each 4 m oar is a lever, like a see-saw pivoting on a peg in the ship’s side: a short pull on the handle sweeps the blade through a long arc of water. Put 170 of them together and you have an engine made of people.',
          why: 'Only perfect timing works: 170 blades must strike together, kept in rhythm by a piper and a shouting rowing master. A modern replica, Olympias, reached about 9 knots (17 km/h) in a sprint.',
        },
        {
          type: 'estimate',
          lenses: ['history', 'politics'],
          prompt:
            'A trireme needed 170 rowers plus about 30 officers, sailors, marines and archers. Athens sent about 180 triremes to Salamis. How many men did it need to crew them?',
          min: 0,
          max: 80000,
          step: 1000,
          unit: 'men',
          answer: 36000,
          tolerance: 4000,
          explain:
            '180 × 200 = 36,000 — more than the roughly 30,000 adult male citizens Herodotus says Athens had. So the benches filled with poor citizens who could not afford armour, plus foreign residents and allies. Remember that: the poor who rowed will soon want a bigger say in the democracy.',
        },
        {
          type: 'story',
          title: 'Bridging two continents',
          lenses: ['geography', 'science'],
          body: [
            'The Hellespont (today’s Dardanelles) is a strait — a narrow channel of sea — between Asia and Europe. At Abydos it is only about 1.3 km wide, with a steady current flowing towards the Aegean.',
            'Xerxes’ engineers anchored 674 ships side by side in two lines and stretched huge cables of flax and papyrus across them. Planks and packed earth made a road on top.',
            'A storm wrecked the first bridges; Herodotus says Xerxes had the sea whipped 300 times. The second pair held. The army crossed for seven days and nights.',
          ],
        },
        {
          type: 'compare',
          lenses: ['politics', 'geography', 'economics'],
          prompt: 'An empire against a city. Fill in the blanks.',
          columns: ['Persian Empire', 'Athens'],
          rows: [
            { label: 'Size', cells: ['About 5.5 million km²', 'About 2,500 km² (Attica)'] },
            { label: 'Who decides', cells: ['One King of Kings', 'An Assembly of citizens voting'] },
            { label: 'Money from', cells: ['Tribute from dozens of peoples', 'Its own silver mines at Laurion'] },
            { label: 'Main weapon in 480', cells: ['A vast army, carried over bridges', 'A brand-new fleet of triremes'] },
          ],
          blanks: [
            [0, 1, ['About 50,000 km² (Attica)', 'About 250 km² (the city)']],
            [1, 0, ['A council of satraps voting', 'Magi reading the omens']],
            [2, 1, ['Gold from trade with Egypt', 'Loans from Sparta’s treasury']],
            [3, 1, ['Heavy cavalry from Thessaly', 'Siege towers and catapults']],
          ],
          explain:
            'Persia had more of everything — land, people, money. Athens had one thing it had chosen for itself: a fleet paid for with its own silver, by its own vote.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Xerxes’ army cross the Hellespont into Europe?',
          event: 'Xerxes crosses the Hellespont',
          year: -480,
          min: -800,
          max: 0,
          tolerance: 15,
          anchors: [
            { year: -776, label: 'First Olympic Games (traditional date)' },
            { year: -490, label: 'Marathon' },
            { year: -44, label: 'Caesar killed' },
          ],
          explain:
            '480 BCE — just ten years after Marathon, and 436 years before Julius Caesar was killed. Far away in China, Confucius is an old man; he dies the following year.',
        },
        {
          type: 'recap',
          prompt:
            'Why was the largest empire on earth marching on Greece in 480 BCE — and why did Athens meet it with ships?',
          keyPoints: [
            'Persia was a vast empire, held together by roads like the Royal Road',
            'Athens had helped burn Sardis (498) and beaten Persia at Marathon (490)',
            'Xerxes inherited Darius’ revenge and bridged the Hellespont in 480',
            'Themistocles persuaded Athens to spend its Laurion silver on triremes',
            'Herodotus is our main source, but his army numbers are far too high',
          ],
          model:
            'Athens had helped a rebellion burn the Persian city of Sardis and then beaten a Persian landing at Marathon, so Darius and then his son Xerxes wanted revenge. In 480 Xerxes bridged the Hellespont with boats and marched on Greece with perhaps 100,000–300,000 men. Athens could never match that on land, but three years earlier Themistocles had talked it into spending a silver windfall on triremes — so it would fight at sea.',
        },
      ],
      cards: [
        {
          id: 'sal-date-crossing',
          kind: 'date',
          year: -480,
          front: 'When did Xerxes’ army cross the Hellespont to invade Greece?',
          back: '480 BCE',
          choices: ['490 BCE', '431 BCE', '334 BCE'],
          hook: 'Ten years after Marathon (490 BCE).',
        },
        {
          id: 'sal-date-laurion',
          kind: 'date',
          year: -483,
          front: 'When did Athens strike rich silver at Laurion and vote to build a fleet?',
          back: '483 BCE',
          choices: ['508 BCE', '490 BCE', '431 BCE'],
          hook: 'Three years before Xerxes came: 483, 482, 481… 480.',
        },
        {
          id: 'sal-person-themistocles',
          kind: 'person',
          front: 'Who persuaded Athens to spend its silver windfall on warships?',
          back: 'Themistocles',
          choices: ['Pericles', 'Herodotus', 'Artabanus'],
        },
        {
          id: 'sal-num-rowers',
          kind: 'number',
          front: 'How many rowers drove a trireme?',
          back: '170, on three levels (plus about 30 other crew)',
          choices: ['30, in one row', '70, on two levels', '500, on five levels'],
          hook: 'Tri-reme: three banks of oars.',
        },
        {
          id: 'sal-place-royal-road',
          kind: 'place',
          front: 'The Persian Royal Road ran between which two cities?',
          back: 'Sardis (near the Aegean) and Susa (the Persian capital) — about 2,500 km',
          choices: ['Athens and Sparta', 'Babylon and Memphis', 'Abydos and Persepolis'],
        },
        {
          id: 'sal-concept-herodotus-numbers',
          kind: 'concept',
          front: 'Why do historians doubt Herodotus’ 1.7 million Persian foot soldiers?',
          back: 'An army that size could not have been fed or watered on the march, and he wrote decades later from memories, not records. Modern estimates: roughly 100,000–300,000.',
        },
        {
          id: 'sal-concept-opportunity-cost',
          kind: 'concept',
          front: 'What is opportunity cost? Use Laurion as the example.',
          back: 'The best thing you give up to make a choice. Athenians gave up their share of the silver to pay for triremes.',
        },
      ],
      teaser:
        'Xerxes’ army is in Europe. The Greeks need a place where numbers stop counting — a coastal pass so narrow, Herodotus says, that in spots only one wagon could get through. Its name: Thermopylae.',
    },

    // ─────────────────────────────────────────────────────────────── 2
    {
      id: 'hot-gates',
      title: 'The Hot Gates',
      summary:
        'Summer 480: a few thousand Greeks hold the pass of Thermopylae while the fleets clash off Artemisium — until a local man shows the Persians a mountain path.',
      question:
        'How could a few thousand Greeks hold off the largest army on earth — and why did they still lose the pass?',
      previously:
        'In spring 480 BCE Xerxes bridged the Hellespont and marched into Europe with perhaps 100,000–300,000 men. Athens, thanks to its Laurion silver, now had a fleet of triremes.',
      steps: [
        {
          type: 'orient',
          title: 'The Hot Gates',
          from: -480,
          to: -480,
          places: [
            { name: 'Thermopylae', lon: 22.56, lat: 38.8 },
            { name: 'Artemisium', lon: 23.23, lat: 38.97 },
            { name: 'Delphi', lon: 22.5, lat: 38.48, label: 'left' },
            { name: 'Athens', lon: 23.73, lat: 37.98 },
            { name: 'Isthmus of Corinth', lon: 22.99, lat: 37.93, label: 'left' },
            { name: 'Sparta', lon: 22.43, lat: 37.07 },
          ],
          placesNote:
            'Xerxes’ army came down the coast from the north. Thermopylae was the one easy road south, squeezed between mountains and sea; the Greek fleet at Artemisium, about 60 km away, guarded the sea route beside it.',
          mapBounds: { west: 21.4, south: 36.8, east: 24.6, north: 39.4 },
          lenses: ['history', 'geography'],
          why: 'Thermopylae was a defeat, yet it became the most famous last stand in history — and it bought the Greeks time to choose where to fight next.',
          context: [
            'It is late summer 480 BCE, probably August. Xerxes’ army and fleet are moving south together, keeping in touch along the coast.',
            'Only a few dozen of the roughly 1,000 Greek city-states have sworn to resist. Thessaly, in the north, has already gone over to Persia.',
            'Sparta leads the alliance, but its main army is at home for the Carneia, a festival of Apollo during which Spartans would not march. Many other Greeks are at the Olympic Games.',
            'So only an advance force goes north to block the pass, under Leonidas, one of Sparta’s two kings.',
          ],
        },
        {
          type: 'story',
          title: 'Combing their hair',
          lenses: ['history'],
          body: [
            'Xerxes camps near the pass and sends a horseman to spy. The rider sees Spartan soldiers in front of their wall — some exercising, some calmly combing their long hair.',
            'Puzzled, Xerxes asks Demaratus, an exiled Spartan king travelling with his army. It is their custom, Demaratus replies, Herodotus tells us: Spartans groom their hair when they are about to risk their lives.',
            'Xerxes waits four days for the Greeks to run away. They don’t.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history'],
          prompt: 'How many Greeks were blocking the pass when Xerxes arrived?',
          options: ['Exactly 300 Spartans', 'About 6,000–7,000 men', 'About 40,000 men', 'About 100,000 men'],
          answer: 1,
          reveal:
            'About 6,000–7,000. Herodotus lists some 5,200 men from named cities — including 300 Spartans, 700 Thespians, 400 Thebans and 1,000 Phocians — plus all the fighting men of Locris, and uncounted helot servants. “The 300” were only the Spartan core. The idea that 300 men stood alone is a myth that forgets the thousands beside them.',
        },
        {
          type: 'explain',
          term: 'Thermopylae',
          lenses: ['geography'],
          plain:
            'Greek for “Hot Gates,” after the hot sulphur springs there. In 480 it was a strip of flat ground between steep mountains and the sea — the only easy road from northern into central Greece. At its narrowest points, Herodotus says, there was room for just one wagon.',
          analogy:
            'A corridor instead of a hall: however big the crowd, only the few people at the front can reach the door.',
          why: 'In a gap that narrow, Persia’s numbers couldn’t be used. Only a few hundred men could fight at once on each side — and up close, the Greeks had the better armour.',
        },
        {
          type: 'explain',
          term: 'Sedimentation',
          lenses: ['science', 'geography'],
          plain:
            'Rivers carry fine soil and sand. Where a river meets the sea its water slows, and the particles settle to the bottom, layer on layer, until the seabed slowly becomes land.',
          analogy: 'Shake a jar of muddy water and set it down: the mud sinks and builds a layer at the bottom.',
          why: 'In 2,500 years the Spercheios River has dumped so much silt that the shore at Thermopylae has moved several kilometres out. Geologists had to drill cores to find the ancient beach. Visitors today see a wide plain, not a narrow pass.',
        },
        {
          type: 'explain',
          term: 'Spartiates and helots',
          lenses: ['politics', 'economics'],
          plain:
            'Full Spartan citizens, the Spartiates, were few — about 8,000 men in 480, Herodotus says. They did not farm or trade. Their land was worked by helots: Greeks conquered by Sparta and forced to farm for their masters, generation after generation.',
          analogy:
            'Like serfs tied to a medieval lord’s estate — except that they belonged to the Spartan state, and far outnumbered their masters.',
          why: 'Helots freed every Spartan man to be a full-time soldier. But Sparta also lived in fear of a helot revolt — one reason its army disliked marching far from home.',
        },
        {
          type: 'explain',
          term: 'The agoge',
          lenses: ['politics', 'philosophy'],
          plain:
            'Sparta’s state upbringing for boys. At about seven they left home to live in packs with other boys. They trained hard, went barefoot, and were underfed so they would learn to steal food — and were beaten if caught.',
          analogy: 'Boarding school, boot camp and survival course rolled into one, from age seven into the twenties.',
          why: 'It made Spartans the most disciplined soldiers in Greece. But our descriptions come mostly from Xenophon and Plutarch, writing generations later, so some details may be idealised.',
        },
        {
          type: 'story',
          title: 'Two days in the pass',
          lenses: ['history'],
          body: [
            'On the fifth day Xerxes attacks. Median troops charge into the gap and are cut down. Then his elite guard, the Immortals, under Hydarnes, fare no better: their spears are shorter than the Greeks’, Herodotus notes, and in the narrows their numbers are useless.',
            'The Spartans pretend to flee, then turn on their pursuers. Three times, Herodotus says, Xerxes leaps from his throne in fear for his army. The next day goes the same way.',
          ],
        },
        {
          type: 'choice',
          lenses: ['geography', 'history'],
          prompt: 'Why could a few thousand Greeks hold off a vastly bigger army for two days?',
          options: [
            'The Persians had no weapons that could reach them',
            'The pass was so narrow that only a few men could fight at once, and the Greeks were better armoured',
            'The Persians were waiting for their fleet before attacking seriously',
            'Storms struck every time the Persians attacked',
          ],
          answer: 1,
          explain:
            'Geography turned a numbers game into a quality game. In a gap a wagon or two wide, only the front ranks fought — and there, Greek bronze beat Persian wicker. Remember the principle: you will meet it again, at sea.',
        },
        {
          type: 'story',
          title: 'The path over the mountain',
          lenses: ['history', 'geography'],
          body: [
            'Then a local man, Ephialtes of Malis, comes to Xerxes hoping for a reward. He knows a path, the Anopaea, that climbs over the mountain and comes down behind the Greeks. (Herodotus says the Greeks later put a price on his head.)',
            'At nightfall the Immortals set off along it. At dawn the 1,000 Phocians guarding the path hear dry oak leaves crunching underfoot. They climb a hilltop to make a stand — and the Persians simply march past them.',
          ],
        },
        {
          type: 'story',
          title: 'The last morning',
          lenses: ['history', 'religion'],
          body: [
            'Warned by scouts, Leonidas sends most of the allies away. He stays with his 300 Spartans, 700 Thespians who refuse to leave, and 400 Thebans — kept as hostages, Herodotus claims.',
            'Why stay? Herodotus says an oracle had warned that either Sparta would fall or one of its kings would die. Many historians see a practical reason too: a rearguard lets everyone else escape.',
            'Leonidas is killed. His men fight over his body, until the last are shot down on a low hill.',
          ],
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Put the days at Thermopylae in order.',
          items: [
            'Xerxes waits four days for the Greeks to leave',
            'Median troops, then the Immortals, fail to break through',
            'Ephialtes tells Xerxes about the mountain path',
            'The Immortals cross the mountain by night',
            'Leonidas sends most of the allies away',
            'The last defenders die on a low hill',
          ],
          explain:
            'Four days of waiting, three of fighting. The Greeks weren’t beaten from the front; they were outflanked. And they left a legend: Herodotus’ bravest Spartan, Dieneces, told that Persian arrows would hide the sun, is said to have replied that then they would fight in the shade.',
        },
        {
          type: 'story',
          title: 'Meanwhile, at sea',
          lenses: ['history', 'geography'],
          body: [
            'While Leonidas held the pass, 271 Greek triremes held the strait at Artemisium. Athens sent 127 of them, but a Spartan, Eurybiades, was in command: the other Greeks refused to follow an Athenian.',
            'Storms had already wrecked hundreds of Persian ships, Herodotus says. On the same three days as Thermopylae, the fleets fought to a draw. When a rowing boat brought news that the pass had fallen, the Greek fleet slipped away south.',
          ],
        },
        {
          type: 'compare',
          lenses: ['history', 'geography'],
          prompt: 'Two battles, one plan. Fill in the blanks.',
          columns: ['Thermopylae', 'Artemisium'],
          rows: [
            { label: 'Fought on', cells: ['Land — a coastal pass', 'Sea — a strait off Euboea'] },
            { label: 'Greek force', cells: ['About 6,000–7,000 men', '271 triremes, later over 320'] },
            { label: 'Commander', cells: ['Leonidas of Sparta', 'Eurybiades of Sparta'] },
            { label: 'Result', cells: ['Pass lost on the third day', 'Three days of drawn fighting, then retreat'] },
          ],
          blanks: [
            [1, 0, ['Exactly 300 men', 'About 40,000 men']],
            [2, 1, ['Themistocles of Athens', 'Demaratus of Sparta']],
            [3, 0, ['Pass held; Persians turn back', 'Pass abandoned without a fight']],
          ],
          explain:
            'The two battles were one plan. The army blocked the road; the fleet stopped Persian ships sailing past to land troops behind the pass. When one fell, the other had to go. Both taught the same lesson: fight where narrowness cancels numbers.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'Place the battles of Thermopylae and Artemisium.',
          event: 'Thermopylae and Artemisium',
          year: -480,
          min: -500,
          max: -470,
          tolerance: 1,
          anchors: [
            { year: -490, label: 'Marathon' },
            { year: -486, label: 'Darius dies' },
            { year: -483, label: 'Laurion silver strike' },
          ],
          explain:
            'Late summer 480 BCE — ten years after Marathon, and only a few months after Xerxes crossed the Hellespont that spring.',
        },
        {
          type: 'recap',
          prompt:
            'How could a few thousand Greeks hold off the largest army on earth — and why did they still lose the pass?',
          keyPoints: [
            'The pass at Thermopylae was so narrow that numbers counted for little',
            'About 6,000–7,000 Greeks, with Leonidas and 300 Spartans at the core, held it for two days',
            'Ephialtes showed the Persians a mountain path that led behind the Greeks',
            'Leonidas stayed with a rearguard and died; the fleet at Artemisium withdrew',
            'River silt has since moved the shore kilometres out, so the pass no longer looks narrow',
          ],
          model:
            'At Thermopylae the road south squeezed between mountains and sea, so only a few men could fight at once. About 6,000–7,000 Greeks under the Spartan king Leonidas held the gap for two days, while their fleet fought at Artemisium. Then a local man, Ephialtes, led the Persians over a mountain path behind them. Leonidas sent most of the allies away and died with a rearguard; the pass fell, and the fleet retreated south.',
        },
      ],
      cards: [
        {
          id: 'sal-date-thermopylae',
          kind: 'date',
          year: -480,
          front: 'When were the battles of Thermopylae and Artemisium?',
          back: '480 BCE (late summer)',
          choices: ['490 BCE', '479 BCE', '431 BCE'],
          hook: 'Same year Xerxes crossed the Hellespont: 480, ten years after Marathon.',
        },
        {
          id: 'sal-person-leonidas',
          kind: 'person',
          front: 'Which Spartan king led the Greeks at Thermopylae and died there?',
          back: 'Leonidas',
          choices: ['Pausanias', 'Demaratus', 'Eurybiades'],
        },
        {
          id: 'sal-person-ephialtes',
          kind: 'person',
          front: 'Who showed the Persians the mountain path around Thermopylae?',
          back: 'Ephialtes, a local man from Malis, hoping for a reward',
          choices: ['Demaratus, an exiled Spartan king', 'Hydarnes, commander of the Immortals', 'Artabanus, Xerxes’ uncle'],
        },
        {
          id: 'sal-num-thermopylae-greeks',
          kind: 'number',
          front: 'Roughly how many Greeks held Thermopylae at the start?',
          back: 'About 6,000–7,000, including 300 Spartans',
          choices: ['Exactly 300', 'About 1,000', 'About 40,000'],
          hook: '“The 300” were the core, not the whole army.',
        },
        {
          id: 'sal-concept-helots',
          kind: 'concept',
          front: 'Who were the helots, and why did they matter to Sparta?',
          back: 'Conquered Greeks forced to farm Sparta’s land. They freed Spartan men to train full-time — but far outnumbered them, so Sparta feared revolt.',
        },
        {
          id: 'sal-cause-sedimentation',
          kind: 'cause',
          front: 'Why is Thermopylae no longer a narrow pass between cliffs and sea?',
          back: 'River silt, mainly from the Spercheios, has built new land and pushed the shore several kilometres out.',
          choices: [
            'The sea level has fallen by about 50 metres',
            'Roman engineers filled in the bay for a road',
            'The cliffs were quarried away for building stone',
          ],
        },
        {
          id: 'sal-place-artemisium',
          kind: 'place',
          front: 'Where did the Greek fleet fight at the same time as Thermopylae?',
          back: 'Off Artemisium, at the northern tip of the island of Euboea',
          choices: ['Off Salamis, near Athens', 'Off Mycale, in Asia Minor', 'In the Hellespont'],
        },
      ],
      teaser:
        'The pass has fallen, and nothing now stands between Xerxes’ army and Athens. Months earlier, the god at Delphi had told the Athenians to flee to the ends of the earth. What would they do?',
    },

    // ─────────────────────────────────────────────────────────────── 3
    {
      id: 'wooden-wall',
      title: 'The Wooden Wall',
      summary:
        'Delphi gives Athens a riddle about a “wooden wall.” Themistocles says it means ships. The city empties, and Xerxes burns the Acropolis.',
      question: 'How did Athens decide to abandon its own city — and what did a god’s riddle have to do with it?',
      previously:
        'Thermopylae fell on the third day, after Ephialtes showed the Persians a mountain path. Leonidas died with his rearguard, and the Greek fleet pulled back from Artemisium.',
      steps: [
        {
          type: 'story',
          title: 'An uneaten honey-cake',
          lenses: ['history', 'religion'],
          body: [
            'September 480. The Greek fleet rows into the bay of Salamis, an island just off Athens. The news is grim: the Persians are marching south, and the Peloponnesians are walling off the Isthmus of Corinth instead of defending Athens.',
            'On the Acropolis, Athena’s sacred snake is given a honey-cake every month. This time, Herodotus says, the priestess announces that the cake lies untouched. The goddess has left the city.',
          ],
        },
        {
          type: 'story',
          title: 'Months earlier, at Delphi',
          lenses: ['religion', 'history'],
          body: [
            'Months earlier, as Xerxes’ army gathered, Athens had sent messengers to ask the god Apollo’s advice at Delphi, the most respected oracle in Greece.',
            'The priestess, Aristonice, gave them one of the darkest answers on record. Flee to the ends of the earth, she told them: fire and war will bring your city down, and even the temples will stream with blood.',
            'The messengers were crushed.',
          ],
        },
        {
          type: 'explain',
          term: 'The oracle at Delphi',
          lenses: ['religion'],
          plain:
            'A sanctuary of Apollo where a priestess, the Pythia, answered questions in the god’s name. On set days, visitors paid a fee and offered a sacrifice; she sat on a bronze tripod in the inner temple and spoke the reply, which priests may have helped put into verse.',
          analogy:
            'Like consulting the wisest adviser in the land — except the adviser was a god, and the answers often came as riddles you had to work out yourself.',
          why: 'Cities asked Delphi before wars and new colonies. Plutarch, a priest there around 100 CE, mentions a sweet-smelling vapour; whether gases from the rock really affected the Pythia is still debated.',
        },
        {
          type: 'predict',
          lenses: ['religion', 'history'],
          prompt: 'The Athenians have been told to flee to the ends of the earth. What do they do?',
          options: [
            'Sail west and found a new city in Italy',
            'Go home and offer to surrender to Xerxes',
            'Ask the god again, as humble suppliants',
            'Ignore the oracle entirely',
          ],
          answer: 2,
          reveal:
            'A leading Delphian, Timon, advised them to go back carrying olive branches — the sign of suppliants begging for mercy — and ask again. They did, saying they would stay in the sanctuary until they died unless they got a better answer. The second answer would change Athenian history.',
        },
        {
          type: 'story',
          title: 'The wooden wall',
          lenses: ['religion'],
          body: [
            'The second answer was still grim. All of Attica would be taken, the Pythia said. But Zeus would grant Athena a wooden wall that alone would not fall, and it would save the Athenians and their children.',
            'Don’t wait for the enemy’s horsemen and foot soldiers, it went on: turn your back and withdraw. Then came a riddle. “Divine Salamis,” it said, you will destroy the children of women.',
          ],
        },
        {
          type: 'explain',
          term: 'Deciding under uncertainty',
          lenses: ['philosophy', 'religion'],
          plain:
            'Choosing when you can’t know how things will turn out — or, as here, even what your best information means. Delphi’s answers were famously ambiguous: they could honestly be read more than one way, so the god could never be proved wrong.',
          analogy:
            'Choosing a road in fog: you can’t see the end, so you pick one you have fuel for, and one that doesn’t lead off a cliff if you guessed wrong.',
          why: 'Ambiguity threw the decision back onto the Athenians. They had to argue out what the god meant — and whoever won that argument would set the city’s strategy.',
        },
        {
          type: 'story',
          title: 'Three readings',
          lenses: ['religion', 'politics'],
          body: [
            'The Assembly argued. Some older men said the wooden wall was the Acropolis, once fenced with a thorn hedge: defend the rock.',
            'Others said it meant ships. But professional oracle-interpreters read “divine Salamis” as a sea defeat for Athens: don’t fight at sea at all — abandon Attica.',
            'Themistocles disagreed. If Athenians were doomed, he argued, the god would have chosen a harsher word than divine. The dead at Salamis would be the enemy’s. The wooden wall was the fleet: fight at sea.',
          ],
        },
        {
          type: 'choice',
          lenses: ['religion', 'philosophy'],
          prompt: 'What was Themistocles’ key argument about the oracle?',
          options: [
            'The oracle was a Persian forgery and should be ignored',
            'Calling Salamis “divine” meant the deaths there would be the enemy’s, so the fleet should fight',
            'The wooden wall meant the old thorn hedge around the Acropolis',
            'Athens should ask a third time until it got a clear answer',
          ],
          answer: 1,
          explain:
            'He hung his case on one word, “divine,” and used it to back the plan he had pushed since the Laurion silver: ships. The oracle didn’t make the decision. It gave a frightened city shared, sacred permission to make it — and Athens had about 200 ships to carry it out.',
        },
        {
          type: 'story',
          title: 'Everyone out',
          lenses: ['history', 'politics'],
          body: [
            'Now, in September 480, the plan was carried out. Heralds proclaimed that every Athenian should save his family as best he could.',
            'Most women and children were ferried to Troezen, across the gulf in the Peloponnese; others went to Aegina, or to Salamis itself. According to Plutarch, Troezen voted to pay the refugees two obols a day each, let their children pick fruit anywhere, and hired teachers for them.',
            'The men went to the ships.',
          ],
        },
        {
          type: 'story',
          title: 'A stone from Troezen',
          lenses: ['history', 'philosophy'],
          body: [
            'In 1959 an American scholar, Michael Jameson, came across an inscribed stone at Troezen. It records a decree proposed by Themistocles: women and children to Troezen, the old and their property to Salamis, and 200 ships manned for war.',
            'But it was carved about two centuries later, and it has the evacuation planned before Thermopylae — not after, as Herodotus tells it. A faithful copy of a real decree, or a later patriotic rewrite? Historians still disagree.',
          ],
        },
        {
          type: 'story',
          title: 'Fire on the Acropolis',
          lenses: ['history', 'religion'],
          body: [
            'Xerxes’ army found Athens almost empty. A few temple treasurers and poor men had barricaded the Acropolis with doors and planks, sure that they, not Themistocles, had found the true wooden wall.',
            'Persian archers on a hill opposite shot flaming arrows into the barricade. The defenders rolled boulders down — until Persian soldiers scaled a steep, unguarded cliff. Some defenders leapt to their deaths; the rest were killed. The temples were plundered and burned.',
          ],
        },
        {
          type: 'story',
          title: 'The olive tree',
          lenses: ['religion', 'history'],
          body: [
            'The next day, Herodotus says, Xerxes ordered Athenian exiles in his army to climb the Acropolis and sacrifice in the Greek way — perhaps uneasy at having burned a temple.',
            'They found that Athena’s sacred olive tree, burned with the temple, had already put up a new green shoot, about a forearm long.',
            'Herodotus tells it as a sign from the gods. The city, it hinted, was not finished.',
          ],
        },
        {
          type: 'story',
          title: 'Proof in the rubble',
          lenses: ['history', 'science'],
          body: [
            'Is the burning just a story? In the 1880s, archaeologists digging on the Acropolis found statues of young women, smashed and scorched, buried where the Athenians had dumped the wreckage after the war. They call it the “Persian debris.”',
            'You can still see burnt column drums from an unfinished temple built into the Acropolis’ north wall — probably a deliberate reminder, visible from the city below.',
          ],
        },
        {
          type: 'match',
          lenses: ['history', 'geography'],
          prompt: 'Where did everyone go? Match each group to its place in 480.',
          categories: ['Troezen', 'Salamis', 'Stayed in Athens'],
          items: [
            { text: 'Most of the women and children', category: 'Troezen' },
            { text: 'Refugee children allowed to pick fruit anywhere', category: 'Troezen' },
            { text: 'The Athenian fleet and its crews', category: 'Salamis' },
            { text: 'Old people and household goods (the stone’s version)', category: 'Salamis' },
            { text: 'Temple treasurers and a few poor men', category: 'Stayed in Athens' },
          ],
          explain:
            'Athens became a city without a place: its people scattered around the Saronic Gulf, its men at sea, its temples in ashes. Themistocles’ rivals would soon mock him as a man without a city.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the Persians burn the Acropolis of Athens?',
          event: 'Persians burn the Acropolis',
          year: -480,
          min: -550,
          max: -400,
          tolerance: 5,
          anchors: [
            { year: -508, label: 'Athens becomes a democracy' },
            { year: -490, label: 'Marathon' },
            { year: -447, label: 'Parthenon begun' },
          ],
          explain:
            '480 BCE — 28 years after Athens became a democracy. Thirty-three years later, in 447, the Athenians began the Parthenon on the same burnt hilltop.',
        },
        {
          type: 'recap',
          prompt: 'How did Athens decide to abandon its own city — and what did a god’s riddle have to do with it?',
          keyPoints: [
            'Delphi’s first answer told Athens to flee; the second promised a “wooden wall”',
            'Themistocles argued the wall was the fleet, and “divine” Salamis meant enemy deaths',
            'The oracle gave shared, sacred backing to a strategy Athens had already paid for',
            'Families were evacuated to Troezen, Aegina and Salamis; the men manned the ships',
            'Xerxes took Athens and burned the Acropolis — archaeology confirms the fire',
          ],
          model:
            'Delphi first told Athens to flee, then promised that a “wooden wall” would save it and called Salamis “divine.” Themistocles argued that the wall meant the fleet and that the deaths at Salamis would be Persian, so the oracle backed the ships Athens had built with its silver. The Athenians sent their families to Troezen, Aegina and Salamis and manned the fleet. Xerxes took the empty city and burned the Acropolis.',
        },
      ],
      cards: [
        {
          id: 'sal-concept-wooden-wall',
          kind: 'concept',
          front: 'According to Themistocles, what was the “wooden wall” that Delphi promised would not fall?',
          back: 'Athens’ fleet of wooden ships',
          choices: [
            'The old thorn hedge around the Acropolis',
            'A new wall across the Isthmus of Corinth',
            'The wooden gates of Delphi’s sanctuary',
          ],
        },
        {
          id: 'sal-place-delphi',
          kind: 'place',
          front: 'Where was the oracle of Apollo that Athens consulted before the invasion?',
          back: 'Delphi, in the mountains of central Greece',
          choices: ['Olympia', 'Delos', 'Dodona'],
        },
        {
          id: 'sal-person-pythia',
          kind: 'person',
          front: 'Who spoke Apollo’s answers at Delphi?',
          back: 'The Pythia, a priestess of Apollo',
          choices: ['The king of Delphi', 'A council of Spartan elders', 'Athena’s high priest in Athens'],
        },
        {
          id: 'sal-place-troezen',
          kind: 'place',
          front: 'Where did most Athenian women and children take refuge in 480?',
          back: 'Troezen, across the Saronic Gulf in the Peloponnese',
          choices: ['Sparta', 'Delphi', 'Corinth'],
        },
        {
          id: 'sal-date-acropolis',
          kind: 'date',
          year: -480,
          front: 'When did the Persians burn the Acropolis of Athens?',
          back: '480 BCE (September), shortly before Salamis',
          choices: ['490 BCE', '447 BCE', '404 BCE'],
          hook: 'Same year as Thermopylae and Salamis. The Parthenon later rose on the ruins, from 447.',
        },
        {
          id: 'sal-concept-persian-debris',
          kind: 'concept',
          front: 'How do archaeologists know the Persians really burned the Acropolis?',
          back: 'Excavations in the 1880s found smashed, scorched statues buried in the “Persian debris,” and burnt column drums are still built into the Acropolis wall.',
        },
        {
          id: 'sal-concept-uncertainty',
          kind: 'concept',
          front: 'Why was an ambiguous oracle still useful to Athens?',
          back: 'It gave shared, sacred backing to a hard choice. Themistocles read it to support a strategy — the fleet — that Athens had already paid for.',
        },
      ],
      teaser:
        'Athens is ash, and the Peloponnesian captains want to row home to defend their own wall. Themistocles has one move left: a secret message to the King of Kings.',
    },

    // ─────────────────────────────────────────────────────────────── 4
    {
      id: 'trap-in-the-strait',
      title: 'The Trap in the Strait',
      summary:
        'September 480: a secret message lures Xerxes’ fleet into the narrow channel off Salamis — and we see why a strait a kilometre or two wide cancels a bigger navy.',
      question: 'How did a smaller Greek fleet destroy a bigger Persian one in the strait of Salamis?',
      previously:
        'Trusting the oracle’s “wooden wall,” Athens emptied itself onto its ships and onto Salamis, Aegina and Troezen. Xerxes took the city and burned the Acropolis.',
      steps: [
        {
          type: 'orient',
          title: 'The Strait of Salamis',
          from: -480,
          to: -480,
          places: [
            { name: 'Salamis strait', lon: 23.565, lat: 37.953 },
            { name: 'Psyttaleia', lon: 23.588, lat: 37.942 },
            { name: 'Salamis (island)', lon: 23.47, lat: 37.92, label: 'left' },
            { name: 'Mt Aigaleos (Xerxes)', lon: 23.625, lat: 37.985, label: 'left' },
            { name: 'Eleusis', lon: 23.54, lat: 38.04 },
            { name: 'Athens', lon: 23.73, lat: 37.98 },
            { name: 'Phaleron', lon: 23.69, lat: 37.935 },
          ],
          placesNote:
            'The battle was fought in the channel between Salamis and the mainland, roughly 1–2 km wide at its narrowest. The Persian fleet was based at Phaleron, Athens’ old harbour; Xerxes watched from the slopes of Mount Aigaleos.',
          mapBounds: { west: 23.3, south: 37.85, east: 23.8, north: 38.05 },
          lenses: ['geography', 'history'],
          why: 'In one day in this channel the Persian navy was broken — and Xerxes, fearing for his bridges and his supplies, took much of his army home.',
          context: [
            'It is late September 480 BCE. Athens is in Persian hands, and its people are refugees.',
            'About 370–380 Greek triremes lie in the bays of Salamis. Herodotus counts 378; Athens alone sends 180.',
            'The Persian fleet waits at Phaleron. Herodotus says it began the war with 1,207 warships; after storms and Artemisium, modern guesses for Salamis are mostly around 600–800.',
            'The Peloponnesian armies are digging in behind a wall across the Isthmus of Corinth, about 50 km to the west.',
          ],
        },
        {
          type: 'story',
          title: 'A man without a city',
          lenses: ['history', 'politics'],
          body: [
            'The Greek admirals argue. Most Peloponnesians want to row back to the Isthmus, beside their army. Themistocles insists they fight here.',
            'Adeimantus of Corinth sneers that a man without a city should keep quiet. Themistocles snaps back: Athens has 200 manned ships — a city stronger than any of theirs. If you leave, he tells the Spartan commander Eurybiades, we will take our families and sail to Italy.',
            'Eurybiades stays. For now.',
          ],
        },
        {
          type: 'predict',
          lenses: ['geography', 'science'],
          prompt: 'You have about 370 ships; the enemy has perhaps twice as many. Where do you want to fight?',
          options: [
            'Out on the open sea, where you can manoeuvre',
            'In a narrow strait, with land close on both sides',
            'Nowhere — beach the ships and defend them on land',
          ],
          answer: 1,
          reveal:
            'The narrow strait. In open water, the bigger fleet can spread out, wrap round your line and ram your ships from the side. Between two shores it can’t: only as many ships can fight as fit across the channel. It is Thermopylae again — at sea.',
        },
        {
          type: 'explain',
          term: 'Bottleneck',
          lenses: ['geography', 'science'],
          plain:
            'A narrow point where only a few can pass, or fight, at a time. However big the crowd behind, the width of the gap sets how many take part.',
          analogy:
            'Ten thousand fans leaving a stadium through a single gate don’t get out faster than a hundred would. They just queue longer — and push.',
          why: 'In the channel off Salamis, roughly 1–2 km wide, extra Persian ships couldn’t join the fight. They jammed up behind the front line — and got in its way.',
        },
        {
          type: 'explain',
          term: 'Diekplous and periplous',
          lenses: ['science', 'history'],
          plain:
            'Two classic trireme attacks. In the diekplous (“sailing through”), a ship dashes through a gap in the enemy line, then swings round to ram a ship in its side or stern. In the periplous (“sailing round”), ships row round the end of the enemy line to strike from behind.',
          analogy: 'Like a footballer going through the defence or round the wing — both need space to turn.',
          why: 'A ram could smash a ship’s thin side but did far less against its strong bow. In a crowded strait whose ends touched land, there was no “round” — and little room to turn.',
        },
        {
          type: 'estimate',
          lenses: ['geography', 'science'],
          prompt:
            'A rough model: suppose each trireme needs about 50 m of sea across — its oars plus room to steer. How many could line up side by side in a channel 1.5 km wide?',
          min: 0,
          max: 200,
          step: 5,
          unit: 'ships',
          answer: 30,
          tolerance: 5,
          explain:
            '1,500 ÷ 50 = 30. The real spacing is uncertain, but the point holds: the channel, not the size of the fleet, capped how many ships could fight at once. A fleet of 700 would present the same front of a few dozen ships as a fleet of 300 — with hundreds stuck behind.',
        },
        {
          type: 'story',
          title: 'A message in the night',
          lenses: ['history', 'politics'],
          body: [
            'When the captains waver again, Themistocles slips out of the meeting. He sends his slave Sicinnus, tutor to his sons, by boat to the Persian camp.',
            'Herodotus gives the message: Themistocles is secretly on the King’s side. The Greeks are terrified and about to flee. Block their escape now, and they will fight each other instead of you.',
            'Aeschylus, who probably fought in the battle, tells the same story just eight years later.',
          ],
        },
        {
          type: 'explain',
          term: 'Game theory',
          lenses: ['philosophy', 'politics'],
          plain:
            'The study of decisions when your best move depends on what someone else will do — and they are thinking about you too.',
          analogy:
            'A penalty kick: the striker picks a side based on where the keeper will dive, and the keeper does the same. Change what the other believes, and you change what they do.',
          why: 'Xerxes had a good option: wait. Queen Artemisia, one of his commanders, advised exactly that — the quarrelling Greeks would run short of food and scatter to their own cities. Themistocles’ message made attacking look like the winning move.',
        },
        {
          type: 'choice',
          lenses: ['philosophy', 'politics'],
          prompt: 'Why was Themistocles’ message so clever?',
          options: [
            'It made Xerxes split his army between Athens and Sparta',
            'It lured the Persians into the narrows and blocked the Greeks’ own escape, forcing them to fight',
            'It persuaded the Persian crews to change sides',
            'It gave the Persians a false battle plan to prepare against',
          ],
          answer: 1,
          explain:
            'It set two traps. Xerxes sent his fleet into the channel. And once Persian ships sealed the exits, the Peloponnesians could no longer sail away: Themistocles had forced his own allies to fight where he wanted. Game theorists call that a commitment — deliberately cutting off your own retreat.',
        },
        {
          type: 'story',
          title: 'Surrounded',
          lenses: ['history'],
          body: [
            'Xerxes takes the bait. Through the night his ships row into position to seal both ends of the strait, and he lands soldiers on the islet of Psyttaleia. Many crews are at their oars until dawn.',
            'In the dark a small boat arrives from Aegina. On it is Aristides, Themistocles’ old rival, banished by a vote of the Athenians and then recalled. We are surrounded, he tells Themistocles. There is no way out now.',
          ],
        },
        {
          type: 'story',
          title: 'Morning in the strait',
          lenses: ['history', 'science'],
          body: [
            'At dawn the Greeks sing their battle hymn; Aeschylus remembers it echoing off the island’s rocks. The Persian ships push into the channel. At first the Greeks back water. Then — so the Athenians later claimed — their captain Ameinias rams an enemy ship, and the lines crash together.',
            'Plutarch, writing nearly 600 years later, says Themistocles waited for a morning breeze that raised a swell, rocking the tall Persian ships more than the low Greek ones. Maybe. (Not tides: the Aegean’s are tiny.)',
          ],
        },
        {
          type: 'story',
          title: 'The jam',
          lenses: ['history', 'geography'],
          body: [
            'Now the bottleneck works. Rammed Persian ships can’t back away: the ships behind keep pushing forward, Herodotus says, eager to show their courage to the King. Hulls collide; oars snap. Xerxes’ brother Ariabignes, an admiral, is killed.',
            'Greeks whose ships sink swim to Salamis. Many on the Persian side can’t swim, and drown. Diodorus, four centuries later, puts the losses at about 40 Greek ships against over 200 Persian — plausible, but uncheckable.',
          ],
        },
        {
          type: 'story',
          title: 'Artemisia',
          lenses: ['history'],
          body: [
            'One commander on the Persian side is a woman: Artemisia, queen of Halicarnassus — Herodotus’ own home town — with five ships.',
            'Chased by an Athenian trireme, she rams and sinks a ship from her own side. The Athenian captain assumes she is a Greek or a deserter and turns away. Xerxes, watching from Mount Aigaleos, thinks she has sunk an enemy. “My men have become women, and my women men,” Herodotus reports him saying.',
          ],
        },
        {
          type: 'compare',
          lenses: ['history', 'geography'],
          prompt: 'Two fleets at Salamis. Fill in the blanks.',
          columns: ['Greek fleet', 'Persian fleet'],
          rows: [
            { label: 'Ships (Herodotus)', cells: ['378', '1,207 at the start of the war'] },
            { label: 'Ships (modern estimate)', cells: ['About 370–380', 'Perhaps 600–800'] },
            { label: 'Night before', cells: ['Resting on Salamis', 'Rowing into position all night'] },
            { label: 'Fought best', cells: ['In narrow, crowded water', 'In open sea with room to manoeuvre'] },
          ],
          blanks: [
            [0, 0, ['180', '1,000']],
            [1, 1, ['Perhaps 150–200', 'Perhaps 3,000–4,000']],
            [2, 1, ['Anchored in harbour, crews asleep', 'Already sailing home to Asia']],
            [3, 0, ['In open sea, far from land', 'In harbour, defending the beaches']],
          ],
          explain:
            'On paper Persia had perhaps twice the ships. But its crews were tired, it fought in a channel that capped its numbers, and its ships got in each other’s way. The Greeks turned every Persian advantage into a problem.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'Place the battle of Salamis on the timeline.',
          event: 'Battle of Salamis',
          year: -480,
          min: -600,
          max: -300,
          tolerance: 10,
          anchors: [
            { year: -509, label: 'Rome expels its last king (traditional date)' },
            { year: -399, label: 'Socrates executed' },
            { year: -334, label: 'Alexander invades Persia' },
          ],
          explain:
            'September 480 BCE. Rome had thrown out its kings only 29 years earlier. Socrates was born about ten years after the battle. And 146 years later Alexander the Great invaded Persia — claiming, among other things, to avenge Xerxes’ burning of Greek temples.',
        },
        {
          type: 'recap',
          prompt: 'How did a smaller Greek fleet destroy a bigger Persian one in the strait of Salamis?',
          keyPoints: [
            'The strait was roughly 1–2 km wide, so the channel, not fleet size, capped how many ships could fight',
            'Themistocles’ message via Sicinnus lured Xerxes in and blocked the Greeks’ own retreat',
            'Triremes fought by ramming, which needs room to turn — the jammed Persian ships had none',
            'About 370–380 Greek ships beat a Persian fleet of perhaps 600–800',
            'Xerxes watched from Mount Aigaleos as his navy was broken',
          ],
          model:
            'The Greeks had about 370–380 ships against perhaps 600–800, so Themistocles wanted to fight in the narrow strait off Salamis, where only a few dozen ships could meet at once. His secret message, carried by Sicinnus, persuaded Xerxes to attack and to block the exits — which also stopped the Peloponnesians from leaving. In the crowded channel the Persian ships couldn’t manoeuvre to ram, jammed into each other, and were smashed while Xerxes watched from Mount Aigaleos.',
        },
      ],
      cards: [
        {
          id: 'sal-date-salamis',
          kind: 'date',
          year: -480,
          front: 'When was the battle of Salamis?',
          back: 'September 480 BCE',
          choices: ['September 490 BCE', 'September 479 BCE', 'September 431 BCE'],
          hook: 'Same year as Thermopylae, a few weeks later.',
        },
        {
          id: 'sal-num-fleets',
          kind: 'number',
          front: 'Roughly how many ships did the Greeks have at Salamis?',
          back: 'About 370–380 (Herodotus: 378), against perhaps 600–800 Persian ships',
          choices: ['About 100', 'About 1,200', 'About 3,000'],
        },
        {
          id: 'sal-person-sicinnus',
          kind: 'person',
          front: 'Who carried Themistocles’ secret message to Xerxes before Salamis?',
          back: 'Sicinnus, his household slave and his sons’ tutor',
          choices: ['Ephialtes of Malis', 'Aristides', 'Demaratus'],
        },
        {
          id: 'sal-person-artemisia',
          kind: 'person',
          front: 'Which queen commanded ships for Xerxes at Salamis, and escaped by ramming a ship from her own side?',
          back: 'Artemisia of Halicarnassus',
          choices: ['Gorgo of Sparta', 'Atossa of Persia', 'Cleopatra of Egypt'],
        },
        {
          id: 'sal-cause-narrows',
          kind: 'cause',
          front: 'Why did the narrow strait help the smaller Greek fleet at Salamis?',
          back: 'Only a few dozen ships could fight at once, so the extra Persian ships couldn’t surround the Greeks — they jammed together instead.',
          choices: [
            'Strong tides swept the Persian ships onto rocks',
            'Persian ships were too big to enter the strait',
            'The Greeks had blocked the strait with a chain',
          ],
        },
        {
          id: 'sal-place-aigaleos',
          kind: 'place',
          front: 'Where did Xerxes watch the battle of Salamis?',
          back: 'From the slopes of Mount Aigaleos, on the mainland facing the strait',
          choices: ['From his flagship in the strait', 'From the Acropolis of Athens', 'From the islet of Psyttaleia'],
        },
        {
          id: 'sal-concept-diekplous',
          kind: 'concept',
          front: 'What were the diekplous and periplous?',
          back: 'Trireme attacks: breaking through the enemy line to ram from the side or stern, and rowing round the end of the line. Both need open water.',
        },
      ],
      teaser:
        'Xerxes is heading home, afraid for his bridges — but he has left his general Mardonius in Greece with the pick of the army. The war at sea is won. The war on land is not.',
    },

    // ─────────────────────────────────────────────────────────────── 5
    {
      id: 'plataea-and-mycale',
      title: 'Plataea and Mycale',
      summary:
        '479: Mardonius makes a last bid for Greece. The largest Greek army yet meets him at Plataea — and the Greek fleet strikes back across the Aegean.',
      question: 'How did the Greeks finally end the Persian invasion — and what did victory turn into?',
      previously:
        'At Salamis in September 480, Themistocles lured Xerxes’ fleet into a narrow strait and smashed it. Xerxes went home, leaving his general Mardonius in Greece with the best of the army.',
      steps: [
        {
          type: 'orient',
          title: 'From Plataea to Mycale',
          from: -479,
          to: -478,
          places: [
            { name: 'Plataea', lon: 23.27, lat: 38.21, label: 'left' },
            { name: 'Athens', lon: 23.73, lat: 37.98 },
            { name: 'Sparta', lon: 22.43, lat: 37.07 },
            { name: 'Mycale', lon: 27.2, lat: 37.65 },
            { name: 'Samos', lon: 26.85, lat: 37.72, label: 'left' },
            { name: 'Delos', lon: 25.27, lat: 37.4 },
            { name: 'Sestos', lon: 26.4, lat: 40.23 },
          ],
          placesNote:
            'Plataea lies on the plain of Boeotia, below Mount Cithaeron, north-west of Athens. Mycale is a mountain ridge on the Asian coast facing the island of Samos, over 300 km across the Aegean.',
          mapBounds: { west: 21.3, south: 36.4, east: 28.6, north: 41 },
          lenses: ['history', 'geography'],
          why: 'In 479 the Greeks ended the invasion on land and at sea — then carried the war to Persia, which set Athens on the road to empire.',
          context: [
            'It is spring 479 BCE. Mardonius has wintered in Thessaly, in northern Greece, with the pick of Xerxes’ army.',
            'Thebes and most of Boeotia, just north of Athens, have gone over to Persia.',
            'The Athenians have returned to their burnt city.',
            'The Spartans are finishing their wall across the Isthmus of Corinth.',
          ],
        },
        {
          type: 'story',
          title: 'An offer from Macedon',
          lenses: ['history', 'politics'],
          body: [
            'Spring 479. Alexander, king of Macedon and a subject of Persia, arrives in Athens with Mardonius’ offer: rebuild your temples, keep your land, take more — just make peace.',
            'Spartan envoys rush over, afraid Athens will accept. It refuses. Never, while the sun keeps its course, the Athenians reply, according to Herodotus. They will not betray what all Greeks share: blood, language, gods and way of life.',
          ],
        },
        {
          type: 'story',
          title: 'Athens burns again',
          lenses: ['history', 'politics'],
          body: [
            'Mardonius marches south and takes Athens a second time, ten months after Xerxes. Again the Athenians flee to Salamis — and send angry envoys to Sparta: help us, or we will make our own peace.',
            'Sparta finally moves: 5,000 Spartan citizens, each with seven helots, and 5,000 more soldiers from Sparta’s neighbouring towns. Their commander is Pausanias, Leonidas’ nephew, ruling for Leonidas’ young son.',
            'Mardonius burns what is left of Athens and falls back towards friendly Thebes — open ground for his cavalry.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history'],
          prompt: 'How big was the Greek army that gathered at Plataea, according to Herodotus?',
          options: ['About 7,000, like Thermopylae', 'About 20,000', 'About 110,000', 'About 1 million'],
          answer: 2,
          reveal:
            'About 110,000, he says: 38,700 heavy infantry and some 70,000 lightly armed men, half of them Spartan helots. Historians find the heavy-infantry figure roughly believable; the rest is less sure. It was probably the largest Greek army ever assembled until then. The Persian side is guessed at very roughly 60,000–120,000; Herodotus says about 350,000, counting Greeks who fought for Persia.',
        },
        {
          type: 'explain',
          term: 'Hoplite',
          lenses: ['history', 'politics'],
          plain:
            'A heavily armed Greek foot soldier, named after his hopla, his arms and armour. He wore a bronze helmet, a breastplate and shin guards, and carried a round shield about 90 cm across and a spear over 2 m long — roughly 20–30 kg in all.',
          analogy:
            'Like fighting with a sack of cement strapped to your body, while holding a small round table on one arm.',
          why: 'Each hoplite bought his own armour, so hoplites were citizens of middling wealth — farmers and craftsmen. Fighting for the city gave them a claim to help run it.',
        },
        {
          type: 'explain',
          term: 'Phalanx',
          lenses: ['history', 'science'],
          plain:
            'Hoplites fought in a phalanx: a solid block, usually about eight ranks deep, shields overlapping. Each man’s shield covered his own left side and the right side of the man on his left.',
          analogy: 'Like a row of people sharing umbrellas in a storm: break the line, and everyone gets wet.',
          why: 'A phalanx was very hard to beat from the front but helpless once it broke. Thucydides noticed that it drifted right in battle, as every man edged towards the shelter of his neighbour’s shield.',
        },
        {
          type: 'compare',
          lenses: ['history', 'science'],
          prompt: 'Two kinds of foot soldier. Fill in the blanks.',
          columns: ['Greek hoplite', 'Persian foot soldier'],
          rows: [
            { label: 'Armour', cells: ['Bronze helmet, breastplate, shin guards', 'Soft felt cap; sometimes a scale tunic'] },
            { label: 'Shield', cells: ['Heavy round shield of wood and bronze', 'Light shield of woven wicker'] },
            { label: 'Main weapon', cells: ['Long thrusting spear', 'Bow, backed by a short spear'] },
            { label: 'Best at', cells: ['Close-quarters shoving and stabbing', 'Shooting from a distance, with cavalry support'] },
          ],
          blanks: [
            [0, 1, ['Full iron plate armour', 'Chain mail from head to foot']],
            [1, 0, ['Small square shield of leather', 'No shield — both hands on the spear']],
            [2, 1, ['Long iron sword', 'Heavy two-handed axe']],
            [3, 0, ['Hit-and-run raids on horseback', 'Ambushes in thick forest']],
          ],
          explain:
            'Neither was simply better. In open country, Persian archers and cavalry could wear down a phalanx from a distance. Up close, shield against shield, the hoplite’s bronze usually won. Plataea would turn on which kind of fight it became.',
        },
        {
          type: 'story',
          title: 'Days of waiting',
          lenses: ['history', 'religion'],
          body: [
            'For more than a week the armies face each other across the little Asopus River. The seers on both sides read the sacrifices the same way: good if you defend, bad if you attack.',
            'Persian horsemen raid the Greek supply lines and choke the spring the Greeks drink from. Short of water, Pausanias orders a night withdrawal. It goes wrong. One Spartan officer, Amompharetus, refuses to retreat, and by dawn the Greek army is strung out across the hillside.',
          ],
        },
        {
          type: 'story',
          title: 'The charge',
          lenses: ['history', 'religion'],
          body: [
            'Mardonius thinks the Greeks are fleeing, and attacks. His archers plant a wall of wicker shields and shoot. The Spartans and their neighbours from Tegea crouch behind their shields, waiting for the sacrifices to give a good sign. Men fall.',
            'At last the omens come right, and they charge. The Persians fight bravely, Herodotus says, but without armour. Mardonius, on a white horse, is killed by a Spartan named Arimnestus. His army breaks.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'science'],
          prompt: 'Why did the Spartans and Tegeans win once the fight came to close quarters?',
          options: [
            'They outnumbered the Persians ten to one',
            'Their armour, big shields and long spears beat lightly armoured troops in a close fight',
            'The Persians had run out of arrows before the battle began',
            'A dust storm blinded the Persian archers',
          ],
          answer: 1,
          explain:
            'Herodotus says the Persians were as brave and strong as the Greeks, but unarmoured and untrained for this kind of fight. Once the waiting ended and it became bronze against wicker, bronze won — Thermopylae’s lesson again, on open ground.',
        },
        {
          type: 'story',
          title: 'Mycale — the same day?',
          lenses: ['history', 'geography'],
          body: [
            'Across the Aegean, the Greek fleet under the Spartan king Leotychidas and the Athenian Xanthippus sails to Samos. The last Persian fleet flees to the mainland opposite, at Mycale, drags its ships ashore and builds a stockade.',
            'The Greeks land and storm it. Ionian Greeks in the Persian army switch sides. The Persian ships are burned.',
            'Herodotus says Mycale was fought on the same day as Plataea. A neat coincidence — perhaps too neat.',
          ],
        },
        {
          type: 'story',
          title: 'The cables come home',
          lenses: ['history', 'politics'],
          body: [
            'That autumn the Athenians besiege Sestos, on the Hellespont, where Xerxes’ bridges had stood. It falls, and the great cables are carried home to Athens to hang in its temples.',
            'Herodotus ends his Histories soon after. But the war goes on. In 478 the Spartan Pausanias leads a Greek fleet against Persian bases, and behaves so arrogantly that the islanders and Ionians ask Athens to lead instead.',
          ],
        },
        {
          type: 'explain',
          term: 'The Delian League',
          lenses: ['politics', 'economics'],
          plain:
            'An alliance founded in 478/477 BCE and led by Athens, to keep fighting Persia and free the Greek cities of Asia. Members sent ships or paid money into a shared treasury on the sacred island of Delos. Aristides, Themistocles’ old rival, set the payments.',
          analogy:
            'Like a club whose members pay a yearly fee for a shared security guard — until the guard starts running the club.',
          why: 'Over the next decades Athens turned the League into its own empire. That story continues in Tier 2: Athens: Plague, War and Socrates.',
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Put the year after Salamis in order.',
          items: [
            'Athens rejects Mardonius’ peace offer',
            'Mardonius takes Athens a second time',
            'The Spartan army marches north under Pausanias',
            'Mardonius is killed at Plataea',
            'The Athenians take Sestos and the bridge cables',
            'The Delian League is founded on Delos',
          ],
          explain:
            'From Mardonius’ offer to the new alliance took little more than a year. By the end of it, the Greeks had gone from defending their homes to taking the war to Persia — with Athens in charge at sea.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When was the battle of Plataea?',
          event: 'Plataea and Mycale',
          year: -479,
          min: -500,
          max: -420,
          tolerance: 2,
          anchors: [
            { year: -490, label: 'Marathon' },
            { year: -480, label: 'Salamis' },
            { year: -431, label: 'Athens and Sparta go to war' },
          ],
          explain:
            '479 BCE, one year after Salamis. Within 50 years, Athens and Sparta — side by side at Plataea — would be at war with each other.',
        },
        {
          type: 'recap',
          prompt: 'How did the Greeks finally end the Persian invasion — and what did victory turn into?',
          keyPoints: [
            'Athens refused Mardonius’ offer of a separate peace',
            'Herodotus counts 38,700 hoplites, about 110,000 men in all — the largest Greek army yet',
            'In a close fight, hoplites in a phalanx beat lightly armoured Persian infantry; Mardonius died',
            'The Greek fleet burned the last Persian fleet at Mycale',
            'In 478/477 Athens took the lead of a new alliance, the Delian League',
          ],
          model:
            'In 479 Mardonius offered Athens peace; Athens refused, and a huge Greek army under the Spartan Pausanias met him at Plataea. When the fighting came to close quarters, heavily armoured hoplites beat the lightly armoured Persians, and Mardonius was killed. The Greek fleet burned the Persian fleet at Mycale, and the invasion was over. The Greeks then took the war to Persia, and in 478/477 Athens became leader of the Delian League.',
        },
      ],
      cards: [
        {
          id: 'sal-date-plataea',
          kind: 'date',
          year: -479,
          front: 'When did the Greeks win at Plataea and Mycale, ending the invasion?',
          back: '479 BCE',
          choices: ['490 BCE', '480 BCE', '431 BCE'],
          hook: 'One year after Salamis: 480 at sea, 479 on land.',
        },
        {
          id: 'sal-person-mardonius',
          kind: 'person',
          front: 'Which Persian general stayed in Greece after Salamis and died at Plataea?',
          back: 'Mardonius',
          choices: ['Hydarnes', 'Artabanus', 'Ariabignes'],
        },
        {
          id: 'sal-person-pausanias',
          kind: 'person',
          front: 'Who commanded the Greek army at Plataea?',
          back: 'Pausanias of Sparta, Leonidas’ nephew',
          choices: ['Leonidas of Sparta', 'Themistocles of Athens', 'Leotychidas of Sparta'],
        },
        {
          id: 'sal-num-plataea',
          kind: 'number',
          front: 'How many hoplites does Herodotus count in the Greek army at Plataea?',
          back: '38,700 (about 110,000 men in all)',
          choices: ['4,000', '300,000', '1.7 million'],
        },
        {
          id: 'sal-concept-hoplite',
          kind: 'concept',
          front: 'What was a hoplite?',
          back: 'A Greek citizen foot soldier who paid for his own heavy bronze armour, big round shield and spear, and fought in a phalanx.',
        },
        {
          id: 'sal-concept-phalanx',
          kind: 'concept',
          front: 'What was a phalanx, and why did it drift to the right?',
          back: 'A block of hoplites, usually about eight ranks deep, shields overlapping. Each man edged right to shelter behind his neighbour’s shield.',
        },
        {
          id: 'sal-place-mycale',
          kind: 'place',
          front: 'Where did the Greeks destroy the last Persian fleet in 479?',
          back: 'At Mycale, on the Asian coast opposite Samos',
          choices: ['At Artemisium', 'At Salamis', 'In the Hellespont'],
        },
      ],
      teaser:
        'Seven years later, in a theatre below the burnt Acropolis, Athenians watch the Persian Queen Mother weep for Salamis. Who wrote the story of this war — and what did they leave out?',
    },

    // ─────────────────────────────────────────────────────────────── 6
    {
      id: 'who-tells-the-story',
      title: 'Who Tells the Story?',
      summary:
        'A playwright who probably fought at Salamis, a historian born in Xerxes’ empire, a missing Persian side — and what victory did to Athens.',
      question: 'Whose version of the Persian Wars do we have — and why does it matter who tells it?',
      previously:
        'In 479 the Greeks crushed Mardonius at Plataea and burned the last Persian fleet at Mycale. By 478/477 Athens led a new alliance, the Delian League.',
      steps: [
        {
          type: 'story',
          title: 'Persians on stage',
          lenses: ['history'],
          body: [
            'Athens, spring 472 BCE. Below the burnt Acropolis, thousands of citizens — many of them rowers from Salamis — sit in the Theatre of Dionysus for a new play by Aeschylus.',
            'It is called The Persians. The man paying for the production is a wealthy young aristocrat named Pericles, son of Xanthippus, who led the Athenians at Mycale.',
            'The audience knows how this story ends. Many of them were there.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'philosophy'],
          prompt: 'A play about Athens’ greatest victory, for an audience of veterans. Where do you think Aeschylus set it?',
          options: [
            'On the deck of an Athenian trireme',
            'In the Assembly at Athens',
            'At the Persian royal court in Susa',
            'On Mount Aigaleos, beside Xerxes',
          ],
          answer: 2,
          reveal:
            'At the Persian court. The chorus are Persian elders; the Queen Mother — Darius’ widow, Xerxes’ mother — waits for news. A messenger arrives with the disaster. Not one Greek is named in the whole play. The winners watch the losers grieve.',
        },
        {
          type: 'explain',
          term: 'Greek tragedy',
          lenses: ['history', 'philosophy'],
          plain:
            'A serious play performed at Athens’ spring festival of the god Dionysus, with a few masked actors and a singing, dancing chorus. Playwrights competed for a prize. Most tragedies retold old myths; The Persians, about events only eight years old, is unusual — and the oldest Greek play that survives.',
          analogy:
            'Imagine a film about a recent war premiering at a national festival, with the soldiers who fought it in the audience.',
          why: 'Aeschylus was no armchair writer. He fought at Marathon, where his brother died, and ancient sources say he fought at Salamis too. His play, which won first prize, is the earliest account of the battle we have.',
        },
        {
          type: 'explain',
          term: 'Hubris',
          lenses: ['religion', 'philosophy'],
          plain:
            'Arrogance that oversteps human limits — acting as if you were a god. Greeks believed the gods punished it.',
          analogy: 'The star player who thinks the rules don’t apply to him — until they do.',
          why: 'In the play, the ghost of Darius blames his son: Xerxes put the Hellespont in chains, as if he could master the sea god himself. Herodotus tells the war the same way. It is a religious explanation — and a flattering one for the winners.',
        },
        {
          type: 'story',
          title: 'The historian from Halicarnassus',
          lenses: ['history', 'philosophy'],
          body: [
            'Herodotus wrote about 40–50 years after the war, from interviews. Most of his informants were Greeks, many of them Athenians — and it shows.',
            'Yet he tries to be fair. The Athenians told him the Corinthian ships fled at the start of Salamis; he adds that the Corinthians deny it, and that the rest of Greece backs them.',
            'His rule, he explains, is to report what people say — though he is not obliged to believe it all.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'philosophy'],
          prompt: 'Aeschylus and Herodotus both give the Persian fleet 1,207 ships. Does that prove the number?',
          options: [
            'Yes — two separate sources agree, so it must be right',
            'No — Herodotus may have taken it from Aeschylus or the same Athenian tradition, so they aren’t independent',
            'Yes — Aeschylus was an eyewitness who could count them',
            'No — the Persians had no warships of their own',
          ],
          answer: 1,
          explain:
            'Agreement is strong evidence only if the sources didn’t copy each other. Herodotus probably knew the famous play: two tellings of one story are still one story. Modern estimates, based on what could be built, crewed and fed, are far lower — perhaps 600–800 ships at Salamis.',
        },
        {
          type: 'story',
          title: 'The missing side',
          lenses: ['history', 'politics'],
          body: [
            'No Persian account of the war survives. Persian kings carved inscriptions listing their peoples, palaces and gods; none describes the war in Greece.',
            'Seen from Persepolis, it may have looked like a costly failure on a far frontier. The empire stayed rich and powerful for another 150 years, until Alexander the Great conquered it in 330 BCE.',
            'Everything you have learned in this track comes from the winners’ side.',
          ],
        },
        {
          type: 'story',
          title: 'West against East?',
          lenses: ['politics', 'philosophy'],
          body: [
            'Later writers turned these battles into a clash of civilisations: free Europe against tyrannical Asia. In 1846 the British philosopher John Stuart Mill judged Marathon more important, even for English history, than the Battle of Hastings.',
            'The idea was bent to darker uses. In 1943 the Nazi leader Hermann Göring compared German soldiers dying at Stalingrad to Leonidas at Thermopylae. The 2007 film 300 painted the Persians as monsters; Iran’s government protested.',
          ],
        },
        {
          type: 'match',
          lenses: ['history', 'politics'],
          prompt: 'The trouble with “Greeks versus Persians”: whose side was each on?',
          categories: ['With the Greek alliance', 'With Xerxes'],
          items: [
            { text: 'The Thespians at Thermopylae', category: 'With the Greek alliance' },
            { text: 'Aegina’s ships at Salamis', category: 'With the Greek alliance' },
            { text: 'The town of Plataea', category: 'With the Greek alliance' },
            { text: 'The Thebans at Plataea', category: 'With Xerxes' },
            { text: 'Artemisia of Halicarnassus', category: 'With Xerxes' },
            { text: 'Ionian Greek crews at Salamis', category: 'With Xerxes' },
            { text: 'Demaratus, an exiled king of Sparta', category: 'With Xerxes' },
          ],
          explain:
            'Greeks fought on both sides, and the war’s own historian was born a Persian subject. “Greece against Persia” really means some Greek cities, allied with each other, against a many-peopled empire that included many other Greeks.',
        },
        {
          type: 'explain',
          term: 'Thetes',
          lenses: ['politics', 'economics'],
          plain:
            'The poorest class of Athenian citizens: labourers and men with little or no land, who could not afford a hoplite’s armour. They could vote in the Assembly, but carried little weight in war or politics.',
          analogy:
            'Like club members who may attend meetings but whose opinion nobody asks — until the club finds it can’t survive without them.',
          why: 'Triremes needed rowers, not armour. Athens’ 180 ships at Salamis needed over 30,000 oarsmen, and thetes filled the benches. The navy made the poor indispensable.',
        },
        {
          type: 'story',
          title: 'Did oars make democracy?',
          lenses: ['politics', 'history'],
          body: [
            'Ancient writers thought so. Aristotle says the sailors who won Salamis made Athens’ democracy stronger. A hostile pamphleteer nicknamed the “Old Oligarch” grudgingly admitted that the poor had a claim to power, because they rowed the ships that made Athens strong.',
            'In 462 a reformer called Ephialtes — no relation to the traitor of Thermopylae — stripped the old aristocratic council of most of its powers. Soon after, citizens began to be paid for public service, so even poor men could afford to take part.',
          ],
        },
        {
          type: 'story',
          title: 'The historians’ argument',
          lenses: ['politics', 'philosophy'],
          body: [
            'Not everyone agreed. Plato, no friend of democracy, credited the hoplite victories of Marathon and Plataea with saving Greece, and said the sea battles did not make Greeks better men.',
            'Modern historians still argue. Athens was a democracy before it had a big fleet; hoplites kept fighting and voting; later, many rowers were hired foreigners or slaves. Yet most agree that a navy rowed by poor citizens gave the poor a louder voice.',
          ],
        },
        {
          type: 'compare',
          lenses: ['history'],
          prompt: 'Four battles, one grid. Fill in the blanks.',
          columns: ['Marathon', 'Thermopylae', 'Salamis', 'Plataea'],
          rows: [
            { label: 'Year', cells: ['490 BCE', '480 BCE (summer)', '480 BCE (September)', '479 BCE'] },
            {
              label: 'Land or sea',
              cells: ['Land — a coastal plain', 'Land — a narrow pass', 'Sea — a narrow strait', 'Land — foothills and farmland'],
            },
            {
              label: 'Outcome',
              cells: ['Athenian win; Persians sail away', 'Persian win on the third day', 'Greek win; Xerxes heads home', 'Greek win; invasion ends'],
            },
            {
              label: 'Key leader',
              cells: ['Miltiades (Athens)', 'Leonidas (Sparta)', 'Themistocles (Athens)', 'Pausanias (Sparta)'],
            },
          ],
          blanks: [
            [0, 0, ['499 BCE', '486 BCE']],
            [1, 2, ['Land — a river valley', 'Sea — the open Aegean']],
            [2, 1, ['Greek win; Persians turn back', 'Draw; both sides withdraw']],
            [3, 3, ['Eurybiades (Sparta)', 'Xanthippus (Athens)']],
          ],
          explain:
            'Only one of the four was a Persian win — and it is the most famous. Stories love a brave defeat, but wars are decided by victories like Salamis and Plataea.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When was Aeschylus’ The Persians first performed?',
          event: 'The Persians staged in Athens',
          year: -472,
          min: -500,
          max: -400,
          tolerance: 4,
          anchors: [
            { year: -480, label: 'Salamis' },
            { year: -447, label: 'Parthenon begun' },
            { year: -431, label: 'Athens and Sparta go to war' },
          ],
          explain:
            '472 BCE, just eight years after Salamis. Herodotus was then a boy of about 12 in Halicarnassus; he would finish his Histories some 45 years later, around the time Athens and Sparta went to war.',
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Final review: put the whole story in order.',
          items: [
            'Athenians beat a Persian landing at Marathon',
            'Athens votes to spend its Laurion silver on triremes',
            'Xerxes’ army crosses the Hellespont',
            'Leonidas falls at Thermopylae',
            'The Persians burn the Acropolis',
            'Themistocles’ trap springs at Salamis',
            'Mardonius dies at Plataea',
            'The Delian League is founded',
            'Aeschylus stages The Persians',
          ],
          explain:
            'Eighteen years from Marathon to the first play about the war. Along the way: geography, oracles, game theory, trireme engineering, hoplite warfare — and the question every historian must ask: who is telling this story?',
        },
        {
          type: 'recap',
          prompt:
            'In a few sentences: how did a handful of Greek cities defeat Xerxes’ invasion — and why should we be careful about how the story is told?',
          keyPoints: [
            'Xerxes invaded in 480 to avenge Sardis and Marathon; Athens met him with a fleet paid for by silver',
            'Thermopylae and Artemisium delayed him; Athens was evacuated and the Acropolis burned',
            'At Salamis a narrow strait and Themistocles’ trick broke the Persian navy',
            'Plataea and Mycale (479) ended the invasion; Athens went on to lead the Delian League',
            'Our sources, Aeschylus and Herodotus, are Greek — so the numbers and heroics need checking',
            'Naval victory gave Athens’ poor rowers political weight — a link historians still debate',
          ],
          model:
            'Xerxes invaded Greece in 480 BCE to punish Athens, which had spent its silver on triremes. The Greeks lost at Thermopylae and abandoned Athens, but Themistocles lured the Persian fleet into the narrow strait of Salamis, where numbers counted for little, and destroyed it; in 479 hoplites finished the job at Plataea, and the fleet won at Mycale. Almost everything we know comes from Greeks like Aeschylus and Herodotus, so their numbers are inflated and the Persian side is missing — and later writers turned the war into a “West against East” myth. For Athens, the victory made the poor rowers indispensable, which many historians link to a stronger democracy.',
        },
      ],
      cards: [
        {
          id: 'sal-date-persians',
          kind: 'date',
          year: -472,
          front: 'When was Aeschylus’ play The Persians first staged?',
          back: '472 BCE — eight years after Salamis',
          choices: ['480 BCE', '430 BCE', '399 BCE'],
          hook: 'Eight years after the battle, and the oldest Greek play that survives.',
        },
        {
          id: 'sal-person-aeschylus',
          kind: 'person',
          front: 'Which Athenian playwright, probably a veteran of Salamis, wrote The Persians?',
          back: 'Aeschylus',
          choices: ['Sophocles', 'Euripides', 'Aristophanes'],
        },
        {
          id: 'sal-concept-independent-sources',
          kind: 'concept',
          front: 'Why doesn’t the match between Aeschylus’ and Herodotus’ 1,207 Persian ships prove the number?',
          back: 'The sources may not be independent: Herodotus could have taken the figure from the play or the same Athenian tradition. Agreement counts only when sources didn’t copy each other.',
        },
        {
          id: 'sal-concept-thetes',
          kind: 'concept',
          front: 'Which Athenian class rowed the triremes and gained political weight after Salamis?',
          back: 'The thetes, the poorest citizens',
          choices: [
            'The hoplites, farmers who bought their own armour',
            'The cavalry class, the richest citizens',
            'The helots, serfs owned by the state',
          ],
        },
        {
          id: 'sal-compare-persian-win',
          kind: 'compare',
          front: 'Marathon, Thermopylae, Salamis, Plataea: which was a Persian victory?',
          back: 'Thermopylae (480 BCE)',
          choices: ['Marathon (490 BCE)', 'Salamis (480 BCE)', 'Plataea (479 BCE)'],
        },
        {
          id: 'sal-concept-west-east',
          kind: 'concept',
          front: 'What’s wrong with calling the Persian Wars a clash of “West against East”?',
          back: 'Many Greeks fought for Persia (Thebes, the Ionians, Artemisia’s Halicarnassus), the Persian side of the story is missing, and the idea was later bent to serve modern politics — even Nazi propaganda.',
        },
        {
          id: 'sal-concept-herodotus-method',
          kind: 'concept',
          front: 'What did Herodotus do when his sources disagreed?',
          back: 'He reported the competing versions — and said he must record what people told him, but need not believe it all.',
        },
      ],
    },
  ],
}
