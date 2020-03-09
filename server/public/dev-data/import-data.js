const fs = require('fs');
const dotenv = require('dotenv');
dotenv.config({ path: '../../config/config.env' });
const connectDB = require('../../utils/connectDb');

connectDB();

const Group = require('../../models/Group');

// READ JSON FILE
const groups = JSON.parse(fs.readFileSync(`${__dirname}/groups.json`, 'utf-8'));

// IMPORT DATA INTO DB
const importData = async () => {
  try {
    await Group.create(groups);
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

// DELETE ALL DATA FROM DB
const deleteData = async () => {
  try {
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
