export const changeTheme = (dark: boolean) => {
  if (dark) {
    return document.querySelector("html")?.setAttribute("data-theme", "dark");
  }
  return document.querySelector("html")?.removeAttribute("data-theme");
};
