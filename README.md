# Chance app

For FE


Install dependencies
```shell
cd FE
npm i
```

Runing dev server
```shell
npm run dev
```

For BE

For MacOS:
We need `python-setuptools` for using `distutils` in `node-gyp`
```shell
brew install python
python3 -m pip install --upgrade setuptools
```

Install dependencies
```shell
cd BE
npm i
```

In case of error
```
Error: The module '/Users/alexkoleda/Projects/chance/BE/node_modules/@pokusew/pcsclite/build/Release/pcsclite.node'
was compiled against a different Node.js version using
NODE_MODULE_VERSION 125. This version of Node.js requires
NODE_MODULE_VERSION 127. Please try re-compiling or re-installing
```

run script
```shell
npm run rebuild-directly
```
