# Obsidian Portal Custom Theme

This project contains custom CSS styling for Obsidian Portal campaigns. The styles will make the page layout wider, a little bit denser, and make the different components feel a little less free-floating.

### Features

- Denser layout, instead of free-floating elements.

- Right-hand sidebar that falls down below on mobile.

- Changes to page heading styles to better separate.

- Dark theme version. 👻

## Repo Status

I am not currently actively maintaining this project, as I haven't been using Obsidian Portal for any personal TTRPG campaigns lately. Still it is here, I think I have some changes to it that I could publish at some point in the near future, some polish work ... 

And if anyone have been doing the same and want to PR, the door is open. 👍

But I have not been doing any active new work on it for about a year (as of writing this readme change). If you use it and like it, I am really happy to hear! If Obsidian Portal does some changes and this breaks, I am sorry for that; send me a message and let me see what I can do.

## Available Themes

All available themes are available under the `themes` directory in this repository.

[View themes folder](https://github.com/orjanbp/obsidianportal-theme/tree/master/themes)

## Restyling a theme

At the top of each `style-[name].css` file located under `themes`, there is a list of [CSS Variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) that are used in that theme. You can adjust a theme to your heart's content by changing any of the values listed here.

```css
:root {
  --content-max-width: 1240px;
  --content-padding: 0px;
  --header-space-above: 30px;
  --body-bg-color: #19191b;
  
  --background-image-height: 600px;
  --background-image-position: center 30%;
  
  --title-font-size: 2.5rem;
  --content-bg-dark: #19191b;
  --content-bg-light: #1f2022;
  --content-bg-accent: #242628;
  
  --text-color-big: #fff;
  --text-color-body: #c0c0c0;
  --text-color-soft: #868686;
  --bottom-line-color: #686868;
  
  --sidebar-gradient-top: #292929;
  --sidebar-gradient-bottom: #19191b;
  --character-desc-bio-heading-display: none;
}
```
