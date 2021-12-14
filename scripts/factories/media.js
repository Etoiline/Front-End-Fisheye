/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
class Media {
  constructor (data, type, FirstName) {
    if (type === 'image') {
      return new MediaImage(data, FirstName)
    } else if (type === 'video') {
      return new MediaVideo(data, FirstName)
    } else {
      throw Error('Unknown type format')
    }
  }
}
