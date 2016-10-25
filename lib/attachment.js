class Attachment {
  constructor(attachObj) {
    const obj = attachObj || {};

    this.title = obj.title;
    this.title_link = obj.title_link;
    this.text = obj.text;
    this.pretext = obj.pretext;
    this.color = obj.color;
    this.fallback = obj.fallback;

    this.author_name = obj.author_name;
    this.author_link = obj.link;
    this.author_icon = obj.icon;

    this.image_url = obj.image_url;
    this.thumb_url = obj.thumb_url;

    this.footer = obj.footer;
    this.footer_icon = obj.footer_icon;

    this.fields = obj.fields || [];
  }

  toObj() {
    return {
      title: this.title,
      title_link: this.title_link,
      text: this.text,
      pretext: this.pretext,
      color: this.color,
      fallback: this.fallback,

      author_name: this.author_name,
      author_link: this.author_link,
      author_icon: this.author_icon,

      image_url: this.image_url,
      thumb_url: this.thumb_url,

      footer: this.footer,
      footer_icon: this.footer_icon,

      fields: this.fields,
    };
  }

  setTitle(title) {
    this.title = title;
    return this;
  }

  setTitleLink(titleLink) {
    this.title_link = titleLink;
    return this;
  }

  setText(text) {
    this.text = text;
    return this;
  }

  setPretext(pretext) {
    this.pretext = pretext;
    return this;
  }

  setColor(color) {
    this.color = color;
    return this;
  }

  setFallback(fallback) {
    this.fallback = fallback;
    return this;
  }

  setAuthorName(authorName) {
    this.author_name = authorName;
    return this;
  }

  setAuthorLink(authorLink) {
    this.author_link = authorLink;
    return this;
  }

  setAuthorIcon(authorIcon) {
    this.author_icon = authorIcon;
    return this;
  }

  setImageUrl(imageUrl) {
    this.image_url = imageUrl;
    return this;
  }

  setThumbUrl(thumbUrl) {
    this.thumb_url = thumbUrl;
    return this;
  }

  setFooter(footer) {
    this.footer = footer;
    return this;
  }

  setFooterIcon(footerIcon) {
    this.footer_icon = footerIcon;
    return this;
  }

  addField(value, title, short) {
    this.fields.push({
      value,
      title,
      short: short || true,
    });
    return this;
  }
}

module.exports = Attachment;

