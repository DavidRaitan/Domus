import type { Track } from '../types'

// Sources for figures used here: Robert C. Allen, The British Industrial Revolution in Global
// Perspective (2009); E. A. Wrigley, Energy and the English Industrial Revolution (2010);
// M. W. Flinn, The History of the British Coal Industry, vol. 2 (1984) (coal output);
// Kenneth Pomeranz, The Great Divergence (2000); Joel Mokyr, The Enlightened Economy (2009);
// Eric Williams, Capitalism and Slavery (1944); T. R. Malthus, An Essay on the Principle of
// Population (1798); Maddison Project; Britannica (Newcomen, Watt). Energy figures are rounded
// textbook values (bituminous coal ~24–30 MJ/kg; sustained human work ~75 W). Contested
// explanations are presented as a debate, not a verdict.

const BRITAIN = { west: -7.5, south: 50.2, east: 1.8, north: 57 }

export const industrialRevolution: Track = {
  id: 'industrial-revolution',
  series: 'engines',
  tier: 1,
  title: 'The Industrial Revolution',
  tagline:
    'For the first time in history, the energy available to each person starts to climb — and the world’s oldest trap, poverty for almost everyone, begins to break.',
  lenses: ['history', 'science', 'economics', 'medicine'],
  era: [1760, 1850],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'stored-sunlight',
      title: 'Stored Sunlight',
      summary: 'A hissing engine at a coal mine, the trap that kept humanity poor, and why Britain broke out first.',
      question: 'Why did the Industrial Revolution begin in Britain — and why with coal?',
      steps: [
        {
          type: 'orient',
          title: 'The Industrial Revolution',
          from: 1760,
          to: 1850,
          places: [
            { name: 'Manchester', lon: -2.24, lat: 53.48 },
            { name: 'Liverpool', lon: -2.98, lat: 53.41, label: 'left' },
            { name: 'Dudley', lon: -2.08, lat: 52.51 },
            { name: 'Newcastle', lon: -1.61, lat: 54.97, label: 'left' },
            { name: 'Glasgow', lon: -4.25, lat: 55.86 },
            { name: 'London', lon: -0.13, lat: 51.51, label: 'left' },
          ],
          placesNote:
            'The story starts on one small island. Most of it happens within 300 km of Manchester, on top of Britain’s coalfields.',
          mapBounds: BRITAIN,
          lenses: ['history', 'geography'],
          why: 'For all of earlier history almost everyone was poor; here, for the first time, machines burning coal let output grow faster than population — and every modern economy descends from it.',
          context: [
            'Great Britain has about 8 million people — fewer than London has today.',
            'Around the world, roughly eight in ten people live by farming. Nothing on land moves faster than a galloping horse.',
            'China, under the Qianlong Emperor, is the world’s largest economy. India’s weavers make the finest cotton cloth on Earth.',
            'In 1757 Britain’s East India Company won the Battle of Plassey and began to rule Bengal.',
            'Britain’s American colonies are still British. US independence (1776) is 16 years away.',
            'Almost all the energy people use comes from muscle, wood, wind and falling water.',
          ],
        },
        {
          type: 'story',
          title: 'A monster at Dudley, 1712',
          lenses: ['history', 'science'],
          body: [
            'In 1712, beside a coal mine near Dudley Castle in the English Midlands, a strange machine began to move. It was as tall as a house. It hissed, clanked and belched smoke.',
            'Its builders were Thomas Newcomen, an ironmonger from Dartmouth in Devon, and his partner John Calley. Its job was simple: pump water out of a flooded coal mine.',
            'It was slow, loud and shockingly wasteful. It was also the first practical engine to turn the heat of a fire into steady, useful motion.',
          ],
        },
        {
          type: 'explain',
          term: 'Energy',
          lenses: ['science'],
          plain:
            'The ability to make something move, heat up or light up. It is never created or destroyed — it only changes form: sunlight into food, food into muscle power, burning fuel into heat. We measure it in joules, or in kilowatt-hours (kWh), the unit on an electricity bill.',
          analogy: 'Like money changing currency: dollars become euros become yen, but you never get more than you started with — and every exchange skims a little off.',
          why: 'An economy is, underneath, a machine for turning energy into useful things. Whoever controls more energy per person can make more per person.',
        },
        {
          type: 'story',
          title: 'A world of muscle',
          lenses: ['science', 'economics'],
          body: [
            'Before 1700, nearly all work was done by muscles — human and animal — helped a little by windmills and water wheels.',
            'A strong labourer can keep up about 75 watts of work through a long day: enough to light one old-fashioned light bulb. A horse can manage several times that.',
            'That was the ceiling. However clever a society was, it could only do as much work as its people and animals could eat enough food to power.',
          ],
        },
        {
          type: 'predict',
          lenses: ['economics', 'history'],
          prompt: 'Before 1800, when a country got a burst of extra food — say, a new crop — what usually happened within a few generations?',
          options: [
            'People stayed richer for good',
            'The population grew until most people were about as poor as before',
            'Food prices fell to zero',
            'People worked fewer hours',
          ],
          answer: 1,
          reveal:
            'The population grew. More food meant more children survived, until there were more mouths than extra food, and ordinary people were back near where they started. For thousands of years, progress turned into more people, not richer people.',
        },
        {
          type: 'explain',
          term: 'The Malthusian trap',
          lenses: ['economics'],
          plain:
            'The pattern in which any rise in food or income is eaten up by a rising population, so living standards stay close to subsistence — just enough to survive. Named after the English clergyman Thomas Malthus, who described it in 1798.',
          analogy: 'Like a pizza that gets a bit bigger each year while even more friends keep turning up: nobody’s slice grows.',
          why: 'Malthus wrote just as Britain was starting to escape the trap. The escape needed a source of energy that did not come from farmland.',
        },
        {
          type: 'story',
          title: 'Stored sunlight',
          lenses: ['science', 'geography'],
          body: [
            'Coal is the remains of giant swamp forests that grew over 300 million years ago. Their plants caught sunlight and stored its energy in their bodies. Buried, squeezed and heated for ages, they turned into black rock.',
            'So burning coal releases ancient sunlight — millions of years of it, saved up underground.',
            'And it is dense: a kilogram of coal holds about twice the energy of a kilogram of dry wood. Unlike a forest, it doesn’t need farmland to grow.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['science', 'economics'],
          prompt:
            'A kilogram of coal holds about 7 kWh of energy. A labourer doing hard work all day produces about 0.6 kWh. How many days of hard labour are stored in one kilogram of coal?',
          min: 0,
          max: 60,
          step: 1,
          unit: 'days',
          answer: 12,
          tolerance: 4,
          explain:
            '7 ÷ 0.6 ≈ 12 days — nearly two weeks of a person’s sweat in a lump you could hold in two hands. The catch: an engine only turns a small part of that energy into work. Making engines less wasteful is the next lesson’s story.',
        },
        {
          type: 'story',
          title: 'Britain’s lucky rocks',
          lenses: ['geography', 'economics'],
          body: [
            'Britain sits on huge coal seams, many of them close to the surface and close to the sea or rivers — so coal was cheap to dig and cheap to ship.',
            'By the 1600s, as firewood grew scarce and expensive, Londoners were already heating their homes with coal shipped down the coast from Newcastle.',
            'British coal output rose from about 3 million tons a year around 1700 to about 15 million by 1800. But the deeper miners dug, the more their pits flooded.',
          ],
        },
        {
          type: 'explain',
          term: 'Heat engine',
          lenses: ['science'],
          plain:
            'A machine that turns heat into motion. Newcomen’s engine filled a big cylinder with steam, then sprayed in cold water. The steam shrank back into a few drops of water, leaving a near-vacuum — and the weight of the air outside pushed the piston down. A rocking beam turned that push into pumping.',
          analogy: 'Rinse a plastic bottle with hot water, cap it and let it cool: it crumples. Nothing inside pulls — the air outside pushes in.',
          why: 'Every stroke, the cylinder was cooled and then had to be heated again. That wasted most of the fuel — the flaw that a Glasgow instrument-maker would later fix.',
        },
        {
          type: 'choice',
          lenses: ['economics', 'science'],
          prompt: 'For decades, Newcomen engines were used almost only at coal mines. Why?',
          options: [
            'The law banned them anywhere else',
            'They burned so much coal that they only paid where coal was nearly free — at the pit itself',
            'Only miners knew how to build them',
            'They could only pump water, never anything else',
          ],
          answer: 1,
          explain:
            'Newcomen’s engine turned perhaps 1% of its fuel’s energy into work. At a coal mine that didn’t matter: it could burn cheap small coal nobody would buy. Anywhere else, it was far too costly to run.',
        },
        {
          type: 'story',
          title: 'Expensive people, cheap coal',
          lenses: ['economics', 'history'],
          body: [
            'So why Britain? The economic historian Robert Allen offers one influential answer: prices.',
            'In the 1700s British workers were among the best paid in the world — a London labourer earned far more than one in Paris, Delhi or Beijing. Meanwhile British coal was among the cheapest energy on Earth.',
            'So in Britain it paid to invent machines that replaced expensive workers with cheap coal. In lands with cheap labour and dear fuel, the same machines lost money.',
          ],
        },
        {
          type: 'compare',
          lenses: ['economics', 'geography'],
          prompt: 'Allen’s argument, side by side. Fill in the blanks.',
          columns: ['Britain', 'France', 'China (Yangzi Delta)'],
          rows: [
            {
              label: 'Workers’ wages',
              cells: ['High', 'Lower', 'Low'],
            },
            {
              label: 'Energy',
              cells: ['Cheap coal near the surface and the sea', 'Costly; mostly wood and charcoal', 'Coal far away in the north-west'],
            },
            {
              label: 'Did coal-burning machines pay?',
              cells: ['Yes — they saved costly labour', 'Rarely', 'No — people were cheaper'],
            },
          ],
          blanks: [
            [0, 0],
            [1, 0],
            [1, 2],
            [2, 2],
          ],
          explain:
            'Same machines, different prices, different answers. Allen’s point is that inventions spread where they save money — and in the 1700s that was Britain.',
        },
        {
          type: 'story',
          title: 'Other answers',
          lenses: ['history', 'politics', 'philosophy'],
          body: [
            'Not every historian agrees that prices explain it. Joel Mokyr points to an “Industrial Enlightenment”: a culture of tinkerers, scientific societies and skilled craftsmen sharing ideas.',
            'Others stress politics — a Parliament that protected property and granted patents — or empire: Kenneth Pomeranz and, earlier, Eric Williams argued that colonies and plantations worked by enslaved Africans gave Britain land, cotton and profits it could not have had at home.',
            'Most historians now combine several of these. Big events rarely have one cause.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Newcomen’s first working engine start pumping?',
          event: 'Newcomen’s engine at Dudley',
          year: 1712,
          min: 1450,
          max: 1950,
          tolerance: 15,
          anchors: [
            { year: 1492, label: 'Columbus' },
            { year: 1776, label: 'US independence' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1712 — 64 years before US independence. The engine came first; the revolution came slowly, as engines improved and spread beyond the mines over the next century.',
        },
        {
          type: 'recap',
          prompt: 'Why did the Industrial Revolution begin in Britain — and why with coal?',
          keyPoints: [
            'Before 1800, energy came from muscle, wood, wind and water, and the Malthusian trap kept most people poor',
            'Coal is stored ancient sunlight: dense energy that doesn’t need farmland',
            'Britain had coal near the surface and near water, and Newcomen’s engine (1712) pumped its mines',
            'One explanation (Allen): high wages and cheap coal made labour-saving machines pay in Britain first — others stress culture, institutions and empire',
          ],
          model:
            'For thousands of years people depended on muscle and wood, and any gain was eaten up by population growth. Britain sat on cheap, easy-to-reach coal — stored sunlight — and Newcomen’s engine of 1712 used it to pump the mines. Because British wages were high and coal was cheap, machines that swapped workers for coal paid off there first, though culture, politics and empire also played a part.',
        },
      ],
      cards: [
        {
          id: 'ind-date-newcomen',
          kind: 'date',
          year: 1712,
          front: 'When did Thomas Newcomen’s first working steam engine start pumping a coal mine?',
          back: '1712, near Dudley in the English Midlands',
          choices: ['1492', '1666', '1776'],
          hook: '64 years before US independence (1776).',
        },
        {
          id: 'ind-concept-malthus',
          kind: 'concept',
          front: 'What is the Malthusian trap?',
          back: 'Any rise in food or income is eaten up by population growth, so most people stay near subsistence. Described by Thomas Malthus in 1798.',
          choices: [
            'Rising wages cause workers to stop working',
            'Countries that trade grow poorer',
            'Machines always destroy more jobs than they create',
          ],
        },
        {
          id: 'ind-concept-stored-sunlight',
          kind: 'concept',
          front: 'Why is coal called “stored sunlight”?',
          back: 'It formed from ancient plants (over 300 million years ago) that captured the Sun’s energy; burning it releases that energy.',
        },
        {
          id: 'ind-num-coal-energy',
          kind: 'number',
          front: 'Roughly how many days of hard human labour does 1 kg of coal hold in energy?',
          back: 'About 12 days (≈7 kWh vs ≈0.6 kWh a day)',
          choices: ['About 1 hour', 'About 1 day', 'About 1 year'],
          hook: 'Nearly two weeks of sweat in a lump you can hold.',
        },
        {
          id: 'ind-cause-allen',
          kind: 'cause',
          front: 'In Robert Allen’s explanation, why did machines catch on in Britain first?',
          back: 'British wages were high and coal was cheap, so replacing workers with coal-burning machines saved money there.',
          choices: [
            'Britain had the cheapest workers in the world',
            'Only Britain had scientists',
            'Britain banned hand labour by law',
          ],
        },
        {
          id: 'ind-concept-heat-engine',
          kind: 'concept',
          front: 'How did Newcomen’s engine make the piston move?',
          back: 'Steam filled the cylinder, cold water condensed it into a vacuum, and the air outside pushed the piston down.',
          choices: [
            'Burning gunpowder pushed the piston up',
            'Falling water turned a wheel',
            'A horse walked in circles to turn it',
          ],
          hook: 'Like a hot bottle crumpling as it cools.',
        },
        {
          id: 'ind-place-newcastle',
          kind: 'place',
          front: 'From which northern English port did coal travel by sea to London from the 1600s?',
          back: 'Newcastle upon Tyne',
          choices: ['Bristol', 'Dover', 'Plymouth'],
          hook: 'Hence the old saying: “carrying coals to Newcastle.”',
        },
      ],
      teaser:
        'Newcomen’s engine threw away about 99% of its fuel. In the 1760s, a young instrument-maker at Glasgow University was handed a broken model of one to repair — and worked out exactly where all that heat was going.',
    },
  ],
  upcoming: [
    {
      title: 'Watt’s Separate Condenser',
      summary:
        'James Watt’s 1769 patent keeps the cylinder hot and cools the steam somewhere else. How heat engines work, why efficiency matters, and how Boulton & Watt sold power by the horse.',
    },
    {
      title: 'The Mills of Manchester',
      summary:
        'Arkwright’s water frame, Adam Smith’s pin factory (1776) and the division of labour — and the enslaved workers in America who grew the cotton.',
    },
    {
      title: 'Smoke, Sickness and Children',
      summary:
        'Richer on average, but at what cost? Child labour, cholera and short lives in the new cities — and the long debate over whether workers were better off.',
    },
    {
      title: 'The Rocket and the Railway',
      summary:
        'The Liverpool–Manchester Railway opens in 1830 and a death on opening day shows how new the speed is. Distance shrinks, and coal now moves the world.',
    },
    {
      title: 'The Great Escape',
      summary:
        'By 1850 Britain is the workshop of the world and incomes keep rising. Why the trap stayed broken — and how steam, guns and medicine let Europe reach into other continents.',
    },
  ],
}
