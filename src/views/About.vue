<template>
  <div class="dashboard">
    <div class="nav-bar">
      <div class="logo"></div>
      <div class="dropdown">
        <span class="circle"></span>
        <span class="user-name">Hi, Joshua</span>
        <img class="arrow" />
        <div class="dropdown-content">
          <p>Hello World!</p>
          <p>Hello World!</p>
          <p>Hello World!</p>
        </div>
      </div>
    </div>

    <div class="content">
      <div class="side-bar">
        <div :class="{ 'side-element': true, selected: isSelected(0) }" @click="activeTab = 0">
          <img class="box-icon" src="/img/icons/box.png" />
        </div>
        <div :class="{ 'side-element': true, selected: isSelected(1) }" @click="activeTab = 1">
          <img class="users-icon" src="/img/icons/users.png" />
        </div>
        <div :class="{ 'side-element': true, selected: isSelected(2) }" @click="activeTab = 2">
          <img class="card-icon" src="/img/icons/MyCards.png" />
        </div>
      </div>
      <div class="main">
        <div class="container">
          <div class="header">
            <h2 class="title">Employees</h2>
            <button class="create-btn">Add New</button>
          </div>

          <div class="description">
            <h1>Josh Bakery Ventures</h1>
            <p>62, Bode Thomas Surulere, Lagos</p>
          </div>

          <div class="controls">
            <div class="select-form">
              <select class="select-box">
                <option value="">Change role</option>
                <option value="admin">Admin</option>
                <option valsue="staff">Staff</option>
              </select>
              <button class="change-btn">Change</button>
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

          <div class="staff-table">
            <table class="table">
              <thead class="thead">
                <tr>
                  <th class="check">
                    <input type="checkbox" class="checkbox" @click="selectAllStaff()" id="allchecker" />
                  </th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Role</th>
                  <th></th>
                </tr>
              </thead>

              <tbody class="tbody">
                <tr v-for="staff in staffs" :key="staff.id">
                  <td class="small">
                    <input type="checkbox" v-model="selectedStaffID" :value="staff.id" class="checkbox" />
                  </td>
                  <td class="large">{{ staff.first_name }}</td>
                  <td class="large">{{ staff.last_name }}</td>
                  <td class="large">{{ staff.email }}</td>
                  <td class="large">{{ staff.phone_number }}</td>
                  <td class="large">{{ staff.role }}</td>
                  <td @click="deleteStaff(staff.id)" class="small"><img src="/img/icons/trash-2.png" /></td>
                </tr>


              
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      staffs: [
        {
          id: "67214784216",
          first_name: "Ibrahim",
          last_name: "Abdulsamad",
          email: "abdulsamad@gmail.com",
          phone_number: "+2349036898349",
          role: "admin"
        },
        {
          id: "67214784266",
          first_name: "Ibrahim",
          last_name: "Abdulsamad",
          email: "abdulsamad@gmail.com",
          phone_number: "+2349036898349",
          role: "admin"
        }
      ],
      allSelected : false,
      selectedStaffID: [],
      activeTab: 1,
      selectedAll: false,
    }
  },
  methods: {
    deleteStaff(staffId) {
      return staffId;
    },
     isSelected(index) {
   
      if(this.activeTab == index) return true;
      return false; 
    },
    selectAllStaff() {
      this.selectedStaffID = [];
      
      if(this.selectedAll) {
        this.selectedAll = false;
       return;
      }
      

      this.staffs.forEach(staff => {
          this.selectedStaffID.push(staff.id);
      });
      this.selectedAll = true;
        


   
    }




  },
  computed: {
   
  }
}
</script>


<style scoped>
.dashboard {
  background-color: #e5e5e5;
  width: 1680px;
  overflow: auto;
}
.nav-bar {
  width: 1680px;
  height: 72px;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.1);
  box-sizing: border-box;
}

.dropdown {
  position: relative;
  display: block;
  grid-column-start: 18;
  grid-column-end: 22;
  margin-top: auto;
  margin-bottom: auto;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content p {
  margin-top: 10px;
  border-bottom: 1px solid black;
  text-align: center;
}

.user-name {
  margin-top: 11px;
  margin-right: 15px;
  text-align: center;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 25px;

  /* identical to box height, or 156% */
  letter-spacing: -0.251429px;

  color: #013c61;
  display: inline-block;
  margin-bottom: 10px;
 
}

.arrow {
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;

  border-top: 5.56px solid #013c61;


}

.logo {
  margin-left: 8px;
  width: 152px;
  height: 44px;
  background-image: url("/img/icons/Bitmap.png");
  margin-top: auto;
  margin-bottom: auto;
}

.circle {
  width: 35px;
  height: 35px;
  background-color: #6a7e8a;
  border-radius: 17.5px;
  margin-right: 9px;
  float: left;
}

.content {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
}

.side-bar {
  width: 82px;
  height: 956px;
  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.1);
  box-sizing: border-box;
  grid-column-start: 1;
  grid-column-end: 2;
}

.side-bar .side-element {
  width: 100%;
  height: 53px;
  margin-top: 79px;
}

.side-bar .side-element .card-icon {
  width: 22px;
  height: 16px;
}

.side-bar .selected {
  border-left: 5px #2bda53 solid;
}

