import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import './App.scss'
import { CheckBox } from './CheckBox'

export interface EmailFormProps {
  'email': string
  'message' : string
  'isImportant': boolean
}

function App() {
  const methods = useForm<EmailFormProps>({
    mode: 'onChange'
  });

  const emailError = methods.formState.errors['email']?.message;

  const onSubmit:SubmitHandler<EmailFormProps> = (data) => {
    console.log(data);
  }

  return (
    <FormProvider {...methods}>
      <h1>Feedback form</h1>
      <button onClick={() => methods.reset({'email' : '', 'message': ''})}>Reset</button>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        {emailError}
        <input type="text" 
          placeholder='Enter email:'
          {...methods.register('email', 
          {required: 'This field is required'})}/>
        <textarea placeholder='Enter message:'
          {...methods.register('message', 
          {required: 'This field is required'})} />
        <CheckBox />
        <button type='submit'>Send</button>
      </form>
    </FormProvider>
  )
}

export default App
