class simplify {
  constructor() {

  }

  CreateScene() {
    var container;
    var SceneWidth;
    var SceneHeight;

    function CalculateSceneSize() {
      container = document.getElementById("container");
      SceneWidth = container.getBoundingClientRect().width;
      SceneHeight = container.getBoundingClientRect().height;
    }
    CalculateSceneSize();
    this.scene = new THREE.Scene();
    this.renderer = new THREE.WebGLRenderer();
    this.renderer.setSize(SceneWidth, SceneHeight);
    container.appendChild(this.renderer.domElement);
  }

  ThreeCamera(fov, near, far) {
    var CameraAspect;
    var camera;

    function CalculateCameraAspect() {
      CameraAspect = (SceneWidth / SceneHeight);
      FixedCameraAspect = CameraAspect.toFixed(2);
    }
    CalculateCameraAspect();
    camera = new THREE.PerspectiveCamera(fov, near, far);
  }

  CameraPosition(x, y, z) {
    camera.position.x = x;
    camera.position.y = y;
    camera.position.z = z;
  }
}
