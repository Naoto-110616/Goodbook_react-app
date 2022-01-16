export const CUSTOM_GENDER = [
	{
		value: 1,
		gender: "Select your pronoun",
	},
	{
		value: 2,
		gender: 'She:"Wish her a happy birthday!"',
	},
	{
		value: 3,
		gender: 'He: "Wish him a happy birthday!',
	},
	{
		value: 4,
		gender: 'They:"Wish them a happy birthday!"',
	},
];

export const today = new Date().getDate();
export const birthYear = new Date().getFullYear();
export const birthMonth = new Date().getMonth() + 1;

export const setYear = () => {
	let list = [];
	for (let i = 1900; i <= new Date().getFullYear(); i++) {
		list.push(
			<option key={`year_${i}`} value={i}>
				{i}
			</option>
		);
	}
	return list;
};
export const setMonth = () => {
	let list = [];
	for (let i = 1; i <= 12; i++) {
		list.push(
			<option key={`month_${i}`} value={i}>
				{i}
			</option>
		);
	}
	return list;
};
export const setDay = () => {
	let list = [];
	const lastDay = new Date(Number(birthYear), Number(birthMonth), 0).getDate();
	for (let i = 1; i <= lastDay; i++) {
		list.push(
			<option key={`day_${i}`} value={i}>
				{i}
			</option>
		);
	}
	return list;
};
