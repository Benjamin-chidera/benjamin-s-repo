import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/ui/Navbar";
import { Home } from "./components/pages/Home";
// import { Music } from "./components/pages/Music";
import { EachCat } from "./components/ui/EachCat";
import { supabase } from "../src/supabase/client";
import { useEffect, useState } from "react";
import { ErrorUi } from "./components/ui/ErrorUi";
import { Overview } from "./components/pages/Overview";
import { Admin } from "./components/pages/Admin";
import { Footer } from "./components/ui/Footer";
import { Loading } from "./components/ui/loading";

function App() {
  const [myData, setMyData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    const { data, error } = await supabase.from("stories").select();

    if (error) {
      <ErrorUi />;
    } else {
      setMyData(data);
    }
    setLoading(true);
  };

  useEffect(() => {
  setTimeout(() => {
    setLoading(false);
  }, [4000])
  }, []);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route
            path="/"
            element={<Home myData={myData} loading={loading} />}
          ></Route>

          <Route
            path="/blog/:id"
            element={<EachCat myData={myData} loading={loading} />}
          ></Route>

          <Route
            path="/overview/:id"
            element={<Overview myData={myData} loading={loading} />}
          ></Route>

          <Route path="/admin" element={<Admin />}></Route>
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
      {/* <Loading /> */}
    </div>
  );
}

export default App;
