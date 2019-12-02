
function createProjectorBody0(B208D, a, b, c, p_x, p_y, p_z, scale) {
	var projector = new THREE.Group();
	function createBoxWithRoundedEdges0( width, height, depth, radius0, smoothness ) {
	  let shape = new THREE.Shape();
	  let eps = 0.00001;
	  let radius = radius0 - eps;
	  shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
	  shape.absarc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
	  shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
	  shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
	  let geometry = new THREE.ExtrudeBufferGeometry( shape, {
		amount: depth - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	  });

	  geometry.center();
	  
	  return geometry;
	}

	 let cubeMat = new THREE.MeshPhongMaterial( {
		color: 0xEAEAEA,
		//envMap: cubeTexture,
		metalness: 0,
		roughness: 0,
	 } );

	 let cube = new THREE.Mesh( createBoxWithRoundedEdges0( 2.5, 1, 2, 0.5 / 9, 16 ), cubeMat );
	 	 	        
    //add shadow
	cube.castShadow = true;    
	cube.receiveShadow = true;

	 cube.scale.setScalar( 1.25 );
	 x_ = cube.position.x = a;
	 y_ = cube.position.y = b;
	 z_ = cube.position.z = c;
	 projector.add( cube );
	
	 createProjectorBody1(projector, x_, y_, z_);
	 createProjectorCamera(projector, x_, y_, z_);
	 createProjectorLeftHanger0(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHangerJoint0(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger1(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHangerJoint1(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger2(projector, x_- 0.5, y_, z_);
	 createProjectorLeftHangerJoint2(projector, x_ - 0.5, y_, z_);
	 createProjectorLeftHanger3(projector, x_ - 0.5, y_, z_);

	 createProjectorLeftHanger0(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint0(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger1(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint1(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger2(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHangerJoint2(projector, x_ + 0.5, y_, z_);
	 createProjectorLeftHanger3(projector, x_ + 0.5, y_, z_);

	 createCable(projector, x_, y_, z_, 0.02, 0x2457B);
	 createCable(projector, x_, y_, z_ - 0.2, 0.03, 0xED0000);

	 projector.rotateY(Math.PI / 180 * 90);
	 projector.position.set(p_x, p_y, p_z);
	 projector.scale.set(scale, scale, scale);
	 
	 B208D.add(projector);

}

function createProjectorBody1(projector, _x_, _y_, _z_) {
	function createBoxWithRoundedEdges1( width, height, depth, radius0, smoothness ) {
	  let shape = new THREE.Shape();
	  let eps = 0.00001;
	  let radius = radius0 - eps;
	  shape.absarc( eps, eps, eps, -Math.PI / 2, -Math.PI, true );
	  shape.absarc( eps, height -  radius * 2, eps, Math.PI, Math.PI / 2, true );
	  shape.absarc( width - radius * 2, height -  radius * 2, eps, Math.PI / 2, 0, true );
	  shape.absarc( width - radius * 2, eps, eps, 0, -Math.PI / 2, true );
	  let geometry = new THREE.ExtrudeBufferGeometry( shape, {
		amount: depth - radius0 * 2,
		bevelEnabled: true,
		bevelSegments: smoothness * 2,
		steps: 1,
		bevelSize: radius,
		bevelThickness: radius0,
		curveSegments: smoothness
	  });
	  geometry.center();
	  return geometry;
	}
	 let cubeMat = new THREE.MeshStandardMaterial( {
	color: 0xEAEAEA,
	//envMap: cubeTexture,
	metalness: 0,
	roughness: 0,
	 } );
	 let cube = new THREE.Mesh( createBoxWithRoundedEdges1( 2.2, 0.5, 1.7, 0.3 / 9, 16 ), cubeMat );
	 	        
    //add shadow
	cube.castShadow = true;    
	cube.receiveShadow = true;

	 cube.scale.setScalar( 1.25 );
	 cube.position.x = _x_;
	 cube.position.y = _y_ + 0.4;
	 cube.position.z = _z_;
	 projector.add( cube );
}

function createProjectorCamera(projector, _x_, _y_, _z_) {
	
	var geometry = new THREE.CylinderGeometry( 0.5, 0.5, 2, 32, 5 );
	var cylinderMaterial = new THREE.MeshPhongMaterial( {color: 0XD5D5D5} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	        
    //add shadow
	cylinder.castShadow = true;    
	cylinder.receiveShadow = true;

	cylinder.position.x = _x_ + 0.6; //0, 10, 10
	cylinder.position.y = _y_;
	cylinder.position.z = _z_ - 0.35;
	cylinder.rotateX(Math.PI/360 * 180);
	projector.add( cylinder );
}
function createProjectorLeftHanger0(projector, _x_, _y_, _z_) {
	/**var light = new THREE.PointLight( 0xFFFFFF, 1, 50 );
	light.position.set( -0.5, 20, 10.5 );
	scene.add( light );**/
	var cubeGeometry0 = new THREE.BoxGeometry(0.07, 0.5, 0.2);
    var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
	var hanger0 = new THREE.Mesh(cubeGeometry0, cubeMeterial, 2, 5);
	        
    //add shadow
	hanger0.castShadow = true;    
	//hanger0.receiveShadow = true;

    hanger0.position.x = _x_;
    hanger0.position.y = _y_ + 0.7;
    hanger0.position.z = _z_ - 0.34;
	projector.add(hanger0);
}
function createProjectorLeftHangerJoint0(projector, _x_, _y_, _z_) {
	var geometry0 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0XD5D5D5} );
	var cylinder0 = new THREE.Mesh( geometry0, cylinderMaterial, 2, 5 );
	cylinder0.position.x = _x_;
	cylinder0.position.y = _y_ + 0.8;
	cylinder0.position.z = _z_ - 0.34;
	cylinder0.rotateZ(Math.PI/360 * 180);
	projector.add( cylinder0 );
}
function createProjectorLeftHanger1(projector, _x_, _y_, _z_) {
	var cubeGeometry1 = new THREE.BoxGeometry(0.07, 1, 0.2);
    var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger1 = new THREE.Mesh(cubeGeometry1, cubeMeterial, 2, 5);
    hanger1.position.x = _x_;
    hanger1.position.y = _y_ + 1;
    hanger1.position.z = _z_;
	hanger1.rotateX(Math.PI/360 * (120));
	projector.add(hanger1);
}
function createProjectorLeftHangerJoint1(projector, _x_, _y_, _z_) {
	var geometry1 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0XD5D5D5} );
	var cylinder1 = new THREE.Mesh( geometry1, cylinderMaterial, 2, 5 );
	cylinder1.position.x = _x_;
	cylinder1.position.y = _y_ + 1.2;
	cylinder1.position.z = _z_ + 0.34;
	cylinder1.rotateZ(Math.PI/360 * 180);
	projector.add( cylinder1 );
}
function createProjectorLeftHanger2(projector, _x_, _y_, _z_) {
	var cubeGeometry2 = new THREE.BoxGeometry(0.07, 1, 0.2);
	var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger2 = new THREE.Mesh(cubeGeometry2, cubeMeterial, 2, 5);
    hanger2.castShadow = true;
    hanger2.position.x = _x_;
    hanger2.position.y = _y_ + 1.4; //-0.533
    hanger2.position.z = _z_;
	hanger2.rotateX(Math.PI/360 * (-120));
	projector.add(hanger2);
}
function createProjectorLeftHangerJoint2(projector, _x_, _y_, _z_) {
	var geometry2 = new THREE.CylinderGeometry( 0.08, 0.08, 0.1, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0XD5D5D5} );
	var cylinder2 = new THREE.Mesh( geometry2, cylinderMaterial, 2, 5 );
	cylinder2.position.x = _x_; //-0.3
	cylinder2.position.y = _y_ + 1.6; //-0.237
	cylinder2.position.z = _z_ - 0.34;
	cylinder2.rotateZ(Math.PI/360 * 180);
	projector.add( cylinder2 );
}
function createProjectorLeftHanger3(projector, _x_, _y_, _z_) {
	var cubeGeometry3 = new THREE.BoxGeometry(0.07, 1, 0.2);
	var cubeMeterial = new THREE.MeshPhongMaterial({ color: 0X8C8C8C });
    var hanger3 = new THREE.Mesh(cubeGeometry3, cubeMeterial, 2, 5);
    hanger3.castShadow = true;
    hanger3.position.x = _x_;
    hanger3.position.y = _y_ + 1.8;
    hanger3.position.z = _z_;
	hanger3.rotateX(Math.PI/360 * (120));
	projector.add(hanger3);
}

function createCable(projector, _x_, _y_, _z_, r, c) {
    var legPoints = [
        new THREE.Vector3(_x_ + 1, _y_ + 0.2, _z_ + 0.8),
        new THREE.Vector3(_x_ + 1.8, _y_ + 0.7, _z_ + 1),
		new THREE.Vector3(_x_, _y_ + 2, _z_ + 0.5),
        new THREE.Vector3(_x_ , _y_ + 2.5, _z_ + 0.5)
    ];

    var legSpline = new THREE.CatmullRomCurve3(legPoints);

    var extrudeSettings = {
        steps: 200,
        bevelEnabled: false,
        extrudePath: legSpline
    };
    var pts = [], numPts = 100;
    for (var i = 0; i < numPts * 2; i++) {
        var l = 1;
        var a = i / numPts * Math.PI;
        pts.push(new THREE.Vector2(Math.cos(a) * r, Math.sin(a) * r));
    }
    var shape = new THREE.Shape(pts);
    var geometry = new THREE.ExtrudeBufferGeometry(shape, extrudeSettings);
    var material2 = new THREE.MeshLambertMaterial({ color: c, wireframe: false });
	var mesh = new THREE.Mesh(geometry, material2);
	        
    //add shadow
    mesh.castShadow = true;
    mesh.receiveShadow = true;

    projector.add(mesh);
}

//-----------------------------------------------------------------------------------

function createFluorescentBase0(B208D, a, b, c, intensity, p_x, p_y, p_z, scale) {
	var fluorescent = new THREE.Group();
    var spotLight = new THREE.SpotLight(0xFFFFFF, intensity, 0, (Math.PI / 180 * 120));
    spotLight.position.set(a + p_x, b + p_y, c + p_z);
    spotLight.castShadow = true;
	spotLight.target.position.set(a + p_x, 0, c + p_z);
	spotLight.shadow.mapSize.width = 5120;
	spotLight.shadow.mapSize.height = 5120;
    B208D.add(spotLight.target);
	B208D.add(spotLight);
	
	var geometry = new THREE.BoxGeometry( 0.1, 7, 2 );
	var material = new THREE.MeshPhongMaterial( { color: 0xBDBDBD } );
	var cube = new THREE.Mesh( geometry, material );
	x_ = cube.position.x = a;
	y_ = cube.position.y = b;
	z_ = cube.position.z = c;

	cube.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cube);

	createFluorescentBase1(fluorescent, x_, y_, z_);
	createFluorescentBase2(fluorescent, x_, y_, z_);
	createFluorescentBase3(fluorescent, x_, y_, z_);
	//createFluorescentBase4(scene, x_, y_, z_);
	createFluorescentBase5(fluorescent, x_, y_, z_);
	createFluorescentBase6(fluorescent, x_, y_, z_);
	createFluorescentLamp0(fluorescent, x_, y_, z_);
	createFluorescentLamp1(fluorescent, x_, y_, z_);
	createFluorescentLampBase0(fluorescent, x_, y_, z_);
	createFluorescentLampBase1(fluorescent, x_, y_, z_);
	createFluorescentLampBase2(fluorescent, x_, y_, z_);
	createFluorescentLampBase3(fluorescent, x_, y_, z_);
	
	fluorescent.rotateY(Math.PI / 180 * 90);
	fluorescent.scale.set(scale, scale, scale);
	fluorescent.position.set(p_x, p_y, p_z);
	B208D.add(fluorescent);
}

function createFluorescentBase1(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.25, 7, 0.2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_;
	cube.position.y = _y_ - 0.18;
	cube.position.z = _z_ - 0.9;
	cube.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cube);
	//scene.add( cube );
}
function createFluorescentBase2(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.25, 7, 0.2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_;
	cube.position.y = _y_ - 0.18;
	cube.position.z = _z_ + 0.9;
	cube.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cube);
	//scene.add( cube );
}
function createFluorescentBase3(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.28, 0.28, 7, 4, 1, false, 3.15, 3.15 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D,  metalness: 0.1, roughness: 0} );
	var cylinder = new THREE.Mesh( geometry, material );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ - 0.02;
	cylinder.position.z = _z_;
	cylinder.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cylinder);
	//scene.add( cylinder );
}

