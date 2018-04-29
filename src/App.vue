<template>
  <div id="app">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          
        </ul>
          TA LOGIN JaaJubJub &nbsp;
          <div v-if="reta != 'not'" ><input type="checkbox" id="switch"  v-model="check" @click="exchange(check)"/><label for="switch">Toggle</label> </div>&nbsp;
          <input style="width:100px" class="form-control mr-sm-2"  placeholder="Username" v-model="user" v-if="reta == 'not'">
          <input type="password" style="width:100px" class="form-control mr-sm-2"  placeholder="Password"  v-model="pass" v-if="reta == 'not'">
          <button @click="log()" class="btn btn-outline-success my-2 my-sm-0" v-if="reta == 'not'">Login</button>

          <button @click="logout()" class="btn btn-outline-success my-2 my-sm-0"  v-if="reta != 'not'">Logout</button>

      </div>
    </nav>
    <center style="font-size:30px;">ระบบจองคิว Presentation Data Structure Version 1.6</center>
    <center style="font-size:26px;">เรื่อง Hashing </center>
    <center style="font-size:26px;">ช่วงเวลา 17 เม.ย. - 20 เม.ย. </center>
      <div class="clock wrapper" align="center" style="font-size:24px;">
        <div class="date-time">
          {{ dateTimeString }}
        </div>
          <div style="font-size:24px;">
            พบกันที่ห้อง B401B เวลา 17.00
          </div>
      </div>
      <br>
    <div align="center">
      <table>
        <tr><td>
        <select v-model="selected" class="custom-select">
          <option disabled value="">Please select TA</option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
        </select>
        </td><td>
          <select v-model="selecttime" class="custom-select">
          <option disabled value="">Please select Time</option>
          <!-- Type A-->
          <!-- 13.00 - 16.00 -->
          <!--
          <option value="A">ช่วงที่ A = 13.00-13.20</option>
          <option value="B">ช่วงที่ B = 13.20-13.40</option>
          <option value="C">ช่วงที่ C = 13.40-14.00</option>
          <option value="D">ช่วงที่ D = 14.00-14.20</option>
          <option value="E">ช่วงที่ E = 14.20-14.40</option>
          <option value="F">ช่วงที่ F = 14.40-15.00</option>
          <option value="G">ช่วงที่ G = 15.00-15.20</option>
          <option value="H">ช่วงที่ H = 15.20-15.40</option>
          <option value="I">ช่วงที่ I = 15.40-16.00</option> 
          -->

          <!-- 17.00 - 20.00  -->
          <!--
          <option value="J">ช่วงที่ J = 17.00-17.20</option>
          <option value="K">ช่วงที่ K = 17.20-17.40</option>
          <option value="L">ช่วงที่ L = 17.40-18.00</option>
          <option value="M">ช่วงที่ M = 18.00-18.20</option>
          <option value="N">ช่วงที่ N = 18.20-18.40</option>
          <option value="O">ช่วงที่ O = 18.40-19.00</option>
          <option value="P">ช่วงที่ P = 19.00-19.20</option>
          <option value="Q">ช่วงที่ Q = 19.20-19.40</option>
          <option value="R">ช่วงที่ R = 19.40-20.00</option>
          -->

          <!-- Type B-->
          <!-- 17.00 - 20.00 -->
          
          <option value="A">ช่วงที่ A = 17.00-17.20</option>
          <option value="B">ช่วงที่ B = 17.20-17.40</option>
          <option value="C">ช่วงที่ C = 17.40-18.00</option>
          <option value="D">ช่วงที่ D = 18.00-18.20</option>
          <option value="E">ช่วงที่ E = 18.20-18.40</option>
          <option value="F">ช่วงที่ F = 18.40-19.00</option>
          <option value="G">ช่วงที่ G = 19.00-19.20</option>
          <option value="H">ช่วงที่ H = 19.20-19.40</option>
          <option value="I">ช่วงที่ I = 19.40-20.00</option> 
          

          <!-- Type C-->
          <!-- 10.00 - 12.00 -->
          <!--
          <option value="A">ช่วงที่ A = 10.00-10.20</option>
          <option value="B">ช่วงที่ B = 10.20-10.40</option>
          <option value="C">ช่วงที่ C = 10.40-11.00</option>
          <option value="D">ช่วงที่ D = 11.00-11.20</option>
          <option value="E">ช่วงที่ E = 11.20-11.40</option>
          <option value="F">ช่วงที่ F = 11.40-12.00</option>
          -->
        
          <!-- 13.00 - 16.00  -->
          <!--
          <option value="G">ช่วงที่ G = 13.00-13.20</option>
          <option value="H">ช่วงที่ H = 13.20-13.40</option>
          <option value="I">ช่วงที่ I = 13.40-14.00</option>
          <option value="J">ช่วงที่ J = 14.00-14.20</option>
          <option value="K">ช่วงที่ K = 14.20-14.40</option>
          <option value="L">ช่วงที่ L = 14.40-15.00</option>
          <option value="M">ช่วงที่ M = 15.00-15.20</option>
          <option value="N">ช่วงที่ N = 15.20-15.40</option>
          <option value="O">ช่วงที่ O = 15.40-16.00</option>
           -->


        </select>
        </td><td>
      <input type="text" v-model="name"  placeholder="5706021610100  อภิสิทธิ์ ทรัพย์ประดิษฐ์" size="45"/>
      <button @click="submitName()"  class="btn btn-success" v-if="check == true">Add</button>
      </td></tr>
      </table>
    </div>

    <div align ="center" style="font-size: 30px;">วิธีการจอง 1. เลือก Ta ที่ท่านต้องการ Present <br> 2. เลือกเวลา ที่ต้องการ Present <font color="red">ถ้าหากเวลาจองซ้ำกัน จะเลือกเฉพาะคนแรก </font> <br> 3. ใส่รหัสนักศึกษา กับ ชื่อ นามสกุล <br> ปล. อย่า จองมั่ว เพราะ จองแล้วไม่สามารถลบได้ คิดดีๆก่อนจองครับ </div>
    
    <div class="row">
      <div class="column" >
        <h2 align="center" style="color:green">  TA1  </h2>
      </div>
      <div class="column" >
        <h2 align="center" style="color:green"> TA2  </h2>
      </div>
      <div class="column" >
        <h2 align="center" style="color:green"> TA3  </h2>
      </div>
      <div class="column" >
        <h2 align="center" style="color:green"> TA4  </h2>
      </div>
    </div>

    <div class="row" >
      <div class="column" >
        <h3 align="center">{{ dayy }}</h3>
        <p align="center" v-for="personName in orderedUsers1" v-bind:key="personName['.key']" v-if="personName.date == daytemp">
            {{personName.time}} . {{personName.name}}
          <button @click="remove1(personName['.key'])"  v-if="tanum1.work != 'not'">X</button></p>
      </div>
      <div class="column" >
         <h3 align="center">{{ dayy }}</h3>
       <p align="center" v-for="personName of orderedUsers2" v-bind:key="personName['.key']" v-if="personName.date == daytemp">
          {{personName.time}} . {{personName.name}} 
         <button @click="remove2(personName['.key'])"  v-if="tanum2.work != 'not'">X</button></p>
      </div>
      <div class="column" >
         <h3 align="center">{{ dayy }}</h3>
        <p align="center" v-for="personName of orderedUsers3" v-bind:key="personName['.key']" v-if="personName.date == daytemp">
          {{personName.time}} . {{personName.name}} 
          <button @click="remove3(personName['.key'])"  v-if="tanum3.work != 'not'">X</button></p>
      </div>
      <div class="column" >
         <h3 align="center">{{ dayy }}</h3>
        <p align="center" v-for="personName of orderedUsers4" v-bind:key="personName['.key']" v-if="personName.date == daytemp">
          {{personName.time}} . {{personName.name}} 
          <button @click="remove4(personName['.key'])"  v-if="tanum4.work != 'not'">X</button></p>
      </div>
    </div>   
  
  </div>
