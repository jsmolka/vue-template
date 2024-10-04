export function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

export function lerp(a, b, ratio) {
  return a + ratio * (b - a);
}

export function remap(value, min1, max1, min2, max2, withinBounds = false) {
  if (withinBounds) {
    value = clamp(value, min1, max1);
  }
  return lerp(min2, max2, (value - min1) / (max1 - min1));
}

export function degToRad(degrees) {
  return degrees * (Math.PI / 180);
}

export function radToDeg(radians) {
  return radians * (180 / Math.PI);
}

export function nthRoot(value, root) {
  return value ** (1 / root);
}

// Based on https://github.com/josdejong/mathjs/blob/v12.4.3/src/utils/number.js#L626
export function equals(a, b, epsilon = null) {
  if (epsilon == null) {
    return a === b;
  }

  if (a === b) {
    return true;
  }

  if (isNaN(a) || isNaN(b) || !isFinite(a) || !isFinite(b)) {
    return false;
  }

  const diff = Math.abs(a - b);
  return diff <= Number.EPSILON || diff <= epsilon;
}
