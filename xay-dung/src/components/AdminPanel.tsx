import React, { useState } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from '../config/firebase';

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

interface AdminPanelProps {
  onClose: () => void;
  onLogoUpdate: (url: string) => void;
  onProjectAdd: (project: Project) => void;
  onTeamAdd: (member: TeamMember) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  onClose, 
  onLogoUpdate, 
  onProjectAdd, 
  onTeamAdd 
}) => {
  const [activeTab, setActiveTab] = useState<'logo' | 'project' | 'team'>('logo');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Logo state
  const [logoPreview, setLogoPreview] = useState('');
  
  // Project state
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectImagePreview, setProjectImagePreview] = useState('');
  
  // Team state
  const [memberName, setMemberName] = useState('');
  const [memberPosition, setMemberPosition] = useState('');
  const [memberImagePreview, setMemberImagePreview] = useState('');

  const uploadFile = async (file: File, path: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      // Tạo tên file unique để tránh trùng lặp
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const storageRef = ref(storage, `${path}/${fileName}`);
      
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setUploadProgress(progress);
          console.log('Upload progress:', progress + '%');
        },
        (error) => {
          console.error('Upload error:', error);
          setUploading(false);
          setUploadProgress(0);
          reject(error);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('Upload successful, URL:', downloadURL);
            resolve(downloadURL);
          } catch (error) {
            console.error('Error getting download URL:', error);
            reject(error);
          }
        }
      );
    });
  };

  const handleLogoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Kiểm tra kích thước file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Kích thước file không được vượt quá 5MB');
      return;
    }

    // Kiểm tra loại file
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh');
      return;
    }

    setUploading(true);
    try {
      console.log('Starting logo upload...');
      const url = await uploadFile(file, 'logos');
      setLogoPreview(url);
      onLogoUpdate(url);
      alert('Logo đã được upload thành công!');
    } catch (error) {
      console.error('Logo upload error:', error);
      alert('Lỗi khi upload logo. Vui lòng thử lại sau.');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleProjectSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!projectImagePreview) {
      alert('Vui lòng chọn ảnh dự án');
      return;
    }

    const newProject = {
      id: Date.now().toString(),
      title: projectTitle,
      description: projectDesc,
      image: projectImagePreview,
    };

    onProjectAdd(newProject);
    setProjectTitle('');
    setProjectDesc('');
    setProjectImagePreview('');
    alert('Dự án đã được thêm thành công!');
  };

  const handleProjectImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Kiểm tra kích thước file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Kích thước file không được vượt quá 5MB');
      return;
    }

    // Kiểm tra loại file
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh');
      return;
    }

    setUploading(true);
    try {
      console.log('Starting project image upload...');
      const url = await uploadFile(file, 'projects');
      setProjectImagePreview(url);
    } catch (error) {
      console.error('Project image upload error:', error);
      alert('Lỗi khi upload ảnh dự án. Vui lòng thử lại sau.');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  const handleTeamSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!memberImagePreview) {
      alert('Vui lòng chọn ảnh thành viên');
      return;
    }

    const newMember = {
      id: Date.now().toString(),
      name: memberName,
      position: memberPosition,
      image: memberImagePreview,
    };

    onTeamAdd(newMember);
    setMemberName('');
    setMemberPosition('');
    setMemberImagePreview('');
    alert('Thành viên đã được thêm thành công!');
  };

  const handleMemberImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Kiểm tra kích thước file (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('Kích thước file không được vượt quá 5MB');
      return;
    }

    // Kiểm tra loại file
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh');
      return;
    }

    setUploading(true);
    try {
      console.log('Starting member image upload...');
      const url = await uploadFile(file, 'team');
      setMemberImagePreview(url);
    } catch (error) {
      console.error('Member image upload error:', error);
      alert('Lỗi khi upload ảnh thành viên. Vui lòng thử lại sau.');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '600px' }}>
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Quản Lý Nội Dung</h2>
        
        <div style={styles.tabs}>
          <button 
            onClick={() => setActiveTab('logo')} 
            style={activeTab === 'logo' ? styles.activeTab : styles.tab}
          >
            Logo
          </button>
          <button 
            onClick={() => setActiveTab('project')} 
            style={activeTab === 'project' ? styles.activeTab : styles.tab}
          >
            Dự án
          </button>
          <button 
            onClick={() => setActiveTab('team')} 
            style={activeTab === 'team' ? styles.activeTab : styles.tab}
          >
            Đội ngũ
          </button>
        </div>

        {activeTab === 'logo' && (
          <div style={styles.tabContent}>
            <h3>Upload Logo</h3>
            <div className="file-input-wrapper">
              <input 
                type="file" 
                id="logo-upload" 
                accept="image/*" 
                onChange={handleLogoUpload}
                disabled={uploading}
              />
              <label htmlFor="logo-upload" className="file-input-label">
                {uploading ? `Đang upload... ${uploadProgress.toFixed(0)}%` : 'Chọn file logo'}
              </label>
            </div>
            {logoPreview && (
              <img src={logoPreview} alt="Logo preview" className="preview-image" />
            )}
          </div>
        )}

        {activeTab === 'project' && (
          <div style={styles.tabContent}>
            <h3>Thêm Dự Án Mới</h3>
            <form onSubmit={handleProjectSubmit}>
              <input
                type="text"
                placeholder="Tên dự án"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                required
              />
              <textarea
                placeholder="Mô tả dự án"
                value={projectDesc}
                onChange={(e) => setProjectDesc(e.target.value)}
                rows={3}
                required
              />
              <div className="file-input-wrapper">
                <input 
                  type="file" 
                  id="project-image" 
                  accept="image/*" 
                  onChange={handleProjectImageUpload}
                  disabled={uploading}
                />
                <label htmlFor="project-image" className="file-input-label">
                  {uploading ? `Đang upload... ${uploadProgress.toFixed(0)}%` : 'Chọn ảnh dự án'}
                </label>
              </div>
              {projectImagePreview && (
                <img src={projectImagePreview} alt="Project preview" className="preview-image" />
              )}
              <button type="submit" disabled={uploading}>Thêm dự án</button>
            </form>
          </div>
        )}

        {activeTab === 'team' && (
          <div style={styles.tabContent}>
            <h3>Thêm Thành Viên</h3>
            <form onSubmit={handleTeamSubmit}>
              <input
                type="text"
                placeholder="Họ và tên"
                value={memberName}
                onChange={(e) => setMemberName(e.target.value)}
                required
              />
              <input
                type="text"
                placeholder="Chức vụ"
                value={memberPosition}
                onChange={(e) => setMemberPosition(e.target.value)}
                required
              />
              <div className="file-input-wrapper">
                <input 
                  type="file" 
                  id="member-image" 
                  accept="image/*" 
                  onChange={handleMemberImageUpload}
                  disabled={uploading}
                />
                <label htmlFor="member-image" className="file-input-label">
                  {uploading ? `Đang upload... ${uploadProgress.toFixed(0)}%` : 'Chọn ảnh thành viên'}
                </label>
              </div>
              {memberImagePreview && (
                <img src={memberImagePreview} alt="Member preview" className="preview-image" />
              )}
              <button type="submit" disabled={uploading}>Thêm thành viên</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  tabs: {
    display: 'flex',
    gap: '0.5rem',
    marginBottom: '1.5rem',
  },
  tab: {
    flex: 1,
    padding: '0.8rem',
    border: '1px solid #ddd',
    background: 'white',
    cursor: 'pointer',
    borderRadius: '6px',
    transition: 'all 0.3s',
  },
  activeTab: {
    flex: 1,
    padding: '0.8rem',
    border: '1px solid #ff6b35',
    background: '#ff6b35',
    color: 'white',
    cursor: 'pointer',
    borderRadius: '6px',
    fontWeight: '600',
  },
  tabContent: {
    animation: 'fadeIn 0.3s ease',
  },
};

export default AdminPanel;