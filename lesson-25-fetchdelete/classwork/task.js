const BASE_URL = 'https://testapi.io/api/Marijus/resource/students';

//! get students
const getStudents = async () => {
  try {
    const response = await fetch(BASE_URL);
    const students = await response.json();
    console.log(students);
  } catch (err) {
    console.error(err);
  }
};

//!create and POST me
const me = {
  name: 'Modestas',
  town: 'Alytus',
  hometown: 'Lazdijai',
};

const postMe = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(me),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

//! update me and PUT
const meUpdated = {
  name: 'Modestas',
  town: 'Alytus',
  hometown: 'Lazdijai',
  profession: 'IT Student',
  Age: 23,
};

const updateMe = async (myId) => {
  try {
    const response = await fetch(BASE_URL + '/' + myId, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(meUpdated),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

//! create and POST dummy
const dummyStudent = {
  name: 'Jonas',
  town: 'Vilnius',
  hometown: 'Kaunas',
};

const postDummy = async () => {
  try {
    const response = await fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dummyStudent),
    });
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

//! DELETE dummy
const deleteDummy = async (dummyId) => {
  try {
    const response = await fetch(BASE_URL + '/' + dummyId, {
      method: 'DELETE',
    });
    if (response.ok) console.warn(`User id: ${dummyId} deleted successfully`);
  } catch (err) {
    console.error(err);
  }
};

//? leiskit po vieną funkciją iš žemiau, kad pasižiūrėt ar viskas sueina ir įdėkit id iš response
//? į PUT ir POST;
getStudents();
// postMe();
// updateMe(16);
// postDummy();
// deleteDummy();
