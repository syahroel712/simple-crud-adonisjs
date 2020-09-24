'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Siswa extends Model {
  static get table() {
    return 'tb_siswa'
  }
  static get primaryKey() {
    return 'siswa_id'
  }
  //mematikan create_at
  static get createdAtColumn() {
    // return 'created_at'
    return null
  }
  //mematikakan update_at
  static get updatedAtColumn() {
    // return 'updated_at'
    return null
  }
}

module.exports = Siswa
