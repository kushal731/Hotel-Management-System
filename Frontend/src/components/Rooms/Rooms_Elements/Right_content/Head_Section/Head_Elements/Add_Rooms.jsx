const addRoomStyle = {
  padding: "8px 16px",
  backgroundColor: "#1C443C",
  color: "#fff",
  fontSize: "14px",
  fontWeight: 600,
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  transition: "background-color 0.3s ease"
};
const Add_Rooms = () => {
  return (
    <div>
      <button style={addRoomStyle}> + Add Room
      </button>
    </div>
  )
}

export default Add_Rooms
