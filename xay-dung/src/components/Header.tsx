import React from 'react';

interface HeaderProps {
  logo: string;
  isLoggedIn: boolean;
  onLoginClick: () => void;
  onAdminClick: () => void;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ logo, isLoggedIn, onLoginClick, onAdminClick, onLogout }) => {
  return (
    <header style={styles.header}>
      <div style={styles.container}>
        <div style={styles.logoContainer}>
          {logo ? (
            <img src={logo} alt="Logo" style={styles.logo} />
          ) : (
            <h1 style={styles.logoText}>Sang Trần Construction</h1>
          )}
        </div>
        <nav style={styles.nav}>
          <a href="#home" style={styles.navLink}>Trang chủ</a>
          <a href="#services" style={styles.navLink}>Dịch vụ</a>
          <a href="#projects" style={styles.navLink}>Dự án</a>
          <a href="#team" style={styles.navLink}>Đội ngũ</a>
          <a href="#contact" style={styles.navLink}>Liên hệ</a>
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
        </nav>
      </div>
    </header>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  header: {
    background: 'linear-gradient(135deg, #004e89 0%, #002d50 100%)',
    padding: '1rem 0',
    position: 'sticky',
    top: 0,
    zIndex: 100,
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  logo: {
    height: '50px',
    width: 'auto',
  },
  logoText: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
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
    transition: 'color 0.3s',
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