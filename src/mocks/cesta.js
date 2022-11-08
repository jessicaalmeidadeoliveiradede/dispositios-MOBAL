import logo from '../../assets/logo.png';
import tomate from '../../assets/frutas/Tomate.png';
import brocolis from '../../assets/frutas/Brocolis.png';
import batata from '../../assets/frutas/Batata.png';
import pepino from '../../assets/frutas/Pepino.png';
import abobora from '../../assets/frutas/Abobora.png';

const cesta = {
    topo: {
        titulo: "Detalhe da cesta",
    },
    detalhes: {
        nome: "Cesta Frutas - pelo menos devia ser",
        logoFazenda: logo,
        nomeFazenda: "Jenny Jack Farm",
        descricao: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        preco: "R$ 40,00",
    },
    itens:{
      titulo: "Itens da cesta",
    lista: [
      {
        nome: "Tomate",
        imagem: tomate,
        link: "https://alavoura.com.br"
       },
      {
        nome: "Brócolis",
        imagem: brocolis,
        link: "https://www.uol.com.br/vivabem/noticias/redacao/2020/05/05/brocolis-fazem-bem-ao-cerebro-confira-9-beneficios-desse-vegetal.htm"
      },
      {
        nome: "Batata",
        imagem: batata,
        link: "https://www.uol.com.br/vivabem/noticias/redacao/2018/11/03/batata-ajuda-a-reduzir-estresse-e-pressao-veja-estes-e-mais-10-beneficios.htm"
      },
      {
        nome: "Pepino",
        imagem: pepino,
        link: "https://www.tuasaude.com/beneficios-do-pepino/"
      },
      {
        nome: "Abóbora",
        imagem: abobora,
        link: "https://www.tuasaude.com/abobora/"
      }
    ]
    }
}

export default cesta;