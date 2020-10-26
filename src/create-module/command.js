const { createOutputFolder, addProjectConfig } = require('../services/output-project');
const { topics, difficultyLevel } = require('../constants');

exports.command = "create <projectName> [-t] [-d]";

exports.describe = "create a project in the current path, with name, topic and difficulty specified";

/**
 * @param  {import("yargs")} yargs
 */
exports.builder = (yargs) =>
  yargs
    .positional("projectName", {
      type: 'string',
      description: "project Name"
    })
    .option("t", {
      alias: "topic",
      choices: topics,
      description: "search by project's topic",
    })
    .option("d", {
      alias: "difficulty",
      choices: difficultyLevel,
      description: "search by project's difficulty",
    });

/**
 * @param  {string} topic
 * @param  {string} difficulty
 * @param  {string} projectName
 */
exports.handler = async ({ topic, difficulty, projectName }) => {
  const outputFolderPath = await createOutputFolder(true, projectName);
  await addProjectConfig(outputFolderPath, topic, difficulty, projectName)
};