import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'
import styles  from '../styles/Cadastro.module.css'
import Card from '../src/components/card/card'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function CadastroPage(){
  const [formData, setFormData] = useState({
    name: '',
    email:'',
    password:''
  });
  const [error, setError] = useState('');

  const router = useRouter();

  const handleFormEdit = (event, name) => {
    setFormData({
      //copia todos os dados do formData
      ...formData,
      [name]: event.target.value
    });
  };

  const handleForm = async (event) =>{
    try {
      //previnir que pagina seja carregada
      event.preventDefault();
      const response = await fetch('./api/user/cadastro', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      if (response.status !== 201) throw new Error(json);
      setCookie('authorization', json);
      // router.push('/login');
      console.log(json);
    } catch (err) { 
        setError(err.message);
    }
  };

  return (
    <div className={styles.backgroud}>
      <Card title="Crie sua conta">
        <form onSubmit={handleForm} className={styles.form}>
            <Input type="nome" placeholder="Seu nome" required value={formData.name} onChange={(e)=>{handleFormEdit(e,'name')}}/>
            <Input type="email" placeholder="Seu e-mail" required value={formData.email} onChange={(e)=>{handleFormEdit(e,'email')}}/>
            <Input type="password" placeholder="Sua senha" required value={formData.password} onChange={(e)=>{handleFormEdit(e,'password')}}/>
            <Button>Cadastrar</Button>
            <Link href="/login">Já possui conta</Link>
            {error && <p className={styles.error}>{error}</p>}
        </form>
      </Card>
    </div>
  )
}