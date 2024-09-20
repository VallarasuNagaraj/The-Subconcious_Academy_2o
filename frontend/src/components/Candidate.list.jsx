// eslint-disable-next-line no-unused-vars
import React from 'react';
import Footer from './footer';
import Slider from './slider';

const candidates = [
  { name: 'John Doe', company: 'Company A', role: 'Software Engineer', imageUrl: './src/assets/t1.webp',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Jane Smith', company: 'Company B', role: 'Product Manager', imageUrl: './src/assets/team11.webp',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, '  },
  { name: 'Samuel Green', company: 'Company C', role: 'Designer', imageUrl: './src/assets/t3.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Alice Brown', company: 'Company D', role: 'Data Scientist', imageUrl: './src/assets/t4.webp',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'David Wilson', company: 'Company E', role: 'Marketing Manager', imageUrl: './src/assets/t5.webp',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Sophia Taylor', company: 'Company F', role: 'DevOps Engineer', imageUrl: './src/assets/t6.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Michael Johnson', company: 'Company G', role: 'Sales Manager', imageUrl: './src/assets/t7.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Emily Davis', company: 'Company H', role: 'Business Analyst', imageUrl: './src/assets/t8.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Daniel Thompson', company: 'Company I', role: 'HR Specialist', imageUrl: './src/assets/t9.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Olivia White', company: 'Company J', role: 'Content Writer', imageUrl: './src/assets/t10.webp',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'James Harris', company: 'Company K', role: 'UX/UI Designer',  imageUrl: './src/assets/t11.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Isabella Martin', company: 'Company L', role: 'Project Manager',  imageUrl: './src/assets/t4.webp',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'William Lee', company: 'Company M', role: 'Backend Developer',  imageUrl: './src/assets/t3.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Mia Anderson', company: 'Company N', role: 'SEO Specialist',  imageUrl: './src/assets/t1.webp',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
  { name: 'Elijah King', company: 'Company O', role: 'Technical Support',  imageUrl: './src/assets/t8.jpeg',feedback:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, ' },
];

function CandidateGrid() {
  return (
    <>
    <Slider/>
    <div className="mx-auto px-32 py-8">
    <h1 className='font_style text-6xl sm:text-3xl text-center sm:ml-[-50px] sm:mt-9'>
      Placement <span className='text-primary_color_gold font_style'>Candidates List</span>
    </h1>
    <div className="grid grid-cols-3 sm:grid-cols-1 sm:w-[300px] sm:ml-[-90px] gap-6 mt-8">
      {candidates.map((candidate, index) => (
        <div 
          key={index} 
          className="relative group bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img 
            src={candidate.imageUrl} 
            alt={`${candidate.name}`} 
            className="w-full h-48 object-cover rounded-t-lg transition duration-300 ease-in-out"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <h3 className="text-white text-xl font-bold">{candidate.name}</h3>
            <p className="text-white">{candidate.company}</p>
            <p className="text-white">{candidate.role}</p><br />
            <p className="text-white">{candidate.feedback}</p>
          </div>
        </div>
        ))}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default CandidateGrid;
