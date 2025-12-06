import TextInput from "./components/TextInput/TextInput";


function App() {
  function handleTextChange(text: string) {
    console.log("User typed:", text);
  }

  return (
    <div>
      <h1>TextInput Test</h1>
      <TextInput onTextChange={handleTextChange} />
    </div>
  );
}

export default App;

