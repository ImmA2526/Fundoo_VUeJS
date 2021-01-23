<template>
  <div class="full">
    <form class="logform">
      <center>
        <div class="h2">
          <h2 id="h2">Fundoo Notes</h2>
          <h3>Forgot Password</h3>
        </div>
      </center>


            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-8">
                    <input type="email" id="email" placeholder="Email">
                </div>
            </div>
            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-8">
                    <button type="button" id="resetBtn" class="btn btn-primary">Submit</button>
                    <a class="a" href="Login.html">Login</a>
                </div>
            </div>



      <div class="blank"></div>
    </form>
  </div>
</template>


<style scoped>   

.h2 {
    padding-bottom: 20px;
    margin-top: 1px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
  color:burlywood;
 
    padding-bottom: 10px;
    background-color: rgba(78, 52, 12, 0.966);
    border-radius: 14px;
} 

#h2
{
  color:rgb(229, 245, 13); 
}
.blank
{
    padding-bottom: 6px;
    background-color:rgba(78, 52, 12, 0.966);
    border-radius: 20px;

}
/* Input Box */
input[type=text], 
input[type=password], 
input[type=email], 
textarea, select {
    padding: 14px 20px;
    margin: 11px 0;
    width: 100%;
    height: 30px;
    margin-left: 40%;
    border-color: rgba(122, 79, 15, 0.616);
    position: relative;
    border-radius: 10px;
}

/* SPAN AND BOX UPR  */

span
{
    position: absolute;
    top:50%;
    left: 50px;
    transform: translateY(-50%);
    transition: 0.5;
    margin-inline: 120px;
    pointer-events: none;
    width: 140px;
    
}

input:focus + span,input:valid + span
{
    top:1px;
    left: 40px;
    color:rgba(78, 52, 12, 0.966);
    padding: 2px;
    background: white;
}

.a {
    text-decoration: none;
    padding-left: 20%;
}

/* Reset Button */
#rb{
    margin-left: 400px;
    background-color:rgba(112, 41, 0, 0.568);
    border-color:rgba(78, 52, 12, 0.966);
        
}

#rb:hover {
        background-color:rgba(0, 107, 214, 0.514);
    }


/* Center form */
.full
{
  margin-left: 600px;
}

</style>
 