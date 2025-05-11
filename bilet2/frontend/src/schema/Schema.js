import * as yup from 'yup';

export let schema = yup.object().shape({
  image: yup.string().required(),  
  name: yup.string().required(),
  price: yup.number().required().positive().integer(),
  description:yup.string().required()
});