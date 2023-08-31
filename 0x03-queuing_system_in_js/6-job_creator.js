const kue = require('kue');

const queue = kue.createQueue();
const jobObj = {
    phoneNumber: '53647283910',
    message: 'Verify your account',
};

const queueName = 'push_notification_code';

const job = queue.create(queueName, jobObj).save();

job.on('enqueue', () => console.log(`Notification job created: ${job.id}`))
    .on('complete', () => console.log('Notification job completed'))
    .on('failed', () => console.log('Notification job failed'));
