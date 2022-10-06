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


////////////////////////////////////////////////////////////////////////////



function acronymToName(sigla){
    var nombre = "";
    sigla = sigla.replace(/ /g, ''); // eliminar espacios
    if(sigla=="LAMS")
        nombre="Linear Algebra and Mathematical Structures";
    else if(sigla=="CA")
        nombre="Calculus";
    else if(sigla=="FP")
        nombre="Fundamentals of Programming";
    else if(sigla=="FS")
        nombre="Fundamentals of Software";
    else if(sigla=="FPT")
        nombre="Fundamentals of Physics and Technology";
    else if(sigla=="CS")
        nombre="Computer Structures";
    else if(sigla=="DS")
        nombre="Data Structures";
    else if(sigla=="OOPD")
        nombre="Object-Oriented Programming and Design";
    else if(sigla=="CDS")
        nombre="Concurrent and Distributed Systems";
    else if(sigla=="OS")
        nombre="Operating Systems";
    else if(sigla=="ISDD")
        nombre="Information Systems Design and Development";
    else if(sigla=="BPN")
        nombre="Basic Principles of Networks";
    else if(sigla=="GC")
        nombre="Graphical Computing";
    else if(sigla=="SE")
        nombre="Server Engineering";
    else if(sigla=="MC")
        nombre="Models of Computation";
    else if(sigla=="NIP")
        nombre="New Interaction Paradigms";
    else if(sigla=="LP")
        nombre="Language Processors";
    else if(sigla=="CV")
        nombre="Computer Vision";
    else if(sigla=="TSP")
        nombre="Technical and Scientific Programming";
    else if(sigla=="TIC")
        nombre="Theory of Information and Coding";
    else if(sigla=="SS")
        nombre="System Simulation";
    else if(sigla=="DPC")
        nombre="Data Processing Centres";
    else if(sigla=="ES")
        nombre="Embedded Systems";
    else if(sigla=="NT")
        nombre="Network Technologies";
    else if(sigla=="IC")
        nombre="Industrial Computing";
    else if(sigla=="ET")
        nombre="Emerging Technologies";
    else if(sigla=="ABD")
        nombre="Agent-Based Development";
    else
        nombre="unknown";
    return nombre;
}

function nameToDate(nombre){
    var fecha = "";
    if(nombre=="Linear Algebra and Mathematical Structures")
        fecha="Thursday, 20th of January";
    else if(nombre=="Calculus")
        fecha="Monday, 24th of January";
    else if(nombre=="Fundamentals of Programming")
        fecha="Wednesday, 26th of January";
    else if(nombre=="Fundamentals of Software")
        fecha="Tuesday, 18th of January";
    else if(nombre=="Fundamentals of Physics and Technology")
        fecha="Friday, 14th of January";
    else if(nombre=="Computer Structures")
        fecha="Wednesday, 12nd of January";
    else if(nombre=="Data Structures")
        fecha="Friday, 21st of January";
    else if(nombre=="Object-Oriented Programming and Design")
        fecha="Monday, 17th of January";
    else if(nombre=="Concurrent and Distributed Systems")
        fecha="Wednesday, 19th of January";
    else if(nombre=="Operating Systems")
        fecha="Tuesday, 25th of January";
    else if(nombre=="Information Systems Design and Development")
        fecha="Wednesday, 26th of January";
    else if(nombre=="Basic Principles of Networks")
        fecha="Monday, 24th of January";
    else if(nombre=="Graphical Computing")
        fecha="Friday, 14th of January";
    else if(nombre=="Server Engineering")
        fecha="Thursday, 20th of January";
    else if(nombre=="Models of Computation")
        fecha="Monday, 17th of January";
    else if(nombre=="New Interaction Paradigms")
        fecha="Monday, 24th of January";
    else if(nombre=="Language Processors")
        fecha="Wednesday, 19th of January";
    else if(nombre=="Computer Vision")
        fecha="Wednesday, 12nd of January";
    else if(nombre=="Technical and Scientific Programming")
        fecha="Monday, 17th of January";
    else if(nombre=="Theory of Information and Coding")
        fecha="Friday, 21st of January";
    else if(nombre=="System Simulation")
        fecha="Friday, 14th of January";
    else if(nombre=="Data Processing Centres")
        fecha="Monday, 24th of January";
    else if(nombre=="Embedded Systems")
        fecha="Wednesday, 19th of January";
    else if(nombre=="Network Technologies")
        fecha="Wednesday, 12nd of January";
    else if(nombre=="Industrial Computing")
        fecha="Monday, 17th of January";
    else if(nombre=="Emerging Technologies")
        fecha="Friday, 21st of January";
    else if(nombre=="Agent-Based Development")
        fecha="Monday, 24th of January";
    else
        fecha="Unknown course: " + nombre;
    return fecha;
}

function dateToName(fecha){
    var nombre = "";
    if(fecha=="12nd of January")
        nombre="Computer Structures, Computer Vision and Network Technologies";
    else if(fecha=="14th of January")
        nombre="Fundamentals of Physics and Technology, Graphical Computing and System Simulation";
    else if(fecha=="17th of January")
        nombre="Object-Oriented Programming and Design, Models of Computation, Technical and Scientific Programming and Industrial Computing";
    else if(fecha=="18th of January")
        nombre="Fundamentals of Software";
    else if(fecha=="19th of January")
        nombre="Concurrent and Distributed Systems, Language Processors and Embedded Systems";
    else if(fecha=="20th of January")
        nombre="Linear Algebra and Mathematical Structures and Server Engineering";
    else if(fecha=="21st of January")
        nombre="Data Structures, Theory of Information and Coding and Emerging Technologies";
    else if(fecha=="24th of January")
        nombre="Calculus, Basic Principles of Networks, New Interaction Paradigms, Data Processing Centres and Agent-Based Development";
    else if(fecha=="25th of January")
        nombre="Operating Systems";
    else if(fecha=="26th of January")
        nombre="Fundamentals of Programming and Information Systems Design and Development";
    return nombre;
}
