import { CiEdit } from "react-icons/ci";
import { FaRegEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const Card = ({cow,setCows,cows}) => {


    const {_id,name,quantity,supplier,taste,category,detail,photo} = cow;






    const handleDelete = _id => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:3000/cow/${_id}`,{
                    method: "DELETE",
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if(data.deletedCount>0) {

                        Swal.fire({
                                title: "Deleted!",
                               text: "Your file has been deleted.",
                                 icon: "success"
                               });
    
                               const remaining = cows.filter(co => co._id !==_id )
                               setCows(remaining);
    
                    }
                })
            }
          });

    }
    return (
        <div className="card card-side py-5 shadow-xl bg-[#d6c080] ">
        <figure>
          <img src={photo}
            alt="Movie" />
        </figure>
        <div className=" flex justify-between w-full pr-5 items-center">
         <div>
         <h2 className="card-title">Name: {name}</h2>
         <p>Quantity: {quantity}</p>
         <p>Taste: {taste}</p>
         </div>
          <div className="card-actions justify-end">
          <div className="join join-vertical space-y-2">
              <button className="btn join-item bg-[#D2B48C]"><FaRegEye className="text-white text-xl" /></button>
              <Link to={`updateCoffee/${_id}`}>
              <button className="btn join-item bg-[#3C393B]"><CiEdit className="text-white text-xl" /></button>
      
              </Link>
              <button onClick={() => handleDelete(_id)} className="btn join-item bg-[#EA4744]"><MdDelete className="text-white text-xl" /></button>
          </div>
          </div>
        </div>
      </div>
    );
};

export default Card;