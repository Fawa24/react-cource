import { Control, Controller, UseFormRegister } from "react-hook-form";
import { EmailFormProps } from "./App";

interface Props {
  control: Control<EmailFormProps>;
  register: UseFormRegister<EmailFormProps>
}

export function CheckBox({ control }: Props) {
  return(
    <Controller
      control={control}
      name='isImportant'
      render={({ field }) => (
        <button 
          style={{padding: 6, marginBottom: 10, display: 'block'}}
          onClick={(e) => {
            e.preventDefault();
            field.onChange(!field.value);
          }}
        >
          {field.value ? 'Important message' : 'Not important message'}
        </button>
      )}
    />
  )
}