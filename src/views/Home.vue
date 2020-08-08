<template>
  <div class="home">
    <div class="left-panel">
      <div class="content">
        <h3>No Hazzles</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        <span>
          <div class="dot"></div>
          <div class="dot"></div>
        </span>
      </div>
    </div>

    <div class="right-panel">
      <!-- top content -->
      <div class="section">
        <div class="top">
          <h3>Create your free account</h3>
          <p>
            Already registered?
            <a href="#" >Sign in</a>
          </p>
        </div>

        <!-- Register Form -->
        <div class="form">
          <div class ="container" >
            <div class="row">
              <div class="form-group form-group-1">
                <label>First Name</label><br />
                <input type="text" class="form-box" />
                <img src="/img/icons/user.png" class="form-user-icon" />
              </div>

              <div class="form-group form-group-2">
                <label>Last Name</label><br />
                <input type="text" class="form-box" />
                <img src="/img/icons/user.png" class="form-user-icon" />
              </div>
            </div>

            <div class="row">
              <div class="form-group">
                <label>Email</label><br />
                <input type="text" class="form-box" />
                <img src="/img/icons/@.png" class="form-email-icon" />
              </div>
            </div>

            <div class="row">
              <div class="form-group">
                <label>Password</label><br />
                <input type="password" class="form-box" />
                <img src="/img/icons/phone.png" class="form-phone-icon" />
              </div>
            </div>

            <div class="row">
              <div class="form-group form-group-btn">
                <button type="submit" @click="$router.push('/about')" class="submit-btn">
                  Continue
                </button>
              </div>
            </div>
          </div>
        </div>

        
      </div>
      <div class="buttom">
          <div class="row">
            <p class="left-text">By signing up, agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
            <p class="right-text">©2019 Tinylabs. All right reserved</p>
          </div>

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>

<style scoped>
  .left-panel {
    /* background-image: url("/img/photo/Model.png"); */
    display: none;
  }

  .right-panel .top {

    margin-top: 79px;
    text-align: center;
   
  }

 

  .right-panel .top h3 {
    color: #013C61;
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-align: center;
    letter-spacing: 0.235294px;

  }

  .right-panel .top p {
    margin-top: 11px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    letter-spacing: -0.08px;
    color: #013C61; 
  }

  .right-panel .top p a {
    color: #2BDA53;
    text-decoration: none;
  }

  .right-panel .form {
    margin-top: 50px;
    background: #FFFFFF;
    box-shadow: 0px 20px 50px #EAEEE9;
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
    width: 332px;
    height: 422px;
   
  }

  .container {
    width: 260px;
    margin-left: auto;
    margin-right: auto;
    padding-top: 20px;
  }

  .form-group label {
   
    width: 59px;
    height: 22px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 22px;
    color: #6A7E8A;

  }

  .form-group .form-box {
    margin-bottom: 21px;
    margin-top: 7px;
    width: 90%;
    border: none;
    border-bottom: 1px solid #E6E7EB;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 16px;
    letter-spacing: -0.08px;

    color: #013C61;
  }

  .form-user-icon {
    width: 10.44px;
    height: 11.75px;
  
  }

  .form-email-icon {
    width: 10.48px;
    height: 10.48px;
  }

  .form-phone-icon {
    width: 18px;
    height: 13.09px;
  }

  .submit-btn {
    margin-top: 50.49px;
    margin-left: auto;
    margin-right: auto;
    width: 260px;
    height: 44px;
    background: #2BDA53;
    box-shadow: 0px 7px 15px rgba(43, 218, 83, 0.2);
    border-radius: 3px;

 

    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height, or 122% */
    text-align: center;

    color: #FFFFFF;
  }

  .buttom {
    margin-top: 32px;
    width: 386px;
    margin-left: auto;
    margin-right: auto;

  }

  

  .buttom .row .left-text,.right-text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 18px;

    /* identical to box height, or 180% */
    text-align: center;
    letter-spacing: -0.0615385px;

    color: #6A7E8A;
    margin-bottom: 5px;
  }

  .buttom .row p a {
    color: #2BDA53;
    text-decoration: none;

  }

  @media screen and (min-width: 1200px) {

      .home {
        display: grid;
        grid-template-columns: repeat(20, 1fr);

      }
      .left-panel {
        background-image: url("/img/photo/Model.png");
        display: block;
        grid-column-start: 1;
        grid-column-end: 9;
        background-size: cover;
       
      }

      .left-panel .content {
        margin-top: 728px;
        text-align: center;
        display: block;
      }

      .left-panel .content h3 {
        font-family: Roboto;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;

        /* identical to box height, or 150% */
        text-align: center;
        letter-spacing: -0.578824px;

        color: #FFFFFF;
        margin-bottom: 22px;
      }

      .left-panel .content p {
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 24px;
        line-height: 36px;

        /* or 150% */
        text-align: center;
        letter-spacing: -0.578824px;

        color: #FFFFFF;
        width: 477px;
        margin-left: auto;
        margin-right: auto;
      }

      .right-panel {
        grid-column-start: 9;
        grid-column-end: 22;
       
      
      }

      .right-panel .section {
        margin-left: auto;
        margin-right: auto;
        width: 590px;
      }

      .right-panel .top {
        margin-left: auto;
        margin-right: auto;
        
      }

      .right-panel .top h3 {
        text-align: left;
      }

      .container {
          width: 90%;
      }

      .right-panel .top p {
        text-align: left;
      }

      .right-panel .form {
        margin-left: 0;
        width: 590px;
        height: 510px;
      }

      .right-panel .form .container {
        margin-left: 56px;
      }

      .right-panel .form .container .row {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
         grid-column-gap: 0px;
      }

      .right-panel .form .container .row .form-group {
        grid-column-start: 1;
        grid-column-end: 3;
        margin-bottom: 45px;
       
       
      } 

      .right-panel .form .container .row .form-group-1 {
        grid-column-start: 1;
        grid-column-end: 2;
        width: 89%;
       
      }
      .right-panel .form .container .row .form-group-2 {
        grid-column-start: 2;
        grid-column-end: 3;
         width: 89%;
      }

      .submit-btn {
        width: 200px;
        height: 44px;
       
      }

      .right-panel .form .container .row .form-group-btn {
        grid-column-start: 2;
        grid-column-end: 3;
      }

      .buttom {
        margin-top: 165px;
        width: 100%;
        margin-bottom: 37px;

      }

      .buttom .row  {
         display: grid;
        grid-template-columns: repeat(2, 1fr);
         grid-column-gap: 0px;
       
      }

      .buttom .row .left-text {
        grid-column-start: 1;
        grid-column-end: 2;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;

        /* identical to box height, or 138% */
        letter-spacing: -0.08px;

        color: #6A7E8A;
        
      }

      .buttom .row .right-text {
        margin-right: 54px;
        grid-column-start: 2;
        grid-column-end: 3;
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 18px;

        /* identical to box height, or 138% */
        text-align: right;
        letter-spacing: -0.08px;

        color: #6A7E8A;



      }

  }

</style>
