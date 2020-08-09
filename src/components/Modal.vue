<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <h2 class="header">Create Staff</h2>
            <p class="close-top" @click="$emit('close')">X</p>
          </div>

          <div class="modal-body">
            <form>
              <div class="row">
                <div class="form-group-1">
                  <label>First Name</label>
                  <span v-if="staff.first_name == ''" class="error">First name required</span>
                  <br />

                  <input
                    :class="{'error-form': staff.first_name == ''}"
                    type="text"
                    v-model="staff.first_name"
                    placeholder="First Name"
                  />
                </div>

                <div class="form-group-2">
                  <label>Last Name</label>
                  <span v-if="staff.last_name == ''" class="error">Last name required</span>
                  <br />
                  <input
                    :class="{'error-form': staff.last_name == ''}"
                    type="text"
                    v-model="staff.last_name"
                    placeholder="Last Name"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group-12">
                  <label>Email</label>
                  <span v-if="isNotEmail(staff.email)" class="error">Enter valid email</span>
                  <br />
                  <input
                    :class="{'error-form': isNotEmail(staff.email) }"
                    type="email"
                    v-model="staff.email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group-1">
                  <label>Phone</label>
                  <span
                    v-if="notValidPhone(staff.phone_number)"
                    class="error"
                  >Enter valid Phone Number</span>
                  <br />
                  <input
                    :class="{'error-form': notValidPhone(staff.phone_number) }"
                    type="text"
                    v-model="staff.phone_number"
                    placeholder="Phone Number"
                  />
                </div>
                <div class="form-group-2">
                  <label>Role</label>
                  <span v-if="staff.role == ''" class="error">Role required</span>
                  <br />
                  <select :class="{'error-form':  staff.role == ''}" v-model="staff.role">
                    <option value>Select Role</option>
                    <option value="staff">Staff</option>
                    <option value="admin">Admin</option>
                  </select>
                </div>
              </div>

              <div></div>
            </form>
          </div>
          <Loader class="loader" v-if="$store.getters.isLoading" />
          <div class="modal-footer" v-else>
            <button type="submit" class="close-button" @click="$emit('close')">Close</button>
            <button class="submit-button" @click="validate()">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Loader from "./Loader";
export default {
  props: {
    staff: Object
  },
  components: {
    Loader
  },
  data() {
    return {};
  },
  methods: {
    validate() {
      if (!this.hasErrors) {
        this.$store.commit("toggleLoading", true);
        this.$emit("submit");
      }
    },

    isNotEmail(mail) {
      if (mail.length > 1 && mail.indexOf("@") != -1 && mail.indexOf(".") != -1)
        return false;

      return true;
    },

    notValidPhone(num) {
      if (num.length == 11) {
        return false;
      }
      return true;
    }
  },

  computed: {
    hasErrors() {
      if (this.staff.first_name == "") return true;
      if (this.staff.last_name == "") return true;
      if (this.notValidPhone(this.staff.phone_number)) return true;
      if (this.isNotEmail(this.staff.email)) return true;
      if (this.staff.role == "") return true;
      return false;
    }
  }
};
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  height: 350px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
  position: relative;
}

.modal-header .header {
  margin-top: 10px;
  color: #42b983;
  text-align: center !important;
  text-transform: uppercase;
  display: block;
}

.modal-body {
  margin: 20px 0;
}

.modal-footer {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
}

.close-button {
  grid-column-start: 1;
  grid-column-end: 5;
  width: 200px;
  height: 44px;
  background: red;
  box-shadow: 0px 7px 15px rgba(43, 218, 83, 0.2);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: none;

  /* identical to box height, or 122% */
  text-align: center;

  color: #ffffff;
}

.submit-button {
  grid-column-start: 7;
  grid-column-end: 10;
  width: 200px;
  height: 44px;
  background: #2bda53;
  box-shadow: 0px 7px 15px rgba(43, 218, 83, 0.2);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  border: none;

  /* identical to box height, or 122% */
  text-align: center;

  color: #ffffff;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}

.row {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  margin-bottom: 10px;
  width: 100%;
}

.row .form-group-1 {
  grid-column-start: 1;
  grid-column-end: 6;
}

.row .form-group-2 {
  grid-column-start: 7;
  grid-column-end: 12;
}

.row .form-group-12 {
  grid-column-start: 1;
  grid-column-end: 12;
}

input {
  -webkit-appearance: none;
  width: 100%;
  height: 35px;
  border: 1px solid rgba(106, 126, 138, 0.4);
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  /* identical to box height */
  letter-spacing: -0.08px;

  color: #6a7e8a;
}

select {
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 35px;

  background-color: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  /* identical to box height */
  letter-spacing: -0.08px;

  color: #6a7e8a;
  background: url(/img/icons/Grouparrow.png) no-repeat 90% 50% #ffffff;
}

.error {
  color: red;
  margin-left: 70px;
  font-size: 10px;
}
.error-form {
  border: red 1px solid;
}
.close-top {
  position: absolute;
  left: 97%;
  top: 3%;
  color: red;
  cursor: pointer;
  font-weight: 900;
}
</style>
