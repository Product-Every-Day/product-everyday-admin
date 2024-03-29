const express = require('express');
const router = express.Router();

// Bring in Models & Utils
const auth = require('../../middleware/auth');
const role = require('../../middleware/role');
const { checkValidMongoDbId } = require('../../middleware/db');
const { ROLES } = require('../../constants');
const orderController = require('../../controllers/order');

// create order
router.post('/create', auth(), (req, res) => {
  orderController.create(req, res);
});

// fetch order by order id 
router.get('/:id', auth(), checkValidMongoDbId(),  async (req, res) => {
  orderController.read(req, res);
});

// fetch user orders(myorders)
router.get('/user/:id', auth(), checkValidMongoDbId(), async (req, res) => {
  orderController.readUserOrders(req, res);
});

//fetch all orders --admin
router.get('/', auth(), role.checkRole(ROLES.Admin), async (req, res) => {
  orderController.list(req, res);
});

//update order status --admin
router.patch('/:id', auth(), role.checkRole(ROLES.Admin), checkValidMongoDbId(), async (req, res) => {
  orderController.update(req, res);
});

//delete order --admin
router.delete('/:id', auth(), role.checkRole(ROLES.Admin), checkValidMongoDbId(), async (req, res) => {
  orderController.deleteOrder(req, res);
});


module.exports = router;