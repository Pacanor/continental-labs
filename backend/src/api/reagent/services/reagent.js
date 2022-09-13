'use strict';

/**
 * reagent service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reagent.reagent');
