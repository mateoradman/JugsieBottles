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
  let finding = personalizationIcons.find(x => x.name === iconName);
  if (finding) return finding.icon;
}

export function getBottleInformationObject(bottleName) {
  return bottleInformation.find(x => x.name === bottleName);
}

export function getCartTotalPrice(cartItemsArray) {
  if (cartItemsArray.length > 0) {
    return cartItemsArray.map(item => item.price).reduce((prev, next) => prev + next);
  } else return 0;
}

export function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return '_' + Math.random().toString(36).substr(2, 9);
}