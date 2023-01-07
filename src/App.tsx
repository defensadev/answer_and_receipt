import Answer from "./components/Answer";

const App = () => {
  return (
    <div className="w-full">
      <Answer
        caseNumber="221200454157"
        plaintiffName="Parkway Ranch Ltd."
        defendantName="Quiwanna Williams"
        defendantAddr="9922 W. Montgomery Rd Apt 243"
        defendantCityStateZip="Houston, TX 77088"
        phoneNumber="(713) 438-8786"
      />
    </div>
  );
};

export default App;
