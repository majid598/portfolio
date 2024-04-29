const Header = () => {
  const smoothScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <header className="w-full">
      <nav id="nav">
        <ul class="container">
          <li>
            <a onClick={() => smoothScrollTo("top")} className="cursor-pointer">Top</a>
          </li>
          <li>
            <a onClick={() => smoothScrollTo("work")} className="cursor-pointer">Work</a>
          </li>
          <li>
            <a onClick={() => smoothScrollTo("portfolio")} className="cursor-pointer">Portfolio</a>
          </li>
          <li>
            <a onClick={() => smoothScrollTo("contact")} className="cursor-pointer">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
