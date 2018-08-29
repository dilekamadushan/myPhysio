import { Recipe } from '../../models/recipe';

export const RECIPES: Recipe[] = [

  {
    id: "dinner-beetroot_soup",
    recipeName: 'Beetroot Soup',
    thumbnailImageUrl: 'assets/imgs/d2_thumb.jpg',
    largeImageUrl: 'assets/imgs/d2.jpg',
    totalTimeInSeconds: 200,
    calories:200,
    rating: 5,
    numberOfServings: 5,
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
    id: "dinner-caesar-salad",
    recipeName: 'Caesar Salad',
    thumbnailImageUrl: 'assets/imgs/d1_thumb.jpg',
    largeImageUrl: 'assets/imgs/d1.jpg',
    totalTimeInSeconds: 150,
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
    id: "dinner-russian-salad",
    recipeName: 'Russian Salad',
    thumbnailImageUrl: 'assets/imgs/r4_thumb.jpg',
    largeImageUrl: 'assets/imgs/r4.jpg',
    totalTimeInSeconds: 1800,
    calories:175,
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
    id: "dinner-pasta",
    recipeName: 'Pasta',
    thumbnailImageUrl: 'assets/imgs/d3_thumb.jpg',
    largeImageUrl: 'assets/imgs/d3.jpg',
    totalTimeInSeconds: 1800,
    calories:250,
    rating: 3,
    numberOfServings: 7,
    ingredients: [
      "pasta",
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
    id: "dinner-spicy-pizza",
    recipeName: 'Spicy Pizza',
    thumbnailImageUrl: 'assets/imgs/r6_thumb.jpg',
    largeImageUrl: 'assets/imgs/r6.jpg',
    totalTimeInSeconds: 1800,
    calories:300,
    rating: 4.5,
    numberOfServings: 1,
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
    id: "dinner-fast-food",
    recipeName: 'Fast Food',
    thumbnailImageUrl: 'assets/imgs/r7_thumb.jpg',
    largeImageUrl: 'assets/imgs/r7.jpg',
    totalTimeInSeconds: 250,
    calories:700,
    rating: 1,
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
  },
  {
    id: "dinner-bbq-delight",
    recipeName: 'BBQ Delight',
    thumbnailImageUrl: 'assets/imgs/r2_thumb.jpg',
    largeImageUrl: 'assets/imgs/r2.jpg',
    totalTimeInSeconds: 900,
    calories:400,
    rating: 2,
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
];
