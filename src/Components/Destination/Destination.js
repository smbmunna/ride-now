import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import { Container } from 'react-bootstrap';
import { transportContext } from '../../App';
import destination_data from '../../fakeData/destinations';
import SearchForm from '../SearchForm/SearchForm';
import SearchResult from '../SearchResult/SearchResult';

const Destination = () => {
    //Reading chosen transport from state
    const [transport, setTransport] = useContext(transportContext);
    
    console.log(transport);
    //Reading Destination data from fake data
    const destinations = [...destination_data];

    //Storing From / To location input in a state; 
    const [input, setInput] = useState({
        from: '',
        to: '',
        date: ''
    })

    //Storing Search Result in a State
    //const [result, setResult] = useState([]);
    const [finalResult, setFinalResult]= useState([]);

    //States for showing and managing search results and search form
    const [searchForm, setSearchForm] = useState(true);
    const [searchResult, setSearchResult] = useState(false);

    //Handle Blur for validations
    const handleBlur = e => {
        e.preventDefault();
        //const from= e.target.value; 
        if (e.target.name == 'from') {
            input.from = e.target.value;
        }
        if (e.target.name == 'to') {
            input.to = e.target.value;
        }
        if (e.target.name == 'date') {
            input.date = e.target.value;
        }
        //console.log(input);
        //console.log(transport);
    }


    //Handle search results
    const handleSubmit = (e) => {
        //const finalResult = [];
        
        if (input.to && input.from && input.date) {
            destinations.map((d) => {
                if (d.vehicle == transport.chosenVehicle) {
                    finalResult.push(d);
                    //result.push(d);

                    //setResult([...finalResult]);
                }
            })
            setSearchForm(false);
            setSearchResult(true);
            //console.log('Type of Finalresult: ', typeof(finalResult), '<br> type of result: ', typeof(result));
            //console.log(finalResult);
            setFinalResult(finalResult);
            //console.log(finalResult);
        }
        e.preventDefault();
    }

    return (
        <div>
            <Header></Header>

            <Container>
                {searchForm ? <SearchForm handleBlur={handleBlur} handleSubmit={handleSubmit}></SearchForm> : null}
                {searchResult ? <SearchResult finalResult={finalResult} input={input} vehicleImage={transport.vehiclePicture}></SearchResult> : null}
            </Container>
        </div>
    );
};

export default Destination;