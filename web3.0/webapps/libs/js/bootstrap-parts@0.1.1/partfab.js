      const tags = document.getElementsByTagName("footer")
      const fabActive = document.querySelector("#fab-active")
      if (!tags || !fabActive) {
        document.write(`<div id="cover" style="position:fixed; top:0; left:0; background:rgba(0,0,0,0.95); z-index:10; width:100%; height:100%;">
<div style="position: absolute;  left: 50%;  top: 50%; z-index:15; color:red; transform: translate(-50%, -50%);"><center><h2>Sorry!, you are violating the terms.</h2></center></div>
</div>`);
      }
      const datex = new Date().getFullYear();
      const elemx = document.querySelector("body footer");
      const developerName = elemx.innerHTML.match(
        unescape(
          "%u0e14%u0e23%u002e%u0e27%u0e34%u0e40%u0e0a%u0e35%u0e22%u0e23%u0020%u0e1e%u0e38%u0e48%u0e21%u0e1e%u0e27%u0e07"
        )
      );
      const developer = elemx.innerHTML.match("Dr.Wichian Ph.");
      const nicknamedev = elemx.innerHTML.match("kruChian");
      
      let dd = "";
      if (datex != "2023") {
        dd = " - " + datex;
      }
      if (!developerName || !developer || !nicknamedev) {
        elemx.remove();
        document.write(`<footer class="container p-5"><div class="copyright text-center"> 
<p>Copyright   <img src="https://mirrors.creativecommons.org/presskit/icons/heart.red.png" width="25" height="25" alt="${nicknamedev}" /> 2023${dd}, Created by <a  href="https://guruchian.blogspot.com/" target="_blank" alt="ดร.วิเชียร พุ่มพวง"> Dr.Wichian Ph.</a></p></div>
</div>
</footer>`);
      }
if (!fabActive) {
      document.write(`<div id="fab-active"></div>`)
}
$("#fab-active").html(`<div class="fab-container">
      <div class="fab">
        <i><img src="https://semicon.github.io/img/logosm.png" class="rounded-circle" style="width: 60px;"></i>
      </div>
  
      <ul class="fab-options">
        <li>
          <span class="fab-label">ติดตามเรา</span>
          <div class="fab-icon-holder">
            <a target="_blank" href="https://web.facebook.com/construct2n3"><i class="fa-brands fa-facebook fs-1 text-primary"></i></i></a>
          </div>
        </li>
        <li>
          <span class="fab-label">ติดต่อเรา</span>
          <div class="fab-icon-holder">
            <a target="_blank" href="https://mail.google.com/mail/u/0/?fs=1&to=ph.wichian@gmail.com&tf=cm"><i class="fas fa-envelope fs-2 text-danger"></i></a>
          </div>
        </li>
        <li style="margin-bottom: 60px;">
          <span class="fab-label">สนับสนุนเรา</span>
          <div class="fab-icon-holder">
            <a target="_blank" href="https://guruchian.blogspot.com/p/donate.html"><img src="https://semicon.github.io/img/web/coffee.png" class="rounded-circle" style="width: 100%;"></a>
          </div>
        </li>
      </ul>
</div>`)
