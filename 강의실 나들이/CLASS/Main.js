//Referance 참조
function include(FileDir) {
   var includejs = document.createElement("script");
   includejs.type = "text/javascript";
   includejs.src = FileDir;
   document.head.appendChild(includejs);
}
include("JHJ.js");
include("JDJ.js");
include("JSW.js");
include("LSJ.js");
//위에부분은 참초하는거니까 건드리지마 ㅇㅋ?

window.onload = function init() {
   var scene = new THREE.Scene();
   var camera = new THREE.PerspectiveCamera(80, window.innerWidth / window.innerHeight, 0.1, 1000);
   var renderer = new THREE.WebGLRenderer( {antialias: true} );
   //For bouncing balls;
   var step = 0;
   renderer.setClearColor(0xEEEEEE);
   renderer.setSize(window.innerWidth, window.innerHeight);
   renderer.shadowMap.enabled = true;
   //Show Axis
   var axes = new THREE.AxisHelper(10);
   scene.add(axes);
   //Let's make a plane
   //정적인 object할때는 return 할 필요없어
   //makePlane(scene);
   
   Desk(scene);

   
   //Let's make a cube
   //JHJ.js 파일 확인할 것
   //요런식으로 쓰면 될듯(애니메이션 쓸거면 이렇게 함수에서 return 시켜서 데려와야댐)
  
   var spotLight = new THREE.SpotLight(0xFFFFFF);
   spotLight.position.set(-40, 60, 30);
   spotLight.castShadow = true;
   spotLight.shadow.mapSize.width = 5120;
   spotLight.shadow.mapSize.height = 5120;
   scene.add(spotLight);
   camera.position.x = 0;
   camera.position.y = 30;
   camera.position.z = 30;
   camera.lookAt(scene.position);
   document.getElementById("threejs_scene").appendChild(renderer.domElement);

   controls = new THREE.OrbitControls(camera, renderer.domElement);
   controls.rotateSpeed = 1.0; // 마우스로 카메라를 회전시킬 속도입니다. 기본값(Float)은 1입니다.
   controls.zoomSpeed = 1.2; // 마우스 휠로 카메라를 줌 시키는 속도 입니다. 기본값(Float)은 1입니다.
   controls.panSpeed = 0.8; // 패닝 속도 입니다. 기본값(Float)은 1입니다.
   controls.minDistance = 5; // 마우스 휠로 카메라 거리 조작시 최소 값. 기본값(Float)은 0 입니다.
   controls.maxDistance = 100; // 마우스 휠로 카메라 거리 조작시 최대 값. 기본값(Float)은 무제한 입니다

   var renderScene = new function renderScene() {
      requestAnimationFrame(renderScene);
      renderer.render(scene, camera);
      controls.update();
   }
   // var renderScene = new function renderScene() {
   //    requestAnimationFrame(renderScene);
   //    //cube animation
   //    cube.rotation.x += 0.01;
   //    cube.rotation.y += 0.01;
   //    cube.rotation.z += 0.01;
   //    //sphere animation  
   //    step += 0.1;
   //    sphere.position.y = 9 + (5 * Math.cos(step));
   //    sphere2.position.y = 9 + (5 * Math.cos(step + 3));
   //    renderer.render(scene, camera);
   // }
}


//    // buttons to change viewing parameters
//    //여긴 아직 건드리지마 자유시점할때 필요할 것같음
//    document.getElementById("Button1").onclick = function () {
//       radius *= 1.1;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button2").onclick = function () {
//       radius *= 0.9;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button3").onclick = function () {
//       theta += dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button4").onclick = function () {
//       theta -= dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button5").onclick = function () {
//       phi += dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    document.getElementById("Button6").onclick = function () {
//       phi -= dr;
//       console.log("-----------------------");
//       console.log(phi);
//       console.log(theta);
//       console.log(radius);
//       console.log("-----------------------");
//    };
//    render();
// }
