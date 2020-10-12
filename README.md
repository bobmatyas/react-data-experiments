

## Data Saving Notes

Can save data using window.localStorage or window.sessionStorage

sessionStorage will only save for the user's session (until browser is closed) while localStorage will persist until it is removed.

JSON data should be save in browser storage as a string. Should conver object into JSON before saing and parse that string into JSON when using.

Sample function:

```
const loadJSON = key =>
    key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) =>
    localStorage.setItem(key, JSON.stringify(data));
```

Clear out local storage with:

```
localStorage.clear();
```

## Virutalized Lists

The `react-window` library can be used to render irtualized lists that can be set to only render visible list items and loads more on scroll. This saves loading time on big lists.



