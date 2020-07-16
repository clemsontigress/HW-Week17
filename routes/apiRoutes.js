const db = require("../models");


module.exports = function(app) { 

  app.get("/api/workouts", (req, res) => {
    db.Workout.find({})
      .then(dbWorkout => {
        res.json(dbWorkout);
      })
      .catch(err => {
        res.json(err);
      });
  });
  
  app.put("/api/workouts/:id", (req,res) =>{
    db.Workout.update({ _id: req.params.id }, { $push: { exercises: req.body } })
    .then((dbWorkout) => {
        res.json(dbWorkout);
    });


});

app.post("/api/workouts", (req,res) => {
    db.Workout.create({})
    .then(dbWorkout => {
        res.json(dbWorkout)
    })
    .catch(err => {
        res.json(err)
    });

});

app.get("/api/populated", (req, res) => {
  db.Workout.find({})
    .populate("exercises")
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get("/api/workouts/range", (req,res) => {

  db.Workout.find({})
  
  .then(dbWorkout => {
      res.json(dbWorkout)
  })
  .catch(err => {
      res.json(err)
  });

});

};
