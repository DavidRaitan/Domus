import type { Track } from '../types'

// Sources for figures used here: Herodotus, Histories (esp. 5.52–53 Royal Road; 5.97, 5.105; 6.117;
// 7.34–36, 7.44–46, 7.56, 7.60, 7.144, 7.186; 8.44); Aristotle (school of), Athenaion Politeia 22.7;
// Plutarch, Themistocles 4; Cicero, De Legibus 1.5; Morrison, Coates & Rankov, The Athenian Trireme
// (2nd ed., 2000) and the Olympias sea trials; Cawkwell, The Greek Wars (2005); Green, The Greco-Persian
// Wars (1996); Kuhrt, The Persian Empire (2007); Hansen & Nielsen, An Inventory of Archaic and Classical
// Poleis (2004); Britannica. Herodotus’ army numbers are set against modern estimates, given as ranges.

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
  ],
  upcoming: [
    {
      title: 'The Hot Gates',
      summary:
        'Summer 480: 300 Spartans and several thousand allies hold the pass of Thermopylae for three days while the fleets clash off Artemisium — until a local man shows the Persians a mountain path.',
    },
    {
      title: 'The Wooden Wall',
      summary:
        'The oracle at Delphi tells Athens to trust a “wooden wall.” Themistocles says it means ships. The city is evacuated, and Xerxes burns the Acropolis.',
    },
    {
      title: 'The Trap in the Strait',
      summary:
        'September 480: a secret message lures Xerxes’ fleet into the narrow channel off Salamis — and we see why a strait only a kilometre or two wide cancels a bigger navy.',
    },
    {
      title: 'Plataea and Mycale',
      summary:
        '479: Xerxes goes home, but his general Mardonius stays with the army. One of the largest Greek armies ever gathered ends the invasion on land, and the Greek fleet strikes back across the Aegean.',
    },
    {
      title: 'Who Tells the Story?',
      summary:
        'A playwright who probably fought at Salamis, a historian born in Xerxes’ empire — and what victory did to Athens: a navy of poor rowers, a stronger democracy, and the seeds of an empire.',
    },
  ],
}
