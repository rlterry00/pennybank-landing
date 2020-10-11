module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-google-analytics/gatsby-browser.js'),
      options: {"plugins":[],"trackingId":"UA-148947018-1"},
    },{
      plugin: require('../node_modules/gatsby-plugin-facebook-pixel/gatsby-browser.js'),
      options: {"plugins":[],"pixelId":"3147824358599083"},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"name":"Penny Bank","short_name":"Landing","start_url":"/pennybank-landing/","background_color":"#F6E775","theme_color":"#F6E775","display":"standalone","icon":"src/assets/images/Pennybank_logo_Fill.png","cache_busting_mode":"query","include_favicon":true,"legacy":true,"theme_color_in_head":true,"cacheDigest":"f82c60ea42f00aafc25e3537c07d6ab2"},
    },{
      plugin: require('../node_modules/gatsby-plugin-offline/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"maxWidth":590},
    },{
      plugin: require('../gatsby-browser.js'),
      options: {"plugins":[]},
    }]
