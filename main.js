const THREE = window.MINDAR.IMAGE.THREE;

document.addEventListener('DOMContentLoaded', () => {
const start = async () => {
		const video = document.createElement("video");
		video.setAttribute("src", "./myVideo");
		video,setAttribute("loop", "");

		video.oncanpaly = () => {
				video.play();
		}
		const mindarThree = new window.MINDAR.IMAGE.MindARThree({
		container: document.body, 
		imageTargetSrc: './sju.mind'
});

const {renderer, scene, camera} = mindarThree;
comst geometry = new THREE.PlanGeometry(1, 1,);
const videoTexture = new THREE.VideoTexture(video);
const material = new Three.MeshBasicMaterial({map: videoTexture, side: THREE.FrontSide, taneMapped: false});
const plane = new THREE.Mesh(geometry, material);

const anchor = mindThree.addAnchor(0);
anchor.group.add(plane); 

await mindarThree.start();

renderer.setAnimationLoop( () => {
		renderer.render(scene, camera);
});

}

start();


});