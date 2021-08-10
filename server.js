import express from 'express'
const app = express()
const router = express.Router()

app.use(express.json())
const PORT = 5000

const testingRouter = router.get('/', (req, res) => {
  res.send('Tested')
})

app.use(testingRouter)

app.listen(PORT, console.log(`Server running on port ${PORT}`))
