import React from "react";
import "./index.css";

const catImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=100&q=80", // Breakfast
  "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/08/vegan-lunch-bowl-portion-1000x1500.jpg", // Vegan
  "https://img.freepik.com/free-photo/fried-meat-served-with-grilled-vegetables-onion-rosemary-sprig_141793-742.jpg?semt=ais_hybrid&w=740&q=80", // Meat
  "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=facearea&w=100&q=80", // Dessert
  "https://c.ndtvimg.com/2023-03/jkjmemsg_lunch-box-_625x300_13_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886", // Lunch
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=100&q=80", // Chocolate
];
const recipeImages = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80", // Burger
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Salmon
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlx_kM-Ts_p37E5d0JvbAC5s9v4VO2O9_H7A&shttps://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-ca18e1d/www.slenderkitchen.com/sites/default/files/styles/featured_1500/public/recipe_images/strawberry_banana_oat_pancakes-3.jpg", // Pancake
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80", // Salad
  "https://gethlth.com/wp-content/uploads/2024/10/Blog-Image-Chicken-Meatballs-with-Cream-Cheese-Sauce.jpg", // Meatballs
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Fruity Pancake
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Chicken Rice
  "https://www.withablast.net/wp-content/uploads/2012/07/Creamy-Chicken-And-Bacon-Pasta-4.jpg", // Creamy Chicken
];
const chefImg = "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=facearea&w=200&q=80"; // Chef
const instagramPosts = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=200&q=80",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=200&q=80"
];
const moreRecipes = [
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80", // Tropical Salad
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80", // Vegan Burger
  "https://asianinspirations.com.au/wp-content/uploads/2018/07/R00763_Salmon-Fried-Rice.jpg", // Japanese Rice
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Vegan Taco
  "https://www.eatthis.com/wp-content/uploads/sites/4/2020/03/honey-mustard-salad-21.jpg", // Chicken Avocado
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80", // Sandwich
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80", // Lettuce Wrap
  "https://theblondcook.com/wp-content/uploads/2020/10/creamy-chicken-and-mushroom-soup-featured.jpg", // Mushroom Soup
];

function Category({ img, label }) {
  return (
    <div style={{textAlign: 'center'}}>
      <img src={img} alt={label} style={{width: 50, height: 50, borderRadius: 12}}/>
      <div>{label}</div>
    </div>
  );
}

function RecipeCard({ img, title, desc }) {
  return (
    <div className="recipe-card">
      <img src={img} alt="" />
      <h4>{title}</h4>
      <p>{desc}</p>
      <div className="meta">30 min · 18 likes</div>
    </div>
  );
}

function HomePage() {
  return (
    <div className="foodieland-root">
      <header className="foodieland-header">
        <h3 className="foodieland-logo">Foodieland</h3>
        <nav className="foodieland-nav">
          <a href="#">Home</a>
          <a href="#">Recipes</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          <a href="#">About us</a>
        </nav>
        <div className="foodieland-social">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/facebook.svg" alt="Facebook" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/twitter.svg" alt="Twitter" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" alt="Instagram" />
          </a>
        </div>
      </header>

      <section className="delicious-section">
        <div>
          <h2>Spicy delicious chicken wings</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus.</p>
          <div style={{margin: "12px 0"}}>
            <span style={{marginRight: 16}}>40 min</span>
            <span style={{marginRight: 16}}>Chicken</span>
            <span style={{marginRight: 16}}>Easy</span>
          </div>
          <button style={{padding: "8px 26px", borderRadius: 8, background: "#222", color: "#fff", border: "none"}}>View Recipe</button>
        </div>
        <div className="chicken-image-container">
          
        </div>
      </section>

      <section className="categories-section">
        <h3 style={{marginLeft: 24}}>Categories</h3>
        <div className="categories-list">
          {["Breakfast", "Vegan", "Meat", "Dessert", "Lunch", "Chocolate"].map((cat, idx) => (
            <Category key={cat} img={catImages[idx]} label={cat}/>
          ))}
        </div>
      </section>

      <section>
        <h3 style={{marginLeft: 24}}>Simple and tasty recipes</h3>
        <div className="recipe-list">
          {[
            ["Big and Juicy Wagyu Beef Cheeseburger", "Classic juicy beef burger."],
            ["Fresh Lime Roasted Salmon", "Roasted salmon with ginger sauce."],
            ["Strawberry Oatmeal Pancake", "Fluffy pancakes & fresh strawberries."],
            ["Fresh and Healthy Mixed Mayonnaise Salad", "Colorful salad for any meal."],
            ["Chicken Meatballs with Cream Cheese", "Creamy chicken meatballs."],
            ["Fruity Pancake with Orange & Blueberry", "Fruit-packed pancakes."],
            ["Best Easy One Pot Chicken & Rice", "Simple chicken & rice meal."],
            ["Creamiest Creamy Chicken and Bacon Pasta", "Creamy chicken bacon pasta."]
          ].map(([title, desc], idx) => (
            <RecipeCard key={title} img={recipeImages[idx]} title={title} desc={desc}/>
          ))}
        </div>
      </section>

      <section className="chef-section">
        <h2>Everyone can be a chef in their own kitchen</h2>
        <p>Learn essential kitchen skills, cook delicious food, and impress family and friends.</p>
        <img src={chefImg} alt="Chef" />
      </section>

      <section>
        <div className="instagram-section">Check out @foodieland on Instagram</div>
        <div className="instagram-list">
          {instagramPosts.map(src => (
            <img
              key={src}
              src={src}
              alt="Instagram"
            />
          ))}
        </div>
      </section>

      <section>
        <h3 style={{marginLeft: 24}}>Try this delicious recipe to make your day</h3>
        <div className="more-recipes-list">
          {[
            "Meal Tropical Fruit Salad with Special Sauce",
            "Big and Juicy Wagyu Beef Cheeseburger",
            "Healthy Japanese Fried Rice with Asparagus",
            "Cauliflower Vegan Vegetarian Taco Meal",
            "Rainbow Chicken Salad with Almond Honey Mustard",
            "Barbecue Soy Sauce Noodles with Chia",
            "Paleo/Low-carb Lettuce Wraps Special",
            "Chicken Mushroom Soup with Mushroom"
          ].map((title, idx) => (
            <RecipeCard key={title} img={moreRecipes[idx]} title={title} desc={""}/>
          ))}
        </div>
      </section>

      <section className="newsletter-section">
        <h2>Deliciousness to your inbox</h2>
        <p>Get weekly recipes and tips delivered straight to your inbox.</p>
        <form style={{marginTop: 18}}>
          <input
            type="email"
            placeholder="Your email address"
          />
          <button>Subscribe</button>
        </form>
      </section>

      <footer className="foodieland-footer">
        <div>Foodieland. &copy; 2025. All rights reserved.</div>
        <nav>
          <a href="#">Site map</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
      </footer>
    </div>
  );
}

export default HomePage;