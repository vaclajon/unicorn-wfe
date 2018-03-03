# unicorn-wfe
This project is meant to help students of Web Front End course which is being taught at [Unicorn College](https://www.unicorncollege.cz/). It should provide students with workspace for seminars and also serve as a study material. The project will be extended and each iteration will be placed into separate branch therefore students can easily checkout branches and follow changes. 

Refer to [git guide](http://rogerdudler.github.io/git-guide/) to understand how git works (or any other git guide available online).

**To be able to run the project user needs to have [Node.JS](https://nodejs.org/en/) v4.x.x or higher installed.**

**Please note that README.md file will be updated mainly in MASTER branch.**

## Run the code<a name="run-the-code">
To run the project execute following commands in project folder from console/terminal (See [this article](https://superuser.com/questions/339997/how-to-open-a-terminal-quickly-from-a-file-explorer-at-a-folder-in-windows-7) for help with opening terminal in a certain folder)
  
```bash
npm i
npm start
```
  
To start up the project again first command does not have to be executed. Although after check out into different branch be careful. There could have been a change in *package.json* file and in such cases both commands need to be executed again!

## What does the code do
The project uses [Webpack](webpack.js.org) to build source code files. Created files are deployed using [webpack-dev-server](https://github.com/webpack/webpack-dev-server) at [http://localhost:3000/](http://localhost:3000/). Content of *index.html* is served at this location. Another pages can be also accessed but name of the file (including *.html*) has to be added after the default URL.

## How to work with the workspace
Firstly follow the steps in the [run the code](#run-the-code) section. Now change in any file under *src* folder fires webpack-dev-server to rebuild the project a (majority of) changes will be immediatelly visible in a browser window. 

At some moment changes to [config file](https://github.com/vaclajon/unicorn-wfe/blob/master/config/webpack.config.js) will be neccessary (e.g. another HtmlWebpackPlugin has to be used). In such cases server has to be restarted. To do so use <kbd>CTRL</kbd>+<kbd>C</kbd> keys. You will be promted if you really want to terminate the process. Type in Y and press <kbd>ENTER</kbd>. The server is stopped and can be turned on again.

Also, refer to the source code to see where to put static content (images, fonts, etc.) and how to reference it in code. 

## Seminar 02
Checkout to branch *seminar-02* or download [source code](https://github.com/vaclajon/unicorn-wfe/tree/seminar-02) to see the solution of the second seminar. [Run the project](#run-the-code) and see the result. There are four pages:
* [index](http://localhost:3000) - Example of basic HTML tags. Pay special attention to *src* attribute of *img* tags.
* [company](http://localhost:3000/company.html) - Home page of a company. Checkout using anchor in combination with link. 
* [offers](http://localhost:3000/offers.html) - Offers page with a table.
* [company](http://localhost:3000/contacts.html) - Contacts page containing a form and anchor at the bottom of the page
