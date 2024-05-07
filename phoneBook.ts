import* as PromptSync from "prompt-sync";
class PhoneBook {
    private contacts: Map<string, string>;
   

    constructor() {
        this.contacts = new Map();
    }
    addContact(name: string, phoneNumber: string): void {
        this.contacts.set(name, phoneNumber);
        console.log(`Contact "${name}" added successfully.`);
    }
    updateContact(name: string, newPhoneNumber: string): void {
        if (this.contacts.has(name)) {
            this.contacts.set(name, newPhoneNumber);
            console.log(`Contact "${name}" updated successfully.`);
        } else {
            console.log(`Contact "${name}" not found.`);
        }
    }
    deleteContact(name: string): void {
        if (this.contacts.has(name)) {
            this.contacts.delete(name);
            console.log(`Contact "${name}" deleted successfully.`);
        } else {
            console.log(`Contact "${name}" not found.`);
        }
    }
    displayContacts(): void {
        console.log("Contacts:");
        this.contacts.forEach((phoneNumber, name) => {
            console.log(`${name}: ${phoneNumber}`);
        });
    }
}
const phoneBook = new PhoneBook();
phoneBook.addContact("sachin", "1234567890");
phoneBook.addContact("krishna", "9876543210");
phoneBook.addContact("shiva", "5678901234");

phoneBook.displayContacts();
phoneBook.updateContact("krishna", "5555555555");
phoneBook.displayContacts();
phoneBook.deleteContact("shiva");
phoneBook.displayContacts();
