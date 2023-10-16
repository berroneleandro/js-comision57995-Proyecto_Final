/* console.log("MENU")
console.log("-------------------")
for (let i = 0; i < platosDeComida.length ; i++) {
    console.log("Plato: " + platosDeComida[i].nombre);
    console.log("Precio: $" + platosDeComida[i].precio);
    console.log("Stock: " + platosDeComida[i].stock + " unidades");
    console.log("Numero de oden "+platosDeComida[i].NumeroDeOrden);
    console.log("-----------------------");
}
console.log("Bebidas")
console.log("-------------------")
for (let i = 0; i < bebidas.length ; i++) {
    console.log("Bebida: " + bebidas[i].nombre);
    console.log("Precio: $" + bebidas[i].precio);
    console.log("Stock: " + bebidas[i].stock + " unidades");
    console.log("Numero de oden "+bebidas[i].NumeroDeOrden);
    console.log("-----------------------");
} */

menuComidas=platosDeComida
let menuBebidas=[]
menuBebidas=bebidas

let carga=document.getElementById("comidas");
let pedido=carga.value;

let CargaBebidas=document.getElementById("bebidas");
let bebida=CargaBebidas.value;

let listaPedido = document.querySelector('#listaPedidos');

const cargar=document.querySelector('#btnCarga');
const finalizar=document.querySelector('#btnfinalizar');
const borrar=document.querySelector('#btnBorrar');


let sumarPrecios=[];
let sumarPreciosBebida=[];
let pedidoAbiertos=[];
let pedidoAbiertos2=[]; 
let pedidoAbierto3=[];
let pedidoAbierto4=[];

/* cargar.addEventListener('click',buscarPedido(pedidoAbiertos));
finalizar.addEventListener('click',sumaTotal(sumarPrecios,sumarPreciosBebida)); */
borrar.addEventListener('click',borrarPedido);

 document.addEventListener('DOMContentLoaded',()=>{
   /*  if(JSON.parse(localStorage.getItem('pedidos'))==null){
        pedidoAbiertos=[]
        
        
    }else{
        pedidoAbiertos=JSON.parse(localStorage.getItem('pedidos'))
    } */

    pedidoAbiertos = JSON.parse(localStorage.getItem('pedidos')) || [];

    
    
/*     if(JSON.parse(localStorage.getItem('pedidos 2'))==null){
        pedidoAbiertos2=[]
    }else{
        pedidoAbiertos2=JSON.parse(localStorage.getItem('pedidos 2'))

    }  */

    pedidoAbiertos2=JSON.parse(localStorage.getItem('pedidos 2'))||[];


/*     if(JSON.parse(localStorage.getItem('pedidos 3'))==null){
        pedidoAbierto3=[]
    }else{
        pedidoAbierto3=JSON.parse(localStorage.getItem('pedidos 3'))

    }  */
    pedidoAbierto3=JSON.parse(localStorage.getItem('pedidos 3'))||[];
 
    /*    if(JSON.parse(localStorage.getItem('pedidos 4'))==null){
      pedidoAbierto4=[]
  }else{
      pedidoAbierto4=JSON.parse(localStorage.getItem('pedidos 4'))

  }  */

  pedidoAbierto4=JSON.parse(localStorage.getItem('pedidos 4'))||[];


     dibujarPedidos(listaPedido2,pedidoAbiertos2);
    dibujarPedidos(listaPedido,pedidoAbiertos);  
    dibujarPedidos(listaPedido3,pedidoAbierto3);
    dibujarPedidos(listaPedido4,pedidoAbierto4);
    dibujarMenuComidas();

})
  
/* function leerPedidos(comidas,bebidas){
    
    const infoPedido={
        plato:comidas.nombre,
        precioPlato:comidas.precio,
        bebida:bebidas.nombre,
        precioBebidas:bebidas.precio
    }
    pedidoAbiertos.push(infoPedido)
    
    

    dibujarPedidos();
}  */

