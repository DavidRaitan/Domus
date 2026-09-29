import type { TestQuestion, Track } from './types'
import { blackDeath } from './tracks/black-death'
import { startingPoint } from './tracks/starting-point'
import { salamis } from './tracks/salamis'
import { athens } from './tracks/athens'
import { alexander } from './tracks/alexander'
import { industrialRevolution } from './tracks/industrial-revolution'
import { scrambleForAfrica } from './tracks/scramble-for-africa'
import { decolonization } from './tracks/decolonization'
import { americanFounding } from './tracks/american-founding'
import { frenchRevolution } from './tracks/french-revolution'
import { russianRevolution } from './tracks/russian-revolution'
import { renaissance } from './tracks/renaissance'
import { germTheory } from './tracks/germ-theory'

type P = Omit<Track, 'lessons'>
// Tracks without lessons are planned but not written yet; they show as "coming soon".
const planned = (t: P): Track => ({ ...t, lessons: [] })

/*
 * The curriculum. Chosen for being consequential AND gripping, spread across eras and regions,
 * weighted toward what shaped the modern world. Series chain across tiers: finishing a track
 * opens the next tier of the same series (or the track that names it in `after`).
 * Informed by Hillsdale's Western Heritage, Big History, Khan Academy's world history,
 * Crash Course, and narrative podcasts (Hardcore History, Revolutions, Fall of Civilizations).
 */
