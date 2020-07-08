const { GoogleSpreadsheet } = require("google-spreadsheet");

const addUserData = async (data) => {
  const { First, Last, Email, Age } = data;
  if (First && Last && Email && Age) {
    try {
      const doc = new GoogleSpreadsheet(process.env.REACT_APP_GS_USER_DATA_ID);
      await doc.useServiceAccountAuth({
        client_email: process.env.REACT_APP_GS_CLIENT_EMAIL,
        private_key: process.env.REACT_APP_GS_PRIVATE_KEY,
      });
      await doc.loadInfo();
      const sheet = doc.sheetsByIndex[0];
      await sheet.addRow({
        "First Name": First,
        "Last Name": Last,
        "Email Address": Email,
        Age,
      });
      return "Success";
    } catch {
      return {
        status: 400,
        msg: "Error updating spreadsheet",
      };
    }
  } else {
    return {
      status: 422,
      msg: "Missing Data",
    };
  }
};

export default addUserData;
