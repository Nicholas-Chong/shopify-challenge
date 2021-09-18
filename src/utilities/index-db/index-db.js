export const openDb = () => {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open('shopispace', 2)

    openRequest.onupgradeneeded = () => {
      const db = openRequest.result
      if (!db.objectStoreNames.contains('likedImages')) {
        db.createObjectStore('likedImages', {keyPath: 'title'})
      }
    }

    openRequest.onsuccess = () => resolve(openRequest.result)
    openRequest.onerror = () => reject(openRequest.error)
  })
}

export const addLikedImage = (db, image) => {
  const transaction = db.transaction('likedImages', 'readwrite')
  const likedImages = transaction.objectStore('likedImages')

  const request = likedImages.add(image)

  request.onsuccess = () => {
    console.log(`Added "${image.title}" to likedImages`, request.result)
  }

  request.onerror = () => {
    console.log('Error', request.error)
  }
}

export const deleteLikedImage = (db, image) => {
  const transaction = db.transaction('likedImages', 'readwrite')
  const likedImages = transaction.objectStore('likedImages')
  likedImages.delete(image.title)
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
