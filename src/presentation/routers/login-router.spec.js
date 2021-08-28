class LoginRouter {
  route (httpRequest) {
    if (!httpRequest.body.email) {
      return {
        statusCode: 500
      }
    }
  }
}

describe('Login Router', () => {
  test('Should return 500 if no email provided', () => {
    const sut = new LoginRouter()
    const httpRequest = {
      body: {
        password: 'password'
      }
    }

    const httpResponse = sut.route(httpRequest)
    expect(httpResponse.statusCode).toBe(500)
  })
})
