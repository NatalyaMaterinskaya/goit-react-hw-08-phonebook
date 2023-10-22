import { ContactForm } from "components/ContactForm/ContactForm";
import { ContactList } from "components/ContactList/ContactList";
import { Filter } from "components/Filter/Filter";
import { Loader } from "components/Loader/Loader";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "redux/operations";

import { selectContacts, selectError, selectIsLoading } from "redux/selectors";



 const  ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div>
      {!error && <ContactForm />}
      {isLoading ? (
        <Loader />
      ) : (
        contacts.length > 0 &&
        !error && (
          <>
            <h2>Contacts</h2>
            <Filter />
            <ContactList />
          </>
        )
      )}
      {error && !isLoading && <p>Oops! Something went wrong!</p>}
    </div>
  );
};

export default ContactsPage;