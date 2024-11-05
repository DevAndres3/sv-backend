
import dotenv from 'dotenv'
dotenv.config()

export const config = {
  dbUser: process.env.DB_USER || 'root',
  dbPassword: process.env.DB_PASSWORD as string || 'voley',
  dbHost: process.env.DB_HOST as string || '172.18.0.2',
  dbPort: process.env.DB_PORT as string || '5432',
  dbName: process.env.DB_NAME as string || 'db',
  emailUser: process.env.EMAIL_USER as string || '',
  emailPass: process.env.EMAIL_PASS as string || '',
  secret: process.env.SECRET as string || 'secreto',
  secretPassword: process.env.SECRET_PASSWORD as string || 'seeeecreeto',


}


export const roles = {
  admin: 1,
  customer: 2,

}
