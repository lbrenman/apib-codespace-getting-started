# Welcome to API Builder Service

For more information on using API Builder please see the API Builder [Getting started guide](https://docs.axway.com/bundle/api-builder/page/docs/getting_started/index.html).

## Running your service

To run your service:

```bash
npm start
```

## Configuration

To configure your service, refer to [Project configuration](https://docs.axway.com/bundle/api-builder/page/docs/developer_guide/project/configuration/project_configuration/index.html).

## Invoking an API locally

This makes a request against the custom run above:

```bash
curl -X GET -u <yourKey>: "http://127.0.0.1:8080/api/greet?username=user"
```

## Logging

The service streams its log messages to the console, allowing for easier integration with third-party log aggregation tools. For additional information on integrating API Builder logging with a third-party log aggregation tool, refer to [Export API Builder logs into a data store](https://docs.axway.com/bundle/api-builder/page/docs/how_to/export_api_builder_logs_into_a_data_store/index.html).

The [log level](https://docs.axway.com/bundle/api-builder/page/docs/developer_guide/project/logging/index.html) at which your service logs is controlled using an environment variable `LOG_LEVEL` (defaulting to "debug").

To increase logging, you can set the `LOG_LEVEL` to "trace":

```bash
export LOG_LEVEL=trace
npm start
```

Or as a single line:

```bash
LOG_LEVEL=trace npm start
```

Refer to [Logging](https://docs.axway.com/bundle/api-builder/page/docs/developer_guide/project/logging/index.html) for a list of all log levels.

## Design an build an API

You can use a tool like [Stoplight](https://stoplight.io) to design an API if you do not have an API already. After, follow the OpenAPI [Quick start](https://docs.axway.com/bundle/api-builder/page/docs/guide_openapi/quick_start/index.html) guide to learn how to implement the API in API Builder.

## Dockerise API Builder Service

Refer to [Dockerize an API Builder service](https://docs.axway.com/bundle/api-builder/page/docs/how_to/dockerize_an_api_builder_service/index.html) for instructions on how to build and publish a Docker image.
