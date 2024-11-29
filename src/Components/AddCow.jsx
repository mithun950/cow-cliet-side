import { Link } from "react-router-dom";


const AddCow = () => {

    const handleAddCow = e => {
        e.preventDefault();
        const form = (e.target)
        const name = form.name.value;
        const quantity = form.quantity.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const detail = form.detail.value;
        const photo = form.photo.value;

        const newCow = {name,quantity,supplier,taste,category,detail,photo}
        console.log(newCow)

       fetch('http://localhost:3000/cow', {
        method: "POST",
        headers:{
            "content-type": "application/json",
        },
        body:JSON.stringify(newCow)

       })

       .then(res => res.json())
       .then(data => {
        console.log(data)
        alert('data added successfully')
       })

    }





    return (
        <div>
        <h2>Add Cow</h2> 
        <form onSubmit={handleAddCow}> 
         <div className="text-center mt-20 bg-[#F4F3F0]  w-10/12 mx-auto p-20">
        
        {/* name and quantity row */}
         <div className="md:flex justify- between gap-5">
             <div className="md:w-1/2">
                   <input className="border text-center rounded-lg py-3 w-full  mt-4" type="text" name="name" id="" placeholder="Cow name" />
             </div>
     
             <div className="md:w-1/2">
                   <input className="border text-center w-full rounded-lg py-3  mt-4" type="text" name="quantity" id="" placeholder="Available Quantity " />
             </div>
        </div>    
              
              {/* suplier name and Taste row */}
         <div className="md:flex justify- between gap-5">
             <div className="md:w-1/2" >
                  <input className="border text-center rounded-lg py-3 w-full  mt-4" type="text" name="supplier" id="" placeholder="Supplier name" />
             </div>
             <div className="md:w-1/2">
                   <input className="border text-center w-full rounded-lg py-3  mt-4" type="text" name="taste" id="" placeholder="Taste" />
              </div>
        </div>  
          
          {/* category and details row */}
         <div className="md:flex justify- between gap-5">
             <div className="md:w-1/2">
                  <input className="border w-full text-center rounded-lg py-3  mt-4" type="text" name="category" id="" placeholder="Category name" />
             </div>
             <div className="md:w-1/2" >
                   <input className="border text-center rounded-lg py-3 w-full  mt-4" type="text" name="detail" id="" placeholder="Detail" />
              </div>
        </div>  


        {/* photo url  */}

         <div className="">
             <div >
                  <input className="border w-full text-center rounded-lg py-3  mt-4" type="text" name="photo" id="" placeholder="Photo Url" />
             </div>
             
        </div> 

                    <input type="submit" value="Add Cow" className="btn btn-block mt-4 bg-[#edc345]" />
     
         </div>

        </form>
        <Link to='/' className="btn btn-secondary mt-10">Back to home</Link>
     </div>
    );
};

export default AddCow;