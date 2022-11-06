import { FormControl, InputLabel, Select, MenuItem, SelectChangeEvent, TextField } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import codesJson from './airports.json';

export interface AirportCodesInterface {
    icao: string;
    name: string;
}

const AirportCodes = () => {

    const [sort, setSort] = React.useState<string>('icao');
    const [codes, setCodes] = React.useState<AirportCodesInterface[]>([]);
    const [filter, setFilter] = React.useState<string>('');

    React.useEffect(() => {
        // Sort codes by selected.
        const clone = codesJson.slice();
        if (sort === 'icao') {
            clone.sort((a: AirportCodesInterface, b: AirportCodesInterface) => a.icao > b.icao ? 1 : -1);
        } else {
            clone.sort((a: AirportCodesInterface, b: AirportCodesInterface) => a.name > b.name ? 1 : -1);
        }

        setCodes(filter ? filterCodes(clone) : clone);
    }, [sort, filter])

    const filterCodes = (unfiltered: AirportCodesInterface[]) => {
        return unfiltered.filter((code) => 
            code.icao.toLowerCase().includes(filter.toLowerCase()) ||
            code.name.toLowerCase().includes(filter.toLowerCase()) 
        )
    }

    const changeSort = (event: SelectChangeEvent) => {
        setSort(event.target.value as string);
    }

    return (
        <React.Fragment>

            <Box sx={{ display: 'flex', pb: 2 }}>

                <TextField 
                    fullWidth
                    sx={{ pr: 1, flex: 1 }}
                    label="Filter"
                    value={filter}
                    onChange={(event) => setFilter(event.target.value)}
                />

                <FormControl fullWidth sx={{ flex: 1 }}>
                    <InputLabel id="demo-simple-select-label">Sort</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={sort}
                        label="Sort"
                        onChange={changeSort}
                    >
                        <MenuItem value={'icao'}>ICAO Code</MenuItem>
                        <MenuItem value={'name'}>Airport name</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            <Box sx={{
                display: 'flex',
                flexDirection: 'column'
            }}>

                {codes.map((code, index) => <Box>
                    {code.name} - {code.icao}
                </Box>)}

            </Box>
        </React.Fragment>
    )

}

export default AirportCodes;