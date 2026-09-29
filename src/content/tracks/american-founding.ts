import type { Track } from '../types'

// Sources for figures used here: Anderson, Crucible of War (2000) (Seven Years’ War);
// Brewer, The Sinews of Power (1989) (British debt and taxation); Morgan & Morgan, The Stamp Act
// Crisis (1953); Middlekauff, The Glorious Cause (2005); Bailyn, The Ordeal of Thomas Hutchinson
// (1974) and The Ideological Origins of the American Revolution (1967); Locke, Second Treatise of
// Government (1689), §§ 138–140; US Census Bureau, Historical Statistics of the United States
// (colonial population); Steele, The English Atlantic 1675–1740 (1986) (crossing times); Britannica.
// Contested figures are given as ranges or rounded.

const NORTH_ATLANTIC = { west: -95, south: 22, east: 12, north: 58 }

export const americanFounding: Track = {
  id: 'american-founding',
  series: 'revolutions',
  tier: 1,
  title: 'The American Founding',
  tagline:
    'A quarrel over a tax on paper becomes a new theory of government — and a country built on a promise it doesn’t yet keep.',
  lenses: ['history', 'politics', 'philosophy', 'economics'],
  era: [1763, 1789],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'expensive-victory',
      title: 'An Expensive Victory',
      summary: 'Britain wins a world war, runs up a colossal debt — and sends the bill to America.',
      question: 'Why did winning a war in 1763 start a quarrel that would break an empire?',
      steps: [
        {
          type: 'orient',
          title: 'The American Founding',
          from: 1763,
          to: 1789,
          places: [
            { name: 'Boston', lon: -71.06, lat: 42.36 },
            { name: 'Quebec', lon: -71.21, lat: 46.81 },
            { name: 'Philadelphia', lon: -75.16, lat: 39.95, label: 'left' },
            { name: 'Williamsburg', lon: -76.71, lat: 37.27, label: 'left' },
            { name: 'London', lon: -0.13, lat: 51.51, label: 'left' },
          ],
          placesNote:
            'Two worlds joined by an ocean: the capital of the British Empire, and thirteen colonies strung along about 1,500 km of American coast.',
          mapBounds: NORTH_ATLANTIC,
          lenses: ['history', 'geography'],
          why: 'In 26 years, thirteen colonies argued their way from a tax dispute to a brand-new kind of country, run by a written constitution — a model the rest of the world would copy, adapt and argue over.',
          context: [
            'Britain has just won the Seven Years’ War (1756–63), often called the first world war: it was fought in Europe, North America, India and on the oceans.',
            'The thirteen colonies hold nearly 2 million people — about one in five of them enslaved Africans and their descendants.',
            'London has around 700,000 people. Philadelphia, the biggest colonial town, has perhaps 25,000 — about the size of a small town today.',
            'George III became king in 1760, aged 22.',
            'Nothing crosses the Atlantic faster than a sailing ship. A letter from London takes one to two months to arrive.',
            'Across Europe, Enlightenment writers argue that reason, not tradition, should judge how people are governed.',
          ],
        },
        {
          type: 'story',
          title: 'Boston, 14 August 1765',
          lenses: ['history'],
          body: [
            'At dawn, Bostonians found a stuffed figure hanging from a great elm near the edge of town. It stood for Andrew Oliver, the man chosen to sell the king’s new tax stamps.',
            'That night a crowd wrecked a building he owned, then smashed its way into his house. Oliver resigned the next day.',
            'Twelve days later another crowd stripped the mansion of Lieutenant Governor Thomas Hutchinson almost to its walls.',
            'All this over a tax on paper. How did it come to this?',
          ],
        },
        {
          type: 'story',
          title: 'The greatest victory',
          lenses: ['history', 'geography'],
          body: [
            'Rewind to February 1763. In Paris, Britain, France and Spain sign a treaty ending the Seven Years’ War.',
            'Britain has won spectacularly. France gives up Canada and its lands east of the Mississippi; Spain hands over Florida.',
            'The colonists had fought alongside British redcoats — among them a young Virginia officer named George Washington. They celebrate. They are proud to be British.',
            'But victory came with a bill.',
          ],
        },
        {
          type: 'explain',
          term: 'National debt',
          lenses: ['economics'],
          plain:
            'The total a government has borrowed and not yet paid back. Governments borrow by selling bonds — promises to repay with interest, a yearly fee for the loan — to banks and wealthy investors.',
          analogy:
            'Like a credit card: you can spend more than you earn today, but the interest bill keeps arriving until you pay it off.',
          why: 'Britain paid for its wars mostly by borrowing. After 1763 the question was simple and explosive: who pays the interest?',
        },
        {
          type: 'predict',
          lenses: ['economics', 'history'],
          prompt:
            'Britain’s national debt was about £75 million when the war began in 1756. Roughly what was it when the war ended in 1763?',
          options: ['About £80 million', 'About £130 million', 'About £750 million'],
          answer: 1,
          reveal:
            'About £130 million — it nearly doubled. Just paying the interest swallowed roughly half of all the taxes the government collected each year. Imagine half your pocket money going to an old loan before you spend a penny.',
        },
        {
          type: 'story',
          title: 'Sending the bill to America',
          lenses: ['economics', 'politics'],
          body: [
            'In 1763 George Grenville became head of the British government. He planned to keep about 10,000 soldiers in America to guard the vast new lands. Britons already paid heavy taxes; colonists paid far less. Surely the colonies should chip in?',
            'In March 1765 Parliament passed the Stamp Act. Newspapers, legal papers, licences, even playing cards now needed an official stamp, bought from a distributor — like Andrew Oliver.',
            'It was Parliament’s first tax on everyday life inside the colonies, not just on trade.',
          ],
        },
        {
          type: 'explain',
          term: 'Representation',
          lenses: ['politics'],
          plain:
            'Having a say in making the laws through a person you helped choose — someone who speaks and votes for you.',
          analogy:
            'Like a class rep on the school council. If your class has no rep, the council can decide things about you without anyone arguing your side.',
          why: 'Each colony elected its own assembly. But the colonies elected no one at all to the Parliament in London that had just taxed them.',
        },
        {
          type: 'story',
          title: 'No taxation without representation',
          lenses: ['politics', 'history'],
          body: [
            'For centuries the English had held that a government may not take its people’s money without their consent, given through the House of Commons, the elected part of Parliament. The Bill of Rights of 1689 made it law.',
            'The colonists insisted they were Englishmen with the same rights. They sent no members to Parliament. So, they argued, only their own assemblies could tax them.',
            'Their slogan: no taxation without representation.',
          ],
        },
        {
          type: 'story',
          title: 'London’s answer',
          lenses: ['politics'],
          body: [
            'Parliament, the government replied, represents every British subject, whether they vote or not.',
            'After all, only a minority of men in Britain could vote. Booming towns like Manchester and Birmingham elected no members of their own. Were they unrepresented too? This idea was called virtual representation.',
            'Colonists scoffed. A far larger share of white men could vote in the colonies than in Britain, and they knew the difference between a representative they chose and one they didn’t.',
          ],
        },
        {
          type: 'compare',
          lenses: ['politics', 'economics'],
          prompt: 'Two sides of the same argument. Fill in the blanks.',
          columns: ['British government', 'Colonial leaders'],
          rows: [
            {
              label: 'Who may tax the colonies?',
              cells: ['Parliament — it rules the whole empire', 'Only the colonies’ own elected assemblies'],
            },
            {
              label: 'Are colonists represented?',
              cells: ['Yes, “virtually” — like most Britons', 'No — they elect no one to Parliament'],
            },
            {
              label: 'Why pay now?',
              cells: ['The army protects them; Britons pay more', 'They already paid in men and money during the war'],
            },
          ],
          blanks: [
            [0, 1],
            [1, 0],
            [2, 0],
          ],
          explain:
            'Both sides argued from the same English tradition — consent to taxation — and reached opposite answers. That’s why neither could simply back down: each thought the constitution was on its side.',
        },
        {
          type: 'explain',
          term: 'Natural rights (John Locke)',
          lenses: ['philosophy'],
          plain:
            'Rights every person has simply by being human, not as gifts from a ruler. In 1689 the English philosopher John Locke argued that people have natural rights to life, liberty and property, and form governments only to protect them.',
          analogy:
            'Like hiring a security guard for your house: the guard works for you. If he starts helping himself to your things, you may fire him.',
          why: 'Locke added that no government may take anyone’s property — taxes included — without the consent of the people or their representatives. To colonial lawyers, that sounded exactly like the Stamp Act.',
        },
        {
          type: 'estimate',
          lenses: ['geography'],
          prompt:
            'In the 1760s, about how many weeks did a sailing ship usually take to carry news from England to Boston?',
          min: 1,
          max: 20,
          step: 1,
          unit: 'weeks',
          answer: 7,
          tolerance: 2,
          explain:
            'Usually six to eight weeks westbound, against the prevailing westerly winds; the trip back to Britain, with the wind behind, was quicker. A question sent from London and its answer could be four months apart — while tempers on both sides hardened.',
        },
        {
          type: 'story',
          title: 'The first retreat',
          lenses: ['history', 'economics'],
          body: [
            'In October 1765, delegates from nine colonies met in New York as a Stamp Act Congress. Merchants refused to buy British goods. Almost no stamps were ever sold.',
            'British merchants, losing customers, begged Parliament to back down. In March 1766 it repealed the Stamp Act. Colonists rang bells and lit bonfires.',
            'But the same day, Parliament passed the Declaratory Act: it could make laws for the colonies “in all cases whatsoever.”',
          ],
        },
        {
          type: 'choice',
          lenses: ['politics', 'philosophy'],
          prompt: 'At bottom, what did the colonists object to?',
          options: [
            'The tax was far too expensive',
            'Being taxed by a Parliament they elected no one to',
            'Having a king at all',
            'Paying for any army in America',
          ],
          answer: 1,
          explain:
            'The stamp tax was small. The principle was huge: if Parliament could tax them without their consent, it could take anything. In 1765 almost no one wanted to be rid of the king — that came a decade later.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did Parliament pass the Stamp Act?',
          event: 'Stamp Act',
          year: 1765,
          min: 1450,
          max: 1950,
          tolerance: 8,
          anchors: [
            { year: 1492, label: 'Columbus' },
            { year: 1776, label: 'US independence' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1765 — just eleven years before the colonies declared independence. The whole road from loyal subjects to rebels took barely a decade.',
        },
        {
          type: 'recap',
          prompt: 'Why did winning a war in 1763 start a quarrel that would break an empire?',
          keyPoints: [
            'The Seven Years’ War nearly doubled Britain’s national debt',
            'To help pay for its army in America, Parliament taxed the colonists directly (Stamp Act, 1765)',
            'Colonists said only their own elected assemblies could tax them: no taxation without representation',
            'Locke’s ideas about natural rights and consent turned a tax dispute into an argument about what government is for',
          ],
          model:
            'Winning the Seven Years’ War left Britain with a huge debt and an army to pay for in America, so Parliament taxed the colonists directly with the Stamp Act. The colonists argued that only representatives they elected could tax them, and drew on Locke’s idea that governments exist to protect rights. Parliament backed down on the tax but not the principle, so the quarrel stayed alive.',
        },
      ],
      cards: [
        {
          id: 'amf-date-treaty-paris',
          kind: 'date',
          year: 1763,
          front: 'When did the Seven Years’ War end, with Britain victorious?',
          back: '1763 (Treaty of Paris)',
          choices: ['1707', '1776', '1789'],
          hook: 'Thirteen years before US independence (1776).',
        },
        {
          id: 'amf-date-stamp-act',
          kind: 'date',
          year: 1765,
          front: 'When did Parliament pass the Stamp Act, taxing printed paper in the colonies?',
          back: '1765 (repealed in 1766)',
          choices: ['1689', '1776', '1787'],
          hook: 'Eleven years before independence: 1776 − 11.',
        },
        {
          id: 'amf-num-debt',
          kind: 'number',
          front: 'What happened to Britain’s national debt during the Seven Years’ War?',
          back: 'It nearly doubled — from about £75 million to about £130 million',
          choices: ['It was paid off', 'It rose by about a tenth', 'It rose tenfold'],
        },
        {
          id: 'amf-cause-taxes',
          kind: 'cause',
          front: 'Why did Britain start taxing the American colonists directly after 1763?',
          back: 'To help pay for its war debt and the army it kept in America',
          choices: [
            'To punish them for losing the war',
            'To pay for the king’s new palace',
            'Because the colonists asked for an army',
          ],
        },
        {
          id: 'amf-concept-no-taxation',
          kind: 'concept',
          front: 'What did “no taxation without representation” mean?',
          back: 'Only a body the colonists elected (their own assemblies) could rightfully tax them — not a Parliament they sent no members to.',
        },
        {
          id: 'amf-person-locke',
          kind: 'person',
          front: 'Which English philosopher argued that governments exist to protect natural rights to life, liberty and property?',
          back: 'John Locke (Two Treatises of Government, 1689)',
          choices: ['Thomas Hobbes', 'Voltaire', 'Adam Smith'],
        },
        {
          id: 'amf-num-crossing',
          kind: 'number',
          front: 'In the 1760s, how long did news usually take to sail from England to America?',
          back: 'About six to eight weeks',
          choices: ['About three days', 'About two weeks', 'About six months'],
        },
      ],
      teaser:
        'Parliament has backed down on the stamps — but insists it can still tax America “in all cases whatsoever.” Next it tries again, with tea. Within ten years, redcoats and farmers will be shooting at each other outside Boston. How does an argument become a war?',
    },
  ],
  upcoming: [
    {
      title: 'Tea, Blood and Gunpowder',
      summary:
        'New taxes, soldiers in Boston, a massacre (1770), a harbour full of tea (1773) — and the first shots at Lexington and Concord (1775).',
    },
    {
      title: 'All Men Are Created Equal',
      summary:
        'Thomas Paine’s Common Sense, Jefferson’s Declaration of Independence (1776) — and the enslaved people its promise left out.',
    },
    {
      title: 'Not Worth a Continental',
      summary:
        'How do you fund a war with no power to tax? Printed money and runaway inflation, a winter at Valley Forge, and the French alliance that ended at Yorktown (1781).',
    },
    {
      title: 'The Summer in Philadelphia',
      summary:
        'A weak union, a farmers’ rebellion, and the 1787 convention that designed checks and balances — and struck a deal over slavery.',
    },
    {
      title: 'We the People',
      summary:
        'The Federalist papers, the fight to ratify, Washington sworn in (1789) — while across the ocean, France’s war debts for helping America come due.',
    },
  ],
}