function dibujarPedidos(lista,pedidosA){
    limpiarCarrito(lista);
    
    pedidosA.forEach(productos=>{
        const fila = document.createElement('tr')
        fila.innerHTML =`
        
        <td>${productos.plato}</td>
        <td>${productos.precioPlato}</td>
        <td>${productos.bebida}</td>
        <td>${productos.precioBebidas}</td>
                                  
        
        `;
        lista.appendChild(fila)

    })
    sincronizar();
}
function limpiarCarrito(lista){
    while(lista.firstChild){
        lista.removeChild(lista.firstChild)
    }
}

function vaciarPedidos(){
    while(listaPedido.firstChild){
        listaPedido.removeChild(listaPedido.firstChild)
    }
    pedidoAbiertos=[];
    sincronizar();
}

/* function buscarPedido(){
        carga=document.getElementById("comidas");
        pedido=carga.value;
    
        let platoElegido=platosDeComida[pedido-1];
        
        if(platoElegido.stock>=1){
        
        console.log("su pedido es "+platoElegido.nombre);
        
        platoElegido.stock-=1;
        console.log("stok " +platoElegido.stock);
        
            
        }else{
            console.log("sin stock de "+platoElegido.nombre);

        }
        CargaBebidas=document.getElementById("bebidas");
        bebida=CargaBebidas.value;

        let BebidaElegida=bebidas[bebida-1];
        if(BebidaElegida.stock>=1){
            BebidaElegida.stock-=1;
            console.log("su Bebida es "+BebidaElegida.nombre);
            console.log("stok " +BebidaElegida.stock);
        }else{
            console.log("sin stock de "+BebidaElegida.nombre);
        }

        console.log("--------------");
        leerPedidos(platoElegido,BebidaElegida);
        sumarPedido();

 } */

 function buscarPedido(pedidoA){
    pedido=carga.value;
    bebida=CargaBebidas.value;


    let platoElegido=platosDeComida[pedido-1];
    
    if(platoElegido.stock>=1){
    
    // console.log("su pedido es "+platoElegido.nombre);
    
    platoElegido.stock-=1;
    // console.log("stok " +platoElegido.stock);
    
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock del plato elegido!',
            footer: '<a href="">Why do I have this issue?</a>'
          })


        platoElegido.nombre="sin stok";
        platoElegido.precio=0;

    }
    

    let BebidaElegida=bebidas[bebida-1];
    if(BebidaElegida.stock>=1){
        BebidaElegida.stock-=1;
        /* console.log("su Bebida es "+BebidaElegida.nombre);
        console.log("stok " +BebidaElegida.stock); */
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock de la bebida elegida!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        BebidaElegida.nombre="sin stok";
        BebidaElegida.precio=0;
    }

    
     const infoPedido={
        plato:platoElegido.nombre,
        precioPlato:platoElegido.precio,
        bebida:BebidaElegida.nombre,
        precioBebidas:BebidaElegida.precio
    } 
    pedidoA.push(infoPedido)
    sumarPedido();
    dibujarPedidos(listaPedido,pedidoAbiertos);

}
    
function sumarPedido(){
    let BebidaElegida=bebidas[bebida-1];
    let platoElegido=platosDeComida[pedido-1];

    if(platoElegido.stock>=1){
        
        let platoElegido=platosDeComida[pedido-1];
        sumarPrecios.push(platoElegido.precio);
    }

    if(BebidaElegida.stock>=1){
        let BebidaElegida=bebidas[bebida-1];

        sumarPreciosBebida.push(BebidaElegida.precio);
    }
    




}
function sumaTotal(pedidos,bebidas){
    let Total = pedidos.reduce ((a, b) =>a+b,0);
    let TotalBebidas=bebidas.reduce ((a, b) =>a+b,0);
   

    let PrecioTotal=Total+TotalBebidas;

    
 
    let montototal=document.getElementById("montoTotal");
    montototal.innerText=PrecioTotal;
    sumarPrecios.splice(0, sumarPrecios.length);
    sumarPreciosBebida.splice(0,sumarPreciosBebida.length);
    Swal.fire({
        
        icon: 'success',
        title: 'Pedido Finalizado',
        showConfirmButton: false,
        timer: 1500
      })

    vaciarPedidos();
   
}

