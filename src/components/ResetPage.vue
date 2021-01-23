<template>
  <div class="full">
    <form class="logform">
      <center>
        <div class="h2">
          <h2>Fundoo Notes</h2>
          <h3>Reset Password</h3>
        </div>
      </center>

      <div class="form-group row">
        <div class="col-sm-7">
          <input type="password" id="oldpass" name="Old Password" required />
          <span>Old Password</span>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-7">
          <input type="password" id="newpass" name="New Ppassword" required />
          <span>New Password</span>
        </div>
      </div>

      <div class="form-group row">
        <div class="col-sm-7">
          <input type="password" id="confirmpass" name="Confirm Password" required />
          <span>Confirm Password</span>
        </div>
      </div>

      <div class="form-group row">
        <!-- <div class="col-sm-1"></div> -->
        <div class="col-sm-8">
          <button id="rb" type="submit" class="btn btn-primary">Reset</button>
        </div>
      </div>
    </form>
  </div>
</template>


<style scoped>   

.h2 {
    padding-bottom: 20px;
    margin-top: 1px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color:rgb(229, 245, 13);
    padding-bottom: 10px;
    background-color: rgba(194, 116, 0, 0.658);
    border-radius: 14px;
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

.a {
    text-decoration: none;
    padding-left: 20%;
}

/* Reset Button */
#rb{
    margin-left: 400px;
    background-color:rgba(112, 41, 0, 0.568);
    border-color:rgb(252, 23, 7);    
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
 