import styles  from '../styles/Login.module.css'
import Card from '../src/components/card/card'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function LoginPage(){
  return (
    <div className={styles.backgroud} > 
       <Card title="Entre em sua conta">
       <form className={styles.form}>
            <Input type="email" placeholder="Seu e-mail"/>
            <Input type="password" placeholder="Sua senha"/>
            <Button>Entrar</Button>
            <Link href="/cadastro">Ainda não possui conta</Link>
        </form>
        </Card>
    </div>
  )
}