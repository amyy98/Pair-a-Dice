const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

//Post request for user registration
router.post('/user', userController.addUser, (req, res) => {
    res.status(200).json(res.locals.user);
});


//Put request, skill level and language
<<<<<<< HEAD
router.put('/skill', userController.addSkillLanguage,
    (req, res) => res.status(200).json({})
);
=======
// router.put('/skill', userController.addSkillLanguage);
>>>>>>> master

//get request for partner
router.get('/partner', userController.findPartner,
    (req, res) => res.status(200).json(res.locals.users)
  
);

<<<<<<< HEAD
// //Put request, update partners Yes/No,
// router.put('/feedback', userController.updateUserFeedback,
//     (req, res) => res.status(200).json({})
// );

//Put request, increment session count
router.put('/session', userController.incrementSessionCount,
    (req, res) => res.status(200).json({})
);
=======
//Put request, update partners Yes/No,
// router.put('/feedback', userController.updateUserFeedback);

// //Put request, increment session count
// router.put('/session', userController.incrementSessionCount);
>>>>>>> master

module.exports = router;