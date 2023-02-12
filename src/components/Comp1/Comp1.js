import React from "react";
import "./Comp1.css";
import { useForm } from "react-hook-form";

const Comp1 = () => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log("submit success", data);

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			{/* register your input into the hook by invoking the "register" function */}
			<select {...register("name", { required: true, pattern: /^(?!select)/ })}>
				<option value="select">please select</option>
				<option value="name1">name</option>
				<option value="name2">name2</option>
			</select>

			{errors?.name?.type === "required" && <span>required</span>}
			{errors?.name?.type === "pattern" && <span>pattern</span>}

			<input type="submit" />
		</form>
	);
};

export default Comp1;
