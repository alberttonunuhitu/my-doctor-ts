export const toTitleCase = (value: string): string =>
  value.replace(
    /\w\S*/g,
    (text) => text.charAt(0).toUpperCase() + text.substr(1).toLowerCase(),
  );
