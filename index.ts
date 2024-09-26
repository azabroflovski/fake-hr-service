import { scheduleJob } from 'node-schedule'
import { faker } from '@faker-js/faker';
import { logDB } from './logdb.ts'

const schedule = scheduleJob('*/5 * * * * *', async () => {
    await logDB.sendEvent('birthday', {
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
    })

    console.log('hr://birthday', 'payload:', {
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
    })
})

console.log('Schedule running: */5 * * * * *')