function borrarPedido(){

    if(sumarPrecios&&sumarPreciosBebida){
    let pedidoBorrado=platosDeComida[pedido-1];
    let bebidaBorrada=bebidas[bebida-1];
    
    /* console.log("-----------------------------");
    console.log("pedido borrado : "+pedidoBorrado.nombre+" y "+bebidaBorrada.nombre);
    
    console.log("-----------------------------"); */


    sumarPrecios.pop();
    sumarPreciosBebida.pop();
    pedidoAbiertos.pop();
    }else{
        // console.log("No hay orden abierta")
    }
    dibujarPedidos(listaPedido,pedidoAbiertos);

}

function sincronizar(){
    localStorage.setItem('pedidos',JSON.stringify(pedidoAbiertos))
    localStorage.setItem('pedidos 2',JSON.stringify(pedidoAbiertos2)) 
    localStorage.setItem('pedidos 3',JSON.stringify(pedidoAbierto3)) 
    localStorage.setItem('pedidos 4',JSON.stringify(pedidoAbierto4)) 
    localStorage.setItem('menu bebidas',JSON.stringify(menuBebidas))
    localStorage.setItem('menu comidas',JSON.stringify(menuComidas))
}

// ----------------------------logica para mesa 2---------------------
let carga2=document.getElementById("comidas2");
let pedido2=carga2.value;
let CargaBebidas2=document.getElementById("bebidas2");
let bebida2=CargaBebidas2.value;
let listaPedido2 = document.querySelector('#listaPedidos2');


let sumarPrecios2=[];
let sumarPreciosBebida2=[];




 function leerPedidos2(comidas,bebidas){
    
    const infoPedido2={
        plato:comidas.nombre,
        precioPlato:comidas.precio,
        bebida:bebidas.nombre,
        precioBebidas:bebidas.precio
    }
    pedidoAbiertos2.push(infoPedido2)
    
    /* dibujarPedidos2(); */
    dibujarPedidos(listaPedido2,pedidoAbiertos2);
} 
/* function dibujarPedidos2(){
    limpiarCarrito2();
    
    pedidoAbiertos2.forEach(productos=>{
        const fila2 = document.createElement('tr')
        fila2.innerHTML =`
        
        <td>${productos.plato}</td>
        <td>${productos.precioPlato}</td>
        <td>${productos.bebida}</td>
        <td>${productos.precioBebidas}</td>
                                  
        
        `;
        listaPedido2.appendChild(fila2)

    })
    sincronizar();
} */
function limpiarCarrito2(){
    while(listaPedido2.firstChild){
        listaPedido2.removeChild(listaPedido2.firstChild)
    }
}
function vaciarPedidos2(){
    while(listaPedido2.firstChild){
        listaPedido2.removeChild(listaPedido2.firstChild)
    }
    pedidoAbiertos2=[];
    sincronizar();
}
function buscarPedido2(){
    
    pedido2=carga2.value;

    let platoElegido=platosDeComida[pedido2-1];
    
    if(platoElegido.stock>=1){
    
    // console.log("su pedido es "+platoElegido.nombre);
    
    platoElegido.stock-=1;
    // console.log("stok " +platoElegido.stock);
    
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock del plato elegido!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          platoElegido.nombre="sin stok";
        platoElegido.precio=0;

    }
    
    bebida2=CargaBebidas2.value;

    let BebidaElegida=bebidas[bebida2-1];
    if(BebidaElegida.stock>=1){
        BebidaElegida.stock-=1;
        /* console.log("su Bebida es "+BebidaElegida.nombre);
        console.log("stok " +BebidaElegida.stock); */
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock de la bebida elegida!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          BebidaElegida.nombre="sin stok";
        BebidaElegida.precio=0;
    }

    // console.log("--------------");
    leerPedidos2(platoElegido,BebidaElegida);

}
function sumarPedido2(){
    let BebidaElegida=bebidas[bebida2-1];
    let platoElegido=platosDeComida[pedido2-1];

    if(platoElegido.stock>=1){
        
        let platoElegido=platosDeComida[pedido2-1];
        sumarPrecios2.push(platoElegido.precio);
    }

    if(BebidaElegida.stock>=1){
        let BebidaElegida=bebidas[bebida2-1];

        sumarPreciosBebida2.push(BebidaElegida.precio);
    }

}
function sumaTotal2(pedidos,bebidas){
    let Total = pedidos.reduce ((a, b) =>a+b,0);
    let TotalBebidas=bebidas.reduce ((a, b) =>a+b,0);
    
  

    let PrecioTotal=Total+TotalBebidas;

    
    let montototal=document.getElementById("montoTotal2");
    montototal.innerText=PrecioTotal;
    sumarPrecios2.splice(0, sumarPrecios2.length);
    sumarPreciosBebida2.splice(0,sumarPreciosBebida2.length);
    Swal.fire({
       
        icon: 'success',
        title: 'Pedido Finalizado',
        showConfirmButton: false,
        timer: 1500
      })

    vaciarPedidos2();
   
}
function borrarPedido2(){

    if(sumarPrecios&&sumarPreciosBebida){
    let pedidoBorrado=platosDeComida[pedido2-1];
    let bebidaBorrada=bebidas[bebida2-1];
    
   /*  console.log("-----------------------------");
    console.log("pedido borrado : "+pedidoBorrado.nombre+" y "+bebidaBorrada.nombre);
    
    console.log("-----------------------------"); */


    sumarPrecios2.pop();
    sumarPreciosBebida2.pop();
    pedidoAbiertos2.pop();
    }else{
        // console.log("No hay orden abierta")
    }
    dibujarPedidos(listaPedido2,pedidoAbiertos2);

}

