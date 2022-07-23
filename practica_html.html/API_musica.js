var idp=1
var long=0
        
    const url = "https://joannavanessa13.github.io/Ejem_json_api/musica.json ";

    function buscar(){
    
        fetch(url)
        .then(function(response){
            return response.json();    
        })

        .then(function(data){
           console.log(data.musicid);
           long=data.musidid.length;
           console.log("lenght:"+ long);
    
           var res= data.musicid.filter(item=>item.id===idp);
           console.log(res);
           var imagen=document.getElementById('music-img');
           imagen.src=res[0].figure;
           var p1=document.getElementById('type');
           p1.innerHTML="<b>Tipo: </b>"+res[0].tipo;
           var p2=document.getElementById('name');
           p2.innerHTML="<b>Nombre: </b>"+res[0].nombre;
           var p3=document.getElementById('gender');
           p3.innerHTML="<b>Genero: </b>"+res[0].genero;
           var p4=document.getElementById('artist');
           p4.innerHTML="<b>Artista: </b>"+res[0].artista;
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