<template>
  <div class="staff-table">
    <span class="info" v-if="staffs.length < 1">No Staff Available</span>
    <table class="table" v-else>
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
        <tr v-for="staff in staffs" :key="staff._id">
          <td class="small">
            <input type="checkbox" v-model="$store.state.selectedStaffID" :value="staff._id" class="checkbox" />
          </td>
          <td class="large">{{ staff.first_name }}</td>
          <td class="large">{{ staff.last_name }}</td>
          <td class="large">{{ staff.email | limit }}</td>
          <td class="large">{{ staff.phone_number }}</td>
          <td class="large">{{ staff.role }}</td>
          <td @click="deleteStaff(staff._id)" class="small">
            <img src="/img/icons/trash-2.png" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    staffs: Array,
    
  },
  data() {
    return {
      selectedAll: false,
      url: this.$store.getters.getUrl,
      errors: []

    };
  },
  filters: {
      limit(str) {
         
          let n = str.indexOf("@");
          return (str.length > 10) ? str.substr(0, 9) +".." + str.substr(n) : str;
      }
  },
  methods: {
    selectAllStaff() {
      this.$store.commit("changeStaffId",[]);

      if (this.selectedAll) {
        this.selectedAll = false;
        return;
      }

      this.staffs.forEach(staff => {
        this.$store.commit("addToStaffId",staff._id);
      });
      this.selectedAll = true;
    },
    deleteStaff(staffId) {
      this.$store.commit("toggleLoading", true);
      let myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      let requestOptions = {
        method: "DELETE",
        headers: myHeaders
      };

      fetch(this.url + staffId, requestOptions)
        .then(result => {
          this.loading = false;
          if (result.status == 200) {
            let staffIndex = this.staffs.findIndex((staff, index) => {
                this.errors.push(index);
              if (staff._id == staffId) return true;
            });

            if (staffIndex > -1) {
              this.staffs.splice(staffIndex, 1);
            }
          }
          this.$store.commit("toggleLoading", false);
        })
        .catch(error => {
            this.errors.push(error);
          this.$store.commit("toggleLoading", false);
        });
    },

   
  }
};
</script>