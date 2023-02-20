import React from 'react';

// ~!Using the shorthand is not possible in loops because empty elements cannot contain any props.
//  ~!Elements in a loop require us to define a key prop, forcing us to use <React.Fragment> instead.


// ~*shorten the notation even
{/* <>Fragment in shorthand syntax</> */}



const TicketMeta = ({ metaData }) => (
  <dl>
    <>Fragment in shorthand syntax</> 
    {Object.entries(metaData).map(([property, value]) => (

      
      <React.Fragment key={property}> 
      
        <dt>{property}</dt>
        <dd>{value}</dd>
      </React.Fragment>
    ))}
  </dl>
);

export default class FragmentsApp extends React.Component {
  render() {
    return (
      <TicketMeta 
        metaData={{
          createdAt: '2018-06-09',
          author: 'Manuel Bieh',
          category: 'General',
        }}
      />
    );
  }
}