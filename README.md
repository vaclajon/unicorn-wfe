# unicorn-wfe
This project is meant to help students of Web Front End course which is being taught at [Unicorn College](https://www.unicorncollege.cz/). It should provide students with workspace for seminars and also serve as study material. The project will be extended, and each iteration will be placed into a separate branch. Therefore, students can quickly checkout branches and follow changes. 

Refer to [git guide](http://rogerdudler.github.io/git-guide/) to understand how git works (or any other git guide available online).

**To be able to run the project user needs to have [Node.JS](https://nodejs.org/en/) v4.x.x or higher installed.**

**Please note that README.md file will be updated mainly in MASTER branch.**

## Run the code<a name="run-the-code">
To run the project execute following commands in project folder from console/terminal (See [this article](https://superuser.com/questions/339997/how-to-open-a-terminal-quickly-from-a-file-explorer-at-a-folder-in-windows-7) for help with opening terminal in a certain folder)
  
```bash
npm i
npm start
```
  
To start up the project again the first command does not have to be executed. Although after checking out into different branch be careful. There could have been a change in *package.json* file and in such cases both commands need to be executed again!

## What does the code do
The project uses [Webpack](webpack.js.org) to build source code files. Created files are deployed using [webpack-dev-server](https://github.com/webpack/webpack-dev-server) at [http://localhost:3000/](http://localhost:3000/). The content of *index.html* is served at this location. Other pages can also be accessed but a name of the file (including *.html*) has to be added to the default URL.

## How to work with the workspace
Firstly follow the steps in the [run the code](#run-the-code) section. Now change in any file under *src* folder fires webpack-dev-server to rebuild the project a (majority of) changes will be immediately visible in a browser window. 

At some moment changes to [config file](https://github.com/vaclajon/unicorn-wfe/blob/master/config/webpack.config.js) will be necessary (e.g. another HtmlWebpackPlugin has to be used). In such cases server has to be restarted. To do so use <kbd>CTRL</kbd>+<kbd>C</kbd> keys. You will be prompted if you really want to terminate the process. Type in Y and press <kbd>ENTER</kbd>. The server is stopped and can be turned on again.

Also, refer to the source code to see where to put static content (images, fonts, etc.) and how to reference it in code. 

## Seminar 02
Checkout to branch *seminar-02* or download [source code](https://github.com/vaclajon/unicorn-wfe/tree/seminar-02) to see the solution of the second seminar. [Run the project](#run-the-code) and see the result. There are four pages:
* [index](http://localhost:3000) - Example of basic HTML tags. Pay special attention to *src* attribute of *img* tags.
* [company](http://localhost:3000/company.html) - Home page of a company. Checkout using anchor in combination with link. 
* [offers](http://localhost:3000/offers.html) - Offers page with a table.
* [company](http://localhost:3000/contacts.html) - Contacts page containing a form and anchor at the bottom of the page

## Seminar 03
Checkout to branch *seminar-03* or download [source code](https://github.com/vaclajon/unicorn-wfe/tree/seminar-03) to see the solution of the third seminar. Compare the source code of *companyHTML5.html* and *company.html* files to see the differences in tags being used. The rest of the source code is same as in the branch *seminar-02*

## Seminar 04
Checkout to branch *seminar-04* or download [source code](https://github.com/vaclajon/unicorn-wfe/tree/seminar-04) to see the solution of the fourth seminar. [Run the project](#run-the-code) and see the result. Pay attention to changes in *companyHTML5.html* and *style.scss* files. Note that even though the file extension is *scss* the file is compiled into *css* file using SASS loader. It means that if you are familiarised with CSS preprocessors, you can use it while styling the application.  

## Seminar 05
Checkout to branch *seminar-03* or download [source code](https://github.com/vaclajon/unicorn-wfe/tree/seminar-05) to see the solution of the fifth seminar. [Run the project](#run-the-code) and see the result. Pay attention to changes in *style.scss* and *print.css* files. *companyHTML5.html* page from the previous seminar has been enhanced using CSS3 attributes. There is also a new table, which shows the use of pseudoclasses, pseudoelements and more advanced selectors. The *print.css* file does nothing special. It only hides all menus and headers so that only main content remains.

## Lecture 03
The branch contains DEMO examples of the HTML5 tags. 
