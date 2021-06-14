
        $(document).ready(function(){

            for(var i=1;i<=717;i++){

                var ruta = "<img id="+i+" src='http://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/"+i+".png'>";
                $(".pokemon").append(ruta);
            }
            
            $("img").on('click',function(){
                
                var id = $(this).attr("id");
                $.get("https://pokeapi.co/api/v2/pokemon/"+id, function(res){
                    var html_add ="";
                    html_add +="<h2>"+id+"</h2>" 
                    html_add += "<h1>"+res.name+"</h1>"
                    html_add += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/"+id+".png'>";
                    html_add += "<h2>Tipo</h2>";
                    html_add += "<ul>"; 
                    for(var i = 0; i < res.types.length; i++) {
                        html_add += "<li>" + res.types[i].type.name + "</li>";
                    }
                    html_add += "</ul>";
                    html_add += "<h2>Peso</h2>"+"<h4>"+res.weight+"</h4>";

                $(".informacion").html(html_add);        
                });    
            

            });

        });

