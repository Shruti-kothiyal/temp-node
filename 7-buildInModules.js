                            /*OS MODULES*/      

const os=require('os')

//info about current user
const user=os.userInfo()
console.log(user)

//method returns the system uptime in seconds
console.log(`System uptimme is ${os.uptime()} seconds`)


const currentOS={
    name:os.type(),
    release:os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}
console.log(currentOS)


                            /*PATH MODULE*/ 
const path=require('path')

console.log(path.sep)

const filePath=path.join('/content','subfolder','test.txt')
console.log(filePath)

const base=path.basename(filePath)
console.log(base)

//it returns an absolute path
const abso=path.resolve(__dirname,'content','sub','test.txt')
console.log(abso)


                            /*FILE SYNCHRONOUS */
//Synchronous functions block the execution of the program until the file operation is performed.These functions are also called blocking functions. The synchronous methods have File Descriptor as the last argument. File Descriptor is a reference to opened files. It is a number or a reference id to the file returned after opening the file using fs.open() method of the fs module. All asynchronous methods can perform synchronously just by appending “Sync” to the function name. 
const { readFileSync, writeFileSync} = require('fs')
/*
    same as the above
    const fs=require('fs')
    var data=fs.readFileSync(nameOfFile.txt)
    console.log(data.toString())
*/
const first =readFileSync('./content/first.txt','utf-8')    //if we do not provide the utf coding we will get buffer text
const second =readFileSync('./content/second.txt','utf-8')

writeFileSync(
    './content/result-sync.txt',`Here is the result: ${first},${second}`,{flag:'a'} //flag: a will append it into the file, if not written file is updated and previous content is removed
)

                            /*FILE ASYNCHRONOUS */
//Asynchronous functions do not block the execution of the program and each command is executed after the previous command even if the previous command has not computed the result. The previous command runs in the background and loads the result once it has finished processing. Thus, these functions are called non-blocking functions. They take a callback function as the last parameter. Asynchronous functions are generally preferred over synchronous functions as they do not block the execution of the program whereas synchronous functions block the execution of the program until it has finished processing
const{ readFile, writeFile}=require('fs')
// const { resourceUsage } = require('process')
// const { resourceLimits } = require('worker_threads')

readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first=result
    readFile('./content/second.txt','utf8',(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        const second=result
        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first},${second}`,
            (err,result)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(result.toString())
            }
        )
    })
})