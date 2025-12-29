# EnglishMate - English Learning Platform

EnglishMate adalah platform pembelajaran bahasa Inggris yang interaktif dan modern dengan desain yang menarik dan user-friendly.

## 📚 Fitur Utama

### 1. **Index** (`index.html`)
- Landing page utama dengan animasi
- Fitur-fitur unggulan
- Call-to-action untuk memulai belajar
- Responsive design

### 2. **Login & Sign Up** (`pages/login.html`)
- Split-screen design dengan glassmorphism
- Firebase Authentication
- Toggle password visibility
- Form validation
- Back to home link

### 3. **Dashboard** (`pages/Dashboard.html`)
- Welcome message dengan nama user
- 4 fitur cards: Courses, Quiz, Dictionary, Lesson
- Background gradient dengan dekorasi
- Logout functionality

### 4. **Courses** (`pages/Courses.html`)
- Pemilihan level: Beginner, Intermediate, Advanced
- Interactive level selection
- Start Lesson button
- Level-based navigation

### 5. **Lessons** (`lessons/Lesson*.html`)
- Level-specific lesson pages:
  - LessonBeginner.html
  - LessonIntermediate.html
  - LessonAdvanced.html
- Topic cards navigation

### 6. **Quiz** (`pages/Quiz.html`)
- Interactive quiz questions
- Multiple choice dengan custom radio buttons
- Submit dengan validasi
- Feedback hasil jawaban (benar/salah)

### 7. **Dictionary** (`pages/Dictionary.html`)
- Search functionality
- Word definitions dengan phonetic
- Example sentences
- Popular words quick access

## 🎨 Design Features

- **Color Scheme**: Blue gradient (#5BA8E8, #7EC4F3, #A8D8F5)
- **Typography**: Outfit font family (Google Fonts)
- **Effects**:
  - Glassmorphism
  - Blur effects
  - Smooth animations
  - Hover transitions
  - Twinkling stars
  - Geometric shapes decorations

## 🔧 Teknologi yang Digunakan

- **HTML5**: Struktur halaman
- **CSS3**: Styling dengan advanced effects
- **JavaScript**: Interaktivity dan logic
- **Firebase**: Authentication dan user management
- **Responsive Design**: Mobile-first approach

## 📁 Struktur File

```
UIUX_Rosi/
├── index.html            # Landing page
├── firebase-config.js    # Firebase configuration
├── pages/
│   ├── login.html        # Login & Sign up page
│   ├── Dashboard.html    # Main dashboard
│   ├── Courses.html      # Course level selection
│   ├── Quiz.html         # Interactive quiz
│   └── Dictionary.html   # English dictionary
├── lessons/
│   ├── LessonBeginner.html
│   ├── LessonIntermediate.html
│   └── LessonAdvanced.html
├── topics/               # Detail materi pembelajaran
│   ├── beginner/
│   ├── intermediate/
│   └── advanced/
├── UIUX/                 # Assets (images)
└── README.md             # Documentation
```

## 🚀 Cara Menggunakan

1. **Setup Firebase**:
   - Buat project di Firebase Console
   - Enable Email/Password authentication
   - Copy konfigurasi ke `firebase-config.js`

2. **Jalankan Aplikasi**:
   - Buka `index.html` di browser
   - Atau gunakan local server (XAMPP, Laragon, dll)

3. **Flow Aplikasi**:
   ```
   Landing Page (index.html) → Login → Dashboard
                                       ├── Courses → Select Level → Lesson → Topic → Quiz
                                       ├── Dictionary
                                       └── Quiz
   ```

## 🔐 Firebase Configuration

File `firebase-config.js` harus berisi:

```javascript
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
```

## 📱 Responsive Breakpoints

- **Desktop**: > 768px
- **Tablet**: 481px - 768px
- **Mobile**: ≤ 480px

## ✨ Fitur Interaktif

### Login Page
- Toggle password visibility dengan eye icon
- Tab switching antara Login dan Sign Up
- Real-time validation
- Error messages dalam Bahasa Indonesia

### Dashboard
- Dynamic welcome message
- Hover effects pada cards
- Smooth navigation

### Courses
- Level selection dengan visual feedback
- Active state indication
- Validation sebelum start lesson

### Quiz
- Custom radio buttons
- Answer validation
- Instant feedback
- Result display dengan warna

### Dictionary
- Real-time search
- Popular words chips
- Word details dengan phonetic
- Example sentences

## 🎯 User Flow

1. User membuka landing page
2. Klik "Get Started" → Login page
3. Login/Sign up dengan Firebase
4. Redirect ke Dashboard
5. Pilih fitur:
   - **Courses** → Pilih level → Lesson → Quiz
   - **Dictionary** → Search kata
   - **Quiz** → Langsung quiz
   - **Lesson** → Pilih topik → Quiz

## 🔄 Navigation Links

Semua halaman terhubung dengan navigation yang konsisten:
- Dashboard ↔ Courses ↔ Dictionary ↔ Quiz ↔ Lesson
- Logout tersedia di semua halaman (kecuali landing & login)
- Back to home di login page

## 📝 Notes

- Semua halaman menggunakan Firebase authentication check
- Redirect otomatis ke login jika belum login
- Logout confirmation sebelum keluar
- Responsive design untuk semua device sizes

## 🎨 Customization

Untuk mengubah warna tema, edit variabel warna di CSS:
- Primary: `#5BA8E8`
- Secondary: `#7EC4F3`
- Light: `#A8D8F5`

## 📄 License

Project ini dibuat untuk keperluan pembelajaran UI/UX.

---

**EnglishMate** - Master English with Style! 🚀
# EnglishMate
# EnglishMate