//----------------------------logica 3-------------

let carga3=document.getElementById("comidas3");
let pedido3=carga3.value;
let CargaBebidas3=document.getElementById("bebidas3");
let bebida3=CargaBebidas3.value;
let listaPedido3 = document.querySelector('#listaPedidos3');


let sumarPrecios3=[];
let sumarPreciosBebida3=[];

 function leerPedidos3(comidas,bebidas){
    
    const infoPedido3={
        plato:comidas.nombre,
        precioPlato:comidas.precio,
        bebida:bebidas.nombre,
        precioBebidas:bebidas.precio
    }
    pedidoAbierto3.push(infoPedido3)
    
    /* dibujarPedidos2(); */
    dibujarPedidos(listaPedido3,pedidoAbierto3);
}   

function limpiarCarrito3(){
    while(listaPedido3.firstChild){
        listaPedido3.removeChild(listaPedido3.firstChild)
    }
}
function vaciarPedidos3(){
    while(listaPedido3.firstChild){
        listaPedido3.removeChild(listaPedido3.firstChild)
    }
    pedidoAbierto3=[];
    sincronizar();
}
function buscarPedido3(){
    
    pedido3=carga3.value;

    let platoElegido=platosDeComida[pedido3-1];
    
    if(platoElegido.stock>=1){
    
    // console.log("su pedido es "+platoElegido.nombre);
    
    platoElegido.stock-=1;
    // console.log("stok " +platoElegido.stock);
    
        
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock del plato elegido!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          platoElegido.nombre="sin stok";
        platoElegido.precio=0;

    }
    
    bebida3=CargaBebidas3.value;

    let BebidaElegida=bebidas[bebida3-1];
    if(BebidaElegida.stock>=1){
        BebidaElegida.stock-=1;
        // console.log("su Bebida es "+BebidaElegida.nombre);
        // console.log("stok " +BebidaElegida.stock);
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock de la bebida elegida!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          BebidaElegida.nombre="sin stok";
        BebidaElegida.precio=0;
          
    }

    // console.log("--------------");
    leerPedidos3(platoElegido,BebidaElegida);

}
function sumarPedido3(){
    let BebidaElegida=bebidas[bebida3-1];
    let platoElegido=platosDeComida[pedido3-1];

    if(platoElegido.stock>=1){
        
        let platoElegido=platosDeComida[pedido3-1];
        sumarPrecios3.push(platoElegido.precio);
    }

    if(BebidaElegida.stock>=1){
        let BebidaElegida=bebidas[bebida3-1];

        sumarPreciosBebida3.push(BebidaElegida.precio);
    }

}
function sumaTotal3(pedidos,bebidas){
    let Total = pedidos.reduce ((a, b) =>a+b,0);
    let TotalBebidas=bebidas.reduce ((a, b) =>a+b,0);
    
   

    let PrecioTotal=Total+TotalBebidas;

    

    let montototal=document.getElementById("montoTotal3");
    montototal.innerText=PrecioTotal;
    sumarPrecios3.splice(0, sumarPrecios3.length);
    sumarPreciosBebida3.splice(0,sumarPreciosBebida3.length);
    Swal.fire({
      
        icon: 'success',
        title: 'Pedido Finalizado',
        showConfirmButton: false,
        timer: 1500
      })

    vaciarPedidos3();
   
}
function borrarPedido3(){

    if(sumarPrecios&&sumarPreciosBebida){
    let pedidoBorrado=platosDeComida[pedido3-1];
    let bebidaBorrada=bebidas[bebida3-1];
    
    /* console.log("-----------------------------");
    console.log("pedido borrado : "+pedidoBorrado.nombre+" y "+bebidaBorrada.nombre);
    
    console.log("-----------------------------");
 */

    sumarPrecios3.pop();
    sumarPreciosBebida3.pop();
    pedidoAbierto3.pop();
    }else{
        // console.log("No hay orden abierta")
    }
    dibujarPedidos(listaPedido3,pedidoAbierto3);

}
//---------------------logica 4-----------


