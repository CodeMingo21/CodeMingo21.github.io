<template>
  <div class="about">
    <h1>About Me</h1>
  </div>
  <img src="/MyProfilePic.jpg" class="my-img" alt="My pic">
  <div id="intro-content">
    Hello and welcome to my page. Let me start off my introducing myself. 
    My name is Tavaris Ohm-Mingo and I am 45 yrs old. I am a father, a husband 
    and an overall family man. Im originally from Atlanta,Ga,USA however I have been living abroad in 
    Stockholm, Sweden for the past 15 years. My prior work experience ranges from being a CAD Designer 
    to an owner of a renovation firm. And now I am interested in the field of 
    programming and I must say that I think I found my Calling. Coding is like a 
    combination of design and construction. Anyone that knows me know that I love 
    to build and create and that is excatly what I get to do using code. At this point 
    I would say that enjoy the backend side more than frontend, because i like working
     with databases. I do however enjoy the creativity that frontend offers and look forward to exploring both sides indepth.
     So Im enjoying the ride. Thank you for your time and I hope you like what you see.  

  </div>

  <div id="skills-sec">
    <h1>My Skills</h1>
<section class="sec-lang">
    <ul> 
    <h2>Languages</h2>
    <li>
        <p>Html</p>
    </li>
    <li>
        <p>CSS</p>
    </li>
    <li>
        <p>JavaScript</p>
    </li>
    <li>
        <p>C#</p>
    </li>
    
</ul>
</section>

<section class="sec-db">
<ul> 
    <h2>Databases</h2>
    <li>
        <p>MS SQL</p>
    </li>
    <li>
        <p>MongoDB</p>
    </li>
   
</ul>
</section>

<section class="sec-sys">
<ul> 
    <h2>Systems</h2>
    <li>
        <p>Console Applications</p>
    </li>
    <li>
        <p>Asp.Net.Core.MVC</p>
    </li>
    <li>
        <p>API</p>
    </li>
    <li>
        <p>Vue.JS</p>
    </li>
    <li>
        <p>Node.JS/Express-Handlebars</p>
    </li>
</ul>
</section>

  </div>
</template>


<script>
export default {
    
  }

</script>
<style>
.my-img{
    border-radius: 25%;
    border: 5px solid rgb(93, 142, 175);
    margin: 10% 0;
}

.sec-sys{
    margin-bottom: 20px;
}

#intro-content{
    color: rgb(93, 142, 175);
    margin: 5%;
    padding: 5%;
}

</style>