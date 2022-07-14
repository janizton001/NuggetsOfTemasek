export const restaurantData = [
    {name: "The Deck", 
    distAway: "1.2", 
    address: "2 Computing Drive", 
    image: "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/deck.jpg",
    coordinates: {
      latitude:1.2944739859159593,
      longitude: 103.77254620673452
  } ,
    collectTime: 5,
    stalls: [{
      stallName: "Western Stall",
      image:"https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2021/10/20211004_143126-e1634110824165-1024x870.jpg",
      details:"Deck's Halal Western stall selling mains like Chicken Chop, Fish & Chips and many more!",
      menu:[
        { 
          meal:"Chicken Chop",
          price: 5.00,
          image:"https://s3-ap-southeast-1.amazonaws.com/whyqsg/uploads/stalls/f418da8ee91c5d7341b156eaaa3684ce.png",
          details:"Grilled Chicken Chop with Mushroom Sauce. Default sides are fries and coleslaw."
        },
          
        { 
          meal:"Pork Chop", 
          price:6.00,
          image:"https://storage.googleapis.com/thefatguide/2020/08/No.-1-Western-Food-Pork-Chop-scaled.jpg",
          details:"Grilled Pork Chop with BBQ Sauce. Default sides are fries and coleslaw."
        },
        {   meal:"Fish and Chips",
            price:3.00,
            image:"https://images.lifestyleasia.com/wp-content/uploads/2019/09/30121811/23844558_1872478159732563_2432315721470631419_n.jpg",
            details:" Deep Fried Fish served with Fries. Does not come with additional sides."
        }  
  ]}, {
      stallName: "Japanese Stall",
      image:"https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2021/10/20211004_143146-e1634110004652-1024x778.jpg",
      details:"Japanese Stall selling variety of dons and ramen! Halal options available",
        menu:[
        { 
          meal:"Curry Katsu Don",
          price:4.50,
          image:"https://i8b2m3d9.stackpathcdn.com/wp-content/uploads/2021/12/Katsu_Curry_7011bsq.jpg",
          details:"Fried Chicken doused in Japanese Curry Stew. Served with carrots and potatos."
        },
          
        { 
          meal:"Salmon Don", 
          price:5.00,
          image:"https://media-cdn.tripadvisor.com/media/photo-s/07/55/a6/f8/the-tuckerbox-lunch.jpg",
          details:"Teriyaki Salmon with a generous portion of Rice"
        },
        {   meal:"Sukiyaki Beef Don",
            price:3.00,
            image:"https://glebekitchen.com/wp-content/uploads/2019/02/gyudonbowltop.jpg",
            details:" Top grade Beef slices served with Japanese Rice."
        }  
] },
    {
      stallName: "Pasta Express",
      image:"https://static.wixstatic.com/media/749f99_6222368b68d44ba889582510a2c7b660~mv2.jpg/v1/crop/x_307,y_0,w_514,h_514/fill/w_250,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Deck.jpg",
      details:"DIY Pasta! We have curated a list of the most popular options, but feel free to add/remove items in the remarks section.",
      menu:[
        { 
          meal:"Beefy Tomato",
          price: 4.50,
          image:"https://cdn.foodadvisor.com.sg/3/400/ycqwu/vt-iw/Fhetksji/5368045.zfw/bolognese.jpg",
          details:"Tomato based pasta with minced beef, spinach and 1 soude vide egg"
        },
          
        { 
          meal:"Smoked Duck Aglio Olio", 
          price:5.00,
          image:"https://cdn.foodadvisor.com.sg/3/400/ycqwu/vt-iw/Fhetksji/5368047.zfw/smoked-duck-aglio-olio.jpg",
          details:"Aglio Olio base with Smoked Duck and Spinach, topped with 1 sous vide egg"
        },
        {   meal:"Creamy Dreamy",
            price: 6.00,
            image:"https://cdn.foodadvisor.com.sg/3/400/ycqwu/vt-iw/Fhetksji/5359518.zfw/carbonara.jpg",
            details:" Cream sauce pasta with sous vide egg, bacon and mushrooms."
        }  
] 
  }
]}, 
    {name: "Frontier (Science)", 
    distAway: "1.2", 
    address: "12 Science Drive 2", 
    coordinates: {
      latitude:1.2965688314100976, 
      longitude: 103.78034874758642
  },
    image: "https://uci.nus.edu.sg/oca/wp-content/uploads/sites/9/2018/05/Frontier-Canteen-768x513.jpg",
    collectTime: 5,
    stalls: [{
      stallName: "Chicken Rice Stall",
      image:"https://2.bp.blogspot.com/-MSbL-yCrfb4/V9P5wgvfIpI/AAAAAAAADTI/TlkRHqPnQXgTrqDbkfR1BiRuykW3XJ7QwCEw/s500/IMG_2578.jpg",
      details:"Deck's Signature Chicken Rice stall selling not only chicken rice but other roasted delights!",
      menu:[
      { 
        meal:"Steam Chicken Rice",
        price:3.00,
        image:"https://static.thehoneycombers.com/wp-content/uploads/sites/2/2020/06/chicken-rice-900x643.jpg",
        details:"Steamed Chicken Rice description"
      },
        
      { 
        meal:"Roasted Chicken Rice", 
        price:3.00,
        image:"https://www.crushpixel.com/big-static18/preview4/roasted-chicken-rice-from-hawker-2998114.jpg",
        details:"Five 100% Malaysian Chicken Nuggies, Delicious"
      },
      {   meal:"Special Chicken Nuggies",
          price:3.00,
          image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
          details:" Top grade NUGGIES from South Alabama, Chef's Recommendation"
      }  
  ]}, {stallName: "Uncle Penyet",
  image:"https://iggybearadventureshome.files.wordpress.com/2019/05/img_9147.jpg?w=750",
  details:"Well known for their Ayam Penyet and Chicken Curry! All Halal ",
  menu:[
  { 
    meal:"Ayam Penyet",
    price:4.50,
    image:"https://cdn.shopify.com/s/files/1/0501/2638/9397/products/dory_250x250@2x.jpg?v=1606062889",
    details:"Deep Fried Chicken with crispy skin, served with rice."
  },
    
  { 
    meal:"Chicken Curry Stew", 
    price:5.00,
    image:"https://cdn.shopify.com/s/files/1/0501/2638/9397/products/currystew_1125x.jpg?v=1606723975",
    details:"Curry stew with Chicken drumstick inside. Not served with Rice."
  },
  {   meal:"Nasi Dory Penyet",
      price:3.00,
      image:"https://cdn.shopify.com/s/files/1/0501/2638/9397/products/ayam_250x250@2x.jpg?v=1605990639",
      details:"Deep Fried Chicken with crispy skin, served with rice."
  }  
] 
  },
  {stallName: "Pasta Express",
  image:"https://static.wixstatic.com/media/749f99_50c53bfba9c44fb495c5439af768672b~mv2.jpg/v1/crop/x_620,y_0,w_2246,h_2245/fill/w_250,h_250,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Frontier.jpg",
  details:"DIY Pasta! We have curated a list of the most popular options, but feel free to add/remove items in the remarks section.",
  menu:[
  { 
    meal:"Beefy Tomato",
    price: 4.50,
    image:"https://cdn.foodadvisor.com.sg/3/400/ycqwu/vt-iw/Fhetksji/5368045.zfw/bolognese.jp",
    details:"Tomato based pasta with beef, onions and cheery tomatos"
  },
    
  { 
    meal:"Smoked Duck Aglio Olio", 
    price:5.00,
    image:"https://cdn.foodadvisor.com.sg/3/400/ycqwu/vt-iw/Fhetksji/5368047.zfw/smoked-duck-aglio-olio.jpg",
    details:"Aglio Olio base with Smoked Duck and Spinach, topped with 1 sous vide egg"
  },
  {   meal:"Creamy Dreamy",
      price: 6.00,
      image:"https://cdn.foodadvisor.com.sg/3/400/ycqwu/vt-iw/Fhetksji/5359518.zfw/carbonara.jpg",
      details:" Cream sauce pasta with sous vide egg, spinach and chicken breast."
  }  
] 
  }
  ]},
    {name: "Supper Stretch", 
    distAway: "1.2", 
    address: "15 - 22 Clementi Rd", 
    coordinates: {
      latitude:1.2930616477860788, 
      longitude:  103.76873715064347
    } ,
    image: "https://images.squarespace-cdn.com/content/v1/5d384dbfb84cd4000124c0b8/1582555481024-HRJETA1GDVLUAGOXIW0D/hpb2.jpg?format=1000w",
    collectTime: 5,
    stalls: [{
      stallName: "Al Amaan's Restaurant",
      image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
      details:"Deck's Signature Chicken Rice stall selling not only chicken rice but other roasted delights!",
      menu:[
      { 
        meal:"Maggi Goreng",
        price:5.00,
        image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
        details:"Steamed Chicken Rice description"
      },
        
      { 
        meal:"Butter Chicken with 2 Naan", 
        price:3.00,
        image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
        details:"Five 100% Malaysian Chicken Nuggies, Delicious"
      },
      {   meal:"Kampung Fried Rice",
          price:3.00,
          image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
          details:" Top grade NUGGIES from South Alabama, Chef's Recommendation"
      }  
  ]}, {stallName: "Hong Kong Kitchen",
  image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
  details:"Japanese Stall selling variety of dons, ramen and dons! Halal options available",
  menu:[
  { 
    meal:"Gong Pao Chicken Rice",
    price:4.50,
    image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
    details:"Fried Chicken doused in Japanese Curry Stew. Served with carrots and potatos."
  },
    
  { 
    meal:"Sweet and Sour Pork Rice", 
    price:5.00,
    image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
    details:"Teriyaki Salmon with a generous portion of Rice"
  },
  {   meal:"Beef Hor Fun",
      price:3.00,
      image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
      details:" Top grade Beef slices served in Clear Shoyu Broth."
  }  
] 
  },
  {stallName: " Fong Seng Nasi Lemak",
  image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
  details:"DIY Pasta! We have curated a list of the most popular options, but feel free to add/remove items in the remarks section.",
  menu:[
  { 
    meal:"Beefy Tomato",
    price: 4.50,
    image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
    details:"Tomato based pasta with beef, onions and cheery tomatos"
  },
    
  { 
    meal:"Smoked Duck Aglio Olio", 
    price:5.00,
    image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
    details:"Aglio Olio base with Smoked Duck and Spinach, topped with 1 sous vide egg"
  },
  {   meal:"Creamy Dreamy",
      price: 6.00,
      image:"https://www.seekpng.com/png/detail/237-2372204_gold-nugget-png-chicken-nuggets-four-chicken-breast.png",
      details:" Cream sauce pasta with sous vide egg, spinach and chicken breast."
  }  
] 
  }
]}]




 