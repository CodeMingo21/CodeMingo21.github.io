<template>

<div class="container">
  <div class="form-container">
    <div class="left-container">
      <div class="left-inner-container">
      <h2>Let's Chat</h2>
      
        <p class="left-text">Feel free to send me a message.</p>
    </div>
      </div>
    <div class="right-container">
      <div class="right-inner-container">
        <form action="/">
			
            <input class="form-group" type="text" placeholder="Name "  /><br><br>
            <input class="form-group" type="email" placeholder="Email " /><br><br>
            <input class="form-group" type="text" placeholder="Company" /><br><br>
            <input class="form-group" type="phone" placeholder="Phone" /><br><br>
          <textarea class="form-group-message"  rows="4" placeholder="Message"></textarea><br>
			<button class="btn-form" type="submit">Submit</button>
		</form><br><br>

    <div class="social-container">
				<a href="#" class="social"><i class="fab fa-facebook-f">FaceBook</i></a> |
				<a href="#" class="social"><i class="fab fa-google-plus-g">GitHub</i></a> |
				<a href="#" class="social"><i class="fab fa-linkedin-in"></i>Linkedin</a><br>
			</div>
      </div>
    </div>
  </div>
</div>


</template>
<style scoped>
@font-face {
    font-family: 'customFont';
    src: url('@/assets/fonts/directory/papyrus.ttf') format('ttf');
    font-weight: normal;
    font-style: normal;

    /* font-family: ASIVA;
    src: url(ASIVA.ttf); */
}

/* body{
    font-family: 'customFont';
    
    font-size:x-large;

} */
.right-container{
  display: flex;
  justify-content: center;
 
 
}

.left-text{
font-size: xx-large;
padding: 20px;

}

.left-inner-container{
  padding: 20px;


}
.form-group{
  width: 500px;
  height: 50px;
  border-radius: 10px;
   padding: 20px;
   border: 3px solid rgb(93, 142, 175);
   color: burlywood;
   
 font-size: larger;
  
}

.form-group-message{
  width: 100%;
 height: 200px;
 border-radius: 10px;
   padding: 20px;
   border: 3px solid rgb(93, 142, 175);
   color: burlywood;
   font-size:larger;
   margin: 0 1%;

}

.btn-form{
  width: 200px;
  height: 50px;
  border-radius: 4%;
  background-color: rgb(93, 142, 175);
  text-align: center;
  color: burlywood;
  font-size: x-large;

}
</style>
<script>
export default {
    
  }

</script>
