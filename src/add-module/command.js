const { validateProjectIntegrity } = require("./project-integrity");
const { saveInDb } = require("../db/db-management");
const { logComplete, logError } = require("../services/formatting");

exports.command = "add <directoryName>";

exports.describe = "add a new project";

/**
 * @param  {import("yargs")} yargs
 */
exports.builder = (yargs) => {
  yargs.positional("directoryName", {
    type: "string",
    description: "name of project's directory",
  });
};

/**
 * @param  {{directoryName: string}}
 */
exports.handler = async ({ directoryName }) => {
  try {
    const projectInfo = await validateProjectIntegrity(directoryName);
    await saveInDb(projectInfo);
    logComplete(projectInfo.projectName, "in the collection");
  } catch (e) {
    logError(e);
  }
};
