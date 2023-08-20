const  tags = document.getElementsByTagName("footer");
const datenow = new Date().getFullYear() ;
const elemx = document.querySelector("body footer");
const entries = elemx.innerHTML.match("Dr. Wichian ph.");
let dd = ''
if (tags.length == 0) {
document.write(`<div id="cover" style="position:fixed; top:0; left:0; background:rgba(0,0,0,0.6); z-index:10; width:100%; height:100%;">
<div style="position: absolute;  left: 50%;  top: 50%; z-index:15; color:red; transform: translate(-50%, -50%);"><center><h2>Sorry!, you are violating the terms.</h2></center></div>
</div>`);  
}
if(datenow != '2023') {
dd = ' - '+datenow;
}
if (!entries) {
elemx.remove();
document.write(`<footer class="container p-4 rounded"><div class="d-lg-flex justify-content-between"><div><img src="https://semicon.github.io/img/LOGOKRUCHIANgrow.png" height="35" alt="cc" /></div><div class="copyright"> 
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
