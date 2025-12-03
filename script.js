/* ----- MODAL ----- */
const modal = document.getElementById("modal");
const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");

if (openBtn) {
    openBtn.onclick = () => modal.style.display = "block";
    closeBtn.onclick = () => modal.style.display = "none";
    window.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
}

/* ----- CAROUSEL ----- */
let index = 0;
const images = document.querySelectorAll(".carousel-images img");
const prev = document.querySelector(".prev");
const next = document.querySelector(".next");

if (images.length > 0) {
    images[index].style.display = "block";

    function showImage(n) {
        images[index].style.display = "none";
        index = (n + images.length) % images.length;
        images[index].style.display = "block";
    }

    prev.onclick = () => showImage(index - 1);
    next.onclick = () => showImage(index + 1);
(function(){
    const d = new Date();
    const day = String(d.getDate()).padStart(2,'0');
    const month = String(d.getMonth()+1).padStart(2,'0');
    const year = d.getFullYear();
    document.getElementById('footer-date').textContent = `${day}/${month}/${year}`;
  })();}
