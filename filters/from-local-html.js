var cheerio = require('cheerio');
var marked = require('marked');
var fs = require('fs');

function apply(params, next)
{
    var chap = params.chap;
    var html = fs.readFileSync(chap.src, encoding = 'utf-8');

    console.log('[\033[92mLoading\033[0m] ' + chap.src);
    chap.dom = cheerio.load(html, params.cheerio_flags);
    chap.id = chap.src.replace(/[\/,\.]/, '').replace(/[\/,\.]/g, '-');
    next();
}

module.exports =
{
    apply: apply
};
