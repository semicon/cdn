function showTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "น.";

  if (h == 24) {
    h = 0;
  }

  //if (h > 12) {
  //  h = h - 12;
  //  session = "PM";
  //}

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = thaiNumber(h) + ":" + thaiNumber(m)+ ":" + thaiNumber(s) + " " + session;
  document.getElementById("MyClockDisplay").innerText = time;
  document.getElementById("MyClockDisplay").textContent = time;

  setTimeout(showTime, 1000);

}

showTime();



const  tags = document.getElementsByTagName("footer");
if (tags.length == 0) {
document.write(`<div id="cover" style="position:fixed; top:0; left:0; background:rgba(0,0,0,0.6); z-index:10; width:100%; height:100%;">
<div style="position: absolute;  left: 50%;  top: 50%; z-index:15; color:red; transform: translate(-50%, -50%);"><center><h2>Sorry!, you are violating the terms.</h2></center></div>
</div>`);  
}
const datex = new Date().getFullYear()
const elemx = document.querySelector("body footer")
const developerName = elemx.innerHTML.match(unescape("%u0e14%u0e23%u002e%u0e27%u0e34%u0e40%u0e0a%u0e35%u0e22%u0e23%u0020%u0e1e%u0e38%u0e48%u0e21%u0e1e%u0e27%u0e07"))
const developer = elemx.innerHTML.match("Dr.Wichian Ph.")
const logodev = elemx.innerHTML.match("LOGOKRUCHIANgrow.png")
const nicknamedev = elemx.innerHTML.match("kruChian")
let dd = '';
if(datex != '2023') {
dd = ' - '+datex;
}
if (!developerName || !developer || !logodev || !nicknamedev) {
elemx.remove();
document.write(`<footer class="container"><div class="row d-lg-flex justify-content-between"><div class = "col-md-3 text-center"><img src="https://semicon.github.io/img/LOGOKRUCHIANgrow.png" height="35" alt="${developerName}" /></div><div class="col-md-6 copyright text-center"> 
<p>Copyright   <img src="https://mirrors.creativecommons.org/presskit/icons/heart.red.png" width="25" height="25" alt="${nicknamedev}" /> 2023${dd}, developed by <a  href="https://guruchian.blogspot.com/" target="_blank"> Dr. Wichian Ph.</a></p></div>
<div class = "col-md-3">
<ul class="d-flex gap-3 list-unstyled justify-content-center">
<li><a href="https://www.facebook.com/construct2n3"  target="_blank"><i class="bi bi-facebook  h4"></i></a></li>
<li ><a href="https://line.me/ti/p/XjwSadX6Ol"  target="_blank"><i class="bi bi-line text-success  h4"></i></a></li>
<li><a href="https://guruchian.blogspot.com/p/donate.html"  target="_blank"><i class="bi bi-cart3 text-danger h4"></i></a></li>
</ul>
</div>
</div>
</footer>`);
} 

//เปลี่ยนเลขอารบิคเป็นเลขไทย
      function thaiNumber(numb){
         var array = {"1":"๑", "2":"๒", "3":"๓", "4" : "๔", "5" : "๕", "6" : "๖", "7" : "๗", "8" : "๘", "9" : "๙", "0" : "๐"};
         var str = numb.toString();
         for (var val in array) {
            str = str.split(val).join(array[val]);
          }
         return str;
      }
