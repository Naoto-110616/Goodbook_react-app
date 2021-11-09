import classes from "./CustomeGender.module.css";
import Select from "../../UI/Select/Select";
import Input from "../../UI/Input/Input";
import { CUSTOME_GENDER } from "../../../util/Consts";

const CustomeGender = () => {
  const custome_gender = CUSTOME_GENDER.map((data) => (
    <option value={data.value}>{data.gender}</option>
  ));
  return (
    <>
      <Select>{custome_gender}</Select>
      <Input input={{ id: "gender", type: "text" }} />
    </>
  );
};

export default CustomeGender;
