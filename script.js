function positions(competidores) {
    
    let [firstPlace, secondPlace, lastPlace] = competidores;

    if (secondPlace=="daniel") {
        
        secondPlace = firstPlace;

        firstPlace = "daniel";
    } 
    
    if (lastPlace == "daniel") {
       
        lastPlace = secondPlace;

        secondPlace = "daniel";
        
    }

    return console.log("1ª - Colocação: "+firstPlace + "\n" + "2ª - Colocação: "+ secondPlace +"\n"+"3ª - Colocação: "+ lastPlace);
    
    
}

positions(["rafael","daniel","manoel"]);