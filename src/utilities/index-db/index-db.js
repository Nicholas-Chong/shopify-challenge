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
    console.log(`Added "${request.result}" to likedImages`)
  }

  request.onerror = () => {
    console.log('Error', request.error)
  }
}

export const deleteLikedImage = (db, image) => {
  const transaction = db.transaction('likedImages', 'readwrite')
  const likedImages = transaction.objectStore('likedImages')

  const request = likedImages.delete(image.title)

  request.onsuccess = () => {
    console.log(`Removed "${image.title}" from likedImages`)
  }

  request.onerror = () => {
    console.log('Error', request.error)
  }
}

export const searchForImage = (db, imageTitle) => {
  return new Promise((resolve, reject) => {
    const transaction = db.transaction('likedImages', 'readwrite')
    const likedImages = transaction.objectStore('likedImages')
    
    const request = likedImages.get(imageTitle)
  
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}
