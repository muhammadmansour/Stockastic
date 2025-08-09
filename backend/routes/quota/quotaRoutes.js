const {Router} = require("express")
const {quotaApplication} = require("../../controllers/quota/quota.controllers")
const router = Router()


router.post("/api/quota-application",quotaApplication)

module.exports = router