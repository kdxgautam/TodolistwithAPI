const express = require("express")
const router = express.Router()
const todoModel = require('../../../models/todomodel')
const { getAllTodos, getOneTodos, postTodo, patchTodo, deleteTodo } = require("../../../controlers/todos")

//getting all


router.get('/',async (req,res) => 
    getAllTodos(req,res)

)


//getting one
router.get('/:id', getTodo,(req,res) => 
    getOneTodos(req,res)
)

//creating one

router.post('/', async(req,res) => 
    postTodo(req,res)
)


//updating one
router.patch('/:id',getTodo, async (req,res)=> 
    patchTodo(req,res)
)


//deleting one

router.delete('/:id', async (req, res) => 
    deleteTodo(req,res)
  );


  //delete all

  router.delete('/',async(req,res) => {
    await todoModel.deleteMany()
    res.status(201).json({message : "Entry cleared"})
  })

// router.delete('/:id', getTodo, async (req,res) => {
//     try {
//         const deleteTodo = 
        
//     } catch (err) {
        
//     }
// })



//middleware
async function getTodo(req,res,next){
    let todo;
    try{
        todo = await todoModel.findById(req.params.id)
        if(todo == null) {
            return res.status(404).json({message : "cannot find work"})
        } 
    } catch (err){
            return res.status(500).json({message : err.message})

    }

    res.todo = todo
    next()
}



module.exports = router;