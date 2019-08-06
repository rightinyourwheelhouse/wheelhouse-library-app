export default function clamp(a, b) {
  return a > b ? b : a;
}

export function invertedClamp(a, b) {
  return -clamp(b, -a);
}
