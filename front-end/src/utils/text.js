export class TextUtils {
  constructor() {}

  getUrlLastPart(path) {
    const pageURL = path.value
    const index = pageURL.lastIndexOf('/')
    if (index > 0) {
      return pageURL.substr(index + 1)
    }
    return null
  }
}
