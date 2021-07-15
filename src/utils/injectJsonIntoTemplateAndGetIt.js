export default (template, jsonObject) => {
  const keys = Object.keys(jsonObject);
  let formatedTemplate = template;
  keys.forEach((key) => {
    formatedTemplate = formatedTemplate.replaceAll(
      `{{${key}}}`,
      jsonObject[key]
    );
  });
  return formatedTemplate;
};
