import type { Track } from '../types'

// Sources for figures used here: Sagan, The Dragons of Eden (1977) for the cosmic calendar (recomputed
// for 13.8 bn years); Hublin et al., Nature 546 (2017) (Jebel Irhoud); Clarkson et al., Nature 547 (2017)
// (Madjedbebe); Bennett et al., Science 373 (2021) (White Sands); Cline, 1177 B.C. (2014);
// Jaspers, The Origin and Goal of History (1949); Scheidel (Rome/Han populations); Crosby, The Columbian
// Exchange (1972); Koch et al., Quaternary Science Reviews 207 (2019); SlaveVoyages.org (Trans-Atlantic
// Slave Trade Database); Maddison Project; UN World Population Prospects; Our World in Data
// (life expectancy, child mortality); Britannica. Contested figures are given as ranges.

// Cosmic calendar arithmetic: 13.8 bn years ÷ 365 days ≈ 37.8 million years per day
// ≈ 26,250 years per minute ≈ 438 years per second.

const OLD_WORLD = { west: -20, south: -38, east: 150, north: 62 }
const RIVER_VALLEYS = { west: 20, south: 8, east: 125, north: 48 }
const AXIAL_WORLD = { west: -8, south: 8, east: 125, north: 52 }
const CONNECTED = { west: -15, south: -2, east: 135, north: 60 }
const ATLANTIC = { west: -110, south: -38, east: 45, north: 62 }
const REVOLUTIONS = { west: -95, south: -10, east: 40, north: 60 }
const WHOLE_WORLD = { west: -130, south: -40, east: 150, north: 68 }

