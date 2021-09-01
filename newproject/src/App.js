// import React, { useState } from "react";
// import Header from "./components/Header";
// import List from "./components/List";
// import fs from "./assets/fs.png";
// import aws from "./assets/aws.png";
// import axios from "axios";

// function App() {
//   const [counter, setCounter] = useState(0);
//   const [img, setImg] = useState();
//   const [studentsList, setStudentList] = useState([]);
//   const [text, setText] = useState("");
//   const [search, setSearch] = useState("");

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/users")
//       .then((res) => setStudentsList(res.data));
//   }, []);
//   const handleText = (e) => {
//     setText(e.target.value);
//   };
//   const handleSearch = () => {
//     setSearch(text);
//   };

//   // -------filter metodu------- ve use memo ile gereksiz render i engelledik!!!
//   const filteredStudents = useMemo(
//     () =>
//       studentsList.filter((student) => {
//         return student.name.toLowerCase().includes(search.toLowerCase());
//       }),
//     [search, studentsList]
//   ); //[icerisine yazdigimiz dependency array degerleri serche e veri geldiginde ya da student list  degistiginde render etsin diye belirtmis oluyoruz]

//   const add = ()=> {
//     setStudentList([
//       ...studentsList, {id: studentsList.length + 1, name: "Edward CW"},
//   ]);
//   };
//   return (
//     <div className="App">
//       <Header img={img} />
//       <p>Counter: {counter}</p>
//       <button onClick={() => setCounter(counter + 1)}>Increase</button>
//       <button onClick={() => setImg(fs)}>FS</button>
//       <button onClick={() => setImg(aws)}>AWS</button>
//       <button onClick={() => setImg("")}>Reset</button>
//       {/* react memo olsa bile farkli props gönderirsek memo olusuna bakmaz ve render eder, fs ve aws butonlarina ardi ardina basmak gibi, bir ona bir ötekine olacak sekilde */}
//       <input type="text" value={text} onChange={handleText} />
//       <button onClick={handleSearch}>Search</button>

//       <hr />
//       <List students={filteredStudents} />
//     </div>
//   );
// }
// export default App;



import React, { useState, useEffect, useMemo, useCallback } from "react";
import Header from "./components/Header";
import List from "./components/List";
import fs from "./assets/fs.png";
import aws from "./assets/aws.png";
import axios from "axios";
function App() {
  const [counter, setCounter] = useState(0);
  const [img, setImg] = useState();
  const [studentsList, setStudentsList] = useState([]);
  console.log('studentsList', studentsList)
  const [text, setText] = useState("");
  console.log("text", text);
  const [search, setSearch] = useState("");
  console.log("search", search);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      // .then((res) => console.log(res));
      .then((res) => setStudentsList(res.data));
  }, []);
  const handleText = (e) => {
    setText(e.target.value);
  };
  const handleSearch = () => {
    setSearch(text);
  };
  const filteredStudents = useMemo(
    () =>
      studentsList.filter((student) => {
        return student.name.toLowerCase().includes(search.toLowerCase());
      }),
    [search, studentsList]
  );
  const add = useCallback(() => {
    setStudentsList([
      ...studentsList,
      { id: studentsList.length + 1, name: text },
    ]);
  },[studentsList]);
  return (
    <div className="App">
      <Header img={img} />
      <p>Counter: {counter}</p>
      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setImg(fs)}>FS</button>
      <button onClick={() => setImg(aws)}>AWS</button>
      <button onClick={() => setImg("")}>Reset</button>
      <hr />
      <input type="text" value={text} onChange={handleText} />
      <button onClick={handleSearch}>Search</button>
      {/* <List students={studentsList} /> */}
      <List students={filteredStudents} add={add} />
    </div>
  );
}
export default App;
