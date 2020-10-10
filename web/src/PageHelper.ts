import { useAlert } from 'react-alert'

export const setPageTitle = (title: string) => {
  if (title) {
    document.title = title + " - Vida"
  } else {
    document.title = "Vida - Data Visualization Made Easy"
  }
}

export const checkJSONSize = (alert: useAlert, json: string): boolean => {
  // limit json length to 50k
  if (json.length > 50000) {
    alert.show('JSON size is above the limit of 50k.')
    return false
  } else {
    return true
  }
}