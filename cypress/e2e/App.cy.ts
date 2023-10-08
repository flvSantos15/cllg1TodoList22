/// <reference types="cypress" />

describe('Todo App', () => {
  it('should be able to visit the todo app', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-cy="logo"]')
  })

  it('should not be able to click the create task button if task input is empty', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-cy="taskField"]').should('be.empty')
    cy.wait(1000)
    cy.get('[data-cy="submitTask"]').should('be.disabled')
  })

  it('should be able to add a task', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-cy="taskField"]').type('Escrever testes')
    cy.wait(1000)
    cy.get('[data-cy="submitTask"]').click()
    cy.wait(1000)
    cy.get('[data-cy="taskNotMarked"]').should('have.text', 'Escrever testes')
  })

  // data-cy="createdTaskCount"
  // data-cy="finishedTaskCount"
  // data-cy="noTaskMsg"
  // data-cy="taskExists"
  // data-cy="taskMarked"
  // data-cy="editModalValidation"

  it('should be able to edit a task', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-cy="taskField"]').type('Escrever testes')
    cy.wait(1000)
    cy.get('[data-cy="submitTask"]').click()
    cy.wait(1000)
    cy.get('[data-cy="taskNotMarked"]').should('have.text', 'Escrever testes')
    cy.get('[data-cy="editTaskButton"]').click()
    cy.wait(1000)
    cy.get('[data-cy="editModal"]').should('have.text', 'Editar todo')
    cy.get('[data-cy="taskEditInput"]').clear().type('Teste alterado')
    cy.get('[data-cy="editSubmitButton"]').click()
    cy.get('[data-cy="taskNotMarked"]').should('have.text', 'Teste alterado')
  })

  // Deletar todo
  // Deve clicar no botão de excluir e a tarefa que foi digitada deve ser excluida
  // Deve poder remover a tarefa do localStorage
  it('should be able to delete a task', () => {
    cy.visit('/')
    cy.wait(1000)
    cy.get('[data-cy="taskField"]').type('Escrever testes')
    cy.wait(1000)
    cy.get('[data-cy="submitTask"]').click()
    cy.wait(1000)
    cy.get('[data-cy="taskNotMarked"]').should('have.text', 'Escrever testes')
    cy.get('[data-cy="removeTaskButton"]').click()
    cy.wait(1000)
    cy.get('[data-cy="noTaskMsg"]').should('be.visible')
  })

  // O contador de tarefas concluidas deve funcionar

  // O contador de tarefas criadas deve funcionar

  // Ao criar uma tarefa e recarregar a página a tarefa criada deve ser lida do localStorage

  // Marcar todo como concluido
  // Ao clicar no btn de concluir deve marcar a tarefa e mudar o contador
  // de tarefas concluidas

  // Desmarcar de concluido
  // Ao clicar no tbn de desmarcar deve desmarcar a tarefa e mudar o contador
  // de tarefas conluidas

  // Não deve ser possivel editar uma tarefa que já esta concluida
})
