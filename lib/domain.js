"use strict"

// http://docs.aws.amazon.com/AWSECommerceService/latest/DG/Locales.html

const DOMAIN = {
    BR: 'webservices.amazon.com.br',
    CA: 'webservices.amazon.ca',
    CN: 'webservices.amazon.cn',
    FR: 'webservices.amazon.fr',
    DE: 'webservices.amazon.de',
    IN: 'webservices.amazon.in',
    IT: 'webservices.amazon.it',
    JP: 'webservices.amazon.co.jp',
    MX: 'webservices.amazon.com.mx',
    ES: 'webservices.amazon.es',
    UK: 'webservices.amazon.co.uk',
    US: 'webservices.amazon.com'
}

const DEFAULT_DOMAIN = DOMAIN['UK']

exports.getDoamin = function(locale){
    return DOMAIN[locale] || DEFAULT_DOMAIN
}
exports.DEFAULT_DOMAIN = DEFAULT_DOMAIN