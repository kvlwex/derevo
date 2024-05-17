const { mkfile, mkdir, getChildren, getMeta, getName, isFile, isDirectory } = require('@hexlet/immutable-fs-trees');


const tree = mkdir('/', { size: 0 }, [
  mkdir('etc', { size: 0 }, [
    mkfile('config', { size: 100 }),
    mkfile('hosts', { size: 50 }),
  ]),
  mkdir('usr', { size: 0 }, [
    mkfile('readme.md', { size: 200 }),
    mkdir('local', { size: 0 }, [
      mkfile('bin', { size: 300 })
    ]),
  ]),
  mkfile('index.html', { size: 500 }),
]);


const capitalizeFileNames = (node) => {
  if (isFile(node)) {
    const name = getName(node);
    const newName = name.charAt(0).toUpperCase() + name.slice(1);
    return mkfile(newName, getMeta(node));
  }

  const children = getChildren(node).map(capitalizeFileNames);
  return mkdir(getName(node), getMeta(node), children);
};


const removeFiles = (node) => {
  if (isFile(node)) {
    return null;
  }

  const children = getChildren(node).map(removeFiles).filter(Boolean);
  return mkdir(getName(node), getMeta(node), children);
};


const capitalizedTree = capitalizeFileNames(tree);
const treeWithoutFiles = removeFiles(capitalizedTree);


console.log(JSON.stringify(tree, null, 2));
console.log(JSON.stringify(capitalizedTree, null, 2));
console.log(JSON.stringify(treeWithoutFiles, null, 2));