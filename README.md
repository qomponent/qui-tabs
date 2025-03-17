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
