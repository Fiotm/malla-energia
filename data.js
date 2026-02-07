// Datos armados desde la malla del PDF (ciclos I–VIII y optativas listadas).
// Tipo: "REQ" = requisito obligatorio (línea sólida), "CO" = correquisito opcional (punteado)

const DATA = {
  nodes: [
    // I
    { id:"EG-I", code:"EG-I", name:"Curso Integrado de Humanidades I", cycle:"I", credits:6 },
    { id:"QU-0100", code:"QU-0100", name:"Química General I", cycle:"I", credits:3 },
    { id:"QU-0101", code:"QU-0101", name:"Lab. Química General I", cycle:"I", credits:1 },
    { id:"MA-1101", code:"MA-1101", name:"Cálculo I", cycle:"I", credits:3 },
    { id:"MA-1004", code:"MA-1004", name:"Álgebra Lineal", cycle:"I", credits:3 },
    { id:"EF", code:"EF", name:"Actividad Deportiva", cycle:"I", credits:0 },
    { id:"EG-ARTE", code:"EG-Arte", name:"Curso de Arte", cycle:"I", credits:2 },

    // II
    { id:"EG-II", code:"EG-II", name:"Curso Integrado de Humanidades II", cycle:"II", credits:6 },
    { id:"CI-0202", code:"CI-0202", name:"Principios de Informática", cycle:"II", credits:4 },
    { id:"MA-1002", code:"MA-1002", name:"Cálculo II", cycle:"II", credits:4 },
    { id:"FS-0210", code:"FS-0210", name:"Física General I", cycle:"II", credits:3 },
    { id:"FS-0211", code:"FS-0211", name:"Lab. Física General I", cycle:"II", credits:1 },

    // III
    { id:"IM-0101", code:"IM-0101", name:"Gráfica", cycle:"III", credits:3 },
    { id:"IE-0209", code:"IE-0209", name:"Circuitos Lineales I", cycle:"III", credits:3 },
    { id:"MA-1003", code:"MA-1003", name:"Cálculo III", cycle:"III", credits:4 },
    { id:"FS-0310", code:"FS-0310", name:"Física General II", cycle:"III", credits:3 },
    { id:"FS-0311", code:"FS-0311", name:"Lab. Física General II", cycle:"III", credits:1 },
    { id:"MA-1005", code:"MA-1005", name:"Ecuaciones Diferenciales", cycle:"III", credits:4 },

    // IV
    { id:"IM-0207", code:"IM-0207", name:"Mecánica I", cycle:"IV", credits:3 },
    { id:"IE-0309", code:"IE-0309", name:"Circuitos Lineales II", cycle:"IV", credits:3 },
    { id:"FS-0410", code:"FS-0410", name:"Física General III", cycle:"IV", credits:3 },
    { id:"FS-0411", code:"FS-0411", name:"Lab. Física General III", cycle:"IV", credits:1 },
    { id:"IE-0313", code:"IE-0313", name:"Electrónica I", cycle:"IV", credits:3 },
    { id:"IE-0247", code:"IE-0247", name:"Señales y Sistemas I", cycle:"IV", credits:3 },
    { id:"SR-I", code:"SR-I", name:"Seminario de Realidad Nacional I", cycle:"IV", credits:2 },

    // V
    { id:"IM-0307", code:"IM-0307", name:"Mecánica II", cycle:"V", credits:3 },
    { id:"IE-0323", code:"IE-0323", name:"Sistemas Digitales I", cycle:"V", credits:4 },
    { id:"IE-0347", code:"IE-0347", name:"Señales y Sistemas II", cycle:"V", credits:3 },
    { id:"IE-0307", code:"IE-0307", name:"Electromagnetismo I", cycle:"V", credits:3 },
    { id:"IE-0413", code:"IE-0413", name:"Electrónica II", cycle:"V", credits:3 },
    { id:"IE-0308", code:"IE-0308", name:"Laboratorio de Electrónica I", cycle:"V", credits:3 },

    // VI
    { id:"RP", code:"RP", name:"Repertorio", cycle:"VI", credits:3 },
    { id:"IE-0281", code:"IE-0281", name:"Termofluidos", cycle:"VI", credits:3 },
    { id:"IE-0405", code:"IE-0405", name:"Modelo Probabilísticos de Señales y Sistemas", cycle:"VI", credits:3 },
    { id:"IE-0315", code:"IE-0315", name:"Máquinas Eléctricas I", cycle:"VI", credits:3 },
    { id:"IE-0316", code:"IE-0316", name:"Lab. de Máquinas Eléctricas I", cycle:"VI", credits:1 },
    { id:"IE-0408", code:"IE-0408", name:"Laboratorio de Electrónica II", cycle:"VI", credits:3 },
    { id:"IE-0501", code:"IE-0501", name:"Responsabilidad en el Ejercicio Profesional", cycle:"VI", credits:1 },

    // VII
    { id:"IE-0365", code:"IE-0365", name:"Transmisión de Potencia", cycle:"VII", credits:3 },
    { id:"IE-0431", code:"IE-0431", name:"Sistemas de Control", cycle:"VII", credits:3 },
    { id:"IE-0615", code:"IE-0615", name:"Máquinas Eléctricas II", cycle:"VII", credits:3 },
    { id:"IE-0616", code:"IE-0616", name:"Lab. de Máquinas Eléctricas II", cycle:"VII", credits:1 },
    { id:"IE-0381", code:"IE-0381", name:"Ciencia de los Materiales", cycle:"VII", credits:3 },
    { id:"SR-II", code:"SR-II", name:"Seminario de Realidad Nacional II", cycle:"VII", credits:2 },
    { id:"IE-OPT-I", code:"Opt I", name:"Optativa I", cycle:"VII", credits:3 },

    // VIII
    { id:"IE-0469", code:"IE-0469", name:"Sistemas de Potencia I", cycle:"VIII", credits:3 },
    { id:"IE-0499", code:"IE-0499", name:"Proyecto Eléctrico", cycle:"VIII", credits:3 },
    { id:"IE-0471", code:"IE-0471", name:"Diseño Eléctrico Industrial I", cycle:"VIII", credits:3 },
    { id:"IE-0479", code:"IE-0479", name:"Ingeniería Económica", cycle:"VIII", credits:3 },
    { id:"IE-OPT-II", code:"Opt II", name:"Optativa II", cycle:"VIII", credits:3 },

    // Hitos
    { id:"TCU", code:"TCU", name:"Trabajo Comunal Universitario (300 h)", cycle:null, credits:null, note:"Requiere ≥50% créditos y SR-I aprobado." },
    { id:"PRACTICA", code:"Práctica", name:"Práctica Profesional (300 h)", cycle:null, credits:null, note:"Requiere 107 créditos aprobados para solicitar permiso." },

    // Optativas (pág. 2) como nodos extra (se ocultan por defecto)
    { id:"IE-0117", code:"IE-0117", name:"Programación bajo plataformas abiertas", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0311", code:"IE-0311", name:"Circuitos integrados digitales", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0321", code:"IE-0321", name:"Estructura de computadoras digitales I", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0407", code:"IE-0407", name:"Electromagnetismo II", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0435", code:"IE-0435", name:"IA aplicada a la ing. eléctrica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0437", code:"IE-0437", name:"Fotónica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0439", code:"IE-0439", name:"Optoelectrónica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0445", code:"IE-0445", name:"Metrología en ing. eléctrica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0447", code:"IE-0447", name:"Procesamiento digital de señales I", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0449", code:"IE-0449", name:"Visión por computador", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0457", code:"IE-0457", name:"Conservación de la energía eléctrica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0467", code:"IE-0467", name:"Distribución eléctrica subterránea", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0505", code:"IE-0505", name:"Técnicas de optimización", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0513", code:"IE-0513", name:"Electrónica III", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0514", code:"IE-0514", name:"Electrónica de potencia y control de máquinas", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0527", code:"IE-0527", name:"Ingeniería de comunicaciones", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0537", code:"IE-0537", name:"Radiometría y fotometría", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0539", code:"IE-0539", name:"Comunicaciones por fibra óptica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0545", code:"IE-0545", name:"Mediciones ópticas", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0559", code:"IE-0559", name:"Energía solar fotovoltaica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0619", code:"IE-0619", name:"Control eléctrico industrial", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0624", code:"IE-0624", name:"Laboratorio de microcontroladores", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0628", code:"IE-0628", name:"Laboratorio de microondas", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0639", code:"IE-0639", name:"Circuitos integrados fotónicos", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-0739", code:"IE-0739", name:"Redes ópticas en telecomunicaciones", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-1003", code:"IE-1003", name:"Temas especiales I en ingeniería", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-1014", code:"IE-1014", name:"Temas especiales I en control", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-1015", code:"IE-1015", name:"Temas especiales I en telecomunicaciones", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-1017", code:"IE-1017", name:"Temas especiales I en máquinas eléctricas", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-1018", code:"IE-1018", name:"Temas especiales I en sistemas de potencia", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-1020", code:"IE-1020", name:"Temas especiales I en electrónica", cycle:"VIII", credits:null, group:"OPT" },
    { id:"IE-1021", code:"IE-1021", name:"Temas especiales I en sistemas digitales", cycle:"VIII", credits:null, group:"OPT" },
  ],

  links: [
    // Requisitos (REQ)
    { source:"EG-I", target:"EG-II", type:"REQ" },
    { source:"MA-1101", target:"CI-0202", type:"REQ" },
    { source:"MA-1101", target:"MA-1002", type:"REQ" },
    { source:"MA-1101", target:"FS-0210", type:"REQ" },

    { source:"MA-1002", target:"MA-1003", type:"REQ" },
    { source:"MA-1002", target:"MA-1005", type:"REQ" },
    { source:"MA-1004", target:"MA-1005", type:"REQ" },

    { source:"MA-1002", target:"IE-0209", type:"REQ" },
    { source:"MA-1004", target:"IE-0209", type:"REQ" },
    { source:"FS-0210", target:"IE-0209", type:"REQ" },
    { source:"FS-0211", target:"IE-0209", type:"REQ" },

    { source:"MA-1002", target:"FS-0310", type:"REQ" },
    { source:"FS-0210", target:"FS-0310", type:"REQ" },
    { source:"FS-0211", target:"FS-0310", type:"REQ" },

    { source:"MA-1002", target:"FS-0311", type:"REQ" },
    { source:"FS-0210", target:"FS-0311", type:"REQ" },
    { source:"FS-0211", target:"FS-0311", type:"REQ" },

    { source:"IE-0209", target:"IE-0309", type:"REQ" },
    { source:"MA-1005", target:"IE-0309", type:"REQ" },
    { source:"FS-0310", target:"IE-0309", type:"REQ" },
    { source:"FS-0311", target:"IE-0309", type:"REQ" },

    { source:"MA-1005", target:"IE-0247", type:"REQ" },
    { source:"IE-0209", target:"IE-0247", type:"REQ" },
    { source:"CI-0202", target:"IE-0247", type:"REQ" },

    { source:"MA-1003", target:"FS-0410", type:"REQ" },
    { source:"FS-0310", target:"FS-0410", type:"REQ" },
    { source:"FS-0311", target:"FS-0410", type:"REQ" },

    { source:"MA-1003", target:"FS-0411", type:"REQ" },
    { source:"FS-0310", target:"FS-0411", type:"REQ" },
    { source:"FS-0311", target:"FS-0411", type:"REQ" },

    { source:"IE-0209", target:"IE-0313", type:"REQ" },
    { source:"EG-II", target:"IE-0313", type:"REQ" },

    { source:"IM-0207", target:"IM-0307", type:"REQ" },
    { source:"IE-0313", target:"IE-0323", type:"REQ" },
    { source:"IE-0247", target:"IE-0347", type:"REQ" },

    { source:"FS-0410", target:"IE-0307", type:"REQ" },
    { source:"FS-0411", target:"IE-0307", type:"REQ" },
    { source:"IE-0247", target:"IE-0307", type:"REQ" },
    { source:"IE-0313", target:"IE-0307", type:"REQ" },
    { source:"MA-1003", target:"IE-0307", type:"REQ" },

    { source:"IE-0247", target:"IE-0413", type:"REQ" },
    { source:"IE-0313", target:"IE-0413", type:"REQ" },

    { source:"IE-0309", target:"IE-0308", type:"REQ" },
    { source:"IE-0313", target:"IE-0308", type:"REQ" },

    { source:"IE-0347", target:"IE-0405", type:"REQ" },
    { source:"IE-0307", target:"IE-0315", type:"REQ" },
    { source:"IE-0309", target:"IE-0315", type:"REQ" },

    { source:"IE-0308", target:"IE-0316", type:"REQ" },
    { source:"IE-0413", target:"IE-0316", type:"REQ" },

    { source:"IE-0308", target:"IE-0408", type:"REQ" },
    { source:"IE-0413", target:"IE-0408", type:"REQ" },

    { source:"IE-0308", target:"IE-0501", type:"REQ" },
    { source:"IE-0413", target:"IE-0501", type:"REQ" },

    { source:"IE-0315", target:"IE-0365", type:"REQ" },
    { source:"IE-0316", target:"IE-0365", type:"REQ" },
    { source:"IE-0347", target:"IE-0365", type:"REQ" },

    { source:"IE-0315", target:"IE-0431", type:"REQ" },
    { source:"IE-0316", target:"IE-0431", type:"REQ" },
    { source:"IE-0347", target:"IE-0431", type:"REQ" },

    { source:"IE-0315", target:"IE-0615", type:"REQ" },
    { source:"IE-0316", target:"IE-0615", type:"REQ" },
    { source:"IE-0347", target:"IE-0615", type:"REQ" },

    { source:"SR-I", target:"SR-II", type:"REQ" },

    { source:"IE-0365", target:"IE-0469", type:"REQ" },
    { source:"IE-0615", target:"IE-0469", type:"REQ" },
    { source:"IE-0431", target:"IE-0469", type:"REQ" },

    { source:"IE-0365", target:"IE-0499", type:"REQ" },
    { source:"IE-0315", target:"IE-0471", type:"REQ" },
    { source:"IE-0316", target:"IE-0471", type:"REQ" },
    { source:"IE-0501", target:"IE-0479", type:"REQ" },

    // Correquisitos opcionales (CO) — punteado
    { source:"QU-0101", target:"FS-0211", type:"CO" },
    { source:"FS-0211", target:"FS-0210", type:"CO" },
    { source:"MA-1002", target:"IM-0101", type:"CO" },
    { source:"FS-0311", target:"FS-0310", type:"CO" },
    { source:"FS-0411", target:"FS-0410", type:"CO" },
    { source:"FS-0411", target:"IE-0309", type:"CO" },
    { source:"FS-0410", target:"IE-0309", type:"CO" },
    { source:"IE-0316", target:"IE-0315", type:"CO" },
    { source:"IE-0616", target:"IE-0615", type:"CO" },

    // Hitos
    { source:"SR-I", target:"TCU", type:"REQ" },

    // Optativas (pág. 2) — prereqs de optativas
    { source:"CI-0202", target:"IE-0117", type:"REQ" },
    { source:"FS-0410", target:"IE-0311", type:"REQ" },
    { source:"IE-0323", target:"IE-0311", type:"REQ" },
    { source:"IE-0323", target:"IE-0321", type:"REQ" },
    { source:"IE-0307", target:"IE-0407", type:"REQ" },
    { source:"IE-0347", target:"IE-0435", type:"REQ" },
    { source:"CI-0202", target:"IE-0435", type:"REQ" },
    { source:"IE-0307", target:"IE-0437", type:"REQ" },
    { source:"IE-0308", target:"IE-0437", type:"REQ" },
    { source:"IE-0307", target:"IE-0439", type:"REQ" },
    { source:"IE-0308", target:"IE-0439", type:"REQ" },
    { source:"IE-0307", target:"IE-0445", type:"REQ" },
    { source:"IE-0308", target:"IE-0445", type:"REQ" },
    { source:"IE-0347", target:"IE-0447", type:"REQ" },
    { source:"IE-0247", target:"IE-0449", type:"REQ" },
    { source:"IE-0315", target:"IE-0457", type:"REQ" },
    { source:"IE-0316", target:"IE-0457", type:"REQ" },
    { source:"IE-0307", target:"IE-0467", type:"REQ" },
    { source:"IE-0315", target:"IE-0467", type:"REQ" },
    { source:"IE-0316", target:"IE-0467", type:"REQ" },
    { source:"IE-0347", target:"IE-0505", type:"REQ" },
    { source:"IE-0413", target:"IE-0513", type:"REQ" },
    { source:"IE-0315", target:"IE-0514", type:"REQ" },
    { source:"IE-0316", target:"IE-0514", type:"REQ" },
    { source:"IE-0431", target:"IE-0514", type:"REQ" },
    { source:"IE-0307", target:"IE-0527", type:"REQ" },
    { source:"IE-0405", target:"IE-0527", type:"REQ" },
    { source:"IE-0307", target:"IE-0537", type:"REQ" },
    { source:"IE-0308", target:"IE-0537", type:"REQ" },
    { source:"IE-0307", target:"IE-0539", type:"REQ" },
    { source:"IE-0308", target:"IE-0539", type:"REQ" },
    { source:"IE-0307", target:"IE-0545", type:"REQ" },
    { source:"IE-0308", target:"IE-0545", type:"REQ" },
    { source:"IE-0315", target:"IE-0559", type:"REQ" },
    { source:"IE-0316", target:"IE-0559", type:"REQ" },
    { source:"IE-0615", target:"IE-0619", type:"REQ" },
    { source:"IE-0616", target:"IE-0619", type:"REQ" },
    { source:"IE-0323", target:"IE-0619", type:"REQ" },
    { source:"IE-0323", target:"IE-0624", type:"REQ" },
    { source:"IE-0308", target:"IE-0624", type:"REQ" },
    { source:"IE-0413", target:"IE-0624", type:"REQ" },
    { source:"IE-0307", target:"IE-0628", type:"REQ" },
    { source:"IE-0408", target:"IE-0628", type:"REQ" },
    { source:"IE-0307", target:"IE-0639", type:"REQ" },
    { source:"IE-0308", target:"IE-0639", type:"REQ" },
    { source:"IE-0307", target:"IE-0739", type:"REQ" },
    { source:"IE-0308", target:"IE-0739", type:"REQ" },
    { source:"IE-0347", target:"IE-1003", type:"REQ" },
    { source:"IE-0347", target:"IE-1014", type:"REQ" },
    { source:"IE-0347", target:"IE-1015", type:"REQ" },
    { source:"IE-0347", target:"IE-1017", type:"REQ" },
    { source:"IE-0347", target:"IE-1018", type:"REQ" },
    { source:"IE-0347", target:"IE-1020", type:"REQ" },
    { source:"IE-0347", target:"IE-1021", type:"REQ" },
  ]
};
