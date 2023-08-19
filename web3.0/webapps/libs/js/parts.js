const datenow = new Date().getFullYear() ;
        const elemx = document.querySelector("body footer");
		const entries = elemx.innerHTML.match("Dr. Wichian ph.");
		let dd = ''
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
