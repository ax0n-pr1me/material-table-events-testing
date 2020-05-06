import React from 'react'
// import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'
import { Paper } from '@material-ui/core'
// import ChevronRightIcon from '@material-ui/icons/ChevronRight';
// import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

export default function Table(props) {

    const handleTest = () => {
        console.log('prop test')
    }

    return (
        <MaterialTable
            columns={[
                { title: 'Name', field: 'name' },
                { title: 'Surname', field: 'surname' },
                { title: 'Birth Year', field: 'birthYear', type: 'numeric' },
                {
                    title: 'Birth Place',
                    field: 'birthCity',
                    lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
                },
            ]}
            data={[
                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                { name: 'Zerya Betül', surname: 'Baran', birthYear: 1987, birthCity: 63 },
            ]}
            title="Detail Panel With RowClick Preview"

            detailPanel={[
                // {
                //     onTreeExpandChange: () => console.log('test')
                // },
                // {
                //     onToggleDetailPanel: () => console.log('test')
                // },
                {
                    isFreeAction: true,
                    togglePanel: () => console.log('test from inner toggle pannel'),
                    render: rowData => {
                        // console.log('test in return')
                        handleTest()
                        return (
                            <Paper>
                                <h1>text</h1>
                            </Paper>
                        )
                    },
                },
            ]}

            togglePanel={console.log('test from toggle pannel')}
            toggleDetailPanel={console.log('test from toggle detail pannel')}

            onRowClick={(event, rowData) => console.log(rowData)}
            onToggleDetailPanel={(event, rowData) => console.log('test from panel toggel', event)}
        // onTreeExpandChange={() => console.log('test')}

        />
    )
}



// <MaterialTable
//   // other props
//   detailPanel={[
//     {
//       tooltip: 'Show Name',
//       render: rowData => {
//         return (
//           <div
//             style={{
//               fontSize: 100,
//               textAlign: 'center',
//               color: 'white',
//               backgroundColor: '#43A047',
//             }}
//           >
//             {rowData.name}
//           </div>
//         )
//       },
//     },
//     {
//       icon: 'account_circle',
//       tooltip: 'Show Surname',
//       render: rowData => {
//         return (
//           <div
//             style={{
//               fontSize: 100,
//               textAlign: 'center',
//               color: 'white',
//               backgroundColor: '#E53935',
//             }}
//           >
//             {rowData.surname}
//           </div>
//         )
//       },
//     },
//     {
//       icon: 'favorite_border',
//       openIcon: 'favorite',
//       tooltip: 'Show Both',
//       render: rowData => {
//         return (
//           <div
//             style={{
//               fontSize: 100,
//               textAlign: 'center',
//               color: 'white',
//               backgroundColor: '#FDD835',
//             }}
//           >
//             {rowData.name} {rowData.surname}
//           </div>
//         )
//       },
//     },
//   ]}
// />