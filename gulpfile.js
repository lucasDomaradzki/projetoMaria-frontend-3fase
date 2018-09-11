var gulp = require('gulp');
// var { exec } = require('child-process-promise');
var shell = require('gulp-shell');
var { prompt } = require('inquirer');
var fs = require('fs');
var color = require('colors');

var user = {};

gulp.task('config', function(){
  var questions = [
    {
      type: 'input',
      name: 'workspace',
      message: color.blue('Digite o caminho absoluto do local de instalação do projeto:'),
      validate: function validateEmpty(input) {
        return input !== '';
      }
    },
    {
      type: 'input',
      name: 'mongopath',
      message: color.blue('Digite o caminho absoluto de instalação do MongoDB:'),
      validate: function validateEmpty(input) {
        return input !== '';
      }
    },
    {
      type: 'input',
      name: 'dbpath',
      message: color.blue('Digite o caminho absoluto para o banco de dados do MongoDB (dbpath):'),
      validate: function validateEmpty(input) {
        return input !== '';
      }
    }
  ]
  
  prompt(questions).then(answers => {
    user.workspace = answers.workspace;
    user.mongopath = answers.mongopath;
    user.dbpath = answers.dbpath;
    console.log('Você poderá alterar essas informações com o mesmo comando -- gulp config --'.yellow);
    return user;
  }).then(userConfig => fs.writeFileSync('./config/user.json', JSON.stringify(userConfig, null, 2)));
})