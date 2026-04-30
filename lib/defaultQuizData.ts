// 0=Radiant, 1=Mermaiden, 2=Enchanted, 3=Celestial, 4=Evil, 5=Party, 6=Royal, 7=Servant, 8=Harlot
export const defaultQuestions = [
  {
    question: "When entering a grand medieval hall, what catches your eye first?",
    options: [
      "The shimmering tapestries woven with gold thread",
      "The mysterious shadows dancing in the candlelight",
      "The bold rainbow Pride flags and fierce queer dancers claiming the space",
      "The musicians playing enchanting melodies",
      "The scandalous courtiers whispering forbidden secrets in shadowy corners",
    ],
    archetypes: [0, 1, 2, 3, 8],
  },
  {
    question: "Your ideal enchanted companion would be...",
    options: [
      "A majestic phoenix with iridescent feathers",
      "A wise sea serpent from the deep",
      "Your fiercest queer chosen sister, forever by your side",
      "A noble unicorn with a flowing mane",
      "A devoted handmaiden who serves with quiet grace and unwavering loyalty",
    ],
    archetypes: [0, 1, 2, 3, 7],
  },
  {
    question: "What magical power speaks to your soul?",
    options: [
      "The ability to charm anyone with a single glance",
      "Control over the tides and weather",
      "The gift of prophecy and mystical visions",
      "The power to bend darkness to your will",
      "The seductive arts of bewitchment that bend hearts and bodies to your desire",
    ],
    archetypes: [0, 1, 3, 4, 8],
  },
  {
    question: "Your ideal medieval getaway destination?",
    options: [
      "A secret garden filled with singing roses",
      "An underwater palace of pearls and coral",
      "A tower library with infinite magical scrolls",
      "Brighton pier at sunset surrounded by your fiercely fabulous chosen family",
      "A humble convent where you devote yourself to caring for those in need",
    ],
    archetypes: [0, 1, 3, 5, 7],
  },
  {
    question: "What treasure would you keep closest to your heart?",
    options: [
      "An enchanted mirror that shows your true self",
      "A seashell that plays the songs of merfolk",
      "A crown that glows brighter with kindness",
      "A jeweled tiara encrusted with diamonds",
      "A silken corset laced with rubies that whispers temptation to all who behold it",
    ],
    archetypes: [0, 1, 2, 6, 8],
  },
  {
    question: "When challenged, how do you respond?",
    options: [
      "With calm intuition and a knowing smile",
      "With playful confidence and a dash of chaos",
      "With commanding authority and no mercy",
      "With infectious energy and boundless optimism",
      "With humble grace and gentle service, defusing tension through devotion",
    ],
    archetypes: [1, 2, 4, 5, 7],
  },
  {
    question: "What's your relationship with power?",
    options: [
      "I am the light—power flows through me naturally",
      "I seek to command and dominate with purpose",
      "I celebrate life and lift others up with me",
      "I expect to rule, it's simply my birthright",
      "I wield my charms and pleasures as power—seduction is my sovereign weapon",
    ],
    archetypes: [0, 4, 5, 6, 8],
  },
  {
    question: "Your ideal way to spend an evening?",
    options: [
      "In mysterious contemplation by the water",
      "Dancing, laughing, creating magic with friends",
      "Plotting schemes in candlelit solitude",
      "Throwing a legendary queer house party where you reign supreme",
      "Tending to the needs of others, finding joy in quiet acts of service",
    ],
    archetypes: [1, 2, 4, 6, 7],
  },
  {
    question: "What role do you naturally take in a group?",
    options: [
      "The radiant focal point everyone gravitates toward",
      "The free spirit making everything magical and fun",
      "The energetic spark that gets the party started",
      "The commanding presence everyone defers to",
      "The scandalous flirt who keeps everyone breathless and delightfully scandalized",
    ],
    archetypes: [0, 2, 5, 6, 8],
  },
  {
    question: "What wisdom would you share with others?",
    options: [
      "Embrace your inner light and let it guide you",
      "Never show weakness, power is everything",
      "Your most authentic, queer self is your greatest power—wear it proudly, always",
      "Grace, elegance, and dignity above all else",
      "True divinity lies in serving others with a humble, loving heart",
    ],
    archetypes: [3, 4, 5, 6, 7],
  },
];

