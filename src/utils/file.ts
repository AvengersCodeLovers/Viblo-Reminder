import * as fs from "fs";

class File {
  private fs;

  constructor() {
    this.fs = fs;
  }

  writePosts(arrData: any): void {
    this.fs.writeFileSync("./posts", arrData.join(","), "utf-8");
  }

  readPosts(): any {
    this.fs.readFile("./posts", "utf8", function read(err, data) {
      if (err) {
        throw err;
      }

      return data;
    });
  }
}

export default File;
