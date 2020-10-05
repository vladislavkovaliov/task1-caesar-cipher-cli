# CAESAR-CLI

This is an application developed as part of the Nodejs course from RS School.

My task is to develop a program running on the [nodejs](https://nodejs.org/) platform version LTS (12.18.4 at the time of writing the program), which would allow you to encrypt and decrypt messages using the Caesar algorithm.

## Prerequisites

You must have the following programs installed in order to successfully install and use CAESAR-CLI:

- [Node.js](https://nodejs.org/) LTS & npm
- [git](https://git-scm.com/) CLI tool (optional)

You can check if you have the necessary software installed:

```bash
node -v
npm -v
```

If the necessary software is present in your PC you will see the corresponding version numbers. Make sure that the node version is at least 12.0.

## Installation instructions

### Clone repository

In the CLI (Windows command prompt, PowerShell, Cygwin, terminal, etc.), run this command to get application files from this repository:

```bash
git clone git@github.com:maksumov/task1-caesar-cipher-cli.git
```

N.B. You can get the app files without cloning the repository. To do this, just use the standard functionality of github: on the [main page](https://github.com/maksumov/task1-caesar-cipher-cli) of the repository, click the **Code** button, and then - **Download ZIP** button. After receiving the archive with the application files, unpack it to the selected location on disk.

### Install app dependencies

In the CLI (Windows command prompt, PowerShell, Cygwin, terminal, etc.), open the directory containing the app end run following commands:

```bash
cd caesar-cli
npm install
```

After successful installation `npm` show

## Usage

To launch the CAESAR-CLI, open the CLI, change current working directory to the **caesar-cli** folder and run the following command:

```bash
node caesar-cli <options>
```

Feel free to start using CAESAR-CLI with

```bash
node caesar-cli --help
```

or

```bash
node caesar-cli -h
```

or

```bash
node caesar-cli --usage
```

When you run any of these commands, you will see detailed help for using the app

```bash
Usage: node caesar-cli options

Options:
      --version   Show version number                             [boolean]
  -s, --shift     Set the shift for decode/encode data            [number] [required]
  -a, --action    Specify what action you want to perform         [required] [choices: "encode", "decode"]
  -i, --input     Specify the file where to get the data from     [string]
  -o, --output    Specify the file to save the data to            [string]
  -h, --help      Show help                                       [boolean]

Examples:
  node caesar-cli --shift=7 --action=encode        Encode data from stdin with shift 7 and print result to stdout
  node caesar-cli -s 2 -a decode -i topsecret.txt  Decode topsecret.txt with shift 2 and print result to stdout

(c) 2020 Marat Maksumov
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
