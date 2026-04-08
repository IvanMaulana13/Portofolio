import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient()

async function main() {
  const adminEmail = 'admin@example.com'
  const adminPassword = 'password123'
  
  const existingAdmin = await prisma.admin.findUnique({
    where: { email: adminEmail }
  })

  if (!existingAdmin) {
    const hashedPassword = await bcrypt.hash(adminPassword, 10)
    await prisma.admin.create({
      data: {
        email: adminEmail,
        password: hashedPassword,
      }
    })
    console.log(`Admin user created with email: ${adminEmail}`)
  } else {
    console.log(`Admin user already exists with email: ${adminEmail}`)
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
