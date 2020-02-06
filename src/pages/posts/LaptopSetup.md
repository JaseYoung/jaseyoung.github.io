---
path: /setup/macbook
title: Laptop Setup
date: '2020-01-10T16:20:00.000Z'
---

This guide helps to setup a macbook from fresh install, to being able to develop. The guide is aimed towards a test developer. install shell dependancies and setup tools for browser manipulation.

---

## Xcode

xcode-select —install

## Homebrew

```bash
/usr/bin/ruby -e “$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)”
```

```bash
brew install \
geckodriver \
awscli \
circleci \
cmake \
git \
thefuck \
zsh \
```

```bash
brew tap homebrew/cask-cask
```

```bash
brew cask install \
chromedriver \
1password \
alfred \
brave-browser \
firefox \
google-chrome \
iterm2 \
spectacle \
visual-studio-code \
rubymine \
fork \
spotify \
mtmr \
```

---

## Fonts

Install _Dank Mono_ latest [release](https://dank.sh/releases/)

---

## iTerm2

Change Preferences

- Profiles > General > Working Directory > Check _Reuse previous session’s directory_
- Colors > Color Presets > Import… > _Find iterm2-night-owl_ ( [Night Owl theme](https://github.com/nickcernis/iterm2-night-owl) )
- Text > Font > Change Font > _Find Dank Mono_
- Appearance > Tabs > Check _Strech tabs to fill bar_

---

## ZSH shell

Installation if you already haven’t

```bash
brew install zsh
```

Once installed we need to make it the default shell first we add it to the accepted shells

```bash
echo “/usr/local/bin/zsh” | sudo tee -a /etc/shells
```

then we can make _zsh_ our default shell

```bash
chsh -s /usr/local/bin/zsh
```

### Oh My Zsh

```bash
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

### Theme

Darcula

[Iterm Themes - Color Schemes and Themes for Iterm2](https://iterm2colorschemes.com/)

## Git

Git huh? What a tool

```
brew install git
```

Next if you’ve got one copy over .gitconfig; no? Then add your user name and email to it by doing the following

```
git config —global user.name “Your Name Here”

git config —global user.email “your_email@youremail.com”
```

Additional configuration

```
# Make sure your credential helper is configured, to avoid being asked for your password all the time

git config —global credential.helper osxkeychain

# disable fastforward in merging
git config —global —add merge.ff false
```

---

## SSH Config for Github

The next part is straight from the offical documentation.

### CHECK FOR EXISTING SSH KEYS

First, we need to check for existing SSH keys on your computer. We do this by running:

```
# Lists the files in your .ssh directory, if they exist
ls -al ~/.ssh
```

Check the directory listing to see if you have files named either id_rsa.pub or id_dsa.pub. If you don’t have either of those files then read on, otherwise skip the next section.

### GENERATE A NEW SSH KEY

If you don’t have an SSH key you need to generate one. To do that you need to run the commands below, and make sure to substitute the placeholder with your email. The default settings are preferred, so when you’re asked to “enter a file in which to save the key,”” just press Enter to continue.

```
# Creates a new ssh key, using the provided email as a label
ssh-keygen -t rsa -C “your_email@example.com”
```

### ADD YOUR SSH KEY TO THE SSH-AGENT

Run the following commands to add your SSH key to the ssh-agent.

```
eval “$(ssh-agent -s)”
```

Next you will need to modify your ~\_.ssh_config file to automatically load keys into the ssh-agent and store passphrases in your keychain:

```
Host *
  AddKeysToAgent yes
  UseKeychain yes
  IdentityFile ~/.ssh/id_rsa
```

No matter what operating system version you run you need to run this command to complete this step:

```
ssh-add -K ~/.ssh/id_rsa
```

### ADDING A NEW SSH KEY TO YOUR GITHUB ACCOUNT

The last step is to let GitHub know about your SSH key. Run this command to copy your key to your clipboard:

```
pbcopy < ~/.ssh/id_rsa.pub
```

Then go to GitHub and input your new SSH key. Paste your key in the “Key” textbox and pick a name that represents the computer you’re currently using.

---

## Node.js

Node.js is a JavaScript runtime built on Chrome’s V8 JavaScript engine. Installing _node_ with _brew_ is easy, it comes with _npm_ as the default package manager. Where as I prefer to use _yarn_ as a package manager; for working with monorepos and such.

For managing the version of node installed I use _n_ it makes switching versions really easy.

```bash
# Install node with brew
brew install node

# Install yarn with npm (yep.)
npm install -g yarn

# Install n with yarn
yarn global add n

# Install the latest *long term support* with n
sudo n lts
```

---

## THEFUCK

Installation

```bash
brew install thefuck
```

```bash
thefuck —alias | source
```

---

## Visual Studio Code

### EXTENSIONS

- [Dracula Theme](https://draculatheme.com/visual-studio-code/)

- [Material Icon Theme by Philipp Kief](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)

- [ESLint by Dirk Baeumer](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

- [Prettier by Esben Petersen](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

- [Insert relative path by MConde](https://marketplace.visualstudio.com/items?itemName=mattconde.insert-relative-path)

- [Flow Language Support by flowtype](https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode)

- [carbon-now-sh by Eric Adamski](https://marketplace.visualstudio.com/items?itemName=ericadamski.carbon-now-sh)

- [Paste JSON as Code by quicktype](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

---

## Ruby and Rubymine

```bash
\curl -sSL https://get.rvm.io | bash -s stable —ruby
source /Users/gbjajoma/.rvm/scripts/rvm
rvm use 2.6.3 --default
gem install bundler
bundle install
```

---

## CircleCi CLI

The CircleCI CLI is a command line interface that leverages many of CircleCI’s advanced and powerful tools from the comfort of your terminal. Some of the things you can do with the CircleCI CLI include:

- Debug and validate your CI config
- Run jobs locally
- Query CircleCI’s API
- Create, publish, view and manage Orbs

```bash
brew install circleci
```

---

## Alias’s

```bash
alias l="ls -la"       # List in long format, include dotfiles
alias ld="ls -ld */"   # List in long format, only directories
alias ..="cd .."
alias ...="cd ../.."
alias ....="cd ../../.."
```
