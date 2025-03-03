export const isValidId = (id: number) => {
  return Number.isInteger(id) && id > 0;
};
