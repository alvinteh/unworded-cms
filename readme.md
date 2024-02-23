# unworded-cms

The Sanity Studio CMS configuration for the Unworded web site, due to be hosted at [https://unworded.live](https://unworded.live).

## Prerequisites

* [node](https://nodejs.org/en/) 20.10.0+
* [Sanity](https://www.sanity.io/) account. The free version suffices.
 
## Get Started

1. Clone this repository.
2. Install the node dependencies by running `npm install`.
3. Create a `.env` file in the project root folder, and add the following configuration line:
  
  ```
  SANITY_PROJECT_ID = XXX
  SANITY_DATASET = YYY
  ```

  Replace XXX and YYY with your Sanity Project ID and dataset name (typically `production` for the latter) respectively.
4. Use the various Sanity scripts (e.g. `deploy`) in `package.json` to deploy the project.

## Remarks