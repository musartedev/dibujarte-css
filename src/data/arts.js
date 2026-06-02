const rawArts = [
  {
    title: '✨ Sakura Card Captor Key',
    author: {
      name: 'Iraida Mercedes',
      twitter: 'https://twitter.com/iraidamercedes7',
      github: 'https://github.com/iraidamercedes',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.31.35+PM.png',
    linkToOriginal: 'https://codepen.io/iraidamercedes/pen/oNxvdwp',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '🦇 Batman',
    author: {
      name: 'Beto Toro',
      twitter: 'https://twitter.com/betotorodev',
      github: 'https://github.com/beto-toro',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.42.00+PM.png',
    linkToOriginal: 'https://github.com/beto-toro/batman-css',
    tags: ['ilustración', 'flat'],
  },
  {
    title: '⚡️Voltorb',
    author: {
      name: 'Diego Osuna',
      twitter: 'https://twitter.com/diego_osunag',
      github: 'https://github.com/diego-osunag',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.43.12+PM.png',
    linkToOriginal: 'https://codepen.io/diego_osunag/pen/dyMyXPy',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '✨Meditative Mus',
    author: {
      name: 'Mariangélica Useche',
      twitter: 'https://twitter.com/musartedev',
      github: 'https://github.com/musartedev',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.44.18+PM.png',
    linkToOriginal: 'https://codepen.io/musartedev/pen/MWyWwxV',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '🌮 Taco Cats',
    author: {
      name: 'Emmanuel García',
      twitter: 'https://twitter.com/EmmaIsWorking',
      github: 'https://github.com/EmmaIsWorking',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.44.56+PM.png',
    linkToOriginal: 'https://codepen.io/emmaisworking/pen/WNwNYwE',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '🔲 Cubo Rubik',
    author: {
      name: 'Andrés Damelio',
      twitter: 'https://twitter.com/andres_damelio',
      github: 'https://github.com/Andresdamelio',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.45.22+PM.png',
    linkToOriginal: 'https://codepen.io/andresdamelio/pen/yLOLQxQ?editors=1100',
    tags: ['ilustración', 'realismo'],
  },
  {
    title: '🥑 Aguacates',
    author: {
      name: 'Ana Hernandez',
      twitter: 'https://twitter.com/ianahernandez',
      github: 'https://github.com/ianahernandez',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.46.07+PM.png',
    linkToOriginal: 'https://codepen.io/ianahernandez/pen/XWdJgQw',
    tags: ['ilustración', 'realismo'],
  },
  {
    title: '◻️ Square and Compass',
    author: {
      name: 'Shel Valdés',
      twitter: 'https://twitter.com/shelvaldes',
      github: 'https://github.com/shelvaldes',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-08+at+6.46.36+PM.png',
    linkToOriginal: 'https://codepen.io/shelvaldes/pen/vYGEeZQ',
    tags: ['ilustración'],
  },
  {
    title: '🚀 Steven Universe',
    author: {
      name: 'Alex Camacho',
      twitter: 'https://twitter.com/alexcamachogz',
      github: 'https://github.com/alexcamachogz',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-10+at+6.16.03+PM.png',
    linkToOriginal: 'https://codepen.io/alexcamachogz/pen/PoNYRWK',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '👶🏼 Baby Phineas And Ferb',
    author: {
      name: 'Tomás Salinas',
      github: 'https://github.com/salinatomas',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-11+at+2.13.08+PM.png',
    linkToOriginal: 'https://github.com/salinatomas/Phineas-and-Ferb',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '☁️  Fly Mario Fly',
    author: {
      name: 'Emmanuel García',
      twitter: 'https://twitter.com/EmmaIsWorking',
      github: 'https://github.com/EmmaIsWorking',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+7.29.40+PM.png',
    linkToOriginal: 'https://codepen.io/emmaisworking/pen/ExKymOx?editors=1100',
    tags: ['pixel-art', 'animado'],
  },
  {
    title: '⚡️Pikachú',
    author: {
      name: 'Andrés Parra',
      twitter: 'https://twitter.com/AndresParraGar4',
      github: 'https://github.com/AndresParraGO',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-20+at+10.06.43+PM.png',
    linkToOriginal: 'https://codepen.io/andresparrago/pen/BaKLNPw',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '⺾  Emblema Sheikah',
    author: {
      name: 'Hugo',
      twitter: 'https://twitter.com/hugok2k',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+7.30.11+PM.png',
    linkToOriginal: 'https://codepen.io/hugok2k/pen/ZEQvKLB',
    tags: ['ilustración'],
  },
  {
    title: '🔥 Djkde\'s Kitchen',
    author: {
      name: 'Sergio Estrella',
      twitter: 'https://twitter.com/djkde',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+7.27.09+PM.png',
    linkToOriginal: 'https://codepen.io/Djkde/pen/bGppMaB',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '👻 Spirited Away',
    author: {
      name: 'Verónica Alcaraz',
      twitter: 'https://twitter.com/Lukaina_co',
      github: 'https://github.com/Lukaina',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-20+at+10.08.03+PM.png',
    linkToOriginal: 'https://codepen.io/veroalcaraz/pen/yLOayOJ',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🎇 Rick Sanchez Portal',
    author: {
      name: 'Daniel Reyes',
      github: 'https://github.com/daniektj',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+6.49.40+PM.png',
    linkToOriginal: 'https://codepen.io/daniektj/pen/eYZdwBw',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '👻 BOO!',
    author: {
      name: 'David Martinez',
      github: 'https://github.com/dv-mata',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+6.50.37+PM.png',
    linkToOriginal: 'https://codepen.io/dv-mata/pen/oNxLBKy',
    tags: ['pixel-art', 'animado'],
  },
  {
    title: '👨🏽‍🚀 Astronauta Perdido',
    author: {
      name: 'Fjavier De Freitas',
      github: 'https://github.com/Scorcherfjk',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+6.51.16+PM.png',
    linkToOriginal: 'https://codepen.io/Scorcherfjk/pen/ZEWWodM',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🐒 Monkey D. Luffy',
    author: {
      name: 'Andés22',
      github: 'https://github.com/andresp2218',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+6.51.52+PM.png',
    linkToOriginal: 'https://codepen.io/andresp2218/pen/mdPOzPN',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '💨 Ventilador',
    author: {
      name: 'Libia Pérez',
      github: 'https://github.com/alexadictiva',
      twitter: 'https://twitter.com/alexAdictiva',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+7.22.06+PM.png',
    linkToOriginal: 'https://codepen.io/alexadictiva/pen/poyEzpK?editors=1100',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🙍🏽‍♀️ Autorretrato',
    author: {
      name: 'Isa56k1',
      twitter: 'https://twitter.com/isa56k1',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-21+at+7.31.05+PM.png',
    linkToOriginal: 'https://codepen.io/isa-pulsatilla/pen/poybeMa',
    tags: ['ilustración'],
  },
  {
    title: '🦜 Duolingo',
    author: {
      name: 'Silfrido Benítez',
      twitter: 'https://twitter.com/chiiB12',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-22+at+9.33.23+PM.png',
    linkToOriginal: 'https://codepen.io/silfridob12/pen/bGEQPMY',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🦁 León en Circo',
    author: {
      name: 'Camilo Aguilera',
      github: 'https://github.com/camilo9497',
      twitter: 'https://twitter.com/camilofrontend',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-23+at+2.44.28+PM.png',
    linkToOriginal: 'https://codepen.io/camilo-aguilera/pen/BaKpNzy',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🕹 Nintendo GameBoy',
    author: {
      name: 'Jorge Baumann',
      github: 'https://github.com/baumannzone',
      twitter: 'https://twitter.com/baumannzone',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-28+at+7.49.23+PM.png',
    linkToOriginal: 'https://codepen.io/baumann/pen/YQKbqW',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🎇 Rick Sanchez',
    author: {
      name: 'Guillermo Moreno',
      twitter: 'https://twitter.com/MemoBrown_',
      github: 'https://github.com/MemoBrown',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-28+at+7.51.52+PM.png',
    linkToOriginal: ' https://codepen.io/MemoBrown/pen/zYvmxGX',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '⚡️ Pikachú',
    author: {
      name: 'Cristhian Mahecha',
      github: 'https://github.com/CristhianM01',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-28+at+8.04.40+PM.png',
    linkToOriginal: 'https://codepen.io/cristhianm01/pen/MWyojmz',
    tags: ['ilustración', 'cartoon', 'interactivo'],
  },
  {
    title: '⺾  Triforce Marks of the Goddesse',
    author: {
      name: 'Hugo',
      twitter: 'https://twitter.com/hugok2k',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-08-28+at+8.11.12+PM.png',
    linkToOriginal: 'https://codepen.io/hugok2k/pen/yLOVGMN',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🤖 Bb-8 De Star Wars ',
    author: {
      name: 'Kelvin Ventura',
      twitter: 'https://twitter.com/joel_kelvin19',
      github: 'https://github.com/Kelvin-Joel'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-12-13+at+10.57.30+AM.png',
    linkToOriginal: 'https://codepen.io/joelkelvin-vh/pen/ExKbmgJ',
    tags: ['ilustración', 'animado', 'interactivo'],
  },
  {
    title: '📱 Pokedex ',
    author: {
      name: 'Kelvin Ventura',
      twitter: 'https://twitter.com/joel_kelvin19',
      github: 'https://github.com/Kelvin-Joel'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2020-12-13+at+11.04.02+AM.png',
    linkToOriginal: 'https://codepen.io/joelkelvin-vh/pen/LYNbMYy',
    tags: ['ilustración', 'animado', 'interactivo'],
  },
  {
    title: '🕕 Analog Clock ',
    author: {
      name: 'Andrés Parra',
      twitter: 'https://twitter.com/AndresParraGar4',
      github: 'https://github.com/AndresParraGO',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.22.29+AM.png',
    linkToOriginal: 'https://codepen.io/andresparragarzon/pen/LYRgoeK',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🦒 Jirafita',
    author: {
      name: 'Israel Vásquez',
      twitter: 'https://twitter.com/IrrealeRiquadri',
      github: 'https://github.com/Photographya',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.25.52+AM.png',
    linkToOriginal: 'https://codepen.io/Photographya/pen/wvopMzK',
    tags: ['ilustración'],
  },
  {
    title: '📺 Televisor',
    author: {
      name: 'Julio Loarte',
      twitter: 'https://twitter.com/juliolh06',
      github: 'https://github.com/juliolh0686',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.26.28+AM.png',
    linkToOriginal: 'https://codepen.io/juliolh06/pen/BaQJJGz?editors=1100',
    tags: ['ilustración'],
  },
  {
    title: '😺 Mishi',
    author: {
      name: 'Daniel Armas',
      twitter: 'https://twitter.com/daniel692a',
      github: 'https://github.com/daniel692a',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.27.08+AM.png',
    linkToOriginal: 'https://codepen.io/daniel692/pen/mdOLrbp',
    tags: ['ilustración'],
  },
  {
    title: '🧑🏾‍🚀 The Space',
    author: {
      name: 'Sebastián Díaz',
      twitter: 'https://twitter.com/sebdidesign',
      github: 'https://github.com/Medotq',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.27.41+AM.png',
    linkToOriginal: 'https://codepen.io/sebdidesign/pen/ZEBjpNG',
    tags: ['ilustración'],
  },
  {
    title: '🧑🏾‍🚀 Baby Yoda',
    author: {
      name: 'Jesús',
      twitter: 'https://twitter.com/DddTarea',
      github: 'https://github.com/JesusCH92',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.28.24+AM.png',
    linkToOriginal: 'https://github.com/JesusCH92/maquetacion--baby-yoda',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🥑 <avocado in love>',
    author: {
      name: 'Harrinson Quintero',
      twitter: 'https://twitter.com/jhaqual',
      github: 'https://github.com/jhaqual',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.29.01+AM.png',
    linkToOriginal: 'https://codepen.io/jhaqual-the-sans/pen/MWbBVpO?editors=1100',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🚀 The Mandalorian',
    author: {
      name: 'Silfrido Benitez',
      twitter: 'https://twitter.com/chio358',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-09+at+9.32.22+AM.png',
    linkToOriginal: 'https://codepen.io/silfridob12/pen/JjbyaoV?editors=1100',
    tags: ['ilustración'],
  },
  {
    title: '🍩 Homero Simpsons',
    author: {
      name: 'Eduardo Reyes',
      twitter: 'https://twitter.com/JoEduardoReyes',
      github: 'https://github.com/JoEduardoReyes'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-03-24+at+7.47.55+AM.png',
    linkToOriginal: 'https://codepen.io/JoEduardoReyes/pen/LYbJBVr',
    tags: ['ilustración'],
  },
  {
    title: '♕ Chess Board',
    author: {
      name: 'David Osorio Leyva',
      twitter: 'https://twitter.com/soyDavidOsorio',
      github: 'https://github.com/DavidOsorioLeyva'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-04-10+at+6.11.55+PM.png',
    linkToOriginal: 'https://github.com/DavidOsorioLeyva/chessboard',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '🐶 DogeCoin to the Moon',
    author: {
      name: 'Nickingnova',
      twitter: 'https://twitter.com/nickingnova',
      github: 'https://github.com/nickingnova'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-04-10+at+6.14.33+PM.png',
    linkToOriginal: 'https://nickingnova.github.io/dogecoinchallenge/',
    tags: ['ilustración'],
  },
  {
    title: '🔥 Pequeño Charmander',
    author: {
      name: 'Manuel Peñaloza',
      twitter: 'https://twitter.com/Manuel09779534',
      github: 'https://github.com/Manuel-2'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-04-10+at+6.14.59+PM.png',
    linkToOriginal: 'https://codepen.io/manuel-2/pen/eYgdeQr',
    tags: ['ilustración'],
  },
  {
    title: '🔥 Kakashi',
    author: {
      name: 'Leonardo Alain',
      twitter: 'https://twitter.com/Allin826381',
      github: 'https://github.com/Alincut'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-04-10+at+6.15.24+PM.png',
    linkToOriginal: 'https://alincut.github.io/kakashi/',
    tags: ['ilustración'],
  },
  {
    title: '🌸 Stitch',
    author: {
      name: 'Alexander Lansdorp',
      twitter: 'https://twitter.com/GironLansdorp',
      github: 'https://github.com/AlexanderLGRS'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-06-17+at+7.33.43+PM.png',
    linkToOriginal: 'https://codepen.io/alexanderlgrs/pen/dyNmXWK',
    tags: ['ilustración'],
  },
  {
    title: '💀 La Parca',
    author: {
      name: 'Miguel Berrio ',
      twitter: 'https://twitter.com/mabmab0159',
      github: 'https://github.com/mabmab159'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-06-17+at+7.35.58+PM.png',
    linkToOriginal: 'https://codepen.io/mabmab159/pen/LYxqLqq',
    tags: ['ilustración'],
  },
  {
    title: '💀 Deathly hallows',
    author: {
      name: 'Sergio González',
      github: 'https://github.com/Sergio9815'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-06-17+at+7.36.55+PM.png',
    linkToOriginal: 'https://dh-cartoon-css.vercel.app/',
    tags: ['ilustración'],
  },
  {
    title: '🧟‍♂️ Zombie',
    author: {
      name: 'Carlos Córdova',
      twitter: 'https://twitter.com/carloscdev',
      github: 'https://github.com/carloscdev'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-06-17+at+7.37.43+PM.png',
    linkToOriginal: 'https://codepen.io/carloscdev/pen/rNyJJYY',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '😺 Doraemon',
    author: {
      name: 'José Hernández',
      twitter: 'https://twitter.com/denver15jh',
      github: 'https://github.com/denver15-jh'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-06-17+at+7.38.11+PM.png',
    linkToOriginal: 'https://codepen.io/denver15jh/pen/GRWxMjP',
    tags: ['ilustración'],
  },
  {
    title: '♥️ GARU',
    author: {
      name: 'Brandon Huamán',
      github: 'https://github.com/Brandon328'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-06-17+at+7.38.37+PM.png',
    linkToOriginal: 'https://codepen.io/brandon328/pen/mdWLoGJ',
    tags: ['ilustración'],
  },
  {
    title: '🐣 Pollito volador',
    author: {
      name: 'Miguel Franchi',
      twitter: 'https://twitter.com/mfranchi82',
      github: 'https://github.com/mfranchi82/'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2021-06-17+at+7.39.12+PM.png',
    linkToOriginal: 'https://codepen.io/mfranchi82/pen/VwpEpLE?editors=1100',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '☕️ Cuphead',
    author: {
      name: 'Miguel Ángel Reyes',
      twitter: 'https://twitter.com/MiguelAngelRe28',
      github: 'https://github.com/Mike-droid/'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+1.39.24+PM.png',
    linkToOriginal: 'https://codepen.io/mike-droid/pen/WNpmLJL',
    tags: ['ilustración'],
  },
  {
    title: '🧑🏾‍🦲 Calvito',
    author: {
      name: 'Stanley Alvarez',
      github: 'https://github.com/doncanzsa'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+2.00.36+PM.png',
    linkToOriginal: 'https://codepen.io/doncanzsa/pen/xxrRrBB',
    tags: ['ilustración'],
  },
  {
    title: '🧍🏻‍♂️ Lego Man',
    author: {
      name: 'Mario Germán Reyes',
      twitter: 'https://twitter.com/mager19',
      github: 'https://github.com/mager19/'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+2.04.17+PM.png',
    linkToOriginal: 'https://codepen.io/mager19/pen/GRvOxbP',
    tags: ['ilustración'],
  },
  {
    title: '🐂 Axie Infinity',
    author: {
      name: 'Gastón Ezequiel Papa',
      twitter: 'https://twitter.com/cAtSeVeN_G7',
      github: 'https://github.com/ca7seven/'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+2.07.48+PM.png',
    linkToOriginal: 'https://codepen.io/ca7seven/pen/abyXKex',
    tags: ['ilustración'],
  },
  {
    title: '🌎 Tierra-css',
    author: {
      name: 'Ricardo Ojeda',
      twitter: 'https://twitter.com/ricandres_98',
      github: 'https://github.com/ricandres98/'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+2.11.14+PM.png',
    linkToOriginal: 'https://codepen.io/ricandres98/pen/YzrJZYV',
    tags: ['ilustración'],
  },
  {
    title: '🦄 Unicorn Llama',
    author: {
      name: 'Rodrigo Goitia',
      twitter: 'https://twitter.com/rodruxdev',
      github: 'https://github.com/rodruxdev/'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+2.13.41+PM.png',
    linkToOriginal: 'https://codepen.io/rodruxdev/pen/xxXBeOY',
    tags: ['ilustración'],
  },
  {
    title: '🔷 Fat Heisenberg',
    author: {
      name: 'Cristian Casallas',
      twitter: 'https://twitter.com/cricadev/',
      github: 'https://github.com/CristianN998/'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+2.16.58+PM.png',
    linkToOriginal: 'https://codepen.io/cristiann998/pen/bGYBONY',
    tags: ['ilustración'],
  },
  {
    title: '🔴 Mickey',
    author: {
      name: 'Cristian Casallas',
      twitter: 'https://twitter.com/patrickjeremy02/',
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-02-15+at+2.25.02+PM.png',
    linkToOriginal: 'https://codepen.io/patrickjeremy02/pen/NWdbvzX',
    tags: ['ilustración'],
  },
  {
    title: '👒 Luffy',
    author: {
      name: 'Jonathan Vivero',
      twitter: 'https://twitter.com/jonvirodev',
      github: 'https://github.com/jonathanviro'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-08-09+at+12.29.34+PM.png',
    linkToOriginal: 'https://codepen.io/jonathanviro/pen/oNqoZYE',
    tags: ['ilustración'],
  },
  {
    title: '👨🏼‍🦲 Primer dibujo',
    author: {
      name: 'Erika Nathaly',
      github: 'https://github.com/erikabernalm'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-08-09+at+12.30.57+PM.png',
    linkToOriginal: 'https://codepen.io/erikabernalm/pen/VwXrOpO',
    tags: ['ilustración'],
  },
  {
    title: '👁 Ojo animado',
    author: {
      name: 'Joel Ventura',
      twitter: 'https://twitter.com/joel_kelvin19',
      github: 'https://github.com/Kelvin-Joel'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-08-09+at+12.36.06+PM.png',
    linkToOriginal: 'https://codepen.io/joelkelvin-vh/pen/XWZEeyb',
    tags: ['ilustración', 'animado'],
  },
  {
    title: '👁 Ojo animado',
    author: {
      name: 'Edgar Contreras',
      twitter: 'https://twitter.com/edgar_46',
      github: 'https://github.com/escontrerass'
    },
    imgUrl:
      'https://dibujartecss.s3.us-east-2.amazonaws.com/Screen+Shot+2022-08-09+at+12.40.03+PM.png',
    linkToOriginal: 'https://codepen.io/escontrerass/pen/bGYzgmo',
    tags: ['ilustración'],
  },
  {
    title: '🟣 Logo de Platzi',
    author: {
      name: 'Sebastián Sanhueza Tapia',
      twitter: 'https://x.com/SebaSanhueTapia',
      github: 'https://github.com/SuKuShaing',
    },
    imgUrl: 'https://dibujartecss.s3.us-east-2.amazonaws.com/Screenshot+2026-06-02+at+12.11.44%E2%80%AFPM.png',
    linkToOriginal: 'https://sukushaing.github.io/dibujar-con-el-css/',
    tags: ['flat', 'ilustración'],
  },
  {
    title: '🐱 Clio',
    author: {
      name: 'Erik Andrés Rosero Yepez',
      twitter: 'https://twitter.com/erikroseroyepez',
      github: 'https://github.com/erikroseroyepez',
    },
    imgUrl: 'https://dibujartecss.s3.us-east-2.amazonaws.com/Screenshot+2026-06-02+at+12.12.41%E2%80%AFPM.png',
    linkToOriginal: 'https://codepen.io/ERIK-ROSERO-YEPEZ/pen/qBvVBpY',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '🤘 Sign of the horns',
    author: {
      name: 'Carlos Licto',
      twitter: 'https://twitter.com/carlos_drk',
      github: 'https://github.com/ironcdrk',
    },
    imgUrl: 'https://dibujartecss.s3.us-east-2.amazonaws.com/Screenshot+2026-06-02+at+12.13.48%E2%80%AFPM.png',
    linkToOriginal: 'https://codepen.io/ironcdrk/pen/oNMQqde',
    tags: ['ilustración'],
  },
  {
    title: '💙 Blue — Mansión Foster',
    author: {
      name: 'Génesis Patiño',
      github: 'https://github.com/genepatino',
    },
    imgUrl: '/previews/issue-60-blue-foster.png',
    linkToOriginal: 'https://github.com/genepatino/drawingCss',
    tags: ['cartoon', 'ilustración'],
  },
  {
    title: '📚 Yo aprendiendo CSS',
    author: {
      name: 'Jean Usma',
      twitter: 'https://twitter.com/jevale2125',
      github: 'https://github.com/jeanusma',
    },
    imgUrl:
      'https://user-images.githubusercontent.com/90712512/191810138-87b006a9-e61a-4da2-84b8-1119ef603acc.png',
    linkToOriginal: 'https://github.com/jeanusma',
    tags: ['ilustración', 'cartoon'],
  },
  {
    title: '🍩 Homero CSS',
    author: {
      name: 'Damián Garcés',
      twitter: 'https://twitter.com/guners86',
      github: 'https://github.com/guners86',
    },
    imgUrl: 'https://dibujartecss.s3.us-east-2.amazonaws.com/Screenshot+2026-06-02+at+4.32.42%E2%80%AFPM.png',
    linkToOriginal: 'https://guners86.github.io/HomeroCss/',
    tags: ['cartoon', 'ilustración'],
  },
  {
    title: '🎮 Gameboy Platzi',
    author: {
      name: 'Heriberto De Jesús',
      github: 'https://github.com/HeribertoDejesus',
    },
    imgUrl: 'https://dibujartecss.s3.us-east-2.amazonaws.com/Screenshot+2026-06-02+at+4.30.53%E2%80%AFPM.png',
    linkToOriginal: 'https://github.com/HeribertoDejesus/dibujo-css',
    tags: ['ilustración', 'pixel-art'],
  },
];

export const arts = rawArts.map((art, index) => ({
  ...art,
  id: `art-${index}`,
}));

export const FILTER_TAGS = [
  { value: 'todos', label: 'Todos' },
  { value: 'cartoon', label: 'Cartoon' },
  { value: 'ilustración', label: 'Ilustración' },
  { value: 'realismo', label: 'Realismo' },
  { value: 'animado', label: 'Animado' },
  { value: 'pixel-art', label: 'Pixel Art' },
  { value: 'flat', label: 'Flat' },
  { value: 'interactivo', label: 'Interactivo' },
];
