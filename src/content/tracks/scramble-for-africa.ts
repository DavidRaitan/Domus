import type { Track } from '../types'

// Sources for figures used here: Thomas Pakenham, The Scramble for Africa (1991); Daniel Headrick,
// The Tools of Empire (1981) (quinine, steamboats, guns); Philip Curtin, Death by Migration (1989)
// (European troop mortality in West Africa); Adam Hochschild, King Leopold’s Ghost (1998);
// General Act of the Berlin Conference (26 February 1885); Förster, Mommsen & Robinson (eds.),
// Bismarck, Europe and Africa (1988); Britannica (Berlin West Africa Conference, Baikie, quinine,
// Laveran, Ross); WHO malaria fact sheet; Maddison Project (population). Contested figures are
// given as ranges or left rounded.

const AFRICA = { west: -20, south: -36, east: 48, north: 56 }

export const scrambleForAfrica: Track = {
  id: 'scramble-for-africa',
  series: 'engines',
  tier: 2,
  title: 'The Scramble for Africa',
  tagline:
    'In thirty years, Europe carves up a continent from conference tables and map rooms — with quinine, steamboats and machine guns doing the work on the ground.',
  lenses: ['history', 'medicine', 'geography', 'politics'],
  era: [1884, 1914],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'continent-on-the-table',
      title: 'A Continent on the Table',
      summary: 'A conference in Berlin with no Africans invited — and the medicine that opened the interior.',
      question: 'Why did Europe grab almost all of Africa after 1880 — and not before?',
      previously:
        'Coal and steam made Britain, then much of Europe, the richest and most powerful industrial economies on Earth. Factories now wanted raw materials and markets — and steamships and railways made the world smaller.',
      steps: [
        {
          type: 'orient',
          title: 'The Scramble for Africa',
          from: 1884,
          to: 1914,
          places: [
            { name: 'Berlin', lon: 13.4, lat: 52.52 },
            { name: 'Brussels', lon: 4.35, lat: 50.85, label: 'left' },
            { name: 'Freetown', lon: -13.23, lat: 8.48 },
            { name: 'Lokoja (Niger–Benue)', lon: 6.74, lat: 7.8 },
            { name: 'Congo River mouth', lon: 12.4, lat: -6.0 },
            { name: 'Adwa', lon: 38.9, lat: 14.17, label: 'left' },
          ],
          placesNote:
            'Decisions made in European capitals, played out across a continent three times the size of the United States.',
          mapBounds: AFRICA,
          lenses: ['history', 'geography'],
          why: 'In about thirty years European powers took control of nearly all of Africa, and the borders, languages and wounds of that grab still shape more than 50 countries today.',
          context: [
            'Africa has roughly 100 million people, in hundreds of societies — from great kingdoms and empires to small village communities.',
            'Britain has just occupied Egypt (1882), guarding the Suez Canal, which opened in 1869 and is its short cut to India.',
            'Germany and Italy have only recently become united countries (1871 and 1861), and want colonies to match Britain and France.',
            'France has ruled Algeria since 1830; Britain holds the Cape Colony at Africa’s southern tip.',
            'Telegraph cables now link Europe to its ports around the world: news that took months now takes hours.',
            'Ethiopia, in the Horn of Africa, is an ancient Christian empire with its own emperor and army.',
          ],
        },
        {
          type: 'story',
          title: 'Berlin, November 1884',
          lenses: ['history', 'politics'],
          body: [
            'On 15 November 1884, diplomats from 14 countries gathered at the official residence of Otto von Bismarck, Germany’s chancellor, on the Wilhelmstrasse in Berlin.',
            'They came from Britain, France, Portugal, Belgium, the United States, the Ottoman Empire and more. Their subject was Africa: who could trade where, and how a country could claim a piece of it.',
            'Not a single African was invited.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'geography'],
          prompt: 'Around 1870, roughly how much of Africa was ruled by Europeans?',
          options: ['About 10%', 'About 40%', 'About 75%', 'Almost all of it'],
          answer: 0,
          reveal:
            'About 10% — mostly coastal strips, plus French Algeria and the British Cape. By 1914 it was about 90%. Only two countries were still independent: Ethiopia and Liberia. That jump, in a single lifetime, is the Scramble.',
        },
        {
          type: 'story',
          title: 'Africa before the Scramble',
          lenses: ['history', 'politics'],
          body: [
            'Africa was not an empty map. In West Africa, the Sokoto Caliphate, founded in 1804, ruled millions. The Asante kingdom ran a rich state from its capital, Kumasi. By Lake Victoria stood the kingdom of Buganda; in the south, the Zulu kingdom.',
            'For centuries Europeans had mostly stayed on the coasts, trading from forts — above all, until the 1800s, in enslaved people.',
            'Why hadn’t they pushed inland? One big reason was invisible.',
          ],
        },
        {
          type: 'story',
          title: 'The white man’s grave',
          lenses: ['medicine', 'history'],
          body: [
            'Europeans called West Africa “the white man’s grave.” Newcomers fell sick with fevers within weeks.',
            'In the 1820s and 1830s, roughly half the British soldiers stationed in Sierra Leone could die in a single year, mostly of malaria and yellow fever. At that rate a garrison could be all but wiped out in two years without fighting a battle.',
            'Expeditions up Africa’s rivers kept ending the same way: in fever and graves.',
          ],
        },
        {
          type: 'explain',
          term: 'Malaria',
          lenses: ['medicine'],
          plain:
            'A disease caused by a tiny parasite (Plasmodium) that lives in the blood and bursts red blood cells, causing waves of fever and chills. It passes from person to person through the bites of Anopheles mosquitoes.',
          analogy: 'The mosquito is a dirty needle with wings: it carries the parasite from one person’s blood into the next.',
          why: 'Nobody knew the cause until 1880 (the parasite) and 1897 (the mosquito). Adults who grew up in malarial regions often had partial immunity from surviving it as children — at a terrible cost in child deaths. Newcomers had none.',
        },
        {
          type: 'explain',
          term: 'Quinine',
          lenses: ['medicine', 'science'],
          plain:
            'A drug from the bark of the cinchona tree of the Andes in South America. In 1820 two French chemists, Pelletier and Caventou, extracted it in pure form. It kills malaria parasites in the blood. Pharmacology is the science of how drugs like this act on the body.',
          analogy: 'Taking a small dose every day is like weeding a garden daily: the weeds never get the chance to take over.',
          why: 'Taken regularly as a preventive, quinine let Europeans survive where they had died — decades before anyone knew what malaria was.',
        },
        {
          type: 'story',
          title: 'The Pleiad, 1854',
          lenses: ['medicine', 'history'],
          body: [
            'In 1854 a Scottish naval surgeon, William Balfour Baikie, took command of a small steamship, the Pleiad, far up the Niger and Benue rivers.',
            'He gave every European on board a daily dose of quinine. The expedition was away for months, deep in malarial country — and not one of its Europeans died.',
            'An 1841 Niger expedition had lost dozens of Europeans to fever. The difference was a daily dose of bark.',
          ],
        },
        {
          type: 'story',
          title: 'Why now?',
          lenses: ['economics', 'politics'],
          body: [
            'By the 1880s the rich industrial economies were hungry for raw materials: palm oil for soap and machine grease, rubber for tyres and cables, copper, gold and diamonds — and new markets for their goods.',
            'Rivalry did the rest. Britain’s seizure of Egypt in 1882 alarmed France. Newly united Germany and Italy wanted colonies as proof of greatness.',
            'Once each power feared the others would grab first, everyone started grabbing.',
          ],
        },
        {
          type: 'story',
          title: 'A king’s private project',
          lenses: ['history', 'politics'],
          body: [
            'The most determined grabber was not a country but a man: Leopold II, King of the Belgians. His own parliament didn’t want colonies, so he pursued one personally.',
            'From 1879 he paid the explorer Henry Morton Stanley to travel the Congo River and sign hundreds of treaties with local chiefs — documents in a language few of them could read, “giving” away their land.',
            'At Berlin, the powers recognised Leopold’s claim: an area more than 75 times the size of Belgium.',
          ],
        },
        {
          type: 'explain',
          term: 'Effective occupation',
          lenses: ['politics'],
          plain:
            'The Berlin rule that a power claiming new African coastline had to tell the other powers and actually hold enough authority there to keep order and protect trade. A line on a map was no longer enough.',
          analogy: 'Shouting “dibs!” on a seat doesn’t count — you have to go and sit in it.',
          why: 'It turned claims into a race: plant flags, sign treaties, build forts — before a rival did.',
        },
        {
          type: 'story',
          title: 'What Berlin decided — and what it didn’t',
          lenses: ['history', 'geography'],
          body: [
            'The General Act was signed on 26 February 1885. It opened the Congo basin to free trade, declared the Congo and Niger rivers free for all ships, pledged to fight the slave trade, and set the effective-occupation rule.',
            'A popular myth says the conference sliced Africa up like a cake. It didn’t. Most borders were drawn over the next 30 years, in deals between pairs of European powers — often by people who had never seen the land.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'philosophy'],
          prompt: 'Which statement about the Berlin Conference (1884–85) is accurate?',
          options: [
            'It drew almost all of Africa’s modern borders',
            'It set rules for claiming African land, and the borders were mostly drawn later in separate deals',
            'African rulers signed the final agreement',
            'It gave Ethiopia to Italy',
          ],
          answer: 1,
          explain:
            'Berlin wrote the rules of the race rather than the finished map. Checking a famous story against what the documents actually say is one of the historian’s most useful habits.',
        },
        {
          type: 'compare',
          lenses: ['medicine', 'science', 'history'],
          prompt: 'The historian Daniel Headrick calls these the “tools of empire.” Fill in the blanks.',
          columns: ['What it is', 'Problem it solved', 'Key date'],
          rows: [
            {
              label: 'Quinine',
              cells: ['Anti-malaria drug from tree bark', 'Europeans dying of fever', 'Pleiad voyage, 1854'],
            },
            {
              label: 'River steamboat',
              cells: ['Coal-powered boat', 'Rowing upstream against the current', 'On the Niger from the 1830s'],
            },
            {
              label: 'Maxim gun',
              cells: ['Machine gun firing ~600 rounds a minute', 'Small forces facing large armies', 'Invented 1884'],
            },
          ],
          blanks: [
            [0, 1, ['Soldiers running out of food', 'Ships sinking in storms']],
            [1, 0, ['Wind-powered sailing barge', 'Horse-drawn river barge']],
            [2, 2, ['Invented 1914', 'Invented 1812']],
          ],
          explain:
            'Medicine, engines and weapons from the industrial world. The Maxim gun was invented in the same year the Berlin Conference opened — the next lesson shows what it did.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the Berlin Conference open?',
          event: 'Berlin Conference opens',
          year: 1884,
          min: 1750,
          max: 1950,
          tolerance: 8,
          anchors: [
            { year: 1776, label: 'US independence' },
            { year: 1830, label: 'Liverpool–Manchester Railway' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1884 — about 54 years after the first passenger railway and 30 years before World War I. The whole Scramble fits between Berlin and that war.',
        },
        {
          type: 'recap',
          prompt: 'Why did Europe grab almost all of Africa after 1880 — and not before?',
          keyPoints: [
            'Before, malaria made the interior deadly for Europeans; quinine (proved on the Pleiad, 1854) changed that',
            'Industrial economies wanted raw materials and markets; steamboats and new guns gave them the means',
            'Rivalry — Britain in Egypt, new powers Germany and Italy, King Leopold — turned it into a race',
            'The Berlin Conference (1884–85) set the rules; most borders were drawn later',
          ],
          model:
            'For centuries Europeans stayed on Africa’s coasts partly because malaria killed them inland. Quinine, steamboats and machine guns — tools of the industrial age — removed those limits, while factories wanted rubber, oil and minerals. Rivalry between the powers turned it into a race, and the Berlin Conference of 1884–85 set the rules for claiming land without a single African present.',
        },
      ],
      cards: [
        {
          id: 'scr-date-berlin',
          kind: 'date',
          year: 1884,
          front: 'When did the Berlin Conference on Africa open?',
          back: 'November 1884 (it ended in February 1885)',
          choices: ['1776', '1830', '1914'],
          hook: '30 years before World War I (1914).',
        },
        {
          id: 'scr-num-share-ruled',
          kind: 'number',
          front: 'Roughly what share of Africa did Europeans rule around 1870 — and by 1914?',
          back: 'About 10% → about 90%',
          choices: ['About 50% → about 60%', 'About 30% → about 40%', 'About 90% → about 10%'],
        },
        {
          id: 'scr-concept-quinine',
          kind: 'concept',
          front: 'Why did quinine matter to the Scramble for Africa?',
          back: 'Taken daily, it prevented malaria deaths, letting Europeans survive in Africa’s interior.',
          choices: [
            'It was a valuable crop Europeans wanted to grow',
            'It cured yellow fever and cholera',
            'It was used as gunpowder',
          ],
        },
        {
          id: 'scr-concept-malaria',
          kind: 'concept',
          front: 'What causes malaria, and how does it spread?',
          back: 'A blood parasite (Plasmodium), passed between people by the bites of Anopheles mosquitoes.',
        },
        {
          id: 'scr-person-leopold',
          kind: 'person',
          front: 'Which monarch claimed the Congo basin as his personal colony, recognised at Berlin?',
          back: 'Leopold II, King of the Belgians',
          choices: ['Kaiser Wilhelm II of Germany', 'Queen Victoria', 'Napoleon III of France'],
          hook: 'An area more than 75 times the size of Belgium.',
        },
        {
          id: 'scr-concept-effective-occupation',
          kind: 'concept',
          front: 'What was the Berlin Conference’s rule of “effective occupation”?',
          back: 'To claim new African coastline, a power had to notify the others and actually control the area.',
          choices: [
            'Africans had to vote to join a European empire',
            'Every power got an equal share of land',
            'Only land already on maps could be claimed',
          ],
        },
        {
          id: 'scr-concept-berlin-myth',
          kind: 'concept',
          front: 'Did the Berlin Conference draw Africa’s borders?',
          back: 'Mostly no — that is a myth. It set rules for claiming land; most borders were drawn over the next 30 years in deals between pairs of powers.',
        },
      ],
      teaser:
        'The same year Berlin opened, an American inventor in London demonstrated a gun that could fire about ten bullets a second. What happens when one side has it — and the other doesn’t?',
    },
  ],
  upcoming: [
    {
      title: 'The Maxim Gun',
      summary:
        'Machine guns meet spears and muskets. From the Matabele War to Omdurman (1898), how a handful of soldiers conquered vast territories — and how Africans resisted.',
    },
    {
      title: 'Adwa, 1896',
      summary:
        'Emperor Menelik II buys modern rifles, unites Ethiopia, and crushes an Italian army. The one great African victory that kept a country free.',
    },
    {
      title: 'Red Rubber',
      summary:
        'Rubber quotas, hostages and severed hands in Leopold’s Congo. The first international human-rights campaign, and why the death toll is still disputed.',
    },
    {
      title: 'Lines on a Map',
      summary:
        'How borders were drawn with rulers and rivers in European offices — splitting peoples, joining rivals — and what that meant for the states that inherited them.',
    },
    {
      title: 'The Colonial Order',
      summary:
        'By 1914 only Ethiopia and Liberia are free. What colonial rule meant day to day, how World War I reached Africa, and the seeds of the independence movements to come.',
    },
  ],
}
