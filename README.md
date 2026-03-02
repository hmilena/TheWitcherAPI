# The Witcher API

Uma API backend local e minimalista focada no universo de The Witcher, construída utilizando **Node.js** e **Express**. Esta API foi desenvolvida sob medida para praticar frontend em React, simulando chamadas HTTP para buscar e criar dados.

## 🚀 Como Iniciar a API

1. Certifique-se de ter o Node.js instalado.
2. Navegue até o diretório do projeto: `cd /Users/hmilena/.gemini/antigravity/scratch/witcher-api`
3. Instale as dependências caso ainda não tenha feito:
   ```bash
   npm install
   ```
4. Inicie o servidor em modo de desenvolvimento:
   ```bash
   npm run dev
   ```
   > O servidor estará rodando na porta **3001** (`http://localhost:3001`).

## 📡 Endpoints Disponíveis

A API possui o roteamento de CORS liberado para aceitar chamadas do seu app React sem problemas. Os dados estão armazenados localmente no arquivo `data.json`.

Todas as rotas seguem o padrão RESTful (retornando JSON) e estão no caminho base `/api/`.

### Personagens (`/api/characters`)

- `GET /api/characters`: Retorna a lista de todos os personagens.
- `POST /api/characters`: Cria um novo personagem.
  - _Exemplo de body JSON_: `{ "name": "Vesemir", "profession": "Witcher" }`

### Armas (`/api/weapons`)

- `GET /api/weapons`: Retorna a lista de armas.
- `POST /api/weapons`: Adiciona uma nova arma.

### Livros (`/api/books`)

- `GET /api/books`: Retorna a lista dos livros.
- `POST /api/books`: Adiciona um novo livro.

### Mídias / Séries e Filmes (`/api/media`)

- `GET /api/media`: Retorna a lista de filmes/séries e jogos.
- `POST /api/media`: Adiciona uma nova mídia.

## 💻 Exemplo Prático de Uso no React

```javascript
// Exemplo de como buscar personagens na sua Home.jsx
import { useEffect, useState } from "react";

export default function WitcherList() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/api/characters")
      .then((res) => res.json())
      .then((data) => setCharacters(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <ul>
      {characters.map((char) => (
        <li key={char.id}>
          {char.name} ({char.profession})
        </li>
      ))}
    </ul>
  );
}
```

Boa codificação e divirta-se praticando React no Continente! 🐺🗡️
