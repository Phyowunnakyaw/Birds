import { useEffect, useState } from "react";


function useFetch ( url ) {

    let [ data, setData ] = useState( null );
    let [ error, setError ] = useState( null );
    let [ loading, setLoading ] = useState( false );
 
    useEffect ( () => {

        setLoading( true )
        fetch ( url )
        .then ( res => {

            if ( !res.ok ) {
                throw Error( ' Something went wrong..... ' )
            } return res.json();

        } )

        .then ( data => {
            
            setData( data );
            setError( null );
            setLoading( false );

        } )

        .catch ( err => {

            setError( err.message )

        } )
     
    }, [ url ] )

    return { data, loading, error }

}

export default useFetch;
