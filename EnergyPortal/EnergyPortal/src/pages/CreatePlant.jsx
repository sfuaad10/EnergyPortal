import { Form, Input, Button } from 'antd';
import { redirect, useSubmit } from 'react-router-dom';


const CreatePlant = () => {
  const submit = useSubmit();
  

  
  const onSubmitPlant = (values) => {
     console.log("Data from onSubmit: ", values);
     // Directly submit the values as form data
     const formData = new FormData();
     Object.entries(values).forEach(([key, value]) => {
       formData.append(key, value);
     });
    const choice = confirm("Do you want to submit the form?");

    if (choice) {
        submit(formData, { method: "POST" });
    }
 


};

  return (
    <Form
      onFinish={onSubmitPlant}
      name='wrap'
      labelCol={{
        flex: "110px",
      }}
      labelAlign='left'
      labelWrap
      wrapperCol={{
        flex: 1,
      }}
      colon={false}
      style={{
        maxWidth: 600,
      }}
    >
      <Form.Item
        label='Name'
        name='Name'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Id'
        name='Id'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Client'
        name='Client'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label='Address'
        name='Address'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label=' '>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreatePlant;
export async function action({ request }) {
  // Assuming the request's body is a FormData object
  const formData = await request.formData();
  const values = Object.fromEntries(formData);

  // Convert the form values to JSON
  const jsonData = JSON.stringify(values);
  console.log("the json data is ", jsonData);

  const response = await fetch("https://localhost:7237/plants", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: jsonData,
  });

  if (!response.ok) {
    // Handle server errors or invalid responses
    throw new Error("Failed to save the plant data");
  }

  // Redirect after successful submission
  return redirect("/plants/info");
}