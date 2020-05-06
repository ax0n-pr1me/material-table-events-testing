# Accessing onToggleDetailPanel

## Use Template from Material-Table Example

```
function DetailPanelWithRowClick() {
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
      detailPanel={rowData => {
        return (
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/C0DPdy98e4c"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
    />
  )
}
```

## Decouple Row Click and Icon Click events

```{js}
onRowClick={(event, rowData) => console.log(rowData)}
```

### Result:
clicking on row `consol.log()`s data and the icon still handles the `togglePanel()` function

## Use methods

I expected these methods to be accessible as neighbors to `onRowClick`
```{js}
onToggleDetailPanel={() => console.log('test')}
onTreeExpandChange={() => console.log('test')}
```

like this...
```{js}
function DetailPanelWithRowClick() {
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
      detailPanel={rowData => {
        return (
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/C0DPdy98e4c"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        )
      }}
      onRowClick={(event, rowData, togglePanel) => togglePanel()}
      onToggleDetailPanel={() => console.log('test toggle detail panel')}
      onTreeExpandChange={() => console.log('test tree expand change')}
    />
  )
}
```

### Result:
No console log messages.