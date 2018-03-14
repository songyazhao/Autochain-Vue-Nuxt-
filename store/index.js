export const state = () => ({
  locales: ['en', 'zh-cn', 'zh-hant'],
  locale: 'zh-cn'
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.indexOf(locale) !== -1) {
      state.locale = locale
    }
  }
}
