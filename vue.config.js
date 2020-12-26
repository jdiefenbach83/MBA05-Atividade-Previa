module.exports = {
  publicPath: 
    process.env.NODE_ENV === 'production'
    ? '/MBA05-Atividade-Previa/'
    : '/',
  "transpileDependencies": [
    "vuetify"
  ]
}