import { Flex, Grid, Text, Button, Card, Avatar, Box, Strong } from '@radix-ui/themes';
import { supabase } from '../../lib/initSupabase'
import { useEffect, useState } from 'react';

function Home(){
    const [fetchError, setFetchError] = useState(null)
    const [programs, setPrograms] = useState(null)

    useEffect(() => {
        const fetchPrograms = async () => {
            const { data, error} = await supabase
             .from('benefits_programs')
            .select()

            if (error) {
                setFetchError("Could not fetch programs")
                setPrograms(null)
                console.log(error)
            }
            if(data){
                setPrograms(data)
                setFetchError(null)
            }
        }

        fetchPrograms()
    }, [])

    console.log(supabase)

    return(
        <article>
            <Text size='9' align='center' as='h2'> GovFind </Text>
            <Text size='5' align='center' as='h3'> Mission: Make applying for government programs in NYS easier and more accessible</Text>

            {fetchError && (<Text size={3} color='red'>{fetchError}</Text>)}
            {programs && (
                <Grid columns={{ initial: '1', md: '1' }} style={{width:'90%', margin: '0 auto'}} gap="3" width="auto">
                    {programs.map((prog, index) => (
                    <Box key={index} style={{padding: '20px',border:'2px solid black'}} width="10" height="10">
                    <Text size='7' as='h2'>{prog.program_name}</Text>

                    <Text size='6' as='p'>{prog.program_description}</Text>
                    <Text><a href={prog.url_of_online_application}>Apply online now</a></Text>
                </Box>
                ))}
                {
                    console.log(programs)
                }
                </Grid>
            )}
            <Grid columns={{ initial: '1', md: '1' }} style={{width:'90%', margin: '0 auto'}} gap="3" width="auto">
            </Grid>

        </article>
    )
}

export default Home;