import { RouteComponentProps } from '@reach/router'
import { useForm } from 'react-hook-form'
import { auth } from '../utils/cloudbase'

interface FormProps {
  email: string
  password: string
}

const LoginPage: React.FC<RouteComponentProps> = () => {
  const { register, handleSubmit, watch, getValues} = useForm<FormProps>()

  const watchAll = watch()

  const onSubmit = handleSubmit(async ({ email, password }) => {
    try {
      const res = await auth.signUpWithEmailAndPassword(email, password)

      console.log('login res', res)
    } catch (err) {
      console.log( 'err', err )
    }
  })

  const handleClickLogin = async ()=>{
    const {email, password} = getValues()
    console.log( email, password )
    console.log( auth.hasLoginState() )
    try {
      const res = await auth.signInWithEmailAndPassword(email, password)
      console.log( res )
    }catch (err) {
      console.log( err )
    }
  }

  const handleExit = async ()=>{
    const res = await auth.signOut()
    console.log( res )
  }

  return (
    <form onSubmit={onSubmit}>
      <h1>请登录</h1>
      <input type='text' name='email' ref={register} /> <br/>
      <input type='password' name='password' ref={register} /> <br/>
      <button type='button' onClick={handleClickLogin}>点击登录</button><br/>
      <button type='submit'>点击注册</button>
      <button type='button' onClick={handleExit}>退出登录</button>
      <pre>{JSON.stringify(watchAll, null, 2)}</pre>
    </form>
  )
}

export default LoginPage
