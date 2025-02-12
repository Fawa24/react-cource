import { SubmitHandler, useForm } from 'react-hook-form'
import './App.scss'

interface EmailFormProps {
  'email': string
  'message' : string
  'isImportant': boolean 
}

function App() {
  const { register, handleSubmit, formState, reset } = useForm<EmailFormProps>({
    mode: 'onChange'
  });

  const emailError = formState.errors['email']?.message;

  const onSubmit:SubmitHandler<EmailFormProps> = (data) => {
    console.log(data);
  }

  return (
    <>
      <h1>Feedback form</h1>
      <button onClick={() => reset({'email' : '', 'message': ''})}>Reset</button>
      <form onSubmit={handleSubmit(onSubmit)}>
        {emailError}
        <input type="text" 
          placeholder='Enter email:'
          {...register('email', 
          {required: 'This field is required'})}/>
        <textarea placeholder='Enter message:'
          {...register('message', 
          {required: 'This field is required'})} />
        <button type='submit'>Send</button>
      </form>
    </>
  )
}

export default App
