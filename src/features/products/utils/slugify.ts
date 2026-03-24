// create a clean human readble URL!
export const slugify = (text: string): string => {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") //remove spesial char
    .replace(/\s+/g, "-") //remove spaces w/hypens
    .replace(/-+/g, "-"); // replace multiple hyphens with one
};
