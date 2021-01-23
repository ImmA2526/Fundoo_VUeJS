<template>

<div class="full">
  <form class="logform">
    <center><div class="h2">
      <h2 id=h2>Fundoo Notes</h2>
      <h3>Registraion Page</h3>
    </div></center>

    <!--Names-->
    <div class="form-group row">
      <label class="col-sm-2 col-form-label" >Name</label>
      <div class="col-sm-4">
        <input type="text" id="firstName" name="FirstName" placeholder="First Name"/>
      </div>
      <div class="col-sm-4">
        <input type="text" id="lastName" name="LastName" placeholder="Last Name"/>
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Email</label>
      <div class="col-sm-8">
        <input type="email" id="email" name="email" placeholder="Email" />
      </div>
    </div>

    <div class="form-group row">
      <label class="col-sm-2 col-form-label">Password </label>
      <div class="col-sm-4">
        <input type="text" id="pass" name="Password" placeholder="Password" />
      </div>
      <div class="col-sm-4">
        <input type="Password" id="cp" name="Confirm Password" placeholder="Confirm "/>
      </div>
    </div>

    <div class="form-group row">
      <div class="col-sm-1"></div>
      <div class="col-sm-10">
        <a id="ok" href="LoginPage.html">Login Instead</a>
        <button id="bt" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
  </form>
</div> 
</template>


<style scoped>
   

.full
{
  margin-left: 600px;
}

#h2
{
  color:rgb(250, 58, 0);
}

.h2 {
    padding-bottom: 20px;
    margin-top: 1px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color:rgb(14, 14, 14);
    padding-bottom: 10px;
    background-color: rgba(193, 241, 19, 0.658);
    border-radius: 14px;
} 
  input[type="text"],
  input[type="password"],
  input[type="email"],
  textarea,
  select {
    padding: 12px 20px;
    margin: 12px 0;
    box-sizing: border-box;
    border-radius: 8px;
    width: 100%;
    height: 30px;
    margin-right: 10%;

  }
  
  label {
    display: flex;
    justify-content: left;
    text-align: right;
    width: 200px;
    line-height: 28px;
    color: black;
    margin-left: 30px;
  }
  
   #ok
  {
    margin-right: 40px;
  }
   
  button {
    background-color: cornflowerblue;
    color: black;
    border-radius: 12px;
    padding: 14px 20px;
    margin: 11px 0;
    border: none;
    cursor: pointer;
    width: 50%;
  }

  
  
  button:hover {
    opacity: 0.8;
  }
  
</style>