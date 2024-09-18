<template>

<body>
    <div class="hero-container">     
        
        <div class="hero-hero-section">
            <div class="hero-hero-text">
                <h1 class="hero-hero-name">Tavaris Mingo</h1>
                
                <h3 class="job-title">Web Developer</h3>

            </div>
            <div class="hero-quotes">
                <p>
                  "Reality is wrong. Dreams are for real." <br>
                    -- Tupac Shukar
                </p>
            </div>


        </div>


    </div>
</body>

  
 
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>

<style >

@font-face {
    font-family: 'customFont';
    src: url('@/assets/fonts/directory/papyrus.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;   
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

.hero-container{
  display: flex;

}
ul{
    list-style-type: none;
}



.hero-hero-text {
    text-align: left;
    font-size: 1.5rem;
    color: whitesmoke;
    
        
}

.hero-hero-name{
  border-bottom: 0.5rem solid rgb(93, 142, 175);
  border-left: 0.5rem solid rgb(93, 142, 175);
  border-bottom-left-radius: 10%;
  border-width: 5%;
  margin-left: 10%;
  padding-left: 3%;
}

.job-title{
  margin-left: 10%;
  padding-left: 3%;
}


@media (max-width:1000px) {
      .hero-quotes{
      font-size: 1.7rem !important;      
      text-align: center;
      }
}

@media (max-width:900px) {
      .hero-quotes{
        font-size: 1.2rem !important;
        width: 10vw;
        height: 10vh;      
      text-align: center;

      }
}
.hero-quotes{
    color: burlywood;
    background-color: rgb(93, 142, 175);
   
    padding: 3%;
    width: 30vw;
    height: 30vh;
    text-align: center;
    margin: 0 20vh;   
    background-size: cover;
    border-radius: 15%;
    border-width: 40%;
    border-right: 0.5rem solid whitesmoke;
    font-size: 2rem;
    
  
}

.hero-hero-section {
    display: flex;
    background-image: url('../assets/HomeView/River.jpg');
    background-color: rgb(93, 142, 175);
    width: 100%;
    height: 100vh;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    /* align-content: flex-start; */
    justify-content: center;
    padding-left: 20px;
    align-items: center;
    color: burlywood;

    /* position: relative; */



}



</style>