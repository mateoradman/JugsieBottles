const path = require('path');

export function getBottlePaths(name, noLogo = false) {
  if (noLogo) {
    return path.join('/BottlePhotos/WithoutLogo', `${name}.png`)
  } else {
    return path.join('/BottlePhotos', `${name}.png`)
  }
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

