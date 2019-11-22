# Obsidian Portal Custom Theme

This project contains custom CSS styling for Obsidian Portal campaigns. The styles will make the page layout wider, a little bit denser, and make the different components feel a little less free-floating.

### Features

- Denser layout, instead of free-floating elements.

- Right-hand sidebar that falls down below on mobile.

- Changes to page heading styles to better separate.

- Dark theme version. 👻

## Available Themes

All available themes are available under the `themes` directory in this repository.

[View themes folder](https://github.com/orjanbp/obsidianportal-theme/tree/master/themes)

## Restyling a theme

At the top of each `style-[name].css` file located under `themes`, there is a list of [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) that are used in that theme. You can adjust a theme to your heart's content by changing any of the values listed here.

```css
:root {
  --content-max-width: 1400px;
  --body-bg-color: #161617;
  --background-image-height: 600px;
  --background-image-position: center 30%;
  --title-font-size: 2.5rem;

  --content-bg-dark: #161617;
  --content-bg-light: #1f2022;

  --bottom-line-color: #323638;
  --text-color: #dee2e6;
  --text-color-big: #fff;
  --soft-text-color: #868e96;

  --sidebar-gradient-top: #1f2022;
  --sidebar-gradient-bottom: #161617;
}
```
