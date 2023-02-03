const AbstractManager = require("./AbstractManager");

class CookManager extends AbstractManager {
  constructor() {
    super({ table: "cook" });
  }

  insert(cook) {
    return this.connection.query(
      `INSERT INTO ${this.table} (fullName, distinctions, menu, price,quote, localisation)
    VALUES(?, ?, ?, ?, ?, ?)`,
      [
        cook.fullName,
        cook.distinctions,
        cook.menu,
        cook.price,
        cook.quote,
        cook.localisation,
      ]
    );
  }

  update(cook) {
    return this.connection.query(
      `update ${this.table} set fullName = ?, distinctions = ?,
      menu = ?, price = ?, quote = ?, localisation= ?, isAvailable = ? WHERE id = ? `,
      [
        cook.fullName,
        cook.distinctions,
        cook.menu,
        cook.price,
        cook.quote,
        cook.localisation,
        cook.isAvailable,
        cook.id,
      ]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }
}

module.exports = CookManager;
