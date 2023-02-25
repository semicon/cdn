/**
 * Created by Dr.Wichian Pumphuang 
 *     Blog: https://guruchian.blogspot.com
 *   Github: https://github.com/semicon
 *     Line: semisailom
 */
         
function setconfig(){
      const dd = new Date()
      document.querySelector('.copyleft').innerHTML = "Copyleft  <img src='https://mirrors.creativecommons.org/presskit/icons/heart.red.png' width='25' height='25' alt='cc'> @KruChian. Created by <a href='https://guruchian.blogspot.com' target='_blank'>Wichian Ph.</a>"
    }
    
function changePage(valx) {
      console.log(valx)
        let idEl = [...$('section')].forEach(elx => {
            if(elx.id === valx || elx.id === "head"){             
              $('#'+elx.id).show()
              $('#navx').click()
            }else{
              $('#'+elx.id).hide()
           }
        });
    }        
