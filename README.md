<center>
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</center>

<h3 align="center">Interview Tool</h3>

<center>

![CI build](https://github.com/Frankeo/interview-challenges/workflows/CI%20build/badge.svg)
![Package CD](https://github.com/Frankeo/interview-challenges/workflows/Package%20CD/badge.svg)
[![Dependabot](https://api.dependabot.com/badges/status?host=github&repo=Frankeo/interview-challenges)](https://dependabot.com)
![Coverage Status](https://img.shields.io/coveralls/github/Frankeo/interview-challenges)
![License](https://img.shields.io/github/license/Frankeo/interview-challenges)
![Last commit](https://img.shields.io/github/last-commit/Frankeo/interview-challenges)
</center>

---

<center> This repo contains a CLI tool for create, save and deploy exercises for interviews.
</center>

## :pencil: Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [New Features](#todos)
- [Authors](#authors)

## :mag: About <a name = "about"></a>

The main idea is to have a collection of easy to extract __interview code challenges__ and being able to deploy them into [codesandbox](https://codesandbox.io).

The **CLI (interview-tool)** let you create a new project with the next [scaffolding](), so you don't start form scratch!

Also, let you add/save already started projects to your interview list, following this [criteria]().

All the projects into your **interview list** are able to be deploy! you have multiple [criteria selection](), even a random one for avoiding favoritism problems! 😎

## :checkered_flag: Getting Started <a name = "getting_started"></a>

### Prerequisites

For using this CLI, needs to be installed:
![NodeJS](https://img.shields.io/node/v/interview-tool?style=for-the-badge)

### Installation

Only need to run 
```
npm install -g interview-tool
```
And that's it!! 🥳

### Debugging

- 1º Download the project and install the packages inside the project folder
```
cd interview-challenges/
npm i
```
- 2º Inside the project folder you need to create a **linksymb** to be able to run the tool globally 
```
npm link
```
- 3º Go to another location (one folder back is enough!) and check if the command **interview-tool** is available.

- 4º **That's all!** Your code changes are going to take effect over the commands executed by the tool! 🤓

## :balloon: Usage <a name="usage"></a>

For a more [detailed documentation and examples]()

```
interview-tool <command>
```

- ```add <folderName>```: Name of the folder containing the repo that you want to upload. 

- ```list```: Get all the exercises available

- ```create <projectName>```: Create a new project folder to work in locally.

- ```deploy [-p] [-t] [-d] [noTests]```: Deploy to CodeSandbox by projectName, Topic or Difficulty

- ```completion```: Follow the instructions to get autocompletion CLI tool.

## :rocket: Deployment <a name = "deployment"></a>

Github Actions for creating a [npm](https://www.npm.org) package

![Version](https://img.shields.io/github/package-json/v/Frankeo/interview-challenges)
![ReleaseDate](https://img.shields.io/github/release-date/Frankeo/interview-challenges)
![Size](https://img.shields.io/bundlephobia/min/interview-tool)
![Downloads](https://img.shields.io/npm/dm/interview-tool)

## :pick: Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment
- [Yargs](http://yargs.js.org/) - Command Parser
- [CodeSandbox](https://codesandbox.io) - Exercise release environment
- [SQLite](https://www.sqlite.org/index.html) - Local exercise DB

## :crossed_fingers: New Features <a name = "todos"></a>

:white_large_square: Adding more unit testing.

:white_large_square: Testing on Windows.

:white_large_square: Adding better log information.

:white_large_square: Adding support for generate document on readme (to PDF format) in every internal project.

:heavy_check_mark: Check project status before saving.

:white_large_square: Avoid adding duplicated projects

:white_large_square: Define general standards.

## :writing_hand: Authors <a name="authors"></a>

- [Francisco Moreno](https://github.com/Frankeo) - Idea & Initial work
