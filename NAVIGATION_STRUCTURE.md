# Kerali Foundation Website - Navigation Structure

## Website Hierarchy & Interconnections

### 1. **HOME PAGE** (index.html)
   - Location: `/html/index.html`
   - Purpose: Main landing page with hero section and full content
   - Content:
     - Hero section with tagline
     - About Us section
     - Vision & Mission section
     - Programs/Objectives section
     - Get Involved section (with donation/volunteer buttons)
     - Contact section
   - Navigation Links to:
     - ✓ #about (same page)
     - ✓ #vision-mission (same page)
     - ✓ #objectives (same page)
     - ✓ ../templates/donate.html
     - ✓ ../templates/volunteer.html
     - ✓ #contact (same page)
     - ✓ ../templates/admin.html (Admin portal)

### 2. **ABOUT US** (home.html)
   - Location: `/templates/home.html`
   - Purpose: Detailed information about the foundation
   - Content:
     - Who We Are section
     - Vision & Mission details
     - Programs list
   - Navigation Links to:
     - ✓ ../html/index.html (Home)
     - ✓ home.html (About - current, highlighted as active)
     - ✓ ../html/index.html#vision-mission
     - ✓ ../html/index.html#objectives
     - ✓ donate.html
     - ✓ volunteer.html
     - ✓ ../html/index.html#contact

### 3. **DONATE PAGE** (donate.html)
   - Location: `/templates/donate.html`
   - Purpose: Donation form and information
   - Content:
     - Donation form (Name, Email, Amount, Message)
     - Donation thank you message
   - Navigation Links to:
     - ✓ ../html/index.html (Home)
     - ✓ home.html (About Us)
     - ✓ ../html/index.html#vision-mission
     - ✓ ../html/index.html#objectives
     - ✓ donate.html (current, highlighted as active)
     - ✓ volunteer.html
     - ✓ ../html/index.html#contact

### 4. **VOLUNTEER PAGE** (volunteer.html)
   - Location: `/templates/volunteer.html`
   - Purpose: Volunteer signup and information
   - Content:
     - Volunteer form (Name, Email, Skills, Availability)
     - Why Volunteer section with benefits
     - Volunteer thank you message
   - Navigation Links to:
     - ✓ ../html/index.html (Home)
     - ✓ home.html (About Us)
     - ✓ ../html/index.html#vision-mission
     - ✓ ../html/index.html#objectives
     - ✓ donate.html
     - ✓ volunteer.html (current, highlighted as active)
     - ✓ ../html/index.html#contact

### 5. **ADMIN DASHBOARD** (admin.html)
   - Location: `/templates/admin.html`
   - Purpose: Admin-only dashboard with login protection
   - Content:
     - Login form (requires: admin / admin123)
     - Donations table
     - Volunteers table
     - Logout button
   - Navigation Links to:
     - ✓ ../html/index.html (Home)
     - ✓ home.html (About Us)
     - ✓ ../html/index.html#vision-mission
     - ✓ ../html/index.html#objectives
     - ✓ donate.html
     - ✓ volunteer.html
     - ✓ admin.html (current, highlighted as active)

### 6. **BASE TEMPLATE** (base.html)
   - Location: `/templates/base.html`
   - Purpose: Reference template for Flask Jinja2 (if needed)
   - Content: Welcome section
   - Navigation Links to: All pages

---

## Navigation Flow Logic

```
┌─────────────────────────────────────────────────────────────────┐
│                    HOME (index.html)                            │
│                    ↓ Main Landing Page ↓                         │
└─────────────────────────────────────────────────────────────────┘
                    ↙              ↓              ↘
            ┌──────────────┬──────────────┬──────────────┐
            ↓              ↓              ↓              ↓
        ABOUT US     DONATE PAGE    VOLUNTEER PAGE    CONTACT
        (home.html)  (donate.html)  (volunteer.html)  (#contact)

All pages have navigation to:
- All other pages
- All sections within home page
- Admin page (linked but login-protected)
```

## Navigation Styling

- **Active Links**: Highlighted with accent color (#f1c40f)
- **Admin Link**: Red color (#e74c3c) to indicate restricted area
- **Hover Effect**: Smooth color transition (0.3s ease)
- **Current Page**: Shows "active" class in navigation

## Key Features

1. ✅ **Consistent Navigation**: All pages have identical navigation bar
2. ✅ **Logical Flow**: Content organized by purpose (Home → About → Get Involved → Admin)
3. ✅ **Easy Navigation**: Users can navigate between any two pages directly
4. ✅ **Form Validation**: Both donate and volunteer forms have required fields
5. ✅ **Security**: Admin page requires login (demo: admin/admin123)
6. ✅ **Mobile Responsive**: Navigation adapts to screen size
7. ✅ **Theme Consistency**: All pages load same CSS and style.json

## URL Mapping

| Page | URL | Type |
|------|-----|------|
| Home | `/html/index.html` | Main page |
| About | `/templates/home.html` | Static info |
| Donate | `/templates/donate.html` | Form page |
| Volunteer | `/templates/volunteer.html` | Form page |
| Admin | `/templates/admin.html` | Protected dashboard |
| Base | `/templates/base.html` | Template reference |
