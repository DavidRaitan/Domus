import type { Track } from '../types'

// Sources for figures used here: Semmelweis, The Etiology, Concept and Prophylaxis of Childbed Fever
// (1861; trans. Carter, 1983) (clinic mortality tables, 1841–48); Carter & Carter, Childbed Fever:
// A Scientific Biography of Ignaz Semmelweis (1994); Loudon, The Tragedy of Childbed Fever (2000);
// Nuland, The Doctors' Plague (2003); Office for National Statistics (English life expectancy, 1840s);
// Snow, On the Mode of Communication of Cholera (2nd ed., 1855); Britannica (ether, 1846; Fracastoro;
// Leeuwenhoek; Lister; Koch; Fleming). Contested details (the circumstances of Semmelweis's death)
// are marked as disputed.

const GERM_EUROPE = { west: -8, south: 43, east: 20, north: 58 }

export const germTheory: Track = {
  id: 'germ-theory',
  series: 'plague',
  tier: 3,
  title: 'From Miasma to Antibiotics',
  tagline:
    'For two thousand years doctors blamed bad air. Then Semmelweis, Snow, Pasteur, Koch, Lister and Fleming found what really makes us sick — and how to kill it.',
  lenses: ['medicine', 'science', 'history', 'philosophy'],
  era: [1847, 1928],
  lessons: [
    // ─────────────────────────────────────────────────────────────── 1
    {
      id: 'wash-your-hands',
      title: 'Wash Your Hands',
      summary: 'Vienna, 1847: two maternity clinics, one deadly — and the doctor who found out why.',
      question:
        'Why were new mothers dying in Vienna’s great hospital — and why was the man who found the answer ignored?',
      previously:
        'In 1348 doctors blamed the Black Death on bad air and the stars. Renaissance scholars revived ancient Greek medicine, and in the 1670s microscopes revealed tiny living things — yet in 1847 most doctors still blamed miasma.',
      steps: [
        {
          type: 'orient',
          title: 'From Miasma to Antibiotics',
          from: 1847,
          to: 1928,
          places: [
            { name: 'Vienna', lon: 16.37, lat: 48.21, label: 'left' },
            { name: 'Berlin', lon: 13.4, lat: 52.52, label: 'left' },
            { name: 'Paris', lon: 2.35, lat: 48.86 },
            { name: 'London', lon: -0.13, lat: 51.51 },
            { name: 'Glasgow', lon: -4.25, lat: 55.86 },
          ],
          placesNote:
            'Five cities, five breakthroughs — from a maternity ward in Vienna to a London laboratory.',
          mapBounds: GERM_EUROPE,
          lenses: ['history', 'geography'],
          why: 'In about 80 years, doctors went from blaming bad air to curing infections with a mould — discoveries behind much of the huge rise in how long people live.',
          context: [
            'Most doctors still blame disease on miasma — bad air from filth and rot — much as they did during the Black Death, 500 years earlier.',
            'London has over 2 million people, the biggest city on earth. Its sewage flows into the River Thames — which also supplies drinking water.',
            'Cholera, a new killer from India, reached Europe around 1830. It keeps coming back.',
            'Surgery has just become painless: ether was first shown in public in Boston in October 1846. But many patients who survive the knife still die of infected wounds.',
            'In England, a newborn can expect to live about 40 years — mostly because so many children die young.',
            'Microscopes have shown tiny living things since the 1670s, but few doctors think they cause disease.',
          ],
        },
        {
          type: 'story',
          title: 'Two doors in Vienna',
          lenses: ['history', 'medicine'],
          body: [
            'In 1846 the Vienna General Hospital had one of the largest maternity wards in the world, split into two clinics. Women in labour were admitted on alternate days: one day to the First Clinic, the next to the Second.',
            'The women knew something the doctors didn’t want to hear: the First Clinic was deadly. Some begged on their knees to be sent to the Second.',
            'The First Clinic’s new assistant, a 28-year-old Hungarian named Ignaz Semmelweis, set out to find out why.',
          ],
        },
        {
          type: 'explain',
          term: 'Childbed fever',
          lenses: ['medicine'],
          plain:
            'A fever that strikes a mother in the days after giving birth, caused by an infection inside the womb. Doctors called it puerperal fever. Before modern medicine it often killed.',
          analogy:
            'After a birth, the spot where the placenta was attached is like a large fresh wound inside the body — an open door for anything harmful.',
          why: 'In the 1800s it was one of the biggest killers of young mothers in hospitals, and nobody knew what caused it.',
        },
        {
          type: 'predict',
          lenses: ['medicine'],
          prompt:
            'The First Clinic was run by doctors and medical students; the Second by midwives. In 1846, which clinic lost more mothers to childbed fever?',
          options: ['The First (doctors)', 'The Second (midwives)', 'About the same'],
          answer: 0,
          reveal:
            'The doctors’ clinic, by far: about 11 of every 100 mothers died there in 1846, against about 3 in 100 with the midwives. Picture two wards of 100 women each — one with 11 empty beds, the other with 3.',
        },
        {
          type: 'story',
          title: 'One suspect at a time',
          lenses: ['medicine', 'science'],
          body: [
            'Semmelweis tested the usual explanations. Overcrowding? The Second Clinic was more crowded. Bad air? Both clinics were in the same hospital, breathing the same Viennese air.',
            'A priest walked through the First Clinic ringing a bell on his way to the dying. Perhaps fear was killing the mothers? Semmelweis had him take another route. The midwives delivered babies with the mother lying on her side, so he tried that too.',
            'Nothing changed.',
          ],
        },
        {
          type: 'story',
          title: 'A cut finger',
          lenses: ['medicine', 'history'],
          body: [
            'In March 1847 Semmelweis returned from a short trip to Venice to terrible news. His friend Jakob Kolletschka, a professor of forensic medicine, had been nicked by a student’s knife during an autopsy — cutting open a dead body to learn what killed it. Within days he was dead.',
            'His body showed the same damage Semmelweis saw in mothers who died of childbed fever.',
            'And the First Clinic’s doctors and students began their mornings in the autopsy room.',
          ],
        },
        {
          type: 'compare',
          lenses: ['medicine', 'science'],
          prompt: 'Semmelweis’s clues, side by side. Fill in the blanks.',
          columns: ['First Clinic', 'Second Clinic', 'Born in the street'],
          rows: [
            {
              label: 'Delivered by',
              cells: ['Doctors and medical students', 'Midwives', 'No one from the hospital'],
            },
            {
              label: 'Hands fresh from autopsies?',
              cells: ['Yes, often', 'No', 'No'],
            },
            {
              label: 'Deaths from the fever',
              cells: ['About 10 in 100 (1841–46)', 'About 4 in 100 (1841–46)', 'Rare'],
            },
          ],
          blanks: [
            [1, 0],
            [1, 1],
            [2, 0],
            [2, 2],
          ],
          explain:
            'Women who gave birth on the way to hospital rarely caught the fever — a test nobody had planned. Only one thing lined up with the deaths: hands that came from corpses.',
        },
        {
          type: 'story',
          title: 'The basin by the door',
          lenses: ['medicine', 'science'],
          body: [
            'Semmelweis guessed that invisible particles from corpses were riding on the doctors’ hands into the mothers.',
            'In May 1847 he put a basin of chlorinated lime — a bleaching powder dissolved in water — at the clinic entrance. Anyone coming from the autopsy room had to scrub their hands in it before touching a patient.',
            'Why chlorine? Soap left the smell of corpses on the hands. Chlorine got rid of it.',
          ],
        },
        {
          type: 'estimate',
          lenses: ['medicine', 'science'],
          prompt:
            'In 1848, after a full year of handwashing, what share of mothers in the First Clinic died? (Before, it was about 10%.)',
          min: 0,
          max: 20,
          step: 1,
          unit: '%',
          answer: 1,
          tolerance: 1,
          explain:
            'About 1.3% — 45 deaths in about 3,500 births. At the old rate of about 10%, more than 300 of those mothers would have died. A basin of bleach water saved roughly 300 lives in a single year.',
        },
        {
          type: 'explain',
          term: 'Germ',
          lenses: ['medicine', 'science'],
          plain:
            'A living thing too small to see without a microscope — such as a bacterium or a virus — that can get into the body and make it sick.',
          analogy: 'Like an invisible burglar: you only know it was there from the damage it leaves.',
          why: 'Semmelweis never knew what his particles were. We now know: bacteria — mostly one called Streptococcus — carried on unwashed hands from dead bodies and from other sick patients.',
        },
        {
          type: 'explain',
          term: 'Antiseptic',
          lenses: ['medicine', 'science'],
          plain: 'A substance that kills germs on skin, surfaces or wounds — outside the body, not inside it.',
          analogy: 'Like the bleach used to wipe down a kitchen counter.',
          why: 'Semmelweis’s chlorine wash was an antiseptic, used 20 years before surgeons took up the idea — and before anyone knew what it was killing.',
        },
        {
          type: 'story',
          title: 'Nobody wanted to hear it',
          lenses: ['medicine', 'philosophy'],
          body: [
            'The numbers were striking, yet many senior doctors rejected them. The idea meant that doctors — educated gentlemen — had been carrying death to their own patients.',
            'Semmelweis couldn’t say what the particles were or how they killed. His idea didn’t fit the leading theories of bad air and unbalanced bodies. And for years he barely published.',
            'His boss, Professor Johann Klein, opposed him. In 1849 his post was not renewed, and in 1850 he left Vienna for Pest, in Hungary.',
          ],
        },
        {
          type: 'choice',
          lenses: ['philosophy', 'medicine'],
          prompt: 'Why did so many doctors reject Semmelweis’s handwashing?',
          options: [
            'His numbers showed no real difference',
            'It blamed doctors’ own hands — and he couldn’t explain how the particles killed',
            'Chlorine was too expensive for the hospital',
            'The midwives had already proved it wrong',
          ],
          answer: 1,
          explain:
            'Evidence alone rarely wins. An idea that insults the people who must accept it, and that has no mechanism — no “how” — faces a steep climb. Pasteur and Koch would later supply the how.',
        },
        {
          type: 'timeline',
          lenses: ['history', 'medicine'],
          prompt: 'When did Semmelweis make doctors wash their hands?',
          event: 'Handwashing begins in Vienna',
          year: 1847,
          min: 1300,
          max: 2000,
          tolerance: 15,
          anchors: [
            { year: 1347, label: 'Black Death' },
            { year: 1776, label: 'US independence' },
            { year: 1914, label: 'World War I' },
          ],
          explain:
            '1847 — exactly 500 years after the Black Death reached Europe, and 67 years before World War I. In those five centuries, the leading theory of infection, bad air, had barely changed.',
        },
        {
          type: 'story',
          title: 'A bitter end',
          lenses: ['history', 'medicine'],
          body: [
            'In Pest, Semmelweis cut deaths from childbed fever at the St Rochus Hospital too. In 1861 he finally published his book — then wrote furious open letters calling his critics murderers.',
            'In 1865, aged 47, he was taken to an asylum near Vienna. He died two weeks later, probably of an infected wound; some accounts say guards beat him. The details are disputed.',
            'Within about 20 years, germ theory had proved him right.',
          ],
        },
        {
          type: 'recap',
          prompt:
            'Why were new mothers dying in Vienna’s great hospital — and why was the man who found the answer ignored?',
          keyPoints: [
            'The doctors’ clinic lost about 10 in 100 mothers; the midwives’ clinic about 4',
            'Doctors went straight from autopsies to deliveries, carrying something deadly on their hands',
            'Washing in chlorinated lime from May 1847 cut deaths to about 1–2 in 100',
            'He was rejected: his idea blamed doctors, had no “how,” and he rarely published',
          ],
          model:
            'In Vienna the doctors’ clinic lost far more mothers to childbed fever than the midwives’ clinic, because doctors came straight from cutting up corpses and carried germs on their hands. When Semmelweis made them wash in chlorine in 1847, deaths fell from about 10% to 1–2%. Doctors rejected him because the idea blamed them, he couldn’t explain how it worked, and he barely published.',
        },
      ],
      cards: [
        {
          id: 'grm-date-handwashing',
          kind: 'date',
          year: 1847,
          front: 'When did Semmelweis make doctors in Vienna wash their hands in chlorine?',
          back: '1847',
          choices: ['1776', '1815', '1928'],
          hook: 'Exactly 500 years after the Black Death reached Europe (1347).',
        },
        {
          id: 'grm-person-semmelweis',
          kind: 'person',
          front: 'Who showed that handwashing saved mothers from childbed fever?',
          back: 'Ignaz Semmelweis, a Hungarian doctor in Vienna',
          choices: ['Louis Pasteur', 'Joseph Lister', 'John Snow'],
        },
        {
          id: 'grm-num-clinics',
          kind: 'number',
          front: 'Before handwashing, about how many mothers in 100 died in Vienna’s doctors’ clinic, versus the midwives’ clinic?',
          back: 'About 10 in the doctors’ clinic vs about 4 with the midwives (1841–46)',
          choices: ['About 1 vs about 1', 'About 50 vs about 10', 'About 4 vs about 10'],
        },
        {
          id: 'grm-cause-kolletschka',
          kind: 'cause',
          front: 'What clue led Semmelweis to handwashing?',
          back: 'His friend Kolletschka died of a fever like the mothers’ after a cut during an autopsy — so something from corpses was travelling on doctors’ hands.',
        },
        {
          id: 'grm-concept-germ',
          kind: 'concept',
          front: 'What is a germ?',
          back: 'A living thing too small to see — such as a bacterium or virus — that can cause disease',
          choices: ['Bad air from rotting matter', 'An imbalance of the body’s fluids', 'A poison made by the body itself'],
        },
        {
          id: 'grm-concept-antiseptic',
          kind: 'concept',
          front: 'What does an antiseptic do?',
          back: 'Kills germs on skin, surfaces or wounds — outside the body',
          choices: ['Cures infections deep inside the body', 'Trains the body to fight a disease', 'Numbs pain during surgery'],
        },
        {
          id: 'grm-cause-rejection',
          kind: 'cause',
          front: 'Why did doctors reject Semmelweis?',
          back: 'His idea blamed doctors’ own hands, he couldn’t explain how the particles killed, and he barely published for years.',
        },
      ],
      teaser:
        'Seven years later, cholera killed more than 500 people in a few London streets in about ten days. Dr John Snow didn’t reach for a microscope. He reached for a map.',
    },
  ],
  upcoming: [
    {
      title: 'The Ghost Map',
      summary:
        'London, 1854: John Snow marks every cholera death on a street map, traces them to one water pump on Broad Street — and helps found epidemiology, the science of how disease spreads through a population.',
    },
    {
      title: 'Swan Necks and Spoiled Broth',
      summary:
        'Louis Pasteur boils broth in flasks with curving necks and shows that life does not appear from nothing. In Glasgow, Joseph Lister reads his work and brings antiseptics into surgery (1867).',
    },
    {
      title: 'Koch’s Rules',
      summary:
        'Robert Koch sets out tests for proving that a germ causes a disease, identifies the germ of tuberculosis (1882) and chases cholera to Egypt and India (1883–84) — while Pasteur races him with vaccines.',
    },
    {
      title: 'The Mould on the Plate',
      summary:
        'London, 1928: Alexander Fleming returns from holiday to find a mould killing his bacteria. What an antibiotic is — and why his discovery then sat almost unused for a decade.',
    },
    {
      title: 'Penicillin for Millions',
      summary:
        'Howard Florey, Ernst Chain and their Oxford team turn mould juice into a medicine; in the 1940s American factories mass-produce it for the Second World War. And the warning about resistance that came with it.',
    },
  ],
}
