<h1>
<p align="center">
<img src="https://storage.googleapis.com/bigcommerce-developers/images/bigc-dev-round-icon.png" alt="BigCommerce" title="BigCommerce" height="40">  <sup><strong>&nbsp;&nbsp;&nbsp; ﹢ &nbsp;&nbsp;&nbsp;</strong></sup>  <img src="https://storage.googleapis.com/bigcommerce-developers/images/strapi/Strapi.monogram.logo.png" alt="Strapi" title="Strapi" height="40">
</p>
</h1>

# Catalyst + Strapi <br><sub>Headless CMS Backend</sub>

Integrate BigCommerce's Catalyst storefront with Strapi, to have it manage the built-in blog's content and power a new customer service section. Both with support for i18n, so you can localize the content per locale. Demo data for _en_ and _es_ locales is provided.

This repo houses the Strapi app. Which is the headless CMS where the content of the blog and customer service sections of the site are managed.

To run the associated Catalyst storefront app you'll want to head to: https://github.com/bigcommerce-labs/catalyst-strapi-storefront

## Demo site

For a working demo of this Strapi integration with Catalyst, see the following example:

```shell copy
https://catalyst-with-strapi.vercel.app/blog
```

```shell copy
https://catalyst-with-strapi.vercel.app/customer-service
```

## Prerequisites

- Node.js 18+
- Your preferred Node.js package manager, such as `npm`, `pnpm`, or `yarn` _(these instructions use `npm`)_

## Setup

1. Clone this repo: 
```shell copy
git clone https://github.com/bigcommerce-labs/catalyst-strapi-backend.git
```

2. Jump into the dir: 
```shell copy
cd catalyst-strapi-backend
```

3. Install dependencies:
```shell copy
npm install
```

4. Create a .env file based on the sample: 
```shell copy
cp .env.example .env
```

```bash
HOST=0.0.0.0
PORT=1337
APP_KEYS="toBeModified1,toBeModified2"
API_TOKEN_SALT=tobemodified
ADMIN_JWT_SECRET=tobemodified
TRANSFER_TOKEN_SALT=tobemodified
JWT_SECRET=tobemodified
```

Replace each "tobemodified" with something unique. If you are on a Mac or using Linux, try running `openssl rand -base64 32` to generate values.

5. Build and run Strapi:

```bash
npm run build
npm run develop
```

6. Log into your Strapi instance after it's done initially building to create your admin account. The local admin is usually at: [http://localhost:1337/admin](http://localhost:1337/admin)

7. Create an API Token for Strapi by going to the `Settings > API Tokens` section of the admin. Use these values:

- _Name_: Read API Token
- _Description_: (don’t need to fill out)
- _Token duration_: 90 days
- _Token type_: Read-only

After creating the token it will show on the screen at the top. It only shows once! Copy and paste it into the .env value for `STRAPI_API_KEY` in your `catalyst-strapi-storefront` repo.

8. Now it's time to import the sample data into Strapi. Stop the instance of Strapi in the terminal and run the following command: 
```shell copy
npm run strapi import -- -f strapi-demo-export.tar.gz
```

It will ask you if you are ok with deleting your database and assets. Say (y)es.

9. Start Strapi back up by running:
```shell copy
npm run develop
```

After logging into Strapi, you should see sample entries have been imported that match the demo site.

### Deploying Strapi alongside Catalyst

Catalyst and Strapi are deployed independently. To get a publicly addressable Strapi instance for use with your live Catalyst site, [use one of Strapi's documented deployment options](https://docs.strapi.io/dev-docs/deployment). If you want to transfer your local Strapi data to a public instance, there is a [CLI command for transfering data](https://docs.strapi.io/dev-docs/data-management/transfer).

## Resources

- [Resource center](https://strapi.io/resource-center) - Strapi resource center.
- [Strapi documentation](https://docs.strapi.io) - Official Strapi documentation.
- [Catalyst + Strapi storefront repo](https://github.com/bigcommerce-labs/catalyst-strapi-storefront) - Associated repo that uses this backend
