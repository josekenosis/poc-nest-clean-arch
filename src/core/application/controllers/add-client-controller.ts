import { AddClient } from '@/core/domain/contracts'
import { HttpResponse, notAcceptable, ok, serverError } from '@/core/application/helpers'
import { ValidationBuilder as Builder, Validator } from '@/core/application/validation'
import { Controller } from './controller'

type HttpRequest = { nm_client: string, email: string }

export class AddClientController extends Controller {
  constructor (private readonly addClient: AddClient) {
    super()
  }

  async perform (request: AddClientController.Request): Promise<HttpResponse> {
    try {
      const { nm_client, email } = request
      const result = await this.addClient.add({
        nm_client,
        email
      })
      if (result.status === 200) {
        return ok(result.id_client)
      } else {
        return notAcceptable(result.message)
      }
    } catch (error) {
      return serverError(error)
    }
  }

  override buildValidators ({ nm_client, email }: HttpRequest): Validator[] {
    return [
      ...Builder.of({ value: nm_client, fieldName: 'nm_client' })
        .required()
        .build(),
      ...Builder.of({ value: email, fieldName: 'email' })
        .required()
        .build()
    ]
  }
}

export namespace AddClientController {
  export type Request = {
    nm_client: string
    email: string
  }
}
