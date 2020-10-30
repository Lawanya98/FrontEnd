import React, { useState, useEffect } from 'react';

import NameListItem from './NameListItem';

function NameList() {
  
  const [nameList, setNameList] = useState([
    
  ]);

  useEffect(() => {
    fetch('https://localhost:44385/api/eventplanners')
      .then((response) => {
        return response.json();
      })
      .then((responseData) => {
      console.log(responseData);
      for (var i = 0; i < responseData.length; i++) {
        console.log(responseData[i]);
         setNameList((nameList) => [...nameList, responseData[i]]);

        
        
        
      }
   
     
      
      });
  }, []);

  const nameListComponent = () => {
    return nameList.map((aName) => {
      return (
        <NameListItem
        
          name={aName.eventName}
          cost={aName.price}
          details={aName.otherDetails}
          venue={aName.venue}
          comments={aName.comments}
          notifications={aName.notifications}
         
        />
      );
    });
  };

  
  return (
    <React.Fragment>
      <div className="container mt-4">
      
        <ul className="list-group">{nameListComponent()}</ul>
      </div>
    </React.Fragment>
  );
}

export default NameList;