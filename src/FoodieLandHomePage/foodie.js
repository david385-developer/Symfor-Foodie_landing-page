import React, { useState } from "react";
import "./index.css";

const testimonials = [
  {
    img: "https://i.imgur.com/6Xy0QfM.png",
    user: "@foodlover_jane",
    text: "Absolutely loved the chicken wings recipe! So easy and delicious. 😍🍗"
  },
  {
    img: "https://i.imgur.com/4M34hi2.png",
    user: "@chef_mike",
    text: "The vegan lunch bowl was a hit at my dinner party. Thanks Foodieland! 🥗🌱"
  },
  {
    img: "https://i.imgur.com/1Q9Z1Zm.png",
    user: "@sweettooth_amy",
    text: "Desserts from Foodieland are always a treat. The chocolate cake was divine! 🍫🎂"
  }
];
const catImages = [
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=100&q=80",
  "https://cdn77-s3.lazycatkitchen.com/wp-content/uploads/2017/08/vegan-lunch-bowl-portion-1000x1500.jpg",
  "https://img.freepik.com/free-photo/fried-meat-served-with-grilled-vegetables-onion-rosemary-sprig_141793-742.jpg?semt=ais_hybrid&w=740&q=80",
  "https://images.unsplash.com/photo-1505250469679-203ad9ced0cb?auto=format&fit=facearea&w=100&q=80",
  "https://c.ndtvimg.com/2023-03/jkjmemsg_lunch-box-_625x300_13_March_23.jpg?im=FaceCrop,algorithm=dnn,width=1200,height=886",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=facearea&w=100&q=80"
];
const recipeImages = [
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlx_kM-Ts_p37E5d0JvbAC5s9v4VO2O9_H7A&shttps://cdn-aboak.nitrocdn.com/QJsLnWfsWAiuukSIMowyVEHtotvSQZoR/assets/images/optimized/rev-ca18e1d/www.slenderkitchen.com/sites/default/files/styles/featured_1500/public/recipe_images/strawberry_banana_oat_pancakes-3.jpg",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  "https://gethlth.com/wp-content/uploads/2024/10/Blog-Image-Chicken-Meatballs-with-Cream-Cheese-Sauce.jpg",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://www.withablast.net/wp-content/uploads/2012/07/Creamy-Chicken-And-Bacon-Pasta-4.jpg"
];
const chefImg = "https://thumbs.dreamstime.com/b/chef-portrait-23088085.jpg";
const moreRecipes = [
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=400&q=80",
  "https://asianinspirations.com.au/wp-content/uploads/2018/07/R00763_Salmon-Fried-Rice.jpg",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://www.eatthis.com/wp-content/uploads/sites/4/2020/03/honey-mustard-salad-21.jpg",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
  "https://theblondcook.com/wp-content/uploads/2020/10/creamy-chicken-and-mushroom-soup-featured.jpg"
];
const simpleTastyRecipes = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    desc: "Classic juicy beef burger.",
    img: recipeImages[0],
    time: "30 min",
    category: "Meat",
    icon: "🍔"
  },
  {
    title: "Fresh Lime Roasted Salmon",
    desc: "Roasted salmon with ginger sauce.",
    img: recipeImages[1],
    time: "25 min",
    category: "Fish",
    icon: "🐟"
  },
  {
    title: "Strawberry Oatmeal Pancake",
    desc: "Fluffy pancakes & fresh strawberries.",
    img: recipeImages[2],
    time: "20 min",
    category: "Breakfast",
    icon: "🥞"
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    desc: "Colorful salad for any meal.",
    img: recipeImages[3],
    time: "15 min",
    category: "Salad",
    icon: "🥗"
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    desc: "Creamy chicken meatballs.",
    img: recipeImages[4],
    time: "35 min",
    category: "Meat",
    icon: "🍗"
  },
  {
    title: "Fruity Pancake with Orange & Blueberry",
    desc: "Fruit-packed pancakes.",
    img: recipeImages[5],
    time: "18 min",
    category: "Breakfast",
    icon: "🥞"
  },
  {
    title: "Best Easy One Pot Chicken & Rice",
    desc: "Simple chicken & rice meal.",
    img: recipeImages[6],
    time: "40 min",
    category: "Chicken",
    icon: "🍚"
  },
  {
    title: "Creamiest Creamy Chicken and Bacon Pasta",
    desc: "Creamy chicken bacon pasta.",
    img: recipeImages[7],
    time: "28 min",
    category: "Pasta",
    icon: "🍝"
  }
];

function Category({ img, label }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <img src={img} alt={label} style={{ width: 50, height: 50, borderRadius: 12 }} />
      <div>{label}</div>
    </div>
  );
}

