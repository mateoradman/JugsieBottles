import {bottleInformation, personalizationIcons} from "./constants";

export function getBottlePaths(name, noLogo = false) {
  const path = require('path');
  if (noLogo) {
    return path.join('/bottles/withoutLogo', `${name}.png`);
  } else {
    return path.join('/bottles', `${name}.png`);
  }
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export function getFormattedPrice(price, currency = 'kn') {
  return `${price} ${currency}`;
}

export function getPersonalizationIcon(iconName) {
  return personalizationIcons.find(x => x.name === iconName).icon;
}

export function getBottleInformationObject(bottleName) {
  return bottleInformation.find(x => x.name === bottleName);
}

