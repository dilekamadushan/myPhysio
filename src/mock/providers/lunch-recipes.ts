import { Recipe } from '../../models/recipe';

export const RECIPES: Recipe[] = [
  {
    id: "lunch-russian-salad",
    recipeName: 'Russian Salad',
    thumbnailImageUrl: 'assets/imgs/r4_thumb.jpg',
    largeImageUrl: 'assets/imgs/r4.jpg',
    totalTimeInSeconds: 1800,
    calories:300,
    rating: 5,
    numberOfServings: 7,
    ingredients: [
      "carrots",
      "cauliflower",
      "water",
      "onions",
      "garlic cloves",
      "pepper",
      "potatoes",
      "brussels sprouts",
      "salt"
    ]
  },
  {
    id: "lunch-caesar-salad",
    recipeName: 'Caesar Salad',
    thumbnailImageUrl: 'assets/imgs/d1_thumb.jpg',
    largeImageUrl: 'assets/imgs/d1.jpg',
    totalTimeInSeconds: 600,
    calories:600,
    rating: 5,
    numberOfServings: 3,
    ingredients: [
      "lime juice",
      "pepper",
      "vegetable bouillon",
      "sesame oil",
      "salt",
      "carrots",
      "yellow onions",
      "red pepper",
      "garlic",
      "eggs",
      "baby corn"
    ]
  },
  {
    id: "lunch-seafood-rice",
    recipeName: 'Sea food rice',
    thumbnailImageUrl: 'assets/imgs/l1_thumb.jpg',
    largeImageUrl: 'assets/imgs/l1.jpg',
    totalTimeInSeconds: 600,
    calories:1200,
    rating: 5,
    numberOfServings: 3,
    ingredients: [
      "lime juice",
      "pepper",
      "vegetable bouillon",
      "sesame oil",
      "salt",
      "carrots",
      "yellow onions",
      "red pepper",
      "garlic",
      "eggs",
      "baby corn"
    ]
  },
  {
    id: "lunch-spicy-pizza",
    recipeName: 'Spicy Pizza',
    thumbnailImageUrl: 'assets/imgs/r6_thumb.jpg',
    largeImageUrl: 'assets/imgs/r6.jpg',
    totalTimeInSeconds: 1800,
    calories:900,
    rating: 4.5,
    numberOfServings: 5,
    ingredients: [
      "tomato paste",
      "water",
      "celery",
      "corn",
      "shredded cabbage",
      "green beans",
      "pepper"
    ]
  },
  {
    id: "lunch-ice-cream",
    recipeName: 'Ice-cream(desert)',
    thumbnailImageUrl: 'assets/imgs/l2_thumb.jpg',
    largeImageUrl: 'assets/imgs/l2.jpg',
    totalTimeInSeconds: 600,
    calories:200,
    rating: 5,
    numberOfServings: 3,
    ingredients: [
      "chocolate",
      "eggs",
      "wheat",
    ]
  },

  {
    id: "lunch-bbq-delight",
    recipeName: 'BBQ Delight',
    thumbnailImageUrl: 'assets/imgs/r2_thumb.jpg',
    largeImageUrl: 'assets/imgs/r2.jpg',
    totalTimeInSeconds: 900,
    calories:900,
    rating: 4,
    numberOfServings: 8,
    ingredients: [
          "lime juice",
          "pepper",
          "vegetable bouillon",
          "sesame oil",
          "salt",
          "carrots",
          "yellow onions",
          "red pepper",
          "garlic",
          "fish",
          "baby corn"
      ]
  },

  {
    id: "lunch-fast-food",
    recipeName: 'Fast Food',
    thumbnailImageUrl: 'assets/imgs/r7_thumb.jpg',
    largeImageUrl: 'assets/imgs/r7.jpg',
    totalTimeInSeconds: 900,
    calories:700,
    rating: 4.7,
    numberOfServings: 2,
    ingredients: [
          "bay leaves",
          "white onion",
          "tofu",
          "peppercorns",
          "diced tomatoes",
          "cabbage",
          "red wine"
    ]
  }
];
