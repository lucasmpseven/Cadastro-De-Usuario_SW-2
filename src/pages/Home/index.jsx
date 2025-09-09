import './style.css'
import Lixeira from '../../assets/lixeira.png'

function Home() {
  const usuarios = [{
    id: 'jdjfjgghgj',
    nome: 'Teste',
    idade: 30,
    email: 'teste@email.com'
  },{
    id: 'akdsfkahbaj',
    nome: 'Iago',
    idade: 15,
    email: 'iago@email.com'
  }]
  return (
  <div className='container'>
    <form>
      <h1>Cadastro de Usuários</h1>
      <input name='nome' type='text'/>
      <input name='idade' type='number'/>
      <input name='email' type='email'/>
      <button type='button'>Cadastrar</button>
    </form>

    {usuarios.map(usuario => (
      <div key={usuario.id} className='card'>
        <div>
          <p>Nome: {usuario.nome}</p>
          <p>Idade: {usuario.idade}</p>
          <p>Email: {usuario.email}</p>
      </div>
    <button>
      <img className='lixo' src={Lixeira}/>
    </button>
    </div>
    ))}

    </div>
  )
}

export default Home