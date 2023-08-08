import { useForm } from "react-hook-form";
import Styled from "./styles";

const Form = ({ onSubmit, button, fields = [] }) => {
    const { register, handleSubmit } = useForm();

    return (
        <Styled.Form onSubmit={handleSubmit(onSubmit)}>
            {fields.map(field => {
                return <Styled.Input key={field.name} name={field.name} placeholder={field.placeholder} type={field.type || "text"} {...register(field.name)} />
            })}

            <Styled.Button type="submit">{button}</Styled.Button>
        </Styled.Form>
    )
}

export default Form;