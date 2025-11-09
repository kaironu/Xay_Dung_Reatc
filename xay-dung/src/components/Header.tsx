import React from 'react';
import logoImage from '../assets/logo-sang-tran.png';

interface HeaderProps {
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onAdminClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isLoggedIn, onLoginClick, onAdminClick, onLogout }) => {
  const handleLogoClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Navigate to home section
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
        
        <div style={styles.rightSection}>
          <nav style={styles.nav}>
            <a href="#home" style={styles.navLink}>Trang chủ</a>
            <a href="#services" style={styles.navLink}>Dịch vụ</a>
            <a href="#projects" style={styles.navLink}>Dự án</a>
            <a href="#team" style={styles.navLink}>Đội ngũ</a>
            <a href="#contact" style={styles.navLink}>Liên hệ</a>
          </nav>

          {/* Hotline nổi bật */}
          <div style={styles.hotlineContainer} className="hotlineContainer">
            <div style={styles.hotlineIcon}>📞</div>
            <div style={styles.hotlineInfo}>
              <span style={styles.hotlineLabel}>Hotline 24/7</span>
              <a href="tel:0867471642" style={styles.hotlineNumber}>
                0867-471-642
              </a>
            </div>
          </div>

          {/* Nút đăng nhập/admin - Đặt cuối cùng */}
          <div style={styles.authContainer}>
            {isLoggedIn ? (
              <>
                <button onClick={onAdminClick} style={styles.adminBtn}>
                  Admin Panel
                </button>
                <button onClick={onLogout} style={styles.logoutBtn}>
                  Đăng xuất
                </button>
              </>
            ) : (
              <button onClick={onLoginClick} style={styles.loginBtn}>
                Đăng nhập
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
    padding: '0.5rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 0.5rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  logoIcon: {
    width: '60px',
    height: '60px',
    background: 'linear-gradient(45deg, #00bcd4, #2196f3)',
    borderRadius: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'white',
    boxShadow: '0 4px 15px rgba(0, 188, 212, 0.3)',
    transition: 'transform 0.3s ease',
  },
  logo: {
    height: '70px',
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
    fontSize: '1.5rem',
    fontWeight: 'bold',
    margin: 0,
    lineHeight: 1,
  },
  logoSubtext: {
    color: '#87CEEB',
    fontSize: '0.9rem',
    fontWeight: '500',
    margin: 0,
    lineHeight: 1,
    textTransform: 'uppercase' as const,
    letterSpacing: '2px',
  },
  rightSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    flex: 1,
    justifyContent: 'flex-end',
  },
  // Hotline styles với animation nổi bật
  hotlineContainer: {
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(45deg, #ff6b35, #ff8c42)',
    padding: '0.8rem 1.5rem',
    borderRadius: '50px',
    boxShadow: '0 4px 20px rgba(255, 107, 53, 0.4)',
    animation: 'pulse 2s infinite',
    cursor: 'pointer',
    transition: 'transform 0.3s ease',
  },
  hotlineIcon: {
    fontSize: '1.5rem',
    marginRight: '0.8rem',
    animation: 'bounce 1s infinite',
  },
  hotlineInfo: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  hotlineLabel: {
    color: 'white',
    fontSize: '0.7rem',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: '0.5px',
    marginBottom: '0.2rem',
  },
  hotlineNumber: {
    color: 'white',
    fontSize: '1.1rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    letterSpacing: '1px',
    transition: 'color 0.3s',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  navLink: {
    color: 'white',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '1.1rem',
    transition: 'color 0.3s',
  },
  authContainer: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
  },
  loginBtn: {
    background: '#ff6b35',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s',
  },
  adminBtn: {
    background: '#28a745',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s',
  },
  logoutBtn: {
    background: '#dc3545',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1.5rem',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'background 0.3s',
  },
};

export default Header;