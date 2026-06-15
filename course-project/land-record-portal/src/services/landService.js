export const getLandRecord = async (surveyNo) => {

  await new Promise((resolve) =>
    setTimeout(resolve, 2000)
  );

  const records =
    JSON.parse(localStorage.getItem("landRecords")) || [];

  const record = records.find(
    (item) => item.surveyNo === surveyNo
  );

  return record;
};