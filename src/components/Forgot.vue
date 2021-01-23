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
      <label class="col-sm-2 col-form-label" >Email</label>
      <div class="col-sm-6">
        <input type="text" id="email" name="Email Id" placeholder="Email Id"/>
      </div>
     
    </div>


            <div class="form-group row">
                <div class="col-sm-4"></div>
                <div class="col-sm-8">
                    <a class="a" href="Login.html">Login Instead</a>
                    <button type="button" id="btn" class="btn btn-primary">Send</button>
 
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
    padding: 10px 20px;
    margin: 11px 0;
    width: 110%;
    height: 30px;
    margin-left: 10%;
    border-color: rgba(122, 79, 15, 0.616);
    position: relative;
    border-radius: 10px;
}

label {
    display: flex;
    justify-content: left;
    text-align: right;
    width: 200px;
    line-height: 35px;
    color: black;
    margin-left:96px;
}

.a {
    text-decoration: none;
    margin-right: 110px;
}

/*  Button */
#btn{

    background-color:rgba(112, 41, 0, 0.568);
    border-color:rgba(78, 52, 12, 0.966);    
}

#btn:hover {
        background-color:rgba(0, 107, 214, 0.514);
    }

/* Center form */
.full
{
  margin-left: 600px;
}
</style>
 