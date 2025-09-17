

export function initCarousel(containerId: string, intervalMs: number = 4000) {
  const slides: NodeListOf<HTMLElement> = document.querySelectorAll(`#${containerId} .slide`);
  const dots: NodeListOf<HTMLButtonElement> = document.querySelectorAll(`#${containerId} .dot`);

  let current = 0;
  let interval: number;

  function showSlide(index: number) {
    slides.forEach(slide => slide.classList.replace("opacity-100", "opacity-0"));
    dots.forEach(dot => dot.classList.remove("active"));
    slides[index].classList.replace("opacity-0", "opacity-100");
    dots[index].classList.add("active");
    current = index;
  }

  function startAutoPlay() {
    interval = window.setInterval(() => {
      let next = (current + 1) % slides.length;
      showSlide(next);
    }, intervalMs);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      clearInterval(interval);
      showSlide(index);
      startAutoPlay();
    });
  });

  showSlide(0);
  startAutoPlay();
}

