const Nav = ({ containerStyles, linkStyles, onLinkClick }) => {
  const links = [
    { path: '/', name: 'Home' },
    { path: '/services', name: 'Our Services' },
    { path: '/contact', name: 'Contact' },
  ];

  return (
    <nav className={containerStyles} role="navigation" aria-label="Main Navigation">
      {links.map((link, index) => (
        <a
          key={index}
          href={link.path}
          className={linkStyles}
          onClick={onLinkClick} // Chama a função para fechar o menu
        >
          {link.name}
        </a>
      ))}
    </nav>
  );
};

export default Nav;