export const defaultResults = [
  {
    title: "The Radiant Diva",
    description:
      "You are the golden goddess of light, and darling, you were born to shine. With your radiant presence and infectious grace, you illuminate every moment with pure luminescence. Your confidence flows like liquid gold, your spirit is magnetic, and honey, everyone can feel when you enter the room. You don't just sparkle—you are the light itself. Unapologetically radiant, endlessly magnetic.",
  },
  {
    title: "The Mermaiden Diva",
    description:
      "You are the ethereal ruler of the deep, and frankly, everyone else is just visiting your ocean. With your fluid grace and mysterious allure, you navigate life's currents with a knowing smile. Your emotional intelligence is *chef's kiss*, your vibe is hypnotic, and you remind everyone: they can look, but darling, they can't touch. You're one of a kind—incomparable, unforgettable.",
  },
  {
    title: "The Enchanted Diva",
    description:
      "You are the whimsical sorceress of possibility, a dreamer with the audacity to make the impossible real. With your playful spirit and boundless imagination, you don't just weave magic into the mundane—you ARE the magic, darling. Your joy is intoxicating, your creativity is spellbinding, and you remind everyone that life is meant to be a celebration. Everyone wishes they were the fairy tale you're living.",
  },
  {
    title: "The Celestial Diva",
    description:
      "You are the wise priestess who dwells between worlds, and honey, your energy is cosmic and divine. With your intuitive grace and spiritual depth, you move through life with purpose and ethereal beauty. Your presence is a healing balm, your wisdom flows like starlight, and you embody the divine feminine in a way that makes hearts pause. You are sacred, luminous, and utterly transcendent.",
  },
  {
    title: "The Evil Diva",
    description:
      "You are the dark enchantress of your own destiny, and frankly, everyone else better watch their back. With your commanding presence and fierce magnetism, you don't just enter a room—you own it. Your power is undeniable, your intellect is razor-sharp, and you remind everyone that true strength comes from within. You're not here to be liked; you're here to be legendary. Wickedly powerful, unapologetically fierce.",
  },
  {
    title: "The Party Diva",
    description:
      "You are the radiant soul who turns every moment into a celebration, and darling, your joy is absolutely contagious. With your infectious energy and boundless spirit, you make life itself a spectacular party. Your presence is pure sunshine, your laugh is pure magic, and you remind everyone that the best moments are the ones you create. You don't just live—you sparkle and celebrate every single second. Eternally fabulous, infinitely joyful.",
  },
  {
    title: "The Royal Diva",
    description:
      "You are the crowned goddess of luxury and elegance, and honestly, everyone else is just visiting your kingdom. With your impeccable taste and commanding grace, you set the standard that others aspire to. Your presence demands respect, your standards are impeccable, and you remind everyone that true royalty isn't just a title—it's an attitude. Unapologetically regal, eternally exquisite.",
  },
  {
    title: "The Servant Diva",
    description:
      "You are the humble handmaiden whose grace shines through devotion, and darling, your loyalty is your superpower. With your gentle spirit and selfless heart, you lift others effortlessly, finding strength in quiet acts of love. Your kindness is your crown, your humility is your magic, and you remind everyone that the truest divinity is found in caring for others. You serve, honey, but you serve LOOKS while doing it. Quietly powerful, eternally adored.",
  },
  {
    title: "The Harlot Diva",
    description:
      "You are the scandalous siren of the medieval court, and frankly, you make sin look like high art. With your seductive charm and unapologetic sensuality, you bewitch every soul who dares glance your way. Your confidence is intoxicating, your allure is legendary, and you remind everyone that pleasure is power and shame is for the unimaginative. You're not bad, darling—you're deliciously unforgettable. Wickedly seductive, gloriously uninhibited.",
  },
];
