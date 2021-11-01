export const required = (value: any) => {
  if (value) return undefined;
  return "you should input something";
};
