import React, { useState } from 'react';
import logoImage from '../assets/logo-sang-tran.png';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onAdminClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onAdminClick, onLogout }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    const homeSection = document.getElementById('home');
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header style={styles.header} className="headerContainer">
      <div style={styles.container}>
        <div style={styles.logoContainer} onClick={handleLogoClick} className="logoContainer">
          <img 
            src={logoImage} 
            alt="Sang Trần Construction Logo" 
            style={styles.logo} 
            className="logoIcon"
          />
          <div style={styles.logoTextContainer}>
            <h1 style={styles.logoText}>Sang Trần</h1>
            <p style={styles.logoSubtext}>Construction</p>
          </div>
        </div>
        
        <div style={styles.rightSection} className="rightSection">
          <nav style={styles.nav}>
            {/* Desktop Menu */}
            <div className="desktop-menu" style={styles.desktopMenu}>
              <a href="#home" style={styles.navLink}>Trang chủ</a>
              <a href="#services" style={styles.navLink}>Dịch vụ</a>
              <a href="#projects" style={styles.navLink}>Dự án</a>
              <a href="#team" style={styles.navLink}>Đội ngũ</a>
              <a href="#contact" style={styles.navLink}>Liên hệ</a>
            </div>
            
            {/* Mobile Menu Icon */}
            <button 
              style={styles.mobileMenuIcon}
              className="mobile-menu-icon"
              onClick={() => setShowMobileMenu(!showMobileMenu)}
            >
              ☰
            </button>
            
            {/* Mobile Menu Dropdown */}
            {showMobileMenu && (
              <div style={styles.mobileMenuDropdown} className="mobile-menu-dropdown">
                <a href="#home" style={styles.mobileMenuItem} onClick={() => setShowMobileMenu(false)}>Trang chủ</a>
                <a href="#services" style={styles.mobileMenuItem} onClick={() => setShowMobileMenu(false)}>Dịch vụ</a>
                <a href="#projects" style={styles.mobileMenuItem} onClick={() => setShowMobileMenu(false)}>Dự án</a>
                <a href="#team" style={styles.mobileMenuItem} onClick={() => setShowMobileMenu(false)}>Đội ngũ</a>
                <a href="#contact" style={styles.mobileMenuItem} onClick={() => setShowMobileMenu(false)}>Liên hệ</a>
              </div>
            )}
          </nav>

          {/* Hotline */}
          <a href="tel:0867471642" style={styles.hotlineContainer} className="hotlineContainer">
            <div style={styles.hotlineIcon}>📞</div>
            <div style={styles.hotlineInfo}>
              <span style={styles.hotlineNumber}>0867471642</span>
            </div>
          </a>

          {/* Auth buttons */}
          <div style={styles.authContainer} className="authContainer">
            {isLoggedIn ? (
              <>
                <button onClick={onAdminClick} style={styles.adminBtn}>
                  Admin
                </button>
                <button onClick={onLogout} style={styles.logoutBtn}>
                  Thoát
                </button>
              </>
            ) : (
              <button onClick={onLoginClick} style={styles.loginBtn}>
                Login
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: 'linear-gradient(135deg, #004e89 0%, #002d50 100%)',
    padding: '0.75rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '1rem',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    flexShrink: 0,
  },
  logo: {
    height: '60px',
    width: 'auto',
    transition: 'transform 0.3s ease',
  },
  logoTextContainer: {
    display: 'flex',
    flexDirection: 'column' as const,
    lineHeight: 1,
  },
  logoText: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    margin: 0,
    lineHeight: 1.2,
  },
  logoSubtext: {
    color: '#87CEEB',
    fontSize: '0.7rem',
    fontWeight: '500',
    margin: 0,
    lineHeight: 1,
    textTransform: 'uppercase' as const,
    letterSpacing: '1.5px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.75rem',
    flexShrink: 0,
  },
  nav: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative' as const,
  },
  desktopMenu: {
    display: 'flex',
    gap: '1.5rem',
    alignItems: 'center',
  },
  mobileMenuIcon: {
    display: 'none',
    background: 'transparent',
    border: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
    padding: '0.5rem',
  },
  mobileMenuDropdown: {
    position: 'absolute' as const,
    top: '100%',
    right: 0,
    background: 'linear-gradient(135deg, #004e89 0%, #002d50 100%)',
    borderRadius: '8px',
    boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
    padding: '1rem',
    minWidth: '150px',
    zIndex: 1000,
    marginTop: '0.5rem',
  },
  mobileMenuItem: {
    display: 'block',
    color: 'white',
    textDecoration: 'none',
    padding: '0.5rem 0',
    borderBottom: '1px solid rgba(255,255,255,0.1)',
    fontSize: '0.9rem',
    transition: 'color 0.3s',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1rem',
    transition: 'color 0.3s',
    whiteSpace: 'nowrap' as const,
  },
  hotlineContainer: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #ff6b35, #ff8c42)',
    padding: '0.5rem 1rem',
    borderRadius: '50px',
    boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
    textDecoration: 'none',
    flexShrink: 0,
    gap: '0.5rem',
    animation: 'pulse 2s infinite',
  },
  hotlineIcon: {
    fontSize: '1.2rem',
    animation: 'bounce 1s infinite',
  },
  hotlineInfo: {
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'flex-start',
    lineHeight: 1,
  },
  hotlineNumber: {
    color: 'white',
    fontSize: '0.9rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '1px',
    whiteSpace: 'nowrap' as const,
  },
  authContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    flexShrink: 0,
  },
  loginBtn: {
    background: '#ff6b35',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.85rem',
    transition: 'background 0.3s',
    whiteSpace: 'nowrap' as const,
  },
  adminBtn: {
    background: '#28a745',
    color: 'white',
    border: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.8rem',
    transition: 'background 0.3s',
    whiteSpace: 'nowrap' as const,
  },
  logoutBtn: {
    background: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '0.5rem 0.75rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '0.8rem',
    transition: 'background 0.3s',
    whiteSpace: 'nowrap' as const,
  },
};

export default Header;