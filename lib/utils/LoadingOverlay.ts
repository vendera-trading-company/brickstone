class LoadingOverlay {
  static open() {
    const element = document.getElementById("loading-overlay");

    if (!element) {
      return;
    }

    element.style.display = "";
  }

  static close() {
    const element = document.getElementById("loading-overlay");

    if (!element) {
      return;
    }

    element.style.display = "none";
  }
}

export default LoadingOverlay;
