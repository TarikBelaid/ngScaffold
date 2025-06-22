// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
const fs = require('fs');
const path = require('path');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 * 
 * 
 * 
*/



function createAngularFolderStructure() {
    const basePath = vscode.workspace.rootPath; // le dossier racine du projet
    const folders = [
            'src/app/components',
            'src/app/services',
            'src/app/models',
            'src/app/guards',
            'src/app/interceptors',
            'src/app/pipes',
            'src/app/directives',
			'src/app/pages',
			'src/app/utils',

    ];

 folders.forEach(folder =>{
	const pathJoin = path.join(basePath,folder);
	if(!fs.existsSync(pathJoin)){
		fs.mkdirSync(pathJoin,{recursive:true})
	}
 })

    vscode.window.showInformationMessage('Angular Folder Structure Generated!');
}

function activate(context) {
    let disposable = vscode.commands.registerCommand('ngscaffold.createAngularStructure', function () {
        createAngularFolderStructure();  
        vscode.window.showInformationMessage('Commande exécutée avec succès !');  // Ajoute un message de test
    });

    context.subscriptions.push(disposable);
}




// This method is called when your extension is deactivated
function deactivate() {}

module.exports = {
	activate,
	deactivate
}
