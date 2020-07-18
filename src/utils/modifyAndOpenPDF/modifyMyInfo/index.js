// my info age block start x 104 y 412.75 height 31 width 166.5
// activity level block start x 453.5 y 412 width 314.25 height 26
import { red } from "../colors";

const firstRowY = 394,
  secondRowY = 361.5,
  thirdRowY = 328.5,
  fourthRowY = 295.5,
  color = red;

const texts = (info) => [
  // Age
  {
    text: info.age,
    x: 171.75,
    y: firstRowY,
  },
  // Gender
  {
    text: info.gender,
    x: () => (info.gender === "Female" ? 151.5 : 160.5),
    y: secondRowY,
  },
  // Height
  {
    text: `${info.heightFt}’ ${info.heightIn}”`,
    x: () => (`${info.heightIn}`.length === 1 ? 164 : 160),
    y: thirdRowY,
  },
  // Weight
  {
    text: `${info.weight} lbs`,
    x: () => (`${info.weight}`.length === 3 ? 153 : 158),
    y: fourthRowY,
  },
  // Activity Level
  {
    text: info.activity,
    x: () => {
      if (info.activity === "Moderate") {
        return 566.25;
      } else if (info.activity === "Low") {
        return 592;
      } else if (info.activity === "High") {
        return 588;
      }
    },
    y: firstRowY,
  },
  // Goal
  {
    text: info.goal,
    x: () => {
      if (info.goal === "Body Recomposition") {
        return 523.5;
      } else if (info.goal === "Weight Loss") {
        return 561;
      } else if (info.goal === "Improve Health") {
        return 548;
      }
    },
    y: secondRowY,
  },
  // Diet Preference
  {
    text: info.diet,
    x: () => {
      if (info.diet === "Keto - High Fat") {
        return 548;
      } else if (info.diet === "Vegetarian") {
        return 566;
      } else if (info.diet === "Vegan") {
        return 579;
      } else if (info.diet === "Anything") {
        return 572;
      } else if (info.diet === "Pescatarian") {
        return 562;
      } else if (info.diet === "Low Carb") {
        return 570;
      } else if (info.diet === "Gluten Free") {
        return 561;
      } else if (info.diet === "Ethnic Specific") {
        return 549;
      }
    },
    y: thirdRowY,
  },
  // Water
  {
    text: info.water,
    x: () => (`${info.water}`.length === 1 ? 600.75 : 595.75),
    y: fourthRowY,
  },
];

const modifyMyInfo = (page, info, font) => {
  texts(info).forEach((text) => {
    page.drawText(text.text, {
      x: typeof text.x === "function" ? text.x() : text.x,
      y: text.y,
      size: 18,
      font: font.bold,
      color,
    });
  });
};

export default modifyMyInfo;
