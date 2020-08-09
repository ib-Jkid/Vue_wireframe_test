<template>
  <div class="dashboard">
    <Navbar />
    <div class="content">
      <Sidebar />
      <div class="main">
        <div class="container">
          <div class="header">
            <h2 class="title">Employees</h2>
            <button class="create-btn" @click="showModal = true">Add New</button>
          </div>

          <Modal
            :staff="staff"
            v-if="showModal"
            @close="showModal = false"
            @submit="createStaff()"
          />

          <div class="description">
            <h1>Josh Bakery Ventures</h1>
            <p>62, Bode Thomas Surulere, Lagos</p>
          </div>

          <div class="controls">
            <div class="select-form">
              <select v-model="selectedRole" class="select-box">
                <option value>Change role</option>
                <option value="admin">Admin</option>
                <option valsue="staff">Staff</option>
              </select>
              <button @click="updateStaffsRoles()" class="change-btn">Change</button>
              <input type="text" class="search-field" placeholder="Enter staff name here" />
              <img src="/img/icons/search.png" class="search-icon" />
            </div>

            <div class="pagination">
              <span class="page-no">1 of2</span>
              <span class="prev-page">
                <img src="/img/icons/prevpage.png" />
              </span>
              <span class="next-page">
                <img src="/img/icons/nextpage.png" />
              </span>
            </div>
          </div>
          <Loader v-if="$store.getters.isLoading" />
          <Staff v-else :staffs="staffs"  />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Modal from "../components/Modal";
import Staff from "../components/Staff";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Loader from "../components/Loader";
export default {
  components: {
    Modal,
    Staff,
    Sidebar,
    Navbar,
    Loader
  },
  data() {
    return {
      selectedRole: "",
      allSelected: false,
      staffs: [],

      showModal: false,
      showUpdateModal: false,

      errors: [],
      
      staff: {
        first_name: " ",
        last_name: " ",
        email: "",
        phone_number: "",
        role: ""
      },
      url: this.$store.getters.getUrl
    };
  },
  mounted() {
    this.getAllStaffs();
  },
  methods: {
    createStaff() {
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let raw = JSON.stringify(this.staff);

      let requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(this.url, requestOptions)
        .then(response => response.json())
        .then(result => {
          this.staffs = [result, ...this.staffs];
          this.showModal = false;
          this.$store.commit("toggleLoading",false);
        })
        .catch(error => {
          this.errors.push(error);
          this.showModal = false;
          this.$store.commit("toggleLoading",false);
        });
    },
    getAllStaffs() {
      this.$store.commit("toggleLoading",true);
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: "GET",
        headers: myHeaders
      };

      fetch(this.url, requestOptions)
        .then(response => response.json())
        .then(result => {
          this.staffs = result;
          this.$store.commit("toggleLoading",false);
        })
        .catch(error => {
          this.errors.push(error);
          this.$store.commit("toggleLoading",false);
        });
    },

    changeStaffRole(staffId) {
     
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let staff = this.staffs.findIndex((staff,index) => {
        this.errors.push(index);
        if(staff._id == staffId) return true;
      });
   
     

      this.staffs[staff].role = this.selectedRole;
      this.staffs[staff]._id = undefined;
      let raw = JSON.stringify(this.staffs[staff]);

      let requestOptions = {
        method: "PUT",
        headers: myHeaders,
        body: raw,
        redirect: "follow"
      };

      fetch(this.url + staffId, requestOptions)
        .then(response => {
          if(response.status == 200) {
            return true;
          }
        })
        .catch(error => {
          this.errors.push(error);
        });
    },

    async updateStaffsRoles() {
     
      if(this.$store.getters.selectedStaffID.length < 1 || this.selectedRole == "") {
        return;
      }
     
      this.$store.commit("toggleLoading",true);
      let staffId = this.$store.getters.selectedStaffID;
      staffId.forEach(element => {
          this.changeStaffRole(element);
      });
        
     
      this.getAllStaffs();
      this.$store.commit("toggleLoading",false);
    },
  },

};
</script>

