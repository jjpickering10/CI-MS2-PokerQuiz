const openModals = document.querySelectorAll("[data-modal-target");
const closeModals = document.querySelectorAll("[data-close]");
const overlay = document.getElementById("modal-overlay");
const pageContainer = document.getElementById("page-container");

// ----------------- Modals

openModals.forEach((e) => {
  e.addEventListener("click", () => {
    const modal = document.querySelector(e.dataset.modalTarget);
    console.log(modal);
    openModal(modal);
  });
});

closeModals.forEach((e) => {
  e.addEventListener("click", () => {
    const modal = e.closest(".modal");
    console.log(modal);
    closeModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const close = document.querySelectorAll(".modal.active");
  close.forEach((e) => {
    closeModal(e);
  });
});

function openModal(modal) {
  modal.classList.add("active");
  overlay.classList.add("active");
  pageContainer.classList.add("not-active");
}

function closeModal(modal) {
  modal.classList.remove("active");
  overlay.classList.remove("active");
  pageContainer.classList.remove("not-active");
}
