const express = require('express');
const router = express();

const MenuItems = require('../models/MenuItems')



//POST route to add a menu
router.post('/',async (req,res)=>{
    try{
            
    const data = req.body //assuming the request body contains the person data

    //create a new menu document using the mongoose model
    const newMenu = new MenuItems(data);
     
        
    //save the new menu to the database
    const response = await newMenu.save();
    console.log("Data saved");
    res.status(200).json(response);
    }catch(err){
        console.log(err)
        res.status(200).json({error: 'Internal Server Error'});
    
    }
})

// GET method to get the menu
router.get('/',async(req,res)=>{
    try{
        const data = await MenuItems.find();
        console.log("data fetched");
        res.status(200).json(data);
    }catch(err){
        console.log(err)
        res.status(200).json({error: 'Internal Server Error'});
    }

});

router.get('/:taste',async (req,res)=>{
    try{
        const taste = req.params.taste;
        if(taste =='spicy' || taste == 'sweet'|| taste == 'sour'){
            const response = await MenuItems.find({taste: taste})
            console.log("response fetched");
        res.status(200).json(response);
        }else{
        res.status(404).json({error:'Invalid work type'})
    }
    }catch(err){
        console.log(err);
        res.status(500).json({error:'Internal setver Error'})
    }

});


module.exports = router;