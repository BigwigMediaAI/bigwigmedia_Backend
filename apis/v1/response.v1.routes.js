const { getResponse, getParaPhrase, getImage ,getSpecialtool,getDecision} = require("../../controllers/response.controllers");
const { checkLimit } = require("../../middleware/limitCheck.middleware");

const router = require("express").Router();

router.post("/", checkLimit, getResponse);
router.post("/paraphrase", checkLimit, getParaPhrase);
router.post("/image", checkLimit, getImage);
router.post("/special",checkLimit, getSpecialtool);
router.post("/decision", getDecision);

module.exports = router;
