import React, { useState, useEffect } from 'react';


function Search() {
    const [obj, setObj] = useState('');
    const [inputVal, setInputVal] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    useEffect(() => {
        

        const a = {
            user: {
                id: 1,
                name: {
                    firstName: "James",
                    lastName: "Ibori"
                },
                location: {
                    city: "Ikoyi",
                    state: "Lagos",
                    address: "One expensive house like that"
                }
            }
        }
        setObj(a);
    }, []);

    const pathGet = (e, input = obj) => {
        e.preventDefault();
        if (inputVal.toString().trim() == '') {
            setError('Kindly provide a search term');
            setTimeout(() => { setError('') }, 2000);

        } else {
            var result=findValue(input,inputVal.toString().trim().toLocaleLowerCase());
            if(result && result.path && result.path != ''){
                let res = result.path;
                let a = res.replace(/\[/g,'');
                let b = a.replace(/\]/g,'.');
                let c = b.replace(/'/g,'');
                let d = c.substring(0, c.length-1);
                setSuccess(d);
            }else{
                setSuccess('');
            }
        }


    };

    const findValue = (data, value,path) =>{
        if(typeof(data) != "object" || Object.keys(data).length == 0) 
            return { "path" : "" , "value" : ""};
    
           
        for(var prop in data)  { 
         if (data[prop].toString().toLocaleLowerCase() == value) 
            return { "path" :  path + "['" + prop + "']" , "value" : value};
        }
    
    
        for(var prop in data) { 
            var result = findValue(data[prop],value,path === undefined ? "['" + prop + "']" : path + "['" + prop + "']" );
    
            if (typeof(result) !== typeof(undefined) && result.value != "") { 
                return result; 
            }
        }
    };

   
    const onKeyUp = (event)=> {
        if (event.charCode === 13) {
            // event.preventDefault();
          
            pathGet(event,inputVal);
        }
    };

    return (
        <div className="searchMain">
            <h1>Search Engine</h1>
            <form>
                {error != '' ? (

                    <h4 className="text-warning">{error}</h4>

                ) : ''}
                {success != '' ? (

                    <h4 className="text-success">{success}</h4>

                ) : ''}
                <input type="text" onKeyPress={onKeyUp} onChange={event => setInputVal(event.target.value)} />
                <button onClick={(event) => pathGet(event)} type="button">Search</button>
                
            </form>
        </div>
    );
}

export default Search;