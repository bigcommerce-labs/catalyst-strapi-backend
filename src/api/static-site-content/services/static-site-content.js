'use strict';

/**
 * static-site-content service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::static-site-content.static-site-content');
