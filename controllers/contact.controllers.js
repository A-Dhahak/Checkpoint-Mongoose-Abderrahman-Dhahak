// addContact
const addContact = async (req, res) => {
    try {
       const { name, email, phone} = req.body
       //name and email required
       if(!name || !email)
       {
           res.status(400).send({msg : 'Name and Email are required !!!'})
           return
         }
       /* unique email
       const contact = Contact.findOne({email:email})
       if(contact) {
           res.status(400).send({msg : 'Email already exists !!!'})
           return
       }*/
       const newContact = new Contact({
           name,
           email,
           phone
       })
       await newContact.save()
       res.status(200).send({msg : 'Contact added successfully...', newContact})
    } catch (error) {
       res.status(400).send({msg : 'Can not add new contact...', error})
    }

   }

   //get all Contact
   const getAllContact = async (req, res) => {
    try {
        const listContacts = await Contact.find()
        res.status(200).send({msg : 'This is the list of all contacts...', listContacts})
    } catch (error) {
        res.status(400).send({msg : 'Can not get all contacts...', error})
    }
}

//get one contact

const getOneContact = async (req, res) => {
    try {
        const contactToFind = await Contact.findOne({_id:req.params.id})
        res.status(200).send({msg : 'I get the contact...', contactToFind})

    } catch (error) {
       res.status(400).send({msg : 'Can not get contact with this id...', error})
    }
   }

   //delete contact

   const deleteContact = async (req, res) => {
    try {
        const { _id } = req.params
        const contactToDelete = await Contact.findOneAndDelete({ _id })
        if (!contactToDelete) {
           res.status(400).send({msg : 'contact is already deleted !!', contactToDelete})
       return
       }
       
        res.status(200).send({msg : 'contact is deleted...'})
        
    } catch (error) {
       res.status(400).send({msg : 'Can not delete contact with this id !!', error})
    }
   }

   //update contact

   const updateContact =  async (req, res) => {
    try {
        const {_id} = req.params
        const result = await Contact.updateOne({_id},{$set:{...req.body}})
        res.status(200).send({msg : 'contact is updated...'})
    } catch (error) {
        res.status(400).send({msg : 'Contact can not be updated  !!', error})
    }
}

module.exports = { addContact, getAllContact, getOneContact, deleteContact, updateContact }