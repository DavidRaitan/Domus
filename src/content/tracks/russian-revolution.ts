import type { Track } from '../types'

// Sources for figures used here: Figes, A People’s Tragedy (1996); Ascher, The Revolution of 1905
// (1988–92); Sablinsky, The Road to Bloody Sunday (1976); Smith, Russia in Revolution (2017);
// Marks, Road to Power: The Trans-Siberian Railroad (1991); Connaughton, Rising Sun and Tumbling
// Bear (2003) (Russo-Japanese War); Russian Imperial Census of 1897 (population, literacy);
// Lenin, “Left-Wing” Communism (1920) (“dress rehearsal”); Britannica. Casualty figures for Bloody
// Sunday are disputed and given as a range. Dates are Old Style (Julian) where Russians used them,
// with our (Gregorian) date where it matters.

const RUSSIAN_EMPIRE = { west: 0, south: 30, east: 140, north: 70 }

export const russianRevolution: Track = {
  id: 'russian-revolution',
  series: 'revolutions',
  tier: 3,
  title: 'The Russian Revolution',
  tagline:
    'A massacre in the snow, a world war, a sealed train from Switzerland — and a revolution that shaped the whole 20th century.',
  lenses: ['history', 'politics', 'economics', 'philosophy'],
  era: [1905, 1924],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'bloody-sunday',
      title: 'Bloody Sunday',
      summary: 'Workers march to ask their tsar for help. Soldiers open fire — and an empire cracks.',
      question: 'How did one Sunday in 1905 turn millions of Russians against their tsar?',
      previously:
        'America (1776) showed a people could throw off a king. France (1789) showed a revolution could topple a monarchy, fall into terror and end with an emperor. Russia’s revolutionaries studied both stories closely.',
      steps: [
        {
          type: 'orient',
          title: 'The Russian Revolution',
          from: 1905,
          to: 1924,
          places: [
            { name: 'St Petersburg', lon: 30.32, lat: 59.94 },
            { name: 'Moscow', lon: 37.62, lat: 55.76 },
            { name: 'Zurich', lon: 8.54, lat: 47.37 },
            { name: 'Port Arthur', lon: 121.26, lat: 38.81, label: 'left' },
            { name: 'Vladivostok', lon: 131.89, lat: 43.12, label: 'left' },
          ],
          placesNote:
            'The biggest country on Earth: from its capital on the Baltic to its Pacific port is over 9,000 km by rail. Revolutionary leaders like Lenin waited in exile in Switzerland.',
          mapBounds: RUSSIAN_EMPIRE,
          lenses: ['history', 'geography'],
          why: 'The Russian Revolution created the world’s first communist state, which grew into a superpower — and its rivalry with the West shaped most of the 20th century, down to the map of Europe today.',
          context: [
            'The Russian Empire covers about a sixth of the world’s land and holds roughly 140 million people.',
            'About four in five Russians are peasants. Serfdom — peasants bound to their lord’s land — was abolished only in 1861, within living memory.',
            'At the 1897 census, only about one Russian in five could read.',
            'Tsar Nicholas II has ruled since 1894. There is no parliament and no national election.',
            'Russia is at war with Japan — and losing. Its Pacific fortress, Port Arthur, surrenders on 2 January 1905 (by our calendar).',
            'Russia still uses an old calendar, 13 days behind the rest of Europe.',
          ],
        },
        {
          type: 'story',
          title: 'Sunday, 9 January 1905',
          lenses: ['history'],
          body: [
            'In the freezing dawn, columns of workers and their families set off across St Petersburg toward the Winter Palace. Tens of thousands of them. They carried church icons and portraits of the tsar, and sang hymns.',
            'At their head walked a priest, Father Georgy Gapon, with a petition asking Nicholas II for an eight-hour working day, fair wages and an elected assembly.',
            'The tsar was not even in the city. Soldiers were waiting instead.',
          ],
        },
        {
          type: 'explain',
          term: 'The Julian calendar',
          lenses: ['science', 'religion'],
          plain:
            'The calendar set up by Julius Caesar. Its year is about 11 minutes too long, so it drifts. Most of Europe switched to the corrected Gregorian calendar from 1582. Russia, following its Orthodox Church, didn’t — so by 1900 it was 13 days behind.',
          analogy:
            'Like a watch that runs a few seconds slow each day: after centuries, it is almost two weeks late.',
          why: 'Russian dates in this track are “Old Style.” Bloody Sunday, 9 January, was 22 January in our calendar — and the famous “October Revolution” of 1917 happened in November by ours. Russia finally switched in 1918.',
        },
        {
          type: 'predict',
          lenses: ['history', 'politics'],
          prompt: 'Before that Sunday, how did most of the marchers think of their tsar?',
          options: [
            'As a hated tyrant they wanted to overthrow',
            'As a caring father who would help them if only he knew their suffering',
            'As a foreign ruler who didn’t speak Russian',
          ],
          answer: 1,
          reveal:
            'Many peasants and workers called the tsar their “little father.” They blamed bad officials and bosses, not him — that’s why they carried his portrait. When soldiers fired on them, that faith was the first thing to die.',
        },
        {
          type: 'story',
          title: 'The volleys',
          lenses: ['history', 'politics'],
          body: [
            'At several points across the city, troops ordered the marchers to stop, then fired into the crowds. Cavalry charged with sabres. Blood stained the snow.',
            'The government admitted to about a hundred dead. Most historians think several hundred died, with many more wounded.',
            'Gapon escaped. Soon afterwards he wrote that there was no God any longer, and no tsar. Across Russia, the day became known as Bloody Sunday.',
          ],
        },
        {
          type: 'explain',
          term: 'Autocracy',
          lenses: ['politics'],
          plain:
            'Rule by one person with unlimited power. The Russian tsar was called an autocrat: no parliament to pass laws, no elections, no legal opposition. His word was law.',
          analogy:
            'Like a school where the head writes every rule, judges every case, and can never be voted out.',
          why: 'In an autocracy, every problem leads back to one man. So when soldiers fired in his name, there was only one person left to blame.',
        },
        {
          type: 'story',
          title: 'Factories in a peasant land',
          lenses: ['economics', 'history'],
          body: [
            'Who were the marchers? In the 1890s, Finance Minister Sergei Witte had pushed Russia to industrialise fast: railways, steelworks, giant factories, much of it paid for with foreign loans.',
            'Millions of peasants moved to the cities to work in them. They packed into crowded barracks and worked shifts that could legally last 11½ hours, for low pay.',
            'Russia now had an urban working class — angry, organised and concentrated in the capital.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['geography'],
          prompt:
            'In 1891 Russia began its greatest building project: the Trans-Siberian Railway, a single track from Moscow to Vladivostok on the Pacific. How long is it?',
          min: 1000,
          max: 20000,
          step: 100,
          unit: 'km',
          answer: 9300,
          tolerance: 1000,
          explain:
            'About 9,300 km — roughly a quarter of the way around the Earth, and about twice the width of the United States. When war with Japan came, the line around Lake Baikal wasn’t even finished, so in winter engineers laid rails across the frozen lake. Japan fought next door to its own islands; Russia fought at the far end of the longest railway on the planet.',
        },
        {
          type: 'story',
          title: 'Defeat by Japan',
          lenses: ['history', 'politics', 'geography'],
          body: [
            'Many at the tsar’s court expected an easy win over Japan. Instead Port Arthur fell after a long siege, and Russia lost the huge battle of Mukden.',
            'Then Russia sent its Baltic Fleet halfway around the world — most of it past Africa, a voyage of about seven months. In May 1905, in the Tsushima Strait, the Japanese navy destroyed it in two days.',
            'A great European empire, beaten by an Asian power. At home, the tsar looked incompetent as well as cruel.',
          ],
        },
        {
          type: 'explain',
          term: 'Soviet',
          lenses: ['politics'],
          plain:
            'Russian for “council.” In 1905, workers in each factory elected delegates — in St Petersburg, about one for every 500 workers — to a citywide council that ran strikes and spoke for them.',
          analogy:
            'Like a student council elected class by class — except this one could shut down the city.',
          why: 'Soviets disappeared after 1905, but came back in 1917. The country the revolution built would be named after them: the Soviet Union.',
        },
        {
          type: 'story',
          title: 'The year everything stopped',
          lenses: ['history', 'politics'],
          body: [
            'All through 1905 Russia boiled over. Workers struck, peasants burned manor houses, and in June sailors on the battleship Potemkin mutinied and killed several of their officers.',
            'In October a general strike spread across the empire. Trains stopped, factories stopped, even the ballet stopped. The St Petersburg Soviet met nightly; one of its leaders was a 25-year-old named Leon Trotsky.',
            'Nicholas had two choices: crush the revolution, or give ground.',
          ],
        },
        {
          type: 'story',
          title: 'The October Manifesto',
          lenses: ['politics'],
          body: [
            'Advised by Witte, Nicholas gave ground. His October Manifesto promised freedom of speech and assembly, and an elected parliament, the Duma, without whose approval no law could pass.',
            'It split his enemies. Liberals celebrated and went home; socialists kept fighting. In December the leaders of the Soviet were arrested, and an uprising in Moscow was crushed by artillery.',
            'The tsar survived. Soon he began taking back much of what he had promised.',
          ],
        },
        {
          type: 'choice',
          lenses: ['politics', 'history'],
          prompt: 'Why did the tsar survive the revolution of 1905?',
          options: [
            'The protesters gave up after Bloody Sunday',
            'Most of the army stayed loyal, peace with Japan freed troops, and his promises split the opposition',
            'Japan sent troops to help him',
            'He abdicated and his son restored order',
          ],
          answer: 1,
          explain:
            'A revolution needs the soldiers to stop obeying. In 1905 most of them still obeyed. Lenin later called 1905 a “dress rehearsal” for 1917 — next time, the army would be exhausted by a far bigger war.',
        },
        {
          type: 'compare',
          lenses: ['politics', 'history'],
          prompt: 'Three revolutions, three first sparks. Fill in the blanks.',
          columns: ['America 1765', 'France 1789', 'Russia 1905'],
          rows: [
            {
              label: 'War in the background',
              cells: ['Seven Years’ War debt', 'Debt from the American war', 'Losing war with Japan'],
            },
            {
              label: 'The spark',
              cells: ['A tax on printed paper', 'Bankruptcy and dear bread', 'Troops fire on petitioners'],
            },
            {
              label: 'First result',
              cells: ['Tax repealed', 'The Bastille falls', 'Tsar promises a parliament'],
            },
          ],
          blanks: [
            [0, 2, ['Losing war with Germany', 'Debt from the Crimean War']],
            [1, 0, ['A tax on imported tea', 'A shooting in Boston']],
            [1, 2, ['The tsar is assassinated', 'A new tax on vodka']],
            [2, 1, ['The king is beheaded', 'Napoleon takes power']],
          ],
          explain:
            'Again and again, war strains a state’s money and its people’s patience, and one shocking moment turns grievances into revolution. In all three, the first concessions did not end the story.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When was Bloody Sunday?',
          event: 'Bloody Sunday',
          year: 1905,
          min: 1750,
          max: 2000,
          tolerance: 5,
          anchors: [
            { year: 1776, label: 'US independence' },
            { year: 1914, label: 'World War I' },
            { year: 1969, label: 'Moon landing' },
          ],
          explain:
            '1905 — 116 years after the fall of the Bastille, and just nine years before World War I. Many of the soldiers of 1914 had been children on Bloody Sunday.',
        },
        {
          type: 'recap',
          prompt: 'How did one Sunday in 1905 turn millions of Russians against their tsar?',
          keyPoints: [
            'Russia was an autocracy: the tsar held all power, so all blame led to him',
            'Fast industrialisation had packed poor, organised workers into the cities',
            'A losing war with Japan, fought at the end of a 9,000 km railway, made the regime look incompetent',
            'Troops firing on peaceful petitioners destroyed the belief in a caring “little father”',
          ],
          model:
            'Russia’s tsar ruled alone, so when things went wrong he was the one to blame. Rapid industrialisation had crowded angry workers into the cities, and a humiliating war with Japan made the government look incompetent. When troops shot peaceful marchers who had come to ask the tsar for help, their faith in him broke, and a year of strikes and mutinies forced him to promise a parliament.',
        },
      ],
      cards: [
        {
          id: 'rur-date-bloody-sunday',
          kind: 'date',
          year: 1905,
          front: 'When was Bloody Sunday in St Petersburg?',
          back: 'January 1905 (9 January Old Style; 22 January in our calendar)',
          choices: ['January 1861', 'January 1914', 'January 1917'],
          hook: 'Nine years before World War I (1914).',
        },
        {
          id: 'rur-concept-julian',
          kind: 'concept',
          front: 'Why did Russia’s “October Revolution” of 1917 take place in November by our calendar?',
          back: 'Russia still used the old Julian calendar, 13 days behind the Gregorian one used elsewhere',
          choices: [
            'Russian months are named differently',
            'The revolution lasted a whole month',
            'Historians later moved the date',
          ],
        },
        {
          id: 'rur-person-gapon',
          kind: 'person',
          front: 'Which priest led the workers’ march on Bloody Sunday?',
          back: 'Father Georgy Gapon',
          choices: ['Grigori Rasputin', 'Leon Trotsky', 'Sergei Witte'],
        },
        {
          id: 'rur-concept-soviet',
          kind: 'concept',
          front: 'What does “soviet” mean, and what was the 1905 St Petersburg Soviet?',
          back: '“Council.” A citywide council of delegates elected by factory workers, which ran strikes and spoke for them.',
        },
        {
          id: 'rur-num-trans-siberian',
          kind: 'number',
          front: 'About how long is the Trans-Siberian Railway, from Moscow to Vladivostok?',
          back: 'About 9,300 km — roughly a quarter of the way around the Earth',
          choices: ['About 900 km', 'About 3,000 km', 'About 30,000 km'],
        },
        {
          id: 'rur-concept-october-manifesto',
          kind: 'concept',
          front: 'What did Nicholas II promise in his October Manifesto of 1905?',
          back: 'Civil rights such as free speech, and an elected parliament (the Duma)',
          choices: ['To abdicate', 'To give all land to the peasants', 'To make peace with Germany'],
        },
        {
          id: 'rur-cause-japan',
          kind: 'cause',
          front: 'Why did losing the war with Japan (1904–05) weaken the tsar at home?',
          back: 'Defeat by a smaller Asian power, far away at the end of one railway line, made the autocracy look incompetent just as anger over Bloody Sunday exploded.',
        },
      ],
      teaser:
        'Nicholas survived 1905. Nine years later he leads Russia into a far bigger war — against Germany. Millions of peasant soldiers will march west, and in exile in Switzerland a revolutionary called Lenin waits for his chance. What will the Great War do to the tsar?',
    },
  ],
  upcoming: [
    {
      title: 'The War That Broke an Empire',
      summary:
        'World War I: millions of casualties, hungry cities, the mystic Rasputin at court — and a tsar who takes personal command of a losing army (1914–16).',
    },
    {
      title: 'February: The Tsar Falls',
      summary:
        'Bread queues, strikes and soldiers who refuse to shoot end 300 years of Romanov rule in about a week (March 1917 by our calendar).',
    },
    {
      title: 'The Sealed Train',
      summary:
        'Germany ships Lenin from Switzerland to Petrograd (April 1917) to knock Russia out of the war. Who was Karl Marx, and what did Lenin add to his ideas?',
    },
    {
      title: 'October',
      summary:
        'The Bolsheviks seize power in Petrograd (7 November 1917 by our calendar), make peace with Germany — and shut down Russia’s freely elected assembly.',
    },
    {
      title: 'Red and White',
      summary:
        'Civil war along the Trans-Siberian, the killing of the royal family, famine — and the founding of the Soviet Union (1922), two years before Lenin’s death.',
    },
  ],
}
