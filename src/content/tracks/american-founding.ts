import type { Track } from '../types'

// Sources for figures used here: Anderson, Crucible of War (2000) (Seven Years’ War);
// Brewer, The Sinews of Power (1989) (British debt and taxation); Morgan & Morgan, The Stamp Act
// Crisis (1953); Middlekauff, The Glorious Cause (2005); Bailyn, The Ordeal of Thomas Hutchinson
// (1974) and The Ideological Origins of the American Revolution (1967); Locke, Second Treatise of
// Government (1689), §§ 138–140; US Census Bureau, Historical Statistics of the United States
// (colonial population); Steele, The English Atlantic 1675–1740 (1986) (crossing times); Britannica.
// Later lessons: Zobel, The Boston Massacre (1970); Labaree, The Boston Tea Party (1964); Fischer,
// Paul Revere’s Ride (1994); Maier, American Scripture (1997) and Ratification (2010); Loughran, The
// Republic in Print (2007) (Common Sense sales); Pybus, Epic Journeys of Freedom (2006) and Jasanoff,
// Liberty’s Exiles (2011) (enslaved refugees, Loyalist exile); Monticello.org (Jefferson and slavery);
// Ferguson, The Power of the Purse (1961) (Continental currency); Richards, Shays’s Rebellion (2002);
// Farrand, Records of the Federal Convention (1911); Beeman, Plain, Honest Men (2009); Montesquieu,
// The Spirit of the Laws (1748); The Federalist (1787–88); US Census 1790.
// Contested figures are given as ranges or rounded.

const NORTH_ATLANTIC = { west: -95, south: 22, east: 12, north: 58 }
const EAST_COAST = { west: -80, south: 36, east: -70, north: 44 }
const MID_ATLANTIC = { west: -78.5, south: 38, east: -69.5, north: 43.2 }

