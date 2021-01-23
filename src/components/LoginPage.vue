<template>

<div class="full">
<form class="logform">
           <center> <div class="h2">
                <h2>Fundoo Notes</h2>
                <h3>Login</h3>
            </div></center>
            


<div class="form-group row">
        <div class="col-sm-7">
          <input type="email" id="email" name="EmailID" required />
          <span>Email</span>
        </div>
      </div>

<div class="form-group row">
        <div class="col-sm-7">
          <input type="password" id="pass" name="Password" required />
          <span>Password</span>
        </div>
      </div>

            <div class="form-group row">
                <div class=" forgot"><a href="Forgot_PWD.html">Forgot Password</a></div>
                
            </div>
                <div class="form-group row">
                    <div class="col-sm-1"></div>
                    <div class="col-sm-10">
                        <a id="ok" href="Register.html">Create</a>
                        <button id="bt" type="submit" class="btn btn-primary">Login</button>
                    </div>
                </div>
                <div class="blank"></div>
        </form>
</div>  
</template>

<style>
    .h2 {
    padding-bottom: 20px;
    margin-top: 1px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color:rgb(252, 248, 6);
    padding-bottom: 10px;
    background-color:black;
    border-radius: 14px;
} 

.blank
{
    /* background-color: aqua; */
    padding-bottom: 6px;
    background-color:black;
    border-radius: 20px;

}
/* form */
.logform {
    border: 2px solid #f1f1f1;
    border-radius: 12px;
    width: 60%;
    height: 64%;
    margin-top: 40px; 
}

/*Forgot Link*/
.forgot {
    
    padding-left: 70px;
    margin-top: 6px;
    margin-bottom:12px;
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
    border-color: deepskyblue;
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
    top:0;
    left: 40px;
    color:dodgerblue;
    padding: 2px;
    background: white;
}

/* Butoon */
#bt {
    background-color:rgb(46, 135, 250);
    border-radius:20px;
margin-bottom: 10px;
    cursor: pointer;
    width: 30%;
    height:40px;
    /* border-color: chartreuse; */
}

#bt:hover {
        background-color:rgba(76, 117, 252, 0.815);
    }

/* create button */
#ok
{
    margin-right: 194px;
}

.a {
    text-decoration: none;
    padding-left: 20%;
}

/* Center form */
.full
{
  margin-left: 600px;
}

</style>
 