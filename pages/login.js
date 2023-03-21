import { useState } from 'react'
import { setCookie } from 'cookies-next'
import { useRouter } from 'next/router'

import styles  from '../styles/Login.module.css'
import Card from '../src/components/card/card'
import Input from '../src/components/input/input'
import Button from '../src/components/button/button'
import Link from 'next/link'

export default function LoginPage(){

  const [formData, setFormData] = useState({
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
      const response = await fetch('./api/user/login', {
        method: 'POST',
        body: JSON.stringify(formData)
      })
      const json = await response.json()
      if (response.status !== 200) throw new Error(json);
      setCookie('authorization', json);
      router.push('/');
    } catch (err) { 
        setError(err.message);
    }
  };



  return (
    <div className={styles.backgroud} > 
       <Card title="Entre em sua conta">
       <form className={styles.form} onSubmit={handleForm}>
            <Input type="email" placeholder="Seu e-mail" required value={formData.email} onChange={(e)=>{handleFormEdit(e,'email')}}/>
            <Input type="password" placeholder="Sua senha" required value={formData.password} onChange={(e)=>{handleFormEdit(e,'password')}}/>
            <Button>Entrar</Button>
            <Link href="/cadastro">Ainda não possui conta</Link>
            {error && <p className={styles.error}>{error}</p>}
        </form>
        </Card>
    </div>
  )
}