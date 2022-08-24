export const scrollToFunction = (ref) => {
  // Use window.scrollTo
  window.scrollTo({
    top: ref.current.offsetTop,
    behavior: "smooth",
  });
};
