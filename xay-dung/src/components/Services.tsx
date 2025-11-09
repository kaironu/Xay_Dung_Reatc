import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Xây dựng nhà dân dụng Bình Thuận',
      description: 'Thi công xây dựng nhà ở, biệt thự tại Bình Thuận với chất lượng cao, tiến độ nhanh chóng',
    },
    {
      icon: '📐',
      title: 'Thiết kế kiến trúc Phan Thiết',
      description: 'Thiết kế kiến trúc hiện đại phù hợp khí hậu Bình Thuận, tối ưu công năng và thẩm mỹ',
    },
    {
      icon: '🔧',
      title: 'Sửa chữa nhà Bình Thuận',
      description: 'Dịch vụ sửa chữa, cải tạo nhà cũ tại Bình Thuận, nâng cấp công trình chuyên nghiệp',
    },
    {
      icon: '📋',
      title: 'Tư vấn xây dựng miễn phí',
      description: 'Tư vấn miễn phí giải pháp xây dựng tại Bình Thuận, báo giá chi tiết, hỗ trợ khách hàng 24/7',
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Dịch Vụ Xây Dựng Bình Thuận</h2>
        <p style={styles.subtitle}>
          Sang Trần Construction cung cấp đa dạng dịch vụ xây dựng tại Bình Thuận, Phan Thiết và các huyện lân cận
        </p>
        <div style={styles.grid}>
          {services.map((service, index) => (
            <div key={index} style={styles.card}>
              <div style={styles.icon}>{service.icon}</div>
              <h3 style={styles.cardTitle}>{service.title}</h3>
              <p style={styles.cardText}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  section: {
    padding: '5rem 0',
    background: '#f8f9fa',
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
    maxWidth: '800px',
    margin: '0 auto 3rem auto',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '2rem',
  },
  card: {
    background: 'white',
    padding: '2rem',
    borderRadius: '12px',
    textAlign: 'center',
    transition: 'transform 0.3s, box-shadow 0.3s',
    cursor: 'pointer',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  icon: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  cardTitle: {
    fontSize: '1.3rem',
    marginBottom: '1rem',
    color: '#004e89',
  },
  cardText: {
    color: '#666',
    lineHeight: '1.6',
  },
};

export default Services;