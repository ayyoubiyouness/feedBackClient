export const capitalizeFirstLetter = (str1) => {
  const namePart = str1.split("@");
  const name = namePart[0].split("_");
  const word = name[0];
  const first = word[0];
  let firstCapitale;
  if (first.length == 1) {
    firstCapitale = first.toUpperCase();
  } else {
    firstCapitale = ""
  }
  const others = word.slice(1, word.length);
  const result = firstCapitale.concat("", others);
  return result;
};




const username = [
  { firstName: "Youness", lastName: "Ayyoubi" },
  { firstName: "Youness", lastName: "Ayyoubi" },
  { firstName: "Anas", lastName: "Kasbi" },
];
export const lastNameSearch = (word) => {
  for (let i = 0; i < username.length; i++) {
    if (username[i].lastName === word) {
      return username[i].firstName;
    }
  }
  return "";
};