function RecipeCard({ img, title, desc, time, category, icon, likes, liked, onLikeToggle }) {
  return (
    <div className="recipe-card">
      <div className="recipe-img-container">
        <img src={img} alt={title} />
        <button
          className={`like-btn-img${liked ? " liked" : ""}`}
          onClick={onLikeToggle}
          aria-label={liked ? "Unlike" : "Like"}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={liked ? "#e74c3c" : "white"}
            stroke={liked ? "white" : "#e74c3c"}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ transition: "fill 0.2s" }}
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </button>
        <span className="like-count-img">{likes}</span>
      </div>
      <h4>{title}</h4>
      <p>{desc}</p>
      <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
        <span className="meta" style={{ marginRight: 10 }}>⏱ {time}</span>
        <span className="meta">{icon} {category}</span>
      </div>
    </div>
  );
}

function InstagramTestimonialCard({ img, user, text }) {
  const [liked, setLiked] = useState(false);
  const [saved, setSaved] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 100) + 20);

  const handleLike = () => {
    setLiked(l => {
      setLikeCount(c => l ? c - 1 : c + 1);
      return !l;
    });
  };

  const handleSave = () => setSaved(s => !s);

  return (
    <div className="instagram-testimonial-card">
      <img src={img} alt={user} />
      <div style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0 2px 0" }}>
        <div style={{ display: "flex", gap: 12 }}>
          <button
            aria-label="Like"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
            onClick={handleLike}
          >
            <svg width="22" height="22" viewBox="0 0 24 24"
              fill={liked ? "#e74c3c" : "none"}
              stroke="#e74c3c"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ verticalAlign: "middle" }}>
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
          <button
            aria-label="Comment"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
            </svg>
          </button>
          <button
            aria-label="Share"
            style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#222" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="18" cy="5" r="3"></circle>
              <circle cx="6" cy="12" r="3"></circle>
              <circle cx="18" cy="19" r="3"></circle>
              <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
              <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
            </svg>
          </button>
        </div>
        <button
          aria-label="Save"
          style={{ background: "none", border: "none", cursor: "pointer", padding: 0 }}
          onClick={handleSave}
        >
          <svg width="22" height="22" viewBox="0 0 24 24"
            fill={saved ? "#222" : "none"}
            stroke="#222"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ verticalAlign: "middle" }}>
            <polygon points="19 21 12 17 5 21 5 5 19 5 19 21"></polygon>
          </svg>
        </button>
      </div>
      <div style={{ width: "100%", fontSize: 13, color: "#e74c3c", marginBottom: 2 }}>
        {likeCount} likes
      </div>
      <div className="user">{user}</div>
      <div className="text">{text}</div>
    </div>
  );
}

