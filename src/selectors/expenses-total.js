
export default (expenses) => {
	// my solution

	// let total = 0;
	// expenses.forEach((expense) => total += expense.amount);
	// return total;

	// COURSE SOLUTION

	if (expenses.length === 0) {
		return 0;
	} else {
		return expenses
			.map((expense) => expense.amount)
			.reduce((sum,val) => sum + val);
	}	
	
};