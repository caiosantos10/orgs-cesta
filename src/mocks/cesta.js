import logo from '../../assets/logo.png';

import tomato from '../../assets/frutas/Tomate.png'
import broccoli from '../../assets/frutas/Brócolis.png'
import batata from '../../assets/frutas/Batata.png'
import cucumber from '../../assets/frutas/Pepino.png'
import pumpkin from '../../assets/frutas/Abóbora.png'

const cesta = {
    top: {
        title: "Detalhe da cesta"
    },
    details: {
        name: "Cesta de Verduras",
        logo,
        farmName: "Jenny Jack Farm",
        description: "Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha",
        price: "R$ 40,00",
        button: "Comprar"
    },
    itens: {
        title: "Itens da cesta",
        list: [
            {
                name: "Tomate",
                image: tomato
            },
            {
                name: "Brócolis",
                image: broccoli
            },
            {
                name: "Potato",
                image: batata
            },
            {
                name: "Pepino",
                image: cucumber
            },
            {
                name: "Abóbora",
                image: pumpkin
            },
        ]
    }
}

export default cesta;