#!/usr/bin/env node

import { CliApplication } from '../app/cli-application.js';
import { HelpCommand } from './help-command.js';
import { VersionCommand } from './version-command.js';
import { ImportCommand } from './import-command.js';

const cli = new CliApplication();

cli.registerCommands(
  [
    new HelpCommand,
    new VersionCommand,
    new ImportCommand,
  ]
);

cli.processCommand(process.argv);
