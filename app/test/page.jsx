const TestPage = () => {
  
  const handleForm = async (formData) => {
    "use server";
    console.log(formData);
    const username = formData.get("username");
    console.log("Form submitted", username);
  };
  return (
    <div>
      <form action={handleForm}>
        <input type="text" name="username" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default TestPage;
