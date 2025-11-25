# Kerali Foundation Limited - Website Structure

## Project Organization

The website has been properly organized into the following structure:

```
four/
├── index.html              (Entry point - redirects to home page)
├── html/                   (HTML pages)
│   ├── index.html         (Home page)
│   ├── donate.html        (Donation page)
│   ├── volunteer.html     (Volunteer signup page)
│   └── admin.html         (Admin dashboard)
├── css/                   (Stylesheets and theme)
│   ├── index.css          (Main stylesheet)
│   ├── style.css          (Additional styles)
│   └── style.json         (Color theme configuration)
├── js/                    (JavaScript files)
│   └── script.js          (Main functionality)
└── app.py                 (Backend Flask application)
```

## File Links & Navigation

All links have been corrected to work with the new folder structure:

- **Navigation links**: All pages can navigate to each other seamlessly
- **CSS imports**: Properly reference `../css/` from HTML pages
- **JavaScript**: Automatically loads via `script.js` deferred loading
- **Theme colors**: Loaded from `css/style.json` at runtime

## Running the Website

### Option 1: Using Python Flask (Backend Integration)

```bash
python app.py
```

Then visit: `http://localhost:5000/`

### Option 2: Using Python HTTP Server

```bash
python -m http.server 8000
```

Then visit: `http://localhost:8000/`

### Option 3: Using VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click on `index.html` → "Open with Live Server"

## Features

✅ **Home Page (index.html)**
- Organization overview
- Vision & Mission circles
- Programs list
- Call-to-action buttons
- Contact information

✅ **Donation Page (donate.html)**
- Donation form with validation
- Responsive design
- Back-to-home navigation
- Form submission handling

✅ **Volunteer Page (volunteer.html)**
- Volunteer signup form
- Availability selection
- Skills input
- Benefits of volunteering
- Form submission handling

✅ **Admin Dashboard (admin.html)**
- Login authentication (demo: admin/admin123)
- Donations table
- Volunteers table
- Logout functionality
- Session-based security

## Styling

- **Colors**: Defined in `css/style.json`
  - Primary: #27ae60 (Green)
  - Secondary: #2c3e50 (Dark Blue)
  - Accent: #f1c40f (Yellow)

- **Responsive Design**: 
  - Desktop (1200px+)
  - Tablet (769px - 1199px)
  - Mobile (480px - 768px)
  - Small Mobile (< 480px)

## JavaScript Features

- Smooth scrolling navigation
- Active link highlighting
- Form validation and submission
- Dynamic theme loading from JSON
- Responsive layout adjustments
- Button animations

## Admin Credentials

- Username: `admin`
- Password: `admin123`

*Note: This is for demonstration only. Production use requires proper authentication.*
