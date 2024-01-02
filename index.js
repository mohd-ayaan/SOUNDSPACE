//detecting button press

var n=document.querySelectorAll(".drum").length;
for(var i=0;i<n;i++)
{
    document.querySelectorAll("button")[i].addEventListener("click",function()
{//this.style.color="white";
    var sbutton=this.innerHTML;
    makesound(sbutton);
    Animation(sbutton);

}
)};

//detecting keyboard press
document.addEventListener("keydown",function(event)
{
    //console.log(event);
      makesound(event.key);
      Animation(sbutton);
});


/*this.style.color="white";
    var audio=new Audio("./sounds/tom-1.mp3");
    audio.play();*/

    function makesound(key)
    {
        switch(key) {
            case "w":
                var tom1=new Audio("./sounds/tom-1.mp3");
                tom1.play();
                break;
    
            case "a":
                var tom2=new Audio("./sounds/tom-2.mp3");
                tom2.play();
                break;
            
            case "s":
               var atom3=new Audio("./sounds/tom-3.mp3");
               atom3.play();
               break; 
    
            case "d" :
               var tom4=new Audio("./sounds/tom-4.mp3");
               tom4.play();
               break;
    
            case "j":
               var crash=new Audio("./sounds/crash.mp3");
               crash.play();
               break;
               
            case "k":
                    var kick=new Audio("./sounds/kick-bass.mp3");
                    kick.play();
                    break;
        
            case "l":
                var snare=new Audio("./sounds/snare.mp3");
                snare.play();
                break;

            default:
                console.log("press w,a,s,d,j,k,l");
                break;
            }
        }

   function Animation(keypr)
    {
    var activebutton=document.querySelector("."+keypr);
    activebutton.classList.add("pressed");

    setTimeout(function()
    {activebutton.classList.remove("pressed");},100);
    }










































































































































































































































































































































































































































































    