let gomb;  //hirdetés feladása gomb
let leiras; //hirdetés leírása 
let betuk; //hirdetés leírásánal a fennmaradó betűk száma
let nev;   // hirdető neve
let elfogad; //elfogad esemény, amikor a feladás gombra kattintunk
let kategoria; // hirdetés kategóriája
let ar; //hirdetés ára
let cim; // hirdetés címe
let x1; //x1-xx ezek a változók azért kellenek, mert így ellenőrzöm hogy minden ki van e töltve az ürlapon, mivel akkor mindegyik értéke 1 lesz.
let x2;
let x3;
let x4;
let x5;
let x6;
let xx;
let nevhiba; // ezt a változót azért hoztam létre, hogy kicsit gagyi módon, de ennek segítségével azt ellenőrizzem hogy nagy kezdőbetűvel írjuk-e a keresztnevet. Regex kóddal már feladtam,de így megoldottam.

function init(){ //oldal betöltésekor lefut
    document.querySelector('[type=submit]').addEventListener('click', feladas); //feladás gombra kattintás eseménye
    leiras = document.getElementById('leiras');   // leiras box-ban beirt karakterek
    leiras.addEventListener('keyup', maradekKarakter);   // leiras boxban felhasználható karakterek eseménye
}

function feladas(){ //ellenőrzi hogy minden ki van-e töltve, ki van-e választva
    var xx=x1+x2+x3+x4+x5+x6;
    if (xx==6) {
        alert("Köszönjük hogy nálunk adta fel hirdetését!")
    }
    else{
        alert("Kérem javítsa a hibás adatokat!")
    }
}

function nameCheck(){ //a hirdető nevének ellenőrzése
    document.getElementById("nevUzenet").style.display="none";
    const pattern=/^[A-Z\s\á\é\ő\ú\ü\ó\ö\í\Í\Á\É\Ű\Ó\Ü\Ö][a-zA-Z\s\á\é\ő\ú\ü\ó\ö\í\Í\Á\É\Ű\Ó\Ü\Ö]*$/;
    var nev=document.getElementById("nev").value;
    for (let i = 0; i<nev.length; i++) { //ez ellenőrzi hogy a szóköz után nagybetű jön-e( keresztnév pl)
        if (nev[i]==" "&& nev[i+1]!=null ) {
            if (nev[i+1]!=nev[i+1].toUpperCase()) {
                document.getElementById("nevUzenet").innerHTML="Kérem nagy kezdőbetűvel írja a keresztnevét!";
                document.getElementById("nevUzenet").style.display="inline";
                document.getElementById("nevCm").style.display="none";
                x1=0;
                nevhiba=1;
            }
            else{
                nevhiba=0;
            }
        }
    }
	if (nev.match(pattern)&&nevhiba==0)
	{
        document.getElementById("nevUzenet2").style.display="none";
		document.getElementById("nevCm").style.display="inline";
        x1=1;
	}
	else
	{
		document.getElementById("nevCm").style.display="none";
        document.getElementById("nevUzenet").style.display="inline";
        document.getElementById("nevUzenet2").style.display="none";
        x1=0;
	}
    if (nev=="") {
        document.getElementById("nevUzenet").style.display="none";
        document.getElementById("nevUzenet2").style.display="inline";
        document.getElementById("nevCm").style.display="none";
        x1=0;
    }
}

function emailCheck(){ //email cím ellenőrzése
    document.getElementById("emailUzenet").style.display="none";
    const pattern=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    var email=document.getElementById("email").value;
    if(email!=""){
        if (email.match(pattern)) {
            document.getElementById("emailCm").style.display="inline";
            document.getElementById("emailUzenet2").style.display="none";
            x2=1;
        }
        else
        {
            document.getElementById("emailCm").style.display="none";
            document.getElementById("emailUzenet").style.display="inline";
            document.getElementById("emailUzenet2").style.display="none";
            x2=0;
        }
    }
    else{
            document.getElementById("emailCm").style.display="none";
            document.getElementById("emailUzenet").style.display="none";
            document.getElementById("emailUzenet2").style.display="inline";
            x2=0;
        }
}