.side-bar .side-element img {
  margin-left: 30px;
  margin-top: 15.5px;
  width: 22px;
  height: 22px;
}

.main {
  grid-column-start: 2;
  grid-column-end: 20;
}

.main .container {
  margin-left: 73px;
  margin-top: 93px;
  margin-right: 72px;
  width: 1462px;
}
.main .header {
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  grid-gap: 70px;
}

.main .header h2 {
  grid-column-start: 1;
  grid-column-end: 3;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 26px;
  line-height: 15px;

  /* or 58% */
  display: flex;
  align-items: center;
  letter-spacing: -0.65px;

  color: #013c61;
}

.main .header .create-btn {
  grid-column-start: 19;
  grid-column-end: 20;
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

.main .description {
  margin-top: 40px;
  display: grid;
  grid-template-columns: repeat(20, 1fr);
  background: #ffffff;
  border-radius: 5px;
  width: 1462px;
  height: 114px;
}

.main .description h1 {
  grid-column-start: 1;
  grid-column-end: 10;
  margin-top: auto;
  margin-bottom: auto;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 36px;
  line-height: 15px;

  /* or 42% */
  display: flex;
  align-items: center;
  letter-spacing: -0.9px;

  color: #013c61;
  margin-left: 27px;
}

.main .description p {
  grid-column-start: 16;
  grid-column-end: 22;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 22px;
  line-height: 15px;

  /* or 68% */
  display: flex;
  align-items: center;
  text-align: right;
  letter-spacing: -0.55px;

  color: #013c61;
  margin-top: auto;
  margin-bottom: auto;
}

.controls {
  margin-top: 35px;
  display: grid;
  grid-template-columns: repeat(40, 1fr);
  grid-gap: 0px;
}

.controls .select-form {
  grid-column-start: 1;
  grid-column-end: 20;
}

.controls .select-form .select-box {
  width: 146px;
  height: 34px;
    -webkit-appearance: none;
    appearance: none;

  background-color: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;
  margin-right: 12px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;

  /* identical to box height */
  letter-spacing: -0.08px;

  color: #6a7e8a;
  background: url(/img/icons/Grouparrow.png) no-repeat 90% 50% #FFFFFF;
  
}

.controls .select-form .select-box option {
    appearance: none;
    -webkit-appearance: none;
    background: rgba(255, 255, 255, 0.3);
    color: rgb(12, 1, 1);
}

.controls .select-form .change-btn {
  background: #2bda53;
  border-radius: 3px;
  width: 118px;
  height: 34px;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;

  /* identical to box height */
  text-align: center;

  color: #ffffff;
  margin-right: 17px;
  border: none;
}

.controls .select-form .search-field {
  width: 332px;
  height: 34px;

  background: #ffffff;
  border: 1px solid rgba(106, 126, 138, 0.4);
  box-sizing: border-box;
  border-radius: 3px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: -0.08px;

  color: rgba(106, 126, 138, 0.4);
}

.controls .select-form .search-icon {
  margin-left: -23px;
}

.controls .pagination {
  grid-column-start: 37;
  grid-column-end: 40;
  position: relative;
}

.controls .pagination .page-no {
  margin-right: 6.13px;
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 15px;

  /* or 107% */

  align-items: center;

  color: #013c61;
  margin-top: auto;
  margin-bottom: auto;
}

.controls .pagination .prev-page {
  position: absolute;
  top: 2px;
  cursor: pointer;
  left: 48px;
}

.controls .pagination .next-page {
  position: absolute;
  top: 2px;
  left: 70px;
  cursor: pointer;
}

.staff-table {
  margin-top: 20px;
  width: 100%;

}



.staff-table .table {
  border: 0px solid;
  
   border-collapse:separate; 
  border-spacing: 0 16px;
}

.staff-table .table .thead tr th {
  text-align: left;
  
} 

.staff-table .table .thead tr .check {
  text-align: center;
}

.staff-table .table .tbody tr {
  width: 1462px;
  height: 54px;


  background: #FFFFFF;
  border-radius: 5px;
  margin-top: 16px;
  
}

.staff-table .table .thead tr {
  
  
}

.staff-table .table .tbody tr .large {
  width: 250px;
  
  
}

.staff-table .table .tbody tr .small {
   width: 100px;
   text-align: center;
   cursor: pointer;
   
}

.staff-table .table .tbody tr .small {
   width: 100px;
   text-align: center;
   cursor: pointer;
   
}


th {
  font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 14px;
line-height: 15px;

align-items: center;
text-transform: uppercase;

color: #013C61;
}

td {

font-family: Roboto;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 31px;
letter-spacing: -0.0914285px;

color: #6A7E8A;
}

.checkbox {
  cursor: pointer;
  appearance: none;
  -webkit-appearance: none;
  width: 13px;
  height: 13px;

  border: 1.2px solid rgba(106, 126, 138, 0.4);
  border-radius: 0.5px;
}

.checkbox:active, .checkbox:checked:active {
	box-shadow: 0 1px 2px rgba(0,0,0,0.05), inset 0px 1px 3px rgba(106, 126, 138, 0.4);
}

.checkbox:checked {
	background-color:  #2BDA53;
	
}

.checkbox:checked:after {

	
	position: absolute;

}

#allchecker:checked ~ .checkbox {
  display: none;
}



</style>
