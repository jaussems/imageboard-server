const express = require("express");
const Image = require("../models").image;

const { Router } = express;

const router = new Router();
//get all the images
router.get("/", async (request, response) => {
  const allImages = await Image.findAll();
  response.send(allImages);
});
//post an image
router.post("/", async (request, response, next) => {
  try {
    const newimage = await Image.create(request.body);
    if (!newimage) {
      response.status(404).send("Image not created, no attributes filled in");
    } else {
      response.json(newimage);
    }
  } catch (e) {
    next(e);
  }
});

router.get("/:imageid", async (request, response, next) => {
  const params = request.params.imageid;

  try {
    const findImage = await Image.findByPk(params);
    response.send(findImage);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
