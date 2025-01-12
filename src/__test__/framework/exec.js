const fs = require("fs");
const path = require("path");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const args = process.argv.slice(2);
const fileName = args[0];

if (!fileName) {
    console.error("Provide file name");
    process.exit(1);
}

const findFileInDirectory = (dirPath, fileName) => {
    const files = fs.readdirSync(dirPath);

    for (const file of files) {
        const filePath = path.join(dirPath, file);
        const stats = fs.lstatSync(filePath);

        if (stats.isDirectory()) {
            const result = findFileInDirectory(filePath, fileName);
            if (result) {
                return result;
            }
        } else if (file === fileName) {
            return filePath;
        }
    }

    return null;
}

const dirPath = path.join(process.cwd(), 'src/__test__');
const pathToTestFile = findFileInDirectory(dirPath, fileName);

if (pathToTestFile === null) {
    console.error("File not found");
    process.exit(1);
}

const handleExec = async (command) => {
    const { stdout, stderr } = await exec(command);
    if (stderr) {
        console.error(`Exec Error: ${stderr}`);
        process.exit(1);
    }

    console.log(stdout);
}

const pathToCompiledTestFile = pathToTestFile.replace("src", "test").replace(".ts", ".js");
handleExec(`tsc ${pathToTestFile} --outDir test`).then(() =>
    handleExec(`node ${pathToCompiledTestFile}`).then(() =>
        fs.rmSync(process.cwd() + "/test", { recursive: true, force: true })));
