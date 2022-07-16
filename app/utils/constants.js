import countryList from 'react-select-country-list';
import {
  Aeroplane,
  Butterfly,
  Camera,
  Clover,
  Crown,
  Dumbbell,
  Flower,
  Heart,
  Lipstick,
  MusicalNote,
  Paw,
  Smile,
  Star,
  Tooth
} from "../public/personalizationIcons";
import { getBottlePaths } from "./general";

export const reviews = {
  href: "https://www.trustpilot.com/review/jugsie.com",
  average: 4.4,
  totalCount: 13,
};

export const bottleInformation = [
  {
    id: 1,
    name: "White",
    class: "bg-bottle-white",
    backgroundColor: "bg-bottleBg-white",
    mainPhoto: getBottlePaths("White"),
    emptyPhoto: getBottlePaths("White", true),
    leftPhoto: 'aaa',
    centreTopPhoto: 'aaa',
    centreBottomPhoto: 'aaa',

  },
  {
    id: 2,
    name: "Black",
    class: "bg-bottle-black",
    backgroundColor: "bg-bottleBg-black",
    mainPhoto: getBottlePaths("Black"),
    emptyPhoto: getBottlePaths("Black", true),
  },
  {
    id: 3,
    name: "Blue",
    class: "bg-bottle-blue",
    backgroundColor: "bg-bottleBg-blue",
    mainPhoto: getBottlePaths("Blue"),
    emptyPhoto: getBottlePaths("Blue", true),
  },
  {
    id: 4,
    name: "Hot Pink",
    class: "bg-bottle-hotpink",
    backgroundColor: "bg-bottleBg-hotpink",
    mainPhoto: getBottlePaths("Pink"),
    emptyPhoto: getBottlePaths("Pink", true),
  },
  {
    id: 5,
    name: "Lilac",
    class: "bg-bottle-lilac",
    backgroundColor: "bg-bottleBg-lilac",
    mainPhoto: getBottlePaths("Lilac"),
    emptyPhoto: getBottlePaths("Lilac", true),
  },
  {
    id: 6,
    name: "Turquoise",
    class: "bg-bottle-turquoise",
    backgroundColor: "bg-bottleBg-turquoise",
    mainPhoto: getBottlePaths("Turquoise"),
    emptyPhoto: getBottlePaths("Turquoise", true),
  },
  {
    id: 7,
    name: "Green",
    class: "bg-bottle-green",
    backgroundColor: "bg-bottleBg-green",
    mainPhoto: getBottlePaths("Green"),
    emptyPhoto: getBottlePaths("Green", true),
  },
];

export const Icons = [
  { name: "Aeroplane", icon: Aeroplane },
  { name: "Butterfly", icon: Butterfly },
  { name: "Camera", icon: Camera },
  { name: "Clover", icon: Clover },
  { name: "Crown", icon: Crown },
  { name: "Dumbbell", icon: Dumbbell },
  { name: "Flower", icon: Flower },
  { name: "Heart", icon: Heart },
  { name: "Lipstick", icon: Lipstick },
  { name: "MusicalNote", icon: MusicalNote },
  { name: "Paw", icon: Paw },
  { name: "Smile", icon: Smile },
  { name: "Star", icon: Star },
  { name: "Tooth", icon: Tooth },
];

export const LocalStorageCartItems = "JugsieBottlesCartItems";
export const DEFAULT_CURRENCY = "HRK";
export const Croatia = { value: countryList().getValue('Croatia'), label: countryList().getLabel('HR') };
export const iconFontSize = {fontSize: '1.5rem'};
export const JUGSIE_EMAIL = 'Jugsie Bottles <info@jugsie.com>';