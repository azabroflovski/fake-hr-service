import { scheduleJob } from 'node-schedule'
import { faker } from '@faker-js/faker';
import { logDB } from './logdb.ts'

const schedule = scheduleJob('*/5 * * * * *', async () => {
    const fakeUser = {
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
    }

    console.log('hr://birthday', 'payload', JSON.stringify(fakeUser))

    try {
      await logDB.sendEvent('birthday', {
          fullName: faker.person.fullName(),
          email: faker.internet.email(),
      })

      console.log('Event stored')
    } catch (error) {
      console.log(error)
    }
})

console.log('Schedule running: */5 * * * * *')
