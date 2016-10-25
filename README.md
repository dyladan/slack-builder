# Slack Builder

A light utility library for easily creating slack messages for webhook custom integration.

## Example Usage

```javascript
const sb = require('slack-builder');

// create a webhook
const hookUrl = ''; // Your webhook url goes here
const colors = ['#00BCD4', '#2196F3', '#673AB7', '#E91E63', '#795548'];

// create some content
const gitHubLink = sb.makeLink('https://github.com/dyladan/slack-builder', 'GitHub repo');

function makeAttach(index) {
  const attachment = new sb.Attachment()
    .setTitle(`Attachment # ${index}`)
    .setText(`This is the main text in message attachment ${index}, and can contain standard message markup.`)
    .setColor(colors[index])
    .addField('User', 'Daniel')
    .addField('Index', index.toString())
    .setFooter('Created by Daniel Dyla');
  return attachment;
}

// create a message
const msg = new sb.Message(hookUrl)
  .setChannel('#test')
  .setUsername('Slack Message Builder')
  .setIconEmoji(':+1:')
  .setText(`I'm the message text with a link to a ${gitHubLink} :fire:`);

// add some attachments
for (let index = 1; index <= 3; index += 1) {
  msg.addAttachment(makeAttach(index));
}

// send message
// returns a bluebird promise
// using the request-promise library
msg.post().then(console.log); // eslint-disable-line
```

