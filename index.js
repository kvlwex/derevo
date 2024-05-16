import { mkfile, mkdir, getChildren, getMeta, getName, isFile, isDirectory } from "@hexlet/immutable-fs-trees";

const file1 = mkfile('file1.txt', {size: 100});
const file2 = mkfile('file2.txt', {size: 200});
const dir1 = mkdir('dir1', [file1]);
const dir2 = mkdir('dir2', [file2]);
const rootDir = mkdir('root', [dir1, dir2]);

console.log('Children of root:', getChildren(rootDir));
console.log('Meta of file1:', getMeta(file1));
console.log('Name of dir1:', getName(dir1));
console.log('Is file1 a file?', isFile(file1));
console.log('Is rootDir a directory?', isDirectory(rootDir));