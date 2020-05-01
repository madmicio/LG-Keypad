# Channel Pad for LG WebOs TV

[![hacs_badge](https://img.shields.io/badge/HACS-Default-orange.svg)](https://github.com/custom-components/hacs)
[![buymeacoffee_badge](https://img.shields.io/badge/Donate-buymeacoffe-ff813f?style=flat)](https://www.buymeacoffee.com/madmicio)

![all](example/pad.png)

## hacs Card install
1. add custom reposity: madmicio/channel-pad as plugin.

2. install `LG Keypad` plugin

3. Add a reference  inside your resources config:

  ```yaml
resources:
- type: module
    url: /hacsfiles/LG-Keypad/card-numeric-pad.js
```


### Manual install

1. Download and copy `card-numeric-pad.js` from (https://github.com/madmicio/LG-Keypad) into your custom components  directory.

2. Add a reference `card-numeric-pad.js` inside your resources config:

 ```yaml
  resources:
    - url: /local/"your_directory"/card-numeric-pad.js
      type: module
```

### Use as standalone card:
lovelace config:

 ```yaml
type: 'custom:card-numeric-pad'
entity: media_player.tv_lg_55c8
```


<a href="https://www.buymeacoffee.com/madmicio" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" style="height: 51px !important;width: 217px !important;" ></a>
