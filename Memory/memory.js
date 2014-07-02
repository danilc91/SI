var Memory = (function() {
        
       nivel=1;
        num=0;
	parejas=6;
	ant=-1;
	
        n1=["Potasio","Ne","Oro","k","Hierro","P","Sodio","Fe","Neon","Na","Fosforo","Au"];
	n1pa=[3,8,11,0,7,10,9,4,1,6,5,2];
	seleccionados=[false,false,false,false,false,false,false,false,false,false,false,false];
        
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
        function principal(){
	
	if(nivel==1){
		for( i=0;i< 12;i++){
			document.getElementById(i+1).src=n1[i]+".png";
			document.getElementById(i+1).style.borderColor="transparent";
			
		}
	}else if(nivel==2){
		alert("Has completado el juego");
	
	}

	}
	function oculta(i){
	
	document.getElementById(i+1).style.visibility = 'hidden';
	
	}
	function dameNivel(){
	
	return nivel;
	
	}
	function dameNivel(){
	
	return nivel;
	
	}

	function seleccionar(i){


	if(seleccionados[i]){
		seleccionados[i]=false;
		num--;
		document.getElementById(i+1).style.borderColor="transparent";
		if(num==0){

			ant=-1;
		}
	
	}else{

	if(ant==-1){

		ant=i;
	}
	num++
	seleccionados[i]=true;
	document.getElementById(i+1).style.borderColor="#00FF00";

	
	if(num==2){

		document.getElementById(i+1).style.borderColor="transparent";	
		document.getElementById(ant+1).style.borderColor="transparent";
		

		if(nivel==1){
			
		if(seleccionados[i]&&seleccionados[n1pa[i]]){
			n=i;
			n2=n1pa[i];
			
					
			document.getElementById(i+1).src=n1[i]+".gif";	
			oculta(n);
			//setTimeout('oculta(n)',1000);		
			

			document.getElementById(n1pa[i]+1).src=n1[n1pa[i]]+".gif";	
			oculta(n2);
			//setTimeout('oculta(n2)',1000);
			parejas--;
		
		}
		
		}
	if(parejas==0){

		nivel++;
		principal();
	}

	seleccionados[i]=false;
	seleccionados[ant]=false;
	num=0;
	ant=-1;
	
	}

       }	

	}
        return{
                principal:principal,
				seleccionar: seleccionar
                
               
        };

}());