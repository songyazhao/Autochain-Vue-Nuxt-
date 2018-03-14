export default function ({ isHMR, app, store, route, params, error, redirect }) {
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  const locale = params.lang || 'zh-cn'
  if (store.state.locales.indexOf(locale) === -1) {
    return error({ message: 'This page could not be found.', statusCode: 404 })
  }
  // Set locale
  store.commit('SET_LANG', locale)
  app.i18n.locale = store.state.locale
  // If route is /zh-cn/... -> redirect to /...
  if (locale === 'zh-cn' && route.fullPath.indexOf('/zh-cn') === 0) {
    return redirect(route.fullPath.replace(/^\/zh-cn/, '/'))
  }
}
