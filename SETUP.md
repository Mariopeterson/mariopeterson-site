# Setup (about ten minutes)

1. On github.com, create a new public repo: mariopeterson-site (no README, no .gitignore; we bring our own).

2. In a terminal:

   git clone https://github.com/mariopeterson/Projects.git mariopeterson-site
   cd mariopeterson-site
   git remote set-url origin https://github.com/mariopeterson/mariopeterson-site.git

   This gives you the Korea site as the starting point with its history intact.

3. Copy these four files into the folder root:
   CLAUDE.md, content.md, .gitignore, SETUP.md

4. Make the reference folder and copy in from Dropbox:
   mkdir reference
   Drag "Noble Desktop/Class Files" and "Noble Desktop/PDFs of Class (Infrastructure)" into reference/
   (It's gitignored. Check with: git status → reference/ should not appear.)

5. Commit and push:
   git add .
   git commit -m "Add site spec, content, and gitignore"
   git push -u origin main

6. On github.com: repo Settings > Pages > Source: Deploy from branch, main, root. Save.
   Live in a minute at mariopeterson.github.io/mariopeterson-site/

7. Open the folder in VS Code. Open Claude Code. First prompt:

   Read CLAUDE.md and content.md. Then describe, in three sentences, how you would apply the Style section to the existing index.html without changing its structure. Don't write code yet.

   Approve or correct the description, then:

   Do it, on a branch called restyle. Fonts, palette, spacing, hairline rules, section labels. Remove the Korea images and copy but keep every section and component in place. Stop when done.

8. Fill in the TODOs in content.md in parallel. The positioning line and the timeline are the two that matter most.

Later: buy the domain and point it at Pages (Settings > Pages > Custom domain).
