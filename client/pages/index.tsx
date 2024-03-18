import { Flex, Grid, Text, Button, Card, Avatar, Box, Strong } from '@radix-ui/themes';
import React, {useEffect, useState}from 'react'
import { supabase } from '../lib/initSupabase';
import ProgramCard from './components/Card'

type Program = {
  url_of_online_application: string;
  program_description: string;
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
    
    <article>
      <Text size='9' align='center' as='h1'> <strong>GovFind</strong> </Text>
      <Text size='5' align='center' as='h2'><strong> Mission: Make applying for government programs in NYS easier and more accessible</strong></Text>
      {message}
      <ul style={{width:'90%', margin:"0 auto"}}>
        {programs.map((program) => (
          <li key={program.unique_id_number} style={{margin:'20px 0',padding:'20px', border: "black solid 2px"}}> 
            <ProgramCard name={program.program_name} desc={program.program_description} url={program.url_of_online_application} />
            {/* {program.program_name} -
            {program.program_category} */}
          </li>
        ))}
      </ul>
    </article>
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