import type { NestFastifyApplication } from '@nestjs/platform-fastify'
import { NestFactory } from '@nestjs/core'
import { FastifyAdapter } from '@nestjs/platform-fastify'
import { AppModule } from './app.module'

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter(), {
    logger: ['error', 'warn'],
  })

  app.setGlobalPrefix('api')

  const PORT = process.env.PORT ?? 4040

  await app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Nest app is running on http://localhost:${PORT}/api`)
  })
}

bootstrap()