export const catalog: Track[] = [
  // ── Start here: free orientation to all of history ─────────────────────────
  startingPoint,

  // ── Tier 1: pick any one to start ──────────────────────────────────────────
  planned({
    id: 'uruk', series: 'cradles', tier: 1, era: [-3500, -1750],
    title: 'Uruk and the Invention of Writing',
    tagline: 'Accountants, not poets, invented writing — and with it cities, laws and the state.',
    lenses: ['history', 'economics', 'science', 'geography'],
  }),
  salamis,
  planned({
    id: 'buddha-ashoka', series: 'india', tier: 1, era: [-500, -232],
    title: 'From the Buddha to Ashoka',
    tagline: 'An emperor wins his bloodiest war — then renounces violence and carves his conscience into stone.',
    lenses: ['history', 'philosophy', 'religion', 'politics'],
  }),
  planned({
    id: 'first-emperor', series: 'china', tier: 1, era: [-259, -206],
    title: 'The First Emperor',
    tagline: 'One man unified China and standardised everything, down to the width of cart axles.',
    lenses: ['history', 'philosophy', 'politics', 'science'],
  }),
  planned({
    id: 'roman-republic', series: 'rome', tier: 1, era: [-133, -27],
    title: 'Death of the Roman Republic',
    tagline: 'How a republic dies legally, one broken rule at a time.',
    lenses: ['history', 'politics', 'economics', 'philosophy'],
  }),
  planned({
    id: 'rise-of-islam', series: 'faith', tier: 1, era: [610, 750],
    title: 'The Rise of Islam',
    tagline: 'From a merchant in Mecca to an empire stretching from Spain to India in about a century.',
    lenses: ['history', 'religion', 'geography', 'politics'],
  }),
  planned({
    id: 'mongols', series: 'steppe', tier: 1, era: [1206, 1260],
    title: 'Wrath of the Khans',
    tagline: 'A starving outcast builds the largest land empire in history — and wires the world together.',
    lenses: ['history', 'geography', 'science', 'politics'],
  }),
  blackDeath,
  planned({
    id: 'printing-reformation', series: 'minds', tier: 1, era: [1450, 1648],
    title: 'The Printing Press and Luther',
    tagline: 'A monk plus a new technology break Christendom in two.',
    lenses: ['history', 'religion', 'economics', 'politics'],
  }),
  planned({
    id: 'columbus', series: 'encounters', tier: 1, era: [1492, 1600],
    title: 'Columbus and the Columbian Exchange',
    tagline: 'The biggest biological event since the Ice Age: crops, animals and germs cross the ocean.',
    lenses: ['history', 'geography', 'medicine', 'economics'],
  }),
  americanFounding,
  industrialRevolution,
  planned({
    id: 'wwi', series: 'wars', tier: 1, era: [1914, 1918],
    title: 'Blueprint for Armageddon: World War I',
    tagline: 'Two bullets in Sarajevo, four empires destroyed, twenty million dead.',
    lenses: ['history', 'politics', 'science', 'geography'],
  }),

  // ── Tier 2: continuations ──────────────────────────────────────────────────
  planned({
    id: 'bronze-age-collapse', series: 'cradles', tier: 2, era: [-1200, -1150],
    title: '1177 BCE: The Bronze Age Collapse',
    tagline: 'Within fifty years, nearly every great power of the eastern Mediterranean fell.',
    lenses: ['history', 'geography', 'science', 'economics'],
  }),
  athens,
  planned({
    id: 'fall-of-rome', series: 'rome', tier: 2, era: [376, 476],
    title: 'The Fall of Rome in the West',
    tagline: 'From refugees on the Danube to the last emperor in the West, in one hundred years.',
    lenses: ['history', 'economics', 'geography', 'religion'],
  }),
  planned({
    id: 'house-of-wisdom', series: 'faith', tier: 2, era: [762, 1258],
    title: 'The House of Wisdom',
    tagline: 'Baghdad translates the Greeks, invents algebra — and is destroyed by the Mongols.',
    lenses: ['history', 'science', 'philosophy', 'religion'],
  }),
  planned({
    id: 'zheng-he', series: 'china', tier: 2, era: [1405, 1433],
    title: 'Zheng He’s Treasure Fleets',
    tagline: 'China could have discovered Europe. It chose not to.',
    lenses: ['history', 'geography', 'science', 'economics'],
  }),
  renaissance,
  planned({
    id: 'constantinople-1453', series: 'steppe', tier: 2, era: [1453, 1453],
    title: 'The Fall of Constantinople',
    tagline: 'The last Roman city falls to a 21-year-old sultan and the biggest cannon ever built.',
    lenses: ['history', 'science', 'geography', 'religion'],
  }),
  planned({
    id: 'scientific-revolution', series: 'minds', tier: 2, era: [1543, 1687],
    title: 'From Copernicus to Newton',
    tagline: 'Earth loses the centre of the universe — and humanity gains the laws of nature.',
    lenses: ['history', 'science', 'philosophy', 'religion'],
  }),
  planned({
    id: 'cortes', series: 'encounters', tier: 2, era: [1519, 1521],
    title: 'Cortés and Tenochtitlan',
    tagline: 'A few hundred Spaniards, huge native armies and smallpox topple an empire.',
    lenses: ['history', 'medicine', 'geography', 'economics'],
  }),
  frenchRevolution,
  planned({
    id: 'civil-war', series: 'america', tier: 2, era: [1861, 1865], after: 'american-founding',
    title: 'The American Civil War',
    tagline: 'A nation fights over whether it can exist half slave and half free.',
    lenses: ['history', 'politics', 'economics', 'science'],
  }),
  scrambleForAfrica,
  planned({
    id: 'wwii', series: 'wars', tier: 2, era: [1939, 1945],
    title: 'World War II and the Holocaust',
    tagline: 'The deadliest event in human history.',
    lenses: ['history', 'politics', 'science', 'economics'],
  }),

  // ── Tier 3: mastery ────────────────────────────────────────────────────────
  planned({
    id: 'exile-and-the-book', series: 'cradles', tier: 3, era: [-1000, -400],
    title: 'Exile and the Book: Ancient Israel',
    tagline: 'A small people loses its land and invents a portable homeland: a text.',
    lenses: ['history', 'religion', 'philosophy', 'politics'],
  }),
  alexander,
  planned({
    id: 'crusades', series: 'faith', tier: 3, era: [1095, 1291],
    title: 'The Crusades',
    tagline: 'One speech in France launches two centuries of holy war.',
    lenses: ['history', 'religion', 'economics', 'geography'],
  }),
  planned({
    id: 'meiji', series: 'china', tier: 3, era: [1853, 1905],
    title: 'Meiji: Japan Reinvents Itself',
    tagline: 'From samurai to battleships in fifty years.',
    lenses: ['history', 'politics', 'science', 'economics'],
  }),
  germTheory,
  planned({
    id: 'haiti', series: 'encounters', tier: 3, era: [1791, 1804],
    title: 'Sugar, Slavery and the Haitian Revolution',
    tagline: 'The richest colony on earth becomes the first free Black republic.',
    lenses: ['history', 'economics', 'medicine', 'politics'],
  }),
  russianRevolution,
  decolonization,
  planned({
    id: 'nuclear-age', series: 'wars', tier: 3, era: [1942, 1991],
    title: 'Destroyer of Worlds: The Nuclear Age',
    tagline: 'The first weapon that could end history — and the forty-year standoff it created.',
    lenses: ['history', 'science', 'politics', 'philosophy'],
  }),
]

