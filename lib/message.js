const rp = require('request-promise');

class Message {
  constructor(uri, msgObj) {
    const msg = msgObj || {};

    this.uri = uri;

    this.channel = msg.channel || '#general';
    this.text = msg.text || 'Message text goes here';
    this.username = msg.username || 'Slack Builder';
    this.icon_url = msg.icon_url;
    this.icon_emoji = msg.icon_emoji;
    this.attachments = msg.attachments || [];
  }

  post() {
    const options = {
      method: 'POST',
      uri: this.uri,
      body: this.toObj(),
      json: true,
    };
    return rp(options);
  }

  toObj() {
    return {
      channel: this.channel,
      text: this.text,
      username: this.username,
      icon_url: this.icon_url,
      icon_emoji: this.icon_emoji,
      attachments: this.attachments,
    };
  }


  setChannel(chan) {
    this.channel = chan;
    return this;
  }

  setText(text) {
    this.text = text;
    return this;
  }

  setUsername(username) {
    this.username = username;
    return this;
  }

  setIconUrl(url) {
    this.icon_url = url;
    return this;
  }

  setIconEmoji(emoji) {
    this.icon_emoji = emoji;
    return this;
  }

  addAttachment(attachment) {
    this.attachments.push(attachment.toObj());
    return this;
  }
}

module.exports = Message;
