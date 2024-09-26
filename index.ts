import { scheduleJob } from 'node-schedule'
import { faker } from '@faker-js/faker';
import { logDB } from './logdb.ts'

const schedule = scheduleJob('*/5 * * * * *', async () => {
    console.log('hr://birthday', 'payload:', {
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
    })

    await logDB.sendEvent('birthday', {
        fullName: faker.person.fullName(),
        email: faker.internet.email(),
    })

    console.log('Event stored')
})

console.log('Schedule running: */5 * * * * *')