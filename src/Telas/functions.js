      var isoa = false 
      var isob = false
      var isoc = false

      var meda = false 
      var medb = false
      var medc = false

      var cota = false 
      var cotb = false
      var cotc = false

      var prea = false 
      var preb = false
      var prec = false

      var aboa = false 
      var abob = false
      var aboc = false

      var maca = false 
      var macb = false
      var macc = false

      var arma = false 
      var armb = false
      var armc = false

      var pria = false 
      var prib = false
      var pric = false

      var amaa = false 
      var amab = false
      var amac = false

      var inda = false 
      var indb = false
      var indc = false

      var pena = false 
      var penb = false
      var penc = false

      var traa = false 
      var trab = false
      var trac = false

      

      var haddad = {nome: "Fernando Haddad", valor: 0, id:1}
      var dino =  {nome: "Flavio Dino", valor: 0, id:2}
      var ciro =  {nome: "Ciro Gomes", valor: 0, id:3}
      var huck =  {nome: "Luciano Huck", valor: 0, id:4}
      var moro =  {nome: "Sérgio Moro", valor: 0, id:5}
      var bolso =  {nome: "Jair Messias Bolsonaro", valor: 0,id:6}
      var doria =  {nome: "João Dória Jr.", valor: 0, id:7}
    
      export function zerar(){
        haddad.valor=0
        dino.valor=0
        ciro.valor=0
        huck.valor=0
        moro.valor=0
        bolso.valor=0
        doria.valor=0
      }
         
    export function isof(x){
    if (x.id == 1){
    isoa = true
    isob = false
    isoc = false
    }
    if (x.id == 2){
      isoa = false
      isob = true
      isoc = false
      }
      if (x.id == 3){
        isoa = false
        isob = false
        isoc = true
        }
  }

  export function medf(x){
    if (x.id == 1){
    meda = true
    medb = false
    medc = false
    }
    if (x.id == 2){
      meda = false
      medb = true
      medc = false
      }
      if (x.id == 3){
        meda = false
        medb = false
        medc = true
        }
  }

  export function cotasf(x){
    if (x.id == 1){
    cota = true
    cotb = false
    cotc = false
    }
    if (x.id == 2){
      cota = false
      cotb = true
      cotc = false
      }
      if (x.id == 3){
        cota = false
        cotb = false
        cotc = true
        }
  }

  export function prevf(x){
    if (x.id == 1){
    prea = true
    preb = false
    prec = false
    }
    if (x.id == 2){
      prea = false
      preb = true
      prec = false
      }
      if (x.id == 3){
        prea = false
        preb = false
        prec = true
        }
  }

  export function aborf(x){
    if (x.id == 1){
    aboa = true
    abob = false
    aboc = false
    }
    if (x.id == 2){
      aboa = false
      abob = true
      aboc = false
      }
      if (x.id == 3){
        aboa = false
        abob = false
        aboc = true
        }
  }

  export function macf(x){
    if (x.id == 1){
    maca = true
    macb = false
    macc = false
    }
    if (x.id == 2){
      maca = false
      macb = true
      macc = false
      }
      if (x.id == 3){
        maca = false
        macb = false
        macc = true
        }
  }

  export function armaf(x){
    if (x.id == 1){
    arma = true
    armb = false
    armc = false
    }
    if (x.id == 2){
      arma = false
      armb = true
      armc = false
      }
      if (x.id == 3){
        arma = false
        armb = false
        armc = true
        }
  }

  export function privf(x){
    if (x.id == 1){
    pria = true
    prib = false
    pric = false
    }
    if (x.id == 2){
      pria = false
      prib = true
      pric = false
      }
      if (x.id == 3){
        pria = false
        prib = false
        pric = true
        }
  }

  export function amazf(x){
    if (x.id == 1){
    amaa = true
    amab = false
    amac = false
    }
    if (x.id == 2){
      amaa = false
      amab = true
      amac = false
      }
      if (x.id == 3){
        amaa = false
        amab = false
        amac = true
        }
  }

  export function indigf(x){
    if (x.id == 1){
    inda = true
    indb = false
    indc = false
    }
    if (x.id == 2){
      inda = false
      indb = true
      indc = false
      }
      if (x.id == 3){
        inda = false
        indb = false
        indc = true
        }
  }

  export function penaf(x){
    if (x.id == 1){
    pena = true
    penb = false
    penc = false
    }
    if (x.id == 2){
      pena = false
      penb = true
      penc = false
      }
      if (x.id == 3){
        pena = false
        penb = false
        penc = true
        }
  }

  export function trabf(x){
    if (x.id == 1){
    traa = true
    trab = false
    trac = false
    }
    if (x.id == 2){
      traa = false
      trab = true
      trac = false
      }
      if (x.id == 3){
        traa = false
        trab = false
        trac = true
        }
  }

  export function verif(){
    if ((isoa==false&&isob==false&&isoc==false) ||(meda==false&&medb==false&&medc==false)
    ||(cota==false&&cotb==false&&cotc==false)  ||(prea==false&&preb==false&&prec==false)
    ||(aboa==false&&abob==false&&aboc==false)  ||(maca==false&&macb==false&&macc==false)
    ||(arma==false&&armb==false&&armc==false)  ||(pria==false&&prib==false&&pric==false)
    ||(amaa==false&&amab==false&&amac==false)  ||(inda==false&&indb==false&&indc==false)
    ||(pena==false&&penb==false&&penc==false)  ||(traa==false&&trab==false&&trac==false)){
      console.warn("Você deve responder todas as questões.")
      return 0 
    } else {
      return calculo()}
    }
  

  function calculo(){
    var valores = [isoa, isob, isoc, meda, medb, medc, cota, cotb,
      cotc, prea, preb, prec, aboa, abob, aboc, maca, macb, macc,
       arma, armb, armc, pria, prib, pric, amaa, amab, amac, inda, 
       indb, indc, pena, penb, penc, traa, trab, trac]
    //console.warn(valores)
    for(var i=0;i<valores.length;i++){
      if (valores[i] == true){
        if (i==0){
          haddad.valor++
          dino.valor.valor++
          ciro.valor++
          huck.valor++
          moro.valor++
        }
        if (i==1){
          bolso.valor++
        }
        if (i==2){
          doria.valor++
          //indiferente
        }
        if (i==3){
          bolso.valor++
        }
        if (i==4){
          haddad.valor++
          dino.valor++
          ciro.valor++
          huck.valor++
          doria.valor++
        }
        if (i==5){
          //indi
          moro.valor++
        }
        if (i==6){
          haddad.valor++
          dino.valor++
          ciro.valor++
        }
        if (i==7){
          bolso.valor++
          doria.valor++
        }
        if (i==8){
          //indi
          moro.valor++
          huck.valor++
        }
        if (i==9){
          bolso.valor++
          dino.valor++
          doria.valor++
          huck.valor++
          moro.valor++
        }
        if (i==10){
          ciro.valor++
        }
        if (i==11){
          //indi
          haddad.valor++
        }
        if (i==12){
          //todos ganham 1pt
          bolso.valor++
          dino.valor++
          doria.valor++
          huck.valor++
          moro.valor++
          ciro.valor++
          haddad.valor++
        }
        if (i==13){
          bolso.valor++
          doria.valor++
          dino.valor++
          haddad.valor++
        }
        if (i==14){
          //indi
          huck.valor++
          moro.valor++
          ciro.valor++
        }
        if (i==15){
          huck.valor++
        }
        if (i==16){
          bolso.valor++
          doria.valor++
          moro.valor++
        }
        if (i==17){
          //indi
          ciro.valor++
          haddad.valor++
          dino.valor++
        }
        if (i==18){
          bolso.valor++
        }
        if (i==19){
          huck.valor++
          ciro.valor++
          haddad.valor++
          dino.valor++
        }
        if (i==20){
          //indi
          doria.valor++
          moro.valor++
        }
        if (i==21){
          doria.valor++
        }
        if (i==22){
          haddad.valor++
        }
        if (i==23){
          //indi
          bolso.valor++
          dino.valor++
          ciro.valor++
          huck.valor++
          moro.valor++
        }
        if (i==24){
          bolso.valor++
        }
        if (i==25){
          ciro.valor++
          dino.valor++
          haddad.valor++
        }
        if (i==26){
          //indi
          doria.valor++
          moro.valor++
          huck.valor++
        }
        if (i==27){
          ciro.valor++
          haddad.valor++
          dino.valor++
        }
        if (i==28){
          bolso.valor++
          moro.valor++
        }
        if (i==29){
          //indi
          huck.valor++
          doria.valor++
        }
        if (i==30){
          bolso.valor++
          doria.valor++
          moro.valor++
        }
        if (i==31){
          dino.valor++
          haddad.valor++
          ciro.valor++
        }
        if (i==32){
          //indi
          huck.valor++
        }
        if (i==33){
          bolso.valor++
        }
        if (i==34){
          haddad.valor++
          dino.valor++
          ciro.valor++
        }
        if (i==35){
          huck.valor++
          moro.valor++
          doria.valor++
        }
      }
    }
   var x = amostragem()
   return x
  }

  export function amostragem(){
    var candidatos = [ciro, dino, bolso, doria, huck, moro, haddad]
    candidatos.sort( function(a, b){
      return b.valor - a.valor;
   })
      return (candidatos[0].id)
  }