module.exports = function (plop) {
  plop.setGenerator("component", {
    description: "React component using Typescript",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "Name: ",
      },
    ],
    actions: [
      {
        type: "addMany",
        destination: "components/{{name}}",
        templateFiles: "components/templates/component/*.hbs",
        base: "components/templates/component",
      },
    ],
  });
};
