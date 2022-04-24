import { bottleInformation, DEFAULT_CURRENCY, Icons } from "./constants";

export function getBottlePaths(name, noLogo = false) {
  const path = require("path");
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

export function getOrderItemsArray(cartItemsArray) {
  const productCode = process.env.NEXT_PUBLIC_PRODUCT_CODE;
  let ItemsArray = [];
  cartItemsArray.forEach((bottle) => {
    ItemsArray.push({
      Code: productCode,
      Price: {
        Currency: DEFAULT_CURRENCY,
        Discount: 0,
        GrossDiscountedPrice: bottle.price,
        GrossPrice: bottle.price,
        NetDiscountedPrice: 0.75 * bottle.price,
        NetPrice: 0.75 * bottle.price,
        VAT: 0.25 * bottle.price,
      },
    });
  });
  return ItemsArray;
}

export function ID() {
  // Math.random should be unique because of its seeding algorithm.
  // Convert it to base 36 (numbers + letters), and grab the first 9 characters
  // after the decimal.
  return "_" + Math.random().toString(36).substr(2, 9);
}
