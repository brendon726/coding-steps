const { Appsignal } = require("@appsignal/nodejs");

new Appsignal({
  active: true,
  name: "test app",
});
