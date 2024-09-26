import React from 'react';

const ProjectMilestone = ({date, description, title, done}) => {
  return (
    <div className='flex items-center gap-4 mb-8'>
      <div style={{backgroundColor: done ? '#55A9BB' : "lightgrey"}} className="w-16 h-16 flex justify-center items-center rounded-full text-white text-4xl">{done ? "✓" : ""}</div>
      <div>
        <h3 className='text-2xl'>{date}: {title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ProjectMilestone;