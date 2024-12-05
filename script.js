var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const date_1 = new Date(date1);
	const date_2 = new Date(date2)
	const date = date_1 - date_2;
	return Math.floor(date/86400000)

};

// Do not change the code below.
// const dateOne = prompt("Enter Start Date.");
// const dateTwo = prompt("Enter End Date.");
// alert(dateDiffInDays(dateOne, dateTwo));
