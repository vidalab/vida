export const setPageTitle = (title: string) => {
  if (title) {
    document.title = title + " - Vida"
  } else {
    document.title = "Vida - Data Visualization Made Easy"
  }
}