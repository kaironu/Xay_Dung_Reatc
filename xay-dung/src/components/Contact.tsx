import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Liên Hệ Xây Dựng Bình Thuận</h2>
        <p style={styles.subtitle}>
          Sang Trần Construction - Đối tác tin cậy cho mọi công trình xây dựng tại Bình Thuận
        </p>
        <div style={styles.contactGrid}>
          <div style={styles.contactInfo}>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📍</span>
              <div>
                <h4>Địa chỉ công ty</h4>
                <p>Tỉnh Bình Thuận, Việt Nam</p>
                <p>Phục vụ: Phan Thiết, La Gi, Hàm Thuận Nam</p>
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>📞</span>
              <div>
                <h4>Hotline 24/7</h4>
                <p><a href="tel:+84867471642" style={styles.phoneLink}>0867 471 642</a></p>
                <p>Tư vấn miễn phí dự án xây dựng</p>
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>✉️</span>
              <div>
                <h4>Email liên hệ</h4>
                <p>info@sangtran-construction.com</p>
                <p>Báo giá nhanh trong 24h</p>
              </div>
            </div>
            <div style={styles.infoItem}>
              <span style={styles.infoIcon}>🏗️</span>
              <div>
                <h4>Chuyên môn</h4>
                <p>Xây dựng nhà dân dụng Bình Thuận</p>
                <p>Thiết kế kiến trúc hiện đại</p>
              </div>
            </div>
          </div>
          <form style={styles.contactForm}>
            <h3 style={styles.formTitle}>Đăng ký tư vấn miễn phí</h3>
            <input type="text" placeholder="Họ và tên" style={styles.input} required />
            <input type="email" placeholder="Email" style={styles.input} />
            <input type="tel" placeholder="Số điện thoại" style={styles.input} required />
            <select style={styles.input} required>
              <option value="">Chọn dịch vụ cần tư vấn</option>
              <option value="xay-nha">Xây nhà mới</option>
              <option value="sua-chua">Sửa chữa nhà</option>
              <option value="thiet-ke">Thiết kế kiến trúc</option>
              <option value="bao-gia">Báo giá dự án</option>
            </select>
            <textarea placeholder="Mô tả chi tiết dự án (diện tích, địa điểm, yêu cầu...)" rows={5} style={styles.textarea}></textarea>
            <button type="submit" style={styles.submitBtn}>Nhận tư vấn miễn phí</button>
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
    marginBottom: '1rem',
    color: '#004e89',
  },
  subtitle: {
    fontSize: '1.1rem',
    textAlign: 'center',
    marginBottom: '3rem',
    color: '#666',
    maxWidth: '600px',
    margin: '0 auto 3rem auto',
  },
  contactGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
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
  phoneLink: {
    color: '#ff6b35',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
  contactForm: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
    background: '#f8f9fa',
    padding: '2rem',
    borderRadius: '12px',
  },
  formTitle: {
    color: '#004e89',
    marginBottom: '1rem',
    textAlign: 'center',
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