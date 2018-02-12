exports.extractMetaData = function(markdown) {
  // [\s\S] matches all whitespace + non whitespace characters
  // * means 0 or more occurances of the preceding item
  const regContentSection = /---[\s\S]*---/
  const regMatch = markdown.match(regContentSection)

  // g flag in regex replaces all occurances
  const jsonStr = regMatch[0].replace(/---\n|\n---/g, '')
  const metaData = JSON.parse(jsonStr)

  let body = markdown.replace(regContentSection, '')

  // regex to remove the first new line break
  body = markdown.replace(/^\s+|\s+$/g, '')

  return {
    metaData,
    body
  }
}
