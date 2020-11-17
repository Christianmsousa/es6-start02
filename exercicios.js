import axios from 'axios';

class Api {
  static async getUserInfo(username){
    
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      console.log(response);
    } catch(err){
      console.warn('Erro ao buscar o usuario')
    }

    
  }
}

// Api.getUserInfo('diego3gsdasda')

// ===================== //

// Exercicios

// 01

const delay = () => new Promise( resolve => setTimeout(resolve, 1000));

async function umPorSegundo(){

  await delay(console.log("1s"));
  await delay(console.log("2s"));
  await delay(console.log("3s"));

};

// umPorSegundo();

// 2

const getUserFromGithub = async (user) =>{
  
  try {
    const response = await axios.get(`https://api.github.com/users/${user}`);
    console.log(response.data);

  } catch(err){
    console.warn('Erro na requisição');
  }
}

// getUserFromGithub("Christianmsousa");
// getUserFromGithub('diego3g124123');


// 3


class Github {
  static async getRepositories(repo){
    try{
      const response = await axios.get(`https://api.github.com/repos/${repo}`);
      console.log(response.data);

    } catch(err){
      console.warn('Repositório não existe');
    }
  }
};

// Github.getRepositories('rocketseat/umbriel');
// Github.getRepositories('rocketseat/rocketseat.com.br');


// 4

const  buscaUsuario = async (user) =>{
  try {
    const User = await axios.get(`https://api.github.com/users/${user}`);
    console.log(User.data);

  } catch(err){
    console.warn('Erro ao busccar usuário');
  }
}

buscaUsuario('Christianmsousa');