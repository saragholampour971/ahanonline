import { Input, Form, Button, Space } from "antd";
import { useFormik } from 'formik';
import  axios  from 'axios';


const FormItem = Form.Item;

interface IForm {
  username: string;
  password: string;
}



export default function FormikTest() {
  // TODO: make form work with formik , pass handleSubmit to onSubmit of formik
  // BONUS: adding validation has extra points
  // Resource: https://formik.org/docs/tutorial

  const handleSubmit = (values: IForm) => {
    console.log(values);
  };

  const validate = values => {
    const errors = {}
    if (!values.username) {
      errors.username = "required"
    }
    else if (values.username.length<4) {
      errors.username="must be 5 characters or more"
    } if (!values.password) {
      errors.password="require"
    }
    else if(values.password.length<4)
      errors.password = "must be more than 4 "
    return errors;
  }

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    
    },
    validate,
    onSubmit: values => {
      handleSubmit(values);
    }
  })

  return (
    <div>
      <div>Simple Formik With Antd Inputs :: Edit src/pages/formik.tsx</div>
      <hr />
      {/* TODO: use Formik */}
      <form onSubmit={formik.handleSubmit}>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Username" name="username">
          <Input name="username" onChange={formik.handleChange} value={formik.values.username} />
          {formik.errors.username ? <div>{ formik.errors.username}</div>:null}
        </FormItem>
        {/* TODO: make this inputs work with formik i suggest make it a reusable component like FormikInput */}
        <FormItem label="Password" name="password">
          <Input name="password" onChange={formik.handleChange} value={formik.values.password} />
          {formik.errors.password ? <div>{ formik.errors.password}</div>:null}
          
        </FormItem>
        <Space>
          <Button type="primary" htmlType="submit">
            submit
          </Button>
          <Button
            onClick={() => {
              // TODO: reset form with formik
              formik.resetForm();
            }}
          >
            reset
          </Button>
        </Space>
      </form>
    </div>
  );
}
