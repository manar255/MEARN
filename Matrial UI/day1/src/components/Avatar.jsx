import React from 'react'
import { Avatar } from '@mui/material'

const AvatarMU = () => {
    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }
    function stringAvatar(name) {
        return {
            sx: {
                bgcolor: stringToColor(name),
            },
            children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
        };
    }

    return (
        <>
            <Avatar alt="Remy Sharp" src="https://thewaltdisneycompany.com/app/uploads/2022/11/1920_AVATAR_THE_WAY_OF_WATER_1SHT_DIGITAL_NEYTIRI_sRGB_V1-415x614.jpg" />
            <Avatar variant='rounded' alt="Remy Sharp" src="https://thewaltdisneycompany.com/app/uploads/2022/11/1920_AVATAR_THE_WAY_OF_WATER_1SHT_DIGITAL_NEYTIRI_sRGB_V1-415x614.jpg" />


            <Avatar {...stringAvatar('Tim Neutkens')} />
        </>
    )
}

export default AvatarMU