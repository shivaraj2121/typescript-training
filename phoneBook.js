var PhoneBook = /** @class */ (function () {
    function PhoneBook() {
        this.contacts = new Map();
    }
    PhoneBook.prototype.addContact = function (name, phoneNumber) {
        this.contacts.set(name, phoneNumber);
        console.log("Contact \"".concat(name, "\" added successfully."));
    };
    PhoneBook.prototype.updateContact = function (name, newPhoneNumber) {
        if (this.contacts.has(name)) {
            this.contacts.set(name, newPhoneNumber);
            console.log("Contact \"".concat(name, "\" updated successfully."));
        }
        else {
            console.log("Contact \"".concat(name, "\" not found."));
        }
    };
    PhoneBook.prototype.deleteContact = function (name) {
        if (this.contacts.has(name)) {
            this.contacts.delete(name);
            console.log("Contact \"".concat(name, "\" deleted successfully."));
        }
        else {
            console.log("Contact \"".concat(name, "\" not found."));
        }
    };
    PhoneBook.prototype.displayContacts = function () {
        console.log("Contacts:");
        this.contacts.forEach(function (phoneNumber, name) {
            console.log("".concat(name, ": ").concat(phoneNumber));
        });
    };
    return PhoneBook;
}());
var phoneBook = new PhoneBook();
phoneBook.addContact("John", "1234567890");
phoneBook.addContact("Alice", "9876543210");
phoneBook.addContact("Bob", "5678901234");
phoneBook.displayContacts();
phoneBook.updateContact("Alice", "5555555555");
phoneBook.displayContacts();
phoneBook.deleteContact("Bob");
phoneBook.displayContacts();
