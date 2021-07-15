export default ($form) => {
  const entries = new FormData($form).entries();
  let serializedData = {};

  for (let value of entries) {
    serializedData[value[0]] = value[1];
  }

  return serializedData;
};
