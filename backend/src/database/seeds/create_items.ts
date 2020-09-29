import Knex from 'knex'

export async function seed(knex: Knex) {
  await knex('items').insert([
    { title: 'Lamps', image: 'lampada.svg' },
    { title: 'Batteries', image: 'baterias.svg' },
    { title: 'Papers', image: 'papeis-papelao.svg' },
    { title: 'Electronic waste', image: 'eletronicos.svg' },
    { title: 'Organic waste', image: 'organicos.svg' },
    { title: 'Kitchen oil', image: 'oleo.svg' },
  ])
}
