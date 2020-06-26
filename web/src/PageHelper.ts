export const setPageTitle = (title: string) => {
  if (title) {
    document.title = title + " - Vida"
  } else {
    document.title = "Vida - Data Visualization Made Easy"
  }
}

export const checkJSONSize = (json: object) => {
  // limit json length to 50k
  console.log(JSON.stringify(json).length)
  if (JSON.stringify(json).length > 50000) {
    return false
  } else {
    return true
  }
}