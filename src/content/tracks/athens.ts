import type { Track } from '../types'

// Sources for figures used here: Thucydides, History of the Peloponnesian War (esp. 1.22–23, 1.96–99,
// 1.107, 2.13–17, 2.19, 2.63, 2.65, 4.104–107, 5.26); Aristotle (school of), Athenaion Politeia 23.5;
// Plutarch, Aristides 25 and Pericles 12, 16; Meiggs, The Athenian Empire (1972); Kagan, The Outbreak of
// the Peloponnesian War (1969); Hornblower, The Greek World 479–323 BC; Erechtheion building accounts
// (IG I³ 474–476) for wages of 1 drachma a day; Hansen, Athenian Democracy (population ranges);
// Allison, Destined for War (2017); Britannica. Contested figures are given as ranges.

const AEGEAN = { west: 18, south: 35, east: 28.5, north: 42 }

export const athens: Track = {
  id: 'athens',
  series: 'classical',
  tier: 2,
  title: 'Athens: Plague, War and Socrates',
  tagline:
    'The greatest city of its age turns its allies into subjects, catches a plague, loses a war — and executes its greatest thinker.',
  lenses: ['history', 'philosophy', 'medicine', 'politics'],
  era: [-431, -399],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'allies-to-empire',
      title: 'From Allies to Empire',
      summary: 'How an alliance of free cities became Athens’ empire — and why Sparta went to war over it.',
      question:
        'How did Athens turn an alliance of free cities into an empire — and why did that lead to war with Sparta?',
      previously:
        'In 480–479 BCE a handful of Greek cities drove off Xerxes’ Persian invasion. Athens’ fleet of triremes won the sea battle of Salamis, and Athens came out of the war as the strongest naval power in Greece.',
      steps: [
        {
          type: 'orient',
          title: 'Athens and Sparta',
          from: -478,
          to: -399,
          places: [
            { name: 'Athens', lon: 23.73, lat: 37.98 },
            { name: 'Sparta', lon: 22.43, lat: 37.07 },
            { name: 'Corcyra', lon: 19.92, lat: 39.62 },
            { name: 'Potidaea', lon: 23.33, lat: 40.19 },
            { name: 'Delos', lon: 25.27, lat: 37.4, label: 'left' },
          ],
          placesNote:
            'The whole war fits in a box about 500 km across — smaller than Britain — yet it drew in almost every Greek city.',
          mapBounds: AEGEAN,
          lenses: ['history', 'geography'],
          why: 'At the height of its glory, the most famous democracy of the ancient world fought a 27-year war, lost perhaps a quarter to a third of its people to plague and put its greatest thinker to death — and the books written about it still shape how we think about power.',
          context: [
            'Athens is the richest, most powerful city in Greece: perhaps 250,000–300,000 people live in the city and its countryside, Attica.',
            'The Parthenon, the great marble temple on the Acropolis, has only just been finished (447–432 BCE).',
            'Persia is still the biggest empire on earth, but has lost the Aegean. Its kings are waiting for the Greeks to weaken each other.',
            'Rome is a small republic in central Italy. About twenty years ago it wrote down its first laws, the Twelve Tables.',
            'Herodotus is probably finishing his Histories. A stonemason’s son named Socrates, now about 38, is asking awkward questions in the Athenian marketplace.',
          ],
        },
        {
          type: 'story',
          title: 'Iron in the sea',
          lenses: ['history', 'politics'],
          body: [
            'Delos, 478 BCE. Persia has been driven out of Greece, but its fleet could come back. On this small island, sacred to the god Apollo, Athens and dozens of Aegean cities swear an alliance.',
            'The Athenian leader Aristides, nicknamed “the Just,” seals the oath with a strange ritual: lumps of iron are dropped into the sea. The alliance is to last until the iron floats back up.',
            'In other words, forever. Within ten years, one ally will find out what forever means.',
          ],
        },
        {
          type: 'explain',
          term: 'The Delian League',
          lenses: ['politics', 'history'],
          plain:
            'The alliance sworn on Delos to keep fighting Persia. Each member sent warships — or, if it preferred, paid money instead, called tribute. The shared treasury was kept on Delos. Athens commanded the fleet.',
          analogy:
            'A neighbourhood watch where everyone chips in for the patrol cars — but one family owns and drives all of them.',
          why: 'Most small cities found paying easier than building ships. Year by year their money built Athens’ navy, and their own fleets withered away.',
        },
        {
          type: 'predict',
          lenses: ['politics'],
          prompt:
            'Around 470 BCE, the island of Naxos decides it has had enough and tries to leave the League. What does Athens do?',
          options: [
            'Lets it go — membership was voluntary',
            'Cuts its payments to keep it happy',
            'Besieges it and forces it back in',
            'Asks Sparta to decide',
          ],
          answer: 2,
          reveal:
            'Athens besieged Naxos and forced it back in. Thucydides calls it the first allied city to be enslaved — that is, made a subject — against the League’s own rules. It would not be the last.',
        },
        {
          type: 'story',
          title: 'The treasury moves',
          lenses: ['history', 'politics'],
          body: [
            'In 454 BCE the League treasury was moved from Delos to Athens — for safety, the Athenians said.',
            'Around 449 the fighting with Persia died down. (Whether a formal peace was signed is still debated.) Yet the tribute kept coming, from some 150 or more cities.',
            'Rebels were besieged; Athenian settlers and garrisons appeared on allied land. Even Pericles, in a speech reported by Thucydides, compared Athens’ rule to a tyranny. Historians simply call it the Athenian Empire.',
          ],
        },
        {
          type: 'explain',
          term: 'Talent (money)',
          lenses: ['economics'],
          plain:
            'The largest unit of Greek money: a weight of silver (about 26 kg in Athens) worth 6,000 drachmas. Later in the century a skilled builder earned about 1 drachma a day.',
          analogy:
            'If a drachma is a day’s pay, a talent is a mountain of them — a sum that ordinary people talked about the way we talk about millions.',
          why: 'By 431 BCE about 600 talents a year flowed into Athens from its allies, and some 6,000 talents sat in reserve on the Acropolis.',
        },
        {
          type: 'estimate',
          lenses: ['economics'],
          prompt:
            'A talent is 6,000 drachmas. A skilled worker earning 1 drachma a day works about 300 days a year. How many years would it take him to earn one talent?',
          min: 0,
          max: 60,
          step: 1,
          unit: 'years',
          answer: 20,
          tolerance: 3,
          explain:
            '6,000 ÷ 300 = 20 years — a whole working life for one talent. So 600 talents of tribute a year could pay about 12,000 skilled workers for a full year. That was the money Athens now controlled.',
        },
        {
          type: 'story',
          title: 'Pericles and the Parthenon',
          lenses: ['history', 'politics'],
          body: [
            'The most powerful man in Athens wore no crown. Pericles was elected one of the city’s ten generals almost every year from 443 BCE until his death. The voters kept choosing him.',
            'He poured money into the Acropolis. The Parthenon, a vast marble temple to Athena, rose between 447 and 432 BCE, partly paid for from League funds.',
            'His opponents, Plutarch reports, complained that money the Greeks had given for war against Persia was being spent to dress Athens up in finery.',
          ],
        },
        {
          type: 'explain',
          term: 'Thucydides',
          lenses: ['history', 'philosophy'],
          plain:
            'An Athenian general, born around 460 BCE, who began writing the history of the war the moment it broke out, sure it would be the greatest yet. He survived the plague, and was later exiled for losing a city to Sparta.',
          analogy:
            'If Herodotus was a storyteller collecting tales, Thucydides was a war reporter who also served in the war he covered.',
          why: 'He left gods out of his explanations and tried to test eyewitnesses against each other. But he admits the speeches in his book are his own versions of what speakers probably said.',
        },
        {
          type: 'story',
          title: 'The sparks',
          lenses: ['history', 'politics'],
          body: [
            'In 433 BCE Athens sided with Corcyra, a sea power, in its quarrel with Corinth — one of Sparta’s key allies.',
            'In 432 Potidaea, a Corinthian colony that paid tribute to Athens, revolted, and Athens besieged it. Athens also barred traders from Megara, a Spartan ally next door, from its harbours and marketplace.',
            'Corinth and Megara begged Sparta to act. In 432 the Spartans voted that Athens had broken the peace between them.',
          ],
        },
        {
          type: 'explain',
          term: 'The Thucydides Trap',
          lenses: ['politics', 'philosophy'],
          plain:
            'Thucydides looked past the sparks. The truest cause, he wrote, was the growth of Athenian power and the fear it created in Sparta. In 2012 the political scientist Graham Allison gave this pattern a name: when a rising power threatens a ruling one, war becomes likely.',
          analogy:
            'Like a younger sibling suddenly growing taller than the eldest: nobody has to want a fight, but everyone is watching the height chart.',
          why: 'Allison studied 16 such rivalries over 500 years and found that 12 ended in war. Many historians think the idea is too neat — but Thucydides is still read by people thinking about rivalries today.',
        },
        {
          type: 'choice',
          lenses: ['history', 'politics'],
          prompt: 'According to Thucydides, what was the deepest cause of the war?',
          options: [
            'Athens’ ban on traders from Megara',
            'The growth of Athenian power, and the fear it caused in Sparta',
            'A Persian plot to divide the Greeks',
            'An argument over the Olympic Games',
          ],
          answer: 1,
          explain:
            'Thucydides separated the triggers (Corcyra, Potidaea, Megara) from the underlying cause. That distinction — sparks versus fuel — is one of the most useful tools historians have.',
        },
        {
          type: 'compare',
          lenses: ['politics', 'history'],
          prompt: 'Two very different cities. Fill in the blanks.',
          columns: ['Athens', 'Sparta'],
          rows: [
            { label: 'Government', cells: ['Democracy: the Assembly votes', 'Two kings and a council of elders'] },
            { label: 'Military strength', cells: ['Navy of about 300 triremes', 'The best heavy infantry in Greece'] },
            {
              label: 'Who does the hard work',
              cells: ['Citizens, foreigners and enslaved people; trade and silver', 'Helots — an enslaved people farming the land'],
            },
            { label: 'Alliance', cells: ['Delian League, now an empire', 'Peloponnesian League'] },
          ],
          blanks: [
            [0, 1],
            [1, 0],
            [2, 1],
            [3, 0],
          ],
          explain:
            'A whale against an elephant: each was strongest exactly where the other was weakest. Neither could easily reach the other’s heart — which is why the war lasted 27 years.',
        },
        {
          type: 'story',
          title: 'Behind the walls',
          lenses: ['history', 'geography'],
          body: [
            'In 431 BCE the war began. That summer the Spartan king Archidamus marched into Attica with a huge army.',
            'Pericles refused to fight him. Country people were ordered inside the city, and inside the Long Walls — two walls about 6 km long running down to the port of Piraeus. While Athens ruled the sea, ships could bring in grain.',
            'From the walls, farmers watched Spartans burn their crops. Families camped in temples, towers and alleys.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the Peloponnesian War begin?',
          event: 'Peloponnesian War begins',
          year: -431,
          min: -550,
          max: 0,
          tolerance: 10,
          anchors: [
            { year: -490, label: 'Marathon' },
            { year: -480, label: 'Salamis' },
            { year: -44, label: 'Caesar killed' },
          ],
          explain:
            '431 BCE — 49 years after Salamis. A man who rowed at Salamis at 18 would now be 67, watching his grandsons march out against Sparta, the city that fought beside him against Persia.',
        },
        {
          type: 'recap',
          prompt:
            'How did Athens turn an alliance of free cities into an empire — and why did that lead to war with Sparta?',
          keyPoints: [
            'The Delian League (478) was a voluntary alliance against Persia, led by Athens',
            'Allies paid tribute instead of sending ships, so Athens’ navy grew while theirs vanished',
            'Athens crushed cities that tried to leave and moved the treasury to Athens (454)',
            'Pericles spent League money on Athens, including the Parthenon',
            'Thucydides: the deepest cause of war was Athens’ growing power and Sparta’s fear',
          ],
          model:
            'After Persia’s defeat, Athens led an alliance whose members mostly paid money instead of sending ships. That money built Athens a navy strong enough to force members to stay and pay, even after the Persian threat faded — an alliance had become an empire. Quarrels over Corcyra, Potidaea and Megara were the sparks, but Thucydides saw the real cause: Sparta feared Athens’ growing power. In 431 the war began, and Pericles pulled everyone behind the walls.',
        },
      ],
      cards: [
        {
          id: 'ath-date-war-begins',
          kind: 'date',
          year: -431,
          front: 'When did the Peloponnesian War between Athens and Sparta begin?',
          back: '431 BCE',
          choices: ['480 BCE', '399 BCE', '334 BCE'],
          hook: 'Roughly fifty years after Salamis (480).',
        },
        {
          id: 'ath-concept-delian-league',
          kind: 'concept',
          front: 'What was the Delian League?',
          back: 'An alliance against Persia (478 BCE), led by Athens; members sent ships or paid tribute — and it slowly became an Athenian empire',
          choices: [
            'Sparta’s alliance of land powers',
            'A Persian province in Greece',
            'The league that ran the Olympic Games',
          ],
        },
        {
          id: 'ath-date-treasury',
          kind: 'date',
          year: -454,
          front: 'When was the League treasury moved from Delos to Athens?',
          back: '454 BCE',
          choices: ['478 BCE', '431 BCE', '404 BCE'],
          hook: 'About halfway between Salamis (480) and the war (431).',
        },
        {
          id: 'ath-person-pericles',
          kind: 'person',
          front: 'Which Athenian, elected general year after year from 443 BCE, built the Parthenon and led Athens into war?',
          back: 'Pericles',
          choices: ['Themistocles', 'Aristides', 'Thucydides'],
        },
        {
          id: 'ath-person-thucydides',
          kind: 'person',
          front: 'Which Athenian general wrote the history of the war with Sparta as it happened?',
          back: 'Thucydides',
          choices: ['Herodotus', 'Socrates', 'Pericles'],
        },
        {
          id: 'ath-num-talent',
          kind: 'number',
          front: 'How much was a talent of silver worth?',
          back: '6,000 drachmas — about 20 years of a skilled worker’s pay',
          choices: [
            '60 drachmas — about two months’ pay',
            '600 drachmas — about two years’ pay',
            '60,000 drachmas — about 200 years’ pay',
          ],
        },
        {
          id: 'ath-cause-war',
          kind: 'cause',
          front: 'According to Thucydides, what was the deepest cause of the Peloponnesian War?',
          back: 'The growth of Athenian power, and the fear it created in Sparta.',
        },
      ],
      teaser:
        'Athens is packed, hot and crowded behind its walls. In 430 BCE a sickness breaks out first in the port of Piraeus — something no wall can stop. Thucydides will catch it, survive, and describe it.',
    },
  ],
  upcoming: [
    {
      title: 'The Plague',
      summary:
        '430 BCE: a disease sweeps the crowded city. Thucydides describes it from experience; doctors still argue over what it was. Perhaps a quarter to a third of Athens dies — Pericles among them.',
    },
    {
      title: 'Might and Right at Melos',
      summary:
        '416 BCE: Athens orders a small neutral island to submit. Thucydides’ Melian Dialogue pits power against justice — and becomes a founding text of realism in international relations.',
    },
    {
      title: 'Disaster in Sicily',
      summary:
        '415–413 BCE: the brilliant, reckless Alcibiades talks Athens into invading Sicily. Then he defects to Sparta, and the whole expedition is lost at Syracuse.',
    },
    {
      title: 'The Fall of Athens',
      summary:
        '405–404 BCE: the fleet is destroyed at Aegospotami, the city starves, the Long Walls come down to the music of flutes — and the Thirty Tyrants take power.',
    },
    {
      title: 'The Trial of Socrates',
      summary:
        '399 BCE: a man who only asked questions is charged with impiety and corrupting the young. What was the Socratic method — and why did a restored democracy put him to death?',
    },
  ],
}