function cimCheck(){ //a hirdetés címének ellenőrzése
    document.getElementById("cimUzenet").style.display="none";
    const pattern=/^[a-zA-Z0-9,\s\á\é\ő\ú\ü\ó\ö\í\Í\Á\É\Ű\Ó\Ü\Ö]*$/;
    var cim=document.getElementById("cim").value;
    if(cim!=""){
        if (cim.match(pattern))
        {
            document.getElementById("cimCm").style.display="inline";
            document.getElementById("cimUzenet2").style.display="none";
            x3=1;
        }
        else
        {
            document.getElementById("cimCm").style.display="none";
            document.getElementById("cimUzenet").style.display="inline";
            document.getElementById("cimUzenet2").style.display="none";
            x3=0;
        }
    }
    else{
        document.getElementById("cimCm").style.display="none";
        document.getElementById("cimUzenet").style.display="none";
        document.getElementById("cimUzenet2").style.display="inline";
        x3=0;
    }
}

function arCheck(){ // a feladott hirdetésben szereplő ár ellenőrzése
    const pattern=/^[1-9][0-9,.]*$/;
    var ar=document.getElementById("ar").value;
    var szamlalo=0;
    for (let i = 0; i < ar.length; i++) {
        if (ar[i]==","||ar[i]==".") {
            szamlalo+=1;
        }
    }
    if(ar!=0){
        if (ar.match(pattern)) {
            document.getElementById("arCm").style.display="inline";
            document.getElementById("arUzenet").style.display="none";
            x4=1;
            if (szamlalo>1) {
                document.getElementById("arUzenet").innerHTML="Csak egy tizedesvesszőt vagy pontot használhat!";
                document.getElementById("arCm").style.display="none";
                document.getElementById("arUzenet").style.display="inline";
            }
        }
        else{
            if (isNaN(ar)) {
                document.getElementById("arUzenet").innerHTML="Hibás formátum! Csak számokat és vesszőt használhat!";
            document.getElementById("arUzenet").style.display="inline";
            document.getElementById("arCm").style.display="none";
            }
            else{
            document.getElementById("arCm").style.display="none";
            document.getElementById("arUzenet").innerHTML="Az ár nem kezdődhet nullával!";
            document.getElementById("arUzenet").style.display="inline";
            x4=0;
            }
        }
    }else{
        document.getElementById("arUzenet").innerHTML="Az ár nem lehet 0 Ft!";
        document.getElementById("arUzenet").style.display="inline";
        document.getElementById("arCm").style.display="none";
        x4=0;
        
    }
    if (ar=="") {
        document.getElementById("arCm").style.display="none";
        document.getElementById("arUzenet").innerHTML="Kérem adja meg az árat!";
        document.getElementById("arUzenet").style.display="inline";
        x4=0;
        }
     
}
function kategoriaCheck() //kiválasztandó kategóriák
{
    kategoria = document.getElementById("kategoriak");
    if (kategoria.options[kategoria.selectedIndex].value!="0") {
        document.getElementById("kategoriaCm").style.display="inline";
        document.getElementById("kategoriaUzenet").style.display="none";
        x5=1;
        
    }
    else if(kategoria.options[kategoria.selectedIndex].value=="0"){
        document.getElementById("kategoriaCm").style.display="none";
        document.getElementById("kategoriaUzenet").style.display="inline";
        x5=0;
    }
}
function maradekKarakter(){ //a leírásba 500 karaktert lehet csak írni
    leiras = document.getElementById('leiras');
    betuk = document.getElementById('betuk');
    let betukSzama = leiras.value.length;
    betuk.innerText = String(500 - betukSzama);
    if (betukSzama==500) {
        alert("Elértre a limitet!")
    }
}
function elfogadCheck(){ // a feltételek elfogadása 
    elfogad=document.getElementById("elfogad");
    if(!elfogad.checked) {
        document.getElementById("elfogadUzenet").style.display="inline";
        x6=0;// itt is arra szolgál ez a változó hogy ha nincs elfogadva, akkor nulla értéke lesz, és a végén így jelezni fog hogy valami kimaradt 
        
      }
    else{
        document.getElementById("elfogadUzenet").style.display="none";
        x6=1;
    }
}
