#!/usr/bin/env node

import { CliApplication } from '../app/cli-application.js';
import { HelpCommand } from './help-command.js';
import { VersionCommand } from './version-command.js';
import { ImportCommand } from './import-command.js';
import { GenerateCommand } from './generate-command.js';

const cliApplication = new CliApplication();

cliApplication.registerCommands(
  [
    new HelpCommand,
    new VersionCommand,
    new ImportCommand,
    new GenerateCommand,
  ]
);

cliApplication.processCommand(process.argv);
