import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from "@angular-devkit/schematics/tasks";

import {
    removePackageJsonDependency,
} from 'ng-morph';

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {    
    context.logger.info('Installing dependencies of test library...');

    addDependencies(tree)
    
    context.addTask(new NodePackageInstallTask());
    return tree;
  }

  function addDependencies(tree: Tree) { 
    removePackageJsonDependency(tree, 'additional-library')
  }
}