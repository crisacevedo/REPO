app.controller("Simulador", function($scope, $http, $state)

{
      $scope.ObtEva = function (){
       
        var arreglo = 


        [ 
        [0,0,0,0,0] , 
        [0,0,0,0,0] , 
        [0,0,0,0,0] , 
      [0,0,0,0,0] , 
      [0,0,0,0,0] 
      ];
         
         arreglo[0][0]=$scope.ObtEva1.elem1;  
         arreglo[0][1]=$scope.ObtEva1.elem2;  
         arreglo[0][2]=$scope.ObtEva1.elem3;  
         arreglo[0][3]=$scope.ObtEva1.elem4;  
         arreglo[0][4]=$scope.ObtEva1.elem5;  
         
     arreglo[1][0]=$scope.ObtEva2.elem1;  
         arreglo[1][1]=$scope.ObtEva2.elem2;  
         arreglo[1][2]=$scope.ObtEva2.elem3;  
         arreglo[1][3]=$scope.ObtEva2.elem4;  
         arreglo[1][4]=$scope.ObtEva2.elem5;  
         
         arreglo[2][0]=$scope.ObtEva3.elem1;  
         arreglo[2][1]=$scope.ObtEva3.elem2;  
         arreglo[2][2]=$scope.ObtEva3.elem3;  
         arreglo[2][3]=$scope.ObtEva3.elem4;  
         arreglo[2][4]=$scope.ObtEva3.elem5;  
         
        arreglo[3][0]=$scope.ObtEva4.elem1; 
         arreglo[3][1]=$scope.ObtEva4.elem2;  
         arreglo[3][2]=$scope.ObtEva4.elem3;  
         arreglo[3][3]=$scope.ObtEva4.elem4;  
         arreglo[3][4]=$scope.ObtEva4.elem5;  
        
        arreglo[4][0]=$scope.ObtEva5.elem1; 
         arreglo[4][1]=$scope.ObtEva5.elem2;  
         arreglo[4][2]=$scope.ObtEva5.elem3;  
         arreglo[4][3]=$scope.ObtEva5.elem4;  
         arreglo[4][4]=$scope.ObtEva5.elem5;  
         
          }
        



















         var categoria ="hola";
         var categoriacomparacion ="hola";
         var respuesta ="holi";
		 var respuestatotal ="";
         var categorias = ["Rock", "Reggae", "Pop" ,"Jazz ", "Ska"];        

         for (var i = 0; i<5; i ++) {
         	
         	for (var j = 1; j<5; j ++) {
               
                 if(arreglo[i][j] <0.5)       
           {           
                  
                  respuesta="es no semejante a,"    
               
			}
 
 		  if(arreglo[i][j] >0&& arreglo[i][j] <0.6)         
           {           
                  
                  respuesta="es poco similar a,"    
               
			}
                



                 if(arreglo[i][j] >0.6)       
           {           
                  
                  respuesta="es semejante a,"    
               
			}
                 
              
               categoria=categorias[i];
               categoriacomparacion=categorias[j]; 
               respuestatotal= respuestatotal +respuesta+categoriacomparacion;


				}


            respuestatotal= categoria +respuestatotal;
            respuestatotal="";
            }
  console.log(respuestatotal);

         }
   
  
    
})