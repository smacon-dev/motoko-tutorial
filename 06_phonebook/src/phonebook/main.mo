// Import standard library functions for lists

import L "mo:base/List";
import A "mo:base/AssocList";

// The PhoneBook actor.
actor {

    // Type aliases make the rest of the code easier to read.
    public type Name = Text;
    public type Phone = Text;
    public type Email = Text;

    // The actor maps names to phone numbers.
    flexible var book: A.AssocList<Name, Phone> = L.nil<(Name, Phone)>();
    flexible var addressBook: A.AssocList<Name, Email> = L.nil<(Name, Email)>();

    // An auxiliary function checks whether two names are equal.
    func nameEq(l: Name, r: Name): Bool {
        return l == r;
    };

    // A shared invokable function that inserts a new entry
    // into the phone book or replaces the previous one.
    public func insert(name: Name, phone: Phone, email: Email): async () {
        let (newBook, _) = A.replace<Name, Phone>(book, name, nameEq, ?phone);
        book := newBook;
        let (newAddressBook, _) = A.replace<Name, Email>(addressBook, name, nameEq, ?email);
        addressBook := newAddressBook;
    };

    // A shared read-only query function that returns the (optional)
    // phone number corresponding to the person with the given name.
    public query func lookupPhone(name: Name): async ?Phone {
        return A.find<Name, Phone>(book, name, nameEq);
    };
    public query func lookupEmail(name: Name): async ?Email {
        return A.find<Name, Email>(addressBook, name, nameEq);
    };
};