import React from 'react';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section id="projects" style={styles.section}>
      <div style={styles.container}>
        <h2 style={styles.sectionTitle}>Dự Án Tiêu Biểu</h2>
        <div style={styles.grid}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <img src={project.image} alt={project.title} style={styles.projectImage} />
              <div style={styles.projectInfo}>
                <h3 style={styles.projectTitle}>{project.title}</h3>
                <p style={styles.projectDesc}>{project.description}</p>
              </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
  },
  projectCard: {
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
    transition: 'transform 0.3s',
    cursor: 'pointer',
  },
  projectImage: {
    width: '100%',
    height: '250px',
    objectFit: 'cover',
  },
  projectInfo: {
    padding: '1.5rem',
  },
  projectTitle: {
    fontSize: '1.3rem',
    marginBottom: '0.5rem',
    color: '#004e89',
  },
  projectDesc: {
    color: '#666',
    lineHeight: '1.6',
  },
};

export default Projects;