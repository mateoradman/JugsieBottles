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
    name: 'White',
    class: 'bg-bottle-white',
    mainPhoto: getBottlePaths('White'),
    emptyPhoto: getBottlePaths('White', true)
  },
  {
    name: 'Black',
    class: 'bg-bottle-black',
    mainPhoto: getBottlePaths('Black'),
    emptyPhoto: getBottlePaths('Black', true)
  },
  {
    name: 'Blue',
    class: 'bg-bottle-blue',
    mainPhoto: getBottlePaths('Blue'),
    emptyPhoto: getBottlePaths('Blue', true)
  },
  {
    name: 'Hot Pink',
    class: 'bg-bottle-hotpink',
    mainPhoto: getBottlePaths('Pink'),
    emptyPhoto: getBottlePaths('Pink', true)
  },
  {
    name: 'Lilac',
    class: 'bg-bottle-lilac',
    mainPhoto: getBottlePaths('Lilac'),
    emptyPhoto: getBottlePaths('Lilac', true)
  },
  {
    name: 'Turquoise',
    class: 'bg-bottle-turquoise',
    mainPhoto: getBottlePaths('Turquoise'),
    emptyPhoto: getBottlePaths('Turquoise', true)
  },
  {
    name: 'Green',
    class: 'bg-bottle-green',
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

export function getPersonalizationIcon(iconName) {
  return personalizationIcons.find(x => x.name === iconName).icon
}

