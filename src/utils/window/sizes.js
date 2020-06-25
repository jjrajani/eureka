export const isSV = ({ width }) => {
  return width < 768;
};

export const isMV = ({ width }) => {
  return width < 1024;
};

export const isLV = ({ width }) => {
  return width >= 1024;
};
