const os =require('os');

const user=os.userInfo();
console.log(user);//

const currentOS={
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem()/1024*1024,
    freeMem: os.freemem(),
}
console.log(currentOS);