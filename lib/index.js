const Attachment = require('./attachment');
const Message = require('./message');

function makeLink(url, friendly) {
  return `<${url}|${friendly}>`;
}

module.exports.Attachment = Attachment;
module.exports.Message = Message;
module.exports.makeLink = makeLink;
