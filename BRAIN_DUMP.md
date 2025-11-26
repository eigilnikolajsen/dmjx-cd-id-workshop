# DMJX CD ID Workshop

Groups of 4-5 with both CD and ID, approx. 10-15 groups

```sh
whoami
# > eini
```

I'm Eigil Nikolajsen
Interactive Design 20-23
Creative Technologist @ Kontrapunkt
I'm the only one to code in Kontrapunkt
Survivership bias

I don't want to speak too much, I'd you get your hands dirty as quickly as possible

## Introduction

This workshop is about picking up new tools and experimenting with them
Code is the most raw tool with the most flexible medium for creating
But it is also the most difficult one to learn, because the possibilities are endless
A clean file tree is the ultimate blank canvas

## Language

The whole coding world is in English, so I'll likely mix Danish and English
I don't know coding terms in Danish, so I'll use the English ones.

I've had to strike a balance between CD not being bored, but the learning curve not being too steep for ID

## Rules

- Please ask me and your classmates all the stupid questions.
- If there's something you don't understand, have someone explain it, but insist on doing the thing yourself.
- Always put filenames in kebab case: name-of-file.pdf

## My hope for the workshop

- You can form a better opinion the more you've tested (you love it more, or you hate it more).
- I don't want to force you to use code in the future, but school is the best place to fuck around and find out.
- The more tools you know, the easier it becomes to use the best tool for the job.
- The most important lesson is to improve at learning.
- The more things you learn, the less things there are left to learn.
- Be serious about learning the skill of learning.
- Look at new tools with excitement instead of being intimidated.

I want to you to use the same tools as the expert — me
I want to show production ready code, like I would write it.

How to win:

1. Every time you encounter a term you haven't heard before, write it in the list
2. The one to furthest (or finish first)

## Tips

- Move through text word by word by holding `⌥ option` while using left and right arrow keys. Move to start/end with `⌘ command`
- Move lines of code up and down by holding `⌥ option` while using up and down arrow keys.
- Use multiple cursors by holding `⌥ option` while clicking a different place in the code

## On AI

Do use AI:

- For advice
- To explain complext concepts
- To compare technologies
- For side quests and automation

Never use AI:

- To write the main logic
- To architect your code

### 1. Install a terminal (I recommend Warp or Ghostty)

Open a new terminal window and create a new folder in your root with

```sh
# make a directory in root (~ = /Users/[user]/) called Developer
mkdir ~/Developer

# change directory to the new Developer directory
cd ~/Developer
```

Verify that the new folder exists with Finder.
I suggest pinning the folder to _Favourites_.

### 2. Install homebrew using the terminal

Find out how by yourself. Verify with

```sh
brew --version
# > Homebrew 5.0.2
```

### 3. Install git using homebrew

Find out how yourself. Verify with

```sh
git --version
# > git version 2.51.2
```

### 4. Install bun using homebrew

Find out how yourself. Verify with

```sh
bun --version
# > 1.3.2
```

### 5. Create a GitHub profile

Create a new repository (maybe `shecanplay-visual-identity`)

### 6. Install GitHub CLI using homebrew and login

Use the CLI to find out how to login. Always start with

```sh
gh --help
```

And go from there

### 7. Clone the starter repo and connect it to GitHub

Open the `~/Developer` directory in a terminal and

```sh
# clone the starter project using GitHub CLI
gh repo clone eigilnikolajsen/canvas-starter

# rename the repo using the move command
mv ./canvas-starter ./shecanplay-visual-identity

# change directory to the new one
cd ./shecanplay-visual-identity

# remove git to start fresh
rm -rf .git

# initialize fresh git repo
git init

# stage all files
git add --all

# commit staged files with comment "init"
git commit -m "init"
```

### 8. Install VS Code, Cursor, Antigravity, or some other VS Code fork

Open the project in the editor and go expore the structure and contents of the project.

Install these extensions

- Prettier (for formatting code; e.g. making it look pretty)
- Oxc (for linting; this is more advanced, but give it a go)
- Tailwind CSS IntelliSense (improve Tailwind experience)

### 9. Follow the instructions in the project's `README.md` to get started

### 10. Write some new code and verify the changes work

Stage, commit and push your new code

```sh
# pull remote changes to local environment (no-op if you're working alone)
git pull

# stage all changes
git add --all

# commit changes with a comment
git commit -m "feat: new pattern"

# push the commit to remote
git push
```

Repeat this step until satisfied.

### 12. Deploy to Netlify
