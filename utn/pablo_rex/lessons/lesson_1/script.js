function mayorYmenor(){
    const coin1=document.getElementById('coin_1').value
    const coin2=document.getElementById('coin_2').value
    const coin3=document.getElementById('coin_3').value
    const coin4=document.getElementById('coin_4').value
    const mult1=document.getElementById('multiplier_1').value
    const mult2=document.getElementById('multiplier_2').value
    const mult3=document.getElementById('multiplier_3').value
    const mult4=document.getElementById('multiplier_4').value
    const coins = [coin1, coin2, coin3, coin4];
    const mult = [mult1, mult2, mult3, mult4];
    const mayor = Math.max.apply(null,coins)
    const menor = Math.min.apply(null,coins)
    const MulMayor = Math.max.apply(null,mult)
    const MulMenor = Math.min.apply(null,mult)
    const out_array = [0,0,0,0]

    
    //logic of solution

     //identify coin box
    const indexMax = coins.findIndex(function (index){
        return index == mayor
    })

    const indexmin_tmp = coins.findIndex(function (index){
        return index == menor
    })    

    const indexMin = indexidem(indexMax,indexmin_tmp,indexmin_tmp)

    function indexidem (a,b,valor){
        if (a==b){
            valor=a+2
            return valor
        }else {
            valor == b
            return valor
        }
        };

    const valInt = valintermedio(indexMax,indexMin)

    
    function valintermedio (may,men){
    for (i =0; i<coins.length; i++){
        if (i != may && i !=men){
            valor = coins[i]
            indexValInt=i
            return valor
        }
    }
    }
 

    const valInt2 = valintermedio2(indexMax,indexMin,indexValInt)
  

    function valintermedio2 (may,men,int){
        for (i =0; i<coins.length; i++){
            if (i != may && i !=men && i != int){
                valor = coins[i]
                indexValInt2=i
                return valor
            }
        }
        }

   
     //identify multiplier


    const indexMultMax = mult.findIndex(function (index){
        return index == MulMayor
    })


    const indexmultmin_tmp = mult.findIndex(function (index){
        return index == MulMenor
    })    


    const indexMultMin = indexidem(indexMultMax,indexmultmin_tmp,indexmultmin_tmp)

    
    const MulInt = mulintermedio(indexMultMax,indexMultMin)
    

    function mulintermedio (may,men){
        for (i =0; i<mult.length; i++){
            if (i != may && i !=men){
                valor = mult[i]
                indexMultInt=i
                return valor
            }
        }
        }


    const MulInt2 = mulintermedio2(indexMultMax,indexMultMin,indexMultInt)


    function mulintermedio2 (may,men,int){
        for (i =0; i<mult.length; i++){
            if (i != may && i !=men && i != int){
                valor = mult[i]
                indexMultInt2=i
                return valor
            }
        }
        }


    const insertados1 = out_array.splice(indexMax,1,MulMayor)
    const insertados2 = out_array.splice(indexMin,1,MulMenor)
    const insertados3 = out_array.splice(indexValInt,1,MulInt)
    const insertados4 = out_array.splice(indexValInt2,1,MulInt2)
    
    const resultado = MulMayor*mayor + MulMenor*menor + MulInt*valInt + MulInt2*valInt2
    
    

    document.getElementById('response_1').value = out_array[0]
    document.getElementById('response_2').value = out_array[1]
    document.getElementById('response_3').value = out_array[2]
    document.getElementById('response_4').value = out_array[3]

    document.getElementById('response_total').value = resultado

  }

document.getElementById('calculate').addEventListener("click",mayorYmenor,false)