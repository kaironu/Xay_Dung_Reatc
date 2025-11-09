import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="home" style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <h1 style={styles.title}>Xây Dựng Bình Thuận - Sang Trần Construction</h1>
          <p style={styles.subtitle}>
            Công ty xây dựng uy tín tại Bình Thuận chuyên thiết kế và thi công nhà dân dụng, biệt thự, công trình công nghiệp. Phục vụ khách hàng tại Phan Thiết, La Gi, Hàm Thuận Nam và toàn tỉnh Bình Thuận.
          </p>
          <button style={styles.ctaBtn}>Tư vấn miễn phí</button>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  hero: {
    height: '600px',
    backgroundImage: 'url(https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: 'rgba(0, 78, 137, 0.8)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    textAlign: 'center',
    color: 'white',
    maxWidth: '800px',
    padding: '0 2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    animation: 'slideDown 1s ease',
  },
  subtitle: {
    fontSize: '1.2rem',
    marginBottom: '2rem',
    animation: 'slideDown 1.2s ease',
  },
  ctaBtn: {
    background: '#ff6b35',
    color: 'white',
    border: 'none',
    padding: '1rem 3rem',
    fontSize: '1.1rem',
    borderRadius: '50px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'transform 0.3s, box-shadow 0.3s',
    boxShadow: '0 4px 15px rgba(255, 107, 53, 0.4)',
  },
};

export default Hero;