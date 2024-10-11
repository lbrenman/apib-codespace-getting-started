# API Builder Development in Github Codespaces

[Github Codespaces](https://github.com/features/codespaces) gets you up and coding faster with fully configured, secure cloud development environments native to GitHub.

In this post we'll use Github Codespaces to develop an API Builder project and push it to Github.

## Create a Github Repo

Follow the instructions [here](https://gist.github.com/lbrenman/c652062ef97dc7ebbd1a4f504f0c26af) to create an empty Github repo.

![Imgur](https://i.imgur.com/6J8uRAu.png)
![Imgur](https://i.imgur.com/hE7uI4H.png)

## Create a Codespace

Follow the instructions [here](https://gist.github.com/lbrenman/c652062ef97dc7ebbd1a4f504f0c26af) to create a Codespace for your Github repo.

![Imgur](https://i.imgur.com/WUVHZ3q.png)

## Create an API Builder App

* In the Codespace Terminal, follow the ABI Builder [Getting Started Guide](https://docs.axway.com/bundle/api-builder/page/docs/getting_started/index.html) to install the Axway CLI and API Builder CLI and create a new project and run it
    ```bash
    npm install -g axway
    axway pm install @axway/amplify-api-builder-cli
    axway builder init myproject
    cd myproject
    npm start
    ```
* When the API Builder project is running, you will see a popup in the browser in the lower right hand corner
    ![Imgur](https://i.imgur.com/bP2V96n.png)
* Click Make Public and then click on the PORTS tab
    ![Imgur](https://i.imgur.com/tpoYyQj.png)
* Copy the forwarded address and paste into a browser and add 'console' to the end of the url (e.g. https://obscure-goldfish-7vqvq5pfpp4-8080.app.github.dev/console). You will see a warning in the browser, but click continue.
    ![Imgur](https://i.imgur.com/cMNixNJ.png)
    ![Imgur](https://i.imgur.com/DR0SslO.png)
* Develop your API as you normally would on your local machine
    ![Imgur](https://i.imgur.com/BBEkeue.png)
    ![Imgur](https://i.imgur.com/00BkXya.png)
* When it comes time to test your API, first use the API Builder console swagger Try it out feature which should fail but will provide the curl command for calling the API at localhost. Then use Postman or curl to access the API at your forwarded address with `/api/{{endpoint}}` appended (e.g. https://fictional-memory-q7795464636769-8080.app.github.dev/api/greeting?name=Leor)
    ```bash
    curl --location 'https://fictional-memory-q7795464636769-8080.app.github.dev/api/greeting?name=Leor' \
    --header 'accept: application/json' \
    --header 'My-custom-header: 11111' \
    --header 'Authorization: Basic ZmhuckUza3ZTaWV0UVNDYUVHY1FkMENoMklnNGFlbWM6'
    ```
    with response:
    ```json
    {
        "success": "true",
        "message": "Hello Leor. Your header value is: 11111"
    }
    ```
    ![Imgur](https://i.imgur.com/6U00dYL.png)

## Source Code Control

Now that your API Builder API is working, you can check your code in as described [here](https://gist.github.com/lbrenman/c652062ef97dc7ebbd1a4f504f0c26af).

![Imgur](https://i.imgur.com/auDFp8u.png)
![Imgur](https://i.imgur.com/dpJQ9Ab.png)
![Imgur](https://i.imgur.com/5eTn15r.png)
![Imgur](https://i.imgur.com/KJTLEUG.png)

## Docker

Now let's create a Docker image using the built-in API Builder Dockerfle by following the [Dockerize an API Builder service online guide](https://docs.axway.com/bundle/api-builder/page/docs/how_to/dockerize_an_api_builder_service/index.html).

* Create the Docker image using
    ```bash
    docker build -t myproject ./
    ```
* Check that your image was create using
    ```bash
    docker image ls
    ```
* Running Docker container using
    ```bash
    docker run --rm -p 8080:8080 --name myproject myproject
    ```
    ![Imgur](https://i.imgur.com/IjaKqVA.png)
* As before Codespace should detect a running application and offer to forward the port but it should already be forwarded from above as we are using the same port. If there are no forwarded ports or if the popup does not appear, click the Port Tab, click on Forward a Port and enter your Port (e.g. 8080)
    ![Imgur](https://i.imgur.com/m6KWW9Y.png)
    ![Imgur](https://i.imgur.com/lbnI7Pl.png)
* Right click on Private and set Port Visibility to Public
    ![Imgur](https://i.imgur.com/P5zcf3m.png)
    ![Imgur](https://i.imgur.com/DyiKr3N.png)
* Call you API running in the Docker container using
    ```bash
    curl --location 'https://fictional-memory-q7795464636769-8080.app.github.dev/api/greeting?name=Leor' \
    --header 'accept: application/json' \
    --header 'My-custom-header: 11111' \
    --header 'Authorization: Basic ZmhuckUza3ZTaWV0UVNDYUVHY1FkMENoMklnNGFlbWM6'
    ```
    with response:
    ```json
    {
        "success": "true",
        "message": "Hello Leor. Your header value is: 11111"
    }
    ```

At this point you have a working API Builder Docker Image and can push it to a repository such as Docker Hub.