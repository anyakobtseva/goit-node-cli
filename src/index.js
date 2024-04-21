import { program } from "commander";
import Contacts from "./contacts.js";
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse();

const options = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      return Contacts.listContacts();
    case "get":
      return Contacts.getContactById(id);

    case "add":
      return Contacts.addContact(name, email, phone);

    case "remove":
      return Contacts.removeContact(id);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(options).then((result) => console.table(result));
