import React, { useState } from 'react';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
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
  onProjectAdd: (project: Project) => void;
  onTeamAdd: (member: TeamMember) => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ 
  onClose, 
  onProjectAdd, 
  onTeamAdd 
}) => {
  const [activeTab, setActiveTab] = useState<'project' | 'team'>('project');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  
  // Project state
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [projectImagePreview, setProjectImagePreview] = useState('');
  
  // Team state
  const [memberName, setMemberName] = useState('');
  const [memberPosition, setMemberPosition] = useState('');
  const [memberImagePreview, setMemberImagePreview] = useState('');

  const uploadFile = async (file: File, path: string): Promise<string> => {
    try {
      // Tạo tên file unique để tránh trùng lặp
      const fileName = `${Date.now()}_${file.name.replace(/[^a-zA-Z0-9.]/g, '_')}`;
      const storageRef = ref(storage, `${path}/${fileName}`);
      
      console.log('Starting upload...', fileName);
      setUploadProgress(50); // Giả lập progress
      
      // Upload file
      const snapshot = await uploadBytes(storageRef, file);
      console.log('Upload successful');
      
      // Get download URL
      const downloadURL = await getDownloadURL(snapshot.ref);
      console.log('Download URL:', downloadURL);
      
      setUploadProgress(100);
      return downloadURL;
    } catch (error) {
      console.error('Upload error:', error);
      setUploading(false);
      setUploadProgress(0);
      throw error;
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