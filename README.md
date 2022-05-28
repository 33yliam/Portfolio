
# William's Portfolio

<br />
<div align="center">
  <a href="">
    <img src="/public/yliam.png" alt="Logo" width="80" height="80">
  </a>
  <h3 align="center">Code template for <a href="https://www.33yliam.com">www.33yliam.com</a></h3>
    <p align="center">
    Built using React and Tailwind CSS
  </p>
</div>

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/33yliam/Portfolio.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
3. Run the project
     ```sh
   npm run start
   ```


## Project Structure
```
src
├── index.js
├── App.js - Homepage '/'
├── views - About page, and individual project page
│   └── themes - CSS styles for each project
├── components
│   ├── navbar
│   │   ├──  NavBar.js - Sidebar
│   │   └──  MobileNav.js - Burger menu
│   ├──  projects
│   │    ├──  ProjectData.js - Info about each project (returns an array)
│   │    └──  ProjectList.js
│   ├──  skills
│   │    ├──  SkillsData.js
│   │    └──  SkillsList.js
│   ├──  others
│   │    ├──  SwitchTheme.js
│   │    ├──  OtherFunctions.js - getWindowSize (for navbar menu type)
│   │    └──  SwitchTheme.css
│   └──  Hero.js
├── styles
│   ├──  MobileNav.css
│   ├──  PathChangedLoading.css
│   ├──  ProjectList.css
│   ├──  Scrollbar.css
│   └──  Sidebar.css
└── strings.js - image paths, colors, and others.
```