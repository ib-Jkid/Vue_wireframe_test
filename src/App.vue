<template>
  
  <router-view/>
  
</template>

<style>
 * {
   padding: 0;
   margin: 0;
 }

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
  margin-top: 70px;
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
  background: url(/img/icons/Grouparrow.png) no-repeat 90% 50% #ffffff;
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

  border-collapse: separate;
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

  background: #ffffff;
  border-radius: 5px;
  margin-top: 16px;
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

  color: #013c61;
}

td {
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 31px;
  letter-spacing: -0.0914285px;

  color: #6a7e8a;
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

.checkbox:active,
.checkbox:checked:active {
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05),
    inset 0px 1px 3px rgba(106, 126, 138, 0.4);
}

.checkbox:checked {
  background-color: #2bda53;
}

.checkbox:checked:after {
  position: absolute;
}

#allchecker:checked ~ .checkbox {
  display: none;
}

@media only screen and (max-width: 1400px) {
  .dashboard {
    width: 1400px;
  }
  .nav-bar {
    width: 1400px;
  }

  .dropdown-content {
    min-width: 160px;
  }

  .arrow {
    width: 0;
  }

  .logo {
    width: 152px;
  }

  .circle {
    width: 35px;
  }

  .side-bar {
    width: 82px;
  }

  .side-bar .side-element {
    width: 100%;
  }

  .side-bar .side-element .card-icon {
    width: 22px;
    height: 16px;
  }

  .side-bar .side-element img {
    width: 22px;
  }

  .main .container {
    width: 1140px;
  }

  .main .header .create-btn {
    width: 200px;
  }

  .main .description {
    width: 1140px;
  }

  .controls .select-form .select-box {
    width: 146px;
  }

  .controls .select-form .change-btn {
    width: 118px;
  }

  .controls .select-form .search-field {
    width: 332px;
  }

  .staff-table {
    width: 100%;
  }

  .staff-table .table .tbody tr {
    width: 1140px;
  }

  .staff-table .table .tbody tr .large {
    width: 250px;
  }

  .staff-table .table .tbody tr .small {
    width: 100px;
  }

  .checkbox {
    width: 13px;
  }

  .dropdown {
    grid-column-start: 17;
    grid-column-end: 22;
  }

  .controls .select-form {
    grid-column-start: 1;
    grid-column-end: 24;
  }

  .main .description h1 {
    font-size: 33px;
  }

  .main .description p {
    grid-column-start: 15;
    grid-column-end: 22;

    font-size: 20px;
  }

  .main .header .create-btn {
    grid-column-start: 14;
    grid-column-end: 20;
    margin-left: 25px;
  }
}
@media only screen and (max-width: 600px) {
  .dashboard {
    width: 600px;
  }
  .nav-bar {
    width: 600px;
  }

  .dropdown-content {
    min-width: 160px;
  }

  .arrow {
    width: 0;
  }

  .logo {
    width: 152px;
  }

  .circle {
    width: 35px;
  }

  .side-bar {
    width: 82px;
    display: none;
  }

  .side-bar .side-element {
    width: 100%;
  }

  .side-bar .side-element .card-icon {
    width: 22px;
    height: 16px;
  }

  .side-bar .side-element img {
    width: 22px;
  }

  .main .container {
    width: 490px;
    overflow: scroll;
  }

  .main .header .create-btn {
    width: 200px;
  }

  .main .description {
    width: 490px;
  }

  .controls .select-form .select-box {
    width: 146px;
  }

  .controls .select-form .change-btn {
    width: 118px;
  }

  .controls .select-form .search-field {
    width: 332px;
  }

  .staff-table {
    width: 100%;
  }

  .staff-table .table .tbody tr {
    width: 490px;
  }

  .staff-table .table .tbody tr .large {
    width: 250px;
  }

  .staff-table .table .tbody tr .small {
    width: 100px;
  }

  .checkbox {
    width: 13px;
  }

  .dropdown {
    grid-column-start: 10;
    grid-column-end: 22;
  }

  .controls .select-form {
    grid-column-start: 1;
    grid-column-end: 30;
  }

  .main {
    grid-column-start: 1;
    margin: 0;
  }
  .main .description {
    height: 70px;
  }
  .main .description h1 {
    font-size: 20px;
  }

  .main .description p {
    grid-column-start: 10;
    grid-column-end: 22;

    font-size: 14px;
  }

  .main .container {
    margin-left: 20px;
  }

  .content {
    display: block;
  }

  .main .header .create-btn {
    grid-column-start: 5;
    grid-column-end: 20;
    margin-left: 25px;
  }

  .controls .pagination {
    grid-column-start: 30;
  }

  .staff-table {
    overflow: scroll;
  }

  .table {
    width: 1000px;
  }
}

@media only screen and (max-width: 500px) {
  .dashboard {
    width: 100%;
  }
  .nav-bar {
    width: 100%;
  }

  .dropdown-content {
    min-width: 160px;
  }

  .arrow {
    width: 0;
  }

  .logo {
    width: 152px;
  }

  .circle {
    width: 30px;
    height: 30px;
  }

  .main .container {
    width: 95%;
    overflow: scroll;
  }

  .main .header .create-btn {
    width: 100px;
    font-size: 14px;
  }

  .main .description {
    width: 94%;
  }

  .controls .select-form .select-box {
    width: 60%;
    margin-bottom: 10px;
  }

  .controls .select-form .change-btn {
    width: 100px;
  }

  .controls .select-form .search-field {
    width: 332px;
    margin-bottom: -10px;
  }

  .staff-table {
    width: 100%;
  }

  .staff-table .table .tbody tr {
    width: 490px;
  }

  .staff-table .table .tbody tr .large {
    width: 250px;
  }

  .staff-table .table .tbody tr .small {
    width: 100px;
  }

  .checkbox {
    width: 13px;
  }

  .dropdown {
    grid-column-start: 10;
    grid-column-end: 22;
  }

  .controls .select-form {
    grid-column-start: 1;
    grid-column-end: 30;
  }

  .main .description {
    height: 70px;
  }
  .main .description h1 {
    font-size: 15px;
    grid-column-end: 11;
  }

  .main .description p {
    grid-column-start: 12;
    grid-column-end: 22;

    font-size: 10px;
  }

  .main .container {
    margin-left: auto;
    margin-right: auto;
  }

  .main .header .create-btn {
    grid-column-start: 4;
    grid-column-end: 20;
    margin-left: 25px;
  }

  .controls .pagination {
    grid-column-start: 28;
  }

  .staff-table {
    overflow: scroll;
  }
}
</style>

