# Snapweb

WebOS client for [Snapcast](https://github.com/badaix/snapcast) based on original snapweb.

WARNING: This is still WIP 

## Building

To build the app, make sure you have the [WebOS CLI tools](https://webostv.developer.lge.com/develop/tools/cli-installation) installed:
```
npm install -g @webos-tools/cli
```

Then to build the IPK file:
```
make
```

If your TV is setup with your development tools, you can then
```
make install
```

to install the app.



## Changes 

The current and planned changes from the original app:

- [X] Removed unneeded files for mobile apps and debian
- [X] Change README.md
- [X] Basic WebApp setup