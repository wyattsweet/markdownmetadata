# Metamarkdown 

This package exposes a function which lets you add metadata to your markdown file.

Format your markdown file with 3 dashes, your meta data formatted as json, 3 more dashes, then the body of your file.

```markdown
---
{
  "title": "My Blog Post",
  "date": "January 15, 2017",
  "tags": ["javascript", "web development", "markdown"],
  "author": "Wyatt Sweet"
}
---

# My Blog Post

Here is the body of my post
```

In Node, you can read this file from the filesystem and pass it to the function like so

```js
const markdownMetaData = require('metamarkdown');

fs.readFile(
  path.join(__dirname, 'file.md'),
  { encoding: 'utf8' },
  (err, data) => {
    const parsedMD = markdownMetaData(data);
  }
);
```

In the above example `parsedMD` will equal an object with 2 properties `metaData` and `body`.

```js
// parsedMD

{
  metaData: {
    title: "My Blog Post",
    date: "January 15, 2017",
    tags: ["javascript", "web development", "markdown"],
    author: "Wyatt Sweet"
  },
  body: "#My Blog Post\nHere is the body of my post"
}
```
