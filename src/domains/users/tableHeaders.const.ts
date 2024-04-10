import type {ReadonlyHeaders} from '~/types/headers'

export const tableHeadersConst = [
  {title: 'Login', align: 'start', sortable: true, key: 'lastName'},
  {title: 'Permissions', align: 'start', sortable: true, key: 'firstName'},
  {title: 'Actions', key: 'actions', sortable: false},
] satisfies ReadonlyHeaders
