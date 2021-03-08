module.exports = {
  title: '好成绩',

  /**
   * @type {boolean} true | false
   * @description 是否显示设置右侧面板
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否需要tagsView
   */
  tagsView: true,

  /**
   * @type {boolean} true | false
   * @description 是否固定header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description 是否在侧边栏中显示logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description Need show err logs component.
   * 默认值仅在生产环境中使用
   * 如果你也想在dev中使用它，你可以通过['production'， 'development']
   */
  errorLog: 'production'
}
