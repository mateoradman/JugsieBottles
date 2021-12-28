import {getBottlePaths} from "./general";
import {
  Aeroplane, Butterfly, Camera, Clover, Crown, Dumbbell, Flower,
  Heart, Lipstick, MusicalNote, Tooth, Star, Smile, Paw
} from "../public/personalizationIcons";

export const reviews = {
  href: 'https://www.trustpilot.com/review/jugsie.com',
  average: 4.4,
  totalCount: 12
}

export const bottleInformation = [
  {
    id: 1,
    name: 'White',
    class: 'bg-bottle-white',
    backgroundColor: "bg-bottleBg-white",
    mainPhoto: getBottlePaths('White'),
    emptyPhoto: getBottlePaths('White', true)
  },
  {
    id: 2,
    name: 'Black',
    class: 'bg-bottle-black',
    backgroundColor: "bg-bottleBg-black",
    mainPhoto: getBottlePaths('Black'),
    emptyPhoto: getBottlePaths('Black', true)
  },
  {
    id: 3,
    name: 'Blue',
    class: 'bg-bottle-blue',
    backgroundColor: "bg-bottleBg-blue",
    mainPhoto: getBottlePaths('Blue'),
    emptyPhoto: getBottlePaths('Blue', true)
  },
  {
    id: 4,
    name: 'Hot Pink',
    class: 'bg-bottle-hotpink',
    backgroundColor: "bg-bottleBg-hotpink",
    mainPhoto: getBottlePaths('Pink'),
    emptyPhoto: getBottlePaths('Pink', true)
  },
  {
    id: 5,
    name: 'Lilac',
    class: 'bg-bottle-lilac',
    backgroundColor: "bg-bottleBg-lilac",
    mainPhoto: getBottlePaths('Lilac'),
    emptyPhoto: getBottlePaths('Lilac', true)
  },
  {
    id: 6,
    name: 'Turquoise',
    class: 'bg-bottle-turquoise',
    backgroundColor: "bg-bottleBg-turquoise",
    mainPhoto: getBottlePaths('Turquoise'),
    emptyPhoto: getBottlePaths('Turquoise', true)
  },
  {
    id: 7,
    name: 'Green',
    class: 'bg-bottle-green',
    backgroundColor: "bg-bottleBg-green",
    mainPhoto: getBottlePaths('Green'),
    emptyPhoto: getBottlePaths('Green', true)
  },
]

export const personalizationIcons = [
  {name: 'aeroplane', icon: Aeroplane},
  {name: 'butterfly', icon: Butterfly},
  {name: 'camera', icon: Camera},
  {name: 'clover', icon: Clover},
  {name: 'crown', icon: Crown},
  {name: 'dumbbell', icon: Dumbbell},
  {name: 'flower', icon: Flower},
  {name: 'heart', icon: Heart},
  {name: 'lipstick', icon: Lipstick},
  {name: 'musical-note', icon: MusicalNote},
  {name: 'paw', icon: Paw},
  {name: 'smile', icon: Smile},
  {name: 'star', icon: Star},
  {name: 'tooth', icon: Tooth},
]

export const LocalStorageCartItems = 'JugsieBottlesCartItems';