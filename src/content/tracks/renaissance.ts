import type { Track } from '../types'

// Sources for figures used here: Origo, The Merchant of Prato (1957) (Datini); Villani, Nuova Cronica
// XII.94 (Florentine wool industry, c. 1338); de Roover, The Rise and Decline of the Medici Bank (1963);
// Goldthwaite, The Economy of Renaissance Florence (2009); Hunt, The Medieval Super-Companies (1994)
// (Bardi and Peruzzi); Herlihy & Klapisch-Zuber (1427 catasto, Florentine population); Malanima
// (Italian wages and income per head after 1348); Meiss, Painting in Florence and Siena after the
// Black Death (1951); Cohn, The Cult of Remembrance and the Black Death (1992); Pacioli, Summa de
// arithmetica (Venice, 1494); Britannica. Contested figures are given as ranges.

const RENAISSANCE_EUROPE = { west: -6, south: 36, east: 32, north: 55 }

export const renaissance: Track = {
  id: 'renaissance',
  series: 'plague',
  tier: 2,
  title: 'Florence After the Plague: The Renaissance',
  tagline:
    'The plague halved Florence. Within a century its bankers, builders, painters and thinkers were changing how Europe counted, built, saw and ruled.',
  lenses: ['history', 'science', 'economics', 'philosophy'],
  era: [1400, 1513],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'wool-gold-ledgers',
      title: 'Wool, Gold and Ledgers',
      summary: 'A plague orphan, English wool, the gold florin and the Medici bank: where Florence’s money came from.',
      question: 'Where did Florence’s wealth come from — and did the plague help make the Renaissance?',
      previously:
        'Between 1347 and 1351 the Black Death killed a third to a half of Europe — and more than half of Florence. Afterwards, workers were scarce and wages rose.',
      steps: [
        {
          type: 'orient',
          title: 'Florence After the Plague',
          from: 1400,
          to: 1513,
          places: [
            { name: 'Florence', lon: 11.26, lat: 43.77, label: 'left' },
            { name: 'Venice', lon: 12.33, lat: 45.44 },
            { name: 'Rome', lon: 12.5, lat: 41.9 },
            { name: 'Bruges', lon: 3.22, lat: 51.21 },
            { name: 'London', lon: -0.13, lat: 51.5 },
            { name: 'Constantinople', lon: 28.98, lat: 41.01, label: 'left' },
          ],
          placesNote:
            'Wool came from England, money flowed through Bruges and Rome, and Greek scholars would come from Constantinople — all of it to Florence.',
          mapBounds: RENAISSANCE_EUROPE,
          lenses: ['history', 'geography'],
          why: 'A city that had lost half its people to the Black Death became the workshop of a new age — new ways of banking, building, painting, thinking and ruling that still shape the modern world.',
          context: [
            'Italy is not a country but a patchwork of rival states: Florence, Venice and Milan, the pope’s lands around Rome, and the Kingdom of Naples.',
            'Florence is still far smaller than before 1348, and the plague keeps coming back every decade or two.',
            'The Church has two rival popes (from 1409, three) — a split called the Great Schism (1378–1417).',
            'The Byzantine Empire has shrunk to little more than the city of Constantinople, hemmed in by the Ottoman Turks.',
            'Every book in Europe is copied by hand. Printing with movable type is still about 50 years away.',
            'In China, the Ming emperor is about to send Zheng He’s giant fleets across the Indian Ocean (from 1405).',
          ],
        },
        {
          type: 'story',
          title: 'The orphan of Prato',
          lenses: ['history', 'economics'],
          body: [
            'In 1348 the plague reached Prato, a wool town 17 km from Florence. It killed both parents of a boy named Francesco Datini, and two of his brothers and sisters. He was about 13.',
            'At 15 he left for Avignon, then the pope’s city, with a small inheritance. Over 30 years he traded armour, cloth and luxuries there and grew rich.',
            'When he died in 1410 he left some 150,000 letters and hundreds of account books — a window into how Italians did business after the plague.',
          ],
        },
        {
          type: 'explain',
          term: 'The Renaissance',
          lenses: ['history', 'philosophy'],
          plain:
            'French for “rebirth.” It names the period, roughly 1400–1600, when Italians set out to revive the art and learning of ancient Greece and Rome — and ended up creating something new. Historians of the 1800s made the word popular.',
          analogy:
            'Like a band that tries to copy its favourite old records — and, in copying, invents a sound of its own.',
          why: 'It began in Florence, a city that had just lost half its people. Historians still argue about whether that was a coincidence.',
        },
        {
          type: 'predict',
          lenses: ['economics', 'history'],
          prompt:
            'Florence lost more than half its people in 1348, and the plague kept returning. On average, were the survivors richer or poorer than people had been before?',
          options: ['Poorer', 'About the same', 'Richer'],
          answer: 2,
          reveal:
            'Richer, on average. The same land, houses, tools and gold were now shared among far fewer people. Workers could demand higher pay, and heirs often inherited from several dead relatives at once. Income per person in Italy rose after 1348 and stayed higher for generations.',
        },
        {
          type: 'story',
          title: 'A city of wool',
          lenses: ['economics', 'geography'],
          body: [
            'Florence’s fortune was cloth. Around 1338 the chronicler Giovanni Villani counted more than 200 wool workshops, making 70,000–80,000 pieces of cloth a year. Some 30,000 people lived from the trade — roughly a quarter of the city.',
            'The finest raw wool came from English sheep. It crossed the sea and the Alps, then passed through many hands: washed, combed, spun, woven, shrunk, dyed and finished.',
            'Florentine merchants sold the finished cloth from London to Constantinople.',
          ],
        },
        {
          type: 'explain',
          term: 'Guild',
          lenses: ['economics', 'politics'],
          plain:
            'An association of people in the same trade. It set rules on quality, prices and training. In Florence, only guild members could hold government office.',
          analogy: 'Like a trade union and a business club rolled into one — with seats on the city council.',
          why: 'The wool guild, the Arte della Lana, was one of the richest in Florence. It even ran the building of the city’s cathedral. Remember that.',
        },
        {
          type: 'story',
          title: 'Gold you could trust',
          lenses: ['economics', 'history'],
          body: [
            'In 1252 Florence began minting the florin, a coin of about 3.5 grams of nearly pure gold. Its weight stayed steady for generations, so merchants across Europe trusted it — much as people trust the US dollar today.',
            'Cloth profits turned Florentine merchants into bankers who lent to popes and kings. That was risky. In the 1340s the city’s two biggest banks, the Bardi and the Peruzzi, went bankrupt — partly because King Edward III of England failed to repay his war loans.',
          ],
        },
        {
          type: 'explain',
          term: 'Bill of exchange',
          lenses: ['economics', 'religion'],
          plain:
            'A written promise: hand over money in one city and currency, and receive it later in another city and another currency. The Church banned usury — charging interest on a loan — but profit made through exchange rates was widely accepted.',
          analogy:
            'Like buying a voucher in Florence that you cash in Bruges three months later. The bank sets the exchange rate, so it quietly earns a little on every trip.',
          why: 'Merchants no longer had to carry chests of gold along bandit-filled roads — and bankers could earn from lending without openly charging interest.',
        },
        {
          type: 'story',
          title: 'The pope’s bankers',
          lenses: ['economics', 'politics', 'religion'],
          body: [
            'In 1397 Giovanni di Bicci de’ Medici set up his bank’s headquarters in Florence. His great prize was the papacy: the Medici handled the Church’s money, and the Rome branch earned much of the profit.',
            'Branches followed in Venice, Geneva, Bruges and London. Each was run by a junior partner who shared its profits, so distant managers had a reason to work hard.',
            'His son Cosimo turned money into power. From 1434 he ran Florence for 30 years without ever wearing a crown.',
          ],
        },
        {
          type: 'explain',
          term: 'Double-entry bookkeeping',
          lenses: ['economics', 'science'],
          plain:
            'Every transaction is written down twice: once where the value came from, and once where it went. The two sides of the account book must always add up to the same total.',
          analogy:
            'Like a see-saw: whatever goes down on one side goes up on the other. If the book doesn’t balance, a mistake is hiding somewhere.',
          why: 'With branches from London to Rome, the Medici had to trust managers they rarely saw. A book that didn’t balance flagged an error — or a theft — to check.',
        },
        {
          type: 'choice',
          lenses: ['economics', 'science'],
          prompt: 'The Medici bank lends a wool merchant 100 florins in cash. Using double entry, what should the clerk write?',
          options: [
            'Cash down 100 — and “owed to us by the merchant” up 100',
            'Cash down 100, and nothing else',
            '“Owed to us by the merchant” up 100, and nothing else',
            'Cash up 100 — and “owed to us by the merchant” up 100',
          ],
          answer: 0,
          explain:
            'The florins didn’t vanish — they turned into a debt the merchant owes. Both sides move by 100, so the books still balance. Italian merchants used this system by about 1300; in 1494 the friar Luca Pacioli first printed it, in Venice. Businesses around the world still use it.',
        },
        {
          type: 'timeline',
          lenses: ['history', 'economics'],
          prompt: 'When did Giovanni de’ Medici set up his bank in Florence?',
          event: 'Medici bank founded in Florence',
          year: 1397,
          min: 1200,
          max: 1550,
          tolerance: 10,
          anchors: [
            { year: 1215, label: 'Magna Carta' },
            { year: 1347, label: 'Black Death' },
            { year: 1492, label: 'Columbus' },
          ],
          explain:
            '1397 — fifty years after the Black Death reached Sicily, and 95 years before Columbus sailed. The Medici would dominate Florence, on and off, for more than 300 years.',
        },
        {
          type: 'compare',
          lenses: ['economics', 'history'],
          prompt: 'Florence before and after the plague. Fill in the blanks.',
          columns: ['Florence c. 1340', 'Florence c. 1430'],
          rows: [
            { label: 'People', cells: ['About 110,000', 'About 40,000'] },
            { label: 'Biggest bankers', cells: ['Bardi and Peruzzi (soon bankrupt)', 'The Medici'] },
            {
              label: 'What a worker’s day’s pay could buy',
              cells: ['Little — workers were plentiful', 'More — workers were scarce'],
            },
            { label: 'The cathedral', cells: ['Half-built, no dome', 'Giant dome rising (finished 1436)'] },
          ],
          blanks: [
            [0, 1],
            [1, 0],
            [2, 1],
            [3, 1],
          ],
          explain:
            'Well under half the people — yet more money per head, a new banking family, and the largest brick dome ever built going up. That combination is the puzzle this track explores.',
        },
        {
          type: 'story',
          title: 'Did the plague cause the Renaissance?',
          lenses: ['history', 'philosophy'],
          body: [
            'Some historians say it helped: survivors inherited and earned more — and, having watched whole families vanish, spent on chapels and paintings that would keep their names alive.',
            'Others disagree. Giotto was painting lifelike figures, and Petrarch hunting for lost Roman books, before 1348. In 1951 the art historian Millard Meiss argued that the plague made Florentine painting gloomier and more old-fashioned for a generation.',
            'Most now see the plague as one ingredient, not the cause.',
          ],
        },
        {
          type: 'choice',
          lenses: ['history', 'philosophy'],
          prompt: 'The plague struck almost all of Europe, but the Renaissance began in Italian cities. What does that tell us?',
          options: [
            'The plague must have been milder in Italy',
            'The plague can’t be the whole explanation — other ingredients mattered',
            'The Renaissance had nothing to do with money',
            'Italians were immune to plague',
          ],
          answer: 1,
          explain:
            'If a cause is everywhere but the effect appears in one place, look for what else was different. Italy had rich trading cities, Roman ruins all around, and rival city-states competing to show off. Asking “why here and not there?” is one of the historian’s sharpest tools.',
        },
        {
          type: 'recap',
          prompt: 'Where did Florence’s wealth come from — and did the plague help make the Renaissance?',
          keyPoints: [
            'Florence lost more than half its people in 1348, but survivors were richer per head',
            'Its wealth came from turning English wool into fine cloth, then from banking',
            'Bills of exchange and double-entry bookkeeping let the Medici run a Europe-wide bank',
            'The plague was one ingredient of the Renaissance, not the whole cause — historians still debate it',
          ],
          model:
            'Florence got rich by turning imported English wool into fine cloth, then by banking, with the trusted gold florin, bills of exchange and double-entry books; the Medici became bankers to the pope and then rulers of the city. The plague left fewer, richer survivors, which helped pay for art and building. But the Renaissance’s seeds were planted before 1348, so the plague was one ingredient, not the cause.',
        },
      ],
      cards: [
        {
          id: 'ren-date-medici-bank',
          kind: 'date',
          year: 1397,
          front: 'When did Giovanni de’ Medici set up his bank in Florence?',
          back: '1397',
          choices: ['1252', '1347', '1453'],
          hook: 'Fifty years after the Black Death reached Europe (1347).',
        },
        {
          id: 'ren-person-datini',
          kind: 'person',
          front: 'Who was Francesco Datini?',
          back: 'A merchant of Prato, orphaned by the 1348 plague, who grew rich and left some 150,000 business letters',
          choices: [
            'The founder of the Medici bank',
            'The friar who first printed double-entry bookkeeping',
            'The chronicler who counted Florence’s wool workshops',
          ],
        },
        {
          id: 'ren-num-wool-workers',
          kind: 'number',
          front: 'Around 1338, roughly how many Florentines lived from the wool trade?',
          back: 'About 30,000 — roughly a quarter of the city',
          choices: ['About 300', 'About 3,000', 'About 300,000'],
          hook: 'One in four people in the city: wool was Florence’s engine.',
        },
        {
          id: 'ren-concept-bill-exchange',
          kind: 'concept',
          front: 'What was a bill of exchange?',
          back: 'A written promise to pay money in another city and currency later — letting bankers move money and profit without openly charging interest',
          choices: [
            'A tax on imported wool',
            'A gold coin minted in Florence',
            'A guild licence to trade abroad',
          ],
        },
        {
          id: 'ren-concept-double-entry',
          kind: 'concept',
          front: 'What is double-entry bookkeeping, and why did it help the Medici?',
          back: 'Every transaction is recorded twice — where value came from and where it went — so the books must balance. An unbalanced book exposed errors or theft in distant branches.',
        },
        {
          id: 'ren-date-pacioli',
          kind: 'date',
          year: 1494,
          front: 'Who first printed the method of double-entry bookkeeping, and when?',
          back: 'Luca Pacioli, in Venice, 1494',
          choices: ['Cosimo de’ Medici, Florence, 1434', 'Giovanni Villani, Florence, 1338', 'Francesco Datini, Prato, 1410'],
          hook: 'Two years after Columbus (1492).',
        },
        {
          id: 'ren-cause-plague-debate',
          kind: 'cause',
          front: 'Why can’t the plague alone explain the Renaissance?',
          back: 'The plague hit almost all of Europe, but the Renaissance began in Italian cities — and its seeds (Giotto, Petrarch) were planted before 1348.',
        },
      ],
      teaser:
        'Florence’s cathedral had a hole in its roof more than 40 metres wide, and no one on earth knew how to cover it. In 1418 a goldsmith named Filippo Brunelleschi said he could — without a wooden frame to hold it up.',
    },
  ],
  upcoming: [
    {
      title: 'The Impossible Dome',
      summary:
        'Brunelleschi’s bet: a double shell, herringbone brickwork and a dome built without full scaffolding from the ground. Finished in 1436, it is still the largest brick dome ever built.',
    },
    {
      title: 'A Window in the Wall',
      summary:
        'Brunelleschi’s mirror experiment, Masaccio’s painted chapel and Alberti’s 1435 book On Painting: how geometry taught artists to make a flat wall look deep.',
    },
    {
      title: 'Greek Comes West',
      summary:
        'Humanists hunt lost ancient books, Cosimo pays to translate Plato, and after Constantinople falls in 1453 Greek scholars and their manuscripts reach Italy.',
    },
    {
      title: 'Blood in the Cathedral',
      summary:
        'Sunday, 26 April 1478: the Pazzi family and their allies attack the Medici brothers during Mass in the cathedral. Giuliano dies, Lorenzo escapes — and Florence goes to war with the pope.',
    },
    {
      title: 'The Prince',
      summary:
        'French armies invade, a preacher burns luxuries, and the Medici fall and return. In 1513 an out-of-work diplomat, Niccolò Machiavelli, writes a short book on how power really works.',
    },
  ],
}
