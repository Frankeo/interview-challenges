<p align="center">
  <a href="" rel="noopener">
 <img width=200px height=200px src="https://i.imgur.com/6wj0hh6.jpg" alt="Project logo"></a>
</p>

<h3 align="center">Interview Code Challenge</h3>

<div align="center">

[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](/LICENSE)

</div>

---

<p align="center"> This repo contains a CLI tool for create, deploy and save a exercises for interview.
    <br> 
</p>

## 📝 Table of Contents

- [About](#about)
- [Getting Started](#getting_started)
- [Usage and Extension](#usage)
- [Deployment](#deployment)
- [Built Using](#built_using)
- [Authors](#authors)

## 🧐 About <a name = "about"></a>

The main idea is to have a collection of easy to extract interview katas and being able to deploy into codesandbox.io.

For achieving this goal, this repo is going to be a **Tool (Interview CLI)**, in which you are going to be able to choose a project (with or without test already resolved), or pick certain level of difficulty or topic as criteria and the tool chooses a random kata and deploy it.

## 🏁 Getting Started <a name = "getting_started"></a>

### Prerequisites

For running this repository, you only need **Node Js**

### Installing

First, you need to download the project and install the packages
```
npm i
```
Second, inside the project folder you need to create a linksymb to be able to run the tool globally 
```
npm link
```
Third, go to another location (one folder back is enough) and check if the command **interview-tool** is available.

## 🎈 Usage and Extension <a name="usage"></a>

```
interview-tool <command>
```

- ```add <folderName>```: Name of the folder containing the repo that you want to upload

- ```list```: Get all the katas/exercise available

- ```list```: Get all the katas/exercise available

- ```create <projectName>```: Create a new project folder to work in locally.

- ```deploy [-p] [-t] [-d]```: Deploy to CodeSandbox by projectName, Topic or Difficulty

- ```completion```: Follow the instructions to get autocompletion CLI tool.

## 🚀 Deployment <a name = "deployment"></a>

Add Github actions for running every little project tests.
- [ ] NOT implemented

## ⛏️ Built Using <a name = "built_using"></a>

- [NodeJs](https://nodejs.org/en/) - Server Environment

## ✍️ Authors <a name = "authors"></a>

- [Francisco Moreno](https://github.com/Frankeo) - Idea & Initial work
