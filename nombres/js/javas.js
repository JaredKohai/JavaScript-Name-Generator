function generate(){
    var firstname = ["Jared","Samuel","Miguel","Eduardo", "Ricardo", "Abraham",
     "Diego", "Joel", "Alexis", "Alejandro", "Edgar", "Valeria", "Shendell"];
    var lastname= ["Bastarrachea", "Sanchez","Moo","Poot","Cime","Puc","Canche"
    ,"Cong","Torres","Esparza","Chim","Aguilar","Magana","Sierra","Díaz","May"];
    var secondlastname = ["Bastarrachea", "Sanchez","Moo","Poot","Cime","Puc","Canche"
    ,"Cong","Torres","Esparza","Chim","Aguilar","Magana","Sierra","Díaz","May"];
    var rand_first = Math.floor(Math.random()*firstname.length);
    var rand_last = Math.floor(Math.random()*lastname.length);
    var rand_second = Math.floor(Math.random()*secondlastname.length);
    document.getElementById('result').innerHTML = "<h1>Nombre:</h1><div class='alert alert-success'><h2>"
    +firstname[rand_first]+" "+lastname[rand_last]+" "+secondlastname[rand_second]+"</h2></div>";

}