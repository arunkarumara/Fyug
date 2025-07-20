function viewPDF(pdfPath) {
  const iframe = document.getElementById("pdf-frame");
  // Disable downloading by removing toolbar and adding view-only
  iframe.src = `${pdfPath}#toolbar=0&navpanes=0&scrollbar=0`;
}

function toggleMenu() {
  document.getElementById("nav-links").classList.toggle("show");
}
