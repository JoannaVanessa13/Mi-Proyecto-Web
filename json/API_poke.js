var idp=1;
var long=0;

    const url = "https://joannavanessa13.github.io/Ejem_json_api/poke.json";

    function buscar(){
    
        fetch(url)
        .then(function(response){
            return response.json();    
        })
    
        .then(function(data){
            console.log(data.personajes);
            long=data.personajes.length;
            console.log("lenght:"+ long);
        
            var res= data.personajes.filter(item=>item.id===idp);
            console.log(res);
            var imagen=document.getElementById('pkm-img');
            imagen.src=res[0].figure;
            var p1=document.getElementById('name');
            p1.innerHTML="<b>Nombre: </b>"+res[0].nombre;
            var p2=document.getElementById('type');
            p2.innerHTML="<b>Tipo: </b>"+res[0].tipo;
            var p3=document.getElementById('height');
            p3.innerHTML="<b>Altura: </b>"+res[0].altura+"cms.";
            var p4=document.getElementById('weight');
            p4.innerHTML="<b>Peso: </b>"+res[0].peso+"kg.";
            var p5=document.getElementById('des');
            p5.innerHTML="<b>Descripción: </b>"+res[0].descripcion;
        })

        .catch(function(error){
            console.log();           
        });

        if (idp >= long){
            idp=1;
        }else{
            idp++;
        }
        
    }    