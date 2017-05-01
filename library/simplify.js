class simplify {
  constructor() {

  }

  initScene() {
    let container;
    let SceneWidth;
    let SceneHeight;

    function CalculateSceneSize() {
      container = document.getElementById("container");
      SceneWidth = container.getBoundingClientRect().width;
      SceneHeight = container.getBoundingClientRect().height;
    }
    CalculateSceneSize();
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(SceneWidth.SceneHeight);
    container.appendChild(this.renderer.domElement);
  }
}
