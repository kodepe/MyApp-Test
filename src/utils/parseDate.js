import React from "react";
import moment from "moment";
const parseDate = (date) => {
  const day = moment(date).locale("es").format("DD");
  const month = moment(date).locale("es").format("MMMM");
  const year = moment(date).locale("es").format("YYYY");
  return `${day} de ${month.charAt(0).toUpperCase() + month.slice(1)}, ${year}`;
};
export default parseDate;