function HomePage() {
  const [likes, setLikes] = useState(Array(simpleTastyRecipes.length).fill(18));
  const [liked, setLiked] = useState(Array(simpleTastyRecipes.length).fill(false));

  const handleLikeToggle = idx => {
    setLiked(prev => {
      const updated = [...prev];
      updated[idx] = !updated[idx];
      return updated;
    });
    setLikes(prev => {
      const updated = [...prev];
      updated[idx] = liked[idx] ? updated[idx] - 1 : updated[idx] + 1;
      return updated;
    });
  };

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
      <section className="delicious-section" style={{alignItems: "flex-start"}}>
        <div style={{textAlign: "left", width: "100%", maxWidth: 500}}>
          <h2>Spicy delicious chicken wings</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus.</p>
          <div style={{ margin: "12px 0" }}>
            <span style={{ marginRight: 16 }}>⏱ 40 min</span>
            <span style={{ marginRight: 16 }}>🍗 Chicken</span>
            <span style={{ marginRight: 16 }}>Easy</span>
          </div>
          <button style={{ padding: "8px 26px", borderRadius: 8, background: "#222", color: "#fff", border: "none" }}>View Recipe</button>
        </div>
        <div>
          <img className="chicken-image-container" src="https://www.flavcity.com/wp-content/uploads/2019/01/baked-chicken-wings.jpg" alt="Chicken Wings" />
        </div>
      </section>
      <section className="categories-section">
        <h3 style={{ marginLeft: 24, textAlign: "center" }}>Categories</h3>
        <div className="categories-list" style={{justifyContent: "center"}}>
          {["Breakfast", "Vegan", "Meat", "Dessert", "Lunch", "Chocolate"].map((cat, idx) => (
            <Category key={cat} img={catImages[idx]} label={cat} />
          ))}
        </div>
      </section>
      <section>
        <h3 style={{ marginLeft: 24 }}>Simple and tasty recipes</h3>
        <div style={{
          background: "#e8f3f7",
          borderRadius: 16,
          margin: "18px 5vw",
          padding: "18px 18px 12px 18px",
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 18,
          justifyContent: "center"
        }}>
          <div style={{fontWeight: 600, fontSize: 18, flex: "1 1 180px", minWidth: 160}}>
            Don't forget to eat healthy food!
          </div>
          <img
            src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141359.jpg?w=740"
            alt="Healthy Platter"
            style={{
              width: 120,
              height: 80,
              objectFit: "cover",
              borderRadius: 12,
              boxShadow: "0 2px 8px #eee",
              flex: "0 0 120px"
            }}
          />
        </div>
        <div className="recipe-list">
          {simpleTastyRecipes.map((recipe, idx) => (
            <RecipeCard
              key={recipe.title}
              img={recipe.img}
              title={recipe.title}
              desc={recipe.desc}
              time={recipe.time}
              category={recipe.category}
              icon={recipe.icon}
              likes={likes[idx]}
              liked={liked[idx]}
              onLikeToggle={() => handleLikeToggle(idx)}
            />
          ))}
        </div>
      </section>
      <section className="chef-section">
        <div className="chef-text">
          <h2>Everyone can be a chef in their own kitchen</h2>
          <p>Learn essential kitchen skills, cook delicious food, and impress family and friends.</p>
          <button className="learn-more" type="button">Learn More</button>
        </div>
        <img src={chefImg} alt="Chef" />
      </section>
      <section>
        <div className="instagram-section">Instagram Testimonials</div>
        <div className="instagram-testimonials-list">
          {testimonials.map((t, idx) => (
            <InstagramTestimonialCard key={idx} img={t.img} user={t.user} text={t.text} />
          ))}
        </div>
      </section>
      <section>
        <h3 style={{ marginLeft: 24 }}>Try this delicious recipe to make your day</h3>
        <div className="more-recipes-list">
          {[
            {
              title: "Meal Tropical Fruit Salad with Special Sauce",
              img: moreRecipes[0],
              time: "15 min",
              category: "Salad",
              icon: "🥗"
            },
            {
              title: "Big and Juicy Wagyu Beef Cheeseburger",
              img: moreRecipes[1],
              time: "30 min",
              category: "Meat",
              icon: "🍔"
            },
            {
              title: "Healthy Japanese Fried Rice with Asparagus",
              img: moreRecipes[2],
              time: "25 min",
              category: "Rice",
              icon: "🍚"
            },
            {
              title: "Cauliflower Vegan Vegetarian Taco Meal",
              img: moreRecipes[3],
              time: "20 min",
              category: "Vegan",
              icon: "🌮"
            },
            {
              title: "Rainbow Chicken Salad with Almond Honey Mustard",
              img: moreRecipes[4],
              time: "18 min",
              category: "Salad",
              icon: "🥗"
            },
            {
              title: "Barbecue Soy Sauce Noodles with Chia",
              img: moreRecipes[5],
              time: "22 min",
              category: "Noodles",
              icon: "🍜"
            },
            {
              title: "Paleo/Low-carb Lettuce Wraps Special",
              img: moreRecipes[6],
              time: "12 min",
              category: "Wrap",
              icon: "🌯"
            },
            {
              title: "Chicken Mushroom Soup with Mushroom",
              img: moreRecipes[7],
              time: "35 min",
              category: "Soup",
              icon: "🍲"
            }
          ].map((item, idx) => (
            <div className="recipe-card" key={item.title}>
              <div className="recipe-img-container">
                <img src={item.img} alt={item.title} />
              </div>
              <h4>{item.title}</h4>
              <div style={{ display: "flex", alignItems: "center", marginTop: 8 }}>
                <span className="meta" style={{ marginRight: 10 }}>⏱ {item.time}</span>
                <span className="meta">{item.icon} {item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="newsletter-section">
        <h2>Deliciousness to your inbox</h2>
        <p>Get weekly recipes and tips delivered straight to your inbox.</p>
        <form style={{ marginTop: 18 }}>
          <input
            type="email"
            placeholder="Your email address"
          />
          <button>Subscribe</button>
        </form>
      </section>
      <footer>
        <div className="footer-section">
          <div>
            <h3 className="foodieland-logo">Foodieland<span>.</span></h3>
            <p>Lorem ipsum dolor sit amet, consectetuipisicing elit,</p>
          </div>
          <nav className="foodieland-nav">
            <a href="#">Recipes</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">About us</a>
          </nav>
        </div>
        <hr />
        <div className="copy-rights-section">
          <p>&copy;2020 Flowbase. Poweredby Webflow</p>
          <div className="logo-section">
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
          </div>
        </div>
      </footer>
    </div>
  );
}

export default HomePage;