export const diferenciaDe2 = (pL, pV) => {
  return Math.abs(pL - pV) >= 2;
};

export const equipoGanador = (pL, pV) => {
  let g;
  pL - pV > 0 ? (g = 1) : pV - pL > 0 ? (g = 2) : (g = 0);
  return g;
};
