export const state = () => ({
  locales: ['en', 'zh-cn', 'zh-hant'],
  locale: 'zh-cn',
  isSmallScreen: false // 是否为小屏
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  },
  SET_IS(state, isSmallScreen) {
    state.isSmallScreen = isSmallScreen
  }
}
