/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
var contenu = [
    ["17/12/2023 au 22/12/2023", "La musique, élément central de nos sociétés",
        [   ["IllustEmiss-22_12_23.jpg", "Audio-22_12_23.mp3"], 
            ["Javier Milei bouleverse l'Argentine avec des mesures choc", "IllustChro1-22_12_23.jpg", "Depuis plus d'un an, l'Argentine traverse une très forte crise économique. Selon l'Institut Argentin de Statistiques, les prix ont subi une inflation de environ 140%.<br>\n\
Lors des élections de décembre, c'est Javier Milei qui s'est imposé en proposant une réponse radicale à la crise : l'ultra libéralisme. Depuis son élection le 10 décembre, le gouvernement a opéré à iune forte désévaluation du peso (monnaie argentine) en faveur du dollar, et à une réduction drastique du budget et des subventions de l'Etat.<br>\n\
Ces mesures annoncent des prochains mois très difficiles pour les argentins, qui verront leur pouvoir d'achat encore diminuer, mais devraient avoir des effet bénéfiques sur l'inflation sur le long terme"],
            ["La loi immigration, qu'est-ce que c'est ?", "IllustChro2-22_12_23.jpg", "Depuis le 14 novembre 2023, la 'loi immigration', validéen par le Sénat est en cours d'étude par l'Assemblée nationale. Mais en fait, elle veut faire quoi cette loi ?<br>\n\
La 'loi immigration' contient plusieurs points à mettre en place :<br>\n\
- carte de séjour d'un an pour les travailleurs dans des secteurs en pénurie de main d'oeuvre ou dans le domaine médical. Sous conditions;<br>\n\
- niveau de français requis pour recevoir une carte de séjour;<br>\n\
- facilitation de l'explusion des ressortissants étrangers ayant reçu des condamnations importantes;<br>\n\
- 'espaces France Asile' pour centraliser les démarches de demandes d'asile."]]
    ]
];
var NumDer = contenu.length ;
var act = 0;
function rchr_titre() {
  // Declare variables
  var input, filter, ul, li, a, i;
  input = document.getElementById("RchrThemes");
  filter = input.value.toUpperCase();
  ul = document.getElementById("RchrMenu");
  li = ul.getElementsByTagName("li");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function aff_rchr () {
    document.getElementById("RchrMenu").style.display = "block";
}

function cache_rchr () {
    document.getElementById("RchrMenu").style.display = "none";
    document.getElementById("RchrThemes").value = "";
}

function dernier(){
    aff_contenu(NumDer-1);
}
function fleche (direct){
    if (direct === true){
        if (act < NumDer-1){
            act+=1;
            aff_contenu(act);
        }
    }
    else {
        if(act>0){
            act-= 1;
            aff_contenu(act);
        }
    }
}
function charge (){
    aff_contenu(NumDer-1);
    var list = "";
    for (let loop = 0 ; loop <NumDer ; loop++){
        list += "<li><a href='#' onclick = 'aff_contenu(" + loop +")'>" + contenu[loop][1] +"</a></li>";
    }
    document.getElementById('RchrMenu').innerHTML = list ;
}

function aff_contenu (i){
    act = i;
    var titre = contenu[i][1];
    var date = contenu[i][0];
    document.getElementById('Date').innerHTML = date ;
    document.getElementById('PresentEm').innerHTML = titre ;
    
    var semaine = contenu[i][2];
    document.getElementById('ImgEmiss').src = semaine[0][0] ;
    document.getElementById('Titre').innerHTML = titre ;
    document.getElementById('AudioEmiss').src = semaine[0][1];
    
    document.getElementById('TitreChro1').innerHTML = semaine[1][0] ;
    document.getElementById('ImgChro1').src = semaine[1][1] ;
    document.getElementById('TxtChr1').innerHTML = semaine[1][2] ;
    
    document.getElementById('TitreChro2').innerHTML = semaine[2][0] ;
    document.getElementById('ImgChro2').src = semaine[2][1] ;
    document.getElementById('TxtChr2').innerHTML = semaine[2][2] ;
    if (i > 0){
        document.getElementById('Gauche').style.borderColor = 'black' ;
    }
    else {
        document.getElementById('Gauche').style.borderColor = 'white' ;
    }
    if (i < NumDer-1){
        document.getElementById('Droite').style.borderColor = 'black' ;
    }
    else{
        document.getElementById('Droite').style.borderColor = 'white' ;
    }
}
