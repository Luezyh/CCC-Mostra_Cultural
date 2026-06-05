# 🎨 Mostra Cultural — Colégio Caminhos e Colinas

Site institucional desenvolvido para a **Mostra Cultural 2026** do Colégio Caminhos e Colinas (CCC). A página apresenta os projetos e trabalhos dos alunos em arte, ciência e cultura, com foco em uma experiência visual moderna e responsiva.

---

## ✨ Funcionalidades

- **Hero section** com chamada principal e botão de navegação
- **Seção "Nossa Essência"** com cards descritivos das categorias da mostra (Artes Visuais, Ciência e Tecnologia, Cultura e Dança)
- **Galeria de Projetos** com slider animado, navegação por botões e dots, e autoplay de 5 segundos
- **Header fixo** com efeito glassmorphism ao rolar a página
- **Animações de scroll reveal** nos elementos da página
- **Rodapé** com identidade visual do evento

---

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (variáveis, flexbox, grid, animações)
- JavaScript vanilla (sem dependências)
- [Font Awesome 6](https://fontawesome.com/) para ícones
- [Google Fonts](https://fonts.google.com/) — família Outfit

---

## 📁 Estrutura de arquivos

```
/
├── index.html       # Estrutura da página
├── style.css        # Estilos e tema visual
├── script.js        # Interatividade (slider, scroll, header)
└── images/
    ├── art.png      # Imagem da galeria — artes
    └── science.png  # Imagem da galeria — ciências
```

---

## 🎨 Paleta de cores

| Variável            | Cor        | Uso                        |
|---------------------|------------|----------------------------|
| `--primary-orange`  | `#ed6f39`  | Artes Visuais, destaques   |
| `--primary-green`   | `#51ab33`  | Ciência e Tecnologia       |
| `--primary-purple`  | `#572f87`  | Cor principal / logo       |
| `--primary-cyan`    | `#50bcd4`  | Galeria, rodapé            |

---

## 🚀 Como rodar

Por ser um site estático, basta abrir o arquivo `index.html` diretamente no navegador — sem instalação ou servidor necessários.

```bash
# Opcionalmente, com o VS Code e a extensão Live Server:
# clique com o botão direito em index.html → "Open with Live Server"
```

---

## 📌 Observações

- O slider da galeria foi implementado com JS puro, sem bibliotecas externas.
- As imagens da galeria (`images/art.png`, `images/science.png`) devem ser adicionadas manualmente na pasta `/images`.
- O site é responsivo para telas menores que 768px, com ajuste de tipografia e ocultação do menu de navegação.

---

Desenvolvido com carinho para a comunidade escolar do CCC. 💜
