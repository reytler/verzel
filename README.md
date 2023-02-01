# CATÁLOGO DE CARROS
Ferramentas utilizadas:

#Backend
- Dotnet 6.0
    - ASP.NET Core 6.0
    - Entity Framework Core 6.0
    - Entity Framework Mysql 6.0
    - Swagger para a documentação da API

#Frontend
- NextJS 13.1.5
    - React 18.2.0
        - Context-api
    - nookies 2.5.2
    - Axios 1.2.5
    - Reactstrap 9.1.5
        - Bootstrap 5.2.3
    - Styled Components 5.3.6

#Banco de dados
- Mysql 8.0.032
- Adminer 4.8 (Para a gestão do banco)

#Deploy
- Docker
- Docker-compose

ATENÇÃO: Para realizar o deploy do sistema é necessário ter o Docker e o Docker-compose instalado em sua máquina. Caso não tenha instalado, deve seguir este [TUTORIAL](https://simplescloud.io/instalacao-docker) (Qualquer OS) antes de realizar o deploy.

Com o Docker e Docker-compose devidamente instalado e os serviços do Docker devidamente iniciados é só entrar na pasta do projeto "~/verzel>" e executar o comando "docker-compose up -d". Após a conclusão do processo irá aparecer a mensagem no seu terminal:

 - Container verzel-adminer-1         Started                                                  
 - Container verzel-verzeldb-1        Started
 - Container verzel-verzelfrontend-1  Started
 - Container verzel-verzelbackend-1   Started 

Após isso o catálogo pode ser acessado pelo seguinte endereço: http://localhost/

O Adminer(gestão do DB) pode ser acessado pelo endereço: http://localhost:8007/

- Sistema: "MySQL"
- Servidor: "verzeldb"
- Usuário: "master" 
- Senha: "master"
- Base de dados: "verzel"
