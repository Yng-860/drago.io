function sprawdz(){
    let wartosc = document.getElementById("drago").value
    if(wartosc ==""){
        document.getElementById("pole").innerHTML="Podaj wartość – bez tego nie ma walki."

    }
    else if(wartosc<30){
        document.getElementById("pole").innerHTML="Za słaby cios – Rocky nawet tego nie poczuł."

    }
    else if(wartosc>29 && wartosc<69){
        document.getElementById("pole").innerHTML="Walka wyrównana – Drago nadal groźny."

    }
    else if(wartosc>69 && wartosc<99){
        document.getElementById("pole").innerHTML="Mocny cios – Drago ma przewagę"

    }
    else if(wartosc==100 || wartosc>100){
        document.getElementById("pole").innerHTML="IF HE DIES, HE DIES – Drago wygrywa walkę."

    }
    else if(isNaN(wartosc)){
        document.getElementById("pole").innerHTML="To nie jest liczba."
    }
    else{
         document.getElementById("pole").innerHTML="piszesz czegos dziwnego"
        
    }
    
    
}