let carga4=document.getElementById("comidas4");
let pedido4=carga4.value;
let CargaBebidas4=document.getElementById("bebidas4");
let bebida4=CargaBebidas4.value;
let listaPedido4 = document.querySelector('#listaPedidos4');


let sumarPrecios4=[];
let sumarPreciosBebida4=[];

 function leerPedidos4(comidas,bebidas){
    
    const infoPedido4={
        plato:comidas.nombre,
        precioPlato:comidas.precio,
        bebida:bebidas.nombre,
        precioBebidas:bebidas.precio
    }
    pedidoAbierto4.push(infoPedido4)
    
    
    dibujarPedidos(listaPedido4,pedidoAbierto4);
}   

function limpiarCarrito4(){
    while(listaPedido4.firstChild){
        listaPedido4.removeChild(listaPedido4.firstChild)
    }
}
function vaciarPedidos4(){
    while(listaPedido4.firstChild){
        listaPedido4.removeChild(listaPedido4.firstChild)
    }
    pedidoAbierto4=[];
    sincronizar();
}
function buscarPedido4(){
    
    pedido4=carga4.value;

    let platoElegido=platosDeComida[pedido4-1];
    
    if(platoElegido.stock>=1){
    
    
    
    platoElegido.stock-=1;
     
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock del plato elegido!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          platoElegido.nombre="sin stok";
        platoElegido.precio=0;
    }
    
    bebida4=CargaBebidas4.value;

    let BebidaElegida=bebidas[bebida4-1];
    if(BebidaElegida.stock>=1){
        BebidaElegida.stock-=1;
       
    }else{
        Swal.fire({
            icon: 'error',
            title: 'sin stock',
            text: 'sin Stock de la bebida elegida!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          BebidaElegida.nombre="sin stok";
        BebidaElegida.precio=0;
    }

   
    leerPedidos4(platoElegido,BebidaElegida);

}
function sumarPedido4(){
    let BebidaElegida=bebidas[bebida4-1];
    let platoElegido=platosDeComida[pedido4-1];

    if(platoElegido.stock>=1){
        
        let platoElegido=platosDeComida[pedido4-1];
        sumarPrecios4.push(platoElegido.precio);
    }

    if(BebidaElegida.stock>=1){
        let BebidaElegida=bebidas[bebida4-1];

        sumarPreciosBebida4.push(BebidaElegida.precio);
    }

}
function sumaTotal4(pedidos,bebidas){
    let Total = pedidos.reduce ((a, b) =>a+b,0);
    let TotalBebidas=bebidas.reduce ((a, b) =>a+b,0);
    
    let PrecioTotal=Total+TotalBebidas;

    
   
    let montototal=document.getElementById("montoTotal4");
    montototal.innerText=PrecioTotal;
    sumarPrecios4.splice(0, sumarPrecios4.length);
    sumarPreciosBebida4.splice(0,sumarPreciosBebida4.length);

    Swal.fire({
        
        icon: 'success',
        title: 'Pedido Finalizado',
        showConfirmButton: false,
        timer: 1500
      })

    vaciarPedidos4();
   
}
function borrarPedido4(){

    if(sumarPrecios&&sumarPreciosBebida){
    let pedidoBorrado=platosDeComida[pedido4-1];
    let bebidaBorrada=bebidas[bebida4-1];
   

    sumarPrecios4.pop();
    sumarPreciosBebida4.pop();
    pedidoAbierto4.pop();
    }
    dibujarPedidos(listaPedido4,pedidoAbierto4);

}


//-------------------Menu------
let tabComidas = document.querySelector('#menuComidas');
let tabBebidas=document.querySelector('#menuBebidas');


const links = document.querySelector('#menuCom');
// links.addEventListener('click',dibujarMenuComidas)

const link = document.querySelector('#menuBeb');
//link.addEventListener('click',dibujarMenuBebidas)

links.addEventListener('click', setURL)
link.addEventListener('click', setURL)
function setURL(evt){
    evt.preventDefault()
    //console.log(evt.target.dataset.pagina);
    url = evt.target.dataset.pagina + ".html";
    pedirPagina(url) 
    //console.log(url)
} 

function pedirPagina(url){
    //console.log(url)
    fetch(url)
        .then((res)=>{
            return res.text()
        })
        .then((pagina)=>{
            //console.log(pagina)
            document.querySelector('#men').innerHTML = pagina
        })
        .catch((err)=>{
            console.log("SE Fue por el erro")
            console.log(err)
        })
        
}  


function dibujarMenuBebidas(){

    limpiarCarrito(tabComidas);

    menuBebidas.forEach(productos=>{
        const fila = document.createElement('tr')
        fila.innerHTML =`
        
        <td>${productos.nombre}</td>
        <td>${productos.precio}</td>
        <td>${productos.stock}</td>
        <td>${productos.NumeroDeOrden}</td>
        <td>
        <a href="#" class="borrar-producto" data-id="${productos.NumeroDeOrden}">❌</a> </td>
                                  
        
        `;
        tabComidas.appendChild(fila)

    })

    

}

function dibujarMenuComidas(){
    

    limpiarCarrito(tabComidas);
    // limpiarCarrito(tabBebidas) 
    

    menuComidas.forEach(productos=>{
        const fila = document.createElement('tr')
        fila.innerHTML =`
        
        <td>${productos.nombre}</td>
        <td>${productos.precio}</td>
        <td>${productos.stock}</td>
        <td>${productos.NumeroDeOrden}</td> 
        <td>
        <a href="#" class="borrar-producto" data-id="${productos.NumeroDeOrden}">❌</a> </td>
                                  
        
        `;
        tabComidas.appendChild(fila)
        


    })
    

   /*  menuBebidas.forEach(productos=>{
        const fila = document.createElement('tr')
        fila.innerHTML =`
        
        <td>${productos.nombre}</td>
        <td>${productos.precio}</td>
        <td>${productos.stock}</td>
        <td>${productos.NumeroDeOrden}</td>
        <td>
        <a href="#" class="borrar-producto" data-id="${productos.NumeroDeOrden}">❌</a> </td>
                                  
        
        `;
        tabBebidas.appendChild(fila)

    }) */
    
}


/* 
function eliminarMenu(evt){
    evt.preventDefault();
    // console.log(evt)
    if(evt.target.classList.contains('borrar-producto')){
        const producto = evt.target.parentElement.parentElement;
        //  console.log(producto)
         const productoId = producto.querySelector('a').getAttribute('data-id')
         //console.log(productoId)
        menuComidas= menuComidas.filter( producto => producto.NumeroDeOrden!== productoId);


         dibujarMenu(); 
    } 

}
menu.addEventListener('click', eliminarMenu);

function limpiarMenu(){
    while(tabComidas.firstChild){
        tabComidas.removeChild(tabComidas.firstChild)
    }
   /*  while(tabBebidas.firstChild){
        tabBebidas.removeChild(tabBebidas.firstChild)
    } 
} */



let guardarComida=document.querySelector('#guardarComida');
guardarComida.addEventListener('click',agregarComida);

let guardarBebebida=document.querySelector('#guardarBebida');
guardarBebebida.addEventListener('click',agregarBebida);



/* function agregarComida(){

    let comida=document.querySelector('#nombreComida');
let NombreComida=comida.value;
let precio=document.querySelector('#precioComida');
let precioComida = parseFloat(document.querySelector('#precioComida').value);
let stock=document.querySelector('#stockComida');
let stockComida = parseFloat(document.querySelector('#stockComida').value);
let numeroOrden=menuComidas.length+1;

    if (isNaN(precioComida) || isNaN(stockComida)) {
        console.log("El precio o el stock no es un número válido");
    } else {
        
        const infoComida = {
            nombre: NombreComida,
            precio: precioComida,
            stock: stockComida,
            numeroOrden: numeroOrden
        }
  
/* 
const infoComida={
    nombre:NombreComida,
    precio:precioComida,
    stock:stockComida,
    numeroOrden:numeroOrden
}
 */
/* menuComidas.push(infoComida);


dibujarMenu() 

console.log(infoComida)
    
}
}
 */
function agregarComida() {
    let comida = document.querySelector('#nombreComida');
    let NombreComida = comida.value;
    let precio = document.querySelector('#precioComida');
    let precioComida = parseFloat(precio.value);
    let stock = document.querySelector('#stockComida');
    let stockComida = parseFloat(stock.value);

    
/*     if (isNaN(precioComida) || isNaN(stockComida) || NombreComida === '') {
        console.log("Por favor, ingrese valores válidos para los campos.");
        return;
    } */

    let numeroOrden = menuComidas.length + 1;

    const infoComida = {
        nombre: NombreComida,
        precio: precioComida,
        stock: stockComida,
        numeroOrden: numeroOrden
    }
   
    menuComidas.push(infoComida)
    sincronizar();
    

    dibujarMenuComidas();
}

function agregarBebida(){
    let bebida=document.querySelector('#nombreBebida');
let NombreBebida=bebida.value;
let precio=document.querySelector('#precioBebida');
let precioBebidas=precio.value;
let stock=document.querySelector('#stockBebida');
let stockBebida=stock.value;
let numeroOrden=menuBebidas.length+1;
   

   /*  console.log(NombreBebida)
    console.log(typeof(NombreBebida))
    console.log(precioBebidas)
    console.log(stockBebida)
    console.log(numeroOrden) */
   

 let infoBebida={
    nombre:NombreBebida,
    precio:precioBebidas,
    stock:stockBebida,
    numeroOrden:numeroOrden
}

menuBebidas.push(infoBebida);

//console.log(infoBebida)
dibujarMenuBebidas();  
sincronizar();
} 

