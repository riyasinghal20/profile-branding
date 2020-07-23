import React from 'react';
import './artist.css';
import end from "./images/end.jpg" ;
export default class Artist extends React.Component{
render(){
     return(
         <div>
              <div className="title">
               <h1> AN ENTREPRENEUR </h1>
               </div>
               <div className="list">
               <ul>
                <li>Home    </li>
                <li>A HUMAN </li>
                <li>AN ARTIST</li>
                <li>AN ALCHEMIST</li>
                <li>AN ENTREPRENEUR</li>
                <li>AN PHILOPHER</li>
                </ul>
                </div>
                <div className='end'>
                     <img src={end}/>

                </div>
                
               
               <div>
                     <p>
                          Concept art expresses a series of creations, called classical arts 
                          (painting, sculpture, literature, dance, music, architecture and cinema).
                           However, considering someone as an artist is not limited to a series of works or
                         concrete creations.

                         An ENTREPRENEUR is a person exercising the arts and produce artistic works. 
                         The artist is someone who has a special sensitivity to create a work or activity.
                         There is no specific classification of what are an artist's own activities .In
                         any case, the concept artist implies knowledge of art and at the same time, is 
                         a craft that can be professional but not necessarily. The artist seeks to create 
                         an object or activity that has a component of beauty. Very beautiful is one aspect
                         cherished by the creators, but not only that.
                         It also seeks to communicate feelings and ideas and form their own world

                     </p>
                     
                </div>
                </div>



     );
}
}
import Artist from './components/Page/artist';