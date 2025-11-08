import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Liên Hệ Với Chúng Tôi</h2>
        <div style={styles.contactGrid}>
          <div style={styles.contactInfo}>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📍</span>
              <div>
                <h4>Địa chỉ</h4>
                <p>123 Đường ABC, Quận 1, TP.HCM</p>
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📞</span>
              <div>
                <h4>Điện thoại</h4>
                <p>0123 456 789</p>
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>✉️</span>
              <div>
                <h4>Email</h4>
                <p>info@sangtran.com</p>
              </div>
            </div>
          </div>
          <form style={styles.contactForm}>
            <input type="text" placeholder="Họ và tên" style={styles.input} />
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="tel" placeholder="Số điện thoại" style={styles.input} />
            <textarea placeholder="Nội dung" rows={5} style={styles.textarea}></textarea>
            <button type="submit" style={styles.submitBtn}>Gửi tin nhắn</button>
          </form>
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '5rem 0',
    background: 'white',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 2rem',
  },
  sectionTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#004e89',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '3rem',
  },
  contactInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem',
  },
  infoItem: {
    display: 'flex',
    gap: '1rem',
    alignItems: 'flex-start',
  },
  infoIcon: {
    fontSize: '2rem',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  input: {
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
  },
  textarea: {
    padding: '0.8rem',
    border: '1px solid #ddd',
    borderRadius: '6px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    resize: 'vertical',
  },
  submitBtn: {
    background: '#ff6b35',
    color: 'white',
    border: 'none',
    padding: '1rem',
    borderRadius: '6px',
    fontSize: '1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background 0.3s',
  },
};

export default Contact;