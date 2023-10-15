import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import vv from '../../static/vv.jpeg';

interface HeaderProps {
    sections: Array<any>;
    title: string;
}

export default function Header(props: HeaderProps) {
    const { sections, title } = props;
    console.log("sections", sections)
    return (
        <React.Fragment>
            <Toolbar sx={{ borderBottom: 1, borderColor: 'divider' }}>

                <Typography
                    component="h2"
                    variant="h4"
                    color="#3F2305"
                    align="center"
                    noWrap
                    sx={{ flex: 1, paddingLeft: "7.8rem", fontWeight: "550" }}
                >
                    {title}
                </Typography>
                <a href="https://www.vt.edu/" target="_blank" rel="noopener noreferrer">
                    <img
                        src={vv}
                        alt="VT Website Logo"
                        style={{ width: '100px', height: 'auto' }}
                    />
                </a>
            </Toolbar>
            {<Toolbar
                component="nav"
                variant="dense"
                sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
            >
                {sections?.map((section: any) => (
                    <Link
                        color="inherit"
                        noWrap
                        key={section.title}
                        variant="subtitle1"
                        sx={{ p: 1, flexShrink: 0, padding: "0rem 13rem" }}
                    >
                        {section.title}
                    </Link>
                ))}
            </Toolbar>}
        </React.Fragment>
    );
}