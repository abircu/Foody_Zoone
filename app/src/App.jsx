import { useEffect, useState } from "react";
import styled from"styled-components";
import Search_Result from "./components/Search_Result";

 export const BASE_URL ="http://localhost:9000";

const App = () => {
const [Data, setData]=useState(null);
// Search funtionality for Card**
const [filteredData, setFilteredData]= useState(null);
// use effect for button
const [selectedBtn, setSelectedBtn]=useState("all");
const [loading,setLoading]=useState(false);
const [error, setError] =useState(null);

useEffect(()=>{
  const fetchfoodData =async()=>{
    console.log('dsf')
  setLoading(true); 
 try {
     const response = await fetch(BASE_URL);
     console.log(response)
  const json = await response.json();
   console.log('data in repsone ', json)
   setData(json);
   setFilteredData(json);
  setLoading(false);
 } catch (error) {
  setError("Unable to fetch data");
 }
};
 fetchfoodData();
},[]);

//Generating for searh function
const searchFood = (e)=>{
  const searchValue = e.target.value;
  if(searchValue===""){
    setFilteredData(null);
  }
  const filter = Data?.filter((food)=>
  food.name.toLowerCase().includes(searchValue.toLowerCase())

  );
   setFilteredData(filter);
};

const filterFood=(type)=>{
  if(type =="all"){
    setFilteredData(Data);
    selectedBtn("all");
    return;
  }
    const filter = Data?.filter((food)=>
    food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    selectedBtn(type);

};

const filterBtns =[
    {
      name:"All",
      type:"all",
    },
     {
      name:"Breakfast",
      type:"breakfast",
    },
     {
      name:"Lunch",
      type:"lunch",
    },
     {
      name:"Dinner",
      type:"dinner",
    }

];






// useEffect(()=>{
//    const getData = async() =>{
//       try {
//          const response = await fetch('http://localhost:9000/');
//           const json = response.json();
//         setData(json);
//         console.log(json)
//          setLoading(false);
//       } catch (error) {
//          setError("Unable to fetch data");
//         console.log(error)
//       }
//     }
//     getData();
// },[])

if(error) return <div>{error}</div>; 

  return <>
  <Container>
      <TopContainer>
        <div className="logo">
          <img src="images/Foody Zone.png" alt="" />
        </div>
        <div className="Search">
          <input onChange={searchFood} placeholder="Search Food" />
        </div>
      </TopContainer>

      <FilterContainer>
        {
          filterBtns.map((value)=>(
            <Button 
            isSelected={selectedBtn==value.type}
            key={value.name} onClick={()=>filterFood(value.type)}>
              {value.name}
            </Button>
          ))}
      </FilterContainer>
     {loading?<>
     data preparing....
     </>:<>
     {console.log('data  is in app ', Data)}
     </>}
  </Container>
   <Search_Result data={filteredData} />
  </>
  
};

export default App;

export const Container =styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const TopContainer=styled.section`
  height: 140px;
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
      &::placeholder{
        color: white;
      }
    
    }
  }
  @media(0 <width < 600px){
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer= styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px; 
`;

 export const Button=styled.button`
  background:${({isSelected})=>(isSelected ? "#f22f2f" : "#ff4343")};
  border-radius: 5px;
  padding: 6px 12px;
  border: none;
  color: white;
  cursor: pointer;
  &:hover{
    background-color:#f22f2f;
  } 

`;

