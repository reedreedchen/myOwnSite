// Set up the scene, camera, and renderer as global variables.
var scene, camera, renderer;


$(window).ready(
    function ()
    {
     init(); animate();
    }
);

// Globals from the previous step go here...

// Sets up the scene.
function init() {

    // Create the scene and set the scene size.
    scene = new THREE.Scene();
    if ($(window).width() >= 1330) {
        var WIDTH = $(window).width() * 0.7 * 0.8,
            HEIGHT = WIDTH * 0.562;
    } else {
        var WIDTH = $(window).width() * 0.8,
            HEIGHT = WIDTH * 0.562;
    }

    // Create a renderer and add it to the DOM.
    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(WIDTH, HEIGHT);
    document.getElementById("3dViewerContainer").appendChild(renderer.domElement);

    // Create a camera, zoom it out from the model a bit, and add it to the scene.
    camera = new THREE.PerspectiveCamera(45, WIDTH / HEIGHT, 0.1, 20000);
    camera.position.set(0, 6, 0);
    scene.add(camera);

    // Create an event listener that resizes the renderer with the browser window.
    window.addEventListener('resize', function () {
        if ($(window).width() >= 1330) {
            var WIDTH = $(window).width() * 0.7 * 0.8,
                HEIGHT = WIDTH * 0.562;
        } else {
            var WIDTH = $(window).width() * 0.8,
                HEIGHT = WIDTH * 0.562;
        }
        renderer.setSize(WIDTH, HEIGHT);
        camera.aspect = WIDTH / HEIGHT;
        camera.updateProjectionMatrix();
    });

    // Set the background color of the scene.
    renderer.setClearColor(0x333F47, 1);

    // Create a light, set its position, and add it to the scene.
    var light = new THREE.PointLight(0xffffff);
    light.position.set(-100, 200, 100);
    scene.add(light);
    // Load in the mesh and add it to the scene.
    var loader = new THREE.JSONLoader();
    loader.load("_models/catFood.js", function (geometry) {
        var material = new THREE.MeshLambertMaterial({ color: 0x55B663 });
        mesh = new THREE.Mesh(geometry, material);
        scene.add(mesh);
    });

    // Add OrbitControls so that we can pan around with the mouse.
    controls = new THREE.OrbitControls(camera, renderer.domElement);
}

function animate() {

    // Read more about requestAnimationFrame at http://www.paulirish.com/2011/requestanimationframe-for-smart-animating/
    requestAnimationFrame(animate);

    // Render the scene.
    renderer.render(scene, camera);
    controls.update();

}