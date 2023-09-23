import React, { useState } from 'react';
import { useNavigate } from "react-router";
import { getAuth } from "firebase/auth";
import Sortable from 'sortablejs';


// Sample image data
    const initialImages = [
    { 
      id: 1, 
      url: 'https://images.unsplash.com/photo-1694845479853-c9721af5a191?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxN3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60', 
      title: 'Train',
      tags:'Engineering'
    },
    { 
      id: 2, 
      url: 'https://plus.unsplash.com/premium_photo-1694704424069-8c32027a6f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60', 
      title: 'Food',
      tags:'food'
    },
    { 
      id: 3, 
      url: 'https://images.unsplash.com/photo-1692911470431-9820cc52c01c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60', 
      title: 'Stair',
      tags: 'stair'
    },
    { 
      id: 4, 
      url: 'https://images.unsplash.com/photo-1691135319989-8ae7dd70571a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60', 
      title: 'Car',
      tags: 'Engineering'
    },
    { 
      id: 5, 
      url: 'https://images.unsplash.com/photo-1682687982093-4773cb0dbc2e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60', 
      title: 'Desert',
      tags: 'Places'
    },
    { 
      id: 6, 
      url: 'https://images.unsplash.com/photo-1694817322913-2aab0898c577?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60', 
      title: 'Art',
      tags: 'Art'
    },
    { 
      id: 7, 
      url: 'https://images.unsplash.com/photo-1694843690023-3d936b2e83b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60', 
      title: 'bottles',
      tags: 'bottles'
    },
    { 
      id: 8, 
      url: 'https://plus.unsplash.com/premium_photo-1694124534101-444a039aee89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60', 
      title: 'Art',
      tags: 'Image'
    },
    { 
      id: 9, 
      url: 'https://images.unsplash.com/photo-1695026513693-451e1aac043f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80', 
      title: 'Art',
      tags: 'Image'
    },
    { 
      id: 10, 
      url: 'https://images.unsplash.com/photo-1695051626405-e6a288c882d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=700&q=60',
      title: 'Brick',
      tags: 'Art'
    },
    // Add more images here
  ];

function App() {
  const [images, setImages] = useState(initialImages);
  const [searchTerm, setSearchTerm] = useState('');
  const auth = getAuth()
  const navigate = useNavigate()
  

  // Initialize sortable.js
  const sortableContainer = React.createRef();
    function onLogout() {
    auth.signOut()
    navigate("/")
  }

  React.useEffect(() => {
    const container = sortableContainer.current;
    Sortable.create(container, {
      animation: 150,
      onEnd: handleDragEnd,
    });
  }, []);

  // Handle drag-and-drop
  function handleDragEnd(evt) {
    const newImages = [...images];
    const [movedImage] = newImages.splice(evt.oldIndex, 1);
    newImages.splice(evt.newIndex, 0, movedImage);
    setImages(newImages);
  }

  // Handle search input change
  function handleSearchChange(event) {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
  }

  return (
    <div>
      <div className="relative space-x-3 px-3 py-3 w-full flex justify-between items-center">
        <input
          type="text"
          placeholder="Search by tag..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-full p-2 pl-3 text-sm border border-gray-300 rounded-lg text-gray-50 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
        />
        <p 
          onClick={onLogout} 
          className="text-white w-28 bg-gray-700 text-center rounded p-2 font-semibold font-sm transition duration-200 ease-in-out cursor-pointer"
        >
          Sign-out
        </p>
      </div>
      <h1 className='mt-3 text-center text-white text-3xl font-semibold'>Image Gallery</h1>
      <ul 
        ref={sortableContainer}
        className='grid grid-cols-2 md:grid-cols-custom justify-center items-center'  
      >
        {initialImages.map((image, index) => {
        if (
            image.tags.toLowerCase().includes(searchTerm.toLowerCase()) ||
            searchTerm === ''
          ) {
            return (
              <li className="mx-8 mb-6 px-2" key={image.id}>
                <div className="bg-gray-900 pb-3 my-3 mx-5 text-white">
                  <img 
                    src={image.url} 
                    alt={`Image ${index}`}
                    className="rounded-[15px] mx-auto w-[100%] h-[250px] grid grid-cols-2 md:grid-cols-custom"
                  />
                 <p className='relative bottom-16 uppercase text-center py-2 px-6 bg-amber-400 w-[90%] rounded mx-auto text-lg font-medium'>{image.title}</p>
                </div>
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}

export default App;
