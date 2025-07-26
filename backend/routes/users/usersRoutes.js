const {Router} = require("express")

const router = Router()

const {register, verifyotp, login, quotaCheck,quotaUpdate,authToken,logOut}  = require("../../controllers/users/users.controllers")

router.post("/api/register", register)
router.post("/api/login", login)
router.post("/api/logout", logOut)
router.get("/api/authToken", authToken)
router.post("/api/otp-verification", verifyotp)
router.get("/api/quota-check",quotaCheck )
router.get("/api/quota-update",quotaUpdate )

module.exports = router