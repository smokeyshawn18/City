use("CrudDb");

console.log(db);

db.createCollection("form");

db.form.insertOne({
  name: "Shawnocode",
  email: "Shawnnocode23@gmail.com",
  message: "LM10istheGOAT",
});