export const startingPoint: Track = {
  id: 'starting-point',
  series: 'start',
  tier: 1,
  title: 'Starting Point: The Whole Story',
  tagline:
    'Three hundred thousand years in seven lessons. Build the map of all human history — so every story you learn next has a place to land.',
  lenses: ['history', 'geography', 'economics', 'philosophy', 'religion', 'medicine', 'science'],
  era: [-300000, 2025],
  free: true,
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'yardstick-and-wanderers',
      title: 'The Yardstick & The Wanderers',
      summary: 'How long is history, really? Then: how one African species spread across the whole planet.',
      question: 'How long is the human story — and how did one species from Africa end up everywhere?',
      steps: [
        {
          type: 'orient',
          title: 'The Whole Human Story',
          from: -3500,
          to: 2025,
          places: [
            { name: 'East Africa', lon: 37, lat: 3 },
            { name: 'Mesopotamia', lon: 45, lat: 32 },
            { name: 'Egypt', lon: 31, lat: 27, label: 'left' },
            { name: 'China', lon: 112, lat: 34, label: 'left' },
            { name: 'Rome', lon: 12.5, lat: 41.9, label: 'left' },
          ],
          placesNote:
            'Our species began in Africa. Most of the stories in Domus happen on this one landmass: Africa, Europe and Asia joined together.',
          mapBounds: OLD_WORLD,
          lenses: ['history', 'geography'],
          why: 'Every story you will ever learn — a battle, a plague, an empire — happened at a when and a where. With a map of the whole story in your head, each new one clicks into place instead of floating alone.',
          context: [
            'The timeline above starts about 3500 BCE, just before writing is invented in today’s Iraq. Everything earlier is prehistory — known from bones, tools and DNA, not documents.',
            'By then, humans have already reached every continent except Antarctica.',
            'Farming is thousands of years old, and the first cities are rising beside the Tigris and Euphrates rivers.',
            'Nobody has yet built a pyramid, minted a coin or written a sentence.',
            'Our species is already about 300,000 years old. All of written history will fill less than the last 2% of that.',
          ],
        },
        {
          type: 'story',
          title: 'Joining the film halfway through',
          lenses: ['history'],
          body: [
            'Open almost any history book and you land in the middle: a Persian king watching his fleet sink at Salamis, Mongol riders at the gates of Baghdad, a plague ship in Sicily.',
            'Who are these people? What came before them? What happened next? It feels like walking into a cinema 90 minutes into the film.',
            'This track is the first 90 minutes. Seven lessons, the whole story — so you always know where you are.',
          ],
        },
        {
          type: 'explain',
          term: 'The cosmic calendar',
          lenses: ['science', 'history'],
          plain:
            'A way to picture huge spans of time: squeeze the entire 13.8-billion-year history of the universe into a single calendar year. The Big Bang is midnight on 1 January; right now is midnight on 31 December.',
          analogy:
            'Like a scale model of the solar system on a football pitch: numbers too big to feel become distances you can picture.',
          why: 'At this scale, one day is about 37.8 million years and one second is about 438 years. The astronomer Carl Sagan made the idea famous in 1977.',
        },
        {
          type: 'predict',
          lenses: ['science'],
          prompt: 'On the cosmic calendar, when does the Earth form (about 4.5 billion years ago)?',
          options: ['In March', 'In early September', 'In mid-December', 'On 31 December'],
          answer: 1,
          reveal:
            'Early September. For eight months there is no Earth at all. Life appears in late September — and then, for most of the autumn, it is nothing but single cells.',
        },
        {
          type: 'story',
          title: 'December',
          lenses: ['science', 'history'],
          body: [
            'The dinosaurs arrive around Christmas Day. On 30 December, an asteroid wipes them out, 66 million years ago.',
            'Our species, Homo sapiens, turns up at about 11:48 p.m. on 31 December — in the last 12 minutes of the year.',
            'Farming begins about 27 seconds before midnight. Columbus sails about one second before midnight. Your whole life is a few hundredths of a second.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['history', 'science'],
          prompt:
            'On the cosmic calendar, one second is about 438 years. Recorded history — everything since writing — is about 5,000 years long. How many seconds before midnight does it begin?',
          min: 0,
          max: 120,
          step: 1,
          unit: 'seconds',
          answer: 11,
          tolerance: 3,
          explain:
            '5,000 ÷ 438 ≈ 11.4 seconds. Every pharaoh, emperor, prophet and president fits into the last dozen seconds of the year. That is the stretch this track maps.',
        },
        {
          type: 'explain',
          term: 'Homo sapiens',
          lenses: ['science'],
          plain:
            'Latin for “wise human” — the scientific name of our species, the only kind of human alive today. There used to be others, such as the Neanderthals of Europe and western Asia.',
          analogy:
            'Like the last surviving branch of a family tree: we had cousins, but their lines ended.',
          why: 'Every person in history, from the pyramid builders to you, is the same species with the same kind of brain.',
        },
        {
          type: 'story',
          title: 'Born in Africa',
          lenses: ['history', 'geography', 'science'],
          body: [
            'The oldest known fossils of Homo sapiens, found at Jebel Irhoud in Morocco, are about 300,000 years old. Other early finds come from Ethiopia and elsewhere, so our species probably took shape across much of Africa.',
            'For most of our history, nearly every human lived in Africa. They were foragers: they hunted animals and gathered plants, moving with the seasons in small bands.',
          ],
        },
        {
          type: 'explain',
          term: 'The Ice Age',
          lenses: ['geography', 'science'],
          plain:
            'A long cold period, from about 115,000 to about 11,700 years ago. At its peak, around 20,000 years ago, ice sheets up to 3 km thick covered Canada and northern Europe.',
          analogy:
            'So much water was locked up in ice that sea level fell by about 120 metres — like draining the ocean down to the height of a 40-storey building.',
          why: 'Lower seas exposed land bridges, such as one between Siberia and Alaska. That is how people walked to places that are islands or separate continents today.',
        },
        {
          type: 'story',
          title: 'Out of Africa',
          lenses: ['history', 'geography'],
          body: [
            'About 60,000–70,000 years ago, groups of Homo sapiens left Africa and spread into Asia. (Earlier groups had left too, but they left few or no descendants alive today.)',
            'Along the way they met Neanderthals — and had children with them. Most people with ancestry outside Africa still carry about 1–2% Neanderthal DNA.',
            'By about 40,000 years ago the Neanderthals were gone. Why is still debated.',
          ],
        },
        {
          type: 'story',
          title: 'To the ends of the Earth',
          lenses: ['geography', 'history'],
          body: [
            'People reached Australia by about 50,000–65,000 years ago. Even with low Ice Age seas, getting there meant crossing open water: these were some of the world’s first sailors.',
            'The Americas came last. People crossed from Siberia to Alaska on the land bridge, or along its coast. They were in Chile by about 14,500 years ago. Footprints in New Mexico may push the arrival back past 20,000 years — scholars still argue.',
          ],
        },
        {
          type: 'order',
          lenses: ['history', 'geography'],
          prompt: 'Put the human journey in order, earliest first.',
          items: [
            'Homo sapiens appears in Africa',
            'Groups leave Africa and spread into Asia',
            'People reach Australia',
            'People reach the Americas',
            'Writing is invented in Mesopotamia',
          ],
          explain:
            'About 300,000 years ago → about 60–70,000 → by 50–65,000 → by at least 15,000 → about 5,200 years ago. Notice how much of the story happens before anyone could write it down.',
        },
        {
          type: 'choice',
          lenses: ['geography'],
          prompt: 'Why could people reach Australia at all, tens of thousands of years ago?',
          options: [
            'Australia was joined to Africa then',
            'They crossed open sea by boat or raft, helped by lower Ice Age sea levels',
            'They walked across the frozen Indian Ocean',
            'They didn’t — Australia’s first people came from the Americas',
          ],
          answer: 1,
          explain:
            'Low seas shortened the gaps between islands, but there was never a dry path. Reaching Australia took boats — proof that these early humans could plan, cooperate and build.',
        },
        {
          type: 'recap',
          prompt: 'How long is the human story — and how did one species from Africa end up everywhere?',
          keyPoints: [
            'On a one-year cosmic calendar, humans appear in the last 12 minutes; recorded history is the last ~11 seconds',
            'Homo sapiens appeared in Africa about 300,000 years ago',
            'Groups left Africa about 60–70,000 years ago, reaching Australia by boat and the Americas via Siberia',
            'The Ice Age lowered seas and opened land bridges',
          ],
          model:
            'If the universe’s history were one year, humans would appear in the last 12 minutes and all of written history in the last 11 seconds. Our species began in Africa about 300,000 years ago. From about 60–70,000 years ago groups spread out, crossing sea to reach Australia and walking an Ice Age land bridge from Siberia to reach the Americas.',
        },
      ],
      cards: [
        {
          id: 'sp-concept-cosmic-calendar',
          kind: 'concept',
          front: 'On a cosmic calendar (the universe’s history as one year), when does all of recorded history happen?',
          back: 'In the last ~11 seconds before midnight on 31 December',
          choices: ['During December', 'In the last hour', 'In the last minute'],
          hook: 'One cosmic second ≈ 438 years.',
        },
        {
          id: 'sp-num-sapiens-age',
          kind: 'number',
          front: 'About how old is our species, Homo sapiens?',
          back: 'About 300,000 years',
          choices: ['About 6,000 years', 'About 30,000 years', 'About 3 million years'],
          hook: 'Oldest fossils: Jebel Irhoud, Morocco.',
        },
        {
          id: 'sp-place-origin',
          kind: 'place',
          front: 'On which continent did Homo sapiens first appear?',
          back: 'Africa',
          choices: ['Asia', 'Europe', 'Australia'],
        },
        {
          id: 'sp-num-out-of-africa',
          kind: 'number',
          front: 'About when did the groups that populated the rest of the world leave Africa?',
          back: 'About 60,000–70,000 years ago',
          choices: ['About 6,000 years ago', 'About 1 million years ago', 'About 12,000 years ago'],
        },
        {
          id: 'sp-num-americas',
          kind: 'number',
          front: 'When did people first reach the Americas?',
          back: 'By at least 15,000 years ago — possibly over 20,000 (debated)',
          choices: ['About 1,000 years ago', 'About 100,000 years ago', 'About 300,000 years ago'],
          hook: 'Last continent reached (apart from Antarctica).',
        },
        {
          id: 'sp-concept-ice-age',
          kind: 'concept',
          front: 'How did the Ice Age help humans spread across the world?',
          back: 'So much water froze into ice that sea level fell about 120 m, opening land bridges (like Siberia–Alaska) and shortening sea crossings.',
        },
        {
          id: 'sp-num-neanderthal-dna',
          kind: 'number',
          front: 'About how much Neanderthal DNA do most people with ancestry outside Africa carry?',
          back: 'About 1–2%',
          choices: ['None', 'About 25%', 'About half'],
        },
      ],
      teaser:
        'For 290,000 years, every human was a wanderer. Then, around 12,000 years ago, in several places at once, people stopped walking and started planting. It made them shorter, sicker — and unstoppable. Why?',
    },

    // ─────────────────────────────────────────────────────────────── 2
    {
      id: 'seeds-and-cities',
      title: 'Seeds and Cities',
      summary: 'Farming, the first cities, writing, pyramids and law — and the first great collapse.',
      question: 'How did farming turn wandering bands into cities, kings and written laws?',
      previously:
        'Homo sapiens appeared in Africa about 300,000 years ago and, from about 60–70,000 years ago, spread to every continent but Antarctica — all as foragers.',
      steps: [
        {
          type: 'story',
          title: 'A hill in Turkey',
          lenses: ['history', 'religion'],
          body: [
            'On a hilltop in south-east Turkey stand rings of giant carved stone pillars, some over 5 metres tall, decorated with foxes, snakes and vultures. The place is called Göbekli Tepe.',
            'It was built about 11,500 years ago — more than 6,000 years before Stonehenge — by people who did not yet farm. No one is sure what it was for.',
            'And in the hills nearby, DNA shows, wild wheat was among the first to be tamed.',
          ],
        },
        {
          type: 'orient',
          title: 'Seeds and Cities',
          from: -10000,
          to: -1200,
          places: [
            { name: 'Uruk', lon: 45.6, lat: 31.3 },
            { name: 'Göbekli Tepe', lon: 38.9, lat: 37.2, label: 'left' },
            { name: 'Giza', lon: 31.1, lat: 30.0, label: 'left' },
            { name: 'Mohenjo-daro', lon: 68.1, lat: 27.3 },
            { name: 'Yellow River', lon: 113.5, lat: 35, label: 'left' },
          ],
          placesNote: 'The first cities grew along four great rivers: the Tigris–Euphrates, the Nile, the Indus and the Yellow River.',
          mapBounds: RIVER_VALLEYS,
          lenses: ['history', 'geography'],
          why: 'Almost everything we call civilisation — cities, kings, taxes, writing, laws, organised religion and war — was invented in this stretch of time.',
          context: [
            'The Ice Age is ending. Seas are rising, and the climate is becoming warmer and — crucially — more stable.',
            'Perhaps 1 to 10 million people live on Earth, all of them foragers. (London alone has about 9 million today.)',
            'Nobody has a city, a king, a coin or a written word.',
            'The dog is the only animal humans have tamed.',
          ],
        },
        {
          type: 'explain',
          term: 'Domestication',
          lenses: ['science', 'economics'],
          plain:
            'Taming wild plants and animals by choosing which ones to breed, generation after generation, until they change into forms that need humans — and feed humans better.',
          analogy:
            'Like keeping only the seeds from your biggest tomatoes every year: slowly, your whole garden grows bigger tomatoes.',
          why: 'Wild wheat drops its seeds to the ground; farmed wheat keeps them on the stalk, waiting for a sickle. Farming is domestication put to work.',
        },
        {
          type: 'story',
          title: 'Invented again and again',
          lenses: ['history', 'geography'],
          body: [
            'Farming wasn’t invented once and copied. It began separately in at least half a dozen places.',
            'The Fertile Crescent (today’s Iraq, Syria, Turkey) had wheat, barley, sheep and goats from about 10,000–9,000 BCE. China had rice and millet by about 7000 BCE. Mexico turned a wild grass into maize. The Andes tamed potatoes and llamas. New Guinea grew taro and bananas.',
            'Different people, far apart, made the same leap — soon after the climate settled down.',
          ],
        },
        {
          type: 'match',
          lenses: ['geography', 'history'],
          prompt: 'Match each first crop to the region that domesticated it.',
          categories: ['Fertile Crescent', 'China', 'Mesoamerica', 'Andes'],
          items: [
            { text: 'Wheat', category: 'Fertile Crescent' },
            { text: 'Barley', category: 'Fertile Crescent' },
            { text: 'Rice', category: 'China' },
            { text: 'Maize (corn)', category: 'Mesoamerica' },
            { text: 'Potatoes', category: 'Andes' },
          ],
          explain:
            'Each region tamed what grew wild nearby. That is why the world’s great cuisines still rest on different staples: bread in the Middle East and Europe, rice in East Asia, maize in Mexico, potatoes in the Andes.',
        },
        {
          type: 'predict',
          lenses: ['medicine', 'history'],
          prompt: 'Skeletons let us compare the first farmers with the foragers before them. What do they show?',
          options: [
            'Farmers were taller and healthier',
            'No real difference',
            'Farmers were often shorter, with worse teeth and more disease',
          ],
          answer: 2,
          reveal:
            'Shorter and sicker. Early farmers ate a narrow diet of grain, which rotted their teeth and left many malnourished — skeletons are often several centimetres shorter than the foragers’ before them.',
        },
        {
          type: 'story',
          title: 'The farmer’s bargain',
          lenses: ['medicine', 'economics'],
          body: [
            'Farmers also lived packed together, beside their animals, their rubbish and their own waste. Germs jumped from animals to people: measles began as a cattle virus, and flu still comes to us from birds and pigs.',
            'So why farm? Because a field feeds far more people than wild land. Farming families had more children, and the numbers grew — from a few million people to perhaps 200–300 million by the time of Jesus.',
            'Once there were that many mouths, there was no going back.',
          ],
        },
        {
          type: 'explain',
          term: 'Surplus',
          lenses: ['economics'],
          plain: 'Extra: more food than the people who grew it need to eat.',
          analogy:
            'Like a family that grows more apples than it can eat — it can store them, swap them, or feed someone who does a different job.',
          why: 'A surplus of grain can feed people who don’t farm: potters, soldiers, priests, scribes and kings. No surplus, no cities.',
        },
        {
          type: 'story',
          title: 'Why rivers?',
          lenses: ['geography', 'economics'],
          body: [
            'The first cities rose on four river valleys: the Tigris and Euphrates, the Nile, the Indus and the Yellow River.',
            'Rivers brought water to dry land and, when they flooded, spread fresh, fertile mud. That meant big harvests — a big surplus.',
            'But canals and flood defences needed thousands of workers to be organised. Someone had to give orders, count the grain and settle disputes. Rivers grew food, and they also grew bosses.',
          ],
        },
        {
          type: 'story',
          title: 'Uruk: the first great city',
          lenses: ['history', 'economics', 'religion'],
          body: [
            'By about 3200 BCE, Uruk in southern Mesopotamia (today’s Iraq) held tens of thousands of people — perhaps 40,000 or more, the biggest city on Earth.',
            'Most people no longer grew their own food. They were specialists: potters, weavers, brewers, metalworkers. Great temples stood at the centre, and priests collected and handed out grain.',
            'Legend says Uruk’s walls were built by its king Gilgamesh — hero of the oldest great story ever written down.',
          ],
        },
        {
          type: 'story',
          title: 'Writing begins with beer and sheep',
          lenses: ['history', 'economics'],
          body: [
            'Uruk’s temple officials had a problem: too much to remember. How much barley came in? How many sheep? How much beer was each worker owed?',
            'So, around 3200 BCE, they began pressing marks into wet clay tablets. Nearly all the earliest texts are accounts. Writing was invented not for poems or prayers, but for bookkeeping.',
            'The wedge-shaped script is called cuneiform. Poems, laws and letters came later.',
          ],
        },
        {
          type: 'story',
          title: 'Older than old',
          lenses: ['history'],
          body: [
            'In Egypt, the Nile’s floods fed a single kingdom ruled by a god-king, the pharaoh. Around 2560 BCE, the pharaoh Khufu built the Great Pyramid at Giza: about 2.3 million stone blocks, 146 metres tall. It stayed the tallest building on Earth for about 3,800 years.',
            'Its builders were paid, fed work gangs — not slaves, as once believed.',
            'By the time of Cleopatra (died 30 BCE), the pyramid was about 2,500 years old. Cleopatra lived closer in time to the Moon landing than to its building.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history', 'politics'],
          prompt:
            'King Hammurabi of Babylon had 282 laws carved on a stone pillar — one of the oldest law codes ever found. When?',
          event: 'Code of Hammurabi',
          year: -1754,
          min: -3500,
          max: 0,
          tolerance: 150,
          anchors: [
            { year: -3200, label: 'Writing invented' },
            { year: -2560, label: 'Great Pyramid' },
            { year: -490, label: 'Marathon' },
          ],
          explain:
            'About 1754 BCE — some 800 years after the Great Pyramid. Its punishments depended on who you were: blinding a noble cost you an eye, but blinding a commoner only cost you silver. The pillar stands in the Louvre in Paris.',
        },
        {
          type: 'compare',
          lenses: ['geography', 'history'],
          prompt: 'Four river-valley civilisations. Fill in the blanks.',
          columns: ['Mesopotamia', 'Egypt', 'Indus Valley', 'China'],
          rows: [
            { label: 'River', cells: ['Tigris & Euphrates', 'Nile', 'Indus', 'Yellow River'] },
            { label: 'Famous city', cells: ['Uruk', 'Memphis', 'Mohenjo-daro', 'Anyang'] },
            { label: 'Writing', cells: ['Cuneiform on clay', 'Hieroglyphs', 'Undeciphered script', 'Oracle bones'] },
            {
              label: 'Known for',
              cells: ['First cities and law codes', 'Pyramids and pharaohs', 'Planned streets and drains', 'Bronze and ancestor rituals'],
            },
          ],
          blanks: [
            [0, 1, ['Jordan', 'Niger']],
            [1, 2, ['Babylon', 'Thebes']],
            [2, 0, ['Alphabet on papyrus', 'Knotted cords (quipu)']],
            [2, 2, ['Early Sanskrit letters', 'Picture writing on papyrus']],
            [3, 1, ['Terracotta army and emperors', 'Stone circles and druids']],
          ],
          explain:
            'Same recipe everywhere — a river, a surplus, a city, writing, rulers — but each cooked it differently. The Indus script still hasn’t been read, so that civilisation remains the most mysterious of the four.',
        },
        {
          type: 'story',
          title: '1177 BCE: the world falls apart',
          lenses: ['history', 'economics'],
          body: [
            'By 1200 BCE the eastern Mediterranean was a network of rich kingdoms — Egypt, the Hittites, Mycenaean Greece — trading copper and tin to make bronze, the hard metal of the age.',
            'Then, within a few decades around 1177 BCE, it collapsed. Drought, earthquakes, raiders called the Sea Peoples and broken trade routes struck together. Cities burned; the Hittite empire vanished. Greece forgot how to write for about 400 years.',
            'Lesson: the more connected a system is, the more a shock can spread.',
          ],
        },
        {
          type: 'recap',
          prompt: 'How did farming turn wandering bands into cities, kings and written laws?',
          keyPoints: [
            'Farming began separately in several places from about 10,000 BCE',
            'It made people sicker but far more numerous, and created a food surplus',
            'Surplus from river valleys fed specialists, priests and rulers — the first cities, like Uruk',
            'Writing began in Sumer about 3200 BCE for accounting; laws (Hammurabi, ~1754 BCE) followed',
          ],
          model:
            'Farming, invented separately in several places from about 10,000 BCE, fed far more people than foraging, even though farmers were less healthy. In river valleys it produced a surplus that could feed non-farmers: priests, craftsmen, soldiers and kings. Cities like Uruk grew, writing was invented to keep accounts, and rulers like Hammurabi wrote down laws.',
        },
      ],
      cards: [
        {
          id: 'sp-date-farming',
          kind: 'date',
          year: -10000,
          front: 'About when did farming begin in the Fertile Crescent?',
          back: 'About 10,000 BCE (roughly 12,000 years ago)',
          choices: ['About 3200 BCE', 'About 50,000 BCE', 'About 1000 BCE'],
          hook: 'Just after the Ice Age ended — about 27 cosmic-calendar seconds ago.',
        },
        {
          id: 'sp-concept-surplus',
          kind: 'concept',
          front: 'What is a surplus, and why did it make cities possible?',
          back: 'Extra food beyond what farmers need — it can feed non-farmers like craftsmen, priests, soldiers and rulers.',
        },
        {
          id: 'sp-date-writing',
          kind: 'date',
          year: -3200,
          front: 'When and where was writing invented?',
          back: 'About 3200 BCE, in Sumer (southern Mesopotamia, today’s Iraq)',
          choices: ['About 1200 BCE, in Greece', 'About 500 BCE, in China', 'About 10,000 BCE, in Egypt'],
          hook: 'Invented for bookkeeping: barley, sheep and beer.',
        },
        {
          id: 'sp-date-pyramid',
          kind: 'date',
          year: -2560,
          front: 'When was the Great Pyramid of Giza built?',
          back: 'About 2560 BCE',
          choices: ['About 1200 BCE', 'About 500 BCE', 'About 30 BCE'],
          hook: 'Cleopatra lived closer to the Moon landing than to the pyramid’s building.',
        },
        {
          id: 'sp-date-hammurabi',
          kind: 'date',
          year: -1754,
          front: 'When did Hammurabi of Babylon carve his law code?',
          back: 'About 1754 BCE',
          choices: ['About 3200 BCE', 'About 539 BCE', 'About 44 BCE'],
        },
        {
          id: 'sp-cause-river-valleys',
          kind: 'cause',
          front: 'Why did the first cities grow in river valleys?',
          back: 'Rivers gave water and fertile flood mud → big harvests (surplus); managing canals and floods needed organisers and rulers.',
          choices: ['Rivers kept enemies away completely', 'River water cured diseases', 'Only rivers had stone for building'],
        },
        {
          id: 'sp-date-bronze-collapse',
          kind: 'date',
          year: -1177,
          front: 'About when did the Bronze Age collapse strike the eastern Mediterranean?',
          back: 'About 1177 BCE',
          choices: ['About 2560 BCE', 'About 476 CE', 'About 3200 BCE'],
          hook: 'Drought, earthquakes, Sea Peoples and broken trade — all at once.',
        },
      ],
      teaser:
        'Out of the wreckage came iron — and, within a few centuries of each other, a handful of thinkers in Greece, Israel, India and China who asked the questions we still argue about. Why then?',
    },

    // ─────────────────────────────────────────────────────────────── 3
    {
      id: 'sages-and-empires',
      title: 'Sages and Empires',
      summary: 'Confucius, the Buddha, the prophets and Socrates — then Persia, Alexander, Qin, Han and Rome.',
      question: 'How did the ideas and empires of 800 BCE–500 CE shape the world we still live in?',
      previously:
        'Farming created surpluses that fed the first cities, kings and writing in four river valleys. Around 1177 BCE, the Bronze Age world of the eastern Mediterranean collapsed.',
      steps: [
        {
          type: 'story',
          title: 'Athens, 399 BCE',
          lenses: ['philosophy', 'history'],
          body: [
            'A jury of 501 Athenian citizens is voting on the fate of a 70-year-old man. His crime: asking questions — about justice, courage, the gods — until powerful people looked foolish.',
            'His name is Socrates. He is found guilty, sentenced to death, and drinks a cup of poison hemlock.',
            'He never wrote a word. Yet thanks to his student Plato, people are still arguing with him 2,400 years later.',
          ],
        },
        {
          type: 'orient',
          title: 'Sages and Empires',
          from: -800,
          to: 500,
          places: [
            { name: 'Persia', lon: 52.9, lat: 29.9 },
            { name: 'Athens', lon: 23.7, lat: 38.0, label: 'left' },
            { name: 'Rome', lon: 12.5, lat: 41.9, label: 'left' },
            { name: 'Jerusalem', lon: 35.2, lat: 31.8, label: 'left' },
            { name: 'Ganges valley', lon: 83, lat: 25.5 },
            { name: 'Chang’an (Xi’an)', lon: 108.9, lat: 34.3, label: 'left' },
          ],
          placesNote: 'Across this belt from the Mediterranean to China, new ideas and giant empires rose within a few centuries of each other.',
          mapBounds: AXIAL_WORLD,
          lenses: ['history', 'geography', 'philosophy'],
          why: 'Most of the world’s great religions and philosophies trace back to this age — and the first giant empires set the map of language, law and faith that still divides the world today.',
          context: [
            'The Bronze Age collapse is over. Iron tools and weapons are spreading.',
            'Rome, by legend, will be founded in 753 BCE — as a village of huts.',
            'China is ruled, weakly, by the Zhou kings; in India, cities will soon fill the Ganges valley.',
            'The Greeks are adopting an alphabet borrowed from the Phoenicians — the ancestor of the one you are reading.',
            'World population: perhaps 50–100 million.',
          ],
        },
        {
          type: 'explain',
          term: 'The Axial Age',
          lenses: ['philosophy', 'religion'],
          plain:
            'A name for roughly 800–200 BCE, when thinkers in Greece, Israel, India and China — who mostly never heard of one another — asked new questions about how to live, what is good, and what lies beyond the gods of the city.',
          analogy:
            'Like an axis, the pole a wheel turns on: the German philosopher Karl Jaspers (1949) argued that human thought has turned around this period ever since.',
          why: 'Some historians doubt it was one single “age” — but the coincidence is real, and billions still follow ideas born then.',
        },
        {
          type: 'story',
          title: 'Sages of the East',
          lenses: ['philosophy', 'religion'],
          body: [
            'In China, Confucius (551–479 BCE), a minor official, taught that society works when people honour their families, keep proper rituals, and rulers lead by moral example.',
            'In north India, a prince named Siddhartha Gautama left his palace to seek why life brings suffering. Called the Buddha — “the awakened one” — he taught that suffering comes from craving, and that a middle way can end it. He lived in the 5th century BCE; exact dates are debated.',
          ],
        },
        {
          type: 'story',
          title: 'Sages of the West',
          lenses: ['philosophy', 'religion'],
          body: [
            'In Israel and Judah, prophets such as Amos, Isaiah and Jeremiah (about 750–580 BCE) insisted that one God demanded justice for the poor and the widow, not just sacrifices.',
            'In Greece, philosophers tried to explain the world through reason. Socrates questioned everything; his student Plato founded a school; Plato’s student Aristotle wrote on almost every subject — and tutored the young Alexander the Great.',
          ],
        },
        {
          type: 'match',
          lenses: ['philosophy', 'religion'],
          prompt: 'Match each idea to the tradition it comes from.',
          categories: ['Confucius', 'The Buddha', 'Hebrew prophets', 'Greek philosophers'],
          items: [
            { text: 'Honour your parents and rule by moral example', category: 'Confucius' },
            { text: 'Suffering comes from craving; a middle way ends it', category: 'The Buddha' },
            { text: 'One God demands justice for the poor', category: 'Hebrew prophets' },
            { text: 'Question every belief and follow the argument', category: 'Greek philosophers' },
          ],
          explain:
            'Four answers to one question — how should we live? — given within a few centuries. Confucianism, Buddhism, Judaism (and through it Christianity and Islam) and Western philosophy all grow from these roots.',
        },
        {
          type: 'story',
          title: 'Cyrus takes Babylon, 539 BCE',
          lenses: ['history', 'politics', 'religion'],
          body: [
            'Meanwhile the first giant empires appeared. An empire is one state ruling many different peoples.',
            'In 539 BCE, Cyrus the Great of Persia captured Babylon. He let peoples deported by the Babylonians — including the Jews — return home and rebuild their temples.',
            'His successors ruled from Egypt to the Indus River: the largest empire the world had yet seen. When they tried to add Greece, they lost — at Marathon (490 BCE) and Salamis (480 BCE).',
          ],
        },
        {
          type: 'story',
          title: 'Alexander, dead at 32',
          lenses: ['history', 'geography'],
          body: [
            'In 334 BCE a 22-year-old Macedonian king, Alexander, invaded the Persian Empire. In about eight years he conquered all of it — Egypt, Babylon, Persia — and marched to India, where his exhausted army refused to go further.',
            'He died in Babylon in 323 BCE, aged 32. His generals split the empire, but Greek language and culture spread from Egypt to Afghanistan.',
            'Cleopatra, the last ruler of Egypt, was descended from one of those generals.',
          ],
        },
        {
          type: 'story',
          title: 'One China',
          lenses: ['history', 'politics'],
          body: [
            'For centuries China was split into warring states. In 221 BCE the king of Qin conquered them all and called himself the First Emperor.',
            'He made everyone use the same script, coins, weights — even the same width of cart axles. He was buried with an army of about 8,000 life-size clay soldiers.',
            'His dynasty collapsed within 15 years. The Han dynasty (206 BCE–220 CE) that followed ruled through educated Confucian officials. Most Chinese people still call themselves “Han”.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'politics'],
          prompt: 'The Han government counted its people in the year 2 CE. How many did it find?',
          options: ['About 5 million', 'About 20 million', 'About 58 million', 'About 500 million'],
          answer: 2,
          reveal:
            'About 57.7 million — roughly as many people as Italy has today. The Roman Empire, at the other end of Eurasia, had a similar number. Together, these two empires ruled perhaps a quarter or more of all humans alive.',
        },
        {
          type: 'story',
          title: 'Ashoka’s regret',
          lenses: ['history', 'religion', 'philosophy'],
          body: [
            'In India, the Maurya dynasty built an empire covering most of the subcontinent. Around 261 BCE its emperor Ashoka conquered the region of Kalinga. His own inscription says 100,000 were killed and 150,000 carried off.',
            'Horrified, he turned to Buddhism and had edicts about non-violence and tolerance carved on rocks and pillars across his empire.',
            'The lion statue from one of his pillars is India’s national emblem today.',
          ],
        },
        {
          type: 'story',
          title: 'Rome: republic to empire',
          lenses: ['history', 'politics'],
          body: [
            'Rome began as a republic — a state run by elected officials, not a king. It conquered the whole Mediterranean, but its generals turned their armies on each other.',
            'Julius Caesar seized power and was stabbed to death in 44 BCE. His adopted son Octavian won the civil war that followed, and in 27 BCE took the name Augustus. Rome now had an emperor in all but name.',
            'Two centuries of relative peace followed — the Pax Romana.',
          ],
        },
        {
          type: 'compare',
          lenses: ['history', 'politics'],
          prompt: 'Three great empires side by side. Fill in the blanks.',
          columns: ['Persia', 'Han China', 'Rome'],
          rows: [
            { label: 'Began', cells: ['550 BCE (Cyrus)', '206 BCE', '27 BCE (as empire)'] },
            { label: 'Capital', cells: ['Persepolis and Susa', 'Chang’an', 'Rome'] },
            { label: 'Held together by', cells: ['Royal roads and local rulers', 'Confucian officials', 'Legions, roads and law'] },
            { label: 'Ended', cells: ['Conquered by Alexander', 'Split into three kingdoms (220 CE)', 'West fell in 476 CE'] },
          ],
          blanks: [
            [0, 1, ['221 BCE', '618 CE']],
            [2, 1, ['Buddhist monasteries', 'Elected city councils']],
            [2, 2, ['Temple priests and oracles', 'Merchant guilds and trade']],
            [3, 0, ['Conquered by Rome', 'Overrun by the Huns']],
          ],
          explain:
            'Each empire faced the same problem — how do you rule millions of people you’ll never meet? Persia used local rulers, Han China trained officials, Rome used its army, roads and law.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the Qin king unify China and become the First Emperor?',
          event: 'Qin unifies China',
          year: -221,
          min: -800,
          max: 500,
          tolerance: 40,
          anchors: [
            { year: -490, label: 'Marathon' },
            { year: -44, label: 'Caesar killed' },
            { year: 476, label: 'Fall of Rome' },
          ],
          explain:
            '221 BCE — about a century after Alexander died (323 BCE), and 177 years before Caesar was killed. China and Rome were building empires at the same time, knowing almost nothing of each other.',
        },
        {
          type: 'story',
          title: 'A new faith, a falling West',
          lenses: ['religion', 'history'],
          body: [
            'Around 30–33 CE, a Jewish teacher named Jesus was crucified in Roman Judea. His followers, led by missionaries like Paul, spread the new faith, Christianity, across the empire despite persecution.',
            'In 312 the emperor Constantine became a Christian; by 380 it was Rome’s official religion.',
            'But the western half of the empire was weakening under civil wars, money troubles and invasions. In 476 a Germanic general deposed the last western emperor, a teenager. The eastern half, ruled from Constantinople, lasted almost 1,000 years more.',
          ],
        },
        {
          type: 'recap',
          prompt: 'How did the ideas and empires of 800 BCE–500 CE shape our world?',
          keyPoints: [
            'Axial Age sages — Confucius, the Buddha, the Hebrew prophets, the Greek philosophers — founded traditions billions still follow',
            'Persia (Cyrus, 539 BCE) and Alexander (died 323 BCE) created huge multi-ethnic empires',
            'Qin unified China in 221 BCE; Han and Rome each ruled roughly 50–60 million people',
            'Christianity spread through the Roman Empire; the West fell in 476',
          ],
          model:
            'Between about 800 and 200 BCE, thinkers in China, India, Israel and Greece asked how we should live, founding traditions still followed by billions. Then came giant empires — Persia, Alexander’s, Qin and Han in China, Maurya in India and Rome — which spread languages, laws and faiths across huge areas. Christianity became Rome’s religion, and the western empire fell in 476.',
        },
      ],
      cards: [
        {
          id: 'sp-concept-axial-age',
          kind: 'concept',
          front: 'What was the Axial Age?',
          back: 'Roughly 800–200 BCE, when sages in Greece, Israel, India and China (Socrates, the prophets, the Buddha, Confucius) independently asked how to live — founding traditions still followed today.',
        },
        {
          id: 'sp-person-confucius',
          kind: 'person',
          front: 'Which Chinese teacher (551–479 BCE) taught that society works through family respect, ritual and virtuous rulers?',
          back: 'Confucius',
          choices: ['The Buddha', 'The First Emperor of Qin', 'Ashoka'],
        },
        {
          id: 'sp-date-cyrus',
          kind: 'date',
          year: -539,
          front: 'When did Cyrus the Great of Persia capture Babylon?',
          back: '539 BCE',
          choices: ['1754 BCE', '221 BCE', '44 BCE'],
          hook: 'He let the exiled Jews go home — 50 years before Marathon (490 BCE).',
        },
        {
          id: 'sp-date-alexander',
          kind: 'date',
          year: -323,
          front: 'When did Alexander the Great die — and how old was he?',
          back: '323 BCE, aged 32',
          choices: ['490 BCE, aged 60', '44 BCE, aged 55', '476 CE, aged 16'],
        },
        {
          id: 'sp-date-qin',
          kind: 'date',
          year: -221,
          front: 'When was China first unified, by the Qin?',
          back: '221 BCE',
          choices: ['1754 BCE', '539 BCE', '618 CE'],
          hook: '2-2-1: a countdown to one China.',
        },
        {
          id: 'sp-date-augustus',
          kind: 'date',
          year: -27,
          front: 'When did Rome become an empire under Augustus?',
          back: '27 BCE',
          choices: ['509 BCE', '323 BCE', '476 CE'],
          hook: 'Seventeen years after Caesar was killed (44 BCE).',
        },
        {
          id: 'sp-date-fall-rome',
          kind: 'date',
          year: 476,
          front: 'When did the Western Roman Empire fall?',
          back: '476 CE (the eastern half lasted until 1453)',
          choices: ['27 BCE', '1066', '1453'],
        },
      ],
      teaser:
        'As Rome’s west crumbles, a merchant in the Arabian desert has a vision. Within a century his followers will rule from Spain to India — and their capital, Baghdad, will become the brainiest city on Earth.',
    },

    // ─────────────────────────────────────────────────────────────── 4
    {
      id: 'connected-old-world',
      title: 'A Connected Old World',
      summary: 'Islam, Tang and Song China, the Crusades, the Mongols — and the plague that rode their roads.',
      question: 'Who led the world between 500 and 1450 — and how did Asia, Africa and Europe become linked?',
      previously:
        'The Axial sages founded the great traditions; Persia, Han China and Rome ruled millions. Christianity spread, and in 476 the Western Roman Empire fell.',
      steps: [
        {
          type: 'story',
          title: 'Baghdad, around 820',
          lenses: ['science', 'history'],
          body: [
            'In a new round city on the Tigris, scholars paid by the caliph are translating Greek, Persian and Indian books into Arabic: Aristotle, Euclid, the doctor Galen, Indian astronomy.',
            'One of them, al-Khwarizmi, writes a book on solving equations. Its title contains the word al-jabr — our word “algebra”. His own name, in Latin, gives us “algorithm”.',
            'The centre of this work is remembered as the House of Wisdom. (How grand an institution it was is debated.)',
          ],
        },
        {
          type: 'orient',
          title: 'A Connected Old World',
          from: 500,
          to: 1450,
          places: [
            { name: 'Baghdad', lon: 44.4, lat: 33.3 },
            { name: 'Mecca', lon: 39.8, lat: 21.4, label: 'left' },
            { name: 'Córdoba', lon: -4.8, lat: 37.9 },
            { name: 'Constantinople', lon: 29.0, lat: 41.0, label: 'left' },
            { name: 'Karakorum', lon: 102.8, lat: 47.2 },
            { name: 'Kaifeng', lon: 114.3, lat: 34.8, label: 'left' },
          ],
          placesNote: 'In this age the busiest cities, the best science and the richest trade were in the Islamic world and China.',
          mapBounds: CONNECTED,
          lenses: ['history', 'geography'],
          why: 'This is when Asia, Africa and Europe became one web of trade, faith and ideas — carrying paper, numbers, gunpowder and, in the end, the plague.',
          context: [
            'Rome’s western half has just fallen; its eastern half, ruled from Constantinople, is thriving.',
            'Persia is ruled by the Sasanian kings, Rome’s great rival.',
            'China is divided between rival dynasties; it will be reunited in 589.',
            'In Mexico, Teotihuacan is one of the largest cities in the world; the Maya are building stone cities in the rainforest.',
            'World population: roughly 200 million.',
          ],
        },
        {
          type: 'story',
          title: 'Mecca, 610–632',
          lenses: ['religion', 'history'],
          body: [
            'Around 610, Muhammad, a merchant of Mecca in Arabia, began to preach messages that Muslims believe came from God. They were gathered into the Qur’an.',
            'Persecuted, he and his followers moved to Medina in 622. This journey, the Hijra, is year 1 of the Islamic calendar.',
            'By his death in 632, most of Arabia had accepted Islam and his leadership.',
          ],
        },
        {
          type: 'explain',
          term: 'Caliph',
          lenses: ['religion', 'politics'],
          plain:
            'From the Arabic khalifa, “successor”: the ruler who led the Muslim community after Muhammad, as both political and religious head.',
          analogy: 'Like a company founder’s successor as chief executive — except the company is an empire and a faith.',
          why: 'Disagreement over who should be caliph split Muslims into Sunni and Shia — a divide that still shapes the Middle East.',
        },
        {
          type: 'predict',
          lenses: ['history', 'geography'],
          prompt: 'After Muhammad died in 632, how long did it take for Muslim rule to stretch from Spain to India?',
          options: ['About 10 years', 'About 80 years', 'About 300 years', 'About 600 years'],
          answer: 1,
          reveal:
            'About 80 years. Arab armies beat both the Roman (Byzantine) and Persian empires, took Egypt by 642, and reached Spain and the Indus valley by 711. Conversion was much slower: many regions only became mostly Muslim centuries later.',
        },
        {
          type: 'story',
          title: 'China’s golden centuries',
          lenses: ['science', 'economics', 'history'],
          body: [
            'China, reunited, flourished under the Tang (618–907) and Song (960–1279) dynasties. The Tang capital Chang’an may have held a million people.',
            'The world’s oldest dated printed book, the Diamond Sutra, was printed in China in 868. The Song government issued paper money in the 1020s. A military book of 1044 gives the oldest known written formula for gunpowder. Sailors used magnetic compasses by about 1100.',
            'By then, Song China had over 100 million people.',
          ],
        },
        {
          type: 'match',
          lenses: ['science', 'history'],
          prompt: 'Where was each breakthrough first made?',
          categories: ['China', 'India', 'Islamic world'],
          items: [
            { text: 'Paper money', category: 'China' },
            { text: 'Gunpowder', category: 'China' },
            { text: 'Zero as a number, and the 0–9 digit system', category: 'India' },
            { text: 'Algebra, named after al-Khwarizmi’s book', category: 'Islamic world' },
            { text: 'The oldest dated printed book', category: 'China' },
          ],
          explain:
            'Our “Arabic numerals” are really Indian: scholars in Baghdad adopted them, and Europe learned them from Arabic books — the Italian Fibonacci popularised them in 1202. Ideas travelled the same roads as silk.',
        },
        {
          type: 'story',
          title: 'Europe, the backwater',
          lenses: ['history', 'economics'],
          body: [
            'Around 1000 CE, the biggest cities on Earth were places like Kaifeng in China, Baghdad, Córdoba in Muslim Spain and Constantinople — each with well over 100,000 people.',
            'Paris and London had perhaps 20,000 each. Western Europe was a land of villages, lords and monasteries, where monks kept Latin learning alive by copying books by hand.',
            'If you had bet in 1000 on which region would one day rule the world, Europe would have been a long shot.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'economics'],
          prompt: 'In about 1000 CE, where would you have gone to find the biggest cities and most advanced science?',
          options: [
            'Western Europe',
            'China and the Islamic world',
            'North America',
            'Scandinavia',
          ],
          answer: 1,
          explain:
            'China and the Islamic world led in cities, trade, technology and learning. Europe’s rise came much later — and it borrowed heavily from both: paper, numerals, the compass, gunpowder and Greek texts saved in Arabic.',
        },
        {
          type: 'story',
          title: 'The Crusades, 1095–1291',
          lenses: ['religion', 'history', 'politics'],
          body: [
            'In 1095 Pope Urban II called on Western Christians to take Jerusalem from Muslim rule. In 1099 the crusaders captured it, massacring many of its Muslims and Jews.',
            'The sultan Saladin retook Jerusalem in 1187. Crusades continued for two centuries; in 1204 one even sacked Constantinople, a Christian city. The last crusader stronghold, Acre, fell in 1291.',
            'The wars failed — but they tied Italian traders more tightly to the markets of the East.',
          ],
        },
        {
          type: 'story',
          title: 'The Mongol whirlwind',
          lenses: ['history', 'geography', 'politics'],
          body: [
            'In 1206 a Mongol chief named Temüjin united the tribes of the steppe and took the title Genghis Khan. His horsemen and their heirs conquered northern China, Central Asia, Persia and Russia.',
            'In 1258 they destroyed Baghdad and killed the caliph. At its height the Mongol Empire covered about 24 million km² — roughly the size of North America — the largest land empire in history.',
            'Once the killing stopped, the Mongols protected trade. Merchants like Marco Polo could cross Asia.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Temüjin take the title Genghis Khan?',
          event: 'Genghis Khan takes power',
          year: 1206,
          min: 500,
          max: 1500,
          tolerance: 25,
          anchors: [
            { year: 622, label: 'Islam begins' },
            { year: 1095, label: 'First Crusade' },
            { year: 1492, label: 'Columbus' },
          ],
          explain:
            '1206 — just nine years before England’s Magna Carta (1215), and 111 years after the First Crusade was called.',
        },
        {
          type: 'story',
          title: 'Meanwhile, beyond Eurasia',
          lenses: ['history', 'economics', 'geography'],
          body: [
            'In West Africa, the empire of Mali grew rich on gold. In 1324 its ruler Mansa Musa made the pilgrimage to Mecca and, by the account of a Cairo official, gave away so much gold that its value there fell for years.',
            'In the Americas, which had no contact with Eurasia, the Aztecs founded their island capital Tenochtitlan around 1325, and the Inca began building an empire in the Andes.',
          ],
        },
        {
          type: 'story',
          title: 'The road the plague took',
          lenses: ['medicine', 'geography'],
          body: [
            'The roads that carried silk and ideas could carry germs too. Around 1338, plague broke out in Central Asia. It travelled west along the Mongol trade routes and reached Europe by ship in 1347.',
            'This was the Black Death. It killed between a third and a half of Europe’s people, and struck the Middle East just as hard.',
            'A connected world had become a vulnerable one.',
          ],
        },
        {
          type: 'recap',
          prompt: 'Who led the world between 500 and 1450 — and how did it become linked?',
          keyPoints: [
            'Islam began in 622 and within ~80 years ruled from Spain to India; Baghdad became a centre of learning',
            'Tang and Song China invented printing, paper money and gunpowder',
            'Around 1000, Europe lagged behind China and the Islamic world',
            'The Mongols (from 1206) built the largest land empire, linking East and West — and spreading the Black Death (1347)',
          ],
          model:
            'From 622, Islam spread from Arabia to rule from Spain to India, and Baghdad became a hub of science. China under the Tang and Song led the world in technology. Europe was a relative backwater. The Crusades and, above all, the Mongol Empire linked Asia, the Middle East and Europe through trade — which also carried the Black Death west in 1347.',
        },
      ],
      cards: [
        {
          id: 'sp-date-hijra',
          kind: 'date',
          year: 622,
          front: 'When did Muhammad move from Mecca to Medina (the Hijra) — year 1 of the Islamic calendar?',
          back: '622 CE',
          choices: ['476 CE', '800 CE', '1095 CE'],
          hook: 'About 150 years after the fall of Rome (476).',
        },
        {
          id: 'sp-concept-house-wisdom',
          kind: 'concept',
          front: 'What was Baghdad’s House of Wisdom known for?',
          back: 'Translating Greek, Persian and Indian works into Arabic and new science — e.g. al-Khwarizmi’s algebra (around 820)',
          choices: ['Printing the first books', 'Training crusader knights', 'Minting the first coins'],
        },
        {
          id: 'sp-concept-song-inventions',
          kind: 'concept',
          front: 'Name three inventions from Tang and Song China.',
          back: 'Printing (oldest dated book 868), paper money (1020s), gunpowder (formula written 1044) — and the navigational compass',
        },
        {
          id: 'sp-date-crusade',
          kind: 'date',
          year: 1095,
          front: 'When did Pope Urban II call the First Crusade?',
          back: '1095',
          choices: ['622', '1206', '1347'],
          hook: 'Crusaders took Jerusalem four years later, in 1099.',
        },
        {
          id: 'sp-date-genghis',
          kind: 'date',
          year: 1206,
          front: 'When did Temüjin become Genghis Khan?',
          back: '1206',
          choices: ['1066', '1347', '1453'],
          hook: 'Nine years before Magna Carta (1215).',
        },
        {
          id: 'sp-compare-1000ce',
          kind: 'compare',
          front: 'Around 1000 CE, which regions led the world in cities, trade and science?',
          back: 'China and the Islamic world — not Europe',
          choices: ['Western Europe', 'The Americas', 'Scandinavia'],
        },
        {
          id: 'sp-num-mongol-size',
          kind: 'number',
          front: 'How big was the Mongol Empire at its height?',
          back: 'About 24 million km² — roughly the size of North America; the largest land empire ever',
          choices: ['About the size of France', 'About the size of India', 'About the size of Australia'],
        },
      ],
      teaser:
        'In 1453 a 21-year-old sultan blasts through walls that have stood for a thousand years. Thirty-nine years later, three small ships sail west — and two worlds that had been apart for over 10,000 years collide.',
    },

    // ─────────────────────────────────────────────────────────────── 5
    {
      id: 'world-joined',
      title: 'The World Joined',
      summary: 'Printing, Columbus, the Columbian Exchange, the slave trade, the Reformation and a new science.',
      question: 'What happened when the Old World and the New collided after 1492?',
      previously:
        'From 500 to 1450, the Islamic world and China led; the Mongols linked Eurasia by trade — and the Black Death travelled their roads to Europe in 1347.',
      steps: [
        {
          type: 'story',
          title: 'Constantinople, 29 May 1453',
          lenses: ['history', 'science'],
          body: [
            'For over 1,000 years, the great walls of Constantinople had stopped every attacker. Now Mehmed II, the 21-year-old Ottoman sultan, had brought giant bronze cannon.',
            'After a siege of almost eight weeks, his troops broke through. The last Roman emperor, Constantine XI, died in the fighting. The city became the Ottoman capital, Istanbul.',
            'The Roman Empire’s last fragment was gone — killed by gunpowder, a Chinese invention.',
          ],
        },
        {
          type: 'orient',
          title: 'The World Joined',
          from: 1450,
          to: 1750,
          places: [
            { name: 'The Atlantic', lon: -38, lat: 25 },
            { name: 'Seville', lon: -6.0, lat: 37.4 },
            { name: 'Istanbul', lon: 29.0, lat: 41.0, label: 'left' },
            { name: 'Tenochtitlan', lon: -99.1, lat: 19.4 },
            { name: 'West Africa', lon: 2, lat: 7, label: 'left' },
            { name: 'Brazil', lon: -45, lat: -12 },
          ],
          placesNote: 'For the first time, ships tie the Americas, Africa and Europe into one Atlantic world.',
          mapBounds: ATLANTIC,
          lenses: ['history', 'geography'],
          why: 'This is when the whole planet became one connected system — of crops, germs, money and enslaved people — and when Europe began its climb to world power.',
          context: [
            'The Americas and Afro-Eurasia have had almost no contact for over 10,000 years.',
            'The Aztecs and the Inca are building the largest empires the Americas have ever seen.',
            'China’s Ming emperors sent huge treasure fleets across the Indian Ocean (1405–1433) — then stopped.',
            'Europe is still recovering from the Black Death, a century earlier.',
            'World population: roughly 400 million.',
          ],
        },
        {
          type: 'explain',
          term: 'Movable-type printing',
          lenses: ['science', 'economics'],
          plain:
            'Printing with small reusable metal letters that can be arranged into any page, inked and pressed onto paper. Johannes Gutenberg developed it in Mainz, Germany, around 1450.',
          analogy: 'Like fridge-magnet letters: spell a page, print hundreds of copies, then rearrange the letters for the next page.',
          why: 'China and Korea had printed with movable type centuries earlier, but with thousands of characters it was less of a leap. With about 26 letters, it transformed Europe.',
        },
        {
          type: 'predict',
          lenses: ['economics', 'history'],
          prompt: 'Printing reached Europe around 1450. By 1500, roughly how many books had its presses produced?',
          options: ['About 80,000', 'About 800,000', 'Millions — perhaps 8 to 20 million'],
          answer: 2,
          reveal:
            'Millions — estimates run from about 8 to 20 million copies, from presses in more than 200 towns, in just 50 years. A hand-copied book could take a scribe months. Ideas could now spread faster than any ruler could stop them.',
        },
        {
          type: 'story',
          title: 'Luther’s protest, 1517',
          lenses: ['religion', 'history'],
          body: [
            'In 1517 a German monk, Martin Luther, attacked the Church for selling indulgences — payments said to reduce punishment for sins.',
            'Thanks to the printing press, his arguments spread across Germany within weeks. Western Christianity split into Catholic and Protestant churches. This split is called the Reformation.',
            'It led to more than a century of religious wars in Europe.',
          ],
        },
        {
          type: 'story',
          title: 'Three small ships',
          lenses: ['history', 'geography'],
          body: [
            'Decades earlier, China’s admiral Zheng He had led fleets of over 200 ships and some 27,000 men as far as East Africa. Then the Ming emperors stopped the voyages.',
            'In 1492, Christopher Columbus, an Italian sailing for Spain, crossed the Atlantic with three small ships and about 90 men, hoping to reach Asia. He landed in the Bahamas instead.',
            'Two worlds, separated for over 10,000 years, had met.',
          ],
        },
        {
          type: 'explain',
          term: 'The Columbian Exchange',
          lenses: ['geography', 'economics', 'medicine'],
          plain:
            'The huge two-way swap of plants, animals, people and germs between the Americas and the rest of the world that began after 1492. The historian Alfred Crosby named it in 1972.',
          analogy:
            'Like two separate ecosystems in two fish tanks, suddenly poured into one: everything gets mixed, and some species thrive while others are wiped out.',
          why: 'It changed what the whole world eats — and killed most of the people of the Americas.',
        },
        {
          type: 'match',
          lenses: ['geography', 'economics'],
          prompt: 'Which way did each travel after 1492?',
          categories: ['Americas → rest of world', 'Rest of world → Americas'],
          items: [
            { text: 'Potatoes', category: 'Americas → rest of world' },
            { text: 'Maize (corn)', category: 'Americas → rest of world' },
            { text: 'Tomatoes and chilli peppers', category: 'Americas → rest of world' },
            { text: 'Horses', category: 'Rest of world → Americas' },
            { text: 'Sugar cane and wheat', category: 'Rest of world → Americas' },
            { text: 'Smallpox and measles', category: 'Rest of world → Americas' },
          ],
          explain:
            'Italian tomato sauce, Indian chilli curries and Irish potatoes all depend on American crops. The cowboy’s horse and the Caribbean’s sugar came the other way — and so did the deadliest germs.',
        },
        {
          type: 'story',
          title: 'The Great Dying',
          lenses: ['medicine', 'history'],
          body: [
            'Smallpox, measles and flu swept through peoples who had never met them. Estimates of the Americas’ population in 1492 range from about 8 million to over 100 million — many scholars now suggest 50–60 million.',
            'By around 1600, perhaps 80–90% had died, from disease, war, enslavement and famine. The numbers are contested; the catastrophe is not.',
            'Smallpox helped Spanish soldiers, with tens of thousands of Indigenous allies, conquer the Aztec capital in 1521.',
          ],
        },
        {
          type: 'choice',
          lenses: ['medicine', 'geography'],
          prompt: 'Why did deadly diseases travel mainly from the Old World to the Americas, and not the other way?',
          options: [
            'Europeans were naturally stronger',
            'Eurasians had lived for thousands of years beside herd animals, the source of crowd diseases — and had built up some resistance',
            'The Americas had no diseases at all',
            'Diseases cannot cross oceans',
          ],
          answer: 1,
          explain:
            'Remember the farmer’s bargain: cattle, pigs and chickens gave Eurasians measles, flu and more. The Americas had few domesticated animals, so fewer such diseases — and their people had no resistance to Eurasia’s.',
        },
        {
          type: 'story',
          title: 'The Atlantic slave trade',
          lenses: ['history', 'economics'],
          body: [
            'With so many Indigenous people dead, European colonists turned to Africa for labour, above all on sugar plantations.',
            'Between the 1500s and the 1860s, about 12.5 million Africans were forced onto slave ships. About 10.7 million survived the crossing — roughly 1 in 7 died at sea.',
            'Most went to Brazil and the Caribbean. Fewer than 1 in 25 were taken to what became the United States.',
          ],
        },
        {
          type: 'story',
          title: 'A new way of knowing',
          lenses: ['science', 'philosophy', 'medicine'],
          body: [
            'In 1543 Copernicus argued that the Earth goes around the Sun — and Vesalius published an anatomy based on real dissection. In 1610 Galileo’s telescope revealed moons circling Jupiter. In 1687 Isaac Newton showed that the same laws move a falling apple and the planets.',
            'Historians call this the Scientific Revolution: trusting careful experiments and mathematics over ancient authority.',
          ],
        },
        {
          type: 'story',
          title: 'Gunpowder empires',
          lenses: ['history', 'politics', 'economics'],
          body: [
            'Europe was not yet the strongest. Big states that mastered cannon and muskets — historians call them gunpowder empires — ruled much of Asia.',
            'The Ottomans held the Middle East, North Africa and south-east Europe. The Mughals, who built the Taj Mahal, ruled most of India — by one well-known estimate, about a quarter of the world’s economy around 1700. From 1644 the Qing dynasty ruled China.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history', 'religion'],
          prompt: 'When did Martin Luther launch the Reformation?',
          event: 'Luther’s protest',
          year: 1517,
          min: 1400,
          max: 1800,
          tolerance: 15,
          anchors: [
            { year: 1453, label: 'Fall of Constantinople' },
            { year: 1492, label: 'Columbus' },
            { year: 1776, label: 'US independence' },
          ],
          explain:
            '1517 — 25 years after Columbus, and about 67 years after Gutenberg’s press. Without printing, Luther might have been just one more silenced monk.',
        },
        {
          type: 'recap',
          prompt: 'What happened when the Old World and the New collided after 1492?',
          keyPoints: [
            'Printing (about 1450) spread ideas fast — including Luther’s Reformation (1517)',
            'Columbus (1492) started the Columbian Exchange of crops, animals and germs',
            'Old World diseases killed perhaps 80–90% of the Americas’ people',
            'About 12.5 million Africans were shipped across the Atlantic; meanwhile the Scientific Revolution began',
          ],
          model:
            'After Columbus in 1492, crops, animals and germs crossed the Atlantic both ways. Potatoes and maize fed the world, but smallpox and other diseases killed most Indigenous Americans, and Europeans shipped about 12.5 million enslaved Africans to work the land. In the same years, printing spread the Reformation and the Scientific Revolution, while Asia’s gunpowder empires stayed powerful.',
        },
      ],
      cards: [
        {
          id: 'sp-date-gutenberg',
          kind: 'date',
          year: 1450,
          front: 'About when did Gutenberg develop the printing press in Europe?',
          back: 'About 1450',
          choices: ['About 1215', 'About 1347', 'About 1600'],
          hook: 'Three years before Constantinople fell (1453).',
        },
        {
          id: 'sp-date-constantinople',
          kind: 'date',
          year: 1453,
          front: 'When did Constantinople fall to the Ottomans?',
          back: '1453',
          choices: ['476', '1204', '1492'],
          hook: 'Ended the last Roman Empire — 39 years before Columbus.',
        },
        {
          id: 'sp-concept-columbian-exchange',
          kind: 'concept',
          front: 'What was the Columbian Exchange?',
          back: 'The two-way transfer of crops, animals, people and germs between the Americas and the rest of the world after 1492.',
        },
        {
          id: 'sp-num-indigenous-decline',
          kind: 'number',
          front: 'Roughly what share of the Americas’ Indigenous people died by around 1600 (estimates contested)?',
          back: 'Perhaps 80–90%',
          choices: ['About 5%', 'About 25%', 'Almost none'],
        },
        {
          id: 'sp-num-slave-trade',
          kind: 'number',
          front: 'About how many Africans were forced onto ships in the Atlantic slave trade?',
          back: 'About 12.5 million (about 10.7 million survived the crossing)',
          choices: ['About 125,000', 'About 1 million', 'About 125 million'],
        },
        {
          id: 'sp-date-reformation',
          kind: 'date',
          year: 1517,
          front: 'When did Martin Luther start the Reformation?',
          back: '1517',
          choices: ['1453', '1492', '1687'],
          hook: '25 years after Columbus.',
        },
        {
          id: 'sp-date-newton',
          kind: 'date',
          year: 1687,
          front: 'When did Newton publish the Principia, showing one set of laws for apples and planets?',
          back: '1687',
          choices: ['1543', '1776', '1859'],
        },
      ],
      teaser:
        'In a Scottish workshop, an instrument-maker is fixing a steam engine. In Paris, a crowd is gathering outside a prison. On a Caribbean island, half a million enslaved people are about to rise. The world is about to be turned upside down.',
    },

    // ─────────────────────────────────────────────────────────────── 6
    {
      id: 'revolutions',
      title: 'Revolutions',
      summary: 'America, France, Haiti — then steam, coal, germs and empire.',
      question: 'How did political and industrial revolutions after 1750 break the old limits on human life?',
      previously:
        'After 1492 the world joined: crops and germs crossed the Atlantic, 12.5 million Africans were enslaved, printing spread new faiths and a new science, and Asia’s gunpowder empires stayed strong.',
      steps: [
        {
          type: 'story',
          title: 'Opening day, 15 September 1830',
          lenses: ['history', 'science'],
          body: [
            'Crowds line the tracks of the world’s first modern railway, between Liverpool and Manchester. The Prime Minister, the Duke of Wellington, is aboard.',
            'At a stop, a politician named William Huskisson steps down onto the rails to greet him. A locomotive called the Rocket comes the other way. He can’t get out of its path in time. He dies that evening.',
            'Nobody had ever needed to learn how fast a machine could come at them.',
          ],
        },
        {
          type: 'orient',
          title: 'Revolutions',
          from: 1750,
          to: 1914,
          places: [
            { name: 'Manchester', lon: -2.2, lat: 53.5 },
            { name: 'Paris', lon: 2.35, lat: 48.9 },
            { name: 'Philadelphia', lon: -75.2, lat: 39.95 },
            { name: 'Haiti', lon: -72.3, lat: 19.0 },
            { name: 'Congo basin', lon: 22, lat: -2 },
          ],
          placesNote: 'Revolutions in politics swept the Atlantic; the revolution in industry began in northern England.',
          mapBounds: REVOLUTIONS,
          lenses: ['history', 'geography'],
          why: 'The modern world starts here: elected governments, factories, fossil fuels, fast-growing populations, germ theory — and European empires ruling most of the planet.',
          context: [
            'The great majority of people on Earth farm the land, as their ancestors did for 10,000 years.',
            'Nothing travels faster than a galloping horse or a sailing ship — not goods, not people, not news.',
            'Almost every country is ruled by a hereditary king, emperor or sultan.',
            'By some estimates, China and India together make nearly half the world’s goods.',
            'World population: about 800 million.',
          ],
        },
        {
          type: 'story',
          title: 'Revolutions of rights',
          lenses: ['politics', 'philosophy'],
          body: [
            'In 1776, thirteen British colonies declared independence, proclaiming that all men are created equal. Their author, Thomas Jefferson, himself enslaved hundreds of people.',
            'In 1789 France erupted. Parisians stormed the Bastille prison, and the new assembly declared the Rights of Man. The king was beheaded in 1793; a Reign of Terror followed; then a general, Napoleon, crowned himself emperor in 1804.',
            'The idea that rulers answer to the people had arrived.',
          ],
        },
        {
          type: 'story',
          title: 'Haiti: the revolution that went furthest',
          lenses: ['politics', 'history', 'economics'],
          body: [
            'France’s colony of Saint-Domingue was the richest in the world, producing much of Europe’s sugar and coffee on the backs of around half a million enslaved Africans.',
            'In 1791 they rose up. Led by Toussaint Louverture, a formerly enslaved man, they fought off French, Spanish and British armies. In 1804 they declared independence as Haiti.',
            'It was the first nation founded by people who had freed themselves from slavery. France later forced Haiti to pay a huge indemnity to its former masters.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history', 'politics'],
          prompt: 'When did the French Revolution begin?',
          event: 'French Revolution begins',
          year: 1789,
          min: 1400,
          max: 2000,
          tolerance: 15,
          anchors: [
            { year: 1492, label: 'Columbus' },
            { year: 1776, label: 'US independence' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1789 — just 13 years after American independence. French officers had fought in America, and France went nearly bankrupt paying for that war — one reason its own revolution came so soon after.',
        },
        {
          type: 'predict',
          lenses: ['economics', 'history'],
          prompt: 'Before about 1800, what happened to the average person’s standard of living over the centuries?',
          options: ['It rose steadily', 'It stayed roughly flat', 'It fell steadily'],
          answer: 1,
          reveal:
            'Roughly flat, for thousands of years. Whenever harvests improved, population grew until the extra food was used up. The economist Thomas Malthus described this trap in 1798 — just as the world was about to break out of it.',
        },
        {
          type: 'explain',
          term: 'The Industrial Revolution',
          lenses: ['economics', 'science'],
          plain:
            'The shift, starting in Britain around 1760–1840, from making things by hand, with muscle, wind and water power, to making them with machines in factories — driven by coal and steam.',
          analogy:
            'Imagine a village where everyone carries water in buckets, and then someone installs a pump that never gets tired.',
          why: 'For the first time, the energy available per person began rising, and kept rising. Output could now grow faster than population.',
        },
        {
          type: 'story',
          title: 'Coal and steam',
          lenses: ['science', 'economics'],
          body: [
            'Coal is ancient sunlight — plants buried for millions of years. In 1769 the Scottish instrument-maker James Watt patented an improvement that made steam engines far more efficient at turning coal into work.',
            'Steam engines drained mines, spun cotton in giant mills and, from about 1830, pulled trains.',
            'Workers — many of them children — poured into smoky factory towns. By 1900, most Britons lived in towns and cities.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['history', 'economics'],
          prompt: 'World population first reached 1 billion around 1800. In what year did it reach 2 billion?',
          min: 1800,
          max: 2000,
          step: 1,
          unit: '',
          answer: 1927,
          tolerance: 10,
          explain:
            'About 1927. The first billion took all of human history — some 300,000 years. The second took about 125. Better food, cleaner water and new medicine meant far more children survived.',
        },
        {
          type: 'explain',
          term: 'Germ theory',
          lenses: ['medicine', 'science'],
          plain:
            'The discovery that many diseases are caused by living microbes — bacteria and viruses — that pass from person to person, not by bad air or unbalanced body fluids.',
          analogy: 'Like finding out that the “haunted” house is actually full of mice: once you know the real cause, you know what to fix.',
          why: 'It made sense of clean water, sewers, washing hands, sterilising instruments and vaccines — and helped life expectancy begin to climb.',
        },
        {
          type: 'story',
          title: 'Hunting the invisible',
          lenses: ['medicine', 'science'],
          body: [
            'In 1854 a London doctor, John Snow, traced a cholera outbreak to a single water pump. In the 1860s the French chemist Louis Pasteur showed that microbes cause decay and disease; the surgeon Joseph Lister began sterilising wounds.',
            'In 1882 the German doctor Robert Koch identified the bacterium behind tuberculosis, then the biggest killer in Europe.',
            'After thousands of years of guessing, medicine could finally see its enemy.',
          ],
        },
        {
          type: 'story',
          title: 'The Scramble for Africa',
          lenses: ['politics', 'geography', 'economics'],
          body: [
            'Factories needed raw materials and markets, and industrial power gave Europe new weapons. Imperialism — rich states conquering and ruling other lands — reached its peak.',
            'Britain forced China open in the Opium Wars and ruled India directly from 1858. In 1884–85 European powers met in Berlin to set rules for dividing Africa; no Africans were invited.',
            'Around 1880 Europeans controlled about a tenth of Africa. By 1914, about nine-tenths. Ethiopia, which crushed an Italian army at Adwa in 1896, stayed free.',
          ],
        },
        {
          type: 'choice',
          lenses: ['medicine', 'geography', 'science'],
          prompt:
            'For 400 years Europeans had barely got past Africa’s coasts. Why could they conquer almost all of it in about 30 years after 1880?',
          options: [
            'African states asked to be ruled',
            'Industrial technology: quinine against malaria, steamboats up the rivers, and machine guns',
            'Africa’s population had suddenly collapsed',
            'Europeans had discovered Africa for the first time',
          ],
          answer: 1,
          explain:
            'Malaria had killed so many Europeans that West Africa was nicknamed “the white man’s grave”. Quinine, steam and the machine gun changed the balance. The same industrial power that enriched Europe made conquest cheap.',
        },
        {
          type: 'recap',
          prompt: 'How did the revolutions after 1750 break the old limits on human life?',
          keyPoints: [
            'Political revolutions — America 1776, France 1789, Haiti 1791–1804 — spread the idea of rights and self-rule',
            'The Industrial Revolution (from ~1760) used coal and steam, so energy and output per person kept rising',
            'Population doubled from 1 billion (~1800) to 2 billion (1927); germ theory transformed medicine',
            'Industrial power let Europe conquer most of Africa and dominate Asia',
          ],
          model:
            'Revolutions in America, France and Haiti spread the idea that people have rights and rulers answer to them. Meanwhile coal and steam powered the Industrial Revolution, letting output grow faster than population for the first time, and germ theory helped far more people survive. The same industrial power let European empires seize most of Africa by 1914.',
        },
      ],
      cards: [
        {
          id: 'sp-date-french-revolution',
          kind: 'date',
          year: 1789,
          front: 'When did the French Revolution begin?',
          back: '1789',
          choices: ['1689', '1776', '1848'],
          hook: '13 years after US independence (1776).',
        },
        {
          id: 'sp-date-haiti',
          kind: 'date',
          year: 1804,
          front: 'When did Haiti win independence — the first nation founded by people who freed themselves from slavery?',
          back: '1804 (revolution began 1791)',
          choices: ['1776', '1865', '1914'],
        },
        {
          id: 'sp-concept-industrial-revolution',
          kind: 'concept',
          front: 'What was the Industrial Revolution, and why did it matter?',
          back: 'The shift (from Britain, ~1760) to machine production powered by coal and steam — for the first time, energy and output per person kept rising.',
        },
        {
          id: 'sp-date-watt',
          kind: 'date',
          year: 1769,
          front: 'When did James Watt patent his improved steam engine?',
          back: '1769',
          choices: ['1492', '1687', '1830'],
          hook: 'Seven years before US independence (1776).',
        },
        {
          id: 'sp-num-billion',
          kind: 'number',
          front: 'World population reached 1 billion around 1800. When did it reach 2 billion?',
          back: 'About 1927',
          choices: ['About 1820', 'About 1850', 'About 1990'],
        },
        {
          id: 'sp-concept-germ-theory',
          kind: 'concept',
          front: 'What does germ theory say?',
          back: 'Many diseases are caused by living microbes passed between people — not bad air (miasma).',
          choices: ['Disease comes from bad air', 'Disease comes from unbalanced body fluids', 'Disease is caused by the planets'],
        },
        {
          id: 'sp-num-scramble',
          kind: 'number',
          front: 'By 1914, about how much of Africa was under European rule?',
          back: 'About 90% (only Ethiopia and Liberia stayed independent)',
          choices: ['About 10%', 'About a third', 'About half'],
        },
      ],
      teaser:
        'June 1914: a teenager with a pistol stands on a street corner in Sarajevo. A car takes a wrong turn. The most violent century in history — and the most astonishing — is about to begin.',
    },

    // ─────────────────────────────────────────────────────────────── 7
    {
      id: 'explosive-century',
      title: 'The Explosive Century',
      summary: 'World wars, genocide, the bomb, the end of empires, the Cold War — and the greatest rise in human health ever.',
      question: 'How did the world go from 1914 to today — and what drives change through all of history?',
      previously:
        'Revolutions in America, France and Haiti spread ideas of rights; coal and steam powered the Industrial Revolution; germ theory transformed medicine; and European empires took most of Africa.',
      steps: [
        {
          type: 'story',
          title: 'Sarajevo, 28 June 1914',
          lenses: ['history', 'politics'],
          body: [
            'The heir to the Austro-Hungarian throne, Archduke Franz Ferdinand, is touring Sarajevo. A bomb thrown at his car misses.',
            'Later, his driver takes a wrong turn and stops to reverse — right beside a 19-year-old Bosnian Serb named Gavrilo Princip. Princip fires twice. The archduke and his wife die.',
            'Within about five weeks, Europe’s great powers — bound by alliances — are at war.',
          ],
        },
        {
          type: 'orient',
          title: 'The Explosive Century',
          from: 1914,
          to: 2025,
          places: [
            { name: 'Berlin', lon: 13.4, lat: 52.5 },
            { name: 'Moscow', lon: 37.6, lat: 55.8, label: 'left' },
            { name: 'Washington', lon: -77.0, lat: 38.9 },
            { name: 'Hiroshima', lon: 132.5, lat: 34.4, label: 'left' },
            { name: 'Delhi', lon: 77.2, lat: 28.6 },
          ],
          placesNote: 'Now the whole planet is the stage: wars, empires and inventions reach every continent.',
          mapBounds: WHOLE_WORLD,
          lenses: ['history', 'geography'],
          why: 'This century made the world you live in: its borders, its alliances, its technology, its population — and its fears.',
          context: [
            'World population: about 1.8 billion.',
            'European empires rule much of the world; Britain’s alone covers about a fifth of Earth’s land.',
            'Cars, telephones, electric light and aeroplanes exist, but most people have never used one.',
            'Average life expectancy worldwide is about 30–35 years.',
            'There are no antibiotics. A scratch that gets infected can kill.',
          ],
        },
        {
          type: 'story',
          title: 'Industrial war',
          lenses: ['history', 'medicine'],
          body: [
            'The industrial power of the 1800s now went into killing: machine guns, artillery, poison gas. On the Western Front, armies dug trenches and fought for years over a few kilometres of mud.',
            'The First World War (1914–18) killed about 15–20 million people.',
            'Then, in 1918, a new influenza swept the world with the returning troops. It killed about 50 million — more than the war itself.',
          ],
        },
        {
          type: 'explain',
          term: 'Communism',
          lenses: ['politics', 'economics', 'philosophy'],
          plain:
            'The idea, from Karl Marx, that workers should overthrow the owners of businesses and that property should be held in common. In practice, communist states were run by a single party that owned almost everything.',
          analogy:
            'Instead of many shops competing, imagine the government owning every shop, factory and farm, and deciding what each one makes.',
          why: 'Its rivalry with capitalism — private ownership and free markets — shaped the whole 20th century.',
        },
        {
          type: 'story',
          title: 'Revolution, crash, dictators',
          lenses: ['politics', 'economics'],
          body: [
            'In 1917, war-starved Russia overthrew its tsar. Lenin’s Bolsheviks seized power and created the first communist state, later the Soviet Union (USSR). Under Stalin, millions died in famines and purges.',
            'In 1929 the New York stock market crashed. In the Great Depression that followed, about 1 in 4 American workers lost their jobs.',
            'Desperate voters turned to extremists. In 1933, Adolf Hitler took power in Germany.',
          ],
        },
        {
          type: 'story',
          title: 'The Second World War, 1939–45',
          lenses: ['history', 'politics', 'religion'],
          body: [
            'Hitler’s invasion of Poland in 1939 began the deadliest war in history. Between about 70 and 85 million people died — most of them civilians.',
            'In the Holocaust, Nazi Germany systematically murdered 6 million Jews — about two of every three Jews in Europe — along with Roma, disabled people and many others.',
            'In August 1945 the United States dropped atomic bombs on Hiroshima and Nagasaki, killing well over 100,000 people. Japan surrendered. The nuclear age had begun.',
          ],
        },
        {
          type: 'story',
          title: 'The empires end',
          lenses: ['politics', 'history'],
          body: [
            'Exhausted by war, Europe’s empires began to break up. This is called decolonisation: colonies becoming independent countries.',
            'India, after decades of non-violent protest led by Gandhi, won independence in 1947 — split with Pakistan amid violence that uprooted over 10 million people. In 1960 alone, 17 African countries became independent.',
            'The United Nations began in 1945 with 51 members. Today it has 193.',
          ],
        },
        {
          type: 'explain',
          term: 'The Cold War',
          lenses: ['politics'],
          plain:
            'The rivalry, from about 1947 to 1991, between the capitalist United States and the communist Soviet Union — fought with spies, arms races, propaganda and wars in other countries, but never directly between the two.',
          analogy: 'Like two neighbours pointing loaded guns at each other over the fence for 45 years — neither dares to fire first.',
          why: 'Both sides built thousands of nuclear weapons. A direct war could have destroyed civilisation.',
        },
        {
          type: 'story',
          title: 'Race to the Moon, fall of the Wall',
          lenses: ['politics', 'science'],
          body: [
            'In 1962, Soviet missiles in Cuba brought the world closer to nuclear war than ever before. In 1957 the Soviets launched the first satellite, Sputnik; in 1969 American astronauts walked on the Moon.',
            'The communist economies fell behind. On 9 November 1989, crowds broke through the Berlin Wall that had divided the city since 1961. In December 1991 the Soviet Union itself dissolved.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history', 'politics'],
          prompt: 'When did the Berlin Wall fall?',
          event: 'Berlin Wall falls',
          year: 1989,
          min: 1900,
          max: 2025,
          tolerance: 4,
          anchors: [
            { year: 1914, label: 'World War I' },
            { year: 1945, label: 'WWII ends' },
            { year: 1969, label: 'Moon landing' },
          ],
          explain:
            '1989 — 20 years after the Moon landing, and 44 years after the end of the Second World War. The Soviet Union followed two years later, in 1991.',
        },
        {
          type: 'predict',
          lenses: ['medicine', 'history'],
          prompt: 'In 1900, about 1 in 3 children worldwide died before age five. What is it today?',
          options: ['About 1 in 4', 'About 1 in 10', 'About 1 in 25', 'About 1 in 1,000'],
          answer: 2,
          reveal:
            'About 1 in 25 to 1 in 27. Vaccines, antibiotics (penicillin was discovered in 1928), clean water and better food did it. Smallpox, which killed an estimated 300 million people in the 20th century, was declared eradicated in 1980.',
        },
        {
          type: 'story',
          title: 'The great acceleration',
          lenses: ['economics', 'medicine', 'science'],
          body: [
            'In 1900 there were about 1.6 billion humans. In 2022 the number passed 8 billion. Average life expectancy more than doubled, from about 32 years to over 70.',
            'In 1900 most people lived in extreme poverty; today about 1 in 10 do. The internet, born from a 1969 US network and made public as the World Wide Web in 1991, now connects about two in three people.',
            'We also face new dangers our ancestors never imagined, from nuclear weapons to a warming climate.',
          ],
        },
        {
          type: 'story',
          title: 'The five engines of change',
          lenses: ['history', 'geography', 'economics', 'philosophy', 'medicine'],
          body: [
            'Look back over 300,000 years and the same five forces keep driving the story.',
            'Geography: rivers, land bridges and oceans decide where people can live and travel. Technology: farming, writing, gunpowder, steam. Disease: from the farmer’s bargain to the Black Death to the Great Dying. Ideas: the Axial sages, the world religions, rights and science. Money: surplus, trade, plantations and factories.',
            'Whenever you meet a new story, ask which engines are running.',
          ],
        },
        {
          type: 'match',
          lenses: ['history', 'geography', 'economics', 'philosophy', 'medicine'],
          prompt: 'Which engine of change drives each moment most?',
          categories: ['Geography', 'Technology', 'Disease', 'Ideas', 'Money'],
          items: [
            { text: 'Fertile river floods feed the first cities', category: 'Geography' },
            { text: 'An Ice Age land bridge lets people reach the Americas', category: 'Geography' },
            { text: 'Cannon break Constantinople’s thousand-year-old walls', category: 'Technology' },
            { text: 'Steam engines power factories and railways', category: 'Technology' },
            { text: 'Smallpox empties the Americas', category: 'Disease' },
            { text: 'The Buddha and Confucius reshape how billions live', category: 'Ideas' },
            { text: 'Genoa grows rich as the middleman of Asian trade', category: 'Money' },
            { text: 'Sugar profits drive the Atlantic slave trade', category: 'Money' },
          ],
          explain:
            'Real events usually have several engines running at once — the Black Death was disease riding on trade routes. But naming the main engine is the fastest way to understand why something happened.',
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Final challenge: put the whole story in order, earliest first.',
          items: [
            'Writing invented in Sumer',
            'Great Pyramid of Giza built',
            'Cyrus of Persia captures Babylon',
            'Qin unifies China',
            'Fall of the Western Roman Empire',
            'Genghis Khan takes power',
            'Columbus crosses the Atlantic',
            'The Berlin Wall falls',
          ],
          explain:
            'About 3200 BCE → about 2560 BCE → 539 BCE → 221 BCE → 476 CE → 1206 → 1492 → 1989. If you can place these eight, you have a skeleton of all human history — and every new story has somewhere to hang.',
        },
        {
          type: 'recap',
          prompt: 'In a few sentences: how did we get from 1914 to today — and what drives change through history?',
          keyPoints: [
            'Two world wars (1914–18, 1939–45), the 1918 flu and the Holocaust made this the deadliest century',
            'Empires ended (India 1947); the Cold War (1947–91) ended with the fall of the Berlin Wall and USSR',
            'Population rose from 1.6 to 8 billion and life expectancy more than doubled',
            'Five engines drive history: geography, technology, disease, ideas and money',
          ],
          model:
            'The 20th century began with two world wars, a pandemic and the Holocaust, then saw Europe’s empires dissolve and a Cold War between the USA and USSR that ended in 1989–91. Meanwhile medicine and technology let the population grow fivefold and life expectancy more than double. Through all of history, the same engines — geography, technology, disease, ideas and money — keep driving change.',
        },
      ],
      cards: [
        {
          id: 'sp-date-wwi',
          kind: 'date',
          year: 1914,
          front: 'When did the First World War begin and end?',
          back: '1914–1918',
          choices: ['1905–1909', '1939–1945', '1870–1871'],
        },
        {
          id: 'sp-num-flu-1918',
          kind: 'number',
          front: 'About how many people did the 1918 flu kill — and was that more or less than WWI?',
          back: 'About 50 million — more than the war itself (15–20 million)',
          choices: ['About 500,000 — far fewer', 'About 5 million — fewer', 'About 500 million — far more'],
        },
        {
          id: 'sp-num-wwii',
          kind: 'number',
          front: 'About how many people died in the Second World War (1939–45)?',
          back: 'About 70–85 million, most of them civilians',
          choices: ['About 7–8 million', 'About 20 million', 'About 500 million'],
        },
        {
          id: 'sp-num-holocaust',
          kind: 'number',
          front: 'How many Jews were murdered in the Holocaust?',
          back: 'About 6 million — about two of every three Jews in Europe',
          choices: ['About 600,000', 'About 1 million', 'About 20 million'],
        },
        {
          id: 'sp-date-india',
          kind: 'date',
          year: 1947,
          front: 'When did India win independence from Britain?',
          back: '1947',
          choices: ['1918', '1960', '1989'],
          hook: 'Two years after WWII ended.',
        },
        {
          id: 'sp-date-berlin-wall',
          kind: 'date',
          year: 1989,
          front: 'When did the Berlin Wall fall?',
          back: '9 November 1989 (the USSR dissolved in 1991)',
          choices: ['1961', '1969', '2001'],
          hook: '20 years after the Moon landing.',
        },
        {
          id: 'sp-num-population',
          kind: 'number',
          front: 'World population was about 1.6 billion in 1900. When did it reach 8 billion?',
          back: '2022',
          choices: ['1950', '1980', '2050 (not yet)'],
        },
        {
          id: 'sp-concept-five-engines',
          kind: 'concept',
          front: 'What are the five engines of change that recur through all of history?',
          back: 'Geography, technology, disease, ideas and money',
        },
      ],
    },
  ],
}
