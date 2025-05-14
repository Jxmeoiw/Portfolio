   
          var tablinks = document.getElementsByClassName("tab-links");
          var tabcontents = document.getElementsByClassName("tab-contents");

          function opentab(tabname) {
              for(tablink of tablinks){
                  tablink.classList.remove("active-link");
              }
              for(tabcontent of tabcontents){
                  tabcontent.classList.remove("active-tab");
              }
              event.currentTarget.classList.add("active-link");
              document.getElementById(tabname).classList.add("active-tab")
          }

          document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector("form");
          
            form.addEventListener("submit", function (e) {          
              setTimeout(function () {
                form.reset();
              }, 100); 
            });
          });
          