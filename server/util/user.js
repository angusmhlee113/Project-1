const { hash } = require("bcryptjs");
const { v4: generateId } = require("uuid");

const { NotFoundError } = require("../util/errors");
const { readData, writeData } = require("./util");

async function add(data) {
  const storedData = await readData();
  const userId = generateId();
  const hashedPw = await hash(data.password, 12);
  if (!storedData.users) {
    storedData.users = [];
  }
  storedData.users.push({ ...data, password: hashedPw, id: userId });
  await writeData(storedData);
  return { id: userId, email: data.email };
}

exports.add = add;
