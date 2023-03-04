const ghpages = require('gh-pages')

const config = {
  branch: 'gh-pages'
}

ghpages.publish('.output/public', config, function (err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('🚀 Deploy completed!')
})