</template>

<script>
import { TA1 } from './firebase';
import { TA2 } from './firebase';
import { TA3 } from './firebase';
import { TA4 } from './firebase';
import { add } from './firebase';
import { Status } from './firebase';
import moment from 'moment'; 
moment.locale('th'); 

export default {
  data () {
    return {
      name: '',
      selected: '',
      dateTimeString: '',
      day: '',
      dayy:'',
      daytemp:'',
      selectdate: '',
      selecttime: '',
      reta: 'not',
      tanum1:{username:'ta1',password:'1234',work: 'not'} ,
      tanum2:{username:'ta2',password:'2345',work: 'not'} ,
      tanum3:{username:'ta3',password:'3456',work: 'not'} ,
      tanum4:{username:'ta4',password:'4567',work: 'not'} ,
      user:'',
      pass:'',
      statemp1:'',
      statemp2:'',
      statemp3:'',
      statemp4:'',
      open: 'close',
      check: '',
    }
  },
  firebase:{
    names1: TA1,
    names2: TA2,
    names3: TA3,
    names4: TA4,
    adds: add
  },
  methods:{
    submitName(){
      if(this.name === '' || this.selecttime === ''){

      }else{
        if(this.selected == "1"){
          TA1.push({name: this.name,ta: this.selected ,time: this.selecttime,date :this.day})
        }
        else if(this.selected == "2"){
          TA2.push({name: this.name,ta: this.selected ,time: this.selecttime,date :this.day})
        }
        else if(this.selected == "3"){
          TA3.push({name: this.name,ta: this.selected ,time: this.selecttime,date :this.day})
        }
        else if(this.selected == "4"){
          TA4.push({name: this.name,ta: this.selected ,time: this.selecttime,date :this.day})
        }
          this.name = "",
          this.selected ="",
          this.selecttime =""
      }
    },
    remove1(key){
 
  
          TA1.child(key).remove();

    },
    remove2(key){


          TA2.child(key).remove();

    },
    remove3(key){
 
 
          TA3.child(key).remove();

    },
    remove4(key){
  
          TA4.child(key).remove();
 
    },
    log(){
      if(this.tanum1.username == this.user && this.tanum1.password == this.pass ){
        this.tanum1.work = "come",
        this.reta = 'Yeb'
       
      }
      if(this.tanum2.username == this.user && this.tanum2.password == this.pass ){
        this.tanum2.work = "come",
        this.reta = 'Yeb'
      }
      if(this.tanum3.username == this.user && this.tanum3.password == this.pass ){
        this.tanum3.work = "come",
        this.reta = 'Yeb'
      }
      if(this.tanum4.username == this.user && this.tanum4.password == this.pass ){
        this.tanum4.work = "come",
        this.reta = 'Yeb'
      }
      this.user = '',
      this.pass = '',
      this.open = 'open'
    },
    logout(){
      this.reta = 'not',
      this.tanum1.work = "not",
      this.tanum2.work = "not",
      this.tanum3.work = "not",
      this.tanum4.work = "not",
      this.open = 'close'
    },
    update(name){
      console.log(name);
    },
    exchange(value){
      //add.child(key).update({value : false});
      this.adds.forEach(element => {
        if(value == true ){
            add.child(element[".key"]).update({value : false});
        }else{
            add.child(element[".key"]).update({value : true});
        }
      });
      
    }
  },
  created () {
    setInterval(() => {
      this.dateTimeString = moment().format('LLLL'); // วันพุธที่ 31 มกราคม 2018 เวลา 22:07
      this.day = moment().format('D'); 
      this.dayy = moment().format(' Do MMMM'); // กุมภาพันธ์ 19 2018, 3:28:15 หลังเที่ยง
      this.daytemp = this.day;

      this.adds.forEach(element => {
        this.check = element["value"];
      });
     
    },1000)
  },
  computed:{
      orderedUsers1: function () {
        return _.orderBy(this.names1, 'time')
      },
      orderedUsers2: function () {
        return _.orderBy(this.names2, 'time')
      },
      orderedUsers3: function () {
        return _.orderBy(this.names3, 'time')
      },
      orderedUsers4: function () {
        return _.orderBy(this.names4, 'time')
      }
  }
}

</script>

<style>
* {
    box-sizing: border-box;
    font-family: "Times New Roman", Times, serif;
}

/* Create three equal columns that floats next to each other */
.column {
    float: left;
    width: 25%;
    padding: 15px;
    font-size: 20px;
}

/* Clear floats after the columns */
.row:after {
    content: "";
    display: table;
    clear: both;
   
}

/* Responsive layout - makes the three columns stack on top of each other instead of next to each other */
@media (max-width:600px) {
    .column {
        width: 100%;
        
    }
}

input[type=checkbox] {
  height: 0;
  width: 0;
  visibility: hidden;
}

label {
  cursor: pointer;
  text-indent: -9999px;
  width: 50px;
  height: 30px;
  background: grey;
  display: block;
  border-radius: 100px;
  position: relative;
}

label:after {
  content: '';
  position: absolute;
  top: 5px;
  left: 5px;
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 90px;
  transition: 0.3s;
}

input:checked + label {
  background: #bada55;
}

input:checked + label:after {
  left: calc(100% - 5px);
  transform: translateX(-100%);
}

label:active:after {
  width: 130px;
}



</style>
