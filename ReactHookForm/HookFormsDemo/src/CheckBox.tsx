import { Controller, useFormContext } from "react-hook-form";
import { EmailFormProps } from "./App";

export function CheckBox() {
  const methods = useFormContext<EmailFormProps>();

  return(
    <Controller
      control={methods.control}
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