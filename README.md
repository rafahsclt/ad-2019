# Amigo Secreto
  Essa aplicação contém um CRUD que possibilita realizar um sorteio de amigo secreto.

# Telas e Usabilidade

### Landing (Tela Inicial)
![landing](https://user-images.githubusercontent.com/60005589/96326859-b954ec80-100a-11eb-8063-ba5900ee0367.PNG)

### SignUp (Tela de Cadastro)
Ao utilizar o aplicativo pela primeira vez, é sugerido que fala a criação de mais de 1 usuários
![signup](https://user-images.githubusercontent.com/60005589/96326899-fd47f180-100a-11eb-9d83-a780a979be77.PNG)

### LogIn
A autenticação é realizada apenas por e-mail
![login](https://user-images.githubusercontent.com/60005589/96326931-3e400600-100b-11eb-897d-adad756f7297.PNG)

### Draw (Tela de sorteio)
Nessa tela é possível visualizar :
  - Lista de pessoas cadastradas (o ícone mostra se a pessoa ja foi sorteada ou não)
  - Informações sobre o usuário logado (Botão que leva para página de Editar e Botão que realiza o logout)
  - Botão de sorteio
![draw](https://user-images.githubusercontent.com/60005589/96327027-3af94a00-100c-11eb-9414-124408607a59.PNG)

Ao clicar no botão de sorteio, o campo de usuário sorteado muda
![drawed](https://user-images.githubusercontent.com/60005589/96327035-506e7400-100c-11eb-91f2-6e8a0ded1ccf.PNG)

O backend também manda um link simulando um envio de e-mail (nodemailer)
![backend](https://user-images.githubusercontent.com/60005589/96327061-87dd2080-100c-11eb-96dc-f283c13ee466.PNG)
![email](https://user-images.githubusercontent.com/60005589/96327071-94617900-100c-11eb-8233-81c2bf2a152f.PNG)

### Profile (Tela de perfil)
Nessa página os inputs ja trazem as informações do usuário como padrão e também podemos alterar ou deletar o usuário.
![profile](https://user-images.githubusercontent.com/60005589/96327109-dee2f580-100c-11eb-93e1-90e8142c2966.PNG)

# To Do
  Alguns problemas ainda não solucionados :
  - Não há tratativa de erro quando tentam realizar o sorteio com apenas um pessoa adastrada
  - A pessoa tem possibilidade de sortear ela mesmo
  - As rotas não são separadas em autenticadas e não autenticadas
