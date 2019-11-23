# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

## [Unreleased]

### Added

- Add an option to disable the "Description:" and "Bio:" h6 headings on the character profiles. Personal opinion, not a fan of them.

- Add extra space between the PC and NPC characters on the Characters page.

- Add extra option to fade out the GM Only section, to better distinguish it from the rest of the page contents.

### Changed

- Make labels on character edit page form follow theme colours, and add extra spacing so they don't hug the form too tight.

### Removed

- Remove the extra space above the page title on character wiki pages, to be in line with doing the same on other wiki pages.

- Remove added background colouring on GM secrets section on wiki pages, as this conflicts with the page colour theming.

## [0.10.0] - 2019-11-22

### Added

- Start keeping a proper changelog.

- Add CSS linting with Prettier.

- Add an option to have the page contents only stretch out to a given max width. This is separate from the same option giving in Obsidian Portal, as this one entirely overrides it (the default is 100%).

- Allow the background image to fade into the background colour.

### Changed

- Update Gulp to v4 and completely redo build procedure.

- Split components in a more granular SASS structure, with one file per component.

- Change heading font sizes.

- Add extra padding on the character list, and make the description fadeout follow custom background colour.

- Fix main-content width on edit pages.

## [0.9.0] - 2019-11-22

_Returning to continue project for use with new Obsidian Portal sites._

### Added

- Add a dark mode theme. Currently, this is the main theme being worked on.

- Add a set of CSS variables, to allow theming to be done just by changing these.

## [0.8.0] - 2018-07-21

_Initial development start._

### Added

- Gulp pipeline to build CSS from collection of SASS files.
