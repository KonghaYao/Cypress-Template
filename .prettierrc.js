/**
 * 使用 // prettier-ignore  可以对下一行的代码禁用 prettier 格式化
 * 使用 \/*prettier-ignore*\/  可以对下一块的代码禁用 prettier 格式化
 * 使用 prettier-ignore-start  和  prettier-ignore-end  可以对某个区域禁用 prettier 格式化
 */
/** @type {import('prettier').Config} */
module.exports = {
    /**
     * （默认：always）单个参数的情况下，箭头函数是否的参数是否使用括号包裹
     * always: 永远都用括号包裹
     * avoid: 单个参数下不用括号包裹
     */
    arrowParens: 'always',
    /**
     * （默认：true）是否在对象的大括号内的两侧加空格
     */
    bracketSpacing: true,
    /** （默认：false）JSX中的标签内容多行的情况下，标签尾部的尖括号是否不换到下一行 */
    bracketSameLine: true,
    /**
     * (默认：auto)prettier是否自动格式化嵌入代码（比如js中的html模板，或者md中的引用代码）
     */
    embeddedLanguageFormatting: 'auto',
    /**
     * （默认：lf）行尾换行符
     * lf: \n
     * crlf: \r\n
     * cr: \r
     * auto: 保持现有的结束符（以第一行为标准）
     */
    endOfLine: 'lf',
    /**
     * (默认：css)在HTML中对空格是否敏感
     * css：尊重css中display的属性值，来切换是否敏感. 对于Handlebars来说，和strict等同.
     * strict：标签周围的空格被认为是重要的（要被检查）
     * ignore：标签周围的空格，被认为是可以忽略的
     */
    htmlWhitespaceSensitivity: 'ignore',
    /**
     * （默认：false）是否允许插入一行新的行来添加 @format 这类的局部prettier格式化标记
     */
    insertPragma: false,
    /** @deprecated 已废弃，使用bracketSameLine替代 */
    // jsxBracketSameLine: true,
    /** （默认：false）JSX中是否使用单引号包裹属性 */
    jsxSingleQuote: false,
    /** （默认：80）一行最长多少个字符 */
    printWidth: 120,
    /**
     * （默认：preserve）标记语言中的Prop是否需要换行
     * always：超过最大长度就一定换行
     * never：不换行
     * preserve：保持原状
     */
    proseWrap: 'always',
    /**
     * (默认：as-need)对象中的Prop是否要用引号包裹
     * as-needed：需要包才包
     * consistent：有一个需要包，就都包
     * preserve：尊重现有的使用情况
     */
    quoteProps: 'consistent',
    /**
     * (默认： false)是否仅对文件头部有多行注释：@prettier 或者 @format 的文件启用prettier
     */
    requirePragma: false,
    /** (默认：true)段尾是否加分号 */
    semi: true,
    /** (默认：false)是否使用单引号替代双引号 */
    singleQuote: true,
    /** （默认：2）默认缩进几个空格 */
    tabWidth: 4, // 以后要改成4了
    /**
     * (默认：es5)什么情况下加尾逗号
     * es5： 只在ES5中有效的地方（数组、对象）上加尾逗号，TS的类型上不加
     * none: 不加尾逗号
     * all: 所有情况都加尾逗号
     */
    trailingComma: 'all',
    /** （默认：false）是否用tab替代空格 */
    useTabs: false,
    /**
     * （默认：false）是否缩进vue文件下的script和style标签下的内容
     */
    vueIndentScriptAndStyle: false,
};
