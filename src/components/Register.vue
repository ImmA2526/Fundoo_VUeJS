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
        <a id="oks" href="LoginPage.html">Login Instead</a>
        <button id="btns" type="submit" class="btn btn-primary">Submit</button>
      </div>
    </div>
    <div class="blank"></div>
  </form>
</div> 
</template>


<style scoped>
    /* Center Form  */
    .full
    {
    margin-left: 600px;
    }

    /* Button */
    #btns
    {
    background-color:rgba(66, 170, 255, 0.856);
    border-radius:20px;
    margin-bottom: 10px;
    margin-top: 10px;
    cursor: pointer;
    width: 24%;
    height:40px;
    margin-left: 180px;
    border-color:rgba(200, 152, 228, 0.699);
    }

    #btns:hover {
      background-color:rgba(76, 117, 252, 0.815);
    }

    #oks
    {
    /* margin-left: 60px; */
    padding-left: 60px;
    }
    .blank
    {
    padding-bottom: 6px;
    background-color:rgba(200, 152, 228, 0.699);
    border-radius: 40px;
    }

    /* HEading */
    .h2 {
    padding-bottom: 20px;
    margin-top: 1px;
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    color:rgb(14, 14, 14);
    padding-bottom: 10px;
    background-color: rgba(200, 152, 228, 0.699);
    border-radius: 14px;
    }

    #h2
    {
    color:rgb(25, 6, 192);
    }

    /* Text Box */
    input[type="text"],
    input[type="password"],
    input[type="email"],
    textarea,
    select {
    padding: 12px 20px;
    margin: 10px 0;
    width: 100%;
    height: 30px;
    margin-right: 10%;
    border-color: rgba(200, 152, 228, 0.699);
    position: relative;
    border-radius: 10px;
    }

    label {
    display: flex;
    justify-content: left;
    text-align: center;
    width: 200px;
    line-height: 28px;
    color: black;
    margin-left: 30px;
    }
</style>