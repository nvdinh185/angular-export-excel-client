const router = require('express').Router();

const fileHandler = require('../handlers/file-handler');

router.get('/get-templates/*'
    , fileHandler.getTemplates       // dựa vào giá trị req.user.username trả thông tin user
)

module.exports = router;