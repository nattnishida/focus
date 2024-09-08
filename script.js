let checkboxId;

function adicionarTarefa() {
     //Cria um id único para cada checkbox
    checkboxId = "checkbox-${Date.now()}"

    if (document.getElementById(checkboxId)) {
        // Gera um novo ID
        checkboxId = `checkbox-${Date.now()}-${Math.random()}`;
      }

    //Pega o valor do input
    const novaTarefa = document.getElementById("novaTarefa").value;

    //Se o input estiver vazio
    if (novaTarefa == "") {
        alert("Insira uma tarefa")
        // section.innerHTML = "Insira uma tarefa"
        return
    }

    //Cria um novo elemento de lista
    const novoItem = document.createElement("li");
    novoItem.classList.add("label-tarefa");
    // novoItem.textContent = novaTarefa

    //Cria uma checkbox
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox";
    checkbox.id = checkboxId;
    checkbox.classList.add("checkbox-custom");

    //Cria um label para a checkbbox
    const label = document.createElement("label");
    label.htmlFor = checkboxId;
    label.textContent = novaTarefa

    //Adiciona o checkbox ao item da lista
    novoItem.appendChild(checkbox);

    //Adiciona o texto da tarefa ao item da lista
    novoItem.appendChild(label);

    //Adiciona o novo item à lista
    const lista = document.getElementById("listaTarefas");
    lista.appendChild(novoItem);
    novoItem.classList.add("novo-item");

    //Limpa o campo do input
    document.getElementById("novaTarefa").value = "";


}