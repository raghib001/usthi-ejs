let express = require("express");
let router = express.Router();
// let userController = require('../src/controller/users.controller')

// router.get("/test_main", userController.test1);
// router.post('/contact',userController.contact)

router.get("/", async (req, res) => {
  res.render("templates/index", {
    title: "Innovative Construction Group | Home",
  });
});
router.get("/index", async (req, res) => {
  res.render("templates/index", {
    title: "Innovative Construction Group | Home",
  });
});
router.get("/about", async (req, res) => {
  res.render("templates/about", {
    title: "Innovative Construction Group | About",
  });
});
router.get("/residential_plot", async (req, res) => {
  res.render("templates/residential_plot", {
    title: "Innovative Construction Group | Residential Plot Area",
  });let express = require("express");
  let router = express.Router();
  // let userController = require('../src/controller/users.controller')
  
  // router.get("/test_main", userController.test1);
  // router.post('/contact',userController.contact)
  
  router.get("/", async (req, res) => {
    res.render("templates/index", {
      title: "Innovative Construction Group | Home",
    });
  });
  router.get("/index", async (req, res) => {
    res.render("templates/index", {
      title: "Innovative Construction Group | Home",
    });
  });
  router.get("/about", async (req, res) => {
    res.render("templates/about", {
      title: "Innovative Construction Group | About",
    });
  });
  router.get("/residential_plot", async (req, res) => {
    res.render("templates/residential_plot", {
      title: "Innovative Construction Group | Residential Plot Area",
    });
  });
  router.get("/plot_details", async (req, res) => {
    res.render("templates/plot_details", {
      title: "Innovative Construction Group | Plot Details",
    });
  });
  
  router.get("/contact", async (req, res) => {
    res.render("templates/contact", {
      title: "Innovative Construction Group | Contact",
    });
  });
  module.exports = router;
  
});
router.get("/plot_details", async (req, res) => {
  res.render("templates/plot_details", {
    title: "Innovative Construction Group | Plot Details",
  });
});

router.get("/contact", async (req, res) => {
  res.render("templates/contact", {
    title: "Innovative Construction Group | Contact",
  });
});
module.exports = router;
