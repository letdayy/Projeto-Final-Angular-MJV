## Em Construção 🚧

Projeto feito utilizando o framework Angular.

## Comandos utilizados para criar o projeto:
```bash
ng new ProjetoFinalAngular
```
```bash
cd ProjetoFinalAngular
```
criação das pastas shared e feature
```bash
ng g m shared
```
criação das pastas home e login dentro de feature
```bash
ng g m features/home
```
criação das pastas components dentro das pastas home, login e shared
criação dos componentes header e footer, como no exemplo abaixo
```bash
ng g c shared/components/header
```
```bash
ng g c features/home/components/course-list
```
criação da pasta models dentro da course-list com o arquivo chamado course.model.ts

Para exibir algo na tela deve-se criar um componente do tipo page na home.
```bash
ng g c features/home/pages/home --skip-selector
```
Foi utilizada a biblioteca de componentes Angular Material
````bash
ng add @angular/material
```