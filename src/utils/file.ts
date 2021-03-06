import * as fs from 'fs';

class File {
  private fs;

  constructor() {
    this.fs = fs;
  }

  writePosts(arrData: any): void {
    this.fs.writeFileSync('./posts', arrData.join(','), 'utf-8');
  }

  async readPosts(): Promise<string> {
    return new Promise((resolve, reject) => {
      this.fs.readFile('./posts', 'utf8', function read(err, data) {
        if (err) {
          reject(err);
        }

        resolve(data);
      });
    });
  }
}

export default File;
