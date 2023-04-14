import {DataGrid, GridPaginationModel} from "@mui/x-data-grid";
import {Box} from "@mui/material";
import {columns, rows} from "./DataGridDemoData";
import {useState} from "react";

export const DataGridDemo = () => {
    const [paginationModel, setPaginationModel] = useState({page: 0, pageSize: 5} as GridPaginationModel)
    return (
        <Box sx={{height: 400, width: '100%'}}>
            <DataGrid
                rows={rows}
                columns={columns}
                paginationModel={paginationModel}
                onPaginationModelChange={setPaginationModel}
                pageSizeOptions={[5, 10, 25, 100]}
                checkboxSelection
                disableRowSelectionOnClick
            />
        </Box>
    );
};