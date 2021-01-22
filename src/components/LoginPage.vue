<template>

<div class="full">
<form class="logform">
           <center> <div class="h2">
                <h2>Fundoo Nodes</h2>
                <h3>Login</h3>
            </div></center>
            
            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Email</label>
                <div class="col-sm-8">
                    <input type="email" id="email" name="EmailId" placeholder="Email Id">
                </div>
            </div>

            <div class="form-group row">
                <label class="col-sm-2 col-form-label">Password</label>
                <div class="col-sm-8">
                    <input type="password" id="password" name="Password" placeholder="Password">
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
        </form>
</div>  
</template>

<style scoped>
    @import "../assets/Login.css";
</style>
 