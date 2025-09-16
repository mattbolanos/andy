# 🎵 Andy Steiner's Portfolio Site

Welcome to the maintenance guide for Andy Steiner's portfolio website! This guide will help you understand how to keep the site updated with new content, whether you're adding articles, album reviews, interviews, or production work.

## 📋 Table of Contents

- [Getting Started](#getting-started)
- [How to Edit Files](#how-to-edit-files)
- [Understanding the Site Structure](#understanding-the-site-structure)
- [Adding New Content](#adding-new-content)
  - [📰 Adding Articles](#adding-articles)
  - [🎵 Adding Album Reviews](#adding-album-reviews)
  - [🎤 Adding Interviews & Features](#adding-interviews--features)
  - [🎬 Adding Production Work](#adding-production-work)
- [Managing Images](#managing-images)
- [Reordering Content](#reordering-content)
- [Technical Notes](#technical-notes)

---

## 🚀 Getting Started

This is a Next.js website that showcases Andy Steiner's work as a music writer, critic, and producer. The site is organized into four main sections:

- **Home** - Recent work and personal info
- **Interviews** - Published interviews and features
- **Reviews** - Album reviews organized by publication
- **Production** - Video productions and creative work

All content is managed through a single file called `constants.ts`, making it easy to add and organize new work.

---

## ✏️ How to Edit Files

Before you can add new content, you'll need to know how to edit the files. Here are several options, from technical to non-technical:

### 🖥️ Option 1: Using Visual Studio Code (Recommended)

**Visual Studio Code (VSCode)** is a free, user-friendly code editor that makes editing files easy.

**Step 1**: Download VSCode
- Go to [code.visualstudio.com](https://code.visualstudio.com)
- Download and install VSCode for your computer

**Step 2**: Get Access to the Repository
- Contact **Matt** to request collaborator access to the repository
- He'll add you as a collaborator so you can edit files directly

**Step 3**: Open the Project
- Open VSCode
- Click "File" → "Open Folder"
- Navigate to the project folder and select it
- You'll see all the files in the left sidebar

**Step 4**: Edit the Constants File
- In the left sidebar, navigate to `app` → `constants.ts`
- Click on the file to open it
- Make your changes following the guides below
- Press `Ctrl+S` (Windows) or `Cmd+S` (Mac) to save

**Benefits of VSCode**:
- ✅ Syntax highlighting makes code easier to read
- ✅ Auto-completion helps prevent typos
- ✅ Built-in file explorer
- ✅ Easy to see all files at once

### 🌐 Option 2: GitHub Web Interface (No Software Needed)

If you prefer not to install any software, you can edit files directly in your web browser.

**Step 1**: Get Repository Access
- Contact **Matt** to request collaborator access
- He'll give you the repository URL

**Step 2**: Navigate to the File
- Go to the repository on GitHub
- Click on `app` folder
- Click on `constants.ts` file
- Click the pencil icon (✏️) in the top-right corner

**Step 3**: Make Your Changes
- Edit the file directly in the browser
- Follow the guides below for what to add
- Scroll down and add a commit message like "Add new article"
- Click "Commit changes"

**Benefits of GitHub Web**:
- ✅ No software to install
- ✅ Works on any computer with internet
- ✅ Automatic backup of changes
- ✅ Easy to see what changed

### 📱 Option 3: Mobile-Friendly Editing

**GitHub Mobile App**:
- Download "GitHub" app from your phone's app store
- Sign in with your GitHub account
- Navigate to the repository
- Tap on `app/constants.ts`
- Tap the pencil icon to edit
- Make changes and commit

### 🔧 Option 4: Other Code Editors

If you're comfortable with code editors, you can also use:
- **Sublime Text** (sublimetext.com)
- **Atom** (atom.io)
- **Notepad++** (Windows only)
- **TextEdit** (Mac, but not recommended for code)

### 📁 Option 5: File Manager + Text Editor

**For the truly non-technical**:

**Step 1**: Download the File
- Contact **Matt** to get the `constants.ts` file
- Save it to your computer (like your Desktop)

**Step 2**: Edit with Any Text Editor
- Right-click the file → "Open with" → "Notepad" (Windows) or "TextEdit" (Mac)
- Make your changes following the guides below
- Save the file

**Step 3**: Send Back to Matt
- Email the updated file back to Matt
- He'll upload it to the website

**Note**: This method requires Matt to manually update the site each time.

---

## 🏗️ Understanding the Site Structure

The website is built like a digital portfolio where everything is controlled by one main file:

```
📁 app/
  └── constants.ts ← This is where ALL content lives
📁 public/
  ├── articles/ ← Article images go here
  ├── albums/ ← Album cover images go here
  └── productions/ ← Production thumbnail images go here
```

**Key Point**: You don't need to touch any code files except `constants.ts` to add new content!

---

## ✨ Adding New Content

### 📰 Adding Articles

Articles appear on the homepage under "Recent Work" and in the Interviews section.

**Step 1**: Add your article image to the `public/articles/` folder
- Use a descriptive filename like `publication_article-title.jpg`
- Recommended size: 400x400 pixels or larger
- Supported formats: JPG, PNG, WebP

**Step 2**: Open `app/constants.ts` and find the `recentWork` section (around line 286)

**Step 3**: Add your new article to the list:

```javascript
export const recentWork: InterviewFeature[] = [
  {
    publication: "The Ringer",
    image: "ringer_new-article.jpg", // Your image filename
    title: "Your Article Title Here",
    url: "https://example.com/your-article-url",
  },
  // ... existing articles
];
```

**Step 4**: Also add it to the `interviewFeatures` section (around line 313) under the correct publication:

```javascript
{
  publication: "The Ringer",
  features: [
    {
      title: "Your Article Title Here",
      url: "https://example.com/your-article-url",
    },
    // ... existing features
  ],
},
```

### 🎵 Adding Album Reviews

Album reviews are organized by publication and appear in the Reviews section.

**Step 1**: Add the album cover image to `public/albums/`
- Use a descriptive filename like `artist-album-name.jpg`
- Recommended size: 300x300 pixels (square)
- Supported formats: JPG, PNG, WebP

**Step 2**: Open `app/constants.ts` and find the `albumReviews` section (around line 91)

**Step 3**: Add your review to the appropriate publication:

```javascript
export const albumReviews: AlbumPublication[] = [
  {
    publication: "Paste Magazine",
    reviews: [
      {
        imageUrl: "new-artist-new-album.jpg", // Your image filename
        href: "https://example.com/review-url",
      },
      // ... existing reviews
    ],
  },
  // ... other publications
];
```

**To add a new publication**, create a new object:

```javascript
{
  publication: "New Publication Name",
  reviews: [
    {
      imageUrl: "album-cover.jpg",
      href: "https://example.com/review-url",
    },
  ],
},
```

### 🎤 Adding Interviews & Features

Interviews and features appear in the Interviews section, organized by publication.

**Step 1**: Add any images to `public/articles/` (if needed)

**Step 2**: Open `app/constants.ts` and find the `interviewFeatures` section (around line 313)

**Step 3**: Add your feature to the appropriate publication:

```javascript
{
  publication: "Paste Magazine",
  features: [
    {
      title: "Your Interview/Feature Title",
      url: "https://example.com/feature-url",
    },
    // ... existing features
  ],
},
```

### 🎬 Adding Production Work

Production work appears in the Production section and can include YouTube videos or external links.

**For YouTube Videos**:

**Step 1**: Open `app/constants.ts` and find the `publicationProductions` section (around line 440)

**Step 2**: Add to an existing YouTube section or create a new one:

```javascript
{
  publication: "Live from My Den",
  linkType: "youtube",
  description: "Description of your production series",
  productions: [
    "https://www.youtube.com/embed/VIDEO_ID?si=EMBED_CODE",
    // ... existing videos
  ],
},
```

**For External Links with Images**:

**Step 1**: Add thumbnail images to `public/productions/`
- Use descriptive filenames like `show-season-episode.png`
- Recommended size: 400x225 pixels (16:9 aspect ratio)

**Step 2**: Add to the productions list:

```javascript
{
  publication: "Variety - Full Production Credits",
  linkType: "link",
  description: "Live from My Den Season 6",
  links: [
    {
      href: "https://example.com/production-url",
      image: "production-thumbnail.png", // Your image filename
    },
    // ... existing links
  ],
},
```

---

## 🖼️ Managing Images

### Image Guidelines

**Article Images** (`public/articles/`):
- Size: 400x400 pixels or larger
- Format: JPG, PNG, or WebP
- Naming: `publication_article-title.jpg`

**Album Covers** (`public/albums/`):
- Size: 300x300 pixels (square)
- Format: JPG, PNG, or WebP
- Naming: `artist-album-name.jpg`

**Production Thumbnails** (`public/productions/`):
- Size: 400x225 pixels (16:9 aspect ratio)
- Format: PNG or JPG
- Naming: `show-season-episode.png`

### Adding Images

1. **Upload** your image to the appropriate folder in `public/`
2. **Name** it descriptively (no spaces, use hyphens or underscores)
3. **Reference** the exact filename in your `constants.ts` entry

---

## 🔄 Reordering Content

### Recent Work (Homepage)
The `recentWork` array controls what appears on the homepage. To reorder:
1. Open `app/constants.ts`
2. Find the `recentWork` section
3. Move items up or down in the array
4. The first item appears first on the homepage

### Album Reviews
Reviews are organized by publication, then by order within each publication's array. To reorder:
1. Find the publication in `albumReviews`
2. Move items within that publication's `reviews` array
3. To change publication order, move entire publication objects

### Interviews & Features
Features are organized by publication. To reorder:
1. Find the publication in `interviewFeatures`
2. Move items within that publication's `features` array
3. To change publication order, move entire publication objects

### Production Work
Productions are organized by type (YouTube vs. Links) and then by order. To reorder:
1. Find the production section in `publicationProductions`
2. Move items within the `productions` or `links` array

---

## ⚙️ Technical Notes

### File Locations
- **Main content file**: `app/constants.ts`
- **Images**: `public/articles/`, `public/albums/`, `public/productions/`
- **Homepage**: `app/page.tsx`
- **Reviews page**: `app/reviews/page.tsx`
- **Interviews page**: `app/interviews/page.tsx`
- **Production page**: `app/production/page.tsx`

### Important Rules
1. **Always** use the exact filename in your constants (case-sensitive)
2. **Don't** use spaces in filenames - use hyphens or underscores
3. **Test** your changes by running the development server
4. **Keep** the same structure when adding new content

### Development Commands
```bash
# Start the development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## 🆘 Need Help?

If you run into issues:

1. **Check filenames** - Make sure they match exactly in constants.ts
2. **Check image paths** - Ensure images are in the correct public folder
3. **Check syntax** - Make sure you have proper commas and brackets
4. **Test locally** - Run `npm run dev` to see your changes

Remember: This site is designed to be easy to maintain. Most updates only require editing the `constants.ts` file and adding images to the public folder!

---

## 🚀 Quick Start for Non-Technical Users

**If you just want to add content quickly:**

1. **Contact Matt** for repository access
2. **Choose your method**:
   - **Easiest**: Use GitHub web interface (no software needed)
   - **Best experience**: Download VSCode (free, easy to use)
3. **Find the file**: Look for `app/constants.ts`
4. **Follow the guides** above for your content type
5. **Save your changes**

**Need help?** Contact Matt - he can walk you through any of these methods!

---

*Last updated: January 2025*