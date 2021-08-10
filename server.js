import express from 'express'
import os from "os"
import cluster from 'cluster'

const app = express()
const router = express.Router()

app.use(express.json())
const PORT = 5000

const numCpu = os.cpus().length

app.use('/', (req, res) => {
    
    for (let i = 0; i < 1e8; i++) {
      
     }
    res.send(`Tested... ${process.pid}`)
    // cluster.worker.kill()
  })

if(cluster.isMaster){
    for (let i = 0; i < numCpu; i++) {
        cluster.fork()
     }
    //  cluster.on("exit", (worker, code, signal) =>{
    //      console.log(`worker ${worker.process.pid} died`)
    //      cluster.fork()
    //  })
    
}else{
    app.listen(PORT, console.log(`Server running on port ${PORT} && ${process.pid}`))
}


// app.listen(PORT, console.log(`Server running on port ${PORT}`))



