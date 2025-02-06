import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons'; 
import "./style.css";

const Todo = () => {
    const [inputData, setInputdata] = useState('')
    const [items, setitems] = useState([])


    const additem = () => {
        if (!inputData) {

        }
        else {
            setitems([...items,inputData]);
            setInputdata('');
        }
    }
//delte item
   const deleteitem = (id) => {
const updateitem =items.filter ((elem,ind) => {
return ind!=id;

   });
   setitems(updateitem);
   }
//remove ALL items
   const removeAll =() => {
setitems([]);

   }
   const checkList = () => {
    if (items.length === 0) {
        alert("Your checklist is empty!");
    } else {
        alert("Your Checklist:\n" + items.join('\n'));
    }
}



    return (

        <div>
        <div className='todo-container'>
            <div className='main-div'>
                <div className='child-div'>
                    <figure>
                        
                       <img src="checklist.png" /> 
                       
                        <figcaption> 
                           <b>
                            <h2>
                                 Add Your Items Here👌
                                </h2>
                            </b>
                        </figcaption>
                    </figure>


                    <div className='additems' >
                        <input
                            type="text"
                            placeholder='✍️ Enter Your items '
                            value={inputData}
                            onChange={(e) => setInputdata(e.target.value)} />
                       <FontAwesomeIcon 
    icon={faPlus} 
    className="add-btn" 
    title="Add item" 
    onClick={additem} 
/>

                    </div>

                    <div className='showitem'>
                        

{items.map((elem, ind) => {
    return (
        <div className='eachitem' key={ind}>
            <h3>{elem}</h3>
            <FontAwesomeIcon 
                icon={faTrashAlt} 
                className="far fa-trash-alt add-btn" 
                title="delete items" 
                onClick={() => deleteitem(ind)} 
            />
        </div>
    )
})}

                    </div>



                    <div className='showitem'>
    <button className="btn effects" data-sm-link-texts="Remove All" onClick={removeAll}>
        <span>Remove All</span>
    </button>
    <br/>
    <button className="btn effects" data-sm-link-texts="Check List" onClick={checkList}>
        <span>Check List</span>
    </button>
</div>


                </div>
            </div>


        </div>
        </div>
    )
};

export default Todo ;
