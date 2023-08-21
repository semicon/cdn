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
document.write(`<footer class="container p-4 rounded"><div class="d-lg-flex justify-content-between"><div><img src="https://semicon.github.io/img/LOGOKRUCHIANgrow.png" height="35" alt="${entries1}" /></div><div class="copyright"> 
<p>Copyright   <img src="https://mirrors.creativecommons.org/presskit/icons/heart.red.png" width="25" height="25" alt="cc" /> 2023${dd}, developed and maintained by <a  href="https://guruchian.blogspot.com/" target="_blank"> Dr. Wichian Ph.</a></p></div>
<div>
<ul class="d-flex gap-3 list-unstyled">
<li><a href="https://www.facebook.com/construct2n3"  target="_blank"><i class="bi bi-facebook  h4"></i></a></li>
<li ><a href="https://line.me/ti/p/XjwSadX6Ol"  target="_blank"><i class="bi bi-line text-success  h4"></i></a></li>
<li><a href="https://guruchian.blogspot.com/p/donate.html"  target="_blank"><i class="bi bi-cart3 text-danger h4"></i></a></li>
</ul>
</div>
</div>
</footer>`);
} 
