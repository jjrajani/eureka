// my info age block start x 104 y 412.75 height 31 width 166.5
// activity level block start x 453.5 y 412 width 314.25 height 26
import { red } from "../colors";

const firstRowY = 394,
  secondRowY = 361.5,
  thirdRowY = 328.5,
  fourthRowY = 295.5,
  color = red;

const modifyMyInfo = (page, info, font) => {
  // Age
  page.drawText(`${info.age}`, {
    x: 171.75,
    y: firstRowY,
    size: 18,
    font: font.bold,
    color,
  });

  // Gender
  page.drawText(`${info.gender}`, {
    x: info.gender === "Female" ? 151.5 : 160.5,
    y: secondRowY,
    size: 18,
    font: font.bold,
    color,
  });

  // Height
  page.drawText(`${info.heightFt}’ ${info.heightIn}”`, {
    x: `${info.heightIn}`.length === 1 ? 164 : 160,
    y: thirdRowY,
    size: 18,
    font: font.bold,
    color,
  });

  // Weight
  page.drawText(`${info.weight} lbs`, {
    x: `${info.weight}`.length === 3 ? 153 : 158,
    y: fourthRowY,
    size: 18,
    font: font.bold,
    color,
  });

  // Activity Level
  let activityX;
  if (info.activity === "Moderate") {
    activityX = 566.25;
  } else if (info.activity === "Low") {
    activityX = 592;
  } else if (info.activity === "High") {
    activityX = 588;
  }
  page.drawText(info.activity, {
    x: activityX,
    y: firstRowY,
    size: 18,
    font: font.bold,
    color,
  });

  // Goal
  let goalX;
  if (info.goal === "Body Recomposition") {
    goalX = 523.5;
  } else if (info.goal === "Weight Loss") {
    goalX = 561;
  } else if (info.goal === "Improve Health") {
    goalX = 548;
  }
  page.drawText(info.goal, {
    x: goalX,
    y: secondRowY,
    size: 18,
    font: font.bold,
    color,
  });

  // Diet Preference
  let dietX;
  if (info.diet === "Keto - High Fat") {
    dietX = 548;
  } else if (info.diet === "Vegetarian") {
    dietX = 566;
  } else if (info.diet === "Vegan") {
    dietX = 579;
  } else if (info.diet === "Anything") {
    dietX = 572;
  } else if (info.diet === "Pescatarian") {
    dietX = 562;
  } else if (info.diet === "Low Carb") {
    dietX = 570;
  } else if (info.diet === "Gluten Free") {
    dietX = 561;
  } else if (info.diet === "Ethnic Specific") {
    dietX = 549;
  }
  page.drawText(info.diet, {
    x: dietX,
    y: thirdRowY,
    size: 18,
    font: font.bold,
    color,
  });

  // Water
  page.drawText(`${info.water}`, {
    x: `${info.water}`.length === 1 ? 600.75 : 595.75,
    y: fourthRowY,
    size: 18,
    font: font.bold,
    color,
  });
};

export default modifyMyInfo;
