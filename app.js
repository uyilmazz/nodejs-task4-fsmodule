const fs = require('fs').promises;

// File create and content add
async function createAndWrite() {
    try {
        await fs.writeFile('employees.json', '{"name": "Employee 1 Name", "salary": 2000}');
        console.log('file creation successful');
    } catch (err) {
        console.log(err);
    }
}

// File read
async function readFile() {
    try {
        const data = await fs.readFile('employees.json', 'utf-8');
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}

// File update
async function updateFile() {
    try {
        await fs.appendFile('employees.json', `\n{"name": "Employee 2 Name", "salary": 3000}`);
        console.log('data added successfully');
    } catch (err) {
        console.log(err);
    }
}

// File delete
async function deleteFile() {
    try {
        await fs.unlink('employees.json');
        console.log('File deleted successfully');
    } catch (err) {
        console.log(err);
    }
}

async function crudFunctions() {
    await createAndWrite();
    await readFile();
    await updateFile();
    await deleteFile();
}

crudFunctions();