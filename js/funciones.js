/*
===========================================================================================================
=================================== ADMIN =================================================================
===========================================================================================================
 */
function traerInformacionAdmin(){
    $.ajax({
        url:"http://150.230.46.229:8080/api/Admin/all",
        type:"GET",
        Headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Request-Headers": "*"
        },
        dataType:"JSON",
        success: function(respuesta){
            console.log("administrador", respuesta);
            pintarRespuestaAdmin(respuesta);
            $("#nameAdmin").val("");
            $("#emailAdmin").val("");
            $("#passwordAdmin").val("");
        }
    })
}

function pintarRespuestaAdmin(respuesta) {
    let myTable="";
    for (let i = 0; i < respuesta.length; i++) {
        myTable+="<tr>";
      
        myTable+="<td>"+respuesta[i]['name']+"</td>";
        myTable+="<td>"+respuesta[i]['email']+"</td>";
        myTable+="<td>"+respuesta[i]['password']+"</td>";
        myTable+="<td> <button class='btn btn-warning' type='submit' onclick='editarInformacionAdmin("+respuesta[i].idAdmin+")'>Editar</button> <button class='btn btn-danger' type='submit' onclick='borrarElementoAdmin("+respuesta[i].idAdmin+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="";
    $("#resultadoAdmin").append(myTable);
}

function guardarInformacionAdmin() {
    let myData={
        name:$("#nameAdmin").val(),
        email:$("#emailAdmin").val(),
        password:$("#passwordAdmin").val()
    }
    $.ajax({
        url:"http://150.230.46.229:8080/api/Admin/save",
        type:"POST",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoAdmin").empty();
            /* $("#name").val("");
            $("#email").val("");
            $("#password").val(""); */
            traerInformacionAdmin();
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
    
}

function editarInformacionAdmin(idElementoEditarAdmin) {
    let myData={
        id:idElementoEditarAdmin,
        name:$("#nameAdmin").val(),
        email:$("#emailAdmin").val(),
        password:$("#passwordAdmin").val()
    }

    $.ajax({
        url:"http://150.230.46.229:8080/api/Admin/update",
        type:"PUT",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoAdmin").empty();
            traerInformacion();
            $("#nameAdmin").val("");
            $("#emailAdmin").val("");
            $("#passwordAdmin").val("");
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
}

function borrarElementoAdmin(idElementoAdmin) {
    let myData= idElementoAdmin;
    $.ajax({
        url:"http://150.230.46.229:8080/api/Admin/"+ myData,
        type:'DELETE',
        data:JSON.stringify(myData),
        dataType:"json",
        contentType:"application/JSON",

        success: function(respuesta) {
            $("#resultadoAdmin").empty();
            traerInformacion();
            alert("Se ha eliminado el Administrador")
        }
    })
    
}

/*
===========================================================================================================
=================================== CATEGORIAS ============================================================
===========================================================================================================
 */
function traerInformacion(){
    $.ajax({
        url:"http://150.230.46.229:8080/api/Category/all",
        type:"GET",
        Headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Request-Headers": "*"
        },
        dataType:"JSON",
        success: function(respuesta){
            pintarRespuesta(respuesta);
        }
    })
}

function pintarRespuesta(respuesta) {

    let myTable="";
    for (let i = 0; i < respuesta.length; i++) {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i]['id']+"</td>";
        myTable+="<td>"+respuesta[i]['name']+"</td>";
        myTable+="<td>"+respuesta[i]['description']+"</td>";
        myTable+="<td> <button class='btn btn-warning' onclick='editarInformacion("+respuesta[i].id+")'>Editar</button> <button class='btn btn-danger' onclick='borrarElemento("+respuesta[i].id+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="";
    $("#resultado").append(myTable);
}

function guardarInformacion() {
    let myData={
        name:$("#name").val(),
        description:$("#description").val()
    }
    console.log(myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Category/save",
        type:"POST",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultado").empty();
            $("#name").val("");
            $("#description").val("");
            traerInformacion();
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
    
}

function editarInformacion(idElementoEditar) {
    console.log(idElementoEditar);
    let myData={
        id:idElementoEditar,
        name:$("#name").val(),
        description:$("#description").val()
    }

    $.ajax({
        url:"http://150.230.46.229:8080/api/Category/update",
        type:"PUT",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultado").empty();
            traerInformacion();
            $('#id').val("");
            $("#name").val("");
            $("#description").val("");
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
}

function borrarElemento(idElemento) {
    let myData= idElemento;
    $.ajax({
        url:"http://150.230.46.229:8080/api/Category/"+ myData,
        type:'DELETE',
        data:JSON.stringify(myData),
        dataType:"json",
        contentType:"application/JSON",

        success: function(respuesta) {
            $("#resultado").empty();
            traerInformacion();
            alert("Se ha eliminado")
            
        }
    })
    
}

/*
===========================================================================================================
=================================== CLIENTES   ============================================================
===========================================================================================================
 */
function traerInformacionClient(){
    $.ajax({
        url:"http://150.230.46.229:8080/api/Client/all",
        type:"GET",
        Headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Request-Headers": "*"
        },
        dataType:"JSON",
        success: function(respuesta){
            //console.log(respuesta);
            pintarRespuestaClient(respuesta);
        }
    })
}

function pintarRespuestaClient(respuesta) {
    console.log("Clientes", respuesta[0].idClient);
    let myTable="";
    for (let i = 0; i < respuesta.length; i++) {
        myTable+="<tr>";

        myTable+="<td>"+respuesta[i]['name']+"</td>";
        myTable+="<td>"+respuesta[i]['age']+"</td>";
        myTable+="<td>"+respuesta[i]['email']+"</td>";
        myTable+="<td>"+respuesta[i]['password']+"</td>";
        myTable+="<td>  <button class='btn btn-warning' onclick='editarInformacionClient("+respuesta[0].idClient+")'>Editar</button> <button class='btn btn-danger' onclick='borrarElementoClient("+respuesta[i].idClient+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="";
    $("#resultadoClient").append(myTable);
}

function guardarInformacionClient() {
    let myData={
        name:$("#nameClient").val(),
        age:$("#ageClient").val(),
        email:$("#emailClient").val(),
        password:$("#passwordClient").val()
    }
    console.log(myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Client/save",
        type:"POST",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoClient").empty();
            traerInformacion();
            $("#nameClient").val("");
            $("#ageClient").val("");
            $("#emailClient").val("");
            $("#passwordClient").val("");
            alert("Usuario Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
    
}

function editarInformacionClient(idElementoClient) {
    let myData={
        idClient:idElementoClient,
        name:$("#nameClient").val(),
        age:$("#ageClient").val(),
        email:$("#emailClient").val(),
        password:$("#passwordClient").val()
    }
    console.log(myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Client/update",
        type:"PUT",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoClient").empty();
            $("#nameClient").val("");
            $("#ageClient").val("");
            $("#emailClient").val("");
            $("#passwordClient").val("");
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
}

function borrarElementoClient(idElementoCliente) {
    let myData= idElementoCliente;

    $.ajax({
        url:"http://150.230.46.229:8080/api/Client/"+ myData,
        type:'DELETE',
        data:JSON.stringify(myData),
        contentType:"application/JSON",
        dataType:"json",
        success: function(respuesta) {
            $("#resultadoClient").empty();
            traerInformacionClient();
            alert("Se ha eliminado")
            
        }
    })
    
}


/*
===========================================================================================================
=================================== Mensaje  ==============================================================
===========================================================================================================
 */

function traerInformacionMessage(){
    $.ajax({
        url:"http://150.230.46.229:8080/api/Message/all",
        type:"GET",
        Headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Request-Headers": "*"
        },
        dataType:"JSON",
        success: function(respuestaMessage){
            pintarRespuestaMessage(respuestaMessage);
        }
    })
}

function pintarRespuestaMessage(respuestaMessage) {
    let myTable="";
    for (let i = 0; i < respuestaMessage.length; i++) {
        myTable+="<tr>";
        myTable+="<td>"+respuestaMessage[i]['messageText']+"</td>";
        myTable+="<td>"+respuestaMessage[i].client.name+"</td>";
        myTable+="<td>"+respuestaMessage[i].lib.name+"</td>";
        myTable+="<td> <button class='btn btn-warning' type='submit' onclick='editarInformacionAdmin("+respuestaMessage[i].idMessage+")'>Editar</button> <button class='btn btn-danger' onclick='borrarElementoMessage("+respuestaMessage[i].idMessage+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="";
    $("#resultadoMessage").append(myTable);
}

function guardarInformacionMessage() {
    let myData={
        messageText:$("#messageText").val(),
        client:{idClient:$("#select-client").val()},
        lib :{id:$("#select-library").val()},
    }
    console.log("Client", myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Message/save",
        type:"POST",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuestaMessage) {
            $("#resultadoMessage").empty();
            $("#messageText").val("");
            traerInformacionMessage();
            alert("Mensaje Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
    
}

function editarInformacionMessage() {
    let myData={
        id:$("#idMessage").val(),
        meesageText:$("#messageText").val(),
    }
    console.log(myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Message/save",
        type:"PUT",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuestaMessage) {
            $("#resultadoMessage").empty();
            $('#idMessage').val("");
            $("#messageText").val("");
            traerInformacionMessage();
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
}

function borrarElementoMessage(idElementoMessage) {
    let myData= idElementoMessage;

    $.ajax({
        url:"http://150.230.46.229:8080/api/Message/"+myData,
        type:'DELETE',
        data:JSON.stringify(myData),
        contentType:"application/JSON",
        dataType:"json",
        success: function(respuestaMessage) {
            $("#resultadoMessage").empty();
            traerInformacionMessage();
            alert("Se ha eliminado el mensaje")
            
        }
    })
    
}


/*
===========================================================================================================
=================================== Libreria ==============================================================
===========================================================================================================
 */

function traerInformacionLibrary(){
    $.ajax({
        url:"http://150.230.46.229:8080/api/Lib/all",
        type:"GET",
        Headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Request-Headers": "*"
        },
        dataType:"JSON",
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuestaLibrary(respuesta);
            $("#nameLibrary").val("");
            $("#targetLibrary").val("");
            $("#capacityLibrary").val("");
            $("#descriptionLibrary").val("");
        }
    })
}

function pintarRespuestaLibrary(respuesta) {
    console.log("library", respuesta);
    let myTable="";
    for (let i = 0; i < respuesta.length; i++) {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i]['name']+"</td>";
        myTable+="<td>"+respuesta[i]['target']+"</td>";
        myTable+="<td>"+respuesta[i]['capacity']+"</td>";
        myTable+="<td>"+respuesta[i]['description']+"</td>";
        myTable+="<td>"+respuesta[i].category.name+"</td>";

        myTable+="<td><button class='btn btn-warning' type='submit' onclick='editarInformacionAdmin("+respuesta[i].id+")'>Editar</button> <button class='btn btn-danger' onclick='borrarElementoLibrary("+respuesta[i].id+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="";
    $("#resultadoLibrary").append(myTable);
}

function guardarInformacionLibrary() {
    let myData={
        name:$("#nameLibrary").val(),
        target:$("#targetLibrary").val(),
        capacity:$("#capacityLibrary").val(),
        description:$("#descriptionLibrary").val(),
        category:{id:$("#select-category").val()},
        
    }
    console.log("Client", myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Lib/save",
        type:"POST",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoLibrary").empty();
            $("#nameLibrary").val("");
            $("#targetLibrary").val("");
            $("#capacityLibrary").val("");
            $("#descriptionLibrary").val("");
            traerInformacionLibrary();
            alert("Cubiculo Creado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
    
}

function editarInformacionLibrary(idElementoLibrary) {
    let myData={
        id: idElementoLibrary,
        name:$("#nameLibrary").val(),
        target:$("#targetLibrary").val(),
        capacity:$("#capacityLibrary").val(),
        description:$("#descriptionLibrary").val(),    
        categoryId:{id:$("#select-category").val()},

    }
    console.log(myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Lib/save",
        type:"PUT",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoLibrary").empty();
            $("#nameLibrary").val("");
            $("#targetLibrary").val("");
            $("#capacityLibrary").val("");
            $("#descriptionLibrary").val(""),
            traerInformacionLibrary();
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
}

function borrarElementoLibrary(idElementoLibrary) {
    let myData= idElementoLibrary;

    $.ajax({
        url:"http://150.230.46.229:8080/api/Lib/"+myData,
        type:'DELETE',
        data:JSON.stringify(myData),
        contentType:"application/JSON",
        dataType:"json",
        success: function(respuesta) {
            $("#resultadoLibrary").empty();
            traerInformacionLibrary();
            alert("Se ha eliminado el mensaje")
            
        }
    })
    
}


/*
===========================================================================================================
=================================== Reservaciones ==============================================================
===========================================================================================================
 */

function traerInformacionReservation(){
    $.ajax({
        url:"http://150.230.46.229:8080/api/Reservation/all",
        type:"GET",
        Headers:{
            "Content-Type": "application/json",
            "Accept": "application/json",
            "Access-Control-Request-Headers": "*"
        },
        dataType:"JSON",
        success: function(respuesta){
            console.log("reservation", respuesta);
            pintarRespuestaReservation(respuesta);
            $("#library").val("");
            $("#startDate").val("");
            $("#devolutionDate").val("");
            $("#client").val("");
        }
    })
}

function pintarRespuestaReservation(respuesta) {
    console.log("Mi reserva", respuesta)
    let myTable="";
    for (let i = 0; i < respuesta.length; i++) {
        myTable+="<tr>";
        myTable+="<td>"+respuesta[i].lib.name+"</td>";
        myTable+="<td>"+respuesta[i]['startDate']+"</td>";
        myTable+="<td>"+respuesta[i]['devolutionDate']+"</td>";
        myTable+="<td>"+respuesta[i].client.name+"</td>";

        myTable+="<td> <button class='btn btn-warning' type='submit' onclick='editarInformacionReservation("+respuesta[i].idReservation+")'>Editar</button> <button class='btn btn-danger' onclick='borrarElementoReservation("+respuesta[i].idReservation+")'>Borrar</button></td>";
        myTable+="</tr>";
    }
    myTable+="";
    $("#resultadoReservation").append(myTable);
}

function guardarInformacionReservation() {
    let myData={
        lib:{id:$("#select-library").val()},
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        client:{id:$("#select-client").val()},
        
    }
    console.log("Reservation", myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Reservation/save",
        type:"POST",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoReservation").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            traerInformacionReservation();
            alert("Reserva hecha con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
      
}

function editarInformacionReservation(idElementoReservation) {
    let myData={
        id: idElementoReservation,
        lib:{id:$("#select-library").val()},
        startDate:$("#startDate").val(),
        devolutionDate:$("#devolutionDate").val(),
        client:{id:$("#select-client").val()},

    }
    console.log(myData);
    $.ajax({
        url:"http://150.230.46.229:8080/api/Reservation/save",
        type:"PUT",
        data:JSON.stringify(myData),
        dataType:"json",
        Accept : "application/json",
        contentType: "application/json",
        success: function (respuesta) {
            $("#resultadoReservation").empty();
            $("#startDate").val("");
            $("#devolutionDate").val("");
            traerInformacionReservation();
            alert("Guardado con Exito")
        },
        error: function (xhr, status) {
            console.log(xhr.responseText);
        }
    })
}

function borrarElementoReservation(idElementoReservation) {
    let myData= idElementoReservation;

    $.ajax({
        url:"http://150.230.46.229:8080/api/Reservation/"+myData,
        type:'DELETE',
        data:JSON.stringify(myData),
        contentType:"application/JSON",
        dataType:"json",
        success: function(respuesta) {
            $("#resultadoReservation").empty();
            traerInformacionReservation();
            alert("Se ha eliminado la reservacion")
            
        }
    })
    
}


/*
===========================================================================================================
=================================== Servicios  ==============================================================
===========================================================================================================
 */

function autoInicioCategory(){
    $.ajax(
        {
        url:"http://150.230.46.229:8080/api/Category/all",
        type:"GET",
        datatype:"JSON",
        success : function(json){
            let $select = $("#select-category");
            $.each(json, function(id, name){
                $select.append("<option value="+ name.id +">" +name.name+"</option>");
            });
        }
    })
}


function autoInicioClient(){
    $.ajax(
        {
        url:"http://150.230.46.229:8080/api/Client/all",
        type:"GET",
        datatype:"JSON",
        success : function(json){
            let $select = $("#select-client");
            $.each(json, function(id, name){
                $select.append("<option value="+ name.idClient +">" +name.name+"</option>");
            });
        }
    })
}

function autoInicioLibrary(){
    $.ajax(
        {
        url:"http://150.230.46.229:8080/api/Lib/all",
        type:"GET",
        datatype:"JSON",
        success : function(json){
            let $select = $("#select-library");
            $.each(json, function(id, name){
                $select.append("<option value="+ name.id +">" +name.name+"</option>");
            });
        }
    })
}


/*
===========================================================================================================
=================================== Funciones llamadas ====================================================
===========================================================================================================
 */


$(document).ready(function(){
    // Funciones a ejecutar
    traerInformacion();
    traerInformacionMessage();
    traerInformacionClient();
    traerInformacionAdmin();
    traerInformacionLibrary();
    traerInformacionReservation();



    //Servicios
    autoInicioCategory();
    autoInicioClient();
    autoInicioLibrary();
});


$("#crear").click(function(){
    console.log("prueba")
})

