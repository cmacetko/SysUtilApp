import { makeStyles, TableCell, TableRow, withStyles } from "@material-ui/core";

export const StyledTableCell = withStyles(() => ({
    body: {
        fontSize: 14,
        whiteSpace: 'normal',
        wordBreak: 'break-word',
    },
}))(TableCell);

export const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: theme.palette.action.hover,
        },
    },
}))(TableRow);

export const useStyles = makeStyles((theme) => ({
    tableHeader: {
        backgroundColor: theme.palette.grey[300],
    }
}));