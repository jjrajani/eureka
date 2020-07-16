const defaultData = {
  myInfo: {
    title: "My Info",
    inputs: {
      age: {
        label: "Age",
      },
      gender: {
        label: "Gender",
        values: ["Female", "Male"],
      },
      height: {
        feet: {
          label: "Height (ft)",
        },
        inches: {
          label: "Height (in)",
        },
      },
      weight: {
        label: "Weight",
      },
      activityLevel: {
        label: "Activity Level",
        values: ["Low", "Moderate", "High"],
      },
      goal: {
        label: "Goal",
        values: ["Weight Loss", "Improve Health", "Body Recomposition"],
      },
      dietPreference: {
        label: "Diet Preference",
        values: [
          "Anything",
          "Ethnic Specific",
          "Gluten Free",
          "Keto - High Fat",
          "Low Carb",
          "Pescatarian",
          "Vegan",
          "Vegetarian",
        ],
      },
      water: {
        label: "Water (8oz glasses)",
      },
    },
  },
  resultCards: {
    bmi: {
      title: "BMI",
      body:
        "Lorem.. This is a bunch of info about BMI and what it is and what it is and what it is",
    },
    bmr: {
      title: "BMR",
      body:
        "Lorem.. This is a bunch of info about BMR and what it is and what it is and what it is.",
    },
    macro: {
      title: "Macro",
      body:
        "Lorem.. This is a bunch of info about Macros and what it is and what it is and what it is.",
    },
    water: {
      title: "Water",
    },
  },
  downloadButtonText: "Download My Meal Plan",
  emailCollectionForm: {
    title:
      "Lorem. Provide your email address get your personalized Meal Planner! Lorem.",
    cancelButtonText: "No Thanks",
    submitButtonText: "Get my meal planner",
  },
  emailThankyouModal: {
    title: "Lorem. Thank you for subscribing! Lorem.",
    body:
      "Bacon ipsum dolor amet kielbasa sirloin ball tip, prosciutto bresaola turducken porchetta drumstick strip steak shankle tenderloin. Strip steak pork porchetta ribeye ground round cupim. Meatloaf spare ribs tail pastrami, cow burgdoggen tri-tip andouille ball tip boudin jowl kielbasa beef ribs landjaeger frankfurter. Cow chuck pork chop andouille t-bone chislic tail cupim biltong tongue kevin. Corned beef chicken boudin, ham short loin shoulder beef ribs ham hock. Swine pork loin short ribs, strip steak t-bone porchetta pork chop tenderloin venison cow.",
    closeButton: "Close",
  },
};

export default defaultData;