export const americanFounding: Track = {
  id: 'american-founding',
  series: 'revolutions',
  tier: 1,
  title: 'The American Founding',
  tagline:
    'A quarrel over a tax on paper becomes a new theory of government — and a country built on a promise it doesn’t yet keep.',
  lenses: ['history', 'politics', 'philosophy', 'economics'],
  era: [1763, 1791],
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
            [0, 1, ['Royal governors, with the king’s approval', 'No one — colonists should pay no taxes']],
            [1, 0, ['Yes — they elect their own MPs', 'No — and they never need to be']],
            [2, 0, ['To fund a new war against Spain', 'To pay for the king’s new palace']],
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
    // ─────────────────────────────────────────────────────────────── 2
    {
      id: 'tea-blood-gunpowder',
      title: 'Tea, Blood and Gunpowder',
      summary:
        'Redcoats in Boston, a massacre (1770), a harbour full of tea (1773) — and the first shots of a war (1775).',
      question: 'How did an argument about taxes turn into a shooting war?',
      previously:
        'Britain won the Seven Years’ War deep in debt and taxed the colonies with the Stamp Act (1765). The colonists refused to pay; Parliament backed down, but kept the right to make laws for them “in all cases whatsoever.”',
      steps: [
        {
          type: 'story',
          title: 'Boston, 5 March 1770',
          lenses: ['history'],
          body: [
            'Snow lay on King Street. Outside the Custom House, a lone British sentry, Private Hugh White, traded insults with a growing crowd of young men.',
            'Snowballs, chunks of ice and oyster shells flew. Captain Thomas Preston arrived with seven more soldiers. In the din, someone shouted to fire. Muskets went off.',
            'Five men died, among them Crispus Attucks, a sailor of African and Native American descent. How had British soldiers come to be standing guard in Boston at all?',
          ],
        },
        {
          type: 'story',
          title: 'Rewind: taxes at the harbour',
          lenses: ['economics', 'politics'],
          body: [
            'Parliament still needed money. In 1767 Charles Townshend, the minister in charge of Britain’s finances, tried a new route: import duties — taxes paid on goods as they arrive in port. Glass, lead, paint, paper and tea were all taxed.',
            'Part of the money would pay royal governors and judges. Until then, colonial assemblies had paid them, which gave colonists a hold over them.',
            'Colonists answered as before. Merchants stopped importing British goods, and Boston led the way.',
          ],
        },
        {
          type: 'story',
          title: 'Soldiers in the streets',
          lenses: ['history', 'politics'],
          body: [
            'Boston’s customs officers, mobbed and threatened, begged London for protection. From October 1768 about 2,000 British soldiers arrived — in a town of some 15,000 people. Picture one armed stranger for every seven or eight neighbours.',
            'Off duty, some poorly paid soldiers took spare-time jobs, undercutting local workers. Insults turned to brawls. On 2 March 1770, soldiers and rope-makers fought with clubs.',
            'Three days later came King Street.',
          ],
        },
        {
          type: 'predict',
          lenses: ['politics', 'history'],
          prompt:
            'Boston’s Patriots called the shooting a massacre, and Paul Revere sold a famous engraving of redcoats gunning down peaceful townspeople. The soldiers were charged with murder. John Adams — a Boston lawyer and fierce critic of British taxes — agreed to defend them. What did the juries decide?',
          options: [
            'All the soldiers were guilty of murder',
            'Most were acquitted; two were convicted of a lesser crime',
            'The case was dropped for lack of witnesses',
          ],
          answer: 1,
          reveal:
            'Captain Preston and six soldiers were acquitted. Two were convicted of manslaughter — killing without meaning to — and branded on the thumb instead of being hanged. Adams argued that the soldiers had faced a violent mob and feared for their lives. The juries agreed.',
        },
        {
          type: 'explain',
          term: 'Rule of law',
          lenses: ['politics', 'philosophy'],
          plain:
            'The idea that everyone — rulers, soldiers, and people a crowd hates — is judged by the same known laws in fair courts, not by the anger of a mob or the wishes of the powerful.',
          analogy:
            'Like a referee who makes a fair call even while the home crowd is booing. If the rules bend to the loudest voices, it stops being a game.',
          why: 'The colonists’ whole case was that Britain was breaking the law by taxing them. John Adams believed they could only make that case if they kept the law themselves — even for hated redcoats. Three years later he wrote in his diary that the defence was one of the best services he had ever done his country.',
        },
        {
          type: 'story',
          title: 'The tea trap',
          lenses: ['economics'],
          body: [
            'In 1770 Parliament dropped the Townshend duties — all except the one on tea, kept to prove it still could tax. Many colonists dodged it by drinking cheaper tea smuggled from Dutch suppliers.',
            'Then came the Tea Act of 1773. The East India Company, a giant British trading firm near collapse, had about 7,700 tonnes of unsold tea in London.',
            'Now it could ship tea straight to America and sell it through a few merchants it chose. Even with the tax, its tea would undercut the smugglers’.',
          ],
        },
        {
          type: 'choice',
          lenses: ['economics', 'politics'],
          prompt: 'The Tea Act made legal tea cheaper, even with the tax. So why were colonists furious?',
          options: [
            'The tea was stale and of poor quality',
            'Buying it meant accepting Parliament’s right to tax them — and one company would control the trade',
            'The Act doubled the tax on tea',
            'Colonial assemblies had banned tea drinking',
          ],
          answer: 1,
          explain:
            'Cheap tea was bait: every chest sold would show that colonists accepted Parliament’s tax. And it created a monopoly — one seller controlling a whole trade — that shut out every other importer, smugglers included. If Parliament could hand one company the tea trade, colonists asked, what might it hand out next?',
        },
        {
          type: 'story',
          title: 'Boston, 16 December 1773',
          lenses: ['history', 'economics'],
          body: [
            'Three ships loaded with Company tea sat at Griffin’s Wharf. Boston demanded they sail home. Governor Thomas Hutchinson — whose house a crowd had wrecked in 1765 — refused to let them leave until the tea was landed and the tax paid.',
            'That evening, thousands packed the Old South Meeting House. Then dozens of men, some thinly disguised as Mohawk warriors, boarded the ships. In about three hours they split open 342 chests and dumped around 42 tonnes of tea into the harbour.',
          ],
        },
        {
          type: 'story',
          title: 'Punishing Boston',
          lenses: ['politics', 'history'],
          body: [
            'London was furious. In 1774 Parliament passed what it called the Coercive Acts — laws to force obedience. Boston’s port was closed until the tea was paid for. Massachusetts lost much of its self-government, and General Thomas Gage, head of the British army in America, became its governor.',
            'Colonists called them the Intolerable Acts. Instead of isolating Boston, they united the colonies. In September 1774 delegates from twelve colonies met in Philadelphia as the First Continental Congress, and agreed to boycott British goods.',
          ],
        },
        {
          type: 'explain',
          term: 'Militia',
          lenses: ['history', 'politics'],
          plain:
            'Part-time citizen soldiers — farmers, craftsmen, shopkeepers — who keep their own guns and train together, ready to turn out in an emergency. In Massachusetts, some companies promised to be ready at a minute’s notice: the minutemen.',
          analogy:
            'Like a volunteer fire brigade: ordinary people with day jobs who drop everything when the alarm bell rings.',
          why: 'Britain had a professional army. The colonies had no army at all — just local militias, and stores of gunpowder and cannon hidden in country towns.',
        },
        {
          type: 'story',
          title: 'The road to Concord',
          lenses: ['geography', 'history'],
          body: [
            'In April 1775 Gage learned that the militia had stored weapons and gunpowder at Concord, about 25 km inland. He sent roughly 700 soldiers to seize them, by night.',
            'Geography gave him away. Boston was almost an island, joined to the mainland only by a narrow strip called the Neck. Troops had to march over it or be rowed across the river — in full view.',
            'They took the boats. Lanterns in a church steeple signalled the route, and riders, including Paul Revere, galloped off to raise the alarm.',
          ],
        },
        {
          type: 'story',
          title: 'Lexington and Concord, 19 April 1775',
          lenses: ['history'],
          body: [
            'At dawn, about 70–80 militiamen stood on Lexington’s village green as the redcoats marched up. A shot rang out — to this day, no one knows who fired it. British volleys killed eight militiamen.',
            'At Concord’s North Bridge, the militia fired back. By now thousands were streaming in from nearby towns. Shooting from behind stone walls, trees and houses, they harried the redcoats all the way back to Boston. By nightfall 73 British soldiers and 49 Americans were dead.',
          ],
        },
        {
          type: 'story',
          title: 'Bunker Hill, 17 June 1775',
          lenses: ['history', 'geography'],
          body: [
            'Thousands of militiamen now ringed Boston, trapping the British army inside. On the night of 16 June they dug earthworks on Breed’s Hill, on the Charlestown peninsula just across the water.',
            'Next day, British troops attacked uphill, three times. They took the hill — but over 1,000 of them were killed or wounded, against about 450 Americans. The battle took its name from nearby Bunker Hill.',
            'A British general, Henry Clinton, wrote that a few more such victories would end British rule in America.',
          ],
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Put the road to war in order.',
          items: [
            'Townshend duties on glass, paper and tea',
            'British soldiers land in Boston',
            'The Boston Massacre',
            'The Boston Tea Party',
            'The Intolerable Acts close Boston’s port',
            'Fighting at Lexington and Concord',
            'The Battle of Bunker Hill',
          ],
          explain:
            '1767, 1768, 1770, 1773, 1774, April 1775, June 1775. Each step answered the one before: tax, resistance, soldiers, bloodshed, defiance, punishment — and finally war.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When was the Boston Massacre?',
          event: 'Boston Massacre',
          year: 1770,
          min: 1740,
          max: 1800,
          tolerance: 2,
          anchors: [
            { year: 1763, label: 'Seven Years’ War ends' },
            { year: 1776, label: 'US independence' },
            { year: 1789, label: 'French Revolution' },
          ],
          explain:
            '1770 — seven years after Britain’s great victory, and six before independence. When the soldiers fired on King Street, almost no one in Boston was yet talking about leaving the empire.',
        },
        {
          type: 'recap',
          prompt: 'How did an argument about taxes turn into a shooting war?',
          keyPoints: [
            'Parliament kept trying to tax the colonies (Townshend duties 1767, Tea Act 1773), and colonists kept resisting',
            'Soldiers sent to Boston ended up firing on a crowd: the Boston Massacre (1770)',
            'The Boston Tea Party (1773) brought the harsh Intolerable Acts (1774), which united the colonies instead of isolating Boston',
            'When troops marched to seize militia weapons, fighting broke out at Lexington and Concord (April 1775)',
          ],
          model:
            'Each time Parliament tried to tax the colonies, they resisted, and each response made the next clash worse. Soldiers sent to Boston fired on a crowd in 1770; the Tea Act led to the Boston Tea Party in 1773; and Parliament’s punishment of Boston pulled the other colonies to its side. When British troops marched out to seize militia weapons in April 1775, the militia fought back at Lexington and Concord, and the argument became a war.',
        },
      ],
      cards: [
        {
          id: 'amf-date-massacre',
          kind: 'date',
          year: 1770,
          front: 'When was the Boston Massacre, in which British soldiers killed five colonists?',
          back: '5 March 1770',
          choices: ['5 March 1765', '5 March 1776', '5 March 1787'],
          hook: 'Five dead on the fifth of March — five years after the Stamp Act (1765).',
        },
        {
          id: 'amf-person-john-adams',
          kind: 'person',
          front: 'Which Patriot lawyer defended the British soldiers after the Boston Massacre?',
          back: 'John Adams — because even hated soldiers deserved a fair trial',
          choices: ['Samuel Adams', 'Paul Revere', 'Thomas Hutchinson'],
        },
        {
          id: 'amf-date-tea-party',
          kind: 'date',
          year: 1773,
          front: 'When was the Boston Tea Party?',
          back: '16 December 1773',
          choices: ['16 December 1763', '16 December 1776', '16 December 1783'],
          hook: 'Three years before independence: 1776 − 3.',
        },
        {
          id: 'amf-num-tea-chests',
          kind: 'number',
          front: 'How many chests of tea were dumped into Boston harbour in the Boston Tea Party?',
          back: '342 — about 42 tonnes of tea',
          choices: ['42', '1,342', '3,420'],
        },
        {
          id: 'amf-cause-tea-act',
          kind: 'cause',
          front: 'Why did the Tea Act (1773) enrage colonists, even though it made tea cheaper?',
          back: 'Buying the tea meant accepting Parliament’s tax — and the East India Company got a monopoly that shut out colonial merchants.',
        },
        {
          id: 'amf-concept-intolerable',
          kind: 'concept',
          front: 'What were the Intolerable (Coercive) Acts of 1774?',
          back: 'Laws punishing Boston for the Tea Party: its port closed and Massachusetts’ self-government cut back',
          choices: [
            'A new tax on stamps and printed paper',
            'Laws giving the colonies seats in Parliament',
            'The treaty that ended the Seven Years’ War',
          ],
        },
        {
          id: 'amf-date-lexington',
          kind: 'date',
          year: 1775,
          front: 'When were the first shots of the war fired, at Lexington and Concord?',
          back: '19 April 1775',
          choices: ['19 April 1770', '19 April 1781', '19 April 1789'],
          hook: 'The war began more than a year before the Declaration of Independence (1776).',
        },
      ],
      teaser:
        'Americans and redcoats are killing each other — yet almost no one is calling for independence. Most colonists still toast the king. Then a newcomer from England writes a pamphlet that sells like nothing before it. How do you talk a people out of loyalty to their king?',
    },

    // ─────────────────────────────────────────────────────────────── 3
    {
      id: 'all-men-created-equal',
      title: 'All Men Are Created Equal',
      summary:
        'A best-selling pamphlet, a 33-year-old’s draft, and a Declaration (1776) whose promise its own author didn’t keep.',
      question: 'Why did the colonists declare independence — and who was left out of “all men”?',
      previously:
        'Taxes, a massacre (1770) and the Boston Tea Party (1773) led to the Intolerable Acts and, in April 1775, the first shots at Lexington and Concord.',
      steps: [
        {
          type: 'story',
          title: 'Philadelphia, January 1776',
          lenses: ['history', 'politics'],
          body: [
            'The war was nine months old. Yet Congress still said it wanted only its rights as British subjects, not a new country. Many colonists still toasted the king’s health.',
            'Congress had even sent George III a last appeal for peace. He refused to read it, and declared the colonies in open rebellion.',
            'Then, on 10 January 1776, a pamphlet went on sale in Philadelphia, credited only to an Englishman. Its title was Common Sense.',
          ],
        },
        {
          type: 'story',
          title: 'Thomas Paine',
          lenses: ['history', 'philosophy'],
          body: [
            'Its author was Thomas Paine, a 38-year-old who had failed in England as a corset-maker, tax collector and shopkeeper, and had reached America just over a year earlier.',
            'Paine wrote plainly, for ordinary readers, not lawyers. Why should anyone rule, he asked, just because his father had? And how could a small island sensibly govern a whole continent, an ocean away?',
            'His answer: independence, now.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history'],
          prompt:
            'The colonies had about 2.5 million people. How many copies of Common Sense do you think sold in its first year?',
          options: ['A few thousand', 'Tens of thousands — maybe more', 'Over 2 million'],
          answer: 1,
          reveal:
            'Nobody knows for sure. Paine claimed 120,000 copies in three months; later admirers said half a million, which is almost certainly too many. Some historians think the real figure was far lower — perhaps tens of thousands. Even so, it was the best-seller of its day, passed hand to hand and read aloud in taverns and army camps. Washington wrote that it was changing many minds.',
        },
        {
          type: 'story',
          title: 'Deciding to leave',
          lenses: ['history', 'politics'],
          body: [
            'By spring 1776 the mood had turned. Word arrived that Britain was hiring thousands of German soldiers to crush the rebellion.',
            'On 7 June, Richard Henry Lee of Virginia asked Congress to declare the colonies free and independent states. Congress named five men, among them John Adams and Benjamin Franklin, to draft a statement explaining why.',
            'The writing fell to a 33-year-old Virginia planter with an elegant pen: Thomas Jefferson.',
          ],
        },
        {
          type: 'explain',
          term: 'Consent of the governed',
          lenses: ['philosophy', 'politics'],
          plain:
            'The idea that a government’s right to rule comes from the people agreeing to it — not from God choosing a king, and not from force.',
          analogy:
            'Like a club that elects its captain: the captain leads because the members agreed, and they can replace a captain who abuses the job.',
          why: 'This was Locke’s idea, and it was the Declaration’s key move. If power comes from the people, then a people whose rights are abused may withdraw their consent — and set up a new government.',
        },
        {
          type: 'story',
          title: 'We hold these truths',
          lenses: ['philosophy', 'history'],
          body: [
            'Jefferson wrote in rented rooms, in about two and a half weeks. The heart of it is one sentence: “We hold these truths to be self-evident, that all men are created equal, that they are endowed by their Creator with certain unalienable Rights, that among these are Life, Liberty and the pursuit of Happiness.”',
            'Governments exist to protect those rights, it went on. When one destroys them, the people may abolish it. Then came a long list of charges against George III.',
          ],
        },
        {
          type: 'choice',
          lenses: ['philosophy'],
          prompt: 'Locke listed natural rights as life, liberty and property. What did Jefferson put in place of property?',
          options: ['The pursuit of happiness', 'Equality before the law', 'Freedom of religion', 'The right to vote'],
          answer: 0,
          explain:
            'Historians still debate why. Happiness was a common word in Enlightenment writing about what government is for, and it reached further than property: not just keeping what you own, but the chance to seek a good life. That wider promise is why later movements, from abolitionists to civil-rights marchers, could quote it back at the nation.',
        },
        {
          type: 'story',
          title: 'The second and the fourth of July',
          lenses: ['history'],
          body: [
            'On 2 July 1776, Congress voted for independence. Twelve colonies said yes; New York’s delegates, still waiting for instructions, stayed silent.',
            'For two more days Congress edited Jefferson’s draft line by line, cutting about a quarter of it, while he fumed at the changes. On 4 July it approved the final text — the date printed at the top, and the day Americans celebrate.',
            'Most delegates signed a fair copy a month later, on 2 August.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['philosophy', 'history'],
          prompt: 'John Locke published his Two Treatises of Government, the source of the Declaration’s big ideas. When?',
          event: 'Locke’s Two Treatises',
          year: 1689,
          min: 1200,
          max: 1800,
          tolerance: 15,
          anchors: [
            { year: 1215, label: 'Magna Carta' },
            { year: 1492, label: 'Columbus' },
            { year: 1776, label: 'US independence' },
          ],
          explain:
            '1689 — the same year as England’s Bill of Rights, and 87 years before the Declaration. Ideas can take generations to become action: Jefferson put Locke’s theory to work nearly a century after Locke wrote it.',
        },
        {
          type: 'story',
          title: 'The author’s contradiction',
          lenses: ['history', 'philosophy'],
          body: [
            'Jefferson wrote that “all men are created equal.” Over his lifetime he enslaved more than 600 people. In 1776 about one in five people in the thirteen colonies — some 500,000 — were enslaved.',
            'His draft had attacked the slave trade, blaming George III for it and calling it a cruel war against human nature. Congress cut the passage entirely. Delegates from South Carolina and Georgia wanted it gone, Jefferson later recalled, and some Northern merchants who profited from the trade were uneasy too.',
          ],
        },
        {
          type: 'story',
          title: 'Freedom from the king',
          lenses: ['history', 'politics'],
          body: [
            'Britain saw a weapon in slavery. In November 1775 Lord Dunmore, the royal governor of Virginia, promised freedom to enslaved people owned by rebels if they escaped and fought for the king. Hundreds reached his lines.',
            'It was a military move, not a moral one: Loyalists’ slaves were not included. The Declaration even accused the king of stirring up “domestic insurrections amongst us.”',
            'But to many enslaved people, the redcoats — not the Patriots — were the side offering freedom.',
          ],
        },
        {
          type: 'compare',
          lenses: ['history', 'politics'],
          prompt: 'Three groups, three very different wars. Fill in the blanks.',
          columns: ['Loyalists', 'Patriots', 'Enslaved people'],
          rows: [
            {
              label: 'What did they want most?',
              cells: [
                'To stay British and keep order',
                'Independence and self-government',
                'Their own freedom, from whichever side offered it',
              ],
            },
            {
              label: 'How did they see the king?',
              cells: [
                'Their lawful ruler and protector',
                'A tyrant who had broken their rights',
                'A possible liberator, after Dunmore’s promise',
              ],
            },
            {
              label: 'Roughly how many?',
              cells: [
                'Perhaps 15–20% of white colonists',
                'Perhaps 40–45% of white colonists',
                'About 500,000 — one in five colonists',
              ],
            },
            {
              label: 'After the war',
              cells: [
                'Tens of thousands went into exile',
                'Won a country of their own',
                'Most still enslaved; thousands left with the British',
              ],
            },
          ],
          blanks: [
            [0, 2, ['Land in the west, promised by Congress', 'Seats in the colonial assemblies']],
            [1, 0, ['A foreign ruler they had never accepted', 'A distant figure with no real power']],
            [2, 1, ['Nearly all white colonists', 'Fewer than one in ten white colonists']],
            [3, 2, ['All freed by the new states in 1783', 'Given land and the vote by Congress']],
          ],
          explain:
            'The Revolution was also a civil war. White colonists split three ways — the rest tried to stay neutral — and enslaved people made their own choices, siding with whoever offered freedom. Tens of thousands escaped to British lines during the war, though many died of disease or were re-enslaved.',
        },
        {
          type: 'story',
          title: 'Remember the ladies',
          lenses: ['history', 'politics'],
          body: [
            'The Declaration said nothing about women. In March 1776 Abigail Adams wrote to her husband John in Congress, urging him to remember the ladies in the new laws and not to give husbands unlimited power over wives. Otherwise, she teased, women might start a rebellion of their own. John replied that he could only laugh.',
            'Native Americans fared worse: the Declaration called them “merciless Indian Savages.” Many nations sided with Britain, which had tried to keep settlers off their lands beyond the Appalachian Mountains.',
          ],
        },
        {
          type: 'match',
          lenses: ['history', 'philosophy'],
          prompt: 'Who said or did what?',
          categories: ['Thomas Paine', 'Thomas Jefferson', 'Abigail Adams', 'Lord Dunmore'],
          items: [
            { text: 'Argued it was absurd for an island to rule a continent', category: 'Thomas Paine' },
            { text: 'Wrote that all men are created equal', category: 'Thomas Jefferson' },
            { text: 'Drafted a passage attacking the slave trade', category: 'Thomas Jefferson' },
            { text: 'Asked her husband to remember the ladies', category: 'Abigail Adams' },
            { text: 'Promised freedom to rebels’ enslaved people who joined the British', category: 'Lord Dunmore' },
          ],
          explain:
            'A pamphleteer made independence popular; a planter put it into words that outlived him; a wife and a royal governor exposed who those words left out.',
        },
        {
          type: 'recap',
          prompt: 'Why did the colonists declare independence — and who was left out of “all men”?',
          keyPoints: [
            'Paine’s Common Sense (January 1776) made independence feel like common sense, not treason',
            'Jefferson’s Declaration used Locke’s ideas: natural rights, and government by consent of the governed',
            'Congress voted for independence on 2 July and adopted the Declaration on 4 July 1776',
            'Enslaved people, women and Native Americans were left out — and Britain offered some enslaved people freedom',
          ],
          model:
            'After a year of war and a king who refused to listen, Paine’s Common Sense convinced many colonists that independence was the only sensible answer. Jefferson’s Declaration, adopted on 4 July 1776, argued like Locke that people have natural rights and that governments rule only by their consent, so a people whose rights are trampled may break away. But its promise that all men are created equal left out the enslaved — Jefferson himself held hundreds — as well as women and Native Americans.',
        },
      ],
      cards: [
        {
          id: 'amf-date-declaration',
          kind: 'date',
          year: 1776,
          front: 'When did Congress adopt the Declaration of Independence?',
          back: '4 July 1776 (independence itself was voted on 2 July)',
          choices: ['4 July 1765', '4 July 1783', '4 July 1789'],
          hook: 'The Fourth of July — two days after the actual vote.',
        },
        {
          id: 'amf-person-paine',
          kind: 'person',
          front: 'Who wrote Common Sense (January 1776), the pamphlet urging immediate independence?',
          back: 'Thomas Paine, a recent immigrant from England',
          choices: ['Thomas Jefferson', 'Benjamin Franklin', 'John Adams'],
        },
        {
          id: 'amf-person-jefferson',
          kind: 'person',
          front: 'Who drafted the Declaration of Independence?',
          back: 'Thomas Jefferson of Virginia, aged 33',
          choices: ['John Adams', 'George Washington', 'James Madison'],
        },
        {
          id: 'amf-concept-happiness',
          kind: 'concept',
          front: 'Locke named life, liberty and property. Which three rights does the Declaration name?',
          back: '“Life, Liberty and the pursuit of Happiness”',
          choices: [
            'Life, liberty and property',
            'Liberty, equality and fraternity',
            'Peace, order and good government',
          ],
        },
        {
          id: 'amf-concept-consent',
          kind: 'concept',
          front: 'According to the Declaration, where does a government get its just powers?',
          back: 'From “the consent of the governed” — the people’s agreement',
          choices: ['From God’s choice of a king', 'From victory in war', 'From ancient tradition'],
        },
        {
          id: 'amf-concept-contradiction',
          kind: 'concept',
          front: 'What was the great contradiction in the Declaration’s claim that “all men are created equal”?',
          back: 'About one in five people in the colonies were enslaved — Jefferson himself enslaved hundreds — and Congress cut his passage attacking the slave trade.',
        },
        {
          id: 'amf-concept-dunmore',
          kind: 'concept',
          front: 'What did Lord Dunmore’s Proclamation (1775) promise?',
          back: 'Freedom for enslaved people owned by rebels, if they escaped and fought for the British',
          choices: [
            'Freedom for every enslaved person in America',
            'Land in the west for Loyalist settlers',
            'Pardons for rebels who laid down their arms',
          ],
        },
      ],
      teaser:
        'Declaring independence is the easy part. Now thirteen states with a ragged army, almost no navy and no power to tax must beat the world’s greatest empire. How do you pay for a war with money you print yourself?',
    },

    // ─────────────────────────────────────────────────────────────── 4
    {
      id: 'not-worth-a-continental',
      title: 'Not Worth a Continental',
      summary:
        'A war paid for with printed money, a starving winter at Valley Forge, a French alliance and victory at Yorktown (1781) — and a peace that left the new nation broke.',
      question:
        'How did a broke, loosely united set of states beat the world’s strongest empire — and what did victory cost them?',
      previously:
        'In July 1776 Congress declared independence, promising that “all men are created equal” — while one in five people in the colonies remained enslaved.',
      steps: [
        {
          type: 'orient',
          title: 'The War of Independence',
          from: 1775,
          to: 1783,
          places: [
            { name: 'Yorktown', lon: -76.51, lat: 37.24 },
            { name: 'Valley Forge', lon: -75.45, lat: 40.1, label: 'left' },
            { name: 'New York', lon: -74.01, lat: 40.71 },
            { name: 'Saratoga', lon: -73.64, lat: 43.01 },
          ],
          placesNote:
            'The war ranged along the whole coast. The British held New York for almost all of it; the turning points came far to the north, at Saratoga, and far to the south, at Yorktown on Chesapeake Bay.',
          mapBounds: EAST_COAST,
          lenses: ['history', 'geography'],
          why: 'A rebel army that won few battles outlasted the world’s strongest empire — with French help, and on money that became almost worthless.',
          context: [
            'Great Britain has about 8–9 million people; the thirteen states about 2.5 million, a fifth of them enslaved.',
            'Britain has the world’s biggest navy. The Americans have almost none.',
            'Congress has no power to tax. It can only ask the states for money.',
            'France, beaten by Britain in 1763, is looking for revenge.',
            'George Washington, 43 when Congress appointed him in 1775, commands the new Continental Army.',
          ],
        },
        {
          type: 'story',
          title: 'Valley Forge, December 1777',
          lenses: ['history', 'economics'],
          body: [
            'Washington’s army limped into winter camp at Valley Forge, about 30 km from Philadelphia — which the British had just captured. Many men had no shoes; some marched barefoot through the snow.',
            'They built log huts and waited for food that often didn’t come. Congress had no money for supplies, and many local farmers preferred to sell to the British, who paid in gold and silver.',
            'Over that winter, perhaps 1,700–2,000 of about 12,000 soldiers died, mostly of disease.',
          ],
        },
        {
          type: 'predict',
          lenses: ['economics'],
          prompt: 'Congress needed money for food, guns and pay — but it had no power to tax. What do you think it did?',
          options: [
            'Borrowed it all from American banks',
            'Printed paper money',
            'Asked the soldiers to fight for free',
          ],
          answer: 1,
          reveal:
            'It printed money. Between 1775 and 1779 Congress issued more than $200 million in paper dollars, nicknamed Continentals. For a while it worked: soldiers and suppliers took the notes. Then the paper began to lose its value — fast.',
        },
        {
          type: 'explain',
          term: 'Inflation',
          lenses: ['economics'],
          plain: 'A general rise in prices, so that each coin or note buys less than it used to.',
          analogy:
            'Imagine a teacher hands out ten times as many reward tokens, while the prize shelf stays the same. Soon a pencil costs 50 tokens instead of 5. The prizes didn’t change; the tokens got cheaper.',
          why: 'Printing money doesn’t make more food, shoes or gunpowder. When Congress printed more and more dollars to chase the same goods, prices soared.',
        },
        {
          type: 'story',
          title: 'Melting money',
          lenses: ['economics'],
          body: [
            'Each new batch of paper bought less than the last. Farmers and shopkeepers demanded more and more dollars for the same sack of flour, or refused them outright.',
            'The British made it worse by printing fake Continentals and spreading them around. Economists call this loss of value depreciation: the money itself is worth less and less.',
            'Soldiers paid in Continentals watched their wages melt away before they could spend them.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['economics'],
          prompt:
            'In March 1780 Congress officially admitted how far its paper had fallen. How many paper dollars did it rule were worth one silver dollar?',
          min: 1,
          max: 100,
          step: 1,
          unit: 'paper dollars',
          answer: 40,
          tolerance: 10,
          explain:
            'Forty — and on the street they were often worth even less. Picture paying forty coins for something that used to cost one. Within about a year the notes had stopped working as money at all, and a saying was born: not worth a Continental.',
        },
        {
          type: 'story',
          title: 'Saratoga, October 1777',
          lenses: ['history', 'geography'],
          body: [
            'Yet even as Washington’s men froze, news was crossing the Atlantic that would save them.',
            'That autumn a British army under General John Burgoyne had marched south from Canada, aiming to cut New England off from the other states. In the woods near Saratoga, New York, American troops surrounded it.',
            'On 17 October Burgoyne surrendered with about 6,000 men. For the first time, Americans had captured an entire British army.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'politics'],
          prompt: 'Why did Saratoga matter far more than other battles?',
          options: [
            'It ended the war',
            'It convinced France that the Americans could win — and France joined the war',
            'It captured the main British base in America',
            'George Washington won it personally',
          ],
          answer: 1,
          explain:
            'France had been secretly sending weapons and money since 1776, hungry for revenge after losing Canada in 1763. Saratoga proved the rebels were worth backing openly. In February 1778 France signed an alliance with the United States, and in 1779 Spain joined France against Britain. A colonial revolt had become a world war. (Washington wasn’t even there: Horatio Gates commanded.)',
        },
        {
          type: 'story',
          title: 'A trap by the sea',
          lenses: ['geography', 'history'],
          body: [
            'In 1781 the British general Lord Cornwallis marched his army into Virginia and dug in at Yorktown, a tobacco port on a peninsula reaching into Chesapeake Bay.',
            'It seemed safe. The Royal Navy ruled the sea and could supply him — or carry him away.',
            'But the bay has only one way in: a mouth about 20 km wide. Whoever held that gap held Yorktown. Cornwallis was betting it would always be Britain.',
          ],
        },
        {
          type: 'story',
          title: 'Yorktown, October 1781',
          lenses: ['history', 'geography'],
          body: [
            'In late August a French fleet of 28 warships under Admiral de Grasse sailed up from the Caribbean and sealed the bay. A British fleet came to break through; in early September the French drove it off.',
            'Meanwhile Washington and the French general Rochambeau marched their armies hundreds of kilometres south. About half the besiegers were French.',
            'Trapped between them, Cornwallis was besieged for three weeks and pounded by cannon. On 19 October 1781 he surrendered about 7,000–8,000 men.',
          ],
        },
        {
          type: 'story',
          title: 'Peace — and the bill',
          lenses: ['history', 'economics'],
          body: [
            'After Yorktown, Britain’s Parliament voted to stop fighting in America. In the Treaty of Paris, signed on 3 September 1783 and negotiated by Benjamin Franklin, John Adams and John Jay, Britain recognised the United States as independent, with land reaching west to the Mississippi River.',
            'The Americans had won. But Congress and the states owed huge debts, and soldiers were owed months or years of back pay. Who would pay?',
          ],
        },
        {
          type: 'explain',
          term: 'The Articles of Confederation',
          lenses: ['politics'],
          plain:
            'The first American constitution, in force from 1781. It made the United States a confederation: a loose alliance of states that kept most power for themselves, with a weak Congress for the few things they shared.',
          analogy:
            'Like a group project where the team leader can ask everyone to do their part, but can’t make anyone do anything.',
          why: 'Congress could declare war and make treaties — but it could not tax, and it could not force the states to pay what it asked. Each state had one vote, and changing the Articles needed all thirteen to agree.',
        },
        {
          type: 'story',
          title: 'Shays’ Rebellion, 1786–87',
          lenses: ['economics', 'history'],
          body: [
            'Massachusetts tried to pay its war debts with heavy taxes, payable in gold or silver coin that farmers in the west of the state rarely had. Courts began seizing the farms of those who couldn’t pay.',
            'In 1786 armed farmers, many of them war veterans, shut the courts down. One leader was Daniel Shays, a former captain in the Continental Army. In January 1787 they marched on the national arsenal at Springfield. Militia paid for by Boston merchants fired cannon; four rebels died, and the rising collapsed.',
          ],
        },
        {
          type: 'choice',
          lenses: ['politics', 'economics'],
          prompt: 'Why did Shays’ Rebellion frighten leaders like George Washington so badly?',
          options: [
            'It showed the British were about to return',
            'It showed the national government had no money and no army to keep order',
            'The rebels had seized the capital',
            'It was led by Loyalists',
          ],
          answer: 1,
          explain:
            'Congress couldn’t raise an army because it had no money, and it had no money because it couldn’t tax. Washington, back on his farm, wrote to friends that he was deeply alarmed. Within weeks of the rising’s collapse, Congress backed a convention in Philadelphia to fix the Articles.',
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When did the British army surrender at Yorktown?',
          event: 'Surrender at Yorktown',
          year: 1781,
          min: 1740,
          max: 1800,
          tolerance: 2,
          anchors: [
            { year: 1763, label: 'Seven Years’ War ends' },
            { year: 1776, label: 'US independence' },
            { year: 1789, label: 'French Revolution' },
          ],
          explain:
            '1781 — five years after the Declaration and six after Lexington. The peace treaty followed in 1783, twenty years after the other Treaty of Paris that started the whole quarrel.',
        },
        {
          type: 'recap',
          prompt:
            'How did a broke, loosely united set of states beat the world’s strongest empire — and what did victory cost them?',
          keyPoints: [
            'With no power to tax, Congress printed money — causing runaway inflation',
            'Washington kept the army together through hard winters like Valley Forge (1777–78)',
            'Victory at Saratoga (1777) brought France into the war in 1778',
            'A French fleet and army helped trap the British at Yorktown (1781); peace came in 1783',
            'The Articles of Confederation left the nation too weak to pay its debts — exposed by Shays’ Rebellion (1786–87)',
          ],
          model:
            'The states couldn’t tax, so Congress printed money, which lost almost all its value; Washington’s army survived hungry winters like Valley Forge largely by refusing to give up. The victory at Saratoga in 1777 brought France into the war, and a French fleet and army made the decisive win at Yorktown in 1781 possible. Independence came in 1783, but the weak Articles of Confederation left the new nation unable to pay its debts — as Shays’ Rebellion showed.',
        },
      ],
      cards: [
        {
          id: 'amf-concept-inflation',
          kind: 'concept',
          front: 'Why did the Continental dollar lose almost all its value?',
          back: 'Congress printed far more money than there were goods to buy, so prices soared (inflation) — and British forgeries made it worse.',
        },
        {
          id: 'amf-cause-saratoga',
          kind: 'cause',
          front: 'Which 1777 American victory persuaded France to join the war?',
          back: 'Saratoga, where a whole British army surrendered',
          choices: ['Lexington', 'Bunker Hill', 'Yorktown'],
        },
        {
          id: 'amf-place-chesapeake',
          kind: 'place',
          front: 'Which bay did a French fleet seal off, trapping the British army at Yorktown?',
          back: 'Chesapeake Bay, Virginia',
          choices: ['Massachusetts Bay', 'Delaware Bay', 'Hudson Bay'],
        },
        {
          id: 'amf-date-yorktown',
          kind: 'date',
          year: 1781,
          front: 'When did the British army surrender at Yorktown, Virginia?',
          back: '19 October 1781',
          choices: ['19 October 1776', '19 October 1789', '19 October 1770'],
          hook: 'Five years after independence: 1776 + 5.',
        },
        {
          id: 'amf-date-paris-1783',
          kind: 'date',
          year: 1783,
          front: 'When did Britain recognise American independence in the Treaty of Paris?',
          back: '1783',
          choices: ['1776', '1781', '1789'],
          hook: 'Twenty years after the other Treaty of Paris (1763) that began all the trouble.',
        },
        {
          id: 'amf-concept-articles',
          kind: 'concept',
          front: 'What was the fatal weakness of the Articles of Confederation?',
          back: 'Congress had no power to tax — it could only ask the states for money',
          choices: [
            'It had no Congress at all',
            'It gave the president too much power',
            'It let Britain veto American laws',
          ],
        },
        {
          id: 'amf-date-shays',
          kind: 'date',
          year: 1786,
          front: 'When did indebted Massachusetts farmers rise up in Shays’ Rebellion?',
          back: '1786–87',
          choices: ['1765–66', '1775–76', '1791–92'],
          hook: 'Just before the Constitutional Convention of 1787.',
        },
      ],
      teaser:
        'The war is won, but the union is falling apart: no money, no army, farmers in revolt. In May 1787, delegates gather in Philadelphia, officially just to patch up the Articles. One quiet Virginian has a far bigger plan. Can you design a government from scratch?',
    },

    // ─────────────────────────────────────────────────────────────── 5
    {
      id: 'summer-in-philadelphia',
      title: 'The Summer in Philadelphia',
      summary:
        'Fifty-five delegates, closed doors and a long hot summer (1787): checks and balances, a clash between big and small states — and a deal over slavery.',
      question: 'How do you build a government strong enough to rule, but not strong enough to become a tyrant?',
      previously:
        'The states won independence with French help (1781–83) but were left broke under the weak Articles of Confederation — and in 1786–87 armed farmers rose in Shays’ Rebellion.',
      steps: [
        {
          type: 'orient',
          title: 'Philadelphia, 1787',
          from: 1787,
          to: 1788,
          places: [
            { name: 'Philadelphia', lon: -75.16, lat: 39.95, label: 'left' },
            { name: 'New York', lon: -74.01, lat: 40.71 },
            { name: 'Springfield', lon: -72.59, lat: 42.1, label: 'left' },
            { name: 'Providence', lon: -71.41, lat: 41.82 },
            { name: 'Mount Vernon', lon: -77.09, lat: 38.71, label: 'left' },
          ],
          placesNote:
            'Delegates came to Philadelphia from twelve states; Washington rode up from his home at Mount Vernon. Rhode Island, with its capital at Providence, sent no one. Springfield was where Shays’ Rebellion had ended months before.',
          mapBounds: MID_ATLANTIC,
          lenses: ['history', 'geography'],
          why: 'In four months a few dozen men wrote the rulebook for a new nation. It is still in force today, more than 230 years later.',
          context: [
            'The first census, in 1790, will count about 3.9 million people in the United States — nearly 700,000 of them enslaved.',
            'Congress under the Articles has no power to tax, no president and no national courts.',
            'Some states tax goods coming from their neighbours, as if they were foreign countries.',
            'Benjamin Franklin, aged 81, will be the oldest delegate; James Madison is 36.',
            'In France, Louis XVI’s ministers have just admitted that the treasury is nearly bankrupt.',
          ],
        },
        {
          type: 'story',
          title: 'Philadelphia, May 1787',
          lenses: ['history', 'politics'],
          body: [
            'James Madison arrived more than a week early. Short, pale and quiet, the 36-year-old Virginian had spent months studying why republics and alliances of states, ancient and modern, had failed.',
            'The convention was due to open on 14 May, but so few delegates had turned up that it couldn’t start until the 25th. Its official job was only to revise the Articles of Confederation.',
            'Madison meant to replace them.',
          ],
        },
        {
          type: 'story',
          title: 'Behind closed doors',
          lenses: ['history', 'politics'],
          body: [
            'The delegates met in the Pennsylvania State House, in the same room where independence had been declared. They chose George Washington to preside, and agreed to keep their debates secret, so men could change their minds without public embarrassment.',
            'Over the summer 55 delegates took part, from twelve states. Rhode Island, fearing a stronger union, sent no one.',
            'Most of what we know comes from Madison, who took notes every day. They were published only in 1840, after his death.',
          ],
        },
        {
          type: 'predict',
          lenses: ['politics'],
          prompt:
            'The first census (1790) counted about 750,000 people in Virginia and under 60,000 in Delaware. Under the Articles, each state had one vote in Congress. What do you think Virginia’s delegates proposed?',
          options: [
            'Keep one vote per state',
            'Seats in Congress according to population',
            'Abolish the states and rule from the capital',
          ],
          answer: 1,
          reveal:
            'Seats by population. Madison’s Virginia Plan, presented on 29 May, called for a strong national government with three branches, and a Congress of two houses, both based on population. The small states were horrified. In June William Paterson offered the New Jersey Plan: one house, one vote per state. Gunning Bedford of Delaware even warned that small states might look abroad for allies.',
        },
        {
          type: 'story',
          title: 'The Great Compromise',
          lenses: ['politics'],
          body: [
            'For weeks the convention deadlocked through a sweltering summer. Then Roger Sherman and Oliver Ellsworth of Connecticut pressed a split: in the House of Representatives, seats would follow population; in the Senate, every state, big or small, would get two members.',
            'On 16 July it passed by five states to four, with one divided. It is still in force: Wyoming and California each have two senators, though California has more than 60 times as many people.',
          ],
        },
        {
          type: 'match',
          lenses: ['politics'],
          prompt: 'Which plan proposed what?',
          categories: ['Virginia Plan', 'New Jersey Plan', 'Great Compromise'],
          items: [
            { text: 'Both houses of Congress based on population', category: 'Virginia Plan' },
            { text: 'A single house, with one vote per state', category: 'New Jersey Plan' },
            { text: 'House by population, two senators per state', category: 'Great Compromise' },
            { text: 'Backed by big states', category: 'Virginia Plan' },
            { text: 'Backed by small states', category: 'New Jersey Plan' },
          ],
          explain:
            'Madison’s plan favoured big states, Paterson’s favoured small ones, and Connecticut’s split the difference: the people are represented in the House, the states in the Senate.',
        },
        {
          type: 'story',
          title: 'Counting people as fractions',
          lenses: ['politics', 'history'],
          body: [
            'A second fight was over slavery. House seats would follow population — but who counted as population?',
            'Southern delegates wanted enslaved people counted in full. That would give slave states more seats, though the enslaved could not vote and would be counted only to add to their owners’ power. Many Northern delegates objected.',
            'The deal: each state’s count would add “three fifths of all other Persons.” That was the Constitution’s way of saying enslaved people, without using the word.',
          ],
        },
        {
          type: 'story',
          title: 'The price of union',
          lenses: ['politics', 'history'],
          body: [
            'The Three-Fifths Compromise gave slave states extra seats in Congress — and, through them, extra votes in choosing presidents — for decades. The Constitution also barred Congress from banning the import of enslaved Africans before 1808, and required escaped slaves to be returned.',
            'Some delegates condemned slavery; nearly half owned enslaved people. South Carolina and Georgia said they would not join a union that threatened it. Most delegates chose union. The question they put off would return 74 years later, as civil war.',
          ],
        },
        {
          type: 'explain',
          term: 'Separation of powers',
          lenses: ['politics', 'philosophy'],
          plain:
            'Splitting government into three branches: a legislature that makes laws (Congress), an executive that carries them out (the president), and a judiciary that judges cases under them (the courts).',
          analogy:
            'Like a football match where one group writes the rules, the teams play, and a referee judges. If one person did all three, you could guess who would win.',
          why: 'The French thinker Montesquieu argued in The Spirit of the Laws (1748) that liberty dies when the same people make, enforce and judge the law. The delegates had read him closely.',
        },
        {
          type: 'explain',
          term: 'Checks and balances',
          lenses: ['politics'],
          plain: 'Giving each branch ways to block or limit the others, so that no single branch can grab all the power.',
          analogy:
            'Like a vault that needs two keys held by two different people: neither can open it alone, so neither can rob it alone.',
          why: 'Madison’s idea was to set ambition against ambition. The president can veto laws; the Senate must approve judges and treaties; Congress can impeach and remove a president or a judge.',
        },
        {
          type: 'choice',
          lenses: ['politics'],
          prompt: 'Congress passes a law. The president thinks it is a bad law. What can happen next?',
          options: [
            'The president can cancel it permanently',
            'The president can veto it — but two-thirds of both houses can override the veto',
            'The Supreme Court must approve it before anyone votes',
            'The states hold a national referendum on it',
          ],
          answer: 1,
          explain:
            'That’s a check: each branch can block another, but none can rule alone. The veto stops a careless Congress; the override stops a stubborn president.',
        },
        {
          type: 'explain',
          term: 'Federalism',
          lenses: ['politics'],
          plain:
            'Dividing power between one national government and the state governments, each elected by the people and each with its own jobs.',
          analogy:
            'Like a school where the head sets whole-school rules — term dates, uniform — while each teacher decides how their own classroom runs.',
          why: 'The Constitution gave the national government a list of powers — taxes, war, treaties, money, trade between states — and left most of the rest to the states. That let thirteen proud states join a stronger union without disappearing.',
        },
        {
          type: 'compare',
          lenses: ['politics'],
          prompt: 'The old rulebook and the new. Fill in the blanks.',
          columns: ['Articles of Confederation (1781)', 'Constitution (1787)'],
          rows: [
            {
              label: 'Power to tax',
              cells: ['None — Congress can only ask the states', 'Congress can levy taxes directly'],
            },
            {
              label: 'Leader',
              cells: ['No president; no executive branch', 'An elected president heads the executive'],
            },
            {
              label: 'Courts',
              cells: ['No national courts', 'A Supreme Court and federal courts'],
            },
            {
              label: 'Votes in Congress',
              cells: ['One vote per state', 'House by population; two senators per state'],
            },
            {
              label: 'Changing the rules',
              cells: ['All 13 states must agree', 'Three-quarters of the states must agree'],
            },
          ],
          blanks: [
            [0, 1, ['Congress taxes only foreign trade', 'Only the states may tax; Congress borrows']],
            [1, 0, ['A king chosen by Congress', 'A governor chosen by the largest state']],
            [3, 1, ['Both houses based on population', 'Senators appointed by the president']],
            [4, 0, ['A simple majority of the states', 'Two-thirds of Congress alone']],
          ],
          explain:
            'The Constitution kept a union of states but gave the national government what the Articles lacked: money (taxes), a leader who could act (the president), and courts to settle disputes. The price of that power was a web of checks, so it couldn’t become the tyranny they had just fought.',
        },
        {
          type: 'story',
          title: 'A rising sun',
          lenses: ['history'],
          body: [
            'On 17 September 1787, thirty-nine delegates signed. Three refused. One of them, George Mason of Virginia, objected that it had no bill of rights: no list of freedoms the government could never take away.',
            'As the last men signed, Benjamin Franklin pointed to a sun carved on the back of Washington’s chair. All summer, he said, he had wondered whether it was rising or setting. Now he knew: it was rising.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When was the Constitution signed?',
          event: 'Constitution signed',
          year: 1787,
          min: 1750,
          max: 1800,
          tolerance: 2,
          anchors: [
            { year: 1765, label: 'Stamp Act' },
            { year: 1776, label: 'US independence' },
          ],
          explain:
            '1787 — eleven years after the Declaration, and in the same room. The men who had broken away from one government were now building another.',
        },
        {
          type: 'recap',
          prompt: 'How do you build a government strong enough to rule, but not strong enough to become a tyrant?',
          keyPoints: [
            'The Articles were too weak: no power to tax, no president, no national courts',
            'The Great Compromise: House seats by population, two senators for every state',
            'Power split three ways (separation of powers), with each branch able to check the others',
            'Power also split between the nation and the states (federalism)',
            'The Three-Fifths Compromise protected slavery to keep the Southern states in the union',
          ],
          model:
            'The Articles had failed because the national government couldn’t tax or act, so the delegates built a stronger one — then split its power so it couldn’t become a tyranny. Power is divided among three branches that check each other, and between the nation and the states. The Great Compromise gave the people seats by population in the House and the states equal votes in the Senate, while the Three-Fifths Compromise protected slavery to keep the South in the union.',
        },
      ],
      cards: [
        {
          id: 'amf-date-convention',
          kind: 'date',
          year: 1787,
          front: 'When did the Constitutional Convention meet in Philadelphia?',
          back: 'May–September 1787',
          choices: ['May–September 1776', 'May–September 1781', 'May–September 1791'],
          hook: 'Eleven years after independence, in the same room.',
        },
        {
          id: 'amf-person-madison',
          kind: 'person',
          front: 'Who drafted the Virginia Plan and kept the main notes of the Constitutional Convention?',
          back: 'James Madison',
          choices: ['Alexander Hamilton', 'Thomas Jefferson', 'Benjamin Franklin'],
        },
        {
          id: 'amf-place-rhode-island',
          kind: 'place',
          front: 'Which state refused to send anyone to the Constitutional Convention?',
          back: 'Rhode Island',
          choices: ['Virginia', 'Delaware', 'Georgia'],
        },
        {
          id: 'amf-concept-great-compromise',
          kind: 'concept',
          front: 'What was the Great (Connecticut) Compromise?',
          back: 'House seats by population; two senators for every state',
          choices: [
            'One vote per state in a single house',
            'Both houses of Congress based on population',
            'Senators chosen by the president',
          ],
        },
        {
          id: 'amf-concept-three-fifths',
          kind: 'concept',
          front: 'What was the Three-Fifths Compromise?',
          back: 'Enslaved people were counted as three-fifths of a person when dividing House seats (and direct taxes) — boosting slave states’ power, though the enslaved could not vote.',
        },
        {
          id: 'amf-concept-checks',
          kind: 'concept',
          front: 'What are checks and balances?',
          back: 'Each branch of government can block or limit the others — for example, the president’s veto, which Congress can override.',
        },
        {
          id: 'amf-person-montesquieu',
          kind: 'person',
          front: 'Which French thinker argued that liberty needs lawmaking, enforcing and judging kept in separate hands?',
          back: 'Montesquieu (The Spirit of the Laws, 1748)',
          choices: ['Voltaire', 'Rousseau', 'John Locke'],
        },
      ],
      teaser:
        'The delegates have signed — but the Constitution is only a proposal until nine of the thirteen states approve it. Powerful voices say it creates a new tyranny with no bill of rights. Will the people accept it?',
    },

    // ─────────────────────────────────────────────────────────────── 6
    {
      id: 'we-the-people',
      title: 'We the People',
      summary:
        'A newspaper war over ratification, Washington sworn in (1789), the Bill of Rights (1791) — and the French war debt that set off the next revolution.',
      question: 'How did the Constitution win over a suspicious people — and what did the American Revolution set off abroad?',
      previously:
        'In the summer of 1787, delegates in Philadelphia designed a stronger government with three branches, checks and balances and a Congress split between people and states — and struck a deal to protect slavery.',
      steps: [
        {
          type: 'story',
          title: 'New York, autumn 1787',
          lenses: ['history', 'politics'],
          body: [
            'Within weeks of the Constitution being published, New York newspapers filled with attacks on it, signed with Roman pen names like Cato and Brutus.',
            'On 27 October 1787 a reply appeared, signed Publius, after a hero of the early Roman republic. It was the first of a series of essays defending the Constitution.',
            'Behind the pen name were three men: Alexander Hamilton, a New York lawyer who had been Washington’s aide in the war; James Madison; and John Jay, who had helped negotiate the peace.',
          ],
        },
        {
          type: 'story',
          title: 'Three famous words',
          lenses: ['politics', 'history'],
          body: [
            'The Constitution opens: “We the People of the United States, in Order to form a more perfect Union…”',
            'An earlier draft had begun by listing the states by name, from New Hampshire to Georgia. The final wording, polished by Gouverneur Morris of Pennsylvania, made a bold claim: this government came not from thirteen states, but from the people themselves.',
            'It was practical, too. No one yet knew which states would ratify.',
          ],
        },
        {
          type: 'explain',
          term: 'Ratification',
          lenses: ['politics'],
          plain:
            'Formally approving a document so that it becomes binding. The Constitution said it would take effect once special conventions in nine of the thirteen states voted yes.',
          analogy:
            'Like a club’s new rulebook that only counts once enough members vote to adopt it — and members who vote no must decide whether to stay.',
          why: 'Voters elected delegates to each state’s ratifying convention. For the first time, a whole nation argued in public over what kind of government it should have.',
        },
        {
          type: 'story',
          title: 'Federalists and Anti-Federalists',
          lenses: ['politics', 'philosophy'],
          body: [
            'Supporters of the Constitution called themselves Federalists. Their opponents, the Anti-Federalists, included Patrick Henry and George Mason of Virginia.',
            'They feared a distant national government that could tax them, keep an army in peacetime and grow into the very tyranny they had just fought. A president, some warned, could become a king.',
            'Above all: where was the bill of rights? Nothing in the Constitution promised free speech, a free press or freedom of religion.',
          ],
        },
        {
          type: 'predict',
          lenses: ['history', 'politics'],
          prompt: 'The Publius essays became known as the Federalist Papers. How many do you think there were?',
          options: ['5', '25', '85', '250'],
          answer: 2,
          reveal:
            'Eighty-five, published between October 1787 and the summer of 1788. Hamilton wrote about 51, Madison about 29 and Jay 5. They were written at top speed for newspapers — yet judges and scholars still read them today to work out what the Constitution means.',
        },
        {
          type: 'story',
          title: 'Federalist No. 10',
          lenses: ['philosophy', 'politics'],
          body: [
            'In the tenth essay, Madison turned an old belief upside down. Thinkers from ancient Greece to Montesquieu had assumed a republic must be small, or it would tear itself apart.',
            'Madison disagreed. Every society splits into factions — groups chasing their own interests at others’ expense. In a small republic, one faction can easily seize control. In a huge one there are so many factions that none can dominate.',
            'Size itself, he argued, protects liberty.',
          ],
        },
        {
          type: 'choice',
          lenses: ['philosophy', 'politics'],
          prompt: 'Why did Madison argue that a large republic would protect liberty better than a small one?',
          options: [
            'A big country can afford a bigger army',
            'So many factions would compete that none could take control',
            'Its leaders would be too far away to interfere in people’s lives',
            'Big states are always richer',
          ],
          answer: 1,
          explain:
            'In a big, varied country, farmers, merchants, debtors, lenders and rival religions all check one another. It’s checks and balances again — this time among the people themselves, not just the branches of government.',
        },
        {
          type: 'story',
          title: 'State by state',
          lenses: ['history', 'politics'],
          body: [
            'Small states ratified fast: Delaware was first, on 7 December 1787, unanimously. The hard fights came in the big states.',
            'Massachusetts said yes by 187 votes to 168 — after Federalists agreed to recommend amendments. On 21 June 1788 New Hampshire became the ninth state, and the Constitution took effect.',
            'But without Virginia and New York the union would be split in pieces. Virginia voted yes by 89 to 79; New York, a month later, by 30 to 27.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['politics'],
          prompt:
            'Massachusetts ratified by 187 votes to 168. What is the smallest number of yes-voters who, by switching to no, would have defeated it?',
          min: 1,
          max: 50,
          step: 1,
          unit: 'delegates',
          answer: 10,
          tolerance: 3,
          explain:
            'Ten. Switch ten votes and it fails, 177 to 178. The fate of the Constitution hung on a few dozen people in a handful of crowded halls.',
        },
        {
          type: 'story',
          title: 'Mr President, 30 April 1789',
          lenses: ['history', 'politics'],
          body: [
            'Every elector voted for George Washington — the only president ever chosen unanimously. On 30 April 1789, on a balcony of Federal Hall in New York, then the capital, he took the oath of office before a cheering crowd.',
            'He knew that almost everything he did would become a precedent — an example later presidents would follow. Even what to call him was debated; he became simply Mr President.',
            'Eight years later he stepped down. Kings don’t. Washington did.',
          ],
        },
        {
          type: 'story',
          title: 'The Bill of Rights',
          lenses: ['politics', 'philosophy'],
          body: [
            'Madison had once doubted that a bill of rights was needed. But he had promised Virginia’s voters one, and he wanted to win over the Anti-Federalists.',
            'In June 1789 he proposed amendments to the new Congress. Congress sent twelve to the states; ten were ratified by December 1791. Together they are the Bill of Rights: freedom of religion, speech, the press and assembly; the right to bear arms; protection from unreasonable searches; and the right to a speedy, public trial by jury.',
          ],
        },
        {
          type: 'match',
          lenses: ['politics'],
          prompt: 'Federalist or Anti-Federalist?',
          categories: ['Federalists', 'Anti-Federalists'],
          items: [
            { text: 'Wrote essays under the name Publius', category: 'Federalists' },
            { text: 'Feared the president could become a king', category: 'Anti-Federalists' },
            { text: 'Argued that a large republic protects liberty', category: 'Federalists' },
            { text: 'Demanded a bill of rights', category: 'Anti-Federalists' },
            { text: 'Alexander Hamilton', category: 'Federalists' },
            { text: 'Patrick Henry', category: 'Anti-Federalists' },
          ],
          explain:
            'The Federalists won the vote, but the Anti-Federalists won something too: the Bill of Rights exists because they demanded it.',
        },
        {
          type: 'story',
          title: 'Meanwhile, in Paris',
          lenses: ['economics', 'history'],
          body: [
            'America’s victory had been paid for partly in Paris. France spent around a billion livres on the war, nearly all of it borrowed. By 1788, interest on the royal debt ate about half of everything the government spent.',
            'To raise new taxes, Louis XVI had to summon the Estates-General, France’s old assembly of clergy, nobles and commoners, which had not met since 1614. It opened on 5 May 1789 — five days after Washington took his oath.',
          ],
        },
        {
          type: 'timeline',
          lenses: ['history'],
          prompt: 'When was George Washington sworn in as the first president?',
          event: 'Washington inaugurated',
          year: 1789,
          min: 1750,
          max: 1800,
          tolerance: 2,
          anchors: [
            { year: 1765, label: 'Stamp Act' },
            { year: 1776, label: 'US independence' },
          ],
          explain:
            '1789 — thirteen years after independence, and the same year France’s revolution began. The Marquis de Lafayette, who had fought beside Washington at Yorktown, soon helped draft France’s own declaration of rights — with advice from Jefferson, then the American minister in Paris.',
        },
        {
          type: 'order',
          lenses: ['history'],
          prompt: 'Final review: put the whole story in order.',
          items: [
            'Parliament passes the Stamp Act',
            'The Boston Massacre',
            'The Boston Tea Party',
            'First shots at Lexington and Concord',
            'The Declaration of Independence',
            'The British surrender at Yorktown',
            'Shays’ Rebellion',
            'The Constitution is signed in Philadelphia',
            'Washington is sworn in as president',
            'The Bill of Rights is ratified',
          ],
          explain:
            '1765, 1770, 1773, 1775, 1776, 1781, 1786–87, 1787, 1789, 1791. One story — and along the way: debt and taxes, natural rights, inflation, naval geography, separation of powers, and a promise of equality the nation took generations to begin keeping.',
        },
        {
          type: 'recap',
          prompt: 'In a few sentences: how did thirteen colonies become the United States — and what did their revolution set off?',
          keyPoints: [
            'Britain’s war debt led to taxes the colonists rejected: no taxation without representation (1765–75)',
            'War began in 1775; the Declaration (1776) justified independence with natural rights — while slavery continued',
            'Printed money, a French alliance and Yorktown (1781) won the war, but the Articles left the nation weak',
            'The Constitution (1787) built a stronger government with checks and balances; it took effect in 1788, and the Bill of Rights followed in 1791',
            'France’s debts from the American war helped bring on the French Revolution (1789)',
          ],
          model:
            'Britain’s debts from the Seven Years’ War led Parliament to tax colonists who insisted only their own representatives could tax them, and resistance turned to war in 1775. In 1776 the Declaration justified independence with natural rights while leaving slavery in place; printed money, French help and victory at Yorktown won the war, but the weak Articles couldn’t pay the bills. So in 1787 the Constitution created a stronger government with checks and balances, ratified in 1788 and joined by the Bill of Rights in 1791 — while France, bankrupted partly by helping America, stumbled into its own revolution in 1789.',
        },
      ],
      cards: [
        {
          id: 'amf-num-federalist',
          kind: 'number',
          front: 'How many Federalist essays did Hamilton, Madison and Jay write?',
          back: '85',
          choices: ['12', '40', '200'],
        },
        {
          id: 'amf-person-hamilton',
          kind: 'person',
          front: 'Who wrote most of the Federalist essays, under the pen name Publius?',
          back: 'Alexander Hamilton (about 51 of the 85), with Madison and Jay',
          choices: ['Thomas Jefferson', 'Patrick Henry', 'George Washington'],
        },
        {
          id: 'amf-concept-anti-federalists',
          kind: 'concept',
          front: 'What was the Anti-Federalists’ biggest complaint about the Constitution?',
          back: 'It created a powerful, distant government with no bill of rights to protect individual freedoms',
          choices: [
            'It kept the king as head of state',
            'It gave the states too much power',
            'It abolished slavery too quickly',
          ],
        },
        {
          id: 'amf-date-ratified',
          kind: 'date',
          year: 1788,
          front: 'When did the Constitution take effect, once a ninth state had ratified it?',
          back: 'June 1788 (New Hampshire was the ninth)',
          choices: ['June 1776', 'June 1783', 'June 1791'],
          hook: 'Signed in 1787, approved by nine states the following summer.',
        },
        {
          id: 'amf-date-washington',
          kind: 'date',
          year: 1789,
          front: 'When was George Washington sworn in as the first president?',
          back: '30 April 1789, in New York City',
          choices: ['30 April 1776', '30 April 1783', '30 April 1799'],
          hook: 'The same week France’s Estates-General met (5 May 1789).',
        },
        {
          id: 'amf-date-bill-rights',
          kind: 'date',
          year: 1791,
          front: 'When was the Bill of Rights ratified?',
          back: 'December 1791',
          choices: ['1776', '1787', '1800'],
          hook: 'Four years after the Constitution was signed: 1787 + 4.',
        },
        {
          id: 'amf-cause-france',
          kind: 'cause',
          front: 'How did the American war help cause the French Revolution?',
          back: 'France borrowed heavily to fight it; the debts helped bankrupt the crown, forcing Louis XVI to call the Estates-General (1789).',
        },
      ],
    },
  ],
}
