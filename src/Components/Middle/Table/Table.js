import "./Table.css";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, trackingId, date, status) {
    return {name, trackingId, date, status};
}

const makeStyles = (status) => {
    if (status === 'Approved') {
        return {
            background: 'rgb(145 254 159/47%',
            color: "green",

        }
    } else if (status === 'Delivered') {
        return {
            background: '#59bfff',
            color: "white",

        }
    }else if (status === 'Pending') {
        return {
            background: '#ffadad8f',
            color: "red",

        }
    }

}


        const rows = [
            createData('Yoghurt', 18943442, "29 March 2022", "Approved"),
            createData('Ice cream ', 18943442, "29 March 2022", "Pending"),
            createData('Eclair', 18943442, "29 March 2022", "Approved"),
            createData('Cupcake', 18943442, "29 March 2022", "Delivered"),

        ];

        export default function DenseTable() {
            return <div className={"table"}>
                <h3>Recent Orders</h3>
                <TableContainer
                    style={{boxShadow: "0 13px 20px 0 #80808029"}}
                    component={Paper}>
                    <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Product</TableCell>
                                <TableCell align="left">Tracking ID</TableCell>
                                <TableCell align="left">Date</TableCell>

                                <TableCell align="left">Status</TableCell>
                                <TableCell align="left"> </TableCell>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows.map((row) => (
                                <TableRow
                                    key={row.name}
                                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                                >
                                    <TableCell component="th" scope="row">
                                        {row.name}
                                    </TableCell>
                                    <TableCell align="left">{row.trackingId}</TableCell>
                                    <TableCell align="left">{row.date}</TableCell>
                                    <TableCell align="left">
                                <span className={"status"} style={makeStyles(row.status)}>
                                    {row.status}
                                </span>

                                    </TableCell>
                                    <TableCell className={"details"} align="left">Detail</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>


        }
