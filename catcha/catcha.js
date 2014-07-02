   
var CatCha = (function() {
        
        imagenes=[];
        posibles=["gato","perro","tigre","lince","gat","pantera"];
        seleccionados=[false,false,false,false,false,false];
        
   var state = {
            'selectedObjects': {
                'img1': false,
                'img2': false,
		'img3': false,
		'img4': false,
                'img5': false,
                'img6': false,
                'informe':[],
                'inicio':0,
                'fin':0,
                'total':0
                
            }
        },
        channel;
                    // Establish a channel only if this application is embedded in an iframe.
            // This will let the parent window communicate with this application using
            // RPC and bypass SOP restrictions.
            if (window.parent !== window) {
                channel = Channel.build({
                    window: window.parent,
                    origin: "*",
                    scope: "JSInput"
                });
        
                channel.bind("getGrade", getGrade);
                channel.bind("getState", getState);
                channel.bind("setState", setState);
            }
         function dibujar(){
                
                 document.getElementById('primero').src="imagenes/"+ imagenes[0]+".jpg";
                 document.getElementById('segundo').src="imagenes/"+ imagenes[1]+".jpg";
                 document.getElementById('tercero').src="imagenes/"+imagenes[2]+".jpg";
                 document.getElementById('cuarto').src="imagenes/"+imagenes[3]+".jpg";
                 document.getElementById('quinto').src="imagenes/" +imagenes[4]+".jpg";
                 document.getElementById('sexto').src="imagenes/"+imagenes[5]+".jpg";
        }
        function rellenarFotos(){
         var i=0;
        while(i<6){
                 al=Math.floor(Math.random() * 6) 
                 if (posibles[al]!=""){
                    imagenes[i]=posibles[al];
                    posibles[al]="";
                    i++;
                 }
        }
        
        }

        function principal(){
             var d=new Date();
             state.selectedObjects.inicio= d.getTime();
             rellenarFotos();
             dibujar();
             bordes();


        }
        function bordes(){
        if(seleccionados[0]){
        document.getElementById('primero').style.borderColor="#00FF00";
        }else{        
        document.getElementById('primero').style.borderColor="transparent";
        }
        
        if(seleccionados[1]){
        document.getElementById('segundo').style.borderColor="#00FF00";
        }else{        
        document.getElementById('segundo').style.borderColor="transparent";
        }
        
        if(seleccionados[2]){
        document.getElementById('tercero').style.borderColor="#00FF00";
        }else{        
        document.getElementById('tercero').style.borderColor="transparent";
        }
        
        if(seleccionados[3]){
        document.getElementById('cuarto').style.borderColor="#00FF00";
        }else{        
        document.getElementById('cuarto').style.borderColor="transparent";
        }
        
        if(seleccionados[4]){
        document.getElementById('quinto').style.borderColor="#00FF00";
        }else{        
        document.getElementById('quinto').style.borderColor="transparent";
        }
        
        if(seleccionados[5]){
        document.getElementById('sexto').style.borderColor="#00FF00";
        }else{        
        document.getElementById('sexto').style.borderColor="transparent";
        }
        }
        
        function modificar(i){
        

                if (imagenes[i]=="gato"){
                
                state.selectedObjects.img1=!state.selectedObjects.img1;
                }else if (imagenes[i]=="perro"){
                state.selectedObjects.img2=!state.selectedObjects.img2;
                }else if (imagenes[i]=="tigre"){
                state.selectedObjects.img3=!state.selectedObjects.img3;
                }else if (imagenes[i]=="lince"){
                state.selectedObjects.img4=!state.selectedObjects.img4;
                }else if (imagenes[i]=="gat"){
                state.selectedObjects.img5=!state.selectedObjects.img5;
                }else if (imagenes[i]=="pantera"){
                state.selectedObjects.img6=!state.selectedObjects.img6;
}
        }
	function primeroOn(){
		seleccionados[0]=!seleccionados[0];
		
                if(seleccionados[0]){
                         state.selectedObjects.informe.push("The "+imagenes[0]+"  is Selected \n");


		}else{
                 state.selectedObjects.informe.push("The "+imagenes[0]+"  is not Selected \n");
		}
                modificar(0);
                bordes();
	}
	function segundoOn(){
		
                seleccionados[1]=!seleccionados[1];
		
                if(seleccionados[1]){
                         state.selectedObjects.informe.push("The "+imagenes[1]+"  is Selected \n");


		}else{
                 state.selectedObjects.informe.push("The "+imagenes[1]+"  is not Selected \n");
		}
                modificar(1);
                bordes();
	}

	function terceroOn(){
		
                seleccionados[2]=!seleccionados[2];
		
                if(seleccionados[2]){
                         state.selectedObjects.informe.push("The "+imagenes[2]+"  is Selected \n");


		}else{
                 state.selectedObjects.informe.push("The "+imagenes[2]+"  is not Selected \n");
		}
                modificar(2);
                bordes();
	}
	function cuartoOn(){
        
		            seleccionados[3]=!seleccionados[3];
		
                if(seleccionados[3]){
                         state.selectedObjects.informe.push("The "+imagenes[3]+"  is Selected \n");


		}else{
                 state.selectedObjects.informe.push("The "+imagenes[3]+"  is not Selected \n");
		}
                modificar(3);
                bordes();
	}
        function quintoOn(){
		
                 seleccionados[4]=!seleccionados[4];
		
                if(seleccionados[4]){
                         state.selectedObjects.informe.push("The "+imagenes[4]+"  is Selected \n");


		}else{
                 state.selectedObjects.informe.push("The "+imagenes[4]+"  is not Selected \n");
		}
                modificar(4);
                bordes();
	}
        function sextoOn(){
               seleccionados[5]=!seleccionados[5];
		
                if(seleccionados[5]){
                         state.selectedObjects.informe.push("The "+imagenes[5]+"  is Selected \n");


		}else{
                 state.selectedObjects.informe.push("The "+imagenes[5]+"  is not Selected \n");
		}
                modificar(5);
                bordes();
	}
        function getGrade(){
                var p=new Date();

                state.selectedObjects.fin= p.getTime();
                state.selectedObjects.total= state.selectedObjects.fin-state.selectedObjects.inicio;

                     
                return JSON.stringify(state['selectedObjects']);

                
        }
        function getState(){
                return JSON.stringify(state);
        }
        
        function setState(){
                
        stateStr = arguments.length === 1 ? arguments[0] : arguments[1];
        state = JSON.parse(stateStr);
        state.selectedObjects.img1=false;
        state.selectedObjects.img2=false;
        state.selectedObjects.img3=false;
        state.selectedObjects.img4=false;
        state.selectedObjects.img5=false;
        state.selectedObjects.img6=false;
        var d=new Date();
        state.selectedObjects.inicio= d.getTime();

        bordes();
        }
        return{
                primeroOn: primeroOn,
                segundoOn: segundoOn,
                terceroOn:terceroOn,
                cuartoOn: cuartoOn,
                quintoOn: quintoOn,    
                sextoOn: sextoOn,
                getGrade: getGrade,
                getState: getState,
                setState: setState,
                principal:principal,
                dibujar: dibujar
               
        };

}());
