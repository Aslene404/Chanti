const express = require('express');
const router = express.Router();
const Project = require('../db/models/project-schema');


const projectService = require('../services/project-service')(Project);



// @ts-check
// POST /addProject
router.post('/addProject', async function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(422).json({
        status: "fail",
        message: errors.array(),
        payload: null
      });
    } else {
      let {
        ...project
      } = req.body
      try {
        let response = await projectService.addProject(project);
        res.json(response);
      } catch (error) {
        next(error)
      }

    }
  }

);


// @ts-check
// GET / get All projects
router.get('/', helpers.validateUser, helpers.isAdmin, async function (req, res, next) {
  try {
    let response = await projectService.getAllProjects();
    if (response) {
      res.json(response)
    }
  } catch (error) {
    next(error)
  }
});


/**
 * Get Project By Id
 * GET /project/:id
 */

router.get('/project/:id', helpers.validateUser, async function (req, res,next) {
  let id = req.params.id;
  try {
    let response = await projectService.getProjectById(id);
    if (response) {
      return res.json(response);
    }
  } catch (error) {
    next(error);
  }

})


// Update Project Info
// PUT /update/:id
router.put('/update/:id', helpers.validateUser, async function (req, res,next) {
  if (
    !req.body.hasOwnProperty('projectname') &&
    !req.body.hasOwnProperty('owner') &&
    !req.body.hasOwnProperty('status')) {
    res.status(422).json({
      status: "error",
      message: 'You Should send projectname and/or owner and/or status',
      payload: null
    });
  } else {
    let projectId = req.params.id;
    let project = {
      ...req.body
    };

    try {
      let response = await projectService.updateProject(projectId, project);
      if (response) {
        res.json(response);
      }
    } catch (error) {
      next(error);
    }

  }
});



// Update project tasks 
// PUT /update/tasks/:id
router.put('/update/tasks/:id', helpers.validateUser, async function (req, res,next) {
  let id = req.params.id;
  let tasks;
  if(!req.body.hasOwnProperty('new_task')){
    res.status(422).json({
      status: "error",
      message: 'You Should send new_task',
      payload: null
    });
  }else{
    role = req.body.new_task;
  }

  try {
    let response = await projectService.updateProjectTasks(id, tasks);

    if (response) {
      res.status(200).json(response);
    }

  } catch (error) {
    next(error)
  }

});





// Delete Project
// DELETE /delete/:id
router.delete('/delete/:id', async function (req, res, next) {
  let id = req.params.id;
  try {
    let response = await projectService.deleteProject(id);
    if(response){
      res.json(response);
    }
  } catch (error) {
    next(error);
  }
});


module.exports = router;