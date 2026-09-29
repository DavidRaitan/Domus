import type { Track } from '../types'

// Sources for figures used here: Doyle, The Oxford History of the French Revolution (2nd ed., 2002);
// Jones, The Great Nation (2002); Rudé, The Crowd in the French Revolution (1959) (bread prices and
// wages); Godechot, The Taking of the Bastille (1970); Sargent & Velde, “Macroeconomic features of
// the French Revolution,” J. Political Economy 103 (1995) (debt service); White, “The French
// Revolution and the politics of government finance,” J. Economic History 55 (1995); Neumann,
// “Climatic changes in Europe and their impact on the French Revolution” (1977) and Thordarson & Self
// (1993) (Laki); Sieyès, Qu’est-ce que le tiers-état? (1789); Britannica. Contested figures are given
// as ranges; the Laki–1789 link is presented as debated.

const EUROPE = { west: -25, south: 35, east: 45, north: 67 }

export const frenchRevolution: Track = {
  id: 'french-revolution',
  series: 'revolutions',
  tier: 2,
  title: 'The French Revolution and Napoleon',
  tagline: 'A bankrupt king, a hungry city — then liberty, then Terror, then an emperor.',
  lenses: ['history', 'politics', 'philosophy', 'economics'],
  era: [1789, 1815],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'bread-and-bankruptcy',
      title: 'Bread and Bankruptcy',
      summary: 'A kingdom broke from its wars, a harvest ruined by hail — and a crowd at the gates of the Bastille.',
      question: 'How did a bankrupt treasury and a bad harvest bring down the most powerful king in Europe?',
      previously:
        'Britain’s American colonies won their independence (1776–83) with French money, ships and soldiers — and wrote a constitution (1787) that put the people, not a king, in charge. Now France must pay for that war.',
      steps: [
        {
          type: 'orient',
          title: 'The French Revolution and Napoleon',
          from: 1789,
          to: 1815,
          places: [
            { name: 'Paris', lon: 2.35, lat: 48.86 },
            { name: 'Laki volcano', lon: -18.2, lat: 64.07 },
            { name: 'Corsica', lon: 8.74, lat: 41.92 },
            { name: 'Vienna', lon: 16.37, lat: 48.21 },
            { name: 'Moscow', lon: 37.62, lat: 55.76, label: 'left' },
          ],
          placesNote:
            'The revolution began in Paris. Within 25 years its armies, led by a general born on Corsica, had marched to Vienna and Moscow.',
          mapBounds: EUROPE,
          lenses: ['history', 'geography'],
          why: 'The French Revolution gave the world the ideas of citizens’ rights, “left” and “right” in politics, the metric system and the modern nation at war — and showed how quickly a fight for liberty can turn to terror.',
          context: [
            'France has about 28 million people — roughly three times as many as Great Britain, and the most of any country in western Europe.',
            'Paris has around 600,000 people. About four in five French people live in the countryside, most of them peasants.',
            'Louis XVI has been king since 1774. His queen, Marie Antoinette, was born an Austrian archduchess.',
            'George Washington becomes the first US president in April 1789, under the brand-new American Constitution.',
            'A pound or a foot can mean different amounts from one French town to the next. There is no metre yet.',
          ],
        },
        {
          type: 'story',
          title: 'Paris, 14 July 1789',
          lenses: ['history'],
          body: [
            'That morning, thousands of Parisians seized some 30,000 muskets from a military hospital. Now they needed gunpowder — and it was stored in the Bastille, a medieval fortress used as a royal prison.',
            'The governor, Bernard-René de Launay, refused to hand it over. His men fired into the crowd; about a hundred attackers were killed.',
            'By late afternoon the fortress had surrendered. De Launay was dragged out and killed, his head paraded on a pike.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'politics'],
          prompt: 'The Bastille was the most hated prison in France. How many prisoners did the crowd find inside?',
          options: ['7', 'About 100', 'About 1,000'],
          answer: 0,
          reveal:
            'Just seven: four forgers, two men held as insane, and one nobleman locked up at his own family’s request. The crowd came for gunpowder, not prisoners. But the fall of a royal fortress became the symbol of the king’s power collapsing — and 14 July is still France’s national day.',
        },
        {
          type: 'story',
          title: 'A king in debt',
          lenses: ['economics', 'history'],
          body: [
            'How did it come to this? Start with money.',
            'France had fought Britain again and again for a century. Its latest war — helping the Americans win independence (1778–83) — cost around a billion livres, the French pound, almost all of it borrowed.',
            'By 1788, interest on the royal debt — the yearly fee to lenders — ate about half of everything the government spent. In August that year, the treasury ran out of cash and stopped paying some of its bills.',
          ],
        },
        {
          type: 'explain',
          term: 'The three estates',
          lenses: ['politics', 'religion'],
          plain:
            'Old France divided people into three “estates,” or orders: the clergy (First Estate), the nobles (Second) and everyone else — about 97% of the people (Third). Each estate had its own laws and privileges. When the kingdom’s assembly, the Estates-General, met, each estate traditionally cast one vote.',
          analogy:
            'Imagine a school council where the teachers get one vote, the prefects one vote, and all the other students together one vote.',
          why: 'Clergy and nobles could outvote the whole nation two to one — and among their privileges was freedom from the main direct tax, the taille.',
        },
        {
          type: 'story',
          title: 'Who will pay?',
          lenses: ['economics', 'politics'],
          body: [
            'In 1786 the finance minister, Charles-Alexandre de Calonne, told Louis XVI the truth: the only way out was a new tax on all land — including the nobles’ and the Church’s.',
            'The king summoned a hand-picked Assembly of Notables to approve it. They refused. Only the whole nation, some argued, could agree to new taxes.',
            'In August 1788 Louis gave in and called the Estates-General for May 1789. It had not met since 1614.',
          ],
        },
        {
          type: 'choice',
          lenses: ['economics', 'politics'],
          prompt: 'Why couldn’t Louis XVI simply tax the rich to fix his debt?',
          options: [
            'France had no rich people left after the war',
            'The privileged refused to give up their exemptions, and insisted only the nation could approve new taxes',
            'The Americans had forbidden it in the peace treaty',
            'The king didn’t believe in taxes',
          ],
          answer: 1,
          explain:
            'The king was “absolute” on paper but stuck in practice: the people with money had legal privileges and the power to block him. To get their money, he had to call an assembly — and the assembly would soon want more than money. Compare the American colonists: another fight over who must consent to taxes.',
        },
        {
          type: 'story',
          title: 'Hail and hunger',
          lenses: ['economics', 'geography'],
          body: [
            'On 13 July 1788, a huge hailstorm tore across northern France, flattening crops just before harvest. The winter that followed was so cold the Seine froze.',
            'Bread was most families’ main food. Normally a four-pound loaf in Paris cost about 8 sous — small coins. Wages stayed the same while grain ran short.',
            'Hungry people were now angry people, just as the Estates-General gathered.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['economics'],
          prompt: 'A four-pound loaf normally cost about 8 sous in Paris. What did it cost by early 1789?',
          min: 5,
          max: 30,
          step: 1,
          unit: 'sous',
          answer: 14,
          tolerance: 2,
          explain:
            'About 14½ sous — nearly double. The historian George Rudé calculated that a Paris labourer could then need close to nine-tenths of his daily wage just for his family’s bread. Picture spending almost all your pay on one food, with nothing left for rent, fuel or clothes.',
        },
        {
          type: 'story',
          title: 'A volcano in Iceland?',
          lenses: ['science', 'geography'],
          body: [
            'In June 1783 the Laki fissure in Iceland began an eight-month eruption. It poured out sulphur gas that formed a haze across Europe; that summer the sun looked blood-red, and the next winter was brutal.',
            'Some historians link Laki to the years of poor harvests before 1789. Others think the evidence is weak, and that the 1788 hailstorm and drought mattered far more.',
            'Science can show a volcano dimmed the sky. Proving it toppled a king is harder.',
          ],
        },
        {
          type: 'story',
          title: 'What is the Third Estate?',
          lenses: ['politics', 'philosophy'],
          body: [
            'Early in 1789 a priest named Emmanuel-Joseph Sieyès published a pamphlet asking that question. His answer: the Third Estate was everything — the working nation itself — yet it counted for nothing.',
            'When the Estates-General opened at Versailles on 5 May 1789, the Third Estate had about 600 deputies — roughly as many as the other two combined. But would votes be counted by head, or by estate?',
            'For six weeks, nothing moved.',
          ],
        },
        {
          type: 'story',
          title: 'The tennis court',
          lenses: ['politics', 'history'],
          body: [
            'On 17 June the Third Estate declared itself the National Assembly: the true voice of the nation. Three days later, finding their hall locked, the deputies crowded into an indoor tennis court and swore not to separate until France had a constitution.',
            'The king gathered troops around Paris. On 11 July he dismissed his popular finance minister, Jacques Necker.',
            'Paris believed an attack was coming. That is why, three days later, it went looking for gunpowder.',
          ],
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Put the road to the Bastille in order.',
          items: [
            'France joins the American War of Independence (1778)',
            'The Assembly of Notables refuses new taxes (1787)',
            'A hailstorm ruins the harvest (July 1788)',
            'The Estates-General opens at Versailles (May 1789)',
            'The Tennis Court Oath (June 1789)',
            'The fall of the Bastille (July 1789)',
          ],
          explain:
            'War → debt → a tax fight with the privileged → an assembly called to fix it → an assembly that claims to be the nation. Hunger gave the crowd its anger, and the king’s troops gave it a reason to act.',
        },
        {
          type: 'compare',
          lenses: ['politics', 'economics'],
          prompt: 'Two revolutions, one pattern. Fill in the blanks.',
          columns: ['American colonies', 'France'],
          rows: [
            {
              label: 'The war debt',
              cells: ['Seven Years’ War (1756–63)', 'American war (1778–83)'],
            },
            {
              label: 'Who refused to pay',
              cells: ['Colonists refused Parliament’s taxes', 'Nobles and clergy refused to lose exemptions'],
            },
            {
              label: 'The key demand',
              cells: ['No taxation without representation', 'Vote by head; a constitution'],
            },
            {
              label: 'First showdown',
              cells: ['Stamp Act riots (1765)', 'Fall of the Bastille (1789)'],
            },
          ],
          blanks: [
            [0, 1],
            [1, 1],
            [2, 0],
            [3, 1],
          ],
          explain:
            'Both revolutions began as arguments about who pays for war, and who must consent. France’s help for America turned one revolution’s debt into the next one’s spark.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the Bastille fall?',
          event: 'Fall of the Bastille',
          year: 1789,
          min: 1450,
          max: 1950,
          tolerance: 8,
          anchors: [
            { year: 1492, label: 'Columbus' },
            { year: 1776, label: 'US independence' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1789 — thirteen years after American independence, and the same year Washington became president. Many French officers who had fought in America, like the Marquis de Lafayette, came home full of its ideas.',
        },
        {
          type: 'recap',
          prompt: 'How did a bankrupt treasury and a bad harvest bring down the most powerful king in Europe?',
          keyPoints: [
            'Wars — especially helping America — left France deeply in debt',
            'Nobles and clergy blocked new taxes, so the king had to call the Estates-General (1789)',
            'A ruined harvest nearly doubled bread prices and made Paris hungry and angry',
            'The Third Estate declared itself the nation; when troops gathered, Paris stormed the Bastille',
          ],
          model:
            'War debts, partly from helping America, left the French crown broke, and the privileged nobles and clergy refused to be taxed, so Louis XVI had to call the Estates-General. There the Third Estate declared itself the National Assembly. With bread prices doubled after a ruined harvest and royal troops around Paris, the city rose and stormed the Bastille — and the king lost control.',
        },
      ],
      cards: [
        {
          id: 'frr-date-bastille',
          kind: 'date',
          year: 1789,
          front: 'When was the Bastille stormed?',
          back: '14 July 1789',
          choices: ['14 July 1776', '14 July 1793', '14 July 1815'],
          hook: 'Thirteen years after US independence (1776). 14 July is still France’s national day.',
        },
        {
          id: 'frr-concept-estates',
          kind: 'concept',
          front: 'What were the three estates of old France?',
          back: 'Clergy (First), nobles (Second) and everyone else — about 97% of people (Third)',
          choices: [
            'King, Parliament and courts',
            'Peasants, workers and merchants',
            'Paris, the provinces and the colonies',
          ],
        },
        {
          id: 'frr-cause-debt',
          kind: 'cause',
          front: 'Why was the French crown almost bankrupt by 1788?',
          back: 'A century of wars — including helping America (1778–83) — paid for by borrowing, while nobles and clergy were largely exempt from the main tax',
          choices: [
            'Marie Antoinette spent it all on dresses',
            'The Bastille cost too much to run',
            'Gold from its colonies stopped arriving',
          ],
        },
        {
          id: 'frr-num-bread',
          kind: 'number',
          front: 'What happened to the price of bread in Paris between 1788 and early 1789?',
          back: 'It nearly doubled — a four-pound loaf went from about 8 to 14½ sous',
          choices: ['It stayed the same', 'It rose by about a tenth', 'It rose tenfold'],
        },
        {
          id: 'frr-num-bastille-prisoners',
          kind: 'number',
          front: 'How many prisoners were inside the Bastille when it fell?',
          back: 'Seven',
          choices: ['About 70', 'About 700', 'About 7,000'],
          hook: 'The crowd came for gunpowder, not prisoners.',
        },
        {
          id: 'frr-person-sieyes',
          kind: 'person',
          front: 'Which priest’s 1789 pamphlet asked “What is the Third Estate?”',
          back: 'Emmanuel-Joseph Sieyès',
          choices: ['Maximilien Robespierre', 'Jacques Necker', 'The Marquis de Lafayette'],
        },
        {
          id: 'frr-concept-laki',
          kind: 'concept',
          front: 'What was the Laki eruption, and how is it linked to the French Revolution?',
          back: 'An eight-month volcanic eruption in Iceland (1783–84) that spread a sulphur haze over Europe. Some historians link it to the poor harvests before 1789; others think the link is weak.',
        },
      ],
      teaser:
        'The Bastille has fallen. Within weeks, the Assembly will abolish centuries of privilege in a single night and declare that men are born free and equal in rights. So why, four years later, will the revolution be cutting off heads — including the king’s?',
    },
  ],
  upcoming: [
    {
      title: 'The Rights of Man',
      summary:
        'The night privilege died (4 August 1789), the Declaration of the Rights of Man, women marching on Versailles — and a king caught fleeing in disguise.',
    },
    {
      title: 'The Terror',
      summary:
        'War with Europe, the king’s execution (1793) and Robespierre’s Terror: about 17,000 official death sentences in barely a year — and many more deaths without trial.',
    },
    {
      title: 'Measuring the World',
      summary:
        'The revolution’s science: two astronomers measure the Earth from Dunkirk to Barcelona to define the metre — and a whole nation learns to count in tens.',
    },
    {
      title: 'The Emperor',
      summary:
        'A young Corsican general seizes power (1799), crowns himself (1804), writes a law code for millions and conquers most of Europe.',
    },
    {
      title: 'Winter Road from Moscow',
      summary:
        '1812: an army of roughly 450,000–600,000 invades Russia; only a small fraction comes back. Distance, supply, disease and cold — then Waterloo (1815).',
    },
  ],
}
