const fs=require("fs");
const path=require("path");
const dir2tree=require("dir2tree");
const ROOT = path.join(process.cwd(),'..',"blablas");
const TARGET = ROOT
const MyTree = dir2tree(ROOT,{
  fileContent:true,
  skipFolder:["draft","next"],
});

console.log(MyTree.tree)
MyTree.write(TARGET,"episodes.json")

