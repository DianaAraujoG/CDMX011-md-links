# Markdown Links

## Index

* [1. Features](#1-features)
* [2. Installing](#2-installing)
* [3. Using](#3-using)
* [4. CLI](#4-cli)

***

## 1. Features
* Finds file (.md | .markdown).
* Finds file (.md | .markdown) in a folder recursively.
* Finds links in a markdown file (.md | .markdown) with regular expressions.
* Validate the links by checking the response status code with the axios library.
* Stats of how many links there are, how many unique and valid.
* Runs from CLI.

## 2. Installing
* Clone the repository
```js
clone https://github.com/DianaAraujoG/CDMX011-md-links.git
```
* Install dependencies
```js
npm install
```

## 3. Using
In a project

mdlink function
```js
mdLinks.f(path, 'justLinks')
    .then((res) => {
      res.forEach((e) => {
        const file = pathLi.parse(e.file).base;
        console.log(`${chalk.magenta(file)} ${chalk.bold.green(e.href)} ${chalk.cyan(e.text)}`);
      });
    })
    .catch((err) => { console.log(err); });
```

Validate function 
```js
validate.validate(fileWithLinks)
    .then((res) => {
        resolve(res);
    })
    .catch((err) => { console.log(err); });
```

Stats function 
```js
statsFn = stats.stats(fileWithLinks, false);
```
Validate and Stats
```js
async function fn1() {
    const linksV = await validate.validate(fileWithLinks);
    const statsFn2 = stats.stats(linksV, true);
    resolve(statsFn2);
}
```

## 4. CLI

Get links
```js
# single file
md-links <path/to/file.md>

# scan all markdown files in a folder
md-links <path/to/dir>
```

Validate links
```js
md-links <path/to/dir> --validate
```

Get stats
```js
md-links <path/to/dir> --stats

# validate and return stats
md-links <path/to/dir> --validate --stats
```