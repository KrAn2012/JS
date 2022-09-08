  
                   
// wybór obrotów
var prawe
var lewe
var kierunek = `M3`;

    
    function Prawe(){
       prawe= document.getElementById("Prawe");
      prawe.checked = true;
      lewe  = document.getElementById("Lewe");
      lewe.checked = false;
      kierunek = `M3`;
}

function Lewe(){
       prawe = document.getElementById("Prawe");
      prawe.checked = false
       lewe = document.getElementById("Lewe");
      lewe.checked = true; 
      kierunek = `M4`;
}







var x; // Wybór Gwintu z listy
function WybórFunction(){
       x = document.getElementById("WybórGwintu").value;

       if (x == "M2"){
                 const s = "M2 -  Skok uzwojenia 0.4mm - Średnica wiertła 5,60mm - Wymiary graniczne średnicy podziałowej gwintu wewnętrznego Min.1,740 - Max.1,830";
           document.getElementById("WyświetlWybór").innerHTML = s;
       }else if (x == "M3"){
                  const s = "M3 -  Skok uzwojenia 0.5mm - Średnica wiertła 5,60mm - Wymiary graniczne średnicy podziałowej gwintu wewnętrznego Min.1,740 - Max.1,830";
           document.getElementById("WyświetlWybór").innerHTML = s;
       }else if (x == "M4"){
                  const s = "M4 -  Skok uzwojenia 0.7mm - Średnica wiertła 3.70mm - Wymiary graniczne średnicy podziałowej gwintu wewnętrznego Min.1,740 - Max.1,830";
           document.getElementById("WyświetlWybór").innerHTML = s;
       }else if(x == "M5"){
                 const s = "M5 -  Skok uzwojenia 0.8mm - Średnica wiertła 5,60mm - Wymiary graniczne średnicy podziałowej gwintu wewnętrznego Min.1,740 - Max.1,830";
           document.getElementById("WyświetlWybór").innerHTML = s;
     }
}






function calc(){
       if( x == "M2" ){
          var g = 0.4;
       }else if( x == "M3" ){
           g = 0.5;
       }else if( x == "M4"){
           g = 0.7;
       }else if( x == "M5"){
           g = 0.8;
}

           var name = x; //zmienna skoku gwintu
           var names = name.split('');
           var  o = (names['1'])/2;     // Pobrana wartość gwintu dzielona przez dwa

           var b = document.getElementById("Głębokość").value; 
           let h = (b/g)*360;
           let z = Math.round(h);
           let Ac = document.getElementById("Vc").value;
           let posów = Ac*130;

                    //Heidenhain
                    let hh ="Tool Call<br>"
                    +"Call LBL 100 <br>"
                    +"L X+0 Y+0 F MAX "+kierunek+"<br>"
                    +"L Z+5 R0 F MAX <br>"
                    +"L Z+0 RO F"+posów+"<br>"
                    +"L X+" + o + " Y+0 RL <br>"
                    +"L CC X+0 Y+0 <br>"
                    +"CP IPA+"+ z +" IZ-"+ b +"<br>"
                    +"L X+0 Y+0 R0<br>"
                    +"L Z+100 RO F MAX <br>"
                    +"Z-1 M91 <br>"
                    +"X-1 Y-1 M91"
                    document.getElementById("HeidenhainText").innerHTML = hh;

                    //Fanuc
                    let fc ="T M6 <br>" 
                    +"G0 G91 G40 G80 <br> "
                    +"G54.1 P1 X0 Y0 "+kierunek+"<br>"
                    +"G0 G90 X0 Y0 <br>"
                    +"G0 G43 Z5 <br>"
                    +"G1 Z0 F" + posów + " <br>"
                    +"G1 G41 X+" + o + "Y0 <br>"
                    +"G3 I+" + z + " Z-" + b +"<br>"
                    +"G1 G40 X0 Y0 <br>"
                    +"G0 Z100 <br>"
                    +"G91 G28 Z0 <br>"
                    +"G91 G28 X0 Y0"
                    document.getElementById("FanucText").innerHTML = fc;}



                 
                