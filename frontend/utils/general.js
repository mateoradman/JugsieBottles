const path = require('path');

export function getBottlePaths(name, noLogo = false) {
  if (noLogo) {
    return path.join('/bottles/withoutLogo', `${name}.png`)
  } else {
    return path.join('/bottles', `${name}.png`)
  }
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

