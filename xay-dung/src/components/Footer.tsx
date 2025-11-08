import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <p style={styles.text}>
          © 2024 Sang Trần Construction. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  footer: {
    background: '#004e89',
    color: 'white',
    padding: '2rem 0',
    textAlign: 'center',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  text: {
    margin: 0,
  },
};

export default Footer;