#!/usr/bin/env node

import minimist from 'minimist';

async function help() {

}

async function main(argv) {
  const args = minimist(argv.slice(2));
  console.log(args);
}

function handleError(err) {
  if (err.code === 'ENOENT') {
    console.error('marked: output to ' + err.path + ': No such directory');
    return process.exit(1);
  }
  throw err;
}

process.title = 'markdown-to-pdf';
main(process.argv.slice())
  .then(code => {
    process.exit(code || 0);
  })
  .catch(err => {
    handleError(err);
  });
