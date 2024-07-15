const admin = require('firebase-admin');
const db = admin.firestore();

exports.createItem = async (req, res) => {
    try {
        const data = req.body;
        const itemRef = await db.collection('items').add(data);
        res.status(201).send(`Created a new item: ${itemRef.id}`);
    } catch (error) {
        res.status(400).send(error.message);
    }
        /* 
      #swagger.tags = ['Items']
      #swagger.description = 'Get an item entry'
      #swagger.summary = 'Get an item entry'
      #swagger.parameters['id'] = {
          description: 'Item id',
          required: true,
      }
      #swagger.responses[404] = {
          description: 'Item not found',
      }
      #swagger.responses[400] = {
          description: 'Bad request',
      }
      #swagger.responses[200] = {
          description: 'Get an item by id',
      }
    */
};

exports.getAllItems = async (req, res) => {
    try {
        const itemsSnapshot = await db.collection('items').get();
        const items = [];
        itemsSnapshot.forEach((doc) => items.push({ id: doc.id, ...doc.data() }));
        res.status(200).json(items);
    } catch (error) {
        res.status(400).send(error.message);
    }
        /* 
      #swagger.tags = ['Items']
      #swagger.description = 'Create an item'
      #swagger.summary = 'Create an item'
      #swagger.parameters['data'] = {
          in: 'body',
          description: 'Data to create an item',
          required: true,
      }
      #swagger.responses[201] = {
          description: 'Item successfully created',
      }
      #swagger.responses[400] = {
          description: 'Bad request',
      }
    */
};

