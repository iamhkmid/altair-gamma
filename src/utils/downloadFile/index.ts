export const downloadFile = (url: string, name?: string) => {
  const downloadLink = document.createElement("a");
  downloadLink.href = url;
  if (name) downloadLink.download = name;
  downloadLink.click();
};
