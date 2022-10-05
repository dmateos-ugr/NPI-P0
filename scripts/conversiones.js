function siglaAnombre(sigla){
    var nombre = "";
    sigla = sigla.replace(/ /g, ''); // eliminar espacios
    if(sigla=="ALEM")
        nombre="Algebra Lineal y Estructuras Matematicas";
    else if(sigla=="CA")
        nombre="Calculo";
    else if(sigla=="FP")
        nombre="Fundamentos de Programacion";
    else if(sigla=="FS")
        nombre="Fundamentos del Software";
    else if(sigla=="FFT")
        nombre="Fundamentos Fisicos y Tecnologicos";
    else if(sigla=="EC")
        nombre="Estructura de computadores";
    else if(sigla=="ED")
        nombre="Estructura de Datos";
    else if(sigla=="PDOO")
        nombre="Programacion y Diseno Orientado a Objetos";
    else if(sigla=="SCD")
        nombre="Sistemas Concurrentes y Distribuidos";
    else if(sigla=="SO")
        nombre="Sistemas Operativos";
    else if(sigla=="DDSI")
        nombre="Diseno y Desarrollo de Sistemas de Informacion";
    else if(sigla=="FR")
        nombre="Fundamentos de Redes";
    else if(sigla=="IG")
        nombre="Informatica Grafica";
    else if(sigla=="ISE")
        nombre="Ingenieria de Servidores";
    else if(sigla=="MC")
        nombre="Modelos de Computacion";
    else if(sigla=="NPI")
        nombre="Nuevos Paradigmas de Interaccion";
    else if(sigla=="PL")
        nombre="Procesadores de Lenguajes";
    else if(sigla=="VC")
        nombre="Vision por Computador";
    else if(sigla=="PTC")
        nombre="Programacion Tecnica y Cientifica";
    else if(sigla=="TIC")
        nombre="Teoria de la Informacion y la Codificacion";
    else if(sigla=="SS")
        nombre="Simulacion de Sistemas";
    else if(sigla=="CPD")
        nombre="Centros de Procesamiento de Datos";
    else if(sigla=="SE")
        nombre="Sistemas Empotrados";
    else if(sigla=="TR")
        nombre="Tecnologias de Red";
    else if(sigla=="II")
        nombre="Informatica Industrial";
    else if(sigla=="TE")
        nombre="Tecnologias Emergentes";
    else if(sigla=="DBA")
        nombre="Desarrollo Basado en Agentes";
    else
        nombre="desconocido";
    return nombre;
}

function nombreAfecha(nombre){
    var fecha = "";
    if(nombre=="Algebra Lineal y Estructuras Matematicas")
        fecha="Jueves, 20 de Enero";
    else if(nombre=="Calculo")
        fecha="Lunes, 24 de Enero";
    else if(nombre=="Fundamentos de Programacion")
        fecha="Miercoles, 26 de Enero";
    else if(nombre=="Fundamentos del Software")
        fecha="Martes, 18 de Enero";
    else if(nombre=="Fundamentos Fisicos y Tecnologicos")
        fecha="Viernes, 14 de Enero";
    else if(nombre=="Estructura de computadores")
        fecha="Miercoles, 12 de Enero";
    else if(nombre=="Estructura de Datos")
        fecha="Viernes, 21 de Enero";
    else if(nombre=="Programacion y Diseno Orientado a Objetos")
        fecha="Lunes, 17 de Enero";
    else if(nombre=="Sistemas Concurrentes y Distribuidos")
        fecha="Miercoles, 19 de Enero";
    else if(nombre=="Sistemas Operativos")
        fecha="Martes, 25 de Enero";
    else if(nombre=="Diseno y Desarrollo de Sistemas de Informacion")
        fecha="Miercoles, 26 de Enero";
    else if(nombre=="Fundamentos de Redes")
        fecha="Lunes, 24 de Enero";
    else if(nombre=="Informatica Grafica")
        fecha="Viernes, 14 de Enero";
    else if(nombre=="Ingenieria de Servidores")
        fecha="Jueves, 20 de Enero";
    else if(nombre=="Modelos de Computacion")
        fecha="Lunes, 17 de Enero";
    else if(nombre=="Nuevos Paradigmas de Interaccion")
        fecha="Lunes, 24 de Enero";
    else if(nombre=="Procesadores de Lenguajes")
        fecha="Miercoles, 19 de Enero";
    else if(nombre=="Vision por Computador")
        fecha="Miercoles, 12 de Enero";
    else if(nombre=="Programacion Tecnica y Cientifica")
        fecha="Lunes, 17 de Enero";
    else if(nombre=="Teoria de la Informacion y la Codificacion")
        fecha="Viernes, 21 de Enero";
    else if(nombre=="Simulacion de Sistemas")
        fecha="Viernes, 14 de Enero";
    else if(nombre=="Centros de Procesamiento de Datos")
        fecha="Lunes, 24 de Enero";
    else if(nombre=="Sistemas Empotrados")
        fecha="Miercoles, 19 de Enero";
    else if(nombre=="Tecnologias de Red")
        fecha="Miercoles, 12 de Enero";
    else if(nombre=="Informatica Industrial")
        fecha="Lunes, 17 de Enero";
    else if(nombre=="Tecnologias Emergentes")
        fecha="Viernes, 21 de Enero";
    else if(nombre=="Desarrollo Basado en Agentes")
        fecha="Lunes, 24 de Enero";
    else
        fecha="Asignatura desconocida: " + nombre;
    return fecha;
}

function fechaAnombre(fecha){
    var nombre = "";
    if(fecha=="12 de enero")
        nombre="Estructura de computadores, Vision por Computador y Tecnologias de Red";
    else if(fecha=="14 de enero")
        nombre="Fundamentos Fisicos y Tecnologicos, Informatica Grafica y Simulacion de Sistemas";
    else if(fecha=="17 de enero")
        nombre="Programacion y Diseno Orientado a Objetos, Modelos de Computacion, Programacion Tecnica y Cientifica e Informatica Industrial";
    else if(fecha=="18 de enero")
        nombre="Fundamentos del Software";
    else if(fecha=="19 de enero")
        nombre="Sistemas Concurrentes y Distribuidos, Procesadores de Lenguajes y Sistemas Empotrados";
    else if(fecha=="20 de enero")
        nombre="Algebra Lineal y Estructuras Matematicas e Ingenieria de Servidores";
    else if(fecha=="21 de enero")
        nombre="Estructura de Datos, Teoria de la Informacion y la Codificacion y Tecnologias Emergentes";
    else if(fecha=="24 de enero")
        nombre="Calculo, Fundamentos de Redes, Nuevos Paradigmas de Interaccion, Centros de Procesamiento de Datos y Desarrollo Basado en Agentes";
    else if(fecha=="25 de enero")
        nombre="Sistemas Operativos";
    else if(fecha=="26 de enero")
        nombre="Fundamentos de Programacion y Diseno y Desarrollo de Sistemas de Informacion";
    return nombre;
}
