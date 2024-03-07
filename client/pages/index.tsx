import React, {useEffect, useState}from 'react'
import { supabase } from '../lib/initSupabase';

type Program = {
  unique_id_number: string;
  program_name: string;
  program_category: string;
  // Add other program properties as needed - lets move this to its own ts file
};

function index() {
  const [message, setMessage] = useState<string>("Loading...");
  const [programs, setPrograms] = useState<Program[]>([]); // Define the state with the type

  const fetchProgramNames = async () => {
    const { data, error } = await supabase //Fetch the program data from the database
      .from('benefits_programs')
      .select('*');
    
    if (error) {
      console.error('Error fetching data:', error);
      setMessage('Error loading programs.');
    } else {
      // Here we assert that data is of type Program[].
      setPrograms(data as Program[]);
      setMessage('');
    }
  };

  useEffect(() => {
    fetchProgramNames();
  }, []);

  return (
    <div>
      {message}
      <ul>
        {programs.map((program) => (
          <li key={program.unique_id_number}> 
            {program.program_name} - 
            {program.program_category}
          </li>
        ))}
      </ul>
    </div>
  );
}
  // useEffect(() => {
  //   fetch("http://127.0.0.1:8000/api/home")
  //     .then(response => response.json())
  //     .then((data) => {
  //         setMessage(data.message);
  //       });
  // }, []);

  // return (
  //   <div>{message}</div>
  // )


export default index