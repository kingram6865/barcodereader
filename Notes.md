### Google Books API
Request: https://www.googleapis.com/books/v1/volumes?q=isbn:${isbn}

Response:

```json
{
  "kind": "books#volumes",
  "totalItems": 1,
  "items": [
    {
      "kind": "books#volume",
      "id": "UAyBHAAACAAJ",
      "etag": "EUiZY6P++Ak",
      "selfLink": "https://www.googleapis.com/books/v1/volumes/UAyBHAAACAAJ",
      "volumeInfo": {
        "title": "Vegetarian Soups for All Seasons",
        "subtitle": "A Treasury of Bountiful Low-fat Soups and Stews",
        "authors": [
          "Nava Atlas"
        ],
        "publisher": "Little Brown",
        "publishedDate": "1996",
        "description": "A collection of seasonal vegetarian soup and stew recipes features brown rice, asparagus, curried cashews, broccoli, macaroni, minted peaches, and cornmeal dumplings",
        "industryIdentifiers": [
          {
            "type": "ISBN_10",
            "identifier": "0316057339"
          },
          {
            "type": "ISBN_13",
            "identifier": "9780316057332"
          }
        ],
        "readingModes": {
          "text": false,
          "image": false
        },
        "pageCount": 164,
        "printType": "BOOK",
        "categories": [
          "Cooking"
        ],
        "maturityRating": "NOT_MATURE",
        "allowAnonLogging": false,
        "contentVersion": "preview-1.0.0",
        "imageLinks": {
          "smallThumbnail": "http://books.google.com/books/content?id=UAyBHAAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
          "thumbnail": "http://books.google.com/books/content?id=UAyBHAAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        },
        "language": "en",
        "previewLink": "http://books.google.com/books?id=UAyBHAAACAAJ&dq=isbn:9780316057332&hl=&cd=1&source=gbs_api",
        "infoLink": "http://books.google.com/books?id=UAyBHAAACAAJ&dq=isbn:9780316057332&hl=&source=gbs_api",
        "canonicalVolumeLink": "https://books.google.com/books/about/Vegetarian_Soups_for_All_Seasons.html?hl=&id=UAyBHAAACAAJ"
      },
      "saleInfo": {
        "country": "US",
        "saleability": "NOT_FOR_SALE",
        "isEbook": false
      },
      "accessInfo": {
        "country": "US",
        "viewability": "NO_PAGES",
        "embeddable": false,
        "publicDomain": false,
        "textToSpeechPermission": "ALLOWED",
        "epub": {
          "isAvailable": false
        },
        "pdf": {
          "isAvailable": false
        },
        "webReaderLink": "http://play.google.com/books/reader?id=UAyBHAAACAAJ&hl=&source=gbs_api",
        "accessViewStatus": "NONE",
        "quoteSharingAllowed": false
      },
      "searchInfo": {
        "textSnippet": "A collection of seasonal vegetarian soup and stew recipes features brown rice, asparagus, curried cashews, broccoli, macaroni, minted peaches, and cornmeal dumplings In this delectable collection, Nava Atlas dishes up imaginative, soul ..."
      }
    }
  ]
}
```