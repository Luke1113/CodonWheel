
function FindIndex(c){
    var table = "UCAG";
    for(var i = 0; i < 4; i++){
        if(c == table[i]){
            return i;
        }
    }
}
function FindAcid(inp){
    var name = [["Phenylalanine","Leucine"],["Serine"],["Tyrosine","Stop"],["Cysteine","Stop","Tryptophan"],["Leucine"],["Proline"],["Histidine","Glutamine"],["Arginine"],["Isoleucine","Methionine"],["Threonine"],["Asparagine","Lysine"],["Serine","Arginine"],["Valine"],["Alanine"],["Aspartic Acid","Glutamic Acid"],["Glycine"]];
    var end = [["UC","AG"],["UCAG"],["UC","AG"],["UC","A","G"],["UCAG"],["UCAG"],["UC","AG"],["UCAG"],["UCA","G"],["UCAG"],["UC","AG"],["UC","AG"],["UCAG"],["UCAG"],["UC","AG"],["UCAG"]];
    var re = "";
    var endI = FindIndex(inp[0]) * 4 + FindIndex(inp[1]);
    for(var i = 0; i < end[endI].length; i++){
        for(var j = 0; j < end[endI][i].length; j++){
            if(inp[2] == end[endI][i][j]){
                re = name[endI][i];
            }
        }
    }
    return re;
}
function tDnaTocDna(tdna){
    var cdna = "";
    for(var i = 0; i < tdna.length; i++){
        if(tdna[i] == "T"){
            cdna += "A";
        }
        else if(tdna[i] == "G"){
            cdna += "C";
        }
        else if(tdna[i] == "A"){
            cdna += "T";
        }
        else if(tdna[i] == "C"){
            cdna += "G";
        }
    }
    return cdna;
}
function cDnaTomRna(cdna){
    var mrna = "";
    for(var i = 0; i < cdna.length; i++){
        if(cdna[i] == "T"){
            mrna += "U";
        }
        else if(cdna[i] == "G"){
            mrna += "G";
        }
        else if(cdna[i] == "A"){
            mrna += "A";
        }
        else if(cdna[i] == "C"){
            mrna += "C";
        }
    }
    return mrna;
}
function mRnaTotRna(mrna){
    var trna = "";
    for(var i = 0; i < mrna.length; i++){
        if(mrna[i] == "U"){
            trna += "A";
        }
        else if(mrna[i] == "G"){
            trna += "C";
        }
        else if(mrna[i] == "A"){
            trna += "U";
        }
        else if(mrna[i] == "C"){
            trna += "G";
        }
    }
    return trna;
}
function tRnaTotDna(trna){
    var tdna = "";
    for(var i = 0; i < trna.length; i++){
        if(trna[i] == "U"){
            tdna += "T";
        }
        else if(trna[i] == "G"){
            tdna += "G";
        }
        else if(trna[i] == "C"){
            tdna += "C";
        }
        else if(trna[i] == "A"){
            tdna += "A";
        }
    }
    return tdna;
}
function Valid(){
    var tdna = document.getElementById("tdna").value.toUpperCase();
    var cdna = document.getElementById("cdna").value.toUpperCase();
    var mrna = document.getElementById("mrna").value.toUpperCase();
    var trna = document.getElementById("trna").value.toUpperCase();
    if(tdna.length != 0){
        console.log("1");
        for(var i = 0; i < tdna.length; i++){
            if(tdna[i] != "A" && tdna[i] != "T" && tdna[i] != "C" && tdna[i] != "G"){
                return false;
            }
        }
        if(tdna.length % 3 != 0){
            return false;
        }
    }
    if(cdna.length != 0){
        console.log("2");
        for(var i = 0; i < cdna.length; i++){
            if(cdna[i] != "A" && cdna[i] != "T" && cdna[i] != "C" && cdna[i] != "G"){
                return false;
            }
        }
        if(cdna.length % 3 != 0){
            return false;
        }
    }
    if(mrna.length != 0){
        console.log("3");
        for(var i = 0; i < mrna.length; i++){
            if(mrna[i] != "A" && mrna[i] != "U" && mrna[i] != "C" && mrna[i] != "G"){
                return false;
            }
        }
        if(mrna.length % 3 != 0){
            return false;
        }
    }
    if(trna.length != 0){
        console.log("4");
        for(var i = 0; i < trna.length; i++){
            if(trna[i] != "A" && trna[i] != "U" && trna[i] != "C" && trna[i] != "G"){
                return false;
            }
        }
        if(trna.length % 3 != 0){
            return false;
        }
    }
    if(mrna.length == 0 && trna.length == 0 && tdna.length == 0 && cdna.length == 0){
        return false;
    }
    return true;
}
function main(){
    if(Valid()){
        var tdna = document.getElementById("tdna").value.toUpperCase();
        var cdna = document.getElementById("cdna").value.toUpperCase();
        var mrna = document.getElementById("mrna").value.toUpperCase();
        var trna = document.getElementById("trna").value.toUpperCase();
        for(var i = 0; i < 4; i++){
            console.log(tdna);
            console.log(cdna);
            console.log(mrna);
            console.log(trna);
            console.log("=======");
            if(mrna.length != 0){trna = mRnaTotRna(mrna);}
            if(trna.length != 0){tdna = tRnaTotDna(trna);}
            if(tdna.length != 0){cdna = tDnaTocDna(tdna);}
            if(cdna.length != 0){mrna = cDnaTomRna(cdna);}
        }
        document.getElementById("tdnao").innerHTML = "DNA(template):" + tdna;
        document.getElementById("cdnao").innerHTML = "DNA(coding):" + cdna;
        document.getElementById("mrnao").innerHTML = "mRNA:" + mrna;
        document.getElementById("trnao").innerHTML = "tRNA:" + trna;
        var acid = "|";
        for(var i = 0; i < mrna.length / 3; i++){
            var tmp = "";
            for(var j = 0; j < 3; j++){
                tmp += mrna[i * 3 + j];
            }
            acid += FindAcid(tmp) + "|";
        }
        console.log(acid);
        document.getElementById("acido").innerHTML = "Amino Acids:" + acid;
    }
    else{
        document.getElementById("cdnao").innerHTML = "";
        document.getElementById("tdnao").innerHTML = "";
        document.getElementById("mrnao").innerHTML = "";
        document.getElementById("trnao").innerHTML = "";
        document.getElementById("acido").innerHTML = "It is empty or letter is not a multiple of three or it is composed of other letters than A, T/U, C, G";

    }
}
