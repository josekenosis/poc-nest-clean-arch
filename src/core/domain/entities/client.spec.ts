import { Client } from './client'

describe('Client', () => {
  it('should create client with correct data', () => {
    const sut = new Client()
    sut.nm_client = 'any_name'
    sut.email = 'any_email'

    expect(sut).toEqual({
      nm_client: 'any_name',
      email: 'any_email'
    })
  })

  it('should update all data client', () => {
    const sut = new Client()
    sut.id_client = 1
    sut.nm_client = 'any_name'
    sut.email = 'any_email'

    expect(sut).toEqual({
      id_client: 1,
      nm_client: 'any_name',
      email: 'any_email'
    })
  })
})
