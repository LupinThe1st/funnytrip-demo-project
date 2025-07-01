export function getAssetsImage(image) {
  const imagePathSections = image.split("/");
  switch (imagePathSections.length) {
    case 1:
      return new URL(`../assets/imgs/${image}`, import.meta.url).href;
    case 2:
      return new URL(
        `../assets/imgs/${imagePathSections[0]}/${imagePathSections[1]}`,
        import.meta.url
      ).href;
  }
}
