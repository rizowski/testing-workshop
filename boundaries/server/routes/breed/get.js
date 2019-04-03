const joi = require('joi');
const axios = require('axios');
const cache = require('../../lib/cache');

module.exports = {
  method: 'GET',
  path: '/breeds/{breedName}',
  config: {
    description: 'Breeds route for looking up dog breeds. How fun.',
    validate: {
      params: {
        breedName: joi
          .string()
          .valid([
            'affenpinscher',
            'african',
            'airedale',
            'akita',
            'appenzeller',
            'basenji',
            'beagle',
            'bluetick',
            'borzoi',
            'bouvier',
            'boxer',
            'brabancon',
            'briard',
            'bulldog',
            'bullterrier',
            'cairn',
            'cattledog',
            'chihuahua',
            'chow',
            'clumber',
            'cockapoo',
            'collie',
            'coonhound',
            'corgi',
            'cotondetulear',
            'dachshund',
            'dalmatian',
            'dane',
            'deerhound',
            'dhole',
            'dingo',
            'doberman',
            'elkhound',
            'entlebucher',
            'eskimo',
            'frise',
            'germanshepherd',
            'greyhound',
            'groenendael',
            'hound',
            'husky',
            'keeshond',
            'kelpie',
            'komondor',
            'kuvasz',
            'labrador',
            'leonberg',
            'lhasa',
            'malamute',
            'malinois',
            'maltese',
            'mastiff',
            'mexicanhairless',
            'mix',
            'mountain',
            'newfoundland',
            'otterhound',
            'papillon',
            'pekinese',
            'pembroke',
            'pinscher',
            'pointer',
            'pomeranian',
            'poodle',
            'pug',
            'puggle',
            'pyrenees',
            'redbone',
            'retriever',
            'ridgeback',
            'rottweiler',
            'saluki',
            'samoyed',
            'schipperke',
            'schnauzer',
            'setter',
            'sheepdog',
            'shiba',
            'shihtzu',
            'spaniel',
            'springer',
            'stbernard',
            'terrier',
            'vizsla',
            'weimaraner',
            'whippet',
            'wolfhound',
          ]),
      },
    },
  },
  async handler(req) {
    const { params } = req;

    if (params.breedName) {
      return cache.cacheRequest(params.breedName, async () => {
        const { data } = await axios.get(
          `https://dog.ceo/api/breed/${params.breedNae}/list`
        );

        if (data.status === 'success') {
          return data.message;
        }

        throw new Error('Failed to grab list');
      });
    }

    return cache.cacheRequest('all', async () => {
      const { data } = await axios.get('https://dog.ceo/api/breeds/list/all');

      if (data.status === 'success') {
        return Object.entries(data.message).reduce((obj, [key, val]) => {
          const names = val.map(val => `${key} ${val}`);

          obj[key] = names;

          return obj;
        }, {});
      }

      throw new Error('failed to grab list');
    });
  },
};
