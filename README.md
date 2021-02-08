# ECE Outreach Site

<a href="https://kirktopode.github.io/ECE_Outreach_Website/">Preview Site</a>

## Adding Team Member Info
In `src/data/data.json`, team members are declared. See the `"Team"` array for examples and adding new info. Images are stored in `public/img/team`. Everything should work automatically.

## Adding/Revising Projects
Projects are stored in `public/cards`. Each project has its own directory with the following structure:
```
public
└─PROJECT_NAME
  ├─config.toml
  ├─CENTER_IMAGE
  └─DROPDOWN.html
```
where `PROJECT_NAME` is a given project, `CENTER_IMAGE` is any web-compatible simple image file (png, jpg, gif, etc), and `DROPDOWN.html` is a *set* of files that provide content for each dropdown.

To set up, reference existing `config.toml` files. An important note is that `[[dropdown]]` items link to `DROPDOWN.html` files, which are defined in the same directory.

**Note:** to make projects go live, edit `src/components/gallary.jsx`, adding a new `Card` tag with the name of the card.
