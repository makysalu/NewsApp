const express = require('express');
const router = express.Router();
const newsController = require('./newsController');

const { validate } = require('../../middlewares/validate');
const schemas = require('./newsParamSchemas');

router.route('/news').get(newsController.getNews);
router.route('/archived-news').get(newsController.getArchivedNews);
router.route('/news/archive').post(validate(schemas.obj.archiveNews), newsController.archiveNews);
router.route('/news/:id').delete(validate(schemas.obj.deleteNews), newsController.deleteNews);

module.exports = router;