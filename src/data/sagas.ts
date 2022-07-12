import { call, put, takeEvery } from 'redux-saga/effects';
import { FetchData } from '../types/products';
import { getProducts, setProducts } from '../features/get-products'

function productsFetch():Promise<Response>{
  return fetch('https://mks-frontend-challenge-api.herokuapp.com/api/v1/products?page=1&rows=10&sortBy=id&orderBy=ASC').then(response =>response.json())
}

function* workGetProductsFetch(){
  try{
  const products:Promise<FetchData> = yield call(productsFetch);
  yield put(setProducts({...products}))
}catch(error){
  console.log(error)
}
 }

export default function* mySaga(){
  yield takeEvery(getProducts.type, workGetProductsFetch);
}