export const tiers = [...new Set(catalog.map((t) => t.tier))].sort((a, b) => a - b)

export const TIER_NAMES: Record<number, string> = {
  1: 'Foundations',
  2: 'Connections',
  3: 'Mastery',
}

export const findTrack = (id: string) => catalog.find((t) => t.id === id)

// Placement tests: pass one to prove you can start at that tier without the earlier levels.
export const placementTests: Record<number, TestQuestion[]> = {
  2: [
    {
      prompt: 'Which pathogen caused the Black Death?',
      options: ['A virus spread by mosquitoes', 'The bacterium Yersinia pestis', 'Smallpox', 'Cholera'],
      answer: 1,
    },
    {
      prompt: 'Why did wages rise in western Europe after the Black Death?',
      options: [
        'Kings raised them by law',
        'Labour became scarce relative to land',
        'Gold was discovered',
        'The Church required it',
      ],
      answer: 1,
    },
    {
      prompt: 'Classical Athens fought the Peloponnesian War (431–404 BC) against which rival?',
      options: ['Rome', 'Sparta', 'Carthage', 'Persepolis'],
      answer: 1,
    },
    {
      prompt: 'The word “quarantine” comes from…',
      options: [
        'Latin for “closed door”',
        'Italian for “forty days”',
        'A French doctor named Quarant',
        'Greek for “isolation”',
      ],
      answer: 1,
    },
    {
      prompt: 'What mainly connected China with the Mediterranean before the age of sail around Africa?',
      options: [
        'Overland caravan routes across Central Asia, plus sea routes through the Indian Ocean',
        'Direct shipping around Siberia',
        'Viking river routes only',
        'There was no connection',
      ],
      answer: 0,
    },
    {
      prompt: 'Socrates was sentenced to death in 399 BC for…',
      options: [
        'Treason with Sparta',
        'Impiety and corrupting the youth',
        'Stealing from the treasury',
        'Refusing military service',
      ],
      answer: 1,
    },
    {
      prompt: 'A government caps the price of something that has become scarce. The most likely result is…',
      options: ['A surplus', 'A shortage and ways around the rule', 'Lower demand', 'No effect'],
      answer: 1,
    },
    {
      prompt: 'Which empire made Eurasian trade routes unusually safe in the 1200s–1300s?',
      options: ['The Roman Empire', 'The Mongol Empire', 'The Ottoman Empire', 'The Mughal Empire'],
      answer: 1,
    },
    {
      prompt: 'Which best describes miasma theory?',
      options: [
        'Disease is caused by germs',
        'Disease is caused by corrupted, foul-smelling air',
        'Disease is caused by an imbalance of stars',
        'Disease is inherited',
      ],
      answer: 1,
    },
    {
      prompt: 'Historians estimate medieval death tolls mostly from…',
      options: [
        'National censuses',
        'Indirect records like tax rolls, manor and church records',
        'Newspaper reports',
        'Oral tradition only',
      ],
      answer: 1,
    },
  ],
  3: [
    {
      prompt: 'John Snow’s 1854 study of cholera in London is famous for…',
      options: [
        'Discovering the cholera bacterium under a microscope',
        'Mapping cases to trace them to a contaminated water pump',
        'Inventing vaccination',
        'Proving miasma theory',
      ],
      answer: 1,
    },
    {
      prompt: 'What did Ignaz Semmelweis show in the 1840s?',
      options: [
        'Handwashing by doctors sharply cut deaths from childbed fever',
        'Penicillin kills bacteria',
        'Viruses are smaller than bacteria',
        'Cholera spreads through air',
      ],
      answer: 0,
    },
    {
      prompt: 'The “second serfdom” refers to…',
      options: [
        'The return of serfdom in England after 1381',
        'Tightening control over peasants in eastern Europe from the 1500s',
        'Slavery in the Americas',
        'Roman agricultural slavery',
      ],
      answer: 1,
    },
    {
      prompt: 'Which Stoic emperor wrote the Meditations?',
      options: ['Nero', 'Marcus Aurelius', 'Augustus', 'Constantine'],
      answer: 1,
    },
    {
      prompt: 'Why don’t antibiotics help with the common cold?',
      options: [
        'Colds are caused by viruses, and antibiotics act on bacteria',
        'Colds are too mild to treat',
        'The cold virus is resistant to all medicine',
        'Antibiotics only work on the lungs',
      ],
      answer: 0,
    },
  ],
}
