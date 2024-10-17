import FileSystem from "fs";
import path from "path";
import { exec } from "child_process";

const green = "\x1b[32m";
const red = "\x1b[31m";
const reload = "\x1b[0m";

function config(dir) {
    runTestsRecursively(dir);
}

function runTestsRecursively(dir) {
    FileSystem.readdir(dir, { withFileTypes: true }, (err, entries) => {
        if (err) {
            console.error(`Error reading directory ${dir}:`, err);
            return;
        }

        entries.forEach((entry) => {
            const fullPath = path.join(dir, entry.name);
            if (entry.isDirectory()) {
                runTestsRecursively(fullPath);
            } else if (entry.isFile() && fullPath.endsWith(".js")) {
                exec(`node ${fullPath}`, (error, stdout, stderr) => {
                    if (error) {
                        console.error(`Error executing ${fullPath}:`, error);
                        return;
                    }
                    console.log(`Testing ${fullPath}:\n${stdout}`);
                    if (stderr) {
                        console.error(
                            `Error output from ${fullPath}:\n${stderr}`
                        );
                    }
                });
            }
        });
    });
}

async function scratch(testTitle, testDescription = "", testFunction) {
    const result = await testFunction();

    if (testDescription !== "") {
        testDescription = " - " + testDescription;
    }

    if (result === true) {
        console.log(
            green,
            `Running : ${testTitle}${testDescription} : Passed`,
            reload
        );
    } else {
        console.log(
            red,
            `Running : ${testTitle}${testDescription} : Failed\n${result}`,
            reload
        );
    }
}

const claw = {
    scratch,
    config,
};

export default claw;
