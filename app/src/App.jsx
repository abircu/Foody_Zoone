import { useEffect, useState } from "react";
import styled from"styled-components";

const BASE_URL ="http://localhost:9000";

const App = () => {
const [Data, setData]=useState(null);
const [loading,setLoading]=useState(false);
const [error, setError] =useState(null);

// useEffect(()=>{
//   const fetchfoodData =async()=>{
//   setLoading(true);
//  try {
//   console.log("hello")
//      const response =await fetch(BASE_URL);
//      console.log(response)
//   const json = response.json();

//    setData(json);
//   setLoading(false);
//  } catch (error) {
//   setError("Unable to fetch data");
//  }
// };
//  fetchfoodData();
// },[]);

useEffect(()=>{
   const getData = async() =>{
      try {
         const response = await fetch('http://localhost:9000/');
          const json = response.json();
        setData(json);
         setLoading(false);
      } catch (error) {
         setError("Unable to fetch data");
        console.log(error)
      }
    }
    getData();
},[])

if(error) return <div>{error}</div>;

  return <Container>
      <TopContainer>
        <div className="logo">
          <img src="images/Foody Zone.png" alt="" />
        </div>
        <div className="Search">
          <input placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        <Button>All</Button>
        <Button>Break fast</Button>
        <Button>Lunch</Button>
        <Button>Dinner</Button>
      </FilterContainer>
      <Search_Result data={data} />
  </Container>;
};

export default App;

const Container =styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer=styled.section`
  min-height: 140px;
  display: flex;
  justify-content: space-between;
  padding: 16px;
  align-items: center;
  .Search{
    input{
      background-color: transparent;
      border: 1px solid red;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 0 10px;
    }
  }
`;

const FilterContainer= styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px; 
`;

const Button=styled.button`
  background: #ff4343;
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
`;

