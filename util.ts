export const isOnlySelect = (text: string): boolean => {
  return text.trim().toUpperCase() === "SELECT";
};
