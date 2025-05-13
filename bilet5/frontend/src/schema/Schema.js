import * as yup from 'yup';

let schema = yup.object().shape({
  image: yup.string().required(),
  title: yup.string().required(),
  price: yup.number().required().positive().integer(),
  description: yup.string().required(),

});

export default schema