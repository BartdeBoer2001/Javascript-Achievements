// voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

// create a model
const minecraftModel = new Model('assets/models/minecraft/scene.gltf');
minecraftModel.setPosition(-2.28592, 1.84418, -2.87118);
minecraftModel.setScale(0.06, 0.06, 0.06);
minecraftModel.setRotation(0, -36.95, 0);

// create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green');
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

// create some text
const testText = new Text('Javascript les 4');
testText.setPosition(1.5, 0, -5);
testText.setFontsize(10);
testText.setColor("red");

// create an image
const image = new XRImage('assets/images/sampleImage.jpg');
image.setPosition(-1.48819, 2.45839, -5);

const image2 = new XRImage('assets/images/Lisse-049.jpg');
image2.setPosition(-1.48819, 0.88128, -2.76627);

// create a 360 image
const image360 = new Sky('assets/images/FolkertdeJong.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(-3.39382, 4.72931, 1.37905);
spotLight.setTarget(minecraftModel);

// listen for an event
minecraftModel.addEventListener('click', () => console.log('je klikt op mij'));

const cuberoom = new Model("assets/models/cube-room/cube-room.gltf");
cuberoom.setPosition(-2.50535, 0.91001, -3.21484);
cuberoom.setScale(0.33668, 0.44443, 0.16213);
cuberoom.setRotation(0, -36.95, 0);