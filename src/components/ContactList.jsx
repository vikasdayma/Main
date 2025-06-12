import { useEffect, useState } from "react";
import axios from "axios";

function ContactList() {
  const [contacts, setContacts] = useState([]);
  console.log(contacts)
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/contact");
        setContacts(res.data);
      } catch (err) {
        console.error("Error fetching contacts", err);
      }
    };
    fetchContacts();
   
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Submitted Contacts</h2>
      <ul className="space-y-4">
        {contacts.map((contact) => (
          <li key={contact._id} className="p-4 text-white rounded shadow">
            <p><strong>Name:</strong> {contact.name}</p>
            <p><strong>Email:</strong> {contact.email}</p>
            <p><strong>Message:</strong> {contact.message}</p>
            <p className="text-sm text-gray-500">
              Submitted: {new Date(contact.createdAt).toLocaleString()}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;
