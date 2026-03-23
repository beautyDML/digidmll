function SectionHeader({ title, onShowMore }) {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      gap: '16px',
      marginBottom: '20px'
    }}>
      <h2 style={{
        color: '#ffffff',
        fontSize: '24px',
        fontWeight: 'bold',
        letterSpacing: '1px'
      }}>
        {title}
      </h2>

      <span
        onClick={onShowMore}
        style={{
          color: '#aaaaaa',
          fontSize: '14px',
          cursor: 'pointer',
          textDecoration: 'underline'
        }}
      >
        Show more
      </span>
    </div>
  )
}

export default SectionHeader