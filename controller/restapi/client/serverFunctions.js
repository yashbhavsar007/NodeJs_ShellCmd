exports.homeRedirect = function (req,res,next){

    res.render ("index",{req:req,res:res});

}

var exec = require('child_process').exec, child;

async function sh(cmd) {
    return new Promise(function (resolve, reject) {
      exec(cmd, (err, stdout, stderr) => {
        if (err) {
          reject(err);
        } else {
          resolve({ stdout, stderr });
        }
      });
    });
  }
  
  async function main() {
    let { stdout } = await sh('ls');
    console.log(stdout);
    for (let line of stdout.split('\n')) {
      console.log(`ls: ${line}`);
    }
  }
  
   main();