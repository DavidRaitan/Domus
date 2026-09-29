import type { Track } from '../types'

// Sources for figures used here: Arrian, Anabasis 1.11–13 (army and fleet of 334); Diodorus Siculus 16.2,
// 16.86, 16.91–94, 17.14, 17.17; Plutarch, Alexander 6–8, 9, 11; Polybius 18.29–30 (sarissa and phalanx
// depth); Theophrastus, Enquiry into Plants 3.12.2 (sarissa length); Aristotle, On the Heavens 2.14;
// Bosworth, Conquest and Empire (1988); Lane Fox, Alexander the Great (1973); Worthington, Philip II of
// Macedonia (2008); Sekunda, The Macedonian Army; Britannica. Ancient figures are given as ranges where
// sources disagree.

const ALEXANDERS_WORLD = { west: 15, south: 20, east: 80, north: 46 }

export const alexander: Track = {
  id: 'alexander',
  series: 'classical',
  tier: 3,
  title: 'Alexander',
  tagline: 'He inherited a new kind of army at twenty, conquered the known world by thirty, and died at thirty-two.',
  lenses: ['history', 'geography', 'philosophy', 'science'],
  era: [-336, -323],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'king-at-twenty',
      title: 'The King at Twenty',
      summary: 'A murdered father, a philosopher tutor, and an army built around a 5.5-metre pike.',
      question: 'What did Alexander inherit at twenty — and why could it take on the Persian Empire?',
      previously:
        'Persia’s invasion of Greece failed at Salamis (480 BCE). A century later, Athens had lost its long war with Sparta (404) and executed Socrates (399). Socrates’ student Plato taught Aristotle — and in the north, a new power was rising.',
      steps: [
        {
          type: 'orient',
          title: 'Alexander',
          from: -356,
          to: -323,
          places: [
            { name: 'Pella', lon: 22.52, lat: 40.76 },
            { name: 'Athens', lon: 23.73, lat: 37.98 },
            { name: 'Alexandria', lon: 29.92, lat: 31.2 },
            { name: 'Babylon', lon: 44.42, lat: 32.54 },
            { name: 'Hydaspes River', lon: 73.7, lat: 32.9, label: 'left' },
          ],
          placesNote:
            'From the Macedonian capital Pella to the Hydaspes River in today’s Pakistan is about 4,700 km in a straight line. Alexander’s army walked far more than that.',
          mapBounds: ALEXANDERS_WORLD,
          lenses: ['history', 'geography'],
          why: 'In thirteen years Alexander tore down the Persian Empire and spread Greek language, cities and learning from Egypt to India, creating a Greek-speaking world that lasted for centuries.',
          context: [
            'The Persian Empire still runs from Egypt to the Indus. A new king, Darius III, takes the throne in 336 BCE — the same year as Alexander.',
            'The Greek cities are worn out by a century of wars with each other. Athens is still a democracy, and still the centre of Greek learning.',
            'Plato died about a dozen years ago. His star pupil Aristotle is about to open his own school in Athens, the Lyceum (335 BCE).',
            'Rome is fighting its way to control of central Italy, barely noticed in the Greek east.',
            'In India, the Nanda kings rule the Ganges valley. China is split into rival kingdoms, the Warring States.',
          ],
        },
        {
          type: 'story',
          title: 'Death in the theatre',
          lenses: ['history', 'politics'],
          body: [
            'Aegae, Macedon, 336 BCE. The theatre is packed for a royal wedding. King Philip II, who has made his northern kingdom master of Greece, walks in dressed in white, his guards held back so the crowd can see him.',
            'One of his own bodyguards, Pausanias, runs forward and stabs him. Philip dies on the spot.',
            'Rumours blamed his wife Olympias, the Persians, even his son. Nobody knows. The son, Alexander, is 20 — and the army hails him as king.',
          ],
        },
        {
          type: 'explain',
          term: 'Macedon',
          lenses: ['geography', 'history'],
          plain:
            'A kingdom in the north of Greece, with wide plains, forests, horses and gold mines. Many southern Greeks looked down on Macedonians as rough northerners — though the royal family claimed Greek descent and competed at the Olympic Games.',
          analogy:
            'The big country cousin the city relatives never took seriously — until it became the strongest one in the family.',
          why: 'When Philip became king in 359 BCE, Macedon had just lost its previous king and 4,000 soldiers in battle against the Illyrians, its neighbours to the west. Twenty years later it ruled Greece. Philip’s army was the reason.',
        },
        {
          type: 'explain',
          term: 'Phalanx',
          lenses: ['history', 'science'],
          plain:
            'A block of foot soldiers standing shoulder to shoulder, many rows deep, moving and fighting as one.',
          analogy:
            'A rugby scrum with spears: each player alone is ordinary; locked together, they are a wall.',
          why: 'Greek armies had fought in phalanxes for centuries. As a teenage hostage in Thebes, then the strongest city in Greece, Philip had studied its army closely. As king, he kept the phalanx but changed its weapon.',
        },
        {
          type: 'predict',
          lenses: ['history', 'science'],
          prompt:
            'An ordinary Greek soldier’s spear was about 2–2.5 m long. How long was the pike Philip gave his men?',
          options: ['About 2 m', 'About 3 m', 'About 5.5 m', 'About 12 m'],
          answer: 2,
          reveal:
            'About 5.5 m — roughly three tall adults lying head to toe. It was called the sarissa. It needed both hands, so the shield shrank to a small disc hung from the neck and shoulder. Later versions grew to over 6 m.',
        },
        {
          type: 'story',
          title: 'A hedge of iron points',
          lenses: ['science', 'history'],
          body: [
            'Line men up 16 rows deep with sarissas lowered, and something striking happens. Because the pikes are so long, the historian Polybius explains, the points of the first five rows all stick out in front of the front man.',
            'An enemy with an ordinary spear meets a hedge of iron points before he can reach anyone.',
            'The catch: a phalanx is slow to turn, weak at the sides and back, and can split apart on rough ground. It needed help.',
          ],
        },
        {
          type: 'explain',
          term: 'Hammer and anvil',
          lenses: ['history'],
          plain:
            'Philip’s battle plan used two forces together. The phalanx — the anvil — pinned the enemy from the front. Then the Companions, heavy cavalry of Macedonian nobles riding with the king, struck like a hammer through a gap or into the enemy’s side.',
          analogy:
            'In football, one player holds the defender’s attention while a teammate sprints into the space behind him.',
          why: 'Neither force could win alone. Together, they would beat much bigger armies, again and again.',
        },
        {
          type: 'choice',
          lenses: ['history'],
          prompt: 'In the “hammer and anvil,” what was the phalanx’s job?',
          options: [
            'To charge fast and chase down fleeing enemies',
            'To hold the enemy in place from the front',
            'To guard the baggage behind the lines',
            'To shoot arrows from long range',
          ],
          answer: 1,
          explain:
            'The phalanx was the anvil: slow, solid and hard to break. It kept the enemy busy and in place, so the Companion cavalry had something to strike against.',
        },
        {
          type: 'story',
          title: 'The philosopher at Mieza',
          lenses: ['philosophy', 'history'],
          body: [
            'In 343 BCE Philip hired a tutor for his 13-year-old son: Aristotle, who had studied for 20 years in Athens under Plato — Socrates’ student.',
            'For about three years, at a quiet sanctuary at Mieza, Aristotle taught Alexander and a group of noble boys. Part of his fee, Plutarch says, was that Philip rebuild Aristotle’s home town, Stagira — which Philip himself had destroyed.',
            'Plutarch also says Alexander later slept with Aristotle’s edition of Homer’s Iliad under his pillow, beside a dagger.',
          ],
        },
        {
          type: 'story',
          title: 'Look before you believe',
          lenses: ['science', 'philosophy'],
          body: [
            'Aristotle taught that knowledge starts with careful looking. He dissected animals and sorted hundreds of species into groups.',
            'He also gave evidence that the Earth is a sphere. During an eclipse of the Moon, the Earth’s shadow on the Moon is always curved. And as you travel south, new stars rise above the horizon.',
            'Remember this. About a century later, in a city Alexander has not yet founded, a scholar will measure how big that sphere is.',
          ],
        },
        {
          type: 'story',
          title: 'Chaeronea, and a plan',
          lenses: ['history', 'politics'],
          body: [
            'In 338 BCE Athens and Thebes finally united against Philip at Chaeronea. Alexander, just 18, commanded the cavalry on one wing and broke through the Thebans. Macedon won.',
            'Philip gathered the Greek cities into a league at Corinth and announced a war on Persia — revenge, he said, for the temples Xerxes burned in 480.',
            'His advance troops had already crossed into Asia when Pausanias struck.',
          ],
        },
        {
          type: 'story',
          title: 'King at twenty',
          lenses: ['history', 'politics'],
          body: [
            'Greek cities thought a 20-year-old could be ignored. In 335 BCE Thebes rebelled on a false rumour that Alexander was dead.',
            'He marched south at speed and destroyed the city. Ancient writers say 6,000 were killed and 30,000 sold into slavery; only the temples and the house of the poet Pindar were spared.',
            'The message reached every Greek city. In spring 334, Alexander turned east, towards the Hellespont.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['history'],
          prompt:
            'In spring 334 BCE Alexander crossed the Hellespont into Asia — the same strait Xerxes had bridged the other way. About how many soldiers did he take?',
          min: 0,
          max: 150000,
          step: 1000,
          unit: 'soldiers',
          answer: 36000,
          tolerance: 6000,
          explain:
            'Arrian gives just over 30,000 foot soldiers and more than 5,000 cavalry, with about 160 warships; Diodorus gives similar numbers. Roughly 35,000–40,000 men — against an empire that could put a fleet of around 400 ships to sea.',
        },
        {
          type: 'compare',
          lenses: ['history', 'geography'],
          prompt: 'Two crossings of the same strait, 146 years apart. Fill in the blanks.',
          columns: ['Xerxes, 480 BCE', 'Alexander, 334 BCE'],
          rows: [
            { label: 'Direction', cells: ['Asia → Europe', 'Europe → Asia'] },
            { label: 'How he crossed', cells: ['Two bridges of boats', 'About 160 warships plus transports'] },
            { label: 'Army (best estimates)', cells: ['About 100,000–300,000', 'About 35,000–40,000'] },
            { label: 'Stated aim', cells: ['Punish Athens, conquer Greece', 'Avenge Xerxes’ invasion'] },
            { label: 'Leader’s age', cells: ['Late thirties', '21'] },
          ],
          blanks: [
            [0, 1],
            [2, 1],
            [3, 1],
            [4, 1],
          ],
          explain:
            'Same water, opposite direction, a far smaller army — and a much younger king. Xerxes brought overwhelming numbers. Alexander brought a better-drilled machine.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Alexander cross into Asia?',
          event: 'Alexander crosses into Asia',
          year: -334,
          min: -550,
          max: 0,
          tolerance: 10,
          anchors: [
            { year: -480, label: 'Salamis' },
            { year: -399, label: 'Socrates executed' },
            { year: -44, label: 'Caesar killed' },
          ],
          explain:
            '334 BCE — 146 years after Xerxes crossed the other way, and 65 years after Socrates died. Alexander’s teacher’s teacher’s teacher was Socrates.',
        },
        {
          type: 'recap',
          prompt: 'What did Alexander inherit at twenty — and why could it take on the Persian Empire?',
          keyPoints: [
            'Philip II turned Macedon from a battered kingdom into the master of Greece',
            'The sarissa phalanx pinned enemies while the Companion cavalry struck: hammer and anvil',
            'Aristotle tutored Alexander and taught him to observe',
            'After Chaeronea (338), Philip planned war on Persia as revenge for 480',
            'Philip was murdered in 336; Alexander crushed Thebes and crossed to Asia in 334',
          ],
          model:
            'Alexander inherited his father Philip’s army: a phalanx of long sarissa pikes that pinned the enemy, and Companion cavalry that struck the decisive blow. He also inherited Philip’s control of Greece, won at Chaeronea, and his plan for a war of revenge on Persia. Tutored by Aristotle, crowned at 20 after Philip’s murder, he crushed Thebes’ revolt and crossed into Asia in 334 with about 35,000–40,000 well-drilled men.',
        },
      ],
      cards: [
        {
          id: 'alx-date-philip-killed',
          kind: 'date',
          year: -336,
          front: 'When was Philip II assassinated, making Alexander king?',
          back: '336 BCE',
          choices: ['399 BCE', '323 BCE', '480 BCE'],
          hook: 'Alexander was 20; he would reign just 13 years (336–323).',
        },
        {
          id: 'alx-num-sarissa',
          kind: 'number',
          front: 'How long was the Macedonian sarissa pike?',
          back: 'About 5.5 m (later over 6 m) — more than twice an ordinary Greek spear',
          choices: ['About 1 m', 'About 2 m', 'About 12 m'],
          hook: 'Three tall adults lying head to toe.',
        },
        {
          id: 'alx-concept-hammer-anvil',
          kind: 'concept',
          front: 'What was the “hammer and anvil”?',
          back: 'The phalanx (anvil) pinned the enemy from the front while the Companion cavalry (hammer) struck its side or a gap.',
        },
        {
          id: 'alx-person-aristotle',
          kind: 'person',
          front: 'Who tutored the teenage Alexander at Mieza?',
          back: 'Aristotle — student of Plato, who was a student of Socrates',
          choices: ['Socrates', 'Herodotus', 'Thucydides'],
        },
        {
          id: 'alx-date-crossing',
          kind: 'date',
          year: -334,
          front: 'When did Alexander cross the Hellespont into Asia?',
          back: '334 BCE',
          choices: ['480 BCE', '338 BCE', '323 BCE'],
          hook: '146 years after Xerxes crossed the other way (480).',
        },
        {
          id: 'alx-cause-persian-war',
          kind: 'cause',
          front: 'What reason did Philip give the Greeks for a war on Persia?',
          back: 'Revenge for Xerxes’ invasion of 480 BCE and the temples it burned',
          choices: [
            'Persia had seized Macedon’s gold mines',
            'An oracle ordered it',
            'Persia had banned Greek ships from the Aegean',
          ],
        },
        {
          id: 'alx-concept-round-earth',
          kind: 'concept',
          front: 'What evidence did Aristotle give that the Earth is a sphere?',
          back: 'The Earth’s shadow on the Moon during an eclipse is always curved — and travelling south, new stars appear above the horizon.',
        },
      ],
      teaser:
        'Across the strait, Persian governors wait with their army behind the River Granicus. Alexander’s senior general, Parmenion, urges him to wait until morning. Alexander has other ideas.',
    },
  ],
  upcoming: [
    {
      title: 'Granicus and Issus',
      summary:
        '334–333 BCE: a charge across a river, a knot at Gordium, and the moment Darius III himself turns his chariot and flees.',
    },
    {
      title: 'Tyre, Egypt and a New City',
      summary:
        '332–331 BCE: a seven-month siege of an island city, a welcome in Egypt, and the founding of Alexandria — where Greek science will one day flourish.',
    },
    {
      title: 'Gaugamela',
      summary:
        '331 BCE: how to feed and water tens of thousands of men and horses on the march — and the battle that ends the Persian Empire. Then Persepolis burns.',
    },
    {
      title: 'To the Edge of the World',
      summary:
        '329–325 BCE: war in the mountains of Bactria, a battle against King Porus at the Hydaspes in monsoon rain and war elephants — and an army that finally refuses to go on.',
    },
    {
      title: 'Death in Babylon',
      summary:
        '323 BCE: Alexander dies at 32 and his generals carve up the empire. In Alexandria, Eratosthenes later measures the Earth using shadows and a little geometry.',
    },
  ],
}
