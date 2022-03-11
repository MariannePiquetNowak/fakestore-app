import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addInfos } from '../actions/actions-types';

function Profile() {
  const [formData, setFormData] = useState({});

  // On lit le state entier de userReducer
  const state = useSelector((state) => state.user);
  // console.log('useSelector', state);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    /**
     * const { name, value } = e.target; => cela revient à faire :
     * const name = e.target.name => on cible la props name de l'input
     * ET
     * const value = e.target.value
     */
    setFormData({ ...formData, [name]: value }); // [name]: value => cible la props name de l'input pour récupérer sa value
  };

  const saveUser = (e) => {
    e.preventDefault();
    dispatch(addInfos(formData));
  };

  return (
    <div>
      <h2>Hi John!</h2>
      <h3>Customize your profile here</h3>

      <pre>{JSON.stringify(formData, null, 2)}</pre>

      <form onSubmit={saveUser}>
        <p>
          Your firstname : <input name="firstname" type="text" placeholder="John" onChange={handleChange} />
        </p>
        <p>
          Your lastname : <input name="lastname" onChange={handleChange} type="text" placeholder="Doe" />
        </p>
        <p>
          Your email: <input name="mail" onChange={handleChange} type="email" placeholder="john.doa@email.com" />
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  );
}

export default Profile;
