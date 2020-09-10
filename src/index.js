const express = require('express')
require('./db/mongoose')
const userRouter=require('./routers/user')
const taskRouter=require('./routers/task')

const app = express()
const port = process.env.PORT

// const multer=require('multer')
// const upload = multer({
//     dest: 'images', 
//     limits: {
//         fileSize: 5000000
//     },
//     fileFilter(req, file, cb) {
//         //if(!file.originalname.endsWith('.pdf'))
//         if(!file.originalname.match(/\.(doc|docx)$/)){
//             return cb(new Error('File must be a Word document'))
//         }

//         cb(undefined, true)
//     }
// })

// const errorMiddleware = (req, res, next) => {
//     throw new Error('From my middleware')
// }

// app.post('/upload', upload.single('upload'), 
// (req, res) => {
//     res.send()
// }, (error, req, res, next)=> {
//     res.status(400).send({ error: error.message })
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)



app.listen(port, () => {
    console.log('Server is up on port ' + port)
})



// app.use((req, res, next)=> {
//    if(req.method === 'GET') {
//     res.send('GET requests are disabled')
//    } else {
//        next()
//    }
// })

// app.use((req, res, next)=> {
//      res.status(503).send('Site is under maintanance')
//  })
// const pet = {
//     name: 'Pele'
// }

// pet.toJSON = function() {
//     //console.log(this)
//     return {}
// }
// console.log(JSON.stringify(pet))


// const bcrypt=require('bcryptjs')

// const myFunction = async () => {
//     const password = 'Red123!'
//     const hashedPassword = await bcrypt.hash(password, 8)

//     console.log(password)
//     console.log(hashedPassword)

//     const isMatch = await bcrypt.compare('Red123!', hashedPassword)
//     console.log(isMatch)
// }

// const jwt = require('jsonwebtoken')

// const myFunction = async () => {
//     const token = jwt.sign({ _id: 'abc123' }, 'secret12', { expiresIn: '7 days' })
//     console.log(token)
//     const data = jwt.verify(token, 'secret12')
//     console.log(data)
// }

// myFunction()


// const Task = require('./models/task')
// const User = require('./models/user')
// const main = async () => {
//     // const task = await Task.findById('5f57ddc4551e8a22b4b077d3')
//     // await task.populate('owner').execPopulate()
//     // console.log(task.owner)

//     const user = await User.findById('5f57dc1875b4c32a68a907fe')
//     await user.populate('tasks').execPopulate()
//     console.log(user.tasks)
// }

// main()