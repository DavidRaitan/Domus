import type { Track } from '../types'

// Sources for figures used here: Robert C. Allen, The British Industrial Revolution in Global
// Perspective (2009); E. A. Wrigley, Energy and the English Industrial Revolution (2010);
// M. W. Flinn, The History of the British Coal Industry, vol. 2 (1984) (coal output);
// Kenneth Pomeranz, The Great Divergence (2000); Joel Mokyr, The Enlightened Economy (2009);
// Eric Williams, Capitalism and Slavery (1944); T. R. Malthus, An Essay on the Principle of
// Population (1798); Maddison Project; Britannica (Newcomen, Watt). Energy figures are rounded
// textbook values (bituminous coal ~24–30 MJ/kg; sustained human work ~75 W). Contested
// explanations are presented as a debate, not a verdict.
//
// Lessons 2–6: Richard L. Hills, Power from Steam (1989) and Britannica (Watt, Boulton, Black,
// Wilkinson, sun-and-planet gear, Pickard’s crank patent); Boswell, Life of Johnson (Soho visit,
// 1776); Boldrin & Levine, Against Intellectual Monopoly (2008); Selgin & Turner, “Strong Steam,
// Weak Patents”, J. Law & Econ. (2011); Adam Smith, The Wealth of Nations (1776), Book I ch. 1
// and Book V; E. P. Thompson, “Time, Work-Discipline and Industrial Capitalism” (1967);
// Derwent Valley Mills WHS (Cromford); Sven Beckert, Empire of Cotton (2014); US census
// (enslaved population 1790, 1860); Sadler Committee report (1832) and Factory Commission (1833);
// Factory Act 1833; E. J. Hobsbawm, “The Machine Breakers” (1952); Engels, The Condition of the
// Working Class in England (1845); Chadwick, Sanitary Condition of the Labouring Population
// (1842); Szreter & Mooney, Econ. Hist. Rev. (1998) (urban life expectancy); C. H. Feinstein,
// J. Econ. Hist. (1998); R. C. Allen, “Engels’ pause”, Explorations in Econ. Hist. (2009);
// National Railway Museum (Rainhill, Rocket, Huskisson); Railway Clearing House and the
// Statutes (Definition of Time) Act 1880; Railway Mania (272 Acts in 1846); N. Crafts & C. K.
// Harley (growth rates); P. Bairoch (1982) (shares of world manufacturing); Angus Deaton, The
// Great Escape (2013); Our World in Data (primary energy per person, extreme poverty after
// Bourguignon & Morrisson 2002); NOAA and WMO (CO₂, warming). Journey times are rounded; the
// 1850s London–Manchester rail time (~5–6 h) is inferred from contemporary express speeds.

const BRITAIN = { west: -7.5, south: 50.2, east: 1.8, north: 57 }
const INDUSTRIAL_WORLD = { west: -85, south: 25, east: 148, north: 62 }

