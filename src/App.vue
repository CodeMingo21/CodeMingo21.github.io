<template>
  <nav class="hero-navbar">
   
      <router-link class="list-item" to="/">Home</router-link>
      <router-link class="list-item" to="/about">About</router-link>
      <router-link class="list-item" to="/portfolio">My Portfolio</router-link>
      <router-link class="list-item" to="/blog">C.J. Blog</router-link>
      <router-link class="list-item" to="/contactme">Contact Me</router-link> 
   

   </nav>
  <router-view/>
  <footer class="hero-footer">
<p>Contact Me: (+46) 700166691 | tmingo21@gmail.com | Junkergatan 2 , 12653, Hägersten, Sweden</p>

</footer>
</template>
<script>
export default {
  data() {
    return {
      isMenuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }
  }
};

</script>
<style>
@font-face {
    font-family: 'customFont';
    src: url('@/assets/fonts/directory/papyrus.ttf') format('ttf');
    /* font-weight: normal;
    font-style: normal; */

    /* font-family: ASIVA;
    src: url(ASIVA.ttf); */
}
/**/ 

@font-face {
    font-family: 'customFont';
    src: url('@/assets/fonts/directory/papyrus.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;   
}
@media (max-width:690px) {
  .hero-footer{
      font-size: 1rem !important;      
      }
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: customFont;
}

body{
  font-family: 'customFont';
}

#app {
  font-family: 'customFont';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: burlywood;
}

nav {
  padding: 3%;
}

nav a {
  font-weight: bold;
  color: burlywood;
}

nav a.router-link-exact-active {
  
  color: rgb(93, 142, 175);
  background-color: burlywood;
  border-radius: 25px;
}

.hero-container{
  display: flex;

}
.hero-navbar {
    background-color: rgb(93, 142, 175);
    /* transition: background-color 1s linear; */
    color: burlywood;
  
    flex-wrap: wrap;
   flex-direction: row;
    justify-content: center;
    align-items: center;
    /* border: 5px solid burlywood; */
    border-bottom: 5px solid burlywood;
    font-size: 1.5em;

}

/* .hero-navbar:hover, .hero-footer:hover {
   background-color: rgb(7, 49, 26);      
} */

/* .hero-quotes:hover {
    background-color: burlywood;
} */

.list-item {
    
    padding: 1.5%;
    margin: 1%;

}

.hero-footer{
    background-color: rgb(93, 142, 175);
    /* transition: background-color 1s linear; */
    color: burlywood;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
   width: 100%;
   
   
    font-size: 2rem;
}


/*Responsive Styles (for max-width 768px)
@media (max-width: 768px) {
   Hide the full menu 
  .nav-links {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 70px;
    right: 0;
    background-color: #333;
    width: 100%;
    text-align: center;
  }

  /* Show the hamburger menu 
  .hamburger {
    display: flex;
  }

  /* When the menu is open, display the links 
  .nav-links.active {
    display: flex;
  }

  .nav-links li {
    margin: 0;
    padding: 10px 0;
  }
}*/




</style>
