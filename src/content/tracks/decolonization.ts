import type { Track } from '../types'

// Sources for figures used here: Yasmin Khan, The Great Partition (2007, 2nd ed. 2017);
// Ian Talbot & Gurharpal Singh, The Partition of India (2009); Judith Brown, Gandhi: Prisoner of
// Hope (1989); Srinath Raghavan, India’s War (2016) (2.5 million Indian soldiers, sterling
// balances); Lucy Chester, Borders and Conflict in South Asia (2009) (Radcliffe commission);
// Jawaharlal Nehru, “Tryst with Destiny” speech, 14 August 1947; United Nations, “The United
// Nations and Decolonization” (750 million people in dependent territories in 1945);
// Britannica (Salt March, Partition). Partition deaths are disputed: from about 200,000
// (a contemporary British estimate) to about 2 million. Displacement: about 10–20 million,
// most often given as ~15 million.

const DECOLONISING_WORLD = { west: -20, south: -5, east: 96, north: 45 }

export const decolonization: Track = {
  id: 'decolonization',
  series: 'engines',
  tier: 3,
  title: 'Midnight’s Children: Decolonisation',
  tagline:
    'Half the world becomes independent within a generation — through marches, bargains, wars and a line drawn in five weeks.',
  lenses: ['history', 'politics', 'geography', 'philosophy'],
  era: [1947, 1962],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'midnight',
      title: 'Midnight',
      summary: 'A march to the sea, a war that bankrupted an empire, and a border drawn in five weeks.',
      question: 'How did India win its freedom — and why was it split in two?',
      previously:
        'Industrial Europe used steam, quinine and machine guns to build vast empires — seizing about 90% of Africa by 1914 and ruling India too. Two world wars later, those empires were exhausted.',
      steps: [
        {
          type: 'orient',
          title: 'Decolonisation',
          from: 1947,
          to: 1962,
          places: [
            { name: 'Delhi', lon: 77.21, lat: 28.61 },
            { name: 'Lahore', lon: 74.34, lat: 31.55, label: 'left' },
            { name: 'Calcutta (Kolkata)', lon: 88.36, lat: 22.57, label: 'left' },
            { name: 'Suez Canal', lon: 32.55, lat: 29.97 },
            { name: 'Accra', lon: -0.19, lat: 5.6 },
            { name: 'Algiers', lon: 3.06, lat: 36.75 },
          ],
          placesNote:
            'The story begins in South Asia in 1947, then moves west — to the Suez Canal, and across Africa.',
          mapBounds: DECOLONISING_WORLD,
          lenses: ['history', 'geography'],
          why: 'In about fifteen years most of Europe’s empires dissolved into dozens of new nations — the reason the world map, and the United Nations, look the way they do today.',
          context: [
            'World War II ended two years ago. Britain won, but is nearly bankrupt; bread is rationed at home.',
            'The USA and the Soviet Union are the new superpowers, and the Cold War between them is beginning.',
            'The United Nations was founded in 1945 with 51 members. Today it has 193 — most of the difference is former colonies.',
            'When the UN was founded, about 750 million people — almost a third of humanity — lived in colonies and other dependent territories.',
            'British India alone has about 400 million people: roughly one person in six on Earth.',
          ],
        },
        {
          type: 'story',
          title: 'Delhi, 14 August 1947',
          lenses: ['history', 'politics'],
          body: [
            'Just before midnight, in the Constituent Assembly in New Delhi, Jawaharlal Nehru — about to become India’s first prime minister — stood to speak.',
            '“At the stroke of the midnight hour, when the world sleeps, India will awake to life and freedom.”',
            'After nearly two centuries of British rule, India was independent. Outside, crowds filled the streets. But the most famous Indian of all was nowhere near.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history'],
          prompt: 'Where was Mohandas Gandhi, the face of India’s independence movement, on that night?',
          options: [
            'At Nehru’s side in Delhi',
            'In Calcutta, fasting and praying, trying to calm violence between Hindus and Muslims',
            'In a British prison',
            'In London, signing the treaty',
          ],
          answer: 1,
          reveal:
            'In Calcutta, 1,300 km away, fasting and praying. He would not celebrate. Freedom was arriving together with the split of India into two countries — and with killing between Hindus, Muslims and Sikhs.',
        },
        {
          type: 'explain',
          term: 'Decolonisation',
          lenses: ['politics', 'history'],
          plain:
            'The process by which colonies — lands ruled by a foreign power — become independent countries, running their own governments.',
          analogy: 'Like tenants who never agreed to their landlord buying the house finally getting the keys — and then having to decide how to split the rooms.',
          why: 'India in 1947 was the first giant domino. Within 15 years, most of Asia and Africa followed.',
        },
        {
          type: 'story',
          title: 'Ruling by cooperation',
          lenses: ['history', 'politics'],
          body: [
            'The East India Company began conquering India after 1757. After a great rebellion in 1857, the British Crown took over direct rule in 1858. This era is called the Raj.',
            'The British in India were always a tiny minority — fewer than one person in a thousand. The Raj ran because millions of Indians took part: as clerks, police, soldiers and taxpayers.',
            'So what would happen if they stopped?',
          ],
        },
        {
          type: 'explain',
          term: 'Non-violent resistance',
          lenses: ['philosophy', 'politics'],
          plain:
            'Fighting an injustice by refusing to obey or cooperate — marches, strikes, boycotts, breaking unjust laws — while refusing to use violence even when attacked. Gandhi called his version satyagraha: roughly “truth-force.”',
          analogy: 'Like a whole team sitting down on the pitch: the game can’t go on, and every blow the referee throws makes him look worse to the crowd.',
          why: 'For Gandhi it was a moral principle — and also a strategy. It left the ruler two bad choices: give in, or beat peaceful people in front of the world.',
        },
        {
          type: 'story',
          title: 'The Salt March, 1930',
          lenses: ['history', 'economics', 'politics'],
          body: [
            'British law gave the government a monopoly on salt and taxed it. Every Indian, however poor, needed salt.',
            'On 12 March 1930 Gandhi, aged 60, set out on foot with 78 followers. For 24 days they walked about 385 km to the sea at Dandi. On 6 April he picked up a lump of natural salt — breaking the law.',
            'Across India, people made salt illegally. More than 60,000 people were arrested. Newspaper reports of police beating unarmed marchers were read around the world.',
          ],
        },
        {
          type: 'choice',
          lenses: ['politics', 'philosophy'],
          prompt: 'Why was salt such a clever target for Gandhi?',
          options: [
            'Salt was India’s most valuable export',
            'Everyone needed it, the tax hit the poorest, and anyone could break the law just by making salt',
            'The British had banned eating salt',
            'Salt could be sold to buy weapons',
          ],
          answer: 1,
          explain:
            'A good protest target is simple, shared by everyone and plainly unfair. Making salt turned millions of ordinary people into lawbreakers — without a single weapon.',
        },
        {
          type: 'story',
          title: 'The war that broke an empire',
          lenses: ['history', 'economics'],
          body: [
            'In World War II about 2.5 million Indians served in the Indian Army — the largest volunteer army in history. Meanwhile, in 1942, Gandhi launched the Quit India movement, and he and the Congress leaders were jailed for most of the war.',
            'By 1945 Britain was exhausted and deep in debt — it even owed India money for war supplies. The new Labour government of Clement Attlee decided to leave.',
            'The question was no longer whether. It was: leave to whom?',
          ],
        },
        {
          type: 'story',
          title: 'One nation or two?',
          lenses: ['politics', 'religion'],
          body: [
            'About a quarter of British India’s people were Muslim. Muhammad Ali Jinnah’s Muslim League feared they would be a powerless minority in a Hindu-majority India. From 1940 it demanded a separate state: Pakistan.',
            'Nehru and Gandhi’s Congress party wanted one India for all religions.',
            'In August 1946 thousands died in riots in Calcutta. In March 1947 the last viceroy, Lord Mountbatten, arrived — and brought the handover forward to August 1947.',
          ],
        },
        {
          type: 'explain',
          term: 'Partition',
          lenses: ['geography', 'politics'],
          plain:
            'Dividing one territory into separate states. In 1947, Muslim-majority areas in the north-west and east became Pakistan; the rest became India. Two large provinces with mixed populations, Punjab and Bengal, were cut in half.',
          analogy: 'Like dividing a marbled cake so that one person gets only the chocolate: however carefully you cut, the swirls don’t line up with the knife.',
          why: 'Pakistan came in two pieces, East and West, about 1,600 km apart — with India in between.',
        },
        {
          type: 'story',
          title: 'Five weeks',
          lenses: ['geography', 'politics'],
          body: [
            'The man who drew the border, Sir Cyril Radcliffe, was a London lawyer who had never been to India. He arrived on 8 July 1947.',
            'With out-of-date maps and census figures, he had about five weeks to divide Punjab and Bengal: villages, farms, canals and railways — home to tens of millions.',
            'The line was published on 17 August, two days after independence. Millions woke up in a free country without knowing which one.',
          ],
        },
        {
          type: 'story',
          title: 'The great uprooting',
          lenses: ['history', 'geography'],
          body: [
            'Hindus and Sikhs fled east into India; Muslims fled west and east into Pakistan. About 15 million people were uprooted — estimates run from 10 to 20 million. It was one of the largest migrations in history: as if nearly everyone in the Netherlands had to leave home at once.',
            'The violence was terrible. Deaths are disputed, from about 200,000 to about 2 million, because no one could count. Tens of thousands of women were abducted.',
          ],
        },
        {
          type: 'compare',
          lenses: ['politics', 'geography'],
          prompt: 'Two new countries, August 1947. Fill in the blanks.',
          columns: ['India', 'Pakistan'],
          rows: [
            { label: 'Independence day', cells: ['15 August 1947', '14 August 1947'] },
            { label: 'Leader', cells: ['Jawaharlal Nehru, prime minister', 'Muhammad Ali Jinnah, governor-general'] },
            { label: 'Founding idea', cells: ['A state for people of every religion', 'A homeland for South Asia’s Muslims'] },
            { label: 'Shape', cells: ['One large territory', 'Two wings, about 1,600 km apart'] },
          ],
          blanks: [
            [1, 1],
            [2, 0],
            [3, 1],
          ],
          explain:
            'Born a day apart from the same empire, with opposite founding ideas. East Pakistan would break away in 1971 to become Bangladesh.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did India and Pakistan become independent?',
          event: 'Independence and Partition of India',
          year: 1947,
          min: 1850,
          max: 2000,
          tolerance: 5,
          anchors: [
            { year: 1884, label: 'Berlin Conference' },
            { year: 1914, label: 'World War I' },
            { year: 1969, label: 'Moon landing' },
          ],
          explain:
            '1947 — two years after World War II ended, 63 years after the Berlin Conference, and 22 years before the Moon landing. Someone born during the Scramble could have lived to see its undoing.',
        },
        {
          type: 'recap',
          prompt: 'How did India win its freedom — and why was it split in two?',
          keyPoints: [
            'British rule depended on Indian cooperation; Gandhi’s non-violence (e.g. the Salt March, 1930) withdrew it',
            'World War II left Britain exhausted and in debt, and Attlee’s government chose to leave',
            'Jinnah’s Muslim League demanded Pakistan; Congress wanted one India',
            'Radcliffe drew the border in about five weeks; about 15 million were uprooted and 200,000–2 million died',
          ],
          model:
            'Britain could only rule India with Indian cooperation, and Gandhi’s non-violent campaigns, like the Salt March, showed millions how to withdraw it. World War II left Britain too weak and indebted to hold on, so it left in 1947. But Muslim and Hindu leaders could not agree on one state, so India was partitioned along a line drawn in five weeks — and some 15 million people fled across it amid killing on a vast scale.',
        },
      ],
      cards: [
        {
          id: 'dec-date-independence',
          kind: 'date',
          year: 1947,
          front: 'When did India and Pakistan become independent?',
          back: '14–15 August 1947',
          choices: ['1918', '1939', '1960'],
          hook: 'Two years after World War II ended (1945).',
        },
        {
          id: 'dec-date-salt-march',
          kind: 'date',
          year: 1930,
          front: 'When did Gandhi lead the Salt March to Dandi?',
          back: 'March–April 1930',
          choices: ['1857', '1905', '1947'],
          hook: '24 days, about 385 km, 17 years before independence.',
        },
        {
          id: 'dec-concept-satyagraha',
          kind: 'concept',
          front: 'What was Gandhi’s satyagraha, and why was it a strategy as well as a principle?',
          back: 'Non-violent refusal to cooperate with injustice. It forced rulers to choose between giving in and beating peaceful people in front of the world.',
        },
        {
          id: 'dec-person-jinnah',
          kind: 'person',
          front: 'Who led the Muslim League and became Pakistan’s first governor-general?',
          back: 'Muhammad Ali Jinnah',
          choices: ['Jawaharlal Nehru', 'Mohandas Gandhi', 'Lord Mountbatten'],
        },
        {
          id: 'dec-person-radcliffe',
          kind: 'person',
          front: 'Who drew the border between India and Pakistan — and how long did he have?',
          back: 'Sir Cyril Radcliffe, a London lawyer new to India — about five weeks',
          choices: [
            'Lord Mountbatten — about two years',
            'Winston Churchill — about six months',
            'Jawaharlal Nehru — about one year',
          ],
        },
        {
          id: 'dec-num-displaced',
          kind: 'number',
          front: 'About how many people were uprooted by the Partition of India?',
          back: 'About 15 million (estimates 10–20 million)',
          choices: ['About 150,000', 'About 1.5 million', 'About 150 million'],
          hook: 'Nearly the whole population of the Netherlands.',
        },
        {
          id: 'dec-cause-britain-leaves',
          kind: 'cause',
          front: 'Why did Britain leave India in 1947 rather than hold on?',
          back: 'World War II had left it exhausted and in debt, and Indian non-cooperation made the Raj ungovernable — so Attlee’s government chose to go.',
          choices: [
            'The United Nations ordered it to',
            'India defeated the British Army in battle',
            'Britain sold India to the United States',
          ],
        },
      ],
      teaser:
        'Ten years later, a man who had studied in Pennsylvania and London stands before a vast crowd in Accra and declares a new nation free: Ghana, a beacon for colonies across Africa. Can the rest of the continent follow?',
    },
  ],
  upcoming: [
    {
      title: 'The Black Star Rises',
      summary:
        'Kwame Nkrumah leads the Gold Coast to independence as Ghana in 1957 — and becomes a model for a continent.',
    },
    {
      title: 'Suez, 1956',
      summary:
        'Egypt’s Nasser seizes the Suez Canal. Britain, France and Israel invade — and the United States forces them out. The week Britain learned it was no longer a superpower.',
    },
    {
      title: 'The Year of Africa',
      summary:
        'In 1960, 17 African countries become independent and Britain’s prime minister speaks of a “wind of change.” Why it happened so fast — and why the new nations kept the colonial borders.',
    },
    {
      title: 'Cold War in the Congo',
      summary:
        'Independence from Belgium in 1960 collapses into crisis within days. Superpowers, UN troops and the murder of Patrice Lumumba: how the Cold War hijacked decolonisation.',
    },
    {
      title: 'Algeria’s Savage War',
      summary:
        'Eight years of guerrilla war, torture and terror end with Algeria’s independence in 1962. The costliest exit of all, and what half a century of freedom has brought.',
    },
  ],
}
