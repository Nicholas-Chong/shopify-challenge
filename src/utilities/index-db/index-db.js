export const openDb = () => {
  let db = null
  const openRequest = indexedDB.open('shopispace', 2)

  openRequest.onupgradeneeded = () => {
    db = openRequest.result
    if (!db.objectStoreNames.contains('likedImages')) {
      const likedImages = db.createObjectStore('likedImages', {
        autoIncrement: true,
      })
      likedImages.createIndex('imageTitle', 'imageTitle')
    }
  }

  return db
}

export const addLikedImage = (db, imageTitle) => {
  const transaction = db.transaction('likedImages', 'readwrite')
  const likedImages = transaction.objectStore('likedImages')

  const request = likedImages.add({ imageTitle: imageTitle })

  request.onsuccess = () => {
    console.log(`Added "${imageTitle}" to likedImages`, request.result)
  }

  request.onerror = () => {
    console.log('Error', request.error)
  }
}

export const searchForImage = (db, imageTitle) => {
  const transaction = db.transaction('likedImages', 'readwrite')
  const likedImages = transaction.objectStore('likedImages')
  const imageTitleIndex = likedImages.index('imageTitle')

  const request = imageTitleIndex.getAll(imageTitle)

  request.onsuccess = () => {
    if (request.result !== undefined) {
      console.log('Found Image:', request.result)
    } else {
      console.log('No such books')
    }
  }
}
