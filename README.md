# Chance

Web application for displaying info readed from NFC card via Card reader. React 17 + Node. Originally used as Electron app. Now running in dev mode and opening in browser.

## Prereqisites

1. Node.js - 22.3.0
2. NPM - 10.9.0

## Running

1. Install dependencies
```shell
cd app
npm i
```

2. Run
```shell
cd app
npm run start-all
```

## Troubleshoot

1. Node version mismatch error:
```shell
Error: The module '/Users/alexkoleda/Projects/chance/BE/node_modules/@pokusew/pcsclite/build/Release/pcsclite.node'
was compiled against a different Node.js version using
NODE_MODULE_VERSION 125. This version of Node.js requires
NODE_MODULE_VERSION 127. Please try re-compiling or re-installing
```

Solution:
```shell
cd app
npm run rebuild-directly
```

2. `node-gyp` deprecation error / `distutils` not found error. We need `python-setuptools` for using `distutils` in `node-gyp`.

Solution for MacOS:
```shell
brew install python
python3 -m pip install --upgrade setuptools
```
