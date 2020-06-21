import jsPDF from "jspdf";
import LOGO from "../assets/images/logo.png";

const getDataUri = (url) => {
  return new Promise((resolve) => {
    var image = new Image();
    image.setAttribute("crossOrigin", "anonymous"); //getting images from external domain

    image.onload = function () {
      var canvas = document.createElement("canvas");
      canvas.width = this.naturalWidth;
      canvas.height = this.naturalHeight;

      //next three lines for white background in case png has a transparent background
      var ctx = canvas.getContext("2d");
      ctx.fillStyle = "#fff"; /// set white fill style
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      canvas.getContext("2d").drawImage(this, 0, 0);
      resolve(canvas.toDataURL("image/jpeg"));
    };

    image.src = url;
  });
};

const generatePDF = async (results, e) => {
  e.preventDefault();
  console.log("results", results);

  const doc = new jsPDF();
  const dataUri = await getDataUri(LOGO);

  doc.addImage(dataUri, "PNG", 15, 15, 64, 30);

  doc.output("dataurlnewwindow");
};

export default generatePDF;
