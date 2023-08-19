const datenow = new Date().getFullYear() ;
const elemx = document.querySelector("body footer");
const entries = elemx.innerHTML.match("Dr. Wichian ph.");
let dd = ''
		 if(datenow != '2023') {
				dd = ' - '+datenow ;
			}
		if (!entries) {
		    elemx.remove();
		    document.write(`<footer>Copyright   <img src="https://mirrors.creativecommons.org/presskit/icons/heart.red.png" width="25" height="25" alt="cc" /> 2023${dd}, <a class="text-warning" href="https://guruchian.blogspot.com/" target=_blank> Dr. Wichian Ph.</a>   All Rights Reserved.</footer>`);
		} 
