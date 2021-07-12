var x=document.getElementById("text");
var y=document.getElementById("result");
var z=document.getElementById("encrypt");
var a=document.getElementById("myNav");
y.innerHTML ="Encrypted text";

var alpha=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","1","2","3","4","5","6","7","8","9","0",".",",","?","/","@"];
var code =["._","_...","_._.","_..",".",".._.","__.","....","..",".___","_._","._..","__","_.","___",".__.","__._","._.","...","_",".._","..._",".__","_.._","_.__","__..",".____","..___","...__","...._",".....","_....","__...","___..","____.","_____","._._._","__..__","..__..","_.._.",".__._."];

var mor = `<strong>Morse Code</strong> is a method used in telecommunication to encode text characters as standardized sequences of two different signal durations, called dots and dashes or dits and dahs. Morse code is named after Samuel Morse, an inventor of the telegraph.`;
var cease = `<strong>Caesar Cipher</strong> is a type of substitution cipher in which each letter in the plaintext is replaced by a letter of some fixed number of positions down the alphabet. The method is named after Julius Caesar, who used it in his private correspondence.`;
function choice() {
    y.innerHTML ="Encrypted text";
   
    if(z.value==0)
    {
        document.getElementById("brief").innerHTML = mor;
        document.getElementById("brief2").innerHTML = mor;
    }
    else{
        document.getElementById("brief").innerHTML = cease;
        document.getElementById("brief2").innerHTML = cease;
    }
}
function sub() {
    x.style.color="grey";
    y.style.color = "black";
    var n=x.value;
    var str="";
    if(n==null || n=="")
    {
        y.innerHTML = "Please Enter Text Above";
    }
    else
    {
        if(z.value==0)
        {
            n=n.toUpperCase();
            for(var i=0;i<n.length;i++)
            {
                for(var j=0;j<alpha.length;j++)
                {
                    if(n.charAt(i)==alpha[j])
                    {
                        str+=code[j]+" ";
                    }
                    else if(alpha.includes(n.charAt(i))==false){
                        str+=n.charAt(i)+" ";
                        break;
                    }
                }
            }
        }
        else if(z.value==1)
        {
            for(var i=0;i<n.length;i++)
            {
                if(n.charAt(i)==' ')
                {
                    str+=' ';
                }
                else if (n.charAt(i)==n.charAt(i).toUpperCase()) 
                { 
                    str+=String.fromCharCode((n.charCodeAt(i)+5-65)%26+65); 
                } 
                else
                { 
                    str+=String.fromCharCode((n.charCodeAt(i)+5-97)%26+97); 
                }
            }
        }
    y.innerHTML =str;
    }
}

document.addEventListener("click", function(evt) {
    var k=document.getElementById("ques");
        tar = evt.target;
    do {
        if (tar==k || a.contains(tar)) {
            a.style.opacity = "1";
            a.style.width = "50%";
            return;
        }
        else if(tar==x)
        {
            x.style.color="black";
            y.style.color = "grey";
            return;
        }
        tar = tar.parentNode;
    } while (tar);
    a.style.opacity = "0";
    a.style.width = "0%";
});