# Typescript Threat Intelligent Dashboard 

In this portfolio, I made my first TypeScript project, inspired by the concept inspired by **Ivan Lourenço Gomes** Complete Web Design Course on Udemy.
I customized it to my idea of a **Cybersecurity twist* - transforming it into a **Intrusive Detection System style Dashboard** that list the current threat, their severity and the system that was affected  

## Overview  🔍 
What I did was simulate a simple threat intelligence dashboard in which the data is fetched from a mock JSON source (simulating an external API source)
and rendering the table with the information that was given in the HTML using TypeScript

## Tech used 🧰 
- **TypeScript** for logic and data handling
- **HTML & CSS** for the interface
- **JSON** this was used for a dataset of some sort to pretend that its API threat data

## Features ⚙️ 
- Displays the threat ids, their name, severity, what/where it happened, and log sources
- Generate table rows with JSON dataset
- Ts will check and ensures a clean, reliabale codes
- Uses basic **DOM** to render data

## What I learned 📚
- I learned how module and compilation worked in TS (like tsconfig.json)
- How to create a dataset that can be used as a API source 
- Workflow from typscript → compiled JavaScript → HTML  

## Layout Strcutures 🗂️

src/
 ├── data.ts        # Simulated JSON data (like an API response)
 ├── index.ts       # Main TypeScript logic
dist/
 ├── data.js        # Compiled JavaScript (from data.ts)
 ├── index.js       # Compiled JavaScript (from index.ts)
index.html          # Webpage that displays the threat table
styles.css          # Table styling
tsconfig.json       # TypeScript compiler configuration
package.json        # Project dependencies & metadata

Again thanks for checking out my project if anyone read this far!
My journey to becoming a web developer is just beginning, this was one of many steps to go into TypeScript and real-world coding beyond tutorials. 🚀  


  
