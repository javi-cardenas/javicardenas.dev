# Mac Setup for Development
## TODO
Follow this guide: https://www.taniarascia.com/setting-up-a-brand-new-mac-for-development/

*Last Updated: 07/07/25*

*Published: 07/07/25*

This guide has been updated for macOS 15 Sequoia and contains the following:
## TODO
Page links on this guide to items like Git, GitHub, Node, etc.

## Homebrew
Install the [Homebrew](https://brew.sh/) package manager, this is used to install most apps from the CLI.
`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`

### Install Apps
## TODO
Finish this table
|Application|Purpose|
|:-|:-|
|Obsidian|notes|
|PostgreSQL|database|
|Spotify|music|

```shell
# shell program
brew install git

# GUI programs
brew install --cask \
  obsidian \
  postgres \
  spotify \
```

# Git
```
[user]
  name   = Javi Cardenas
  email  = private+username@users.noreply.github.com
[github]
  user   = javi-cardenas
[alias]
  a      = add . -p
  cm     = commit -m
  s      = status
  p      = push
  co     = checkout
  fp     = fetch --prune --all
  l      = log --oneline --decorate --graph
[push]
        autoSetupRemote = true
```

# GitHub
## TODO
Create a new repo for documentation. Set these up for all repos...
1. GitHub Actions
2. Git Hooks
3. Git Ignore

# Install Node Version Manager (nvm)
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash`
