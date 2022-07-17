import * as path from "path";
import { bottleInformation, Icons } from "./constants";

export function getBottlePaths(name, noLogo = false) {
  if (noLogo) {
    return path.join("/bottles/withoutLogo", `${name}.png`);
  } else {
    return path.join("/bottles", `${name}.png`);
  }
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function getFormattedPrice(price, currency = "kn") {
  return `${price} ${currency}`;
}

export function getIcon(iconName) {
  let finding = Icons.find((x) => x.name === iconName);
  if (finding) return finding.icon;
}

export function getBottleInformationObject(bottleName) {
  return bottleInformation.find((x) => x.name === bottleName);
}

export function getCartTotalPrice(cartItemsArray) {
  if (cartItemsArray.length > 0) {
    return cartItemsArray
      .map((item) => item.price)
      .reduce((prev, next) => prev + next);
  } else return 0;
}
