# CAESAR-CLI

This is a CLI application for

## Prerequisites

You must have the following programs installed in order to successfully install and use CAESAR-CLI:

- [Node.js](https://nodejs.org/) LTS & npm
- [git](https://git-scm.com/) CLI tool (optional)

## Installation instructions

### Clone repository

In the CLI (Windows command prompt, PowerShell, Cygwin, terminal, etc.), enter these commands to get application files from this repository:

```bash
git clone git@github.com:maksumov/task1-caesar-cipher-cli.git
```

N.B. You can get the app files without cloning the repository. To do this, just use the standard functionality of github: on the main page of the repository, click the **Code** button, and then - **Download ZIP** button. After receiving the archive with the application files, unpack it to the selected location on disk.

### Install app dependencies

In the CLI (Windows command prompt, PowerShell, Cygwin, terminal, etc.), open the directory containing the app end run following commands:

```bash
cd caesar-cli
npm install
```

## Usage

To launch the app, open the CLI, change current working directory to the **caesar-cli** folder and run the following command:

```bash
node caesar-cli <options>
```

### Options

CAESAR-CLI accepts these options (short alias and full name):

- **-a, --action**: (_required_) define the action (encode or decode)
- **-s, --shift**: (_required_) define a shift
- **-i, --input**: (_optional_) an input file
- **-o, --output**: (_optional_) an output file

You can also use these options for get additional information about **CAESAR-CLI**:

- **-h, --help**: show help & exit
- **--usage**: show usage info & exit
- **--version**: show app version & exit
