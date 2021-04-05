// require express
const express = require('express')
const { restart } = require('nodemon')

// require Router
const router = express.Router()

// require model contact
const Contact = require('../models/Contact')

// require controllers
const  {addContact,
     getAllContact,
      getOneContact,
       deleteContact,
        updateContact
} = require('../controllers/contact.controllers')

// *********** Routes ****************

/**
 * @desc : test route
 * @method : GET
 * @path : http://localhost:7000/api/contacts/test
 * @data : nothing
 * @acess : public
 */
 router.get('/test', (req, res) => {
    res.send('Hello test')
})

/**
 * @desc : add contact
 * @method : POST
 * @path : http://localhost:7000/api/contacts/
 * @data : req.body
 * @acess : public
 */
 router.post('/', addContact)

    /**
 * @desc : get all contacts
 * @method : GET
 * @path : http://localhost:7000/api/contacts/
 * @data : no data
 * @acess : public
 */
router.get('/', getAllContact)

/**
 * @desc : get one contact
 * @method : GET
 * @path : http://localhost:7000/api/contacts/:_id
 * @data : req.params
 * @acess : public
 */
 router.get('/:id', getOneContact)

/**
 * @desc : delete contact
 * @method : DELETE
 * @path : http://localhost:7000/api/contacts/:_id
 * @data : req.params
 * @acess : public
 */
 router.delete('/:_id', deleteContact)
    /**
 * @desc : update contact
 * @method : PUT
 * @path : http://localhost:7000/api/contacts/:_id
 * @data : req.params & req.body
 * @acess : public
 */
router.put('/:_id',updateContact)

module.exports = router