// module.exports = require('@gravity-ui/prettier-config');
module.exports = {
    experimentalTernaries: true,
    printWidth: 80,
    tabWidth: 4,
    useTabs: false,
    semi: false,
    singleQuote: false,
    quoteProps: "as-needed",
    jsxSingleQuote: false,
    trailingComma: "all",
    bracketSpacing: true,
    bracketSameLine: false,
    jsxBracketSameLine: false,
    arrowParens: "always",
    requirePragma: false,
    insertPragma: false,
    proseWrap: "preserve",
    htmlWhitespaceSensitivity: "css",
    endOfLine: "lf",
    embeddedLanguageFormatting: "auto",
    singleAttributePerLine: false,
    plugins: ["prettier-plugin-organize-imports"],
}
