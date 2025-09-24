// MenuToggle.ts
export function setupMenuToggle() {
  const btn = document.getElementById("menu-toggle-btn");
  const menu = document.getElementById("mobile-menu");

  if (!btn || !menu) return;

  btn.addEventListener("click", () => {
    const willOpen = menu.classList.contains("hidden");

    // Soporte para viewTransition
    if ("startViewTransition" in document) {
      (document as any).startViewTransition(() => {
        if (willOpen) {
          menu.classList.remove("hidden", "opacity-0", "-translate-y-2");
          menu.classList.add("opacity-100", "translate-y-0");
          btn.setAttribute("aria-expanded", "true");
        } else {
          menu.classList.add("opacity-0", "-translate-y-2");
          menu.classList.remove("opacity-100", "translate-y-0");
          btn.setAttribute("aria-expanded", "false");
          setTimeout(() => menu.classList.add("hidden"), 220);
        }
      });
      return;
    }

    // Fallback sin viewTransition
    if (willOpen) {
      menu.classList.remove("hidden", "opacity-0", "-translate-y-2");
      menu.classList.add("opacity-100", "translate-y-0");
      btn.setAttribute("aria-expanded", "true");
    } else {
      menu.classList.add("opacity-0", "-translate-y-2");
      menu.classList.remove("opacity-100", "translate-y-0");
      btn.setAttribute("aria-expanded", "false");
      setTimeout(() => menu.classList.add("hidden"), 300);
    }
  });
}
