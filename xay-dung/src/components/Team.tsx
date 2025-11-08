import React from 'react';

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

interface TeamProps {
  team: TeamMember[];
}

const Team: React.FC<TeamProps> = ({ team }) => {
  return (
    <section id="team" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Đội Ngũ Chuyên Nghiệp</h2>
        <div style={styles.grid}>
          {team.map((member) => (
            <div key={member.id} style={styles.memberCard}>
              <img src={member.image} alt={member.name} style={styles.memberImage} />
              <h3 style={styles.memberName}>{member.name}</h3>
              <p style={styles.memberPosition}>{member.position}</p>
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
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '2rem',
  },
  memberCard: {
    textAlign: 'center',
  },
  memberImage: {
    width: '150px',
    height: '150px',
    borderRadius: '50%',
    objectFit: 'cover',
    marginBottom: '1rem',
    border: '4px solid #ff6b35',
  },
  memberName: {
    fontSize: '1.2rem',
    marginBottom: '0.5rem',
    color: '#004e89',
  },
  memberPosition: {
    color: '#666',
  },
};

export default Team;