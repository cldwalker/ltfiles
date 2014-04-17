## Description

These are my LightTable dotfiles which recreate LT as I use it. This will pull in my keys,
behaviors, commands and plugins.  While my workflow is centered around vim, clojure(script) and web
development, you may find other useful tidbits.

## Install

To set this up on a Mac:

```sh
$ git clone https://github.com/cldwalker/ltfiles ~/Library/Application\ Support/LightTable/plugins
$ cd ~/Library/Application\ Support/LightTable/plugins/ltfiles
# If you have existing settings, back them up
$ mv ../../settings{,.bak}
$ ln -s $PWD/settings $PWD/../../settings
# just for snippets plugin
ln -s $PWD/snippets $PWD/../../snippets
```

## Usage

* To use any custom commands, `Ctrl-Space` and search for 'ltfiles'.
* Plugins I use will be in plugin.edn.
* Behavior and keys are in settings/.

## Bugs/Issues

Please report them on [github](https://github.com/cldwalker/ltfiles).

## License
See LICENSE.txt
