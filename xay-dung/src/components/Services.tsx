import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      icon: '🏗️',
      title: 'Thi công xây dựng',
      description: 'Thi công các công trình dân dụng, công nghiệp với đội ngũ chuyên nghiệp',
    },
    {
      icon: '📐',
      title: 'Thiết kế kiến trúc',
      description: 'Thiết kế kiến trúc hiện đại, tối ưu công năng và thẩm mỹ',
    },
    {
      icon: '🔧',
      title: 'Sửa chữa & Cải tạo',
      description: 'Sửa chữa, cải tạo nhà cũ, nâng cấp công trình',
    },
    {
      icon: '📋',
      title: 'Tư vấn dự án',
      description: 'Tư vấn giải pháp xây dựng tối ưu chi phí và thời gian',
    },
  ];

  return (
    <section id="services" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Dịch Vụ Của Chúng Tôi</h2>
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
    marginBottom: '3rem',
    color: '#004e89',
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