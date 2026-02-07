// data.js
// REQ = requisito obligatorio
// CO  = correquisito opcional (no bloquea)

window.COURSES = [
  // I
  { id:"EG-I",    name:"Curso Integrado de Humanidades I", cycle:"I",  credits:6, prereq:[], co:[] },
  { id:"QU-0100", name:"Química General I",                cycle:"I",  credits:3, prereq:[], co:[] },
  { id:"QU-0101", name:"Lab. Química General I",           cycle:"I",  credits:1, prereq:[], co:[] },
  { id:"MA-1101", name:"Cálculo I",                        cycle:"I",  credits:3, prereq:[], co:[] },
  { id:"MA-1004", name:"Álgebra Lineal",                   cycle:"I",  credits:3, prereq:[], co:[] },
  { id:"EF",      name:"Actividad Deportiva",              cycle:"I",  credits:0, prereq:[], co:[] },
  { id:"EG-ARTE", name:"Curso de Arte",                    cycle:"I",  credits:2, prereq:[], co:[] },

  // II
  { id:"EG-II",   name:"Curso Integrado de Humanidades II",cycle:"II", credits:6, prereq:["EG-I"], co:[] },
  { id:"CI-0202", name:"Principios de Informática",        cycle:"II", credits:4, prereq:["MA-1101"], co:[] },
  { id:"MA-1002", name:"Cálculo II",                       cycle:"II", credits:4, prereq:["MA-1101"], co:[] },
  { id:"FS-0210", name:"Física General I",                 cycle:"II", credits:3, prereq:["MA-1101"], co:["FS-0211"] },
  { id:"FS-0211", name:"Lab. Física General I",            cycle:"II", credits:1, prereq:[], co:["QU-0101"] },

  // III
  { id:"IM-0101", name:"Gráfica",                          cycle:"III",credits:3, prereq:[], co:["MA-1002"] },
  { id:"IE-0209", name:"Circuitos Lineales I",             cycle:"III",credits:3, prereq:["MA-1002","MA-1004","FS-0210","FS-0211"], co:[] },
  { id:"MA-1003", name:"Cálculo III",                      cycle:"III",credits:4, prereq:["MA-1002"], co:[] },
  { id:"MA-1005", name:"Ecuaciones Diferenciales",         cycle:"III",credits:4, prereq:["MA-1002","MA-1004"], co:[] },
  { id:"FS-0310", name:"Física General II",                cycle:"III",credits:3, prereq:["MA-1002","FS-0210","FS-0211"], co:["FS-0311"] },
  { id:"FS-0311", name:"Lab. Física General II",           cycle:"III",credits:1, prereq:["MA-1002","FS-0210","FS-0211"], co:[] },

  // IV
  { id:"IM-0207", name:"Mecánica I",                       cycle:"IV", credits:3, prereq:[], co:[] },
  { id:"IE-0309", name:"Circuitos Lineales II",            cycle:"IV", credits:3, prereq:["IE-0209","MA-1005","FS-0310","FS-0311"], co:["FS-0410","FS-0411"] },
  { id:"FS-0410", name:"Física General III",               cycle:"IV", credits:3, prereq:["MA-1003","FS-0310","FS-0311"], co:["FS-0411"] },
  { id:"FS-0411", name:"Lab. Física General III",          cycle:"IV", credits:1, prereq:["MA-1003","FS-0310","FS-0311"], co:[] },
  { id:"IE-0313", name:"Electrónica I",                    cycle:"IV", credits:3, prereq:["IE-0209","EG-II"], co:[] },
  { id:"IE-0247", name:"Señales y Sistemas I",             cycle:"IV", credits:3, prereq:["MA-1005","IE-0209","CI-0202"], co:[] },
  { id:"SR-I",    name:"Seminario de Realidad Nacional I", cycle:"IV", credits:2, prereq:[], co:[] },

  // V
  { id:"IM-0307", name:"Mecánica II",                      cycle:"V",  credits:3, prereq:["IM-0207"], co:[] },
  { id:"IE-0323", name:"Sistemas Digitales I",             cycle:"V",  credits:4, prereq:["IE-0313"], co:[] },
  { id:"IE-0347", name:"Señales y Sistemas II",            cycle:"V",  credits:3, prereq:["IE-0247"], co:[] },
  { id:"IE-0307", name:"Electromagnetismo I",              cycle:"V",  credits:3, prereq:["FS-0410","FS-0411","IE-0247","IE-0313","MA-1003"], co:[] },
  { id:"IE-0413", name:"Electrónica II",                   cycle:"V",  credits:3, prereq:["IE-0247","IE-0313"], co:[] },
  { id:"IE-0308", name:"Laboratorio de Electrónica I",     cycle:"V",  credits:3, prereq:["IE-0309","IE-0313"], co:[] },

  // VI
  { id:"RP",      name:"Repertorio",                       cycle:"VI", credits:3, prereq:[], co:[] },
  { id:"IE-0281", name:"Termofluidos",                     cycle:"VI", credits:3, prereq:[], co:[] },
  { id:"IE-0405", name:"Modelos Probabilísticos",          cycle:"VI", credits:3, prereq:["IE-0347"], co:[] },
  { id:"IE-0315", name:"Máquinas Eléctricas I",            cycle:"VI", credits:3, prereq:["IE-0307","IE-0309"], co:["IE-0316"] },
  { id:"IE-0316", name:"Lab. Máquinas Eléctricas I",       cycle:"VI", credits:1, prereq:["IE-0308","IE-0413"], co:[] },
  { id:"IE-0408", name:"Lab. Electrónica II",              cycle:"VI", credits:3, prereq:["IE-0308","IE-0413"], co:[] },
  { id:"IE-0501", name:"Responsabilidad Profesional",      cycle:"VI", credits:1, prereq:["IE-0308","IE-0413"], co:[] },

  // VII
  { id:"IE-0365", name:"Transmisión de Potencia",          cycle:"VII",credits:3, prereq:["IE-0315","IE-0316","IE-0347"], co:[] },
  { id:"IE-0431", name:"Sistemas de Control",              cycle:"VII",credits:3, prereq:["IE-0315","IE-0316","IE-0347"], co:[] },
  { id:"IE-0615", name:"Máquinas Eléctricas II",           cycle:"VII",credits:3, prereq:["IE-0315","IE-0316","IE-0347"], co:["IE-0616"] },
  { id:"IE-0616", name:"Lab. Máquinas Eléctricas II",      cycle:"VII",credits:1, prereq:[], co:[] },
  { id:"IE-0381", name:"Ciencia de los Materiales",        cycle:"VII",credits:3, prereq:[], co:[] },
  { id:"SR-II",   name:"Seminario Realidad Nacional II",   cycle:"VII",credits:2, prereq:["SR-I"], co:[] },
  { id:"OPT-I",   name:"Optativa I",                       cycle:"VII",credits:3, prereq:[], co:[] },

  // VIII
  { id:"IE-0469", name:"Sistemas de Potencia I",           cycle:"VIII",credits:3, prereq:["IE-0365","IE-0615","IE-0431"], co:[] },
  { id:"IE-0499", name:"Proyecto Eléctrico",               cycle:"VIII",credits:3, prereq:["IE-0365"], co:[] },
  { id:"IE-0471", name:"Diseño Eléctrico Industrial I",    cycle:"VIII",credits:3, prereq:["IE-0315","IE-0316"], co:[] },
  { id:"IE-0479", name:"Ingeniería Económica",             cycle:"VIII",credits:3, prereq:["IE-0501"], co:[] },
  { id:"OPT-II",  name:"Optativa II",                      cycle:"VIII",credits:3, prereq:[], co:[] },
];
