import { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from './config/firebase';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import LoginModal from './components/LoginModal';
import './App.css';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
}

interface TeamMember {
  id: string;
  name: string;
  position: string;
  image: string;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showAdminPanel, setShowAdminPanel] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [logo, setLogo] = useState('');
  const [projects, setProjects] = useState<Project[]>([
    {
      id: '1',
      title: 'Biệt thự hiện đại',
      description: 'Biệt thự 3 tầng phong cách hiện đại với thiết kế sang trọng',
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=500'
    },
    {
      id: '2',
      title: 'Nhà phố thông minh',
      description: 'Nhà phố 4 tầng tích hợp công nghệ thông minh',
      image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=500'
    },
    {
      id: '3',
      title: 'Chung cư cao cấp',
      description: 'Dự án chung cư 25 tầng với đầy đủ tiện ích',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=500'
    }
  ]);
  const [team, setTeam] = useState<TeamMember[]>([
    {
      id: '1',
      name: 'Sang Trần',
      position: 'Kiến trúc sư trưởng',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: '2',
      name: 'Trần Thị Bình',
      position: 'Kỹ sư xây dựng',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face'
    },
    {
      id: '3',
      name: 'Lê Văn Cường',
      position: 'Quản lý dự án',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face'
    }
  ]);

  const handleLogin = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
      alert('Đăng nhập thành công!');
    } catch (error) {
      alert('Đăng nhập thất bại. Vui lòng kiểm tra lại email và mật khẩu.');
      console.error(error);
      throw error; // Re-throw để LoginModal có thể xử lý
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setShowAdminPanel(false);
      alert('Đã đăng xuất!');
    } catch (error) {
      console.error(error);
    }
  };

  const handleLogoUpdate = (url: string) => {
    setLogo(url);
  };

  const handleProjectAdd = (project: Project) => {
    setProjects([...projects, project]);
  };

  const handleTeamAdd = (member: TeamMember) => {
    setTeam([...team, member]);
  };

  return (
    <div className="App">
      <Header
        logo={logo}
        isLoggedIn={isLoggedIn}
        onLoginClick={() => setShowLoginModal(true)}
        onAdminClick={() => setShowAdminPanel(true)}
        onLogout={handleLogout}
      />
      <Hero />
      <Services />
      <Projects projects={projects} />
      <Team team={team} />
      <Contact />
      <Footer />
      
      {showLoginModal && (
        <LoginModal
          onClose={() => setShowLoginModal(false)}
          onLogin={handleLogin}
        />
      )}
      
      {showAdminPanel && (
        <AdminPanel
          onClose={() => setShowAdminPanel(false)}
          onLogoUpdate={handleLogoUpdate}
          onProjectAdd={handleProjectAdd}
          onTeamAdd={handleTeamAdd}
        />
      )}
    </div>
  );
}

export default App;
