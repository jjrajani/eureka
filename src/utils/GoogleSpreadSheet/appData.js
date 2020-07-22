const { GoogleSpreadsheet } = require("google-spreadsheet");

const getAppData = async () => {
  try {
    const doc = new GoogleSpreadsheet(process.env.REACT_APP_GS_APP_DATA_ID);
    await doc.useServiceAccountAuth({
      client_email: process.env.REACT_APP_GS_CLIENT_EMAIL,
      private_key: process.env.REACT_APP_GS_PRIVATE_KEY,
    });
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[0];
    const rows = await sheet.getRows();
    const appData = {
      myInfo: {
        title: rows[0]["My Info Section Title"],
        inputs: {
          age: {
            label: rows[0]["Age Input Label"],
          },
          gender: {
            label: rows[0]["Gender Input Label"],
            values: [rows[0]["Gender Values"], rows[1]["Gender Values"]],
          },
          height: {
            feet: {
              label: rows[0]["Height (ft) Label"],
            },
            inches: {
              label: rows[0]["Height (in) Label"],
            },
          },
          weight: {
            label: rows[0]["Weight Label"],
          },
          activityLevel: {
            label: rows[0]["Activity Level Label"],
            values: [
              rows[0]["Activity Level Values"],
              rows[1]["Activity Level Values"],
              rows[2]["Activity Level Values"],
            ],
          },
          goal: {
            label: rows[0]["Goal Label"],
            values: [
              rows[0]["Goal Values"],
              rows[1]["Goal Values"],
              rows[2]["Goal Values"],
            ],
          },
          dietPreference: {
            label: rows[0]["Diet Preference Label"],
            values: [
              rows[0]["Diet Preference Values"],
              rows[1]["Diet Preference Values"],
              rows[2]["Diet Preference Values"],
              rows[3]["Diet Preference Values"],
              rows[4]["Diet Preference Values"],
              rows[5]["Diet Preference Values"],
              rows[6]["Diet Preference Values"],
              rows[7]["Diet Preference Values"],
            ],
          },
          water: {
            label: rows[0]["Water Label"],
          },
        },
      },
      myNumbers: {
        title: rows[0]["My Numbers Title"],
        calories: {
          text: rows[0]["Calories Helper"],
        },
        bmi: {
          title: rows[0]["BMI Card Title"],
          body: rows[0]["BMI Card Info"],
        },
        bmr: {
          title: rows[0]["BMR Card Title"],
          body: rows[0]["BMR Card Info"],
        },
        macro: {
          title: rows[0]["Macro Card Title"],
          body: rows[0]["Macro Card Info"],
        },
        water: {
          title: rows[0]["Water Card Title"],
          titleSmall: rows[0]["Water Card Title Small"],
          body: rows[0]["Water Card Info"],
        },
      },
      downloadButtonText: rows[0]["Download Button Text"],
      emailCollectionForm: {
        title: rows[0]["Email Collection Form Title"],
        inputs: {
          first: { label: rows[0]["Email Collection Form First Name Label"] },
          last: { label: rows[0]["Email Collection Form Last Name Label"] },
          email: { label: rows[0]["Email Collection Form Email Label"] },
        },
        cancelButtonText: rows[0]["Email Collection Form Cancel Button Text"],
        submitButtonText: rows[0]["Email Collection Form Submit Button Text"],
      },
      emailThankyouModal: {
        title: rows[0]["Email Collection Thank You Modal Title"],
        body: rows[0]["Email Collection Thank You Modal Body"],
        disclaimer: rows[0]["Email Collection Thank You Modal Disclaimer"],
        closeButton:
          rows[0]["Email Collection Thank You Modal Close Button Text"],
      },
    };
    return {
      status: 200,
      data: appData,
    };
  } catch {
    return {
      status: 400,
      msg: "Error fetching app data spreadsheet",
    };
  }
};

export default getAppData;
