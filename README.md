# qui-tabs
A Lit-based web component to display things in dynamic tabs.

## Installation

```bash
npm i @qomponent/qui-tabs
```

## Usage

Import the component in your project:

```javascript
import '@qomponent/qui-tabs';
```

Then, use it in your HTML:

```html
<qui-tabs>
  <div slot="tab-content" key="home" name="Home">Welcome to Home</div>
  <div slot="tab-content" key="profile" name="Profile">User Profile Information</div>
  <div slot="tab-content" key="settings" name="Settings">Settings Panel</div>
</qui-tabs>
```

## API

### Attributes
- `key` (required) - A unique identifier for the tab.
- `name` (required) - The display name of the tab.

### Events
- `tab-selected` - Fired when a tab is selected. Event detail includes:
  ```json
  {
    "key": "profile"
  }
  ```

### Methods
- `selectTab(key)` - Programmatically selects a tab by its key.

#### Example:
```javascript
document.querySelector('qui-tabs').selectTab('profile');
```

## CSS Variables

The component supports customization through CSS variables:

| CSS Variable                     | Default Value   | Description |
|----------------------------------|---------------|-------------|
| `--qui-tabs-font-family`        | `sans-serif`  | Font used in the component |
| `--qui-tabs-border-width`       | `2px`         | Border width for the tab container |
| `--qui-tabs-border-color`       | `#ddd`        | Border color for the tab container |
| `--qui-tabs-padding`            | `10px 20px`   | Padding inside each tab |
| `--qui-tabs-tab-margin`         | `5px`         | Margin between tabs |
| `--qui-tabs-font-size`          | `14px`        | Font size of tabs |
| `--qui-tabs-font-weight`        | `500`         | Font weight of tabs |
| `--qui-tabs-text-color`         | `#555`        | Default text color of tabs |
| `--qui-tabs-active-text-color`  | `#007bff`     | Text color of the active tab |
| `--qui-tabs-underline-height`   | `2px`         | Height of the underline for active tabs |
| `--qui-tabs-active-underline-color` | `#007bff` | Color of the underline for active tabs |
| `--qui-tabs-close-margin`       | `10px`        | Margin between tab title and close button |
| `--qui-tabs-close-color`        | `gray`        | Color of the close button |
| `--qui-tabs-close-hover-color`  | `red`         | Color of the close button when hovered |
| `--qui-tabs-close-font-size`    | `14px`        | Font size of the close button |
| `--qui-tabs-content-padding`    | `20px`        | Padding inside the tab content area |
| `--qui-tabs-content-min-height` | `100px`       | Minimum height of the tab content area |
| `--qui-tabs-content-background` | `#fff`        | Background color of the tab content area |

## Example

To run the example:

```bash
npm install
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first
to discuss what you would like to change.

## License

[Apache 2](http://www.apache.org/licenses/LICENSE-2.0)
