import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";
import Modal from "../UI/Modal/Modal";
import Select from "../UI/Select/Select";
import classes from "./Signup.module.css";
const DAY = [
	1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22,
	23, 24, 25, 26, 27, 28, 29, 30, 31,
];
const MONTH = [
	{
		value: 1,
		month: "Jan",
	},
	{
		value: 2,
		month: "Feb",
	},
	{
		value: 3,
		month: "Mar",
	},
	{
		value: 4,
		month: "Apr",
	},
	{
		value: 5,
		month: "May",
	},
	{
		value: 6,
		month: "Jun",
	},
	{
		value: 7,
		month: "Jul",
	},
	{
		value: 8,
		month: "Aug",
	},
	{
		value: 9,
		month: "Sep",
	},
	{
		value: 10,
		month: "Oct",
	},
	{
		value: 11,
		month: "Nov",
	},
	{
		value: 12,
		month: "Dec",
	},
];
const YEAR = [
	1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912,
	1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925,
	1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938,
	1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951,
	1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964,
	1965, 1966, 1967, 1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977,
	1978, 1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989, 1990,
	1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003,
	2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016,
	2017, 2018, 2019, 2020, 2021,
];

const Signup = (props) => {
	const month = MONTH.map((data) => (
		<option value={data.value}>{data.month}</option>
	));
	const day = DAY.map((data) => <option value={data}>{data}</option>);
	const year = YEAR.map((data) => <option value={data}>{data}</option>);
	return (
		<Modal>
			<form className={classes.signup}>
				<div>
					<div className={classes["signup-text"]}>
						<div>
							<h2>Sing Up</h2>
							<p>It’s quick and easy.</p>
						</div>
						<div className={classes["signup-x"]}>
							<i onClick={props.onClose} class="far fa-times-circle"></i>
						</div>
					</div>
					<Input signup="ture" input={{ placeholder: "First name" }} />
					<Input signup="ture" input={{ placeholder: "Last name" }} />
					<Input
						signup="ture"
						input={{ placeholder: "Mobile number or email" }}
					/>
					<Input signup="ture" input={{ placeholder: "New password" }} />
					<p className={classes["category-name"]}>Birthday</p>
					<div className={classes.birthday}>
						<Select signup={true} select={{ name: "month", title: "month" }}>
							{month}
						</Select>
						<Select signup={true} select={{ name: "day", title: "day" }}>
							{day}
						</Select>
						<Select signup={true} select={{ name: "year", title: "year" }}>
							{year}
						</Select>
					</div>
					<p className={classes["category-name"]}>Gender</p>
					<div className={classes.gender}>
						<Input
							id="radio1"
							label="Female"
							radio={true}
							input={{
								type: "radio",
								name: "gender",
								value: "Female",
							}}
						/>
						<Input
							id="radio2"
							label="Male"
							radio={true}
							input={{
								type: "radio",
								name: "gender",
								value: "Male",
							}}
						/>
						<Input
							id="radio3"
							label="Custom"
							radio={true}
							input={{
								type: "radio",
								name: "gender",
								value: "Custom",
							}}
						/>
					</div>
					<Button>Sing Up</Button>
				</div>
			</form>
		</Modal>
	);
};
export default Signup;
