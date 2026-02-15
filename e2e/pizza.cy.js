describe('Order Form', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
  })

  it('enters text into the input', () => {
    cy.get('input[name="name"]')
      .should('be.visible')
      .type('Test User')
    cy.get('input[name="name"]').shoulnd('have.value', 'Test User')
  })

  it('allows selecting multiple ingredients', () => {
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })

    cy.get('input#Pepperoni').should('be.checked')
    cy.get('input#Sosis').should('be.checked')
    cy.get('input#Mısır').should('be.checked')
    cy.get('input#Jalapeno').should('be.checked')
  })

  it('submits the form successfully', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { id: '1', createdAt: '2026-02-12T00:00:00.000Z' }
    }).as('submitOrder')

    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="size"][value="orta"]').check({ force: true })
    cy.get('select[name="dough"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })

    cy.contains('button', 'SİPARİŞ VER').should('not.be.disabled').click()

    cy.wait('@submitOrder').its('request.method').should('eq', 'POST')
  })
})

describe('Order Success Page', () => {
  it('shows ORDER RECEIVED and order summary on success page after submission', () => {
    const orderPayload = {
      name: 'Test User',
      size: 'orta',
      dough: 'İnce Hamur',
      ingredients: ['Pepperoni', 'Sosis', 'Mısır', 'Jalapeno'],
      quantity: 1
    }
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { id: '1', createdAt: '2026-02-12T00:00:00.000Z', ...orderPayload }
    }).as('submitOrder')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="size"][value="orta"]').check({ force: true })
    cy.get('select[name="dough"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').should('not.be.disabled').click()

    cy.wait('@submitOrder')
    cy.contains('h1', 'SİPARİŞ ALINDI').should('be.visible')
    cy.contains('h2', 'Position Absolute Acı Pizza').should('be.visible')
    cy.contains('Sipariş Toplamı').should('be.visible')
  })

  it('navigates back to homepage with the Back to Homepage button', () => {
    const orderPayload = {
      name: 'Test',
      size: 'orta',
      dough: 'İnce Hamur',
      ingredients: ['Pepperoni', 'Sosis', 'Mısır', 'Jalapeno'],
      quantity: 1
    }
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 200,
      body: { id: '1', createdAt: '2026-02-12T00:00:00.000Z', ...orderPayload }
    }).as('submitOrder')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="size"][value="orta"]').check({ force: true })
    cy.get('select[name="dough"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').click()
    cy.wait('@submitOrder')
    cy.contains('h1', 'SİPARİŞ ALINDI').should('be.visible')

    cy.contains('button', 'Anasayfaya Dön').click()
    cy.contains('button', 'ACIKTIM').should('be.visible')
  })
})

describe('Form Validation', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
  })

  it('keeps the Submit button disabled when the form is incomplete', () => {
    cy.contains('button', 'SİPARİŞ VER').should('be.disabled')
    cy.get('input[name="isim"]').type('Ab')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').should('be.disabled')
  })

  it('keeps the Submit button disabled until at least 4 ingredients are selected', () => {
    cy.get('input[name="isim"]').type('Test User')
    cy.get('input[name="boyut"][value="orta"]').check({ force: true })
    cy.get('select[name="hamur"]').select('İnce Hamur')
    cy.get('label[for="Pepperoni"]').click()
    cy.get('label[for="Sosis"]').click()
    cy.get('label[for="Mısır"]').click()
    cy.get('label[for="Jalapeno"]').click()
    cy.contains('button', 'SİPARİŞ VER').should('not.be.disabled')
    cy.get('label[for="Mısır"]').click()
    cy.contains('button', 'SİPARİŞ VER').should('be.disabled')
  })
})

describe('Network Error Feedback', () => {
  it('shows error message to the user when POST fails', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      statusCode: 500,
      body: {}
    }).as('submitOrderFail')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="size"][value="orta"]').check({ force: true })
    cy.get('select[name="dough"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').click()

    cy.wait('@submitOrderFail')
    cy.get('.submit-error').should('be.visible').and('contain.text', 'Sipariş gönderilemedi')
  })

  it('shows network error message when there is no internet connection', () => {
    cy.intercept('POST', 'https://reqres.in/api/pizza', {
      forceNetworkError: true
    }).as('networkError')

    cy.visit('/')
    cy.contains('button', 'ACIKTIM').click()
    cy.get('input[name="name"]').type('Test User')
    cy.get('input[name="size"][value="orta"]').check({ force: true })
    cy.get('select[name="dough"]').select('İnce Hamur')
    cy.get('input#Pepperoni').check({ force: true })
    cy.get('input#Sosis').check({ force: true })
    cy.get('input#Mısır').check({ force: true })
    cy.get('input#Jalapeno').check({ force: true })
    cy.contains('button', 'SİPARİŞ VER').click()

    cy.wait('@networkError')
    cy.get('.submit-error').should('be.visible').and('contain.text', "İnternet'e bağlanılamadı")
  })
})