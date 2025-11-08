# Firebase Setup Instructions

## 1. Firebase Storage Rules
Vào Firebase Console (https://console.firebase.google.com) > Storage > Rules và thay đổi rules như sau:

```javascript
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if true;
    }
  }
}
```

## 2. Firebase Authentication
Vào Firebase Console > Authentication > Sign-in method và enable "Email/Password"

Sau đó tạo user mới:
- Email: admin@tdcconstruction.com  
- Password: admin123

## 3. CORS Issues
Nếu vẫn gặp lỗi CORS, có thể do:
- Firebase Storage rules chưa được cập nhật
- Project chưa được khởi tạo đúng
- Browser cache cần được xóa

## 4. Alternative Solution
Nếu Firebase Storage không hoạt động, có thể dùng các dịch vụ khác như:
- Cloudinary
- ImageKit
- Hoặc lưu trữ local images trong thư mục public

## 5. Test Upload
Sau khi cập nhật rules, restart ứng dụng và thử upload lại.