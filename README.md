boose
=================

```bash
touch ~/.aliases
echo "#aliases" >> ~/.zshrc
echo "source $HOME/.aliases" >> ~/.zshrc
echo "alias boose=\"$(pwd)/bin/run.js\"" >> ~/.zshrc
```


A new CLI generated with oclif


[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/boose.svg)](https://npmjs.org/package/boose)
[![Downloads/week](https://img.shields.io/npm/dw/boose.svg)](https://npmjs.org/package/boose)


<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g boose
$ boose COMMAND
running command...
$ boose (--version)
boose/0.0.0 darwin-arm64 node-v22.20.0
$ boose --help [COMMAND]
USAGE
  $ boose COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`boose hello PERSON`](#boose-hello-person)
* [`boose hello world`](#boose-hello-world)
* [`boose help [COMMAND]`](#boose-help-command)
* [`boose plugins`](#boose-plugins)
* [`boose plugins add PLUGIN`](#boose-plugins-add-plugin)
* [`boose plugins:inspect PLUGIN...`](#boose-pluginsinspect-plugin)
* [`boose plugins install PLUGIN`](#boose-plugins-install-plugin)
* [`boose plugins link PATH`](#boose-plugins-link-path)
* [`boose plugins remove [PLUGIN]`](#boose-plugins-remove-plugin)
* [`boose plugins reset`](#boose-plugins-reset)
* [`boose plugins uninstall [PLUGIN]`](#boose-plugins-uninstall-plugin)
* [`boose plugins unlink [PLUGIN]`](#boose-plugins-unlink-plugin)
* [`boose plugins update`](#boose-plugins-update)

## `boose hello PERSON`

Say hello

```
USAGE
  $ boose hello PERSON -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ boose hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [src/commands/hello/index.ts](https://github.com/scripts/boose/blob/v0.0.0/src/commands/hello/index.ts)_

## `boose hello world`

Say hello world

```
USAGE
  $ boose hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ boose hello world
  hello world! (./src/commands/hello/world.ts)
```

_See code: [src/commands/hello/world.ts](https://github.com/scripts/boose/blob/v0.0.0/src/commands/hello/world.ts)_

## `boose help [COMMAND]`

Display help for boose.

```
USAGE
  $ boose help [COMMAND...] [-n]

ARGUMENTS
  [COMMAND...]  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for boose.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v6.2.33/src/commands/help.ts)_

## `boose plugins`

List installed plugins.

```
USAGE
  $ boose plugins [--json] [--core]

FLAGS
  --core  Show core plugins.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ boose plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.50/src/commands/plugins/index.ts)_

## `boose plugins add PLUGIN`

Installs a plugin into boose.

```
USAGE
  $ boose plugins add PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into boose.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BOOSE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BOOSE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ boose plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ boose plugins add myplugin

  Install a plugin from a github url.

    $ boose plugins add https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ boose plugins add someuser/someplugin
```

## `boose plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ boose plugins inspect PLUGIN...

ARGUMENTS
  PLUGIN...  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ boose plugins inspect myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.50/src/commands/plugins/inspect.ts)_

## `boose plugins install PLUGIN`

Installs a plugin into boose.

```
USAGE
  $ boose plugins install PLUGIN... [--json] [-f] [-h] [-s | -v]

ARGUMENTS
  PLUGIN...  Plugin to install.

FLAGS
  -f, --force    Force npm to fetch remote resources even if a local copy exists on disk.
  -h, --help     Show CLI help.
  -s, --silent   Silences npm output.
  -v, --verbose  Show verbose npm output.

GLOBAL FLAGS
  --json  Format output as json.

DESCRIPTION
  Installs a plugin into boose.

  Uses npm to install plugins.

  Installation of a user-installed plugin will override a core plugin.

  Use the BOOSE_NPM_LOG_LEVEL environment variable to set the npm loglevel.
  Use the BOOSE_NPM_REGISTRY environment variable to set the npm registry.

ALIASES
  $ boose plugins add

EXAMPLES
  Install a plugin from npm registry.

    $ boose plugins install myplugin

  Install a plugin from a github url.

    $ boose plugins install https://github.com/someuser/someplugin

  Install a plugin from a github slug.

    $ boose plugins install someuser/someplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.50/src/commands/plugins/install.ts)_

## `boose plugins link PATH`

Links a plugin into the CLI for development.

```
USAGE
  $ boose plugins link PATH [-h] [--install] [-v]

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help          Show CLI help.
  -v, --verbose
      --[no-]install  Install dependencies after linking the plugin.

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ boose plugins link myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.50/src/commands/plugins/link.ts)_

## `boose plugins remove [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ boose plugins remove [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ boose plugins unlink
  $ boose plugins remove

EXAMPLES
  $ boose plugins remove myplugin
```

## `boose plugins reset`

Remove all user-installed and linked plugins.

```
USAGE
  $ boose plugins reset [--hard] [--reinstall]

FLAGS
  --hard       Delete node_modules and package manager related files in addition to uninstalling plugins.
  --reinstall  Reinstall all plugins after uninstalling.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.50/src/commands/plugins/reset.ts)_

## `boose plugins uninstall [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ boose plugins uninstall [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ boose plugins unlink
  $ boose plugins remove

EXAMPLES
  $ boose plugins uninstall myplugin
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.50/src/commands/plugins/uninstall.ts)_

## `boose plugins unlink [PLUGIN]`

Removes a plugin from the CLI.

```
USAGE
  $ boose plugins unlink [PLUGIN...] [-h] [-v]

ARGUMENTS
  [PLUGIN...]  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ boose plugins unlink
  $ boose plugins remove

EXAMPLES
  $ boose plugins unlink myplugin
```

## `boose plugins update`

Update installed plugins.

```
USAGE
  $ boose plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v5.4.50/src/commands/plugins/update.ts)_
<!-- commandsstop -->
