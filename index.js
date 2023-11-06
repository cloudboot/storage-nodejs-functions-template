import * as functions from '@google-cloud/functions-framework';

async function main(cloudEvent) {
    console.log(`Event ID: ${cloudEvent.id}`);
    console.log(`Event Type: ${cloudEvent.type}`);
  
    const file = cloudEvent.data;
    console.log(`Bucket: ${file.bucket}`);
    console.log(`File: ${file.name}`);
    console.log(`Metageneration: ${file.metageneration}`);
    console.log(`Created: ${file.timeCreated}`);
    console.log(`Updated: ${file.updated}`);
}

functions.cloudEvent('main', main);