function createFluorescentBase5(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.2, 0.27, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
	cube.position.x = _x_ + 3.4;
	cube.position.y = _y_ - 0.17;
	cube.position.z = _z_;
	fluorescent.add(cube);
	//scene.add( cube );
}
function createFluorescentBase6(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.BoxGeometry( 0.2, 0.27, 2 );
	var material = new THREE.MeshBasicMaterial( { color: 0x5D5D5D } );
	var cube = new THREE.Mesh( geometry, material );
		 	        
    //add shadow
	cube.castShadow = true;    
	cube.receiveShadow = true;

	cube.position.x = _x_ - 3.4;
	cube.position.y = _y_ - 0.17;
	cube.position.z = _z_;
	fluorescent.add(cube);
	//scene.add( cube );
}
function createFluorescentLamp0(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 6.7, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ + 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cylinder);
	//scene.add( cylinder );
}
function createFluorescentLamp1(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.1, 0.1, 6.7, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0xFFFFFF} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cylinder);
	//scene.add( cylinder );
}
function createFluorescentLampBase0(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_ + 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ + 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cylinder);
	//scene.add( cylinder );
}
function createFluorescentLampBase1(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_ - 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ + 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cylinder);
	//scene.add( cylinder );
}
function createFluorescentLampBase2(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_ + 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cylinder);
	//scene.add( cylinder );
}
function createFluorescentLampBase3(fluorescent, _x_, _y_, _z_) {
	var geometry = new THREE.CylinderGeometry( 0.13, 0.13, 0.15, 32, 5 );
	var cylinderMaterial = new THREE.MeshBasicMaterial( {color: 0x000000} );
	var cylinder = new THREE.Mesh( geometry, cylinderMaterial, 2, 5 );
	cylinder.position.x = _x_ - 3.23;
	cylinder.position.y = _y_ - 0.18;
	cylinder.position.z = _z_ - 0.55;
	cylinder.rotateZ(Math.PI/360 * 180);
	fluorescent.add(cylinder);
	//scene.add( cylinder );
}

