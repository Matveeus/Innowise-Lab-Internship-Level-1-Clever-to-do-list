export const calendarContainerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  maxWidth: '800px',
  m: '0 auto',
  overflowX: 'auto',
  scrollSnapType: 'x mandatory',
  padding: '10px',
  border: '1px solid',
  borderColor: 'mainBorder',
  borderRadius: '10px',
};

export const calendarBoxStyles = {
  minWidth: 60,
  flexShrink: 0,
  textAlign: 'center',
  scrollSnapAlign: 'center',
  borderRadius: '10px',
  border: '1px solid',
  borderColor: 'dayBorder',
  cursor: 'pointer',
  '&:hover': {
    borderColor: 'primary.main',
  },
  '&:not(:last-child)': {
    marginRight: '4px',
  },
};
