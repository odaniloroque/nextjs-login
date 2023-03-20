import styles  from '../styles/Cadastro.module.css'
import Card from '../src/components/card/card'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'
export default function CadastroPage(){
  return (
    <div className={styles.backgroud}>
      <Card title="Crie sua conta">
        <form className={styles.form}>
            <Input type="nome" placeholder="Seu nome"/>
            <Input type="email" placeholder="Seu e-mail"/>
            <Input type="password" placeholder="Sua senha"/>
            <Button>Cadastrar</Button>
            <Link href="/login">Já possui conta</Link>
        </form>
      </Card>
    </div>
  )
}