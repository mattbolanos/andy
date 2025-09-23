# 🎵 Andy Steiner's Portfolio Site

This guide will help you understand how to keep the site updated with new content, whether you're adding articles, album reviews, interviews, or production work.

## 📋 Table of Contents

- [🚀 Getting Started](#getting-started)
- [✏️ How to Edit Files](#how-to-edit-files)
- [🏗️ Understanding the Site Structure](#understanding-the-site-structure)
- [✨ Adding New Content](#adding-new-content)
  - [📰 Adding Articles](#adding-articles)
  - [🎵 Adding Album Reviews](#adding-album-reviews)
  - [🎤 Adding Interviews & Features](#adding-interviews--features)
  - [🎬 Adding Production Work](#adding-production-work)
- [🖼️ Managing Images](#managing-images)
- [🔄 Reordering Content](#reordering-content)
- [Technical Notes](#technical-notes)

---

## 🚀 Getting Started

The site is organized into four main sections:

- **Home** - Recent work and personal info
- **Interviews** - Published interviews and features
- **Reviews** - Album reviews organized by publication
- **Production** - Video productions and creative work

All content is managed through a single file called `constants.ts`, making it easy to add and organize new work.

---

## ✏️ How to Edit Files

This guide will walk you through setting up everything you need to edit the website files. We'll use **Visual Studio Code (VSCode)** - a free, user-friendly program that makes editing code easy.

### 🖥️ Step 1: Download and Install VSCode

**What is VSCode?** It's a free program that helps you edit code files. Think of it like Microsoft Word, but for websites.

1. Go to [code.visualstudio.com](https://code.visualstudio.com)
2. Download it. It's free
3. Run the installer and follow the setup wizard
4. Open VSCode when installation is complete

### 🔑 Step 2: Get Access to the Repository

**What is a repository?** It's like a folder in the cloud where all the website files are stored.

1. Contact **Matt** and ask for "collaborator access to the repository"
2. Matt will add you as a collaborator

### 📥 Step 3: Clone the Repository (Download the Files)

**What is cloning?** It's like downloading a copy of all the website files to your computer.

1. **Open VSCode**
2. **Press `Ctrl+Shift+P` (Windows) or `Cmd+Shift+P` (Mac)**
3. **Type "Git: Clone"** and press Enter
4. **Paste the repository URL** https://github.com/mattbolanos/andy
5. **Choose a folder** on your computer to save the files (like Desktop or Documents)
6. **Wait for the download** to complete

**You should now see all the website files in the left sidebar**

### ✏️ Step 4: Edit the Constants File

1. **In the left sidebar**, click on the `app` folder
2. **Click on `constants.ts`** - this is the main file you'll edit
3. **Make your changes** following the guides below
4. **Press `Ctrl+S` (Windows) or `Cmd+S` (Mac)** to save

### 📤 Step 5: Push Your Changes (Upload to the Website)

**What is pushing?** It's like uploading your changes back to the cloud so the website updates.

1. **Look for the Source Control icon** in the left sidebar (looks like a branch/fork)
2. **Click on it**
3. **You'll see your changes** listed under "Changes"
4. **Type a message** in the box (like "Added new article about Taylor Swift")
5. **Click the checkmark** (✓) next to your message
6. **Click the "..." menu** and select "Push"

**That's it! Your changes are now live on the website!**

### 📥 Step 6: Pull Latest Changes (Get Updates from Others)

**What is pulling?** It's like downloading the latest changes that Matt or others have made.

**Always do this before you start editing:**

1. **Click the Source Control icon** in the left sidebar
2. **Click the "..." menu** and select "Pull"
3. **Wait for it to complete**

**This ensures you have the latest version before making changes!**

### 🔄 Your Daily Workflow

**Every time you want to add content:**

1. **Pull latest changes** (Step 6)
2. **Edit the constants.ts file** (Step 4)
3. **Push your changes** (Step 5)

**That's it! The website will update automatically.**

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

### 📋 Content Organization

The `constants.ts` file is now organized into clear sections:

- **`recentArticles`** - Articles that appear on the homepage
- **`albumReviews`** - Album reviews organized by publication
- **`interviewFeatures`** - Interviews and features organized by publication
- **`youtubeProductions`** - YouTube videos (embedded)
- **`linkProductions`** - External links with thumbnails

### 🔧 Helper Functions

The file now includes helper functions to make content management easier:

- `getArticlesByPublication(publication)` - Get all articles from a specific publication
- `getReviewsByPublication(publication)` - Get all reviews from a specific publication
- `getFeaturesByPublication(publication)` - Get all features from a specific publication
- `getReviewPublications()` - Get list of all publications with reviews
- `getFeaturePublications()` - Get list of all publications with features

---

## ✨ Adding New Content

### 📰 Adding Articles

Articles appear on the homepage under "Recent Work" and in the Interviews section.

**Step 1**: Add your article image to the `public/articles/` folder

- Use a descriptive filename like `publication_article-title.jpg`
- Recommended size: 400x400 pixels or larger
- Supported formats: JPG, PNG, WebP

**Step 2**: Open `app/constants.ts` and find the `recentArticles` section (around line 50)

**Step 3**: Add your new article to the list:

```javascript
export const recentArticles: Article[] = [
  {
    publication: "The Ringer",
    image: "ringer_new-article.jpg", // Your image filename
    title: "Your Article Title Here",
    url: "https://example.com/your-article-url",
  },
  // ... existing articles
];
```

**Step 4**: Also add it to the `interviewFeatures` section (around line 200) under the correct publication:

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

**Step 2**: Open `app/constants.ts` and find the `albumReviews` section (around line 100)

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

**Step 2**: Open `app/constants.ts` and find the `interviewFeatures` section (around line 200)

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

**Step 1**: Open `app/constants.ts` and find the `youtubeProductions` section (around line 300)

**Step 2**: Add to an existing YouTube section or create a new one:

```javascript
export const youtubeProductions: YouTubeProduction[] = [
  {
    publication: "Live from My Den",
    description: "Description of your production series",
    productions: [
      "https://www.youtube.com/embed/VIDEO_ID?si=EMBED_CODE",
      // ... existing videos
    ],
  },
];
```

**For External Links with Images**:

**Step 1**: Add thumbnail images to `public/productions/`

- Use descriptive filenames like `show-season-episode.png`
- Recommended size: 400x225 pixels (16:9 aspect ratio)

**Step 2**: Add to the link productions list:

```javascript
export const linkProductions: LinkProduction[] = [
  {
    publication: "Variety - Full Production Credits",
    description: "Live from My Den Season 6",
    links: [
      {
        href: "https://example.com/production-url",
        image: "production-thumbnail.png", // Your image filename
      },
      // ... existing links
    ],
  },
];
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

The `recentArticles` array controls what appears on the homepage. To reorder:

1. Open `app/constants.ts`
2. Find the `recentArticles` section
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

---

## 🆘 Need Help?

If you run into issues:

1. **Check filenames** - Make sure they match exactly in constants.ts
2. **Check image paths** - Ensure images are in the correct public folder
3. **Check syntax** - Make sure you have proper commas and brackets
4. **Test locally** - Run `npm run dev` to see your changes

Remember: This site is designed to be easy to maintain. Most updates only require editing the `constants.ts` file and adding images to the public folder!

---

## 🚀 Quick Start Guide

**If you just want to add content quickly:**

1. **Contact Matt** for repository access
2. **Download VSCode** from [code.visualstudio.com](https://code.visualstudio.com)
3. **Follow Steps 1-6** in the "How to Edit Files" section above
4. **Find the file**: Look for `app/constants.ts`
5. **Follow the guides** below for your content type
6. **Push your changes** to update the website

**Need help?** Contact Matt - he can walk you through the setup process!

---
