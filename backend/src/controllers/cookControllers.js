const models = require("../models");

const browse = (req, res) => {
  models.cook
    .findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { id } = req.params;

  models.cook
    .find(id)
    .then(([results]) => {
      if (results[0]) res.send(results[0]);
      else res.sendStatus(404);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const cook = req.body;
  // cook.user_id = req.payloads.sub;

  models.vehicle
    .insert(cook)
    .then(([result]) => {
      res.location(`/api/cook/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.warn("pas bon");
      console.error(error);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const cook = req.body;
  cook.id = req.params.id;

  models.vehicle
    .update(cook)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const { id } = req.params;
  models.cook
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};
