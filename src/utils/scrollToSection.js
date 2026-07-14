export function scrollToSection(target) {
  const sectionId = target?.replace("#", "");

  if (!sectionId || sectionId === "home") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  } else {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }

  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
}

export function handleSectionLinkClick(event, target, callback) {
  event.preventDefault();
  scrollToSection(target);
  callback?.();
}
