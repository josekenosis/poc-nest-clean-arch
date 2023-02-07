export interface AddClient {
  add: (client: AddClient.Params) => Promise<AddClient.Result>
}

export namespace AddClient {
  export type Params = {
    nm_client: string
    email: string
  }
  export type Result = {
    id_client: number
    status: number
    message: string
  }
}
