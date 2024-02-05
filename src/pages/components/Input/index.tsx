import { InputContainer, InputControl } from "./styles";

type InputProps = {
    placeholder?: string;
}

export function Input({ placeholder }: InputProps) {
    return (
        <InputContainer>
            <InputControl placeholder={placeholder || ""} />
        </InputContainer>
    );
}