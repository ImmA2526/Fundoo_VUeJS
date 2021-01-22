<template>

<div class="full">
  <form class="logform">
    <center><div class="h2">
      <h2>Fundoo Nodes</h2>
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
    @import "../assets/Register.css";
</style>