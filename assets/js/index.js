const propiedadesJSON = [{
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el oceano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130
  },
  {
    name: "Casa del centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 80
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor lujo y confort",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños ",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500
  }
];

let html = ''
let count = 0
for (let item of propiedadesJSON) {
  html += templateProperty(item)
  count += 1
}
document.querySelector("#propiedades").innerHTML = html
document.querySelector("#total").innerHTML = count
function templateProperty(item) {
  return `
          <div class="col-auto mt-3">
            <div class="card mb-2 mt-5  color">
                <div><img class="mt-4" src=${item.src}></div>
                <div><h2> ${item.name}<h2></div>
                <div class="d-flex justify-content-around">
                <h6> Cuartos: ${item.rooms}</h6>
                <h6> m2: ${item.m}</h6>
            </div>
          <div class="card-body">
            <div class="px-2"><p>${item.description}</p></div>
            <button class="btn btn-warning ">Ver más</button> 
          </div>
          </div>
          </div>
          </div>`
}

document.querySelector('#btn-search').addEventListener('click', function(){
  let html = ''
  let count= 0
  document.querySelector("#propiedades").innerHTML = html
  document.querySelector("#total").innerHTML = count
  let roomsInput = document.querySelector("#roomsinput").value;
  let desdeArea = document.querySelector("#areadesdem2").value;
  let hastaArea = document.querySelector("#areahastam2").value;
  
  for (let item of propiedadesJSON) {
     if (roomsInput == '' || item.m == '' || item.m == ''){
      document.querySelector('#notice').innerHTML = 'Por favor llene todos los campos'
     }
     else if (roomsInput == item.rooms && (item.m >= desdeArea && item.m <= hastaArea)){
      document.querySelector('#notice').innerHTML = ''
      html += templateProperty(item)
      count += 1
     }
    }
     console.log(count)
     document.querySelector("#propiedades").innerHTML = html
     document.querySelector("#total").innerHTML = count
})












