#!/usr/bin/env node

const main = () => {
  console.log('カスタムnpmコマンドが実行されました！');
  console.log('引数:', process.argv.slice(2));
};

main();
