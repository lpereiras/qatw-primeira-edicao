import pgPromise from 'pg-promise'

const pgp = pgPromise()
//realiza conexão com banco de dados especificado
const db = pgp('postgresql://dba:dba@paybank-db:5432/UserDB')

export async function get2FACode() {
  const query = `
    SELECT id, code
    FROM public."TwoFactorCode"
    ORDER BY id DESC
    LIMIT 1;
  `
  //oneOrNone = executa a query especificada e retorna ou não algum registro
  const result = await db.oneOrNone(query)
  return result.code
}
