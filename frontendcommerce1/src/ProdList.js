const products = [{
 "_id": {
      "$oid": "67c62a38f2d8b67179988059"
    },
    "name": "iPhone 14 Pro",
    "description": "Apple's latest smartphone with A16 Bionic chip and ProMotion display.",
    "category": "Smartphones",
    "price": 1099,
    "stock": 50,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpwxR2plMrWrCqlMvoWvSZpeyp-XRETYC9Vw&s",
      "https://ispaceservices.com/storage/2022/09/14-pro-family.png",
      "https://cdsassets.apple.com/live/SZLF0YNV/images/sp/111846_sp875-sp876-iphone14-pro-promax.png"
    ],
    "brand": "Apple",
    "__v": 0,
    "keyitem" :1
    
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988060"
    },
    "name": "Samsung Galaxy S23 Ultra",
    "description": "Flagship Android phone with a 200MP camera and Snapdragon 8 Gen 2 processor.",
    "category": "Smartphones",
    "price": 1199,
    "stock": 40,
    "images": [
      "https://i5.walmartimages.com/seo/Samsung-Galaxy-S23-Ultra-5G-Dual-S918B-512GB-12GB-RAM-GSM-Unlocked-Green_d2290cc8-3f71-479c-b9d7-1ba520897afe.80616f3a06fe5be8483e0662ac4d2c7d.jpeg",
      "https://example.com/images/galaxys23ultra-back.jpg"
    ],
    "brand": "Samsung",
    "__v": 0,
    "keyitem" :2
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988061"
    },
    "name": "Sony WH-1000XM5",
    "description": "Industry-leading noise-canceling headphones with exceptional sound quality.",
    "category": "Headphones",
    "price": 399,
    "stock": 30,
    "images": [
      "https://images-cdn.ubuy.ae/633ac1a8e22c171ed47edec1-sony-wh-1000xm5-wireless-noise-canceling.jpg"
    ],
    "brand": "Sony",
    "__v": 0,
    "keyitem" :3
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988062"
    },
    "name": "MacBook Air M2",
    "description": "Ultra-thin and lightweight laptop powered by Apple's M2 chip.",
    "category": "Laptops",
    "price": 1299,
    "stock": 25,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLI46pMjHRGlMqufszRO1Uiw1nscLXowjRuQ&s"
    ],
    "brand": "Apple",
    "__v": 0,
    "keyitem" :4
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988063"
    },
    "name": "Logitech MX Master 3S",
    "description": "Ergonomic wireless mouse with ultra-fast scrolling and customizable buttons.",
    "category": "Accessories",
    "price": 99,
    "stock": 100,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbk4x6tUYcC9oXLSkohke2FuZk4MR9YNeuKw&s"
    ],
    "brand": "Logitech",
    "__v": 0,
    "keyitem" :5
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988064"
    },
    "name": "Samsung 32-inch 4K Monitor",
    "description": "UHD 4K display with HDR support for an immersive viewing experience.",
    "category": "Monitors",
    "price": 349,
    "stock": 20,
    "images": [
      "https://i5.walmartimages.com/seo/SAMSUNG-32-Class-Curved-4K-UHD-3840-x-2160-60Hz-4ms-Monitor-LU32R590CWNXZA_faae156a-1e1b-440d-9ef7-7fe76cb35660_1.05dcd4091c5b4f6310e9c441ca63991d.jpeg"
    ],
    "brand": "Samsung",
    "__v": 0,
    "keyitem" :6
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988065"
    },
    "name": "Dell XPS 15",
    "description": "Powerful laptop with Intel Core i7 and NVIDIA RTX 3050 Ti.",
    "category": "Laptops",
    "price": 1799,
    "stock": 15,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXaTKLN4dLtsmi8ZmHbX1KAxNfJEISlM-Y9A&s"
    ],
    "brand": "Dell",
    "__v": 0,
    "keyitem" :7
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988066"
    },
    "name": "Bose QuietComfort 45",
    "description": "Noise-canceling wireless headphones with high-fidelity audio.",
    "category": "Headphones",
    "price": 329,
    "stock": 35,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkCe_k8XxYtTQDYsLrNrLuIWakuYjjJ44SAw&s"
    ],
    "brand": "Bose",
    "__v": 0,
    "keyitem" :8
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988067"
    },
    "name": "Apple Watch Series 8",
    "description": "Advanced smartwatch with health tracking and crash detection.",
    "category": "Wearables",
    "price": 499,
    "stock": 60,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDaK2nCNamUagrwQQDCT4j17TC7gEc0xcpew&s"
    ],
    "brand": "Apple",
    "__v": 0,
    "keyitem" :9
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988068"
    },
    "name": "Google Pixel 7 Pro",
    "description": "Google's flagship phone with Tensor G2 chip and AI-powered camera.",
    "category": "Smartphones",
    "price": 899,
    "stock": 45,
    "images": [
      "https://m.media-amazon.com/images/I/51f4A6Tr8zL._AC_SR1000,1000_.jpg"
    ],
    "brand": "Google",
    "__v": 0,
    "keyitem" :10
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988069"
    },
    "name": "Razer BlackWidow V4",
    "description": "Mechanical gaming keyboard with Razer Green switches.",
    "category": "Accessories",
    "price": 169,
    "stock": 70,
    "images": [
      "https://m.media-amazon.com/images/I/81L4FpeS3VL._AC_SL1500_.jpg"
    ],
    "brand": "Razer",
    "__v": 0,
    "keyitem" :11
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b6717998806a"
    },
    "name": "Sony PlayStation 5",
    "description": "Next-gen gaming console with ultra-fast SSD and ray tracing support.",
    "category": "Gaming",
    "price": 499,
    "stock": 10,
    "images": [
      "https://mk-media.mytek.tn/media/catalog/product/cache/8be3f98b14227a82112b46963246dfe1/c/o/console-de-jeux-sony-playstation-5-edition-digitale.jpg"
    ],
    "brand": "Sony",
    "__v": 0,
    "keyitem" :12
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b6717998806b"
    },
    "name": "Xbox Series X",
    "description": "Powerful gaming console with 4K gaming at 120 FPS.",
    "category": "Gaming",
    "price": 499,
    "stock": 12,
    "images": [
      "https://gameszone.tn/490-large_default/xbox-series-x-1tb-console-de-jeux-tunisie.jpg"
    ],
    "brand": "Microsoft",
    "__v": 0,
    "keyitem" :13
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b6717998806c"
    },
    "name": "Nikon Z7 II",
    "description": "High-resolution mirrorless camera with 45.7MP sensor.",
    "category": "Cameras",
    "price": 2999,
    "stock": 8,
    "images": [
      "https://m.media-amazon.com/images/I/91y4sdv8NQL._AC_SL1500_.jpg"
    ],
    "brand": "Nikon",
    "__v": 0,
    "keyitem" :14
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b6717998806d"
    },
    "name": "Canon EOS R6",
    "description": "Professional mirrorless camera with fast autofocus.",
    "category": "Cameras",
    "price": 2499,
    "stock": 12,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWSaetHhBhf_pUEvkwU6ZtjT9WnA3-dBjPog&s"
    ],
    "brand": "Canon",
    "__v": 0,
    "keyitem" :15
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b6717998806e"
    },
    "name": "GoPro Hero 11 Black",
    "description": "Action camera with 5.3K video recording and HyperSmooth 5.0.",
    "category": "Cameras",
    "price": 499,
    "stock": 30,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQb-NlmFYjM32k4KsXOtB9u0oXD7sujj5xWGA&s"
    ],
    "brand": "GoPro",
    "__v": 0,
    "keyitem" :16
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b6717998806f"
    },
    "name": "AirPods Pro 2",
    "description": "Apple's latest noise-canceling wireless earbuds with spatial audio.",
    "category": "Audio",
    "price": 249,
    "stock": 80,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn6-eqt0A4UyiKgUWvKxNwjLBpAEwgVm8Xuw&s"
    ],
    "brand": "Apple",
    "__v": 0,
    "keyitem" :17
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988070"
    },
    "name": "JBL Charge 5",
    "description": "Portable Bluetooth speaker with deep bass and long battery life.",
    "category": "Audio",
    "price": 149,
    "stock": 90,
    "images": [
      "https://images-cdn.ubuy.qa/66ba03b439c71514c550a1d4-jbl-charge-5-portable-waterproof.jpg"
    ],
    "brand": "JBL",
    "__v": 0,
    "keyitem" :18
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988071"
    },
    "name": "ASUS ROG Strix RTX 4090",
    "description": "High-performance graphics card with advanced ray tracing.",
    "category": "PC Components",
    "price": 1999,
    "stock": 5,
    "images": [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDH3ZyBbI1XgXzkzAtx6ZOLytUuljgr3CzLg&s"
    ],
    "brand": "ASUS",
    "__v": 0,
    "keyitem" :19
  },
  {
    "_id": {
      "$oid": "67c62a38f2d8b67179988072"
    },
    "name": "Corsair Vengeance 32GB RAM",
    "description": "High-speed DDR5 RAM for gaming and productivity.",
    "category": "PC Components",
    "price": 199,
    "stock": 0,
    "images": [
      "https://m.media-amazon.com/images/I/61GpY38PAWL._AC_SL1200_.jpg"
    ],
    "brand": "Corsair",
    "__v": 0,
    "keyitem" :20
  }]
  
  export default  products