export const industrialRevolution: Track = {
  id: 'industrial-revolution',
  series: 'engines',
  tier: 1,
  title: 'The Industrial Revolution',
  tagline:
    'For the first time in history, the energy available to each person starts to climb — and the world’s oldest trap, poverty for almost everyone, begins to break.',
  lenses: ['history', 'science', 'economics', 'medicine', 'geography', 'politics'],
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
            [0, 0, ['Lowest in Europe', 'About the same as China']],
            [1, 0, ['Mostly peat and firewood', 'Imported whale oil and timber']],
            [1, 2, ['Cheap coal right beside the delta', 'Abundant oil wells nearby']],
            [2, 2, ['Yes — labour was costly', 'Yes — coal was cheap there']],
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

    // ─────────────────────────────────────────────────────────────── 2
    {
      id: 'watts-condenser',
      title: 'Watt’s Separate Condenser',
      summary: 'A broken model on a Glasgow workbench, an idea on a Sunday walk, and the partnership that sold power by the horse.',
      question: 'How did James Watt make the steam engine cheap enough to use almost anywhere?',
      previously:
        'Britain sat on cheap coal, and from 1712 Newcomen’s engines pumped its flooded mines — while wasting about 99% of their fuel.',
      steps: [
        {
          type: 'story',
          title: 'A model that kept stalling, 1763',
          lenses: ['history', 'science'],
          body: [
            'In the winter of 1763–64, James Watt, a 27-year-old maker of scientific instruments at the University of Glasgow, was handed a small working model of a Newcomen engine. Professor John Anderson used it in his lectures, but it kept stalling.',
            'Watt repaired it. It still managed only a few strokes before its boiler ran out of steam.',
            'Most repairers would have blamed the model. Watt asked a sharper question: where was all that steam going?',
          ],
        },
        {
          type: 'predict',
          lenses: ['science'],
          prompt:
            'Every stroke, Newcomen’s cylinder was sprayed with cold water, then filled with fresh steam. What do you think happened to much of that fresh steam?',
          options: [
            'It pushed the piston extra hard',
            'It turned back into water on the cold cylinder walls, just warming the metal up again',
            'It leaked out through the chimney',
            'It was stored for the next stroke',
          ],
          answer: 1,
          reveal:
            'Watt measured it: the model used several times as much steam as its cylinder could hold. Most of it went into reheating metal that the cold spray had just chilled — heat in, heat out, every stroke, all day long.',
        },
        {
          type: 'explain',
          term: 'Latent heat',
          lenses: ['science'],
          plain:
            'Heat always flows from hotter things to colder ones. Latent (“hidden”) heat is the extra heat needed to turn a liquid into a gas without making it any hotter. Water at 100 °C must soak up a lot more heat before it becomes steam at 100 °C — and the steam gives all of it back when it condenses on something cold.',
          analogy:
            'A pan of water sits at 100 °C for many minutes while it boils away. The burner is still pouring in heat; all of it is going into making steam.',
          why: 'Watt’s friend Joseph Black, a Glasgow professor, had studied latent heat a few years earlier. It explained the puzzle: every puff of steam that condensed on the cold cylinder dumped a big load of heat — paid for in coal.',
        },
        {
          type: 'estimate',
          lenses: ['science'],
          prompt:
            'Warming 1 kg of water from freezing (0 °C) to boiling (100 °C) takes about 420 kJ of heat. Turning that boiling water into steam takes about 2,260 kJ more. About how many times as much heat is that?',
          min: 1,
          max: 20,
          step: 1,
          unit: 'times',
          answer: 5,
          tolerance: 1,
          explain:
            '2,260 ÷ 420 ≈ 5.4. Making steam takes over five times the heat needed to bring water to the boil. So every bit of steam wasted on a cold cylinder wasted a lot of coal.',
        },
        {
          type: 'story',
          title: 'A walk on Glasgow Green, 1765',
          lenses: ['history', 'science'],
          body: [
            'Watt later said the answer came to him in 1765, on a Sunday afternoon walk across Glasgow Green.',
            'Why cool the cylinder at all? Let the steam rush out into a separate vessel, kept cold all the time. There it would condense and make the vacuum — while the cylinder stayed hot.',
            'One engine, two places: hot where it had to be hot, cold where it had to be cold.',
          ],
        },
        {
          type: 'explain',
          term: 'Separate condenser',
          lenses: ['science'],
          plain:
            'A chamber kept cold with water, joined to the cylinder by a valve. Gas always rushes from high pressure to low, so when the valve opens the steam flows into the cold chamber and turns to water, leaving a vacuum behind. Watt also wrapped the cylinder in a jacket of hot steam, so it never cooled.',
          analogy: 'To cool one drink, you put it in the fridge. You don’t chill the whole kitchen and then heat it up again.',
          why: 'No more reheating the cylinder every stroke. That one change cut the coal an engine needed by roughly two-thirds to three-quarters.',
        },
        {
          type: 'explain',
          term: 'Efficiency',
          lenses: ['science', 'economics'],
          plain:
            'The share of a fuel’s energy that a machine turns into useful work. The rest escapes, mostly as waste heat.',
          analogy: 'A leaky bucket: efficiency is how much water is still in it when you reach the garden.',
          why: 'A Newcomen engine managed roughly 0.5–1%; Watt’s engines roughly 2–4%. That is tiny next to a modern car engine (about 25–35%) — but it meant the same work for a third to a quarter of the coal. Suddenly engines could pay far from the coal pits.',
        },
        {
          type: 'choice',
          lenses: ['science'],
          prompt: 'Why did the separate condenser save so much coal?',
          options: [
            'It burned the coal at a higher temperature',
            'The cylinder stayed hot, so fresh steam wasn’t wasted reheating it',
            'It used air pressure instead of steam',
            'It made the engine small enough to carry',
          ],
          answer: 1,
          explain:
            'Watt kept the same basic idea — steam, vacuum, air pressure. He changed where the cooling happened. Understanding the science of heat pointed straight to the fix.',
        },
        {
          type: 'story',
          title: 'From idea to engine',
          lenses: ['history', 'economics'],
          body: [
            'An idea is not an engine. Watt patented the condenser in 1769, backed by the ironmaster John Roebuck, but his cylinders were never quite round: steam hissed out past the piston.',
            'Roebuck went bankrupt in 1773. His share passed to Matthew Boulton, a Birmingham manufacturer, and in 1774 Watt moved to Birmingham.',
            'That same year the cannon-maker John Wilkinson found a way to bore iron cylinders almost perfectly round. In 1776 the first Boulton and Watt engines went to work.',
          ],
        },
        {
          type: 'explain',
          term: 'Patent',
          lenses: ['economics', 'politics'],
          plain:
            'A grant from the government giving an inventor the sole right to make and sell an invention for a fixed time — 14 years in Britain then — in return for publishing how it works. It is one kind of intellectual property: owning an idea.',
          analogy: 'Like a fence round a field you cleared: others can look over it and learn, but can’t farm it until the fence comes down.',
          why: 'Watt’s 1769 patent would have run out in 1783, before he had earned anything from it. In 1775 Boulton persuaded Parliament to extend it to 1800.',
        },
        {
          type: 'story',
          title: 'Selling power',
          lenses: ['history', 'economics'],
          body: [
            'Boulton owned the Soho Manufactory near Birmingham, a showpiece factory making buttons, buckles and silverware. When the writer James Boswell toured it in 1776, Boulton told him he sold what the whole world wanted: power.',
            'Customers paid a yearly fee worth one-third of the coal they saved compared with a Newcomen engine.',
            'To win over brewers and millers who used horses, Watt rated his engines in horsepower: about 750 watts, the steady work of roughly ten labourers.',
          ],
        },
        {
          type: 'story',
          title: 'Round and round',
          lenses: ['science', 'economics'],
          body: [
            'Pumping is up and down. But millstones, lathes and spinning machines need turning. The obvious link was a crank, like a bicycle pedal — but in 1780 a rival, James Pickard, had patented the crank for steam engines.',
            'So Boulton and Watt designed around it. Their sun-and-planet gear, patented in 1781 and probably devised by their engineer William Murdoch, turned the beam’s rocking into rotation.',
            'Now steam could drive flour mills, breweries — and cotton mills.',
          ],
        },
        {
          type: 'story',
          title: 'Did the patent help?',
          lenses: ['economics', 'politics'],
          body: [
            'Patents are meant to reward inventors — and Boulton poured money into engines for years before earning any back.',
            'But the economists Michele Boldrin and David Levine argue that Watt used his patent to block rivals, such as Jonathan Hornblower’s improved engine, and that engines improved faster once it expired in 1800. Other historians reply that the evidence is mixed.',
            'The same argument goes on today over medicines and software: how much protection helps inventors, and how much holds everyone back?',
          ],
        },
        {
          type: 'match',
          lenses: ['history', 'science'],
          prompt: 'Who did what? Match each clue to the person.',
          categories: ['James Watt', 'Matthew Boulton', 'Joseph Black', 'John Wilkinson'],
          items: [
            { text: 'Invented the separate condenser', category: 'James Watt' },
            { text: 'Measured horses to define horsepower', category: 'James Watt' },
            { text: 'Ran the business and found the money', category: 'Matthew Boulton' },
            { text: 'Told James Boswell he sold power', category: 'Matthew Boulton' },
            { text: 'Studied latent heat in Glasgow', category: 'Joseph Black' },
            { text: 'Bored iron cylinders almost perfectly round', category: 'John Wilkinson' },
          ],
          explain:
            'Great inventions are rarely one-person jobs. Watt needed science (Black), precision engineering (Wilkinson) and a businessman willing to wait years for a profit (Boulton).',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Watt patent his separate condenser?',
          event: 'Watt’s separate-condenser patent',
          year: 1769,
          min: 1650,
          max: 1850,
          tolerance: 10,
          anchors: [
            { year: 1712, label: 'Newcomen’s engine' },
            { year: 1776, label: 'US independence' },
            { year: 1789, label: 'French Revolution' },
          ],
          explain:
            '1769 — 57 years after Newcomen’s first engine and seven before US independence. The first Boulton and Watt engines went to work in 1776, the year the Americans declared independence.',
        },
        {
          type: 'recap',
          prompt: 'How did James Watt make the steam engine cheap enough to use almost anywhere?',
          keyPoints: [
            'Newcomen’s engine wasted fuel reheating a cylinder that was cooled every stroke',
            'Latent heat means steam carries a lot of heat, so every wasted puff wasted coal',
            'Watt’s separate condenser (patent 1769) kept the cylinder hot and cut coal use by two-thirds or more',
            'Boulton’s money, Wilkinson’s cylinders and a patent extended to 1800 turned the idea into working engines from 1776',
            'The sun-and-planet gear (1781) gave rotary motion, so engines could drive machines',
          ],
          model:
            'Newcomen’s engine cooled and reheated its cylinder every stroke, and because steam carries a lot of latent heat, that wasted most of the coal. Watt’s separate condenser, patented in 1769, condensed the steam in a separate cold chamber, so the cylinder stayed hot and the engine needed a third or less of the coal. With Boulton’s money, Wilkinson’s accurate cylinders and a patent extended to 1800, engines went to work from 1776 — and the sun-and-planet gear let them turn the wheels of mills, not just pump mines.',
        },
      ],
      cards: [
        {
          id: 'ind-date-watt-patent',
          kind: 'date',
          year: 1769,
          front: 'When did James Watt patent his separate condenser?',
          back: '1769',
          choices: ['1712', '1776', '1830'],
          hook: '57 years after Newcomen’s engine (1712); seven before US independence (1776).',
        },
        {
          id: 'ind-concept-condenser',
          kind: 'concept',
          front: 'What did Watt’s separate condenser do?',
          back: 'It condensed the steam in a separate cold chamber, so the main cylinder stayed hot and no fuel was wasted reheating it.',
          choices: [
            'It burned the coal at a higher temperature',
            'It replaced steam with compressed air',
            'It recycled the smoke as fuel',
          ],
          hook: 'Hot where it must be hot, cold where it must be cold.',
        },
        {
          id: 'ind-concept-latent-heat',
          kind: 'concept',
          front: 'What is latent heat, and why did it matter to Watt?',
          back: 'The extra heat needed to turn water into steam without raising its temperature — over five times the heat to bring water to the boil. Steam condensing on a cold cylinder dumped all that heat, wasting coal.',
        },
        {
          id: 'ind-person-boulton',
          kind: 'person',
          front: 'Which Birmingham manufacturer, owner of the Soho Manufactory, became Watt’s partner in 1775?',
          back: 'Matthew Boulton',
          choices: ['John Wilkinson', 'Joseph Black', 'Thomas Newcomen'],
        },
        {
          id: 'ind-num-efficiency',
          kind: 'number',
          front: 'Roughly what share of its fuel’s energy did a Watt engine turn into work? (Newcomen: about 1%)',
          back: 'About 2–4% — the same work for a third to a quarter of the coal',
          choices: ['About 25%', 'About 50%', 'About 90%'],
        },
        {
          id: 'ind-cause-sun-planet',
          kind: 'cause',
          front: 'Why did Boulton and Watt use a sun-and-planet gear instead of a simple crank?',
          back: 'A rival, James Pickard, had patented the crank for steam engines in 1780, so they designed around his patent.',
          choices: [
            'Cranks had not been invented yet',
            'The gear was cheaper to make',
            'Parliament had banned cranks as unsafe',
          ],
        },
        {
          id: 'ind-num-horsepower',
          kind: 'number',
          front: 'Watt defined the horsepower. About how much work is one horsepower?',
          back: 'About 750 watts — the steady work of roughly ten labourers',
          choices: ['About 75 watts — one labourer', 'About 7,500 watts — a hundred labourers', 'About 7 watts — a candle'],
        },
      ],
      teaser:
        'Engines could now turn wheels. Yet one of the first great factories didn’t use steam at all. In a Derbyshire valley, a former barber and wig-maker named Richard Arkwright built a mill beside a stream — and ran it day and night.',
    },

    // ─────────────────────────────────────────────────────────────── 3
    {
      id: 'mills-of-manchester',
      title: 'The Mills of Manchester',
      summary:
        'From cottage spinning wheels to Cottonopolis: four machines, the factory clock, Adam Smith’s pin factory — and the enslaved people who grew the cotton.',
      question: 'How did cotton turn Manchester into the world’s first industrial city — and who paid the price?',
      previously:
        'Watt’s separate condenser (patented 1769) cut an engine’s coal use by two-thirds or more, and from 1781 his sun-and-planet gear let engines turn wheels.',
      steps: [
        {
          type: 'story',
          title: 'The barber of Bolton',
          lenses: ['history', 'economics'],
          body: [
            'Richard Arkwright started out as a barber and wig-maker in Bolton, Lancashire. He had no scientific training, but he could see money in cotton thread.',
            'With a clockmaker called John Kay (no relation of the weaver you’ll meet in a moment), he built a spinning machine and patented it in 1769 — the same year as Watt’s condenser.',
            'In 1771, with his partner Jedediah Strutt, he built a mill at Cromford in Derbyshire, where a fast stream turned a great water wheel.',
          ],
        },
        {
          type: 'explain',
          term: 'Spinning and weaving',
          lenses: ['history', 'economics'],
          plain:
            'The two big jobs in making cloth. Spinning twists loose, fluffy fibres into a long, strong thread (yarn). Weaving criss-crosses threads on a loom to make cloth: the lengthwise threads are the warp, the crosswise ones the weft.',
          analogy:
            'Spinning is like twisting cotton wool between your fingers into string. Weaving is like a lattice-top pie: strips go one way, then over-and-under the other way.',
          why: 'For thousands of years both were done by hand, mostly at home. The cotton inventions attacked these two jobs, one after the other.',
        },
        {
          type: 'predict',
          lenses: ['economics'],
          prompt: 'In 1733 John Kay’s “flying shuttle” let a weaver work roughly twice as fast. What problem do you think that caused?',
          options: [
            'Too much cloth — nobody would buy it',
            'Weavers ran short of thread, because spinning by hand couldn’t keep up',
            'Looms kept catching fire',
            'Weavers lost their jobs overnight',
          ],
          answer: 1,
          reveal:
            'Thread ran short. It already took several hand-spinners to keep one weaver busy; now it took even more. Spinning had become the bottleneck — the slowest step, holding everything else up. The prize for fixing it was huge.',
        },
        {
          type: 'story',
          title: 'The race between two jobs',
          lenses: ['history', 'economics'],
          body: [
            'The fix came from a weaver near Blackburn, James Hargreaves. Around 1764 he built the spinning jenny: one person turning a wheel could spin eight threads at once, and later models spun dozens.',
            'Hand-spinners, fearing for their living, broke into his house and smashed his machines. He moved to Nottingham.',
            'A popular story says the jenny was named after his daughter or his wife. That is probably a myth: “jenny” was most likely short for “engine”.',
          ],
        },
        {
          type: 'story',
          title: 'Stronger thread, finer thread',
          lenses: ['history', 'economics'],
          body: [
            'The jenny’s thread was too weak for the warp. Arkwright’s water frame spun it strong — but it was big and needed a water wheel, so it had to live in a mill.',
            'In 1779 Samuel Crompton of Bolton combined the two machines in his “mule” (a cross, like the animal), spinning thread fine and strong enough to rival India’s best muslins.',
            'Crompton never patented it; Parliament later gave him £5,000. Arkwright’s own patents were overturned in court in 1785.',
          ],
        },
        {
          type: 'match',
          lenses: ['history'],
          prompt: 'Match each clue to its machine.',
          categories: ['Flying shuttle', 'Spinning jenny', 'Water frame', 'Mule'],
          items: [
            { text: 'John Kay, 1733', category: 'Flying shuttle' },
            { text: 'Made weaving about twice as fast', category: 'Flying shuttle' },
            { text: 'James Hargreaves, about 1764', category: 'Spinning jenny' },
            { text: 'Hand-powered; spun eight threads at once', category: 'Spinning jenny' },
            { text: 'Richard Arkwright, 1769', category: 'Water frame' },
            { text: 'Strong warp thread; needed a mill', category: 'Water frame' },
            { text: 'Samuel Crompton, 1779', category: 'Mule' },
            { text: 'A cross of two machines; fine, strong thread', category: 'Mule' },
          ],
          explain:
            'Each machine fixed the bottleneck the last one created: faster weaving → a thread shortage → the jenny → stronger thread (water frame) → finer thread (mule). Inventions tend to arrive in chains, not one at a time.',
        },
        {
          type: 'explain',
          term: 'The factory system',
          lenses: ['economics', 'history'],
          plain:
            'Bringing many workers into one building to work at shared, power-driven machines, under managers who set the hours and the pace. Before, most spinning and weaving was “put out”: a merchant delivered raw cotton to cottages and collected the yarn or cloth, paying by the piece.',
          analogy: 'Like the difference between everyone cooking at home and working shifts in a restaurant kitchen.',
          why: 'A water wheel or a steam engine can’t be shared between cottages miles apart. Arkwright’s machines needed power, so the workers had to come to the power.',
        },
        {
          type: 'explain',
          term: 'Time discipline',
          lenses: ['history', 'economics'],
          plain:
            'Working by the clock instead of by the task. Farm and cottage workers worked in bursts, by daylight and season, and some took Mondays off. In a mill, the machines started at a fixed hour and set the pace, and everyone had to be there.',
          analogy: 'Like a school bell: it rings whether or not you’ve finished your sentence.',
          why: 'Cromford ran day and night in long shifts, and mill rules fined workers for lateness or talking. The historian E. P. Thompson argued that learning to live by the clock was one of the deepest changes of the whole revolution.',
        },
        {
          type: 'story',
          title: 'Steam comes to town',
          lenses: ['geography', 'economics'],
          body: [
            'Water wheels need fast streams, and fast streams are in remote hills. Once Watt’s rotary engines arrived in the 1780s, a mill could be built anywhere coal could reach — beside the canals, workers and merchants of Manchester.',
            'The town grew from about 25,000 people in the 1770s to over 300,000 by 1851: twelve times bigger in under 80 years.',
            'Mill chimneys crowded its skyline. People called it “Cottonopolis”.',
          ],
        },
        {
          type: 'explain',
          term: 'Division of labour',
          lenses: ['economics'],
          plain:
            'Splitting a job into many small steps, each done by a different worker who does only that step, over and over.',
          analogy: 'Like a car wash with stations — soap, scrub, rinse, dry — instead of one person doing the whole car.',
          why: 'In The Wealth of Nations (1776) the Scottish thinker Adam Smith made it the very first idea of his book. Specialists get quicker with practice, lose no time switching tasks — and simple steps are easier to hand over to machines.',
        },
        {
          type: 'estimate',
          lenses: ['economics'],
          prompt:
            'Smith described a small pin workshop where 10 workers split pin-making into about 18 steps. Together they made about 48,000 pins a day. How many pins is that per worker?',
          min: 0,
          max: 10000,
          step: 100,
          unit: 'pins',
          answer: 4800,
          tolerance: 400,
          explain:
            '48,000 ÷ 10 = 4,800 pins each. Working alone, Smith reckoned, an untrained worker could hardly make 20 a day — perhaps not one. But Smith also warned that doing one simple task all day could dull a worker’s mind, and he argued for cheap public schooling.',
        },
        {
          type: 'story',
          title: 'Where the cotton grew',
          lenses: ['geography', 'history', 'economics'],
          body: [
            'Cotton doesn’t grow in Britain’s climate. At first it came from the Caribbean, Brazil and the Ottoman lands. Then in 1793 Eli Whitney’s cotton gin made it quick to strip the seeds from the cotton that grew well across the American South.',
            'Plantations spread west. By the mid-1800s they supplied about three-quarters of Britain’s raw cotton, grown and picked by enslaved people — whose number in the USA rose from about 700,000 in 1790 to about 4 million in 1860.',
          ],
        },
        {
          type: 'story',
          title: 'How much did slavery matter?',
          lenses: ['history', 'economics', 'politics'],
          body: [
            'Britain abolished its own slave trade in 1807 and slavery in most of its colonies in 1833 — yet Lancashire’s mills kept buying slave-grown American cotton for decades.',
            'Historians still debate how central slavery was. In 1944 Eric Williams argued that profits from slavery helped fund industrialisation. Many economic historians later found those profits too small to pay for much. Sven Beckert (2014) replies that the deeper link was the cotton itself: without cheap, slave-grown cotton, the industry could not have grown so big, so fast.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'economics'],
          prompt: 'Which statement best fits the evidence?',
          options: [
            'Britain’s mills used cotton grown on English farms',
            'By the mid-1800s most of Britain’s raw cotton was grown by enslaved people in the American South',
            'Britain stopped buying American cotton when it abolished slavery in its colonies in 1833',
            'Historians all agree that slavery paid for the Industrial Revolution',
          ],
          answer: 1,
          explain:
            'That fact is not in dispute. What historians debate is how much it mattered — whether the industry could have grown the same way without it. Holding a firm fact and an open question side by side is a key historian’s habit.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Arkwright open his mill at Cromford?',
          event: 'Cromford Mill opens',
          year: 1771,
          min: 1650,
          max: 1850,
          tolerance: 8,
          anchors: [
            { year: 1712, label: 'Newcomen’s engine' },
            { year: 1769, label: 'Watt’s patent' },
            { year: 1776, label: 'US independence' },
          ],
          explain:
            '1771 — two years after Watt’s patent and five before US independence. Cromford ran on water; steam-powered cotton mills followed from the 1780s.',
        },
        {
          type: 'recap',
          prompt: 'How did cotton turn Manchester into the world’s first industrial city — and who paid the price?',
          keyPoints: [
            'A chain of inventions — flying shuttle (1733), jenny (about 1764), water frame (1769), mule (1779) — each fixed the last bottleneck',
            'Powered machines created the factory system and the discipline of the clock (Cromford, 1771)',
            'Adam Smith’s division of labour (1776) explains the huge gains in output',
            'Steam let mills move to towns: Manchester grew from about 25,000 to over 300,000 by 1851',
            'The raw cotton was grown largely by enslaved people in the American South',
          ],
          model:
            'A chain of cotton inventions, each fixing the bottleneck the last one created, needed water or steam power, so work moved from cottages into factories run by the clock, beginning with Arkwright’s Cromford Mill in 1771. Splitting work into small specialised steps multiplied output, as Adam Smith explained in 1776, and once Watt’s engines could turn wheels, mills crowded into Manchester, which grew twelvefold. The price was paid by long factory hours at home and, across the Atlantic, by the enslaved people who grew the cotton.',
        },
      ],
      cards: [
        {
          id: 'ind-date-cromford',
          kind: 'date',
          year: 1771,
          front: 'When did Richard Arkwright open his water-powered mill at Cromford?',
          back: '1771',
          choices: ['1712', '1733', '1801'],
          hook: 'Two years after Watt’s patent (1769), five before US independence (1776).',
        },
        {
          id: 'ind-person-arkwright',
          kind: 'person',
          front: 'Which former barber and wig-maker patented the water frame and built Cromford Mill?',
          back: 'Richard Arkwright',
          choices: ['Samuel Crompton', 'James Hargreaves', 'Matthew Boulton'],
        },
        {
          id: 'ind-cause-bottleneck',
          kind: 'cause',
          front: 'Why did Kay’s flying shuttle (1733) set off a rush of spinning inventions?',
          back: 'Weavers now used thread faster than hand-spinners could make it, so spinning became the bottleneck.',
          choices: [
            'Parliament offered a prize for spinning machines',
            'Wool had been banned',
            'Cotton prices collapsed',
          ],
        },
        {
          id: 'ind-num-pins',
          kind: 'number',
          front: 'In Adam Smith’s pin workshop (1776), about how many pins did 10 specialised workers make in a day?',
          back: 'About 48,000 — some 4,800 each, against perhaps 20 working alone',
          choices: ['About 200', 'About 5,000', 'About 5 million'],
          hook: 'Division of labour: 18 steps, 10 people.',
        },
        {
          id: 'ind-num-manchester',
          kind: 'number',
          front: 'Manchester had about 25,000 people in the 1770s. About how many did it have by 1851?',
          back: 'Over 300,000 — about twelve times as many',
          choices: ['About 40,000', 'About 100,000', 'About 3 million'],
        },
        {
          id: 'ind-concept-time-discipline',
          kind: 'concept',
          front: 'What was “time discipline” in the new factories?',
          back: 'Working by the clock, not the task: fixed hours set by bells and machines, with fines for lateness — unlike the looser rhythms of farm and cottage work.',
        },
        {
          id: 'ind-cause-cotton-south',
          kind: 'cause',
          front: 'By the mid-1800s, where did most of Britain’s raw cotton come from?',
          back: 'Plantations in the American South, worked by enslaved people',
          choices: ['Farms in Lancashire', 'Egypt', 'Australia'],
        },
      ],
      teaser:
        'The mills made fortunes and Manchester boomed. But in 1832 a 23-year-old woman from Leeds stood before a committee of Parliament and described what the mill had done to her body since she started work — at the age of six.',
    },

    // ─────────────────────────────────────────────────────────────── 4
    {
      id: 'smoke-sickness-children',
      title: 'Smoke, Sickness and Children',
      summary:
        'Child workers, machine-breakers and cholera in the crowded new cities — and the long argument over whether workers were better off.',
      question: 'Did the Industrial Revolution make ordinary people’s lives better or worse — at first?',
      previously:
        'Cotton machines and the factory clock turned Manchester into Cottonopolis, fed by cotton grown by enslaved people in the American South.',
      steps: [
        {
          type: 'story',
          title: 'Elizabeth Bentley, 1832',
          lenses: ['history', 'medicine'],
          body: [
            'In June 1832 a committee of MPs led by Michael Sadler questioned witnesses about children in the mills. One was Elizabeth Bentley, aged 23, from Leeds.',
            'She told them she had started work in a flax mill at six. When trade was busy she worked from 5 in the morning until 9 at night, with 40 minutes’ break at noon. Children who fell behind were beaten.',
            'The heavy work, she said, had left her body bent out of shape. Now she lived in the poorhouse.',
          ],
        },
        {
          type: 'story',
          title: 'Can we trust it?',
          lenses: ['history', 'philosophy'],
          body: [
            'Sadler was campaigning to limit children’s work to ten hours a day, and he chose witnesses who backed him. Their answers weren’t tested by cross-examination. Mill owners called the report one-sided.',
            'So in 1833 the government sent its own Factory Commission into the mills. It found some claims exaggerated — but agreed that long hours for children were real and common.',
            'Good historians do the same: take testimony seriously, then check it.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'politics'],
          prompt: 'Parliament passed a Factory Act in 1833. What was the youngest age at which it let a child work in a textile mill?',
          options: ['5', '9', '14', '16'],
          answer: 1,
          reveal:
            'Nine. Before that, children of five or six worked in some mills. Earlier laws in 1802 and 1819 had set limits too — but this was the first with inspectors to check.',
        },
        {
          type: 'explain',
          term: 'The Factory Act of 1833',
          lenses: ['politics', 'history'],
          plain:
            'A law for textile mills: no children under 9; children aged 9–13 limited to 9 hours a day (48 a week), plus 2 hours of schooling a day; young people aged 13–17 limited to 12 hours a day (69 a week); no night work for anyone under 18.',
          analogy: 'Like a referee: the earlier laws wrote down rules, but nobody was sent onto the pitch to blow the whistle.',
          why: 'This act appointed four factory inspectors for the whole country — few, but a start. It led on to the Ten Hours Act of 1847, and to the idea that governments may regulate work.',
        },
        {
          type: 'story',
          title: 'General Ludd, 1811',
          lenses: ['history', 'politics'],
          body: [
            'Years earlier, some workers had fought back with hammers. From 1811, stocking-knitters in Nottinghamshire broke into workshops at night and smashed knitting frames, signing letters in the name of “General Ludd” — an invented leader.',
            'The Luddites spread to Yorkshire and Lancashire. In 1812 the government made machine-breaking punishable by death and sent thousands of soldiers. In 1813 more than a dozen men were hanged at York. By 1816 the movement was crushed.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'economics'],
          prompt: 'Today “Luddite” means someone who hates new technology. Is that fair to the original Luddites?',
          options: [
            'Yes — they wanted to destroy all machines',
            'Not really — they targeted machines and employers they blamed for cutting wages and skilled jobs',
            'Yes — they were paid by Britain’s enemies',
            'Not really — they were inventors themselves',
          ],
          answer: 1,
          explain:
            'The Luddites were mostly skilled workers protesting wage cuts, cheap untrained labour and shoddy goods, and they chose their targets. The historian Eric Hobsbawm called it “collective bargaining by riot.” The modern meaning is a myth that stuck.',
        },
        {
          type: 'story',
          title: 'A young German in Manchester',
          lenses: ['history', 'politics'],
          body: [
            'In late 1842 Friedrich Engels, the 22-year-old son of a German textile manufacturer, arrived to work at a Manchester cotton firm his father part-owned. Guided by Mary Burns, a young Irish working-class woman, he walked back streets few mill owners ever saw.',
            'His book The Condition of the Working Class in England (1845) described damp cellars, overflowing privies and filthy rivers. Three years later he and Karl Marx wrote The Communist Manifesto.',
          ],
        },
        {
          type: 'explain',
          term: 'Cholera',
          lenses: ['medicine'],
          plain:
            'A disease caused by a bacterium carried in water or food contaminated with sewage. It causes violent diarrhoea, and the body can lose so much water that a healthy adult dies within a day.',
          analogy: 'Like pulling the plug on a bath: the body drains faster than anyone can refill it.',
          why: 'In crowded towns, privies leaked into wells and rivers. Cholera reached Britain in 1831 and killed tens of thousands in 1832; in 1848–49 it killed over 50,000 in England and Wales. Most doctors blamed “miasma” — bad air.',
        },
        {
          type: 'explain',
          term: 'Life expectancy',
          lenses: ['medicine', 'economics'],
          plain:
            'How many years a newborn baby would live, on average, if death rates stayed as they are. A low figure mostly means many babies and children died — not that adults dropped dead at 30.',
          analogy: 'Like a class test average: a few zeros drag it right down, even if most people scored well.',
          why: 'In the 1840s it was about 40 years across England, but only about 25–30 in Manchester and Liverpool. In their poorest districts, something like one baby in five died before its first birthday.',
        },
        {
          type: 'estimate',
          lenses: ['medicine', 'geography'],
          prompt:
            'In 1842 the reformer Edwin Chadwick compared the average age at death in labourers’ families. In rural Rutland it was 38. What was it in Manchester?',
          min: 0,
          max: 60,
          step: 1,
          unit: 'years',
          answer: 17,
          tolerance: 4,
          explain:
            '17. Even Manchester’s professional families averaged only 38 — the same as farm labourers in Rutland. These averages are pulled down by huge numbers of infant deaths, but the gap between town and country was real.',
        },
        {
          type: 'story',
          title: 'The pump on Broad Street',
          lenses: ['medicine', 'history'],
          body: [
            'Cholera struck London again in 1854. In about ten days, more than 500 people died in a few streets of Soho.',
            'Dr John Snow didn’t believe in bad air. He marked each death on a street map, found them clustered round one water pump on Broad Street, and persuaded officials to remove its handle.',
            'It was powerful evidence that cholera travels in water — a story you can follow in the track From Miasma to Antibiotics.',
          ],
        },
        {
          type: 'explain',
          term: 'Real wages',
          lenses: ['economics'],
          plain:
            'What your pay can actually buy once prices are taken into account. If your wage rises 10% but bread, rent and fuel rise 20%, your real wage has fallen.',
          analogy: 'It’s not the size of your pocket money that counts, but how many snacks it buys.',
          why: 'To judge whether workers were better off, historians compare wages with the prices of what workers bought — and then argue about the results.',
        },
        {
          type: 'story',
          title: 'The standard-of-living debate',
          lenses: ['economics', 'history'],
          body: [
            'For over a century historians have argued. “Pessimists” such as Eric Hobsbawm and E. P. Thompson stressed hunger, disease and lost freedoms. “Optimists” pointed to cheaper goods and rising pay.',
            'Many now take a middle view. Robert Allen found that from 1780 to 1840 output per worker rose by nearly half while real wages barely moved. He called it “Engels’ pause”. After the 1840s, real wages climbed steadily.',
          ],
        },
        {
          type: 'match',
          lenses: ['economics', 'history'],
          prompt: 'Sort each piece of evidence: does it back the optimists (“better off”) or the pessimists (“worse off”)?',
          categories: ['Better off', 'Worse off'],
          items: [
            { text: 'Cheap cotton clothes, tea and sugar reached ordinary homes', category: 'Better off' },
            { text: 'After the 1840s, real wages rose steadily', category: 'Better off' },
            { text: 'Real wages barely rose between 1780 and 1840', category: 'Worse off' },
            { text: 'Life expectancy in Manchester and Liverpool was only 25–30', category: 'Worse off' },
            { text: 'Cholera killed tens of thousands in 1832', category: 'Worse off' },
          ],
          explain:
            'Both sides have real evidence, which is why the debate has lasted so long. A fair summary: the first generations in the factory towns paid a heavy price, and most of the gains for ordinary people came later.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Parliament pass the Factory Act that sent inspectors into the mills?',
          event: 'Factory Act',
          year: 1833,
          min: 1700,
          max: 1950,
          tolerance: 8,
          anchors: [
            { year: 1771, label: 'Cromford Mill' },
            { year: 1776, label: 'US independence' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1833 — 62 years after Cromford opened: two generations of child workers before the law stepped in. That same year, Parliament voted to abolish slavery in most of the British Empire.',
        },
        {
          type: 'recap',
          prompt: 'Did the Industrial Revolution make ordinary people’s lives better or worse — at first?',
          keyPoints: [
            'Children worked long hours in mills; the Factory Act of 1833 banned under-9s and sent inspectors',
            'The Luddites (1811–16) smashed machines they blamed for lost wages and skills, and were crushed',
            'Crowded cities brought cholera (1832, 1848–49) and life expectancy of only 25–30 in Manchester and Liverpool',
            'Engels (1845) described Manchester’s slums; John Snow (1854) linked cholera to water',
            'Historians debate living standards: real wages barely rose until the 1840s, then climbed',
          ],
          model:
            'For the first generations, often worse. Children worked twelve hours or more in the mills until the 1833 Factory Act began to limit them, and skilled workers like the Luddites saw their livelihoods undercut. Crowded, undrained cities bred cholera, and life expectancy in Manchester fell to 25–30. Historians still debate the balance, but many now think real wages barely rose between 1780 and 1840 even as output grew, and that most gains for ordinary people came after the 1840s.',
        },
      ],
      cards: [
        {
          id: 'ind-date-factory-act',
          kind: 'date',
          year: 1833,
          front: 'When did Parliament pass the Factory Act that banned under-9s from textile mills and appointed inspectors?',
          back: '1833',
          choices: ['1776', '1807', '1851'],
          hook: 'The same year Britain voted to abolish slavery in most of its colonies.',
        },
        {
          id: 'ind-num-factory-act',
          kind: 'number',
          front: 'Under the 1833 Factory Act, what was the youngest working age, and the daily limit for 9–13-year-olds?',
          back: 'Age 9; at most 9 hours a day',
          choices: ['Age 5; 12 hours a day', 'Age 12; 6 hours a day', 'Age 14; 8 hours a day'],
        },
        {
          id: 'ind-concept-luddites',
          kind: 'concept',
          front: 'Who were the Luddites (1811–16)?',
          back: 'Skilled textile workers who smashed machines they blamed for cutting wages and jobs — a protest, not a blind hatred of technology.',
          choices: [
            'Factory owners who bought the first steam engines',
            'A religious group that banned all machines',
            'Engineers who built the first railways',
          ],
        },
        {
          id: 'ind-person-engels',
          kind: 'person',
          front: 'Who wrote The Condition of the Working Class in England (1845) after working in Manchester?',
          back: 'Friedrich Engels',
          choices: ['Adam Smith', 'Edwin Chadwick', 'Michael Sadler'],
        },
        {
          id: 'ind-num-life-expectancy',
          kind: 'number',
          front: 'Roughly what was life expectancy at birth in Manchester and Liverpool in the 1840s?',
          back: 'About 25–30 years (England as a whole: about 40)',
          choices: ['About 10–15 years', 'About 45–50 years', 'About 60–65 years'],
          hook: 'Low mostly because so many babies died.',
        },
        {
          id: 'ind-cause-cholera',
          kind: 'cause',
          front: 'How does cholera spread?',
          back: 'Through water or food contaminated with sewage — as John Snow showed at the Broad Street pump in 1854.',
          choices: ['Through bad-smelling air (miasma)', 'Through flea bites', 'Through coal smoke'],
        },
        {
          id: 'ind-concept-engels-pause',
          kind: 'concept',
          front: 'What is “Engels’ pause”?',
          back: 'Robert Allen’s name for 1780–1840, when output per worker rose by nearly half but real wages barely moved. Wages climbed only after the 1840s.',
        },
      ],
      teaser:
        'Coal had pumped mines and turned mills. Next it would move itself. In October 1829, five machines lined up at Rainhill, near Liverpool, to compete for a £500 prize — and one of them was powered by a horse.',
    },

    // ─────────────────────────────────────────────────────────────── 5
    {
      id: 'rocket-and-railway',
      title: 'The Rocket and the Railway',
      summary:
        'A locomotive contest at Rainhill, a death on opening day, one clock for a whole country — and an investment bubble that left real track behind.',
      question: 'How did the railway shrink Britain — and change how people lived, traded and even told the time?',
      previously:
        'Factory towns brought child labour, cholera and short lives; historians still debate whether workers gained anything before the 1840s.',
      steps: [
        {
          type: 'story',
          title: 'Rainhill, October 1829',
          lenses: ['history', 'science'],
          body: [
            'The Liverpool and Manchester Railway was nearly built, but its directors still hadn’t decided how to pull the trains: fixed engines hauling cables, or locomotives — engines that move themselves?',
            'So they held a contest at Rainhill, with a £500 prize. Thousands came to watch. There were five entries: Rocket, Novelty, Sans Pareil, Perseverance — and Cycloped, a horse walking on a moving belt.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'science'],
          prompt: 'Which entry won?',
          options: [
            'Novelty — light, fast and the crowd’s favourite',
            'Rocket — built by George and Robert Stephenson',
            'Cycloped — the horse on a belt',
            'None — they all broke down',
          ],
          answer: 1,
          reveal:
            'Rocket, built by George Stephenson and his son Robert. Novelty dazzled the crowd but kept breaking down; Sans Pareil cracked a cylinder. Rocket was the only one to finish: it hauled about 13 tons at an average of roughly 12 mph, and reached about 30 mph running alone.',
        },
        {
          type: 'explain',
          term: 'High-pressure steam',
          lenses: ['science'],
          plain:
            'Steam squeezed to several times the pressure of the air around us, so it pushes the piston directly and hard. Watt’s engines used steam at barely more than air pressure and relied on the vacuum — which needed a big, heavy condenser.',
          analogy: 'Like a shaken fizzy drink: the pressure inside is bursting to get out.',
          why: 'High pressure let a small, light engine be strong enough to carry itself. Watt thought it too dangerous — boilers can explode — but after his patent expired in 1800, Richard Trevithick built the first working railway locomotive, in Wales in 1804.',
        },
        {
          type: 'explain',
          term: 'Fire-tube boiler',
          lenses: ['science'],
          plain:
            'Instead of one wide flue, Rocket sent the hot gases from its fire through 25 narrow copper tubes running through the boiler water. More tubes meant far more hot metal touching the water. A “blast pipe” also shot used steam up the chimney, dragging air through the fire so it burned hotter the harder the engine worked.',
          analogy: 'Chopped potatoes boil faster than whole ones: there’s more surface for the heat to get in.',
          why: 'More surface area, faster heat transfer, more steam. Nearly every steam locomotive afterwards used the same idea.',
        },
        {
          type: 'choice',
          lenses: ['science'],
          prompt: 'Why did Rocket’s 25 tubes make steam faster than one big flue?',
          options: [
            'They held more coal',
            'More hot metal touched the water, so heat flowed in faster',
            'Copper burns hotter than iron',
            'The tubes stored steam for later',
          ],
          answer: 1,
          explain:
            'Heat moves across surfaces. Split one big pipe into many small ones and you multiply the surface — the same trick your lungs and a car radiator use.',
        },
        {
          type: 'story',
          title: 'Opening day, 15 September 1830',
          lenses: ['history', 'politics'],
          body: [
            'The line opened in style. The Prime Minister, the Duke of Wellington, rode in a special carriage, and eight trains set off from Liverpool past huge crowds.',
            'At Parkside, about halfway, the engines stopped to take on water. Passengers had been told to stay aboard, but several climbed down onto the track. Among them was William Huskisson, MP for Liverpool, who walked over to greet Wellington. The two had quarrelled; this was a chance to make peace.',
          ],
        },
        {
          type: 'story',
          title: 'A death at Parkside',
          lenses: ['history', 'science'],
          body: [
            'Then Rocket came along the other track. People scrambled clear. Huskisson, aged 60 and in poor health, hesitated, clutched at a carriage door that swung open — and fell in front of the engine. Its wheels crushed his leg.',
            'George Stephenson rushed him to Eccles on another locomotive, but he died that evening.',
            'His was the first railway death to make headlines everywhere. People had judged horses all their lives; nobody yet knew how fast a train closes in.',
          ],
        },
        {
          type: 'story',
          title: 'The first inter-city railway',
          lenses: ['geography', 'economics'],
          body: [
            'The Liverpool and Manchester was the first railway between two cities to run only on steam, to a timetable, for passengers and goods. Stephenson even floated its track across a bog, Chat Moss, on bundles of brushwood and heather.',
            'The owners expected cotton and coal to pay the bills. Instead passengers poured in, and in the early years fares earned more than freight. The trip took under two hours.',
          ],
        },
        {
          type: 'explain',
          term: 'Local time',
          lenses: ['science', 'geography'],
          plain:
            'Before railways, every town set its clocks by the Sun: noon was when the Sun stood highest. The Earth turns 360° in 24 hours — 15° an hour, or 1° every 4 minutes — so towns further west see noon a little later.',
          analogy: 'Like a Mexican wave going round a stadium: each section stands up a moment after its neighbour.',
          why: 'On horseback nobody noticed a few minutes’ difference. With trains running to timetables across the country, clocks that disagreed meant missed connections — and the risk of collisions.',
        },
        {
          type: 'estimate',
          lenses: ['science', 'geography'],
          prompt: 'Liverpool lies about 3° of longitude west of London. How many minutes behind London was Liverpool’s local time?',
          min: 0,
          max: 60,
          step: 1,
          unit: 'minutes',
          answer: 12,
          tolerance: 2,
          explain:
            '3° × 4 minutes = 12 minutes. Manchester was about 9 minutes behind London, and Bristol about 10. A traveller changing trains could easily be caught out.',
        },
        {
          type: 'story',
          title: 'One time for everyone',
          lenses: ['history', 'science'],
          body: [
            'In 1840 the Great Western Railway began running all its trains on London time. In 1847 the railways’ shared clearing house recommended that every line do the same, and by 1848 nearly all had. People called it “railway time”.',
            'Some towns held out for years. Bristol’s Corn Exchange clock still has two minute hands: one for local time, one for London’s. Greenwich time became the legal time for all of Britain only in 1880.',
          ],
        },
        {
          type: 'explain',
          term: 'Bubble',
          lenses: ['economics'],
          plain:
            'When the price of something — shares (small slices of a company), houses, even tulips — soars far above what it is really worth, because people buy expecting to sell to someone else for more. When the new buyers run out, prices crash.',
          analogy: 'Like musical chairs: fine while the music plays, painful for whoever is left standing when it stops.',
          why: 'Early railway shares had paid well. By the mid-1840s, the savings of ordinary families were pouring into railway schemes, good and bad alike.',
        },
        {
          type: 'story',
          title: 'Railway mania, 1845–47',
          lenses: ['economics', 'history'],
          body: [
            'In 1846 alone, Parliament passed 272 Acts setting up new railway companies. Clergymen, widows — even the novelists Charlotte, Emily and Anne Brontë — bought railway shares.',
            'The star was George Hudson, the “Railway King”, who controlled over a quarter of Britain’s lines. The bubble burst in 1847. Hudson was later exposed for paying shareholders out of new investors’ money, and many families lost their savings.',
            'Yet the track stayed: by 1850 Britain had over 6,000 miles of railway.',
          ],
        },
        {
          type: 'story',
          title: 'A shrinking country',
          lenses: ['economics', 'geography'],
          body: [
            'Fast, cheap transport changed what people could buy. Fresh fish reached inland towns; milk reached London from distant farms.',
            'Adam Smith had said the division of labour is limited by the size of the market. Railways made the market national: a factory could now sell everywhere, so it could specialise more and sell more cheaply.',
            'People travelled for fun, too. In 1841 Thomas Cook hired a train for about 500 people — the beginning of the package trip.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the Liverpool and Manchester Railway open?',
          event: 'Liverpool and Manchester Railway opens',
          year: 1830,
          min: 1700,
          max: 1950,
          tolerance: 8,
          anchors: [
            { year: 1769, label: 'Watt’s patent' },
            { year: 1833, label: 'Factory Act' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1830 — 61 years after Watt’s patent and three before the Factory Act. Within 20 years, railways linked most of Britain’s big towns.',
        },
        {
          type: 'recap',
          prompt: 'How did the railway shrink Britain — and change how people lived, traded and even told the time?',
          keyPoints: [
            'High-pressure steam and Rocket’s fire-tube boiler made locomotives practical; Rocket won at Rainhill in 1829',
            'The Liverpool and Manchester Railway (1830), the first steam-only line between two cities, opened with Huskisson’s death',
            'Timetables forced one national “railway time” (from the 1840s; law in 1880)',
            'Railway mania (1845–47) was a bubble that burst — but left over 6,000 miles of track by 1850',
            'Cheap transport made one national market: fresh food, cheaper goods, travel for fun',
          ],
          model:
            'High-pressure steam and Rocket’s many-tubed boiler made light, powerful locomotives possible, and after Rocket won at Rainhill in 1829, the Liverpool and Manchester Railway opened in 1830 as the first steam-only line between two cities. Trains ran to timetables, so the country swapped hundreds of local times for a single railway time. A share bubble in the 1840s ruined many investors but left thousands of miles of track, which knit Britain into one market where food, goods and people moved in hours instead of days.',
        },
      ],
      cards: [
        {
          id: 'ind-date-rainhill',
          kind: 'date',
          year: 1829,
          front: 'When were the Rainhill Trials, won by the Stephensons’ Rocket?',
          back: 'October 1829',
          choices: ['1769', '1801', '1851'],
          hook: 'One year before the Liverpool and Manchester Railway opened (1830).',
        },
        {
          id: 'ind-date-lmr',
          kind: 'date',
          year: 1830,
          front: 'When did the Liverpool and Manchester Railway open?',
          back: '15 September 1830',
          choices: ['1712', '1776', '1851'],
          hook: 'Opening day: the MP William Huskisson was killed by Rocket.',
        },
        {
          id: 'ind-person-stephenson',
          kind: 'person',
          front: 'Which father-and-son engineers built Rocket?',
          back: 'George and Robert Stephenson',
          choices: ['James Watt and Matthew Boulton', 'Richard Trevithick and Samuel Crompton', 'Thomas Newcomen and John Calley'],
        },
        {
          id: 'ind-person-huskisson',
          kind: 'person',
          front: 'Which MP was killed on the opening day of the Liverpool and Manchester Railway?',
          back: 'William Huskisson',
          choices: ['The Duke of Wellington', 'Michael Sadler', 'George Hudson'],
        },
        {
          id: 'ind-concept-firetube',
          kind: 'concept',
          front: 'What made Rocket’s boiler so effective?',
          back: '25 copper tubes carried hot gas through the water — much more surface area, so faster heating — plus a blast pipe that fanned the fire.',
        },
        {
          id: 'ind-cause-railway-time',
          kind: 'cause',
          front: 'Why did Britain adopt a single “railway time” in the 1840s?',
          back: 'Each town kept its own solar time — Liverpool ran about 12 minutes behind London — which made national timetables confusing and dangerous.',
          choices: [
            'Parliament wanted to save daylight in winter',
            'Clocks had only just been invented',
            'Factory owners wanted longer shifts',
          ],
        },
        {
          id: 'ind-concept-bubble',
          kind: 'concept',
          front: 'What was railway mania (1845–47)?',
          back: 'An investment bubble: railway share prices soared as everyone piled in, then crashed — though it left thousands of miles of real track.',
          choices: [
            'A cholera outbreak spread by train passengers',
            'A wave of attacks on railway lines by workers',
            'A craze for model railways',
          ],
        },
      ],
      teaser:
        'By 1851 Britain’s population had doubled in 50 years. Malthus had warned that more people meant more poverty. So why, this time, did the average Briton keep getting richer — and could other countries do the same?',
    },

    // ─────────────────────────────────────────────────────────────── 6
    {
      id: 'great-escape',
      title: 'The Great Escape',
      summary:
        'The Crystal Palace, the arithmetic of growth, and how the escape from poverty spread from Britain to the world — powered by fossil fuels.',
      question: 'How did the world escape the Malthusian trap — and what did it cost?',
      previously:
        'Rocket won at Rainhill in 1829; railways shrank Britain, gave it a single clock, and survived their own investment bubble.',
      steps: [
        {
          type: 'orient',
          title: 'The escape spreads',
          from: 1760,
          to: 2025,
          places: [
            { name: 'Manchester', lon: -2.24, lat: 53.48, label: 'left' },
            { name: 'Liège', lon: 5.57, lat: 50.63 },
            { name: 'Essen', lon: 7.01, lat: 51.46 },
            { name: 'Pawtucket', lon: -71.38, lat: 41.88, label: 'left' },
            { name: 'Tokyo', lon: 139.69, lat: 35.69, label: 'left' },
          ],
          placesNote:
            'The same story, retold: Britain first, then Belgium, the USA, Germany and Japan — each burning its own coal.',
          mapBounds: INDUSTRIAL_WORLD,
          lenses: ['history', 'geography', 'economics'],
          why: 'Every rich country today went through its own version of Britain’s story — and how to spread that escape without overheating the planet is a central question of our century.',
          context: [
            'In 1851 Great Britain has about 21 million people, twice as many as in 1801. For the first time, more people in England and Wales live in towns than in the countryside.',
            'By 1860 Britain makes about a fifth of the world’s manufactured goods, up from about 2% in 1750 (Paul Bairoch’s rough estimates).',
            'Over the same years India’s share falls from about a quarter to under a tenth, as British machine-made cloth undersells its hand-weavers.',
            'China, still the world’s largest economy in 1820, lost the First Opium War (1839–42) to a Britain armed with steam-powered warships.',
            'In the USA railways push west, and slavery still exists in the South.',
          ],
        },
        {
          type: 'story',
          title: 'The Crystal Palace, 1851',
          lenses: ['history', 'economics'],
          body: [
            'In May 1851 Queen Victoria opened the Great Exhibition in London’s Hyde Park, a project championed by her husband, Prince Albert. It filled a gigantic greenhouse of iron and glass — the “Crystal Palace” — designed by a gardener, Joseph Paxton.',
            'Over five months there were about 6 million visits, many by cheap excursion train. Britain showed off its engines and looms. But crowds also flocked to American reaping machines and Samuel Colt’s revolvers. Others were catching up.',
          ],
        },
        {
          type: 'predict',
          lenses: ['economics'],
          prompt:
            'Between 1801 and 1851 Britain’s population doubled. The Malthusian trap says more mouths should mean more poverty. What happened to average income per person?',
          options: ['It fell, as Malthus predicted', 'It stayed about the same', 'It rose — and kept on rising'],
          answer: 2,
          reveal:
            'It rose: slowly at first, faster after the 1840s. For the first time, a country’s population and its income per person grew together, decade after decade. The economist Angus Deaton’s book about humanity’s escape from poverty and early death is called The Great Escape.',
        },
        {
          type: 'explain',
          term: 'GDP per person',
          lenses: ['economics'],
          plain:
            'GDP (gross domestic product) is the value of everything a country produces in a year — goods and services. Divide it by the population and you get GDP per person, a rough measure of average income. Historians adjust for changing prices so that different years can be compared fairly.',
          analogy: 'Remember the pizza: a bigger pizza only helps if it grows faster than the crowd round the table.',
          why: 'Before 1800, GDP per person barely rose anywhere for long. After 1800, in Britain, it kept rising, decade after decade.',
        },
        {
          type: 'explain',
          term: 'Compound growth and the rule of 70',
          lenses: ['economics'],
          plain:
            'Compound growth is growth on top of growth: each year’s increase is added to the base for the next year. A handy shortcut, the rule of 70, gives the time it takes to double: divide 70 by the yearly growth rate in percent.',
          analogy: 'Like a snowball rolling downhill: the bigger it gets, the more snow it picks up on each turn.',
          why: 'At 1% a year, income doubles in about 70 years — once in a lifetime. At 2%, in about 35 years — once a generation. Small differences in the rate become huge over time.',
        },
        {
          type: 'estimate',
          lenses: ['economics'],
          prompt:
            'Before 1750, income per person grew by perhaps 0.2% a year at best, even in the most dynamic places. Using the rule of 70, how many years would it take to double?',
          min: 0,
          max: 1000,
          step: 10,
          unit: 'years',
          answer: 350,
          tolerance: 30,
          explain:
            '70 ÷ 0.2 = 350 years — about 14 generations, too slow for anyone to notice. By the mid-1800s Britain was growing about 1% a year (doubling in about 70), and some countries since have managed 7–10% for decades (doubling in under ten).',
        },
        {
          type: 'story',
          title: 'What the numbers show',
          lenses: ['economics', 'history'],
          body: [
            'The Maddison Project, a network of economic historians, estimates income per person across the centuries. Its figures are rough, especially before 1800, but the shape is clear.',
            'By its estimates, income per person in Britain nearly doubled between 1820 and 1870. Today it is more than ten times the 1820 level.',
            'Worldwide, around three in four people lived in extreme poverty in 1820. Today it is about one in ten.',
          ],
        },
        {
          type: 'story',
          title: 'Why the trap stayed broken',
          lenses: ['economics', 'science'],
          body: [
            'The historian E. A. Wrigley offered a key answer. Before coal, energy came from land: food for muscles, wood for heat, hay for horses. Land is limited, so growth kept hitting a ceiling.',
            'Coal broke through it. Wrigley calculated that by 1850, growing the energy in Britain’s coal as firewood would have needed forests bigger than all of England.',
            'And inventions kept coming — railways, then steel, chemicals and electricity. Growth became a habit, not a lucky burst.',
          ],
        },
        {
          type: 'story',
          title: 'The secret gets out',
          lenses: ['history', 'geography'],
          body: [
            'Britain tried to keep its lead: for decades skilled workers were banned from emigrating and many machines from being exported. It didn’t work.',
            'Samuel Slater, trained at a mill owned by Arkwright’s partner Jedediah Strutt, sailed to America in 1789 with the machines in his head. In the early 1790s he built working spinning machines at Pawtucket, Rhode Island.',
            'In Belgium the English-born Cockerill family built ironworks near Liège, and in 1835 Belgium opened one of continental Europe’s first steam railways.',
          ],
        },
        {
          type: 'story',
          title: 'Germany and Japan',
          lenses: ['history', 'geography', 'politics'],
          body: [
            'In Germany a customs union of German states, the Zollverein (1834), let goods cross borders freely, and railways linked the Ruhr coalfield to markets. Firms such as Krupp of Essen grew into giants; by about 1900 Germany made more steel than Britain.',
            'Japan started later. After 1868 its new Meiji government set out to modernise fast and hired foreign experts: British engineers helped build its first railway, from Tokyo to Yokohama, in 1872.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Japan open its first railway?',
          event: 'Tokyo–Yokohama railway opens',
          year: 1872,
          min: 1750,
          max: 1950,
          tolerance: 8,
          anchors: [
            { year: 1830, label: 'Liverpool–Manchester Railway' },
            { year: 1851, label: 'Great Exhibition' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1872 — 42 years after the Liverpool and Manchester line. Each country that followed caught up faster than Britain had moved, because it could borrow ideas instead of inventing them.',
        },
        {
          type: 'story',
          title: 'Energy per person',
          lenses: ['science', 'economics'],
          body: [
            'Here is the thread of this whole track. A labourer’s muscles deliver about 0.6 kWh of work a day.',
            'Today the average person on Earth uses about 55 kWh of energy a day — as if some 90 labourers worked for each of us. In Britain it’s a bit more; in the USA, several times more. (Much of it is still lost as heat, as Watt would recognise.)',
            'Rich countries are, above all, countries that command a lot of energy per person.',
          ],
        },
        {
          type: 'story',
          title: 'The bill arrives',
          lenses: ['science', 'politics'],
          body: [
            'There was a cost no one in 1851 could see. Burning coal, oil and gas releases carbon dioxide, which traps heat in the atmosphere.',
            'Carbon dioxide has risen from about 280 parts per million before industrialisation to over 420 today, and the Earth has warmed by about 1.2–1.3 °C. Fossil fuels still supply about four-fifths of the world’s energy.',
            'The next great escape: keep energy per person rising, especially in poorer countries, while getting it from sources that don’t heat the planet.',
          ],
        },
        {
          type: 'compare',
          lenses: ['history', 'economics', 'medicine'],
          prompt: 'Three moments in the story of energy. Fill in the blanks.',
          columns: ['Before 1750', 'Around 1850', 'Today'],
          rows: [
            {
              label: 'Main energy source',
              cells: ['Muscle, wood, wind and water', 'Coal', 'Oil, gas and coal — with renewables growing'],
            },
            {
              label: 'Typical workplace (Britain)',
              cells: ['Farm or home workshop', 'Mill, mine or workshop', 'Office, shop or other service job'],
            },
            {
              label: 'Life expectancy at birth (England)',
              cells: ['About 30–40', 'About 40 (25–30 in Manchester)', 'About 81'],
            },
            {
              label: 'London to Manchester',
              cells: ['About 4 days by stagecoach', 'About 5–6 hours by train', 'About 2 hours by train'],
            },
          ],
          blanks: [
            [0, 1, ['Whale oil', 'Electricity from dams']],
            [1, 0, ['Large steam-powered factory', 'Government office']],
            [2, 1, ['About 60 (50 in Manchester)', 'About 20 (10 in Manchester)']],
            [2, 2, ['About 55', 'About 100']],
            [3, 0, ['About 8 hours on a fast horse', 'About a month on foot']],
            [3, 1, ['About 2 days by train', 'About 30 minutes by train']],
          ],
          explain:
            'The biggest jump in travel came with the first railways: from days to hours. Since then trains have become safer, cheaper and more comfortable, but only two or three times faster. Energy and work changed just as fast, but lifespans lagged: the big gains in health came only after cities got clean water and sewers.',
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Final review: put the whole story in order.',
          items: [
            'Newcomen’s engine pumps a coal mine near Dudley (1712)',
            'Watt patents the separate condenser (1769)',
            'Arkwright opens Cromford Mill (1771)',
            'Adam Smith publishes The Wealth of Nations (1776)',
            'Luddites begin smashing machines (1811)',
            'The Liverpool and Manchester Railway opens (1830)',
            'The Factory Act bans under-9s from textile mills (1833)',
            'The Great Exhibition in the Crystal Palace (1851)',
          ],
          explain:
            'One story, told through energy: a pumping engine, a better engine, machines, factories, cities and railways — and along the way thermodynamics, economics, public health and the arithmetic of growth.',
        },
        {
          type: 'recap',
          prompt: 'In a few sentences: how did the world escape the Malthusian trap, and what did it cost?',
          keyPoints: [
            'Coal gave Britain energy not limited by farmland, and Watt’s engines put it to work almost anywhere',
            'Machines, factories and railways made output grow faster than population, so income per person kept rising after 1800',
            'Compound growth (rule of 70) turned about 1% a year into lasting wealth',
            'The escape spread to Belgium, the USA, Germany, Japan and beyond',
            'The costs: child labour, disease and slave-grown cotton at first — and carbon emissions that still drive climate change',
          ],
          model:
            'For most of history, extra output was eaten up by extra people, but from the late 1700s Britain tapped coal — energy that didn’t need farmland — and Watt’s engines, cotton machines and railways turned it into goods faster than population grew. Growth of around 1% a year, compounding, meant income per person kept rising, and the method spread to Belgium, the USA, Germany, Japan and eventually most of the world. The costs were heavy: exhausted children, cholera-ridden cities and slave-grown cotton at first, and today a warming planet from the fossil fuels that made the escape possible.',
        },
      ],
      cards: [
        {
          id: 'ind-concept-gdp-per-person',
          kind: 'concept',
          front: 'What is GDP per person?',
          back: 'The value of everything a country produces in a year, divided by its population (adjusted for price changes) — a rough measure of average income.',
          choices: [
            'The amount of money a government prints each year',
            'The number of factories per 1,000 people',
            'The average wage of a factory worker',
          ],
        },
        {
          id: 'ind-num-rule-of-70',
          kind: 'number',
          front: 'Rule of 70: if income grows 2% a year, about how long does it take to double?',
          back: 'About 35 years (70 ÷ 2)',
          choices: ['About 2 years', 'About 140 years', 'About 700 years'],
          hook: 'Divide 70 by the growth rate.',
        },
        {
          id: 'ind-date-great-exhibition',
          kind: 'date',
          year: 1851,
          front: 'When was the Great Exhibition held in the Crystal Palace?',
          back: '1851',
          choices: ['1776', '1815', '1914'],
          hook: 'Exactly 50 years after Britain’s first census (1801) — by then its population had doubled.',
        },
        {
          id: 'ind-person-slater',
          kind: 'person',
          front: 'Who carried Arkwright-style spinning technology from Britain to the USA in 1789 — in his head?',
          back: 'Samuel Slater',
          choices: ['Samuel Crompton', 'Eli Whitney', 'Samuel Colt'],
        },
        {
          id: 'ind-cause-escape',
          kind: 'cause',
          front: 'Why didn’t Britain’s fast-growing population drag it back into the Malthusian trap after 1800?',
          back: 'Coal supplied energy not limited by farmland, and a steady stream of inventions made output grow faster than population.',
          choices: [
            'Emigration removed most of the extra people',
            'A law limited families to two children',
            'Wars and plague kept the population flat',
          ],
        },
        {
          id: 'ind-num-energy-today',
          kind: 'number',
          front: 'A labourer delivers about 0.6 kWh of work a day. Roughly how much energy does the average person on Earth use each day today?',
          back: 'About 55 kWh — as if some 90 labourers worked for each of us',
          choices: ['About 1 kWh', 'About 5 kWh', 'About 5,000 kWh'],
        },
        {
          id: 'ind-compare-travel',
          kind: 'compare',
          front: 'London to Manchester: roughly how long in the 1750s, the 1850s and today?',
          back: 'About 4 days by stagecoach → about 5–6 hours by train → about 2 hours by train',
          choices: [
            'About 1 day → 2 hours → 1 hour',
            'About 2 weeks → 2 days → 5 hours',
            'About 4 days → 4 days → 2 hours',
          ],
        },
      ],
    },
  ],
}
