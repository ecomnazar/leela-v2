export const convertToBlob = async (uri: string) => {
  const response = await fetch(uri);
  const blob = await response.blob();
  return blob;
};
