const categories = [
  {
    name: 'Food',
    image: 'food.png',
    icon: 'foodicon.png',
  },
  {
    name: 'Animals',
    image: 'animals.png',
    icon: 'animalsicon.png',
  },
  {
    name: 'Clothes',
    image: 'clothes.png',
    icon: 'clothesicon.png',
  },
  {
    name: 'Kitchen',
    image: 'kitchen.png',
    icon: 'kitchenicon.png',
  },
  {
    name: 'Sport',
    image: 'sport.png',
    icon: 'sporticon.png',
  },
  {
    name: 'Building',
    image: 'building.png',
    icon: 'buildingicon.png',
  },
  {
    name: 'Appliances',
    image: 'appliances.png',
    icon: 'appliancesicon.png',
  },
  {
    name: 'Transport',
    image: 'transport.png',
    icon: 'transporticon.png',
  },
];

const cards = [
  [
    {
      category: 'Food',
      word: 'bacon',
      translation: 'бекон',
      image: 'food/bacon.jpg',
      audioSrc: 'audio/bacon.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Food',
      word: 'carrot',
      translation: 'морковка',
      image: 'food/carrot.jpg',
      audioSrc: 'audio/carrot.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Food',
      word: 'cheese',
      translation: 'сыр',
      image: 'food/cheese.jpg',
      audioSrc: 'audio/cheese.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Food',
      word: 'chicken',
      translation: 'курица',
      image: 'food/chicken.jpg',
      audioSrc: 'audio/chicken.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Food',
      word: 'coffee',
      translation: 'кофе',
      image: 'food/coffee.jpg',
      audioSrc: 'audio/coffee.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Food',
      word: 'donut',
      translation: 'пончик',
      image: 'food/donut.jpg',
      audioSrc: 'audio/donut.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Food',
      word: 'egg',
      translation: 'яйцо',
      image: 'food/egg.jpg',
      audioSrc: 'audio/egg.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Food',
      word: 'sandwich',
      translation: 'бутерброд',
      image: 'food/sandwich.jpg',
      audioSrc: 'audio/sandwich.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
  [
    {
      category: 'Animals',
      word: 'bear',
      translation: 'медведь',
      image: 'animals/bear.jpg',
      audioSrc: 'audio/bear.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Animals',
      word: 'pig',
      translation: 'свинья',
      image: 'animals/pig.jpg',
      audioSrc: 'audio/pig.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Animals',
      word: 'cat',
      translation: 'кот',
      image: 'animals/cat.jpg',
      audioSrc: 'audio/cat.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Animals',
      word: 'penguin',
      translation: 'пингвин',
      image: 'animals/penguin.jpg',
      audioSrc: 'audio/penguin.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Animals',
      word: 'elephant',
      translation: 'слон',
      image: 'animals/elephant.jpg',
      audioSrc: 'audio/elephant.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Animals',
      word: 'monkey',
      translation: 'обезьяна',
      image: 'animals/monkey.jpg',
      audioSrc: 'audio/monkey.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Animals',
      word: 'fox',
      translation: 'лиса',
      image: 'animals/fox.jpg',
      audioSrc: 'audio/fox.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Animals',
      word: 'lion',
      translation: 'лев',
      image: 'animals/lion.jpg',
      audioSrc: 'audio/lion.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
  [
    {
      category: 'Clothes',
      word: 'blouse',
      translation: 'блузка',
      image: 'clothes/blouse.jpg',
      audioSrc: 'audio/blouse.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Clothes',
      word: 'undershirt',
      translation: 'майка',
      image: 'clothes/undershirt.jpg',
      audioSrc: 'audio/undershirt.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Clothes',
      word: 'dress',
      translation: 'платье',
      image: 'clothes/dress.jpg',
      audioSrc: 'audio/dress.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Clothes',
      word: 'tie',
      translation: 'галстук',
      image: 'clothes/tie.jpg',
      audioSrc: 'audio/tie.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Clothes',
      word: 'hat',
      translation: 'шляпа',
      image: 'clothes/hat.jpg',
      audioSrc: 'audio/hat.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Clothes',
      word: 'sock',
      translation: 'носок',
      image: 'clothes/sock.jpg',
      audioSrc: 'audio/sock.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Clothes',
      word: 'pants',
      translation: 'брюки',
      image: 'clothes/pants.jpg',
      audioSrc: 'audio/pants.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Clothes',
      word: 'slippers',
      translation: 'шлепанцы',
      image: 'clothes/slippers.jpg',
      audioSrc: 'audio/slippers.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
  [
    {
      category: 'Kitchen',
      word: 'cup',
      translation: 'чашка',
      image: 'kitchen/cup.jpg',
      audioSrc: 'audio/cup.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Kitchen',
      word: 'teapot',
      translation: 'чайник',
      image: 'kitchen/teapot.jpg',
      audioSrc: 'audio/teapot.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Kitchen',
      word: 'fork',
      translation: 'вилка',
      image: 'kitchen/fork.jpg',
      audioSrc: 'audio/fork.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Kitchen',
      word: 'spoon',
      translation: 'ложка',
      image: 'kitchen/spoon.jpg',
      audioSrc: 'audio/spoon.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Kitchen',
      word: 'grater',
      translation: 'тёрка',
      image: 'kitchen/grater.jpg',
      audioSrc: 'audio/grater.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Kitchen',
      word: 'scoop',
      translation: 'черпак',
      image: 'kitchen/scoop.jpg',
      audioSrc: 'audio/scoop.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Kitchen',
      word: 'knife',
      translation: 'нож',
      image: 'kitchen/knife.jpg',
      audioSrc: 'audio/knife.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Kitchen',
      word: 'saucepan',
      translation: 'кастрюля',
      image: 'kitchen/saucepan.jpg',
      audioSrc: 'audio/saucepan.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
  [
    {
      category: 'Sport',
      word: 'ball',
      translation: 'мяч',
      image: 'sport/ball.jpg',
      audioSrc: 'audio/ball.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Sport',
      word: 'sneaker',
      translation: 'кроссовок',
      image: 'sport/sneaker.jpg',
      audioSrc: 'audio/sneaker.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Sport',
      word: 'boxing gloves',
      translation: 'боксерские перчатки',
      image: 'sport/boxing-gloves.jpg',
      audioSrc: 'audio/boxing-gloves.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Sport',
      word: 'skates',
      translation: 'коньки',
      image: 'sport/skates.jpg',
      audioSrc: 'audio/skates.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Sport',
      word: 'dumbbell',
      translation: 'гантеля',
      image: 'sport/dumbbell.jpg',
      audioSrc: 'audio/dumbbell.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Sport',
      word: 'racket',
      translation: 'ракетка',
      image: 'sport/racket.jpg',
      audioSrc: 'audio/racket.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Sport',
      word: 'helmet',
      translation: 'шлем',
      image: 'sport/helmet.jpg',
      audioSrc: 'audio/helmet.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Sport',
      word: 'medal',
      translation: 'медаль',
      image: 'sport/medal.jpg',
      audioSrc: 'audio/medal.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
  [
    {
      category: 'Building',
      word: 'brush',
      translation: 'кисть',
      image: 'building/brush.jpg',
      audioSrc: 'audio/brush.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Building',
      word: 'wrench',
      translation: 'гаечный ключ',
      image: 'building/wrench.jpg',
      audioSrc: 'audio/wrench.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Building',
      word: 'hammer',
      translation: 'молоток',
      image: 'building/hammer.jpg',
      audioSrc: 'audio/hammer.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Building',
      word: 'tape',
      translation: 'рулетка',
      image: 'building/tape.jpg',
      audioSrc: 'audio/tape.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Building',
      word: 'pliers',
      translation: 'плоскогубцы',
      image: 'building/pliers.jpg',
      audioSrc: 'audio/pliers.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Building',
      word: 'shovel',
      translation: 'лопата',
      image: 'building/shovel.jpg',
      audioSrc: 'audio/shovel.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Building',
      word: 'saw',
      translation: 'пила',
      image: 'building/saw.jpg',
      audioSrc: 'audio/saw.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Building',
      word: 'screwdriver',
      translation: 'отвёртка',
      image: 'building/screwdriver.jpg',
      audioSrc: 'audio/screwdriver.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
  [
    {
      category: 'Appliances',
      word: 'coffee machine',
      translation: 'кофеварка',
      image: 'appliances/coffee-machine.jpg',
      audioSrc: 'audio/coffee-machine.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Appliances',
      word: 'toaster',
      translation: 'тостер',
      image: 'appliances/toaster.jpg',
      audioSrc: 'audio/toaster.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Appliances',
      word: 'washing machine',
      translation: 'стиральная машина',
      image: 'appliances/washing-machine.jpg',
      audioSrc: 'audio/washing-machine.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Appliances',
      word: 'iron',
      translation: 'утюг',
      image: 'appliances/iron.jpg',
      audioSrc: 'audio/iron.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Appliances',
      word: 'oven',
      translation: 'духовка',
      image: 'appliances/oven.jpg',
      audioSrc: 'audio/oven.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Appliances',
      word: 'multicooker',
      translation: 'мультиварка',
      image: 'appliances/multicooker.jpg',
      audioSrc: 'audio/multicooker.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Appliances',
      word: 'kettle',
      translation: 'чайник',
      image: 'appliances/kettle.jpg',
      audioSrc: 'audio/kettle.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Appliances',
      word: 'microwave oven',
      translation: 'микроволновка',
      image: 'appliances/microwave-oven.jpg',
      audioSrc: 'audio/microwave-oven.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
  [
    {
      category: 'Transport',
      word: 'airplane',
      translation: 'самолёт',
      image: 'transport/airplane.jpg',
      audioSrc: 'audio/airplane.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Transport',
      word: 'truck',
      translation: 'грузовик',
      image: 'transport/truck.jpg',
      audioSrc: 'audio/truck.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Transport',
      word: 'bicycle',
      translation: 'велосипед',
      image: 'transport/bicycle.jpg',
      audioSrc: 'audio/bicycle.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Transport',
      word: 'train',
      translation: 'поезд',
      image: 'transport/train.jpg',
      audioSrc: 'audio/train.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Transport',
      word: 'car',
      translation: 'автомобиль',
      image: 'transport/car.jpg',
      audioSrc: 'audio/car.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Transport',
      word: 'ship',
      translation: 'корабль',
      image: 'transport/ship.jpg',
      audioSrc: 'audio/ship.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Transport',
      word: 'helicopter',
      translation: 'вертолет',
      image: 'transport/helicopter.jpg',
      audioSrc: 'audio/helicopter.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
    {
      category: 'Transport',
      word: 'motorcycle',
      translation: 'мотоцикл',
      image: 'transport/motorcycle.jpg',
      audioSrc: 'audio/motorcycle.mp3',
      train: 0,
      correct: 0,
      incorrect: 0,
      percent: 0,
    },
  ],
];

export { categories, cards };