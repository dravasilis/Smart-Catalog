import { Injectable,OnInit,OnDestroy } from '@angular/core';
import { IContent } from '../interfaces/IContent';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  constructor(
    private route: ActivatedRoute
  ) { }
  selected:IContent | null = null;
  params = '';
  catalog = '';
  buttons:string[] = []; 
  category: IContent[] = [];
  //THE HOTEL buttons
  private hotelButtons = ['Halkidiki','Hotel Melissanthi']
  //THE MENU buttons
  private menuButtons = ['BREAKFAST','SALADS','SNACKS','PIZZA 21cm','PIZZA 38cm','PIZZA Low fat suggestions 21cm','PIZZA Low fat suggestions 38cm','PASTA','DESSERTS']
  //BEVERAGES buttons
  private beveragesButtons = ['Greek Coffee','Filter','Espresso','Cappuccino','Instant coffee','Chocolate','Tea','Milkshakes,Icechakes,Ice-creams','Smoothies','Juices','Refreshments','Water']
  //HOTEL CONTENT
  hotels:IContent[][] = [
      [{
      name: 'Halkidiki',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206065805_product.jpg?alt=media&token=f37367b5-50c9-4087-9127-b5ea7384c5ea',
      title: 'Map'
    },
    {
      name: 'Halkidiki',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205702041_product.jpg?alt=media&token=e324a934-2c43-4ee3-a5ff-3bb41e7f44e6',
      title: 'Beach Bars'
    },
    {
      name: 'Halkidiki',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582206110037_product.jpg?alt=media&token=907b3bf0-f30f-4451-b107-856cb2fb867c',
      title: 'Events-Concerts-Theatre',
      subtitle: 'Sani JAZZ festival 10-20 June'
    }],
     [{
      name: 'Hotel Melissanthi',
      image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205568707_product.jpg?alt=media&token=4ed00dd0-22fd-42b7-995f-fc0a0e91dfa6',
      title:'Activities for children',
      subtitle: 'Theatre for kids everyday 19.00 a.m.'
    },
    {
      name: 'Hotel Melissanthi',
      image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205494334_product.jpg?alt=media&token=97bd1571-4df7-4ca3-9bdf-43a475809e27',
      title:'Fitness Activities',
      subtitle: 'Everyday Yoga 10 a.m.'
    },
    {
      name: 'Hotel Melissanthi',
      image:'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/products%2F__business_legacy_39%2F1582205474033_product.jpg?alt=media&token=ee2a2f89-c6c5-4d89-9f2c-94f01d3b873d',
      title:'Beach'
    }] 
  ]
  //MENU CONTENT
  menu:IContent[][] =[
    //BREAKFAST
    [{
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6647_thumb.jpg?alt=media',
      title: 'Yoghurt 2%',
      price: '4.9€',
      subtitle: 'with cereal, all bran biscuits fruit and strawberry jam'
    },
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6657_thumb.jpg?alt=media',
      title: 'Pancake bougatsa',
      price: '4.2€',
      subtitle: 'with bougatsa cream, powdered sugar and cinnamon'
    },
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6648_thumb.jpg?alt=media',
      title: 'American breakfast',
      price: '5.8€',
      subtitle: 'with fried eggs, bacon and french fries on pizza bread'
    },
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6649_thumb.jpg?alt=media',
      title: 'Pancake',
      price: '7.9€',
      subtitle: 'with nutella and fresh fruit'
    },
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6650_thumb.jpg?alt=media',
      title: 'Pancake',
      price: '7.2€',
      subtitle: 'with creme patissiere and fresh fruit'
    },
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6651_thumb.jpg?alt=media',
      title: 'Pancake Oreo',
      price: '9.6€',
      subtitle: 'Pancake with crushed oreo, in profiterole sauce with fresh patisserie and whole Oreo cookies'
    },
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6652_thumb.jpg?alt=media',
      title: 'Pancake salty',
      price: '9.8€',
      subtitle: 'Pancake salty mousse with cream cheese, bacon, fried egg and hollandaise sauce '
    }, 
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6653_thumb.jpg?alt=media',
      title: 'Croissant',
      price: '4.8€',
      subtitle: 'Croissant with fresh patisserie, sour cherries, berries and lines of white chocolate nutella'
    }, 
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6654_thumb.jpg?alt=media',
      title: 'Froutalia-Andros Island Omelet',
      price: '8.4€',
      subtitle: 'with soutzouki(spiced greek sausage), peppers and fried fries'
    }, 
    {
      name: 'BREAKFAST',
      image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6655_thumb.jpg?alt=media',
      title: 'CHEESE OMELET',
      price: '5.5€',
      subtitle: 'with cheese,peppers and tomatoes confit'
    }, 
    
      
    ],
    //SALADS
    [
      {
        name: 'SALADS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6658_thumb.jpg?alt=media',
        title: 'Padrino',
        price: '10€',
        subtitle: 'with mesclun, grilled halloumi cheese, sunflower seeds, strawberries, sundried tomato, roasted mushroom, chips, prosciutto and mango cream'
      },
      {
        name: 'SALADS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6659_thumb.jpg?alt=media',
        title: 'Caesar',
        price: '11€',
        subtitle: 'Caesar with lollo verde, iceberg, chicken, bacon, graviera cheese and ceasar sauce'
      },
      {
        name: 'SALADS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6660_thumb.jpg?alt=media',
        title: 'Greek',
        price: '10€',
        subtitle: 'Greek with cherry tomatoes, olives, feta cheese, onions, peppers, cucumber'
      },
      {
        name: 'SALADS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6661_thumb.jpg?alt=media',
        title: 'COPA SALAD',
        price: '10€',
        subtitle: 'spinach with pear, rocket, crisp copa, pumpkin seed, pistachio,gorgonzola and vinaigrette of dried fruit'
      },
      {
        name: 'SALADS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6662_thumb.jpg?alt=media',
        title: 'SALAD BURATA',
        price: '11€',
        subtitle: 'Fresh burratas on toasted bread with basil pesto, colorful salad with tomatoes, sun-dried tomatoes, nuts and salt bloom.'
      },
    ],
    //SNACKS
    [
      {
        name: 'SNACKS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6663_thumb.jpg?alt=media',
        title: 'Club Sandwich',
        price: '7,9€',
        subtitle: 'bacon, lettuce, tomato, mayonnaise, potatoes'
      },
      {
        name: 'SNACKS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6664_thumb.jpg?alt=media',
        title: 'HOT DOG',
        price: '8.9€',
        subtitle: '250g. roasted sausage with caramelized onion, parmesan cream, bacon, potatoes fried in fluffy baguette'
      },
      {
        name: 'SNACKS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6665_thumb.jpg?alt=media',
        title: 'Beef burger',
        price: '10€',
        subtitle: 'Beef burger with grilled halloumi cheese, caramelized onions, sweet gorgonzola cream, bacon, tomato and potatoes'
      },
      {
        name: 'SNACKS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6666_thumb.jpg?alt=media',
        title: 'Chicken burger',
        price: '10.4€',
        subtitle: 'Chicken burger with grilled talagani cheese in grilled Porto bello, bacon and aioli sauce'
      },
      {
        name: 'SNACKS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6667_thumb.jpg?alt=media',
        title: 'Salmon CLUB',
        price: '10€',
        subtitle: 'Salmon CLUB with citrus marinade in dill cream cheese, rucola salad and mesclun salad'
      },
      {
        name: 'SNACKS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6668_thumb.jpg?alt=media',
        title: 'CHICKEN NUGGETS with fried potatoes',
        price: '6.5€',
        subtitle: 'Chicken nuggets, breaded with crispy fries and ketchup'
      },
      {
        name: 'SNACKS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6669_thumb.jpg?alt=media',
        title: 'Mini Burgers',
        price: '9.6€',
        subtitle: 'Manzo con crema di gorgonzola, pollo con salsa aioli, mini kebab di verdure con salsa rosolata'
      },
    ],
    //PIZZA 21cm
    [
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6684_thumb.jpg?alt=media',
        title: 'Ragby with kasseri cheese',
        price: '5.1€',
        subtitle: 'Mozzarela, ragby ham, kasseri cheese and caramelised onions'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6685_thumb.jpg?alt=media',
        title: 'Smoked pork and graviera cheese',
        price: '5.8€',
        subtitle: 'San marzano sauce, smoked pork, mozzarella, tomato confit and graviera cheese'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6686_thumb.jpg?alt=media',
        title: 'Anevato Cheese',
        price: '5.2€',
        subtitle: 'San marzano sauce, mozzarella, piquillo peppers and anevato cheese'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6687_thumb.jpg?alt=media',
        title: 'Katiki cheese and Sandrinella',
        price: '5.6€',
        subtitle: 'San marzano sauce, sardinella (smoked pork) and katiki cheese'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6688_thumb.jpg?alt=media',
        title: 'Soutzouki Giozluk',
        price: '5.2€',
        subtitle: 'San marzano sauce, mozzarella, beef soutzouki and kopanisti of Myconos'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6689_thumb.jpg?alt=media',
        title: 'Buffalo Sausage',
        price: '5.2€',
        subtitle: 'San marzano sauce, mozzarella, buffalo sausage and kefalograviera cheese'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6690_thumb.jpg?alt=media',
        title: 'Lahmajoun',
        price: '5.6€',
        subtitle: 'Beef and pork ground mixture, paprika, yoghurt and lemon'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6691_thumb.jpg?alt=media',
        title: 'Sausages',
        price: '5.8€',
        subtitle: 'San marzano sauce, beef, mozzarela with matur bugion and prosciutto'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6692_thumb.jpg?alt=media',
        title: 'White Truffle',
        price: '5.9€',
        subtitle: 'White truffle cream, mozzarella, san marzano drops, prosciutto, rocket and parmesan'
      },
      {
        name: 'PIZZA 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6692_thumb.jpg?alt=media',
        title: 'White Truffle',
        price: '5.9€',
        subtitle: 'White truffle cream, mozzarella, san marzano drops, prosciutto, rocket and parmesan'
      }
    ],
    //PIZZA 38cm
    [
      {
        name: 'PIZZA 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6702_thumb.jpg?alt=media',
        title: 'Margarita Feta',
        price: '8.9€',
        subtitle: 'San marzano sauce, basil, mozzarella, feta cheese'
      },
      {
        name: 'PIZZA 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6711_thumb.jpg?alt=media',
        title: 'Buffalo Sausage',
        price: '10.4€',
        subtitle: 'San marzano sauce, mozzarella, buffalo sausage and kefalograviera cheese'
      },
      {
        name: 'PIZZA 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6712_thumb.jpg?alt=media',
        title: 'Lahmajoun',
        price: '12.8€',
        subtitle: 'Beef and pork ground mixture, paprika, yoghurt and lemon'
      },
      {
        name: 'PIZZA 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6713_thumb.jpg?alt=media',
        title: 'Sausages',
        price: '11.8€',
        subtitle: 'San marzano sauce, beef, mozzarela with matur bugion and prosciutto'
      },
      {
        name: 'PIZZA 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6714_thumb.jpg?alt=media',
        title: 'White Truffle',
        price: '11.9€',
        subtitle: 'White truffle cream, mozzarella, san marzano drops, prosciutto, rocket and parmesan'
      },
      {
        name: 'PIZZA 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6715_thumb.jpg?alt=media',
        title: 'Pastourma without Tsimeni',
        price: '13.0€',
        subtitle: 'Pastourma, mozzarella, porto bello mushrooms, tomato confit and ladotyri cheese'
      },
      {
        name: 'PIZZA 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6716_thumb.jpg?alt=media',
        title: 'Nutella Oreo',
        price: '13.9€',
        subtitle: 'Mozzarella, nutella and oreo biscuits'
      }
    ],
    //PIZZA low fat suggestions 21cm
    [
      {
        name: 'PIZZA Low fat suggestions 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6724_thumb.jpg?alt=media',
        title: 'Buffalo',
        price: '5.2€',
        subtitle: 'mozzarella with basil pesto, buffalo mozzarellini, cherry tomatoes and arugola with fresh cherry tomatoes'
      },
      {
        name: 'PIZZA Low fat suggestions 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6725_thumb.jpg?alt=media',
        title: 'Grilled Chicken and Peppers',
        price: '6.9€',
        subtitle: 'San marzano sauce, mozzarella, grilled chicken, colored peppers  and fresh rocket'
      },
      {
        name: 'PIZZA Low fat suggestions 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6726_thumb.jpg?alt=media',
        title: 'Batzos Cheese',
        price: '4.8€',
        subtitle: 'San marzano sauce, baked turkey, mozzarella, batzo cheese and apple lemon honey chutney'
      },
      {
        name: 'PIZZA Low fat suggestions 21cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6727_thumb.jpg?alt=media',
        title: 'Vegetables with Rosolata cream',
        price: '4.9€',
        subtitle: 'Rosolata cream, grilled vegetables and apple olive honey chutney'
      }
    ],
    //PIZZA low fat suggestions 38cm
    [
      {
        name:'PIZZA Low fat suggestions 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6728_thumb.jpg?alt=media',
        title: 'Grilled Chicken and Peppers',
        price: '13.5€',
        subtitle: 'San marzano sauce, mozzarella, grilled chicken, colored peppers  and fresh rocket'
      },
      {
        name:'PIZZA Low fat suggestions 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6729_thumb.jpg?alt=media',
        title: 'Batzos Cheese',
        price: '10.4€',
        subtitle: 'San marzano sauce, baked turkey, mozzarella, batzo cheese and apple lemon honey chutney'
      },
      {
        name:'PIZZA Low fat suggestions 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6730_thumb.jpg?alt=media',
        title: 'Vegetables with Rosolata cream',
        price: '10.8€',
        subtitle: 'Rosolata cream, grilled vegetables and apple olive honey chutney'
      },
      {
        name:'PIZZA Low fat suggestions 38cm',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6731_thumb.jpg?alt=media',
        title: 'Buffalo',
        price: '11.1€',
        subtitle: 'mozzarella with basil pesto, buffalo mozzarellini, cherry tomatoes and arugola with fresh cherry tomatoes'
      },
    ],
    //PASTA
    [
      {
        name: 'PASTA',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6676_thumb.jpg?alt=media',
        title: 'Tagliatelle with cream cheese',
        price: '9.0€',
        subtitle: 'Tagliatelle with cream cheese, poached egg yolk, chips from cold cuts and Amfilochia pecorino'
      },
      {
        name: 'PASTA',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6677_thumb.jpg?alt=media',
        title: 'MALFADINE Bolognese',
        price: '9.8€',
        subtitle: 'MALFADINE with Bolognese sauce, feta cheese and chives'
      },
      {
        name: 'PASTA',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6678_thumb.jpg?alt=media',
        title: 'Linguine with fresh mushrooms',
        price: '9.5€',
        subtitle: 'Linguine with fresh mushrooms, porcini, Padano grana flakes and drops of white truffle oil.'
      },
      {
        name: 'PASTA',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6679_thumb.jpg?alt=media',
        title: 'Fusili gluten free with grilled vegetables',
        price: '11€',
        subtitle: '(eggplant, zucchini, onion, peppers) baby broccoli, cumin, curry and coconut cream'
      },
      {
        name: 'PASTA',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6680_thumb.jpg?alt=media',
        title: 'Potato gnocchi with bacon',
        price: '10€',
        subtitle: 'Potato gnocchi with bacon , fresh mushrooms, cream, truffle paste, parsley and Crete Gruyere'
      }

    ],
    //DESSERTS
    [
      {
        name: 'DESSERTS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6732_thumb.jpg?alt=media',
        title: 'MILLEFEUILLE',
        price: '6.4€',
        subtitle: 'Millefeuille with butter  patisserie  leaves and caramel with salt flower'
      },
      {
        name: 'DESSERTS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6733_thumb.jpg?alt=media',
        title: 'American Cheesecake',
        price: '5.8€',
        subtitle: 'with strawberry puree and fresh lime'
      },
      {
        name: 'DESSERTS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6734_thumb.jpg?alt=media',
        title: 'Profiterole',
        price: '5.9€'
      },
      {
        name: 'DESSERTS',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6735_thumb.jpg?alt=media',
        title: 'Tiramisu',
        price: '5.8€',
        subtitle: 'Tiramisu in a broken espresso croissant'
      },
    ]
  ] 
  beverages:IContent[][] =[
    //Greek Coffee
    [
      {
        name: 'Greek Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6818_thumb.jpg?alt=media',
        title: 'Greek coffee',
        price: '2.9€'
      },
      {
        name: 'Greek Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6818_thumb.jpg?alt=media',
        title: 'Greek double coffee',
        price: '3.4€'
      },
      {
        name: 'Greek Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6818_thumb.jpg?alt=media',
        title: 'Greek coffee Ciciliano',
        price: '3.1€'
      },
      {
        name: 'Greek Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6818_thumb.jpg?alt=media',
        title: 'Greek coffee Chios breathe',
        price: '3.7€',
        subtitle: 'with mastiha from Chios island'
      },
      {
        name: 'Greek Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6818_thumb.jpg?alt=media',
        title: 'Greek coffee decaf',
        price: '2.9€'
      }
    ],
    //Filter
    [
      {
        name: 'Filter',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6823_thumb.jpg?alt=media',
        title: 'Filter coffee',
        price: '3.8€'
      },
      {
        name: 'Filter',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6823_thumb.jpg?alt=media',
        title: 'Filter coffee decaf',
        price: '3.8€'
      },
      {
        name: 'Filter',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6825_thumb.jpg?alt=media',
        title: 'с ирландско уиски',
        price: '5€',
        subtitle: 'with Irish whiskey'
      },
      {
        name: 'Filter',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6825_thumb.jpg?alt=media',
        title: 'Italian coffee',
        price: '5€',
        subtitle: 'with Amaretto'
      },
      {
        name: 'Filter',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6825_thumb.jpg?alt=media',
        title: 'Mediterranean coffee',
        price: '5.5€',
        subtitle: 'with nastiha and triple sec'
      },
    ],
    //Espresso
    [
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6828_thumb.jpg?alt=media',
        title: 'Espresso',
        price: '3€'
      },
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6829_thumb.jpg?alt=media',
        title: 'Espresso doppio',
        price: '4€'
      },
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6828_thumb.jpg?alt=media',
        title: 'Espresso decaf',
        price: '3€'
      },
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6831_thumb.jpg?alt=media',
        title: 'Espresso macchiato',
        price: '3.2€'
      },
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6832_thumb.jpg?alt=media',
        title: 'Espresso correto',
        price: '3.7€'
      },
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6833_thumb.jpg?alt=media',
        title: 'Espresso freddo',
        price: '4€'
      },
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6834_thumb.jpg?alt=media',
        title: 'Affogato',
        price: '4.5€'
      },
      {
        name:'Espresso',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6835_thumb.jpg?alt=media',
        title: 'Espresso Padrino',
        price: '3.7€'
      }
      
    ],
    //Cappuccino
    [
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6836_thumb.jpg?alt=media',
        title: 'Cappuccino',
        price: '4.2€'
      },
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6837_thumb.jpg?alt=media',
        title: 'Cappuccino doppio',
        price: '5€'
      },
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6836_thumb.jpg?alt=media',
        title: 'Cappuccino decaf',
        price: '4.2€'
      },
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6837_thumb.jpg?alt=media',
        title: 'Cappuccino latte',
        price: '4.2€'
      },
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6840_thumb.jpg?alt=media',
        title: 'Cappuccino Cappuccino con panna',
        price: '4.3€'
      },
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6841_thumb.jpg?alt=media',
        title: 'Cappuccino freddo',
        price: '4.2€'
      },
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6841_thumb.jpg?alt=media',
        title: 'Moccachino',
        price: '4.7€',
        subtitle: 'hot,cold'
      },
      {
        name: 'Cappuccino',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6841_thumb.jpg?alt=media',
        title: 'Cappuccino Caramel',
        price: '4.7€',
        subtitle: 'hot,cold'
      },
    ],
    //Instant Coffee
    [
      {
        name: 'Instant Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6844_thumb.jpg?alt=media',
        title: 'Instant Coffee',
        price: '3.9€',
        subtitle: 'hot,cold'
      },
      {
        name: 'Instant Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6844_thumb.jpg?alt=media',
        title: 'Instant Coffee decaf',
        price: '3.9€'
      },
      {
        name: 'Instant Coffee',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6846_thumb.jpg?alt=media',
        title: 'Instant Coffee decaf',
        price: '4.7€',
        subtitle: 'with vanilla icecream'
      },
    ],
    //Chocolate
    [ 
       {
          name: 'Chocolate',
          image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6847_thumb.jpg?alt=media',
          title: 'Chocolate',
          price: '4.2€',
          subtitle: 'hot,cold'
        },
        {
          name: 'Chocolate',
          image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6848_thumb.jpg?alt=media',
          title: 'Chocolate Viennois',
          price: '4.5€' 
        },
        {
          name: 'Chocolate',
          image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6847_thumb.jpg?alt=media',
          title: 'Chocolate Don Vito',
          price: '5€',
          subtitle: 'with Amaretto and crocan'
        },
        {
          name: 'Chocolate',
          image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6850_thumb.jpg?alt=media',
          title: 'Chocolate Lila pause',
          price: '5€',
          subtitle: 'with strawberry puree'
        },
        {
          name: 'Chocolate',
          image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6851_thumb.jpg?alt=media',
          title: 'Chocolate Citrus spirit',
          price: '5€',
          subtitle: 'with ginger and orange twister'
        },
        {
          name: 'Chocolate',
          image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6848_thumb.jpg?alt=media',
          title: 'Chocolate Coconut Breeze',
          price: '5€',
          subtitle: 'with coconut puree'
        },
        {
          name: 'Chocolate',
          image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6853_thumb.jpg?alt=media',
          title: 'Moccachino(hot,cold)',
          price: '4.5€'
        },


          
    ],
    //Tea
    [
      {
        name: 'Tea',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6854_thumb.jpg?alt=media',
        title: 'Tea flavors* hot',
        price: '3.6€',
        subtitle: '* Ask for special form'
      },
      {
        name: 'Tea',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6855_thumb.jpg?alt=media',
        title: 'Tea flavors* cold',
        price: '3.7€',
        subtitle: '* Ask for special form'
      },
    ],
    //Milskshakes
    [
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6856_thumb.jpg?alt=media',
        title: 'Milkshake vanillia',
        price: '5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6865_thumb.jpg?alt=media',
        title: '2 scoops Ice cream',
        price: '5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6857_thumb.jpg?alt=media',
        title: 'Milkshake chocolate',
        price: '5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6858_thumb.jpg?alt=media',
        title: 'Milkshake strawberry',
        price: '5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6859_thumb.jpg?alt=media',
        title: 'Milkshake Omerta',
        price: '5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6860_thumb.jpg?alt=media',
        title: 'Iceshake strawberry',
        price: '5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6861_thumb.jpg?alt=media',
        title: 'Iceshake lemon',
        price: '5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6861_thumb.jpg?alt=media',
        title: 'Iceshake lemon with tequila',
        price: '5.5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6861_thumb.jpg?alt=media',
        title: 'Iceshake lemon with mastiha Chios',
        price: '5.5€'
      },
      {
        name:'Milkshakes,Icechakes,Ice-creams',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6864_thumb.jpg?alt=media',
        title: 'Iceshake strawberry with mint leaves',
        price: '5.5€'
      }
    ],
    //Smoothies
    [
      {
        name: 'Smoothies',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6866_thumb.jpg?alt=media',
        title: 'Green mile',
        price: '5.7€',
        subtitle: 'yogurt, rucola, apple, orange juice, banana, celery, ginger'
      },
      {
        name: 'Smoothies',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6867_thumb.jpg?alt=media',
        title: 'Morning Glory',
        price: '5.7€',
        subtitle: 'yogurt, apple, pear, strawberries, linseed'
      },
      {
        name: 'Smoothies',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6868_thumb.jpg?alt=media',
        title: 'Jump-Start',
        price: '5.7€',
        subtitle: 'yogurt, strawberries, banana, oats, honey'
      },
      {
        name: 'Smoothies',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6869_thumb.jpg?alt=media',
        title: 'Peanuts butter',
        price: '5.7€',
        subtitle: 'milk, banana, peanuts butter, cinnamon, honey'
      },
    ],
    //Juices
    [
      {
        name: 'Juices',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6870_thumb.jpg?alt=media',
        title: 'Fresh orange juice',
        price: '4.5€'
      },
      {
        name: 'Juices',
        image: 'https://firebasestorage.googleapis.com/v0/b/smart-catalog-a2538.appspot.com/o/photos_legacy%2F__legacy_product_6871_thumb.jpg?alt=media',
        title: 'Homemade lemonade',
        price: '5€'
      },

    ]

  ]
  //BEVERAGES CONTENT
 
  setSelected(selected:IContent){
    this.selected = selected; 
  }
  setParams(params:string){
    this.params = params;
  } 
  setCatalogSelected(catalog:string){
    this.catalog = catalog;
    if(catalog === 'THE HOTEL'){
      this.buttons = this.hotelButtons
    }
    else if(catalog === 'MENU'){
      this.buttons = this.menuButtons
    }
    else if(catalog === 'BEVERAGES'){
      this.buttons = this.beveragesButtons
    }
  }
  setCategory(index:number){
    if(this.catalog === 'THE HOTEL'){
      this.category = this.hotels[index];
    }
    if(this.catalog === 'MENU'){
       this.category = this.menu[index]
    }
    if(this.catalog === 'BEVERAGES'){
      this.category = this.beverages[index]
   }
   
  }
}
