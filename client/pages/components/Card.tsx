import { Flex, Grid, Text, Button, Card, Avatar, Box, Strong } from '@radix-ui/themes';
import { supabase } from '../../lib/initSupabase'
import { useEffect, useState } from 'react';

type Props ={
    name: string
    desc: string
    url: string
}

function ProgramCard(props: Props){
    return(
        <article>
            <Text size='7' as='h1'><Strong>{props.name}</Strong></Text>
            <Text size='6' as='p'>{props.desc}</Text>
            {props.url != "NULL"? 
            <a href={props.url}>Apply Online Now</a>
            :
            false
            }
        </article>
    )
}

export default ProgramCard;