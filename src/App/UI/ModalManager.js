export default class ModalManager {
    constructor() {
        this.modal = document.getElementById("myModal");
        this.modalWrapper = document.querySelector(".modal-wrapper");
        this.close = document.querySelector(".close");
        this.title = document.getElementById("modalTitle");
        this.description = document.getElementById("modalDescription");
        this.isOpen = false;

        // Bind event handlers
        this.close.onclick = () => this.closeModal();
        this.modal.onclick = (event) => {
            if (event.target === this.modal) {
                this.closeModal();
            }
        };

        // Handle escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape' && this.isOpen) {
                this.closeModal();
            }
        });

        this.cooldown = false;
    }

    openModal(title, description) {
        if (this.cooldown) return;
        
        // Update content
        this.title.innerHTML = title;
        this.description.innerHTML = description;

        // Show modal with animation
        this.modal.style.display = "block";
        this.modal.offsetHeight; // Force reflow
        this.modal.classList.remove('fadeOut');
        this.modal.classList.add('fadeIn');
        
        this.isOpen = true;

        // Add cooldown to prevent spam
        this.cooldown = true;
        setTimeout(() => {
            this.cooldown = false;
        }, 1000);
    }

    closeModal() {
        if (!this.isOpen) return;

        this.modal.classList.remove('fadeIn');
        this.modal.classList.add('fadeOut');

        setTimeout(() => {
            this.modal.style.display = "none";
            this.modal.classList.remove('fadeOut');
        }, 600);

        this.isOpen = false;
    }
}