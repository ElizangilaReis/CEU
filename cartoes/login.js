function showRegisterForm() {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "block";
  }
  
  function showLoginForm() {
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("loginForm").style.display = "block";
  }
  
  function register() {
    // Obter os valores do formulário de registro
    var nome = document.getElementById("nome").value;
    var email = document.getElementById("emailRegistro").value;
    var senha = document.getElementById("senhaRegistro").value;
    
    // Fazer a lógica de registro aqui
    // Por exemplo, verificar se o usuário já está registrado ou enviar os dados para o servidor
    
    alert("Registro bem-sucedido! Faça login para continuar.");
    showLoginForm();
  }
  
  function login() {
    // Obter os valores do formulário de login
    var email = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
    
    // Fazer a lógica de login aqui
    // Por exemplo, verificar as credenciais no servidor
    
    var user = {
      nome: "John Doe",
      email: "johndoe@example.com",
      numeroEstudante: "123456789",
      curso: "Engenharia de Software",
      universidade: "Universidade ABC"
    };
    
    if (email === user.email && senha === "senha") {
      showCard(user);
    } else {
      alert("Credenciais inválidas. Tente novamente.");
    }
  }
  
  function showCard(user) {
    document.getElementById("loginForm").style.display = "none";
    document.getElementById("registerForm").style.display = "none";
    document.getElementById("cartaoVirtual").style.display = "block";
    
    document.getElementById("nomeUsuario").textContent = user.nome;
    document.getElementById("emailUsuario").textContent = user.email;
    document.getElementById("numeroEstudante").textContent = user.numeroEstudante;
    document.getElementById("curso").textContent = user.curso;
    document.getElementById("universidade").textContent = user.universidade;
  }
  