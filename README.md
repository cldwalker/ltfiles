## Description

This is my Light Table User plugin a.k.a. dotfiles which recreates LT as I use it. This will pull in my keys,
behaviors, commands and plugins.  While my workflow is centered around vim, clojure(script) and web
development, you may find other useful tidbits.

## Install

To set this up on a Mac:

```sh
# Backup your existing User
$ mv ~/Library/Application\ Support/LightTable/plugins/User{,.bak}
$ git clone https://github.com/cldwalker/ltfiles
$ cd ltfiles; ./install.sh
```

## Usage

* To use any custom commands, `Ctrl-Space` and search for 'User'.
* Plugins I use will be in plugin.edn.

## Bugs/Issues

Please report them on [github](https://github.com/cldwalker/ltfiles).

## License
See LICENSE.txt
