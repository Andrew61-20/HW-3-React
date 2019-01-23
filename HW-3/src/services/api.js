import axios from 'axios';

// const BASE_URL = 'http://localhost:3001/menu';
axios.defaults.baseURL = 'http://localhost:3001';
// 1:01 задает дефолтную строку запроса

const getAllMenuItems = async () => {
  const response = await axios.get('/menu');
  return response.data;
};

const getMenuItemById = async id => {
  const response = await axios.get(`/menu/${id}`);
  return response.data;
};

const getMenuItemsWithCategory = async category => {
  const response = await axios.get(`/menu?category=${category}`);
  return response.data;
};

const getCategories = async () => {
  const response = await axios.get('/categories');
  return response.data;
};

const deleteMenuItem = id =>
  axios.delete(`/menu/${id}`).then(response => response.status === 200);

const addMenuItem = item =>
  axios.post('/menu', item).then(response => {
    console.log(response);
    return response.data;
  });
  
//const addIngredientsItem = (ingredients, item) =>
  //axios.post(`/menu/${ingredients}`, item).then(response => {
    //console.log(response);
    //return response.data;
  //});
  
// Какого члена не работает такой запрос???
// const getMenuItemsWithCategory = category => {
//   axios.get(`/menu?category=${category}`).then(response => response.data);
// };

export {
  getAllMenuItems,
  getMenuItemById,
  getCategories,
  deleteMenuItem,
  addMenuItem,
  getMenuItemsWithCategory,
};
