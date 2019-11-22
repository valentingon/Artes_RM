var escena = new THREE.Scene(),
    camara = new THREE.PerspectiveCamera( 100, window.innerWidth/window.innerHeight, 0.1, 800),
    color = new THREE.Color("#FF5733");

var render = new THREE.WebGLRenderer();
render.setSize(window.innerWidth, window.innerHeight);
render.setClearColor(color);
container.appendChild(render.domElement);

var geometry2 = new THREE.BoxGeometry(70,5,5),
    material2 = new THREE.MeshBasicMaterial({color:"blue"}),
    cube2 = new THREE.Mesh(geometry2, material2);

var geometry = new THREE.BoxGeometry(5,80,5),
    material = new THREE.MeshBasicMaterial({color:"blue"}),
    cube = new THREE.Mesh(geometry, material);	

var esfera_dibujo = new THREE.SphereGeometry(30,20,16),
	esfera_material = new THREE.MeshBasicMaterial({color:"red"})
	esfera = new THREE.Mesh(esfera_dibujo, esfera_material);
	
var esfera_dibujo2 = new THREE.SphereGeometry(20,20,16),
	esfera_material2 = new THREE.MeshBasicMaterial({color:"yellow"})
	esfera2 = new THREE.Mesh(esfera_dibujo2, esfera_material2);

var esfera_dibujo3 = new THREE.SphereGeometry(20,20,16),
	esfera_material3 = new THREE.MeshBasicMaterial({color:"yellow"})
	esfera3 = new THREE.Mesh(esfera_dibujo3, esfera_material3);		
	
	esfera.position.y = 40;
	esfera2.position.y = -50;
	cube.position.y = -20;
	cube2.position.y = 40;
	cube2.position.x = 40;
	esfera3.position.y = 40;
	esfera3.position.x = 90;
	
	escena.add(cube,esfera,esfera2,cube2,esfera3);
	
	camara.position.set(10,10,200);

	
var controls = new THREE.OrbitControls(camara, render.domElement);
	
	
function animate(){
	controls.update();
	render.render(escena, camara);
	requestAnimationFrame(animate);
}
animate();